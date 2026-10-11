import { Component } from '@angular/core';
import { education, profile, timeline } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">About</h2>
        </div>

        <div class="layout">
          <div class="bio" appReveal>
            @if (profile.photoUrl) {
              <img class="photo" [src]="profile.photoUrl" [alt]="profile.name" loading="lazy" />
            }
            @for (paragraph of profile.about; track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </div>

          <aside class="facts" appReveal>
            <div>
              <h3 class="eyebrow">Education</h3>
              <p class="strong">{{ education.degree }}</p>
              <p class="muted">{{ education.school }}</p>
              <p class="muted">{{ education.period }} · {{ education.result }}</p>
            </div>
            <div>
              <h3 class="eyebrow">Currently</h3>
              <p>{{ profile.now }}</p>
            </div>
            <div>
              <h3 class="eyebrow">Exploring next</h3>
              <p>{{ profile.exploring }}</p>
            </div>
            <div>
              <h3 class="eyebrow">Industries</h3>
              <ul class="tags">
                @for (industry of profile.industries; track industry) {
                  <li>{{ industry }}</li>
                }
              </ul>
            </div>
          </aside>
        </div>

        <div class="journey" appReveal>
          <h3 class="eyebrow">The path so far</h3>
          <ol class="timeline">
            @for (step of timeline; track step.when) {
              <li>
                <span class="when">{{ step.when }}</span>
                <span class="what">{{ step.title }}</span>
                <span class="muted">{{ step.detail }}</span>
              </li>
            }
          </ol>
        </div>
      </div>
    </section>
  `,
  styles: `
    .layout {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 2.5rem 4rem;
    }

    .bio {
      display: grid;
      gap: 1.25rem;
      align-content: start;
      font-size: 1.1rem;
    }

    .bio p:first-of-type {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.8vw, 2rem);
      line-height: 1.3;
    }

    .photo {
      width: 9rem;
      height: 9rem;
      object-fit: cover;
      border-radius: var(--radius);
      border: 1px solid var(--line);
    }

    .facts {
      display: grid;
      gap: 2rem;
      align-content: start;
    }

    .facts h3 {
      margin-bottom: 0.7rem;
      font-weight: 400;
    }

    .strong {
      font-weight: 500;
    }

    .journey {
      margin-top: clamp(3rem, 7vw, 5rem);

      h3 {
        margin-bottom: 1.75rem;
        font-weight: 400;
      }
    }

    // Horizontal rail with a marker above each milestone.
    .timeline {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      border-top: 1px solid var(--line-strong);

      li {
        position: relative;
        display: grid;
        gap: 0.25rem;
        align-content: start;
        padding: 1.5rem 1.25rem 0 0;
        font-size: 0.95rem;
      }

      li::before {
        content: '';
        position: absolute;
        left: 0;
        top: -0.4rem;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background: var(--bg);
        border: 2px solid var(--accent);
      }

      li:last-child::before {
        background: var(--accent);
        box-shadow: 0 0 0 5px var(--accent-soft);
      }
    }

    .when {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--accent);
    }

    .what {
      font-family: var(--font-serif);
      font-size: 1.35rem;
      line-height: 1.15;
    }

    @media (max-width: 820px) {
      .layout {
        grid-template-columns: 1fr;
      }

      // The rail turns vertical on narrow screens.
      .timeline {
        grid-template-columns: 1fr;
        border-top: 0;
        border-left: 1px solid var(--line-strong);

        li {
          padding: 0 0 1.75rem 1.75rem;
        }

        li:last-child {
          padding-bottom: 0;
        }

        li::before {
          left: -0.4rem;
          top: 0.2rem;
        }
      }
    }
  `,
})
export class AboutSection {
  protected readonly profile = profile;
  protected readonly education = education;
  protected readonly timeline = timeline;
}
