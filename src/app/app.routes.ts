import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GwsComponent } from './pages/gws/gws.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem'
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Contato'
  },
  {
    path: 'solucoes/produtividade-colaboracao/google-workspace',
    component: GwsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Google Workspace'
  },
];
