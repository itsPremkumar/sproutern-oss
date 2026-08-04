import { ReactNode } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  Share2,
  Bookmark,
} from 'lucide-react';
import {
  generateEnhancedArticleSchema,
  generateSpeakableSchema,
  combineSchemas,
} from '@/lib/seo/geo-schema-enhanced';
import { TLDRSummary, KeyTakeaway } from '@/components/seo/ai-content-blocks';
import { Badge } from '@/components/ui/badge';
import { YouMayAlsoLike } from '@/components/blog/YouMayAlsoLike';

interface BlogArticleWrapperProps {
  /** Article title - used for H1 and schema */
  title: string;
  /** Article description for meta and schema */
  description: string;
  /** Author information for E-E-A-T */
  author?: {
    name: string;
    url: string;
    credentials: string[];
    image?: string;
  };
  /** ISO date string for publication date */
  datePublished: string;
  /** ISO date string for last modification */
  dateModified?: string;
  /** Article category/section */
  category: string;
  /** SEO keywords */
  keywords: string[];
  /** Reading time in minutes */
  readingTime: number;
  /** TL;DR bullet points for AI extraction */
  tldrPoints?: string[];
  /** Article slug for URL construction */
  slug: string;
  /** Featured image URL */
  image?: string;
  /** Main article content */
  children: ReactNode;
  /** Optional table of contents */
  showTableOfContents?: boolean;
  /** Breadcrumb items */
  breadcrumbs?: { name: string; href: string }[];
}

/**
 * GEO-Optimized Blog Article Wrapper
 *
 * Features:
 * - Enhanced Article schema for AI citation
 * - Speakable content for voice search
 * - TL;DR section for quick AI extraction
 * - E-E-A-T author attribution
 * - Breadcrumb navigation
 * - Social sharing optimization
 */
export function BlogArticleWrapper({
  title,
  description,
  author = {
    name: 'Sproutern Editorial Team',
    url: 'https://sproutern.dpdns.org/about',
    credentials: ['Career Experts', 'Content Specialists', 'Student Success'],
    image: 'https://sproutern.dpdns.org/logo.jpg',
  },
  datePublished,
  dateModified,
  category,
  keywords,
  readingTime,
  tldrPoints,
  slug,
  image,
  children,
  showTableOfContents = true,
  breadcrumbs,
}: BlogArticleWrapperProps) {
  const url = `https://sproutern.dpdns.org/blog/${slug}`;
  const modifiedDate = dateModified || datePublished;

  // Generate comprehensive schema for AI engines
  const articleSchema = generateEnhancedArticleSchema({
    headline: title,
    description,
    author: {
      name: author.name,
      url: author.url,
      credentials: author.credentials,
      image: author.image,
    },
    datePublished,
    dateModified: modifiedDate,
    keywords,
    url,
    image,
    section: category,
    readingTime,
  });

  const speakableSchema = generateSpeakableSchema({
    headline: title,
    summary: description,
    url,
    cssSelectors: [
      '.article-headline',
      '.tldr-summary',
      '.key-takeaway',
      '.definitive-answer',
    ],
  });

  // Combine schemas for single script tag
  const combinedSchema = combineSchemas(articleSchema, speakableSchema);

  // Default breadcrumbs
  const defaultBreadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    {
      name: category,
      href: `/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    },
    { name: title, href: url },
  ];

  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <>
      {/* Structured Data for AI Engines */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <article
        className="blog-article mx-auto max-w-4xl px-4 py-8"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6"
        >
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            {crumbs.map((crumb, i) => (
              <li
                key={crumb.href}
                className="flex items-center"
              >
                {i > 0 && <ChevronRight className="mx-1 h-4 w-4" />}
                {i === crumbs.length - 1 ? (
                  <span className="font-medium text-foreground">
                    {crumb.name.length > 50
                      ? crumb.name.substring(0, 50) + '...'
                      : crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary hover:underline"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          {/* Category Badge */}
          <Badge
            variant="secondary"
            className="mb-4"
          >
            {category}
          </Badge>

          {/* H1 Title - Critical for AI extraction */}
          <h1
            className="article-headline mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            itemProp="headline"
          >
            {title}
          </h1>

          {/* Description for AI context */}
          <p
            className="article-summary mb-6 text-lg text-muted-foreground md:text-xl"
            itemProp="description"
          >
            {description}
          </p>

          {/* Meta Information for E-E-A-T */}
          <div className="flex flex-wrap items-center gap-4 border-y py-4 text-sm">
            {/* Author with credentials */}
            <div
              className="flex items-center gap-2"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              {author.image && (
                <img
                  src={author.image}
                  alt={author.name}
                  className="h-10 w-10 rounded-full object-cover"
                  itemProp="image"
                />
              )}
              <div>
                <Link
                  href={author.url}
                  className="font-semibold hover:text-primary hover:underline"
                  itemProp="url"
                >
                  <span itemProp="name">{author.name}</span>
                </Link>
                <p className="text-xs text-muted-foreground">
                  {author.credentials[0]}
                </p>
              </div>
            </div>

            <div className="h-4 w-px bg-border" />

            {/* Publication Date */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time
                dateTime={datePublished}
                itemProp="datePublished"
              >
                {new Date(datePublished).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Modified Date (hidden but present for schema) */}
            <meta
              itemProp="dateModified"
              content={modifiedDate}
            />

            {/* Reading Time */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* TL;DR Summary - Critical for AI quick answers */}
        {tldrPoints && tldrPoints.length > 0 && (
          <TLDRSummary points={tldrPoints} />
        )}

        {/* Featured Image */}
        {image && (
          <figure className="mb-8">
            <img
              src={image}
              alt={title}
              className="w-full rounded-xl object-cover"
              itemProp="image"
            />
          </figure>
        )}

        {/* Main Article Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          itemProp="articleBody"
        >
          {children}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 border-t pt-8">
          {/* Author Bio for E-E-A-T */}
          <div className="mb-8 rounded-xl bg-muted/50 p-6">
            <div className="flex items-start gap-4">
              {author.image && (
                <img
                  src={author.image}
                  alt={author.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
              )}
              <div>
                <h3 className="mb-1 font-bold">About the Author</h3>
                <Link
                  href={author.url}
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  {author.name}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {author.credentials.join(' • ')}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The Sproutern Editorial Team is dedicated to helping students
                  navigate their career journey with free tools, guides, and
                  expert advice.
                </p>
              </div>
            </div>
          </div>

          {/* Keywords/Tags */}
          <div className="flex flex-wrap gap-2">
            {keywords.slice(0, 8).map((keyword) => (
              <Badge
                key={keyword}
                variant="outline"
                className="text-xs"
              >
                {keyword}
              </Badge>
            ))}
          </div>

          {/* You May Also Like Recommendations */}
          <YouMayAlsoLike
            currentSlug={slug}
            currentCategory={category}
            keywords={keywords}
            limit={4}
          />
        </footer>
      </article>
    </>
  );
}

export default BlogArticleWrapper;
