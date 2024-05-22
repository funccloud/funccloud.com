import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GwsComponent } from './pages/gws/gws.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'solucoes/produtividade-colaboracao/google-workspace', component: GwsComponent },
];
