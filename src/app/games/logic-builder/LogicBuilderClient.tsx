'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Logic Gate Types
type GateType = 'AND' | 'OR' | 'NOT' | 'XOR' | 'NAND';

interface Level {
  id: number;
  inputs: number[];
  layout: 'single_gate' | 'cascade_2'; // Simplified layout types
  targetOutput: number;
  description: string;
  correctGate: GateType; // For single gate levels, the gate that solves it
}

// Simple logic engine
const evaluateGate = (type: GateType, inputs: number[]): number => {
  const [a, b] = inputs;
  switch (type) {
    case 'AND':
      return a && b ? 1 : 0;
    case 'OR':
      return a || b ? 1 : 0;
    case 'NOT':
      return a ? 0 : 1;
    case 'XOR':
      return a !== b ? 1 : 0;
    case 'NAND':
      return !(a && b) ? 1 : 0;
    default:
      return 0;
  }
};

const levels: Level[] = [
  {
    id: 1,
    inputs: [1, 1],
    layout: 'single_gate',
    targetOutput: 1,
    description: 'Find the gate that outputs 1 when both inputs are 1',
    correctGate: 'AND',
  },
  {
    id: 2,
    inputs: [1, 0],
    layout: 'single_gate',
    targetOutput: 1,
    description: 'Find the gate that outputs 1 even if one input is 0',
    correctGate: 'OR',
  },
  {
    id: 3,
    inputs: [0, 0], // Inverter case usually 1 input, but for simplicity handled by input[0]
    layout: 'single_gate',
    targetOutput: 1,
    description: 'Invert the signal. Input is 0.',
    correctGate: 'NOT',
  },
  {
    id: 4,
    inputs: [1, 1],
    layout: 'single_gate',
    targetOutput: 0,
    description: 'Which gate outputs 0 when inputs are identical 1s?',
    correctGate: 'XOR',
  },
  {
    id: 5,
    inputs: [0, 1],
    layout: 'single_gate',
    targetOutput: 1,
    description: 'Inputs are different. Make the output 1.',
    correctGate: 'OR', // XOR also valid, but checking single answer? We can handle multi-validity.
  },
];

// Extended validation to allow multiple correct answers if logic holds
const isValidSolution = (gate: GateType, level: Level): boolean => {
  // Special handling for NOT gate taking only first input
  const result = evaluateGate(gate, level.inputs);
  return result === level.targetOutput;
};

export default function LogicBuilderClient() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [selectedGate, setSelectedGate] = useState<GateType | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'success' | 'failure'>(
    'playing',
  );
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const currentLevel = levels[currentLevelIndex];
  const isLastLevel = currentLevelIndex === levels.length - 1;

  const handleCheck = () => {
    if (!selectedGate) return;

    const isCorrect = isValidSolution(selectedGate, currentLevel);

    if (isCorrect) {
      setGameState('success');
      setScore((prev) => prev + 100);
      setShowConfetti(true);
    } else {
      setGameState('failure');
    }
  };

  const handleNextLevel = () => {
    if (isLastLevel) {
      // Game Over / Complete Screen could be shown here
      // Reset for loop for now
      setCurrentLevelIndex(0);
      setScore(0);
    } else {
      setCurrentLevelIndex((prev) => prev + 1);
    }
    setGameState('playing');
    setSelectedGate(null);
    setShowConfetti(false);
  };

  const handleRetry = () => {
    setGameState('playing');
    setSelectedGate(null);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header / Stats */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-muted-foreground">Level</div>
          <div className="text-2xl font-bold">
            {currentLevelIndex + 1}/{levels.length}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-muted-foreground">Score</div>
          <div className="text-2xl font-bold text-primary">{score}</div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative min-h-[400px] overflow-hidden rounded-2xl border bg-background p-8 shadow-sm">
        {/* Level Instruction */}
        <div className="mb-12 text-center">
          <h3 className="text-lg font-medium md:text-xl">
            {currentLevel.description}
          </h3>
          <div className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">
              Target Output: {currentLevel.targetOutput}
            </span>
          </div>
        </div>

        {/* Circuit Viz */}
        <div className="mb-12 flex items-center justify-center gap-4 md:gap-8">
          {/* Inputs */}
          <div className="flex flex-col gap-8">
            {currentLevel.inputs.map(
              (input, idx) =>
                // Hide second input for NOT gate if we want strictly unary visual
                currentLevel.inputs.length > 0 && (
                  <div
                    key={idx}
                    className="flex items-center gap-2"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 font-mono text-xl font-bold ${input === 1 ? 'border-green-500 bg-green-100 text-green-700' : 'border-gray-300 bg-gray-100 text-gray-500'}`}
                    >
                      {input}
                    </div>
                    {/* Wire */}
                    <div
                      className={`h-1 w-8 ${input === 1 ? 'bg-green-500' : 'bg-gray-300'}`}
                    />
                  </div>
                ),
            )}
          </div>

          {/* The Mystery Gate Slot */}
          <div className="relative z-10">
            <div
              className={`flex h-24 w-24 items-center justify-center rounded-xl border-4 border-dashed bg-muted/30 p-2 shadow-inner transition-colors ${
                gameState === 'success'
                  ? 'border-green-500 bg-green-50'
                  : gameState === 'failure'
                    ? 'border-red-500 bg-red-50'
                    : selectedGate
                      ? 'border-primary bg-primary/5'
                      : 'border-muted-foreground/30'
              }`}
            >
              {selectedGate ? (
                <span className="text-xl font-black tracking-wider text-primary">
                  {selectedGate}
                </span>
              ) : (
                <HelpCircle className="h-10 w-10 text-muted-foreground/40" />
              )}
            </div>
          </div>

          {/* Output */}
          <div className="flex items-center gap-2">
            {/* Wire */}
            <div
              className={`h-1 w-8 ${
                gameState === 'success'
                  ? 'bg-green-500'
                  : gameState === 'failure'
                    ? 'bg-red-500'
                    : 'bg-gray-300'
              }`}
            />

            {/* Bulb/Result */}
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all ${
                gameState === 'success'
                  ? 'border-green-500 bg-green-400 shadow-[0_0_30px_rgba(74,222,128,0.6)]'
                  : gameState === 'failure'
                    ? 'border-red-500 bg-red-100'
                    : 'border-gray-300 bg-gray-100'
              }`}
            >
              <Lightbulb
                className={`h-8 w-8 ${
                  gameState === 'success'
                    ? 'fill-white text-white'
                    : 'text-gray-400'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Controls - Gate Selection */}
        <div className="grid grid-cols-3 gap-3 md:flex md:justify-center">
          {(['AND', 'OR', 'NOT', 'XOR', 'NAND'] as GateType[]).map((gate) => (
            <Button
              key={gate}
              variant={selectedGate === gate ? 'default' : 'outline'}
              className="h-14 min-w-[80px] text-lg font-bold"
              onClick={() => {
                if (gameState !== 'playing') return;
                setSelectedGate(gate);
              }}
              disabled={gameState !== 'playing'}
            >
              {gate}
            </Button>
          ))}
        </div>

        {/* Check / Next Actions */}
        <div className="mt-12 flex justify-center">
          {gameState === 'playing' ? (
            <Button
              size="lg"
              className="w-full max-w-xs text-lg"
              onClick={handleCheck}
              disabled={!selectedGate}
            >
              Check Circuit
            </Button>
          ) : (
            <div className="flex w-full max-w-xs flex-col gap-3">
              {gameState === 'success' ? (
                <Button
                  size="lg"
                  className="w-full bg-green-600 text-lg hover:bg-green-700"
                  onClick={handleNextLevel}
                >
                  {isLastLevel ? 'Complete Game' : 'Next Level'}{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="destructive"
                  className="w-full text-lg"
                  onClick={handleRetry}
                >
                  <RotateCcw className="mr-2 h-5 w-5" /> Try Again
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Feedback Message */}
        <AnimatePresence>
          {gameState !== 'playing' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`absolute bottom-6 left-0 right-0 text-center font-bold ${
                gameState === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {gameState === 'success'
                ? 'Correct! Circuit Powered.'
                : 'Short Circuit! Try a different gate.'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
