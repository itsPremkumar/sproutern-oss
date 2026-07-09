'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  Swords,
  ArrowRight,
  Lightbulb,
  Users,
  Trophy,
} from 'lucide-react';

interface GameScenario {
  id: string;
  title: string;
  context: string;
  yourOptions: [string, string];
  opponentOptions: [string, string];
  payoffMatrix: [
    [[number, number], [number, number]],
    [[number, number], [number, number]],
  ];
  nashEquilibrium: string;
  optimalStrategy: 'A' | 'B';
  explanation: string;
  realWorldExample: string;
}

const scenarios: GameScenario[] = [
  {
    id: 'prisoner-dilemma',
    title: "Classic Prisoner's Dilemma",
    context:
      'You and a business partner are both being investigated for a minor violation. You can either Stay Silent (cooperate) or Confess (defect). If both stay silent, you each pay a small fine. If one confesses while the other stays silent, the confessor goes free while the other pays a huge fine. If both confess, you both pay a medium fine.',
    yourOptions: ['Stay Silent', 'Confess'],
    opponentOptions: ['Stay Silent', 'Confess'],
    payoffMatrix: [
      [
        [-1, -1],
        [-10, 0],
      ], // You stay silent: (they silent, they confess)
      [
        [0, -10],
        [-5, -5],
      ], // You confess: (they silent, they confess)
    ],
    nashEquilibrium: 'Both Confess',
    optimalStrategy: 'B',
    explanation:
      'The Nash Equilibrium is both confessing (-5, -5), even though both staying silent (-1, -1) would be better for everyone. Confessing is a "dominant strategy" because it\'s better regardless of what your partner does.',
    realWorldExample:
      'This explains why cartels fail, why countries have arms races, and why companies end up in price wars. Individual rationality leads to collective irrationality.',
  },
  {
    id: 'price-war',
    title: 'Price War',
    context:
      'You and your competitor are setting prices for the holiday season. You can price High or Low. If both price high, you both make good profits. If one prices low while the other is high, the low-pricer steals all customers. If both price low, you both barely break even.',
    yourOptions: ['Price High', 'Price Low'],
    opponentOptions: ['Price High', 'Price Low'],
    payoffMatrix: [
      [
        [100, 100],
        [20, 150],
      ], // You price high: (they high, they low)
      [
        [150, 20],
        [50, 50],
      ], // You price low: (they high, they low)
    ],
    nashEquilibrium: 'Both Price Low',
    optimalStrategy: 'B',
    explanation:
      "Even though (High, High) gives the best joint outcome, both companies rationally choose Low because it's better regardless of competitor action. This is why price wars are so common.",
    realWorldExample:
      'Airlines, streaming services, and ride-sharing companies often race to the bottom on price, destroying industry profitability for everyone.',
  },
  {
    id: 'coordination',
    title: 'Technology Standard',
    context:
      'Two tech companies must choose between Standard A or Standard B for their products. Customers benefit when both use the same standard. Neither standard is objectively better.',
    yourOptions: ['Standard A', 'Standard B'],
    opponentOptions: ['Standard A', 'Standard B'],
    payoffMatrix: [
      [
        [100, 100],
        [0, 0],
      ], // You choose A: (they A, they B)
      [
        [0, 0],
        [100, 100],
      ], // You choose B: (they A, they B)
    ],
    nashEquilibrium: 'Both choose same standard (either A,A or B,B)',
    optimalStrategy: 'A',
    explanation:
      "This is a coordination game with TWO Nash Equilibria. The challenge isn't incentives (both want to coordinate) but communication. Who moves first matters.",
    realWorldExample:
      'VHS vs Betamax, Blu-ray vs HD-DVD, charging standards. Early adopters and market signals help coordinate. Sometimes governments set standards to solve this.',
  },
  {
    id: 'chicken',
    title: 'Market Entry',
    context:
      'You and a competitor are both considering entering a small market. If only one enters, they dominate. If both enter, you split a market too small for two (both lose). If neither enters, you both focus on other opportunities.',
    yourOptions: ['Enter Market', 'Stay Out'],
    opponentOptions: ['Enter Market', 'Stay Out'],
    payoffMatrix: [
      [
        [-50, -50],
        [100, 0],
      ], // You enter: (they enter, they stay out)
      [
        [0, 100],
        [10, 10],
      ], // You stay out: (they enter, they stay out)
    ],
    nashEquilibrium: 'One enters, one stays out (asymmetric)',
    optimalStrategy: 'A',
    explanation:
      'This is a "Chicken" game. The Nash Equilibria are asymmetric: one player enters, one stays out. The question is WHO blinks first. Commitment and signaling matter.',
    realWorldExample:
      'Startups vs big tech entering new markets. Sometimes the credible threat of entry is enough to deter competition without actually entering.',
  },
  {
    id: 'stag-hunt',
    title: 'Team Project',
    context:
      "You're on a team project. You can either Work Hard expecting others will too, or Slack Off to protect yourself if others don't contribute. If everyone works hard, you achieve something great. If you work hard but others slack, you're exploited. If everyone slacks, you get a mediocre result.",
    yourOptions: ['Work Hard', 'Slack Off'],
    opponentOptions: ['Work Hard', 'Slack Off'],
    payoffMatrix: [
      [
        [100, 100],
        [0, 50],
      ], // You work hard: (they hard, they slack)
      [
        [50, 0],
        [30, 30],
      ], // You slack: (they hard, they slack)
    ],
    nashEquilibrium: 'Both Work Hard OR Both Slack',
    optimalStrategy: 'A',
    explanation:
      'This is a "Stag Hunt" - cooperation gives the best outcome but requires trust. Unlike Prisoner\'s Dilemma, (Hard, Hard) IS a Nash Equilibrium, but so is (Slack, Slack). Trust determines which equilibrium you reach.',
    realWorldExample:
      'Startups succeed when everyone goes all-in. One person slacking can cascade into everyone protecting themselves. Culture and trust are key.',
  },
  {
    id: 'negotiation',
    title: 'Salary Negotiation',
    context:
      "You're negotiating salary. You can be Aggressive (ask for a lot) or Reasonable. If both sides are reasonable, you reach a fair deal. If one is aggressive while the other is reasonable, the aggressive one wins big. If both are aggressive, negotiations break down.",
    yourOptions: ['Aggressive', 'Reasonable'],
    opponentOptions: ['Aggressive', 'Reasonable'],
    payoffMatrix: [
      [
        [-20, -20],
        [80, 20],
      ], // You aggressive: (they aggressive, they reasonable)
      [
        [20, 80],
        [50, 50],
      ], // You reasonable: (they aggressive, they reasonable)
    ],
    nashEquilibrium: 'Mixed strategy (sometimes aggressive, sometimes not)',
    optimalStrategy: 'A',
    explanation:
      'There\'s no pure strategy Nash Equilibrium here. The optimal approach is a "mixed strategy" - be aggressive sometimes but not always. Reputation and repeated interaction matter.',
    realWorldExample:
      'Never negotiate? You leave money on the table. Always negotiate aggressively? You burn relationships. The best negotiators read the room.',
  },
];

interface GameState {
  phase: 'intro' | 'playing' | 'opponent-choice' | 'result' | 'final';
  currentScenario: GameScenario | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctPredictions: number;
  yourChoice: 'A' | 'B' | null;
  opponentChoice: 'A' | 'B' | null;
  usedScenarioIds: string[];
}

export default function StrategicStandoffClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'intro',
    currentScenario: null,
    roundNumber: 0,
    totalRounds: 4,
    score: 0,
    correctPredictions: 0,
    yourChoice: null,
    opponentChoice: null,
    usedScenarioIds: [],
  });

  const getAvailableScenarios = useCallback((usedIds: string[]) => {
    return scenarios.filter((s) => !usedIds.includes(s.id));
  }, []);

  const startGame = useCallback(() => {
    const available = getAvailableScenarios([]);
    if (available.length === 0) return;

    const scenario = available[Math.floor(Math.random() * available.length)];

    setGameState({
      phase: 'playing',
      currentScenario: scenario,
      roundNumber: 1,
      totalRounds: 4,
      score: 0,
      correctPredictions: 0,
      yourChoice: null,
      opponentChoice: null,
      usedScenarioIds: [scenario.id],
    });
  }, [getAvailableScenarios]);

  const makeChoice = (choice: 'A' | 'B') => {
    // Simulate opponent using Nash equilibrium strategy
    const opponentChoice = gameState.currentScenario?.optimalStrategy || 'A';

    setGameState((prev) => ({
      ...prev,
      phase: 'opponent-choice',
      yourChoice: choice,
      opponentChoice: opponentChoice,
    }));
  };

  const showResult = () => {
    if (
      !gameState.currentScenario ||
      !gameState.yourChoice ||
      !gameState.opponentChoice
    )
      return;

    const yourIdx = gameState.yourChoice === 'A' ? 0 : 1;
    const oppIdx = gameState.opponentChoice === 'A' ? 0 : 1;
    const payoff = gameState.currentScenario.payoffMatrix[yourIdx][oppIdx][0];

    // Player scores points based on payoff
    const points = Math.max(0, payoff + 50); // Normalize to positive
    const predictedCorrectly =
      gameState.yourChoice === gameState.currentScenario.optimalStrategy;

    setGameState((prev) => ({
      ...prev,
      phase: 'result',
      score: prev.score + points,
      correctPredictions: predictedCorrectly
        ? prev.correctPredictions + 1
        : prev.correctPredictions,
    }));
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'final' }));
      return;
    }

    const available = getAvailableScenarios(gameState.usedScenarioIds);
    if (available.length === 0) {
      setGameState((prev) => ({ ...prev, phase: 'final' }));
      return;
    }

    const scenario = available[Math.floor(Math.random() * available.length)];

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentScenario: scenario,
      roundNumber: prev.roundNumber + 1,
      yourChoice: null,
      opponentChoice: null,
      usedScenarioIds: [...prev.usedScenarioIds, scenario.id],
    }));
  };

  // Intro phase
  if (gameState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Game Theory Basics
          </h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-3 font-semibold">How It Works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • You'll face strategic scenarios where outcomes depend on both
                your choice AND others' choices
              </li>
              <li>
                • Make your move, then see how the "opponent" (playing
                optimally) responds
              </li>
              <li>• Learn about Nash Equilibrium and dominant strategies</li>
              <li>
                • Understand why rational individuals sometimes create
                irrational outcomes
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Swords className="h-5 w-5" />
            Start Strategic Thinking
          </Button>
        </div>
      </div>
    );
  }

  // Final phase
  if (gameState.phase === 'final') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={gameState.correctPredictions}
        incorrectAnswers={gameState.totalRounds - gameState.correctPredictions}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'intro' }))
        }
      />
    );
  }

  const scenario = gameState.currentScenario!;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Game {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Title and context */}
        <div className="mb-6 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {scenario.title}
          </span>
          <p className="text-muted-foreground">{scenario.context}</p>
        </div>

        {/* Payoff Matrix */}
        <div className="mb-6 overflow-x-auto">
          <table className="mx-auto text-sm">
            <thead>
              <tr>
                <th className="p-2"></th>
                <th
                  className="p-2 text-center"
                  colSpan={2}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    Opponent
                  </div>
                </th>
              </tr>
              <tr>
                <th className="p-2"></th>
                <th className="p-2 text-center font-medium">
                  {scenario.opponentOptions[0]}
                </th>
                <th className="p-2 text-center font-medium">
                  {scenario.opponentOptions[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {scenario.yourOptions.map((yourOpt, yIdx) => (
                <tr key={yIdx}>
                  <th className="p-2 text-right font-medium">{yourOpt}</th>
                  {scenario.opponentOptions.map((_, oIdx) => {
                    const [yourPayoff, theirPayoff] =
                      scenario.payoffMatrix[yIdx][oIdx];
                    const isSelected =
                      gameState.yourChoice === (yIdx === 0 ? 'A' : 'B') &&
                      gameState.opponentChoice === (oIdx === 0 ? 'A' : 'B');
                    return (
                      <td
                        key={oIdx}
                        className={cn(
                          'border p-2 text-center',
                          isSelected && 'bg-primary/20 font-bold',
                        )}
                      >
                        <span
                          className={
                            yourPayoff >= 0 ? 'text-green-600' : 'text-red-600'
                          }
                        >
                          {yourPayoff}
                        </span>
                        {', '}
                        <span
                          className={
                            theirPayoff >= 0 ? 'text-green-600' : 'text-red-600'
                          }
                        >
                          {theirPayoff}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            (Your payoff, Their payoff)
          </p>
        </div>

        {/* Playing phase - make choice */}
        {gameState.phase === 'playing' && (
          <div className="text-center">
            <h3 className="mb-4 text-lg font-semibold">What do you do?</h3>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={() => makeChoice('A')}
                className="min-w-32"
              >
                {scenario.yourOptions[0]}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => makeChoice('B')}
                className="min-w-32"
              >
                {scenario.yourOptions[1]}
              </Button>
            </div>
          </div>
        )}

        {/* Opponent choice reveal */}
        {gameState.phase === 'opponent-choice' && (
          <div className="text-center duration-300 animate-in fade-in">
            <div className="mb-4 rounded-xl bg-muted p-4">
              <p className="text-sm text-muted-foreground">You chose:</p>
              <p className="text-lg font-bold">
                {scenario.yourOptions[gameState.yourChoice === 'A' ? 0 : 1]}
              </p>
            </div>
            <div className="mb-4 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <p className="text-sm text-muted-foreground">Opponent chose:</p>
              <p className="text-lg font-bold text-orange-600">
                {
                  scenario.opponentOptions[
                    gameState.opponentChoice === 'A' ? 0 : 1
                  ]
                }
              </p>
            </div>
            <Button
              onClick={showResult}
              className="gap-2"
            >
              See Outcome <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Result phase */}
        {gameState.phase === 'result' && (
          <div className="space-y-4 duration-300 animate-in fade-in">
            {/* Outcome */}
            <div className="rounded-xl bg-primary/10 p-4 text-center">
              <p className="mb-2 text-sm text-muted-foreground">
                Your payoff this round:
              </p>
              <p className="text-3xl font-black text-primary">
                {
                  scenario.payoffMatrix[gameState.yourChoice === 'A' ? 0 : 1][
                    gameState.opponentChoice === 'A' ? 0 : 1
                  ][0]
                }
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-400">
                <Trophy className="h-4 w-4" />
                Nash Equilibrium:
              </h4>
              <p className="mb-2 font-medium text-blue-600 dark:text-blue-300">
                {scenario.nashEquilibrium}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                {scenario.explanation}
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-4 w-4" />
                Real-World Example:
              </h4>
              <p className="text-sm text-amber-600 dark:text-amber-300">
                {scenario.realWorldExample}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Final Score'
                  : 'Next Game'}
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
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'intro' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
