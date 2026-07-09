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
  Search,
  AlertTriangle,
} from 'lucide-react';

interface ErrorChallenge {
  id: string;
  title: string;
  subject: string;
  solution: {
    step: number;
    content: string;
    hasError: boolean;
    correction?: string;
  }[];
  difficulty: Difficulty;
}

const challenges: ErrorChallenge[] = [
  {
    id: 'kinematics-1',
    title: 'Projectile Motion Error',
    subject: 'Physics',
    solution: [
      {
        step: 1,
        content: 'Given: u = 20 m/s, θ = 30°, g = 10 m/s²',
        hasError: false,
      },
      {
        step: 2,
        content:
          'Horizontal velocity: uₓ = u·cos(30°) = 20 × 0.866 = 17.32 m/s',
        hasError: false,
      },
      {
        step: 3,
        content: 'Vertical velocity: uᵧ = u·sin(30°) = 20 × 0.5 = 10 m/s',
        hasError: false,
      },
      {
        step: 4,
        content: 'Time of flight: T = uᵧ/g = 10/10 = 1 s',
        hasError: true,
        correction: 'T = 2uᵧ/g = 2×10/10 = 2 s (forgot factor of 2)',
      },
      {
        step: 5,
        content: 'Range: R = uₓ × T = 17.32 × 1 = 17.32 m',
        hasError: false,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'algebra-1',
    title: 'Quadratic Formula Application',
    subject: 'Math',
    solution: [
      { step: 1, content: 'Solve: x² + 5x + 6 = 0', hasError: false },
      {
        step: 2,
        content: 'Using formula: x = (-b ± √(b²-4ac)) / 2a',
        hasError: false,
      },
      { step: 3, content: 'Here a=1, b=5, c=6', hasError: false },
      { step: 4, content: 'Discriminant: D = 25 - 24 = 1', hasError: false },
      {
        step: 5,
        content: 'x = (-5 ± 1) / 2 = -2 or -4',
        hasError: true,
        correction: 'x = (-5+1)/2 = -2 or (-5-1)/2 = -3 (not -4)',
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'organic-1',
    title: 'Organic Reaction Error',
    subject: 'Chemistry',
    solution: [
      { step: 1, content: 'Reaction: CH₃CH=CH₂ + HBr → ?', hasError: false },
      {
        step: 2,
        content: 'HBr adds across double bond by ionic mechanism',
        hasError: false,
      },
      {
        step: 3,
        content: 'H⁺ adds first following Markovnikov rule',
        hasError: false,
      },
      {
        step: 4,
        content: 'H⁺ goes to C1 (less substituted), forms 1° carbocation',
        hasError: true,
        correction:
          'H⁺ goes to C1, but this forms 2° carbocation (more stable)',
      },
      {
        step: 5,
        content: 'Br⁻ attacks C2, product is 1-bromopropane',
        hasError: true,
        correction: 'Br⁻ attacks C2, product is 2-bromopropane (Markovnikov)',
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'physics-2',
    title: 'Circuit Analysis Error',
    subject: 'Physics',
    solution: [
      {
        step: 1,
        content: 'Two resistors R1=4Ω and R2=6Ω in parallel, connected to 12V',
        hasError: false,
      },
      {
        step: 2,
        content: 'Parallel resistance: 1/Rₚ = 1/4 + 1/6 = 5/12',
        hasError: true,
        correction:
          '1/Rₚ = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 is correct, but Rₚ = 12/5 = 2.4Ω',
      },
      {
        step: 3,
        content: 'Total current: I = V/Rₚ = 12/2.4 = 5 A',
        hasError: false,
      },
      {
        step: 4,
        content: 'Current through R1: I₁ = V/R1 = 12/4 = 3 A',
        hasError: false,
      },
      {
        step: 5,
        content: 'Power in R1: P = I₁²R1 = 9 × 4 = 36 W',
        hasError: false,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'calculus-1',
    title: 'Integration Error',
    subject: 'Math',
    solution: [
      {
        step: 1,
        content: 'Evaluate: ∫x·eˣ dx using integration by parts',
        hasError: false,
      },
      { step: 2, content: 'Let u = x, dv = eˣdx', hasError: false },
      { step: 3, content: 'Then du = dx, v = eˣ', hasError: false },
      { step: 4, content: 'Using ∫udv = uv - ∫vdu', hasError: false },
      {
        step: 5,
        content: '= xeˣ - ∫eˣdx = xeˣ - eˣ + C = eˣ(x+1) + C',
        hasError: true,
        correction: '= xeˣ - eˣ + C = eˣ(x-1) + C (sign error in factoring)',
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'genetics-1',
    title: 'Genetics Calculation Error',
    subject: 'Biology',
    solution: [
      {
        step: 1,
        content: 'Cross: Aa × Aa, find probability of Aa offspring',
        hasError: false,
      },
      { step: 2, content: 'Punnett square: AA, Aa, Aa, aa', hasError: false },
      { step: 3, content: 'Ratio: 1 AA : 2 Aa : 1 aa', hasError: false },
      {
        step: 4,
        content: 'P(Aa) = 1/4',
        hasError: true,
        correction: 'P(Aa) = 2/4 = 1/2 (there are 2 Aa outcomes)',
      },
    ],
    difficulty: 'easy',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  difficulty: Difficulty;
  currentChallenge: ErrorChallenge | null;
  foundErrors: number[];
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
  showFeedback: boolean;
}

export default function ErrorSpotterClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    foundErrors: [],
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    usedIds: [],
    showFeedback: false,
  });

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): ErrorChallenge | null => {
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
        foundErrors: [],
        roundNumber: 1,
        totalRounds: 3,
        score: 0,
        correctAnswers: 0,
        usedIds: [challenge.id],
        showFeedback: false,
      });
    },
    [getRandomChallenge],
  );

  const toggleError = (step: number) => {
    if (gameState.showFeedback) return;
    setGameState((prev) => ({
      ...prev,
      foundErrors: prev.foundErrors.includes(step)
        ? prev.foundErrors.filter((s) => s !== step)
        : [...prev.foundErrors, step],
    }));
  };

  const checkAnswer = () => {
    if (!gameState.currentChallenge) return;
    const actualErrors = gameState.currentChallenge.solution
      .filter((s) => s.hasError)
      .map((s) => s.step);
    const found = gameState.foundErrors;
    const allFound =
      actualErrors.every((e) => found.includes(e)) &&
      found.every((f) => actualErrors.includes(f));
    const points = allFound
      ? gameState.difficulty === 'hard'
        ? 150
        : gameState.difficulty === 'medium'
          ? 100
          : 50
      : 0;
    setGameState((prev) => ({
      ...prev,
      showFeedback: true,
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (allFound ? 1 : 0),
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
      currentChallenge: challenge,
      foundErrors: [],
      roundNumber: prev.roundNumber + 1,
      usedIds: [...prev.usedIds, challenge.id],
      showFeedback: false,
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
              <li>Read through the solution carefully</li>
              <li>Click on steps that contain errors</li>
              <li>Find ALL errors and ONLY errors for points</li>
              <li>Train your debugging and attention skills!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <Search className="h-5 w-5" />
            Start Error Hunting
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
            {gameState.foundErrors.length}
          </div>
          <div className="text-xs text-muted-foreground">Marked</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {challenge.subject}
          </span>
        </div>
        <h3 className="mb-4 text-xl font-bold">{challenge.title}</h3>

        <div className="mb-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">
              Click on steps that contain errors
            </span>
          </div>
        </div>

        <div className="space-y-2">
          {challenge.solution.map((step) => {
            const isMarked = gameState.foundErrors.includes(step.step);
            const showCorrect =
              gameState.showFeedback && step.hasError && isMarked;
            const showMissed =
              gameState.showFeedback && step.hasError && !isMarked;
            const showWrongMark =
              gameState.showFeedback && !step.hasError && isMarked;
            return (
              <div key={step.step}>
                <button
                  onClick={() => toggleError(step.step)}
                  disabled={gameState.showFeedback}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all',
                    !gameState.showFeedback &&
                      'cursor-pointer hover:border-primary hover:bg-primary/5',
                    isMarked &&
                      !gameState.showFeedback &&
                      'border-red-500 bg-red-50 dark:bg-red-900/20',
                    showCorrect &&
                      'border-green-500 bg-green-50 dark:bg-green-900/20',
                    showMissed &&
                      'border-orange-500 bg-orange-50 dark:bg-orange-900/20',
                    showWrongMark &&
                      'border-red-500 bg-red-50 dark:bg-red-900/20',
                  )}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {step.step}
                  </span>
                  {showCorrect && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showMissed && (
                    <XCircle className="h-5 w-5 text-orange-600" />
                  )}
                  {showWrongMark && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="flex-1 text-sm">{step.content}</span>
                </button>
                {gameState.showFeedback && step.hasError && step.correction && (
                  <div className="ml-9 mt-1 rounded bg-green-50 p-2 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-300">
                    ✓ {step.correction}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3">
          {!gameState.showFeedback && (
            <Button
              onClick={checkAnswer}
              className="flex-1"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Submit
            </Button>
          )}
          {gameState.showFeedback && (
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
