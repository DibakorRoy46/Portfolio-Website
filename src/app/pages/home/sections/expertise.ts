import { Component } from '@angular/core';
import { expertise } from '../../../data/portfolio.data';
import { ExpertiseIcon } from '../../../data/portfolio.models';
import { Reveal } from '../../../shared/reveal';

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
  imports: [Reveal],
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

        <ul class="grid">
          @for (area of areas; track area.title) {
            <li class="area" appReveal>
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  @for (d of icons[area.icon]; track d) {
                    <path [attr.d]="d" />
                  }
                </svg>
              </span>
              <h3>{{ area.title }}</h3>
              <p>{{ area.description }}</p>
              <ul class="tags" aria-label="Tools">
                @for (tool of area.tools; track tool) {
                  <li>{{ tool }}</li>
                }
              </ul>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    .area {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      padding: clamp(1.4rem, 3vw, 2rem);
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      transition:
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .area:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
    }

    .icon {
      display: grid;
      place-items: center;
      width: 2.75rem;
      height: 2.75rem;
      margin-bottom: 0.4rem;
      background: var(--accent-soft);
      border-radius: 12px;
      color: var(--accent);
    }

    svg path {
      fill: none;
      stroke: currentColor;
      stroke-width: 1.6;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    h3 {
      font-family: var(--font-serif);
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.15;
    }

    p {
      color: var(--text-muted);
    }

    .tags {
      margin-top: auto;
      padding-top: 0.5rem;
    }

    @media (max-width: 960px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ExpertiseSection {
  protected readonly areas = expertise;
  protected readonly icons = ICONS;
}
