'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Shape components using simple emojis or divs for now
const Shapes = {
  RedCircle: () => (
    <div className="h-10 w-10 rounded-full bg-red-500 shadow-sm" />
  ),
  BlueSquare: () => (
    <div className="h-10 w-10 rounded-md bg-blue-500 shadow-sm" />
  ),
  GreenTriangle: () => (
    <div className="h-0 w-0 border-x-[20px] border-b-[40px] border-x-transparent border-b-green-500 drop-shadow-sm" />
  ),
  YellowStar: () => (
    <div className="h-10 w-10 rounded-full bg-yellow-400 shadow-sm" />
  ), // Simplified
};

interface VisualLevel {
  id: number;
  lines: React.ReactNode[]; // 3 equations
  finalLine: React.ReactNode; // The question
  answer: number;
}

// Level 1:
// O + O = 10 (O=5)
// O + [] = 9 (5+[]=9 -> []=4)
// [] + O = ? (4+5=9)
// Let's make it slightly harder.
const levels: VisualLevel[] = [
  {
    id: 1,
    lines: [
      <div
        key="l1"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">10</span>
      </div>,
      <div
        key="l2"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">9</span>
      </div>,
    ],
    finalLine: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-2xl font-bold text-primary">?</span>
      </div>
    ),
    answer: 8, // Blue=4
  },
  {
    id: 2,
    lines: [
      <div
        key="2l1"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">×</span>{' '}
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">16</span>
      </div>,
      <div
        key="2l2"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-yellow-400" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">10</span>
      </div>,
    ],
    finalLine: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-yellow-400" />{' '}
        <span className="text-xl">-</span>{' '}
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-2xl font-bold text-primary">?</span>
      </div>
    ),
    answer: 2, // Green=4, Yellow=6. 6-4=2
  },
  {
    id: 3,
    lines: [
      <div
        key="3l1"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">30</span>
      </div>,
      <div
        key="3l2"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">18</span>
      </div>,
      <div
        key="3l3"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">-</span>{' '}
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">2</span>
      </div>,
    ],
    finalLine: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">×</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-2xl font-bold text-primary">?</span>
      </div>
    ),
    answer: 22, // Red=10. 10 + 2Blue = 18 -> 2Blue=8 -> Blue=4. 4 - Green = 2 -> Green=2. 2 + 10 -- No wait BODMAS. 2 + 10*4 = 42? No wait. 2 + 10x4.
    // Wait green=2, red=10, blue=4.
    // 2 + 10 * 4 = 42.
    // Let's recheck BODMAS logic. Usually these visual puzzles trap u with BODMAS.
    // Let's set answer to 42.
    // Wait, 10 + 10 + 10 = 30. Red=10.
    // 10 + 4 + 4 = 18. Blue=4.
    // 4 - 2 = 2. Green=2.
    // 2 + 10 * 4 = 42.
  },
];
// Updating Level 3 answer to 42.

const levelsCorrected: VisualLevel[] = [
  {
    id: 1,
    lines: [
      <div
        key="l1"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">10</span>
      </div>,
      <div
        key="l2"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">9</span>
      </div>,
    ],
    finalLine: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-2xl font-bold text-primary">?</span>
      </div>
    ),
    answer: 8,
  },
  {
    id: 2,
    lines: [
      <div
        key="2l1"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">×</span>{' '}
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">16</span>
      </div>,
      <div
        key="2l2"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-yellow-400" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">10</span>
      </div>,
    ],
    finalLine: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-yellow-400" />{' '}
        <span className="text-xl">-</span>{' '}
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-2xl font-bold text-primary">?</span>
      </div>
    ),
    answer: 2,
  },
  {
    id: 3,
    lines: [
      <div
        key="3l1"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">30</span>
      </div>,
      <div
        key="3l2"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">18</span>
      </div>,
      <div
        key="3l3"
        className="flex items-center gap-2"
      >
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">-</span>{' '}
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-xl font-bold">2</span>
      </div>,
    ],
    finalLine: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-green-500" />{' '}
        <span className="text-xl">+</span>{' '}
        <div className="h-8 w-8 rounded-full bg-red-500" />{' '}
        <span className="text-xl">×</span>{' '}
        <div className="h-8 w-8 bg-blue-500" />{' '}
        <span className="text-xl">=</span>{' '}
        <span className="text-2xl font-bold text-primary">?</span>
      </div>
    ),
    answer: 42,
  },
];

export default function VisualLogicGameClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'results'>(
    'idle',
  );
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const levels = levelsCorrected;

  const startGame = () => {
    setGameState('playing');
    setCurrentLevelIndex(0);
    setScore(0);
    setUserAnswer('');
    setFeedback(null);
  };

  const handleSubmit = () => {
    const num = parseInt(userAnswer);
    if (isNaN(num)) return;

    if (num === levels[currentLevelIndex].answer) {
      setScore((prev) => prev + 1);
      setFeedback('correct');
      setTimeout(() => {
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevelIndex((prev) => prev + 1);
          setUserAnswer('');
          setFeedback(null);
        } else {
          setGameState('results');
        }
      }, 1000);
    } else {
      setFeedback('wrong');
      // Allow retry or game over? Let's allow retry for this one type, or just move on with penalty.
      // Let's just move on after delay to keep flow.
      setTimeout(() => {
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevelIndex((prev) => prev + 1);
          setUserAnswer('');
          setFeedback(null);
        } else {
          setGameState('results');
        }
      }, 1500);
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      {gameState === 'playing' && (
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>
              Puzzle {currentLevelIndex + 1}/{levels.length}
            </span>
            <span>Score: {score}</span>
          </div>
          <Progress
            value={(currentLevelIndex / levels.length) * 100}
            className="h-2"
          />
        </div>
      )}

      <div className="overflow-hidden rounded-3xl border bg-background p-8 shadow-sm">
        {gameState === 'idle' && (
          <div className="py-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/30">
                <span className="text-4xl font-bold text-lime-600">x=</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">Visual Logic</h2>
              <p className="mb-8 text-xl text-muted-foreground">
                Solve the shape equations. No letters, just logic.
              </p>
              <Button
                size="lg"
                onClick={startGame}
                className="w-full max-w-xs text-lg"
              >
                <Play className="mr-2 h-5 w-5" /> Start Calculating
              </Button>
            </motion.div>
          </div>
        )}

        {gameState === 'results' && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <Trophy
                className={`h-12 w-12 ${score === levels.length ? 'text-yellow-500' : 'text-gray-400'}`}
              />
            </div>
            <h2 className="mb-2 text-3xl font-bold">Logic Solved!</h2>
            <p className="mb-6 text-4xl font-black text-primary">
              {score} / {levels.length}
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <RotateCcw className="mr-2 h-5 w-5" /> Play Again
            </Button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="flex flex-col items-center">
            <div className="mb-8 flex w-full flex-col gap-4 rounded-xl bg-muted/30 p-6">
              {levels[currentLevelIndex].lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex justify-center"
                >
                  {line}
                </motion.div>
              ))}
              <div className="my-2 h-px bg-border" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                {levels[currentLevelIndex].finalLine}
              </motion.div>
            </div>

            <div className="flex w-full max-w-xs gap-2">
              <Input
                type="number"
                placeholder="?"
                className="text-center text-lg font-bold"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                autoFocus
              />
              <Button
                onClick={handleSubmit}
                size="lg"
              >
                Check
              </Button>
            </div>

            {/* Feedback Overlay */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-6 text-xl font-bold ${
                    feedback === 'correct' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {feedback === 'correct'
                    ? 'Correct!'
                    : `Wrong! Answer was ${levels[currentLevelIndex].answer}`}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
