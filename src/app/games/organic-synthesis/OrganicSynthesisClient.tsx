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
  FlaskConical,
  Plus,
} from 'lucide-react';

interface Reagent {
  id: string;
  name: string;
  formula: string;
}

interface SynthesisChallenge {
  id: string;
  title: string;
  startingMaterial: string;
  targetProduct: string;
  availableReagents: Reagent[];
  correctSequence: string[];
  difficulty: Difficulty;
  explanation: string;
}

const challenges: SynthesisChallenge[] = [
  {
    id: 'alkene-to-alcohol',
    title: 'Alkene to Alcohol',
    startingMaterial: 'CH₂=CH₂ (Ethene)',
    targetProduct: 'CH₃-CH₂-OH (Ethanol)',
    availableReagents: [
      {
        id: 'h2o-h2so4',
        name: 'Acid-catalyzed hydration',
        formula: 'H₂O/H₂SO₄',
      },
      { id: 'nabh4', name: 'Sodium borohydride', formula: 'NaBH₄' },
      { id: 'kmno4', name: 'Potassium permanganate', formula: 'KMnO₄' },
    ],
    correctSequence: ['h2o-h2so4'],
    difficulty: 'easy',
    explanation:
      'Markovnikov addition of water across the double bond. H₂SO₄ protonates the alkene, water attacks the carbocation.',
  },
  {
    id: 'benzene-to-nitrobenzene',
    title: 'Benzene to Nitrobenzene',
    startingMaterial: 'C₆H₆ (Benzene)',
    targetProduct: 'C₆H₅NO₂ (Nitrobenzene)',
    availableReagents: [
      { id: 'hno3-h2so4', name: 'Nitrating mixture', formula: 'HNO₃/H₂SO₄' },
      { id: 'cl2-fecl3', name: 'Chlorination', formula: 'Cl₂/FeCl₃' },
      { id: 'br2-febr3', name: 'Bromination', formula: 'Br₂/FeBr₃' },
    ],
    correctSequence: ['hno3-h2so4'],
    difficulty: 'easy',
    explanation:
      'Electrophilic aromatic substitution with nitronium ion (NO₂⁺) generated from the mixed acids.',
  },
  {
    id: 'alcohol-to-aldehyde',
    title: 'Primary Alcohol to Aldehyde',
    startingMaterial: 'CH₃CH₂OH (Ethanol)',
    targetProduct: 'CH₃CHO (Acetaldehyde)',
    availableReagents: [
      { id: 'pcc', name: 'PCC oxidation', formula: 'PCC/CH₂Cl₂' },
      { id: 'kmno4', name: 'KMnO₄ oxidation', formula: 'KMnO₄/H⁺' },
      { id: 'lialh4', name: 'Reduction', formula: 'LiAlH₄' },
    ],
    correctSequence: ['pcc'],
    difficulty: 'medium',
    explanation:
      'PCC (Pyridinium chlorochromate) is a mild oxidant that stops at the aldehyde. KMnO₄ would over-oxidize to carboxylic acid.',
  },
  {
    id: 'benzene-to-aniline',
    title: 'Benzene to Aniline',
    startingMaterial: 'C₆H₆ (Benzene)',
    targetProduct: 'C₆H₅NH₂ (Aniline)',
    availableReagents: [
      { id: 'hno3-h2so4', name: 'Nitration', formula: 'HNO₃/H₂SO₄' },
      { id: 'sn-hcl', name: 'Reduction', formula: 'Sn/HCl' },
      { id: 'nh3', name: 'Ammoniation', formula: 'NH₃' },
      { id: 'naoh', name: 'Base treatment', formula: 'NaOH' },
    ],
    correctSequence: ['hno3-h2so4', 'sn-hcl'],
    difficulty: 'medium',
    explanation:
      'First nitrate benzene to nitrobenzene, then reduce the nitro group to amine using Sn/HCl (or Fe/HCl).',
  },
  {
    id: 'toluene-to-benzoic-acid',
    title: 'Toluene to Benzoic Acid',
    startingMaterial: 'C₆H₅CH₃ (Toluene)',
    targetProduct: 'C₆H₅COOH (Benzoic Acid)',
    availableReagents: [
      { id: 'kmno4-heat', name: 'Strong oxidation', formula: 'KMnO₄/heat' },
      { id: 'pcc', name: 'Mild oxidation', formula: 'PCC' },
      { id: 'cl2-light', name: 'Free radical halogenation', formula: 'Cl₂/hν' },
    ],
    correctSequence: ['kmno4-heat'],
    difficulty: 'medium',
    explanation:
      'Hot alkaline KMnO₄ oxidizes the methyl side chain all the way to carboxylic acid.',
  },
  {
    id: 'grignard-alcohol',
    title: 'Grignard Synthesis of Alcohol',
    startingMaterial: 'CH₃Br (Bromomethane)',
    targetProduct: 'CH₃CH₂OH (Ethanol)',
    availableReagents: [
      { id: 'mg-ether', name: 'Grignard formation', formula: 'Mg/dry ether' },
      { id: 'hcho', name: 'Formaldehyde', formula: 'HCHO' },
      { id: 'h3o+', name: 'Acid workup', formula: 'H₃O⁺' },
      { id: 'naoh', name: 'Base', formula: 'NaOH' },
    ],
    correctSequence: ['mg-ether', 'hcho', 'h3o+'],
    difficulty: 'hard',
    explanation:
      'Form Grignard reagent (CH₃MgBr), add to formaldehyde (adds one carbon), then acid workup to get primary alcohol.',
  },
  {
    id: 'benzene-to-phenol',
    title: 'Benzene to Phenol (Industrial)',
    startingMaterial: 'C₆H₆ (Benzene)',
    targetProduct: 'C₆H₅OH (Phenol)',
    availableReagents: [
      { id: 'h2so4', name: 'Sulfonation', formula: 'conc. H₂SO₄' },
      { id: 'naoh-fusion', name: 'Alkali fusion', formula: 'NaOH/fusion' },
      { id: 'h3o+', name: 'Acidification', formula: 'H₃O⁺' },
      { id: 'cl2-fecl3', name: 'Chlorination', formula: 'Cl₂/FeCl₃' },
    ],
    correctSequence: ['h2so4', 'naoh-fusion', 'h3o+'],
    difficulty: 'hard',
    explanation:
      'Sulfonate benzene, then fuse with NaOH at high temperature to form sodium phenoxide, finally acidify to get phenol.',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentChallenge: SynthesisChallenge | null;
  selectedReagents: string[];
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
}

export default function OrganicSynthesisClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentChallenge: null,
    selectedReagents: [],
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    usedIds: [],
  });

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): SynthesisChallenge | null => {
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
        selectedReagents: [],
        roundNumber: 1,
        totalRounds: 3,
        score: 0,
        correctAnswers: 0,
        usedIds: [challenge.id],
      });
    },
    [getRandomChallenge],
  );

  const addReagent = (reagentId: string) => {
    if (gameState.selectedReagents.includes(reagentId)) return;
    setGameState((prev) => ({
      ...prev,
      selectedReagents: [...prev.selectedReagents, reagentId],
    }));
  };

  const removeReagent = (reagentId: string) => {
    setGameState((prev) => ({
      ...prev,
      selectedReagents: prev.selectedReagents.filter((id) => id !== reagentId),
    }));
  };

  const checkAnswer = () => {
    if (!gameState.currentChallenge) return;
    const correct = gameState.currentChallenge.correctSequence;
    const selected = gameState.selectedReagents;
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
      selectedReagents: [],
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
              <li>You&apos;ll see a starting material and target product</li>
              <li>
                Select reagents in the correct order to complete the synthesis
              </li>
              <li>Minimize steps for maximum points</li>
              <li>Master retrosynthesis thinking!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <FlaskConical className="h-5 w-5" />
            Start Synthesis
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
  const selected = gameState.selectedReagents;
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
        <h3 className="mb-4 text-xl font-bold">{challenge.title}</h3>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/20">
            <div className="text-xs text-muted-foreground">Starting</div>
            <div className="font-mono font-bold">
              {challenge.startingMaterial}
            </div>
          </div>
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
          <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-900/20">
            <div className="text-xs text-muted-foreground">Target</div>
            <div className="font-mono font-bold">{challenge.targetProduct}</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 font-semibold">Your Synthesis Route:</h4>
          {selected.length === 0 ? (
            <p className="text-sm italic text-muted-foreground">
              Add reagents below...
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selected.map((id, idx) => {
                const reagent = challenge.availableReagents.find(
                  (r) => r.id === id,
                );
                const isCorrectStep =
                  gameState.phase === 'feedback' && correct[idx] === id;
                const isWrongStep =
                  gameState.phase === 'feedback' && correct[idx] !== id;
                return (
                  <div
                    key={id}
                    className={cn(
                      'flex items-center gap-1 rounded-lg border px-2 py-1',
                      isCorrectStep &&
                        'border-green-500 bg-green-50 dark:bg-green-900/20',
                      isWrongStep &&
                        'border-red-500 bg-red-50 dark:bg-red-900/20',
                    )}
                  >
                    <span className="text-xs font-medium">{idx + 1}.</span>
                    {isCorrectStep && (
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    )}
                    {isWrongStep && (
                      <XCircle className="h-3 w-3 text-red-600" />
                    )}
                    <span className="text-sm">{reagent?.formula}</span>
                    {gameState.phase === 'playing' && (
                      <button
                        onClick={() => removeReagent(id)}
                        className="ml-1 text-muted-foreground hover:text-foreground"
                      >
                        ×
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {gameState.phase === 'playing' && (
          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Available Reagents:</h4>
            <div className="flex flex-wrap gap-2">
              {challenge.availableReagents
                .filter((r) => !selected.includes(r.id))
                .map((reagent) => (
                  <button
                    key={reagent.id}
                    onClick={() => addReagent(reagent.id)}
                    className="flex items-center gap-1 rounded-lg border px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <Plus className="h-3 w-3" />
                    {reagent.name} ({reagent.formula})
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
              {isCorrect ? '✓ ' : 'Correct route: '}
              {challenge.correctSequence
                .map(
                  (id) =>
                    challenge.availableReagents.find((r) => r.id === id)
                      ?.formula,
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
              Submit Synthesis
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
                  Next Synthesis
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
