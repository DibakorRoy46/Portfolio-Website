import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experience } from '../../../data/portfolio.data';
import { duration } from '../../../shared/duration';
import { Reveal } from '../../../shared/reveal';

/** Bullets shown before the rest are folded away. */
const VISIBLE_HIGHLIGHTS = 5;

@Component({
  selector: 'app-experience',
  imports: [RouterLink, SlicePipe, Reveal],
  template: `
    <section id="experience" class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Experience</h2>
        </div>
        <p class="section-intro">
          Two companies, one thread: business systems that people depend on every working day.
        </p>

        <div class="timeline">
          @for (role of roles; track role.company) {
            <article class="role" appReveal>
              <div class="meta">
                <p class="eyebrow">{{ role.period }}</p>
                <p class="length">{{ role.length }}</p>
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
                  @for (item of role.highlights | slice: 0 : shown; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>

                @if (role.highlights.length > shown) {
                  <details>
                    <summary>
                      <span class="closed">Show {{ role.highlights.length - shown }} more</span>
                      <span class="open">Show fewer</span>
                    </summary>
                    <ul class="bullets">
                      @for (item of role.highlights | slice: shown; track item) {
                        <li>{{ item }}</li>
                      }
                    </ul>
                  </details>
                }

                @if (role.projects.length) {
                  <div class="projects">
                    <p class="eyebrow">Case studies from this role</p>
                    <ul>
                      @for (project of role.projects; track project.path) {
                        <li>
                          <a [routerLink]="project.path">
                            {{ project.label }} <span aria-hidden="true">→</span>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                }
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

    .length {
      width: fit-content;
      margin-top: 0.6rem;
      padding: 0.15rem 0.6rem;
      background: var(--accent-soft);
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      color: var(--accent);
    }

    .company {
      margin-top: 0.75rem;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: -0.02em;
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
      background: var(--gradient);
      box-shadow: 0 0 0 5px var(--accent-soft);
    }

    h3 {
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      font-size: clamp(1.5rem, 2.6vw, 2rem);
      line-height: 1.1;
      letter-spacing: var(--display-tracking);
    }

    .summary {
      max-width: 46rem;
      margin-top: 0.75rem;
      font-size: 1.08rem;
    }

    .impact {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      max-width: 46rem;
      margin-block: 1.5rem 1.75rem;

      div {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        gap: 0.35rem;
        padding: 1rem 1.1rem;
        background: var(--bg-elev);
        border: 1px solid var(--line);
        border-radius: 16px;
      }

      dd {
        width: fit-content;
        font-family: var(--font-display);
        font-weight: var(--display-weight);
        font-size: 1.65rem;
        line-height: 1;
        letter-spacing: var(--display-tracking);
        background: var(--gradient);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
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

    details {
      max-width: 46rem;

      .bullets {
        margin-top: 0.7rem;
      }

      // The toggle sits under the extra bullets once they are open.
      &[open] {
        display: flex;
        flex-direction: column-reverse;
      }

      .open,
      &[open] .closed {
        display: none;
      }

      &[open] .open {
        display: inline;
      }
    }

    summary {
      width: fit-content;
      margin-top: 1rem;
      padding: 0.4rem 0.9rem;
      background: var(--bg-elev);
      border: 1px solid var(--line-strong);
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
      list-style: none;
      cursor: pointer;
      transition: border-color 0.2s ease;

      &::-webkit-details-marker {
        display: none;
      }

      &:hover {
        border-color: var(--text);
      }
    }

    .projects {
      max-width: 46rem;
      margin-top: 1.75rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--line);

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.8rem;
      }

      a {
        display: inline-block;
        padding: 0.35rem 0.85rem;
        background: var(--bg-elev);
        border: 1px solid var(--line);
        border-radius: 999px;
        font-size: 0.86rem;
        transition:
          border-color 0.2s ease,
          color 0.2s ease;
      }

      a:hover {
        border-color: var(--accent);
        color: var(--accent);
      }
    }

    @media (max-width: 860px) {
      .role {
        grid-template-columns: 1fr;
      }

      .body {
        margin-left: 0.4rem;
        padding-left: 1.5rem;
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
  protected readonly shown = VISIBLE_HIGHLIGHTS;
  protected readonly roles = experience.map((role) => ({
    ...role,
    length: duration(role.start, role.end),
  }));
}
