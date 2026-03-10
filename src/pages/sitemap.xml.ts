import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

const staticRoutes = ['/', '/services', '/about', '/contact', '/atome', '/privacy', '/terms'];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = staticRoutes
    .map((route) => {
      const loc = new URL(route, siteConfig.siteUrl).toString();
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
