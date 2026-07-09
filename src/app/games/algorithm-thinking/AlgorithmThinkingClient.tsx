'use client';

import { useState, useCallback } from 'react';
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
  GitBranch,
  ChevronRight,
  Workflow,
  ArrowRight,
} from 'lucide-react';

interface AlgorithmLevel {
  id: string;
  title: string;
  description: string;
  steps: string[]; // Steps in random order
  correctOrder: string[]; // Correct order
  hint: string;
}

const levels: AlgorithmLevel[] = [
  {
    id: 'swap',
    title: 'Swap Two Variables',
    description:
      'Arrange the steps to swap the values of variable A and B using a temporary variable Temp.',
    steps: ['Set B = Temp', 'Set Temp = A', 'Set A = B'],
    correctOrder: ['Set Temp = A', 'Set A = B', 'Set B = Temp'],
    hint: 'First save A before you overwrite it!',
  },
  {
    id: 'max_array',
    title: 'Find Max in Array',
    description: 'Logic to find the largest number in a list of numbers.',
    steps: [
      'Return Max',
      'If Number > Max, Set Max = Number',
      'Loop through each Number in List',
      'Set Max = First Number',
    ],
    correctOrder: [
      'Set Max = First Number',
      'Loop through each Number in List',
      'If Number > Max, Set Max = Number',
      'Return Max',
    ],
    hint: 'Initialize first, then loop and compare.',
  },
  {
    id: 'binary_search',
    title: 'Binary Search Step',
    description:
      'Arrange the logic for one step of Binary Search finding Target.',
    steps: [
      'If Target < Mid, search Left Half',
      'Calculate Mid Index',
      'If Target > Mid, search Right Half',
      'If Target == Mid, Found!',
    ],
    correctOrder: [
      'Calculate Mid Index',
      'If Target == Mid, Found!',
      'If Target < Mid, search Left Half',
      'If Target > Mid, search Right Half', // Note: exact order of < and > checks doesn't strictly matter for correctness usually, but for canonical algos usually equality check is early. We'll implement lenient checking or enforce standard.
    ],
    hint: 'Find the middle first. Check if we found it. Then decide which way to go.',
  },
  {
    id: 'sum_loop',
    title: 'Sum Numbers 1 to N',
    description: 'Calculate the sum of all numbers from 1 to N.',
    steps: ['Add i to Sum', 'Set Sum = 0', 'Return Sum', 'Loop i from 1 to N'],
    correctOrder: [
      'Set Sum = 0',
      'Loop i from 1 to N',
      'Add i to Sum',
      'Return Sum',
    ],
    hint: 'Initialize accumulator, loop, add, then result.',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentLevel: AlgorithmLevel | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  userOrder: string[];
  isCorrect: boolean | null;
  streak: number;
  bestStreak: number;
  usedIndices: number[];
}

export default function AlgorithmThinkingClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentLevel: null,
    questionNumber: 0,
    totalQuestions: 4,
    score: 0,
    userOrder: [],
    isCorrect: null,
    streak: 0,
    bestStreak: 0,
    usedIndices: [],
  });

  const startGame = useCallback(() => {
    const idx = 0; // Start with first logic puzzle for now, or random
    const level = levels[idx];
    setGameState({
      phase: 'playing',
      currentLevel: level,
      questionNumber: 1,
      totalQuestions: levels.length,
      score: 0,
      userOrder: [...level.steps].sort(() => Math.random() - 0.5),
      isCorrect: null,
      streak: 0,
      bestStreak: 0,
      usedIndices: [idx],
    });
  }, []);

  const moveItem = (fromIdx: number, toIdx: number) => {
    const newOrder = [...gameState.userOrder];
    const [removed] = newOrder.splice(fromIdx, 1);
    newOrder.splice(toIdx, 0, removed);
    setGameState((prev) => ({ ...prev, userOrder: newOrder }));
  };

  const checkOrder = () => {
    if (!gameState.currentLevel) return;

    // Simple exact match check
    const isCorrect = gameState.userOrder.every(
      (step, i) => step === gameState.currentLevel?.correctOrder[i],
    );

    // For binary search, we might need lenient check for < vs > order, but let's stick to strict for MVP simplicity
    // Points logic
    const points = isCorrect ? 25 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      isCorrect,
      score: prev.score + points,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextLevel = () => {
    if (gameState.questionNumber >= levels.length) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      // Find next unused
      const nextIdx = levels.findIndex(
        (_, i) => !gameState.usedIndices.includes(i),
      );
      if (nextIdx === -1) {
        setGameState((prev) => ({ ...prev, phase: 'result' })); // Should not happen with current logic
        return;
      }

      const level = levels[nextIdx];
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentLevel: level,
        questionNumber: prev.questionNumber + 1,
        userOrder: [...level.steps].sort(() => Math.random() - 0.5),
        isCorrect: null,
        usedIndices: [...prev.usedIndices, nextIdx],
      }));
    }
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Algorithm Architect
          </h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Mission: Design the Logic</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Programming is 90% logic and 10% syntax. Can you arrange the steps
              to solve the problem efficiently?
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Drag and drop steps to reorder them</li>
              <li>• Think about flow: Init → Process → Result</li>
              <li>• Build core algorithms like Search and Sort</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <GitBranch className="h-5 w-5" />
            Start Designing
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
        correctAnswers={Math.ceil(gameState.score / 25)} // Approx
        incorrectAnswers={
          gameState.totalQuestions - Math.ceil(gameState.score / 25)
        }
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const level = gameState.currentLevel!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Puzzle {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold">{level.title}</h3>
          <p className="text-muted-foreground">{level.description}</p>
        </div>

        <div className="mx-auto max-w-md space-y-3">
          {gameState.userOrder.map((step, idx) => (
            <div
              key={step}
              className="flex gap-3"
            >
              <div className="flex h-12 w-8 shrink-0 flex-col items-center justify-center text-sm font-bold text-muted-foreground/50">
                {idx + 1}
                {idx < gameState.userOrder.length - 1 && (
                  <div className="mt-1 h-3 w-0.5 bg-border" />
                )}
              </div>

              <div
                className={cn(
                  'flex-1 rounded-xl border-2 bg-background p-3 text-sm font-medium transition-all',
                  gameState.phase === 'playing'
                    ? 'cursor-grab border-border active:cursor-grabbing'
                    : gameState.isCorrect && level.correctOrder[idx] === step
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/20',
                )}
              >
                <div className="flex items-center justify-between">
                  {step}
                  {gameState.phase === 'playing' && (
                    <div className="flex flex-col gap-1">
                      <button
                        disabled={idx === 0}
                        onClick={() => moveItem(idx, idx - 1)}
                        className="h-4 w-4 rounded bg-muted hover:bg-muted-foreground/20 disabled:opacity-20"
                      >
                        ▲
                      </button>
                      <button
                        disabled={idx === gameState.userOrder.length - 1}
                        onClick={() => moveItem(idx, idx + 1)}
                        className="h-4 w-4 rounded bg-muted hover:bg-muted-foreground/20 disabled:opacity-20"
                      >
                        ▼
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          {gameState.phase === 'playing' ? (
            <Button
              onClick={checkOrder}
              size="lg"
              className="w-full max-w-xs gap-2"
            >
              Verify Logic <Workflow className="h-4 w-4" />
            </Button>
          ) : (
            <div className="space-y-4 duration-300 animate-in fade-in zoom-in">
              <div
                className={cn(
                  'mx-auto max-w-xs rounded-xl p-3 font-bold',
                  gameState.isCorrect
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                )}
              >
                {gameState.isCorrect ? 'Perfect Logic!' : 'Logic Flaw Detected'}
              </div>

              {!gameState.isCorrect && (
                <div className="text-sm text-yellow-600 dark:text-yellow-400">
                  Hint: {level.hint}
                </div>
              )}

              <Button
                onClick={nextLevel}
                className="gap-2"
              >
                Next Puzzle <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
