import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Add a project: drop a Markdown file into src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['building', 'live', 'paused', 'archived']),
    year: z.number(),
    link: z.url().optional(),
    repo: z.url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Add a post: drop a Markdown file into src/content/writing/.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Add a flight or drone log entry: drop a Markdown file into src/content/aviation/.
// `section` decides which half of the Aviation hub it appears under.
const aviation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aviation' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    section: z.enum(['pilot', 'remote-pilot']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing, aviation };
