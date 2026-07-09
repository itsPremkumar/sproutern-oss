/**
 * Reading Time Calculator Component
 * Improves user experience and SEO engagement metrics
 */

'use client';

import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  text: string;
  wordsPerMinute?: number;
  className?: string;
}

export function ReadingTime({
  text,
  wordsPerMinute = 200,
  className,
}: ReadingTimeProps) {
  const wordCount = calculateWordCount(text);
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div
      className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}
    >
      <Clock
        className="h-4 w-4"
        aria-hidden="true"
      />
      <span>{minutes} min read</span>
    </div>
  );
}

/**
 * Calculate word count from text
 */
export function calculateWordCount(text: string): number {
  // Remove HTML tags
  const withoutHtml = text.replace(/<[^>]*>/g, '');

  // Split by whitespace and count
  const words = withoutHtml.trim().split(/\s+/);

  return words.length;
}

/**
 * Export function for use in metadata
 */
export function getReadingTime(
  text: string,
  wordsPerMinute: number = 200,
): number {
  const wordCount = calculateWordCount(text);
  return Math.ceil(wordCount / wordsPerMinute);
}
