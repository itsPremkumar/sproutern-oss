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

interface OddOneLevel {
  id: number;
  items: string[];
  correctIndex: number;
  explanation: string;
}

const levels: OddOneLevel[] = [
  {
    id: 1,
    items: ['A', 'E', 'I', 'K'],
    correctIndex: 3,
    explanation: 'K is a consonant. All others are vowels.',
  },
  {
    id: 2,
    items: ['Triangle', 'Square', 'Circle', 'Rectangle'],
    correctIndex: 2,
    explanation:
      'Circle has no corners/straight lines. The others are polygons.',
  },
  {
    id: 3,
    items: ['Mercury', 'Moon', 'Venus', 'Mars'],
    correctIndex: 1,
    explanation: 'Moon is a satellite. The others are planets.',
  },
  {
    id: 4,
    items: ['27', '64', '125', '144'],
    correctIndex: 3,
    explanation:
      '144 is a perfect square (12^2). The others are perfect cubes (3^3, 4^3, 5^3).',
  },
  {
    id: 5,
    items: ['Monitor', 'Keyboard', 'Mouse', 'Printer'],
    correctIndex: 0,
    explanation:
      "Monitor is an output device. Keyboard and Mouse are input devices. Wait, Printer is also output. Let's fix. Monitor (Output), Keyboard (Input), Mouse (Input), Scanner (Input). Monitor is Output. Wait, Printer is output. Maybe: Keyboard, Mouse, Joystick, Monitor. Monitor is Output. Others are Input.",
    // Let's change items to ensure single answer.
  },
];

// Fixed Level 5
const levelsFixed: OddOneLevel[] = [
  {
    id: 1,
    items: ['A', 'E', 'I', 'K'],
    correctIndex: 3,
    explanation: 'K is a consonant. All others (A, E, I) are vowels.',
  },
  {
    id: 2,
    items: ['Triangle', 'Square', 'Circle', 'Rectangle'],
    correctIndex: 2,
    explanation:
      'Circle has no corners. The others are polygons with straight sides.',
  },
  {
    id: 3,
    items: ['Mercury', 'Moon', 'Venus', 'Mars'],
    correctIndex: 1,
    explanation: 'Moon is a natural satellite (moon). The others are planets.',
  },
  {
    id: 4,
    items: ['27', '64', '125', '144'],
    correctIndex: 3,
    explanation:
      '144 is a square number (12²). The others are perfect cubes (3³, 4³, 5³).',
  },
  {
    id: 5,
    items: ['Keyboard', 'Mouse', 'Microphone', 'Monitor'],
    correctIndex: 3,
    explanation: 'Monitor is an Output device. The others are Input devices.',
  },
];

export default function OddOneOutClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'results'>(
    'idle',
  );
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [levels] = useState(levelsFixed);

  const startGame = () => {
    setGameState('playing');
    setCurrentLevelIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (index === levels[currentLevelIndex].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextLevel = () => {
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex((prev) => prev + 1);
      setSelectedOption(null);
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
              Puzle {currentLevelIndex + 1}/{levels.length}
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
            <HelpCircle className="mx-auto mb-6 h-20 w-20 text-orange-500" />
            <h2 className="mb-4 text-3xl font-bold">Odd One Out</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Identify the item that fits differently. 5 logical categorization
              puzzles.
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Analyzing
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
            <h2 className="mb-2 text-3xl font-bold">Analysis Complete!</h2>
            <p className="mb-6 text-4xl font-black text-primary">
              {score} / {levels.length}
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <RotateCcw className="mr-2 h-5 w-5" /> Try Again
            </Button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="flex flex-col items-center">
            <div className="mb-8 grid w-full grid-cols-2 gap-4">
              {levels[currentLevelIndex].items.map((item, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect =
                  idx === levels[currentLevelIndex].correctIndex;
                const showResult = selectedOption !== null;

                let className =
                  'h-32 text-xl font-bold shadow-sm transition-all'; // Square cards
                if (showResult) {
                  // If we clicked, highlight the correct one regardless? Or just user choice?
                  // Usually show correct answer if wrong.
                  if (isCorrect)
                    className +=
                      ' border-2 border-green-500 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700';
                  else if (isSelected)
                    className +=
                      ' border-2 border-red-500 bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700';
                  else className += ' opacity-50';
                } else {
                  className +=
                    ' hover:scale-105 hover:bg-accent hover:border-primary';
                }

                return (
                  <Button
                    key={idx}
                    variant="outline"
                    className={className}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={showResult}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 w-full rounded-xl bg-muted/50 p-6 text-center"
              >
                <p className="mb-2 font-medium">Why it's the odd one out:</p>
                <p className="text-muted-foreground">
                  {levels[currentLevelIndex].explanation}
                </p>
                <Button
                  onClick={nextLevel}
                  size="lg"
                  className="mt-6 w-full"
                >
                  Next Puzzle <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Icon helper
import { Filter } from 'lucide-react';
