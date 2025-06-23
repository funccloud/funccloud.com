import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService, Post } from '../blog.service';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss'
})
export class BlogPostComponent implements OnInit, OnDestroy { // Nome do componente alterado para BlogPostComponent
  post$: Observable<Post | undefined> = of(undefined); // Inicializado
  postContent: SafeHtml | undefined;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);
  private titleService = inject(Title);

  private postSubscription: Subscription | undefined;

  // Usaremos o input binding do roteador (configurado em app.config.ts)
  @Input() slug?: string;

  ngOnInit(): void {
    if (this.slug) {
      this.post$ = this.blogService.getPostBySlug(this.slug).pipe(
        tap(post => {
          if (post && post.content) {
            this.postContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
            this.titleService.setTitle(`Funccloud - ${post.title}`);
          } else if (!post) {
            this.router.navigate(['/404']);
          }
        })
      );
      // A subscrição será feita no template com o pipe async,
      // mas podemos precisar de uma subscrição manual para lógica complexa se necessário.
      // Por ora, o tap acima lida com a atualização do título e sanitização.
    } else {
      // Se não houver slug, redirecionar ou mostrar erro
      this.post$ = of(undefined); // Emite undefined para o template tratar
      this.router.navigate(['/404']);
    }
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
