import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { principles } from '../../../data/portfolio.data';
import { Reveal } from '../../../shared/reveal';

@Component({
  selector: 'app-approach',
  imports: [DecimalPipe, Reveal],
  template: `
    <section id="approach" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">How I build</h2>
        </div>
        <p class="section-intro">
          The principles behind the systems above, each one learned on a production workload.
        </p>

        <ol class="grid">
          @for (principle of principles; track principle.title; let i = $index) {
            <li class="principle" appReveal>
              <span class="num" aria-hidden="true">{{ i + 1 | number: '2.0' }}</span>
              <div>
                <h3>{{ principle.title }}</h3>
                <p>{{ principle.body }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 4rem;
    }

    .principle {
      display: grid;
      grid-template-columns: 4.5rem 1fr;
      gap: 1rem;
      padding-block: 1.75rem;
      border-top: 1px solid var(--line);
    }

    .num {
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      letter-spacing: var(--display-tracking);
      font-size: 2.6rem;
      line-height: 1;
      width: fit-content;
      height: fit-content;
      background: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      letter-spacing: var(--display-tracking);
      font-size: 1.3rem;
      line-height: 1.15;
    }

    p {
      color: var(--text-muted);
    }

    @media (max-width: 820px) {
      .grid {
        grid-template-columns: 1fr;
      }

      .principle {
        grid-template-columns: 3.5rem 1fr;
      }
    }
  `,
})
export class ApproachSection {
  protected readonly principles = principles;
}
