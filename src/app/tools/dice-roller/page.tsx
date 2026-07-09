'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dices,
  CheckCircle,
  Clock,
  Users,
  Shield,
  RotateCcw,
  History,
  Plus,
  Minus,
} from 'lucide-react';
import Link from 'next/link';

type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100';

interface DiceConfig {
  type: DiceType;
  count: number;
}

interface RollResult {
  dice: DiceConfig;
  rolls: number[];
  total: number;
  timestamp: Date;
}

const diceTypes: { type: DiceType; max: number; color: string }[] = [
  { type: 'd4', max: 4, color: 'bg-red-500' },
  { type: 'd6', max: 6, color: 'bg-blue-500' },
  { type: 'd8', max: 8, color: 'bg-green-500' },
  { type: 'd10', max: 10, color: 'bg-yellow-500' },
  { type: 'd12', max: 12, color: 'bg-purple-500' },
  { type: 'd20', max: 20, color: 'bg-pink-500' },
  { type: 'd100', max: 100, color: 'bg-orange-500' },
];

export default function DiceRollerClient() {
  const [selectedDice, setSelectedDice] = useState<DiceType>('d20');
  const [diceCount, setDiceCount] = useState(1);
  const [modifier, setModifier] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [currentRoll, setCurrentRoll] = useState<RollResult | null>(null);
  const [rollHistory, setRollHistory] = useState<RollResult[]>([]);

  const getDiceMax = (type: DiceType) => {
    return diceTypes.find((d) => d.type === type)?.max || 6;
  };

  const rollDice = useCallback(() => {
    setIsRolling(true);

    setTimeout(() => {
      const max = getDiceMax(selectedDice);
      const rolls: number[] = [];

      for (let i = 0; i < diceCount; i++) {
        rolls.push(Math.floor(Math.random() * max) + 1);
      }

      const result: RollResult = {
        dice: { type: selectedDice, count: diceCount },
        rolls,
        total: rolls.reduce((a, b) => a + b, 0) + modifier,
        timestamp: new Date(),
      };

      setCurrentRoll(result);
      setRollHistory((prev) => [result, ...prev].slice(0, 50));
      setIsRolling(false);
    }, 500);
  }, [selectedDice, diceCount, modifier]);

  const clearHistory = () => {
    setRollHistory([]);
    setCurrentRoll(null);
  };

  const getDiceEmoji = (type: DiceType) => {
    const emojis: Record<DiceType, string> = {
      d4: '🔺',
      d6: '🎲',
      d8: '💎',
      d10: '🔷',
      d12: '⬡',
      d20: '⚀',
      d100: '💯',
    };
    return emojis[type];
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Dices className="h-4 w-4" />
            Free Gaming Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Dice Roller</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Roll virtual dice for tabletop games, RPGs, or any random number
            generation needs.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">7 Dice Types</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">D&D Compatible</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Fair Random</span>
          </div>
        </div>

        {/* Dice Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Select Dice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {diceTypes.map((dice) => (
                <button
                  key={dice.type}
                  onClick={() => setSelectedDice(dice.type)}
                  className={`flex h-16 w-16 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                    selectedDice === dice.type
                      ? 'scale-110 border-primary bg-primary/10'
                      : 'border-muted hover:border-primary/50'
                  }`}
                >
                  <span className="text-2xl">{getDiceEmoji(dice.type)}</span>
                  <span className="text-xs font-bold uppercase">
                    {dice.type}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Roll Controls */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Dice Count */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Count:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setDiceCount(Math.max(1, diceCount - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-2xl font-bold">
                    {diceCount}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setDiceCount(Math.min(20, diceCount + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Modifier */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Modifier:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setModifier(modifier - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span
                    className={`w-12 text-center text-2xl font-bold ${modifier >= 0 ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {modifier >= 0 ? `+${modifier}` : modifier}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setModifier(modifier + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Roll Expression */}
            <div className="mt-4 text-center">
              <span className="font-mono text-lg text-muted-foreground">
                {diceCount}
                {selectedDice}
                {modifier !== 0
                  ? modifier > 0
                    ? ` + ${modifier}`
                    : ` - ${Math.abs(modifier)}`
                  : ''}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Roll Button & Result */}
        <Card className="mb-6">
          <CardContent className="py-8">
            <div className="flex flex-col items-center">
              {/* Result Display */}
              {currentRoll && (
                <div className="mb-6 text-center">
                  <div
                    className={`text-7xl font-bold ${isRolling ? 'animate-bounce' : ''}`}
                  >
                    {currentRoll.total}
                  </div>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {currentRoll.rolls.map((roll, i) => (
                      <span
                        key={i}
                        className={`rounded-lg px-3 py-1 text-sm font-bold ${
                          roll === getDiceMax(currentRoll.dice.type)
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : roll === 1
                              ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                              : 'bg-muted'
                        }`}
                      >
                        {roll}
                      </span>
                    ))}
                    {modifier !== 0 && (
                      <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                        {modifier > 0 ? `+${modifier}` : modifier}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={rollDice}
                  disabled={isRolling}
                  size="lg"
                  className="gap-2 px-8"
                >
                  <RotateCcw
                    className={`h-5 w-5 ${isRolling ? 'animate-spin' : ''}`}
                  />
                  {isRolling ? 'Rolling...' : 'Roll Dice'}
                </Button>
                <Button
                  onClick={clearHistory}
                  variant="outline"
                  size="lg"
                >
                  Clear
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roll History */}
        {rollHistory.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <History className="h-5 w-5" />
                Roll History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-64 space-y-2 overflow-auto">
                {rollHistory.map((roll, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-muted/50 p-2"
                  >
                    <span className="font-mono text-sm">
                      {roll.dice.count}
                      {roll.dice.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      [{roll.rolls.join(', ')}]
                    </span>
                    <span className="font-bold">{roll.total}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Coin Flipper',
                href: '/tools/coin-flipper',
                desc: 'Flip virtual coins',
              },
              {
                title: 'List Randomizer',
                href: '/tools/list-randomizer',
                desc: 'Shuffle lists randomly',
              },
              {
                title: 'Team Generator',
                href: '/tools/team-generator',
                desc: 'Create random teams',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
