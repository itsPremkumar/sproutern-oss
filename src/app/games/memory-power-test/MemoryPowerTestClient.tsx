'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  Hash,
  Eye,
  FileText,
  Trophy,
  ArrowRight,
} from 'lucide-react';

type TestPhase =
  | 'intro'
  | 'number-show'
  | 'number-input'
  | 'visual-show'
  | 'visual-input'
  | 'word-show'
  | 'word-input'
  | 'result';

interface TestState {
  phase: TestPhase;
  // Number memory
  numberSequence: string;
  numberInput: string;
  numberScore: number;
  numberMaxLength: number;
  // Visual memory
  visualPattern: number[];
  visualInput: number[];
  visualScore: number;
  visualGridSize: number;
  // Word memory
  words: string[];
  wordInput: string[];
  wordScore: number;
  // Overall
  currentTest: 'number' | 'visual' | 'word';
}

const wordBank = [
  'apple',
  'bridge',
  'cloud',
  'dance',
  'eagle',
  'flower',
  'garden',
  'harbor',
  'island',
  'jungle',
  'knight',
  'lantern',
  'mountain',
  'nature',
  'ocean',
  'palace',
  'queen',
  'river',
  'sunset',
  'tower',
  'umbrella',
  'valley',
  'window',
  'yellow',
  'zebra',
  'anchor',
  'basket',
  'candle',
  'dragon',
  'forest',
];

export default function MemoryPowerTestClient() {
  const [testState, setTestState] = useState<TestState>({
    phase: 'intro',
    numberSequence: '',
    numberInput: '',
    numberScore: 0,
    numberMaxLength: 4,
    visualPattern: [],
    visualInput: [],
    visualScore: 0,
    visualGridSize: 4,
    words: [],
    wordInput: [],
    wordScore: 0,
    currentTest: 'number',
  });
  const [countdown, setCountdown] = useState(0);
  const [wordInputText, setWordInputText] = useState('');

  const generateNumberSequence = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10).toString();
    }
    return result;
  };

  const generateVisualPattern = (gridSize: number, count: number) => {
    const pattern: number[] = [];
    while (pattern.length < count) {
      const cell = Math.floor(Math.random() * gridSize * gridSize);
      if (!pattern.includes(cell)) pattern.push(cell);
    }
    return pattern;
  };

  const generateWords = (count: number) => {
    const shuffled = [...wordBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const startTest = useCallback(() => {
    const sequence = generateNumberSequence(4);
    setTestState({
      phase: 'number-show',
      numberSequence: sequence,
      numberInput: '',
      numberScore: 0,
      numberMaxLength: 4,
      visualPattern: [],
      visualInput: [],
      visualScore: 0,
      visualGridSize: 4,
      words: [],
      wordInput: [],
      wordScore: 0,
      currentTest: 'number',
    });
    setCountdown(3);
  }, []);

  // Countdown timer for show phases
  useEffect(() => {
    if (!['number-show', 'visual-show', 'word-show'].includes(testState.phase))
      return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTestState((prev) => {
        if (prev.phase === 'number-show')
          return { ...prev, phase: 'number-input' };
        if (prev.phase === 'visual-show')
          return { ...prev, phase: 'visual-input' };
        if (prev.phase === 'word-show') return { ...prev, phase: 'word-input' };
        return prev;
      });
    }
  }, [testState.phase, countdown]);

  const handleNumberSubmit = () => {
    const isCorrect = testState.numberInput === testState.numberSequence;

    if (isCorrect && testState.numberMaxLength < 12) {
      // Increase difficulty
      const newLength = testState.numberMaxLength + 1;
      const newSequence = generateNumberSequence(newLength);
      setTestState((prev) => ({
        ...prev,
        phase: 'number-show',
        numberSequence: newSequence,
        numberInput: '',
        numberScore: prev.numberScore + prev.numberMaxLength * 5,
        numberMaxLength: newLength,
      }));
      setCountdown(3);
    } else {
      // Move to visual test
      const pattern = generateVisualPattern(4, 4);
      setTestState((prev) => ({
        ...prev,
        phase: 'visual-show',
        currentTest: 'visual',
        visualPattern: pattern,
        visualInput: [],
        numberScore: isCorrect
          ? prev.numberScore + prev.numberMaxLength * 5
          : prev.numberScore,
      }));
      setCountdown(3);
    }
  };

  const handleVisualCellClick = (index: number) => {
    if (testState.phase !== 'visual-input') return;
    if (testState.visualInput.includes(index)) return;

    const newInput = [...testState.visualInput, index];
    setTestState((prev) => ({ ...prev, visualInput: newInput }));

    if (newInput.length >= testState.visualPattern.length) {
      // Check result
      const correct = newInput.filter((i) =>
        testState.visualPattern.includes(i),
      ).length;
      const scoreBonus = correct * 10;

      if (
        correct === testState.visualPattern.length &&
        testState.visualGridSize < 6
      ) {
        // Increase difficulty
        const newSize = testState.visualGridSize;
        const newPatternCount = Math.min(
          testState.visualPattern.length + 1,
          newSize * newSize - 2,
        );
        const newPattern = generateVisualPattern(newSize, newPatternCount);
        setTestState((prev) => ({
          ...prev,
          phase: 'visual-show',
          visualPattern: newPattern,
          visualInput: [],
          visualScore: prev.visualScore + scoreBonus,
        }));
        setCountdown(3);
      } else {
        // Move to word test
        const words = generateWords(6);
        setTestState((prev) => ({
          ...prev,
          phase: 'word-show',
          currentTest: 'word',
          words,
          wordInput: [],
          visualScore: prev.visualScore + scoreBonus,
        }));
        setCountdown(5);
      }
    }
  };

  const handleWordSubmit = () => {
    const entered = wordInputText
      .toLowerCase()
      .trim()
      .split(/[\s,]+/)
      .filter((w) => w);
    const correct = entered.filter((w) =>
      testState.words.map((w) => w.toLowerCase()).includes(w),
    );
    const wordScore = correct.length * 15;

    setTestState((prev) => ({
      ...prev,
      phase: 'result',
      wordInput: correct,
      wordScore,
    }));
  };

  const getTotalScore = () =>
    testState.numberScore + testState.visualScore + testState.wordScore;

  const getMemoryRating = (score: number) => {
    if (score >= 150)
      return { text: 'Excellent', emoji: '🏆', color: 'text-emerald-600' };
    if (score >= 100)
      return { text: 'Good', emoji: '🌟', color: 'text-blue-600' };
    if (score >= 60)
      return { text: 'Average', emoji: '👍', color: 'text-yellow-600' };
    return { text: 'Keep Practicing', emoji: '💪', color: 'text-orange-600' };
  };

  if (testState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Memory Power Test
          </h2>

          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Hash className="mt-1 h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-600">
                  1. Number Memory
                </h3>
                <p className="text-sm text-muted-foreground">
                  Remember sequences of increasing length
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Eye className="mt-1 h-6 w-6 text-purple-600" />
              <div>
                <h3 className="font-semibold text-purple-600">
                  2. Visual Memory
                </h3>
                <p className="text-sm text-muted-foreground">
                  Remember patterns on a grid
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <FileText className="mt-1 h-6 w-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-600">3. Word Memory</h3>
                <p className="text-sm text-muted-foreground">
                  Remember a list of words
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={startTest}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Test
          </Button>
        </div>
      </div>
    );
  }

  if (testState.phase === 'result') {
    const totalScore = getTotalScore();
    const rating = getMemoryRating(totalScore);

    return (
      <div className="rounded-2xl border bg-gradient-to-br from-card to-muted/30 p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mb-4 text-6xl">{rating.emoji}</div>
          <h2 className="mb-2 text-3xl font-black">Test Complete!</h2>
          <p className={cn('text-xl font-bold', rating.color)}>{rating.text}</p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
            <span className="text-4xl font-black">{totalScore}</span>
            <span className="text-sm opacity-90">Total Score</span>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/20">
            <Hash className="mx-auto mb-2 h-6 w-6 text-blue-600" />
            <div className="text-2xl font-bold text-blue-600">
              {testState.numberScore}
            </div>
            <div className="text-xs text-muted-foreground">Number Memory</div>
            <div className="text-xs text-muted-foreground">
              Max: {testState.numberMaxLength - 1} digits
            </div>
          </div>
          <div className="rounded-xl bg-purple-50 p-4 text-center dark:bg-purple-900/20">
            <Eye className="mx-auto mb-2 h-6 w-6 text-purple-600" />
            <div className="text-2xl font-bold text-purple-600">
              {testState.visualScore}
            </div>
            <div className="text-xs text-muted-foreground">Visual Memory</div>
          </div>
          <div className="rounded-xl bg-green-50 p-4 text-center dark:bg-green-900/20">
            <FileText className="mx-auto mb-2 h-6 w-6 text-green-600" />
            <div className="text-2xl font-bold text-green-600">
              {testState.wordScore}
            </div>
            <div className="text-xs text-muted-foreground">Word Memory</div>
            <div className="text-xs text-muted-foreground">
              {testState.wordInput.length}/{testState.words.length} words
            </div>
          </div>
        </div>

        <Button
          size="lg"
          onClick={() => setTestState((prev) => ({ ...prev, phase: 'intro' }))}
          className="w-full gap-2"
        >
          <RotateCcw className="h-5 w-5" />
          Take Test Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex justify-center gap-2">
        {['number', 'visual', 'word'].map((test) => (
          <div
            key={test}
            className={cn(
              'h-3 w-20 rounded-full',
              testState.currentTest === test
                ? 'bg-primary'
                : ['number', 'visual', 'word'].indexOf(test) <
                    ['number', 'visual', 'word'].indexOf(testState.currentTest)
                  ? 'bg-green-500'
                  : 'bg-muted',
            )}
          />
        ))}
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Number Memory Test */}
        {testState.phase === 'number-show' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-blue-600">
              <Hash className="h-5 w-5" />
              Memorize this number!
            </div>
            <div className="mb-4 font-mono text-6xl font-bold tracking-widest text-primary">
              {testState.numberSequence}
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              {countdown}
            </div>
          </div>
        )}

        {testState.phase === 'number-input' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
              <Hash className="h-5 w-5 text-primary" />
              Type the number you saw
            </div>
            <input
              type="text"
              value={testState.numberInput}
              onChange={(e) =>
                setTestState((prev) => ({
                  ...prev,
                  numberInput: e.target.value.replace(/\D/g, ''),
                }))
              }
              className="mx-auto block w-full max-w-xs rounded-lg border-2 border-primary p-4 text-center font-mono text-3xl"
              autoFocus
              placeholder="Enter number..."
            />
            <Button
              onClick={handleNumberSubmit}
              size="lg"
              className="mt-4 gap-2"
            >
              Submit <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Visual Memory Test */}
        {testState.phase === 'visual-show' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-purple-600">
              <Eye className="h-5 w-5" />
              Memorize this pattern!
            </div>
            <div className="mb-4 text-2xl font-bold text-muted-foreground">
              {countdown}
            </div>
            <div
              className="mx-auto grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${testState.visualGridSize}, minmax(0, 1fr))`,
                maxWidth: 240,
              }}
            >
              {Array.from({
                length: testState.visualGridSize * testState.visualGridSize,
              }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'aspect-square rounded-lg border-2',
                    testState.visualPattern.includes(i)
                      ? 'border-primary bg-primary'
                      : 'border-border bg-muted',
                  )}
                />
              ))}
            </div>
          </div>
        )}

        {testState.phase === 'visual-input' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
              <Eye className="h-5 w-5 text-primary" />
              Click the cells you remember (
              {testState.visualPattern.length -
                testState.visualInput.length}{' '}
              left)
            </div>
            <div
              className="mx-auto grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${testState.visualGridSize}, minmax(0, 1fr))`,
                maxWidth: 240,
              }}
            >
              {Array.from({
                length: testState.visualGridSize * testState.visualGridSize,
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleVisualCellClick(i)}
                  disabled={testState.visualInput.includes(i)}
                  className={cn(
                    'aspect-square rounded-lg border-2 transition-colors',
                    testState.visualInput.includes(i)
                      ? 'border-primary bg-primary'
                      : 'cursor-pointer border-border bg-muted hover:border-primary',
                  )}
                />
              ))}
            </div>
          </div>
        )}

        {/* Word Memory Test */}
        {testState.phase === 'word-show' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-green-600">
              <FileText className="h-5 w-5" />
              Memorize these words!
            </div>
            <div className="mb-4 text-2xl font-bold text-muted-foreground">
              {countdown}
            </div>
            <div className="mx-auto flex max-w-md flex-wrap justify-center gap-3">
              {testState.words.map((word, i) => (
                <span
                  key={i}
                  className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}

        {testState.phase === 'word-input' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
              <FileText className="h-5 w-5 text-primary" />
              Type all the words you remember
            </div>
            <textarea
              value={wordInputText}
              onChange={(e) => setWordInputText(e.target.value)}
              className="mx-auto block w-full max-w-md rounded-lg border-2 border-primary p-4 text-lg"
              rows={4}
              autoFocus
              placeholder="Enter words separated by spaces or commas..."
            />
            <Button
              onClick={handleWordSubmit}
              size="lg"
              className="mt-4 gap-2"
            >
              Submit <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
