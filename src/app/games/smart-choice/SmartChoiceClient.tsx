'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
  ShoppingBag,
  Weight,
  Gem,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
  id: number;
  name: string;
  weight: number;
  value: number;
  icon: string;
}

interface SmartLevel {
  id: number;
  maxWeight: number;
  targetValue: number; // Minimum value to pass, or just maximize? Let's say "Best Possible" is needed. But calculating dynamic programming solution on client is easy for small N.
  // Let's require the absolute Optimal Solution.
  items: Item[];
  title: string;
}

const levels: SmartLevel[] = [
  {
    id: 1,
    title: 'Hiking Backpack',
    maxWeight: 10,
    targetValue: 20, // Optimal is 25 (Water + Food + Map)
    items: [
      { id: 1, name: 'Water', weight: 4, value: 10, icon: '💧' },
      { id: 2, name: 'Tent', weight: 8, value: 15, icon: '⛺' }, // Too heavy if taken with anything else? 8+? Max 10. Tent(15) vs Water+Food (10+8=18)? No wait.
      // Let's use simple numbers.
      { id: 3, name: 'Food', weight: 3, value: 8, icon: '🍎' },
      { id: 4, name: 'Map', weight: 1, value: 5, icon: '🗺️' },
    ],
    // Optimal: Tent = 15.
    // Water + Food + Map = 4+3+1 = 8 weight. Value = 10+8+5 = 23.
    // 23 > 15.
    // So User must pick Water, Food, Map.
  },
  {
    id: 2,
    title: 'Space Cargo',
    maxWeight: 50,
    targetValue: 0,
    items: [
      { id: 1, name: 'Gold', weight: 20, value: 60, icon: '🥇' }, // Ratio 3
      { id: 2, name: 'Silver', weight: 10, value: 40, icon: '🥈' }, // Ratio 4
      { id: 3, name: 'Bronze', weight: 30, value: 50, icon: '🥉' }, // Ratio 1.66
      { id: 4, name: 'Platinum', weight: 20, value: 70, icon: '💎' }, // Ratio 3.5
    ],
    // Capacity 50.
    // Platinum (20, 70) + Silver (10, 40) + Gold (20, 60) = 50 weight. 170 value.
    // Platinum (20) + Bronze (30) = 120.
    // Optimal is 170.
  },
  {
    id: 3,
    title: 'Project Budget',
    maxWeight: 100, // $100 budget
    targetValue: 0,
    items: [
      { id: 1, name: 'Marketing', weight: 40, value: 80, icon: '📢' }, // R 2
      { id: 2, name: 'Dev', weight: 50, value: 90, icon: '💻' }, // R 1.8
      { id: 3, name: 'Design', weight: 20, value: 50, icon: '🎨' }, // R 2.5
      { id: 4, name: 'Sales', weight: 30, value: 40, icon: '💼' }, // R 1.33
      { id: 5, name: 'Support', weight: 10, value: 30, icon: '🎧' }, // R 3
    ],
    // Budget 100.
    // Design(20,50) + Support(10,30) = 30 used, 80 left. Value 80.
    // Dev(50,90) - budget left 20.
    // Marketing(40,80) + Design(20,50) + Support(10,30) + ...
    // Try: Design(20) + Support(10) + Marketing(40) = 70 cost. 50+30+80=160.
    // Remaining 30. Sales(30,40). Total cost 100. Total Val 200.
    // Try Dev(50,90) + Design(20,50) + Support(10,30) = 80 cost. 170 val. remaining 20. nothing fits.
    // Dev(50,90) + Marketing(40,80) = 90 cost. 170 val.
    // Optimal seems to be local ratios: Sup(3), Des(2.5), Mar(2), Dev(1.8), Sal(1.3).
    // Pick top ratios until full.
    // Sup(10)+Des(20)+Mar(40)+Dev(partial? No discrete).
    // 10+20+40 = 70. Left 30. Sales(30). Total 100.
    // Value: 30+50+80+40 = 200.
    // Is there better?
    // Dev(50) + Mar(40) + Sup(10) = 100. Value: 90+80+30 = 200. Equivalent.
    // So purely greedy works here?
    // Let's make Greedy fail to test real logic.
    // Item A: Weight 5, Value 50.
    // Item B: Weight 5, Value 50.
    // Item C: Weight 8, Value 90 (Better than A+part B but worse than A+B).
  },
];

// Helper to find optimal value
const solveKnapsack = (items: Item[], capacity: number) => {
  const n = items.length;
  const dp = Array(capacity + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= items[i].weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - items[i].weight] + items[i].value);
    }
  }
  return dp[capacity];
};

export default function SmartChoiceClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'results'>(
    'idle',
  );
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Array of Item IDs
  const [feedback, setFeedback] = useState<'success' | 'failure' | null>(null);

  const level = levels[currentLevelIndex];

  const currentWeight = useMemo(() => {
    return (
      level?.items
        .filter((i) => selectedItems.includes(i.id))
        .reduce((acc, i) => acc + i.weight, 0) || 0
    );
  }, [selectedItems, level]);

  const currentValue = useMemo(() => {
    return (
      level?.items
        .filter((i) => selectedItems.includes(i.id))
        .reduce((acc, i) => acc + i.value, 0) || 0
    );
  }, [selectedItems, level]);

  const optimalValue = useMemo(() => {
    return level ? solveKnapsack(level.items, level.maxWeight) : 0;
  }, [level]);

  const startGame = () => {
    setGameState('playing');
    setCurrentLevelIndex(0);
    setScore(0);
    setSelectedItems([]);
    setFeedback(null);
  };

  const toggleItem = (id: number) => {
    if (feedback) return; // Locked during feedback
    setSelectedItems((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      // Check weight limit before adding? Or allow overfill and show error?
      // User experience: Allow adding but show Red if overweight.
      return [...prev, id];
    });
  };

  const submitSolution = () => {
    if (currentWeight > level.maxWeight) {
      // Overweight
      return; // Or show error toast
    }

    if (currentValue === optimalValue) {
      setFeedback('success');
      setScore((prev) => prev + 1);
      setTimeout(() => {
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevelIndex((prev) => prev + 1);
          setSelectedItems([]);
          setFeedback(null);
        } else {
          setGameState('results');
        }
      }, 1500);
    } else {
      setFeedback('failure');
      // Show "Not optimal" message
      setTimeout(() => {
        // Retry or next? Let's allow retry endlessly until correct or give up?
        // Let's just next level for now to keep flow, or reset.
        // Resetting cleanly.
        setFeedback(null);
        // Actually if they fail, maybe they should try again?
        // Let's just move to next but no score.
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevelIndex((prev) => prev + 1);
          setSelectedItems([]);
          setFeedback(null);
        } else {
          setGameState('results');
        }
      }, 2000);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {gameState === 'playing' && (
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>
              Scenario {currentLevelIndex + 1}/{levels.length}: {level.title}
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
            <ShoppingBag className="mx-auto mb-6 h-20 w-20 text-emerald-500" />
            <h2 className="mb-4 text-3xl font-bold">Smart Choice</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Optimize your loadout. Choose the best combination of items to
              maximize value.
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Optimizing
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
            <h2 className="mb-2 text-3xl font-bold">Optimization Complete!</h2>
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
          <div className="flex flex-col gap-6">
            {/* Status Bar */}
            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
              <div className="flex items-center gap-2">
                <Weight
                  className={`h-5 w-5 ${currentWeight > level.maxWeight ? 'text-red-500' : 'text-muted-foreground'}`}
                />
                <span
                  className={
                    currentWeight > level.maxWeight
                      ? 'font-bold text-red-500'
                      : ''
                  }
                >
                  Weight: {currentWeight} / {level.maxWeight}
                </span>
              </div>
              <div className="flex items-center gap-2 font-bold text-emerald-600">
                <Gem className="h-5 w-5" />
                Value: {currentValue}
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {level.items.map((item) => {
                const isSelected = selectedItems.includes(item.id);
                return (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleItem(item.id)}
                    className={`relative flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                        : 'border-transparent bg-card shadow-sm hover:bg-accent'
                    }`}
                  >
                    <div className="text-4xl">{item.icon}</div>
                    <div className="font-bold">{item.name}</div>
                    <div className="flex w-full justify-between text-xs text-muted-foreground">
                      <span>W: {item.weight}</span>
                      <span>V: {item.value}</span>
                    </div>
                    {isSelected && (
                      <div className="absolute right-2 top-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Submit */}
            <div className="mt-4">
              <Button
                size="lg"
                className="w-full"
                onClick={submitSolution}
                disabled={currentWeight > level.maxWeight || !!feedback}
              >
                {currentWeight > level.maxWeight
                  ? 'Overweight Limit!'
                  : 'Confirm Selection'}
              </Button>
            </div>

            {/* Feedback */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-center text-xl font-bold ${
                    feedback === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {feedback === 'success'
                    ? 'Optimal Solution Found!'
                    : `Not optimal. Best value was ${optimalValue}.`}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
