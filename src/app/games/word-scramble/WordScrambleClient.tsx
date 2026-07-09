'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
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
  BookOpen,
  Shuffle,
  ChevronRight,
  CheckCircle,
  XCircle,
  Lightbulb,
} from 'lucide-react';

interface WordData {
  word: string;
  hint: string;
  category: string;
}

// Word database with categories
const wordDatabase: Record<string, WordData[]> = {
  tech: [
    {
      word: 'ALGORITHM',
      hint: 'A step-by-step procedure for solving a problem',
      category: 'Programming',
    },
    {
      word: 'DATABASE',
      hint: 'Organized collection of structured information',
      category: 'Programming',
    },
    {
      word: 'VARIABLE',
      hint: 'A container for storing data values',
      category: 'Programming',
    },
    {
      word: 'FUNCTION',
      hint: 'A reusable block of code that performs a task',
      category: 'Programming',
    },
    {
      word: 'NETWORK',
      hint: 'Connected computers that share resources',
      category: 'Technology',
    },
    {
      word: 'PROTOCOL',
      hint: 'Rules for data transmission',
      category: 'Technology',
    },
    {
      word: 'COMPILER',
      hint: 'Converts code to machine language',
      category: 'Programming',
    },
    {
      word: 'DEBUG',
      hint: 'Finding and fixing errors in code',
      category: 'Programming',
    },
    {
      word: 'ARRAY',
      hint: 'Collection of elements stored at contiguous memory',
      category: 'Programming',
    },
    {
      word: 'OBJECT',
      hint: 'Instance of a class in OOP',
      category: 'Programming',
    },
  ],
  business: [
    {
      word: 'STRATEGY',
      hint: 'A plan of action to achieve goals',
      category: 'Business',
    },
    {
      word: 'REVENUE',
      hint: 'Income generated from business activities',
      category: 'Finance',
    },
    {
      word: 'EQUITY',
      hint: 'Ownership interest in a company',
      category: 'Finance',
    },
    {
      word: 'MARKET',
      hint: 'Place where buying and selling occurs',
      category: 'Business',
    },
    {
      word: 'BUDGET',
      hint: 'Financial plan for income and expenses',
      category: 'Finance',
    },
    { word: 'PROFIT', hint: 'Revenue minus expenses', category: 'Finance' },
    {
      word: 'INVOICE',
      hint: 'Bill requesting payment for goods/services',
      category: 'Business',
    },
    {
      word: 'AUDIT',
      hint: 'Examination of financial records',
      category: 'Finance',
    },
  ],
  general: [
    {
      word: 'KNOWLEDGE',
      hint: 'Information and understanding acquired through experience',
      category: 'General',
    },
    {
      word: 'CREATIVE',
      hint: 'Involving imagination and original ideas',
      category: 'General',
    },
    {
      word: 'ACHIEVE',
      hint: 'To successfully reach a goal',
      category: 'General',
    },
    {
      word: 'PRACTICE',
      hint: 'Repeated exercise to acquire skill',
      category: 'General',
    },
    {
      word: 'MEMORY',
      hint: 'Faculty by which information is stored',
      category: 'General',
    },
    {
      word: 'QUESTION',
      hint: 'A sentence worded to elicit information',
      category: 'General',
    },
    { word: 'SOLUTION', hint: 'Answer to a problem', category: 'General' },
    {
      word: 'CHALLENGE',
      hint: 'A demanding task or situation',
      category: 'General',
    },
  ],
};

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentWord: WordData | null;
  scrambledWord: string;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  isCorrect: boolean | null;
  showHint: boolean;
  timeLeft: number;
  streak: number;
  bestStreak: number;
  category: 'all' | 'tech' | 'business' | 'general';
}

const scrambleWord = (word: string): string => {
  const arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const scrambled = arr.join('');
  // Ensure it's actually scrambled
  return scrambled === word ? scrambleWord(word) : scrambled;
};

const diffSettings = {
  easy: { time: 45, questions: 10 },
  medium: { time: 30, questions: 12 },
  hard: { time: 20, questions: 15 },
};

export default function WordScrambleClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [category, setCategory] = useState<
    'all' | 'tech' | 'business' | 'general'
  >('all');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentWord: null,
    scrambledWord: '',
    userAnswer: '',
    questionNumber: 0,
    totalQuestions: 10,
    score: 0,
    correctAnswers: 0,
    isCorrect: null,
    showHint: false,
    timeLeft: 45,
    streak: 0,
    bestStreak: 0,
    category: 'all',
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const getWords = useCallback(() => {
    if (category === 'all') {
      return [
        ...wordDatabase.tech,
        ...wordDatabase.business,
        ...wordDatabase.general,
      ];
    }
    return wordDatabase[category];
  }, [category]);

  const getRandomWord = useCallback(() => {
    const words = getWords();
    return words[Math.floor(Math.random() * words.length)];
  }, [getWords]);

  const startGame = useCallback(() => {
    const word = getRandomWord();
    const settings = diffSettings[difficulty];
    setGameState({
      phase: 'playing',
      currentWord: word,
      scrambledWord: scrambleWord(word.word),
      userAnswer: '',
      questionNumber: 1,
      totalQuestions: settings.questions,
      score: 0,
      correctAnswers: 0,
      isCorrect: null,
      showHint: false,
      timeLeft: settings.time,
      streak: 0,
      bestStreak: 0,
      category,
    });
  }, [difficulty, category, getRandomWord]);

  const handleSubmit = () => {
    if (!gameState.currentWord || !gameState.userAnswer.trim()) return;

    const isCorrect =
      gameState.userAnswer.toUpperCase().trim() === gameState.currentWord.word;
    const timeBonus = Math.floor(
      (gameState.timeLeft / diffSettings[difficulty].time) * 5,
    );
    const points = isCorrect ? (gameState.showHint ? 5 : 10) + timeBonus : 0;

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
      const word = getRandomWord();
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentWord: word,
        scrambledWord: scrambleWord(word.word),
        userAnswer: '',
        questionNumber: prev.questionNumber + 1,
        isCorrect: null,
        showHint: false,
        timeLeft: diffSettings[difficulty].time,
      }));
    }
  };

  // Timer
  useEffect(() => {
    if (gameState.phase !== 'playing') return;

    if (gameState.timeLeft <= 0) {
      setGameState((prev) => ({
        ...prev,
        phase: 'feedback',
        isCorrect: false,
        streak: 0,
      }));
      return;
    }

    const timer = setInterval(() => {
      setGameState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.phase, gameState.timeLeft]);

  useEffect(() => {
    if (gameState.phase === 'playing') {
      inputRef.current?.focus();
    }
  }, [gameState.phase, gameState.questionNumber]);

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Game Settings</h2>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">Difficulty</label>
            <DifficultySelector
              selected={difficulty}
              onChange={setDifficulty}
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium">
              Word Category
            </label>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {(['all', 'tech', 'business', 'general'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    'rounded-lg border p-3 text-sm font-medium capitalize transition-colors',
                    category === cat
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'hover:bg-muted',
                  )}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Shuffle className="h-5 w-5" />
            Start Scramble
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

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Word {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
          <span
            className={cn(
              'rounded-lg px-3 py-1 text-sm font-bold',
              gameState.timeLeft <= 10
                ? 'animate-pulse bg-red-100 text-red-600'
                : 'bg-green-100 text-green-600',
            )}
          >
            {gameState.timeLeft}s
          </span>
        </div>
      </div>

      {/* Game Card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {gameState.phase === 'playing' && (
          <>
            <div className="mb-2 text-center text-sm text-muted-foreground">
              Category: {gameState.currentWord?.category}
            </div>

            {/* Scrambled letters */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {gameState.scrambledWord.split('').map((letter, idx) => (
                <div
                  key={idx}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl font-bold text-primary md:h-14 md:w-14"
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Hint */}
            {!gameState.showHint ? (
              <div className="mb-4 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setGameState((prev) => ({ ...prev, showHint: true }))
                  }
                  className="gap-1 text-muted-foreground"
                >
                  <Lightbulb className="h-4 w-4" />
                  Show hint (-5 points)
                </Button>
              </div>
            ) : (
              <div className="mb-4 rounded-lg bg-yellow-50 p-3 text-center text-sm dark:bg-yellow-900/20">
                <Lightbulb className="mr-1 inline h-4 w-4 text-yellow-600" />
                {gameState.currentWord?.hint}
              </div>
            )}

            {/* Input */}
            <div className="mx-auto flex max-w-md gap-2">
              <Input
                ref={inputRef}
                placeholder="Type the word..."
                value={gameState.userAnswer}
                onChange={(e) =>
                  setGameState((prev) => ({
                    ...prev,
                    userAnswer: e.target.value.toUpperCase(),
                  }))
                }
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className="text-center text-lg uppercase"
              />
              <Button
                onClick={handleSubmit}
                disabled={!gameState.userAnswer.trim()}
              >
                Check
              </Button>
            </div>
          </>
        )}

        {gameState.phase === 'feedback' && (
          <div className="space-y-4 text-center">
            <div
              className={cn(
                'rounded-xl p-4',
                gameState.isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : 'bg-red-50 dark:bg-red-900/20',
              )}
            >
              {gameState.isCorrect ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <strong>Correct!</strong>
                </div>
              ) : (
                <div className="text-red-600">
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="h-5 w-5" />
                    <strong>Incorrect</strong>
                  </div>
                  <p className="mt-1 text-sm">
                    The word was: <strong>{gameState.currentWord?.word}</strong>
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-sm">
                <strong>Meaning:</strong> {gameState.currentWord?.hint}
              </p>
            </div>

            <Button
              onClick={nextQuestion}
              className="gap-2"
            >
              {gameState.questionNumber >= gameState.totalQuestions
                ? 'See Results'
                : 'Next Word'}
              <ChevronRight className="h-4 w-4" />
            </Button>
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
