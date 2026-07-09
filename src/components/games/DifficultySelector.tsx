'use client';

import { cn } from '@/lib/utils';
import { Sparkles, Zap, Flame } from 'lucide-react';

type Difficulty = 'easy' | 'medium' | 'hard';

interface DifficultySelectorProps {
  selected: Difficulty;
  onChange: (difficulty: Difficulty) => void;
  className?: string;
  disabled?: boolean;
}

const difficulties: {
  value: Difficulty;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}[] = [
  {
    value: 'easy',
    label: 'Easy',
    description: 'Perfect for beginners',
    icon: Sparkles,
    color: 'text-green-600',
    bgColor:
      'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
  },
  {
    value: 'medium',
    label: 'Medium',
    description: 'A balanced challenge',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor:
      'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
  },
  {
    value: 'hard',
    label: 'Hard',
    description: 'Test your limits',
    icon: Flame,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
  },
];

export function DifficultySelector({
  selected,
  onChange,
  className,
  disabled = false,
}: DifficultySelectorProps) {
  return (
    <div className={cn('flex flex-col gap-4 sm:flex-row', className)}>
      {difficulties.map((diff) => {
        const Icon = diff.icon;
        const isSelected = selected === diff.value;

        return (
          <button
            key={diff.value}
            onClick={() => onChange(diff.value)}
            disabled={disabled}
            className={cn(
              'flex flex-1 items-center gap-3 rounded-xl border-2 p-4 transition-all',
              isSelected
                ? `${diff.bgColor} ring-2 ring-offset-2 ring-offset-background`
                : 'border-border bg-card hover:border-primary/50',
              isSelected && diff.value === 'easy' && 'ring-green-500',
              isSelected && diff.value === 'medium' && 'ring-yellow-500',
              isSelected && diff.value === 'hard' && 'ring-red-500',
              disabled && 'cursor-not-allowed opacity-50',
            )}
          >
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg',
                isSelected ? diff.bgColor : 'bg-muted',
              )}
            >
              <Icon
                className={cn(
                  'h-5 w-5',
                  isSelected ? diff.color : 'text-muted-foreground',
                )}
              />
            </div>
            <div className="text-left">
              <div className={cn('font-bold', isSelected && diff.color)}>
                {diff.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {diff.description}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export type { Difficulty };
