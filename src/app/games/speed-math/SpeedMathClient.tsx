'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
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
  Calculator,
  Zap,
  Timer,
  CheckCircle,
  XCircle,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useGameSounds } from '@/hooks/useGameSounds';

interface Problem {
  question: string;
  answer: number;
  operation: string;
}

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  currentProblem: Problem | null;
  problemNumber: number;
  totalProblems: number;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  userAnswer: string;
  timeLeft: number;
  timePerProblem: number;
  streak: number;
  bestStreak: number;
  lastAnswerCorrect: boolean | null;
}

const settings = {
  easy: {
    timePerProblem: 15,
    totalProblems: 15,
    maxNum: 20,
    operations: ['+', '-'],
  },
  medium: {
    timePerProblem: 12,
    totalProblems: 20,
    maxNum: 50,
    operations: ['+', '-', '×'],
  },
  hard: {
    timePerProblem: 10,
    totalProblems: 25,
    maxNum: 100,
    operations: ['+', '-', '×', '÷'],
  },
};

const generateProblem = (difficulty: Difficulty): Problem => {
  const config = settings[difficulty];
  const operation =
    config.operations[Math.floor(Math.random() * config.operations.length)];

  let a: number, b: number, answer: number, question: string;

  switch (operation) {
    case '+':
      a = Math.floor(Math.random() * config.maxNum) + 1;
      b = Math.floor(Math.random() * config.maxNum) + 1;
      answer = a + b;
      question = `${a} + ${b}`;
      break;
    case '-':
      a = Math.floor(Math.random() * config.maxNum) + 10;
      b = Math.floor(Math.random() * Math.min(a, config.maxNum)) + 1;
      answer = a - b;
      question = `${a} - ${b}`;
      break;
    case '×':
      a = Math.floor(Math.random() * 12) + 2;
      b = Math.floor(Math.random() * 12) + 2;
      answer = a * b;
      question = `${a} × ${b}`;
      break;
    case '÷':
      b = Math.floor(Math.random() * 10) + 2;
      answer = Math.floor(Math.random() * 10) + 1;
      a = b * answer;
      question = `${a} ÷ ${b}`;
      break;
    default:
      a = 1;
      b = 1;
      answer = 2;
      question = '1 + 1';
  }

  return { question, answer, operation };
};

export default function SpeedMathClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentProblem: null,
    problemNumber: 0,
    totalProblems: 15,
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    userAnswer: '',
    timeLeft: 15,
    timePerProblem: 15,
    streak: 0,
    bestStreak: 0,
    lastAnswerCorrect: null,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const {
    playCorrect,
    playWrong,
    playComplete,
    playCountdown,
    toggleSound,
    isEnabled: soundEnabled,
  } = useGameSounds();
  const config = settings[difficulty];

  const startGame = useCallback(() => {
    const problem = generateProblem(difficulty);
    setGameState({
      phase: 'playing',
      currentProblem: problem,
      problemNumber: 1,
      totalProblems: config.totalProblems,
      score: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      userAnswer: '',
      timeLeft: config.timePerProblem,
      timePerProblem: config.timePerProblem,
      streak: 0,
      bestStreak: 0,
      lastAnswerCorrect: null,
    });
  }, [difficulty, config]);

  const nextProblem = useCallback(
    (wasCorrect: boolean) => {
      setGameState((prev) => {
        if (prev.problemNumber >= prev.totalProblems) {
          return { ...prev, phase: 'result' };
        }

        const problem = generateProblem(difficulty);
        return {
          ...prev,
          currentProblem: problem,
          problemNumber: prev.problemNumber + 1,
          userAnswer: '',
          timeLeft: prev.timePerProblem,
          lastAnswerCorrect: null,
        };
      });

      setTimeout(() => inputRef.current?.focus(), 50);
    },
    [difficulty],
  );

  const handleSubmit = useCallback(() => {
    if (!gameState.currentProblem || !gameState.userAnswer.trim()) return;

    const userNum = parseInt(gameState.userAnswer, 10);
    const isCorrect = userNum === gameState.currentProblem.answer;

    // Calculate time bonus
    const timeBonus = Math.floor(
      (gameState.timeLeft / gameState.timePerProblem) * 5,
    );
    const points = isCorrect ? 10 + timeBonus : 0;

    // Play sound based on answer
    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }

    setGameState((prev) => ({
      ...prev,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      incorrectAnswers: isCorrect
        ? prev.incorrectAnswers
        : prev.incorrectAnswers + 1,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
      lastAnswerCorrect: isCorrect,
    }));

    setTimeout(() => nextProblem(isCorrect), 500);
  }, [gameState, nextProblem, playCorrect, playWrong]);

  // Timer countdown
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    if (gameState.timeLeft <= 0) {
      setGameState((prev) => ({
        ...prev,
        incorrectAnswers: prev.incorrectAnswers + 1,
        streak: 0,
        lastAnswerCorrect: false,
      }));
      setTimeout(() => nextProblem(false), 500);
      return;
    }

    const timer = setInterval(() => {
      setGameState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.phase, gameState.timeLeft, nextProblem]);

  // Auto-focus input
  useEffect(() => {
    if (gameState.phase === 'playing') {
      inputRef.current?.focus();
    }
  }, [gameState.phase]);

  const getTimerColor = () => {
    const percentage = (gameState.timeLeft / gameState.timePerProblem) * 100;
    if (percentage <= 20) return 'text-red-600 bg-red-100 dark:bg-red-900/30';
    if (percentage <= 50)
      return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
    return 'text-green-600 bg-green-100 dark:bg-green-900/30';
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

          <div className="mb-8 grid gap-3 text-sm">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <strong>Easy:</strong> {settings.easy.totalProblems} problems •{' '}
              {settings.easy.timePerProblem}s each • Addition & Subtraction
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <strong>Medium:</strong> {settings.medium.totalProblems} problems
              • {settings.medium.timePerProblem}s each • + Multiplication
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <strong>Hard:</strong> {settings.hard.totalProblems} problems •{' '}
              {settings.hard.timePerProblem}s each • All operations
            </div>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Zap className="h-5 w-5" />
            Start Speed Challenge
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    const avgTime =
      gameState.correctAnswers > 0
        ? Math.round(
            (gameState.totalProblems * gameState.timePerProblem -
              gameState.timeLeft) /
              gameState.totalProblems,
          )
        : gameState.timePerProblem;

    // Play completion sound
    playComplete();

    return (
      <div className="space-y-6">
        <ScoreBoard
          score={gameState.score}
          totalQuestions={gameState.totalProblems}
          correctAnswers={gameState.correctAnswers}
          incorrectAnswers={gameState.incorrectAnswers}
          streak={gameState.streak}
          bestStreak={gameState.bestStreak}
          onPlayAgain={() =>
            setGameState((prev) => ({ ...prev, phase: 'setup' }))
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Problem {gameState.problemNumber} of {gameState.totalProblems}
          </span>
          <span>
            Score: {gameState.score} 🔥{gameState.streak}
          </span>
        </div>
        <div className="h-2 rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${(gameState.problemNumber / gameState.totalProblems) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Problem card */}
      <div className="rounded-2xl border bg-card p-8 md:p-12">
        {/* Timer */}
        <div className="mb-6 flex justify-center">
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl px-6 py-3 text-2xl font-bold',
              getTimerColor(),
            )}
          >
            <Timer className="h-6 w-6" />
            {gameState.timeLeft}s
          </div>
        </div>

        {/* Feedback indicator */}
        {gameState.lastAnswerCorrect !== null && (
          <div
            className={cn(
              'mb-4 flex justify-center',
              gameState.lastAnswerCorrect ? 'text-green-600' : 'text-red-600',
            )}
          >
            {gameState.lastAnswerCorrect ? (
              <CheckCircle className="h-8 w-8 animate-pulse" />
            ) : (
              <XCircle className="h-8 w-8 animate-pulse" />
            )}
          </div>
        )}

        {/* Problem */}
        <div className="mb-8 text-center">
          <div className="text-5xl font-black md:text-6xl">
            {gameState.currentProblem?.question} = ?
          </div>
        </div>

        {/* Answer input */}
        <div className="mx-auto flex max-w-sm gap-3">
          <Input
            ref={inputRef}
            type="number"
            placeholder="Answer"
            value={gameState.userAnswer}
            onChange={(e) =>
              setGameState((prev) => ({ ...prev, userAnswer: e.target.value }))
            }
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className="text-center text-2xl"
          />
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={!gameState.userAnswer.trim()}
          >
            <Zap className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Reset */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Restart
        </Button>
      </div>
    </div>
  );
}
