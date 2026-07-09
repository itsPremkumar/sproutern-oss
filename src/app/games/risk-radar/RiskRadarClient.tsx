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
  Target,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  TrendingUp,
  AlertTriangle,
  DollarSign,
} from 'lucide-react';

interface RiskScenario {
  id: string;
  context: string;
  optionA: {
    name: string;
    description: string;
    probability: number;
    outcome: number;
  };
  optionB: {
    name: string;
    description: string;
    probability: number;
    outcome: number;
  };
  question: string;
  correctAnswer: 'A' | 'B' | 'equal';
  explanation: string;
  teachingNote: string;
  difficulty: Difficulty;
}

const scenarios: RiskScenario[] = [
  // EASY - Basic expected value calculations
  {
    id: 'coin-flip',
    context: 'A simple coin flip bet.',
    optionA: {
      name: 'Safe Choice',
      description: 'Keep $50',
      probability: 100,
      outcome: 50,
    },
    optionB: {
      name: 'Risky Bet',
      description: 'Flip coin: Heads win $110, Tails win $0',
      probability: 50,
      outcome: 110,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = $50. EV(B) = 0.5 × $110 = $55. Option B has $5 higher expected value.',
    teachingNote:
      'Expected value alone doesn\'t tell the whole story. The "right" choice depends on your risk tolerance and how much $50 matters to you.',
    difficulty: 'easy',
  },
  {
    id: 'lottery-basic',
    context: 'Your friend offers you two options.',
    optionA: {
      name: 'Guaranteed',
      description: 'Receive $20 right now',
      probability: 100,
      outcome: 20,
    },
    optionB: {
      name: 'Lottery Ticket',
      description: '10% chance to win $150',
      probability: 10,
      outcome: 150,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'A',
    explanation:
      'EV(A) = $20. EV(B) = 0.1 × $150 = $15. The guaranteed $20 is better mathematically.',
    teachingNote:
      'Lotteries generally have negative expected value. The "thrill" is what you\'re paying for, not a good financial decision.',
    difficulty: 'easy',
  },
  {
    id: 'job-offer',
    context: 'You have two job offers.',
    optionA: {
      name: 'Stable Corp',
      description: 'Guaranteed $80K salary',
      probability: 100,
      outcome: 80000,
    },
    optionB: {
      name: 'Startup',
      description: '60% company survives: $100K salary',
      probability: 60,
      outcome: 100000,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'A',
    explanation:
      'EV(A) = $80K. EV(B) = 0.6 × $100K = $60K. Stable Corp has higher EV.',
    teachingNote:
      'But wait—if the startup fails, what happens? You likely get a new job, not $0. Real-world decisions have more nuance than simple EV.',
    difficulty: 'easy',
  },
  {
    id: 'investment-basic',
    context: 'You have $1,000 to invest.',
    optionA: {
      name: 'Savings Account',
      description: 'Guaranteed 5% return ($1,050)',
      probability: 100,
      outcome: 1050,
    },
    optionB: {
      name: 'Stock',
      description: '70% chance of 20% gain, 30% chance of 10% loss',
      probability: 70,
      outcome: 1200,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = $1,050. EV(B) = 0.7 × $1,200 + 0.3 × $900 = $840 + $270 = $1,110. Stock has higher EV.',
    teachingNote:
      "Higher EV doesn't mean better for everyone. A retiree shouldn't risk their savings even for higher EV.",
    difficulty: 'easy',
  },
  // MEDIUM - More complex scenarios
  {
    id: 'insurance',
    context: 'Should you buy phone insurance?',
    optionA: {
      name: 'No Insurance',
      description: '15% chance phone breaks, costs $800 to replace',
      probability: 15,
      outcome: 800,
    },
    optionB: {
      name: 'Buy Insurance',
      description: 'Pay $150 premium, phone replacement free if broken',
      probability: 100,
      outcome: 150,
    },
    question: 'Which option has LOWER expected COST?',
    correctAnswer: 'A',
    explanation:
      'Expected Cost(A) = 0.15 × $800 = $120. Cost(B) = $150. Not buying insurance is cheaper on average.',
    teachingNote:
      'Insurance is "bad EV" by design (insurance companies profit). You buy it for peace of mind or when you can\'t afford the loss.',
    difficulty: 'medium',
  },
  {
    id: 'startup-funding',
    context: 'A startup founder has two funding options.',
    optionA: {
      name: 'Angel Investor',
      description: '80% chance of getting $500K',
      probability: 80,
      outcome: 500000,
    },
    optionB: {
      name: 'VC Firm',
      description: '25% chance of getting $3M',
      probability: 25,
      outcome: 3000000,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = 0.8 × $500K = $400K. EV(B) = 0.25 × $3M = $750K. VC has much higher EV.',
    teachingNote:
      'But if you NEED $200K to survive next month, the 80% certainty might matter more than higher EV. Survival first, optimization later.',
    difficulty: 'medium',
  },
  {
    id: 'project-choice',
    context: 'A product manager must choose which feature to build.',
    optionA: {
      name: 'Safe Feature',
      description: '90% success rate, $500K revenue impact',
      probability: 90,
      outcome: 500000,
    },
    optionB: {
      name: 'Innovative Feature',
      description: '40% success rate, $2M revenue impact',
      probability: 40,
      outcome: 2000000,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = 0.9 × $500K = $450K. EV(B) = 0.4 × $2M = $800K. The risky innovation has higher EV.',
    teachingNote:
      'Big companies can afford to take these bets repeatedly (portfolio approach). A startup betting on one shot might prefer certainty.',
    difficulty: 'medium',
  },
  {
    id: 'marketing-roi',
    context: 'Marketing team is choosing between campaigns.',
    optionA: {
      name: 'Proven Campaign',
      description: '95% works as expected, 3x ROI',
      probability: 95,
      outcome: 30000,
    },
    optionB: {
      name: 'Experimental Campaign',
      description: '50% chance of viral success, 10x ROI',
      probability: 50,
      outcome: 100000,
    },
    question: 'If budget is $10K, which has HIGHER expected return?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = 0.95 × $30K = $28.5K. EV(B) = 0.5 × $100K = $50K. Experimental wins on EV.',
    teachingNote:
      'But failing experimental campaigns can hurt brand. Consider downside risk, not just upside potential.',
    difficulty: 'medium',
  },
  // HARD - Nuanced risk scenarios
  {
    id: 'career-risk',
    context: 'You have 20 years until retirement. Consider career paths.',
    optionA: {
      name: 'Corporate Track',
      description: 'Steady growth to $200K over 20 years (100% likely)',
      probability: 100,
      outcome: 200000,
    },
    optionB: {
      name: 'Entrepreneurship',
      description: '10% chance of $5M exit, 90% return to corporate',
      probability: 10,
      outcome: 5000000,
    },
    question: 'Which path has HIGHER expected peak income?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = $200K. EV(B) = 0.1 × $5M + 0.9 × $200K = $500K + $180K = $680K. Entrepreneurship wins mathematically.',
    teachingNote:
      'This is why VCs take many bets. But as an individual, you can\'t "diversify" across 10 careers. Risk tolerance matters.',
    difficulty: 'hard',
  },
  {
    id: 'acquisition-offer',
    context: 'Your startup received an acquisition offer.',
    optionA: {
      name: 'Accept Offer',
      description: '$50M guaranteed exit',
      probability: 100,
      outcome: 50000000,
    },
    optionB: {
      name: 'Keep Building',
      description: '20% IPO at $500M, 80% fails at $0',
      probability: 20,
      outcome: 500000000,
    },
    question: 'Which option has HIGHER expected value?',
    correctAnswer: 'B',
    explanation:
      'EV(A) = $50M. EV(B) = 0.2 × $500M = $100M. Keeping the company has 2x the EV.',
    teachingNote:
      'This is exactly why most founders sell. $50M guaranteed changes your life. The math says bet, but is $100M really 2x as life-changing?',
    difficulty: 'hard',
  },
  {
    id: 'negotiation',
    context: "You're negotiating a job offer.",
    optionA: {
      name: 'Accept Current Offer',
      description: 'Guaranteed $120K base salary',
      probability: 100,
      outcome: 120000,
    },
    optionB: {
      name: 'Counter-Offer',
      description: '60% get $140K, 40% offer rescinded ($0 for now)',
      probability: 60,
      outcome: 140000,
    },
    question: 'Which strategy has HIGHER expected value?',
    correctAnswer: 'A',
    explanation:
      'EV(A) = $120K. EV(B) = 0.6 × $140K + 0.4 × $0 = $84K. Accept is safer and higher EV!',
    teachingNote:
      "But wait—if they rescind, you'll find another job (not $0). The real EV of B is higher. Model your actual downside accurately.",
    difficulty: 'hard',
  },
  {
    id: 'portfolio-allocation',
    context: 'How should a 30-year-old allocate retirement savings?',
    optionA: {
      name: 'Conservative',
      description: '100% bonds: 4% annual return (nearly guaranteed)',
      probability: 95,
      outcome: 4,
    },
    optionB: {
      name: 'Aggressive',
      description: '100% stocks: 8% avg return, but volatile (-20% possible)',
      probability: 70,
      outcome: 8,
    },
    question: 'Over 30 years, which likely produces MORE wealth?',
    correctAnswer: 'B',
    explanation:
      'With 30 years, volatility smooths out. $100K at 4% = $324K. At 8% = $1M. Time horizon matters hugely.',
    teachingNote:
      'Young investors can take more risk because they have time to recover. This is why target-date funds shift to bonds as you age.',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentScenario: RiskScenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedAnswer: 'A' | 'B' | null;
  usedScenarioIds: string[];
}

const difficultySettings = {
  easy: { rounds: 4 },
  medium: { rounds: 4 },
  hard: { rounds: 4 },
};

export default function RiskRadarClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 4,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
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
      selectedAnswer: null,
      usedScenarioIds: [scenario.id],
    });
  }, [gameState.difficulty, getAvailableScenarios]);

  const handleSelect = (answer: 'A' | 'B') => {
    if (gameState.phase !== 'playing' || !gameState.currentScenario) return;

    const isCorrect = answer === gameState.currentScenario.correctAnswer;
    const points = isCorrect ? 25 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
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
      selectedAnswer: null,
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
            <h3 className="mb-3 font-semibold">How It Works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Compare two options with different probabilities and outcomes
              </li>
              <li>• Calculate expected value: EV = Probability × Outcome</li>
              <li>• Choose which option has higher expected value</li>
              <li>
                • Learn when EV isn't everything (risk tolerance matters!)
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Target className="h-5 w-5" />
            Start Assessing Risks
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
  const isCorrect = gameState.selectedAnswer === scenario.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Risk {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Context */}
        <div className="mb-6 text-center">
          <p className="text-lg text-muted-foreground">{scenario.context}</p>
        </div>

        {/* Options comparison */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          {/* Option A */}
          <button
            onClick={() => handleSelect('A')}
            disabled={gameState.phase === 'feedback'}
            className={cn(
              'rounded-xl border-2 p-4 text-left transition-all',
              gameState.phase === 'playing' &&
                'cursor-pointer hover:border-primary hover:shadow-md',
              gameState.phase === 'feedback' &&
                gameState.selectedAnswer === 'A' &&
                scenario.correctAnswer === 'A' &&
                'border-green-500 bg-green-50 dark:bg-green-900/20',
              gameState.phase === 'feedback' &&
                gameState.selectedAnswer === 'A' &&
                scenario.correctAnswer !== 'A' &&
                'border-red-500 bg-red-50 dark:bg-red-900/20',
              gameState.phase === 'feedback' &&
                scenario.correctAnswer === 'A' &&
                gameState.selectedAnswer !== 'A' &&
                'border-green-500 bg-green-50/50 dark:bg-green-900/10',
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-lg font-bold">Option A</span>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600 dark:bg-blue-900/50">
                {scenario.optionA.probability}% likely
              </span>
            </div>
            <h4 className="mb-2 font-semibold">{scenario.optionA.name}</h4>
            <p className="text-sm text-muted-foreground">
              {scenario.optionA.description}
            </p>
            <div className="mt-3 flex items-center gap-2 text-lg font-bold text-green-600">
              <DollarSign className="h-5 w-5" />
              {scenario.optionA.outcome.toLocaleString()}
            </div>
          </button>

          {/* Option B */}
          <button
            onClick={() => handleSelect('B')}
            disabled={gameState.phase === 'feedback'}
            className={cn(
              'rounded-xl border-2 p-4 text-left transition-all',
              gameState.phase === 'playing' &&
                'cursor-pointer hover:border-primary hover:shadow-md',
              gameState.phase === 'feedback' &&
                gameState.selectedAnswer === 'B' &&
                scenario.correctAnswer === 'B' &&
                'border-green-500 bg-green-50 dark:bg-green-900/20',
              gameState.phase === 'feedback' &&
                gameState.selectedAnswer === 'B' &&
                scenario.correctAnswer !== 'B' &&
                'border-red-500 bg-red-50 dark:bg-red-900/20',
              gameState.phase === 'feedback' &&
                scenario.correctAnswer === 'B' &&
                gameState.selectedAnswer !== 'B' &&
                'border-green-500 bg-green-50/50 dark:bg-green-900/10',
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-lg font-bold">Option B</span>
              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-600 dark:bg-orange-900/50">
                {scenario.optionB.probability}% likely
              </span>
            </div>
            <h4 className="mb-2 font-semibold">{scenario.optionB.name}</h4>
            <p className="text-sm text-muted-foreground">
              {scenario.optionB.description}
            </p>
            <div className="mt-3 flex items-center gap-2 text-lg font-bold text-green-600">
              <DollarSign className="h-5 w-5" />
              {scenario.optionB.outcome.toLocaleString()}
            </div>
          </button>
        </div>

        {/* Question */}
        <div className="mb-6 rounded-xl bg-primary/5 p-4 text-center">
          <h3 className="text-lg font-semibold">{scenario.question}</h3>
        </div>

        {/* Feedback */}
        {gameState.phase === 'feedback' && (
          <div className="space-y-4 duration-300 animate-in fade-in">
            <div
              className={cn(
                'rounded-xl p-4 text-center font-bold',
                isCorrect
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
              )}
            >
              {isCorrect
                ? 'Correct!'
                : `Wrong! The answer is Option ${scenario.correctAnswer}`}
            </div>

            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-400">
                <TrendingUp className="h-4 w-4" />
                The Math:
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                {scenario.explanation}
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-4 w-4" />
                But Here's The Thing:
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
                  : 'Next Risk'}
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
