import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from '../core/theme';
import { caseStudies, profile, sideProjects } from '../data/portfolio.data';
import { CommandPaletteState } from './command-palette-state';
import { NAV_LINKS } from './nav-links';

interface Command {
  id: string;
  group: 'Go to' | 'Client work' | 'Projects' | 'Actions';
  label: string;
  hint?: string;
  run: () => void;
}

/**
 * Ctrl/⌘ + K palette for jumping to a section or project and running a few
 * actions. Built on a native <dialog>, which supplies the focus trap, the
 * Escape key and the backdrop.
 */
@Component({
  selector: 'app-command-palette',
  host: { '(document:keydown)': 'onGlobalKey($event)' },
  template: `
    <!-- Keyboard users close the dialog with Escape, which <dialog> handles itself. -->
    <!-- eslint-disable-next-line @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
    <dialog
      #dialog
      class="palette"
      aria-label="Command palette"
      (close)="state.isOpen.set(false)"
      (click)="onBackdropClick($event)"
    >
      <div class="box">
        <div class="search">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            #input
            type="text"
            role="combobox"
            aria-label="Search sections, projects and actions"
            aria-expanded="true"
            aria-controls="palette-list"
            [attr.aria-activedescendant]="activeId()"
            placeholder="Search sections, projects and actions"
            autocomplete="off"
            spellcheck="false"
            [value]="query()"
            (input)="onQuery($event)"
            (keydown)="onInputKey($event)"
          />
          <kbd>Esc</kbd>
        </div>

        <ul id="palette-list" class="list" role="listbox" aria-label="Results">
          @for (command of filtered(); track command.id; let i = $index) {
            @if (i === 0 || filtered()[i - 1].group !== command.group) {
              <li class="group" role="presentation">{{ command.group }}</li>
            }
            <!-- Options follow the combobox pattern: focus stays in the input, which handles the arrow keys and Enter. -->
            <!-- eslint-disable-next-line @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
            <li
              class="option"
              role="option"
              [id]="'cmd-' + command.id"
              [attr.aria-selected]="i === active()"
              [class.is-active]="i === active()"
              (click)="run(command)"
              (pointermove)="active.set(i)"
            >
              <span>{{ command.label }}</span>
              @if (command.hint) {
                <span class="hint">{{ command.hint }}</span>
              }
            </li>
          } @empty {
            <li class="empty" role="presentation">Nothing matches “{{ query() }}”.</li>
          }
        </ul>

        <p class="foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> to move</span>
          <span><kbd>Enter</kbd> to open</span>
        </p>
      </div>
    </dialog>
  `,
  styles: `
    .palette {
      width: min(38rem, 100% - 2rem);
      max-height: none;
      margin-top: 13vh;
      padding: 0;
      background: transparent;
      border: 0;
      color: var(--text);
      overflow: visible;
    }

    .palette::backdrop {
      background: rgb(0 0 0 / 0.55);
      backdrop-filter: blur(6px);
    }

    .palette[open] .box {
      animation: pop 0.22s cubic-bezier(0.2, 0.7, 0.2, 1);
    }

    @keyframes pop {
      from {
        opacity: 0;
        transform: translateY(-10px) scale(0.98);
      }
    }

    .box {
      background: var(--bg-elev);
      border: 1px solid var(--line-strong);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .search {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.1rem;
      border-bottom: 1px solid var(--line);

      svg {
        flex-shrink: 0;
        fill: none;
        stroke: var(--text-muted);
        stroke-width: 1.8;
        stroke-linecap: round;
      }
    }

    input {
      flex: 1;
      min-width: 0;
      background: none;
      border: 0;
      outline: none;
      font: inherit;
      font-size: 1.05rem;
      color: var(--text);

      &::placeholder {
        color: var(--text-muted);
      }
    }

    kbd {
      padding: 0.1rem 0.4rem;
      background: var(--bg);
      border: 1px solid var(--line-strong);
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .list {
      max-height: min(24rem, 52vh);
      padding: 0.5rem;
      overflow-y: auto;
    }

    .group {
      padding: 0.7rem 0.75rem 0.3rem;
      font-family: var(--font-mono);
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .option {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.6rem 0.75rem;
      border-radius: 10px;
      cursor: pointer;
    }

    .option.is-active {
      background: var(--accent-soft);
    }

    .hint {
      flex-shrink: 0;
      font-size: 0.82rem;
      color: var(--text-muted);
    }

    .empty {
      padding: 1.5rem 0.75rem;
      color: var(--text-muted);
    }

    .foot {
      display: flex;
      gap: 1.25rem;
      padding: 0.7rem 1.1rem;
      border-top: 1px solid var(--line);
      font-size: 0.78rem;
      color: var(--text-muted);

      kbd {
        margin-right: 0.3rem;
      }
    }
  `,
})
export class CommandPalette {
  protected readonly state = inject(CommandPaletteState);
  private readonly router = inject(Router);
  private readonly theme = inject(Theme);
  private readonly document = inject(DOCUMENT);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  protected readonly query = signal('');
  protected readonly active = signal(0);

  private readonly commands: Command[] = [
    ...NAV_LINKS.map((link): Command => ({
      id: `go-${link.fragment}`,
      group: 'Go to',
      label: link.label,
      run: () => this.router.navigate(['/'], { fragment: link.fragment }),
    })),
    ...caseStudies.map((study): Command => ({
      id: `work-${study.slug}`,
      group: 'Client work',
      label: study.title,
      hint: study.context,
      run: () => this.router.navigate(['/work', study.slug]),
    })),
    ...sideProjects.map((project): Command => ({
      id: `project-${project.slug}`,
      group: 'Projects',
      label: project.title,
      hint: project.context,
      run: () => this.router.navigate(['/projects', project.slug]),
    })),
    ...(profile.resumeUrl
      ? [
          {
            id: 'resume-view',
            group: 'Actions',
            label: 'View resume',
            hint: 'PDF',
            run: () => this.openExternal(profile.resumeUrl),
          } satisfies Command,
          {
            id: 'resume-download',
            group: 'Actions',
            label: 'Download resume',
            hint: 'PDF',
            run: () => this.download(profile.resumeUrl),
          } satisfies Command,
        ]
      : []),
    {
      id: 'theme',
      group: 'Actions',
      label: 'Switch colour theme',
      run: () => this.theme.toggle(),
    },
    {
      id: 'copy-email',
      group: 'Actions',
      label: 'Copy email address',
      hint: profile.email,
      run: () => void this.document.defaultView?.navigator.clipboard?.writeText(profile.email),
    },
    {
      id: 'github',
      group: 'Actions',
      label: 'Open GitHub profile',
      run: () => this.openExternal(profile.github),
    },
    {
      id: 'linkedin',
      group: 'Actions',
      label: 'Open LinkedIn profile',
      run: () => this.openExternal(profile.linkedin),
    },
  ];

  protected readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    if (!query) {
      return this.commands;
    }
    return this.commands.filter((command) =>
      `${command.label} ${command.group} ${command.hint ?? ''}`.toLowerCase().includes(query),
    );
  });

  protected readonly activeId = computed(() => {
    const command = this.filtered()[this.active()];
    return command ? `cmd-${command.id}` : null;
  });

  constructor() {
    effect(() => {
      const dialog = this.dialog().nativeElement;
      // The prerender has no dialog API; the palette only works in the browser.
      if (typeof dialog.showModal !== 'function') {
        return;
      }

      if (this.state.isOpen() && !dialog.open) {
        this.query.set('');
        this.active.set(0);
        dialog.showModal();
        this.input().nativeElement.focus();
      } else if (!this.state.isOpen() && dialog.open) {
        dialog.close();
      }
    });
  }

  protected onGlobalKey(event: KeyboardEvent): void {
    if (event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      this.state.isOpen.update((open) => !open);
    }
  }

  protected onQuery(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.active.set(0);
  }

  protected onInputKey(event: KeyboardEvent): void {
    const count = this.filtered().length;
    if (!count) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const step = event.key === 'ArrowDown' ? 1 : -1;
      this.active.update((index) => (index + step + count) % count);
      this.document.getElementById(this.activeId() ?? '')?.scrollIntoView({ block: 'nearest' });
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.run(this.filtered()[this.active()]);
    }
  }

  // A click on the dialog itself, not on the box inside it, is a click on the backdrop.
  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.state.isOpen.set(false);
    }
  }

  protected run(command: Command): void {
    this.state.isOpen.set(false);
    command.run();
  }

  // A temporary link with the download attribute saves the file instead of opening it.
  private download(url: string): void {
    const link = this.document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  }

  private openExternal(url: string): void {
    this.document.defaultView?.open(url, '_blank', 'noopener');
  }
}
