'use client';

import { useEffect, useState } from 'react';

interface ReadingProgressProps {
  targetId?: string; // ID of the content container to track
}

export function ReadingProgress({
  targetId = 'article-content',
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Get the target element or use document body
      const target = targetId ? document.getElementById(targetId) : null;

      let scrollTop: number;
      let scrollHeight: number;

      if (target) {
        // Calculate progress based on target element
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top + window.scrollY;
        const elementHeight = target.offsetHeight;

        scrollTop = window.scrollY - elementTop + windowHeight * 0.5;
        scrollHeight = elementHeight;
      } else {
        // Fall back to document scrolling
        scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        scrollHeight =
          (document.documentElement.scrollHeight ||
            document.body.scrollHeight) -
          (document.documentElement.clientHeight || window.innerHeight);
      }

      const newProgress = Math.min(
        100,
        Math.max(0, (scrollTop / scrollHeight) * 100),
      );
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, [targetId]);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </div>
  );
}

// Estimated reading time calculator
export function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 200,
): number {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Reading time display component
interface ReadingTimeProps {
  minutes: number;
  className?: string;
}

export function ReadingTime({ minutes, className = '' }: ReadingTimeProps) {
  return (
    <span className={`text-sm text-muted-foreground ${className}`}>
      {minutes} min read
    </span>
  );
}
