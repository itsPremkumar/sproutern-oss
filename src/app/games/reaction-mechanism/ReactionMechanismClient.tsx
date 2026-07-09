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
} from 'lucide-react';

interface MechanismChallenge {
  id: string;
  title: string;
  reaction: string;
  observations: string[];
  question: string;
  options: { label: string; isCorrect: boolean; explanation: string }[];
  difficulty: Difficulty;
}

const challenges: MechanismChallenge[] = [
  {
    id: 'sn1-sn2-1',
    title: 'SN1 vs SN2 Identification',
    reaction: 'R-Br + NaOH → R-OH',
    observations: [
      'Reaction rate doubles when [NaOH] doubles',
      'Inversion of configuration observed',
      'No rearrangement products',
    ],
    question: 'What is the reaction mechanism?',
    options: [
      {
        label: 'SN1',
        isCorrect: false,
        explanation:
          'SN1 is first-order (rate independent of nucleophile) and gives racemization',
      },
      {
        label: 'SN2',
        isCorrect: true,
        explanation:
          'SN2: Rate = k[R-Br][NaOH], backside attack causes inversion, no carbocation = no rearrangement',
      },
      {
        label: 'E1',
        isCorrect: false,
        explanation: 'E1 is elimination, would produce alkene',
      },
      {
        label: 'E2',
        isCorrect: false,
        explanation: 'E2 is elimination, would produce alkene',
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'e1-e2-1',
    title: 'E1 vs E2 Identification',
    reaction: '(CH₃)₃C-Br + Strong Base → ?',
    observations: [
      'Alkene is major product',
      'Rate depends only on substrate concentration',
      'Some racemized alcohol also formed',
    ],
    question: 'What is the predominant mechanism?',
    options: [
      {
        label: 'SN2',
        isCorrect: false,
        explanation: 'SN2 is hindered at tertiary carbon',
      },
      {
        label: 'E1',
        isCorrect: true,
        explanation:
          'E1: First-order kinetics, carbocation intermediate explains racemized SN1 byproduct',
      },
      {
        label: 'E2',
        isCorrect: false,
        explanation:
          'E2 would be second-order, depending on base concentration',
      },
      {
        label: 'SN1 only',
        isCorrect: false,
        explanation: 'Alkene formation indicates elimination is major',
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'markovnikov-1',
    title: 'Addition Regiochemistry',
    reaction: 'CH₃-CH=CH₂ + HBr → ?',
    observations: [
      'No peroxides present',
      'Major product is 2-bromopropane',
      'Minor product is 1-bromopropane',
    ],
    question: 'Why is 2-bromopropane the major product?',
    options: [
      {
        label: 'Anti-Markovnikov addition',
        isCorrect: false,
        explanation: 'Anti-Markovnikov requires radical conditions (peroxides)',
      },
      {
        label: 'Markovnikov addition via 2° carbocation',
        isCorrect: true,
        explanation:
          'H⁺ adds to form more stable secondary carbocation, then Br⁻ attacks',
      },
      {
        label: 'Concerted mechanism',
        isCorrect: false,
        explanation: 'HBr addition is stepwise via carbocation',
      },
      {
        label: 'SN2 attack',
        isCorrect: false,
        explanation: 'This is an addition, not substitution',
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'aldol-1',
    title: 'Aldol Condensation',
    reaction: 'Acetaldehyde + NaOH → ?',
    observations: [
      'Product has C=C double bond',
      'Water is eliminated',
      'Product is α,β-unsaturated aldehyde',
    ],
    question: 'What mechanistic steps occur?',
    options: [
      {
        label: 'Enolate formation → Nucleophilic addition → Dehydration',
        isCorrect: true,
        explanation:
          'Aldol condensation: base forms enolate, adds to carbonyl, then -OH eliminates with α-H',
      },
      {
        label: 'Direct dehydration only',
        isCorrect: false,
        explanation: 'C-C bond must form first via aldol addition',
      },
      {
        label: 'Grignard-type addition',
        isCorrect: false,
        explanation: 'No Grignard reagent present, this is enolate chemistry',
      },
      {
        label: 'SN2 displacement',
        isCorrect: false,
        explanation: 'This is nucleophilic addition, not substitution',
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'aromatic-1',
    title: 'Electrophilic Aromatic Substitution',
    reaction: 'Benzene + Br₂/FeBr₃ → Bromobenzene',
    observations: [
      'Substitution not addition',
      'FeBr₃ is required',
      'HBr is released',
    ],
    question: 'What is the role of FeBr₃?',
    options: [
      {
        label: 'Nucleophile',
        isCorrect: false,
        explanation: 'FeBr₃ is a Lewis acid, not nucleophile',
      },
      {
        label: 'Lewis acid catalyst - generates Br⁺',
        isCorrect: true,
        explanation: 'FeBr₃ + Br₂ → FeBr₄⁻ + Br⁺, creating strong electrophile',
      },
      {
        label: 'Reducing agent',
        isCorrect: false,
        explanation: 'No reduction occurs',
      },
      {
        label: 'Base',
        isCorrect: false,
        explanation: 'FeBr₃ is acidic, not basic',
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'grignard-mech',
    title: 'Grignard Mechanism',
    reaction: 'CH₃MgBr + CH₃CHO → ?',
    observations: [
      'Product is alcohol after H₃O⁺ workup',
      'C-C bond formed',
      'Mg is in product complex initially',
    ],
    question: 'What is the nucleophile in this reaction?',
    options: [
      {
        label: 'CH₃⁺',
        isCorrect: false,
        explanation: 'Grignard carbon is nucleophilic (δ-), not electrophilic',
      },
      {
        label: 'CH₃⁻ (carbanion equivalent)',
        isCorrect: true,
        explanation:
          'C-Mg bond is polarized with δ- on carbon, making it nucleophilic',
      },
      {
        label: 'MgBr⁺',
        isCorrect: false,
        explanation: 'Mg is Lewis acid, not the nucleophile',
      },
      {
        label: 'H₃O⁺',
        isCorrect: false,
        explanation: 'H₃O⁺ is added in workup, not the main reaction',
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'benzoin-1',
    title: 'Benzoin Condensation',
    reaction: '2 Benzaldehyde + CN⁻ → Benzoin',
    observations: [
      'CN⁻ is catalyst (regenerated)',
      'Umpolung (reversed polarity) observed',
      'α-hydroxy ketone product',
    ],
    question: 'What unusual feature allows this reaction?',
    options: [
      {
        label: 'Normal aldehyde nucleophilicity',
        isCorrect: false,
        explanation: 'Aldehydes are normally electrophilic at carbon',
      },
      {
        label: 'Polarity reversal of aldehyde carbon',
        isCorrect: true,
        explanation: 'CN⁻ adds to make carbonyl carbon nucleophilic (umpolung)',
      },
      {
        label: 'Radical mechanism',
        isCorrect: false,
        explanation: 'This is ionic, not radical',
      },
      {
        label: 'Pericyclic reaction',
        isCorrect: false,
        explanation: 'Not a concerted pericyclic process',
      },
    ],
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  difficulty: Difficulty;
  currentChallenge: MechanismChallenge | null;
  selectedIndex: number | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
}

export default function ReactionMechanismClient() {
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
  });
  const [showFeedback, setShowFeedback] = useState(false);

  const getRandomChallenge = useCallback(
    (difficulty: Difficulty, usedIds: string[]): MechanismChallenge | null => {
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
        totalRounds: 3,
        score: 0,
        correctAnswers: 0,
        usedIds: [challenge.id],
      });
      setShowFeedback(false);
    },
    [getRandomChallenge],
  );

  const selectAnswer = (index: number) => {
    if (showFeedback) return;
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
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
    setShowFeedback(true);
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
    }));
    setShowFeedback(false);
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
              <li>Read the reaction and experimental observations</li>
              <li>Deduce the most likely mechanism</li>
              <li>Think like a detective — evidence leads to mechanism!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <FlaskConical className="h-5 w-5" />
            Start Investigating
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
        <div className="mb-4 rounded-lg bg-slate-100 p-3 font-mono text-lg dark:bg-slate-800">
          {challenge.reaction}
        </div>

        <div className="mb-4">
          <h4 className="mb-2 font-semibold">Experimental Observations:</h4>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            {challenge.observations.map((obs, idx) => (
              <li key={idx}>{obs}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400">
            {challenge.question}
          </h4>
        </div>

        <div className="space-y-2">
          {challenge.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrect = option.isCorrect;
            return (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                disabled={showFeedback}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all',
                  !showFeedback &&
                    'cursor-pointer hover:border-primary hover:bg-primary/5',
                  showFeedback &&
                    isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50 dark:bg-green-900/20',
                  showFeedback &&
                    isSelected &&
                    !isCorrect &&
                    'border-red-500 bg-red-50 dark:bg-red-900/20',
                  showFeedback &&
                    !isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50/50 dark:bg-green-900/10',
                )}
              >
                {showFeedback && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="flex-1">{option.label}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && gameState.selectedIndex !== null && (
          <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {challenge.options[gameState.selectedIndex].explanation}
            </p>
          </div>
        )}

        {showFeedback && (
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
                Next Case
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
