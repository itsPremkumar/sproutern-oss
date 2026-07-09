'use client';

import React, { useState } from 'react';
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
  Send,
  Link2,
  Check,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  /** URL to share (defaults to current page) */
  url?: string;
  /** Title/text to share */
  title: string;
  /** Description for platforms that support it */
  description?: string;
  /** Hashtags for Twitter (without #) */
  hashtags?: string[];
  /** Whether to show as a compact button or full bar */
  variant?: 'compact' | 'bar' | 'floating';
  /** Custom class name */
  className?: string;
}

/**
 * Social sharing component for all pages
 * Supports: Twitter, LinkedIn, Facebook, WhatsApp, Telegram, Copy Link
 */
export function SocialShare({
  url,
  title,
  description = '',
  hashtags = ['sproutern', 'career', 'internship'],
  variant = 'bar',
  className = '',
}: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Use current URL if not provided
  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');

  // Encode for sharing
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.join(',');

  // Share URLs for each platform
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${hashtagString}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  // Copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Open share popup
  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes');
  };

  // Share button configuration
  const shareButtons = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: shareLinks.whatsapp,
      className: 'hover:bg-green-500 hover:text-white',
      bgClass: 'bg-green-500',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: shareLinks.telegram,
      className: 'hover:bg-blue-500 hover:text-white',
      bgClass: 'bg-blue-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: shareLinks.twitter,
      className: 'hover:bg-sky-500 hover:text-white',
      bgClass: 'bg-sky-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: shareLinks.linkedin,
      className: 'hover:bg-blue-700 hover:text-white',
      bgClass: 'bg-blue-700',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: shareLinks.facebook,
      className: 'hover:bg-blue-600 hover:text-white',
      bgClass: 'bg-blue-600',
    },
  ];

  // Compact variant - just a share button
  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="gap-2"
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>

        {isOpen && (
          <div className="absolute right-0 top-full z-50 mt-2 flex min-w-[200px] flex-col gap-2 rounded-lg border bg-background p-3 shadow-xl">
            <div className="mb-1 flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium">Share to</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {shareButtons.map((btn) => (
              <button
                key={btn.name}
                onClick={() => openShareWindow(btn.url)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${btn.className}`}
              >
                <btn.icon className="h-4 w-4" />
                {btn.name}
              </button>
            ))}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Link2 className="h-4 w-4" />
              )}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Floating variant - fixed position share bar
  if (variant === 'floating') {
    return (
      <div
        className={`fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 lg:flex ${className}`}
      >
        {shareButtons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => openShareWindow(btn.url)}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${btn.bgClass}`}
            title={`Share on ${btn.name}`}
          >
            <btn.icon className="h-5 w-5" />
          </button>
        ))}
        <button
          onClick={copyToClipboard}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-white shadow-lg transition-transform hover:scale-110"
          title="Copy Link"
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Link2 className="h-5 w-5" />
          )}
        </button>
      </div>
    );
  }

  // Default bar variant - horizontal share bar
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        <Share2 className="h-4 w-4" />
        Share:
      </span>
      {shareButtons.map((btn) => (
        <button
          key={btn.name}
          onClick={() => openShareWindow(btn.url)}
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${btn.className}`}
          title={`Share on ${btn.name}`}
        >
          <btn.icon className="h-4 w-4" />
        </button>
      ))}
      <button
        onClick={copyToClipboard}
        className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:bg-muted"
        title="Copy Link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

/**
 * Shareable result card for tools (e.g., typing test result, CGPA result)
 */
interface ShareableResultProps {
  /** Tool name */
  toolName: string;
  /** Result value to display */
  result: string | number;
  /** Result label */
  label: string;
  /** Additional details */
  details?: string;
  /** URL of the tool */
  toolUrl?: string;
}

export function ShareableResult({
  toolName,
  result,
  label,
  details,
  toolUrl,
}: ShareableResultProps) {
  const shareText = `I just used ${toolName} on Sproutern! My ${label}: ${result}${details ? ` - ${details}` : ''}. Try it yourself!`;

  return (
    <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/5 p-6">
      <div className="mb-4 text-center">
        <p className="mb-1 text-sm text-muted-foreground">{label}</p>
        <p className="text-4xl font-bold text-primary">{result}</p>
        {details && (
          <p className="mt-2 text-sm text-muted-foreground">{details}</p>
        )}
      </div>

      <div className="border-t pt-4">
        <p className="mb-3 text-center text-sm text-muted-foreground">
          Share your result with friends!
        </p>
        <SocialShare
          title={shareText}
          url={toolUrl}
          hashtags={[
            'sproutern',
            toolName.toLowerCase().replace(/\s+/g, ''),
            'career',
          ]}
          variant="bar"
        />
      </div>
    </div>
  );
}

/**
 * CTA banner to encourage sharing
 */
export function ShareCTA({ toolName = 'this tool' }: { toolName?: string }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-4">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
            <Share2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Found {toolName} helpful?</p>
            <p className="text-sm text-muted-foreground">
              Share it with your friends and classmates!
            </p>
          </div>
        </div>
        <SocialShare
          title={`Check out ${toolName} on Sproutern - it's completely FREE!`}
          hashtags={['sproutern', 'career', 'free', 'students']}
          variant="compact"
        />
      </div>
    </div>
  );
}
