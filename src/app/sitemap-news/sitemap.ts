import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import {
  getAllMarkdownBlogPosts,
  markdownToBlogData,
} from '@/lib/markdown-utils';

/**
 * Google News Sitemap
 *
 * Generates a sitemap specifically for Google News, which helps
 * get new blog content indexed within hours instead of days.
 *
 * FIX: Google News sitemap must never be empty (causes GSC error).
 * Always includes the latest posts (up to 100) regardless of date,
 * so the sitemap is never empty even if no posts were published
 * in the last 48 hours.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Combine custom and markdown blog posts
  const markdownPosts = getAllMarkdownBlogPosts().map(markdownToBlogData);
  const allPosts = [...blogPosts];
  const customSlugs = new Set(blogPosts.map((p) => p.slug));

  for (const post of markdownPosts) {
    if (!customSlugs.has(post.slug)) {
      allPosts.push(post);
    }
  }

  // Sort by date descending (newest first)
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Take the latest 100 posts (never empty)
  const latestPosts = sortedPosts.slice(0, 100);

  return latestPosts.map((post) => ({
    url: `https://sproutern.dpdns.org/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));
}
