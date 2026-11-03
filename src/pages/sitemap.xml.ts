import { cities } from '../data/site';

const pages = [
  '', 'about/', 'services/', 'automotive-window-tint/', 'residential-window-film/', 'commercial-window-film/',
  'reviews/', 'california-tint-law/', 'contact/', 'blog/', 'privacy/', 'terms/',
  ...cities.map((c) => `window-tint-${c.slug}/`),
];

export async function GET({ site }: { site: URL }) {
  const posts = Object.values(import.meta.glob<any>('./blog/*.md', { eager: true })).map((p) => p.url.replace(/^\//, ''));
  const urls = [...pages, ...posts].map((p) => `<url><loc>${new URL(p.endsWith('/') || p === '' ? p : p + '/', site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
