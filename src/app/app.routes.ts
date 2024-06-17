import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GwsComponent } from './pages/gws/gws.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PostureReviewComponent } from './pages/posture-review/posture-review.component';
import { CmsComponent } from './pages/cms/cms.component';
import { AiComponent } from './pages/ai/ai.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { ModernizacaoInfraComponent } from './pages/modernizacao-infra/modernizacao-infra.component';
import { DataAnalyticsComponent } from './pages/data-analytics/data-analytics.component';
import { MigrationComponent } from './pages/migration/migration.component';
import { FinopsComponent } from './pages/finops/finops.component';

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
  {
    path: 'solucoes/cloud-services/ia-ml',
    component: AiComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | IA & ML'
  },
  {
    path: 'solucoes/cloud-services/suporte-monitoramento',
    component: SuporteComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Suporte & Monitoramento'
  },
  {
    path: 'solucoes/cloud-services/modernizacao-infra',
    component: ModernizacaoInfraComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Modernização de Infra'
  },
  {
    path: 'solucoes/cloud-services/data-analytics',
    component: DataAnalyticsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Data & Analytics'
  },
  {
    path: 'solucoes/cloud-services/migracao',
    component: MigrationComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Migração'
  },
  {
    path: 'solucoes/cloud-services/finops',
    component: FinopsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Finops'
  },
];
