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
  Layers,
  ArrowRight,
  CheckCircle,
  XCircle,
  Timer,
  Flag,
  AlertTriangle,
} from 'lucide-react';

interface MarathonScenario {
  id: string;
  title: string;
  context: string; // The base scenario
  imageUrl?: string;
  steps: {
    id: string;
    question: string;
    options: {
      label: string;
      isCorrect: boolean;
    }[];
    hint: string;
    explanation: string;
  }[];
  difficulty: Difficulty;
}

const scenarios: MarathonScenario[] = [
  {
    id: 'projectile-incline',
    title: 'Projectile on Incline',
    difficulty: 'medium',
    context:
      'A projectile is fired with velocity u at angle alpha relative to an inclined plane of inclination beta. Gravity g acts downwards.',
    steps: [
      {
        id: 'time-of-flight',
        question:
          'Step 1: Determine the Time of Flight (T). Consider motion perpendicular to the incline.',
        options: [
          { label: '2u sin(alpha) / (g cos(beta))', isCorrect: true },
          { label: '2u sin(alpha) / g', isCorrect: false },
          { label: 'u sin(alpha) / (g cos(beta))', isCorrect: false },
          { label: '2u / g', isCorrect: false },
        ],
        hint: 'Resolve g into components: g_perpendicular = g cos(beta), g_parallel = g sin(beta).',
        explanation:
          'Perpendicular motion: 0 = u_y*t - 0.5*g_perp*t^2. u_y = u sin(alpha). T = 2u sin(alpha) / (g cos(beta)).',
      },
      {
        id: 'range',
        question: 'Step 2: Find the Range (R) along the incline.',
        options: [
          { label: 'u cos(alpha) * T - 0.5 g sin(beta) T^2', isCorrect: true },
          { label: 'u cos(alpha) * T', isCorrect: false },
          { label: 'u^2 sin(2 alpha) / g', isCorrect: false },
          { label: 'u^2 / g', isCorrect: false },
        ],
        hint: 'Use parallel motion: x = u_x*t + 0.5*a_x*t^2. Watch the sign of a_x!',
        explanation:
          'Range = (u cos alpha)T - 0.5(g sin beta)T^2. The gravity component along the plane opposes motion.',
      },
      {
        id: 'max-range',
        question:
          'Step 3: Calculating conditions for Maximum Range. Which condition maximizes R for a given u and beta?',
        options: [
          { label: 'alpha = pi/4 - beta/2', isCorrect: true },
          { label: 'alpha = pi/4', isCorrect: false },
          { label: 'alpha = pi/2 - beta', isCorrect: false },
          { label: 'alpha = beta/2', isCorrect: false },
        ],
        hint: 'Differentiate R w.r.t alpha or use the geometric property that the direction of projection bisects the angle between incline and vertical.',
        explanation:
          'For max range on incline, projection angle bisects angle between vertical and incline. alpha + beta + (alpha + beta) + theta = 180... result: alpha = pi/4 - beta/2.',
      },
    ],
  },
  {
    id: 'organic-reaction',
    title: 'Organic Synthesis Chain',
    difficulty: 'hard',
    context: 'Start with Benzene. Reactants provided sequentially.',
    steps: [
      {
        id: 'step-1',
        question:
          'Step 1: Reaction with CH3Cl / AlCl3 (Anhydrous). What is Product A?',
        options: [
          { label: 'Toluene', isCorrect: true },
          { label: 'Chlorobenzene', isCorrect: false },
          { label: 'Phenol', isCorrect: false },
          { label: 'Benzoic Acid', isCorrect: false },
        ],
        hint: 'Friedel-Crafts Alkylation.',
        explanation:
          'Electrophilic substitution introduces a methyl group. Benzene -> Toluene.',
      },
      {
        id: 'step-2',
        question:
          'Step 2: Product A (Toluene) reacting with KMnO4 / KOH, then H3O+. What is Product B?',
        options: [
          { label: 'Benzoic Acid', isCorrect: true },
          { label: 'Benzaldehyde', isCorrect: false },
          { label: 'Benzyl Alcohol', isCorrect: false },
          { label: 'Nitrobenzene', isCorrect: false },
        ],
        hint: 'Strong oxidation of benzylic position.',
        explanation:
          'KMnO4 oxidizes the entire alkyl side chain (with at least one benzylic H) to a carboxylic acid. Toluene -> Benzoic Acid.',
      },
      {
        id: 'step-3',
        question:
          'Step 3: Product B (Benzoic Acid) with Conc. HNO3 / H2SO4. What is Product C?',
        options: [
          { label: 'm-Nitrobenzoic acid', isCorrect: true },
          { label: 'o-Nitrobenzoic acid', isCorrect: false },
          { label: 'p-Nitrobenzoic acid', isCorrect: false },
          { label: 'Aniline', isCorrect: false },
        ],
        hint: '-COOH is a deactivating, meta-directing group.',
        explanation:
          'Nitration of Benzoic acid occurs at the meta position because -COOH is electron withdrawing.',
      },
    ],
  },
  {
    id: 'thermo-cycle',
    title: 'Thermodynamics Cycle',
    difficulty: 'medium',
    context:
      'One mole of monoatomic ideal gas goes through cycle ABC. A=(P0,V0), B=(2P0,V0), C=(2P0,2V0). Returns to A linearly.',
    steps: [
      {
        id: 'work-ab',
        question:
          'Step 1: Calculate Work done in process AB (Isochoric heating).',
        options: [
          { label: '0', isCorrect: true },
          { label: 'P0V0', isCorrect: false },
          { label: '2P0V0', isCorrect: false },
          { label: '-P0V0', isCorrect: false },
        ],
        hint: 'Work = Integral of PdV.',
        explanation: 'Volume is constant (V0). dV = 0. Work = 0.',
      },
      {
        id: 'heat-bc',
        question:
          'Step 2: Calculate Heat added in process BC (Isobaric expansion).',
        options: [
          { label: '5 P0 V0', isCorrect: true },
          { label: '3 P0 V0', isCorrect: false },
          { label: '2 P0 V0', isCorrect: false },
          { label: '2.5 P0 V0', isCorrect: false },
        ],
        hint: 'Q = nCpΔT. For monoatomic, Cp = 5R/2. Use PV=nRT.',
        explanation:
          'Q = n(5R/2)(Tc - Tb). PbVb = nRTb => 2P0V0. PcVc = nRTc => 4P0V0. Δ(nRT) = 2P0V0. Q = (5/2)(2P0V0) = 5P0V0.',
      },
      {
        id: 'efficiency',
        question:
          'Step 3: If Heat rejected in CA is Q_out, and Total Work is W_net. What is efficiency?',
        options: [
          { label: 'W_net / Q_in', isCorrect: true },
          { label: '1 - Q_in / W_net', isCorrect: false },
          { label: 'Q_out / Q_in', isCorrect: false },
          { label: 'W_net / Q_out', isCorrect: false },
        ],
        hint: 'Standard definition of efficiency.',
        explanation:
          'Efficiency = Net Work Output / Total Heat Input. (Make sure not to subtract Heat Rejected from Input in the denominator).',
      },
    ],
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  difficulty: Difficulty;
  scenario: MarathonScenario | null;
  currentStepIndex: number;
  score: number;
  wrongAttempts: number;
  history: { step: number; correct: boolean }[];
  timeLeft: number;
}

export default function DeepProblemMarathonGame() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'medium',
    scenario: null,
    currentStepIndex: 0,
    score: 0,
    wrongAttempts: 0,
    history: [],
    timeLeft: 300, // 5 minutes base
  });

  // Timer
  useEffect(() => {
    if (gameState.phase !== 'playing') return;
    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeLeft <= 0) {
          return { ...prev, phase: 'result' };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState.phase]);

  const startGame = useCallback(() => {
    // Filter by difficulty, fallback to medium if none
    let potentialScenarios = scenarios.filter(
      (s) => s.difficulty === gameState.difficulty,
    );
    if (potentialScenarios.length === 0) potentialScenarios = scenarios;

    const randomScenario =
      potentialScenarios[Math.floor(Math.random() * potentialScenarios.length)];

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      scenario: randomScenario,
      currentStepIndex: 0,
      score: 0,
      wrongAttempts: 0,
      history: [],
      timeLeft: 300,
    });
  }, [gameState.difficulty]);

  const handleOptionSelect = (optionIndex: number) => {
    if (!gameState.scenario) return;

    const currentStep = gameState.scenario.steps[gameState.currentStepIndex];
    const isCorrect = currentStep.options[optionIndex].isCorrect;

    if (isCorrect) {
      // Move to next step
      const isLastStep =
        gameState.currentStepIndex === gameState.scenario.steps.length - 1;
      const points = Math.max(10 - gameState.wrongAttempts * 2, 2) * 10; // Decay points for wrong tries

      setGameState((prev) => {
        if (isLastStep) {
          return {
            ...prev,
            phase: 'result',
            score: prev.score + points,
            history: [
              ...prev.history,
              { step: prev.currentStepIndex, correct: true },
            ],
          };
        }
        return {
          ...prev,
          currentStepIndex: prev.currentStepIndex + 1,
          score: prev.score + points,
          wrongAttempts: 0, // Reset for next step
          history: [
            ...prev.history,
            { step: prev.currentStepIndex, correct: true },
          ],
        };
      });
    } else {
      // Stay on same step, penalty
      setGameState((prev) => ({
        ...prev,
        wrongAttempts: prev.wrongAttempts + 1,
        timeLeft: Math.max(0, prev.timeLeft - 10), // Time penalty
      }));
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Setup Phase
  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Deep Problem Marathon
          </h2>
          <DifficultySelector
            selected={gameState.difficulty}
            onChange={(d) =>
              setGameState((prev) => ({ ...prev, difficulty: d }))
            }
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/10">
            <h3 className="mb-3 font-semibold text-orange-800 dark:text-orange-200">
              The Challenge
            </h3>
            <p className="mb-2 text-sm text-orange-700 dark:text-orange-300">
              You will face a single complex scenario with multiple linked
              steps.
            </p>
            <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
              <li className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Chain Reasoning: Step 2 often depends on Step 1.
              </li>
              <li className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                Time Pressure: Wrong answers cost you time.
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Flag className="h-5 w-5" />
            Start Marathon
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
        totalQuestions={gameState.scenario?.steps.length || 0}
        correctAnswers={gameState.history.length}
        incorrectAnswers={0} // Abstracted away
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const { scenario, currentStepIndex } = gameState;
  const currentStep = scenario!.steps[currentStepIndex];

  return (
    <div className="space-y-6">
      {/* Status Bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xl font-bold">
            <Timer
              className={cn(
                'h-5 w-5',
                gameState.timeLeft < 60 && 'animate-pulse text-red-500',
              )}
            />
            {formatTime(gameState.timeLeft)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Level {currentStepIndex + 1}/{scenario?.steps.length}
          </span>
          <span className="font-bold text-primary">{gameState.score} pts</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Context Panel (Left) */}
        <div className="rounded-2xl border bg-card p-6 md:col-span-1">
          <h3 className="mb-4 font-bold uppercase tracking-wider text-muted-foreground">
            Scenario
          </h3>
          <div className="rounded-xl bg-muted/50 p-4">
            <p className="font-medium leading-relaxed">{scenario!.context}</p>
          </div>
          {/* Previous Steps Summary could go here */}
          {currentStepIndex > 0 && (
            <div className="mt-6 border-t pt-4">
              <h4 className="mb-2 text-xs font-bold uppercase text-muted-foreground">
                Progress
              </h4>
              <div className="space-y-2">
                {scenario!.steps.slice(0, currentStepIndex).map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span className="truncate">{s.question.split(':')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Question Panel (Right) */}
        <div className="rounded-2xl border bg-card p-6 md:col-span-2">
          <h2 className="mb-6 text-xl font-bold">{currentStep.question}</h2>

          {gameState.wrongAttempts > 0 && (
            <div className="shake mb-6 flex items-center gap-2 rounded-lg bg-red-100 p-3 text-sm text-red-700 animate-in dark:bg-red-900/30 dark:text-red-400">
              <AlertTriangle className="h-4 w-4" />
              Incorrect. Time penalty applied! Try again.
            </div>
          )}

          {gameState.wrongAttempts > 1 && (
            <div className="mb-6 rounded-lg bg-yellow-100 p-3 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
              <strong>Hint:</strong> {currentStep.hint}
            </div>
          )}

          <div className="grid gap-3">
            {currentStep.options.map((option, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="h-auto justify-start p-4 text-left text-base"
                onClick={() => handleOptionSelect(idx)}
              >
                <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-bold text-muted-foreground">
                  {String.fromCharCode(65 + idx)}
                </div>
                {option.label}
              </Button>
            ))}
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
          Abandon Marathon
        </Button>
      </div>
    </div>
  );
}
