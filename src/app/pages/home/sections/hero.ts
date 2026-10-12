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
      <div class="backdrop" aria-hidden="true">
        <span class="orb orb--warm"></span>
        <span class="orb orb--cool"></span>
      </div>

      <div class="container">
        <div class="top">
          <div class="intro">
            <p class="badge">
              @if (profile.photoUrl) {
                <img [src]="profile.photoUrl" alt="" width="28" height="28" />
              } @else {
                <span class="pulse" aria-hidden="true"></span>
              }
              {{ profile.role }} · {{ profile.location }}
            </p>

            <h1>
              {{ firstName }} <span class="gradient-text">{{ lastName }}</span>
            </h1>
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
                <a class="btn" [href]="profile.resumeUrl" target="_blank" rel="noopener">
                  View resume <span aria-hidden="true">↗</span>
                </a>
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

    // Faint grid under two slow-drifting colour orbs, fading out below.
    .backdrop {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(var(--grid-line) 1px, transparent 1px) 0 0 / 56px 56px,
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) 0 0 / 56px 56px;
      mask-image: linear-gradient(to bottom, #000 35%, transparent 92%);
      pointer-events: none;
    }

    .orb {
      position: absolute;
      width: 34rem;
      height: 34rem;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.22;
      animation: drift 18s ease-in-out infinite alternate;
    }

    .orb--warm {
      top: -14rem;
      right: 4%;
      background: var(--accent);
    }

    .orb--cool {
      top: 2rem;
      right: 30%;
      background: var(--accent-3);
      animation-delay: -9s;
    }

    @keyframes drift {
      to {
        transform: translate(-4rem, 3rem) scale(1.15);
      }
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

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.35rem 0.9rem 0.35rem 0.45rem;
      background: var(--header-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--line-strong);
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.76rem;
      color: var(--text-muted);

      img {
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .pulse {
      width: 0.55rem;
      height: 0.55rem;
      margin-inline: 0.35rem 0.1rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 0 var(--accent);
      animation: pulse 2.2s ease-out infinite;
    }

    @keyframes pulse {
      to {
        box-shadow: 0 0 0 0.7rem transparent;
      }
    }

    h1 {
      margin-top: 1.5rem;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(3.1rem, 7.8vw, 6.25rem);
      line-height: 0.98;
      letter-spacing: -0.05em;
    }

    .tagline {
      max-width: 40rem;
      margin-top: clamp(1.5rem, 3vw, 2rem);
      font-size: clamp(1.1rem, 2vw, 1.3rem);
      line-height: 1.5;
      color: var(--text-muted);
    }

    .focus {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 1.5rem;

      li {
        padding: 0.3rem 0.8rem;
        background: var(--bg-elev);
        border: 1px solid var(--line);
        border-radius: 999px;
        font-family: var(--font-mono);
        font-size: 0.8rem;
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
      gap: 0.75rem;
      margin-top: clamp(3rem, 7vw, 5rem);
    }

    .stat {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      gap: 0.5rem;
      padding: 1.3rem 1.4rem 1.4rem;
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      transition:
        border-color 0.25s ease,
        transform 0.25s ease;

      &:hover {
        border-color: var(--line-strong);
        transform: translateY(-3px);
      }
    }

    dd {
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      font-size: clamp(2rem, 4.2vw, 3.1rem);
      line-height: 1;
      letter-spacing: var(--display-tracking);
    }

    // The first row is scale, the second is improvement; the second gets the gradient.
    .stat:nth-child(n + 5) dd {
      width: fit-content;
      background: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    dt {
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    .clients {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.75rem 2.5rem;
      margin-top: 2.25rem;

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem 2.25rem;
        font-size: clamp(1.1rem, 2vw, 1.35rem);
        font-weight: 600;
        letter-spacing: -0.02em;
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

      .orb {
        width: 22rem;
        height: 22rem;
      }
    }
  `,
})
export class HeroSection {
  protected readonly profile = profile;
  protected readonly stats = stats;

  // The last word of the name carries the gradient.
  private readonly nameParts = profile.name.split(' ');
  protected readonly lastName = this.nameParts.at(-1);
  protected readonly firstName = this.nameParts.slice(0, -1).join(' ');
}
