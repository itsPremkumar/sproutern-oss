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
  BarChart2,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  PieChart,
  LineChart,
  Eye,
} from 'lucide-react';

interface ChartScenario {
  id: string;
  title: string;
  scenario: string;
  dataContext: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  visualTip: string;
  difficulty: Difficulty;
}

const scenarios: ChartScenario[] = [
  // EASY
  {
    id: 'pie-slices',
    title: 'The Sliced Pie',
    scenario: 'You want to show market share for 15 different companies.',
    dataContext: 'One dominant player (40%), 14 small players (2-5% each).',
    options: [
      'Pie Chart',
      'Bar Chart',
      'Donut Chart',
      '3D Exploding Pie Chart',
    ],
    correctIndex: 1,
    explanation:
      'Pie charts are terrible for comparing many small slices. A Bar Chart allows for easy comparison and readable labels.',
    visualTip:
      'Rule of thumb: If you have more than 5 categories, ditch the pie. Use a bar.',
    difficulty: 'easy',
  },
  {
    id: 'start-at-zero',
    title: 'The Zoom-In',
    scenario:
      'You want to visualize a small 2% increase in revenue to make it look huge for investors.',
    dataContext: 'Revenue went from $10M to $10.2M.',
    options: [
      'Start the Y-axis at 0',
      'Start the Y-axis at $9.9M',
      'Use a log scale',
      'Use a table',
    ],
    correctIndex: 1,
    explanation:
      'Truncating the Y-axis (starting at $9.9M) exaggerates the visual difference. This is deceptive but effective for misleading audiences.',
    visualTip:
      'Honest bar charts must start at zero. Truncating the axis is a classic manipulation tactic.',
    difficulty: 'easy',
  },
  {
    id: '3d-distortion',
    title: 'The 3D Trap',
    scenario: 'Your boss asks for a "cool 3D chart" to show sales comparisons.',
    dataContext: 'Standard quarterly sales data.',
    options: [
      'Make it 3D tilted',
      'Use flat 2D bars',
      'Use 3D cones',
      'Use 3D pyramids',
    ],
    correctIndex: 1,
    explanation:
      '3D perspective distorts proportions. Front items look huge; back items look tiny. It adds "chart junk" without adding meaning.',
    visualTip:
      'Data viz is about clarity, not "cool." 2D is almost always superior for accuracy.',
    difficulty: 'easy',
  },
  // MEDIUM
  {
    id: 'dual-axis',
    title: 'Apples and Oranges',
    scenario:
      'You want to show correlation between "GDP" (Trillions) and "Unemployment Rate" (%) on one chart.',
    dataContext: 'Values differ by orders of magnitude.',
    options: [
      'Dual Y-Axis Chart',
      'Two Separate Charts (Side-by-Side)',
      'Scatter Plot',
      'Stacked Bar Chart',
    ],
    correctIndex: 1,
    explanation:
      'Dual axes are notoriously hard to read and easy to manipulate (by scaling axes differently to force lines to cross). Separate charts are safer.',
    visualTip:
      'Avoid dual axes if possible. They confuse readers about which scale applies to which line.',
    difficulty: 'medium',
  },
  {
    id: 'map-area',
    title: 'The Land Vote',
    scenario: 'Visualizing election results by county.',
    dataContext:
      'Large rural counties have few people; small urban counties have millions.',
    options: [
      'Standard Geographic Map',
      'Cartogram (Population-scaled map)',
      'Table',
      'Pie Chart',
    ],
    correctIndex: 1,
    explanation:
      'A standard map highlights land area, not people ("Land doesn\'t vote"). A Cartogram distorts size based on population to show true representation.',
    visualTip:
      'For people-data on maps, geography lies. Use dot-density or cartograms to show population density.',
    difficulty: 'medium',
  },
  {
    id: 'cumulative-growth',
    title: 'The "Always Up" Chart',
    scenario:
      'A company shows a chart of "Total Cumulative Users" that goes up smoothly to the right.',
    dataContext: 'They want to hide that growth has stalled.',
    options: [
      'It proves they are growing fast',
      'It hides the fact that new signups are zero',
      'It needs a log scale',
      "It's the best way to show churn",
    ],
    correctIndex: 1,
    explanation:
      'Cumulative charts NEVER go down (unless you lose history). Even if you get 0 new users, the line stays flat. It hides declining growth rates.',
    visualTip:
      'Beware the cumulative chart. Ask for "Net New Users per Month" to see the real health of the business.',
    difficulty: 'medium',
  },
  // HARD
  {
    id: 'color-encoding',
    title: 'The Rainbow Mess',
    scenario: 'Visualizing temperature change over 100 years.',
    dataContext: 'A continuous range of values from -10 to +40 degrees.',
    options: [
      'Rainbow/Spectral Palette',
      'Sequential or Diverging Palette',
      'Categorical Colors',
      'Greyscale',
    ],
    correctIndex: 1,
    explanation:
      'Rainbow scales are misleading because the transition from yellow to green to blue creates artificial "boundaries" and perception issues. Diverging (Blue-White-Red) is standard for temperature.',
    visualTip:
      'Colors mean things. Sequential for magnitude (light-dark). Diverging for +/- (blue-red). Categorical (distinct hues) for groups.',
    difficulty: 'hard',
  },
  {
    id: 'bubble-size',
    title: 'Bubble 2x Trouble',
    scenario:
      'Using circles to represent company sizes. Company A is $100M, Company B is $200M.',
    dataContext: 'You scale the radius of B to be 2x the radius of A.',
    options: [
      'This is correct',
      'This is misleading - scale Area, not Radius',
      'This is misleading - scale Circumference',
      'This is misleading - use squares',
    ],
    correctIndex: 1,
    explanation:
      'If you double the radius, you quadruple the area (A = πr²). The $200M bubble will look 4x bigger than the $100M bubble.',
    visualTip:
      'Humans perceive size by area, not radius. Always scale bubbles by area or you exaggerate differences.',
    difficulty: 'hard',
  },
  {
    id: 'spaghetti-plot',
    title: 'The Spaghetti Plot',
    scenario:
      'Comparing the stock price history of 50 different tech companies on one line chart.',
    dataContext: '50 overlapping lines of different colors.',
    options: [
      'Keep it as is for completeness',
      'Use "Small Multiples" (Panel Chart)',
      'Make it 3D',
      'Use a stacked area chart',
    ],
    correctIndex: 1,
    explanation:
      '50 lines on one chart is unreadable ("spaghetti"). Identifying individual lines is impossible. Small Multiples split them into a grid of clean, comparable charts.',
    visualTip:
      'If your chart looks like pasta, split it up. "Small Multiples" are a pro move for comparing many items.',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: ChartScenario | null;
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

export default function ChartChallengeGame() {
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

    const isCorrect = index === gameState.currentScenario.correctIndex;
    const points = isCorrect ? 35 : 0;

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
            <h3 className="mb-3 font-semibold">Visual Literacy Training</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              You are the Chief Data Officer. Your team keeps bringing you
              questionable charts. Your job is to fix them.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Choose the right visualization for the data</li>
              <li>• Spot deceptive scaling and distortion</li>
              <li>• Eliminate "chart junk" to reveal the truth</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <LineChart className="h-5 w-5" />
            Enter The War Room
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
  const isCorrect = gameState.selectedIndex === scenario.correctIndex;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Challenge {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {scenario.title}
          </span>
          <h2 className="text-xl font-bold md:text-2xl">{scenario.scenario}</h2>
        </div>

        {/* Data Context */}
        <div className="mb-8 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            <BarChart2 className="h-3 w-3" />
            The Data Reality:
          </div>
          <p className="font-medium text-blue-800 dark:text-blue-300">
            {scenario.dataContext}
          </p>
        </div>

        {/* Question */}
        <h3 className="mb-6 text-center text-lg font-semibold">
          Which visualization approach is best (or most honest)?
        </h3>

        {/* Options */}
        <div className="mx-auto max-w-lg space-y-3">
          {scenario.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrectOption = idx === scenario.correctIndex;
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
                ? 'Spot on! That is the cleanest choice.'
                : 'Be careful - that choice has issues.'}
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-muted p-4">
              <h4 className="mb-2 font-semibold">The Reason:</h4>
              <p className="text-sm text-muted-foreground">
                {scenario.explanation}
              </p>
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-purple-700 dark:text-purple-400">
                <Eye className="h-4 w-4" />
                Visual Rule:
              </h4>
              <p className="text-sm text-purple-600 dark:text-purple-300">
                {scenario.visualTip}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Challenge'}
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
