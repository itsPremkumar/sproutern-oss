'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Hash, ArrowRight, HelpCircle } from 'lucide-react';

interface Problem {
  sequence: (number | string)[];
  answer: number;
  options: number[];
  pattern: string;
  missingIndex: number;
}

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentProblem: Problem | null;
  selectedAnswer: number | null;
}

const difficultySettings = {
  easy: { rounds: 8 },
  medium: { rounds: 10 },
  hard: { rounds: 12 },
};

export default function NumberSeriesClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    totalRounds: 8,
    correctAnswers: 0,
    currentProblem: null,
    selectedAnswer: null,
  });

  const settings = difficultySettings[difficulty];

  const generateProblem = useCallback((): Problem => {
    const patterns =
      difficulty === 'easy'
        ? ['add', 'subtract', 'multiply']
        : difficulty === 'medium'
          ? ['add', 'subtract', 'multiply', 'squares', 'fibonacci']
          : [
              'add',
              'subtract',
              'multiply',
              'squares',
              'fibonacci',
              'alternate',
              'cubes',
            ];

    const patternType = patterns[Math.floor(Math.random() * patterns.length)];
    let sequence: number[] = [];
    let pattern = '';

    switch (patternType) {
      case 'add': {
        const start = Math.floor(Math.random() * 20) + 1;
        const diff = Math.floor(Math.random() * 8) + 2;
        sequence = Array.from({ length: 6 }, (_, i) => start + i * diff);
        pattern = `Add ${diff} each time`;
        break;
      }
      case 'subtract': {
        const start = Math.floor(Math.random() * 30) + 50;
        const diff = Math.floor(Math.random() * 6) + 2;
        sequence = Array.from({ length: 6 }, (_, i) => start - i * diff);
        pattern = `Subtract ${diff} each time`;
        break;
      }
      case 'multiply': {
        const start = Math.floor(Math.random() * 3) + 1;
        const mult = [2, 3][Math.floor(Math.random() * 2)];
        sequence = Array.from(
          { length: 6 },
          (_, i) => start * Math.pow(mult, i),
        );
        pattern = `Multiply by ${mult} each time`;
        break;
      }
      case 'squares': {
        const start = Math.floor(Math.random() * 3) + 1;
        sequence = Array.from({ length: 6 }, (_, i) => Math.pow(start + i, 2));
        pattern = `Sequence of squares: ${start}², ${start + 1}², ${start + 2}²...`;
        break;
      }
      case 'cubes': {
        const start = Math.floor(Math.random() * 2) + 1;
        sequence = Array.from({ length: 6 }, (_, i) => Math.pow(start + i, 3));
        pattern = `Sequence of cubes: ${start}³, ${start + 1}³, ${start + 2}³...`;
        break;
      }
      case 'fibonacci': {
        const a = Math.floor(Math.random() * 3) + 1;
        const b = Math.floor(Math.random() * 3) + 1;
        sequence = [a, b];
        for (let i = 2; i < 6; i++) {
          sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        pattern = `Each number is sum of previous two`;
        break;
      }
      case 'alternate': {
        const start = Math.floor(Math.random() * 10) + 1;
        const add1 = Math.floor(Math.random() * 5) + 2;
        const add2 = Math.floor(Math.random() * 5) + 3;
        sequence = [start];
        for (let i = 1; i < 6; i++) {
          sequence.push(sequence[i - 1] + (i % 2 === 1 ? add1 : add2));
        }
        pattern = `Alternating: +${add1}, +${add2}`;
        break;
      }
      default: {
        const start = Math.floor(Math.random() * 10) + 1;
        sequence = Array.from({ length: 6 }, (_, i) => start + i * 3);
        pattern = 'Add 3 each time';
      }
    }

    const missingIndex = Math.floor(Math.random() * 4) + 1;
    const answer = sequence[missingIndex];

    const displaySequence: (number | string)[] = sequence.map((n, i) =>
      i === missingIndex ? '?' : n,
    );

    const options = new Set<number>([answer]);
    while (options.size < 4) {
      const offset = Math.floor(Math.random() * 10) - 5;
      const wrong = answer + offset;
      if (wrong > 0 && wrong !== answer && !options.has(wrong)) {
        options.add(wrong);
      }
    }

    return {
      sequence: displaySequence,
      answer,
      options: Array.from(options).sort(() => Math.random() - 0.5),
      pattern,
      missingIndex,
    };
  }, [difficulty]);

  const startGame = useCallback(() => {
    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: settings.rounds,
      correctAnswers: 0,
      currentProblem: generateProblem(),
      selectedAnswer: null,
    });
  }, [generateProblem, settings.rounds]);

  const handleAnswer = (answer: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentProblem) return;

    const isCorrect = answer === gameState.currentProblem.answer;
    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      score: isCorrect ? prev.score + 15 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    setGameState((prev) => {
      if (prev.round >= prev.totalRounds) {
        return { ...prev, phase: 'result' };
      }
      return {
        ...prev,
        phase: 'playing',
        round: prev.round + 1,
        currentProblem: generateProblem(),
        selectedAnswer: null,
      };
    });
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
            <h3 className="mb-2 font-semibold">Pattern Types:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Arithmetic sequences (add/subtract)</li>
              <li>Geometric sequences (multiply)</li>
              <li>Squares and cubes</li>
              <li>Fibonacci-like patterns</li>
            </ul>
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
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalRounds - gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const isCorrect =
    gameState.selectedAnswer === gameState.currentProblem?.answer;

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
        <div className="rounded-xl bg-amber-50 p-3 text-center dark:bg-amber-900/20">
          <div className="text-2xl font-bold text-amber-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center">
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <Hash className="h-4 w-4" />
            Find the missing number
          </span>
        </div>

        {/* Sequence display */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {gameState.currentProblem?.sequence.map((num, index) => (
            <div
              key={index}
              className={cn(
                'flex h-14 w-14 items-center justify-center rounded-xl border-2 text-xl font-bold',
                num === '?'
                  ? 'animate-pulse border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-muted',
              )}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          {gameState.currentProblem?.options.map((option, index) => {
            const isSelected = gameState.selectedAnswer === option;
            const isCorrectOption = option === gameState.currentProblem?.answer;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => handleAnswer(option)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-14 text-lg font-bold',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                {option}
              </Button>
            );
          })}
        </div>

        {gameState.phase === 'feedback' && (
          <div className="mt-6 text-center">
            <div
              className={cn(
                'mb-2 text-lg font-bold',
                isCorrect ? 'text-green-600' : 'text-red-600',
              )}
            >
              {isCorrect ? '✓ Correct!' : '✗ Wrong!'}
            </div>
            <div className="mb-4 flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <HelpCircle className="h-4 w-4" />
              {gameState.currentProblem?.pattern}
            </div>
            <Button
              onClick={nextRound}
              className="gap-2"
            >
              {gameState.round >= gameState.totalRounds
                ? 'See Results'
                : 'Next Question'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
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
