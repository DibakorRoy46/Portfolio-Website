import { DecimalPipe } from '@angular/common';
import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/seo';
import { caseStudies, profile, sideProjects } from '../../data/portfolio.data';
import { ArchitectureDiagram } from '../../shared/architecture-diagram';
import { Spotlight } from '../../shared/spotlight';

/** Detail page for a client case study (/work/:slug) or a personal project (/projects/:slug). */
@Component({
  selector: 'app-case-study',
  imports: [RouterLink, DecimalPipe, ArchitectureDiagram, Spotlight],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudyPage {
  /** Bound from the route; the route only matches slugs that exist. */
  readonly slug = input.required<string>();
  /** Bound from route data. It is also the URL segment and the home section id. */
  readonly kind = input.required<'work' | 'projects'>();

  private readonly list = computed(() => (this.kind() === 'work' ? caseStudies : sideProjects));

  protected readonly project = computed(() =>
    this.list().find((project) => project.slug === this.slug())!,
  );
  protected readonly next = computed(() => this.neighbour(1));
  protected readonly previous = computed(() => this.neighbour(-1));
  protected readonly backLabel = computed(() =>
    this.kind() === 'work' ? 'All work' : 'All projects',
  );

  private neighbour(offset: number) {
    const list = this.list();
    return list[(list.indexOf(this.project()) + offset + list.length) % list.length];
  }

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const project = this.project();
      seo.set(`${project.title} — ${profile.name}`, project.summary);
    });
  }
}
