import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GwsComponent } from './pages/gws/gws.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Funccloud Soluções Tecnológicas'
  },
  {
    path: 'solucoes/produtividade-colaboracao/google-workspace',
    component: GwsComponent,
    title: 'Funccloud Soluções Tecnológicas | Google Workspace'
  },
];
