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
  GitBranch,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  ArrowDown,
} from 'lucide-react';

interface ChainElement {
  id: string;
  text: string;
}

interface Scenario {
  id: string;
  title: string;
  context: string;
  elements: ChainElement[];
  correctOrder: string[]; // IDs in correct order
  explanation: string;
  teachingNote: string;
  difficulty: Difficulty;
}

const scenarios: Scenario[] = [
  // EASY scenarios
  {
    id: 'startup-marketing',
    title: 'Marketing Investment',
    context:
      'A startup decides to increase its marketing budget by 50%. What happens next?',
    elements: [
      { id: 'a', text: 'Increased marketing spend' },
      { id: 'b', text: 'More website visitors' },
      { id: 'c', text: 'Higher customer acquisition' },
      { id: 'd', text: 'Revenue growth' },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation:
      'Marketing drives traffic, traffic converts to customers, customers generate revenue. This is a simple linear chain.',
    teachingNote:
      "In real business, each step has conversion rates. If your marketing-to-visitor rate is 2% and visitor-to-customer is 5%, doubling marketing doesn't double revenue—it depends on the math.",
    difficulty: 'easy',
  },
  {
    id: 'study-exam',
    title: 'Exam Preparation',
    context:
      'A student increases their daily study time from 2 hours to 4 hours.',
    elements: [
      { id: 'a', text: 'More study time' },
      { id: 'b', text: 'Better understanding of topics' },
      { id: 'c', text: 'Higher exam scores' },
      { id: 'd', text: 'Improved GPA' },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation:
      'More time spent studying leads to deeper understanding, which improves test performance and ultimately grades.',
    teachingNote:
      'Quality matters as much as quantity. 4 hours of distracted studying might be less effective than 2 hours of focused deep work.',
    difficulty: 'easy',
  },
  {
    id: 'exercise-health',
    title: 'Fitness Journey',
    context:
      'Someone starts exercising 30 minutes daily after being sedentary.',
    elements: [
      { id: 'a', text: 'Daily exercise routine' },
      { id: 'b', text: 'Improved cardiovascular health' },
      { id: 'c', text: 'Better energy levels' },
      { id: 'd', text: 'Increased productivity at work' },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation:
      'Exercise improves heart health, which leads to more energy, which enables better focus and productivity.',
    teachingNote:
      "This is why many CEOs exercise early morning—it's not just health, it's a productivity investment.",
    difficulty: 'easy',
  },
  {
    id: 'price-drop',
    title: 'Price Reduction',
    context: 'An e-commerce store reduces all prices by 20%.',
    elements: [
      { id: 'a', text: 'Lower prices' },
      { id: 'b', text: 'More orders placed' },
      { id: 'c', text: 'Lower profit per item' },
      { id: 'd', text: 'Uncertain total profit' },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation:
      'Price drops increase volume but reduce margins. Whether total profit goes up or down depends on how much volume increases.',
    teachingNote:
      'This is why "We\'ll make it up in volume" can be a trap. You need to calculate break-even volume before cutting prices.',
    difficulty: 'easy',
  },
  // MEDIUM scenarios
  {
    id: 'tech-layoffs',
    title: 'Corporate Restructuring',
    context: 'A tech company announces 10% layoffs to cut costs.',
    elements: [
      { id: 'a', text: 'Layoff announcement' },
      { id: 'b', text: 'Reduced payroll costs' },
      { id: 'c', text: 'Remaining employees feel insecure' },
      { id: 'd', text: 'Top performers start job searching' },
      { id: 'e', text: 'Institutional knowledge lost' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e'],
    explanation:
      'Layoffs save money immediately but create fear, causing the best people (who have options) to leave, taking critical knowledge with them.',
    teachingNote:
      'This is called "the doom loop" in management. Short-term cost cutting often leads to long-term capability loss.',
    difficulty: 'medium',
  },
  {
    id: 'social-media-growth',
    title: 'Viral Content',
    context: "A brand's TikTok video goes viral with 10 million views.",
    elements: [
      { id: 'a', text: 'Viral video success' },
      { id: 'b', text: 'Massive follower increase' },
      { id: 'c', text: 'High expectations for next content' },
      { id: 'd', text: 'Pressure to maintain virality' },
      { id: 'e', text: 'Risk of burnout or quality drop' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e'],
    explanation:
      'Viral success creates expectations. New followers expect similar content, creating pressure that can lead to burnout.',
    teachingNote:
      'Many creators call this "the viral trap." Sustainable growth often beats one-hit virality.',
    difficulty: 'medium',
  },
  {
    id: 'interest-rates',
    title: 'Central Bank Policy',
    context: 'The central bank raises interest rates by 0.5%.',
    elements: [
      { id: 'a', text: 'Higher interest rates' },
      { id: 'b', text: 'Borrowing becomes expensive' },
      { id: 'c', text: 'Consumers spend less' },
      { id: 'd', text: 'Business revenue decreases' },
      { id: 'e', text: 'Inflation slows down' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e'],
    explanation:
      'Higher rates make loans expensive, reducing spending, which slows the economy and eventually cools inflation.',
    teachingNote:
      'This is why central banks are careful with rates—too fast creates recession, too slow lets inflation run wild.',
    difficulty: 'medium',
  },
  {
    id: 'remote-work',
    title: 'Work From Home Policy',
    context: 'A company shifts to fully remote work.',
    elements: [
      { id: 'a', text: 'Remote work policy' },
      { id: 'b', text: 'No commute time' },
      { id: 'c', text: 'Employees have more personal time' },
      { id: 'd', text: 'Less spontaneous collaboration' },
      { id: 'e', text: 'Innovation may slow down' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e'],
    explanation:
      'Remote work saves time but reduces "water cooler" moments where unexpected ideas emerge from casual conversations.',
    teachingNote:
      'The best remote companies deliberately create virtual spaces for random interactions to counter this effect.',
    difficulty: 'medium',
  },
  // HARD scenarios
  {
    id: 'automation-economy',
    title: 'Factory Automation',
    context: 'A manufacturing company fully automates its production line.',
    elements: [
      { id: 'a', text: 'Full automation implemented' },
      { id: 'b', text: 'Production costs drop 40%' },
      { id: 'c', text: 'Factory workers laid off' },
      { id: 'd', text: 'Local economy weakens' },
      { id: 'e', text: 'Consumer spending drops' },
      { id: 'f', text: 'Demand for products decreases' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e', 'f'],
    explanation:
      'Automation is efficient for one company but creates a paradox: if everyone automates, who has money to buy products?',
    teachingNote:
      'This is called the "paradox of thrift" or "fallacy of composition"—what works for one fails if everyone does it.',
    difficulty: 'hard',
  },
  {
    id: 'free-feature',
    title: 'Feature for Free',
    context: 'A SaaS company makes a premium feature free to attract users.',
    elements: [
      { id: 'a', text: 'Premium feature becomes free' },
      { id: 'b', text: 'New users sign up rapidly' },
      { id: 'c', text: 'Existing paying users feel cheated' },
      { id: 'd', text: 'Cancellation requests increase' },
      { id: 'e', text: 'Server costs spike from new users' },
      { id: 'f', text: 'Unit economics become negative' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e', 'f'],
    explanation:
      'Free features attract users but can anger paying customers and strain resources, making the business unsustainable.',
    teachingNote:
      'This is why freemium is tricky—you need to give away enough to attract but not so much that conversion dies.',
    difficulty: 'hard',
  },
  {
    id: 'climate-policy',
    title: 'Carbon Tax',
    context: 'A government implements a carbon tax on all fossil fuels.',
    elements: [
      { id: 'a', text: 'Carbon tax implemented' },
      { id: 'b', text: 'Fossil fuel prices rise' },
      { id: 'c', text: 'Consumers switch to alternatives' },
      { id: 'd', text: 'Green industries grow' },
      { id: 'e', text: 'Traditional energy jobs lost' },
      { id: 'f', text: 'Political backlash in affected regions' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e', 'f'],
    explanation:
      'Environmental policies create winners (green tech) and losers (fossil fuel workers), leading to political resistance.',
    teachingNote:
      'Successful climate policy must include "just transition" support for affected workers to reduce backlash.',
    difficulty: 'hard',
  },
  {
    id: 'ai-content',
    title: 'AI Content Flood',
    context: 'AI makes content creation 100x cheaper and faster.',
    elements: [
      { id: 'a', text: 'AI content tools become mainstream' },
      { id: 'b', text: 'Content volume explodes' },
      { id: 'c', text: 'Attention becomes scarcer' },
      { id: 'd', text: 'Authentic human content becomes premium' },
      { id: 'e', text: 'Trust in all content decreases' },
      { id: 'f', text: 'Verification costs rise for consumers' },
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e', 'f'],
    explanation:
      'More content means more noise, making human authenticity valuable but also making it harder to trust anything.',
    teachingNote:
      'This is why "proof of humanity" and reputation systems are becoming important in the AI age.',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: Scenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  userOrder: ChainElement[];
  hintUsed: boolean;
  usedScenarioIds: string[];
}

const difficultySettings = {
  easy: { rounds: 4 },
  medium: { rounds: 4 },
  hard: { rounds: 4 },
};

export default function CausalChainBuilderClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 4,
    score: 0,
    correctAnswers: 0,
    userOrder: [],
    hintUsed: false,
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
    const shuffled = [...scenario.elements].sort(() => Math.random() - 0.5);

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      currentScenario: scenario,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      correctAnswers: 0,
      userOrder: shuffled,
      hintUsed: false,
      usedScenarioIds: [scenario.id],
    });
  }, [gameState.difficulty, getAvailableScenarios]);

  const moveItem = (fromIdx: number, toIdx: number) => {
    if (gameState.phase !== 'playing') return;
    const newOrder = [...gameState.userOrder];
    const [removed] = newOrder.splice(fromIdx, 1);
    newOrder.splice(toIdx, 0, removed);
    setGameState((prev) => ({ ...prev, userOrder: newOrder }));
  };

  const useHint = () => {
    if (!gameState.currentScenario || gameState.hintUsed) return;

    // Put first element in correct position as hint
    const correctFirstId = gameState.currentScenario.correctOrder[0];
    const correctFirst = gameState.userOrder.find(
      (e) => e.id === correctFirstId,
    );
    if (!correctFirst) return;

    const filtered = gameState.userOrder.filter((e) => e.id !== correctFirstId);
    setGameState((prev) => ({
      ...prev,
      userOrder: [correctFirst, ...filtered],
      hintUsed: true,
    }));
  };

  const checkAnswer = () => {
    if (!gameState.currentScenario) return;

    const userOrderIds = gameState.userOrder.map((e) => e.id);
    const isCorrect = userOrderIds.every(
      (id, i) => id === gameState.currentScenario?.correctOrder[i],
    );

    // Calculate points: base 25, -10 for hint
    const points = isCorrect ? (gameState.hintUsed ? 15 : 25) : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
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
    const shuffled = [...scenario.elements].sort(() => Math.random() - 0.5);

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentScenario: scenario,
      roundNumber: prev.roundNumber + 1,
      userOrder: shuffled,
      hintUsed: false,
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
            <h3 className="mb-2 font-semibold">How It Works</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Read the scenario and understand the situation</li>
              <li>• Arrange the events in the correct cause-effect order</li>
              <li>• Use hints if stuck (costs 10 points)</li>
              <li>• Learn why things happen the way they do</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <GitBranch className="h-5 w-5" />
            Start Building Chains
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
  const isCorrect =
    gameState.phase === 'feedback' &&
    gameState.userOrder.every((e, i) => e.id === scenario.correctOrder[i]);

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Round {gameState.roundNumber} of {gameState.totalRounds}
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

        {/* Sortable chain */}
        <div className="mx-auto max-w-lg space-y-2">
          {gameState.userOrder.map((element, idx) => {
            const correctPosition = scenario.correctOrder.indexOf(element.id);
            const isInCorrectPosition =
              gameState.phase === 'feedback' && idx === correctPosition;
            const isInWrongPosition =
              gameState.phase === 'feedback' && idx !== correctPosition;

            return (
              <div
                key={element.id}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                  {idx + 1}
                </div>

                <div
                  className={cn(
                    'flex-1 rounded-xl border-2 bg-background p-3 text-sm font-medium transition-all',
                    gameState.phase === 'playing' &&
                      'border-border hover:border-primary/50',
                    isInCorrectPosition &&
                      'border-green-500 bg-green-50 dark:bg-green-900/20',
                    isInWrongPosition &&
                      'border-red-500 bg-red-50 dark:bg-red-900/20',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{element.text}</span>
                    {gameState.phase === 'playing' && (
                      <div className="flex flex-col gap-0.5">
                        <button
                          disabled={idx === 0}
                          onClick={() => moveItem(idx, idx - 1)}
                          className="h-5 w-5 rounded bg-muted text-xs hover:bg-muted-foreground/20 disabled:opacity-30"
                        >
                          ▲
                        </button>
                        <button
                          disabled={idx === gameState.userOrder.length - 1}
                          onClick={() => moveItem(idx, idx + 1)}
                          className="h-5 w-5 rounded bg-muted text-xs hover:bg-muted-foreground/20 disabled:opacity-30"
                        >
                          ▼
                        </button>
                      </div>
                    )}
                    {isInCorrectPosition && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {isInWrongPosition && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                </div>

                {idx < gameState.userOrder.length - 1 && (
                  <div
                    className="absolute left-[2.25rem] ml-[1px] h-4 w-0.5 bg-muted"
                    style={{ marginTop: '3rem' }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-8 text-center">
          {gameState.phase === 'playing' ? (
            <div className="flex flex-col items-center gap-3">
              <Button
                onClick={checkAnswer}
                size="lg"
                className="w-full max-w-xs gap-2"
              >
                Check My Chain <ArrowRight className="h-4 w-4" />
              </Button>
              {!gameState.hintUsed && (
                <Button
                  variant="outline"
                  onClick={useHint}
                  className="gap-2 text-yellow-600"
                >
                  <Lightbulb className="h-4 w-4" />
                  Use Hint (-10 pts)
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4 duration-300 animate-in fade-in">
              <div
                className={cn(
                  'mx-auto max-w-md rounded-xl p-4 font-bold',
                  isCorrect
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                )}
              >
                {isCorrect ? 'Perfect Chain!' : 'Not quite right'}
              </div>

              <div className="mx-auto max-w-md rounded-xl bg-blue-50 p-4 text-left dark:bg-blue-900/20">
                <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
                  Why this order?
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
                  : 'Next Scenario'}
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
