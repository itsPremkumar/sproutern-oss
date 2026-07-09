'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Play,
  RotateCcw,
  Trophy,
  Keyboard,
  Command,
  Zap,
  Check,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Shortcut Database
const SHORTCUTS = {
  beginner: [
    { name: 'Copy', keys: ['Control', 'c'], display: 'Ctrl + C' },
    { name: 'Paste', keys: ['Control', 'v'], display: 'Ctrl + V' },
    { name: 'Cut', keys: ['Control', 'x'], display: 'Ctrl + X' },
    { name: 'Save', keys: ['Control', 's'], display: 'Ctrl + S' },
    { name: 'Undo', keys: ['Control', 'z'], display: 'Ctrl + Z' },
    { name: 'Redo', keys: ['Control', 'y'], display: 'Ctrl + Y' },
    { name: 'Select All', keys: ['Control', 'a'], display: 'Ctrl + A' },
    { name: 'Bold', keys: ['Control', 'b'], display: 'Ctrl + B' },
    { name: 'Italic', keys: ['Control', 'i'], display: 'Ctrl + I' },
    { name: 'Underline', keys: ['Control', 'u'], display: 'Ctrl + U' },
  ],
  intermediate: [
    { name: 'Find', keys: ['Control', 'f'], display: 'Ctrl + F' },
    { name: 'Replace', keys: ['Control', 'h'], display: 'Ctrl + H' },
    { name: 'New Workbook', keys: ['Control', 'n'], display: 'Ctrl + N' },
    { name: 'Open Workbook', keys: ['Control', 'o'], display: 'Ctrl + O' },
    { name: 'Print', keys: ['Control', 'p'], display: 'Ctrl + P' },
    { name: 'Go To', keys: ['Control', 'g'], display: 'Ctrl + G' },
    { name: 'Hyperlink', keys: ['Control', 'k'], display: 'Ctrl + K' },
    { name: 'Create Table', keys: ['Control', 't'], display: 'Ctrl + T' },
  ],
  advanced: [
    {
      name: 'Filter',
      keys: ['Control', 'Shift', 'l'],
      display: 'Ctrl + Shift + L',
    },
    { name: 'Format Cells', keys: ['Control', '1'], display: 'Ctrl + 1' },
    {
      name: 'Current Time',
      keys: ['Control', 'Shift', ';'],
      display: 'Ctrl + Shift + :',
    },
    { name: 'Current Date', keys: ['Control', ';'], display: 'Ctrl + ;' },
    { name: 'Select Row', keys: ['Shift', ' '], display: 'Shift + Space' },
    { name: 'Select Col', keys: ['Control', ' '], display: 'Ctrl + Space' },
    { name: 'Autosum', keys: ['Alt', '='], display: 'Alt + =' },
  ],
};

type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export default function ExcelGameClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start',
  );
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentTask, setCurrentTask] = useState<any>(null);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<'success' | 'failure' | null>(null);

  // Initialize Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState('end');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  // Generate New Task
  const nextTask = useCallback(() => {
    const list = SHORTCUTS[difficulty];
    const random = list[Math.floor(Math.random() * list.length)];
    // Avoid repeating same task immediately if possible
    if (currentTask && currentTask.name === random.name && list.length > 1) {
      nextTask();
      return;
    }
    setCurrentTask(random);
    setPressedKeys(new Set());
    setFeedback(null);
  }, [difficulty, currentTask]);

  // Start Game
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    nextTask();
  };

  // Logic to handle keys
  useEffect(() => {
    if (gameState !== 'playing') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault(); // Prevent browser actions like saving page

      const key = e.key === ' ' ? ' ' : e.key; // Normalize space

      // Add key to set
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.add(key);
        return newSet;
      });

      // Check for match
      // We need to check if ALL required keys are pressed
      // And we handle modifiers simply by checking the event properties + standard keys
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key === ' ' ? ' ' : e.key;
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    };

    // We use a separate check effect for better control
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // Check Match Logic
  useEffect(() => {
    if (!currentTask || gameState !== 'playing') return;

    const requiredKeys = currentTask.keys.map((k: string) => k.toLowerCase());
    const pressedArray = Array.from(pressedKeys).map((k) => k.toLowerCase());

    const isMatch = requiredKeys.every((k: string) => {
      if (k === 'control')
        return (
          pressedArray.includes('control') || pressedArray.includes('meta')
        ); // Mac command
      if (k === 'shift') return pressedArray.includes('shift');
      if (k === 'alt') return pressedArray.includes('alt');
      return pressedArray.includes(k);
    });

    if (isMatch) {
      // Success!
      setScore((prev) => prev + 10 + streak * 2);
      setStreak((prev) => prev + 1);
      setFeedback('success');
      setTimeout(() => {
        nextTask();
      }, 200);
    }
  }, [pressedKeys, currentTask, gameState, streak, nextTask]);

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Shortcut Racer</h2>
        <p className="text-muted-foreground">
          Master Excel & OS shortcuts without looking.
        </p>
      </div>

      {/* Mode Selection */}
      <div className="flex justify-center gap-4">
        {['beginner', 'intermediate', 'advanced'].map((d) => (
          <Button
            key={d}
            variant={difficulty === d ? 'default' : 'outline'}
            onClick={() => setDifficulty(d as Difficulty)}
            disabled={gameState === 'playing'}
            className="capitalize"
          >
            {d}
          </Button>
        ))}
      </div>

      <Card className="overflow-hidden border-2 shadow-lg">
        <CardContent className="p-8">
          {gameState === 'start' && (
            <div className="py-12 text-center">
              <Command className="mx-auto mb-6 h-20 w-20 text-primary opacity-20" />
              <h3 className="mb-4 text-2xl font-bold">Ready to Race?</h3>
              <p className="mb-8 text-muted-foreground">
                Press the actual secret key combinations on your keyboard!
              </p>
              <Button
                size="lg"
                onClick={startGame}
                className="text-lg"
              >
                <Play className="mr-2 h-5 w-5" /> Start
              </Button>
            </div>
          )}

          {gameState === 'playing' && currentTask && (
            <div className="space-y-8 text-center">
              {/* HUD */}
              <div className="flex items-center justify-between font-mono text-lg">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">{timeLeft}s</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-xs text-muted-foreground">SCORE</div>
                  <div className="text-2xl font-bold text-primary">{score}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-xs text-muted-foreground">STREAK</div>
                  <div className="text-2xl font-bold text-orange-500">
                    x{streak}
                  </div>
                </div>
              </div>

              {/* Task Display */}
              <div className="py-10">
                <motion.div
                  key={currentTask.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Perform Action
                  </h3>
                  <div className="text-5xl font-black">{currentTask.name}</div>

                  <div className="h-4" />

                  {/* Visual Feedback of Keys */}
                  <div className="flex min-h-[50px] justify-center gap-2">
                    {Array.from(pressedKeys)
                      .sort()
                      .map((k) => (
                        <Badge
                          key={k}
                          variant="secondary"
                          className="px-3 py-1 text-lg uppercase"
                        >
                          {k}
                        </Badge>
                      ))}
                    {pressedKeys.size === 0 && (
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Keyboard className="h-4 w-4" /> Press keys...
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {gameState === 'end' && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8 inline-block rounded-full bg-green-100 p-6 dark:bg-green-900/20"
              >
                <Trophy className="h-16 w-16 text-green-600 dark:text-green-500" />
              </motion.div>

              <h3 className="mb-2 text-3xl font-bold">Time's Up!</h3>
              <p className="mb-8 text-muted-foreground">
                Final Score:{' '}
                <span className="text-xl font-bold text-primary">{score}</span>
              </p>

              <Button
                onClick={startGame}
                size="lg"
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Play Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Cheat Sheet */}
      <div className="mt-8 rounded-xl border bg-muted/30 p-6">
        <h4 className="mb-4 flex items-center gap-2 font-semibold">
          <Zap className="h-4 w-4 text-yellow-500" /> Current Level Cheat Sheet
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          {SHORTCUTS[difficulty].map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded border bg-background p-2"
            >
              <span className="text-muted-foreground">{s.name}</span>
              <Badge variant="outline">{s.display}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RefreshCw(props: any) {
  return <RotateCcw {...props} />;
}
