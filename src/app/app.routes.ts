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
import { BackupComponent } from './pages/backup/backup.component';
import { DevopsComponent } from './pages/devops/devops.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CaseSienaMigracaoComponent } from './pages/case-siena-migracao/case-siena-migracao.component';
import { CertificacoesComponent } from './pages/certificacoes/certificacoes.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { SapComponent } from './pages/sap/sap.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem',
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Contato',
  },
  {
    path: 'solucoes/produtividade-colaboracao/google-workspace',
    component: GwsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Google Workspace',
  },
  {
    path: 'solucoes/cloud-services/posture-review',
    component: PostureReviewComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Posture Review (Segurança & Compliance)',
  },
  {
    path: 'solucoes/cloud-services/cloud-managed-services',
    component: CmsComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Cloud Managed Services (CMS)',
  },
  {
    path: 'solucoes/cloud-services/ia-ml',
    component: AiComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | IA & ML',
  },
  {
    path: 'solucoes/cloud-services/suporte-monitoramento',
    component: SuporteComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Suporte & Monitoramento',
  },
  {
    path: 'solucoes/cloud-services/modernizacao-infra',
    component: ModernizacaoInfraComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Modernização de Infra',
  },
  {
    path: 'solucoes/cloud-services/data-analytics',
    component: DataAnalyticsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Data & Analytics',
  },
  {
    path: 'solucoes/cloud-services/migracao',
    component: MigrationComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Migração',
  },
  {
    path: 'solucoes/cloud-services/finops',
    component: FinopsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Finops',
  },
  {
    path: 'solucoes/cloud-services/backup-dr',
    component: BackupComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Backup & DR',
  },
  {
    path: 'solucoes/cloud-services/devops-sre',
    component: DevopsComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Devops & SRE',
  },
  {
    path: 'solucoes/cloud-services/sap',
    component: SapComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Migração para o SAP S/4HANA',
  },
  {
    path: 'cases-de-sucesso',
    component: CaseStudiesComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Cases de Sucesso',
  },
  {
    path: 'cases-de-sucesso/siena-migracao-google',
    component: CaseSienaMigracaoComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Cases de Sucesso - Siena Migracao Google',
  },
  {
    path: 'certificacoes',
    component: CertificacoesComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Certificações',
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Sobre Nós',
  },
  {
    path: 'blog',
    component: BlogListComponent,
    title: 'FuncCloud - Facilitamos a Inovação na Nuvem | Blog',
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    title:
      'FuncCloud - Facilitamos a Inovação na Nuvem | Página não encontrada',
  },
];
