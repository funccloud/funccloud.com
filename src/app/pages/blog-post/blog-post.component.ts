import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core'; // Importar ChangeDetectionStrategy
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService, PostMetadata } from '../../services/blog.service';
import { Observable, switchMap, tap, catchError, EMPTY, of, forkJoin, map, shareReplay } from 'rxjs'; // Importar forkJoin e map
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown'; // MarkdownService não estava sendo usado, removido do import
import { Title } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';

// Interface para agrupar os dados do post
interface PostData {
  metadata: PostMetadata;
  content: string;
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule,
    RouterLink,
    BaseComponent
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // Adicionar estratégia OnPush
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);
  private titleService = inject(Title);

  // Único observable para os dados combinados do post
  // Emitirá PostData em caso de sucesso, ou null em caso de erro/não encontrado
  postData$: Observable<PostData | null> = EMPTY;

  ngOnInit(): void {
    this.postData$ = this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug');
        if (!slug) {
          // Se não houver slug, navega imediatamente e encerra o fluxo
          this.router.navigate(['/not-found']);
          return EMPTY;
        }

        // Usa forkJoin para buscar metadados e conteúdo em paralelo
        return forkJoin({
          metadata: this.blogService.getPostMetadataBySlug(slug),
          content: this.blogService.getPostContent(slug)
        }).pipe(
          map(({ metadata, content }) => {
            // Verifica se os metadados foram encontrados pelo serviço
            if (!metadata) {
              // Lança um erro para ser pego pelo catchError
              console.warn(`Metadados não encontrados para o slug: ${slug}`);
              throw new Error('Metadata not found');
            }
            // Verifica se o conteúdo indica um erro de carregamento (conforme lógica do BlogService)
            if (content.startsWith('Não foi possível carregar')) {
                 console.warn(`Conteúdo não encontrado para o slug: ${slug}`);
                 throw new Error('Content not found');
            }

            // Define o título da página APÓS confirmar que os metadados são válidos
            this.titleService.setTitle(`FuncCloud Blog - ${metadata.title}`);

            // Retorna o objeto combinado
            return { metadata, content };
          }),
          catchError(error => {
            // Centraliza o tratamento de erro (falha na busca, metadados/conteúdo não encontrados)
            console.error(`Erro ao carregar dados do post para o slug '${slug}':`, error);
            this.router.navigate(['/not-found']); // Navega para 404 em caso de qualquer erro
            return of(null); // Emite null para indicar ao template que houve um erro
          })
        );
      }),
      // shareReplay(1) // Opcional: Pode ser útil se o template tiver múltiplas assinaturas async
    );
  }
}
