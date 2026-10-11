import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

type ThemeName = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);

  /** Flips the theme and remembers the choice. Only called from the browser. */
  toggle(): void {
    const next: ThemeName = this.current() === 'dark' ? 'light' : 'dark';
    this.document.documentElement.dataset['theme'] = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
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
