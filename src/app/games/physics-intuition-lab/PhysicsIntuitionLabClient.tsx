'use client';

import { useState, useCallback, useEffect } from 'react';
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
  Play,
  Pause,
} from 'lucide-react';

interface SimulationChallenge {
  id: string;
  title: string;
  topic: string;
  description: string;
  parameters: {
    name: string;
    value: number;
    min: number;
    max: number;
    unit: string;
  }[];
  question: string;
  options: { label: string; isCorrect: boolean; explanation: string }[];
  difficulty: Difficulty;
  simulationType: 'pendulum' | 'projectile' | 'spring' | 'wave';
}

const challenges: SimulationChallenge[] = [
  {
    id: 'pendulum-1',
    title: 'Simple Pendulum Period',
    topic: 'Oscillations',
    description: 'A simple pendulum swings with small amplitude.',
    parameters: [
      { name: 'Length', value: 1, min: 0.5, max: 2, unit: 'm' },
      { name: 'Mass', value: 0.5, min: 0.1, max: 2, unit: 'kg' },
    ],
    question:
      'If you DOUBLE the length of the pendulum, what happens to the period?',
    options: [
      {
        label: 'Period doubles',
        isCorrect: false,
        explanation: 'Period depends on √L, not L directly.',
      },
      {
        label: 'Period increases by √2',
        isCorrect: true,
        explanation: 'T = 2π√(L/g), so doubling L multiplies T by √2.',
      },
      {
        label: 'Period stays the same',
        isCorrect: false,
        explanation: 'Period does depend on length.',
      },
      {
        label: 'Period halves',
        isCorrect: false,
        explanation: 'Increasing length increases period, not decreases.',
      },
    ],
    difficulty: 'easy',
    simulationType: 'pendulum',
  },
  {
    id: 'pendulum-2',
    title: 'Pendulum Mass Effect',
    topic: 'Oscillations',
    description: 'A pendulum bob of mass m swings freely.',
    parameters: [
      { name: 'Length', value: 1, min: 0.5, max: 2, unit: 'm' },
      { name: 'Mass', value: 1, min: 0.1, max: 2, unit: 'kg' },
    ],
    question:
      'If you TRIPLE the mass of the pendulum bob, what happens to the period?',
    options: [
      {
        label: 'Period triples',
        isCorrect: false,
        explanation: 'Period is independent of mass for a simple pendulum.',
      },
      {
        label: 'Period increases by √3',
        isCorrect: false,
        explanation: 'Mass does not appear in period formula.',
      },
      {
        label: 'Period stays the same',
        isCorrect: true,
        explanation: 'T = 2π√(L/g) - mass cancels out!',
      },
      {
        label: 'Period decreases',
        isCorrect: false,
        explanation: 'Mass has no effect on period.',
      },
    ],
    difficulty: 'easy',
    simulationType: 'pendulum',
  },
  {
    id: 'spring-1',
    title: 'Spring Oscillation',
    topic: 'SHM',
    description: 'A mass on a spring oscillates horizontally.',
    parameters: [
      { name: 'Spring constant', value: 100, min: 50, max: 200, unit: 'N/m' },
      { name: 'Mass', value: 1, min: 0.5, max: 2, unit: 'kg' },
    ],
    question:
      'If you QUADRUPLE the spring constant k, what happens to the frequency?',
    options: [
      {
        label: 'Frequency quadruples',
        isCorrect: false,
        explanation: 'Frequency depends on √k, not k.',
      },
      {
        label: 'Frequency doubles',
        isCorrect: true,
        explanation: 'f ∝ √k, so 4x the k gives 2x the frequency.',
      },
      {
        label: 'Frequency stays the same',
        isCorrect: false,
        explanation: 'Stiffer springs oscillate faster.',
      },
      {
        label: 'Frequency halves',
        isCorrect: false,
        explanation: 'Increasing k increases frequency.',
      },
    ],
    difficulty: 'medium',
    simulationType: 'spring',
  },
  {
    id: 'projectile-1',
    title: 'Projectile Range',
    topic: 'Kinematics',
    description: 'A ball is launched at angle θ with initial speed v.',
    parameters: [
      { name: 'Initial speed', value: 20, min: 10, max: 40, unit: 'm/s' },
      { name: 'Angle', value: 45, min: 15, max: 75, unit: '°' },
    ],
    question:
      'For maximum range on level ground, what launch angle should you use?',
    options: [
      {
        label: '30°',
        isCorrect: false,
        explanation: 'This gives less than maximum range.',
      },
      {
        label: '45°',
        isCorrect: true,
        explanation: 'R = v²sin(2θ)/g is maximum when 2θ = 90°, so θ = 45°.',
      },
      {
        label: '60°',
        isCorrect: false,
        explanation: '60° and 30° give the same range, but less than 45°.',
      },
      {
        label: '90°',
        isCorrect: false,
        explanation: 'This shoots straight up with zero horizontal range.',
      },
    ],
    difficulty: 'easy',
    simulationType: 'projectile',
  },
  {
    id: 'projectile-2',
    title: 'Projectile Time of Flight',
    topic: 'Kinematics',
    description:
      'Two balls are launched: one at 30° and one at 60° with the same speed.',
    parameters: [
      { name: 'Initial speed', value: 25, min: 10, max: 40, unit: 'm/s' },
      { name: 'Angle', value: 30, min: 15, max: 75, unit: '°' },
    ],
    question: 'Which ball stays in the air longer?',
    options: [
      {
        label: 'The 30° ball',
        isCorrect: false,
        explanation: 'Lower angle = less time in air.',
      },
      {
        label: 'The 60° ball',
        isCorrect: true,
        explanation: 'T = 2v·sin(θ)/g, and sin(60°) > sin(30°).',
      },
      {
        label: 'They take the same time',
        isCorrect: false,
        explanation: 'Time depends on vertical component.',
      },
      {
        label: 'Cannot determine',
        isCorrect: false,
        explanation: 'We can calculate this from the formulas.',
      },
    ],
    difficulty: 'medium',
    simulationType: 'projectile',
  },
  {
    id: 'spring-2',
    title: 'Damped Oscillation',
    topic: 'SHM',
    description: 'A spring-mass system has light damping.',
    parameters: [
      { name: 'Damping', value: 0.1, min: 0, max: 0.5, unit: 'Ns/m' },
      { name: 'Mass', value: 1, min: 0.5, max: 2, unit: 'kg' },
    ],
    question:
      'If you INCREASE the damping coefficient, what happens to the amplitude over time?',
    options: [
      {
        label: 'Amplitude decays faster',
        isCorrect: true,
        explanation: 'Higher damping = faster energy loss.',
      },
      {
        label: 'Amplitude decays slower',
        isCorrect: false,
        explanation: 'More damping means more friction.',
      },
      {
        label: 'Amplitude stays constant',
        isCorrect: false,
        explanation: 'That would be undamped oscillation.',
      },
      {
        label: 'Amplitude increases',
        isCorrect: false,
        explanation: 'Damping removes energy, reducing amplitude.',
      },
    ],
    difficulty: 'medium',
    simulationType: 'spring',
  },
  {
    id: 'wave-1',
    title: 'Standing Wave Frequency',
    topic: 'Waves',
    description: 'A string fixed at both ends has a standing wave pattern.',
    parameters: [
      { name: 'String length', value: 1, min: 0.5, max: 2, unit: 'm' },
      { name: 'Tension', value: 100, min: 50, max: 200, unit: 'N' },
    ],
    question:
      'If you HALVE the string length, what happens to the fundamental frequency?',
    options: [
      {
        label: 'Frequency halves',
        isCorrect: false,
        explanation: 'Shorter strings vibrate faster.',
      },
      {
        label: 'Frequency doubles',
        isCorrect: true,
        explanation: 'f = v/(2L), so halving L doubles f.',
      },
      {
        label: 'Frequency stays same',
        isCorrect: false,
        explanation: 'Frequency depends on length.',
      },
      {
        label: 'Frequency quadruples',
        isCorrect: false,
        explanation: 'The relationship is inverse, not inverse-square.',
      },
    ],
    difficulty: 'hard',
    simulationType: 'wave',
  },
  {
    id: 'wave-2',
    title: 'Wave Tension Effect',
    topic: 'Waves',
    description: 'A standing wave on a string under tension T.',
    parameters: [
      { name: 'String length', value: 1, min: 0.5, max: 2, unit: 'm' },
      { name: 'Tension', value: 100, min: 50, max: 200, unit: 'N' },
    ],
    question:
      'To DOUBLE the wave speed, by what factor must you increase the tension?',
    options: [
      {
        label: '2x',
        isCorrect: false,
        explanation: 'v ∝ √T, so you need more than 2x.',
      },
      {
        label: '4x',
        isCorrect: true,
        explanation: 'v = √(T/μ), so to double v, you need 4x the tension.',
      },
      {
        label: '8x',
        isCorrect: false,
        explanation: 'This would more than double the speed.',
      },
      {
        label: '√2 x',
        isCorrect: false,
        explanation: 'This would increase speed by only about 19%.',
      },
    ],
    difficulty: 'hard',
    simulationType: 'wave',
  },
];

interface GameState {
  phase: 'setup' | 'predict' | 'result' | 'final';
  difficulty: Difficulty;
  currentChallenge: SimulationChallenge | null;
  selectedIndex: number | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
  isSimulating: boolean;
}

export default function PhysicsIntuitionLabClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    selectedIndex: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    usedIds: [],
    isSimulating: false,
  });
  const [animationFrame, setAnimationFrame] = useState(0);

  // Simple animation for visual feedback
  useEffect(() => {
    if (!gameState.isSimulating) return;
    const interval = setInterval(() => {
      setAnimationFrame((f) => (f + 1) % 60);
    }, 50);
    return () => clearInterval(interval);
  }, [gameState.isSimulating]);

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): SimulationChallenge | null => {
      const available = challenges.filter(
        (c) => c.difficulty === difficulty && !usedIds.includes(c.id),
      );
      if (available.length === 0) {
        const allForDifficulty = challenges.filter(
          (c) => c.difficulty === difficulty,
        );
        return allForDifficulty.length > 0
          ? allForDifficulty[
              Math.floor(Math.random() * allForDifficulty.length)
            ]
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
        phase: 'predict',
        difficulty,
        currentChallenge: challenge,
        selectedIndex: null,
        roundNumber: 1,
        totalRounds: 3,
        score: 0,
        correctAnswers: 0,
        usedIds: [challenge.id],
        isSimulating: false,
      });
    },
    [getRandomChallenge],
  );

  const selectAnswer = (index: number) => {
    if (gameState.selectedIndex !== null) return;
    const isCorrect =
      gameState.currentChallenge?.options[index].isCorrect ?? false;
    const points = isCorrect
      ? gameState.difficulty === 'hard'
        ? 150
        : gameState.difficulty === 'medium'
          ? 100
          : 50
      : 0;

    setGameState((prev) => ({
      ...prev,
      selectedIndex: index,
      phase: 'result',
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      isSimulating: true,
    }));
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'final' }));
      return;
    }
    const challenge = getRandomChallenge(
      gameState.difficulty,
      gameState.usedIds,
    );
    if (!challenge) {
      setGameState((prev) => ({ ...prev, phase: 'final' }));
      return;
    }
    setGameState((prev) => ({
      ...prev,
      phase: 'predict',
      currentChallenge: challenge,
      selectedIndex: null,
      roundNumber: prev.roundNumber + 1,
      usedIds: [...prev.usedIds, challenge.id],
      isSimulating: false,
    }));
  };

  const renderSimulation = () => {
    const type = gameState.currentChallenge?.simulationType;
    const offset = Math.sin(animationFrame * 0.2) * 30;

    return (
      <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-900">
        {type === 'pendulum' && (
          <div className="absolute left-1/2 top-4 -translate-x-1/2">
            <div className="h-1 w-20 rounded bg-slate-600" />
            <div
              className="absolute left-1/2 top-0 origin-top -translate-x-1/2"
              style={{ transform: `rotate(${offset}deg)` }}
            >
              <div className="h-20 w-0.5 bg-slate-400" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-blue-500" />
            </div>
          </div>
        )}
        {type === 'spring' && (
          <div className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center">
            <div className="h-8 w-4 rounded-l bg-slate-600" />
            <div
              className="h-2 bg-gradient-to-r from-slate-400 to-slate-500"
              style={{ width: `${80 + offset}px` }}
            />
            <div className="h-10 w-10 rounded bg-green-500" />
          </div>
        )}
        {type === 'projectile' && (
          <div className="absolute bottom-4 left-4">
            <div
              className="absolute h-3 w-3 rounded-full bg-orange-500"
              style={{
                left: `${50 + animationFrame * 3}px`,
                bottom: `${30 + Math.sin(animationFrame * 0.15) * 60}px`,
              }}
            />
            <div className="h-2 w-full bg-slate-600" />
          </div>
        )}
        {type === 'wave' && (
          <svg
            className="absolute inset-0"
            viewBox="0 0 200 80"
          >
            <path
              d={`M 0 40 ${Array.from({ length: 20 }, (_, i) => `Q ${i * 10 + 5} ${40 + Math.sin((i + animationFrame * 0.1) * 1.5) * 20}, ${i * 10 + 10} 40`).join(' ')}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
          </svg>
        )}
        <div className="absolute bottom-2 right-2 text-xs text-slate-400">
          {gameState.isSimulating ? 'Simulating...' : 'Simulation ready'}
        </div>
      </div>
    );
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
              <li>Study the physics simulation scenario</li>
              <li>Predict what happens when parameters change</li>
              <li>Select your answer BEFORE seeing the simulation</li>
              <li>Build physical intuition through prediction!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Physics Lab
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'final') {
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
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {challenge.topic}
          </span>
          {gameState.isSimulating ? (
            <Pause className="h-5 w-5 text-green-500" />
          ) : (
            <Play className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        <h3 className="mb-2 text-xl font-bold">{challenge.title}</h3>
        <p className="mb-4 text-muted-foreground">{challenge.description}</p>

        {renderSimulation()}

        <div className="my-4 flex flex-wrap gap-2">
          {challenge.parameters.map((param, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-muted px-3 py-1 text-sm"
            >
              <span className="font-medium">{param.name}:</span> {param.value}{' '}
              {param.unit}
            </div>
          ))}
        </div>

        <div className="mb-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="mb-1 font-semibold text-amber-700 dark:text-amber-400">
            Predict:
          </h4>
          <p className="text-sm">{challenge.question}</p>
        </div>

        <div className="space-y-2">
          {challenge.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const showResult = gameState.phase === 'result';
            const isCorrect = option.isCorrect;
            return (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                disabled={gameState.phase === 'result'}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all',
                  gameState.phase === 'predict' &&
                    'cursor-pointer hover:border-primary hover:bg-primary/5',
                  showResult &&
                    isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50 dark:bg-green-900/20',
                  showResult &&
                    isSelected &&
                    !isCorrect &&
                    'border-red-500 bg-red-50 dark:bg-red-900/20',
                  showResult &&
                    !isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50/50 dark:bg-green-900/10',
                )}
              >
                {showResult && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="flex-1">{option.label}</span>
              </button>
            );
          })}
        </div>

        {gameState.phase === 'result' && gameState.selectedIndex !== null && (
          <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {challenge.options[gameState.selectedIndex].explanation}
            </p>
          </div>
        )}

        {gameState.phase === 'result' && (
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
                Next Scenario
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
