import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServicesComponent } from './services/services';
import { BlogComponent } from './blog/blog';
import { BlogPostComponent } from './blog-post/blog-post';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Funccloud - Home' },
  { path: 'servicos', component: ServicesComponent, title: 'Funccloud - Serviços' },
  { path: 'blog', component: BlogComponent, title: 'Funccloud - Blog' },
  { path: 'blog/:slug', component: BlogPostComponent, title: 'Funccloud - Post' }, // Title será atualizado dinamicamente no componente
  { path: '404', component: NotFoundComponent, title: 'Funccloud - Página Não Encontrada' },
  { path: '**', redirectTo: '/404' } // Rota curinga para qualquer caminho não encontrado
];
