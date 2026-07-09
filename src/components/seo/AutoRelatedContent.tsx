/**
 * Auto Related Content Component
 * Automatically generates related content links for internal linking optimization
 * Part of SEO Engine 1 - Internal Linking Automation
 */

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Wrench,
  BookOpen,
  Building2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { blogPosts } from '@/lib/blog-data';

// Popular tools for fallback - hardcoded to avoid import issues
const popularTools = [
  {
    slug: 'cgpa-converter',
    name: 'CGPA to Percentage Converter',
    description: 'Convert your CGPA with university-specific formulas',
    category: 'calculator',
  },
  {
    slug: 'resume-score-checker',
    name: 'Resume Score Checker',
    description: 'Get instant feedback on your resume',
    category: 'career',
  },
  {
    slug: 'salary-calculator',
    name: 'CTC to In-Hand Salary Calculator',
    description: 'Calculate your actual take-home salary',
    category: 'calculator',
  },
  {
    slug: 'typing-test',
    name: 'Typing Speed Test',
    description: 'Test and improve your typing speed',
    category: 'productivity',
  },
  {
    slug: 'career-roadmap',
    name: 'Career Roadmap Generator',
    description: 'Get a personalized career path',
    category: 'career',
  },
];

export interface AutoRelatedContentProps {
  /** Current page slug to exclude from results */
  currentSlug: string;
  /** Type of current page */
  currentType: 'blog' | 'tool' | 'company' | 'interview';
  /** Categories/tags to match against */
  tags?: string[];
  /** Maximum items to show */
  maxItems?: number;
  /** Custom class name */
  className?: string;
  /** Layout variant */
  variant?: 'cards' | 'list' | 'inline';
}

interface RelatedItem {
  title: string;
  url: string;
  type: 'blog' | 'tool' | 'company';
  description?: string;
}

/**
 * Automatically finds and displays related content based on page type and tags.
 * Implements the internal linking automation from the traffic growth masterplan.
 */
export function AutoRelatedContent({
  currentSlug,
  currentType,
  tags = [],
  maxItems = 5,
  className = '',
  variant = 'cards',
}: AutoRelatedContentProps) {
  const relatedItems = getRelatedItems(
    currentSlug,
    currentType,
    tags,
    maxItems,
  );

  if (relatedItems.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'tool':
        return <Wrench className="h-4 w-4" />;
      case 'blog':
        return <BookOpen className="h-4 w-4" />;
      case 'company':
        return <Building2 className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  };

  // Inline variant - for embedding in article content
  if (variant === 'inline') {
    return (
      <div className={cn('my-6 rounded-lg border bg-muted/30 p-4', className)}>
        <h4 className="mb-3 flex items-center gap-2 font-semibold">
          <Sparkles className="h-4 w-4 text-primary" />
          Related Resources
        </h4>
        <ul className="space-y-2">
          {relatedItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {getIcon(item.type)}
                <span className="underline-offset-2 group-hover:underline">
                  {item.title}
                </span>
                <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // List variant - compact sidebar
  if (variant === 'list') {
    return (
      <aside className={cn('rounded-lg border bg-card p-4', className)}>
        <h3 className="mb-4 flex items-center gap-2 font-bold">
          <Sparkles className="h-4 w-4 text-primary" />
          You May Also Like
        </h3>
        <ul className="space-y-3">
          {relatedItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="group flex items-start gap-2 text-sm transition-colors hover:text-primary"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                <span className="line-clamp-2">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  // Cards variant - default, full-featured
  return (
    <section className={cn('my-12', className)}>
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <Sparkles className="h-6 w-6 text-primary" />
        Continue Your Journey
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="group"
          >
            <div className="h-full rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
              <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                {getIcon(item.type)}
                <span className="capitalize">{item.type}</span>
              </div>
              <h3 className="mb-2 line-clamp-2 font-semibold transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              {item.description && (
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
              <div className="flex items-center text-sm font-medium text-primary">
                Read more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Get related items based on current page context
 */
function getRelatedItems(
  currentSlug: string,
  currentType: string,
  tags: string[],
  maxItems: number,
): RelatedItem[] {
  const items: RelatedItem[] = [];
  const lowerTags = tags.map((t) => t.toLowerCase());

  // Strategy 1: If on a blog page, suggest related tools and blogs
  if (currentType === 'blog' || currentType === 'interview') {
    // Find related tools based on tags
    const relatedTools = popularTools
      .filter((tool) => {
        if (tool.slug === currentSlug) return false;
        // Match by category or name similarity
        const toolName = tool.name.toLowerCase();
        const toolCategory = tool.category?.toLowerCase() || '';
        return lowerTags.some(
          (tag) => toolName.includes(tag) || toolCategory.includes(tag),
        );
      })
      .slice(0, 2);

    relatedTools.forEach((tool) => {
      items.push({
        title: tool.name,
        url: `/tools/${tool.slug}`,
        type: 'tool',
        description: tool.description,
      });
    });

    // Find related blog posts
    const relatedBlogs = blogPosts
      .filter((post) => {
        if (post.slug === currentSlug) return false;
        const postTitle = post.title.toLowerCase();
        const postCategory = post.category?.toLowerCase() || '';
        return lowerTags.some(
          (tag) => postTitle.includes(tag) || postCategory.includes(tag),
        );
      })
      .slice(0, maxItems - items.length);

    relatedBlogs.forEach((post) => {
      items.push({
        title: post.title,
        url: `/blog/${post.slug}`,
        type: 'blog',
        description: post.excerpt,
      });
    });
  }

  // Strategy 2: If on a tool page, suggest related blogs and other tools
  if (currentType === 'tool') {
    // Find related blog posts
    const relatedBlogs = blogPosts
      .filter((post) => {
        if (post.slug === currentSlug) return false;
        const postTitle = post.title.toLowerCase();
        return lowerTags.some((tag) => postTitle.includes(tag));
      })
      .slice(0, 3);

    relatedBlogs.forEach((post) => {
      items.push({
        title: post.title,
        url: `/blog/${post.slug}`,
        type: 'blog',
        description: post.excerpt,
      });
    });

    // Find related tools
    const relatedTools = popularTools
      .filter((tool) => {
        if (tool.slug === currentSlug) return false;
        const toolCategory = tool.category?.toLowerCase() || '';
        return lowerTags.some((tag) => toolCategory.includes(tag));
      })
      .slice(0, maxItems - items.length);

    relatedTools.forEach((tool) => {
      items.push({
        title: tool.name,
        url: `/tools/${tool.slug}`,
        type: 'tool',
        description: tool.description,
      });
    });
  }

  // If no matches found, return popular content
  if (items.length === 0) {
    // Add popular tools
    items.push({
      title: 'CGPA to Percentage Converter',
      url: '/tools/cgpa-converter',
      type: 'tool',
      description: 'Convert your CGPA with university-specific formulas',
    });
    items.push({
      title: 'Resume Score Checker',
      url: '/tools/resume-score-checker',
      type: 'tool',
      description: 'Get instant feedback on your resume',
    });
    items.push({
      title: 'Campus Placement Preparation Guide',
      url: '/blog/campus-placement-preparation',
      type: 'blog',
      description: 'Complete 3-month strategy for placements',
    });
  }

  return items.slice(0, maxItems);
}

/**
 * Smart CTA based on content type - for contextual call-to-actions
 */
export function SmartCTA({
  contentType,
  className = '',
}: {
  contentType: 'interview' | 'blog' | 'tool' | 'company';
  className?: string;
}) {
  const getCTA = () => {
    switch (contentType) {
      case 'interview':
        return {
          text: 'Practice These Questions',
          subtext: 'Use our Mock Interview tool',
          url: '/tools/mock-interview',
          icon: <Sparkles className="h-5 w-5" />,
        };
      case 'tool':
        return {
          text: 'Save Your Results',
          subtext: 'Get weekly career tips',
          url: '#email-capture',
          icon: <BookOpen className="h-5 w-5" />,
        };
      case 'company':
        return {
          text: 'Get Alerts for This Company',
          subtext: 'Be first to know about openings',
          url: '#email-capture',
          icon: <Building2 className="h-5 w-5" />,
        };
      default:
        return {
          text: 'Explore More Resources',
          subtext: 'Free tools and guides',
          url: '/resources',
          icon: <Sparkles className="h-5 w-5" />,
        };
    }
  };

  const cta = getCTA();

  return (
    <Link
      href={cta.url}
      className={cn(
        'group flex items-center gap-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground transition-transform hover:scale-[1.02]',
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
        {cta.icon}
      </div>
      <div>
        <div className="font-bold">{cta.text}</div>
        <div className="text-sm opacity-90">{cta.subtext}</div>
      </div>
      <ArrowRight className="ml-auto h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
