import { RenderMode, ServerRoute } from '@angular/ssr';
import { caseStudies, sideProjects } from './data/portfolio.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'work/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => caseStudies.map((project) => ({ slug: project.slug })),
  },
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => sideProjects.map((project) => ({ slug: project.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
