'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Trophy, Clock, Target, Code2, ChevronLeft, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CodeGameLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: string;
  timeLimit?: number; // in seconds
  xpReward?: number;
  backLink?: string;
  className?: string;
}

const difficultyConfig = {
  easy: {
    label: 'Easy',
    color:
      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  medium: {
    label: 'Medium',
    color:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  },
  hard: {
    label: 'Hard',
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
};

export function CodeGameLayout({
  children,
  title,
  description,
  difficulty = 'medium',
  category = 'Coding Challenge',
  timeLimit,
  xpReward = 50,
  backLink = '/games/coding',
  className,
}: CodeGameLayoutProps) {
  const diffConfig = difficultyConfig[difficulty];

  return (
    <div className={cn('container py-8', className)}>
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href={backLink}
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Coding Games
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Code2 className="h-3.5 w-3.5" />
              {category}
            </div>

            {/* Difficulty Badge */}
            <div
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
                diffConfig.color,
              )}
            >
              <Target className="h-3.5 w-3.5" />
              {diffConfig.label}
            </div>

            {/* Time Limit */}
            {timeLimit && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {Math.floor(timeLimit / 60)}:
                {String(timeLimit % 60).padStart(2, '0')}
              </div>
            )}

            {/* XP Reward */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              <Zap className="h-3.5 w-3.5" />+{xpReward} XP
            </div>
          </div>

          <h1 className="mb-2 text-3xl font-bold md:text-4xl">{title}</h1>
          {description && (
            <p className="max-w-3xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}
