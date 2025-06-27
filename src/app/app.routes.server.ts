import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';
import { postSlugs } from './services/post-slugs.generated';

const serverRoutes: ServerRoute[] = routes
  .filter((route) => route.path !== '**')
  .map((route) => {
    if (route.path === 'blog/:slug') {
      return {
        path: route.path,
        renderMode: RenderMode.Prerender,
        status: 200,
        getPrerenderParams() {
          return postSlugs.map((slug) => ({ slug })); // Format for prerendering
        },
      };
    }
    return {
      path: route.path!,
      renderMode: RenderMode.Prerender,
      status: 200,
    };
  });

serverRoutes.push({
  path: '**',
  renderMode: RenderMode.Server,
  status: 404,
});

export { serverRoutes };
