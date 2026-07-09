'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  Hash,
  Lightbulb,
  ChevronRight,
  CheckCircle,
  XCircle,
} from 'lucide-react';

interface Sequence {
  numbers: number[];
  answer: number;
  pattern: string;
  explanation: string;
  type: string;
}

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  currentSequence: Sequence | null;
  userAnswer: string;
  isCorrect: boolean | null;
  showHint: boolean;
  streak: number;
  bestStreak: number;
}

// Generate sequences dynamically
const generateSequence = (difficulty: Difficulty): Sequence => {
  const types = {
    easy: ['arithmetic', 'doubling', 'simple'],
    medium: ['arithmetic', 'geometric', 'fibonacci', 'squares'],
    hard: ['geometric', 'fibonacci', 'cubes', 'prime', 'mixed'],
  };

  const availableTypes = types[difficulty];
  const type =
    availableTypes[Math.floor(Math.random() * availableTypes.length)];

  switch (type) {
    case 'arithmetic': {
      const start = Math.floor(Math.random() * 20) + 1;
      const diff = Math.floor(Math.random() * 10) + 2;
      const numbers = Array.from({ length: 5 }, (_, i) => start + i * diff);
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Arithmetic Progression',
        explanation: `Each number increases by ${diff}. So ${numbers[3]} + ${diff} = ${numbers[4]}`,
        type,
      };
    }
    case 'doubling': {
      const start = Math.floor(Math.random() * 5) + 1;
      const numbers = Array.from(
        { length: 5 },
        (_, i) => start * Math.pow(2, i),
      );
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Doubling Pattern',
        explanation: `Each number doubles. So ${numbers[3]} × 2 = ${numbers[4]}`,
        type,
      };
    }
    case 'geometric': {
      const start = Math.floor(Math.random() * 3) + 1;
      const ratio = Math.floor(Math.random() * 3) + 2;
      const numbers = Array.from(
        { length: 5 },
        (_, i) => start * Math.pow(ratio, i),
      );
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Geometric Progression',
        explanation: `Each number is multiplied by ${ratio}. So ${numbers[3]} × ${ratio} = ${numbers[4]}`,
        type,
      };
    }
    case 'fibonacci': {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 5) + 1;
      const numbers = [a, b, a + b, b + (a + b), a + b + (b + (a + b))];
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Fibonacci-like Pattern',
        explanation: `Each number is the sum of the previous two. ${numbers[2]} + ${numbers[3]} = ${numbers[4]}`,
        type,
      };
    }
    case 'squares': {
      const start = Math.floor(Math.random() * 3) + 1;
      const numbers = Array.from({ length: 5 }, (_, i) =>
        Math.pow(start + i, 2),
      );
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Square Numbers',
        explanation: `These are squares: ${start + 4}² = ${numbers[4]}`,
        type,
      };
    }
    case 'cubes': {
      const start = Math.floor(Math.random() * 2) + 1;
      const numbers = Array.from({ length: 5 }, (_, i) =>
        Math.pow(start + i, 3),
      );
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Cube Numbers',
        explanation: `These are cubes: ${start + 4}³ = ${numbers[4]}`,
        type,
      };
    }
    case 'prime': {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
      const startIdx = Math.floor(Math.random() * 5);
      const numbers = primes.slice(startIdx, startIdx + 5);
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Prime Numbers',
        explanation: `These are prime numbers. The next prime after ${numbers[3]} is ${numbers[4]}`,
        type,
      };
    }
    default: {
      // Simple +1, +2, +3 pattern
      const start = Math.floor(Math.random() * 10) + 1;
      const numbers = [start, start + 1, start + 3, start + 6, start + 10];
      return {
        numbers: numbers.slice(0, 4),
        answer: numbers[4],
        pattern: 'Increasing Differences',
        explanation: `Differences increase by 1: +1, +2, +3, +4. So ${numbers[3]} + 4 = ${numbers[4]}`,
        type: 'simple',
      };
    }
  }
};

const questionCounts = { easy: 10, medium: 12, hard: 15 };

export default function NumberSequenceClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentQuestion: 0,
    totalQuestions: 10,
    score: 0,
    correctAnswers: 0,
    currentSequence: null,
    userAnswer: '',
    isCorrect: null,
    showHint: false,
    streak: 0,
    bestStreak: 0,
  });

  const startGame = useCallback(() => {
    const sequence = generateSequence(difficulty);
    setGameState({
      phase: 'playing',
      currentQuestion: 1,
      totalQuestions: questionCounts[difficulty],
      score: 0,
      correctAnswers: 0,
      currentSequence: sequence,
      userAnswer: '',
      isCorrect: null,
      showHint: false,
      streak: 0,
      bestStreak: 0,
    });
  }, [difficulty]);

  const handleSubmit = () => {
    if (!gameState.currentSequence || !gameState.userAnswer.trim()) return;

    const userNum = parseInt(gameState.userAnswer, 10);
    const isCorrect = userNum === gameState.currentSequence.answer;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      isCorrect,
      score: isCorrect
        ? prev.score +
          (prev.showHint ? 5 : 10) *
            (difficulty === 'hard' ? 2 : difficulty === 'medium' ? 1.5 : 1)
        : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextQuestion = () => {
    if (gameState.currentQuestion >= gameState.totalQuestions) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      const sequence = generateSequence(difficulty);
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentQuestion: prev.currentQuestion + 1,
        currentSequence: sequence,
        userAnswer: '',
        isCorrect: null,
        showHint: false,
      }));
    }
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
            <h3 className="mb-2 font-semibold">Pattern Types by Difficulty:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Easy:</strong> Arithmetic (+2, +3), Doubling, Simple
                patterns
              </li>
              <li>
                <strong>Medium:</strong> Geometric (×2, ×3), Fibonacci, Square
                numbers
              </li>
              <li>
                <strong>Hard:</strong> Cube numbers, Prime numbers, Mixed
                patterns
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Challenge
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={Math.round(gameState.score)}
        totalQuestions={gameState.totalQuestions}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalQuestions - gameState.correctAnswers}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Question {gameState.currentQuestion} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{Math.round(gameState.score)}</strong>
          </span>
          <span className="text-sm">🔥 {gameState.streak}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Find the next number in the sequence:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {gameState.currentSequence?.numbers.map((num, idx) => (
              <div
                key={idx}
                className="flex items-center"
              >
                <span className="rounded-xl bg-primary/10 px-5 py-3 text-2xl font-bold text-primary">
                  {num}
                </span>
                {idx < gameState.currentSequence!.numbers.length - 1 && (
                  <span className="mx-2 text-muted-foreground">,</span>
                )}
              </div>
            ))}
            <span className="text-muted-foreground">,</span>
            <span className="rounded-xl border-2 border-dashed border-primary px-5 py-3 text-2xl font-bold text-primary">
              ?
            </span>
          </div>
        </div>

        {gameState.phase === 'playing' && (
          <>
            {/* Hint */}
            {!gameState.showHint && (
              <div className="mb-4 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setGameState((prev) => ({ ...prev, showHint: true }))
                  }
                  className="gap-1 text-muted-foreground"
                >
                  <Lightbulb className="h-4 w-4" />
                  Need a hint? (-5 points)
                </Button>
              </div>
            )}

            {gameState.showHint && (
              <div className="mb-4 rounded-lg bg-yellow-50 p-3 text-center text-sm dark:bg-yellow-900/20">
                <Lightbulb className="mr-1 inline h-4 w-4 text-yellow-600" />
                <strong>Pattern:</strong> {gameState.currentSequence?.pattern}
              </div>
            )}

            {/* Answer input */}
            <div className="mx-auto flex max-w-xs gap-2">
              <Input
                type="number"
                placeholder="Your answer"
                value={gameState.userAnswer}
                onChange={(e) =>
                  setGameState((prev) => ({
                    ...prev,
                    userAnswer: e.target.value,
                  }))
                }
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className="text-center text-lg"
                autoFocus
              />
              <Button
                onClick={handleSubmit}
                disabled={!gameState.userAnswer.trim()}
              >
                Check
              </Button>
            </div>
          </>
        )}

        {gameState.phase === 'feedback' && (
          <div className="space-y-4">
            <div
              className={cn(
                'mx-auto max-w-md rounded-xl p-4 text-center',
                gameState.isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : 'bg-red-50 dark:bg-red-900/20',
              )}
            >
              {gameState.isCorrect ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <strong>Correct!</strong>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1 text-red-600">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    <strong>Incorrect</strong>
                  </div>
                  <span className="text-sm">
                    The answer was{' '}
                    <strong>{gameState.currentSequence?.answer}</strong>
                  </span>
                </div>
              )}
            </div>

            <div className="rounded-xl bg-muted/50 p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Explanation:</strong>{' '}
                {gameState.currentSequence?.explanation}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextQuestion}
                className="gap-2"
              >
                {gameState.currentQuestion >= gameState.totalQuestions
                  ? 'See Results'
                  : 'Next Question'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset */}
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
