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
  Ruler,
} from 'lucide-react';

interface DimensionChallenge {
  id: string;
  title: string;
  question: string;
  hint: string;
  options: { label: string; dimensions: string; isCorrect: boolean }[];
  difficulty: Difficulty;
  explanation: string;
}

const challenges: DimensionChallenge[] = [
  {
    id: 'force-1',
    title: 'Force Dimensions',
    question: 'What are the dimensions of Force?',
    hint: 'F = ma',
    options: [
      { label: 'MLT⁻²', dimensions: '[M][L][T]⁻²', isCorrect: true },
      { label: 'MLT⁻¹', dimensions: '[M][L][T]⁻¹', isCorrect: false },
      { label: 'ML²T⁻²', dimensions: '[M][L]²[T]⁻²', isCorrect: false },
      { label: 'ML⁻¹T⁻²', dimensions: '[M][L]⁻¹[T]⁻²', isCorrect: false },
    ],
    difficulty: 'easy',
    explanation:
      'F = ma = [M] × [LT⁻²] = [MLT⁻²]. Always start from the defining equation!',
  },
  {
    id: 'energy-1',
    title: 'Energy Dimensions',
    question: 'What are the dimensions of Energy?',
    hint: 'E = ½mv² or E = Fd',
    options: [
      { label: 'MLT⁻²', dimensions: '[M][L][T]⁻²', isCorrect: false },
      { label: 'ML²T⁻²', dimensions: '[M][L]²[T]⁻²', isCorrect: true },
      { label: 'ML²T⁻¹', dimensions: '[M][L]²[T]⁻¹', isCorrect: false },
      { label: 'M²LT⁻²', dimensions: '[M]²[L][T]⁻²', isCorrect: false },
    ],
    difficulty: 'easy',
    explanation:
      'E = ½mv² = [M][LT⁻¹]² = [ML²T⁻²]. Or E = Fd = [MLT⁻²][L] = [ML²T⁻²].',
  },
  {
    id: 'pressure-1',
    title: 'Pressure Dimensions',
    question: 'What are the dimensions of Pressure?',
    hint: 'P = F/A',
    options: [
      { label: 'MLT⁻²', dimensions: '[M][L][T]⁻²', isCorrect: false },
      { label: 'ML⁻¹T⁻²', dimensions: '[M][L]⁻¹[T]⁻²', isCorrect: true },
      { label: 'ML²T⁻²', dimensions: '[M][L]²[T]⁻²', isCorrect: false },
      { label: 'ML⁻²T⁻²', dimensions: '[M][L]⁻²[T]⁻²', isCorrect: false },
    ],
    difficulty: 'easy',
    explanation: 'P = F/A = [MLT⁻²]/[L²] = [ML⁻¹T⁻²].',
  },
  {
    id: 'viscosity-1',
    title: 'Dynamic Viscosity',
    question: 'What are the dimensions of dynamic viscosity (η)?',
    hint: "F = 6πηrv (Stokes' law)",
    options: [
      { label: 'ML⁻¹T⁻¹', dimensions: '[M][L]⁻¹[T]⁻¹', isCorrect: true },
      { label: 'MLT⁻¹', dimensions: '[M][L][T]⁻¹', isCorrect: false },
      { label: 'ML⁻¹T⁻²', dimensions: '[M][L]⁻¹[T]⁻²', isCorrect: false },
      { label: 'ML²T⁻¹', dimensions: '[M][L]²[T]⁻¹', isCorrect: false },
    ],
    difficulty: 'medium',
    explanation:
      'From F = 6πηrv: η = F/(rv) = [MLT⁻²]/([L][LT⁻¹]) = [ML⁻¹T⁻¹].',
  },
  {
    id: 'planck-1',
    title: "Planck's Constant",
    question: "What are the dimensions of Planck's constant (h)?",
    hint: 'E = hν',
    options: [
      { label: 'ML²T⁻¹', dimensions: '[M][L]²[T]⁻¹', isCorrect: true },
      { label: 'ML²T⁻²', dimensions: '[M][L]²[T]⁻²', isCorrect: false },
      { label: 'MLT⁻¹', dimensions: '[M][L][T]⁻¹', isCorrect: false },
      { label: 'ML²T⁻³', dimensions: '[M][L]²[T]⁻³', isCorrect: false },
    ],
    difficulty: 'medium',
    explanation:
      'h = E/ν = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. Same dimensions as angular momentum!',
  },
  {
    id: 'permittivity-1',
    title: 'Electric Permittivity',
    question: 'What are the dimensions of ε₀ (permittivity of free space)?',
    hint: 'F = q₁q₂/(4πε₀r²)',
    options: [
      {
        label: 'M⁻¹L⁻³T⁴A²',
        dimensions: '[M]⁻¹[L]⁻³[T]⁴[A]²',
        isCorrect: true,
      },
      { label: 'MLT⁻³A⁻²', dimensions: '[M][L][T]⁻³[A]⁻²', isCorrect: false },
      {
        label: 'M⁻¹L⁻²T³A²',
        dimensions: '[M]⁻¹[L]⁻²[T]³[A]²',
        isCorrect: false,
      },
      { label: 'ML³T⁻⁴A⁻²', dimensions: '[M][L]³[T]⁻⁴[A]⁻²', isCorrect: false },
    ],
    difficulty: 'hard',
    explanation:
      'ε₀ = q²/(4πFr²) = [AT]²/([MLT⁻²][L²]) = [A²T⁴M⁻¹L⁻³] = [M⁻¹L⁻³T⁴A²].',
  },
  {
    id: 'unknown-1',
    title: 'Mystery Quantity',
    question: 'A quantity has dimensions [ML²T⁻³]. What could it be?',
    hint: 'Think about rate of energy...',
    options: [
      { label: 'Power', dimensions: 'Work/Time', isCorrect: true },
      { label: 'Energy', dimensions: 'Force × Distance', isCorrect: false },
      { label: 'Momentum', dimensions: 'Mass × Velocity', isCorrect: false },
      { label: 'Force', dimensions: 'Mass × Acceleration', isCorrect: false },
    ],
    difficulty: 'medium',
    explanation:
      'Power = Energy/Time = [ML²T⁻²]/[T] = [ML²T⁻³]. Rate of doing work.',
  },
  {
    id: 'check-1',
    title: 'Equation Check',
    question: 'Check if this equation is dimensionally correct: v = √(2gh)',
    hint: 'Compare dimensions on both sides',
    options: [
      {
        label: 'Correct - both sides have [LT⁻¹]',
        dimensions: '[LT⁻¹]',
        isCorrect: true,
      },
      {
        label: 'Incorrect - LHS has [LT⁻¹], RHS has [LT⁻²]',
        dimensions: 'mismatch',
        isCorrect: false,
      },
      {
        label: 'Incorrect - LHS has [L], RHS has [LT⁻¹]',
        dimensions: 'mismatch',
        isCorrect: false,
      },
      {
        label: 'Correct - both sides have [L]',
        dimensions: '[L]',
        isCorrect: false,
      },
    ],
    difficulty: 'easy',
    explanation:
      'LHS: [LT⁻¹]. RHS: √([LT⁻²][L]) = √[L²T⁻²] = [LT⁻¹]. ✓ Dimensionally correct!',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  difficulty: Difficulty;
  currentChallenge: DimensionChallenge | null;
  selectedIndex: number | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
  showFeedback: boolean;
}

export default function DimensionalDetectiveClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    selectedIndex: null,
    roundNumber: 0,
    totalRounds: 5,
    score: 0,
    correctAnswers: 0,
    usedIds: [],
    showFeedback: false,
  });

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): DimensionChallenge | null => {
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
        selectedIndex: null,
        roundNumber: 1,
        totalRounds: 5,
        score: 0,
        correctAnswers: 0,
        usedIds: [challenge.id],
        showFeedback: false,
      });
    },
    [getRandomChallenge],
  );

  const selectAnswer = (index: number) => {
    if (gameState.showFeedback) return;
    const isCorrect =
      gameState.currentChallenge?.options[index].isCorrect ?? false;
    const points = isCorrect
      ? gameState.difficulty === 'hard'
        ? 60
        : gameState.difficulty === 'medium'
          ? 40
          : 20
      : 0;
    setGameState((prev) => ({
      ...prev,
      selectedIndex: index,
      showFeedback: true,
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
      currentChallenge: challenge,
      selectedIndex: null,
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
              <li>Analyze dimensions of physical quantities</li>
              <li>Use [M], [L], [T], [A] for mass, length, time, current</li>
              <li>Check dimensional consistency of equations</li>
              <li>Essential tool for JEE Physics!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <Ruler className="h-5 w-5" />
            Start Detecting
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
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h3 className="mb-2 text-xl font-bold">{challenge.title}</h3>
        <div className="mb-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <p className="text-lg font-medium">{challenge.question}</p>
        </div>
        <div className="mb-4 rounded-lg bg-amber-50 p-2 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-400">
            💡 Hint: {challenge.hint}
          </p>
        </div>

        <div className="space-y-2">
          {challenge.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrect = option.isCorrect;
            return (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                disabled={gameState.showFeedback}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all',
                  !gameState.showFeedback &&
                    'cursor-pointer hover:border-primary hover:bg-primary/5',
                  gameState.showFeedback &&
                    isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50 dark:bg-green-900/20',
                  gameState.showFeedback &&
                    isSelected &&
                    !isCorrect &&
                    'border-red-500 bg-red-50 dark:bg-red-900/20',
                  gameState.showFeedback &&
                    !isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50/50 dark:bg-green-900/10',
                )}
              >
                {gameState.showFeedback && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {gameState.showFeedback && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="flex-1 font-mono">{option.label}</span>
              </button>
            );
          })}
        </div>

        {gameState.showFeedback && (
          <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {challenge.explanation}
            </p>
          </div>
        )}

        {gameState.showFeedback && (
          <Button
            onClick={nextRound}
            className="mt-6 w-full"
          >
            {gameState.roundNumber >= gameState.totalRounds ? (
              <>
                <Trophy className="mr-2 h-4 w-4" />
                View Results
              </>
            ) : (
              <>
                <ArrowRight className="mr-2 h-4 w-4" />
                Next Question
              </>
            )}
          </Button>
        )}
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
