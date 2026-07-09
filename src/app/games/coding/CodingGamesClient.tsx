'use client';

import * as React from 'react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Bug,
  Swords,
  Blocks,
  Terminal,
  Zap,
  ChevronRight,
  Search,
  Filter,
  LucideIcon,
} from 'lucide-react';

type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';
type Status = 'All' | 'Available' | 'Coming Soon';

interface CodingGame {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  difficulty: string;
  xp: number;
  isNew?: boolean;
  comingSoon?: boolean;
  languages?: string[];
  features?: string[];
}

const codingGames: CodingGame[] = [
  {
    slug: 'code-battle',
    title: 'Code Battle',
    description:
      'Solve problems faster than the AI. Race against optimized solutions in real-time coding challenges.',
    icon: Swords,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    difficulty: 'Medium',
    xp: 50,
    languages: ['JavaScript', 'Python'],
    features: ['AI Opponent', 'Timer', 'XP Rewards'],
  },
  {
    slug: 'debug-arena',
    title: 'Debug Arena',
    description:
      'Find and fix bugs in real code. Practice debugging skills with real-world scenarios.',
    icon: Bug,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    difficulty: 'Easy-Hard',
    xp: 30,
    languages: ['JavaScript', 'Python'],
    features: ['Hint System', 'Test Cases', 'Multiple Levels'],
  },
  {
    slug: 'algorithm-builder',
    title: 'Algorithm Builder',
    description:
      'Build algorithms step-by-step. Fill in the missing pieces and learn algorithm design patterns.',
    icon: Blocks,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    difficulty: 'Medium',
    xp: 40,
    isNew: true,
    languages: ['JavaScript', 'Python'],
    features: ['Step-by-Step', 'Visual Hints', 'Pattern Learning'],
  },
  {
    slug: 'output-prediction',
    title: 'Output Prediction',
    description:
      'Predict what the code will output. Test your code reading and understanding skills.',
    icon: Terminal,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    difficulty: 'Easy-Hard',
    xp: 25,
    isNew: true,
    languages: ['JavaScript', 'Python'],
    features: ['Live Testing', 'Explanations', 'Tricky Gotchas'],
  },
  {
    slug: 'refactor-challenge',
    title: 'Refactor Challenge',
    description:
      'Optimize inefficient code. Learn performance tuning and clean code principles.',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    difficulty: 'Medium-Hard',
    xp: 35,
    isNew: true,
    languages: ['JavaScript', 'Python'],
    features: ['Performance Comparison', 'Best Practices', 'Code Review'],
  },
  {
    slug: 'regex-master',
    title: 'Regex Master',
    description:
      'Write regex patterns to match text. Live testing shows results in real-time!',
    icon: Code2,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    difficulty: 'Easy-Hard',
    xp: 30,
    isNew: true,
    languages: ['JavaScript'],
    features: ['Live Preview', 'Quick Reference', 'Pattern Validation'],
  },
];

const difficulties: Difficulty[] = ['All', 'Easy', 'Medium', 'Hard'];
const statuses: Status[] = ['All', 'Available', 'Coming Soon'];

export default function CodingGamesClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>('All');
  const [statusFilter, setStatusFilter] = useState<Status>('All');

  const filteredGames = useMemo(() => {
    return codingGames.filter((game) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.features?.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      // Difficulty filter
      const matchesDifficulty =
        difficultyFilter === 'All' ||
        game.difficulty.toLowerCase().includes(difficultyFilter.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === 'All' ||
        (statusFilter === 'Available' && !game.comingSoon) ||
        (statusFilter === 'Coming Soon' && game.comingSoon);

      return matchesSearch && matchesDifficulty && matchesStatus;
    });
  }, [searchQuery, difficultyFilter, statusFilter]);

  // Get counts
  const availableCount = codingGames.filter((g) => !g.comingSoon).length;
  const comingSoonCount = codingGames.filter((g) => g.comingSoon).length;

  return (
    <>
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative mx-auto max-w-xl">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search games by name, feature, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Difficulty Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Difficulty:
            </span>
            <div className="flex gap-1">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setDifficultyFilter(diff)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    difficultyFilter === diff
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Status:
            </span>
            <div className="flex gap-1">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    statusFilter === status
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {status}
                  {status === 'All' && (
                    <span className="ml-1 opacity-70">
                      ({codingGames.length})
                    </span>
                  )}
                  {status === 'Available' && (
                    <span className="ml-1 opacity-70">({availableCount})</span>
                  )}
                  {status === 'Coming Soon' && (
                    <span className="ml-1 opacity-70">({comingSoonCount})</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <motion.div
        layout
        className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredGames.map((game) => {
            const Icon = game.icon;
            const isClickable = !game.comingSoon;

            const content = (
              <motion.div
                key={game.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className={`group relative overflow-hidden rounded-2xl border ${game.bgColor} p-6 transition-all duration-300 ${
                  isClickable
                    ? 'cursor-pointer hover:scale-[1.02] hover:shadow-xl'
                    : 'opacity-80'
                }`}
              >
                {/* New Badge */}
                {game.isNew && (
                  <div className="absolute right-4 top-4 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white">
                    NEW
                  </div>
                )}

                {/* Coming Soon Badge */}
                {game.comingSoon && (
                  <div className="absolute right-4 top-4 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${game.color}`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold">{game.title}</h3>

                {/* Description */}
                <p className="mb-4 text-sm text-muted-foreground">
                  {game.description}
                </p>

                {/* Features */}
                {game.features && (
                  <div className="mb-4 flex flex-wrap gap-1">
                    {game.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-background/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Meta */}
                <div className="flex items-center gap-3">
                  <span className="rounded bg-muted px-2 py-1 text-xs font-medium">
                    {game.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                    <Zap className="h-3 w-3" />+{game.xp} XP
                  </span>
                  {game.languages && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Code2 className="h-3 w-3" />
                      {game.languages.slice(0, 2).join(', ')}
                      {game.languages.length > 2 && '...'}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                {isClickable && (
                  <ChevronRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                )}
              </motion.div>
            );

            return isClickable ? (
              <Link
                key={game.slug}
                href={`/games/coding/${game.slug}`}
              >
                {content}
              </Link>
            ) : (
              <div key={game.slug}>{content}</div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredGames.length === 0 && (
        <div className="py-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-muted p-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold">No games found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters to find what you&apos;re
            looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setDifficultyFilter('All');
              setStatusFilter('All');
            }}
            className="mt-4 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Clear all filters
          </button>
        </div>
      )}
    </>
  );
}
