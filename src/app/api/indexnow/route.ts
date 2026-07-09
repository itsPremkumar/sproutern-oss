import { NextRequest, NextResponse } from 'next/server';
import {
  submitUrlToIndexNow,
  submitUrlsToIndexNow,
  submitToAllSearchEngines,
  getImportantUrls,
} from '@/lib/seo/indexnow';

/**
 * POST /api/indexnow
 * Submit URLs to IndexNow for instant indexing
 *
 * Body options:
 * - { url: string } - Submit single URL
 * - { urls: string[] } - Submit multiple URLs
 * - { submitAll: true } - Submit all important pages
 * - { allEngines: true, url: string } - Submit to all search engines
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Submit to all search engines (Bing, Yandex, Seznam)
    if (body.allEngines && body.url) {
      const results = await submitToAllSearchEngines(body.url);
      return NextResponse.json({
        success: true,
        message: 'Submitted to all search engines',
        results,
      });
    }

    // Submit all important URLs
    if (body.submitAll) {
      const urls = getImportantUrls();
      const result = await submitUrlsToIndexNow(urls);
      return NextResponse.json(result);
    }

    // Submit multiple URLs
    if (body.urls && Array.isArray(body.urls)) {
      const result = await submitUrlsToIndexNow(body.urls);
      return NextResponse.json(result);
    }

    // Submit single URL
    if (body.url) {
      const result = await submitUrlToIndexNow(body.url);
      return NextResponse.json(result);
    }

    return NextResponse.json(
      { success: false, message: 'No URL(s) provided' },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

/**
 * GET /api/indexnow
 * Get list of important URLs that can be submitted
 */
export async function GET() {
  const urls = getImportantUrls();
  return NextResponse.json({
    message: 'Use POST to submit URLs for indexing',
    importantUrls: urls,
    usage: {
      singleUrl: 'POST { "url": "https://..." }',
      multipleUrls: 'POST { "urls": ["https://...", "https://..."] }',
      allImportant: 'POST { "submitAll": true }',
      allEngines: 'POST { "allEngines": true, "url": "https://..." }',
    },
  });
}
