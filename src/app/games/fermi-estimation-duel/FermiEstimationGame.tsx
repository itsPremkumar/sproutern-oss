'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { RotateCcw, Scale, ArrowRight, Calculator, Target } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface FermiProblem {
  id: string;
  question: string;
  description: string;
  correctLog10?: number; // The power of 10. e.g., 5000 -> 3.7 -> close to 4. (Optional - calculated from exactValue)
  // Wait, Fermi problems are usually integer powers of 10.
  // Let's store the exact value and we compare orders of magnitude.
  exactValue: number;
  unit: string;
  explanation: string;
  difficulty: Difficulty;
}

const problems: FermiProblem[] = [
  {
    id: 'piano-tuners',
    question: 'How many piano tuners are there in Chicago?',
    description:
      'The classic Fermi problem. Use population, piano ownership rates, and tuning frequency.',
    exactValue: 125, // Approx historical answer roughly 100-200
    unit: 'tuners',
    explanation:
      'Pop ~2.5M. Households ~1M. Pianos ~2% (20k). Tuned once/year = 20k tunings. Tuner does ~4/day * 50 weeks * 5 days = 1000/year. 20k/1000 = 20 tuners. (Modern estimates vary, but order of 10^1-10^2 is correct).',
    difficulty: 'medium',
  },
  {
    id: 'heartbeats',
    question: 'How many times does a human heart beat in a lifetime?',
    description: 'Average heart rate * minutes/year * years.',
    exactValue: 3000000000, // 3 Billion
    unit: 'beats',
    explanation:
      '70 bpm * 60 min * 24 h * 365 days = ~37M/year. * 80 years = ~3 Billion (3 x 10^9).',
    difficulty: 'easy',
  },
  {
    id: 'hair-on-head',
    question: 'How many hairs are on a human head?',
    description: 'Surface area of scalp * hair density.',
    exactValue: 100000,
    unit: 'hairs',
    explanation:
      'Average is 100,000. Blondes have more (~150k), Redheads less (~90k). Order of magnitude is 10^5.',
    difficulty: 'easy',
  },
  {
    id: 'cells-body',
    question: 'How many cells are in the human body?',
    description: 'Volume of body / Volume of cell.',
    exactValue: 37000000000000, // 37 Trillion
    unit: 'cells',
    explanation: 'Recent estimates put it at 3.7 x 10^13.',
    difficulty: 'hard',
  },
  {
    id: 'earth-circumference',
    question: 'What is the circumference of the Earth?',
    description: 'Think of flight times or time zones.',
    exactValue: 40075,
    unit: 'km',
    explanation:
      '40,000 km. Originally the meter was defined such that the distance from pole to equator is 10,000 km.',
    difficulty: 'medium',
  },
  {
    id: 'mole-water',
    question: 'How many molecules of water are in a drop of water (0.05ml)?',
    description: "Use Avagadro's number and molar mass.",
    exactValue: 1.67e21,
    unit: 'molecules',
    explanation: '0.05g / 18g/mol = 0.0028 mol. * 6e23 = 1.67 x 10^21.',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  difficulty: Difficulty;
  currentProblem: FermiProblem | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  userEstimateExponent: number; // 10^X
  usedIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 3 },
  medium: { rounds: 3 },
  hard: { rounds: 3 },
};

export default function FermiEstimationGame() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'medium',
    currentProblem: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    userEstimateExponent: 0,
    usedIds: [],
  });

  const getAvailableProblems = useCallback(
    (difficulty: Difficulty, usedIds: string[]) => {
      return problems.filter(
        (s) => s.difficulty === difficulty && !usedIds.includes(s.id),
      );
    },
    [],
  );

  const startGame = useCallback(() => {
    const available = getAvailableProblems(gameState.difficulty, []);
    if (available.length === 0) return;

    const problem = available[Math.floor(Math.random() * available.length)];

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      currentProblem: problem,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      userEstimateExponent: 0, // Reset slider
      usedIds: [problem.id],
    });
  }, [gameState.difficulty, getAvailableProblems]);

  const handleSubmit = () => {
    if (!gameState.currentProblem) return;

    const correctExp = Math.log10(gameState.currentProblem.exactValue);
    const userExp = gameState.userEstimateExponent;
    const diff = Math.abs(correctExp - userExp);

    // Scoring: Perfect 10^X match = 100. Close = 50.
    // We look at the absolute difference in orders of magnitude
    let points = 0;
    if (diff < 0.5) points = 100;
    else if (diff < 1.0) points = 80;
    else if (diff < 2.0) points = 50;
    else if (diff < 3.0) points = 20;
    else points = 0;

    const isLastRound = gameState.roundNumber >= gameState.totalRounds;

    if (isLastRound) {
      setGameState((prev) => ({
        ...prev,
        phase: 'result',
        score: prev.score + points,
      }));
    } else {
      // Pick next problem
      const available = getAvailableProblems(
        gameState.difficulty,
        gameState.usedIds,
      );
      const nextProblem =
        available.length > 0
          ? available[Math.floor(Math.random() * available.length)]
          : null;

      if (!nextProblem) {
        setGameState((prev) => ({
          ...prev,
          phase: 'result',
          score: prev.score + points,
        }));
        return;
      }

      setGameState((prev) => ({
        ...prev,
        roundNumber: prev.roundNumber + 1,
        score: prev.score + points,
        currentProblem: nextProblem,
        userEstimateExponent: 0,
        usedIds: [...prev.usedIds, nextProblem.id],
      }));
    }
  };

  // Calculate display value for slider
  const displayValue = Math.pow(10, gameState.userEstimateExponent);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + ' Billion';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + ' Million';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + ' Thousand';
    if (num < 1) return num.toExponential(1);
    return num.toFixed(0);
  };

  // Setup Phase
  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Fermi Estimation Duel
          </h2>
          <DifficultySelector
            selected={gameState.difficulty}
            onChange={(d) =>
              setGameState((prev) => ({ ...prev, difficulty: d }))
            }
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/10">
            <h3 className="mb-3 font-semibold text-purple-800 dark:text-purple-200">
              The Power of Powers of 10
            </h3>
            <p className="mb-2 text-sm text-purple-700 dark:text-purple-300">
              Enrico Fermi famously estimated the strength of an atomic bomb
              blast by dropping paper scraps. Now it's your turn.
            </p>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Estimate the answer to the nearest{' '}
              <strong>Order of Magnitude</strong>.
            </p>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Scale className="h-5 w-5" />
            Start Estimating
          </Button>
        </div>
      </div>
    );
  }

  // Result Phase
  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={Math.round(gameState.score / 80)} // Estimation is approximate logic
        incorrectAnswers={
          gameState.totalRounds - Math.round(gameState.score / 80)
        }
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const problem = gameState.currentProblem!;

  return (
    <div className="space-y-6">
      {/* Status */}
      <div className="flex items-center justify-between rounded-xl bg-muted p-4">
        <span className="text-sm font-medium">
          Round {gameState.roundNumber}/{gameState.totalRounds}
        </span>
        <span className="font-bold text-primary">Score: {gameState.score}</span>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            {problem.question}
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            {problem.description}
          </p>

          <div className="rounded-xl border bg-gradient-to-b from-background to-muted p-8 shadow-inner">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Your Estimate
            </div>
            <div className="mb-8 text-5xl font-black tracking-tight text-primary md:text-6xl">
              {formatNumber(displayValue)}
            </div>

            <div className="px-4 md:px-12">
              <Slider
                defaultValue={[0]}
                min={-5}
                max={25}
                step={0.5}
                value={[gameState.userEstimateExponent]}
                onValueChange={(val) =>
                  setGameState((prev) => ({
                    ...prev,
                    userEstimateExponent: val[0],
                  }))
                }
                className="mb-6 h-4"
              />
              <div className="flex justify-between font-mono text-xs text-muted-foreground">
                <span>Microscopic</span>
                <span>Everyday</span>
                <span>Astronomical</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="h-16 w-full gap-2 text-xl md:w-auto md:px-12"
            >
              Lock Estimate
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
