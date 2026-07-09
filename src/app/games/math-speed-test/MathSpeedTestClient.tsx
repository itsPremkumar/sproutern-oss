'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Clock, CheckCircle, XCircle } from 'lucide-react';

interface Problem {
  question: string;
  answer: number;
}

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  score: number;
  correct: number;
  wrong: number;
  streak: number;
  bestStreak: number;
  currentProblem: Problem | null;
  timeLeft: number;
  problemsSolved: number;
}

const difficultySettings = {
  easy: { maxNum: 20, operations: ['+', '-'], timeLimit: 60 },
  medium: { maxNum: 50, operations: ['+', '-', '×'], timeLimit: 60 },
  hard: { maxNum: 100, operations: ['+', '-', '×', '÷'], timeLimit: 60 },
};

export default function MathSpeedTestClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    score: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0,
    currentProblem: null,
    timeLeft: 60,
    problemsSolved: 0,
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const settings = difficultySettings[difficulty];

  const generateProblem = useCallback((): Problem => {
    const op =
      settings.operations[
        Math.floor(Math.random() * settings.operations.length)
      ];
    let a: number, b: number, answer: number;

    do {
      if (op === '÷') {
        b = Math.floor(Math.random() * 11) + 2;
        answer = Math.floor(Math.random() * 11) + 1;
        a = b * answer;
      } else if (op === '×') {
        a = Math.floor(Math.random() * 12) + 2;
        b = Math.floor(Math.random() * 12) + 2;
        answer = a * b;
      } else if (op === '-') {
        a = Math.floor(Math.random() * settings.maxNum) + 10;
        b = Math.floor(Math.random() * a);
        answer = a - b;
      } else {
        a = Math.floor(Math.random() * settings.maxNum) + 1;
        b = Math.floor(Math.random() * settings.maxNum) + 1;
        answer = a + b;
      }
    } while (answer < 0);

    return { question: `${a} ${op} ${b}`, answer };
  }, [settings]);

  const startGame = useCallback(() => {
    setGameState({
      phase: 'playing',
      score: 0,
      correct: 0,
      wrong: 0,
      streak: 0,
      bestStreak: 0,
      currentProblem: generateProblem(),
      timeLeft: settings.timeLimit,
      problemsSolved: 0,
    });
    setUserAnswer('');
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [generateProblem, settings.timeLimit]);

  // Timer
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    if (gameState.timeLeft <= 0) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const timer = setTimeout(() => {
      setGameState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameState.phase, gameState.timeLeft]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameState.currentProblem || userAnswer === '') return;

    const userNum = parseInt(userAnswer, 10);
    const isCorrect = userNum === gameState.currentProblem.answer;

    setFeedback(isCorrect ? 'correct' : 'wrong');
    setTimeout(() => setFeedback(null), 300);

    setGameState((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const streakBonus = isCorrect && newStreak >= 3 ? newStreak * 2 : 0;
      const basePoints = isCorrect ? 10 : 0;

      return {
        ...prev,
        score: prev.score + basePoints + streakBonus,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        wrong: isCorrect ? prev.wrong : prev.wrong + 1,
        streak: newStreak,
        bestStreak: Math.max(newStreak, prev.bestStreak),
        currentProblem: generateProblem(),
        problemsSolved: prev.problemsSolved + 1,
      };
    });

    setUserAnswer('');
    inputRef.current?.focus();
  };

  const handleNumberClick = (num: string) => {
    if (num === 'clear') {
      setUserAnswer('');
    } else if (num === 'back') {
      setUserAnswer((prev) => prev.slice(0, -1));
    } else if (num === '-') {
      if (!userAnswer.includes('-')) {
        setUserAnswer((prev) => (prev.length === 0 ? '-' : prev));
      }
    } else {
      setUserAnswer((prev) => prev + num);
    }
    inputRef.current?.focus();
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
              <li>Solve as many math problems as you can in 60 seconds</li>
              <li>Type your answer and press Enter or Submit</li>
              <li>Build streaks for bonus points!</li>
              <li>Wrong answers break your streak</li>
            </ol>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Test
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.problemsSolved}
        correctAnswers={gameState.correct}
        incorrectAnswers={gameState.wrong}
        timeTaken={settings.timeLimit}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        <div className="rounded-xl bg-red-50 p-3 text-center dark:bg-red-900/20">
          <div
            className={cn(
              'text-2xl font-bold',
              gameState.timeLeft <= 10
                ? 'animate-pulse text-red-600'
                : 'text-red-600',
            )}
          >
            <Clock className="mr-1 inline h-5 w-5" />
            {gameState.timeLeft}s
          </div>
          <div className="text-xs text-muted-foreground">Time Left</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.correct}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
        <div className="rounded-xl bg-orange-50 p-3 text-center dark:bg-orange-900/20">
          <div className="text-2xl font-bold text-orange-600">
            {gameState.streak}🔥
          </div>
          <div className="text-xs text-muted-foreground">Streak</div>
        </div>
      </div>

      <div
        className={cn(
          'rounded-2xl border bg-card p-6 transition-colors duration-200 md:p-8',
          feedback === 'correct' &&
            'border-green-500 bg-green-50 dark:bg-green-900/20',
          feedback === 'wrong' && 'border-red-500 bg-red-50 dark:bg-red-900/20',
        )}
      >
        <div className="mb-6 text-center">
          <div className="mb-4 text-5xl font-bold text-primary">
            {gameState.currentProblem?.question} = ?
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            ref={inputRef}
            type="text"
            value={userAnswer}
            onChange={(e) =>
              setUserAnswer(e.target.value.replace(/[^0-9-]/g, ''))
            }
            className="mx-auto block w-full max-w-xs rounded-lg border-2 border-primary p-4 text-center font-mono text-3xl"
            placeholder="?"
            autoFocus
          />

          {/* Number pad for mobile */}
          <div className="mx-auto grid max-w-xs grid-cols-4 gap-2">
            {[
              '1',
              '2',
              '3',
              'back',
              '4',
              '5',
              '6',
              'clear',
              '7',
              '8',
              '9',
              '-',
              '',
              '0',
              '',
              '',
            ].map((num, i) =>
              num ? (
                <Button
                  key={i}
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => handleNumberClick(num)}
                  className={cn(
                    'text-xl font-bold',
                    num === 'clear' && 'text-red-600',
                    num === 'back' && 'text-orange-600',
                  )}
                >
                  {num === 'back' ? '←' : num === 'clear' ? 'C' : num}
                </Button>
              ) : (
                <div key={i} />
              ),
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mx-auto block w-full max-w-xs gap-2"
          >
            <CheckCircle className="h-5 w-5" />
            Submit
          </Button>
        </form>
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
