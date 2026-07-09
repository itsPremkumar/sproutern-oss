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
  Clock,
  GripVertical,
  Lightbulb,
} from 'lucide-react';

interface DerivationStep {
  id: string;
  content: string;
  order: number;
}

interface DerivationChallenge {
  id: string;
  title: string;
  description: string;
  topic: string;
  steps: DerivationStep[];
  difficulty: Difficulty;
}

const challenges: DerivationChallenge[] = [
  // Easy - Physics
  {
    id: 'kinematic-v',
    title: 'Kinematic Equation (v = u + at)',
    description: 'Derive the first equation of motion from basic definitions',
    topic: 'Physics - Kinematics',
    difficulty: 'easy',
    steps: [
      {
        id: 's1',
        content: 'Start with definition: acceleration a = dv/dt',
        order: 1,
      },
      { id: 's2', content: 'Rearrange: dv = a·dt', order: 2 },
      { id: 's3', content: 'Integrate both sides: ∫dv = ∫a·dt', order: 3 },
      { id: 's4', content: 'For constant a: v = at + C', order: 4 },
      {
        id: 's5',
        content: 'Apply initial condition: at t=0, v=u, so C=u',
        order: 5,
      },
      { id: 's6', content: 'Final result: v = u + at', order: 6 },
    ],
  },
  {
    id: 'quadratic-formula',
    title: 'Quadratic Formula',
    description: 'Derive x = (-b ± √(b²-4ac)) / 2a by completing the square',
    topic: 'Math - Algebra',
    difficulty: 'easy',
    steps: [
      { id: 's1', content: 'Start with ax² + bx + c = 0', order: 1 },
      { id: 's2', content: 'Divide by a: x² + (b/a)x + c/a = 0', order: 2 },
      { id: 's3', content: 'Rearrange: x² + (b/a)x = -c/a', order: 3 },
      {
        id: 's4',
        content: 'Complete the square: x² + (b/a)x + (b/2a)² = -c/a + (b/2a)²',
        order: 4,
      },
      {
        id: 's5',
        content: 'Simplify RHS: (x + b/2a)² = (b² - 4ac) / 4a²',
        order: 5,
      },
      {
        id: 's6',
        content: 'Take square root: x + b/2a = ±√(b² - 4ac) / 2a',
        order: 6,
      },
      {
        id: 's7',
        content: 'Solve for x: x = (-b ± √(b² - 4ac)) / 2a',
        order: 7,
      },
    ],
  },
  // Medium - Physics
  {
    id: 'kinematic-s',
    title: 'Kinematic Equation (s = ut + ½at²)',
    description: 'Derive the second equation of motion',
    topic: 'Physics - Kinematics',
    difficulty: 'medium',
    steps: [
      { id: 's1', content: 'Start with v = u + at (first equation)', order: 1 },
      { id: 's2', content: 'Velocity is ds/dt, so ds/dt = u + at', order: 2 },
      { id: 's3', content: 'Rearrange: ds = (u + at)dt', order: 3 },
      { id: 's4', content: 'Integrate: ∫ds = ∫(u + at)dt', order: 4 },
      { id: 's5', content: 's = ut + ½at² + C', order: 5 },
      { id: 's6', content: 'At t=0, s=0, so C=0', order: 6 },
      { id: 's7', content: 'Final result: s = ut + ½at²', order: 7 },
    ],
  },
  {
    id: 'lens-maker',
    title: "Lens Maker's Formula",
    description:
      'Derive 1/f = (μ-1)(1/R₁ - 1/R₂) from refraction at curved surfaces',
    topic: 'Physics - Optics',
    difficulty: 'medium',
    steps: [
      {
        id: 's1',
        content: 'For refraction at first surface: μ₁/u + μ₂/v₁ = (μ₂-μ₁)/R₁',
        order: 1,
      },
      {
        id: 's2',
        content: 'For refraction at second surface: μ₂/v₁ + μ₁/v = (μ₁-μ₂)/R₂',
        order: 2,
      },
      { id: 's3', content: 'Add both equations to eliminate v₁', order: 3 },
      {
        id: 's4',
        content: 'Result: μ₁/u + μ₁/v = (μ₂-μ₁)(1/R₁ - 1/R₂)',
        order: 4,
      },
      {
        id: 's5',
        content: 'For lens in air (μ₁=1, μ₂=μ): 1/u + 1/v = (μ-1)(1/R₁ - 1/R₂)',
        order: 5,
      },
      {
        id: 's6',
        content: 'For object at infinity (u→∞), v=f: 1/f = (μ-1)(1/R₁ - 1/R₂)',
        order: 6,
      },
    ],
  },
  // Hard - Physics
  {
    id: 'time-dilation',
    title: 'Time Dilation Formula',
    description: 'Derive Δt = γΔt₀ using light clock thought experiment',
    topic: 'Physics - Relativity',
    difficulty: 'hard',
    steps: [
      {
        id: 's1',
        content:
          'Consider a light clock: light bounces between mirrors distance L apart',
        order: 1,
      },
      {
        id: 's2',
        content:
          'In rest frame: Δt₀ = 2L/c (light travels straight up and down)',
        order: 2,
      },
      {
        id: 's3',
        content: 'In moving frame (velocity v): light travels diagonal path',
        order: 3,
      },
      { id: 's4', content: 'Diagonal distance D = √(L² + (vΔt/2)²)', order: 4 },
      {
        id: 's5',
        content: 'Total path = 2D = cΔt (light speed is constant)',
        order: 5,
      },
      { id: 's6', content: 'So: cΔt = 2√(L² + (vΔt/2)²)', order: 6 },
      { id: 's7', content: 'Square both sides: c²Δt² = 4L² + v²Δt²', order: 7 },
      { id: 's8', content: 'Rearrange: Δt²(c² - v²) = 4L²', order: 8 },
      {
        id: 's9',
        content: 'Substitute L = cΔt₀/2: Δt² = Δt₀²/(1 - v²/c²)',
        order: 9,
      },
      {
        id: 's10',
        content: 'Final result: Δt = Δt₀/√(1 - v²/c²) = γΔt₀',
        order: 10,
      },
    ],
  },
  {
    id: 'schwarzschild-radius',
    title: 'Schwarzschild Radius',
    description:
      'Derive the event horizon radius r = 2GM/c² using escape velocity',
    topic: 'Physics - Astrophysics',
    difficulty: 'hard',
    steps: [
      { id: 's1', content: 'Escape velocity: ½mv² = GMm/r', order: 1 },
      { id: 's2', content: 'Simplify: v² = 2GM/r', order: 2 },
      {
        id: 's3',
        content: 'For a black hole, escape velocity = speed of light: v = c',
        order: 3,
      },
      { id: 's4', content: 'Substitute: c² = 2GM/r', order: 4 },
      { id: 's5', content: 'Solve for r: r = 2GM/c²', order: 5 },
      {
        id: 's6',
        content: 'This is the Schwarzschild radius (event horizon)',
        order: 6,
      },
    ],
  },
  // Math - Medium
  {
    id: 'euler-formula',
    title: "Euler's Formula",
    description: 'Derive e^(iθ) = cos(θ) + i·sin(θ) using Taylor series',
    topic: 'Math - Complex Analysis',
    difficulty: 'medium',
    steps: [
      {
        id: 's1',
        content: 'Taylor series: e^x = 1 + x + x²/2! + x³/3! + ...',
        order: 1,
      },
      {
        id: 's2',
        content:
          'Substitute x = iθ: e^(iθ) = 1 + iθ + (iθ)²/2! + (iθ)³/3! + ...',
        order: 2,
      },
      { id: 's3', content: 'Note: i² = -1, i³ = -i, i⁴ = 1', order: 3 },
      {
        id: 's4',
        content: 'Expand: e^(iθ) = 1 + iθ - θ²/2! - iθ³/3! + θ⁴/4! + ...',
        order: 4,
      },
      {
        id: 's5',
        content:
          'Group real and imaginary: (1 - θ²/2! + θ⁴/4! - ...) + i(θ - θ³/3! + ...)',
        order: 5,
      },
      {
        id: 's6',
        content: 'Recognize Taylor series: cos(θ) + i·sin(θ)',
        order: 6,
      },
      { id: 's7', content: 'Therefore: e^(iθ) = cos(θ) + i·sin(θ)', order: 7 },
    ],
  },
  // Math - Hard
  {
    id: 'sum-of-squares',
    title: 'Sum of Squares Formula',
    description: 'Derive Σk² = n(n+1)(2n+1)/6',
    topic: 'Math - Series',
    difficulty: 'hard',
    steps: [
      {
        id: 's1',
        content: 'Use identity: (k+1)³ - k³ = 3k² + 3k + 1',
        order: 1,
      },
      { id: 's2', content: 'Sum both sides from k=1 to n', order: 2 },
      { id: 's3', content: 'LHS telescopes: (n+1)³ - 1', order: 3 },
      { id: 's4', content: 'RHS: 3Σk² + 3Σk + n', order: 4 },
      { id: 's5', content: 'Use Σk = n(n+1)/2', order: 5 },
      { id: 's6', content: 'So: (n+1)³ - 1 = 3Σk² + 3n(n+1)/2 + n', order: 6 },
      {
        id: 's7',
        content: 'Expand (n+1)³: n³ + 3n² + 3n + 1 - 1 = n³ + 3n² + 3n',
        order: 7,
      },
      {
        id: 's8',
        content: 'Solve: 3Σk² = n³ + 3n² + 3n - 3n(n+1)/2 - n',
        order: 8,
      },
      { id: 's9', content: 'Simplify: Σk² = n(n+1)(2n+1)/6', order: 9 },
    ],
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentChallenge: DerivationChallenge | null;
  userOrder: DerivationStep[];
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  hintsUsed: number;
  timeSpent: number;
  usedIds: string[];
}

const difficultySettings: Record<
  Difficulty,
  { rounds: number; timeBonus: number }
> = {
  easy: { rounds: 3, timeBonus: 50 },
  medium: { rounds: 3, timeBonus: 75 },
  hard: { rounds: 3, timeBonus: 100 },
};

export default function DerivationRaceClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    userOrder: [],
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    hintsUsed: 0,
    timeSpent: 0,
    usedIds: [],
  });
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): DerivationChallenge | null => {
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

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = useCallback(
    (difficulty: Difficulty) => {
      const settings = difficultySettings[difficulty];
      const challenge = getRandomChallenge(difficulty, []);
      if (!challenge) return;

      const shuffledSteps = shuffleArray(challenge.steps);

      setGameState({
        phase: 'playing',
        difficulty,
        currentChallenge: challenge,
        userOrder: shuffledSteps,
        roundNumber: 1,
        totalRounds: settings.rounds,
        score: 0,
        correctAnswers: 0,
        hintsUsed: 0,
        timeSpent: 0,
        usedIds: [challenge.id],
      });
      setStartTime(Date.now());
      setShowHint(false);
    },
    [getRandomChallenge],
  );

  const handleDragStart = (stepId: string) => {
    setDraggedItem(stepId);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetId) return;

    setGameState((prev) => {
      const newOrder = [...prev.userOrder];
      const draggedIndex = newOrder.findIndex((s) => s.id === draggedItem);
      const targetIndex = newOrder.findIndex((s) => s.id === targetId);

      if (draggedIndex !== -1 && targetIndex !== -1) {
        const [removed] = newOrder.splice(draggedIndex, 1);
        newOrder.splice(targetIndex, 0, removed);
      }

      return { ...prev, userOrder: newOrder };
    });
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const moveStep = (fromIndex: number, direction: 'up' | 'down') => {
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= gameState.userOrder.length) return;

    setGameState((prev) => {
      const newOrder = [...prev.userOrder];
      [newOrder[fromIndex], newOrder[toIndex]] = [
        newOrder[toIndex],
        newOrder[fromIndex],
      ];
      return { ...prev, userOrder: newOrder };
    });
  };

  const checkAnswer = () => {
    if (!gameState.currentChallenge) return;

    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const isCorrect = gameState.userOrder.every(
      (step, index) => step.order === index + 1,
    );

    let points = 0;
    if (isCorrect) {
      const basePoints =
        100 *
        (gameState.difficulty === 'hard'
          ? 3
          : gameState.difficulty === 'medium'
            ? 2
            : 1);
      const hintPenalty = gameState.hintsUsed * 20;
      const timePenalty = Math.min(timeSpent, 60);
      points = Math.max(basePoints - hintPenalty - timePenalty, 10);
    }

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      timeSpent: prev.timeSpent + timeSpent,
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

    const shuffledSteps = shuffleArray(challenge.steps);

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentChallenge: challenge,
      userOrder: shuffledSteps,
      roundNumber: prev.roundNumber + 1,
      usedIds: [...prev.usedIds, challenge.id],
    }));
    setStartTime(Date.now());
    setShowHint(false);
  };

  const useHint = () => {
    if (!gameState.currentChallenge) return;
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
              <li>
                You&apos;ll see steps of a mathematical or physics derivation
              </li>
              <li>Drag and drop to arrange them in the correct order</li>
              <li>
                Complete the derivation from first principles to final result
              </li>
              <li>Faster completion = more points. Hints cost points!</li>
            </ol>
          </div>

          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <ArrowRight className="h-5 w-5" />
            Start Derivation Race
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

  const isCorrectOrder =
    gameState.phase === 'feedback' &&
    gameState.userOrder.every((step, index) => step.order === index + 1);

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
          <div className="text-xs text-muted-foreground">Hints Used</div>
        </div>
      </div>

      {/* Challenge Card */}
      <div className="rounded-2xl border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {challenge.topic}
          </span>
          <Clock className="h-5 w-5 text-muted-foreground" />
        </div>

        <h3 className="mb-2 text-xl font-bold">{challenge.title}</h3>
        <p className="mb-6 text-muted-foreground">{challenge.description}</p>

        {/* Hint */}
        {showHint && (
          <div className="mb-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <div className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400">
              <Lightbulb className="h-4 w-4" />
              First step: &quot;{challenge.steps[0].content}&quot;
            </div>
          </div>
        )}

        {/* Steps to Order */}
        <div className="space-y-2">
          {gameState.userOrder.map((step, index) => {
            const isCorrectPosition =
              gameState.phase === 'feedback' && step.order === index + 1;
            const isWrongPosition =
              gameState.phase === 'feedback' && step.order !== index + 1;

            return (
              <div
                key={step.id}
                draggable={gameState.phase === 'playing'}
                onDragStart={() => handleDragStart(step.id)}
                onDragOver={(e) => handleDragOver(e, step.id)}
                onDragEnd={handleDragEnd}
                className={cn(
                  'flex items-center gap-3 rounded-lg border p-3 transition-all',
                  gameState.phase === 'playing' &&
                    'cursor-grab hover:border-primary hover:bg-primary/5',
                  draggedItem === step.id && 'opacity-50',
                  isCorrectPosition &&
                    'border-green-500 bg-green-50 dark:bg-green-900/20',
                  isWrongPosition &&
                    'border-red-500 bg-red-50 dark:bg-red-900/20',
                )}
              >
                <div className="flex items-center gap-2">
                  {gameState.phase === 'playing' && (
                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                  )}
                  {isCorrectPosition && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {isWrongPosition && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {index + 1}
                  </span>
                </div>
                <p className="flex-1 text-sm">{step.content}</p>
                {gameState.phase === 'playing' && (
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveStep(index, 'up')}
                      disabled={index === 0}
                      className="h-8 w-8 p-0"
                    >
                      ↑
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveStep(index, 'down')}
                      disabled={index === gameState.userOrder.length - 1}
                      className="h-8 w-8 p-0"
                    >
                      ↓
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Correct Order in Feedback */}
        {gameState.phase === 'feedback' && !isCorrectOrder && (
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
              Correct Order:
            </h4>
            <ol className="list-inside list-decimal space-y-1 text-sm text-blue-600 dark:text-blue-300">
              {challenge.steps
                .sort((a, b) => a.order - b.order)
                .map((step) => (
                  <li key={step.id}>{step.content}</li>
                ))}
            </ol>
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
                Hint (-20 pts)
              </Button>
              <Button
                onClick={checkAnswer}
                className="flex-1"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Submit Order
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
                  Next Derivation
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
