import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map, of, catchError, shareReplay, filter } from 'rxjs';
import { postSlugs } from './post-slugs.generated'; // <<<--- 1. Importar a lista gerada

// Interface para os metadados (pode manter a mesma)
export interface PostMetadata {
  slug: string; // Vamos garantir que o slug (do nome do arquivo) esteja sempre presente
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string; // Optional field for banner image
  tags?: string[];
  [key: string]: any; // Permite outras propriedades no front matter
}

// Interface para o resultado do parsing
interface ParsedPost<T> {
  metadata: T;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private http = inject(HttpClient);

  // --- Lista de Slugs ---
  // Agora vem do arquivo gerado automaticamente
  private postSlugs: string[] = postSlugs; // <<<--- 2. Usar a lista importada
  // ----------------------

  // Cache para os posts parseados para evitar múltiplas requisições/parsing
  private parsedPostsCache = new Map<string, Observable<ParsedPost<PostMetadata>>>();

  /**
   * Busca e parseia um único post (Front Matter + Conteúdo).
   * Usa cache para evitar trabalho repetido.
   */
  private fetchAndParsePost(slug: string): Observable<ParsedPost<PostMetadata>> {
    if (!this.parsedPostsCache.has(slug)) {
      const postUrl = `assets/posts/${slug}.md`;
      const postObservable = this.http.get(postUrl, { responseType: 'text' }).pipe(
        map(markdownContent => this.parseMarkdown<PostMetadata>(slug, markdownContent)),
        catchError(error => {
          console.error(`Erro ao buscar ou parsear o post '${slug}':`, error);
          // Retorna um objeto indicando o erro para tratamento posterior
          return of({
            metadata: { slug, title: `Erro ao carregar ${slug}` } as PostMetadata,
            content: `Não foi possível carregar o conteúdo do post: ${slug}`
          });
        }),
        shareReplay(1) // Cacheia o último resultado emitido
      );
      this.parsedPostsCache.set(slug, postObservable);
    }
    return this.parsedPostsCache.get(slug)!;
  }

  /**
   * Parseia o conteúdo markdown para separar Front Matter e conteúdo principal.
   */
  private parseMarkdown<T extends { slug: string }>(slug: string, markdownContent: string): ParsedPost<T> {
    const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = markdownContent.match(frontMatterRegex);

    let metadata: T = { slug } as T; // Inicializa com o slug do nome do arquivo
    let content: string = markdownContent; // Conteúdo padrão é tudo, caso não haja front matter

    if (match && match[1]) {
      const frontMatterBlock = match[1].trim();
      content = markdownContent.slice(match[0].length).trim(); // Pega o conteúdo após o '---' final

      // Parse simples do Front Matter (formato chave: valor)
      try {
        const lines = frontMatterBlock.split('\n');
        lines.forEach(line => {
          const separatorIndex = line.indexOf(':');
          if (separatorIndex > 0) {
            const key = line.slice(0, separatorIndex).trim();
            let value = line.slice(separatorIndex + 1).trim();
            // Remove aspas simples ou duplas do início/fim do valor
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            // Trata valores numéricos e booleanos (opcional, mas útil)
            if (!isNaN(Number(value))) {
              (metadata as any)[key] = Number(value);
            } else if (value.toLowerCase() === 'true') {
              (metadata as any)[key] = true;
            } else if (value.toLowerCase() === 'false') {
              (metadata as any)[key] = false;
            } else {
              (metadata as any)[key] = value;
            }
          }
        });
        // Garante que o slug do nome do arquivo prevaleça sobre qualquer 'slug:' no front matter
        metadata.slug = slug;

        // Normaliza o campo tags para garantir que seja sempre um array
        if ('tags' in metadata) {
          if (typeof metadata.tags === 'string') {
            metadata.tags = metadata.tags
              .replace(/\[|\]/g, '') // Remove colchetes
              .split(',') // Divide em um array
              .map(tag => tag.trim().replace(/^"|"$/g, '')); // Remove aspas e espaços extras
          } else if (!Array.isArray(metadata.tags)) {
            metadata.tags = []; // Garante que seja um array vazio se não for string ou array
          }
        }
      } catch (e) {
        console.error(`Erro ao parsear front matter do post '${slug}':`, e);
        // Mantém metadados mínimos (apenas slug) e retorna conteúdo completo em caso de erro no parse
        content = markdownContent;
        metadata = { slug } as T;
      }
    } else {
      console.warn(`Front matter não encontrado no post '${slug}'. Usando metadados padrão.`);
      // Se não houver front matter, metadata terá apenas o slug
    }

    return { metadata, content };
  }

  /**
   * Busca os metadados de TODOS os posts definidos em postSlugs.
   */
  getPostsMetadata(): Observable<PostMetadata[]> {
    // Cria um array de Observables, um para cada post
    const allMetadataObservables = this.postSlugs.map(slug =>
      this.fetchAndParsePost(slug).pipe(
        map(parsedPost => parsedPost.metadata), // Pega apenas os metadados
        // Filtra posts que podem ter falhado no carregamento (ex: sem título ou com título de erro)
        filter(metadata => !!metadata.title && !metadata.title.startsWith('Erro ao carregar'))
      )
    );

    // Usa forkJoin para esperar que todos os metadados sejam buscados e parseados
    return forkJoin(allMetadataObservables).pipe(
      map(metadataArray =>
        // Ordena os posts pela data (mais recentes primeiro)
        // Adiciona verificação para garantir que 'date' existe antes de comparar
        metadataArray.sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateB - dateA;
        })
      ),
      catchError(error => {
        console.error("Erro ao buscar metadados de todos os posts:", error);
        return of([]); // Retorna array vazio em caso de erro geral
      })
    );
  }

  /**
   * Fetches the 3 most recent posts based on the `date` field.
   */
  getRecentPosts(limit: number = 3): Observable<PostMetadata[]> {
    return this.getPostsMetadata().pipe(
      map(posts => posts.slice(0, limit)) // Take the top `limit` posts
    );
  }

  /**
   * Busca o conteúdo Markdown (sem front matter) de um post específico.
   */
  getPostContent(slug: string): Observable<string> {
    return this.fetchAndParsePost(slug).pipe(
      map(parsedPost => parsedPost.content) // Retorna apenas o conteúdo
    );
  }

  /**
   * Busca os metadados de um post específico pelo slug.
   */
  getPostMetadataBySlug(slug: string): Observable<PostMetadata | undefined> {
    return this.fetchAndParsePost(slug).pipe(
      map(parsedPost => {
        // Retorna metadados apenas se forem válidos (ex: tem título e não é erro)
        if (parsedPost.metadata.title && !parsedPost.metadata.title.startsWith('Erro ao carregar')) {
          return parsedPost.metadata;
        }
        return undefined;
      }),
       catchError(error => {
          console.error(`Erro ao buscar metadados para o slug '${slug}':`, error);
          return of(undefined); // Retorna undefined em caso de erro
       })
    );
  }
}
