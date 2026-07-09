/**
 * EEO - Engagement Engine Optimization Components
 * Maximizes user engagement and time on site
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Share2,
  Bookmark,
  BookOpen,
  Trophy,
  Flame,
  Star,
  ChevronRight,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

/**
 * Reading Progress Bar
 * Shows how much of the article has been read
 */
export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const newProgress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, newProgress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/**
 * Content Rating Widget
 * Allows users to rate content helpfulness
 */
export function ContentRating({
  articleId,
  onRate,
}: {
  articleId: string;
  onRate?: (rating: 'helpful' | 'not-helpful') => void;
}) {
  const [rated, setRated] = useState<'helpful' | 'not-helpful' | null>(null);

  const handleRate = (rating: 'helpful' | 'not-helpful') => {
    setRated(rating);
    onRate?.(rating);
  };

  if (rated) {
    return (
      <div className="rounded-lg border bg-green-50 p-4 text-center dark:bg-green-950">
        <p className="font-semibold text-green-700 dark:text-green-300">
          Thanks for your feedback! 🎉
        </p>
      </div>
    );
  }

  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <p className="mb-4 font-semibold">Was this article helpful?</p>
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleRate('helpful')}
            className="gap-2"
          >
            <ThumbsUp className="h-5 w-5" />
            Yes
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleRate('not-helpful')}
            className="gap-2"
          >
            <ThumbsDown className="h-5 w-5" />
            No
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Engagement Actions Bar
 * Like, bookmark, share, comment actions
 */
export function EngagementBar({
  likes = 0,
  bookmarks = 0,
  comments = 0,
  onLike,
  onBookmark,
  onShare,
  onComment,
}: {
  likes?: number;
  bookmarks?: number;
  comments?: number;
  onLike?: () => void;
  onBookmark?: () => void;
  onShare?: () => void;
  onComment?: () => void;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="flex items-center justify-between border-y py-3">
      <div className="flex gap-4">
        <button
          onClick={() => {
            setIsLiked(!isLiked);
            onLike?.();
          }}
          className={cn(
            'flex items-center gap-1 text-sm transition-colors',
            isLiked
              ? 'text-red-500'
              : 'text-muted-foreground hover:text-red-500',
          )}
        >
          <ThumbsUp className={cn('h-5 w-5', isLiked && 'fill-current')} />
          <span>{likes + (isLiked ? 1 : 0)}</span>
        </button>
        <button
          onClick={onComment}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <MessageCircle className="h-5 w-5" />
          <span>{comments}</span>
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setIsBookmarked(!isBookmarked);
            onBookmark?.();
          }}
          className={cn(
            'flex items-center gap-1 text-sm transition-colors',
            isBookmarked
              ? 'text-primary'
              : 'text-muted-foreground hover:text-primary',
          )}
        >
          <Bookmark className={cn('h-5 w-5', isBookmarked && 'fill-current')} />
        </button>
        <button
          onClick={onShare}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/**
 * Related Articles Carousel
 * Keep users engaged with related content
 */
export function RelatedArticles({
  articles,
  title = 'Keep Reading',
}: {
  articles: {
    title: string;
    url: string;
    readTime?: string;
    category?: string;
  }[];
  title?: string;
}) {
  return (
    <section className="py-8">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <BookOpen className="h-5 w-5 text-primary" />
        {title}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.url}
            href={article.url}
            className="group rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md"
          >
            {article.category && (
              <Badge
                variant="secondary"
                className="mb-2 text-xs"
              >
                {article.category}
              </Badge>
            )}
            <h4 className="line-clamp-2 font-semibold group-hover:text-primary">
              {article.title}
            </h4>
            {article.readTime && (
              <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Gamification: Achievement Badge
 */
export function AchievementBadge({
  title,
  description,
  icon,
  unlocked = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg border p-4 transition-all',
        unlocked
          ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950'
          : 'opacity-50 grayscale',
      )}
    >
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full',
          unlocked ? 'bg-yellow-500 text-white' : 'bg-muted',
        )}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {unlocked && <Trophy className="ml-auto h-6 w-6 text-yellow-500" />}
    </div>
  );
}

/**
 * Streak Counter
 * Gamification for daily visits
 */
export function StreakCounter({
  currentStreak = 0,
  longestStreak = 0,
}: {
  currentStreak?: number;
  longestStreak?: number;
}) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
            <Flame className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{currentStreak} days</p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{longestStreak} days</p>
          <p className="text-xs text-muted-foreground">Best Streak</p>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Quiz/Poll Widget
 * Interactive engagement element
 */
export function QuickPoll({
  question,
  options,
  onVote,
}: {
  question: string;
  options: string[];
  onVote?: (option: string) => void;
}) {
  const [voted, setVoted] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, number>>({});

  const handleVote = (option: string) => {
    if (voted) return;
    setVoted(option);
    // Simulate results
    const mockResults: Record<string, number> = {};
    options.forEach((opt) => {
      mockResults[opt] = Math.floor(Math.random() * 50) + 10;
    });
    mockResults[option] += 30;
    setResults(mockResults);
    onVote?.(option);
  };

  const totalVotes = Object.values(results).reduce((a, b) => a + b, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Poll 📊</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 font-medium">{question}</p>
        <div className="space-y-2">
          {options.map((option) => {
            const percentage = voted
              ? Math.round((results[option] / totalVotes) * 100)
              : 0;
            return (
              <button
                key={option}
                onClick={() => handleVote(option)}
                disabled={!!voted}
                className={cn(
                  'relative w-full rounded-lg border p-3 text-left transition-all',
                  voted
                    ? option === voted
                      ? 'border-primary bg-primary/10'
                      : ''
                    : 'hover:border-primary',
                )}
              >
                {voted && (
                  <div
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    style={{ width: `${percentage}%` }}
                  />
                )}
                <span className="relative flex justify-between">
                  <span>{option}</span>
                  {voted && (
                    <span className="font-semibold">{percentage}%</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
        {voted && (
          <p className="mt-3 text-center text-sm text-muted-foreground">
            {totalVotes} votes
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default {
  ReadingProgressBar,
  ContentRating,
  EngagementBar,
  RelatedArticles,
  AchievementBadge,
  StreakCounter,
  QuickPoll,
};
