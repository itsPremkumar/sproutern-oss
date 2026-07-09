'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, Check, X, Trophy, Search, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Symbols to use in the grid
const SYMBOLS = ['★', '●', '■', '▲', '♦', '♥', '♠', '♣', '♫', '☀'];
const COLORS = [
  'text-red-500',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
  'text-purple-500',
];

interface Cell {
  id: number;
  symbol: string;
  color: string;
}

export default function PatternFinderClient() {
  const [gameState, setGameState] = useState<
    'idle' | 'playing' | 'success' | 'failure'
  >('idle');
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState<Cell[]>([]);
  const [target, setTarget] = useState<Cell | null>(null);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(10);

  // Grid size depends on level
  const getGridSize = (lvl: number) => {
    if (lvl <= 2) return 9; // 3x3
    if (lvl <= 5) return 16; // 4x4
    if (lvl <= 10) return 25; // 5x5
    return 36; // 6x6
  };

  const generateLevel = () => {
    const size = getGridSize(level);
    const newGrid: Cell[] = [];

    for (let i = 0; i < size; i++) {
      newGrid.push({
        id: i,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    setGrid(newGrid);
    // Pick a random target from the grid
    setTarget(newGrid[Math.floor(Math.random() * newGrid.length)]);
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLevel(1);
    generateLevel();
    setTimeLeft(10); // Initial time
  };

  const nextLevel = () => {
    setGameState('playing');
    setLevel((prev) => prev + 1);
    setScore((prev) => prev + timeLeft * 10 + 100); // Time bonus
    generateLevel();
    setTimeLeft(Math.max(3, 10 - Math.floor(level / 2))); // Less time as levels go up
  };

  const handleCellClick = (cell: Cell) => {
    if (gameState !== 'playing' || !target) return;

    if (cell.id === target.id) {
      // Correct!
      // Briefly show success then next level
      // For simplicity, just correct animation then next level immediately or slightly delayed
      // Or win condition if max level? Let's go infinite for high score.
      nextLevel();
    } else {
      // Wrong click
      // Penalty or Game Over? Game Over makes it "Finder" pressure.
      setGameState('failure');
    }
  };

  // Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState('failure');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState]);

  // Re-generate if target is somehow missing or issue
  useEffect(() => {
    if (gameState === 'playing' && !target) {
      generateLevel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, target]);

  return (
    <div className="mx-auto max-w-xl">
      {/* Stats */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-xl font-bold">{score}</span>
          </div>
          <div className="text-sm text-muted-foreground">Level {level}</div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xl font-bold text-red-500">
          <Clock className="h-5 w-5" />
          {timeLeft}s
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border bg-background p-8 shadow-sm">
        {gameState === 'idle' && (
          <div className="py-12 text-center">
            <Search className="mx-auto mb-6 h-16 w-16 text-indigo-500" />
            <h2 className="mb-4 text-2xl font-bold">Pattern Finder</h2>
            <p className="mb-8 text-muted-foreground">
              Find the target symbol in the grid before time runs out.
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Game
            </Button>
          </div>
        )}

        {gameState === 'failure' && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <X className="h-10 w-10 text-red-500" />
            </div>
            <h2 className="mb-2 text-3xl font-bold">Game Over!</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Level Reached: {level} <br /> Score: {score}
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

        {gameState === 'playing' && target && (
          <div className="flex flex-col items-center">
            {/* Target Display */}
            <div className="mb-8 flex flex-col items-center gap-2 rounded-xl border border-dashed p-4">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Find This
              </p>
              <div className={`text-5xl ${target.color}`}>{target.symbol}</div>
            </div>

            {/* Grid */}
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${Math.sqrt(getGridSize(level))}, minmax(0, 1fr))`,
              }}
            >
              {grid.map((cell) => (
                <motion.button
                  key={`${cell.id}-${level}`} // Force re-render on level change
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-lg border bg-card text-3xl shadow-sm hover:bg-accent ${cell.color}`}
                  onClick={() => handleCellClick(cell)}
                >
                  {cell.symbol}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
