import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  content?: string; // Conteúdo HTML processado
  markdownContent?: string; // Conteúdo Markdown original
  date?: string;
  excerpt?: string;
  author?: string; // Adicionado autor
  image?: string; // Adicionada imagem de capa
  tags?: string[]; // Adicionadas tags
}

@Injectable({
  providedIn: 'root'
})
export class BlogService { // Nome da classe alterado para BlogService
  private postsUrl = 'assets/posts/'; // Caminho para os posts Markdown

  // Simulação de uma lista de posts (poderia vir de um arquivo de índice JSON)
  private postMetadatas: Post[] = [
    { slug: 'google-cloud-next-2025', title: 'Google Cloud Next 2025: Inovações e Expertise para sua Empresa', date: '2025-04-15', excerpt: 'O Google Cloud Next 2025 na visão do nosso CEO.', author: 'Felipe Oliveira', image: 'assets/images/blog/next25.jpg', tags: ["Next 25", "Google Cloud", "Google Workspace", "IA"] },
    { slug: 'agentic-ai-desvendando-o-potencial', title: 'Agentic AI: Desvendando o Potencial da Inteligência Autônoma para Empresas', date: '2025-04-23', excerpt: 'O que exatamente é a Agentic AI e como ela pode revolucionar os negócios?.', author: 'Felipe Oliveira', image: 'assets/images/blog/ia.jpg', tags: ["IA"] }
  ];

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    // Em um cenário real, você poderia buscar um posts.json que lista todos os posts
    // Por agora, retornamos a lista simulada
    return of(this.postMetadatas);
  }

  getPostBySlug(slug: string): Observable<Post | undefined> {
    const postMetadata = this.postMetadatas.find(p => p.slug === slug);
    if (!postMetadata) {
      return of(undefined);
    }

    return this.http.get(`${this.postsUrl}${slug}.md`, { responseType: 'text' })
      .pipe(
        map(markdownContent => {
          const content = marked(markdownContent) as string;
          return { ...postMetadata, markdownContent, content };
        }),
        catchError(error => {
          console.error(`Erro ao carregar o post ${slug}:`, error);
          return of({ ...postMetadata, content: '<p>Erro ao carregar o conteúdo do post.</p>' });
        })
      );
  }
}
