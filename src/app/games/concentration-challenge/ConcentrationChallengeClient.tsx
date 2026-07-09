'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Focus, Calculator } from 'lucide-react';

interface Distraction {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
}

interface Problem {
  question: string;
  answer: number;
  options: number[];
}

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentProblem: Problem | null;
  distractions: Distraction[];
  distractionLevel: number;
}

const distractionEmojis = [
  '🎯',
  '⭐',
  '💫',
  '🔥',
  '✨',
  '🌟',
  '💥',
  '🎪',
  '🎨',
  '🎭',
  '🎪',
  '🎡',
];

const difficultySettings = {
  easy: { rounds: 8, baseDistractions: 3, mathDifficulty: 1 },
  medium: { rounds: 10, baseDistractions: 5, mathDifficulty: 2 },
  hard: { rounds: 12, baseDistractions: 8, mathDifficulty: 3 },
};

export default function ConcentrationChallengeClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    totalRounds: 8,
    correctAnswers: 0,
    currentProblem: null,
    distractions: [],
    distractionLevel: 3,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const settings = difficultySettings[difficulty];

  const generateProblem = useCallback((mathDifficulty: number): Problem => {
    const operations = ['+', '-', '×'];
    const op =
      operations[Math.floor(Math.random() * (mathDifficulty > 1 ? 3 : 2))];

    let a: number, b: number, answer: number;

    if (mathDifficulty === 1) {
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
    } else if (mathDifficulty === 2) {
      a = Math.floor(Math.random() * 50) + 10;
      b = Math.floor(Math.random() * 30) + 5;
    } else {
      a = Math.floor(Math.random() * 100) + 20;
      b = Math.floor(Math.random() * 50) + 10;
    }

    if (op === '+') {
      answer = a + b;
    } else if (op === '-') {
      if (b > a) [a, b] = [b, a];
      answer = a - b;
    } else {
      a = Math.floor(Math.random() * 12) + 2;
      b = Math.floor(Math.random() * 12) + 2;
      answer = a * b;
    }

    const wrongAnswers = new Set<number>();
    while (wrongAnswers.size < 3) {
      const offset = Math.floor(Math.random() * 20) - 10;
      const wrong = answer + offset;
      if (wrong !== answer && wrong > 0) {
        wrongAnswers.add(wrong);
      }
    }

    const options = [answer, ...Array.from(wrongAnswers)].sort(
      () => Math.random() - 0.5,
    );

    return {
      question: `${a} ${op} ${b} = ?`,
      answer,
      options,
    };
  }, []);

  const generateDistractions = useCallback((count: number): Distraction[] => {
    const distractions: Distraction[] = [];
    for (let i = 0; i < count; i++) {
      distractions.push({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        emoji:
          distractionEmojis[
            Math.floor(Math.random() * distractionEmojis.length)
          ],
        size: Math.random() * 20 + 20,
      });
    }
    return distractions;
  }, []);

  const startGame = useCallback(() => {
    const problem = generateProblem(settings.mathDifficulty);
    const distractions = generateDistractions(settings.baseDistractions);

    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: settings.rounds,
      correctAnswers: 0,
      currentProblem: problem,
      distractions,
      distractionLevel: settings.baseDistractions,
    });
  }, [settings, generateProblem, generateDistractions]);

  // Animate distractions
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    const interval = setInterval(() => {
      setGameState((prev) => ({
        ...prev,
        distractions: prev.distractions.map((d) => ({
          ...d,
          x: Math.max(5, Math.min(85, d.x + (Math.random() - 0.5) * 15)),
          y: Math.max(5, Math.min(85, d.y + (Math.random() - 0.5) * 15)),
        })),
      }));
    }, 500);

    return () => clearInterval(interval);
  }, [gameState.phase]);

  const handleAnswer = (selectedAnswer: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentProblem) return;

    const isCorrect = selectedAnswer === gameState.currentProblem.answer;
    const scoreBonus = isCorrect ? 15 + gameState.distractionLevel : 0;

    setGameState((prev) => {
      const newRound = prev.round + 1;
      const isLastRound = newRound > prev.totalRounds;
      const newDistractionLevel = Math.min(prev.distractionLevel + 1, 15);

      if (isLastRound) {
        return {
          ...prev,
          phase: 'result',
          score: prev.score + scoreBonus,
          correctAnswers: isCorrect
            ? prev.correctAnswers + 1
            : prev.correctAnswers,
        };
      }

      return {
        ...prev,
        round: newRound,
        score: prev.score + scoreBonus,
        correctAnswers: isCorrect
          ? prev.correctAnswers + 1
          : prev.correctAnswers,
        currentProblem: generateProblem(settings.mathDifficulty),
        distractions: generateDistractions(newDistractionLevel),
        distractionLevel: newDistractionLevel,
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
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Solve math problems while ignoring moving distractions</li>
              <li>Click the correct answer from the options</li>
              <li>Distractions increase with each correct answer</li>
              <li>Stay focused to maximize your score!</li>
            </ol>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Challenge
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
        <div className="rounded-xl bg-pink-50 p-3 text-center dark:bg-pink-900/20">
          <div className="text-2xl font-bold text-pink-600">
            {gameState.distractionLevel}
          </div>
          <div className="text-xs text-muted-foreground">Distractions</div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl border bg-card"
        style={{ height: 400 }}
      >
        {/* Distractions */}
        {gameState.distractions.map((d) => (
          <div
            key={d.id}
            className="pointer-events-none absolute select-none opacity-60 transition-all duration-500"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              fontSize: `${d.size}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {d.emoji}
          </div>
        ))}

        {/* Problem area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="rounded-2xl border-2 border-primary/20 bg-background/95 p-8 shadow-xl backdrop-blur">
            <div className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
              <Calculator className="h-4 w-4" />
              Solve the problem
            </div>
            <div className="mb-6 text-center text-4xl font-bold text-primary">
              {gameState.currentProblem?.question}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gameState.currentProblem?.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => handleAnswer(option)}
                  className="h-14 text-xl font-bold"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>
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
