import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Fades an element in when it scrolls into view. Runs in the browser only, and
 * leaves anything already on screen alone so prerendered content never flickers.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || el.getBoundingClientRect().top < innerHeight) {
        return;
      }

      el.classList.add('reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
