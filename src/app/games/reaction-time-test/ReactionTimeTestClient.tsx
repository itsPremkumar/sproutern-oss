'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Zap, Timer, Trophy } from 'lucide-react';

type Phase = 'ready' | 'waiting' | 'go' | 'result' | 'early' | 'complete';

interface GameState {
  phase: Phase;
  trials: number[];
  currentTrial: number;
  totalTrials: number;
  startTime: number;
}

export default function ReactionTimeTestClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'ready',
    trials: [],
    currentTrial: 0,
    totalTrials: 5,
    startTime: 0,
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTrial = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: 'waiting' }));

    // Random delay between 1-4 seconds
    const delay = Math.random() * 3000 + 1000;

    timeoutRef.current = setTimeout(() => {
      setGameState((prev) => ({
        ...prev,
        phase: 'go',
        startTime: Date.now(),
      }));
    }, delay);
  }, []);

  const handleClick = () => {
    if (gameState.phase === 'ready') {
      startTrial();
    } else if (gameState.phase === 'waiting') {
      // Clicked too early
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setGameState((prev) => ({ ...prev, phase: 'early' }));
    } else if (gameState.phase === 'go') {
      const reactionTime = Date.now() - gameState.startTime;
      const newTrials = [...gameState.trials, reactionTime];
      const isComplete = newTrials.length >= gameState.totalTrials;

      setGameState((prev) => ({
        ...prev,
        phase: isComplete ? 'complete' : 'result',
        trials: newTrials,
        currentTrial: prev.currentTrial + 1,
      }));
    } else if (gameState.phase === 'result' || gameState.phase === 'early') {
      startTrial();
    }
  };

  const restart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setGameState({
      phase: 'ready',
      trials: [],
      currentTrial: 0,
      totalTrials: 5,
      startTime: 0,
    });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getAverageTime = () => {
    if (gameState.trials.length === 0) return 0;
    return Math.round(
      gameState.trials.reduce((a, b) => a + b, 0) / gameState.trials.length,
    );
  };

  const getBestTime = () => {
    if (gameState.trials.length === 0) return 0;
    return Math.min(...gameState.trials);
  };

  const getRating = (ms: number) => {
    if (ms < 200)
      return { text: 'Incredible!', emoji: '🏆', color: 'text-yellow-500' };
    if (ms < 250)
      return { text: 'Excellent!', emoji: '⚡', color: 'text-green-500' };
    if (ms < 300) return { text: 'Good', emoji: '👍', color: 'text-blue-500' };
    if (ms < 350)
      return { text: 'Average', emoji: '😊', color: 'text-gray-500' };
    return { text: 'Keep practicing!', emoji: '💪', color: 'text-orange-500' };
  };

  if (gameState.phase === 'complete') {
    const avgTime = getAverageTime();
    const bestTime = getBestTime();
    const rating = getRating(avgTime);

    return (
      <div className="rounded-2xl border bg-gradient-to-br from-card to-muted/30 p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mb-4 text-6xl">{rating.emoji}</div>
          <h2 className="mb-2 text-3xl font-black">Test Complete!</h2>
          <p className={cn('text-xl font-bold', rating.color)}>{rating.text}</p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-primary/10 p-6 text-center">
            <Timer className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-4xl font-black text-primary">{avgTime}ms</div>
            <div className="text-sm text-muted-foreground">Average Time</div>
          </div>
          <div className="rounded-xl bg-yellow-500/10 p-6 text-center">
            <Zap className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
            <div className="text-4xl font-black text-yellow-500">
              {bestTime}ms
            </div>
            <div className="text-sm text-muted-foreground">Best Time</div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-center font-semibold">All Trials</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {gameState.trials.map((time, i) => (
              <span
                key={i}
                className={cn(
                  'rounded-full px-3 py-1 text-sm font-medium',
                  time === bestTime ? 'bg-yellow-500 text-white' : 'bg-muted',
                )}
              >
                {time}ms
              </span>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          onClick={restart}
          className="w-full gap-2"
        >
          <RotateCcw className="h-5 w-5" />
          Try Again
        </Button>
      </div>
    );
  }

  const getPhaseContent = () => {
    switch (gameState.phase) {
      case 'ready':
        return {
          bg: 'bg-blue-500',
          text: 'Click to Start',
          subtext: 'Wait for green, then click as fast as you can!',
          icon: Play,
        };
      case 'waiting':
        return {
          bg: 'bg-red-500',
          text: 'Wait...',
          subtext: 'Wait for the screen to turn green',
          icon: Timer,
        };
      case 'go':
        return {
          bg: 'bg-green-500',
          text: 'CLICK NOW!',
          subtext: '',
          icon: Zap,
        };
      case 'early':
        return {
          bg: 'bg-orange-500',
          text: 'Too Early!',
          subtext: 'Wait for green. Click to try again.',
          icon: RotateCcw,
        };
      case 'result': {
        const lastTime = gameState.trials[gameState.trials.length - 1];
        return {
          bg: 'bg-primary',
          text: `${lastTime}ms`,
          subtext: `Trial ${gameState.currentTrial} of ${gameState.totalTrials}. Click to continue.`,
          icon: Trophy,
        };
      }
      default:
        return {
          bg: 'bg-gray-500',
          text: 'Loading...',
          subtext: '',
          icon: Timer,
        };
    }
  };

  const content = getPhaseContent();
  const Icon = content.icon;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: gameState.totalTrials }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-3 w-12 rounded-full transition-colors',
              i < gameState.trials.length ? 'bg-green-500' : 'bg-muted',
            )}
          />
        ))}
      </div>

      {/* Main game area */}
      <button
        onClick={handleClick}
        className={cn(
          'w-full cursor-pointer select-none rounded-2xl p-12 text-white transition-colors md:p-20',
          content.bg,
        )}
      >
        <div className="text-center">
          <Icon className="mx-auto mb-4 h-16 w-16" />
          <div className="mb-2 text-4xl font-black md:text-6xl">
            {content.text}
          </div>
          {content.subtext && (
            <p className="text-lg opacity-90">{content.subtext}</p>
          )}
        </div>
      </button>

      {/* Stats */}
      {gameState.trials.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-muted p-3 text-center">
            <div className="text-2xl font-bold">{getAverageTime()}ms</div>
            <div className="text-xs text-muted-foreground">Average</div>
          </div>
          <div className="rounded-xl bg-muted p-3 text-center">
            <div className="text-2xl font-bold">{getBestTime()}ms</div>
            <div className="text-xs text-muted-foreground">Best</div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={restart}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
