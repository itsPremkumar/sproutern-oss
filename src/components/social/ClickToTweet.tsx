'use client';

import { Twitter } from 'lucide-react';
import { logSocialShare } from '@/lib/analytics';

interface ClickToTweetProps {
  quote: string;
  url?: string;
  hashtags?: string[];
  via?: string;
  className?: string;
}

/**
 * Click-to-Tweet component for embedding shareable quotes in blog posts
 * Creates viral potential by making it easy to share key insights
 */
export function ClickToTweet({
  quote,
  url,
  hashtags = ['Sproutern', 'CareerTips'],
  via = 'sproutern',
  className = '',
}: ClickToTweetProps) {
  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleTweet = () => {
    logSocialShare('twitter', 'click_to_tweet', shareUrl);

    const hashtagsStr = hashtags.join(',');
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}&url=${encodeURIComponent(shareUrl)}&via=${via}${hashtagsStr ? `&hashtags=${hashtagsStr}` : ''}`;

    window.open(tweetUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div
      className={`group relative my-8 cursor-pointer rounded-xl border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 transition-all hover:shadow-lg dark:from-indigo-950/30 dark:to-purple-950/30 ${className}`}
      onClick={handleTweet}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleTweet()}
    >
      {/* Quote marks */}
      <div className="absolute -left-2 -top-2 font-serif text-5xl text-indigo-200 dark:text-indigo-800">
        "
      </div>

      {/* Quote text */}
      <blockquote className="relative z-10 text-lg font-medium italic text-gray-800 dark:text-gray-200">
        {quote}
      </blockquote>

      {/* Click to tweet button */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Click to share this insight
        </span>
        <div className="flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-sky-600">
          <Twitter className="h-4 w-4" />
          <span>Tweet this</span>
        </div>
      </div>

      {/* Hover effect indicator */}
      <div className="absolute inset-0 rounded-xl opacity-0 ring-2 ring-indigo-500 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

/**
 * Inline variant for smaller quotes
 */
export function InlineClickToTweet({
  quote,
  url,
  hashtags = ['Sproutern'],
}: Omit<ClickToTweetProps, 'className'>) {
  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleTweet = () => {
    logSocialShare('twitter', 'inline_click_to_tweet', shareUrl);

    const hashtagsStr = hashtags.join(',');
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}&url=${encodeURIComponent(shareUrl)}${hashtagsStr ? `&hashtags=${hashtagsStr}` : ''}`;

    window.open(tweetUrl, '_blank', 'width=600,height=400');
  };

  return (
    <button
      onClick={handleTweet}
      className="group inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 dark:text-sky-400"
    >
      <span className="underline decoration-dotted underline-offset-2">
        {quote}
      </span>
      <Twitter className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
