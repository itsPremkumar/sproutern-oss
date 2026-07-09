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
  Lightbulb,
  Plus,
  X,
} from 'lucide-react';

interface ProofStep {
  id: string;
  content: string;
  isUsed: boolean;
}

interface ProofChallenge {
  id: string;
  title: string;
  category: string;
  premises: string[];
  goal: string;
  availableSteps: ProofStep[];
  correctSequence: string[];
  difficulty: Difficulty;
  explanation: string;
}

const challenges: ProofChallenge[] = [
  // Easy
  {
    id: 'triangle-inequality',
    title: 'Triangle Inequality',
    category: 'Inequalities',
    premises: ['|a| ≥ 0 and |b| ≥ 0 for all real a, b', '|a + b|² = (a + b)²'],
    goal: 'Prove: |a + b| ≤ |a| + |b|',
    availableSteps: [
      { id: 's1', content: '(a + b)² = a² + 2ab + b²', isUsed: false },
      {
        id: 's2',
        content: 'ab ≤ |a||b| (since ab ≤ |ab| = |a||b|)',
        isUsed: false,
      },
      { id: 's3', content: 'a² + 2ab + b² ≤ a² + 2|a||b| + b²', isUsed: false },
      { id: 's4', content: 'a² + 2|a||b| + b² = (|a| + |b|)²', isUsed: false },
      { id: 's5', content: '|a + b|² ≤ (|a| + |b|)²', isUsed: false },
      {
        id: 's6',
        content: 'Taking square root: |a + b| ≤ |a| + |b|',
        isUsed: false,
      },
      { id: 'd1', content: 'a² - b² = (a-b)(a+b)', isUsed: false }, // Distractor
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5', 's6'],
    difficulty: 'easy',
    explanation:
      'The triangle inequality is fundamental in analysis. The key insight is that ab ≤ |a||b|.',
  },
  {
    id: 'sum-even-odd',
    title: 'Sum of Even and Odd',
    category: 'Number Theory',
    premises: [
      'n is even: n = 2k for some integer k',
      'm is odd: m = 2j + 1 for some integer j',
    ],
    goal: 'Prove: The sum of an even and odd integer is odd',
    availableSteps: [
      { id: 's1', content: 'n + m = 2k + (2j + 1)', isUsed: false },
      { id: 's2', content: 'n + m = 2k + 2j + 1', isUsed: false },
      { id: 's3', content: 'n + m = 2(k + j) + 1', isUsed: false },
      {
        id: 's4',
        content: 'Let p = k + j, then n + m = 2p + 1',
        isUsed: false,
      },
      {
        id: 's5',
        content: 'Since 2p + 1 is odd by definition, n + m is odd',
        isUsed: false,
      },
      { id: 'd1', content: 'n × m = 2k(2j + 1)', isUsed: false }, // Distractor
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5'],
    difficulty: 'easy',
    explanation:
      'A direct proof using the definitions of even and odd numbers.',
  },
  // Medium
  {
    id: 'sqrt2-irrational',
    title: '√2 is Irrational',
    category: 'Number Theory',
    premises: [
      'Assume √2 is rational: √2 = p/q in lowest terms',
      'p and q are integers with no common factors',
    ],
    goal: 'Prove: √2 is irrational (by contradiction)',
    availableSteps: [
      { id: 's1', content: 'Squaring both sides: 2 = p²/q²', isUsed: false },
      { id: 's2', content: 'Therefore: p² = 2q²', isUsed: false },
      {
        id: 's3',
        content: 'So p² is even, which means p is even',
        isUsed: false,
      },
      { id: 's4', content: 'Let p = 2k for some integer k', isUsed: false },
      {
        id: 's5',
        content: 'Substituting: (2k)² = 2q², so 4k² = 2q²',
        isUsed: false,
      },
      {
        id: 's6',
        content: 'Therefore: q² = 2k², so q² is even',
        isUsed: false,
      },
      { id: 's7', content: 'Thus q is also even', isUsed: false },
      {
        id: 's8',
        content: 'But this contradicts that p/q is in lowest terms!',
        isUsed: false,
      },
      { id: 's9', content: 'Therefore √2 must be irrational', isUsed: false },
      { id: 'd1', content: '√2 ≈ 1.414...', isUsed: false }, // Distractor
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
    difficulty: 'medium',
    explanation:
      'This classic proof by contradiction shows both p and q must be even, contradicting the assumption p/q is in lowest terms.',
  },
  {
    id: 'am-gm-two',
    title: 'AM-GM Inequality (Two Numbers)',
    category: 'Inequalities',
    premises: [
      'a, b ≥ 0 are non-negative real numbers',
      '(√a - √b)² ≥ 0 for all real numbers',
    ],
    goal: 'Prove: (a + b)/2 ≥ √(ab)',
    availableSteps: [
      { id: 's1', content: 'Start with (√a - √b)² ≥ 0', isUsed: false },
      { id: 's2', content: 'Expand: a - 2√(ab) + b ≥ 0', isUsed: false },
      { id: 's3', content: 'Rearrange: a + b ≥ 2√(ab)', isUsed: false },
      { id: 's4', content: 'Divide by 2: (a + b)/2 ≥ √(ab)', isUsed: false },
      { id: 'd1', content: 'a + b = 2ab', isUsed: false }, // Distractor
      { id: 'd2', content: '(a + b)² ≥ 4ab', isUsed: false }, // Distractor
    ],
    correctSequence: ['s1', 's2', 's3', 's4'],
    difficulty: 'medium',
    explanation:
      'The AM-GM inequality elegantly follows from the fact that squares are non-negative.',
  },
  // Hard
  {
    id: 'cauchy-schwarz',
    title: 'Cauchy-Schwarz Inequality',
    category: 'Inequalities',
    premises: [
      'Consider sequences (a₁, a₂, ..., aₙ) and (b₁, b₂, ..., bₙ)',
      'For any real t: Σ(aᵢ + tbᵢ)² ≥ 0',
    ],
    goal: 'Prove: (Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)',
    availableSteps: [
      {
        id: 's1',
        content: 'Expand: Σ(aᵢ + tbᵢ)² = Σaᵢ² + 2tΣaᵢbᵢ + t²Σbᵢ²',
        isUsed: false,
      },
      { id: 's2', content: 'Let A = Σaᵢ², B = Σaᵢbᵢ, C = Σbᵢ²', isUsed: false },
      { id: 's3', content: 'So: A + 2tB + t²C ≥ 0 for all t', isUsed: false },
      {
        id: 's4',
        content: 'This is a quadratic in t that is always non-negative',
        isUsed: false,
      },
      { id: 's5', content: 'Therefore its discriminant ≤ 0', isUsed: false },
      { id: 's6', content: 'Discriminant: (2B)² - 4AC ≤ 0', isUsed: false },
      { id: 's7', content: 'Simplify: 4B² ≤ 4AC', isUsed: false },
      {
        id: 's8',
        content: 'Therefore: B² ≤ AC, i.e., (Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)',
        isUsed: false,
      },
      { id: 'd1', content: 'Use AM-GM inequality', isUsed: false }, // Distractor
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'],
    difficulty: 'hard',
    explanation:
      'The Cauchy-Schwarz inequality follows from analyzing when a quadratic is non-negative.',
  },
  {
    id: 'infinite-primes',
    title: 'Infinitely Many Primes',
    category: 'Number Theory',
    premises: [
      'Assume there are finitely many primes: p₁, p₂, ..., pₙ',
      'Consider N = p₁ × p₂ × ... × pₙ + 1',
    ],
    goal: 'Prove: There are infinitely many primes (Euclid)',
    availableSteps: [
      {
        id: 's1',
        content: 'N is greater than all primes in our list',
        isUsed: false,
      },
      {
        id: 's2',
        content: 'N divided by any pᵢ leaves remainder 1',
        isUsed: false,
      },
      { id: 's3', content: 'So N is not divisible by any pᵢ', isUsed: false },
      {
        id: 's4',
        content: 'Either N is prime, or N has a prime factor',
        isUsed: false,
      },
      {
        id: 's5',
        content: 'If N is prime, we found a prime not in our list',
        isUsed: false,
      },
      {
        id: 's6',
        content: 'If N has a prime factor q, then q ≠ any pᵢ',
        isUsed: false,
      },
      {
        id: 's7',
        content: 'Either way, there exists a prime not in our list',
        isUsed: false,
      },
      {
        id: 's8',
        content: 'This contradicts our assumption of finitely many primes',
        isUsed: false,
      },
      {
        id: 's9',
        content: 'Therefore there are infinitely many primes',
        isUsed: false,
      },
      { id: 'd1', content: 'N is always prime', isUsed: false }, // Distractor
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
    difficulty: 'hard',
    explanation:
      "Euclid's elegant proof by contradiction shows that any finite list of primes is incomplete.",
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentChallenge: ProofChallenge | null;
  selectedSteps: string[];
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  hintsUsed: number;
  usedIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 3 },
  medium: { rounds: 3 },
  hard: { rounds: 3 },
};

export default function MathProofBuilderClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    selectedSteps: [],
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    hintsUsed: 0,
    usedIds: [],
  });
  const [showHint, setShowHint] = useState(false);

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): ProofChallenge | null => {
      const available = challenges.filter(
        (c) => c.difficulty === difficulty && !usedIds.includes(c.id),
      );
      if (available.length === 0) {
        const allForDifficulty = challenges.filter(
          (c) => c.difficulty === difficulty,
        );
        if (allForDifficulty.length === 0) return null;
        return allForDifficulty[
          Math.floor(Math.random() * allForDifficulty.length)
        ];
      }
      return available[Math.floor(Math.random() * available.length)];
    },
    [],
  );

  const startGame = useCallback(
    (difficulty: Difficulty) => {
      const settings = difficultySettings[difficulty];
      const challenge = getRandomChallenge(difficulty, []);
      if (!challenge) return;

      setGameState({
        phase: 'playing',
        difficulty,
        currentChallenge: challenge,
        selectedSteps: [],
        roundNumber: 1,
        totalRounds: settings.rounds,
        score: 0,
        correctAnswers: 0,
        hintsUsed: 0,
        usedIds: [challenge.id],
      });
      setShowHint(false);
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

    const correct = gameState.currentChallenge.correctSequence;
    const selected = gameState.selectedSteps;

    const isCorrect =
      correct.length === selected.length &&
      correct.every((id, idx) => id === selected[idx]);

    let points = 0;
    if (isCorrect) {
      const basePoints =
        100 *
        (gameState.difficulty === 'hard'
          ? 3
          : gameState.difficulty === 'medium'
            ? 2
            : 1);
      const hintPenalty = gameState.hintsUsed * 25;
      points = Math.max(basePoints - hintPenalty, 10);
    }

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
    setShowHint(false);
  };

  const useHint = () => {
    setShowHint(true);
    setGameState((prev) => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
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
              <li>Read the premises and the goal statement</li>
              <li>Select proof steps in the correct order to reach the goal</li>
              <li>Avoid distractors — some steps are red herrings!</li>
              <li>Build complete, rigorous proofs step-by-step</li>
            </ol>
          </div>

          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <ArrowRight className="h-5 w-5" />
            Start Building Proofs
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

  const correctSequence = challenge.correctSequence;
  const isCorrect =
    gameState.phase === 'feedback' &&
    correctSequence.length === gameState.selectedSteps.length &&
    correctSequence.every((id, idx) => id === gameState.selectedSteps[idx]);

  return (
    <div className="space-y-6">
      {/* Stats Bar */}
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
        <div className="rounded-xl bg-orange-50 p-3 text-center dark:bg-orange-900/20">
          <div className="text-xl font-bold text-orange-600">
            {gameState.hintsUsed}
          </div>
          <div className="text-xs text-muted-foreground">Hints</div>
        </div>
      </div>

      {/* Challenge Card */}
      <div className="rounded-2xl border bg-card p-6">
        <div className="mb-4">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {challenge.category}
          </span>
        </div>

        <h3 className="mb-4 text-xl font-bold">{challenge.title}</h3>

        {/* Premises */}
        <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
            Given (Premises):
          </h4>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {challenge.premises.map((premise, idx) => (
              <li key={idx}>{premise}</li>
            ))}
          </ul>
        </div>

        {/* Goal */}
        <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="mb-1 font-semibold text-green-700 dark:text-green-400">
            Goal:
          </h4>
          <p className="text-sm font-medium">{challenge.goal}</p>
        </div>

        {/* Hint */}
        {showHint && (
          <div className="mb-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <div className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400">
              <Lightbulb className="h-4 w-4" />
              First step: &quot;
              {
                challenge.availableSteps.find(
                  (s) => s.id === challenge.correctSequence[0],
                )?.content
              }
              &quot;
            </div>
          </div>
        )}

        {/* Your Proof */}
        <div className="mb-4">
          <h4 className="mb-2 font-semibold">Your Proof:</h4>
          {gameState.selectedSteps.length === 0 ? (
            <p className="text-sm italic text-muted-foreground">
              Click steps below to build your proof...
            </p>
          ) : (
            <div className="space-y-2">
              {gameState.selectedSteps.map((stepId, idx) => {
                const step = challenge.availableSteps.find(
                  (s) => s.id === stepId,
                );
                const isCorrectStep =
                  gameState.phase === 'feedback' &&
                  correctSequence[idx] === stepId;
                const isWrongStep =
                  gameState.phase === 'feedback' &&
                  correctSequence[idx] !== stepId;

                return (
                  <div
                    key={stepId}
                    className={cn(
                      'flex items-center gap-2 rounded-lg border p-2',
                      isCorrectStep &&
                        'border-green-500 bg-green-50 dark:bg-green-900/20',
                      isWrongStep &&
                        'border-red-500 bg-red-50 dark:bg-red-900/20',
                    )}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {idx + 1}
                    </span>
                    {isCorrectStep && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    {isWrongStep && (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span className="flex-1 text-sm">{step?.content}</span>
                    {gameState.phase === 'playing' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeStep(stepId)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Available Steps */}
        {gameState.phase === 'playing' && (
          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Available Steps:</h4>
            <div className="space-y-2">
              {challenge.availableSteps
                .filter((s) => !gameState.selectedSteps.includes(s.id))
                .map((step) => (
                  <button
                    key={step.id}
                    onClick={() => addStep(step.id)}
                    className="flex w-full items-center gap-2 rounded-lg border p-2 text-left transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <Plus className="h-4 w-4 text-primary" />
                    <span className="text-sm">{step.content}</span>
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Correct Solution in Feedback */}
        {gameState.phase === 'feedback' && !isCorrect && (
          <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
              Correct Proof:
            </h4>
            <ol className="list-inside list-decimal space-y-1 text-sm">
              {challenge.correctSequence.map((stepId) => {
                const step = challenge.availableSteps.find(
                  (s) => s.id === stepId,
                );
                return <li key={stepId}>{step?.content}</li>;
              })}
            </ol>
            <p className="mt-3 text-sm text-blue-600 dark:text-blue-300">
              {challenge.explanation}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {gameState.phase === 'playing' && (
            <>
              <Button
                variant="outline"
                onClick={useHint}
                disabled={showHint}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Hint (-25 pts)
              </Button>
              <Button
                onClick={checkAnswer}
                className="flex-1"
                disabled={gameState.selectedSteps.length === 0}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Submit Proof
              </Button>
            </>
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
                  Next Proof
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Reset Button */}
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
