import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';

@Component({
  selector: 'app-work',
  imports: [RouterLink, DecimalPipe, Reveal],
  template: `
    <section id="work" class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Selected work</h2>
        </div>
        <p class="section-intro">
          Client systems in production, each with the problem, what I built and how it works.
        </p>

        <ol class="work-list">
          @for (study of studies; track study.slug; let i = $index) {
            <li appReveal>
              <a class="work-row" [routerLink]="['/work', study.slug]">
                <span class="num" aria-hidden="true">{{ i + 1 | number: '2.0' }}</span>
                <div class="body">
                  <p class="eyebrow">{{ study.context }}</p>
                  <h3>{{ study.title }}</h3>
                  <p class="summary">{{ study.summary }}</p>
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
                  <span class="more">Case study <span aria-hidden="true">→</span></span>
                </div>
              </a>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .work-list > li {
      border-top: 1px solid var(--line);
    }

    .work-list > li:last-child {
      border-bottom: 1px solid var(--line);
    }

    .work-row {
      display: grid;
      grid-template-columns: 4rem 1fr 13rem;
      align-items: start;
      gap: 1.5rem;
      margin-inline: -1.25rem;
      padding: clamp(1.75rem, 4vw, 2.5rem) 1.25rem;
      border-radius: var(--radius);
      transition: background-color 0.25s ease;
    }

    .num {
      padding-top: 0.15rem;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    h3 {
      margin-top: 0.5rem;
      font-family: var(--font-serif);
      font-weight: 400;
      font-size: clamp(1.75rem, 3.6vw, 2.6rem);
      line-height: 1.1;
      transition: color 0.2s ease;
    }

    .summary {
      max-width: 44rem;
      margin-block: 0.75rem 1.1rem;
      color: var(--text-muted);
    }

    .aside {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1.25rem;
      height: 100%;
      text-align: right;
    }

    .metric {
      display: grid;
      gap: 0.3rem;
    }

    .metric-value {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1;
      color: var(--accent);
    }

    .metric-label {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    .more {
      margin-top: auto;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--text-muted);
      transition: color 0.2s ease;

      span {
        display: inline-block;
        transition: transform 0.25s ease;
      }
    }

    .work-row:hover {
      background: var(--accent-soft);

      h3,
      .more {
        color: var(--accent);
      }

      .more span {
        transform: translateX(5px);
      }
    }

    @media (max-width: 860px) {
      .work-row {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }

      .num {
        display: none;
      }

      .aside {
        flex-direction: row;
        align-items: flex-end;
        text-align: left;
      }
    }
  `,
})
export class WorkSection {
  protected readonly studies = caseStudies;
}
