# salex-public

My personal site: projects, writing, résumé, and what I'm working on now. Built with [Astro](https://astro.build) as a plain static site.

## Editing

| To change… | Edit |
| --- | --- |
| Name, tagline, menu, social links, "Now" list, About stats | `src/site.config.ts` |
| Aviation hub text, flight status, section names | `aviation` in `src/site.config.ts` |
| Résumé: experience, education, certifications, skills | `src/resume.ts` |
| Bio | `src/pages/about.astro` |
| Add a project | new `.md` file in `src/content/projects/` |
| Add a post | new `.md` file in `src/content/writing/` (`draft: true` hides it) |
| Add a flight or drone log entry | new `.md` file in `src/content/aviation/` (`section: pilot` or `remote-pilot`) |
| Colors and fonts, dark and light | tokens at the top of `src/styles/global.css` |

## Design

- Dark by default, with a LIGHT/DARK button in the header (the choice is remembered).
- The home page name is a chrome + script lockup; the top bar and page titles use pixel lettering.
- `Panel` and `MenuPanel` (in `src/components/`) are the amber game-menu boxes.
- `Sign` draws a page title as taxiway signs; it is used on the Aviation pages.
- Fonts are self-hosted through `@fontsource` packages, so nothing loads from third parties.
- The Resume page prints as a plain one-page black-on-white résumé.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploying

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Source: GitHub Actions**. A custom domain (e.g. skyyalexander.com) can be added later under the same settings page; the build picks up the new URL automatically.
