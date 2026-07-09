'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Target, Eye } from 'lucide-react';

interface TargetObject {
  id: number;
  x: number;
  y: number;
  isTarget: boolean;
  isClicked: boolean;
}

interface GameState {
  phase: 'setup' | 'showing' | 'tracking' | 'select' | 'result';
  round: number;
  score: number;
  correctSelections: number;
  totalRounds: number;
  objects: TargetObject[];
  targetCount: number;
}

const difficultySettings = {
  easy: { targetCount: 2, objectCount: 6, trackingTime: 4000, rounds: 5 },
  medium: { targetCount: 3, objectCount: 8, trackingTime: 5000, rounds: 7 },
  hard: { targetCount: 4, objectCount: 10, trackingTime: 6000, rounds: 10 },
};

export default function FocusBoosterClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    correctSelections: 0,
    totalRounds: 5,
    objects: [],
    targetCount: 2,
  });
  const [countdown, setCountdown] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const settings = difficultySettings[difficulty];

  const generateObjects = useCallback(() => {
    const objects: TargetObject[] = [];
    const containerSize = 400;
    const objectSize = 50;
    const padding = 20;

    for (let i = 0; i < settings.objectCount; i++) {
      let x: number = 0,
        y: number = 0;
      let attempts = 0;
      do {
        x =
          padding + Math.random() * (containerSize - objectSize - padding * 2);
        y =
          padding + Math.random() * (containerSize - objectSize - padding * 2);
        attempts++;
      } while (
        attempts < 50 &&
        objects.some(
          (obj) =>
            Math.abs(obj.x - x) < objectSize + 10 &&
            Math.abs(obj.y - y) < objectSize + 10,
        )
      );

      objects.push({
        id: i,
        x,
        y,
        isTarget: i < settings.targetCount,
        isClicked: false,
      });
    }

    // Shuffle to randomize target positions
    return objects.sort(() => Math.random() - 0.5);
  }, [settings.objectCount, settings.targetCount]);

  const startGame = useCallback(() => {
    setGameState({
      phase: 'showing',
      round: 1,
      score: 0,
      correctSelections: 0,
      totalRounds: settings.rounds,
      objects: generateObjects(),
      targetCount: settings.targetCount,
    });
    setCountdown(3);
  }, [settings.rounds, settings.targetCount, generateObjects]);

  const nextRound = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      phase: 'showing',
      round: prev.round + 1,
      objects: generateObjects(),
    }));
    setCountdown(3);
  }, [generateObjects]);

  // Countdown and phase transitions
  useEffect(() => {
    if (gameState.phase === 'showing') {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setGameState((prev) => ({ ...prev, phase: 'tracking' }));
      }
    }
  }, [gameState.phase, countdown]);

  // Tracking phase timer
  useEffect(() => {
    if (gameState.phase === 'tracking') {
      const timer = setTimeout(() => {
        setGameState((prev) => ({ ...prev, phase: 'select' }));
      }, settings.trackingTime);
      return () => clearTimeout(timer);
    }
  }, [gameState.phase, settings.trackingTime]);

  // Object movement during tracking
  useEffect(() => {
    if (gameState.phase !== 'tracking') return;

    const interval = setInterval(() => {
      setGameState((prev) => ({
        ...prev,
        objects: prev.objects.map((obj) => ({
          ...obj,
          x: Math.max(20, Math.min(330, obj.x + (Math.random() - 0.5) * 40)),
          y: Math.max(20, Math.min(330, obj.y + (Math.random() - 0.5) * 40)),
        })),
      }));
    }, 500);

    return () => clearInterval(interval);
  }, [gameState.phase]);

  const handleObjectClick = (id: number) => {
    if (gameState.phase !== 'select') return;

    const clickedObj = gameState.objects.find((o) => o.id === id);
    if (!clickedObj || clickedObj.isClicked) return;

    setGameState((prev) => {
      const newObjects = prev.objects.map((o) =>
        o.id === id ? { ...o, isClicked: true } : o,
      );
      const clickedCount = newObjects.filter((o) => o.isClicked).length;
      const correctClicks = newObjects.filter(
        (o) => o.isClicked && o.isTarget,
      ).length;
      const newScore = clickedObj.isTarget ? prev.score + 20 : prev.score - 10;
      const newCorrectSelections = clickedObj.isTarget
        ? prev.correctSelections + 1
        : prev.correctSelections;

      // Check if all selections made
      if (clickedCount >= prev.targetCount) {
        const isLastRound = prev.round >= prev.totalRounds;
        return {
          ...prev,
          objects: newObjects,
          score: Math.max(0, newScore),
          correctSelections: newCorrectSelections,
          phase: isLastRound ? 'result' : 'select',
        };
      }

      return {
        ...prev,
        objects: newObjects,
        score: Math.max(0, newScore),
        correctSelections: newCorrectSelections,
      };
    });
  };

  // Check if round is complete
  useEffect(() => {
    if (gameState.phase !== 'select') return;

    const clickedCount = gameState.objects.filter((o) => o.isClicked).length;
    if (
      clickedCount >= gameState.targetCount &&
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
              <li>Watch the highlighted targets carefully</li>
              <li>Track them as they move around the screen</li>
              <li>When they stop, click on the ones you were tracking</li>
              <li>Complete all rounds to see your focus score!</li>
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
    const totalPossible = gameState.totalRounds * settings.targetCount;
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
        {gameState.phase === 'showing' && (
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
              <Target className="h-5 w-5 animate-pulse" />
              Keep tracking the targets!
            </div>
          </div>
        )}

        {gameState.phase === 'select' && (
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-green-600">
              <Target className="h-5 w-5" />
              Click the targets you were tracking!
            </div>
            <p className="text-sm text-muted-foreground">
              {gameState.targetCount -
                gameState.objects.filter((o) => o.isClicked).length}{' '}
              remaining
            </p>
          </div>
        )}

        <div
          ref={containerRef}
          className="relative mx-auto rounded-xl bg-muted/30"
          style={{ width: 400, height: 400 }}
        >
          {gameState.objects.map((obj) => (
            <button
              key={obj.id}
              onClick={() => handleObjectClick(obj.id)}
              disabled={gameState.phase !== 'select' || obj.isClicked}
              className={cn(
                'absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300',
                gameState.phase === 'showing' &&
                  obj.isTarget &&
                  'bg-primary ring-4 ring-primary/50',
                gameState.phase === 'tracking' &&
                  'bg-slate-400 dark:bg-slate-600',
                gameState.phase === 'select' &&
                  !obj.isClicked &&
                  'cursor-pointer bg-slate-400 hover:scale-110 dark:bg-slate-600',
                obj.isClicked &&
                  obj.isTarget &&
                  'bg-green-500 ring-4 ring-green-500/50',
                obj.isClicked &&
                  !obj.isTarget &&
                  'bg-red-500 ring-4 ring-red-500/50',
              )}
              style={{
                left: obj.x,
                top: obj.y,
              }}
            >
              {gameState.phase === 'showing' && obj.isTarget && (
                <Target className="h-6 w-6 text-white" />
              )}
            </button>
          ))}
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
