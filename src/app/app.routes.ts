import { CanMatchFn, Routes } from '@angular/router';
import { caseStudies, sideProjects } from './data/portfolio.data';
import { Project } from './data/portfolio.models';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

// Unknown slugs fall through to the not-found route.
const slugIn =
  (projects: Project[]): CanMatchFn =>
  (_route, segments) =>
    projects.some((project) => project.slug === segments[1]?.path);

const loadDetailPage = () => import('./pages/case-study/case-study').then((m) => m.CaseStudyPage);

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  {
    path: 'work/:slug',
    canMatch: [slugIn(caseStudies)],
    loadComponent: loadDetailPage,
    data: { kind: 'work' },
  },
  {
    path: 'projects/:slug',
    canMatch: [slugIn(sideProjects)],
    loadComponent: loadDetailPage,
    data: { kind: 'projects' },
  },
  // Prerendered to /404, which the build publishes as 404.html for the host.
  { path: '404', component: NotFound },
  { path: '**', component: NotFound },
];
