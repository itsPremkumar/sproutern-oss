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
  Play,
  RotateCcw,
  Percent,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  Scale,
  Search,
} from 'lucide-react';

interface StatsScenario {
  id: string;
  headline: string;
  claim: string;
  details: string;
  flawOptions: string[];
  correctFlawIndex: number; // Index of the correct flaw
  explanation: string;
  teachingNote: string;
  difficulty: Difficulty;
}

const scenarios: StatsScenario[] = [
  // EASY
  {
    id: 'sample-size',
    headline: '"Toothpaste X Recommended by 80% of Dentists!"',
    claim: 'A huge majority of dentists prefer this brand.',
    details: 'Study surveyed 5 dentists. 4 recommended it.',
    flawOptions: [
      'No Flaw - 80% is 80%',
      'Small Sample Size',
      'Selection Bias',
      'Correlation vs Causation',
    ],
    correctFlawIndex: 1,
    explanation:
      'A sample of 5 is statistically meaningless. Just one person changing their mind shifts the result by 20%.',
    teachingNote:
      'Always check "N" (sample size). Percentages without sample sizes are often hiding weak data.',
    difficulty: 'easy',
  },
  {
    id: 'axis-truncation',
    headline: '"Competitor Sales Collapsing!"',
    claim: 'The graph shows a massive drop in sales.',
    details:
      'The Y-axis starts at 98,000 and ends at 100,000. Sales dropped from 99,500 to 98,500 (1% drop).',
    flawOptions: [
      'Truncated Y-Axis',
      'Cherry Picking',
      "Simpson's Paradox",
      'No Flaw',
    ],
    correctFlawIndex: 0,
    explanation:
      'Starting the Y-axis above zero exaggerates small changes. A 1% drop looks like a crash.',
    teachingNote:
      "Check the axes first. If the Y-axis doesn't start at zero, ask why someone wants to magnify the change.",
    difficulty: 'easy',
  },
  {
    id: 'average-distortion',
    headline: '"Average Tax Cut is $5,000!"',
    claim: 'Everyone gets a big tax cut.',
    details:
      '1 person gets $495,000 cut. 99 people get $50 cut. Mean = $5,000.',
    flawOptions: [
      'Using Mean instead of Median',
      'Small Sample Size',
      'Measurement Error',
      'No Flaw',
    ],
    correctFlawIndex: 0,
    explanation:
      'The mean ($5,000) is skewed by one outlier. The median cut ($50) represents the typical person.',
    teachingNote:
      'For wealth/income, "Average" (Mean) is almost always misleading. Always ask for the Median.',
    difficulty: 'easy',
  },
  // MEDIUM
  {
    id: 'relative-risk',
    headline: '"New Drug Reduces Heart Attack Risk by 50%!"',
    claim: 'You should definitely take this drug.',
    details: 'Absolute risk went from 2 in 1000 (0.2%) to 1 in 1000 (0.1%).',
    flawOptions: [
      'Confusing Relative vs Absolute Risk',
      'P-hacking',
      'Survival Bias',
      'Placebo Effect',
    ],
    correctFlawIndex: 0,
    explanation:
      'A "50% reduction" sounds huge, but the absolute benefit is tiny (0.1%). You\'d need to treat 1000 people to save 1.',
    teachingNote:
      'Marketing loves Relative Risk (50% drop!). Science prefers Absolute Risk (0.1% drop). Always check the base rate.',
    difficulty: 'medium',
  },
  {
    id: 'spurious-correlation',
    headline: '"Organic Food Causes Autism!"',
    claim:
      'Sales of organic food correlate 99% with autism diagnoses over 20 years.',
    details: 'Both have risen steadily over time.',
    flawOptions: [
      'Spurious Correlation',
      'Sampling Error',
      'Survivorship Bias',
      'Measurement Bias',
    ],
    correctFlawIndex: 0,
    explanation:
      'Just because two things rise together doesn\'t mean they are linked. They both correlate with "Time" or "Population awareness."',
    teachingNote:
      "Correlation is a hint, not proof. Tyler Vigen's site shows margarine consumption correlating with divorce rates!",
    difficulty: 'medium',
  },
  {
    id: 'margin-of-error',
    headline: '"Candidate A Leads Candidate B!"',
    claim: 'Candidate A is winning 51% to 49%.',
    details: 'The poll has a margin of error of +/- 3%.',
    flawOptions: [
      'Ignoring Margin of Error',
      'Selection Bias',
      'Leading Question',
      'Response Bias',
    ],
    correctFlawIndex: 0,
    explanation:
      '51-49 is a statistical tie when the error is 3%. The true result could be 48-52 favoring B.',
    teachingNote:
      'A "lead" inside the margin of error is not a lead. It\'s a "we don\'t know."',
    difficulty: 'medium',
  },
  // HARD
  {
    id: 'p-hacking',
    headline: '"Jellybeans Cause Acne!"',
    claim: 'Only green jellybeans are linked to acne (p < 0.05).',
    details:
      'Researchers tested 20 different colors. Only green showed a "significant" link.',
    flawOptions: [
      'P-Hacking (Data Dredging)',
      'Small Sample Size',
      'Confounding Variables',
      'Reverse Causality',
    ],
    correctFlawIndex: 0,
    explanation:
      "If you test 20 things at p=0.05 (5% false positive rate), you expect 1 false positive by chance. Green isn't special; it's noise.",
    teachingNote:
      'Significant findings from "fishing expeditions" (testing everything until something clicks) are usually bogus.',
    difficulty: 'hard',
  },
  {
    id: 'regression-mean',
    headline: '"Miracle Cure for Back Pain!"',
    claim:
      'Patients with severe pain took the pill and felt better 2 weeks later.',
    details: 'There was no control group.',
    flawOptions: [
      'Regression to the Mean',
      'Selection Bias',
      'Observer Bias',
      'Placebo Effect',
    ],
    correctFlawIndex: 0,
    explanation:
      'People go to the doctor when pain is at its peak. It naturally subsides (regresses to the average) over time, regardless of treatment.',
    teachingNote:
      'Without a control group, "getting better" usually just means "returning to normal."',
    difficulty: 'hard',
  },
  {
    id: 'biased-sample',
    headline: '"Dewey Defeats Truman!"',
    claim: 'Polls predict a landslide victory for Dewey.',
    details:
      'Poll conducted via telephone in 1948 (when only wealthy people had phones).',
    flawOptions: [
      'Sampling Bias (Coverage Error)',
      'Non-response Bias',
      'Social Desirability Bias',
      'Question Wording',
    ],
    correctFlawIndex: 0,
    explanation:
      'The sample (phone owners) was not representative of the population (voters). Wealthy people skewed Republican.',
    teachingNote:
      "A large biased sample is worse than a small random sample. You can't fix bias by just asking more people.",
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: StatsScenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  usedScenarioIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 3 },
  medium: { rounds: 3 },
  hard: { rounds: 3 },
};

export default function StatsSkepticClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 3,
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

    const isCorrect = index === gameState.currentScenario.correctFlawIndex;
    const points = isCorrect ? 30 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
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
            <h3 className="mb-3 font-semibold">Mission Briefing</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              You are a statistical skepticism engine. Your job is to analyze
              headline claims and find the fatal flaw in the data.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Scrutinize sample sizes and selection methods</li>
              <li>• Distinguish between mean and median</li>
              <li>• Spot misleading graphs and correlations</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Search className="h-5 w-5" />
            Start Skeptic Mode
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
  const isCorrect = gameState.selectedIndex === scenario.correctFlawIndex;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Claim {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Headline */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-black italic tracking-tight md:text-3xl">
            {scenario.headline}
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            {scenario.claim}
          </p>
        </div>

        {/* The Details (The "Small Print") */}
        <div className="mb-8 rounded-xl bg-muted p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Search className="h-3 w-3" />
            The Data Behind The Claim:
          </div>
          <p className="font-mono text-sm">{scenario.details}</p>
        </div>

        {/* Question */}
        <h3 className="mb-6 text-center text-lg font-semibold">
          What is the primary statistical flaw here?
        </h3>

        {/* Options */}
        <div className="mx-auto max-w-lg space-y-3">
          {scenario.flawOptions.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrectOption = idx === scenario.correctFlawIndex;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={idx}
                variant="outline"
                size="lg"
                onClick={() => handleSelect(idx)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-auto w-full justify-start px-4 py-3 text-left',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </span>
                {showFeedback && isCorrectOption && (
                  <CheckCircle className="ml-auto h-5 w-5 shrink-0" />
                )}
                {showFeedback && isSelected && !isCorrectOption && (
                  <XCircle className="ml-auto h-5 w-5 shrink-0" />
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
                ? 'Correct! You spotted the flaw.'
                : 'Not exactly - look closer at the data.'}
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
                The Flaw Explained:
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                {scenario.explanation}
              </p>
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-4 w-4" />
                Skeptic's Tip:
              </h4>
              <p className="text-sm text-amber-600 dark:text-amber-300">
                {scenario.teachingNote}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Claim'}
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
          Start Over
        </Button>
      </div>
    </div>
  );
}
