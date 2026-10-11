import { Component } from '@angular/core';
import { experience } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  template: `
    <section id="experience" class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Experience</h2>
        </div>

        <div class="timeline">
          @for (role of roles; track role.company) {
            <article class="role" appReveal>
              <div class="meta">
                <p class="eyebrow">{{ role.period }}</p>
                <p class="company">{{ role.company }}</p>
                <p class="muted">{{ role.location }}</p>
                <ul class="tags" aria-label="Technologies">
                  @for (tech of role.stack; track tech) {
                    <li>{{ tech }}</li>
                  }
                </ul>
              </div>

              <div class="body">
                <h3>{{ role.title }}</h3>
                <p class="summary">{{ role.summary }}</p>

                <dl class="impact">
                  @for (stat of role.impact; track stat.label) {
                    <div>
                      <dt>{{ stat.label }}</dt>
                      <dd>{{ stat.value }}</dd>
                    </div>
                  }
                </dl>

                <ul class="bullets">
                  @for (item of role.highlights; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .role {
      display: grid;
      grid-template-columns: 17rem 1fr;
      gap: 1.5rem 3rem;
    }

    .company {
      margin-top: 0.6rem;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .tags {
      margin-top: 1.25rem;
    }

    // The right column carries the timeline rail and its marker.
    .body {
      position: relative;
      padding-left: 2.5rem;
      padding-bottom: clamp(2.5rem, 6vw, 4rem);
      border-left: 1px solid var(--line-strong);
    }

    .role:last-child .body {
      padding-bottom: 0;
    }

    .body::before {
      content: '';
      position: absolute;
      left: -0.4rem;
      top: 0.6rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 5px var(--accent-soft);
    }

    h3 {
      font-family: var(--font-serif);
      font-weight: 400;
      font-size: clamp(1.75rem, 3.2vw, 2.4rem);
      line-height: 1.1;
    }

    .summary {
      max-width: 46rem;
      margin-top: 0.75rem;
      font-size: 1.08rem;
    }

    .impact {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      max-width: 46rem;
      margin-block: 1.5rem 1.75rem;

      div {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        gap: 0.3rem;
        padding: 1rem 1.1rem;
        background: var(--bg-elev);
        border: 1px solid var(--line);
        border-radius: var(--radius);
      }

      dd {
        font-family: var(--font-serif);
        font-size: 2rem;
        line-height: 1;
        color: var(--accent);
      }

      dt {
        font-size: 0.82rem;
        line-height: 1.4;
        color: var(--text-muted);
      }
    }

    .bullets {
      max-width: 46rem;
      color: var(--text-muted);
    }

    @media (max-width: 860px) {
      .role {
        grid-template-columns: 1fr;
      }

      .meta {
        padding-left: 2.5rem;
      }

      .body {
        padding-left: 1.5rem;
        margin-left: 0.4rem;
      }

      .meta {
        padding-left: 0;
      }
    }

    @media (max-width: 560px) {
      .impact {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ExperienceSection {
  protected readonly roles = experience;
}
