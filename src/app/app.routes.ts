import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GwsComponent } from './pages/gws/gws.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PostureReviewComponent } from './pages/posture-review/posture-review.component';
import { CmsComponent } from './pages/cms/cms.component';

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
  {
    path: 'solucoes/cloud-services/posture-review',
    component: PostureReviewComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Posture Review (Segurança & Compliance)'
  },
  {
    path: 'solucoes/cloud-services/cloud-managed-services',
    component: CmsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Cloud Managed Services (CMS)'
  },
];
