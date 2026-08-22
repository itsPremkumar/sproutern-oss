import { getUnifiedFeedPosts } from '@/lib/seo/feed-content';
import { NextResponse } from 'next/server';

const siteUrl = 'https://sproutern.dpdns.org';
const publicationName = 'Sproutern';
const publicationLanguage = 'en';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateNewsSitemapXml(): string {
  // FIX: Always include latest posts (never empty to avoid GSC error)
  const latestPosts = getUnifiedFeedPosts(200)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 100);

  const urls = latestPosts
    .map(
      (post) => `  <url>
    <loc>${siteUrl}/blog/${escapeXml(post.slug)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(publicationName)}</news:name>
        <news:language>${publicationLanguage}</news:language>
      </news:publication>
      <news:publication_date>${post.publishedAt.toISOString()}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
    <lastmod>${post.publishedAt.toISOString()}</lastmod>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;
}

export async function GET() {
  return new NextResponse(generateNewsSitemapXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, stale-while-revalidate=86400',
    },
  });
}
