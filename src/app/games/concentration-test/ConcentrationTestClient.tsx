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
  Target,
  Zap,
  Brain,
  CheckCircle,
  XCircle,
} from 'lucide-react';

// Stroop test - color names displayed in different colors
const colors = [
  { name: 'RED', color: 'text-red-500' },
  { name: 'BLUE', color: 'text-blue-500' },
  { name: 'GREEN', color: 'text-green-500' },
  { name: 'YELLOW', color: 'text-yellow-500' },
  { name: 'PURPLE', color: 'text-purple-500' },
  { name: 'ORANGE', color: 'text-orange-500' },
];

interface Trial {
  word: string;
  displayColor: string;
  correctAnswer: 'match' | 'mismatch';
  actualColorName: string;
}

interface GameState {
  phase: 'setup' | 'instructions' | 'playing' | 'result';
  trials: Trial[];
  currentTrial: number;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  streak: number;
  bestStreak: number;
  reactionTimes: number[];
  lastFeedback: 'correct' | 'incorrect' | null;
  trialStartTime: number;
}

const generateTrials = (count: number): Trial[] => {
  const trials: Trial[] = [];

  for (let i = 0; i < count; i++) {
    const wordColor = colors[Math.floor(Math.random() * colors.length)];
    // 50% chance of matching, 50% mismatching
    const isMatch = Math.random() > 0.5;
    let displayColor;

    if (isMatch) {
      displayColor = wordColor;
    } else {
      const others = colors.filter((c) => c.name !== wordColor.name);
      displayColor = others[Math.floor(Math.random() * others.length)];
    }

    trials.push({
      word: wordColor.name,
      displayColor: displayColor.color,
      correctAnswer: isMatch ? 'match' : 'mismatch',
      actualColorName: displayColor.name,
    });
  }

  return trials;
};

const diffSettings = {
  easy: { trials: 15, showTime: 3000 },
  medium: { trials: 20, showTime: 2000 },
  hard: { trials: 25, showTime: 1500 },
};

export default function ConcentrationTestClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    trials: [],
    currentTrial: 0,
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    streak: 0,
    bestStreak: 0,
    reactionTimes: [],
    lastFeedback: null,
    trialStartTime: 0,
  });

  const startGame = useCallback(() => {
    setGameState((prev) => ({ ...prev, phase: 'instructions' }));
  }, []);

  const beginTrials = useCallback(() => {
    const settings = diffSettings[difficulty];
    const trials = generateTrials(settings.trials);

    setGameState({
      phase: 'playing',
      trials,
      currentTrial: 0,
      score: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      streak: 0,
      bestStreak: 0,
      reactionTimes: [],
      lastFeedback: null,
      trialStartTime: Date.now(),
    });
  }, [difficulty]);

  const handleAnswer = useCallback(
    (answer: 'match' | 'mismatch') => {
      const trial = gameState.trials[gameState.currentTrial];
      if (!trial) return;

      const isCorrect = answer === trial.correctAnswer;
      const reactionTime = Date.now() - gameState.trialStartTime;

      setGameState((prev) => {
        const newCorrect = isCorrect
          ? prev.correctAnswers + 1
          : prev.correctAnswers;
        const newIncorrect = isCorrect
          ? prev.incorrectAnswers
          : prev.incorrectAnswers + 1;
        const newStreak = isCorrect ? prev.streak + 1 : 0;
        const newBestStreak =
          newStreak > prev.bestStreak ? newStreak : prev.bestStreak;

        // Score: 10 points + speed bonus (faster = more points)
        const speedBonus = isCorrect
          ? Math.max(0, Math.floor((2000 - reactionTime) / 100))
          : 0;
        const points = isCorrect ? 10 + speedBonus : 0;

        return {
          ...prev,
          score: prev.score + points,
          correctAnswers: newCorrect,
          incorrectAnswers: newIncorrect,
          streak: newStreak,
          bestStreak: newBestStreak,
          reactionTimes: [...prev.reactionTimes, reactionTime],
          lastFeedback: isCorrect ? 'correct' : 'incorrect',
        };
      });

      // Move to next trial after brief feedback
      setTimeout(() => {
        setGameState((prev) => {
          if (prev.currentTrial + 1 >= prev.trials.length) {
            return { ...prev, phase: 'result' };
          }
          return {
            ...prev,
            currentTrial: prev.currentTrial + 1,
            lastFeedback: null,
            trialStartTime: Date.now(),
          };
        });
      }, 300);
    },
    [gameState.trials, gameState.currentTrial, gameState.trialStartTime],
  );

  // Keyboard controls
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        handleAnswer('match');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        handleAnswer('mismatch');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState.phase, handleAnswer]);

  const averageReactionTime =
    gameState.reactionTimes.length > 0
      ? Math.round(
          gameState.reactionTimes.reduce((a, b) => a + b, 0) /
            gameState.reactionTimes.length,
        )
      : 0;

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
            <h3 className="mb-2 font-semibold">What is the Stroop Test?</h3>
            <p className="text-sm text-muted-foreground">
              You'll see color words displayed in different ink colors. Your
              task is to determine if the WORD matches the COLOR it's displayed
              in. This tests your brain's ability to process conflicting
              information!
            </p>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Target className="h-5 w-5" />
            Start Test
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'instructions') {
    return (
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Instructions</h2>

        <div className="mb-8 space-y-4">
          <div className="rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
            <h3 className="mb-2 flex items-center gap-2 font-semibold text-green-700">
              <CheckCircle className="h-5 w-5" /> MATCH (Press ← or A)
            </h3>
            <p className="text-sm text-muted-foreground">
              Example: <span className="font-bold text-red-500">RED</span> — The
              word "RED" is shown in red color
            </p>
          </div>

          <div className="rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
            <h3 className="mb-2 flex items-center gap-2 font-semibold text-red-700">
              <XCircle className="h-5 w-5" /> MISMATCH (Press → or D)
            </h3>
            <p className="text-sm text-muted-foreground">
              Example: <span className="font-bold text-blue-500">RED</span> —
              The word "RED" is shown in blue color
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-xl bg-muted/50 p-4 text-center text-sm">
          <p>Answer as quickly and accurately as possible!</p>
          <p className="mt-1 text-muted-foreground">
            Keyboard: ← or A for Match | → or D for Mismatch
          </p>
        </div>

        <Button
          onClick={beginTrials}
          size="lg"
          className="w-full gap-2"
        >
          <Zap className="h-5 w-5" />
          Begin
        </Button>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <div className="space-y-6">
        <ScoreBoard
          score={gameState.score}
          totalQuestions={gameState.trials.length}
          correctAnswers={gameState.correctAnswers}
          incorrectAnswers={gameState.incorrectAnswers}
          timeTaken={Math.round(
            gameState.reactionTimes.reduce((a, b) => a + b, 0) / 1000,
          )}
          streak={gameState.streak}
          bestStreak={gameState.bestStreak}
          onPlayAgain={() =>
            setGameState((prev) => ({ ...prev, phase: 'setup' }))
          }
        />

        <div className="rounded-xl bg-muted/50 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Average reaction time: <strong>{averageReactionTime}ms</strong>
            {averageReactionTime < 800 && ' — Excellent!'}
            {averageReactionTime >= 800 &&
              averageReactionTime < 1200 &&
              ' — Good!'}
            {averageReactionTime >= 1200 && ' — Keep practicing!'}
          </p>
        </div>
      </div>
    );
  }

  const currentTrial = gameState.trials[gameState.currentTrial];

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Trial {gameState.currentTrial + 1} of {gameState.trials.length}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
          <span className="text-sm">🔥 {gameState.streak}</span>
        </div>
      </div>

      {/* Trial card */}
      <div
        className={cn(
          'rounded-2xl border bg-card p-12 text-center transition-all',
          gameState.lastFeedback === 'correct' &&
            'border-green-500 bg-green-50 dark:bg-green-900/10',
          gameState.lastFeedback === 'incorrect' &&
            'border-red-500 bg-red-50 dark:bg-red-900/10',
        )}
      >
        <p className="mb-4 text-sm text-muted-foreground">
          Does the WORD match the COLOR?
        </p>

        <div
          className={cn(
            'mb-8 text-6xl font-black md:text-8xl',
            currentTrial.displayColor,
          )}
        >
          {currentTrial.word}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleAnswer('match')}
            className="gap-2 border-green-500 px-8 text-green-600 hover:bg-green-50"
          >
            <CheckCircle className="h-5 w-5" />
            Match (←)
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleAnswer('mismatch')}
            className="gap-2 border-red-500 px-8 text-red-600 hover:bg-red-50"
          >
            <XCircle className="h-5 w-5" />
            Mismatch (→)
          </Button>
        </div>
      </div>

      {/* Reset */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Restart
        </Button>
      </div>
    </div>
  );
}
