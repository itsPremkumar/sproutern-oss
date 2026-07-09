import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where markdown blog posts are stored
const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

export interface MarkdownBlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  author?: string;
  content: string;
  keywords?: string[];
  topics?: string[]; // GEO: Linked Knowledge Graph Entities
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  author?: string;
  keywords?: string[];
  topics?: string[];
}

/**
 * Get all markdown blog slugs for static generation
 */
export function getMarkdownBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(CONTENT_DIR)) {
      return [];
    }
    const files = fs.readdirSync(CONTENT_DIR);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

/**
 * Check if a markdown blog post exists
 */
export function markdownBlogExists(slug: string): boolean {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  return fs.existsSync(filePath);
}

/**
 * Get a single markdown blog post by slug
 */
export function getMarkdownBlogPost(slug: string): MarkdownBlogPost | null {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const frontmatter = data as BlogFrontmatter;

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      category: frontmatter.category,
      readTime: frontmatter.readTime,
      excerpt: frontmatter.excerpt,
      author: frontmatter.author || 'Sproutern Career Team',
      content,
      keywords: frontmatter.keywords,
      topics: frontmatter.topics,
    };
  } catch (error) {
    console.error(`Error reading markdown blog post: ${slug}`, error);
    return null;
  }
}

/**
 * Get all markdown blog posts
 */
export function getAllMarkdownBlogPosts(): MarkdownBlogPost[] {
  const slugs = getMarkdownBlogSlugs();
  const posts: MarkdownBlogPost[] = [];

  for (const slug of slugs) {
    const post = getMarkdownBlogPost(slug);
    if (post) {
      posts.push(post);
    }
  }

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Convert markdown blog post to blog-data.ts format
 */
export function markdownToBlogData(post: MarkdownBlogPost) {
  return {
    title: post.title,
    date: post.date,
    category: post.category,
    readTime: post.readTime,
    excerpt: post.excerpt,
    slug: post.slug,
    contentType: 'markdown' as const,
  };
}
