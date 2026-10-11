import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sideProjects } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, SlicePipe, Reveal],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Personal &amp; open source</h2>
        </div>
        <p class="section-intro">
          Where I try ideas before they reach client work: libraries, reference architectures and
          full-stack builds.
        </p>

        <ul class="grid">
          @for (project of projects; track project.slug) {
            <li class="card" appReveal>
              <div class="card-head">
                <p class="eyebrow">{{ project.context }}</p>
                @if (project.inProgress) {
                  <span class="status">In progress</span>
                }
              </div>
              <h3>
                <a [routerLink]="['/projects', project.slug]">{{ project.title }}</a>
              </h3>
              <p class="summary">{{ project.summary }}</p>
              <ul class="bullets">
                @for (item of project.contributions | slice: 0 : 3; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
              <ul class="tags" aria-label="Technologies">
                @for (tech of project.stack; track tech) {
                  <li>{{ tech }}</li>
                }
              </ul>
              <div class="links">
                <a class="text-link" [routerLink]="['/projects', project.slug]">
                  Read more <span aria-hidden="true">→</span>
                </a>
                @if (project.repo) {
                  <a class="text-link" [href]="project.repo" target="_blank" rel="noopener">
                    Source on GitHub <span aria-hidden="true">↗</span>
                  </a>
                }
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: clamp(1.4rem, 3vw, 2rem);
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      transition:
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    h3 {
      margin-top: -0.4rem;
      font-family: var(--font-serif);
      font-weight: 400;
      font-size: 1.9rem;
      line-height: 1.1;

      a {
        transition: color 0.2s ease;
      }

      a:hover {
        color: var(--accent);
      }
    }

    .status {
      flex-shrink: 0;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      padding: 0.2rem 0.6rem;
      border: 1px solid var(--accent);
      border-radius: 999px;
      color: var(--accent);
    }

    .summary {
      color: var(--text-muted);
    }

    .bullets {
      font-size: 0.95rem;
    }

    .tags {
      margin-top: auto;
      padding-top: 0.25rem;
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.5rem;
      font-size: 0.92rem;
    }

    @media (max-width: 820px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ProjectsSection {
  protected readonly projects = sideProjects;
}
