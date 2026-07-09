'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, ArrowRight, ArrowLeftRight } from 'lucide-react';

interface WordPair {
  word: string;
  synonym: string;
  definition: string;
}

interface Problem {
  word: string;
  correctAnswer: string;
  options: string[];
  definition: string;
}

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentProblem: Problem | null;
  selectedAnswer: string | null;
}

const wordPairs: WordPair[] = [
  {
    word: 'happy',
    synonym: 'joyful',
    definition: 'Feeling or showing pleasure',
  },
  { word: 'big', synonym: 'large', definition: 'Of great size or extent' },
  {
    word: 'smart',
    synonym: 'intelligent',
    definition: 'Having good mental capacity',
  },
  { word: 'fast', synonym: 'quick', definition: 'Moving at high speed' },
  {
    word: 'beautiful',
    synonym: 'gorgeous',
    definition: 'Pleasing to the senses',
  },
  {
    word: 'angry',
    synonym: 'furious',
    definition: 'Feeling strong displeasure',
  },
  { word: 'sad', synonym: 'sorrowful', definition: 'Feeling unhappy' },
  { word: 'brave', synonym: 'courageous', definition: 'Ready to face danger' },
  {
    word: 'difficult',
    synonym: 'challenging',
    definition: 'Hard to accomplish',
  },
  { word: 'easy', synonym: 'simple', definition: 'Not hard to do' },
  {
    word: 'important',
    synonym: 'significant',
    definition: 'Of great consequence',
  },
  { word: 'strange', synonym: 'peculiar', definition: 'Unusual or odd' },
  {
    word: 'old',
    synonym: 'ancient',
    definition: 'Having lived for many years',
  },
  { word: 'new', synonym: 'novel', definition: 'Recently made or discovered' },
  { word: 'quiet', synonym: 'silent', definition: 'Making little noise' },
  { word: 'loud', synonym: 'noisy', definition: 'Making much noise' },
  {
    word: 'rich',
    synonym: 'wealthy',
    definition: 'Having great material wealth',
  },
  {
    word: 'poor',
    synonym: 'impoverished',
    definition: 'Lacking material wealth',
  },
  { word: 'start', synonym: 'begin', definition: 'To commence an action' },
  { word: 'end', synonym: 'conclude', definition: 'To bring to a finish' },
  { word: 'help', synonym: 'assist', definition: 'To give aid to' },
  { word: 'hurt', synonym: 'injure', definition: 'To cause physical pain' },
  {
    word: 'strong',
    synonym: 'powerful',
    definition: 'Having great physical force',
  },
  { word: 'weak', synonym: 'feeble', definition: 'Lacking strength' },
];

const difficultySettings = {
  easy: { rounds: 8 },
  medium: { rounds: 10 },
  hard: { rounds: 12 },
};

export default function SynonymMatchClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    totalRounds: 8,
    correctAnswers: 0,
    currentProblem: null,
    selectedAnswer: null,
  });
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());

  const settings = difficultySettings[difficulty];

  const generateProblem = useCallback((): Problem => {
    const availablePairs = wordPairs.filter((p) => !usedWords.has(p.word));
    const pairToUse =
      availablePairs.length > 0
        ? availablePairs[Math.floor(Math.random() * availablePairs.length)]
        : wordPairs[Math.floor(Math.random() * wordPairs.length)];

    setUsedWords((prev) => new Set([...prev, pairToUse.word]));

    const otherSynonyms = wordPairs
      .filter((p) => p.word !== pairToUse.word)
      .map((p) => p.synonym)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [pairToUse.synonym, ...otherSynonyms].sort(
      () => Math.random() - 0.5,
    );

    return {
      word: pairToUse.word,
      correctAnswer: pairToUse.synonym,
      options,
      definition: pairToUse.definition,
    };
  }, [usedWords]);

  const startGame = useCallback(() => {
    setUsedWords(new Set());
    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: settings.rounds,
      correctAnswers: 0,
      currentProblem: generateProblem(),
      selectedAnswer: null,
    });
  }, [generateProblem, settings.rounds]);

  const handleAnswer = (answer: string) => {
    if (gameState.phase !== 'playing' || !gameState.currentProblem) return;

    const isCorrect = answer === gameState.currentProblem.correctAnswer;
    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      score: isCorrect ? prev.score + 15 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    setGameState((prev) => {
      if (prev.round >= prev.totalRounds) {
        return { ...prev, phase: 'result' };
      }
      return {
        ...prev,
        phase: 'playing',
        round: prev.round + 1,
        currentProblem: generateProblem(),
        selectedAnswer: null,
      };
    });
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={difficulty}
            onChange={setDifficulty}
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>A word will be shown to you</li>
              <li>Choose the word that means the same (synonym)</li>
              <li>Learn new words as you play!</li>
            </ol>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Game
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalRounds - gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const isCorrect =
    gameState.selectedAnswer === gameState.currentProblem?.correctAnswer;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.round}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Round</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-sky-50 p-3 text-center dark:bg-sky-900/20">
          <div className="text-2xl font-bold text-sky-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center">
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <ArrowLeftRight className="h-4 w-4" />
            Find the synonym for:
          </span>
        </div>
        <div className="mb-6 text-center">
          <span className="text-4xl font-bold uppercase text-primary">
            {gameState.currentProblem?.word}
          </span>
        </div>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          {gameState.currentProblem?.options.map((option, index) => {
            const isSelected = gameState.selectedAnswer === option;
            const isCorrectOption =
              option === gameState.currentProblem?.correctAnswer;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => handleAnswer(option)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-14 text-lg font-bold capitalize',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                {option}
              </Button>
            );
          })}
        </div>

        {gameState.phase === 'feedback' && (
          <div className="mt-6 text-center">
            <div
              className={cn(
                'mb-2 text-lg font-bold',
                isCorrect ? 'text-green-600' : 'text-red-600',
              )}
            >
              {isCorrect ? '✓ Correct!' : '✗ Wrong!'}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              <strong className="capitalize">
                {gameState.currentProblem?.word}
              </strong>{' '}
              means: {gameState.currentProblem?.definition}
            </p>
            <Button
              onClick={nextRound}
              className="gap-2"
            >
              {gameState.round >= gameState.totalRounds
                ? 'See Results'
                : 'Next Question'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
