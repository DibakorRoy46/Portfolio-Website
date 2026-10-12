import { Directive, ElementRef, inject } from '@angular/core';

/**
 * Adds the `.spotlight` hover light to a card and points it at the cursor by
 * writing the pointer position into the --mx / --my custom properties.
 */
@Directive({
  selector: '[appSpotlight]',
  host: {
    class: 'spotlight',
    '(pointermove)': 'track($event)',
  },
})
export class Spotlight {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected track(event: PointerEvent): void {
    const rect = this.el.getBoundingClientRect();
    this.el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    this.el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
