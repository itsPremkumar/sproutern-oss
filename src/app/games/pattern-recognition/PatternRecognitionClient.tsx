'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Puzzle, ChevronRight, Lightbulb } from 'lucide-react';

interface Pattern {
  sequence: string[];
  answer: string;
  options: string[];
  explanation: string;
  type: string;
}

// Shape patterns using emoji/symbols for visual representation
const generatePattern = (difficulty: Difficulty): Pattern => {
  const shapes = ['🔵', '🔴', '🟢', '🟡', '🟣', '🟠'];
  const triangles = ['🔺', '🔻', '▲', '▼'];

  const patternTypes = {
    easy: ['repeat', 'alternate', 'grow'],
    medium: ['rotate', 'alternate', 'reverse', 'skip'],
    hard: ['complex', 'mirror', 'double', 'nested'],
  };

  const types = patternTypes[difficulty];
  const type = types[Math.floor(Math.random() * types.length)];

  switch (type) {
    case 'repeat': {
      // A B A B A ?
      const a = shapes[Math.floor(Math.random() * shapes.length)];
      const b = shapes.filter((s) => s !== a)[
        Math.floor(Math.random() * (shapes.length - 1))
      ];
      const sequence = [a, b, a, b, a];
      return {
        sequence,
        answer: b,
        options: [
          b,
          a,
          shapes.filter((s) => s !== a && s !== b)[0],
          shapes.filter((s) => s !== a && s !== b)[1],
        ].sort(() => Math.random() - 0.5),
        explanation: `The pattern alternates between ${a} and ${b}. After ${a} comes ${b}.`,
        type: 'Alternating Pattern',
      };
    }
    case 'alternate': {
      // A A B A A B A A ?
      const a = shapes[Math.floor(Math.random() * shapes.length)];
      const b = shapes.filter((s) => s !== a)[
        Math.floor(Math.random() * (shapes.length - 1))
      ];
      const sequence = [a, a, b, a, a, b, a, a];
      return {
        sequence,
        answer: b,
        options: [
          b,
          a,
          shapes.filter((s) => s !== a && s !== b)[0],
          shapes.filter((s) => s !== a && s !== b)[1],
        ].sort(() => Math.random() - 0.5),
        explanation: `The pattern is ${a}${a}${b} repeating. After ${a}${a} comes ${b}.`,
        type: 'Repeating Group',
      };
    }
    case 'grow': {
      // A AA AAA AAAA ?
      const a = shapes[Math.floor(Math.random() * shapes.length)];
      const sequence = [a, a + a, a + a + a, a + a + a + a];
      return {
        sequence,
        answer: a + a + a + a + a,
        options: [
          a + a + a + a + a,
          a + a + a + a,
          a + a + a + a + a + a,
          a + a + a,
        ].sort(() => Math.random() - 0.5),
        explanation: `The pattern adds one ${a} each time: 1, 2, 3, 4, so next is 5.`,
        type: 'Growing Pattern',
      };
    }
    case 'reverse': {
      // A B C D D C B A ?
      const subset = shapes.slice(0, 4);
      const reversed = [...subset].reverse();
      const sequence = [...subset, ...reversed.slice(0, -1)];
      return {
        sequence,
        answer: subset[0],
        options: subset.sort(() => Math.random() - 0.5),
        explanation: `The pattern goes forward then reverses. It ends by returning to ${subset[0]}.`,
        type: 'Reverse Pattern',
      };
    }
    case 'skip': {
      // Position-based: A _ B _ C _ ?
      const selected = shapes.slice(0, 4);
      const sequence = [
        selected[0],
        '⬜',
        selected[1],
        '⬜',
        selected[2],
        '⬜',
      ];
      return {
        sequence,
        answer: selected[3],
        options: shapes.slice(0, 4).sort(() => Math.random() - 0.5),
        explanation: `Following the colored shapes (skipping blanks), the sequence continues.`,
        type: 'Skip Pattern',
      };
    }
    default: {
      // Simple: A B C D ?
      const selected = shapes.slice(0, 5);
      const sequence = selected.slice(0, 4);
      return {
        sequence,
        answer: selected[4],
        options: shapes.slice(2, 6).sort(() => Math.random() - 0.5),
        explanation: `The pattern follows the sequence of colors.`,
        type: 'Sequential Pattern',
      };
    }
  }
};

const questionCounts = { easy: 10, medium: 12, hard: 15 };

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentPattern: Pattern | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  showHint: boolean;
  streak: number;
  bestStreak: number;
}

export default function PatternRecognitionClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentPattern: null,
    questionNumber: 0,
    totalQuestions: 10,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    isCorrect: null,
    showHint: false,
    streak: 0,
    bestStreak: 0,
  });

  const startGame = useCallback(() => {
    const pattern = generatePattern(difficulty);
    setGameState({
      phase: 'playing',
      currentPattern: pattern,
      questionNumber: 1,
      totalQuestions: questionCounts[difficulty],
      score: 0,
      correctAnswers: 0,
      selectedAnswer: null,
      isCorrect: null,
      showHint: false,
      streak: 0,
      bestStreak: 0,
    });
  }, [difficulty]);

  const handleAnswer = (answer: string) => {
    if (!gameState.currentPattern) return;

    const isCorrect = answer === gameState.currentPattern.answer;
    const points = isCorrect ? (gameState.showHint ? 5 : 10) : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      isCorrect,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextQuestion = () => {
    if (gameState.questionNumber >= gameState.totalQuestions) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      const pattern = generatePattern(difficulty);
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentPattern: pattern,
        questionNumber: prev.questionNumber + 1,
        selectedAnswer: null,
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
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <p className="text-sm text-muted-foreground">
              You'll see a sequence of shapes or colors. Identify the pattern
              and select what comes next. Look for repetitions, alternations, or
              growth patterns!
            </p>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Puzzle className="h-5 w-5" />
            Start Pattern Challenge
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
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

  const pattern = gameState.currentPattern!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Pattern {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
          <span className="text-sm">🔥 {gameState.streak}</span>
        </div>
      </div>

      {/* Pattern Card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center text-sm text-muted-foreground">
          {pattern.type}
        </div>

        <p className="mb-6 text-center text-lg">
          What comes next in the sequence?
        </p>

        {/* Sequence display */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {pattern.sequence.map((item, idx) => (
            <div
              key={idx}
              className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-muted/50 px-3 text-3xl"
            >
              {item}
            </div>
          ))}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed border-primary text-2xl font-bold text-primary">
            ?
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
                  Show pattern type (-5 points)
                </Button>
              </div>
            )}

            {/* Options */}
            <div className="flex flex-wrap justify-center gap-3">
              {pattern.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="flex h-16 min-w-16 items-center justify-center rounded-xl border-2 border-border bg-card px-4 text-3xl transition-all hover:border-primary hover:bg-primary/5"
                >
                  {option}
                </button>
              ))}
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
              <strong
                className={
                  gameState.isCorrect ? 'text-green-600' : 'text-red-600'
                }
              >
                {gameState.isCorrect
                  ? '✓ Correct!'
                  : `✗ Incorrect — Answer: ${pattern.answer}`}
              </strong>
            </div>

            <div className="mx-auto max-w-md rounded-xl bg-muted/50 p-4 text-center text-sm">
              <strong>Explanation:</strong> {pattern.explanation}
            </div>

            <div className="text-center">
              <Button
                onClick={nextQuestion}
                className="gap-2"
              >
                {gameState.questionNumber >= gameState.totalQuestions
                  ? 'See Results'
                  : 'Next Pattern'}
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
