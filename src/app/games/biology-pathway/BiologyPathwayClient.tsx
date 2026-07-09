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
  Dna,
  Plus,
  ArrowDown,
} from 'lucide-react';

interface PathwayStep {
  id: string;
  name: string;
  enzyme?: string;
  product: string;
}

interface PathwayChallenge {
  id: string;
  title: string;
  topic: string;
  description: string;
  startingMolecule: string;
  targetOutcome: string;
  availableSteps: PathwayStep[];
  correctSequence: string[];
  difficulty: Difficulty;
  explanation: string;
}

const challenges: PathwayChallenge[] = [
  {
    id: 'glycolysis-1',
    title: 'Glycolysis: Glucose to Pyruvate',
    topic: 'Metabolism',
    description: 'Build the core glycolysis pathway',
    startingMolecule: 'Glucose',
    targetOutcome: 'Pyruvate + 2 ATP + 2 NADH',
    availableSteps: [
      {
        id: 's1',
        name: 'Hexokinase',
        enzyme: 'Hexokinase',
        product: 'Glucose-6-P',
      },
      {
        id: 's2',
        name: 'Phosphoglucose isomerase',
        enzyme: 'PGI',
        product: 'Fructose-6-P',
      },
      {
        id: 's3',
        name: 'Phosphofructokinase',
        enzyme: 'PFK-1',
        product: 'Fructose-1,6-bisP',
      },
      {
        id: 's4',
        name: 'Aldolase + later steps',
        enzyme: 'Multiple',
        product: 'Pyruvate',
      },
      {
        id: 'd1',
        name: 'Lactate dehydrogenase',
        enzyme: 'LDH',
        product: 'Lactate',
      },
    ],
    correctSequence: ['s1', 's2', 's3', 's4'],
    difficulty: 'easy',
    explanation:
      'Glycolysis converts glucose to pyruvate through 10 enzymatic steps. PFK-1 is the rate-limiting enzyme.',
  },
  {
    id: 'citric-acid',
    title: 'Citric Acid Cycle Entry',
    topic: 'Metabolism',
    description: 'How does pyruvate enter the TCA cycle?',
    startingMolecule: 'Pyruvate',
    targetOutcome: 'Citrate (entering TCA cycle)',
    availableSteps: [
      {
        id: 's1',
        name: 'Pyruvate dehydrogenase',
        enzyme: 'PDH',
        product: 'Acetyl-CoA + CO₂',
      },
      { id: 's2', name: 'Citrate synthase', enzyme: 'CS', product: 'Citrate' },
      {
        id: 'd1',
        name: 'Pyruvate carboxylase',
        enzyme: 'PC',
        product: 'Oxaloacetate',
      },
      {
        id: 'd2',
        name: 'Lactate dehydrogenase',
        enzyme: 'LDH',
        product: 'Lactate',
      },
    ],
    correctSequence: ['s1', 's2'],
    difficulty: 'easy',
    explanation:
      'Pyruvate is converted to Acetyl-CoA by PDH, which then condenses with oxaloacetate to form citrate via citrate synthase.',
  },
  {
    id: 'photosynthesis-light',
    title: 'Light Reactions of Photosynthesis',
    topic: 'Photosynthesis',
    description: 'Build the light-dependent reaction pathway',
    startingMolecule: 'H₂O + Light',
    targetOutcome: 'ATP + NADPH + O₂',
    availableSteps: [
      { id: 's1', name: 'Photolysis', enzyme: 'PSII', product: 'O₂ + e⁻ + H⁺' },
      {
        id: 's2',
        name: 'Electron transport chain',
        enzyme: 'ETC',
        product: 'H⁺ gradient',
      },
      { id: 's3', name: 'PSI reduces NADP⁺', enzyme: 'PSI', product: 'NADPH' },
      {
        id: 's4',
        name: 'Chemiosmosis',
        enzyme: 'ATP synthase',
        product: 'ATP',
      },
      {
        id: 'd1',
        name: 'Carbon fixation',
        enzyme: 'RuBisCO',
        product: '3-PGA',
      },
    ],
    correctSequence: ['s1', 's2', 's3', 's4'],
    difficulty: 'medium',
    explanation:
      'Light reactions split water, pass electrons through ETC, generate NADPH at PSI, and produce ATP via chemiosmosis.',
  },
  {
    id: 'beta-oxidation',
    title: 'Fatty Acid β-Oxidation',
    topic: 'Lipid Metabolism',
    description: 'Break down a fatty acid for energy',
    startingMolecule: 'Fatty Acid (16:0)',
    targetOutcome: '8 Acetyl-CoA + FADH₂ + NADH',
    availableSteps: [
      {
        id: 's1',
        name: 'Activation',
        enzyme: 'Acyl-CoA synthetase',
        product: 'Acyl-CoA',
      },
      {
        id: 's2',
        name: 'Transport into mitochondria',
        enzyme: 'Carnitine shuttle',
        product: 'Acyl-CoA (matrix)',
      },
      {
        id: 's3',
        name: 'Oxidation + Hydration + Oxidation + Thiolysis',
        enzyme: 'β-oxidation enzymes',
        product: 'Acetyl-CoA + shorter chain',
      },
      {
        id: 's4',
        name: 'Repeat 7 times',
        enzyme: 'Multiple cycles',
        product: '8 Acetyl-CoA',
      },
      {
        id: 'd1',
        name: 'Fatty acid synthesis',
        enzyme: 'FAS',
        product: 'Longer chain',
      },
    ],
    correctSequence: ['s1', 's2', 's3', 's4'],
    difficulty: 'medium',
    explanation:
      'Palmitate (16:0) undergoes 7 cycles of β-oxidation, producing 8 Acetyl-CoA, 7 FADH₂, and 7 NADH.',
  },
  {
    id: 'insulin-signaling',
    title: 'Insulin Signaling Pathway',
    topic: 'Cell Signaling',
    description: 'How does insulin signal cells to take up glucose?',
    startingMolecule: 'Insulin binding to receptor',
    targetOutcome: 'GLUT4 translocation to membrane',
    availableSteps: [
      {
        id: 's1',
        name: 'Receptor autophosphorylation',
        enzyme: 'IR kinase',
        product: 'Active receptor',
      },
      {
        id: 's2',
        name: 'IRS phosphorylation',
        enzyme: 'IR',
        product: 'Active IRS',
      },
      { id: 's3', name: 'PI3K activation', enzyme: 'PI3K', product: 'PIP₃' },
      {
        id: 's4',
        name: 'Akt activation',
        enzyme: 'PDK1/mTORC2',
        product: 'Active Akt',
      },
      {
        id: 's5',
        name: 'GLUT4 vesicle translocation',
        enzyme: 'Multiple',
        product: 'Glucose uptake',
      },
      {
        id: 'd1',
        name: 'MAPK pathway',
        enzyme: 'Ras',
        product: 'Gene expression',
      },
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5'],
    difficulty: 'hard',
    explanation:
      'Insulin triggers receptor kinase → IRS → PI3K → Akt cascade, ultimately causing GLUT4 vesicles to fuse with the membrane.',
  },
  {
    id: 'dna-replication',
    title: 'DNA Replication Fork',
    topic: 'Molecular Biology',
    description: 'Sequence the events at a replication fork',
    startingMolecule: 'Origin of replication',
    targetOutcome: 'Two daughter DNA strands',
    availableSteps: [
      {
        id: 's1',
        name: 'Helicase unwinds',
        enzyme: 'Helicase',
        product: 'Single strands',
      },
      {
        id: 's2',
        name: 'SSB proteins stabilize',
        enzyme: 'SSB',
        product: 'Protected ssDNA',
      },
      {
        id: 's3',
        name: 'Primase adds primer',
        enzyme: 'Primase',
        product: 'RNA primer',
      },
      {
        id: 's4',
        name: 'DNA Pol III extends',
        enzyme: 'Pol III',
        product: 'New DNA strand',
      },
      {
        id: 's5',
        name: 'Pol I replaces primer',
        enzyme: 'Pol I',
        product: 'Complete strand',
      },
      {
        id: 's6',
        name: 'Ligase seals gaps',
        enzyme: 'Ligase',
        product: 'Continuous strand',
      },
      { id: 'd1', name: 'Transcription', enzyme: 'RNA Pol', product: 'mRNA' },
    ],
    correctSequence: ['s1', 's2', 's3', 's4', 's5', 's6'],
    difficulty: 'hard',
    explanation:
      'DNA replication requires coordinated action of helicase, SSB, primase, Pol III, Pol I, and ligase.',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentChallenge: PathwayChallenge | null;
  selectedSteps: string[];
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
}

export default function BiologyPathwayClient() {
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
    (difficulty: Difficulty, usedIds: string[]): PathwayChallenge | null => {
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
    const correct = gameState.currentChallenge.correctSequence;
    const selected = gameState.selectedSteps;
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
              <li>Build metabolic or signaling pathways</li>
              <li>Select steps and enzymes in the correct order</li>
              <li>Identify missing links and feedback loops</li>
              <li>Master systems biology for NEET!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <Dna className="h-5 w-5" />
            Start Building Pathways
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

  const correct = challenge.correctSequence;
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
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {challenge.topic}
        </span>
        <h3 className="mb-2 text-xl font-bold">{challenge.title}</h3>
        <p className="mb-4 text-muted-foreground">{challenge.description}</p>

        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/20">
            <div className="text-xs text-muted-foreground">Start</div>
            <div className="font-bold">{challenge.startingMolecule}</div>
          </div>
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
          <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-900/20">
            <div className="text-xs text-muted-foreground">Target</div>
            <div className="font-bold">{challenge.targetOutcome}</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 font-semibold">Your Pathway:</h4>
          {selected.length === 0 ? (
            <p className="text-sm italic text-muted-foreground">
              Add steps below...
            </p>
          ) : (
            <div className="space-y-1">
              {selected.map((id, idx) => {
                const step = challenge.availableSteps.find((s) => s.id === id);
                const isCorrectStep =
                  gameState.phase === 'feedback' && correct[idx] === id;
                const isWrongStep =
                  gameState.phase === 'feedback' && correct[idx] !== id;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-2"
                  >
                    {idx > 0 && (
                      <ArrowDown className="ml-4 h-4 w-4 text-muted-foreground" />
                    )}
                    <div
                      className={cn(
                        'flex flex-1 items-center gap-2 rounded-lg border px-3 py-2',
                        isCorrectStep &&
                          'border-green-500 bg-green-50 dark:bg-green-900/20',
                        isWrongStep &&
                          'border-red-500 bg-red-50 dark:bg-red-900/20',
                      )}
                    >
                      <span className="text-xs font-medium">{idx + 1}.</span>
                      {isCorrectStep && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                      {isWrongStep && (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                      <span className="flex-1 text-sm">{step?.name}</span>
                      <span className="text-xs text-muted-foreground">
                        → {step?.product}
                      </span>
                      {gameState.phase === 'playing' && (
                        <button
                          onClick={() => removeStep(id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {gameState.phase === 'playing' && (
          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Available Steps:</h4>
            <div className="flex flex-wrap gap-2">
              {challenge.availableSteps
                .filter((s) => !selected.includes(s.id))
                .map((step) => (
                  <button
                    key={step.id}
                    onClick={() => addStep(step.id)}
                    className="flex items-center gap-1 rounded-lg border px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <Plus className="h-3 w-3" />
                    {step.name}
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
                ? '✓ Correct!'
                : 'Correct pathway: ' +
                  challenge.correctSequence
                    .map(
                      (id) =>
                        challenge.availableSteps.find((s) => s.id === id)?.name,
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
              Submit Pathway
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
                  Next Pathway
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
