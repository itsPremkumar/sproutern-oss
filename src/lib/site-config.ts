/**
 * Central site configuration.
 *
 * The base URL MUST be dynamic so sitemaps, feeds, and canonical tags
 * point at the REAL deployed domain (Vercel preview/prod, custom domain,
 * or the free .us.kg domain) — not a hardcoded sproutern.com. Hardcoding
 * the domain breaks indexing on any other host, which kills organic
 * traffic and therefore ad/affiliate revenue.
 */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, ''); // strip trailing slash

export const SITE_NAME = 'Sproutern';
export const SITE_TAGLINE =
  'AI-powered career platform for students & freshers — free tools, guides, and resources.';

/** Convenience: join a path to the site URL. */
export function siteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}
