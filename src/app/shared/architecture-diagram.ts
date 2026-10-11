import { Component, booleanAttribute, input } from '@angular/core';
import { Layer } from '../data/portfolio.models';

/**
 * Draws a project's layers as stacked rows of boxes joined by flow lines.
 * `compact` drops the row labels and shrinks the boxes for use as a card cover.
 */
@Component({
  selector: 'app-architecture-diagram',
  template: `
    <ol class="layers" [class.compact]="compact()">
      @for (layer of layers(); track layer.label) {
        <li class="layer">
          @if (!compact()) {
            <span class="label">{{ layer.label }}</span>
          }
          <ul class="nodes">
            @for (node of layer.nodes; track node) {
              <li>{{ node }}</li>
            }
          </ul>
        </li>
      }
    </ol>
  `,
  styles: `
    .layers {
      --gap: 1.75rem;
      display: grid;
      gap: var(--gap);
    }

    .layer {
      display: grid;
      grid-template-columns: 9rem 1fr;
      align-items: center;
      gap: 1rem;
    }

    .label {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .nodes {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.6rem;

      li {
        padding: 0.6rem 1rem;
        background: var(--bg);
        border: 1px solid var(--line-strong);
        border-radius: 10px;
        font-family: var(--font-mono);
        font-size: 0.8rem;
        line-height: 1.3;
        text-align: center;
      }
    }

    // Dashed flow line from the row above, animated downwards.
    .layer + .layer .nodes::before {
      content: '';
      position: absolute;
      left: 50%;
      top: calc(var(--gap) * -1);
      width: 1px;
      height: var(--gap);
      background: repeating-linear-gradient(to bottom, var(--accent) 0 4px, transparent 4px 9px);
      background-size: 1px 9px;
      animation: drip 0.9s linear infinite;
    }

    @keyframes drip {
      to {
        background-position: 0 9px;
      }
    }

    .compact {
      --gap: 0.9rem;

      .layer {
        grid-template-columns: 1fr;
      }

      .nodes {
        gap: 0.35rem;
      }

      .nodes li {
        padding: 0.2rem 0.55rem;
        border-radius: 7px;
        font-size: 0.66rem;
        color: var(--text-muted);
      }
    }

    @media (max-width: 640px) {
      .layer {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }

      .label {
        text-align: center;
      }

      // The label now sits between the rows, so the line starts above it.
      .layer + .layer .nodes::before {
        display: none;
      }

      .layer + .layer .label::before {
        content: '↓';
        display: block;
        margin-bottom: 0.4rem;
        color: var(--accent);
      }
    }
  `,
})
export class ArchitectureDiagram {
  readonly layers = input.required<Layer[]>();
  readonly compact = input(false, { transform: booleanAttribute });
}
