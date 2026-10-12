import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

type ThemeName = 'light' | 'dark';

const STORAGE_KEY = 'theme';
/** How long to wait for the view transition to start before switching without it. */
const TRANSITION_GRACE_MS = 300;

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);

  /**
   * Flips the theme and remembers the choice. Only called from the browser.
   * Where the browser supports view transitions, the new theme spreads out in
   * a circle from `origin` (the control that was pressed).
   */
  toggle(origin?: Element): void {
    const root = this.document.documentElement;
    const view = this.document.defaultView;
    const next: ThemeName = this.current() === 'dark' ? 'light' : 'dark';
    const reducedMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!view || reducedMotion || typeof this.document.startViewTransition !== 'function') {
      this.apply(next);
      return;
    }

    const rect = origin?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : view.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    root.style.setProperty('--reveal-x', `${x}px`);
    root.style.setProperty('--reveal-y', `${y}px`);

    // The class scopes the reveal animation to theme changes, leaving page
    // navigations with their own transition.
    root.classList.add('theme-switch');
    const transition = this.document.startViewTransition(() => this.apply(next));

    // A transition only starts once the browser paints a frame. If it is not
    // painting (a window hidden behind another), switch anyway; applying the
    // same theme again when the transition does run changes nothing.
    const fallback = view.setTimeout(() => this.apply(next), TRANSITION_GRACE_MS);
    // A skipped transition (hidden window, another one starting) rejects its
    // promises; the theme is applied either way, so there is nothing to report.
    transition.ready.catch(() => undefined);
    transition.finished
      .catch(() => undefined)
      .finally(() => {
        view.clearTimeout(fallback);
        root.classList.remove('theme-switch');
      });
  }

  private apply(theme: ThemeName): void {
    this.document.documentElement.dataset['theme'] = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }

  private current(): ThemeName {
    const chosen = this.document.documentElement.dataset['theme'];
    if (chosen === 'light' || chosen === 'dark') {
      return chosen;
    }
    const prefersLight = this.document.defaultView?.matchMedia(
      '(prefers-color-scheme: light)',
    ).matches;
    return prefersLight ? 'light' : 'dark';
  }
}
