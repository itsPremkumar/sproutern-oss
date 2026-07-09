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
 * Only includes posts published within the last 48 hours
 * (Google News requirement).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  // Combine custom and markdown blog posts
  const markdownPosts = getAllMarkdownBlogPosts().map(markdownToBlogData);
  const allPosts = [...blogPosts];
  const customSlugs = new Set(blogPosts.map((p) => p.slug));

  for (const post of markdownPosts) {
    if (!customSlugs.has(post.slug)) {
      allPosts.push(post);
    }
  }

  // Filter to posts within the last 48 hours
  const recentPosts = allPosts.filter((post) => {
    const postDate = new Date(post.date);
    return postDate >= twoDaysAgo;
  });

  return recentPosts.map((post) => ({
    url: `https://www.sproutern.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));
}
