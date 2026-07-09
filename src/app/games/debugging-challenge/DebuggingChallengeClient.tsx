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
  Bug,
  ChevronRight,
  Terminal,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

interface BugLevel {
  id: string;
  title: string;
  language: 'javascript' | 'python' | 'java';
  code: string;
  description: string;
  correctLine: number; // 1-indexed line number where the bug is
  options: {
    line: number;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  explanation: string;
}

const levels: BugLevel[] = [
  // Javascript - Easy
  {
    id: 'js_loop',
    title: 'Infinite Loop?',
    language: 'javascript',
    code: `function countToFive() {
  let i = 0;
  while (i < 5) {
    console.log(i);
    // Missing increment
  }
}`,
    description: 'This function causes the browser to freeze. Why?',
    correctLine: 4,
    options: [
      {
        line: 2,
        text: 'i should start at 1',
        isCorrect: false,
        feedback: "Starting at 1 just changes the range, doesn't freeze.",
      },
      {
        line: 3,
        text: 'Condition i < 5 is wrong',
        isCorrect: false,
        feedback: 'The condition is fine, but it never becomes false.',
      },
      {
        line: 4,
        text: 'Missing i++ inside loop',
        isCorrect: true,
        feedback:
          'Correct! Without incrementing i, the condition i < 5 stays true forever.',
      },
    ],
    explanation:
      'A `while` loop needs a condition update inside the body. `i` never changes, so `i < 5` remains true indefinitely, causing an infinite loop.',
  },
  {
    id: 'js_scope',
    title: 'Variable Access',
    language: 'javascript',
    code: `function calculateTotal() {
  if (true) {
    var tax = 10;
    let price = 100;
  }
  console.log(tax);
  console.log(price);
}`,
    description:
      'One of these console.logs throws an error. Which one and why?',
    correctLine: 7,
    options: [
      {
        line: 6,
        text: 'tax is not defined',
        isCorrect: false,
        feedback:
          '`var` is function-scoped, so `tax` IS visible here (hoisting).',
      },
      {
        line: 7,
        text: 'price is not defined',
        isCorrect: true,
        feedback:
          'Correct. `let` is block-scoped, so `price` only exists inside the `if` block.',
      },
      {
        line: 2,
        text: 'if(true) is invalid',
        isCorrect: false,
        feedback: 'if(true) is perfectly valid syntax.',
      },
    ],
    explanation:
      '`var` has function scope (hoisted), while `let` and `const` have block scope. `price` is defined inside the `if` block and cannot be accessed outside it.',
  },

  // Python
  {
    id: 'py_index',
    title: 'Index Error',
    language: 'python',
    code: `numbers = [1, 2, 3]
for i in range(4):
    print(numbers[i])`,
    description: 'This code crashes with an IndexError. Why?',
    correctLine: 2,
    options: [
      {
        line: 1,
        text: 'List declaration is wrong',
        isCorrect: false,
        feedback: 'List syntax is correct.',
      },
      {
        line: 2,
        text: 'range(4) goes 0,1,2,3',
        isCorrect: true,
        feedback:
          'Correct. The list has indices 0,1,2. Index 3 is out of bounds.',
      },
      {
        line: 3,
        text: 'print syntax error',
        isCorrect: false,
        feedback: 'Print syntax is fine.',
      },
    ],
    explanation:
      '`range(4)` produces 0, 1, 2, 3. The list `[1, 2, 3]` only has indices 0, 1, 2. Accessing `numbers[3]` throws an error.',
  },

  // Java
  {
    id: 'java_equals',
    title: 'String Comparison',
    language: 'java',
    code: `String pass = "password";
if (input == pass) {
    return true;
}
return false;`,
    description:
      'This password check often fails even with correct input. Why?',
    correctLine: 2,
    options: [
      {
        line: 1,
        text: 'String declaration wrong',
        isCorrect: false,
        feedback: 'String declaration is valid.',
      },
      {
        line: 2,
        text: 'Using == instead of .equals()',
        isCorrect: true,
        feedback: 'Correct. == compares memory references, not content.',
      },
      {
        line: 3,
        text: 'Return type mismatch',
        isCorrect: false,
        feedback:
          'Assuming void/boolean context, correct logic flaw is the operator.',
      },
    ],
    explanation:
      'In Java, `==` compares object references (memory address). To compare String contents, you must use `input.equals(pass)`.',
  },

  // Logic
  {
    id: 'logic_avg',
    title: 'Average Calculation',
    language: 'javascript',
    code: `function getAverage(a, b) {
  return a + b / 2;
}`,
    description:
      'This function returns wrong averages (e.g., avg(4,6) -> 7). Fix the bug.',
    correctLine: 2,
    options: [
      {
        line: 1,
        text: 'Arguments type error',
        isCorrect: false,
        feedback: 'It accepts numbers fine.',
      },
      {
        line: 2,
        text: 'Missing parentheses',
        isCorrect: true,
        feedback:
          'Correct. Division happens before addition due to operator precedence.',
      },
      {
        line: 2,
        text: 'Should be minus',
        isCorrect: false,
        feedback: 'No, average is sum divided by count.',
      },
    ],
    explanation:
      'Operator precedence: division `/` happens before addition `+`. `a + b / 2` calculates `a + (b/2)`. It should be `(a + b) / 2`.',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentLevel: BugLevel | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  selectedOptionIndex: number | null;
  isCorrect: boolean | null;
  streak: number;
  bestStreak: number;
  usedIndices: number[];
}

export default function DebuggingChallengeClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentLevel: null,
    questionNumber: 0,
    totalQuestions: 5,
    score: 0,
    correctAnswers: 0,
    selectedOptionIndex: null,
    isCorrect: null,
    streak: 0,
    bestStreak: 0,
    usedIndices: [],
  });

  const startGame = useCallback(() => {
    // Basic randomization
    const idx = Math.floor(Math.random() * levels.length);
    setGameState({
      phase: 'playing',
      currentLevel: levels[idx],
      questionNumber: 1,
      totalQuestions: 5,
      score: 0,
      correctAnswers: 0,
      selectedOptionIndex: null,
      isCorrect: null,
      streak: 0,
      bestStreak: 0,
      usedIndices: [idx],
    });
  }, []);

  const handleAnswer = (optionIdx: number) => {
    if (!gameState.currentLevel) return;

    const option = gameState.currentLevel.options[optionIdx];
    const isCorrect = option.isCorrect;
    const points = isCorrect ? 20 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedOptionIndex: optionIdx,
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
      let nextIdx;
      let available = levels
        .map((_, i) => i)
        .filter((i) => !gameState.usedIndices.includes(i));

      if (available.length === 0) {
        available = levels.map((_, i) => i); // Recycle
      }
      nextIdx = available[Math.floor(Math.random() * available.length)];

      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentLevel: levels[nextIdx],
        questionNumber: prev.questionNumber + 1,
        selectedOptionIndex: null,
        isCorrect: null,
        usedIndices: [...prev.usedIndices, nextIdx],
      }));
    }
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Bot Hunter</h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Mission: Find the Bug</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              You will see code snippets with logic errors, syntax mistakes, or
              performance issues. Your job is to identify the root cause of the
              bug.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Analyze the code carefully</li>
              <li>• Read the bug description</li>
              <li>• Select the option that explains the fix</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Bug className="h-5 w-5" />
            Start Debugging
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

  const level = gameState.currentLevel!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Bug {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium capitalize text-primary">
            {level.language}
          </span>
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Game Area */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Code View */}
        <div className="overflow-hidden rounded-2xl border bg-card">
          <div className="border-b bg-muted/30 px-4 py-2 font-mono text-xs text-muted-foreground">
            {level.title}
          </div>
          <div className="bg-[#1e1e1e] p-6 text-sm text-gray-300">
            <pre className="font-mono leading-relaxed">
              {level.code.split('\n').map((line, i) => (
                <div
                  key={i}
                  className="flex gap-4"
                >
                  <span className="w-6 shrink-0 select-none text-right text-gray-600">
                    {i + 1}
                  </span>
                  <span
                    className={cn(
                      'flex-1',
                      gameState.phase === 'feedback' &&
                        i + 1 === level.correctLine &&
                        'bg-red-500/20',
                    )}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        </div>

        {/* Console / Options */}
        <div className="flex flex-col rounded-2xl border bg-card p-6">
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2 font-bold text-red-500">
              <AlertTriangle className="h-4 w-4" />
              Bug Report
            </div>
            <p className="text-muted-foreground">{level.description}</p>
          </div>

          {gameState.phase === 'playing' ? (
            <div className="mt-auto space-y-3">
              <div className="mb-2 text-sm font-medium">
                What is causing this?
              </div>
              {level.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full rounded-xl border-2 border-border bg-card p-3 text-left text-sm transition-all hover:border-primary hover:bg-primary/5"
                >
                  <span className="mr-2 font-mono font-bold text-muted-foreground">
                    Line {option.line}:
                  </span>
                  {option.text}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-auto space-y-4">
              <div
                className={cn(
                  'rounded-xl border p-4',
                  gameState.isCorrect
                    ? 'border-green-200 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-200 bg-red-50 dark:bg-red-900/20',
                )}
              >
                <div className="mb-1 flex items-center gap-2 font-bold">
                  {gameState.isCorrect ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  {gameState.isCorrect ? 'Bug Squashed!' : 'Bug Persists'}
                </div>
                <p className="text-sm">
                  {level.options[gameState.selectedOptionIndex!].feedback}
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4 text-sm dark:bg-blue-900/20">
                <strong>Root Cause Analysis:</strong> {level.explanation}
              </div>

              <Button
                onClick={nextQuestion}
                className="w-full gap-2"
              >
                Next Bug <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
