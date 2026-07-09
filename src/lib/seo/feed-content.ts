import type { BlogPost } from '@/lib/blog-data';
import { blogPosts } from '@/lib/blog-data';
import {
  getAllMarkdownBlogPosts,
  markdownToBlogData,
} from '@/lib/markdown-utils';
import fs from 'fs';
import path from 'path';

export interface FeedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  publishedAt: Date;
}

function toValidDate(dateValue: string): Date | null {
  const parsed = new Date(dateValue);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function toFeedPost(post: BlogPost): FeedPost | null {
  const publishedAt = toValidDate(post.date);
  if (!publishedAt) {
    return null;
  }

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    publishedAt,
  };
}

function pickFresherPost(existing: BlogPost, candidate: BlogPost): BlogPost {
  const existingTime = toValidDate(existing.date)?.getTime() ?? 0;
  const candidateTime = toValidDate(candidate.date)?.getTime() ?? 0;
  return candidateTime >= existingTime ? candidate : existing;
}

function hasMarkdownSource(slug: string): boolean {
  return fs.existsSync(
    path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.md`),
  );
}

function hasStaticPageSource(slug: string): boolean {
  return fs.existsSync(
    path.join(process.cwd(), 'src', 'app', 'blog', slug, 'page.tsx'),
  );
}

function hasPublishedSource(post: BlogPost): boolean {
  if (!post.slug) {
    return false;
  }

  return hasStaticPageSource(post.slug) || hasMarkdownSource(post.slug);
}

/**
 * Returns unified blog content (custom + markdown), deduped by slug and sorted newest first.
 */
export function getUnifiedFeedPosts(limit = 20): FeedPost[] {
  const markdownPosts = getAllMarkdownBlogPosts().map(markdownToBlogData);
  const combinedPosts = [...blogPosts, ...markdownPosts];
  const bySlug = new Map<string, BlogPost>();

  for (const post of combinedPosts) {
    if (!hasPublishedSource(post)) {
      continue;
    }

    const existing = bySlug.get(post.slug);
    if (!existing) {
      bySlug.set(post.slug, post);
      continue;
    }

    bySlug.set(post.slug, pickFresherPost(existing, post));
  }

  return Array.from(bySlug.values())
    .map(toFeedPost)
    .filter((post): post is FeedPost => Boolean(post))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, Math.max(1, limit));
}
