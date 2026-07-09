'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RelatedArticle {
  title: string;
  slug: string;
  category: string;
  readingTime?: number;
  description?: string;
}

interface RelatedArticlesProps {
  /** Current article slug to exclude */
  currentSlug?: string;
  /** Category to filter by */
  category?: string;
  /** Maximum number of articles to show */
  limit?: number;
  /** Custom title */
  title?: string;
  /** Whether to show as compact cards */
  compact?: boolean;
}

// Sample related articles data - In production, this would come from CMS/API
const allArticles: RelatedArticle[] = [
  // Interview Preparation
  {
    title: '50 Common HR Interview Questions and Best Answers',
    slug: '50-common-hr-interview-questions-and-best-answers',
    category: 'Interview Preparation',
    readingTime: 45,
    description: 'Master HR interviews with expert tips and sample answers',
  },
  {
    title: 'How to Answer "Tell Me About Yourself"',
    slug: 'how-to-answer-tell-me-about-yourself',
    category: 'Interview Preparation',
    readingTime: 10,
    description: 'Perfect your elevator pitch for interviews',
  },
  {
    title: 'Mastering the STAR Method for Behavioral Questions',
    slug: 'mastering-star-method',
    category: 'Interview Preparation',
    readingTime: 15,
    description: 'Structure your answers to behavioral questions effectively',
  },
  {
    title: 'Technical Interview Preparation Guide',
    slug: 'technical-interview-preparation',
    category: 'Interview Preparation',
    readingTime: 25,
    description: 'Complete guide to cracking technical rounds',
  },
  // Resume & Career
  {
    title: 'How to Write a Resume That Beats ATS',
    slug: 'how-to-write-a-resume-that-beats-ats',
    category: 'Resume',
    readingTime: 20,
    description: 'Get past automated screening systems',
  },
  {
    title: 'Resume Mistakes Students Should Avoid',
    slug: 'resume-mistakes-students-avoid',
    category: 'Resume',
    readingTime: 12,
    description: 'Common errors that cost you interviews',
  },
  {
    title: 'One Page Resume Guide for Freshers',
    slug: 'one-page-resume-guide',
    category: 'Resume',
    readingTime: 15,
    description: 'Create a compelling one-page resume',
  },
  // Internships
  {
    title: 'Ultimate Guide to Your First Internship',
    slug: 'ultimate-guide-first-internship',
    category: 'Internships',
    readingTime: 30,
    description: 'Everything you need to know about landing internships',
  },
  {
    title: 'Remote Internships Complete Guide',
    slug: 'remote-internships-complete-guide',
    category: 'Internships',
    readingTime: 20,
    description: 'Find and succeed in remote internships',
  },
  {
    title: 'Cold Email Templates for Internships',
    slug: 'cold-email-templates-internships',
    category: 'Internships',
    readingTime: 15,
    description: 'Outreach templates that get responses',
  },
  // Career Development
  {
    title: 'Campus Placement Preparation Guide',
    slug: 'campus-placement-preparation',
    category: 'Career',
    readingTime: 35,
    description: 'Complete guide to crack campus placements',
  },
  {
    title: 'LinkedIn Optimization for Students',
    slug: 'linkedin-optimization-students',
    category: 'Career',
    readingTime: 18,
    description: 'Build a profile that attracts recruiters',
  },
  {
    title: 'Salary Negotiation for Freshers',
    slug: 'salary-negotiation-freshers',
    category: 'Career',
    readingTime: 15,
    description: 'Negotiate your first salary confidently',
  },
  // Technical
  {
    title: 'DSA Preparation Roadmap',
    slug: 'dsa-preparation-roadmap',
    category: 'Technical',
    readingTime: 25,
    description: 'Master data structures and algorithms',
  },
  {
    title: 'System Design Interview Guide',
    slug: 'system-design-interview-guide',
    category: 'Technical',
    readingTime: 30,
    description: 'Ace system design rounds with this guide',
  },
  {
    title: 'Git and GitHub Beginner Guide',
    slug: 'git-github-beginners-guide',
    category: 'Technical',
    readingTime: 20,
    description: 'Version control fundamentals for students',
  },
];

/**
 * RelatedArticles Component
 * Displays contextually relevant articles based on category
 * Improves internal linking and user engagement
 */
export function RelatedArticles({
  currentSlug,
  category,
  limit = 3,
  title = 'Related Articles',
  compact = false,
}: RelatedArticlesProps) {
  // Filter articles by category and exclude current
  let filteredArticles = allArticles.filter(
    (article) => article.slug !== currentSlug,
  );

  // Prioritize same category articles
  if (category) {
    const sameCategoryArticles = filteredArticles.filter(
      (article) => article.category === category,
    );
    const otherArticles = filteredArticles.filter(
      (article) => article.category !== category,
    );
    // Mix: 2/3 same category, 1/3 other (for variety)
    filteredArticles = [
      ...sameCategoryArticles.slice(0, Math.ceil(limit * 0.7)),
      ...otherArticles.slice(0, Math.floor(limit * 0.3)),
    ];
  }

  // Shuffle for variety and limit
  const shuffled = filteredArticles
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

  if (shuffled.length === 0) return null;

  if (compact) {
    return (
      <aside className="related-articles my-8">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <BookOpen className="h-5 w-5 text-primary" />
          {title}
        </h3>
        <ul className="space-y-2">
          {shuffled.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="line-clamp-1">{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside className="related-articles my-12">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <TrendingUp className="h-5 w-5 text-primary" />
          {title}
        </h3>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-primary hover:underline"
        >
          View all articles →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shuffled.map((article) => (
          <Card
            key={article.slug}
            className="transition-all duration-300 hover:border-primary/50 hover:shadow-md"
          >
            <CardContent className="p-4">
              <Badge
                variant="secondary"
                className="mb-2 text-xs"
              >
                {article.category}
              </Badge>
              <Link
                href={`/blog/${article.slug}`}
                className="group"
              >
                <h4 className="mb-2 font-semibold leading-tight transition-colors group-hover:text-primary">
                  {article.title}
                </h4>
              </Link>
              {article.description && (
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {article.description}
                </p>
              )}
              {article.readingTime && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{article.readingTime} min read</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </aside>
  );
}

/**
 * InlineRelatedArticles Component
 * For use within article body - shows 2-3 related links
 */
export function InlineRelatedArticles({
  category,
  currentSlug,
}: {
  category?: string;
  currentSlug?: string;
}) {
  // Filter and get 2 related articles
  let articles = allArticles.filter((a) => a.slug !== currentSlug);

  if (category) {
    articles = articles.filter((a) => a.category === category);
  }

  const selected = articles.sort(() => Math.random() - 0.5).slice(0, 2);

  if (selected.length === 0) return null;

  return (
    <div className="my-6 rounded-lg border-l-4 border-primary/50 bg-primary/5 p-4">
      <p className="mb-2 text-sm font-semibold text-primary">
        📚 You might also like:
      </p>
      <ul className="space-y-1">
        {selected.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/blog/${article.slug}`}
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RelatedArticles;
