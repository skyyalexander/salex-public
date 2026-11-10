# salex-public

My personal site: projects, writing, résumé, and what I'm working on now. Built with [Astro](https://astro.build) as a plain static site.

## Editing

| To change… | Edit |
| --- | --- |
| Name, tagline, nav, social links, "Now" list | `src/site.config.ts` |
| Experience, education, certifications, skills | `src/resume.ts` |
| Bio | `src/pages/about.astro` |
| Add a project | new `.md` file in `src/content/projects/` |
| Add a post | new `.md` file in `src/content/writing/` (`draft: true` hides it) |
| Colors and fonts | tokens at the top of `src/styles/global.css` |

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploying

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Source: GitHub Actions**. A custom domain (e.g. skyyalexander.com) can be added later under the same settings page; the build picks up the new URL automatically.
