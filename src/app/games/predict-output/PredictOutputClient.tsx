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
  Code2,
  ChevronRight,
  Terminal,
  CheckCircle,
  XCircle,
} from 'lucide-react';

interface CodeSnippet {
  language: 'javascript' | 'python' | 'java' | 'cpp';
  code: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

const snippets: CodeSnippet[] = [
  // Javascript - Easy
  {
    language: 'javascript',
    code: `let x = 5;
let y = '5';
console.log(x == y);
console.log(x === y);`,
    question: 'What will be logged to the console?',
    options: ['true, true', 'true, false', 'false, true', 'false, false'],
    correctAnswer: 'true, false',
    explanation:
      '== checks value (type coercion allowed), so 5 == "5" is true. === checks value AND type, so 5 === "5" is false.',
    topic: 'Type Coercion',
  },
  {
    language: 'javascript',
    code: `const arr = [1, 2, 3];
arr.push(4);
arr[1] = 10;
console.log(arr.length);`,
    question: 'What is the length of the array?',
    options: ['3', '4', '5', 'Error'],
    correctAnswer: '4',
    explanation:
      'push adds an element, making length 4. Changing an existing index value does not change the length.',
    topic: 'Arrays',
  },

  // Python - Easy
  {
    language: 'python',
    code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
    question: 'What is the output?',
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', 'Error', 'None'],
    correctAnswer: '[1, 2, 3, 4]',
    explanation:
      'In Python, lists are mutable. y = x assigns a reference, not a copy. Modifying y also modifies x.',
    topic: 'References',
  },

  // Java - Medium
  {
    language: 'java',
    code: `public class Main {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = new String("Hello");
        System.out.println(s1 == s2);
    }
}`,
    question: 'What is the output?',
    options: ['true', 'false', 'Hello', 'Error'],
    correctAnswer: 'false',
    explanation:
      's1 refers to the string pool constant. s2 is a new object in heap memory. == compares references, which are different. .equals() would be true.',
    topic: 'String Pool',
  },

  // C++ - Medium
  {
    language: 'cpp',
    code: `int x = 5;
int y = x++;
cout << x << " " << y;`,
    question: 'What is printed?',
    options: ['5 5', '6 5', '6 6', '5 6'],
    correctAnswer: '6 5',
    explanation:
      'Post-increment (x++) returns the current value (5) to y, then increments x to 6.',
    topic: 'Increment Operators',
  },

  // Javascript - Hard (Async)
  {
    language: 'javascript',
    code: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');`,
    question: 'What is the order of execution?',
    options: ['1, 2, 3, 4', '1, 4, 3, 2', '1, 4, 2, 3', '1, 3, 4, 2'],
    correctAnswer: '1, 4, 3, 2',
    explanation:
      'Synchronous code (1, 4) runs first. Microtasks (Promise - 3) run before Macrotasks (setTimeout - 2).',
    topic: 'Event Loop',
  },

  // Python - Hard
  {
    language: 'python',
    code: `def func(a, b=[]):
    b.append(a)
    return b

print(func(1))
print(func(2))`,
    question: 'What is printed?',
    options: ['[1] then [2]', '[1] then [1, 2]', '[1] then [1]', 'Error'],
    correctAnswer: '[1] then [1, 2]',
    explanation:
      'Default mutable arguments (b=[]) are evaluated only once directly at function definition meant, not at call time. The list persists across calls.',
    topic: 'Default Arguments',
  },
];

const diffSettings = {
  easy: { points: 10, time: 45 },
  medium: { points: 20, time: 60 },
  hard: { points: 30, time: 90 },
};

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentSnippet: CodeSnippet | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  explanation: string | null;
  streak: number;
  bestStreak: number;
  usedIndices: number[];
}

export default function PredictOutputClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentSnippet: null,
    questionNumber: 0,
    totalQuestions: 5,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    isCorrect: null,
    explanation: null,
    streak: 0,
    bestStreak: 0,
    usedIndices: [],
  });

  const getFilteredSnippets = useCallback(() => {
    // In a real app, snippets would be tagged by difficulty.
    // Here we'll just slice for demo purposes or random pick.
    // For now, let's just pick randomly from all available
    return snippets;
  }, []);

  const startGame = useCallback(() => {
    const allSnippets = getFilteredSnippets();
    const idx = Math.floor(Math.random() * allSnippets.length);
    const snippet = allSnippets[idx];

    setGameState({
      phase: 'playing',
      currentSnippet: snippet,
      questionNumber: 1,
      totalQuestions: 5,
      score: 0,
      correctAnswers: 0,
      selectedAnswer: null,
      isCorrect: null,
      explanation: null,
      streak: 0,
      bestStreak: 0,
      usedIndices: [idx],
    });
  }, [getFilteredSnippets]);

  const handleAnswer = (answer: string) => {
    if (!gameState.currentSnippet) return;

    const isCorrect = answer === gameState.currentSnippet.correctAnswer;
    const points = isCorrect ? diffSettings[difficulty].points : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      isCorrect,
      explanation: prev.currentSnippet!.explanation,
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
      const allSnippets = getFilteredSnippets();
      let nextIdx;
      let available = allSnippets
        .map((_, i) => i)
        .filter((i) => !gameState.usedIndices.includes(i));

      if (available.length === 0) {
        // Reset if we ran out
        available = allSnippets.map((_, i) => i);
        nextIdx = Math.floor(Math.random() * available.length);
        // In a real scenario we might stop or recycle better
      } else {
        nextIdx = available[Math.floor(Math.random() * available.length)];
      }

      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentSnippet: allSnippets[nextIdx],
        questionNumber: prev.questionNumber + 1,
        selectedAnswer: null,
        isCorrect: null,
        explanation: null,
        usedIndices: [...prev.usedIndices, nextIdx],
      }));
    }
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
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Read the code snippet carefully</li>
              <li>• Predict the exact output or return value</li>
              <li>• Watch out for tricky syntax and edge cases!</li>
              <li>• Covers JS, Python, Java, and C++ logic</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Terminal className="h-5 w-5" />
            Start Coding Challenge
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

  const snippet = gameState.currentSnippet!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Question {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium capitalize text-primary">
            {snippet.language}
          </span>
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Code Card */}
      <div className="overflow-hidden rounded-2xl border bg-card">
        {/* Code Header */}
        <div className="flex items-center gap-2 border-b bg-muted/30 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            main.
            {snippet.language === 'cpp'
              ? 'cpp'
              : snippet.language === 'python'
                ? 'py'
                : 'js'}
          </span>
        </div>

        {/* Code Block */}
        <div className="overflow-x-auto bg-[#1e1e1e] p-6 text-sm text-gray-300">
          <pre className="font-mono leading-relaxed">
            <code>{snippet.code}</code>
          </pre>
        </div>

        {/* Question Area */}
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-lg font-medium">{snippet.question}</h3>

          {gameState.phase === 'playing' && (
            <div className="grid gap-3 md:grid-cols-2">
              {snippet.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="rounded-xl border-2 border-border bg-card p-4 text-left font-mono text-sm transition-all hover:border-primary hover:bg-primary/5"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {gameState.phase === 'feedback' && (
            <div className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                {snippet.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      'rounded-xl border-2 p-4 text-left font-mono text-sm',
                      option === snippet.correctAnswer &&
                        'border-green-500 bg-green-50 dark:bg-green-900/20',
                      option === gameState.selectedAnswer &&
                        option !== snippet.correctAnswer &&
                        'border-red-500 bg-red-50 dark:bg-red-900/20',
                      option !== snippet.correctAnswer &&
                        option !== gameState.selectedAnswer &&
                        'border-border opacity-50',
                    )}
                  >
                    {option}
                    {option === snippet.correctAnswer && ' ✓'}
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
                <div className="mb-1 flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-400">
                  Explanation
                </div>
                <p className="text-sm">{gameState.explanation}</p>
              </div>

              <div className="text-center">
                <Button
                  onClick={nextQuestion}
                  className="gap-2"
                >
                  {gameState.questionNumber >= gameState.totalQuestions
                    ? 'See Results'
                    : 'Next Snippet'}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
