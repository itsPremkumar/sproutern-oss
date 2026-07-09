'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  MousePointer,
  Clock,
  Target as TargetIcon,
} from 'lucide-react';

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
  createdAt: number;
}

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  score: number;
  hits: number;
  misses: number;
  targets: Target[];
  timeLeft: number;
  bestReaction: number;
  avgReaction: number;
  reactionTimes: number[];
}

const difficultySettings = {
  easy: { targetLife: 2000, spawnRate: 1200, targetSize: 60, timeLimit: 30 },
  medium: { targetLife: 1500, spawnRate: 900, targetSize: 50, timeLimit: 45 },
  hard: { targetLife: 1000, spawnRate: 700, targetSize: 40, timeLimit: 60 },
};

const GAME_AREA_WIDTH = 400;
const GAME_AREA_HEIGHT = 350;

export default function QuickClickChallengeClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    score: 0,
    hits: 0,
    misses: 0,
    targets: [],
    timeLeft: 30,
    bestReaction: 0,
    avgReaction: 0,
    reactionTimes: [],
  });
  const targetIdRef = useRef(0);
  const spawnIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const settings = difficultySettings[difficulty];

  const spawnTarget = useCallback(() => {
    const padding = settings.targetSize;
    const x =
      padding +
      Math.random() * (GAME_AREA_WIDTH - settings.targetSize - padding * 2);
    const y =
      padding +
      Math.random() * (GAME_AREA_HEIGHT - settings.targetSize - padding * 2);

    const newTarget: Target = {
      id: targetIdRef.current++,
      x,
      y,
      size: settings.targetSize,
      createdAt: Date.now(),
    };

    setGameState((prev) => ({
      ...prev,
      targets: [...prev.targets, newTarget],
    }));

    // Remove target after its lifetime
    setTimeout(() => {
      setGameState((prev) => {
        const stillExists = prev.targets.some((t) => t.id === newTarget.id);
        if (stillExists) {
          return {
            ...prev,
            targets: prev.targets.filter((t) => t.id !== newTarget.id),
            misses: prev.misses + 1,
          };
        }
        return prev;
      });
    }, settings.targetLife);
  }, [settings.targetSize, settings.targetLife]);

  const startGame = useCallback(() => {
    targetIdRef.current = 0;
    setGameState({
      phase: 'playing',
      score: 0,
      hits: 0,
      misses: 0,
      targets: [],
      timeLeft: settings.timeLimit,
      bestReaction: 0,
      avgReaction: 0,
      reactionTimes: [],
    });
  }, [settings.timeLimit]);

  // Spawn targets
  useEffect(() => {
    if (gameState.phase !== 'playing') {
      if (spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current);
      }
      return;
    }

    spawnTarget();
    spawnIntervalRef.current = setInterval(spawnTarget, settings.spawnRate);

    return () => {
      if (spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current);
      }
    };
  }, [gameState.phase, spawnTarget, settings.spawnRate]);

  // Timer
  useEffect(() => {
    if (gameState.phase !== 'playing') {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeLeft <= 1) {
          return { ...prev, timeLeft: 0, phase: 'result' };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState.phase]);

  const handleTargetClick = (targetId: number, createdAt: number) => {
    const reactionTime = Date.now() - createdAt;

    setGameState((prev) => {
      const newReactionTimes = [...prev.reactionTimes, reactionTime];
      const avgReaction = Math.round(
        newReactionTimes.reduce((a, b) => a + b, 0) / newReactionTimes.length,
      );
      const bestReaction = Math.min(...newReactionTimes);

      return {
        ...prev,
        targets: prev.targets.filter((t) => t.id !== targetId),
        hits: prev.hits + 1,
        score: prev.score + Math.max(10, Math.round(100 - reactionTime / 10)),
        reactionTimes: newReactionTimes,
        avgReaction,
        bestReaction,
      };
    });
  };

  const handleMissClick = () => {
    setGameState((prev) => ({
      ...prev,
      misses: prev.misses + 1,
      score: Math.max(0, prev.score - 5),
    }));
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={difficulty}
            onChange={setDifficulty}
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Click on the green targets as fast as you can</li>
              <li>Targets disappear after a short time</li>
              <li>Missing a target or clicking empty space loses points</li>
              <li>Faster clicks = more points!</li>
            </ol>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Game
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    const accuracy =
      gameState.hits + gameState.misses > 0
        ? Math.round(
            (gameState.hits / (gameState.hits + gameState.misses)) * 100,
          )
        : 0;

    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.hits + gameState.misses}
        correctAnswers={gameState.hits}
        incorrectAnswers={gameState.misses}
        accuracy={accuracy}
        timeTaken={settings.timeLimit}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        <div className="rounded-xl bg-red-50 p-3 text-center dark:bg-red-900/20">
          <div
            className={cn(
              'text-2xl font-bold',
              gameState.timeLeft <= 10
                ? 'animate-pulse text-red-600'
                : 'text-red-600',
            )}
          >
            <Clock className="mr-1 inline h-5 w-5" />
            {gameState.timeLeft}s
          </div>
          <div className="text-xs text-muted-foreground">Time</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.hits}
          </div>
          <div className="text-xs text-muted-foreground">Hits</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600">
            {gameState.avgReaction || '-'}ms
          </div>
          <div className="text-xs text-muted-foreground">Avg Time</div>
        </div>
      </div>

      <div
        ref={gameAreaRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleMissClick();
          }
        }}
        className="relative mx-auto cursor-crosshair overflow-hidden rounded-2xl border-2 border-dashed border-border bg-muted/30"
        style={{ width: GAME_AREA_WIDTH, height: GAME_AREA_HEIGHT }}
      >
        {gameState.targets.map((target) => (
          <button
            key={target.id}
            onClick={(e) => {
              e.stopPropagation();
              handleTargetClick(target.id, target.createdAt);
            }}
            className="absolute flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg transition-transform hover:scale-110 active:scale-95"
            style={{
              width: target.size,
              height: target.size,
              left: target.x,
              top: target.y,
            }}
          >
            <TargetIcon className="h-5 w-5 text-white" />
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
