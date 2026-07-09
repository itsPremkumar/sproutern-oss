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
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface GameState {
  phase: 'setup' | 'countdown' | 'playing' | 'result';
  score: number;
  streak: number;
  bestStreak: number;
  correct: number;
  wrong: number;
  currentDirection: Direction | null;
  timeLeft: number;
  showPrompt: boolean;
}

const directions: {
  dir: Direction;
  key: string;
  icon: React.ElementType;
  color: string;
}[] = [
  { dir: 'up', key: 'ArrowUp', icon: ArrowUp, color: 'bg-blue-500' },
  { dir: 'down', key: 'ArrowDown', icon: ArrowDown, color: 'bg-green-500' },
  { dir: 'left', key: 'ArrowLeft', icon: ArrowLeft, color: 'bg-red-500' },
  { dir: 'right', key: 'ArrowRight', icon: ArrowRight, color: 'bg-purple-500' },
];

const difficultySettings = {
  easy: { timeLimit: 30, promptDuration: 1500, pauseDuration: 500 },
  medium: { timeLimit: 45, promptDuration: 1000, pauseDuration: 400 },
  hard: { timeLimit: 60, promptDuration: 700, pauseDuration: 300 },
};

export default function SpeedFocusGameClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    score: 0,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    wrong: 0,
    currentDirection: null,
    timeLeft: 30,
    showPrompt: false,
  });
  const [countdown, setCountdown] = useState(3);
  const promptTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasRespondedRef = useRef(false);

  const settings = difficultySettings[difficulty];

  const getRandomDirection = (): Direction => {
    return directions[Math.floor(Math.random() * directions.length)].dir;
  };

  const showNextPrompt = useCallback(() => {
    hasRespondedRef.current = false;
    const newDirection = getRandomDirection();

    setGameState((prev) => ({
      ...prev,
      currentDirection: newDirection,
      showPrompt: true,
    }));

    promptTimeoutRef.current = setTimeout(() => {
      if (!hasRespondedRef.current) {
        // Missed the prompt
        setGameState((prev) => ({
          ...prev,
          wrong: prev.wrong + 1,
          streak: 0,
          showPrompt: false,
        }));
      }

      setTimeout(() => {
        setGameState((prev) => {
          if (prev.phase === 'playing' && prev.timeLeft > 0) {
            showNextPrompt();
          }
          return prev;
        });
      }, settings.pauseDuration);
    }, settings.promptDuration);
  }, [settings.promptDuration, settings.pauseDuration]);

  const startGame = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: 'countdown' }));
    setCountdown(3);
  }, []);

  // Countdown
  useEffect(() => {
    if (gameState.phase !== 'countdown') return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameState({
        phase: 'playing',
        score: 0,
        streak: 0,
        bestStreak: 0,
        correct: 0,
        wrong: 0,
        currentDirection: null,
        timeLeft: settings.timeLimit,
        showPrompt: false,
      });
      showNextPrompt();
    }
  }, [gameState.phase, countdown, settings.timeLimit, showNextPrompt]);

  // Game timer
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    if (gameState.timeLeft <= 0) {
      if (promptTimeoutRef.current) {
        clearTimeout(promptTimeoutRef.current);
      }
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const timer = setTimeout(() => {
      setGameState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameState.phase, gameState.timeLeft]);

  // Keyboard handler
  useEffect(() => {
    if (
      gameState.phase !== 'playing' ||
      !gameState.showPrompt ||
      hasRespondedRef.current
    )
      return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasRespondedRef.current) return;

      const pressedDir = directions.find((d) => d.key === e.key);
      if (!pressedDir) return;

      hasRespondedRef.current = true;
      const isCorrect = pressedDir.dir === gameState.currentDirection;

      if (promptTimeoutRef.current) {
        clearTimeout(promptTimeoutRef.current);
      }

      setGameState((prev) => {
        const newStreak = isCorrect ? prev.streak + 1 : 0;
        const streakBonus = isCorrect && newStreak >= 5 ? newStreak : 0;

        return {
          ...prev,
          score: isCorrect ? prev.score + 10 + streakBonus : prev.score,
          streak: newStreak,
          bestStreak: Math.max(newStreak, prev.bestStreak),
          correct: isCorrect ? prev.correct + 1 : prev.correct,
          wrong: isCorrect ? prev.wrong : prev.wrong + 1,
          showPrompt: false,
        };
      });

      setTimeout(() => {
        setGameState((prev) => {
          if (prev.phase === 'playing' && prev.timeLeft > 0) {
            showNextPrompt();
          }
          return prev;
        });
      }, settings.pauseDuration);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    gameState.phase,
    gameState.showPrompt,
    gameState.currentDirection,
    settings.pauseDuration,
    showNextPrompt,
  ]);

  const handleButtonClick = (dir: Direction) => {
    if (
      gameState.phase !== 'playing' ||
      !gameState.showPrompt ||
      hasRespondedRef.current
    )
      return;

    hasRespondedRef.current = true;
    const isCorrect = dir === gameState.currentDirection;

    if (promptTimeoutRef.current) {
      clearTimeout(promptTimeoutRef.current);
    }

    setGameState((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const streakBonus = isCorrect && newStreak >= 5 ? newStreak : 0;

      return {
        ...prev,
        score: isCorrect ? prev.score + 10 + streakBonus : prev.score,
        streak: newStreak,
        bestStreak: Math.max(newStreak, prev.bestStreak),
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        wrong: isCorrect ? prev.wrong : prev.wrong + 1,
        showPrompt: false,
      };
    });

    setTimeout(() => {
      setGameState((prev) => {
        if (prev.phase === 'playing' && prev.timeLeft > 0) {
          showNextPrompt();
        }
        return prev;
      });
    }, settings.pauseDuration);
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
              <li>Watch for the arrow prompt</li>
              <li>Press the matching arrow key (or tap the button)</li>
              <li>Be quick - prompts have a time limit!</li>
              <li>Build streaks for bonus points</li>
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

  if (gameState.phase === 'countdown') {
    return (
      <div className="rounded-2xl border bg-card p-12 text-center">
        <div className="animate-pulse text-6xl font-bold text-primary">
          {countdown}
        </div>
        <p className="mt-4 text-muted-foreground">Get ready...</p>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.correct + gameState.wrong}
        correctAnswers={gameState.correct}
        incorrectAnswers={gameState.wrong}
        bestStreak={gameState.bestStreak}
        timeTaken={settings.timeLimit}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const currentDirData = directions.find(
    (d) => d.dir === gameState.currentDirection,
  );
  const CurrentIcon = currentDirData?.icon;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        <div
          className={cn(
            'rounded-xl p-3 text-center',
            gameState.timeLeft <= 10
              ? 'bg-red-50 dark:bg-red-900/20'
              : 'bg-blue-50 dark:bg-blue-900/20',
          )}
        >
          <div
            className={cn(
              'text-2xl font-bold',
              gameState.timeLeft <= 10
                ? 'animate-pulse text-red-600'
                : 'text-blue-600',
            )}
          >
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
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600">
            {gameState.correct}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
        <div className="rounded-xl bg-orange-50 p-3 text-center dark:bg-orange-900/20">
          <div className="text-2xl font-bold text-orange-600">
            {gameState.streak}🔥
          </div>
          <div className="text-xs text-muted-foreground">Streak</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-8">
        {/* Prompt area */}
        <div className="mb-6 flex h-32 items-center justify-center">
          {gameState.showPrompt && CurrentIcon && (
            <div
              className={cn(
                'flex h-24 w-24 animate-pulse items-center justify-center rounded-2xl text-white',
                currentDirData?.color,
              )}
            >
              <CurrentIcon className="h-16 w-16" />
            </div>
          )}
          {!gameState.showPrompt && (
            <div className="text-muted-foreground">Wait for it...</div>
          )}
        </div>

        {/* Control buttons for mobile */}
        <div className="mx-auto grid max-w-[200px] grid-cols-3 gap-2">
          <div />
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleButtonClick('up')}
            className="h-14"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
          <div />
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleButtonClick('left')}
            className="h-14"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleButtonClick('down')}
            className="h-14"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleButtonClick('right')}
            className="h-14"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Use arrow keys or tap the buttons
        </p>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => {
            if (promptTimeoutRef.current) {
              clearTimeout(promptTimeoutRef.current);
            }
            setGameState((prev) => ({ ...prev, phase: 'setup' }));
          }}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
