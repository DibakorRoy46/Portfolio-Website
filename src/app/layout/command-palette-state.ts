import { Injectable, signal } from '@angular/core';

/** Lets the header button and the keyboard shortcut open the same palette. */
@Injectable({ providedIn: 'root' })
export class CommandPaletteState {
  readonly isOpen = signal(false);
}
