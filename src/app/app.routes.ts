import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GwsComponent } from './pages/gws/gws.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem'
  },
  {
    path: 'solucoes/produtividade-colaboracao/google-workspace',
    component: GwsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Google Workspace'
  },
];
