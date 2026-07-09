jest.mock('fs', () => ({
  existsSync: (filePath: string) => {
    const normalized = filePath.replace(/\\/g, '/');

    return (
      normalized.includes('/src/content/blog/resume-tips.md') ||
      normalized.includes('/src/content/blog/new-markdown-post.md') ||
      normalized.includes('/src/app/blog/interview-guide/page.tsx')
    );
  },
}));

jest.mock('@/lib/blog-data', () => ({
  blogPosts: [
    {
      slug: 'resume-tips',
      title: 'Resume Tips Old',
      excerpt: 'Old content',
      category: 'Career',
      date: '2026-01-10',
    },
    {
      slug: 'invalid-date-post',
      title: 'Invalid Date',
      excerpt: 'Should be excluded',
      category: 'Career',
      date: 'not-a-date',
    },
    {
      slug: 'interview-guide',
      title: 'Interview Guide',
      excerpt: 'Interview prep content',
      category: 'Interview',
      date: '2026-02-01',
    },
  ],
}));

jest.mock('@/lib/markdown-utils', () => ({
  getAllMarkdownBlogPosts: () => [
    {
      slug: 'resume-tips',
      title: 'Resume Tips New',
      excerpt: 'New content',
      category: 'Career',
      date: '2026-03-01',
      readTime: '5 min read',
      content: 'markdown body',
    },
    {
      slug: 'new-markdown-post',
      title: 'New Markdown Post',
      excerpt: 'Fresh markdown content',
      category: 'Resources',
      date: '2026-02-20',
      readTime: '6 min read',
      content: 'markdown body',
    },
  ],
  markdownToBlogData: (post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
  }) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readTime: '5 min read',
    contentType: 'markdown',
  }),
}));

import { getUnifiedFeedPosts } from '@/lib/seo/feed-content';

describe('getUnifiedFeedPosts', () => {
  it('deduplicates by slug and prefers the fresher post', () => {
    const posts = getUnifiedFeedPosts(10);
    const resumePost = posts.find((post) => post.slug === 'resume-tips');

    expect(resumePost).toBeDefined();
    expect(resumePost?.title).toBe('Resume Tips New');
    expect(resumePost?.publishedAt.toISOString()).toContain('2026-03-01');
  });

  it('sorts posts by publication date descending and enforces limit', () => {
    const posts = getUnifiedFeedPosts(2);

    expect(posts).toHaveLength(2);
    expect(posts[0].slug).toBe('resume-tips');
    expect(posts[1].slug).toBe('new-markdown-post');
  });

  it('filters out posts with invalid dates', () => {
    const posts = getUnifiedFeedPosts(10);
    const hasInvalidDatePost = posts.some(
      (post) => post.slug === 'invalid-date-post',
    );

    expect(hasInvalidDatePost).toBe(false);
  });
});
