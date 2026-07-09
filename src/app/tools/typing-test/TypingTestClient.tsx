'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

// Word lists for different difficulties
const EASY_WORDS = [
  'the',
  'be',
  'to',
  'of',
  'and',
  'a',
  'in',
  'that',
  'have',
  'I',
  'it',
  'for',
  'not',
  'on',
  'with',
  'he',
  'as',
  'you',
  'do',
  'at',
  'this',
  'but',
  'his',
  'by',
  'from',
  'they',
  'we',
  'say',
  'her',
  'she',
  'or',
  'an',
  'will',
  'my',
  'one',
  'all',
  'would',
  'there',
  'their',
  'what',
  'so',
  'up',
  'out',
  'if',
  'about',
  'who',
  'get',
  'which',
  'go',
  'me',
];

const MEDIUM_WORDS = [
  'time',
  'person',
  'year',
  'way',
  'day',
  'thing',
  'man',
  'world',
  'life',
  'hand',
  'part',
  'child',
  'eye',
  'woman',
  'place',
  'work',
  'week',
  'case',
  'point',
  'government',
  'company',
  'number',
  'group',
  'problem',
  'fact',
  'between',
  'under',
  'water',
  'through',
  'back',
  'much',
  'before',
  'line',
  'right',
  'money',
  'business',
  'service',
  'question',
  'school',
  'state',
  'because',
  'during',
  'information',
];

const HARD_WORDS = [
  'development',
  'experience',
  'technology',
  'understanding',
  'opportunity',
  'organization',
  'significant',
  'relationship',
  'performance',
  'responsibility',
  'communication',
  'implementation',
  'administration',
  'infrastructure',
  'environmental',
  'investigation',
  'authorization',
  'recommendation',
  'characterization',
  'acknowledgment',
];

type Difficulty = 'easy' | 'medium' | 'hard';
type Duration = 15 | 30 | 60 | 120;

interface Stats {
  wpm: number;
  accuracy: number;
  raw: number;
  errors: number;
  correct: number;
}

export default function TypingTestClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [duration, setDuration] = useState<Duration>(30);
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [stats, setStats] = useState<Stats>({
    wpm: 0,
    accuracy: 100,
    raw: 0,
    errors: 0,
    correct: 0,
  });
  const [typedChars, setTypedChars] = useState<string[]>([]);
  const [errorIndexes, setErrorIndexes] = useState<Set<number>>(new Set());

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const totalCharsTypedRef = useRef<number>(0);
  const correctCharsRef = useRef<number>(0);

  // Generate random words based on difficulty
  const generateWords = useCallback(
    (diff: Difficulty, count: number = 100): string[] => {
      const wordList =
        diff === 'easy'
          ? EASY_WORDS
          : diff === 'medium'
            ? MEDIUM_WORDS
            : HARD_WORDS;
      const generated: string[] = [];
      for (let i = 0; i < count; i++) {
        generated.push(wordList[Math.floor(Math.random() * wordList.length)]);
      }
      return generated;
    },
    [],
  );

  // Initialize words on mount or when difficulty changes
  useEffect(() => {
    setWords(generateWords(difficulty));
  }, [difficulty, generateWords]);

  // Timer logic
  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            finishTest();
            return 0 as Duration;
          }
          return (prev - 1) as Duration;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, finished, timeLeft]);

  // Calculate stats in real-time
  useEffect(() => {
    if (started && !finished) {
      const timeElapsed = (Date.now() - startTimeRef.current) / 1000 / 60; // in minutes
      if (timeElapsed > 0) {
        const rawWPM = Math.round(totalCharsTypedRef.current / 5 / timeElapsed);
        const netWPM = Math.max(
          0,
          Math.round(correctCharsRef.current / 5 / timeElapsed),
        );
        const accuracy =
          totalCharsTypedRef.current > 0
            ? Math.round(
                (correctCharsRef.current / totalCharsTypedRef.current) * 100,
              )
            : 100;

        setStats({
          wpm: netWPM,
          raw: rawWPM,
          accuracy,
          errors: totalCharsTypedRef.current - correctCharsRef.current,
          correct: correctCharsRef.current,
        });
      }
    }
  }, [input, started, finished]);

  const startTest = () => {
    setStarted(true);
    setFinished(false);
    setTimeLeft(duration);
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setInput('');
    setTypedChars([]);
    setErrorIndexes(new Set());
    startTimeRef.current = Date.now();
    totalCharsTypedRef.current = 0;
    correctCharsRef.current = 0;
    setStats({ wpm: 0, accuracy: 100, raw: 0, errors: 0, correct: 0 });
    inputRef.current?.focus();
  };

  const finishTest = () => {
    setFinished(true);
    setStarted(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const reset = () => {
    setStarted(false);
    setFinished(false);
    setTimeLeft(duration);
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setInput('');
    setTypedChars([]);
    setErrorIndexes(new Set());
    setWords(generateWords(difficulty));
    totalCharsTypedRef.current = 0;
    correctCharsRef.current = 0;
    setStats({ wpm: 0, accuracy: 100, raw: 0, errors: 0, correct: 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!started) {
      startTest();
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      reset();
    }
  };

  const handleInputChange = (value: string) => {
    if (!started || finished) return;

    const currentWord = words[currentWordIndex];

    // Handle space - move to next word
    if (value.endsWith(' ')) {
      const typedWord = value.trim();

      // Track accuracy for this word
      for (let i = 0; i < Math.max(typedWord.length, currentWord.length); i++) {
        totalCharsTypedRef.current++;
        if (typedWord[i] === currentWord[i]) {
          correctCharsRef.current++;
        }
      }
      // Account for the space
      totalCharsTypedRef.current++;
      correctCharsRef.current++; // Space is always correct

      setCurrentWordIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
      setInput('');
      setTypedChars([]);
      return;
    }

    setInput(value);

    // Track character-by-character
    const newTypedChars = value.split('');
    setTypedChars(newTypedChars);

    // Mark errors
    const newErrors = new Set<number>();
    newTypedChars.forEach((char, idx) => {
      if (char !== currentWord[idx]) {
        newErrors.add(idx);
      }
    });
    setErrorIndexes(newErrors);
    setCurrentCharIndex(value.length);
  };

  const handleDifficultyChange = (diff: Difficulty) => {
    setDifficulty(diff);
    reset();
  };

  const handleDurationChange = (dur: Duration) => {
    setDuration(dur);
    setTimeLeft(dur);
    reset();
  };

  return (
    <div className="container mx-auto max-w-5xl py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Advanced Typing Speed Test
        </h1>
        <p className="text-xl text-muted-foreground">
          Test your typing speed and accuracy with real-time feedback
        </p>
      </div>

      {/* Stats Bar */}
      {(started || finished) && (
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">WPM</p>
              <p className="text-3xl font-bold text-primary">{stats.wpm}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Accuracy</p>
              <p className="text-3xl font-bold text-green-600">
                {stats.accuracy}%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Raw</p>
              <p className="text-3xl font-bold text-orange-600">{stats.raw}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Errors</p>
              <p className="text-3xl font-bold text-red-600">{stats.errors}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="text-3xl font-bold">{timeLeft}s</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Settings */}
      {!started && !finished && (
        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Duration:</span>
              {([15, 30, 60, 120] as Duration[]).map((dur) => (
                <Button
                  key={dur}
                  variant={duration === dur ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleDurationChange(dur)}
                >
                  {dur}s
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Difficulty:</span>
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                <Button
                  key={diff}
                  variant={difficulty === diff ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleDifficultyChange(diff)}
                  className="capitalize"
                >
                  {diff}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Typing Area */}
      <Card className="shadow-lg">
        <CardContent className="pb-8 pt-8">
          {!started && !finished && (
            <div className="py-12 text-center">
              <p className="mb-4 text-lg text-muted-foreground">
                Click in the box below or start typing to begin
              </p>
              <Badge
                variant="secondary"
                className="text-sm"
              >
                <Info className="mr-1 h-3 w-3" />
                Press Tab to restart anytime
              </Badge>
            </div>
          )}

          {/* Word Display */}
          {(started || finished) && (
            <div className="mb-6 flex min-h-[200px] flex-wrap gap-2 rounded-lg bg-muted/30 p-6 text-2xl leading-relaxed">
              {words.slice(0, currentWordIndex + 20).map((word, wordIdx) => (
                <div
                  key={wordIdx}
                  className={cn(
                    'inline-flex',
                    wordIdx === currentWordIndex && 'opacity-100',
                    wordIdx < currentWordIndex && 'opacity-40',
                    wordIdx > currentWordIndex && 'opacity-60',
                  )}
                >
                  {word.split('').map((char, charIdx) => {
                    const isCurrentWord = wordIdx === currentWordIndex;
                    const isTyped =
                      isCurrentWord && charIdx < typedChars.length;
                    const isError = isCurrentWord && errorIndexes.has(charIdx);
                    const isCorrect = isCurrentWord && isTyped && !isError;
                    const isCursor =
                      isCurrentWord && charIdx === currentCharIndex;

                    return (
                      <span
                        key={charIdx}
                        className={cn(
                          'relative',
                          isCorrect && 'text-foreground',
                          isError && 'bg-red-500/20 text-red-500',
                          !isTyped &&
                            wordIdx === currentWordIndex &&
                            'text-muted-foreground',
                          isCursor && 'animate-pulse border-l-2 border-primary',
                        )}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {/* Show cursor after word if all chars are typed */}
                  {wordIdx === currentWordIndex &&
                    currentCharIndex === word.length && (
                      <span className="ml-[1px] animate-pulse border-l-2 border-primary" />
                    )}
                </div>
              ))}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={finished}
            className={cn(
              'w-full rounded-lg border-2 px-4 py-3 text-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary',
              started && !finished ? 'opacity-100' : 'opacity-50',
              errorIndexes.size > 0 ? 'border-red-500' : 'border-border',
            )}
            placeholder={
              !started ? 'Click here or start typing to begin...' : ''
            }
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />

          {/* Reset Button */}
          {(started || finished) && (
            <div className="mt-4 flex justify-center">
              <Button
                onClick={reset}
                variant="outline"
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Restart (Tab)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {finished && (
        <div className="mt-8">
          <Card className="border-2 border-primary shadow-lg">
            <CardContent className="pt-8">
              <h2 className="mb-6 text-center text-2xl font-bold">
                Test Complete!
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-primary/5 p-6 text-center">
                  <p className="mb-2 text-sm text-muted-foreground">
                    Words Per Minute
                  </p>
                  <p className="text-6xl font-bold text-primary">{stats.wpm}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stats.wpm < 30 && 'Keep practicing!'}
                    {stats.wpm >= 30 && stats.wpm < 50 && 'Good progress!'}
                    {stats.wpm >= 50 && stats.wpm < 70 && 'Great work!'}
                    {stats.wpm >= 70 && stats.wpm < 90 && 'Excellent!'}
                    {stats.wpm >= 90 && 'Outstanding!'}
                  </p>
                </div>
                <div className="rounded-lg bg-green-500/5 p-6 text-center">
                  <p className="mb-2 text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-6xl font-bold text-green-600">
                    {stats.accuracy}%
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stats.correct} correct, {stats.errors} errors
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Info Section */}
      <div className="prose prose-lg mt-16 max-w-none">
        <h2>About Advanced Typing Test</h2>
        <p>
          Our advanced typing test provides real-time feedback on your typing
          speed and accuracy, similar to popular platforms like Monkeytype.
          Features include:
        </p>
        <ul>
          <li>Real-time WPM and accuracy tracking</li>
          <li>Character-by-character visual feedback</li>
          <li>Multiple test durations (15s, 30s, 60s, 120s)</li>
          <li>Different difficulty levels (easy, medium, hard)</li>
          <li>Instant restart with Tab key</li>
          <li>Professional typing metrics</li>
        </ul>
        <h3>Typing Speed Benchmarks</h3>
        <ul>
          <li>
            <strong>Beginner:</strong> 20-30 WPM
          </li>
          <li>
            <strong>Average:</strong> 40-50 WPM
          </li>
          <li>
            <strong>Advanced:</strong> 60-80 WPM
          </li>
          <li>
            <strong>Professional:</strong> 80+ WPM
          </li>
          <li>
            <strong>Expert:</strong> 100+ WPM
          </li>
        </ul>
      </div>
    </div>
  );
}
