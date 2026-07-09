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
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

interface DataQuestion {
  id: string;
  title: string;
  dataDescription: string;
  dataPoints: { label: string; value: number }[];
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  teachingNote: string;
  difficulty: Difficulty;
}

const questions: DataQuestion[] = [
  // EASY - Basic chart reading
  {
    id: 'trend-basic',
    title: 'Monthly Revenue',
    dataDescription:
      "A company's monthly revenue for the first half of the year:",
    dataPoints: [
      { label: 'Jan', value: 100 },
      { label: 'Feb', value: 110 },
      { label: 'Mar', value: 125 },
      { label: 'Apr', value: 130 },
      { label: 'May', value: 140 },
      { label: 'Jun', value: 155 },
    ],
    question: 'What can we conclude from this data?',
    options: [
      'Revenue is growing steadily',
      'The company will definitely hit $200K by December',
      'The company is profitable',
      'The growth rate is accelerating',
    ],
    correctIndex: 0,
    explanation:
      "We can only conclude that revenue is growing. We can't predict the future (B), determine profitability from revenue alone (C), or confirm acceleration without calculating growth rates (D).",
    teachingNote:
      'Good analysts are careful about what data actually shows vs what we assume. Revenue ≠ profit. Past trends ≠ future certainty.',
    difficulty: 'easy',
  },
  {
    id: 'comparison-basic',
    title: 'Team Performance',
    dataDescription: 'Sales by team this quarter (in thousands):',
    dataPoints: [
      { label: 'Team A', value: 450 },
      { label: 'Team B', value: 380 },
      { label: 'Team C', value: 520 },
      { label: 'Team D', value: 290 },
    ],
    question: 'Which team performed BEST this quarter?',
    options: ['Team A', 'Team B', 'Team C', 'Insufficient data to determine'],
    correctIndex: 3,
    explanation:
      'Team C has the highest sales, but "best performance" depends on context. What were their targets? Team sizes? Previous quarters? Raw numbers alone don\'t tell the full story.',
    teachingNote:
      'Always ask "compared to what?" A team hitting $520K might be underperforming if their target was $800K.',
    difficulty: 'easy',
  },
  {
    id: 'percentage-basic',
    title: 'Market Share',
    dataDescription: 'Smartphone market share percentages:',
    dataPoints: [
      { label: 'Brand A', value: 35 },
      { label: 'Brand B', value: 28 },
      { label: 'Brand C', value: 22 },
      { label: 'Others', value: 15 },
    ],
    question:
      'If the total market is 1 billion phones, how many did Brand B sell?',
    options: ['28 million', '280 million', '2.8 billion', '28 billion'],
    correctIndex: 1,
    explanation:
      '28% of 1 billion = 0.28 × 1,000,000,000 = 280,000,000 = 280 million phones.',
    teachingNote:
      'Percentages are relative. 28% sounds small, but 280 million units is massive in absolute terms.',
    difficulty: 'easy',
  },
  // MEDIUM - Deeper interpretation
  {
    id: 'correlation-trap',
    title: 'Ice Cream & Crime',
    dataDescription:
      'Monthly data showing correlation between ice cream sales and crime rates:',
    dataPoints: [
      { label: 'Jan', value: 20 },
      { label: 'Apr', value: 45 },
      { label: 'Jul', value: 90 },
      { label: 'Oct', value: 40 },
    ],
    question:
      'Ice cream sales and crime rates both peak in summer. What does this mean?',
    options: [
      'Ice cream causes crime',
      'Crime causes ice cream cravings',
      'A third factor (hot weather) causes both',
      'This correlation proves causation',
    ],
    correctIndex: 2,
    explanation:
      'Hot weather increases both ice cream sales AND time spent outside (where crimes occur). This is a classic example of confounding variables.',
    teachingNote:
      'Correlation ≠ causation. Always ask: "What else could explain both variables moving together?"',
    difficulty: 'medium',
  },
  {
    id: 'missing-data',
    title: 'Customer Satisfaction',
    dataDescription: 'Customer satisfaction survey results (1-5 stars):',
    dataPoints: [
      { label: '5 stars', value: 45 },
      { label: '4 stars', value: 30 },
      { label: '3 stars', value: 15 },
      { label: '2 stars', value: 7 },
      { label: '1 star', value: 3 },
    ],
    question:
      'The company claims "75% of customers are satisfied (4-5 stars)." What\'s missing from this analysis?',
    options: [
      'Nothing - the math is correct',
      'Response rate - dissatisfied customers may not respond',
      'The specific complaints from low ratings',
      'Both B and C are important missing context',
    ],
    correctIndex: 3,
    explanation:
      "Selection bias: unhappy customers often don't bother with surveys. Also, the 10% giving 1-2 stars might reveal critical issues not visible in averages.",
    teachingNote:
      "Who DIDN'T respond matters as much as who did. And averages hide outliers that might signal serious problems.",
    difficulty: 'medium',
  },
  {
    id: 'base-rate',
    title: 'Conversion Funnel',
    dataDescription: 'Website funnel metrics this month:',
    dataPoints: [
      { label: 'Visitors', value: 100000 },
      { label: 'Sign-ups', value: 5000 },
      { label: 'Purchases', value: 250 },
    ],
    question:
      'The marketing team says "We increased purchases by 25 this month!" Is this impressive?',
    options: [
      'Yes, 25 more purchases is great',
      'No, we need to know the baseline',
      'Yes, because 25 is a lot of money',
      'Cannot be determined',
    ],
    correctIndex: 1,
    explanation:
      "If last month had 225 purchases, +25 is an 11% increase (good!). If last month had 500, it's a 5% increase from a 50% collapse. Context is everything.",
    teachingNote:
      'Absolute numbers without baselines are meaningless. Always ask: "Compared to what?"',
    difficulty: 'medium',
  },
  {
    id: 'average-trap',
    title: 'Salary Data',
    dataDescription: 'Company salary data:',
    dataPoints: [
      { label: 'Mean', value: 150 },
      { label: 'Median', value: 85 },
      { label: 'Mode', value: 70 },
    ],
    question:
      'What does the large gap between mean ($150K) and median ($85K) tell us?',
    options: [
      'The data is incorrect',
      'Most employees earn around $150K',
      'A few very high earners are pulling up the average',
      'The company underpays employees',
    ],
    correctIndex: 2,
    explanation:
      'When mean >> median, it indicates right-skewed data. A few executives earning millions pull up the average, while most employees earn around $70-85K.',
    teachingNote:
      'Mean is sensitive to outliers. For salary, housing prices, and wealth, median is usually more representative of "typical."',
    difficulty: 'medium',
  },
  // HARD - Complex interpretation
  {
    id: 'simpson-paradox',
    title: 'Hospital Performance',
    dataDescription: 'Surgery survival rates at two hospitals:',
    dataPoints: [
      { label: 'Hospital A Overall', value: 90 },
      { label: 'Hospital B Overall', value: 95 },
    ],
    question:
      'Hospital B has a higher overall survival rate. Should you choose Hospital B?',
    options: [
      'Yes, 95% > 90% clearly',
      'No, Hospital A might be better for your specific case',
      'Yes, unless Hospital B has fewer surgeries',
      'The data is sufficient to decide',
    ],
    correctIndex: 1,
    explanation:
      "This could be Simpson's Paradox. Hospital A might handle more difficult cases. For easy surgeries: A=98%, B=96%. For hard surgeries: A=80%, B=75%. A is better for BOTH, but overall looks worse because they do more hard cases.",
    teachingNote:
      'Aggregate data can hide or even reverse trends. Always segment by relevant factors before comparing.',
    difficulty: 'hard',
  },
  {
    id: 'survivorship-data',
    title: 'Mutual Fund Returns',
    dataDescription:
      'Average 10-year returns of mutual funds currently operating:',
    dataPoints: [
      { label: 'Equity Funds', value: 12 },
      { label: 'Bond Funds', value: 6 },
      { label: 'Index Funds', value: 10 },
    ],
    question:
      'Equity funds show 12% average returns. Is this a reliable predictor?',
    options: [
      'Yes, historical returns predict future returns',
      'No, this only shows funds that survived',
      'Yes, if the sample size is large enough',
      'Partially - we need standard deviation too',
    ],
    correctIndex: 1,
    explanation:
      "Survivorship bias: we only see funds that still exist. Funds that lost money closed down and aren't in this data. The true average (including failures) is much lower.",
    teachingNote:
      'Whenever you see "top performers," ask: "What happened to the ones that failed?" They\'re invisible but crucial.',
    difficulty: 'hard',
  },
  {
    id: 'cherry-pick',
    title: 'Stock Performance',
    dataDescription: 'Stock price on selected dates:',
    dataPoints: [
      { label: 'Jan 1', value: 100 },
      { label: 'Jun 15', value: 85 },
      { label: 'Dec 31', value: 120 },
    ],
    question:
      'A fund manager shows "20% annual growth!" (Jan 1 to Dec 31). What might they be hiding?',
    options: [
      'Nothing - the calculation is correct',
      'The mid-year crash to $85',
      'That other investments did better',
      'Both B and C, plus they chose dates carefully',
    ],
    correctIndex: 3,
    explanation:
      'Cherry-picking dates is common. They could have shown Jan 1 to Jun 15 (-15%) or Jun 15 to Dec 31 (+41%). Date selection dramatically changes the story.',
    teachingNote:
      'Whenever someone shows you carefully selected data points, ask to see the full time series.',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentQuestion: DataQuestion | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  usedQuestionIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 3 },
  medium: { rounds: 4 },
  hard: { rounds: 3 },
};

export default function DataDetectiveClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentQuestion: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    selectedIndex: null,
    usedQuestionIds: [],
  });

  const getAvailableQuestions = useCallback(
    (difficulty: Difficulty, usedIds: string[]) => {
      return questions.filter(
        (q) => q.difficulty === difficulty && !usedIds.includes(q.id),
      );
    },
    [],
  );

  const startGame = useCallback(() => {
    const available = getAvailableQuestions(gameState.difficulty, []);
    if (available.length === 0) return;

    const question = available[Math.floor(Math.random() * available.length)];

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      currentQuestion: question,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      correctAnswers: 0,
      selectedIndex: null,
      usedQuestionIds: [question.id],
    });
  }, [gameState.difficulty, getAvailableQuestions]);

  const handleSelect = (index: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentQuestion) return;

    const isCorrect = index === gameState.currentQuestion.correctIndex;
    const points = isCorrect ? 25 : 0;

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

    const available = getAvailableQuestions(
      gameState.difficulty,
      gameState.usedQuestionIds,
    );
    if (available.length === 0) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const question = available[Math.floor(Math.random() * available.length)];

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentQuestion: question,
      roundNumber: prev.roundNumber + 1,
      selectedIndex: null,
      usedQuestionIds: [...prev.usedQuestionIds, question.id],
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
            <h3 className="mb-3 font-semibold">What You'll Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Interpret data without jumping to conclusions</li>
              <li>• Spot when data is missing or misleading</li>
              <li>• Understand correlation vs causation</li>
              <li>• Recognize survivorship bias and cherry-picking</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <BarChart2 className="h-5 w-5" />
            Start Investigating
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

  const question = gameState.currentQuestion!;
  const isCorrect = gameState.selectedIndex === question.correctIndex;

  // Find max value for chart scaling
  const maxValue = Math.max(...question.dataPoints.map((d) => d.value));

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Case {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Title */}
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {question.title}
          </span>
        </div>

        {/* Data description */}
        <p className="mb-4 text-center text-muted-foreground">
          {question.dataDescription}
        </p>

        {/* Visual bar chart */}
        <div className="mb-6 rounded-xl bg-muted/30 p-4">
          <div className="space-y-2">
            {question.dataPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3"
              >
                <span className="w-20 text-right text-sm font-medium">
                  {point.label}
                </span>
                <div className="h-6 flex-1 rounded bg-muted">
                  <div
                    className="h-full rounded bg-primary transition-all"
                    style={{ width: `${(point.value / maxValue) * 100}%` }}
                  />
                </div>
                <span className="w-12 text-sm font-bold">{point.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question */}
        <h3 className="mb-6 text-center text-lg font-semibold">
          {question.question}
        </h3>

        {/* Options */}
        <div className="mx-auto max-w-lg space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrectOption = idx === question.correctIndex;
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
                  <span className="text-left">{option}</span>
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
              {isCorrect ? 'Excellent analysis!' : 'Not quite right'}
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
                The Analysis:
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                {question.explanation}
              </p>
            </div>

            <div className="mx-auto max-w-lg rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-4 w-4" />
                Data Literacy Tip:
              </h4>
              <p className="text-sm text-amber-600 dark:text-amber-300">
                {question.teachingNote}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Case'}
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
