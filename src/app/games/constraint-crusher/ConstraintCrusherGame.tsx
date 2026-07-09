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
  RotateCcw,
  Scale,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  Box,
  Clock,
  DollarSign,
  Target,
} from 'lucide-react';

interface ConstraintScenario {
  id: string;
  title: string;
  problem: string;
  constraints: string;
  options: {
    label: string;
    value: string; // e.g. "Value: $5000"
    isOptimal: boolean;
    feedback: string;
  }[];
  explanation: string;
  concept: string; // e.g. "Knapsack Problem"
  difficulty: Difficulty;
}

const scenarios: ConstraintScenario[] = [
  // EASY
  {
    id: 'packing-truck',
    title: 'The Cargo Run',
    problem:
      'Your truck has a weight limit of 1000kg. You need to maximize the cargo value.',
    constraints: 'Limit: 1000kg',
    options: [
      {
        label: 'Take Item A (600kg, $6000) & Item B (500kg, $4000)',
        value: 'Total: 1100kg (Overweight)',
        isOptimal: false,
        feedback: 'Too heavy! You broke the axle.',
      },
      {
        label: 'Take Item A (600kg, $6000) & Item C (400kg, $5000)',
        value: 'Total: $11,000',
        isOptimal: true,
        feedback: 'Perfect fit. Value maximized.',
      },
      {
        label: 'Take Item B (500kg, $4000) & Item C (400kg, $5000)',
        value: 'Total: $9,000',
        isOptimal: false,
        feedback: 'Valid, but you missed $2,000 in potential value.',
      },
    ],
    explanation:
      'This is the "Knapsack Problem." You must fill the capacity with the highest density of value without breaking the limit.',
    concept: 'Resource Allocation',
    difficulty: 'easy',
  },
  {
    id: 'student-budget',
    title: 'The Lunch Menu',
    problem:
      'You have exactly $10. You want the most calories to survive finals week.',
    constraints: 'Budget: $10.00',
    options: [
      {
        label: 'Salad ($9.50, 200 cal)',
        value: '200 cal',
        isOptimal: false,
        feedback: 'Healthy, but you starve.',
      },
      {
        label: '3 Cheeseburgers ($3.00 each, 1500 cal total)',
        value: '1500 cal',
        isOptimal: true,
        feedback: 'Maximum energy density achieved.',
      },
      {
        label: 'Premium Steak ($25.00, 1000 cal)',
        value: 'Over Budget',
        isOptimal: false,
        feedback: 'You cannot afford this.',
      },
    ],
    explanation:
      'Optimization means maximizing an objective function (Calories) subject to a constraint (Cost <= $10).',
    concept: 'Linear Optimization',
    difficulty: 'easy',
  },
  // MEDIUM
  {
    id: 'scheduling-conflict',
    title: 'The Conference Room',
    problem:
      'You have one conference room. You want to host as many meetings as possible.',
    constraints: 'Requests: A(9-11), B(10-12), C(11-12), D(12-1)',
    options: [
      {
        label: 'Accept A and B',
        value: 'Conflict!',
        isOptimal: false,
        feedback: 'A ends at 11, B starts at 10. They overlap.',
      },
      {
        label: 'Accept A, C, and D',
        value: '3 Meetings',
        isOptimal: true,
        feedback: 'A(9-11), C(11-12), D(12-1). Perfect fit.',
      },
      {
        label: 'Accept B and D',
        value: '2 Meetings',
        isOptimal: false,
        feedback: 'Valid, but you could have fit 3 meetings instead.',
      },
    ],
    explanation:
      'This is "Interval Scheduling." The greedy strategy of "Earliest Finish Time" usually works best—picking the meeting that finishes soonest to free up the room.',
    concept: 'Interval Scheduling',
    difficulty: 'medium',
  },
  {
    id: 'job-hiring',
    title: 'The Hiring Manager',
    problem:
      'You need to hire a team. You need at least 2 Engineers and 1 Designer. Total salary cap is $300k.',
    constraints:
      'Eng A ($120k), Eng B ($100k), Eng C ($90k), Des X ($100k), Des Y ($80k)',
    options: [
      {
        label: 'Eng A + Eng B + Des X ($320k)',
        value: 'Over Budget',
        isOptimal: false,
        feedback: 'You exceeded the salary cap.',
      },
      {
        label: 'Eng B + Eng C + Des X ($290k)',
        value: '$290k, Team Valid',
        isOptimal: true,
        feedback: 'Fulfills all roles and stays under budget.',
      },
      {
        label: 'Eng C + Des X + Des Y ($270k)',
        value: 'Missing Role',
        isOptimal: false,
        feedback: 'You only hired 1 Engineer. You need 2.',
      },
    ],
    explanation:
      'You faced multiple constraints: Budget ($300k) AND Role Minimums (2E, 1D). Optimization must satisfy ALL hard constraints first.',
    concept: 'Multi-Constraint Satisfaction',
    difficulty: 'medium',
  },
  // HARD
  {
    id: 'production-mix',
    title: 'The Factory Floor',
    problem:
      'You make Chairs ($20 profit) and Tables ($50 profit). Constraints: Wood & Labor.',
    constraints:
      'Wood: 100 units total. (Chair uses 2, Table uses 10). Labor: 60 hours total. (Chair uses 2h, Table uses 2h).',
    options: [
      {
        label: 'Make only Tables',
        value: 'Limit: Wood',
        isOptimal: false,
        feedback:
          'Wood (100) limits you to 10 Tables. Profit = 10 * $50 = $500. Labor is wasted.',
      },
      {
        label: 'Make only Chairs',
        value: 'Limit: Labor',
        isOptimal: false,
        feedback:
          'Labor (60) limits you to 30 Chairs. Profit = 30 * $20 = $600. Wood is wasted.',
      },
      {
        label: 'Mix: 25 Chairs, 5 Tables',
        value: 'Optimal Mix',
        isOptimal: true,
        feedback:
          'Wood: 25*2 + 5*10 = 100 (Max). Labor: 25*2 + 5*2 = 60 (Max). Profit: 25*20 + 5*50 = $750.',
      },
    ],
    explanation:
      'This is Linear Programming. The optimal solution is usually at the "corner" where constraints intersect (Full Wood AND Full Labor utilization).',
    concept: 'Linear Programming',
    difficulty: 'hard',
  },
  {
    id: 'server-load',
    title: 'Cloud Scaling',
    problem:
      'You need to handle 1000 req/sec. Server A: 500 req/sec, $50/mo. Server B: 100 req/sec, $8/mo.',
    constraints: 'Minimize Cost. Must handle >= 1000 req/sec.',
    options: [
      {
        label: '2 Server A',
        value: '$100/mo',
        isOptimal: false,
        feedback: "Cost is $100. Let's see if B is cheaper.",
      },
      {
        label: '10 Server B',
        value: '$80/mo',
        isOptimal: true,
        feedback:
          '10 * $8 = $80. Cheaper than $100. 10 * 100 = 1000 req/sec. Requirement met.',
      },
      {
        label: '1 Server A + 5 Server B',
        value: '$90/mo',
        isOptimal: false,
        feedback: '$50 + (5 * $8) = $90. Good, but not optimal.',
      },
    ],
    explanation:
      'Unit cost analysis: Server A cost $0.10 per req unit. Server B costs $0.08 per req unit. Always fill up on the cheapest capacity first.',
    concept: 'Unit Cost Minimization',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: ConstraintScenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  usedScenarioIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 2 },
  medium: { rounds: 2 },
  hard: { rounds: 2 },
};

export default function ConstraintCrusherGame() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 2,
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
    const points = isOptimal ? 50 : 0;

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
            <h3 className="mb-3 font-semibold">Optimization Challenge</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              You have limited resources (time, money, space). You need the best
              possible outcome.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Solve Knapsack Problems</li>
              <li>• Manage Budget & Time Constraints</li>
              <li>• Find the Optimal Mix (Linear Programming)</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Target className="h-5 w-5" />
            Start Optimizing
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
  const selectedOption =
    gameState.selectedIndex !== null
      ? scenario.options[gameState.selectedIndex]
      : null;
  const isCorrect = selectedOption?.isOptimal ?? false;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Problem {gameState.roundNumber} of {gameState.totalRounds}
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
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            <Scale className="h-3 w-3" />
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
          <div className="mt-4 inline-block rounded-lg bg-black/5 p-3 text-sm font-bold text-emerald-600 dark:bg-white/5 dark:text-emerald-400">
            {scenario.constraints}
          </div>
        </div>

        <h3 className="mb-6 text-center text-lg font-semibold">
          Choose the Optimal Allocation:
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
                      'font-mono text-xs opacity-80',
                      showFeedback && (isSelected || isCorrectOption)
                        ? 'text-white'
                        : 'text-muted-foreground',
                    )}
                  >
                    {option.value}
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
              {selectedOption?.feedback}
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
                <Lightbulb className="h-4 w-4" />
                Strategy:
              </h4>
              <p className="text-sm text-emerald-600 dark:text-emerald-300">
                {scenario.explanation}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Problem'}
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
          Reset
        </Button>
      </div>
    </div>
  );
}
