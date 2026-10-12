import { Component } from '@angular/core';
import { coreTech } from '../../../data/portfolio.data';

/** Endless strip of core technologies. The list is repeated once so the loop is seamless. */
@Component({
  selector: 'app-marquee',
  template: `
    <div class="marquee">
      <ul class="track" aria-label="Core technologies">
        @for (item of items; track item) {
          <li>{{ item }}</li>
        }
      </ul>
      <ul class="track" aria-hidden="true">
        @for (item of items; track item) {
          <li>{{ item }}</li>
        }
      </ul>
    </div>
  `,
  styles: `
    .marquee {
      --gap: 2.75rem;
      display: flex;
      gap: var(--gap);
      padding-block: 1.4rem;
      border-block: 1px solid var(--line);
      overflow: hidden;
      mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
    }

    .track {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: var(--gap);
      min-width: 100%;
      justify-content: space-around;
      animation: slide 45s linear infinite;
    }

    .marquee:hover .track {
      animation-play-state: paused;
    }

    li {
      display: flex;
      align-items: center;
      gap: var(--gap);
      font-size: 1.15rem;
      font-weight: 500;
      letter-spacing: -0.01em;
      white-space: nowrap;
      color: var(--text-muted);
    }

    li::after {
      content: '';
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: var(--gradient);
    }

    @keyframes slide {
      to {
        transform: translateX(calc(-100% - var(--gap)));
      }
    }
  `,
})
export class Marquee {
  protected readonly items = coreTech;
}
