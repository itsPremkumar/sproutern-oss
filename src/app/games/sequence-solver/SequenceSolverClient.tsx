'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Using input for typed answers? Or Multiple Choice? Multiple choice is better for mobile/ux.
import { Progress } from '@/components/ui/progress';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
  Lightbulb,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SequenceLevel {
  id: number;
  sequence: string[]; // Displayed items
  options: string[];
  correctIndex: number;
  rule: string;
}

const levels: SequenceLevel[] = [
  {
    id: 1,
    sequence: ['A', 'C', 'E', 'G', '?'],
    options: ['H', 'I', 'J', 'K'],
    correctIndex: 1, // I
    rule: 'Skip 1 letter (A+2=C, C+2=E...)',
  },
  {
    id: 2,
    sequence: ['Z', 'X', 'V', 'T', '?'],
    options: ['S', 'R', 'Q', 'P'],
    correctIndex: 1, // R
    rule: 'Go back 2 letters (Z-2=X...)',
  },
  {
    id: 3,
    sequence: ['A1', 'B2', 'C3', 'D4', '?'],
    options: ['E5', 'E4', 'F5', 'D5'],
    correctIndex: 0, // E5
    rule: 'Letter +1, Number +1',
  },
  {
    id: 4,
    sequence: ['2', '6', '12', '20', '?'],
    options: ['28', '30', '32', '26'],
    correctIndex: 1, // 30
    rule: 'Add consecutive even numbers (+4, +6, +8, +10)',
  },
  {
    id: 5,
    sequence: ['J', 'F', 'M', 'A', 'M', 'J', '?'], // Jan Feb Mar Apr May Jun
    options: ['J', 'A', 'S', 'O'],
    correctIndex: 0, // J (July)
    rule: 'First letter of months logic',
  },
];

export default function SequenceSolverClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'results'>(
    'idle',
  );
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  const startGame = () => {
    setGameState('playing');
    setCurrentLevelIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowHint(false);
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
      setShowHint(false);
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
              Sequence {currentLevelIndex + 1}/{levels.length}
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
            <ListOrdered className="mx-auto mb-6 h-20 w-20 text-cyan-500" />{' '}
            {/* Cannot use ListOrdered directly if not imported locally component. Oh wait, lucide Icons are React components. */}
            <h2 className="mb-4 text-3xl font-bold">Sequence Solver</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Crack the code. Solve 5 unique sequence puzzles.
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Solving
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
            <h2 className="mb-2 text-3xl font-bold">Sequence Complete!</h2>
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
            <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
              {levels[currentLevelIndex].sequence.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-2xl font-bold ${item === '?' ? 'border-dashed border-primary bg-primary/5 text-primary' : 'border-muted bg-muted/30'}`}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
              {levels[currentLevelIndex].options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect =
                  idx === levels[currentLevelIndex].correctIndex;
                const showResult = selectedOption !== null;

                let className = 'h-20 text-2xl font-bold';
                if (showResult) {
                  if (isCorrect)
                    className +=
                      ' border-green-500 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700';
                  else if (isSelected)
                    className +=
                      ' border-red-500 bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700';
                  else className += ' opacity-50';
                }

                return (
                  <Button
                    key={idx}
                    variant="outline"
                    className={className}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={showResult}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 w-full rounded-xl bg-muted/50 p-6 text-center"
              >
                <p className="mb-2 font-medium">
                  Rule: {levels[currentLevelIndex].rule}
                </p>
                <Button
                  onClick={nextLevel}
                  size="lg"
                  className="mt-4 w-full"
                >
                  Next Sequence <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Helper component for Icon (since I can't import local components easily without errors if they're not client-side wrapped or similar if I mess up dynamics)
// wait, I can just import ListOrdered from lucide-react. I did that in page.tsx but need it here.
import { ListOrdered } from 'lucide-react';
