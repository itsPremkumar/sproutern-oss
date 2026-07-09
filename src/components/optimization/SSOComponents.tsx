/**
 * SSO - Social Search Optimization Components
 * Optimizes content for social media discovery and sharing
 */

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  MessageCircle,
  Copy,
  CheckCircle,
} from 'lucide-react';

/**
 * Social Share Bar
 * Floating or inline social sharing buttons
 */
export function SocialShareBar({
  url,
  title,
  description,
  variant = 'inline',
  className = '',
}: {
  url: string;
  title: string;
  description?: string;
  variant?: 'inline' | 'floating' | 'compact';
  className?: string;
}) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
  };

  if (variant === 'floating') {
    return (
      <div
        className={cn(
          'fixed left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex',
          className,
        )}
      >
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-80"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] text-white hover:opacity-80"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4267B2] text-white hover:opacity-80"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <button
          onClick={handleCopy}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
        >
          <Link2 className="h-5 w-5" />
        </button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <span className="text-sm text-muted-foreground">Share:</span>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#1DA1F2]"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#0077B5]"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#4267B2]"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <Card className={cn('p-4', className)}>
      <p className="mb-3 flex items-center gap-2 font-semibold">
        <Share2 className="h-4 w-4" />
        Share this article
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          asChild
          size="sm"
          className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90"
        >
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="mr-2 h-4 w-4" /> Twitter
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          className="bg-[#0077B5] hover:bg-[#0077B5]/90"
        >
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          className="bg-[#25D366] hover:bg-[#25D366]/90"
        >
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleCopy}
        >
          <Copy className="mr-2 h-4 w-4" /> Copy Link
        </Button>
      </div>
    </Card>
  );
}

/**
 * Social Meta Tags Component
 * Server component for Open Graph and Twitter Cards
 */
export function generateSocialMeta({
  title,
  description,
  image,
  url,
  type = 'article',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'article' | 'website' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}) {
  return {
    openGraph: {
      type,
      title,
      description,
      url,
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
      siteName: 'Sproutern',
      locale: 'en_US',
      ...(type === 'article' && {
        article: {
          publishedTime,
          modifiedTime,
          authors: author ? [author] : undefined,
          section,
          tags,
        },
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
      creator: '@sproutern',
      site: '@sproutern',
    },
  };
}

/**
 * Shareable Quote Block
 * Click-to-tweet formatted quotes
 */
export function ShareableQuote({
  quote,
  author,
  twitterHandle,
}: {
  quote: string;
  author?: string;
  twitterHandle?: string;
}) {
  const tweetText = author ? `"${quote}" - ${author}` : `"${quote}"`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&via=sproutern`;

  return (
    <blockquote className="group relative border-l-4 border-primary bg-primary/5 p-6">
      <p className="text-lg font-medium italic">&ldquo;{quote}&rdquo;</p>
      {author && (
        <footer className="mt-2 text-sm text-muted-foreground">
          — {author}
        </footer>
      )}
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-[#1DA1F2] px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        <Twitter className="h-3 w-3" />
        Tweet this
      </a>
    </blockquote>
  );
}

/**
 * Social Proof Widget
 * Shows social engagement metrics
 */
export function SocialProofWidget({
  shares,
  likes,
  comments,
}: {
  shares?: number;
  likes?: number;
  comments?: number;
}) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      {shares !== undefined && (
        <div className="flex items-center gap-1">
          <Share2 className="h-4 w-4" />
          <span>{shares.toLocaleString()} shares</span>
        </div>
      )}
      {likes !== undefined && (
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4" />
          <span>{likes.toLocaleString()} likes</span>
        </div>
      )}
      {comments !== undefined && (
        <div className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>{comments.toLocaleString()} comments</span>
        </div>
      )}
    </div>
  );
}

export default {
  SocialShareBar,
  generateSocialMeta,
  ShareableQuote,
  SocialProofWidget,
};
