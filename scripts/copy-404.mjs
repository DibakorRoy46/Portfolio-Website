// Static hosts serve /404.html for unknown URLs, so publish the prerendered
// not-found page under that name.
import { copyFileSync } from 'node:fs';

const out = 'dist/portfolio/browser';
copyFileSync(`${out}/404/index.html`, `${out}/404.html`);
