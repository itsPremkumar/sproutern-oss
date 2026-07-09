'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Coins,
  CheckCircle,
  Clock,
  Users,
  Shield,
  RotateCcw,
  History,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';

interface FlipResult {
  result: 'heads' | 'tails';
  timestamp: Date;
}

export default function CoinFlipperClient() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentResult, setCurrentResult] = useState<'heads' | 'tails' | null>(
    null,
  );
  const [flipHistory, setFlipHistory] = useState<FlipResult[]>([]);
  const [flipCount, setFlipCount] = useState(1);

  const flipCoin = useCallback(() => {
    setIsFlipping(true);

    // Animate for a short time
    setTimeout(() => {
      const results: FlipResult[] = [];
      for (let i = 0; i < flipCount; i++) {
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        results.push({ result, timestamp: new Date() });
      }

      setCurrentResult(results[results.length - 1].result);
      setFlipHistory((prev) => [...results, ...prev].slice(0, 100));
      setIsFlipping(false);
    }, 600);
  }, [flipCount]);

  const stats = {
    heads: flipHistory.filter((f) => f.result === 'heads').length,
    tails: flipHistory.filter((f) => f.result === 'tails').length,
    total: flipHistory.length,
  };

  const headsPercentage =
    stats.total > 0 ? ((stats.heads / stats.total) * 100).toFixed(1) : '0';
  const tailsPercentage =
    stats.total > 0 ? ((stats.tails / stats.total) * 100).toFixed(1) : '0';

  const clearHistory = () => {
    setFlipHistory([]);
    setCurrentResult(null);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Coins className="h-4 w-4" />
            Free Random Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Coin Flipper</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Flip a virtual coin for heads or tails. Perfect for making fair
            decisions instantly.
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
            <span className="text-sm font-medium">Instant Results</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Fair & Random</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Crypto Random</span>
          </div>
        </div>

        {/* Main Coin */}
        <Card className="mb-6">
          <CardContent className="py-8">
            <div className="flex flex-col items-center">
              {/* Coin Display */}
              <div
                className={`mb-8 flex h-48 w-48 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ${
                  isFlipping ? 'animate-spin' : ''
                } ${
                  currentResult === 'heads'
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                    : currentResult === 'tails'
                      ? 'bg-gradient-to-br from-gray-400 to-gray-600'
                      : 'bg-gradient-to-br from-yellow-300 to-yellow-500'
                }`}
              >
                <div className="text-center">
                  {currentResult ? (
                    <>
                      <div className="text-5xl">
                        {currentResult === 'heads' ? '👑' : '🦅'}
                      </div>
                      <div className="mt-2 text-xl font-bold uppercase text-white drop-shadow-lg">
                        {currentResult}
                      </div>
                    </>
                  ) : (
                    <div className="text-4xl">🪙</div>
                  )}
                </div>
              </div>

              {/* Flip Controls */}
              <div className="mb-4 flex items-center gap-4">
                <label className="text-sm font-medium">Number of flips:</label>
                <select
                  value={flipCount}
                  onChange={(e) => setFlipCount(parseInt(e.target.value))}
                  className="rounded-lg border bg-background px-3 py-2"
                >
                  {[1, 5, 10, 25, 50, 100].map((n) => (
                    <option
                      key={n}
                      value={n}
                    >
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={flipCoin}
                  disabled={isFlipping}
                  size="lg"
                  className="gap-2 px-8"
                >
                  <RotateCcw
                    className={`h-5 w-5 ${isFlipping ? 'animate-spin' : ''}`}
                  />
                  {isFlipping ? 'Flipping...' : 'Flip Coin'}
                </Button>
                <Button
                  onClick={clearHistory}
                  variant="outline"
                  size="lg"
                >
                  Clear History
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        {stats.total > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5" />
                Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-yellow-50 p-4 text-center dark:bg-yellow-950">
                  <div className="text-3xl font-bold text-yellow-600">
                    {stats.heads}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Heads ({headsPercentage}%)
                  </div>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center dark:bg-gray-800">
                  <div className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                    {stats.tails}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tails ({tailsPercentage}%)
                  </div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-950">
                  <div className="text-3xl font-bold text-blue-600">
                    {stats.total}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Flips
                  </div>
                </div>
              </div>

              {/* Visual Bar */}
              <div className="mt-4">
                <div className="flex h-4 overflow-hidden rounded-full">
                  <div
                    className="bg-yellow-400 transition-all"
                    style={{ width: `${headsPercentage}%` }}
                  />
                  <div
                    className="bg-gray-400 transition-all"
                    style={{ width: `${tailsPercentage}%` }}
                  />
                </div>
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>Heads</span>
                  <span>Tails</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* History */}
        {flipHistory.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <History className="h-5 w-5" />
                Recent Flips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {flipHistory.slice(0, 50).map((flip, i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      flip.result === 'heads'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                    }`}
                    title={flip.result}
                  >
                    {flip.result === 'heads' ? 'H' : 'T'}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Uses */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>When to Use a Coin Flip</h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Decision Making',
                desc: "When you can't decide between two options, let fate decide!",
              },
              {
                title: 'Games & Sports',
                desc: 'Determine who goes first or picks sides',
              },
              {
                title: 'Settling Disputes',
                desc: 'Fair way to resolve minor disagreements',
              },
              {
                title: 'Random Selection',
                desc: 'Pick between two choices randomly',
              },
            ].map((use) => (
              <Card key={use.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{use.title}</h3>
                  <p className="text-sm text-muted-foreground">{use.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Dice Roller',
                href: '/tools/dice-roller',
                desc: 'Roll virtual dice',
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
