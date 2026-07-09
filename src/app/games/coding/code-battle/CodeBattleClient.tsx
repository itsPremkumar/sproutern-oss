'use client';

import { useState, useCallback, useEffect } from 'react';
import { CodeEditor } from '@/components/coding/CodeEditor';
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
  Swords,
  Trophy,
  Clock,
  Zap,
  Code2,
  ChevronRight,
  RotateCcw,
  Eye,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import challengesData from '@/data/coding-challenges/code-battle.json';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  xpReward: number;
  timeLimit: number;
  starterCode: { javascript: string; python: string };
  testCases: Array<{
    input: string[];
    expectedOutput: string;
    description?: string;
    isHidden?: boolean;
  }>;
  hints: string[];
  aiSolution: { javascript: string; python: string };
  aiTime: number;
}

type GamePhase = 'select' | 'coding' | 'result';
type CodeLanguage = 'javascript' | 'python';

export default function CodeBattleClient() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );
  const [language, setLanguage] = useState<CodeLanguage>('javascript');
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [result, setResult] = useState<{
    passed: boolean;
    score: number;
    userTime: number;
    aiTime: number;
    beatAI: boolean;
  } | null>(null);

  const challenges = challengesData.challenges as Challenge[];

  // Timer effect
  useEffect(() => {
    if (phase !== 'coding' || !startTime) return;

    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, startTime]);

  const startChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setPhase('coding');
    setStartTime(Date.now());
    setElapsedTime(0);
    setUsedHints([]);
    setResult(null);
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

      const validationResult = await validateCode(
        code,
        language,
        testCases,
        'solution',
      );

      const userTime = Math.floor((Date.now() - startTime) / 1000);
      const score = calculateScore(validationResult, {
        baseScore: selectedChallenge.xpReward,
        usedHint: usedHints.length > 0,
        hintPenalty: usedHints.length * 5,
      });

      const beatAI = userTime < selectedChallenge.aiTime;

      setResult({
        passed: validationResult.passed,
        score: validationResult.passed ? score + (beatAI ? 20 : 0) : 0,
        userTime,
        aiTime: selectedChallenge.aiTime,
        beatAI,
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
    [selectedChallenge, language, startTime, usedHints],
  );

  const handleHintUsed = (hintIndex: number) => {
    setUsedHints((prev) => [...prev, hintIndex]);
  };

  const resetGame = () => {
    setPhase('select');
    setSelectedChallenge(null);
    setResult(null);
    setUsedHints([]);
  };

  // Challenge Selection
  if (phase === 'select') {
    return (
      <CodeGameLayout
        title="Code Battle"
        description="Solve coding challenges faster than our AI. Beat the clock to earn bonus XP!"
        backLink="/games/coding"
        category="Competitive Coding"
      >
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Choose a Challenge</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onClick={() => startChallenge(challenge)}
                className="group rounded-xl border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-2 flex items-center justify-between">
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
                  <span className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                    <Zap className="h-3 w-3" />+{challenge.xpReward} XP
                  </span>
                </div>
                <h3 className="mb-1 font-bold">{challenge.title}</h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {challenge.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Code2 className="h-3.5 w-3.5" />
                  {challenge.category}
                  <span className="ml-auto flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    AI: {challenge.aiTime}s
                  </span>
                </div>
                <ChevronRight className="absolute bottom-5 right-5 h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Result Screen
  if (phase === 'result' && result) {
    return (
      <CodeGameLayout
        title="Challenge Complete!"
        description={selectedChallenge?.title}
        backLink="/games/coding"
        category="Code Battle"
      >
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Result Card */}
          <div
            className={cn(
              'rounded-2xl border p-8 text-center',
              result.passed
                ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
            )}
          >
            {result.passed ? (
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            ) : (
              <XCircle className="mx-auto mb-4 h-16 w-16 text-red-600" />
            )}

            <h2 className="mb-2 text-2xl font-bold">
              {result.passed ? 'Victory!' : 'Keep Trying!'}
            </h2>

            {result.passed && (
              <>
                <div className="mb-6 flex items-center justify-center gap-2">
                  <Zap className="h-6 w-6 text-purple-600" />
                  <span className="text-3xl font-black text-purple-600">
                    +{result.score} XP
                  </span>
                </div>

                {/* Time Comparison */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-background p-4">
                    <div className="text-sm text-muted-foreground">
                      Your Time
                    </div>
                    <div className="text-2xl font-bold">{result.userTime}s</div>
                  </div>
                  <div className="rounded-xl bg-background p-4">
                    <div className="text-sm text-muted-foreground">AI Time</div>
                    <div className="text-2xl font-bold">{result.aiTime}s</div>
                  </div>
                </div>

                {result.beatAI && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                    <Trophy className="h-4 w-4" />
                    You Beat the AI! (+20 XP Bonus)
                  </div>
                )}
              </>
            )}
          </div>

          {/* AI Solution */}
          {result.passed && selectedChallenge && (
            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                <Eye className="h-5 w-5 text-primary" />
                AI's Solution
              </h3>
              <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
                {selectedChallenge.aiSolution[language as CodeLanguage]}
              </pre>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              New Challenge
            </Button>
            <Button onClick={() => setPhase('select')}>
              <Swords className="mr-2 h-4 w-4" />
              Play Again
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Coding Phase
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
      {/* Timer Bar */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-mono text-xl font-bold">
              {Math.floor(elapsedTime / 60)}:
              {String(elapsedTime % 60).padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            AI solved in: <strong>{selectedChallenge.aiTime}s</strong>
          </span>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
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
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Code Editor (2/3) */}
        <div className="lg:col-span-2">
          <CodeEditor
            key={`${selectedChallenge.id}-${language}`}
            defaultCode={
              selectedChallenge.starterCode[language as CodeLanguage]
            }
            language={language}
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
        </div>
      </div>
    </CodeGameLayout>
  );
}
