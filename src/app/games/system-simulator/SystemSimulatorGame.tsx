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
  Activity,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Link,
} from 'lucide-react';

interface SystemScenario {
  id: string;
  title: string;
  description: string;
  systemState: string;
  options: {
    label: string;
    immediateEffect: string;
    longTermEffect: string;
    isOptimal: boolean;
  }[];
  explanation: string;
  concept: string; // e.g. "Positive Feedback"
  difficulty: Difficulty;
}

const scenarios: SystemScenario[] = [
  // EASY
  {
    id: 'mic-screech',
    title: 'The Screeching Mic',
    description:
      'You are at an event. The microphone starts making a loud, high-pitched squeal.',
    systemState: 'Audio Output looping back into Input',
    options: [
      {
        label: 'Turn up the volume to hear better',
        immediateEffect: 'Squeal gets louder',
        longTermEffect: 'Equipment damage',
        isOptimal: false,
      },
      {
        label: 'Move the mic away from the speaker',
        immediateEffect: 'Loop broken',
        longTermEffect: 'Silence restored',
        isOptimal: true,
      },
      {
        label: 'Shout louder into the mic',
        immediateEffect: 'Squeal continues',
        longTermEffect: 'Audience annoyed',
        isOptimal: false,
      },
    ],
    explanation:
      'This is a "Positive Feedback Loop" (Audio Out -> Audio In -> Amplified -> Audio Out). You must break the cycle, not feed it.',
    concept: 'Positive Feedback Loop',
    difficulty: 'easy',
  },
  {
    id: 'thermostat',
    title: 'The Freezing Room',
    description:
      'It is cold. You set the thermostat to 80°F. The heater blasts hot air.',
    systemState: 'Room temperature rising slowly',
    options: [
      {
        label: 'Keep cranking it up to 90°F',
        immediateEffect: 'Heater stays on',
        longTermEffect: 'Room overheats miserably',
        isOptimal: false,
      },
      {
        label: 'Wait for the delay',
        immediateEffect: 'Room stays cold briefly',
        longTermEffect: 'Temperature stabilizes at 70°F',
        isOptimal: true,
      },
      {
        label: 'Turn it off completely',
        immediateEffect: 'Heater stops',
        longTermEffect: 'Room freezes',
        isOptimal: false,
      },
    ],
    explanation:
      'Systems have delays. Reacting to the *current* state without accounting for the delay causes oscillation (too hot/too cold). Patience stabilizes the system.',
    concept: 'System Delay / Oscillation',
    difficulty: 'easy',
  },
  // MEDIUM
  {
    id: 'predator-prey',
    title: 'Wolf & Rabbit',
    description:
      'The rabbit population is exploding, eating all the carrots. Farmers want to kill all the wolves.',
    systemState: 'Wolves eat rabbits. Rabbits eat crops.',
    options: [
      {
        label: 'Kill all the wolves',
        immediateEffect: 'No predators',
        longTermEffect: 'Rabbits overpopulate -> eat all crops -> starvation',
        isOptimal: false,
      },
      {
        label: 'Introduce more rabbits',
        immediateEffect: 'Wolves happy',
        longTermEffect: 'Crops destroyed faster',
        isOptimal: false,
      },
      {
        label: 'Maintain wolf population balance',
        immediateEffect: 'Farmers annoyed',
        longTermEffect: 'Rabbit population controlled naturally',
        isOptimal: true,
      },
    ],
    explanation:
      'Removing a predator breaks the "Negative Feedback Loop" that controls the prey. Without wolves, rabbits grow explicitly until they crash the ecosystem.',
    concept: 'Balancing Loop',
    difficulty: 'medium',
  },
  {
    id: 'traffic-jam',
    title: 'The Highway',
    description:
      'Traffic is terrible. Commuters are angry. The city has budget.',
    systemState: 'Capacity < Demand',
    options: [
      {
        label: 'Add 2 more lanes',
        immediateEffect: 'Traffic flows faster',
        longTermEffect: 'Induced Demand fills lanes -> Jam returns',
        isOptimal: false,
      },
      {
        label: 'Improve public transit & zoning',
        immediateEffect: 'Expensive/Slow',
        longTermEffect: 'Reduces car dependency -> Traffic solved',
        isOptimal: true,
      },
      {
        label: 'Do nothing',
        immediateEffect: 'Anger',
        longTermEffect: 'Stagnation',
        isOptimal: false,
      },
    ],
    explanation:
      'This is "Induced Demand". Making driving easier encourages more people to drive, engaging a reinforcing loop that fills the road back up.',
    concept: 'Systems Archetype: Fixes that Fail',
    difficulty: 'medium',
  },
  // HARD
  {
    id: 'tech-debt',
    title: 'The Feature Rush',
    description: 'Sales team wants 5 new features NOW. Codebase is messy.',
    systemState: 'Development speed slowing down',
    options: [
      {
        label: 'Ship features, skip tests',
        immediateEffect: 'Features delivered fast',
        longTermEffect:
          'Bugs explode -> Devs spend 100% time fixing -> Speed = 0',
        isOptimal: false,
      },
      {
        label: 'Refactor and delay features',
        immediateEffect: 'Sales checks delayed',
        longTermEffect: 'Sustainable velocity restored',
        isOptimal: true,
      },
      {
        label: 'Hire 10 new junior devs',
        immediateEffect: 'Chaos/Onboarding cost',
        longTermEffect: "Brooks' Law: Late project becomes later",
        isOptimal: false,
      },
    ],
    explanation:
      'Taking a shortcut creates "Technical Debt". It works now (Positive Feedback loop on feature count), but eventually, the debt interest (bugs) consumes all capacity.',
    concept: 'Shifting the Burden',
    difficulty: 'hard',
  },
  {
    id: 'cobras',
    title: 'The Cobra Effect',
    description:
      'The city has too many cobras. The government offers a cash bounty for every dead cobra.',
    systemState: 'People respond to incentives',
    options: [
      {
        label: 'Increase the bounty',
        immediateEffect: 'More dead cobras',
        longTermEffect: 'People start BREEDING cobras for profit',
        isOptimal: false,
      },
      {
        label: 'End the bounty',
        immediateEffect: 'Breeders release cobras',
        longTermEffect: 'Short spike, then normalization',
        isOptimal: true,
      },
      {
        label: 'Hire snake hunters directly',
        immediateEffect: 'Costly',
        longTermEffect: 'Controlled reduction without perverse incentives',
        isOptimal: true,
      },
    ],
    explanation:
      'Perverse Incentives. Solving a symptom (snakes) with a metric (dead snakes) often leads to gaming the system. You accidentally created a Cobra Industry.',
    concept: 'Unintended Consequences',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: SystemScenario | null;
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

export default function SystemSimulatorGame() {
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
            <h3 className="mb-3 font-semibold">Systems Lab</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              You are the architect of complex systems. Your goal is stability
              and sustainability.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Identify Feedback Loops (Positive vs Negative)</li>
              <li>• Predict Delays and Oscillations</li>
              <li>• Spot Unintended Consequences</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Activity className="h-5 w-5" />
            Run Simulation
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
          System Check {gameState.roundNumber} of {gameState.totalRounds}
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
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
            <RefreshCw className="h-3 w-3" />
            {scenario.concept}
          </span>
        </div>

        {/* Question */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            {scenario.title}
          </h2>
          <p className="font-medium text-muted-foreground">
            {scenario.description}
          </p>
          <div className="mt-4 inline-block rounded-lg bg-black/5 p-3 text-sm font-bold text-indigo-600 dark:bg-white/5 dark:text-indigo-400">
            Current State: {scenario.systemState}
          </div>
        </div>

        <h3 className="mb-6 text-center text-lg font-semibold">
          Where is the Leverage Point?
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
                  {showFeedback && (
                    <div className="text-xs">
                      <span className="block opacity-80">
                        Input: {option.immediateEffect}
                      </span>
                      <span className="block font-bold">
                        Output: {option.longTermEffect}
                      </span>
                    </div>
                  )}
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
                ? 'Correct! System Stabilized.'
                : 'Warning: Runaway Feedback Loop Detected.'}
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-indigo-700 dark:text-indigo-400">
                <Lightbulb className="h-4 w-4" />
                Systems Thinking:
              </h4>
              <p className="text-sm text-indigo-600 dark:text-indigo-300">
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
                  : 'Next Cycle'}
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
          Reboot System
        </Button>
      </div>
    </div>
  );
}
