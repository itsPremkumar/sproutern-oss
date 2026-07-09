'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  ArrowRight,
  PenTool,
  Volume2,
  Eye,
  EyeOff,
} from 'lucide-react';

interface WordData {
  word: string;
  hint: string;
  definition: string;
}

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentWord: WordData | null;
  userInput: string;
  showHint: boolean;
}

const wordsByDifficulty: Record<Difficulty, WordData[]> = {
  easy: [
    {
      word: 'apple',
      hint: 'A common red fruit',
      definition: 'A round fruit with red or green skin',
    },
    {
      word: 'house',
      hint: 'Where people live',
      definition: 'A building for people to live in',
    },
    {
      word: 'water',
      hint: 'Essential for life',
      definition: 'A clear liquid for drinking',
    },
    {
      word: 'happy',
      hint: 'Feeling of joy',
      definition: 'Feeling pleasure or contentment',
    },
    {
      word: 'music',
      hint: 'Art of sound',
      definition: 'Vocal or instrumental sounds',
    },
    {
      word: 'garden',
      hint: 'Where flowers grow',
      definition: 'A piece of ground for growing plants',
    },
    {
      word: 'friend',
      hint: 'Someone you like',
      definition: 'A person you know and like',
    },
    {
      word: 'school',
      hint: 'Place of learning',
      definition: 'An institution for education',
    },
    {
      word: 'table',
      hint: 'Furniture with legs',
      definition: 'A piece of furniture with a flat top',
    },
    {
      word: 'window',
      hint: 'Lets light in',
      definition: 'An opening in a wall for light',
    },
  ],
  medium: [
    {
      word: 'beautiful',
      hint: 'Very pleasing',
      definition: 'Pleasing to the senses',
    },
    {
      word: 'necessary',
      hint: 'Required or needed',
      definition: 'Essential; needed',
    },
    {
      word: 'different',
      hint: 'Not the same',
      definition: 'Not alike; distinct',
    },
    {
      word: 'important',
      hint: 'Of great value',
      definition: 'Of great significance',
    },
    {
      word: 'knowledge',
      hint: 'What you know',
      definition: 'Information and skills acquired',
    },
    {
      word: 'experience',
      hint: 'What happens to you',
      definition: 'Practical contact with events',
    },
    {
      word: 'government',
      hint: 'Rules a country',
      definition: 'The governing body of a nation',
    },
    {
      word: 'environment',
      hint: 'Surroundings',
      definition: 'The natural world around us',
    },
    {
      word: 'opportunity',
      hint: 'A chance',
      definition: 'A favorable circumstance',
    },
    {
      word: 'restaurant',
      hint: 'Place to eat out',
      definition: 'A place where meals are served',
    },
  ],
  hard: [
    {
      word: 'accommodate',
      hint: 'To make room for',
      definition: 'To provide lodging or space for',
    },
    {
      word: 'conscience',
      hint: 'Inner sense of right',
      definition: 'Moral sense of right and wrong',
    },
    {
      word: 'thoroughly',
      hint: 'Completely',
      definition: 'In a complete manner',
    },
    {
      word: 'occasionally',
      hint: 'Sometimes',
      definition: 'From time to time',
    },
    {
      word: 'maintenance',
      hint: 'Keeping in good condition',
      definition: 'The process of maintaining',
    },
    {
      word: 'embarrass',
      hint: 'To make uncomfortable',
      definition: 'To cause to feel awkward',
    },
    { word: 'guarantee', hint: 'A promise', definition: 'A formal assurance' },
    {
      word: 'pronunciation',
      hint: 'How to say words',
      definition: 'The way a word is pronounced',
    },
    {
      word: 'mischievous',
      hint: 'Playfully naughty',
      definition: 'Causing minor trouble',
    },
    {
      word: 'lieutenant',
      hint: 'Military rank',
      definition: 'An officer rank in armed forces',
    },
  ],
};

const difficultySettings = {
  easy: { rounds: 8 },
  medium: { rounds: 10 },
  hard: { rounds: 10 },
};

export default function SpellingBeeClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    totalRounds: 8,
    correctAnswers: 0,
    currentWord: null,
    userInput: '',
    showHint: false,
  });
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const inputRef = useRef<HTMLInputElement>(null);

  const settings = difficultySettings[difficulty];
  const words = wordsByDifficulty[difficulty];

  const getNextWord = useCallback((): WordData => {
    const availableWords = words.filter((w) => !usedWords.has(w.word));
    const wordToUse =
      availableWords.length > 0
        ? availableWords[Math.floor(Math.random() * availableWords.length)]
        : words[Math.floor(Math.random() * words.length)];

    setUsedWords((prev) => new Set([...prev, wordToUse.word]));
    return wordToUse;
  }, [words, usedWords]);

  const startGame = useCallback(() => {
    setUsedWords(new Set());
    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: settings.rounds,
      correctAnswers: 0,
      currentWord: getNextWord(),
      userInput: '',
      showHint: false,
    });
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [getNextWord, settings.rounds]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameState.currentWord || gameState.userInput.trim() === '') return;

    const isCorrect =
      gameState.userInput.toLowerCase().trim() ===
      gameState.currentWord.word.toLowerCase();
    const hintPenalty = gameState.showHint ? 5 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      score: isCorrect ? prev.score + 15 - hintPenalty : prev.score,
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
        currentWord: getNextWord(),
        userInput: '',
        showHint: false,
      };
    });
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const speakWord = () => {
    if (gameState.currentWord && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        gameState.currentWord.word,
      );
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (gameState.phase === 'playing' && gameState.currentWord) {
      speakWord();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.round, gameState.phase]);

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
              <li>Listen to the word (click the speaker icon)</li>
              <li>Type the word correctly</li>
              <li>Use hints if needed (reduces score)</li>
              <li>Learn the definitions of new words!</li>
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
    gameState.currentWord &&
    gameState.userInput.toLowerCase().trim() ===
      gameState.currentWord.word.toLowerCase();

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
        <div className="rounded-xl bg-amber-50 p-3 text-center dark:bg-amber-900/20">
          <div className="text-2xl font-bold text-amber-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-6 text-center">
          <span className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground">
            <PenTool className="h-4 w-4" />
            Spell this word:
          </span>

          <div className="mb-4 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={speakWord}
              className="gap-2"
            >
              <Volume2 className="h-5 w-5" />
              Listen
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                setGameState((prev) => ({ ...prev, showHint: !prev.showHint }))
              }
              className="gap-2"
            >
              {gameState.showHint ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
              {gameState.showHint ? 'Hide Hint' : 'Show Hint (-5pts)'}
            </Button>
          </div>

          {gameState.showHint && (
            <p className="mb-4 text-muted-foreground">
              Hint: {gameState.currentWord?.hint}
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            ref={inputRef}
            type="text"
            value={gameState.userInput}
            onChange={(e) =>
              setGameState((prev) => ({ ...prev, userInput: e.target.value }))
            }
            disabled={gameState.phase === 'feedback'}
            className="mx-auto block w-full max-w-md rounded-lg border-2 border-primary p-4 text-center font-mono text-2xl"
            placeholder="Type the word..."
            autoComplete="off"
          />

          {gameState.phase === 'playing' && (
            <Button
              type="submit"
              size="lg"
              className="mx-auto block w-full max-w-md gap-2"
            >
              Check Spelling
            </Button>
          )}
        </form>

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
            <p className="mb-2 text-xl font-bold">
              {gameState.currentWord?.word.toUpperCase()}
            </p>
            <p className="mb-4 text-sm text-muted-foreground">
              {gameState.currentWord?.definition}
            </p>
            <Button
              onClick={nextRound}
              className="gap-2"
            >
              {gameState.round >= gameState.totalRounds
                ? 'See Results'
                : 'Next Word'}
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
