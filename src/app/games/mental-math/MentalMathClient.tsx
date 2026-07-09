'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  Brain,
  ChevronRight,
  Lightbulb,
  Zap,
  CheckCircle,
  XCircle,
} from 'lucide-react';

interface Problem {
  question: string;
  answer: number;
  tip: string;
  category: string;
}

// Generate complex mental math problems with Vedic tips
const generateProblem = (difficulty: Difficulty): Problem => {
  const categories = {
    easy: ['doubling', 'halving', 'multiply10', 'add100'],
    medium: ['square', 'multiply11', 'percent', 'multiplyNear10'],
    hard: ['squareEnd5', 'multiplyNear100', 'cubes', 'percentage'],
  };

  const availableCats = categories[difficulty];
  const category =
    availableCats[Math.floor(Math.random() * availableCats.length)];

  switch (category) {
    case 'doubling': {
      const num = Math.floor(Math.random() * 50) + 10;
      return {
        question: `${num} × 2`,
        answer: num * 2,
        tip: `Double by breaking: ${num} = ${Math.floor(num / 10) * 10} + ${num % 10}. Double each part.`,
        category: 'Doubling',
      };
    }
    case 'halving': {
      const num = (Math.floor(Math.random() * 50) + 10) * 2;
      return {
        question: `${num} ÷ 2`,
        answer: num / 2,
        tip: `Halve each digit separately if even. For odd tens, borrow 10 from next digit.`,
        category: 'Halving',
      };
    }
    case 'multiply10': {
      const num = Math.floor(Math.random() * 100) + 10;
      const mult = [10, 20, 50, 100][Math.floor(Math.random() * 4)];
      return {
        question: `${num} × ${mult}`,
        answer: num * mult,
        tip: `Multiply by ${mult}: just add ${mult === 10 ? '1 zero' : mult === 100 ? '2 zeros' : `multiply by ${mult / 10} then add a zero`}.`,
        category: 'Multiply by 10s',
      };
    }
    case 'add100': {
      const a = Math.floor(Math.random() * 100) + 50;
      const b = Math.floor(Math.random() * 100) + 50;
      return {
        question: `${a} + ${b}`,
        answer: a + b,
        tip: `Round one number to the nearest 10, add, then adjust.`,
        category: 'Addition',
      };
    }
    case 'square': {
      const num = Math.floor(Math.random() * 10) + 5;
      return {
        question: `${num}²`,
        answer: num * num,
        tip: `Memorize squares up to 20. ${num}² = ${num * num}`,
        category: 'Squares',
      };
    }
    case 'multiply11': {
      const num = Math.floor(Math.random() * 80) + 11;
      return {
        question: `${num} × 11`,
        answer: num * 11,
        tip: `For × 11: Write first digit, add neighbors for middle, write last. E.g., 23 × 11: 2_(2+3)_3 = 253`,
        category: 'Multiply by 11',
      };
    }
    case 'percent': {
      const num = [20, 40, 60, 80, 100, 120, 150, 200][
        Math.floor(Math.random() * 8)
      ];
      const pct = [10, 20, 25, 50][Math.floor(Math.random() * 4)];
      return {
        question: `${pct}% of ${num}`,
        answer: (pct / 100) * num,
        tip: `${pct}% = ${pct === 10 ? '÷10' : pct === 25 ? '÷4' : pct === 50 ? '÷2' : `÷5`}. So ${num}${pct === 10 ? '÷10' : pct === 25 ? '÷4' : pct === 50 ? '÷2' : '÷5'}.`,
        category: 'Percentages',
      };
    }
    case 'multiplyNear10': {
      const a = Math.floor(Math.random() * 3) + 8; // 8, 9, or 10
      const b = Math.floor(Math.random() * 10) + 2;
      return {
        question: `${a} × ${b}`,
        answer: a * b,
        tip: `For 9×: Multiply by 10 and subtract once. For 8×: Multiply by 10 and subtract twice.`,
        category: 'Near 10 Trick',
      };
    }
    case 'squareEnd5': {
      const tens = Math.floor(Math.random() * 6) + 2; // 2-7
      const num = tens * 10 + 5;
      return {
        question: `${num}²`,
        answer: num * num,
        tip: `For numbers ending in 5: Multiply tens by (tens+1), append 25. ${tens}×${tens + 1}=${tens * (tens + 1)}, so answer is ${tens * (tens + 1)}25.`,
        category: 'Square of X5',
      };
    }
    case 'multiplyNear100': {
      const a = 90 + Math.floor(Math.random() * 10);
      const b = 90 + Math.floor(Math.random() * 10);
      return {
        question: `${a} × ${b}`,
        answer: a * b,
        tip: `For numbers near 100: Find deficits (100-a, 100-b). Answer = (a-deficit_b)*100 + (deficit_a × deficit_b).`,
        category: 'Near 100 Trick',
      };
    }
    case 'cubes': {
      const num = Math.floor(Math.random() * 5) + 2;
      return {
        question: `${num}³`,
        answer: num * num * num,
        tip: `Cubes to know: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216`,
        category: 'Cubes',
      };
    }
    default: {
      const num = Math.floor(Math.random() * 50) + 10;
      return {
        question: `${num} × 2`,
        answer: num * 2,
        tip: `Basic doubling.`,
        category: 'Doubling',
      };
    }
  }
};

const questionCounts = { easy: 10, medium: 12, hard: 15 };

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentProblem: Problem | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  userAnswer: string;
  isCorrect: boolean | null;
  showTip: boolean;
  streak: number;
  bestStreak: number;
}

export default function MentalMathClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentProblem: null,
    questionNumber: 0,
    totalQuestions: 10,
    score: 0,
    correctAnswers: 0,
    userAnswer: '',
    isCorrect: null,
    showTip: false,
    streak: 0,
    bestStreak: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = useCallback(() => {
    const problem = generateProblem(difficulty);
    setGameState({
      phase: 'playing',
      currentProblem: problem,
      questionNumber: 1,
      totalQuestions: questionCounts[difficulty],
      score: 0,
      correctAnswers: 0,
      userAnswer: '',
      isCorrect: null,
      showTip: false,
      streak: 0,
      bestStreak: 0,
    });
  }, [difficulty]);

  const handleSubmit = () => {
    if (!gameState.currentProblem || !gameState.userAnswer.trim()) return;

    const userNum = parseFloat(gameState.userAnswer);
    const isCorrect =
      Math.abs(userNum - gameState.currentProblem.answer) < 0.01;
    const points = isCorrect ? (gameState.showTip ? 8 : 15) : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      isCorrect,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextQuestion = () => {
    if (gameState.questionNumber >= gameState.totalQuestions) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      const problem = generateProblem(difficulty);
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentProblem: problem,
        questionNumber: prev.questionNumber + 1,
        userAnswer: '',
        isCorrect: null,
        showTip: false,
      }));
    }
  };

  useEffect(() => {
    if (gameState.phase === 'playing') {
      inputRef.current?.focus();
    }
  }, [gameState.phase, gameState.questionNumber]);

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
            <h3 className="mb-2 font-semibold">Mental Math Techniques:</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>Easy:</strong> Doubling, halving, multiply by 10s
              </li>
              <li>
                • <strong>Medium:</strong> Squares, ×11 trick, percentages
              </li>
              <li>
                • <strong>Hard:</strong> Square of X5, near-100 multiplication,
                cubes
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Brain className="h-5 w-5" />
            Start Mental Math
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalQuestions}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalQuestions - gameState.correctAnswers}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const problem = gameState.currentProblem!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Problem {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {problem.category}
          </span>
        </div>
      </div>

      {/* Problem Card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <p className="mb-2 text-center text-sm text-muted-foreground">
          Calculate mentally — no pen and paper!
        </p>

        {/* Problem display */}
        <div className="mb-8 text-center">
          <div className="text-5xl font-black md:text-6xl">
            {problem.question}
          </div>
        </div>

        {gameState.phase === 'playing' && (
          <>
            {/* Tip toggle */}
            {!gameState.showTip && (
              <div className="mb-4 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setGameState((prev) => ({ ...prev, showTip: true }))
                  }
                  className="gap-1 text-muted-foreground"
                >
                  <Lightbulb className="h-4 w-4" />
                  Show technique (-7 points)
                </Button>
              </div>
            )}

            {gameState.showTip && (
              <div className="mb-4 rounded-lg bg-yellow-50 p-3 text-center text-sm dark:bg-yellow-900/20">
                <Lightbulb className="mr-1 inline h-4 w-4 text-yellow-600" />
                <strong>Tip:</strong> {problem.tip}
              </div>
            )}

            {/* Answer input */}
            <div className="mx-auto flex max-w-xs gap-2">
              <Input
                ref={inputRef}
                type="number"
                placeholder="Your answer"
                value={gameState.userAnswer}
                onChange={(e) =>
                  setGameState((prev) => ({
                    ...prev,
                    userAnswer: e.target.value,
                  }))
                }
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className="text-center text-xl"
              />
              <Button
                onClick={handleSubmit}
                disabled={!gameState.userAnswer.trim()}
              >
                <Zap className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {gameState.phase === 'feedback' && (
          <div className="space-y-4">
            <div
              className={cn(
                'mx-auto max-w-md rounded-xl p-4 text-center',
                gameState.isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : 'bg-red-50 dark:bg-red-900/20',
              )}
            >
              {gameState.isCorrect ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <strong>Correct! {problem.answer}</strong>
                </div>
              ) : (
                <div className="text-red-600">
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="h-5 w-5" />
                    <strong>The answer was {problem.answer}</strong>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-center text-sm dark:bg-blue-900/20">
              <strong>Technique:</strong> {problem.tip}
            </div>

            <div className="text-center">
              <Button
                onClick={nextQuestion}
                className="gap-2"
              >
                {gameState.questionNumber >= gameState.totalQuestions
                  ? 'See Results'
                  : 'Next Problem'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset */}
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
