# Dibakor Roy — Portfolio

Personal portfolio built with Angular 22. Every page is prerendered to static HTML at build time, so it can be hosted on any static host.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Edit the content

All text lives in `src/app/data/portfolio.data.ts`: profile, stats, case studies, experience, personal projects, skills and education.

- **Resume**: put the PDF in `public/` and set `profile.resumeUrl` (for example `'/resume.pdf'`). The download button appears once it is set.
- **Photo**: put the image in `public/` and set `profile.photoUrl`. It appears in the About section once it is set.
- **Detail pages**: each entry in `caseStudies` gets a page at `/work/<slug>`, and each entry in `sideProjects` gets one at `/projects/<slug>`.

Colours and fonts are defined as tokens at the top of `src/styles.scss`.

## Build

```bash
npm run build
```

The static site is written to `dist/portfolio/browser`.

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected settings; `vercel.json` already sets the build command and output folder.

Every push to the main branch then redeploys the site.
