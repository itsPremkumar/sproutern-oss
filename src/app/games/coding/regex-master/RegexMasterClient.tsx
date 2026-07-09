'use client';

import { useState, useMemo } from 'react';
import { CodeGameLayout } from '@/components/coding/CodeGameLayout';
import { HintSystem } from '@/components/coding/HintSystem';
import { Button } from '@/components/ui/button';
import {
  Regex,
  Zap,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Eye,
  Play,
  Lightbulb,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import challengesData from '@/data/coding-challenges/regex-master.json';

interface TestString {
  text: string;
  shouldMatch: boolean;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  xpReward: number;
  testStrings: TestString[];
  hints: string[];
  solutionPattern: string;
}

type GamePhase = 'select' | 'solving' | 'result';

export default function RegexMasterClient() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('');
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const challenges = challengesData.challenges as Challenge[];

  // Live test results
  const testResults = useMemo(() => {
    if (!selectedChallenge || !pattern) return [];

    try {
      const regex = new RegExp(`^${pattern}$`, flags);
      return selectedChallenge.testStrings.map((test) => {
        const matches = regex.test(test.text);
        return {
          ...test,
          matches,
          correct: matches === test.shouldMatch,
        };
      });
    } catch {
      return selectedChallenge.testStrings.map((test) => ({
        ...test,
        matches: false,
        correct: false,
        error: true,
      }));
    }
  }, [pattern, flags, selectedChallenge]);

  const allCorrect =
    testResults.length > 0 && testResults.every((r) => r.correct);
  const hasError = testResults.some((r) => (r as any).error);

  const startChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setPhase('solving');
    setPattern('');
    setFlags('');
    setUsedHints([]);
    setShowSolution(false);
  };

  const submitSolution = () => {
    if (!selectedChallenge || !allCorrect) return;

    const hintPenalty = usedHints.length * 5;
    const score = Math.max(0, selectedChallenge.xpReward - hintPenalty);

    if (!completedChallenges.includes(selectedChallenge.id)) {
      setTotalScore((prev) => prev + score);
      setCompletedChallenges((prev) => [...prev, selectedChallenge.id]);
    }

    setPhase('result');
  };

  const handleHintUsed = (hintIndex: number) => {
    setUsedHints((prev) => [...prev, hintIndex]);
  };

  const resetGame = () => {
    setPhase('select');
    setSelectedChallenge(null);
    setPattern('');
    setFlags('');
    setUsedHints([]);
    setShowSolution(false);
  };

  // Challenge Selection
  if (phase === 'select') {
    return (
      <CodeGameLayout
        title="Regex Master"
        description="Write regular expressions to match patterns. Live testing shows you results in real-time!"
        backLink="/games/coding"
        category="Pattern Matching"
      >
        {/* Stats Bar */}
        <div className="mb-6 flex items-center justify-between rounded-xl bg-muted/50 p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="font-bold text-purple-600">{totalScore} XP</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {completedChallenges.length}/{challenges.length} completed
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Choose a Challenge</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => {
              const isCompleted = completedChallenges.includes(challenge.id);
              return (
                <button
                  key={challenge.id}
                  onClick={() => startChallenge(challenge)}
                  className={cn(
                    'group relative rounded-xl border bg-card p-5 text-left transition-all hover:shadow-lg',
                    isCompleted
                      ? 'border-green-200 hover:border-green-400 dark:border-green-800'
                      : 'hover:border-pink-500',
                  )}
                >
                  {isCompleted && (
                    <div className="absolute right-4 top-4">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={cn(
                        'rounded px-2 py-0.5 text-xs font-semibold',
                        challenge.difficulty === 'easy' &&
                          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                        challenge.difficulty === 'medium' &&
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
                        challenge.difficulty === 'hard' &&
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                      )}
                    >
                      {challenge.difficulty}
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                      <Zap className="h-3 w-3" />+{challenge.xpReward} XP
                    </span>
                  </div>
                  <h3 className="mb-1 flex items-center gap-2 font-bold">
                    <Regex className="h-4 w-4 text-pink-500" />
                    {challenge.title}
                  </h3>
                  <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
                    {challenge.description}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {challenge.category}
                  </span>
                  <ChevronRight className="absolute bottom-5 right-5 h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              );
            })}
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Result Screen
  if (phase === 'result' && selectedChallenge) {
    const hintPenalty = usedHints.length * 5;
    const score = Math.max(0, selectedChallenge.xpReward - hintPenalty);

    return (
      <CodeGameLayout
        title="Pattern Matched!"
        description={selectedChallenge.title}
        backLink="/games/coding"
        category="Regex Master"
      >
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Result Card */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">Regex Solved! 🎯</h2>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="text-3xl font-black text-purple-600">
                +{score} XP
              </span>
            </div>
            <p className="text-muted-foreground">
              All test cases passed with your pattern!
            </p>
          </div>

          {/* Your Solution */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 font-semibold">Your Pattern</h3>
            <code className="block rounded-lg bg-green-50 p-4 font-mono text-lg dark:bg-green-900/20">
              /{pattern}/{flags}
            </code>
          </div>

          {/* Reference Solution */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <Eye className="h-4 w-4 text-primary" />
              Reference Solution
            </h3>
            <code className="block rounded-lg bg-muted p-4 font-mono">
              /{selectedChallenge.solutionPattern}/
            </code>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Back to Challenges
            </Button>
            <Button onClick={() => setPhase('select')}>
              <Regex className="mr-2 h-4 w-4" />
              Try Another
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Solving Phase
  if (!selectedChallenge) return null;

  return (
    <CodeGameLayout
      title={selectedChallenge.title}
      description={selectedChallenge.description}
      difficulty={selectedChallenge.difficulty}
      category={selectedChallenge.category}
      xpReward={selectedChallenge.xpReward}
      backLink="/games/coding"
    >
      {/* Info Banner */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
        <Regex className="h-6 w-6 shrink-0 text-pink-500" />
        <div>
          <div className="font-semibold text-pink-700 dark:text-pink-400">
            Write Your Regex Pattern
          </div>
          <p className="text-sm text-pink-600 dark:text-pink-300">
            Results update in real-time as you type. Match all green items and
            avoid red ones!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pattern Input & Results (2/3) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Pattern Input */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 font-semibold">Your Pattern</h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-muted-foreground">/</span>
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                placeholder="Enter your regex pattern..."
                className="flex-1 rounded-lg border bg-background px-4 py-3 font-mono text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-2xl text-muted-foreground">/</span>
              <input
                type="text"
                value={flags}
                onChange={(e) => setFlags(e.target.value)}
                placeholder="flags"
                className="w-20 rounded-lg border bg-background px-3 py-3 font-mono text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {hasError && (
              <p className="mt-2 text-sm text-red-600">
                Invalid regex pattern. Check your syntax!
              </p>
            )}
          </div>

          {/* Live Test Results */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center justify-between font-semibold">
              <span>Test Cases</span>
              <span className="text-sm text-muted-foreground">
                {testResults.filter((r) => r.correct).length}/
                {testResults.length} passing
              </span>
            </h3>
            <div className="space-y-3">
              {selectedChallenge.testStrings.map((test, index) => {
                const result = testResults[index];
                return (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center justify-between rounded-lg border p-3 transition-colors',
                      result?.correct
                        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                        : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {result?.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <code className="font-mono">{test.text}</code>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={
                          test.shouldMatch ? 'text-green-600' : 'text-red-600'
                        }
                      >
                        {test.shouldMatch ? 'Should match' : 'Should NOT match'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={submitSolution}
              disabled={!allCorrect}
              className={allCorrect ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              <Play className="mr-2 h-4 w-4" />
              {allCorrect ? 'Submit Solution' : 'Fix Failing Tests'}
            </Button>
          </div>
        </div>

        {/* Sidebar (1/3) */}
        <div className="space-y-6">
          {/* Quick Reference */}
          <div className="rounded-xl border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Quick Reference
            </h3>
            <div className="space-y-1 font-mono text-xs text-muted-foreground">
              <div>
                <code>.</code> - Any character
              </div>
              <div>
                <code>\d</code> - Digit (0-9)
              </div>
              <div>
                <code>\w</code> - Word char (a-z, 0-9, _)
              </div>
              <div>
                <code>\s</code> - Whitespace
              </div>
              <div>
                <code>*</code> - 0 or more
              </div>
              <div>
                <code>+</code> - 1 or more
              </div>
              <div>
                <code>?</code> - Optional
              </div>
              <div>
                <code>{'{n}'}</code> - Exactly n times
              </div>
              <div>
                <code>[abc]</code> - Character class
              </div>
              <div>
                <code>(a|b)</code> - Alternation
              </div>
            </div>
          </div>

          {/* Hints */}
          <div className="rounded-xl border bg-card p-4">
            <HintSystem
              hints={selectedChallenge.hints}
              xpPenalty={5}
              onHintUsed={handleHintUsed}
            />
          </div>

          {/* Show Solution */}
          <div className="rounded-xl border bg-card p-4">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex w-full items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {showSolution ? 'Hide Solution' : 'Reveal Solution (-15 XP)'}
              </span>
            </button>
            {showSolution && (
              <code className="mt-3 block rounded-lg bg-muted p-3 font-mono text-sm">
                /{selectedChallenge.solutionPattern}/
              </code>
            )}
          </div>
        </div>
      </div>
    </CodeGameLayout>
  );
}
