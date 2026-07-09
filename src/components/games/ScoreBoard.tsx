'use client';

import {
  Trophy,
  Target,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ScoreBoardProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeTaken?: number; // in seconds
  accuracy?: number;
  streak?: number;
  bestStreak?: number;
  labelOverride?: {
    total?: string;
    score?: string;
  };
  onPlayAgain: () => void;
  onShare?: () => void;
  className?: string;
}

export function ScoreBoard({
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  timeTaken,
  accuracy,
  streak,
  bestStreak,
  labelOverride,
  onPlayAgain,
  onShare,
  className,
}: ScoreBoardProps) {
  const percentage =
    Math.round((score / (totalQuestions * 10)) * 100) ||
    Math.round((correctAnswers / totalQuestions) * 100) ||
    0;
  const calculatedAccuracy =
    accuracy ?? Math.round((correctAnswers / totalQuestions) * 100); // Keep original for now, as diff didn't explicitly remove it from here.

  const getScoreMessage = () => {
    if (calculatedAccuracy >= 90)
      return { text: "Outstanding! You're a genius!", emoji: '🏆' };
    if (calculatedAccuracy >= 70)
      return { text: 'Great job! Keep it up!', emoji: '🌟' };
    if (calculatedAccuracy >= 50)
      return { text: 'Good effort! Room to improve.', emoji: '👍' };
    return { text: "Don't give up! Practice makes perfect.", emoji: '💪' };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const message = getScoreMessage();

  return (
    <div
      className={cn(
        'rounded-2xl border border-border/50 bg-gradient-to-br from-card to-muted/30 p-8 shadow-xl',
        className,
      )}
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4 text-6xl">{message.emoji}</div>
        <h2 className="mb-2 text-3xl font-black">Game Complete!</h2>
        <p className="text-lg text-muted-foreground">{message.text}</p>
      </div>

      {/* Main Score */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
            <span className="text-4xl font-black">{score}</span>
            <span className="text-sm opacity-90">Points</span>
          </div>
          <Trophy className="absolute -right-2 -top-2 h-8 w-8 text-yellow-500" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-green-50 p-4 text-center dark:bg-green-900/20">
          <CheckCircle className="mx-auto mb-2 h-6 w-6 text-green-600" />
          <div className="text-2xl font-bold text-green-600">
            {correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>

        <div className="rounded-xl bg-red-50 p-4 text-center dark:bg-red-900/20">
          <XCircle className="mx-auto mb-2 h-6 w-6 text-red-600" />
          <div className="text-2xl font-bold text-red-600">
            {incorrectAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Incorrect</div>
        </div>

        <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/20">
          <Target className="mx-auto mb-2 h-6 w-6 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">
            {calculatedAccuracy}%
          </div>
          <div className="text-xs text-muted-foreground">Accuracy</div>
        </div>

        {timeTaken !== undefined && (
          <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/20">
            <Clock className="mx-auto mb-2 h-6 w-6 text-purple-600" />
            <div className="text-2xl font-bold text-purple-600">
              {formatTime(timeTaken)}
            </div>
            <div className="text-xs text-muted-foreground">Time Taken</div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        {onPlayAgain && (
          <Button
            size="lg"
            onClick={onPlayAgain}
            className="gap-2"
          >
            <RotateCcw className="h-5 w-5" />
            Play Again
          </Button>
        )}
        {onShare && (
          <Button
            size="lg"
            variant="outline"
            onClick={onShare}
            className="gap-2"
          >
            <Share2 className="h-5 w-5" />
            Share Score
          </Button>
        )}
      </div>
    </div>
  );
}
