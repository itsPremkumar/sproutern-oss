'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shuffle,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  Trash2,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import Link from 'next/link';

export default function ListRandomizerClient() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [shuffledItems, setShuffledItems] = useState<string[]>([]);
  const [pickCount, setPickCount] = useState(1);
  const [pickedItems, setPickedItems] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const parseItems = () => {
    const parsed = inputText
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    setItems(parsed);
    setShuffledItems(parsed);
    setPickedItems([]);
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffleItems = () => {
    setShuffledItems(shuffleArray(items));
    setPickedItems([]);
  };

  const pickRandom = () => {
    const count = Math.min(pickCount, items.length);
    const shuffled = shuffleArray(items);
    setPickedItems(shuffled.slice(0, count));
  };

  const removeDuplicates = () => {
    const unique = [...new Set(items)];
    setItems(unique);
    setShuffledItems(unique);
  };

  const sortItems = (direction: 'asc' | 'desc') => {
    const sorted = [...items].sort((a, b) =>
      direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a),
    );
    setItems(sorted);
    setShuffledItems(sorted);
  };

  const copyItems = async (list: string[]) => {
    await navigator.clipboard.writeText(list.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInputText('');
    setItems([]);
    setShuffledItems([]);
    setPickedItems([]);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Shuffle className="h-4 w-4" />
            Free Random Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            List Randomizer
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Shuffle, randomize, and pick random items from any list. Perfect for
            raffles, games, and selections.
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
            <span className="text-sm font-medium">True Random</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Privacy First</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Enter Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter items, one per line..."
                className="min-h-[200px] w-full rounded-lg border bg-muted/50 p-4 font-mono text-sm outline-none"
              />
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={parseItems}
                  className="gap-2"
                >
                  Load Items
                </Button>
                <Button
                  variant="outline"
                  onClick={clearAll}
                  className="gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear
                </Button>
              </div>
              {items.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {items.length} items loaded
                </p>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <Button
                  onClick={shuffleItems}
                  disabled={items.length === 0}
                  className="w-full gap-2"
                >
                  <Shuffle className="h-4 w-4" />
                  Shuffle All Items
                </Button>

                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Pick</span>
                    <input
                      type="number"
                      value={pickCount}
                      onChange={(e) =>
                        setPickCount(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      min="1"
                      max={items.length || 100}
                      className="w-16 rounded border bg-muted/50 p-2 text-center"
                    />
                    <span className="text-sm">random</span>
                  </div>
                  <Button
                    onClick={pickRandom}
                    disabled={items.length === 0}
                    className="flex-1"
                  >
                    Pick
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={removeDuplicates}
                    disabled={items.length === 0}
                    className="flex-1"
                  >
                    Remove Duplicates
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => sortItems('asc')}
                    disabled={items.length === 0}
                    className="flex-1 gap-2"
                  >
                    <ArrowUp className="h-4 w-4" />
                    Sort A-Z
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => sortItems('desc')}
                    disabled={items.length === 0}
                    className="flex-1 gap-2"
                  >
                    <ArrowDown className="h-4 w-4" />
                    Sort Z-A
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {pickedItems.length > 0 && (
          <Card className="mt-6 border-primary">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-primary">
                🎉 Picked Items
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyItems(pickedItems)}
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copy
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {pickedItems.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-primary/10 px-3 py-2 font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {shuffledItems.length > 0 && pickedItems.length === 0 && (
          <Card className="mt-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Shuffled List</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyItems(shuffledItems)}
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copy
              </Button>
            </CardHeader>
            <CardContent>
              <div className="max-h-64 space-y-1 overflow-auto">
                {shuffledItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 p-2"
                  >
                    <span className="w-8 text-center text-sm font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Use Cases */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Common Use Cases</h2>
          <div className="not-prose grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Raffles & Giveaways',
                desc: 'Pick random winners fairly',
              },
              {
                title: 'Team Assignments',
                desc: 'Randomize team member order',
              },
              {
                title: 'Decision Making',
                desc: 'Let randomness decide for you',
              },
              {
                title: 'Playlist Shuffle',
                desc: 'Randomize song or video order',
              },
              { title: 'Study Sessions', desc: 'Shuffle flashcards or topics' },
              { title: 'Games', desc: 'Random player order for games' },
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
                title: 'Coin Flipper',
                href: '/tools/coin-flipper',
                desc: 'Flip virtual coins',
              },
              {
                title: 'Dice Roller',
                href: '/tools/dice-roller',
                desc: 'Roll virtual dice',
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
