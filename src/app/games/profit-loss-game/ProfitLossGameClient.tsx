'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, TrendingUp, ArrowRight } from 'lucide-react';

interface Problem {
  question: string;
  answer: number;
  options: number[];
  explanation: string;
}

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentProblem: Problem | null;
  selectedAnswer: number | null;
}

const difficultySettings = {
  easy: { rounds: 8, maxCP: 100, percentages: [10, 20, 25, 50] },
  medium: { rounds: 10, maxCP: 500, percentages: [5, 10, 15, 20, 25, 30] },
  hard: { rounds: 12, maxCP: 1000, percentages: [5, 8, 12, 15, 20, 25, 33.33] },
};

export default function ProfitLossGameClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    totalRounds: 8,
    correctAnswers: 0,
    currentProblem: null,
    selectedAnswer: null,
  });

  const settings = difficultySettings[difficulty];

  const generateProblem = useCallback((): Problem => {
    const types = [
      'find_sp',
      'find_profit',
      'find_profit_percent',
      'find_loss',
      'find_cp',
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const cp = Math.floor((Math.random() * settings.maxCP) / 10 + 1) * 10;
    const percent =
      settings.percentages[
        Math.floor(Math.random() * settings.percentages.length)
      ];

    let question: string, answer: number, explanation: string;

    switch (type) {
      case 'find_sp': {
        const isProfit = Math.random() > 0.4;
        if (isProfit) {
          answer = cp + (percent / 100) * cp;
          question = `A product bought for ₹${cp} is sold at ${percent}% profit. What is the selling price?`;
          explanation = `SP = CP + Profit = ${cp} + ${percent}% of ${cp} = ₹${answer}`;
        } else {
          answer = cp - (percent / 100) * cp;
          question = `A product bought for ₹${cp} is sold at ${percent}% loss. What is the selling price?`;
          explanation = `SP = CP - Loss = ${cp} - ${percent}% of ${cp} = ₹${answer}`;
        }
        break;
      }

      case 'find_profit': {
        const profitPercent = percent;
        answer = (profitPercent / 100) * cp;
        question = `If CP is ₹${cp} and profit is ${profitPercent}%, find the profit amount.`;
        explanation = `Profit = ${profitPercent}% of ${cp} = ₹${answer}`;
        break;
      }

      case 'find_profit_percent': {
        const profit = (percent / 100) * cp;
        const sp = cp + profit;
        answer = percent;
        question = `CP = ₹${cp}, SP = ₹${sp}. What is the profit percentage?`;
        explanation = `Profit% = (SP - CP) / CP × 100 = (${sp} - ${cp}) / ${cp} × 100 = ${percent}%`;
        break;
      }

      case 'find_loss': {
        const lossPercent = percent;
        answer = (lossPercent / 100) * cp;
        question = `If CP is ₹${cp} and loss is ${lossPercent}%, find the loss amount.`;
        explanation = `Loss = ${lossPercent}% of ${cp} = ₹${answer}`;
        break;
      }

      case 'find_cp': {
        const sp = cp;
        const profitPercent = percent;
        answer = Math.round((sp * 100) / (100 + profitPercent));
        question = `SP = ₹${sp} with ${profitPercent}% profit. What was the cost price?`;
        explanation = `CP = SP × 100 / (100 + Profit%) = ${sp} × 100 / (100 + ${profitPercent}) = ₹${answer}`;
        break;
      }

      default:
        answer = cp + (percent / 100) * cp;
        question = `CP = ₹${cp}, Profit = ${percent}%. Find SP.`;
        explanation = `SP = CP + Profit = ₹${answer}`;
    }

    const options = new Set<number>([Math.round(answer)]);
    while (options.size < 4) {
      const offset = Math.floor(Math.random() * 50) - 25;
      const wrong = Math.round(answer) + offset;
      if (wrong > 0 && !options.has(wrong)) {
        options.add(wrong);
      }
    }

    return {
      question,
      answer: Math.round(answer),
      options: Array.from(options).sort(() => Math.random() - 0.5),
      explanation,
    };
  }, [settings]);

  const startGame = useCallback(() => {
    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: settings.rounds,
      correctAnswers: 0,
      currentProblem: generateProblem(),
      selectedAnswer: null,
    });
  }, [generateProblem, settings.rounds]);

  const handleAnswer = (answer: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentProblem) return;

    const isCorrect = answer === gameState.currentProblem.answer;
    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      score: isCorrect ? prev.score + 15 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    setGameState((prev) => {
      if (prev.round >= prev.totalRounds) {
        return { ...prev, phase: 'result' };
      }
      return {
        ...prev,
        phase: 'playing',
        round: prev.round + 1,
        currentProblem: generateProblem(),
        selectedAnswer: null,
      };
    });
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={difficulty}
            onChange={setDifficulty}
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Problem Types:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Find Selling Price from Cost Price and Profit%</li>
              <li>Calculate Profit/Loss amount</li>
              <li>Find Profit/Loss percentage</li>
              <li>Calculate Cost Price from SP and Profit%</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Game
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
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const isCorrect =
    gameState.selectedAnswer === gameState.currentProblem?.answer;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.round}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Round</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3 text-center dark:bg-emerald-900/20">
          <div className="text-2xl font-bold text-emerald-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center">
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            Business Problem
          </span>
        </div>
        <div className="mb-6 text-center text-lg font-semibold">
          {gameState.currentProblem?.question}
        </div>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          {gameState.currentProblem?.options.map((option, index) => {
            const isSelected = gameState.selectedAnswer === option;
            const isCorrectOption = option === gameState.currentProblem?.answer;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => handleAnswer(option)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-14 text-lg font-bold',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                ₹{option}
              </Button>
            );
          })}
        </div>

        {gameState.phase === 'feedback' && (
          <div className="mt-6 text-center">
            <div
              className={cn(
                'mb-2 text-lg font-bold',
                isCorrect ? 'text-green-600' : 'text-red-600',
              )}
            >
              {isCorrect ? '✓ Correct!' : '✗ Wrong!'}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {gameState.currentProblem?.explanation}
            </p>
            <Button
              onClick={nextRound}
              className="gap-2"
            >
              {gameState.round >= gameState.totalRounds
                ? 'See Results'
                : 'Next Question'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

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
