import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

const DURATION_MS = 1400;

/**
 * Counts a figure such as "250K+" or "6,000+" up from zero when it scrolls into
 * view. The prerendered text is the final value, so nothing depends on this
 * running; figures already on screen at load are left as they are.
 */
@Directive({ selector: '[appCountUp]' })
export class CountUp {
  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const final = el.textContent?.trim() ?? '';
      const match = /^(\D*)([\d,]+)(.*)$/.exec(final);
      const target = match ? Number(match[2].replace(/,/g, '')) : 0;
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!match || !target || reducedMotion || el.getBoundingClientRect().top < innerHeight) {
        return;
      }

      const [, prefix, digits, suffix] = match;
      const format = (value: number) =>
        prefix + (digits.includes(',') ? value.toLocaleString('en-US') : String(value)) + suffix;

      let frame = 0;
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = progress < 1 ? format(Math.round(target * eased)) : final;
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        frame = requestAnimationFrame(tick);
      });
      observer.observe(el);

      destroyRef.onDestroy(() => {
        observer.disconnect();
        cancelAnimationFrame(frame);
      });
    });
  }
}
