'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
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

// Simple shapes as SVG components or descriptions
const Circle = ({ className }: { className?: string }) => (
  <div
    className={`h-16 w-16 rounded-full border-4 border-current ${className}`}
  />
);
const Square = ({ className }: { className?: string }) => (
  <div className={`h-16 w-16 border-4 border-current ${className}`} />
);
const Triangle = ({ className }: { className?: string }) => (
  <div
    className={`h-0 w-0 border-x-[32px] border-b-[64px] border-x-transparent border-b-current ${className}`}
  />
);
// For filled shapes, we use bg-current and border-transparent or similar
const FilledCircle = ({ className }: { className?: string }) => (
  <div className={`h-16 w-16 rounded-full bg-current ${className}`} />
);

// We will use text description or simple div logic for "shapes" to avoid complex SVG management in code for now.
// Actually, let's use Lucide icons for simplicity where possible, or CSS shapes.

interface AnalogyLevel {
  id: number;
  rule: string;
  pair1: [React.ReactNode, React.ReactNode]; // A -> B
  pair2Request: React.ReactNode; // C
  options: React.ReactNode[]; // Candidates for D
  correctIndex: number;
}

const levels: AnalogyLevel[] = [
  {
    id: 1,
    rule: 'Invert Color',
    pair1: [
      <div
        key="1a"
        className="h-16 w-16 rounded-lg bg-black"
      />,
      <div
        key="1b"
        className="h-16 w-16 rounded-lg border-4 border-black"
      />,
    ],
    pair2Request: <div className="h-16 w-16 rounded-full bg-blue-500" />,
    options: [
      <div
        key="opt1"
        className="h-16 w-16 rounded-full bg-blue-500"
      />,
      <div
        key="opt2"
        className="h-16 w-16 rounded-full border-4 border-blue-500"
      />,
      <div
        key="opt3"
        className="h-16 w-16 rounded-lg border-4 border-blue-500"
      />,
      <div
        key="opt4"
        className="h-16 w-16 rounded-lg bg-blue-500"
      />,
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    rule: 'Rotate 45',
    pair1: [
      <div
        key="2a"
        className="h-12 w-2 bg-black"
      />, // Vertical line
      <div
        key="2b"
        className="h-12 w-2 rotate-45 bg-black"
      />,
    ],
    pair2Request: <div className="h-2 w-12 bg-black" />, // Horizontal line
    options: [
      <div
        key="opt1"
        className="h-2 w-12 bg-black"
      />,
      <div
        key="opt2"
        className="h-2 w-12 -rotate-45 bg-black"
      />, // or rotate 45 relative to horizontal? Horizontal + 45 = 45 degree tilt?
      // Vertical (90) -> 45 (135 or 45).
      // Let's make it simpler visual: Up Arrow -> Right Arrow (Rotate 90)
      <div
        key="opt3"
        className="h-12 w-2 bg-black"
      />,
      <div
        key="opt4"
        className="h-12 w-12 border-2 border-black"
      />,
    ],
    correctIndex: 1, // Needs manual adjustment to be essentially accurate relation logic
    // Let's refine Level 2.
  },
];

// Redefining levels for better visual clarity using CSS logic directly in render
const getLevels = (): AnalogyLevel[] => [
  {
    id: 1,
    rule: 'Shape Inversion (Filled -> Outline)',
    pair1: [
      <div
        key="1a"
        className="h-16 w-16 rounded-md bg-indigo-600"
      />,
      <div
        key="1b"
        className="h-16 w-16 rounded-md border-4 border-indigo-600"
      />,
    ],
    pair2Request: <div className="h-16 w-16 rounded-full bg-pink-500" />,
    options: [
      <div
        key="o1"
        className="h-16 w-16 rounded-full bg-pink-500"
      />,
      <div
        key="o2"
        className="h-16 w-16 rounded-md border-4 border-pink-500"
      />,
      <div
        key="o3"
        className="h-16 w-16 rounded-full border-4 border-pink-500"
      />, // Correct
      <div
        key="o4"
        className="h-16 w-16 rounded-full bg-indigo-600"
      />,
    ],
    correctIndex: 2,
  },
  {
    id: 2,
    rule: 'Rotation (90 degrees clockwise)',
    pair1: [
      <div
        key="2a"
        className="text-4xl font-black"
      >
        ↑
      </div>,
      <div
        key="2b"
        className="text-4xl font-black"
      >
        →
      </div>,
    ],
    pair2Request: <div className="text-4xl font-black">←</div>,
    options: [
      <div
        key="o1"
        className="text-4xl font-black"
      >
        ↓
      </div>, // Left -> Up (90 CW)
      <div
        key="o2"
        className="text-4xl font-black"
      >
        ↖
      </div>,
      <div
        key="o3"
        className="text-4xl font-black"
      >
        →
      </div>,
      <div
        key="o4"
        className="text-4xl font-black"
      >
        ↑
      </div>, // Left -> Up is 90 CW.
    ],
    correctIndex: 3,
  },
  {
    id: 3,
    rule: 'Number Increment (+1 dot)',
    pair1: [
      <div
        key="3a"
        className="flex gap-1"
      >
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>,
      <div
        key="3b"
        className="flex gap-1"
      >
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>,
    ],
    pair2Request: (
      <div className="flex gap-1">
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>
    ),
    options: [
      <div
        key="o1"
        className="flex gap-1"
      >
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>,
      <div
        key="o2"
        className="flex gap-1"
      >
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>,
      <div
        key="o3"
        className="flex gap-1"
      >
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>,
      <div
        key="o4"
        className="h-8 w-8 rounded-full bg-black"
      />,
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    rule: 'Shape Composition (A inside B)',
    pair1: [
      <div
        key="4a"
        className="flex gap-2"
      >
        <div className="h-8 w-8 bg-blue-500" />
        <div className="h-8 w-8 rounded-full border-4 border-red-500" />
      </div>,
      <div
        key="4b"
        className="relative flex h-16 w-16 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border-4 border-red-500" />
        <div className="h-8 w-8 bg-blue-500" />
      </div>,
    ],
    pair2Request: (
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-full bg-green-500" />
        <div className="h-8 w-8 border-4 border-yellow-500" />
      </div>
    ),
    options: [
      <div
        key="o1"
        className="relative flex h-16 w-16 items-center justify-center"
      >
        <div className="absolute inset-0 border-4 border-yellow-500" />
        <div className="h-8 w-8 rounded-full bg-green-500" />
      </div>,
      <div
        key="o2"
        className="relative flex h-16 w-16 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-green-500" />
        <div className="h-8 w-8 border-4 border-yellow-500" />
      </div>,
      <div
        key="o3"
        className="flex gap-2"
      >
        <div className="h-8 w-8 border-4 border-yellow-500" />
        <div className="h-8 w-8 rounded-full bg-green-500" />
      </div>,
      <div
        key="o4"
        className="relative flex h-16 w-16 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border-4 border-green-500" />
        <div className="h-8 w-8 bg-yellow-500" />
      </div>,
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    rule: 'Size Reduction',
    pair1: [
      <div
        key="5a"
        className="h-16 w-16 bg-purple-500"
      />,
      <div
        key="5b"
        className="h-8 w-8 bg-purple-500"
      />,
    ],
    pair2Request: <div className="h-16 w-16 rounded-full bg-orange-500" />,
    options: [
      <div
        key="o1"
        className="h-16 w-16 rounded-full bg-orange-500"
      />,
      <div
        key="o2"
        className="h-8 w-8 bg-orange-500"
      />, // Square
      <div
        key="o3"
        className="h-8 w-8 rounded-full bg-orange-500"
      />, // Small circle
      <div
        key="o4"
        className="h-4 w-4 rounded-full bg-orange-500"
      />,
    ],
    correctIndex: 2,
  },
];

export default function ReasoningMasterClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'results'>(
    'idle',
  );
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [levels] = useState(getLevels());

  const startGame = () => {
    setGameState('playing');
    setCurrentLevelIndex(0);
    setScore(0);
  };

  const handleAnswer = (index: number) => {
    const isCorrect = index === levels[currentLevelIndex].correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Auto advance after short delay or immediate?
    // Immediate for flow.
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex((prev) => prev + 1);
    } else {
      setGameState('results');
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {gameState === 'playing' && (
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>
              Problem {currentLevelIndex + 1}/{levels.length}
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
            <Trophy className="mx-auto mb-6 h-20 w-20 text-teal-500" />
            <h2 className="mb-4 text-3xl font-bold">Reasoning Master</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Solve visual analogies. "A is to B as C is to ?"
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Training
            </Button>
          </div>
        )}

        {gameState === 'results' && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <Trophy
                className={`h-12 w-12 ${score === levels.length ? 'text-yellow-500' : 'text-gray-400'}`}
              />
            </div>
            <h2 className="mb-2 text-3xl font-bold">Training Complete!</h2>
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
          <div className="flex flex-col gap-8">
            {/* The Analogy Display */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-muted/30 p-8 md:flex-row md:gap-12">
              {/* Pair 1 */}
              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border bg-card p-4 shadow-sm">
                  {levels[currentLevelIndex].pair1[0]}
                </div>
                <div className="text-2xl font-bold text-muted-foreground">
                  →
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border bg-card p-4 shadow-sm">
                  {levels[currentLevelIndex].pair1[1]}
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-16 w-px bg-border md:block" />
              <div className="h-px w-16 bg-border md:hidden" />

              {/* Pair 2 */}
              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border bg-card p-4 shadow-sm">
                  {levels[currentLevelIndex].pair2Request}
                </div>
                <div className="text-2xl font-bold text-muted-foreground">
                  →
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 p-4">
                  <HelpCircle className="h-8 w-8 text-primary/50" />
                </div>
              </div>
            </div>

            {/* Options */}
            <div>
              <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Select the Correct Answer
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {levels[currentLevelIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    className="flex h-24 items-center justify-center rounded-xl border-2 border-transparent bg-muted/50 p-2 transition-all hover:scale-105 hover:bg-muted focus:border-primary focus:outline-none"
                    onClick={() => handleAnswer(idx)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
