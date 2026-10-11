import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile, stats } from '../../../data/portfolio.data';
import { CountUp } from '../../../shared/count-up';
import { SystemMap } from './system-map';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, CountUp, SystemMap],
  template: `
    <section class="hero">
      <div class="backdrop" aria-hidden="true"></div>

      <div class="container">
        <div class="top">
          <div class="intro">
            <p class="eyebrow">{{ profile.role }} · {{ profile.location }}</p>
            <h1>{{ profile.name }}</h1>
            <p class="tagline">{{ profile.tagline }}</p>

            <ul class="focus" aria-label="Focus areas">
              @for (item of profile.focus; track item) {
                <li>{{ item }}</li>
              }
            </ul>

            <div class="cta">
              <a class="btn btn--primary" routerLink="/" fragment="work">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a class="btn" routerLink="/" fragment="contact">Get in touch</a>
              @if (profile.resumeUrl) {
                <a class="btn" [href]="profile.resumeUrl" download>Download resume</a>
              }
            </div>
          </div>

          <app-system-map class="visual" />
        </div>

        <dl class="stats">
          @for (stat of stats; track stat.label) {
            <div class="stat">
              <dt>{{ stat.label }}</dt>
              <dd appCountUp>{{ stat.value }}</dd>
            </div>
          }
        </dl>

        <div class="clients">
          <p class="eyebrow">Delivered for</p>
          <ul>
            @for (client of profile.clients; track client) {
              <li>{{ client }}</li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      padding-top: clamp(3rem, 8vw, 6.5rem);
      padding-bottom: clamp(3rem, 7vw, 5rem);
      overflow: hidden;
    }

    // Faint grid with an accent glow, fading out towards the content below.
    .backdrop {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(60rem 32rem at 85% 0%, var(--accent-soft), transparent 70%),
        linear-gradient(var(--grid-line) 1px, transparent 1px) 0 0 / 56px 56px,
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) 0 0 / 56px 56px;
      mask-image: linear-gradient(to bottom, #000 35%, transparent 90%);
      pointer-events: none;
    }

    .container {
      position: relative;
    }

    .top {
      display: grid;
      grid-template-columns: 1.25fr 0.85fr;
      align-items: center;
      gap: clamp(2rem, 5vw, 4.5rem);
    }

    h1 {
      margin-top: 1.25rem;
      font-family: var(--font-serif);
      font-weight: 400;
      font-size: clamp(3.75rem, 10vw, 8rem);
      line-height: 0.92;
      letter-spacing: -0.025em;
    }

    .tagline {
      max-width: 40rem;
      margin-top: clamp(1.5rem, 3vw, 2.25rem);
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      line-height: 1.5;
      color: var(--text-muted);
    }

    .focus {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem 0.9rem;
      margin-top: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.85rem;

      li:not(:last-child)::after {
        content: '/';
        margin-left: 0.9rem;
        color: var(--accent);
      }
    }

    .cta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 2.25rem;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: clamp(3rem, 7vw, 5rem);
      border-top: 1px solid var(--line);
    }

    .stat {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      gap: 0.35rem;
      padding: 1.5rem 1.25rem;
      border-left: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .stat:nth-child(4n + 1) {
      padding-left: 0;
      border-left: 0;
    }

    // The first row is scale, the second is improvement; tint the second.
    .stat:nth-child(n + 5) dd {
      color: var(--accent);
    }

    dd {
      font-family: var(--font-serif);
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      line-height: 1;
    }

    dt {
      font-size: 0.9rem;
      color: var(--text-muted);
    }

    .clients {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.75rem 2.5rem;
      margin-top: 2rem;

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem 2.25rem;
        font-family: var(--font-serif);
        font-size: clamp(1.25rem, 2.4vw, 1.6rem);
        color: var(--text-muted);
      }
    }

    @media (max-width: 980px) {
      .top {
        grid-template-columns: 1fr;
      }

      .visual {
        max-width: 30rem;
      }
    }

    @media (max-width: 720px) {
      .visual {
        display: none;
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .stat:nth-child(odd) {
        padding-left: 0;
        border-left: 0;
      }
    }
  `,
})
export class HeroSection {
  protected readonly profile = profile;
  protected readonly stats = stats;
}
