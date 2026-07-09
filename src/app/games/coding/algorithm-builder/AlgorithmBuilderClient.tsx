'use client';

import { useState, useCallback } from 'react';
import { CodeEditor, Language } from '@/components/coding/CodeEditor';
import { HintSystem } from '@/components/coding/HintSystem';
import { TestCasePreview } from '@/components/coding/TestCasePreview';
import { CodeGameLayout } from '@/components/coding/CodeGameLayout';
import { Button } from '@/components/ui/button';
import {
  runCode,
  validateCode,
  calculateScore,
  type TestCase,
} from '@/lib/code-runner';
import {
  Blocks,
  Trophy,
  Zap,
  Code2,
  ChevronRight,
  RotateCcw,
  Eye,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import challengesData from '@/data/coding-challenges/algorithm-builder.json';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  xpReward: number;
  starterCode: { javascript: string; python: string };
  solutionCode: { javascript: string; python: string };
  testCases: Array<{
    input: string[];
    expectedOutput: string;
  }>;
  hints: string[];
}

type GamePhase = 'select' | 'building' | 'result';
type CodeLanguage = 'javascript' | 'python';

export default function AlgorithmBuilderClient() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );
  const [language, setLanguage] = useState<CodeLanguage>('javascript');
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [result, setResult] = useState<{
    passed: boolean;
    score: number;
  } | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const challenges = challengesData.challenges as Challenge[];

  const startChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setPhase('building');
    setUsedHints([]);
    setResult(null);
    setShowSolution(false);
  };

  const handleRun = useCallback(
    async (code: string) => {
      const result = await runCode(code, language);
      return {
        output: result.output,
        error: result.error,
        executionTime: result.executionTime,
      };
    },
    [language],
  );

  const handleSubmit = useCallback(
    async (code: string) => {
      if (!selectedChallenge) throw new Error('No challenge selected');

      const testCases: TestCase[] = selectedChallenge.testCases.map((tc) => ({
        input: tc.input,
        expectedOutput: tc.expectedOutput,
      }));

      // Extract function name from id
      const funcName = selectedChallenge.id.replace(/-/g, '');
      const validationResult = await validateCode(
        code,
        language,
        testCases,
        language === 'javascript'
          ? selectedChallenge.id.includes('bubble')
            ? 'bubbleSort'
            : selectedChallenge.id.includes('binary')
              ? 'binarySearch'
              : selectedChallenge.id.includes('two-sum')
                ? 'twoSum'
                : selectedChallenge.id.includes('fibonacci')
                  ? 'fibonacci'
                  : selectedChallenge.id.includes('merge')
                    ? 'mergeSortedArrays'
                    : 'reverseList'
          : selectedChallenge.id.includes('bubble')
            ? 'bubble_sort'
            : selectedChallenge.id.includes('binary')
              ? 'binary_search'
              : selectedChallenge.id.includes('two-sum')
                ? 'two_sum'
                : selectedChallenge.id.includes('fibonacci')
                  ? 'fibonacci'
                  : selectedChallenge.id.includes('merge')
                    ? 'merge_sorted_arrays'
                    : 'reverse_list',
      );

      const score = calculateScore(validationResult, {
        baseScore: selectedChallenge.xpReward,
        usedHint: usedHints.length > 0,
        hintPenalty: usedHints.length * 5,
      });

      setResult({
        passed: validationResult.passed,
        score: validationResult.passed ? score : 0,
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
    [selectedChallenge, language, usedHints],
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
        title="Algorithm Builder"
        description="Build classic algorithms step-by-step. Fill in the missing code to complete sorting, searching, and data structure implementations."
        backLink="/games/coding"
        category="Learn by Building"
      >
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Choose an Algorithm</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onClick={() => startChallenge(challenge)}
                className="group relative rounded-xl border bg-card p-5 text-left transition-all hover:border-blue-500 hover:shadow-lg"
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
                    <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium">
                      {challenge.category}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                    <Zap className="h-3 w-3" />+{challenge.xpReward} XP
                  </span>
                </div>
                <h3 className="mb-1 flex items-center gap-2 font-bold">
                  <Blocks className="h-4 w-4 text-blue-500" />
                  {challenge.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {challenge.description}
                </p>
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
    return (
      <CodeGameLayout
        title="Algorithm Complete!"
        description={selectedChallenge.title}
        backLink="/games/coding"
        category="Algorithm Builder"
      >
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Result Card */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">
              Algorithm Built Successfully!
            </h2>
            <div className="mb-6 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="text-3xl font-black text-purple-600">
                +{result.score} XP
              </span>
            </div>
            <p className="text-muted-foreground">
              Great job! You&apos;ve mastered the {selectedChallenge.title}{' '}
              algorithm.
            </p>
          </div>

          {/* Solution Comparison */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <Eye className="h-5 w-5 text-primary" />
              Reference Solution
            </h3>
            <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
              {selectedChallenge.solutionCode[language]}
            </pre>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Back to Algorithms
            </Button>
            <Button onClick={() => setPhase('select')}>
              <Blocks className="mr-2 h-4 w-4" />
              Try Another
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Building Phase
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
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <BookOpen className="h-6 w-6 shrink-0 text-blue-500" />
        <div>
          <div className="font-semibold text-blue-700 dark:text-blue-400">
            Fill in the Missing Code
          </div>
          <p className="text-sm text-blue-600 dark:text-blue-300">
            Look for the{' '}
            <code className="rounded bg-blue-100 px-1 dark:bg-blue-800">
              // YOUR CODE HERE
            </code>{' '}
            comments and complete the algorithm.
          </p>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mb-4 flex items-center justify-end gap-2">
        <span className="text-sm text-muted-foreground">Language:</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as CodeLanguage)}
          className="rounded-lg border bg-background px-3 py-1.5 text-sm font-medium"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Code Editor (2/3) */}
        <div className="lg:col-span-2">
          <CodeEditor
            key={`${selectedChallenge.id}-${language}`}
            defaultCode={selectedChallenge.starterCode[language]}
            language={language as Language}
            onRun={handleRun}
            onSubmit={handleSubmit}
            height="500px"
          />
        </div>

        {/* Sidebar (1/3) */}
        <div className="space-y-6">
          {/* Test Cases */}
          <div className="rounded-xl border bg-card p-4">
            <TestCasePreview
              testCases={selectedChallenge.testCases}
              showExpected={true}
              maxVisible={3}
            />
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
                {selectedChallenge.solutionCode[language]}
              </pre>
            )}
          </div>
        </div>
      </div>
    </CodeGameLayout>
  );
}
