import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/seo';
import { profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="container not-found">
      <p class="eyebrow">404</p>
      <h1>Page not found</h1>
      <p class="muted">That page doesn’t exist, or it has moved.</p>
      <a class="btn btn--primary" routerLink="/">Back to home</a>
    </section>
  `,
  styles: `
    .not-found {
      display: grid;
      justify-items: start;
      gap: 1.25rem;
      padding-block: clamp(5rem, 16vw, 11rem);
    }

    h1 {
      font-family: var(--font-serif);
      font-weight: 400;
      font-size: clamp(3rem, 9vw, 6rem);
      line-height: 1;
    }
  `,
})
export class NotFound {
  constructor() {
    inject(Seo).set(`Page not found — ${profile.name}`, 'This page could not be found.');
  }
}
