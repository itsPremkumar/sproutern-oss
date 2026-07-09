'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Percent, ArrowRight } from 'lucide-react';

type ProblemType =
  | 'basic'
  | 'discount'
  | 'increase'
  | 'decrease'
  | 'find_percent';

interface Problem {
  question: string;
  answer: number;
  options: number[];
  type: ProblemType;
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
  easy: { rounds: 8, percentages: [10, 20, 25, 50] },
  medium: { rounds: 10, percentages: [5, 10, 15, 20, 25, 30, 40, 50] },
  hard: {
    rounds: 12,
    percentages: [5, 8, 12, 15, 17.5, 20, 22.5, 25, 33.3, 40, 60, 75],
  },
};

export default function PercentagePuzzleClient() {
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
    const types: ProblemType[] = [
      'basic',
      'discount',
      'increase',
      'decrease',
      'find_percent',
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const percent =
      settings.percentages[
        Math.floor(Math.random() * settings.percentages.length)
      ];

    let question: string, answer: number, explanation: string;
    const baseValue =
      Math.floor(Math.random() * 9 + 1) *
      (difficulty === 'easy' ? 10 : difficulty === 'medium' ? 50 : 100);

    switch (type) {
      case 'basic':
        answer = (percent / 100) * baseValue;
        question = `What is ${percent}% of ${baseValue}?`;
        explanation = `${percent}% of ${baseValue} = (${percent}/100) × ${baseValue} = ${answer}`;
        break;

      case 'discount': {
        const originalPrice = baseValue;
        answer = originalPrice - (percent / 100) * originalPrice;
        question = `A product costs ₹${originalPrice}. After ${percent}% discount, what's the price?`;
        explanation = `Price after ${percent}% discount = ${originalPrice} - (${percent}% of ${originalPrice}) = ₹${answer}`;
        break;
      }

      case 'increase':
        answer = baseValue + (percent / 100) * baseValue;
        question = `If ${baseValue} is increased by ${percent}%, what's the result?`;
        explanation = `${baseValue} + ${percent}% of ${baseValue} = ${baseValue} + ${(percent / 100) * baseValue} = ${answer}`;
        break;

      case 'decrease':
        answer = baseValue - (percent / 100) * baseValue;
        question = `If ${baseValue} is decreased by ${percent}%, what's the result?`;
        explanation = `${baseValue} - ${percent}% of ${baseValue} = ${baseValue} - ${(percent / 100) * baseValue} = ${answer}`;
        break;

      case 'find_percent': {
        const part = (percent / 100) * baseValue;
        answer = percent;
        question = `${part} is what percent of ${baseValue}?`;
        explanation = `(${part} / ${baseValue}) × 100 = ${percent}%`;
        break;
      }

      default:
        answer = (percent / 100) * baseValue;
        question = `What is ${percent}% of ${baseValue}?`;
        explanation = `${percent}% of ${baseValue} = ${answer}`;
    }

    // Generate wrong options
    const options = new Set<number>([answer]);
    while (options.size < 4) {
      const offset = Math.floor(Math.random() * 40) - 20;
      const wrongAnswer = answer + offset;
      if (
        wrongAnswer > 0 &&
        wrongAnswer !== answer &&
        !options.has(wrongAnswer)
      ) {
        options.add(Math.round(wrongAnswer * 100) / 100);
      }
    }

    return {
      question,
      answer: Math.round(answer * 100) / 100,
      options: Array.from(options).sort(() => Math.random() - 0.5),
      type,
      explanation,
    };
  }, [settings.percentages, difficulty]);

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
              <li>Basic percentage calculations</li>
              <li>Discount calculations</li>
              <li>Percentage increase/decrease</li>
              <li>Finding the percentage</li>
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
        <div className="rounded-xl bg-teal-50 p-3 text-center dark:bg-teal-900/20">
          <div className="text-2xl font-bold text-teal-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center">
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <Percent className="h-4 w-4" />
            Percentage Problem
          </span>
        </div>
        <div className="mb-6 text-center text-xl font-semibold">
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
                {option}
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
