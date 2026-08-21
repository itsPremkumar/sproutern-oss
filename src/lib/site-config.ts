/**
 * Central site configuration.
 *
 * The base URL MUST be dynamic so sitemaps, feeds, and canonical tags
 * point at the REAL deployed domain (Vercel preview/prod, custom domain,
 * or the free .us.kg domain) — not a hardcoded sproutern.dpdns.org. Hardcoding
 * the domain breaks indexing on any other host, which kills organic
 * traffic and therefore ad/affiliate revenue.
 */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  // Stable production domain Vercel injects into every build (never a
  // per-deployment *.vercel.app URL) — keeps canonicals pointing at the
  // real domain even if NEXT_PUBLIC_SITE_URL is missing.
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '') ||
  (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '') ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
).replace(/\/$/, ''); // strip trailing slash

if (SITE_URL.includes('vercel.app')) {
  // Relative canonicals are resolved against SITE_URL via Next.js
  // metadataBase. If it ever resolves to a preview/deployment URL, every
  // relative-canonical page tells Google to index that throwaway URL
  // instead of the production domain. Loud failure > silent deindexing.
  console.warn(
    `[site-config] SITE_URL resolved to a deployment URL (${SITE_URL}). ` +
      'Set NEXT_PUBLIC_SITE_URL to the production domain so canonical tags stay correct.',
  );
}

export const SITE_NAME = 'Sproutern';
export const SITE_TAGLINE =
  'AI-powered career platform for students & freshers — free tools, guides, and resources.';

/** Convenience: join a path to the site URL. */
export function siteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}
