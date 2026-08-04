import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { shouldNoindexPath } from '@/lib/seo/indexing-policy';

/** ISO 3166-1 alpha-2 country codes we have explicit support for */
type SupportedCountry =
  | 'IN'
  | 'US'
  | 'GB'
  | 'AU'
  | 'CA'
  | 'SG'
  | 'ZA'
  | 'NO'
  | 'SE'
  | 'AE'
  | 'IE'
  | 'NZ'
  | 'DE'
  | 'FR'
  | 'JP';

/** Compact currency mapping — stays in Edge memory */
const COUNTRY_CURRENCY: Record<SupportedCountry, string> = {
  IN: 'INR',
  US: 'USD',
  GB: 'GBP',
  AU: 'AUD',
  CA: 'CAD',
  SG: 'SGD',
  ZA: 'ZAR',
  NO: 'NOK',
  SE: 'SEK',
  AE: 'AED',
  IE: 'EUR',
  NZ: 'NZD',
  DE: 'EUR',
  FR: 'EUR',
  JP: 'JPY',
};

/** IANA timezone per country (primary / capital zone) */
const COUNTRY_TIMEZONE: Record<SupportedCountry, string> = {
  IN: 'Asia/Kolkata',
  US: 'America/New_York',
  GB: 'Europe/London',
  AU: 'Australia/Sydney',
  CA: 'America/Toronto',
  SG: 'Asia/Singapore',
  ZA: 'Africa/Johannesburg',
  NO: 'Europe/Oslo',
  SE: 'Europe/Stockholm',
  AE: 'Asia/Dubai',
  IE: 'Europe/Dublin',
  NZ: 'Pacific/Auckland',
  DE: 'Europe/Berlin',
  FR: 'Europe/Paris',
  JP: 'Asia/Tokyo',
};

/** Language tag per country for Content-Language negotiation */
const COUNTRY_LOCALE: Record<SupportedCountry, string> = {
  IN: 'en-IN',
  US: 'en-US',
  GB: 'en-GB',
  AU: 'en-AU',
  CA: 'en-CA',
  SG: 'en-SG',
  ZA: 'en-ZA',
  NO: 'en-NO',
  SE: 'en-SE',
  AE: 'en-AE',
  IE: 'en-IE',
  NZ: 'en-NZ',
  DE: 'de-DE',
  FR: 'fr-FR',
  JP: 'ja-JP',
};

function isSupportedCountry(code: string): code is SupportedCountry {
  return code in COUNTRY_CURRENCY;
}

/**
 * Proxy Server (formerly middleware.ts)
 * 1. Edge-Native Geo Proxy (injecting localized headers)
 * 2. SEO & i18n redirects (www, query params, 404s, malformed URLs)
 */
export function proxy(request: NextRequest) {
  const { pathname, searchParams, hostname } = request.nextUrl;
  const url = request.nextUrl.clone();
  let shouldRedirect = false;

  // 1. Canonicalize host/protocol in one step (avoid multi-hop redirect chains)
  const isCanonicalSprouternHost = hostname === 'sproutern.dpdns.org';
  if (
    isCanonicalSprouternHost &&
    !hostname.includes('localhost') &&
    !hostname.includes('vercel')
  ) {
    if (url.hostname !== 'sproutern.dpdns.org') {
      url.hostname = 'sproutern.dpdns.org';
      shouldRedirect = true;
    }

    if (url.protocol !== 'https:') {
      url.protocol = 'https:';
      shouldRedirect = true;
    }
  }

  // 2. Strip region/language query params from canonical URLs
  const removableParams: string[] = [];
  for (const key of Array.from(searchParams.keys())) {
    const normalizedKey = key.toLowerCase();
    if (normalizedKey === 'region' || normalizedKey === 'lang') {
      removableParams.push(key);
    }
  }
  if (removableParams.length > 0) {
    for (const key of removableParams) {
      searchParams.delete(key);
    }
    shouldRedirect = true;
  }

  // 3. Normalize legacy malformed interview URL variants
  if (
    /^\/interview-experiences\/HCL(?:%20|%2520)Technologies/i.test(pathname)
  ) {
    url.pathname = '/interview-experiences';
    shouldRedirect = true;
  }

  // 4. Redirect missing blog post to the new resources page
  if (pathname === '/blog/interview-preparation-guide') {
    url.pathname = '/resources/interview-prep';
    shouldRedirect = true;
  }

  // 5. Fix 404s reported in Google Search Console
  if (pathname === '/companies/capgemini/interview-questions') {
    url.pathname = '/companies';
    shouldRedirect = true;
  }
  if (pathname === '/companies/apple/interview-questions') {
    url.pathname = '/tools/interview-questions';
    shouldRedirect = true;
  }
  if (pathname === '/companies/netflix/interview-questions') {
    url.pathname = '/tools/interview-questions';
    shouldRedirect = true;
  }
  if (pathname === '/companies/uber/interview-questions') {
    url.pathname = '/tools/interview-questions';
    shouldRedirect = true;
  }
  if (pathname === '/companies/infosys/salary') {
    url.pathname = '/companies/infosys';
    shouldRedirect = true;
  }
  if (pathname === '/companies/wipro/salary') {
    url.pathname = '/companies/wipro';
    shouldRedirect = true;
  }
  if (pathname === '/doneate') {
    url.pathname = '/donate';
    shouldRedirect = true;
  }
  if (pathname === '/terms-of-service') {
    url.pathname = '/terms-and-conditions';
    shouldRedirect = true;
  }

  // 6. Malformed URLs -> Redirect to home
  if (pathname === '/Sproutern' || pathname === '/&' || pathname === '/$') {
    url.pathname = '/';
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    url.search = searchParams.toString();
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  // 7. Detect user's country from Vercel Edge headers or fallback
  const country =
    request.headers.get('x-vercel-ip-country') ??
    (request as any).geo?.country ??
    'US'; // default to US for global fallback

  const countryCode = country.toUpperCase();
  const resolvedCountry: SupportedCountry = isSupportedCountry(countryCode)
    ? countryCode
    : 'US';

  const currency = COUNTRY_CURRENCY[resolvedCountry];
  const timezone = COUNTRY_TIMEZONE[resolvedCountry];
  const locale = COUNTRY_LOCALE[resolvedCountry];

  // 8. Inject headers into the DOWNSTREAM response
  response.headers.set('x-user-country', resolvedCountry);
  response.headers.set('x-user-currency', currency);
  response.headers.set('x-user-timezone', timezone);
  response.headers.set('x-user-locale', locale);

  // Security: never expose internal geo headers to javascript
  response.headers.set('x-middleware-geo', 'processed');

  // Also extract locale/country from accept-language (legacy proxy.ts behavior)
  const acceptLanguage = request.headers.get('accept-language') || '';
  const primaryLocale = acceptLanguage.split(',')[0]?.trim() || 'en-US';
  const parts = primaryLocale.split('-');
  const altCountryCode = parts.length > 1 ? parts[1].toUpperCase() : '';

  if (altCountryCode) {
    response.headers.set('x-detected-country', altCountryCode);
  }
  response.headers.set('x-detected-locale', primaryLocale);

  // 9. CDN / Performance hints
  response.headers.set('Vary', 'Accept-Language, Accept-Encoding');
  response.headers.set('x-middleware-cache', 'no-cache');

  // 10. SEO: enforce route-level indexing policy
  response.headers.set(
    'X-Robots-Tag',
    shouldNoindexPath(pathname)
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  );

  // 11. Homepage: Link prerender hints for faster discovery
  if (pathname === '/') {
    response.headers.set(
      'Link',
      [
        '</tools>; rel="prerender"',
        '</blog>; rel="prerender"',
        '</games>; rel="prerender"',
        '</interview-experiences>; rel="prerender"',
        '</llms.txt>; rel="alternate"; type="text/plain"',
      ].join(', '),
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, logo.jpg, robots.txt, sitemap*.xml, manifest files
     * - API routes (handled separately)
     * - Public static assets (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|logo\\.jpg|robots\\.txt|sitemap|manifest|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|eot)).*)',
  ],
};
