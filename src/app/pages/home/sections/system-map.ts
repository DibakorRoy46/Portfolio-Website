import { Component } from '@angular/core';

/** Decorative hero diagram of the kind of system described across the site. */
@Component({
  selector: 'app-system-map',
  template: `
    <figure class="map">
      <figcaption>
        <span class="dot" aria-hidden="true"></span>
        A typical system I build
      </figcaption>
      <svg
        viewBox="0 0 440 430"
        role="img"
        aria-label="Angular and mobile clients call an ASP.NET Core API. .NET services behind it use Redis for caching, RabbitMQ and Hangfire for background work, and SQL Server for data, and integrate with SAP SD, HRMS and VAT systems."
      >
        <g class="wires">
          <path d="M220 60V100" />
          <path d="M220 150V190" />
          <path d="M145 215H115" />
          <path d="M295 215H325" />
          <path d="M220 240V280" />
          <path d="M380 240V280" />
          <path d="M220 330V370" />
          <path d="M380 330V395H315" />
        </g>

        <g class="node">
          <rect x="135" y="10" width="170" height="50" rx="10" />
          <text x="220" y="31" class="title">Angular · Mobile</text>
          <text x="220" y="47" class="sub">field sales, distributors</text>
        </g>
        <g class="node">
          <rect x="135" y="100" width="170" height="50" rx="10" />
          <text x="220" y="121" class="title">ASP.NET Core API</text>
          <text x="220" y="137" class="sub">auth · validation</text>
        </g>
        <g class="node node--core">
          <rect x="145" y="190" width="150" height="50" rx="10" />
          <text x="220" y="211" class="title">.NET services</text>
          <text x="220" y="227" class="sub">orders · stock · claims</text>
        </g>
        <g class="node">
          <rect x="5" y="190" width="110" height="50" rx="10" />
          <text x="60" y="211" class="title">Redis</text>
          <text x="60" y="227" class="sub">cache</text>
        </g>
        <g class="node">
          <rect x="325" y="190" width="110" height="50" rx="10" />
          <text x="380" y="211" class="title">RabbitMQ</text>
          <text x="380" y="227" class="sub">events</text>
        </g>
        <g class="node">
          <rect x="145" y="280" width="150" height="50" rx="10" />
          <text x="220" y="301" class="title">SQL Server</text>
          <text x="220" y="317" class="sub">transactions</text>
        </g>
        <g class="node">
          <rect x="325" y="280" width="110" height="50" rx="10" />
          <text x="380" y="301" class="title">Hangfire</text>
          <text x="380" y="317" class="sub">jobs</text>
        </g>
        <g class="node">
          <rect x="125" y="370" width="190" height="50" rx="10" />
          <text x="220" y="391" class="title">SAP SD · HRMS · VAT</text>
          <text x="220" y="407" class="sub">integrations</text>
        </g>
      </svg>
    </figure>
  `,
  styles: `
    .map {
      margin: 0;
      padding: 1.25rem 1.25rem 1rem;
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: calc(var(--radius) + 4px);
      box-shadow: 0 30px 80px -40px var(--accent-soft);
    }

    figcaption {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      margin-bottom: 1rem;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      color: var(--text-muted);
    }

    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-soft);
    }

    svg {
      display: block;
      width: 100%;
      height: auto;
    }

    .wires path {
      fill: none;
      stroke: var(--accent);
      stroke-width: 1.4;
      stroke-dasharray: 4 6;
      animation: flow 1.1s linear infinite;
    }

    .node rect {
      fill: var(--bg);
      stroke: var(--line-strong);
    }

    .node--core rect {
      fill: var(--accent-soft);
      stroke: var(--accent);
    }

    text {
      text-anchor: middle;
      font-family: var(--font-mono);
    }

    .title {
      font-size: 12px;
      font-weight: 500;
      fill: var(--text);
    }

    .sub {
      font-size: 10px;
      fill: var(--text-muted);
    }

    @keyframes flow {
      to {
        stroke-dashoffset: -20;
      }
    }
  `,
})
export class SystemMap {}
