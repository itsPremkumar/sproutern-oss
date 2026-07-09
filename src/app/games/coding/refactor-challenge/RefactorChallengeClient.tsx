'use client';

import { useState, useCallback } from 'react';
import { CodeEditor, Language } from '@/components/coding/CodeEditor';
import { HintSystem } from '@/components/coding/HintSystem';
import { CodeGameLayout } from '@/components/coding/CodeGameLayout';
import { Button } from '@/components/ui/button';
import {
  runCode,
  validateCode,
  calculateScore,
  type TestCase,
} from '@/lib/code-runner';
import {
  Sparkles,
  Zap,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Eye,
  Lightbulb,
  Clock,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import challengesData from '@/data/coding-challenges/refactor-challenge.json';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  xpReward: number;
  language: 'javascript' | 'python';
  inefficientCode: string;
  optimizedSolution: string;
  testCases: Array<{
    input: string[];
    expectedOutput: string;
  }>;
  hints: string[];
  improvements: string[];
}

type GamePhase = 'select' | 'refactoring' | 'result';

export default function RefactorChallengeClient() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [result, setResult] = useState<{
    passed: boolean;
    score: number;
    originalTime: number;
    optimizedTime: number;
  } | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const challenges = challengesData.challenges as Challenge[];

  const startChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setPhase('refactoring');
    setUsedHints([]);
    setResult(null);
    setShowSolution(false);
  };

  const handleRun = useCallback(
    async (code: string) => {
      if (!selectedChallenge) throw new Error('No challenge selected');
      const result = await runCode(
        code,
        selectedChallenge.language as Language,
      );
      return {
        output: result.output,
        error: result.error,
        executionTime: result.executionTime,
      };
    },
    [selectedChallenge],
  );

  const handleSubmit = useCallback(
    async (code: string) => {
      if (!selectedChallenge) throw new Error('No challenge selected');

      const testCases: TestCase[] = selectedChallenge.testCases.map((tc) => ({
        input: tc.input,
        expectedOutput: tc.expectedOutput,
      }));

      // Run original code for timing comparison
      const originalResult = await runCode(
        selectedChallenge.inefficientCode,
        selectedChallenge.language as Language,
      );

      // Validate refactored code
      const validationResult = await validateCode(
        code,
        selectedChallenge.language as Language,
        testCases,
        selectedChallenge.id.includes('sum')
          ? 'sumArray'
          : selectedChallenge.id.includes('grade')
            ? 'getGrade'
            : selectedChallenge.id.includes('common')
              ? 'findCommon'
              : selectedChallenge.id.includes('string')
                ? 'repeatString'
                : selectedChallenge.id.includes('duplicate')
                  ? 'remove_duplicates'
                  : selectedChallenge.id.includes('process')
                    ? 'processNumbers'
                    : selectedChallenge.id.includes('even')
                      ? 'is_even'
                      : 'main',
      );

      const score = calculateScore(validationResult, {
        baseScore: selectedChallenge.xpReward,
        usedHint: usedHints.length > 0,
        hintPenalty: usedHints.length * 5,
      });

      setResult({
        passed: validationResult.passed,
        score: validationResult.passed ? score : 0,
        originalTime: originalResult.executionTime,
        optimizedTime: validationResult.executionTime,
      });

      if (validationResult.passed) {
        setPhase('result');
      }

      return {
        passed: validationResult.passed,
        testResults: validationResult.testResults,
        executionTime: validationResult.executionTime,
        score: validationResult.passed ? score : 0,
      };
    },
    [selectedChallenge, usedHints],
  );

  const handleHintUsed = (hintIndex: number) => {
    setUsedHints((prev) => [...prev, hintIndex]);
  };

  const resetGame = () => {
    setPhase('select');
    setSelectedChallenge(null);
    setResult(null);
    setUsedHints([]);
    setShowSolution(false);
  };

  // Challenge Selection
  if (phase === 'select') {
    return (
      <CodeGameLayout
        title="Refactor Challenge"
        description="Take inefficient code and make it better. Optimize for performance, readability, and best practices."
        backLink="/games/coding"
        category="Code Optimization"
      >
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Choose a Challenge</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onClick={() => startChallenge(challenge)}
                className="group relative rounded-xl border bg-card p-5 text-left transition-all hover:border-amber-500 hover:shadow-lg"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                    <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium uppercase">
                      {challenge.language}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                    <Zap className="h-3 w-3" />+{challenge.xpReward} XP
                  </span>
                </div>
                <h3 className="mb-1 flex items-center gap-2 font-bold">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  {challenge.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {challenge.description}
                </p>
                <span className="text-xs text-muted-foreground">
                  {challenge.category}
                </span>
                <ChevronRight className="absolute bottom-5 right-5 h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Result Screen
  if (phase === 'result' && result && selectedChallenge) {
    const speedup =
      result.originalTime > 0
        ? (result.originalTime / result.optimizedTime).toFixed(2)
        : 'N/A';

    return (
      <CodeGameLayout
        title="Refactoring Complete!"
        description={selectedChallenge.title}
        backLink="/games/coding"
        category="Refactor Challenge"
      >
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Result Card */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">Code Optimized! 🚀</h2>
            <div className="mb-6 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="text-3xl font-black text-purple-600">
                +{result.score} XP
              </span>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <Clock className="h-5 w-5 text-primary" />
              Performance Comparison
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-red-50 p-4 text-center dark:bg-red-900/20">
                <div className="text-sm text-muted-foreground">Original</div>
                <div className="text-2xl font-bold text-red-600">
                  {result.originalTime.toFixed(2)}ms
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
                <div className="text-sm text-muted-foreground">Your Code</div>
                <div className="text-2xl font-bold text-green-600">
                  {result.optimizedTime.toFixed(2)}ms
                </div>
              </div>
            </div>
            {Number(speedup) > 1 && (
              <div className="mt-4 text-center">
                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  {speedup}x faster! ⚡
                </span>
              </div>
            )}
          </div>

          {/* Improvements */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Key Improvements
            </h3>
            <ul className="space-y-2">
              {selectedChallenge.improvements.map((improvement, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {improvement}
                </li>
              ))}
            </ul>
          </div>

          {/* Reference Solution */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <Eye className="h-5 w-5 text-primary" />
              Reference Solution
            </h3>
            <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
              {selectedChallenge.optimizedSolution}
            </pre>
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
              <Sparkles className="mr-2 h-4 w-4" />
              Try Another
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Refactoring Phase
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
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
        <Sparkles className="h-6 w-6 shrink-0 text-amber-500" />
        <div>
          <div className="font-semibold text-amber-700 dark:text-amber-400">
            Refactor This Code!
          </div>
          <p className="text-sm text-amber-600 dark:text-amber-300">
            The code works but is inefficient. Make it faster, cleaner, or more
            readable while keeping the same functionality.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Code Editor (2/3) */}
        <div className="lg:col-span-2">
          <CodeEditor
            key={selectedChallenge.id}
            defaultCode={selectedChallenge.inefficientCode}
            language={selectedChallenge.language as Language}
            onRun={handleRun}
            onSubmit={handleSubmit}
            height="500px"
          />
        </div>

        {/* Sidebar (1/3) */}
        <div className="space-y-6">
          {/* Expected Behavior */}
          <div className="rounded-xl border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              Expected Outputs
            </h3>
            <ul className="space-y-2 text-sm">
              {selectedChallenge.testCases.slice(0, 3).map((tc, i) => (
                <li
                  key={i}
                  className="rounded bg-muted p-2 font-mono text-xs"
                >
                  Input: {tc.input.join(', ') || '(none)'} → {tc.expectedOutput}
                </li>
              ))}
            </ul>
          </div>

          {/* Hints */}
          <div className="rounded-xl border bg-card p-4">
            <HintSystem
              hints={selectedChallenge.hints}
              xpPenalty={5}
              onHintUsed={handleHintUsed}
            />
          </div>

          {/* Show Solution Button */}
          <div className="rounded-xl border bg-card p-4">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex w-full items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                {showSolution ? 'Hide Solution' : 'Reveal Solution (-15 XP)'}
              </span>
              <Eye className="h-4 w-4" />
            </button>
            {showSolution && (
              <pre className="mt-3 overflow-auto rounded-lg bg-muted p-3 font-mono text-xs">
                {selectedChallenge.optimizedSolution}
              </pre>
            )}
          </div>
        </div>
      </div>
    </CodeGameLayout>
  );
}
