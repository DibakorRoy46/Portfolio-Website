import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommandPalette } from './layout/command-palette';
import { Footer } from './layout/footer';
import { Header } from './layout/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CommandPalette],
  template: `
    <a class="skip-link" href="#main" (click)="skipToContent($event)">Skip to content</a>
    <app-header />
    <main id="main" #main tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
    <app-command-palette />
  `,
  styles: `
    main {
      display: block;
      outline: none;
    }
  `,
})
export class App {
  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  // A plain #main link would resolve against <base href="/"> and leave the page.
  protected skipToContent(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }
}
