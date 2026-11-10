// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow, so the same
// build works on skyyalexander.github.io/salex-public today and on a custom
// domain (e.g. skyyalexander.com) later, with no code changes.
export default defineConfig({
  site: process.env.SITE_URL || 'https://skyyalexander.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
