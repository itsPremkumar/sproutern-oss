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
  ArrowRight,
  CheckCircle,
  XCircle,
  Trophy,
  Layers,
  Plus,
  X,
} from 'lucide-react';

interface DecompositionChallenge {
  id: string;
  title: string;
  problem: string;
  availableSubproblems: { id: string; label: string; isCorrect: boolean }[];
  correctOrder: string[];
  difficulty: Difficulty;
  explanation: string;
}

const challenges: DecompositionChallenge[] = [
  {
    id: 'projectile-range',
    title: 'Maximum Projectile Range',
    problem:
      'Find the angle for maximum range of a projectile launched with initial velocity v on level ground.',
    availableSubproblems: [
      {
        id: 's1',
        label: 'Find horizontal component of velocity: vₓ = v·cos(θ)',
        isCorrect: true,
      },
      {
        id: 's2',
        label: 'Find vertical component of velocity: vᵧ = v·sin(θ)',
        isCorrect: true,
      },
      {
        id: 's3',
        label: 'Calculate time of flight: T = 2vᵧ/g',
        isCorrect: true,
      },
      {
        id: 's4',
        label: 'Calculate range: R = vₓ·T = v²sin(2θ)/g',
        isCorrect: true,
      },
      { id: 's5', label: 'Maximize: dR/dθ = 0 → θ = 45°', isCorrect: true },
      { id: 'd1', label: 'Find air resistance force', isCorrect: false },
      { id: 'd2', label: 'Calculate kinetic energy', isCorrect: false },
    ],
    correctOrder: ['s1', 's2', 's3', 's4', 's5'],
    difficulty: 'easy',
    explanation:
      'Break into: velocity components → time of flight → range expression → optimization.',
  },
  {
    id: 'binary-search',
    title: 'Binary Search Implementation',
    problem:
      'Design a binary search algorithm to find an element in a sorted array.',
    availableSubproblems: [
      { id: 's1', label: 'Initialize: left = 0, right = n-1', isCorrect: true },
      { id: 's2', label: 'Loop while left ≤ right', isCorrect: true },
      {
        id: 's3',
        label: 'Calculate mid = (left + right) / 2',
        isCorrect: true,
      },
      {
        id: 's4',
        label: 'Compare: if arr[mid] == target, return mid',
        isCorrect: true,
      },
      {
        id: 's5',
        label: 'Adjust: if arr[mid] < target, left = mid+1, else right = mid-1',
        isCorrect: true,
      },
      { id: 'd1', label: 'Sort the array first', isCorrect: false },
      { id: 'd2', label: 'Check every element linearly', isCorrect: false },
    ],
    correctOrder: ['s1', 's2', 's3', 's4', 's5'],
    difficulty: 'medium',
    explanation:
      'Decompose into: initialization → loop structure → midpoint calculation → comparison → boundary adjustment.',
  },
  {
    id: 'equilibrium',
    title: 'Chemical Equilibrium Problem',
    problem:
      'Calculate equilibrium concentrations for: A ⇌ 2B, given initial [A]=1M and Kc=4.',
    availableSubproblems: [
      {
        id: 's1',
        label: 'Set up ICE table: Initial, Change, Equilibrium',
        isCorrect: true,
      },
      {
        id: 's2',
        label: 'Define change: [A] decreases by x, [B] increases by 2x',
        isCorrect: true,
      },
      { id: 's3', label: 'Equilibrium: [A]=1-x, [B]=2x', isCorrect: true },
      {
        id: 's4',
        label: 'Apply Kc = [B]²/[A] = (2x)²/(1-x) = 4',
        isCorrect: true,
      },
      { id: 's5', label: 'Solve quadratic: 4x² + 4x - 4 = 0', isCorrect: true },
      { id: 'd1', label: 'Calculate reaction enthalpy', isCorrect: false },
    ],
    correctOrder: ['s1', 's2', 's3', 's4', 's5'],
    difficulty: 'medium',
    explanation:
      'Systematic approach: ICE table → express changes → write equilibrium expression → solve.',
  },
  {
    id: 'genetics',
    title: 'Dihybrid Cross Problem',
    problem:
      'Predict phenotype ratios in F2 for RrYy × RrYy cross (round/wrinkled, yellow/green peas).',
    availableSubproblems: [
      {
        id: 's1',
        label: 'Identify genotypes: both parents are RrYy',
        isCorrect: true,
      },
      {
        id: 's2',
        label: 'Create Punnett square for each gene separately',
        isCorrect: true,
      },
      {
        id: 's3',
        label: 'R gene: RR:Rr:rr = 1:2:1 → 3 round : 1 wrinkled',
        isCorrect: true,
      },
      {
        id: 's4',
        label: 'Y gene: YY:Yy:yy = 1:2:1 → 3 yellow : 1 green',
        isCorrect: true,
      },
      {
        id: 's5',
        label: 'Combine: (3:1) × (3:1) = 9:3:3:1 phenotype ratio',
        isCorrect: true,
      },
      { id: 'd1', label: 'Check for linkage', isCorrect: false },
    ],
    correctOrder: ['s1', 's2', 's3', 's4', 's5'],
    difficulty: 'hard',
    explanation:
      'Independent assortment: analyze each gene separately, then multiply ratios.',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentChallenge: DecompositionChallenge | null;
  selectedSteps: string[];
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
}

export default function ProblemDecompositionClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    selectedSteps: [],
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    usedIds: [],
  });

  const getRandomChallenge = useCallback(
    (
      difficulty: Difficulty,
      usedIds: string[],
    ): DecompositionChallenge | null => {
      const available = challenges.filter(
        (c) => c.difficulty === difficulty && !usedIds.includes(c.id),
      );
      if (available.length === 0) {
        const all = challenges.filter((c) => c.difficulty === difficulty);
        return all.length > 0
          ? all[Math.floor(Math.random() * all.length)]
          : null;
      }
      return available[Math.floor(Math.random() * available.length)];
    },
    [],
  );

  const startGame = useCallback(
    (difficulty: Difficulty) => {
      const challenge = getRandomChallenge(difficulty, []);
      if (!challenge) return;
      setGameState({
        phase: 'playing',
        difficulty,
        currentChallenge: challenge,
        selectedSteps: [],
        roundNumber: 1,
        totalRounds: 3,
        score: 0,
        correctAnswers: 0,
        usedIds: [challenge.id],
      });
    },
    [getRandomChallenge],
  );

  const addStep = (stepId: string) => {
    if (gameState.selectedSteps.includes(stepId)) return;
    setGameState((prev) => ({
      ...prev,
      selectedSteps: [...prev.selectedSteps, stepId],
    }));
  };

  const removeStep = (stepId: string) => {
    setGameState((prev) => ({
      ...prev,
      selectedSteps: prev.selectedSteps.filter((id) => id !== stepId),
    }));
  };

  const checkAnswer = () => {
    if (!gameState.currentChallenge) return;
    const correct = gameState.currentChallenge.correctOrder;
    const selected = gameState.selectedSteps;
    // Check if selected steps are correct (order matters) and no distractors
    const isCorrect =
      correct.length === selected.length &&
      correct.every((id, idx) => id === selected[idx]);
    const points = isCorrect
      ? gameState.difficulty === 'hard'
        ? 150
        : gameState.difficulty === 'medium'
          ? 100
          : 50
      : 0;
    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }
    const challenge = getRandomChallenge(
      gameState.difficulty,
      gameState.usedIds,
    );
    if (!challenge) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }
    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentChallenge: challenge,
      selectedSteps: [],
      roundNumber: prev.roundNumber + 1,
      usedIds: [...prev.usedIds, challenge.id],
    }));
  };

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
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Read the complex problem carefully</li>
              <li>Select the subproblems in the correct order</li>
              <li>Avoid distractors — not all steps are needed!</li>
              <li>Master algorithmic thinking for JEE/NEET!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <Layers className="h-5 w-5" />
            Start Decomposing
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
        streak={0}
        bestStreak={gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup', usedIds: [] }))
        }
      />
    );
  }

  const challenge = gameState.currentChallenge;
  if (!challenge) return null;

  const correct = challenge.correctOrder;
  const selected = gameState.selectedSteps;
  const isCorrect =
    gameState.phase === 'feedback' &&
    correct.length === selected.length &&
    correct.every((id, idx) => id === selected[idx]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-xl font-bold text-blue-600">
            {gameState.roundNumber}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Round</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-xl font-bold text-purple-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h3 className="mb-2 text-xl font-bold">{challenge.title}</h3>
        <div className="mb-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <p className="text-sm">{challenge.problem}</p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 font-semibold">Your Decomposition:</h4>
          {selected.length === 0 ? (
            <p className="text-sm italic text-muted-foreground">
              Add subproblems below in order...
            </p>
          ) : (
            <div className="space-y-2">
              {selected.map((id, idx) => {
                const step = challenge.availableSubproblems.find(
                  (s) => s.id === id,
                );
                const isCorrectStep =
                  gameState.phase === 'feedback' && correct[idx] === id;
                const isWrongStep =
                  gameState.phase === 'feedback' &&
                  (correct[idx] !== id || !step?.isCorrect);
                return (
                  <div
                    key={id}
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-3 py-2',
                      isCorrectStep &&
                        'border-green-500 bg-green-50 dark:bg-green-900/20',
                      isWrongStep &&
                        'border-red-500 bg-red-50 dark:bg-red-900/20',
                    )}
                  >
                    <span className="text-xs font-medium">{idx + 1}.</span>
                    {gameState.phase === 'feedback' && isCorrectStep && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    {gameState.phase === 'feedback' && isWrongStep && (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span className="flex-1 text-sm">{step?.label}</span>
                    {gameState.phase === 'playing' && (
                      <button
                        onClick={() => removeStep(id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {gameState.phase === 'playing' && (
          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Available Subproblems:</h4>
            <div className="space-y-2">
              {challenge.availableSubproblems
                .filter((s) => !selected.includes(s.id))
                .map((step) => (
                  <button
                    key={step.id}
                    onClick={() => addStep(step.id)}
                    className="flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <Plus className="h-4 w-4" />
                    {step.label}
                  </button>
                ))}
            </div>
          </div>
        )}

        {gameState.phase === 'feedback' && (
          <div
            className={cn(
              'mb-4 rounded-lg p-3',
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20'
                : 'bg-blue-50 dark:bg-blue-900/20',
            )}
          >
            <p className="text-sm">
              {isCorrect
                ? '✓ Perfect decomposition!'
                : 'Optimal decomposition: ' +
                  challenge.correctOrder
                    .map(
                      (id, i) =>
                        `${i + 1}. ${challenge.availableSubproblems.find((s) => s.id === id)?.label}`,
                    )
                    .join(' → ')}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {challenge.explanation}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          {gameState.phase === 'playing' && (
            <Button
              onClick={checkAnswer}
              className="flex-1"
              disabled={selected.length === 0}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Submit
            </Button>
          )}
          {gameState.phase === 'feedback' && (
            <Button
              onClick={nextRound}
              className="w-full"
            >
              {gameState.roundNumber >= gameState.totalRounds ? (
                <>
                  <Trophy className="mr-2 h-4 w-4" />
                  View Results
                </>
              ) : (
                <>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Next Problem
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() =>
            setGameState((prev) => ({ ...prev, phase: 'setup', usedIds: [] }))
          }
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
