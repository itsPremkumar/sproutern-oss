'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Share2,
  Linkedin,
  Twitter,
  Link2,
  CheckCircle,
} from 'lucide-react';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { NewsletterSignup } from '@/components/blog/NewsletterSignup';
import { useState } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
  category?: string;
  categorySlug?: string;
  title: string;
}

export function BlogLayout({
  children,
  category,
  categorySlug,
  title,
}: BlogLayoutProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (platform: 'linkedin' | 'twitter' | 'copy') => {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    switch (platform) {
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank',
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank',
        );
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-6">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-4xl"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-1 transition-colors hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/blog"
                  className="transition-colors hover:text-primary"
                >
                  Blog
                </Link>
                <ChevronRight className="h-4 w-4" />
              </li>
              {category && categorySlug && (
                <li className="flex items-center gap-2">
                  <Link
                    href={`/blog/category/${categorySlug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {category}
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                </li>
              )}
              <li>
                <span
                  className="line-clamp-1 font-medium text-foreground"
                  aria-current="page"
                >
                  {title}
                </span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Article Content */}
        <div id="article-content">{children}</div>

        {/* Newsletter Signup */}
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <NewsletterSignup />
          </div>
        </div>

        {/* Social Share Bar */}
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-4 border-t py-6">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4" />
                Share this article:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare('linkedin')}
                  className="rounded-full bg-[#0077b5] p-2 text-white transition-colors hover:bg-[#0077b5]/90"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="rounded-full bg-[#1da1f2] p-2 text-white transition-colors hover:bg-[#1da1f2]/90"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
                  aria-label="Copy link"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Link2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export schema helper for blog posts
export function generateArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  url,
  image,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
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
        copyrightNotice: '© 2024 Sproutern. All rights reserved.',
        license: 'https://www.sproutern.com/terms',
        acquireLicensePage: 'https://www.sproutern.com/contact',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: image || 'https://www.sproutern.com/og-default.png',
  };
}
