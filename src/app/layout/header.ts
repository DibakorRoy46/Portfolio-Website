import { Component, DestroyRef, Injector, afterNextRender, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Theme } from '../core/theme';
import { profile } from '../data/portfolio.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly theme = inject(Theme);

  protected readonly profile = profile;
  protected readonly menuOpen = signal(false);
  /** Id of the home section currently in the middle of the screen. */
  protected readonly active = signal<string | null>(null);
  protected readonly links = [
    { label: 'Expertise', fragment: 'expertise' },
    { label: 'Work', fragment: 'work' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'About', fragment: 'about' },
    { label: 'Contact', fragment: 'contact' },
  ];

  constructor() {
    const injector = inject(Injector);
    const destroyRef = inject(DestroyRef);
    let observer: IntersectionObserver | undefined;

    // The sections only exist on the home page, so look for them again after
    // every navigation. afterNextRender keeps this out of the prerender.
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(destroyRef),
      )
      .subscribe(() => {
        afterNextRender(
          () => {
            observer?.disconnect();
            this.active.set(null);
            observer = new IntersectionObserver(
              (entries) => {
                const current = entries.find((entry) => entry.isIntersecting);
                if (current) {
                  this.active.set(current.target.id);
                }
              },
              { rootMargin: '-45% 0px -50% 0px' },
            );
            document
              .querySelectorAll('main section[id]')
              .forEach((section) => observer!.observe(section));
          },
          { injector },
        );
      });

    destroyRef.onDestroy(() => observer?.disconnect());
  }

  protected toggleTheme(): void {
    this.theme.toggle();
  }
}
