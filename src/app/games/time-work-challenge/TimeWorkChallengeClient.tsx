'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Clock, ArrowRight } from 'lucide-react';

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
  easy: { rounds: 6 },
  medium: { rounds: 8 },
  hard: { rounds: 10 },
};

export default function TimeWorkChallengeClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    totalRounds: 6,
    correctAnswers: 0,
    currentProblem: null,
    selectedAnswer: null,
  });

  const settings = difficultySettings[difficulty];

  const generateProblem = useCallback((): Problem => {
    const types = [
      'single_worker',
      'combined_work',
      'find_time',
      'partial_work',
    ];
    const type = types[Math.floor(Math.random() * types.length)];

    let question: string, answer: number, explanation: string;

    switch (type) {
      case 'single_worker': {
        const days = [6, 8, 10, 12, 15, 18, 20][Math.floor(Math.random() * 7)];
        const partDays = Math.floor(days / 2) + Math.floor(Math.random() * 3);
        answer = Math.round((partDays / days) * 100) / 100;
        question = `A can complete a work in ${days} days. What fraction of work will A complete in ${partDays} days?`;
        explanation = `Work done in ${partDays} days = ${partDays}/${days} = ${answer}`;
        break;
      }

      case 'combined_work': {
        const aDays = [6, 8, 10, 12][Math.floor(Math.random() * 4)];
        const bDays = [8, 10, 12, 15][Math.floor(Math.random() * 4)];
        const combined = (aDays * bDays) / (aDays + bDays);
        answer = Math.round(combined);
        question = `A can do a work in ${aDays} days and B can do it in ${bDays} days. How many days will they take working together?`;
        explanation = `Combined rate = 1/${aDays} + 1/${bDays}. Time = ${aDays}×${bDays}/(${aDays}+${bDays}) = ${answer} days`;
        break;
      }

      case 'find_time': {
        const rate = [2, 3, 4, 5][Math.floor(Math.random() * 4)];
        const workers = [2, 3, 4][Math.floor(Math.random() * 3)];
        const totalDays = rate * 5;
        answer = totalDays / workers;
        question = `${workers} workers can complete a work in ${totalDays} days. How many days will 1 worker take?`;
        explanation = `1 worker will take ${workers} × ${totalDays} = ${answer} days`;
        break;
      }

      case 'partial_work': {
        const totalDays = [12, 15, 18, 20][Math.floor(Math.random() * 4)];
        const workedDays = Math.floor(totalDays / 3);
        const remainingFraction = (totalDays - workedDays) / totalDays;
        answer = Math.round(remainingFraction * 100) / 100;
        question = `A work takes ${totalDays} days to complete. After ${workedDays} days, what fraction of work remains?`;
        explanation = `Remaining work = (${totalDays} - ${workedDays})/${totalDays} = ${answer}`;
        break;
      }

      default:
        answer = 10;
        question = 'Default question';
        explanation = 'Default explanation';
    }

    const options = new Set<number>([answer]);
    while (options.size < 4) {
      const offset = (Math.random() - 0.5) * answer * 0.5;
      const wrong = Math.round((answer + offset) * 100) / 100;
      if (wrong > 0 && !options.has(wrong)) {
        options.add(wrong);
      }
    }

    return {
      question,
      answer,
      options: Array.from(options).sort(() => Math.random() - 0.5),
      explanation,
    };
  }, []);

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
              <li>Calculate work done by a single worker</li>
              <li>Combined work rate problems</li>
              <li>Find time to complete work</li>
              <li>Partial work calculations</li>
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
        <div className="rounded-xl bg-indigo-50 p-3 text-center dark:bg-indigo-900/20">
          <div className="text-2xl font-bold text-indigo-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center">
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Time & Work
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
