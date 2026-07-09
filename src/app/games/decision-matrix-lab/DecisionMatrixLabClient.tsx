'use client';

import { useState, useCallback, useMemo } from 'react';
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
  Grid3X3,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  Calculator,
  Scale,
} from 'lucide-react';

interface Option {
  name: string;
  scores: number[]; // Score for each criterion (1-10)
}

interface Scenario {
  id: string;
  title: string;
  context: string;
  criteria: string[];
  options: Option[];
  expertWeights: number[]; // Expert suggested weights (must sum to 100)
  bestOptionIndex: number; // Based on expert weights
  explanation: string;
  teachingNote: string;
  difficulty: Difficulty;
}

const scenarios: Scenario[] = [
  // EASY - 2-3 criteria, obvious best choice
  {
    id: 'laptop-choice',
    title: 'Laptop for College',
    context:
      'A student needs to choose a laptop for their computer science course. Budget is tight but performance matters for coding.',
    criteria: ['Price (lower is better)', 'Performance'],
    options: [
      { name: 'Budget Laptop', scores: [9, 5] },
      { name: 'Mid-Range', scores: [6, 7] },
      { name: 'Premium', scores: [3, 9] },
    ],
    expertWeights: [60, 40],
    bestOptionIndex: 0,
    explanation:
      "For a budget-conscious student, the Budget Laptop wins because the weight on price is high. The 40% performance weight isn't enough to overcome the price advantage.",
    teachingNote:
      'The "best" option depends entirely on YOUR weights. A student with a scholarship might weight performance higher.',
    difficulty: 'easy',
  },
  {
    id: 'apartment-hunt',
    title: 'First Apartment',
    context:
      "A new graduate is looking for their first apartment near their job. They don't have a car.",
    criteria: ['Rent Cost', 'Commute Time'],
    options: [
      { name: 'Downtown Studio', scores: [4, 10] },
      { name: 'Suburbs 1BR', scores: [8, 3] },
      { name: 'Mid-City 1BR', scores: [6, 7] },
    ],
    expertWeights: [50, 50],
    bestOptionIndex: 2,
    explanation:
      'With equal weights, the Mid-City 1BR wins with a balanced score. The Suburbs saves money but the commute cost (time, energy) offsets savings.',
    teachingNote:
      'Don\'t forget hidden costs! A 1-hour commute costs time worth money, plus mental energy. Factor that into "true cost."',
    difficulty: 'easy',
  },
  {
    id: 'phone-upgrade',
    title: 'Phone Upgrade',
    context:
      'Time to replace your 4-year-old phone. You primarily use it for photos and social media.',
    criteria: ['Camera Quality', 'Battery Life', 'Price'],
    options: [
      { name: 'iPhone Pro', scores: [10, 7, 3] },
      { name: 'Samsung Mid', scores: [7, 8, 7] },
      { name: 'Pixel', scores: [9, 6, 6] },
    ],
    expertWeights: [40, 30, 30],
    bestOptionIndex: 2,
    explanation:
      'The Pixel wins because it has excellent camera (your main use case) with reasonable battery and price.',
    teachingNote:
      'Match weights to actual usage patterns. If someone says "I need X" but uses Y most, weight Y higher.',
    difficulty: 'easy',
  },
  // MEDIUM - 4 criteria, trade-offs required
  {
    id: 'job-offers',
    title: 'Competing Job Offers',
    context:
      'A software engineer has 3 job offers. They want growth but also need work-life balance.',
    criteria: [
      'Salary',
      'Learning Opportunities',
      'Work-Life Balance',
      'Company Stability',
    ],
    options: [
      { name: 'Big Tech Corp', scores: [9, 7, 5, 10] },
      { name: 'Hot Startup', scores: [7, 10, 4, 3] },
      { name: 'Mid-Size SaaS', scores: [7, 8, 8, 7] },
    ],
    expertWeights: [25, 30, 25, 20],
    bestOptionIndex: 2,
    explanation:
      'Mid-Size SaaS wins because it balances all criteria well. The startup has great learning but poor stability/balance. Big Tech pays well but less learning.',
    teachingNote:
      'Early career, weight Learning high. Mid-career, Balance increases. Near retirement, Stability dominates. Weights change with life stage.',
    difficulty: 'medium',
  },
  {
    id: 'cloud-provider',
    title: 'Cloud Infrastructure',
    context:
      'A CTO is choosing a cloud provider for a growing B2B SaaS platform.',
    criteria: [
      'Cost Efficiency',
      'Reliability',
      'Developer Experience',
      'Compliance',
    ],
    options: [
      { name: 'AWS', scores: [6, 10, 7, 9] },
      { name: 'Google Cloud', scores: [7, 8, 9, 7] },
      { name: 'Azure', scores: [7, 8, 6, 10] },
    ],
    expertWeights: [25, 35, 20, 20],
    bestOptionIndex: 0,
    explanation:
      'AWS wins primarily on reliability which is weighted highest for B2B (downtime = lost revenue). Compliance is also strong for enterprise sales.',
    teachingNote:
      'For B2B, reliability and compliance matter more than cool developer features. For B2C, developer speed might win.',
    difficulty: 'medium',
  },
  {
    id: 'marketing-channel',
    title: 'Marketing Budget Allocation',
    context:
      'A D2C brand has $100K to spend. They need quick customer acquisition but also brand building.',
    criteria: [
      'CAC (Customer Acquisition Cost)',
      'Brand Building',
      'Scalability',
      'Speed to Results',
    ],
    options: [
      { name: 'Facebook Ads', scores: [6, 4, 9, 10] },
      { name: 'Influencer Marketing', scores: [7, 8, 6, 7] },
      { name: 'Content + SEO', scores: [9, 9, 7, 3] },
    ],
    expertWeights: [30, 20, 25, 25],
    bestOptionIndex: 0,
    explanation:
      'Facebook Ads wins for a brand needing quick, scalable results. Content/SEO is best long-term but too slow for immediate needs.',
    teachingNote:
      'The "right" channel depends on your timeline. VCs want growth NOW, so speed matters. Bootstrapped can play the long game.',
    difficulty: 'medium',
  },
  // HARD - 5+ criteria, uncertainty, non-obvious winner
  {
    id: 'acquisition-target',
    title: 'Acquisition Decision',
    context:
      'A PE firm is evaluating 3 companies to acquire. They need both growth potential and operational efficiency.',
    criteria: [
      'Revenue Growth',
      'Profit Margin',
      'Market Position',
      'Team Quality',
      'Integration Risk',
    ],
    options: [
      { name: 'FastGrow Inc', scores: [10, 4, 6, 7, 4] },
      { name: 'SteadyCash LLC', scores: [5, 9, 7, 6, 8] },
      { name: 'MarketLeader Co', scores: [7, 7, 10, 8, 6] },
    ],
    expertWeights: [25, 20, 20, 20, 15],
    bestOptionIndex: 2,
    explanation:
      "MarketLeader wins because market position is defensible moat. FastGrow's growth is impressive but low margins and high integration risk are concerning.",
    teachingNote:
      'In M&A, integration risk is often underweighted. 70% of acquisitions fail to meet expectations, usually due to integration issues.',
    difficulty: 'hard',
  },
  {
    id: 'product-roadmap',
    title: 'Product Roadmap Priority',
    context:
      'A PM must choose which feature to build next. Resources are limited to one major project this quarter.',
    criteria: [
      'Revenue Impact',
      'User Demand',
      'Technical Effort',
      'Strategic Alignment',
      'Competitive Necessity',
    ],
    options: [
      { name: 'AI Chatbot', scores: [6, 8, 4, 9, 7] },
      { name: 'Mobile Redesign', scores: [8, 9, 6, 6, 5] },
      { name: 'Enterprise SSO', scores: [9, 5, 8, 7, 8] },
    ],
    expertWeights: [25, 20, 15, 20, 20],
    bestOptionIndex: 0,
    explanation:
      'AI Chatbot wins due to strategic alignment (AI is the future) and competitive necessity. Mobile Redesign has higher user demand but is less strategic.',
    teachingNote:
      'Beware of only doing what users ask for. Sometimes you need to build what the market will need, not just what they say now.',
    difficulty: 'hard',
  },
  {
    id: 'investment-portfolio',
    title: 'Investment Allocation',
    context:
      'An investor with moderate risk tolerance is allocating their retirement portfolio.',
    criteria: [
      'Expected Return',
      'Risk Level (lower better)',
      'Liquidity',
      'Tax Efficiency',
      'Diversification',
    ],
    options: [
      { name: 'All Stocks (S&P 500)', scores: [8, 3, 8, 6, 5] },
      { name: 'Balanced (60/40)', scores: [6, 7, 8, 7, 8] },
      { name: 'Conservative', scores: [4, 9, 9, 6, 7] },
    ],
    expertWeights: [25, 30, 15, 15, 15],
    bestOptionIndex: 1,
    explanation:
      'For moderate risk tolerance, Balanced portfolio wins. It sacrifices some return for significantly lower risk and better diversification.',
    teachingNote:
      'Risk tolerance changes with age and wealth. Young investors can take more risk (time to recover). Near retirement, capital preservation wins.',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'calculate' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: Scenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  userWeights: number[];
  selectedOptionIndex: number | null;
  usedScenarioIds: string[];
}

const difficultySettings = {
  easy: { rounds: 3 },
  medium: { rounds: 3 },
  hard: { rounds: 3 },
};

export default function DecisionMatrixLabClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    userWeights: [],
    selectedOptionIndex: null,
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
    const initialWeights = scenario.criteria.map(() =>
      Math.floor(100 / scenario.criteria.length),
    );
    // Adjust first weight to make sure they sum to 100
    const sum = initialWeights.reduce((a, b) => a + b, 0);
    if (sum !== 100) initialWeights[0] += 100 - sum;

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      currentScenario: scenario,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      correctAnswers: 0,
      userWeights: initialWeights,
      selectedOptionIndex: null,
      usedScenarioIds: [scenario.id],
    });
  }, [gameState.difficulty, getAvailableScenarios]);

  const updateWeight = (index: number, delta: number) => {
    const newWeights = [...gameState.userWeights];
    const newValue = newWeights[index] + delta;

    // Ensure weight stays between 0 and 100
    if (newValue < 0 || newValue > 100) return;

    // Find another weight to adjust (to keep sum at 100)
    const otherIndex = index === 0 ? 1 : 0;
    const otherNewValue = newWeights[otherIndex] - delta;
    if (otherNewValue < 0 || otherNewValue > 100) return;

    newWeights[index] = newValue;
    newWeights[otherIndex] = otherNewValue;

    setGameState((prev) => ({ ...prev, userWeights: newWeights }));
  };

  const calculateScores = useMemo(() => {
    if (!gameState.currentScenario) return [];

    return gameState.currentScenario.options.map((option) => {
      return option.scores.reduce((total, score, idx) => {
        return total + (score * gameState.userWeights[idx]) / 100;
      }, 0);
    });
  }, [gameState.currentScenario, gameState.userWeights]);

  const expertScores = useMemo(() => {
    if (!gameState.currentScenario) return [];

    return gameState.currentScenario.options.map((option) => {
      return option.scores.reduce((total, score, idx) => {
        return (
          total + (score * gameState.currentScenario!.expertWeights[idx]) / 100
        );
      }, 0);
    });
  }, [gameState.currentScenario]);

  const submitDecision = () => {
    // Move to calculate phase to show user's calculation
    setGameState((prev) => ({ ...prev, phase: 'calculate' }));
  };

  const confirmSelection = (optionIndex: number) => {
    if (!gameState.currentScenario) return;

    // User selects which option they think is best based on their weights
    const userBestIndex = calculateScores.indexOf(Math.max(...calculateScores));
    const isCorrect = optionIndex === userBestIndex;

    // Award points based on whether they correctly identified their own calculation
    const points = isCorrect ? 20 : 5;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedOptionIndex: optionIndex,
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
    const initialWeights = scenario.criteria.map(() =>
      Math.floor(100 / scenario.criteria.length),
    );
    const sum = initialWeights.reduce((a, b) => a + b, 0);
    if (sum !== 100) initialWeights[0] += 100 - sum;

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentScenario: scenario,
      roundNumber: prev.roundNumber + 1,
      userWeights: initialWeights,
      selectedOptionIndex: null,
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

          <div className="mb-8 grid gap-3 text-sm">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <strong>Easy:</strong> 2-3 criteria, clearer trade-offs
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <strong>Medium:</strong> 4 criteria, real business scenarios
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <strong>Hard:</strong> 5+ criteria, strategic decisions
            </div>
          </div>

          <div className="mb-6 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">How Decision Matrices Work</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Assign weights to each criterion (must sum to 100%)</li>
              <li>
                Each option has pre-scored values (1-10) for each criterion
              </li>
              <li>Weighted score = Σ (score × weight)</li>
              <li>Highest total score = recommended option</li>
            </ol>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Grid3X3 className="h-5 w-5" />
            Start Making Decisions
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
  const weightsSum = gameState.userWeights.reduce((a, b) => a + b, 0);
  const userBestIndex = calculateScores.indexOf(Math.max(...calculateScores));
  const isCorrect = gameState.selectedOptionIndex === userBestIndex;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Decision {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-6 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {scenario.title}
          </span>
          <p className="text-muted-foreground">{scenario.context}</p>
        </div>

        {/* Weight sliders */}
        {gameState.phase === 'playing' && (
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Scale className="h-4 w-4" />
              Set Your Weights (must sum to 100)
              <span
                className={cn(
                  'ml-auto text-sm',
                  weightsSum === 100 ? 'text-green-600' : 'text-red-600',
                )}
              >
                Total: {weightsSum}%
              </span>
            </h3>
            <div className="space-y-3">
              {scenario.criteria.map((criterion, idx) => (
                <div
                  key={criterion}
                  className="flex items-center gap-4"
                >
                  <span className="w-48 text-sm font-medium">{criterion}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateWeight(idx, -5)}
                      className="h-8 w-8 rounded bg-muted font-bold hover:bg-muted-foreground/20"
                    >
                      -
                    </button>
                    <div className="w-16 rounded-lg bg-primary/10 py-2 text-center font-bold">
                      {gameState.userWeights[idx]}%
                    </div>
                    <button
                      onClick={() => updateWeight(idx, 5)}
                      className="h-8 w-8 rounded bg-muted font-bold hover:bg-muted-foreground/20"
                    >
                      +
                    </button>
                  </div>
                  <div className="h-2 flex-1 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${gameState.userWeights[idx]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decision Matrix Table */}
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left font-semibold">Option</th>
                {scenario.criteria.map((c, i) => (
                  <th
                    key={c}
                    className="px-2 py-2 text-center font-semibold"
                  >
                    {c.split('(')[0].trim()}
                    <div className="text-xs font-normal text-muted-foreground">
                      ({gameState.userWeights[i]}%)
                    </div>
                  </th>
                ))}
                {(gameState.phase === 'calculate' ||
                  gameState.phase === 'feedback') && (
                  <th className="px-2 py-2 text-center font-bold text-primary">
                    Weighted Total
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {scenario.options.map((option, optIdx) => (
                <tr
                  key={option.name}
                  className={cn(
                    'border-b',
                    gameState.phase === 'feedback' &&
                      optIdx === userBestIndex &&
                      'bg-green-50 dark:bg-green-900/20',
                  )}
                >
                  <td className="py-3 font-medium">{option.name}</td>
                  {option.scores.map((score, sIdx) => (
                    <td
                      key={sIdx}
                      className="px-2 py-3 text-center"
                    >
                      <span
                        className={cn(
                          'inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold',
                          score >= 8
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/50'
                            : score >= 5
                              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50'
                              : 'bg-red-100 text-red-700 dark:bg-red-900/50',
                        )}
                      >
                        {score}
                      </span>
                    </td>
                  ))}
                  {(gameState.phase === 'calculate' ||
                    gameState.phase === 'feedback') && (
                    <td className="px-2 py-3 text-center">
                      <span className="text-lg font-bold text-primary">
                        {calculateScores[optIdx].toFixed(1)}
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="text-center">
          {gameState.phase === 'playing' && (
            <Button
              onClick={submitDecision}
              size="lg"
              className="w-full max-w-xs gap-2"
              disabled={weightsSum !== 100}
            >
              <Calculator className="h-4 w-4" />
              Calculate & Choose
            </Button>
          )}

          {gameState.phase === 'calculate' && (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Based on your weights, select the winning option:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {scenario.options.map((option, idx) => (
                  <Button
                    key={option.name}
                    variant={idx === userBestIndex ? 'default' : 'outline'}
                    onClick={() => confirmSelection(idx)}
                    className="gap-2"
                  >
                    {option.name}
                    <span className="text-xs opacity-70">
                      ({calculateScores[idx].toFixed(1)})
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {gameState.phase === 'feedback' && (
            <div className="space-y-4 duration-300 animate-in fade-in">
              <div
                className={cn(
                  'mx-auto max-w-md rounded-xl p-4 font-bold',
                  isCorrect
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
                )}
              >
                {isCorrect
                  ? `Correct! ${scenario.options[userBestIndex].name} wins with your weights.`
                  : `Check your math! ${scenario.options[userBestIndex].name} actually scores highest.`}
              </div>

              <div className="mx-auto max-w-md rounded-xl bg-blue-50 p-4 text-left dark:bg-blue-900/20">
                <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
                  Expert Analysis:
                </h4>
                <p className="mb-3 text-sm text-blue-600 dark:text-blue-300">
                  {scenario.explanation}
                </p>
                <h4 className="mb-1 font-semibold text-blue-700 dark:text-blue-400">
                  Real-world insight:
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  {scenario.teachingNote}
                </p>
              </div>

              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Decision'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
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
