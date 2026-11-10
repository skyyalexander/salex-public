/** Prefix an internal path with the site's base path (needed on GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(`${date}T00:00:00Z`) : date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
