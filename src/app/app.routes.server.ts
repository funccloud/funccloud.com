import { RenderMode, ServerRoute } from '@angular/ssr';

// Simula a obtenção dos slugs dos posts, como faria o BlogService.
// Em um cenário real, isso poderia envolver a leitura de um arquivo JSON
// ou outra fonte de dados acessível no momento do build.
const getBlogSlugs = (): string[] => {
  // Atualizado para incluir apenas os posts existentes.
  return ['google-cloud-next-2025', 'agentic-ai-desvendando-o-potencial'];
};

const blogPostPrerenderParamsFn = (): Promise<{ slug: string; }[]> => { // Função agora retorna Promise
  const slugs = getBlogSlugs();
  const params = slugs.map(slug => ({ slug }));
  // Retorna uma Promise que resolve para um array de objetos de parâmetros
  return Promise.resolve(params);
};

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: blogPostPrerenderParamsFn,
  },
  {
    path: '**', // Rota curinga deve vir por último
    renderMode: RenderMode.Prerender
  }
];
