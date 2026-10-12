import { Directive, ElementRef, inject } from '@angular/core';

const MAX_DEGREES = 7;

/** Tilts an element in 3D towards the mouse pointer and settles back when it leaves. */
@Directive({
  selector: '[appTilt]',
  host: {
    '(pointermove)': 'tilt($event)',
    '(pointerleave)': 'reset()',
  },
})
export class Tilt {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected tilt(event: PointerEvent): void {
    // Touch drags scroll the page, so only a mouse tilts; reduced motion opts out.
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rect = this.el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-y * 2 * MAX_DEGREES).toFixed(2);
    const rotateY = (x * 2 * MAX_DEGREES).toFixed(2);
    this.el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  protected reset(): void {
    this.el.style.transform = '';
  }
}
