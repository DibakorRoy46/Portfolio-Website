import { DecimalPipe, SlicePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies } from '../../../data/portfolio.data';
import { Project } from '../../../data/portfolio.models';
import { Reveal } from '../../../shared/reveal';

/** A filter chip: an employer, or a technology matched against each project's stack. */
interface Filter {
  kind: 'company' | 'tech';
  name: string;
  count: number;
}

const TECH_NAMES = ['Angular', 'SQL Server', 'SAP', 'RabbitMQ', 'Hangfire', 'Redis', 'Azure'];

const matches = (project: Project, filter: Filter) =>
  filter.kind === 'company'
    ? project.company === filter.name
    : project.stack.some((item) => item.includes(filter.name));

@Component({
  selector: 'app-work',
  imports: [RouterLink, DecimalPipe, SlicePipe, Reveal],
  template: `
    <section id="work" class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Selected work</h2>
        </div>
        <p class="section-intro">
          Systems in production at two companies, each with the problem, what I built and how it
          works.
        </p>

        <div class="filters" role="group" aria-label="Filter projects by company or technology">
          <button
            type="button"
            class="chip"
            [class.is-on]="filter() === null"
            [attr.aria-pressed]="filter() === null"
            (click)="filter.set(null)"
          >
            All <span>{{ studies.length }}</span>
          </button>
          @for (option of filters; track option.name) {
            <button
              type="button"
              class="chip"
              [class.chip--tech]="option.kind === 'tech'"
              [class.is-on]="filter() === option"
              [attr.aria-pressed]="filter() === option"
              (click)="filter.set(option)"
            >
              {{ option.name }} <span>{{ option.count }}</span>
            </button>
          }
        </div>

        <ol class="work-list">
          @for (study of visible(); track study.slug; let i = $index) {
            <li appReveal>
              <a class="work-row" [routerLink]="['/work', study.slug]">
                <span class="num" aria-hidden="true">{{ i + 1 | number: '2.0' }}</span>
                <div class="body">
                  <p class="eyebrow">
                    {{ study.context }}
                    @if (study.company) {
                      <span class="company">{{ study.company }}</span>
                    }
                  </p>
                  <h3 [style.view-transition-name]="'title-' + study.slug">{{ study.title }}</h3>
                  <p class="summary">{{ study.summary }}</p>
                  <ul class="points">
                    @for (point of study.contributions | slice: 1 : 3; track point) {
                      <li>{{ point }}</li>
                    }
                  </ul>
                  <ul class="tags" aria-label="Technologies">
                    @for (tech of study.stack; track tech) {
                      <li>{{ tech }}</li>
                    }
                  </ul>
                </div>
                <div class="aside">
                  @if (study.metrics[0]; as metric) {
                    <p class="metric">
                      <span class="metric-value">{{ metric.value }}</span>
                      <span class="metric-label">{{ metric.label }}</span>
                    </p>
                  }
                  <p class="role">
                    <span class="eyebrow">Role</span>
                    {{ study.role }}
                  </p>
                  <span class="more">Read the case study <span aria-hidden="true">→</span></span>
                </div>
              </a>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.75rem;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.5rem 0.4rem 0.9rem;
      background: var(--bg-elev);
      border: 1px solid var(--line-strong);
      border-radius: 999px;
      font-size: 0.88rem;
      font-weight: 500;
      cursor: pointer;
      transition:
        border-color 0.2s ease,
        color 0.2s ease,
        background-color 0.2s ease;

      span {
        display: grid;
        place-items: center;
        min-width: 1.45rem;
        height: 1.45rem;
        padding-inline: 0.3rem;
        background: var(--bg);
        border-radius: 999px;
        font-family: var(--font-mono);
        font-size: 0.7rem;
        font-weight: 400;
      }

      &:hover {
        border-color: var(--text);
      }

      &.is-on {
        background: var(--gradient);
        border-color: transparent;
        color: var(--accent-contrast);
        font-weight: 600;

        span {
          background: rgb(0 0 0 / 0.18);
          color: inherit;
        }
      }
    }

    // Technology chips are quieter than the company ones.
    .chip--tech:not(.is-on) {
      border-color: var(--line);
      font-weight: 400;
      color: var(--text-muted);

      &:hover {
        border-color: var(--line-strong);
        color: var(--text);
      }
    }

    .work-list {
      display: grid;
      gap: 1rem;
    }

    .work-row {
      display: grid;
      grid-template-columns: 3rem 1fr 15rem;
      align-items: start;
      gap: 1.5rem;
      padding: clamp(1.5rem, 3vw, 2.25rem);
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      transition:
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .num {
      padding-top: 0.15rem;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .eyebrow {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.4rem 0.75rem;
    }

    .company {
      padding: 0.1rem 0.55rem;
      border: 1px solid var(--line-strong);
      border-radius: 999px;
      font-size: 0.68rem;
      letter-spacing: 0.04em;
    }

    h3 {
      width: fit-content;
      margin-top: 0.5rem;
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      font-size: clamp(1.5rem, 2.8vw, 2.1rem);
      line-height: 1.1;
      letter-spacing: var(--display-tracking);
      transition: color 0.2s ease;
    }

    .summary {
      max-width: 44rem;
      margin-top: 0.75rem;
      font-size: 1.05rem;
    }

    .points {
      display: grid;
      gap: 0.35rem;
      max-width: 44rem;
      margin-block: 0.9rem 1.2rem;
      font-size: 0.95rem;
      color: var(--text-muted);

      li {
        position: relative;
        padding-left: 1.1rem;
      }

      li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.65em;
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 50%;
        background: var(--gradient);
      }
    }

    .aside {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      height: 100%;
      padding-left: 1.5rem;
      border-left: 1px solid var(--line);
    }

    .metric {
      display: grid;
      gap: 0.3rem;
    }

    .metric-value {
      width: fit-content;
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      font-size: clamp(1.75rem, 3.2vw, 2.5rem);
      line-height: 1;
      letter-spacing: var(--display-tracking);
      background: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .metric-label {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    .role {
      display: grid;
      gap: 0.3rem;
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    .more {
      margin-top: auto;
      font-size: 0.88rem;
      font-weight: 500;
      transition: color 0.2s ease;

      span {
        display: inline-block;
        transition: transform 0.25s ease;
      }
    }

    .work-row:hover {
      border-color: var(--line-strong);
      transform: translateY(-3px);

      h3,
      .more {
        color: var(--accent);
      }

      .more span {
        transform: translateX(5px);
      }
    }

    @media (max-width: 900px) {
      .work-row {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }

      .num {
        display: none;
      }

      .aside {
        padding: 1.25rem 0 0;
        border-left: 0;
        border-top: 1px solid var(--line);
      }
    }
  `,
})
export class WorkSection {
  protected readonly studies = caseStudies;

  protected readonly filters: Filter[] = [
    ...[...new Set(caseStudies.flatMap((study) => (study.company ? [study.company] : [])))].map(
      (name): Filter => ({ kind: 'company', name, count: 0 }),
    ),
    ...TECH_NAMES.map((name): Filter => ({ kind: 'tech', name, count: 0 })),
  ]
    .map((filter) => ({
      ...filter,
      count: caseStudies.filter((study) => matches(study, filter)).length,
    }))
    .filter((filter) => filter.count > 1);

  /** The active chip, or null for every project. */
  protected readonly filter = signal<Filter | null>(null);

  protected readonly visible = computed(() => {
    const filter = this.filter();
    return filter ? caseStudies.filter((study) => matches(study, filter)) : caseStudies;
  });
}
