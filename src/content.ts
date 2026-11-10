import { getCollection } from 'astro:content';

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => b.data.order - a.data.order || b.data.year - a.data.year);
}

/** Published posts, newest first. Drafts show up in `npm run dev` only. */
export async function getPosts() {
  const all = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
