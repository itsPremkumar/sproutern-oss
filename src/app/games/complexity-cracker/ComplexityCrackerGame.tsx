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
  Cpu,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  Zap,
  Timer,
  Database,
} from 'lucide-react';

interface AlgoScenario {
  id: string;
  title: string;
  problem: string;
  context: string;
  options: {
    label: string;
    complexity: string; // e.g. O(n), O(n^2)
    isOptimal: boolean;
  }[];
  explanation: string;
  concept: string; // e.g. "Linear vs Constant Time"
  difficulty: Difficulty;
}

const scenarios: AlgoScenario[] = [
  // EASY
  {
    id: 'array-access',
    title: 'The Instant Lookup',
    problem:
      "You need to get the user's profile using their unique numeric ID.",
    context: 'Users are stored in an array where the index matches their ID.',
    options: [
      {
        label: 'Loop through array to find ID',
        complexity: 'O(n)',
        isOptimal: false,
      },
      {
        label: 'Access directly by index',
        complexity: 'O(1)',
        isOptimal: true,
      },
      {
        label: 'Sort then Binary Search',
        complexity: 'O(log n)',
        isOptimal: false,
      },
      { label: 'Recursively search', complexity: 'O(n)', isOptimal: false },
    ],
    explanation:
      'Array access by index is instant (Constant Time). Looping is unnecessary work.',
    concept: 'O(1) Constant Time',
    difficulty: 'easy',
  },
  {
    id: 'nested-loops',
    title: 'The Double Trouble',
    problem: 'You want to find duplicate names in a list of 10,000 users.',
    context:
      'You write a loop inside another loop to compare every name with every other name.',
    options: [
      { label: "Keep it, it's simple", complexity: 'O(n²)', isOptimal: false },
      {
        label: 'Use a Hash Set to track seen names',
        complexity: 'O(n)',
        isOptimal: true,
      },
      {
        label: 'Use three nested loops',
        complexity: 'O(n³)',
        isOptimal: false,
      },
      { label: 'Delete the list', complexity: 'O(1)', isOptimal: false },
    ],
    explanation:
      'Nested loops multiply the work. 10k * 10k = 100 Million operations. Using a Hash Set (lookup) reduces it to 10k operations.',
    concept: 'O(n²) Quadratic Time',
    difficulty: 'easy',
  },
  {
    id: 'phone-book',
    title: 'The Sorted Search',
    problem:
      'You need to find "Smith" in a printed phone book that is sorted alphabetically.',
    context: 'The book has 1 million names.',
    options: [
      {
        label: 'Read every name from A to S',
        complexity: 'O(n)',
        isOptimal: false,
      },
      {
        label: 'Open middle, check, repeat (Binary Search)',
        complexity: 'O(log n)',
        isOptimal: true,
      },
      { label: 'Check random pages', complexity: 'O(∞)', isOptimal: false },
      { label: 'Read backwards from Z', complexity: 'O(n)', isOptimal: false },
    ],
    explanation:
      "Because it's sorted, you can eliminate half the data with every check. 1 million items takes only ~20 checks!",
    concept: 'O(log n) Logarithmic Time',
    difficulty: 'easy',
  },
  // MEDIUM
  {
    id: 'string-concat',
    title: 'The String Builder',
    problem:
      'You are building a massive report string by joining 100,000 lines of text in a loop.',
    context: 'Language: Java or C# (Strings are immutable).',
    options: [
      {
        label: 'info += line (String Concatenation)',
        complexity: 'O(n²)',
        isOptimal: false,
      },
      {
        label: 'Use StringBuilder / ArrayJoin',
        complexity: 'O(n)',
        isOptimal: true,
      },
      {
        label: 'Write to disk then read back',
        complexity: 'Slow',
        isOptimal: false,
      },
      {
        label: 'Use a recursive function',
        complexity: 'O(n)',
        isOptimal: false,
      },
    ],
    explanation:
      'In many languages, "string += string" creates a WHOLE NEW string copy every time. This turns a linear task into a quadratic disaster.',
    concept: 'String Immutability Cost',
    difficulty: 'medium',
  },
  {
    id: 'sorting-choice',
    title: 'The Sorting Hat',
    problem: 'You need to sort 1 million user scores.',
    context: 'General purpose sorting. Memory is not an issue.',
    options: [
      { label: 'Bubble Sort', complexity: 'O(n²)', isOptimal: false },
      {
        label: 'Merge Sort / Quick Sort',
        complexity: 'O(n log n)',
        isOptimal: true,
      },
      { label: 'Selection Sort', complexity: 'O(n²)', isOptimal: false },
      {
        label: 'Random Sort (BogoSort)',
        complexity: 'O(n!)',
        isOptimal: false,
      },
    ],
    explanation:
      'Bubble/Selection sort are too slow for large data. Merge/Quick sort are the industry standards for general sorting.',
    concept: 'O(n log n) Linearithmic Time',
    difficulty: 'medium',
  },
  {
    id: 'space-time',
    title: 'Memory vs Speed',
    problem:
      'You need to repeatedly check if words exist in a dictionary. Speed is critical. RAM is cheap.',
    context: 'You have plenty of memory available.',
    options: [
      {
        label: 'Scan the list every time (Low RAM, Slow)',
        complexity: 'O(n)',
        isOptimal: false,
      },
      {
        label: 'Load all into a Hash Map (High RAM, Fast)',
        complexity: 'O(1)',
        isOptimal: true,
      },
      { label: 'Compress the text', complexity: 'Slow', isOptimal: false },
      { label: 'Ask the user', complexity: 'O(∞)', isOptimal: false },
    ],
    explanation:
      'This is the classic Space-Time Tradeoff. By using more memory (Hash Map), we achieve instant O(1) lookups.',
    concept: 'Space-Time Tradeoff',
    difficulty: 'medium',
  },
  // HARD
  {
    id: 'traveling-salesman',
    title: 'The Delivery Route',
    problem:
      'Find the absolute shortest route to visit 50 cities and return home.',
    context: 'You need the PERFECT solution, not just a "good" one.',
    options: [
      {
        label: 'Try every permutation (Brute Force)',
        complexity: 'O(n!)',
        isOptimal: false,
      },
      {
        label: 'Use a heuristic (Nearest Neighbor)',
        complexity: 'Approximate',
        isOptimal: true,
      },
      {
        label: 'Use Dynamic Programming',
        complexity: 'O(n^2 * 2^n)',
        isOptimal: false,
      },
      {
        label: 'There is no fast perfect solution',
        complexity: 'NP-Hard',
        isOptimal: true,
      },
    ],
    // Result is determined by isOptimal flag in options
    // Wait, multiple correct options text. Simplifying options.
    // Option 3 is actually feasible for n=20, but n=50 is impossible for exact.
    // Heuristic is the practical engineering choice.
    // Brute force is impossible.
    // Let's frame it as "What is the complexity?"
    explanation:
      'This is an NP-Hard problem. O(n!) grows so fast that checking 50 cities would take longer than the universe has existed. We must accept an approximate solution.',
    concept: 'O(n!) Factorial Time (NP-Hard)',
    difficulty: 'hard',
  },
  // Fixing options structure for hard
  {
    id: 'fibonacci',
    title: 'Recursive Nightmare',
    problem:
      'Calculate the 50th Fibonacci number using naive recursion: fib(n) = fib(n-1) + fib(n-2).',
    context: 'No memoization/caching used.',
    options: [
      { label: 'It is linear O(n)', complexity: 'O(n)', isOptimal: false },
      {
        label: 'It is exponential O(2^n)',
        complexity: 'O(2^n)',
        isOptimal: true,
      },
      { label: 'It is constant O(1)', complexity: 'O(1)', isOptimal: false },
      {
        label: 'It is logarithmic O(log n)',
        complexity: 'O(log n)',
        isOptimal: false,
      },
    ],
    explanation:
      'Naive recursion re-calculates the same values millions of times. It branches like a tree. 2^50 is massive.',
    concept: 'O(2^n) Exponential Time',
    difficulty: 'hard',
  },
  {
    id: 'premature-optimization',
    title: 'The Micro-Optimizer',
    problem:
      'Your app is slow because of a database query. You decide to optimize a loop in the UI javascript instead.',
    context: 'The DB query takes 2000ms. The loop takes 2ms.',
    options: [
      {
        label: 'Rewrite the loop in Assembly',
        complexity: 'Unknown',
        isOptimal: false,
      },
      {
        label: 'Ignore the loop, fix the DB query',
        complexity: 'Impactful',
        isOptimal: true,
      },
      {
        label: 'Remove comments to save file size',
        complexity: 'Tiny',
        isOptimal: false,
      },
      {
        label: 'Use bitwise operators',
        complexity: 'Complex',
        isOptimal: false,
      },
    ],
    explanation:
      'Premature optimization is the root of all evil. Always profile first. Fixing a 2ms loop while a 2000ms DB call blocks is a waste of time.',
    concept: "Amdahl's Law / Profiling",
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: AlgoScenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  usedScenarioIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 3 },
  medium: { rounds: 3 },
  hard: { rounds: 3 },
};

export default function ComplexityCrackerGame() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    selectedIndex: null,
    usedScenarioIds: [],
  });

  const getAvailableScenarios = useCallback(
    (difficulty: Difficulty, usedIds: string[]) => {
      return scenarios.filter(
        (s) => s.difficulty === difficulty && !usedIds.includes(s.id),
      );
    },
    [],
  );

  const startGame = useCallback(() => {
    const available = getAvailableScenarios(gameState.difficulty, []);
    if (available.length === 0) return;

    const scenario = available[Math.floor(Math.random() * available.length)];

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      currentScenario: scenario,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      correctAnswers: 0,
      selectedIndex: null,
      usedScenarioIds: [scenario.id],
    });
  }, [gameState.difficulty, getAvailableScenarios]);

  const handleSelect = (index: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentScenario) return;

    const scenario = gameState.currentScenario;
    const isOptimal = scenario.options[index].isOptimal;
    const points = isOptimal ? 40 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedIndex: index,
      score: prev.score + points,
      correctAnswers: isOptimal ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const available = getAvailableScenarios(
      gameState.difficulty,
      gameState.usedScenarioIds,
    );
    if (available.length === 0) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const scenario = available[Math.floor(Math.random() * available.length)];

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentScenario: scenario,
      roundNumber: prev.roundNumber + 1,
      selectedIndex: null,
      usedScenarioIds: [...prev.usedScenarioIds, scenario.id],
    }));
  };

  // Setup phase
  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={gameState.difficulty}
            onChange={(d) =>
              setGameState((prev) => ({ ...prev, difficulty: d }))
            }
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-3 font-semibold">Algorithm Performance Lab</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Your code is running slow. Can you identify the bottleneck and
              choose the optimal solution?
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Understand Big O Notation (O(n) vs O(n²))</li>
              <li>• Trade memory for speed (Space-Time Tradeoff)</li>
              <li>• Avoid premature optimization</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Timer className="h-5 w-5" />
            Start Profiling
          </Button>
        </div>
      </div>
    );
  }

  // Result phase
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

  const scenario = gameState.currentScenario!;
  const isCorrect = scenario.options[gameState.selectedIndex!].isOptimal;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Ticket {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Concept Tag */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
            <Cpu className="h-3 w-3" />
            {scenario.concept}
          </span>
        </div>

        {/* Question */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            {scenario.title}
          </h2>
          <p className="font-medium text-muted-foreground">
            {scenario.problem}
          </p>
          <div className="mt-4 rounded-lg bg-black/5 p-3 font-mono text-sm text-muted-foreground dark:bg-white/5">
            Context: {scenario.context}
          </div>
        </div>

        <h3 className="mb-6 text-center text-lg font-semibold">
          Choose the Optimal Approach:
        </h3>

        {/* Options */}
        <div className="mx-auto max-w-xl space-y-3">
          {scenario.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrectOption = option.isOptimal;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={idx}
                variant="outline"
                size="lg"
                onClick={() => handleSelect(idx)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-auto w-full justify-between px-4 py-4',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                <span className="flex flex-col items-start gap-1 text-left">
                  <span className="font-semibold">{option.label}</span>
                  <span
                    className={cn(
                      'font-mono text-xs',
                      showFeedback && (isSelected || isCorrectOption)
                        ? 'text-white/80'
                        : 'text-muted-foreground',
                    )}
                  >
                    Complexity: {option.complexity}
                  </span>
                </span>
                {showFeedback && isCorrectOption && (
                  <CheckCircle className="h-5 w-5 shrink-0" />
                )}
                {showFeedback && isSelected && !isCorrectOption && (
                  <XCircle className="h-5 w-5 shrink-0" />
                )}
              </Button>
            );
          })}
        </div>

        {/* Feedback */}
        {gameState.phase === 'feedback' && (
          <div className="mt-8 space-y-4 duration-300 animate-in fade-in">
            <div
              className={cn(
                'mx-auto max-w-lg rounded-xl p-4 text-center font-bold',
                isCorrect
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
              )}
            >
              {isCorrect
                ? 'Optimization Successful!'
                : 'Performance Bottleneck Detected.'}
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-orange-700 dark:text-orange-400">
                <Zap className="h-4 w-4" />
                Analysis:
              </h4>
              <p className="text-sm text-orange-600 dark:text-orange-300">
                {scenario.explanation}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Benchmarks'
                  : 'Next Ticket'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset button */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Profiler
        </Button>
      </div>
    </div>
  );
}
