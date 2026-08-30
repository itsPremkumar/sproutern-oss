/**
 * RSS Feed Generator for Blog Posts
 * Improves content distribution and SEO
 */

import { getUnifiedFeedPosts } from '@/lib/seo/feed-content';
import { NextResponse } from 'next/server';

import { SITE_URL } from '@/lib/site-config';
const siteUrl = SITE_URL;
const siteName = 'Sproutern';
const siteDescription =
  'Career guidance, internship opportunities, and educational resources for students worldwide';

export async function GET() {
  const rss = generateRSS();

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRSS(): string {
  const latestPosts = getUnifiedFeedPosts(20);

  const rssItems = latestPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${escapeXml(post.slug)}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${escapeXml(post.slug)}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${post.publishedAt.toUTCString()}</pubDate>
      <author>https://github.com/itsPremkumar/sproutern-oss (Sproutern Team)</author>
      <category>${escapeXml(post.category)}</category>
    </item>
  `,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>${siteDescription}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <generator>Next.js</generator>
    <webMaster>https://github.com/itsPremkumar/sproutern-oss (Sproutern Team)</webMaster>
    <managingEditor>https://github.com/itsPremkumar/sproutern-oss (Sproutern Team)</managingEditor>
    <category>Education</category>
    <category>Career</category>
    <image>
      <url>${siteUrl}/logo.jpg</url>
      <title>${siteName}</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return rss;
}
