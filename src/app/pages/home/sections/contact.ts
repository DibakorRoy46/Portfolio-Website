import { Component } from '@angular/core';
import { profile } from '../../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-index"></span>
          <h2 class="section-title">Contact</h2>
        </div>

        <div class="panel">
          <p class="lead">Have a role or a project in mind? I’d like to hear about it.</p>
          <a class="email" href="mailto:{{ profile.email }}">{{ profile.email }}</a>

          <div class="foot">
            <ul class="links">
              <li>
                <a class="btn btn--primary" href="mailto:{{ profile.email }}">Send an email</a>
              </li>
              <li>
                <a class="btn" [href]="profile.linkedin" target="_blank" rel="noopener me">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a class="btn" [href]="profile.github" target="_blank" rel="noopener me">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
            <p class="where">{{ profile.location }} · {{ profile.timezone }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .panel {
      position: relative;
      padding: clamp(1.75rem, 5vw, 4rem);
      background:
        radial-gradient(40rem 20rem at 100% 0%, var(--accent-soft), transparent 70%), var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: calc(var(--radius) + 8px);
      overflow: hidden;
    }

    .lead {
      max-width: 36rem;
      font-size: 1.15rem;
      color: var(--text-muted);
    }

    .email {
      display: inline-block;
      margin-top: 1.25rem;
      font-family: var(--font-serif);
      font-size: clamp(1.6rem, 5.6vw, 4rem);
      line-height: 1.1;
      overflow-wrap: anywhere;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-decoration-color: var(--line-strong);
      text-underline-offset: 0.18em;
      transition:
        color 0.2s ease,
        text-decoration-color 0.2s ease;

      &:hover {
        color: var(--accent);
        text-decoration-color: var(--accent);
      }
    }

    .foot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem 2rem;
      margin-top: 2.5rem;
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .where {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
    }
  `,
})
export class ContactSection {
  protected readonly profile = profile;
}
