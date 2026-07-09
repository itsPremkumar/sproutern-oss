'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Eye, Target, Crosshair } from 'lucide-react';

interface MovingObject {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  isTarget: boolean;
  isSelected: boolean;
}

interface GameState {
  phase: 'setup' | 'highlight' | 'tracking' | 'select' | 'result';
  round: number;
  score: number;
  objects: MovingObject[];
  targetCount: number;
  totalRounds: number;
  correctSelections: number;
  totalSelections: number;
}

const difficultySettings = {
  easy: { targets: 2, total: 6, speed: 1.5, trackTime: 5000, rounds: 5 },
  medium: { targets: 3, total: 8, speed: 2.5, trackTime: 6000, rounds: 7 },
  hard: { targets: 4, total: 10, speed: 3.5, trackTime: 7000, rounds: 10 },
};

const CONTAINER_SIZE = 380;
const OBJECT_SIZE = 36;

export default function AttentionTrainerClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    objects: [],
    targetCount: 2,
    totalRounds: 5,
    correctSelections: 0,
    totalSelections: 0,
  });
  const [countdown, setCountdown] = useState(3);
  const animationRef = useRef<number>();

  const settings = difficultySettings[difficulty];

  const generateObjects = useCallback(() => {
    const objects: MovingObject[] = [];

    for (let i = 0; i < settings.total; i++) {
      objects.push({
        id: i,
        x: OBJECT_SIZE + Math.random() * (CONTAINER_SIZE - OBJECT_SIZE * 3),
        y: OBJECT_SIZE + Math.random() * (CONTAINER_SIZE - OBJECT_SIZE * 3),
        vx: (Math.random() - 0.5) * settings.speed * 2,
        vy: (Math.random() - 0.5) * settings.speed * 2,
        isTarget: i < settings.targets,
        isSelected: false,
      });
    }

    return objects.sort(() => Math.random() - 0.5);
  }, [settings.total, settings.targets, settings.speed]);

  const startGame = useCallback(() => {
    setGameState({
      phase: 'highlight',
      round: 1,
      score: 0,
      objects: generateObjects(),
      targetCount: settings.targets,
      totalRounds: settings.rounds,
      correctSelections: 0,
      totalSelections: 0,
    });
    setCountdown(3);
  }, [generateObjects, settings.targets, settings.rounds]);

  const nextRound = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      phase: 'highlight',
      round: prev.round + 1,
      objects: generateObjects(),
    }));
    setCountdown(3);
  }, [generateObjects]);

  // Highlight phase countdown
  useEffect(() => {
    if (gameState.phase !== 'highlight') return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameState((prev) => ({ ...prev, phase: 'tracking' }));
    }
  }, [gameState.phase, countdown]);

  // Tracking phase timer
  useEffect(() => {
    if (gameState.phase !== 'tracking') return;

    const timer = setTimeout(() => {
      setGameState((prev) => ({ ...prev, phase: 'select' }));
    }, settings.trackTime);

    return () => clearTimeout(timer);
  }, [gameState.phase, settings.trackTime]);

  // Animation loop for tracking phase
  useEffect(() => {
    if (gameState.phase !== 'tracking') {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = () => {
      setGameState((prev) => ({
        ...prev,
        objects: prev.objects.map((obj) => {
          let newX = obj.x + obj.vx;
          let newY = obj.y + obj.vy;
          let newVx = obj.vx;
          let newVy = obj.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= CONTAINER_SIZE - OBJECT_SIZE) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(CONTAINER_SIZE - OBJECT_SIZE, newX));
          }
          if (newY <= 0 || newY >= CONTAINER_SIZE - OBJECT_SIZE) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(CONTAINER_SIZE - OBJECT_SIZE, newY));
          }

          return { ...obj, x: newX, y: newY, vx: newVx, vy: newVy };
        }),
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState.phase]);

  const handleObjectClick = (id: number) => {
    if (gameState.phase !== 'select') return;

    const obj = gameState.objects.find((o) => o.id === id);
    if (!obj || obj.isSelected) return;

    setGameState((prev) => {
      const newObjects = prev.objects.map((o) =>
        o.id === id ? { ...o, isSelected: true } : o,
      );
      const selectedCount = newObjects.filter((o) => o.isSelected).length;
      const newCorrect = obj.isTarget
        ? prev.correctSelections + 1
        : prev.correctSelections;
      const newScore = obj.isTarget
        ? prev.score + 25
        : Math.max(0, prev.score - 10);

      if (selectedCount >= prev.targetCount) {
        // Round complete
        const isLastRound = prev.round >= prev.totalRounds;
        return {
          ...prev,
          objects: newObjects,
          score: newScore,
          correctSelections: newCorrect,
          totalSelections: prev.totalSelections + prev.targetCount,
          phase: isLastRound ? 'result' : 'select',
        };
      }

      return {
        ...prev,
        objects: newObjects,
        score: newScore,
        correctSelections: newCorrect,
      };
    });
  };

  // Check if need to advance to next round
  useEffect(() => {
    if (gameState.phase !== 'select') return;

    const selectedCount = gameState.objects.filter((o) => o.isSelected).length;
    if (
      selectedCount >= gameState.targetCount &&
      gameState.round < gameState.totalRounds
    ) {
      const timer = setTimeout(nextRound, 1500);
      return () => clearTimeout(timer);
    }
  }, [
    gameState.objects,
    gameState.phase,
    gameState.targetCount,
    gameState.round,
    gameState.totalRounds,
    nextRound,
  ]);

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
              <li>Watch carefully as targets are highlighted</li>
              <li>Track the targets as all objects start moving</li>
              <li>When objects stop, click on the targets you tracked</li>
              <li>Complete all rounds to get your score!</li>
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
    const totalPossible = gameState.totalRounds * settings.targets;
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={totalPossible}
        correctAnswers={gameState.correctSelections}
        incorrectAnswers={totalPossible - gameState.correctSelections}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const selectedCount = gameState.objects.filter((o) => o.isSelected).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.round}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Round</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600">
            {gameState.targetCount}
          </div>
          <div className="text-xs text-muted-foreground">Targets</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {gameState.phase === 'highlight' && (
          <div className="mb-4 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-lg font-semibold text-primary">
              <Eye className="h-5 w-5" />
              Remember the highlighted targets!
            </div>
            <div className="text-4xl font-bold text-primary">{countdown}</div>
          </div>
        )}

        {gameState.phase === 'tracking' && (
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-amber-600">
              <Crosshair className="h-5 w-5 animate-pulse" />
              Keep tracking the targets!
            </div>
          </div>
        )}

        {gameState.phase === 'select' && (
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-green-600">
              <Target className="h-5 w-5" />
              Click on the targets you tracked!
            </div>
            <p className="text-sm text-muted-foreground">
              {gameState.targetCount - selectedCount} remaining
            </p>
          </div>
        )}

        <div
          className="relative mx-auto overflow-hidden rounded-xl bg-muted/30"
          style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
        >
          {gameState.objects.map((obj) => {
            const showHighlight =
              gameState.phase === 'highlight' && obj.isTarget;
            const showResult =
              gameState.phase === 'select' &&
              selectedCount >= gameState.targetCount;

            return (
              <button
                key={obj.id}
                onClick={() => handleObjectClick(obj.id)}
                disabled={gameState.phase !== 'select' || obj.isSelected}
                className={cn(
                  'absolute flex items-center justify-center rounded-full transition-colors',
                  showHighlight && 'bg-primary ring-4 ring-primary/50',
                  gameState.phase === 'tracking' && 'bg-slate-500',
                  gameState.phase === 'select' &&
                    !obj.isSelected &&
                    'cursor-pointer bg-slate-500 hover:bg-slate-400',
                  obj.isSelected &&
                    obj.isTarget &&
                    'bg-green-500 ring-4 ring-green-500/50',
                  obj.isSelected &&
                    !obj.isTarget &&
                    'bg-red-500 ring-4 ring-red-500/50',
                  showResult &&
                    !obj.isSelected &&
                    obj.isTarget &&
                    'bg-yellow-500 ring-2 ring-yellow-500/50',
                )}
                style={{
                  width: OBJECT_SIZE,
                  height: OBJECT_SIZE,
                  left: obj.x,
                  top: obj.y,
                  transition:
                    gameState.phase === 'tracking'
                      ? 'none'
                      : 'background-color 0.3s',
                }}
              >
                {showHighlight && <Target className="h-5 w-5 text-white" />}
              </button>
            );
          })}
        </div>
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
