'use client';

import { useState, useCallback } from 'react';
import { CodeEditor, Language } from '@/components/coding/CodeEditor';
import { HintSystem } from '@/components/coding/HintSystem';
import { CodeGameLayout } from '@/components/coding/CodeGameLayout';
import { Button } from '@/components/ui/button';
import { runCode, validateCode, type TestCase } from '@/lib/code-runner';
import {
  Bug,
  Trophy,
  Zap,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Eye,
  Lightbulb,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import bugsData from '@/data/coding-challenges/debug-arena.json';

interface BugChallenge {
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'python';
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  buggyCode: string;
  correctCode: string;
  testCases: Array<{
    input: string[];
    expectedOutput: string;
  }>;
  hints: string[];
  explanation: string;
}

type GamePhase = 'select' | 'debugging' | 'result';

export default function DebugArenaClient() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [selectedBug, setSelectedBug] = useState<BugChallenge | null>(null);
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [result, setResult] = useState<{
    passed: boolean;
    score: number;
  } | null>(null);

  const bugs = bugsData.bugs as BugChallenge[];

  const startDebugging = (bug: BugChallenge) => {
    setSelectedBug(bug);
    setPhase('debugging');
    setUsedHints([]);
    setResult(null);
  };

  const handleRun = useCallback(
    async (code: string) => {
      if (!selectedBug) throw new Error('No bug selected');
      const result = await runCode(code, selectedBug.language as Language);
      return {
        output: result.output,
        error: result.error,
        executionTime: result.executionTime,
      };
    },
    [selectedBug],
  );

  const handleSubmit = useCallback(
    async (code: string) => {
      if (!selectedBug) throw new Error('No bug selected');

      const testCases: TestCase[] = selectedBug.testCases.map((tc) => ({
        input: tc.input,
        expectedOutput: tc.expectedOutput,
      }));

      // Wrap user's fixed code with function call
      const wrappedCode = code;
      const validationResult = await validateCode(
        wrappedCode,
        selectedBug.language as Language,
        testCases,
        selectedBug.id.includes('greet')
          ? 'greet'
          : selectedBug.id.includes('calculate')
            ? 'calculateTotal'
            : selectedBug.id.includes('getlast')
              ? 'getLastElement'
              : selectedBug.id.includes('iszero')
                ? 'isZero'
                : selectedBug.id.includes('count')
                  ? 'countToFive'
                  : 'solution',
      );

      const score = validationResult.passed
        ? selectedBug.xpReward - usedHints.length * 5
        : 0;

      setResult({
        passed: validationResult.passed,
        score: Math.max(0, score),
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
    [selectedBug, usedHints],
  );

  const handleHintUsed = (hintIndex: number) => {
    setUsedHints((prev) => [...prev, hintIndex]);
  };

  const resetGame = () => {
    setPhase('select');
    setSelectedBug(null);
    setResult(null);
    setUsedHints([]);
  };

  // Bug Selection
  if (phase === 'select') {
    return (
      <CodeGameLayout
        title="Debug Arena"
        description="Find and fix bugs in real code. Practice your debugging skills with instant feedback."
        backLink="/games/coding"
        category="Debugging Practice"
      >
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Choose a Bug to Fix</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {bugs.map((bug) => (
              <button
                key={bug.id}
                onClick={() => startDebugging(bug)}
                className="group rounded-xl border bg-card p-5 text-left transition-all hover:border-green-500 hover:shadow-lg"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'rounded px-2 py-0.5 text-xs font-semibold',
                        bug.difficulty === 'easy' &&
                          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                        bug.difficulty === 'medium' &&
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
                        bug.difficulty === 'hard' &&
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                      )}
                    >
                      {bug.difficulty}
                    </span>
                    <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium uppercase">
                      {bug.language}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                    <Zap className="h-3 w-3" />+{bug.xpReward} XP
                  </span>
                </div>
                <h3 className="mb-1 flex items-center gap-2 font-bold">
                  <Bug className="h-4 w-4 text-red-500" />
                  {bug.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {bug.description}
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
  if (phase === 'result' && result && selectedBug) {
    return (
      <CodeGameLayout
        title="Bug Squashed!"
        description={selectedBug.title}
        backLink="/games/coding"
        category="Debug Arena"
      >
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Result Card */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h2 className="mb-2 text-2xl font-bold">Bug Fixed!</h2>
            <div className="mb-6 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="text-3xl font-black text-purple-600">
                +{result.score} XP
              </span>
            </div>
          </div>

          {/* Explanation */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              What Was Wrong?
            </h3>
            <p className="mb-4 text-muted-foreground">
              {selectedBug.explanation}
            </p>

            {/* Correct Solution */}
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Eye className="h-4 w-4 text-primary" />
              Correct Solution:
            </h4>
            <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
              {selectedBug.correctCode}
            </pre>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Back to Bugs
            </Button>
            <Button onClick={() => setPhase('select')}>
              <Bug className="mr-2 h-4 w-4" />
              Fix Another Bug
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Debugging Phase
  if (!selectedBug) return null;

  return (
    <CodeGameLayout
      title={selectedBug.title}
      description={selectedBug.description}
      difficulty={selectedBug.difficulty}
      category="Debug Arena"
      xpReward={selectedBug.xpReward}
      backLink="/games/coding"
    >
      {/* Bug Alert */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <Bug className="h-6 w-6 shrink-0 text-red-500" />
        <div>
          <div className="font-semibold text-red-700 dark:text-red-400">
            Bug Detected!
          </div>
          <p className="text-sm text-red-600 dark:text-red-300">
            {selectedBug.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Code Editor (2/3) */}
        <div className="lg:col-span-2">
          <CodeEditor
            key={selectedBug.id}
            defaultCode={selectedBug.buggyCode}
            language={selectedBug.language as Language}
            onRun={handleRun}
            onSubmit={handleSubmit}
            height="400px"
          />
        </div>

        {/* Sidebar (1/3) */}
        <div className="space-y-6">
          {/* Test Cases Info */}
          <div className="rounded-xl border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              Expected Behavior
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {selectedBug.testCases.slice(0, 2).map((tc, i) => (
                <li
                  key={i}
                  className="rounded bg-muted p-2 font-mono text-xs"
                >
                  Input: {tc.input.join(', ') || '(none)'} → Output:{' '}
                  {tc.expectedOutput}
                </li>
              ))}
            </ul>
          </div>

          {/* Hints */}
          <div className="rounded-xl border bg-card p-4">
            <HintSystem
              hints={selectedBug.hints}
              xpPenalty={5}
              onHintUsed={handleHintUsed}
            />
          </div>
        </div>
      </div>
    </CodeGameLayout>
  );
}
