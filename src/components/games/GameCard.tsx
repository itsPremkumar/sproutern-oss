import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'All Levels';
  category:
    | 'Memory'
    | 'Logic'
    | 'Math'
    | 'Vocabulary'
    | 'Focus'
    | 'Advanced'
    | 'Science'
    | 'Coding';
  color: string;
  benefits: string[];
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Medium:
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  'All Levels':
    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
};

const categoryColors = {
  Memory: 'from-purple-500 to-pink-500',
  Logic: 'from-blue-500 to-cyan-500',
  Math: 'from-orange-500 to-red-500',
  Vocabulary: 'from-green-500 to-emerald-500',
  Focus: 'from-indigo-500 to-violet-500',
  Advanced: 'from-violet-600 to-fuchsia-500',
  Science: 'from-teal-500 to-cyan-500',
  Coding: 'from-slate-500 to-zinc-500',
};

export function GameCard({
  title,
  description,
  href,
  icon: Icon,
  difficulty,
  category,
  color,
  benefits,
}: GameCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Gradient overlay on hover */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5',
          color,
        )}
      />

      {/* Category badge */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold text-white',
            categoryColors[category],
          )}
        >
          {category}
        </span>
        <span
          className={cn(
            'rounded-full px-2 py-0.5 text-xs font-medium',
            difficultyColors[difficulty],
          )}
        >
          {difficulty}
        </span>
      </div>

      {/* Icon */}
      <div
        className={cn(
          'mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110',
          color,
        )}
      >
        <Icon className="h-7 w-7" />
      </div>

      {/* Title & Description */}
      <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
        {description}
      </p>

      {/* Benefits */}
      <div className="space-y-1">
        {benefits.slice(0, 2).map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <div className="h-1 w-1 rounded-full bg-primary" />
            {benefit}
          </div>
        ))}
      </div>

      {/* Play prompt */}
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Play Now
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
