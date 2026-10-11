import { Component } from '@angular/core';
import { skills } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  template: `
    <section id="skills" class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Skills</h2>
        </div>
        <p class="section-intro">
          The tools and methods I have used on real projects, grouped by where they sit in a system.
        </p>

        <ul class="grid">
          @for (group of groups; track group.title) {
            <li class="group" appReveal>
              <h3 class="eyebrow">{{ group.title }}</h3>
              <ul class="tags">
                @for (item of group.items; track item) {
                  <li>{{ item }}</li>
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

    .group {
      padding: 1.4rem 1.5rem 1.5rem;
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
    }

    h3 {
      margin-bottom: 1rem;
      font-weight: 500;
      color: var(--accent);
    }

    .tags li {
      font-size: 0.78rem;
      color: var(--text);
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
export class SkillsSection {
  protected readonly groups = skills;
}
