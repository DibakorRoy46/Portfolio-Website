import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="top">
          <div>
            <p class="name">{{ profile.name }}</p>
            <p class="muted">{{ profile.role }} · {{ profile.location }}</p>
          </div>
          <ul class="links">
            <li><a class="text-link" href="mailto:{{ profile.email }}">Email</a></li>
            <li>
              <a class="text-link" [href]="profile.linkedin" target="_blank" rel="noopener me">
                LinkedIn
              </a>
            </li>
            <li>
              <a class="text-link" [href]="profile.github" target="_blank" rel="noopener me">
                GitHub
              </a>
            </li>
            @if (profile.resumeUrl) {
              <li>
                <a class="text-link" [href]="profile.resumeUrl" target="_blank" rel="noopener">
                  Resume
                </a>
              </li>
            }
          </ul>
        </div>

        <div class="bottom">
          <p>© {{ year }} {{ profile.name }}</p>
          <p>Built with Angular</p>
          <button type="button" class="text-link" (click)="toTop()">
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .site-footer {
      border-top: 1px solid var(--line);
      padding-block: clamp(2rem, 5vw, 3rem) 1.75rem;
    }

    .top {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1.25rem 2rem;
    }

    .name {
      font-family: var(--font-display);
      font-weight: var(--display-weight);
      letter-spacing: var(--display-tracking);
      font-size: 1.5rem;
      line-height: 1.1;
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.75rem;
    }

    .bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.5rem 1.5rem;
      margin-top: 2rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--line);
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    button {
      padding: 0;
      background: none;
      border: 0;
      cursor: pointer;
    }
  `,
})
export class Footer {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();

  private readonly document = inject(DOCUMENT);

  protected toTop(): void {
    this.document.defaultView?.scrollTo({ top: 0 });
  }
}
