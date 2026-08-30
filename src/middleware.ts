import { proxy } from '@/proxy';
import type { NextRequest } from 'next/server';

/**
 * Edge Middleware entry point.
 *
 * Wires the geo + SEO proxy (src/proxy.ts) into the Next.js request pipeline
 * so every response carries x-user-country / x-user-currency / x-user-locale
 * headers. Those headers power region-adaptive tool content (salary calculator,
 * CGPA converter) and correct Currency/Geo SEO signals for worldwide visitors.
 *
 * Without this file the proxy function is dead code and all visitors are
 * served as if they were in the US (default fallback in proxy.ts).
 */
export function middleware(request: NextRequest) {
  return proxy(request);
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
