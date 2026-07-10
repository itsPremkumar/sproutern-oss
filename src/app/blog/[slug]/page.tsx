// Hybrid Blog System - Supports both custom JSX pages and markdown-based blogs
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import {
  getMarkdownBlogPost,
  getMarkdownBlogSlugs,
} from '@/lib/markdown-utils';
import fs from 'fs';
import path from 'path';
import {
  MarkdownRenderer,
  AuthorBio,
} from '@/components/blog/MarkdownRenderer';
import {
  AdAfterFirstSection,
  AdMidContent,
} from '@/components/ads/ezoic-sections';
import { getCitationText } from '@/lib/geo-utils'; // GEO: Citation Helper
import { ReactionButtons } from '@/components/blog/ReactionButtons'; // EEO: Reaction Component
import { TableOfContents } from '@/components/blog/TableOfContents'; // SXO: TOC
import { ContentUpgrade } from '@/components/lead-capture/ContentUpgrade'; // Email capture
import { SocialShare } from '@/components/shared/SocialShare'; // Social sharing
import { SponsorCTA } from '@/components/monetization/SponsorCTA';
import { NewsletterInline } from '@/components/monetization/NewsletterInline';
import {
  addInternalLinks,
  generateRelatedSection,
} from '@/lib/seo/auto-internal-linker';

// Generate static params for both custom and markdown blogs
export async function generateStaticParams() {
  // Dynamic route should only prebuild markdown-backed posts.
  return getMarkdownBlogSlugs()
    .map((slug) => ({ slug }))
    .slice(0, 200);
}

// ISR: Revalidate blog posts every 24 hours for content freshness
export const revalidate = 86400;

function toIsoDateTime(dateValue: string): string {
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toISOString();
  }

  return parsed.toISOString();
}

// Helper to get post data from either source
function getPost(slug: string) {
  const staticPagePath = path.join(
    process.cwd(),
    'src',
    'app',
    'blog',
    slug,
    'page.tsx',
  );
  const hasStaticPage = fs.existsSync(staticPagePath);

  // Check blog-data.ts first
  const customPost = blogPosts.find((post) => post.slug === slug);

  // Check markdown files
  const markdownPost = getMarkdownBlogPost(slug);

  // If a static page exists for this slug, let the static route handle it.
  if (hasStaticPage) {
    return null;
  }

  // If custom post exists and is NOT marked as markdown, do not render generic fallback.
  // Generic fallback pages create near-duplicate thin content and hurt ad policy trust.
  if (customPost && customPost.contentType !== 'markdown') {
    return null;
  }

  // If markdown post exists, use it
  if (markdownPost) {
    return {
      type: 'markdown' as const,
      post: markdownPost,
      content: markdownPost.content,
    };
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getPost(slug);

  if (!result) {
    return {
      title: 'Blog Post Not Found - Sproutern',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { post } = result;
  const canonical = `https://www.sproutern.com/blog/${slug}`;
  const publishedDateIso = toIsoDateTime(post.date);

  // Calculate title to stay within 70 chars when suffix is added
  const maxTitleLength = 58;
  let blogTitle = post.title;
  if (blogTitle.length > maxTitleLength) {
    blogTitle = blogTitle.substring(0, maxTitleLength - 3);
    const lastSpace = blogTitle.lastIndexOf(' ');
    if (lastSpace > maxTitleLength - 20) {
      blogTitle = blogTitle.substring(0, lastSpace);
    }
    blogTitle += '...';
  }

  return {
    title: blogTitle,
    description: post.excerpt,
    keywords: 'keywords' in post ? post.keywords : undefined,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      publishedTime: publishedDateIso,
      modifiedTime: publishedDateIso,
      authors: ['Sproutern Team'],
      images: [
        {
          url: 'https://www.sproutern.com/opengraph.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://www.sproutern.com/twitter.jpg'],
      creator: '@sproutern',
    },
    alternates: {
      canonical,
      languages: {
        'en-IN': canonical,
        'en-US': canonical,
        'en-GB': canonical,
        'x-default': canonical,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getPost(slug);

  if (!result) {
    notFound();
  }

  const { post, content } = result;
  const publishedDateIso = toIsoDateTime(post.date);
  // Truthful freshness signal: use an explicit updatedAt when available,
  // otherwise fall back to the publish date (no fake "modified" date).
  const modifiedDateIso = toIsoDateTime(
    'updatedAt' in post && post.updatedAt ? post.updatedAt : post.date,
  );

  // JSON-LD structured data with @graph for multiple schemas
  const blogPostingSchema = {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: publishedDateIso,
    dateModified: modifiedDateIso,
    image: 'https://www.sproutern.com/opengraph.jpg',
    author: {
      '@type': 'Organization',
      name: 'Sproutern Team',
      url: 'https://www.sproutern.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sproutern.com/logo.jpg',
        contentUrl: 'https://www.sproutern.com/logo.jpg',
        creditText: 'Sproutern',
        creator: {
          '@type': 'Organization',
          name: 'Sproutern',
        },
        copyrightNotice: '© 2026 Sproutern. All rights reserved.',
        license: 'https://www.sproutern.com/terms',
        acquireLicensePage: 'https://www.sproutern.com/contact',
      },
    },
    mainEntityOfPage: {
      '@id': `https://www.sproutern.com/blog/${slug}`,
    },
    // GEO: Explicitly mention entities for Knowledge Graph linking
    mentions:
      post.topics?.map((topic) => ({
        '@type': 'Thing',
        name: topic,
      })) || [],
  };

  // BreadcrumbList schema for rich breadcrumb results
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.sproutern.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.sproutern.com/blog/${slug}`,
      },
    ],
  };

  const schemaGraph = [blogPostingSchema, breadcrumbSchema];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  // GEO: Generate Citation Text
  const citationText = getCitationText(
    post.title,
    'Sproutern Team',
    `https://www.sproutern.com/blog/${slug}`,
    post.date,
  );

  // Get related posts for the footer
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 2);
  const enhancedMarkdownContent = content
    ? [addInternalLinks(content, slug).trim(), generateRelatedSection(slug)]
        .filter(Boolean)
        .join('\n\n')
    : '';

  // MARKDOWN BLOG RENDERING
  if (content) {
    return (
      <div className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="container mx-auto px-4 py-8">
          <Button
            asChild
            variant="ghost"
            className="mb-8"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex flex-col gap-12 md:flex-row">
            {/* Left Sidebar (Desktop Only) */}
            <aside className="relative hidden w-full shrink-0 md:block md:w-1/4">
              <div className="sticky top-24">
                <TableOfContents variant="sidebar" />
              </div>
            </aside>

            <article className="min-w-0 flex-1">
              {/* Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {'author' in post ? post.author : 'Sproutern Career Team'}
                  </span>
                  <span className="flex items-center gap-2 font-medium text-green-600 dark:text-green-400">
                    <Calendar className="h-4 w-4" />
                    Last Updated: {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1">
                    <Shield className="h-3.5 w-3.5 text-primary" />
                    Reviewed by Sproutern Editorial Team
                  </span>
                  <Link
                    href="/editorial-guidelines"
                    className="font-medium text-primary hover:underline"
                  >
                    Editorial standards
                  </Link>
                  <Link
                    href="/methodology"
                    className="font-medium text-primary hover:underline"
                  >
                    Methodology
                  </Link>
                </div>
              </header>

              {/* Excerpt */}
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              {/* Ad After Excerpt */}
              <div className="md:hidden">
                <TableOfContents
                  variant="inline"
                  className="md:hidden"
                />
              </div>
              <AdAfterFirstSection />

              {/* Markdown Content */}
              <MarkdownRenderer content={enhancedMarkdownContent} />

              {/* Ad Mid Content */}
              <AdMidContent />

              {/* Author Bio */}
              <AuthorBio
                name={'author' in post ? post.author : 'Sproutern Career Team'}
                description="Our team of career experts, industry professionals, and former recruiters brings decades of combined experience in helping students and freshers launch successful careers."
              />

              {/* Email Capture */}
              <ContentUpgrade />

              {/* Social Share Inline */}
              <SocialShare
                title={post.title}
                url={`https://www.sproutern.com/blog/${slug}`}
                description={post.excerpt}
                position="inline"
              />

              {/* Reaction Buttons */}
              <ReactionButtons slug={slug} />

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 border-t pt-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Related Articles
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.slug}>
                        <CardContent className="p-6">
                          <h4 className="mb-2 font-semibold">
                            <Link
                              href={`/blog/${relatedPost.slug}`}
                              className="hover:text-primary"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="mb-3 text-sm text-muted-foreground">
                            {relatedPost.excerpt.substring(0, 100)}...
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {relatedPost.readTime}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              {/* GEO: Citation Section for AI Attribution */}
              <section className="mt-8 rounded-lg border bg-muted/20 p-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Cite This Article
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  If you found this article helpful, please cite it as:
                </p>
                <div className="relative rounded-md bg-muted p-4 font-mono text-xs text-muted-foreground">
                  {citationText}
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    );
  }

  // CUSTOM/LEGACY BLOG RENDERING (default template for blogs without custom pages)
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Button
          asChild
          variant="ghost"
          className="mb-8"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="flex flex-col gap-12 md:flex-row">
          {/* Left Sidebar (Desktop Only) */}
          <aside className="relative hidden w-full shrink-0 md:block md:w-1/4">
            <div className="sticky top-24">
              <TableOfContents variant="sidebar" />
            </div>
          </aside>

          <article className="min-w-0 flex-1">
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {post.category}
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  Reviewed by Sproutern Editorial Team
                </span>
                <Link
                  href="/editorial-guidelines"
                  className="font-medium text-primary hover:underline"
                >
                  Editorial standards
                </Link>
                <Link
                  href="/methodology"
                  className="font-medium text-primary hover:underline"
                >
                  Methodology
                </Link>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              {/* Introduction Section */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <p className="text-muted-foreground">
                  Whether you&apos;re a student just starting out, a recent
                  graduate, or someone looking to transition careers, this
                  comprehensive guide will equip you with actionable strategies
                  and expert insights to help you succeed.
                </p>
              </section>

              {/* Key Takeaways */}
              <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <h3 className="mb-4 text-lg font-bold text-green-800 dark:text-green-200">
                  📌 Key Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>
                      Understand the fundamentals and build a strong foundation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>
                      Follow a structured approach for consistent results
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>Learn from real-world examples and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>
                      Avoid common mistakes that can derail your progress
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>Apply actionable tips you can implement today</span>
                  </li>
                </ul>
              </div>

              {/* Ezoic Ad - After Excerpt */}
              <div className="md:hidden">
                <TableOfContents
                  variant="inline"
                  className="md:hidden"
                />
              </div>
              <AdAfterFirstSection />

              {/* Why This Matters Section */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Why This Matters
                </h2>
                <p className="mb-4 text-muted-foreground">
                  The landscape has evolved significantly in recent years. With
                  increasing competition and rapidly changing industry trends,
                  staying informed and prepared is more important than ever.
                  Students and professionals who understand these dynamics have
                  a significant advantage.
                </p>
                <p className="text-muted-foreground">
                  According to recent industry reports, those who follow
                  structured approaches and leverage the right resources are 3x
                  more likely to achieve their goals. This guide distills the
                  most effective strategies into actionable steps you can start
                  implementing today.
                </p>
              </section>

              {/* Step-by-Step Guide */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Step-by-Step Guide
                </h2>

                <div className="space-y-6">
                  <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                    <h3 className="mb-2 font-bold">
                      Step 1: Foundation Building
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Start by understanding the core concepts and requirements.
                      This foundation will support everything you build on top
                      of it. Take time to research, learn from multiple sources,
                      and build a solid understanding before moving forward.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                    <h3 className="mb-2 font-bold">
                      Step 2: Skill Development
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Focus on developing the specific skills required for
                      success. This might include technical abilities, soft
                      skills, or domain knowledge. Practice consistently and
                      seek feedback to accelerate your growth.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                    <h3 className="mb-2 font-bold">
                      Step 3: Practical Application
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Apply what you&apos;ve learned through real projects,
                      internships, or practical exercises. Theory is important,
                      but hands-on experience solidifies your knowledge and
                      builds your confidence.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                    <h3 className="mb-2 font-bold">
                      Step 4: Network and Connect
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Build relationships with mentors, peers, and industry
                      professionals. Networking opens doors to opportunities
                      that might not be publicly available and provides valuable
                      insights.
                    </p>
                  </div>

                  <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                    <h3 className="mb-2 font-bold">
                      Step 5: Iterate and Improve
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Continuously refine your approach based on feedback and
                      results. Success is rarely linear—embrace the learning
                      process and keep improving.
                    </p>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Best Practices for Success
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <h4 className="mb-2 font-bold text-blue-800 dark:text-blue-200">
                      🎯 Set Clear Goals
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Define specific, measurable objectives that guide your
                      efforts and help you track progress.
                    </p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
                    <h4 className="mb-2 font-bold text-purple-800 dark:text-purple-200">
                      📚 Continuous Learning
                    </h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Stay updated with the latest trends, tools, and techniques
                      in your field.
                    </p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950">
                    <h4 className="mb-2 font-bold text-orange-800 dark:text-orange-200">
                      💪 Consistency Over Intensity
                    </h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Regular, consistent effort yields better results than
                      sporadic intense bursts.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                    <h4 className="mb-2 font-bold text-green-800 dark:text-green-200">
                      🤝 Seek Mentorship
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Learn from those who have already achieved what
                      you&apos;re working toward.
                    </p>
                  </div>
                </div>
              </section>

              {/* Ezoic Ad - Mid Content */}
              <AdMidContent />

              {/* Industry Insights */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Industry Insights
                </h2>
                <p className="mb-4 text-muted-foreground">
                  The job market continues to evolve rapidly. Companies are
                  increasingly looking for candidates who demonstrate not just
                  technical competence, but also adaptability, communication
                  skills, and a growth mindset.
                </p>
                <div className="rounded-lg bg-muted/50 p-4">
                  <h4 className="mb-2 font-bold">📊 Key Statistics:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      • 72% of employers value practical experience alongside
                      academic credentials
                    </li>
                    <li>
                      • Candidates with relevant projects are 60% more likely to
                      get interview calls
                    </li>
                    <li>
                      • Soft skills are now weighted equally with technical
                      skills in 80% of companies
                    </li>
                    <li>
                      • Networking accounts for 70% of successful job placements
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="rounded-lg border p-4">
                    <summary className="cursor-pointer font-semibold">
                      How long does it typically take to see results?
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Results vary based on individual effort and circumstances.
                      Most people start seeing meaningful progress within 3-6
                      months of consistent effort. The key is to stay committed
                      and track your progress regularly.
                    </p>
                  </details>
                  <details className="rounded-lg border p-4">
                    <summary className="cursor-pointer font-semibold">
                      What are the most important skills to focus on?
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Focus on a combination of technical competence in your
                      chosen field, strong communication skills, problem-solving
                      abilities, and adaptability. The exact mix depends on your
                      specific goals and industry.
                    </p>
                  </details>
                  <details className="rounded-lg border p-4">
                    <summary className="cursor-pointer font-semibold">
                      Can I succeed without prior experience?
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Absolutely! Everyone starts somewhere. Focus on building
                      relevant skills through projects, courses, and practical
                      exercises. Many successful professionals started with zero
                      experience and built their way up through dedication and
                      smart work.
                    </p>
                  </details>
                </div>
              </section>

              {/* Email Capture */}
              <ContentUpgrade />

              {/* Social Share Inline */}
              <SocialShare
                title={post.title}
                url={`https://www.sproutern.com/blog/${slug}`}
                description={post.excerpt}
                position="inline"
              />

              {/* Author Bio */}
              <section className="mb-8 rounded-lg border bg-muted/30 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold">Sproutern Career Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team of career experts, industry professionals, and
                      former recruiters brings decades of combined experience in
                      helping students and freshers launch successful careers.
                      We are passionate about providing actionable,
                      research-backed guidance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sponsor CTA + Newsletter — monetization & audience building */}
              <SponsorCTA />
              <NewsletterInline />

              {/* Reaction Buttons */}
              <ReactionButtons slug={slug} />

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 border-t pt-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Related Articles
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.slug}>
                        <CardContent className="p-6">
                          <h4 className="mb-2 font-semibold">
                            <Link
                              href={`/blog/${relatedPost.slug}`}
                              className="hover:text-primary"
                            >
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="mb-3 text-sm text-muted-foreground">
                            {relatedPost.excerpt.substring(0, 100)}...
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {relatedPost.readTime}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              {/* GEO: Citation Section for AI Attribution */}
              <section className="mt-8 rounded-lg border bg-muted/20 p-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Cite This Article
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  If you found this article helpful, please cite it as:
                </p>
                <div className="relative rounded-md bg-muted p-4 font-mono text-xs text-muted-foreground">
                  {citationText}
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
