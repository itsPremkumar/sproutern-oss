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
  Zap,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  Timer,
  Brain,
} from 'lucide-react';

interface SprintChallenge {
  id: string;
  topic: string; // e.g., "Electrostatics"
  concept: string; // e.g., "Gauss Law Application"
  prompt: string; // "Explain how to find the flux through a cube where charge q is at one corner."
  modelExplanation: string; // "Charge is shared by 8 cubes. Flux = q / (8 * epsilon_0)."
  problem: {
    question: string;
    options: {
      label: string;
      isCorrect: boolean;
    }[];
    explanation: string;
  };
  difficulty: Difficulty;
}

const challenges: SprintChallenge[] = [
  // EASY
  {
    id: 'newton-3',
    topic: 'Mechanics',
    concept: "Newton's Third Law",
    prompt:
      'Explain the forces when a horse pulls a cart. If pull = pull-back, how does it move?',
    modelExplanation:
      'Forces are on DIFFERENT bodies. Horse pushes ground back, ground pushes horse forward (friction). This external force moves the system.',
    problem: {
      question:
        'A 500kg horse pulls a 1000kg cart. The horse pushes the ground backward with 2000N. Friction on cart is 500N. What is the acceleration?',
      options: [
        { label: '1.0 m/s²', isCorrect: true },
        { label: '0.5 m/s²', isCorrect: false },
        { label: '0 m/s²', isCorrect: false },
        { label: '2.0 m/s²', isCorrect: false },
      ],
      explanation:
        'Net Force = Force(Ground on Horse) - Friction(Ground on Cart) = 2000N - 500N = 1500N. Total Mass = 1500kg. a = F/m = 1500/1500 = 1.0 m/s².',
    },
    difficulty: 'easy',
  },
  {
    id: 'doppler',
    topic: 'Waves',
    concept: 'Doppler Effect',
    prompt: 'Explain why the pitch changes when a train passes you.',
    modelExplanation:
      'Wavefronts bunch up in front (higher freq) and stretch behind (lower freq) due to source motion relative to the medium.',
    problem: {
      question:
        "Source moving at v/2 towards stationary observer. Sound speed is v. What is observed frequency f'?",
      options: [
        { label: '2f', isCorrect: true },
        { label: 'f/2', isCorrect: false },
        { label: '1.5f', isCorrect: false },
        { label: '0.66f', isCorrect: false },
      ],
      explanation:
        "f' = f * (v / (v - vs)). vs = v/2. f' = f * (v / (0.5v)) = 2f.",
    },
    difficulty: 'easy',
  },
  // MEDIUM
  {
    id: 'gauss-corner',
    topic: 'Electrostatics',
    concept: 'Gauss Law Symmetry',
    prompt:
      'Explain flux through one face of a cube if charge q is at the center of the cube.',
    modelExplanation:
      'By symmetry, total flux q/ε₀ is split equally among 6 faces. So q/(6ε₀).',
    problem: {
      question:
        'Now charge q is at one CORNER of the cube. What is the flux through one of the faces TOUCHING that corner?',
      options: [
        { label: 'Zero', isCorrect: true },
        { label: 'q / (24ε₀)', isCorrect: false },
        { label: 'q / (8ε₀)', isCorrect: false },
        { label: 'q / (6ε₀)', isCorrect: false },
      ],
      explanation:
        'The electric field vector lies IN the plane of the faces touching the corner. Thus E dot dA = 0. Flux is zero for touching faces.',
    },
    difficulty: 'medium',
  },
  {
    id: 'lcr-resonance',
    topic: 'AC Circuits',
    concept: 'Resonance',
    prompt: 'What condition maximizes current in a Series LCR circuit?',
    modelExplanation:
      'Inductive reactance (XL) cancels Capacitive reactance (XC). Impedance Z is minimum (only R).',
    problem: {
      question:
        'At resonance, voltage across Inductor is 50V, Capacitor is 50V, Resistor is 20V. Source Voltage?',
      options: [
        { label: '20V', isCorrect: true },
        { label: '120V', isCorrect: false },
        { label: '70V', isCorrect: false },
        { label: '0V', isCorrect: false },
      ],
      explanation:
        'In series LCR, VL and VC are 180° out of phase and cancel. V_source = sqrt(VR^2 + (VL-VC)^2). VL-VC=0, so V_source = VR = 20V.',
    },
    difficulty: 'medium',
  },
  // HARD
  {
    id: 'rollet-theorem',
    topic: 'Calculus',
    concept: "Rolle's Theorem",
    prompt: "State the geometric meaning of Rolle's Theorem.",
    modelExplanation:
      'If a smooth function starts and ends at the same height, there must be at least one point where the tangent is horizontal (slope 0).',
    problem: {
      question: "f(x) = (x-1)(x-2)(x-3). How many roots does f'(x)=0 have?",
      options: [
        { label: 'Exactly 2', isCorrect: true },
        { label: 'Exactly 1', isCorrect: false },
        { label: 'Exactly 3', isCorrect: false },
        { label: 'None', isCorrect: false },
      ],
      explanation:
        "f(x) has roots at 1, 2, 3. By Rolle, between 1&2 there is a root of f', and between 2&3 there is another. Degree is 3, so f' is degree 2. Exactly 2 roots.",
    },
    difficulty: 'hard',
  },
  {
    id: 'collision-center-mass',
    topic: 'Mechanics',
    concept: 'Center of Mass Frame',
    prompt: 'Why is analyzing collisions easier in the COM frame?',
    modelExplanation:
      'Total momentum is zero in COM frame. Simplifies calculations as particles just approach and recede back to back.',
    problem: {
      question:
        'Two blocks m and 2m approach each other at v and v/2. Perfectly inelastic collision. Energy loss?',
      options: [
        { label: 'All kinetic energy', isCorrect: true },
        { label: 'Half kinetic energy', isCorrect: false },
        { label: 'None', isCorrect: false },
        { label: '1/3 kinetic energy', isCorrect: false },
      ],
      explanation:
        'Momentum of m is mv (right), 2m is 2m(-v/2) = -mv. Total P = 0. They stop dead. All KE is lost.',
    },
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'explain' | 'problem' | 'result';
  difficulty: Difficulty;
  currentChallenge: SprintChallenge | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  usedIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 3 },
  medium: { rounds: 3 },
  hard: { rounds: 3 },
};

export default function ConceptSprintGame() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    selectedIndex: null,
    usedIds: [],
  });

  const getAvailableChallenges = useCallback(
    (difficulty: Difficulty, usedIds: string[]) => {
      return challenges.filter(
        (s) => s.difficulty === difficulty && !usedIds.includes(s.id),
      );
    },
    [],
  );

  const startGame = useCallback(() => {
    const available = getAvailableChallenges(gameState.difficulty, []);
    if (available.length === 0) return;

    const challenge = available[Math.floor(Math.random() * available.length)];

    setGameState({
      phase: 'explain',
      difficulty: gameState.difficulty,
      currentChallenge: challenge,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      correctAnswers: 0,
      selectedIndex: null,
      usedIds: [challenge.id],
    });
  }, [gameState.difficulty, getAvailableChallenges]);

  const handleExplanationDone = () => {
    setGameState((prev) => ({ ...prev, phase: 'problem' }));
  };

  const handleSelectOption = (index: number) => {
    if (!gameState.currentChallenge || gameState.selectedIndex !== null) return;

    const isCorrect =
      gameState.currentChallenge.problem.options[index].isCorrect;
    const points = isCorrect ? 100 : 0;

    setGameState((prev) => ({
      ...prev,
      selectedIndex: index,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const available = getAvailableChallenges(
      gameState.difficulty,
      gameState.usedIds,
    );
    if (available.length === 0) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const challenge = available[Math.floor(Math.random() * available.length)];

    setGameState((prev) => ({
      ...prev,
      phase: 'explain',
      currentChallenge: challenge,
      roundNumber: prev.roundNumber + 1,
      selectedIndex: null,
      usedIds: [...prev.usedIds, challenge.id],
    }));
  };

  // Setup Phase
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
            <h3 className="mb-3 font-semibold">How to Play</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              This game tests your rapid conceptual understanding.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                1. You'll get a prompt to <strong>Explain a Concept</strong>.
                Think about it or speak it out loud.
              </li>
              <li>
                2. Reveal the <strong>Model Explanation</strong> to check your
                intuition.
              </li>
              <li>
                3. Solve a <strong>Follow-up Problem</strong> to earn points.
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Zap className="h-5 w-5" />
            Start Sprint
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
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalRounds - gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const challenge = gameState.currentChallenge!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Sprint {gameState.roundNumber} / {gameState.totalRounds}
        </span>
        <span className="text-sm font-bold text-primary">
          Score: {gameState.score}
        </span>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Topic Badge */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Brain className="h-3 w-3" />
            {challenge.topic}
          </span>
        </div>

        <div className="mb-8 text-center">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            {challenge.concept}
          </h2>
        </div>

        {gameState.phase === 'explain' && (
          <div className="duration-500 animate-in fade-in slide-in-from-bottom-4">
            <div className="mb-8 rounded-xl bg-muted p-6 text-center">
              <p className="text-lg font-medium leading-relaxed">
                {challenge.prompt}
              </p>
            </div>
            <div className="text-center">
              <p className="mb-6 text-sm text-muted-foreground">
                Take 10 seconds to formulate your answer...
              </p>
              <Button
                onClick={handleExplanationDone}
                size="lg"
                className="w-full md:w-auto"
              >
                I Have My Answer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {gameState.phase === 'problem' && (
          <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
            {/* Model Explanation Reveal */}
            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <h3 className="mb-2 text-sm font-bold uppercase text-blue-700 dark:text-blue-400">
                Model Concept:
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {challenge.modelExplanation}
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="mb-4 text-center font-bold">
                Prove It: Follow-up Problem
              </h3>
              <p className="mb-6 text-center text-lg">
                {challenge.problem.question}
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {challenge.problem.options.map((option, idx) => {
                  const isSelected = gameState.selectedIndex === idx;
                  const showResult = gameState.selectedIndex !== null;
                  const isCorrect = option.isCorrect;

                  return (
                    <Button
                      key={idx}
                      variant="outline"
                      className={cn(
                        'h-auto justify-start p-4 text-left',
                        showResult &&
                          isCorrect &&
                          'border-green-500 bg-green-100 text-green-900 dark:bg-green-900/40 dark:text-green-100',
                        showResult &&
                          isSelected &&
                          !isCorrect &&
                          'border-red-500 bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-100',
                      )}
                      onClick={() => handleSelectOption(idx)}
                      disabled={showResult}
                    >
                      <div className="flex w-full items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background text-xs text-muted-foreground">
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="grow">{option.label}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>

            {gameState.selectedIndex !== null && (
              <div className="mt-6 duration-300 animate-in zoom-in-95">
                <div className="rounded-xl bg-muted/50 p-4">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    Solution:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {challenge.problem.explanation}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <Button
                    onClick={nextRound}
                    size="lg"
                  >
                    Next Sprint
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Reset button */}
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Sprint
        </Button>
      </div>
    </div>
  );
}
