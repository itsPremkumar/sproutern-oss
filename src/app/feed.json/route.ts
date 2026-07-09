/**
 * JSON Feed Generator
 * Modern alternative to RSS/Atom for content syndication
 */

import { getUnifiedFeedPosts } from '@/lib/seo/feed-content';
import { NextResponse } from 'next/server';

import { SITE_URL } from '@/lib/site-config';
const siteUrl = SITE_URL;

export async function GET() {
  const jsonFeed = generateJSONFeed();

  return new NextResponse(JSON.stringify(jsonFeed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}

function generateJSONFeed() {
  const latestPosts = getUnifiedFeedPosts(20);

  return {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Sproutern Blog',
    home_page_url: siteUrl,
    feed_url: `${siteUrl}/feed.json`,
    description:
      'Career guidance, internship opportunities, and educational resources for students worldwide',
    icon: `${siteUrl}/logo.jpg`,
    favicon: `${siteUrl}/favicon.ico`,
    language: 'en',
    authors: [
      {
        name: 'Sproutern Team',
        url: `${siteUrl}/about`,
      },
    ],
    items: latestPosts.map((post) => ({
      id: `${siteUrl}/blog/${post.slug}`,
      url: `${siteUrl}/blog/${post.slug}`,
      title: post.title,
      content_html: post.excerpt,
      summary: post.excerpt,
      date_published: post.publishedAt.toISOString(),
      authors: [
        {
          name: 'Sproutern Team',
        },
      ],
      tags: [post.category],
    })),
  };
}
