import { Component } from '@angular/core';
import { coreSkills, skills } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';
import { Spotlight } from '../../../shared/spotlight';

@Component({
  selector: 'app-skills',
  imports: [Reveal, Spotlight],
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

        <p class="legend">
          <span class="swatch" aria-hidden="true"></span>
          Highlighted skills are the core of my day-to-day work.
        </p>

        <ul class="grid">
          @for (group of groups; track group.title) {
            <li class="group" appReveal appSpotlight>
              <div class="group-head">
                <h3>{{ group.title }}</h3>
                <span class="count">{{ group.items.length }}</span>
              </div>
              <ul class="tags">
                @for (item of group.items; track item) {
                  <li [class.core]="core.has(item)">{{ item }}</li>
                }
              </ul>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .legend {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      color: var(--text-muted);
    }

    .swatch {
      width: 1.6rem;
      height: 0.8rem;
      border-radius: 999px;
      background: var(--gradient);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .group {
      padding: 1.4rem 1.5rem 1.5rem;
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
    }

    .group-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.05rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    .count {
      padding: 0.1rem 0.55rem;
      border: 1px solid var(--line-strong);
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .tags li {
      font-size: 0.78rem;
      color: var(--text);
    }

    .tags li.core {
      background: var(--gradient);
      border-color: transparent;
      font-weight: 500;
      color: var(--accent-contrast);
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
  protected readonly core = coreSkills;
}
