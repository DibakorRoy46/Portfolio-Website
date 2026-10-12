import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { expertise } from '../../../data/portfolio.data';
import { ExpertiseIcon } from '../../../data/portfolio.models';
import { Reveal } from '../../../shared/reveal';
import { Spotlight } from '../../../shared/spotlight';

// 24×24 stroke icons, one or more path commands each.
const ICONS: Record<ExpertiseIcon, string[]> = {
  integration: [
    'M5 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    'M19 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    'M8 12h8',
  ],
  distributed: [
    'M12 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    'M5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    'M19 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    'M10.8 7.7 6.3 16.2M13.2 7.7l4.5 8.5M7.5 18.5h9',
  ],
  performance: ['M13 2 4 14h7l-1 8 9-12h-7l1-8z'],
  fullstack: ['M12 3 3 8l9 5 9-5-9-5z', 'M3 12l9 5 9-5', 'M3 16l9 5 9-5'],
  cloud: ['M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5H7z'],
  leadership: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4 21a8 8 0 0 1 16 0'],
};

@Component({
  selector: 'app-expertise',
  imports: [RouterLink, Reveal, Spotlight],
  template: `
    <section id="expertise" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">What I do</h2>
        </div>
        <p class="section-intro">
          Six areas I work in every week, from the first integration contract to the production
          pipeline.
        </p>

        <ul class="bento">
          @for (area of areas; track area.title) {
            <li class="area" appReveal appSpotlight>
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  @for (d of icons[area.icon]; track d) {
                    <path [attr.d]="d" />
                  }
                </svg>
              </span>
              <div class="copy">
                <h3>{{ area.title }}</h3>
                <p>{{ area.description }}</p>
              </div>
              <ul class="tags" aria-label="Tools">
                @for (tool of area.tools; track tool) {
                  <li>{{ tool }}</li>
                }
              </ul>
              <div class="proof">
                <p>
                  <span class="proof-value gradient-text">{{ area.proof.value }}</span>
                  <span class="proof-label">{{ area.proof.label }}</span>
                </p>
                @if (area.related; as related) {
                  <a class="text-link" [routerLink]="related.path">
                    {{ related.label }} <span aria-hidden="true">→</span>
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
    // Bento layout on a six-column grid: a row of two, a row of three,
    // and a full-width closing card.
    .bento {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }

    .area {
      grid-column: span 2;
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

    .area:hover {
      border-color: var(--line-strong);
      transform: translateY(-4px);
    }

    .area:nth-child(-n + 2) {
      grid-column: span 3;
    }

    .area:nth-child(6) {
      grid-column: span 6;
    }

    .icon {
      display: grid;
      place-items: center;
      width: 2.9rem;
      height: 2.9rem;
      flex-shrink: 0;
      background: var(--gradient);
      border-radius: 14px;
      color: var(--accent-contrast);
    }

    svg path {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.7;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .copy {
      display: grid;
      gap: 0.6rem;
    }

    h3 {
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      font-size: 1.3rem;
      line-height: 1.2;
      letter-spacing: -0.025em;
    }

    .area:nth-child(-n + 2) h3 {
      font-size: clamp(1.4rem, 2.2vw, 1.7rem);
    }

    p {
      color: var(--text-muted);
    }

    .tags {
      margin-top: auto;
      padding-top: 0.5rem;
    }

    .proof {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 0.6rem 1.25rem;
      padding-top: 1rem;
      border-top: 1px solid var(--line);
      font-size: 0.88rem;

      p {
        display: grid;
        gap: 0.2rem;
      }
    }

    .proof-value {
      width: fit-content;
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      font-size: 1.5rem;
      line-height: 1.1;
      letter-spacing: var(--display-tracking);
    }

    .proof-label {
      color: var(--text-muted);
    }

    // The closing card runs left to right: icon, copy, tools.
    @media (min-width: 961px) {
      .area:nth-child(6) {
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;

        .copy {
          flex: 1;
        }

        .tags {
          flex: 0 0 15rem;
          margin-top: 0;
          padding-top: 0;
        }

        .proof {
          flex: 0 0 13rem;
          padding: 0 0 0 1.5rem;
          border-top: 0;
          border-left: 1px solid var(--line);
        }
      }
    }

    @media (max-width: 960px) {
      .bento {
        grid-template-columns: repeat(2, 1fr);
      }

      .area,
      .area:nth-child(-n + 2) {
        grid-column: span 1;
      }

      .area:nth-child(6) {
        grid-column: span 2;
      }
    }

    @media (max-width: 640px) {
      .bento {
        grid-template-columns: 1fr;
      }

      .area:nth-child(n) {
        grid-column: span 1;
      }
    }
  `,
})
export class ExpertiseSection {
  protected readonly areas = expertise;
  protected readonly icons = ICONS;
}
