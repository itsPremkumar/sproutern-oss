import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import BlogPageClient from './BlogPageClient';
import { blogPosts as customBlogPosts } from '@/lib/blog-data';
import {
  getAllMarkdownBlogPosts,
  markdownBlogExists,
  markdownToBlogData,
} from '@/lib/markdown-utils';
import fs from 'fs';
import path from 'path';

export const metadata = getPageSEO('blog');

export default function BlogPage() {
  const schemas = getPageSchema('blog');

  const hasStaticBlogPage = (slug: string) =>
    fs.existsSync(
      path.join(process.cwd(), 'src', 'app', 'blog', slug, 'page.tsx'),
    );

  // Get all markdown posts
  const markdownPosts = getAllMarkdownBlogPosts().map(markdownToBlogData);

  const publishableCustomPosts = customBlogPosts.filter(
    (post) => markdownBlogExists(post.slug) || hasStaticBlogPage(post.slug),
  );

  // Combine publishable custom posts and markdown posts, removing duplicates
  // Preference given to custom posts if slug matches (though they shouldn't overlap ideally)
  const allPosts = [...publishableCustomPosts];
  const customSlugs = new Set(publishableCustomPosts.map((p) => p.slug));

  for (const post of markdownPosts) {
    if (!customSlugs.has(post.slug)) {
      allPosts.push(post);
    }
  }

  // Sort by date (newest first)
  allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <BlogPageClient blogPosts={allPosts} />
    </>
  );
}
