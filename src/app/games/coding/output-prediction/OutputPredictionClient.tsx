'use client';

import { useState, useMemo } from 'react';
import { CodeGameLayout } from '@/components/coding/CodeGameLayout';
import { Button } from '@/components/ui/button';
import {
  Terminal,
  Zap,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Eye,
  Lightbulb,
  Play,
  Shuffle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import challengesData from '@/data/coding-challenges/output-prediction.json';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  xpReward: number;
  language: 'javascript' | 'python';
  code: string;
  expectedOutput: string;
  explanation: string;
}

type GamePhase = 'select' | 'predicting' | 'revealed' | 'result';

export default function OutputPredictionClient() {
  const [phase, setPhase] = useState<GamePhase>('select');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null,
  );
  const [userPrediction, setUserPrediction] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const challenges = challengesData.challenges as Challenge[];

  // Filter by language
  const [languageFilter, setLanguageFilter] = useState<
    'all' | 'javascript' | 'python'
  >('all');

  const filteredChallenges = useMemo(() => {
    if (languageFilter === 'all') return challenges;
    return challenges.filter((c) => c.language === languageFilter);
  }, [challenges, languageFilter]);

  const startChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setPhase('predicting');
    setUserPrediction('');
    setIsCorrect(null);
  };

  const checkPrediction = () => {
    if (!selectedChallenge) return;

    // Normalize both strings for comparison
    const normalize = (str: string) =>
      str.trim().replace(/\r\n/g, '\n').replace(/\s+$/gm, '');
    const normalizedPrediction = normalize(userPrediction);
    const normalizedExpected = normalize(selectedChallenge.expectedOutput);

    const correct = normalizedPrediction === normalizedExpected;
    setIsCorrect(correct);
    setPhase('revealed');

    if (correct && !completedChallenges.includes(selectedChallenge.id)) {
      setTotalScore((prev) => prev + selectedChallenge.xpReward);
      setCompletedChallenges((prev) => [...prev, selectedChallenge.id]);
    }
  };

  const nextChallenge = () => {
    const currentIndex = challenges.findIndex(
      (c) => c.id === selectedChallenge?.id,
    );
    const nextIndex = (currentIndex + 1) % challenges.length;
    startChallenge(challenges[nextIndex]);
  };

  const randomChallenge = () => {
    const available = challenges.filter(
      (c) => !completedChallenges.includes(c.id),
    );
    if (available.length === 0) {
      startChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
    } else {
      startChallenge(available[Math.floor(Math.random() * available.length)]);
    }
  };

  const resetGame = () => {
    setPhase('select');
    setSelectedChallenge(null);
    setUserPrediction('');
    setIsCorrect(null);
  };

  // Challenge Selection
  if (phase === 'select') {
    return (
      <CodeGameLayout
        title="Output Prediction"
        description="Read code carefully and predict the output. Test your understanding of JavaScript and Python gotchas!"
        backLink="/games/coding"
        category="Code Reading"
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
          <Button
            variant="outline"
            size="sm"
            onClick={randomChallenge}
          >
            <Shuffle className="mr-2 h-4 w-4" />
            Random Challenge
          </Button>
        </div>

        {/* Language Filter */}
        <div className="mb-6 flex items-center justify-center gap-2">
          {(['all', 'javascript', 'python'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguageFilter(lang)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                languageFilter === lang
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80',
              )}
            >
              {lang === 'all'
                ? 'All Languages'
                : lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Choose a Challenge</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredChallenges.map((challenge) => {
              const isCompleted = completedChallenges.includes(challenge.id);
              return (
                <button
                  key={challenge.id}
                  onClick={() => startChallenge(challenge)}
                  className={cn(
                    'group relative rounded-xl border bg-card p-5 text-left transition-all hover:shadow-lg',
                    isCompleted
                      ? 'border-green-200 hover:border-green-400 dark:border-green-800'
                      : 'hover:border-purple-500',
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
                    <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium uppercase">
                      {challenge.language}
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                      <Zap className="h-3 w-3" />+{challenge.xpReward} XP
                    </span>
                  </div>
                  <h3 className="mb-1 flex items-center gap-2 font-bold">
                    <Terminal className="h-4 w-4 text-purple-500" />
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

  // Predicting Phase
  if (phase === 'predicting' && selectedChallenge) {
    return (
      <CodeGameLayout
        title={selectedChallenge.title}
        description={selectedChallenge.description}
        difficulty={selectedChallenge.difficulty}
        category={selectedChallenge.category}
        xpReward={selectedChallenge.xpReward}
        backLink="/games/coding"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Code Display */}
          <div className="rounded-xl border bg-card">
            <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
              <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold uppercase text-primary">
                {selectedChallenge.language}
              </span>
              <span className="text-sm text-muted-foreground">Read-only</span>
            </div>
            <pre className="overflow-auto p-4 font-mono text-sm leading-relaxed">
              <code>{selectedChallenge.code}</code>
            </pre>
          </div>

          {/* Prediction Input */}
          <div className="space-y-3">
            <label className="block text-sm font-medium">
              What will this code output?
            </label>
            <textarea
              value={userPrediction}
              onChange={(e) => setUserPrediction(e.target.value)}
              placeholder="Type your prediction here... (include each line of output)"
              className="min-h-[120px] w-full rounded-xl border bg-background p-4 font-mono text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-xs text-muted-foreground">
              Tip: Type each output line exactly as it would appear in the
              console.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={checkPrediction}
              disabled={!userPrediction.trim()}
            >
              <Play className="mr-2 h-4 w-4" />
              Check Prediction
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  // Revealed Phase
  if (phase === 'revealed' && selectedChallenge) {
    return (
      <CodeGameLayout
        title={selectedChallenge.title}
        description={selectedChallenge.description}
        difficulty={selectedChallenge.difficulty}
        category={selectedChallenge.category}
        xpReward={selectedChallenge.xpReward}
        backLink="/games/coding"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Result Banner */}
          <div
            className={cn(
              'rounded-2xl border p-6 text-center',
              isCorrect
                ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
            )}
          >
            {isCorrect ? (
              <>
                <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-600" />
                <h2 className="mb-2 text-xl font-bold text-green-700 dark:text-green-400">
                  Correct! 🎉
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <span className="text-xl font-bold text-purple-600">
                    +{selectedChallenge.xpReward} XP
                  </span>
                </div>
              </>
            ) : (
              <>
                <XCircle className="mx-auto mb-3 h-12 w-12 text-red-600" />
                <h2 className="mb-2 text-xl font-bold text-red-700 dark:text-red-400">
                  Not Quite!
                </h2>
                <p className="text-red-600 dark:text-red-300">
                  Don&apos;t worry, this is a tricky one. See the explanation
                  below.
                </p>
              </>
            )}
          </div>

          {/* Code */}
          <div className="rounded-xl border bg-card">
            <div className="border-b bg-muted/30 px-4 py-2">
              <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold uppercase text-primary">
                {selectedChallenge.language}
              </span>
            </div>
            <pre className="overflow-auto p-4 font-mono text-sm leading-relaxed">
              <code>{selectedChallenge.code}</code>
            </pre>
          </div>

          {/* Comparison */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-4">
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                Your Prediction
              </h3>
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {userPrediction || '(empty)'}
              </pre>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <h3 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                Actual Output
              </h3>
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {selectedChallenge.expectedOutput}
              </pre>
            </div>
          </div>

          {/* Explanation */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Explanation
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {selectedChallenge.explanation}
            </p>
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
            <Button onClick={nextChallenge}>
              <ChevronRight className="mr-2 h-4 w-4" />
              Next Challenge
            </Button>
          </div>
        </div>
      </CodeGameLayout>
    );
  }

  return null;
}
