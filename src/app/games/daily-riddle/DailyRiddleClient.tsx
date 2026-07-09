'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  ArrowRight,
  Lightbulb,
  Eye,
  EyeOff,
} from 'lucide-react';

interface Riddle {
  question: string;
  answer: string;
  hint: string;
  options: string[];
}

interface GameState {
  phase: 'intro' | 'playing' | 'feedback' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentRiddle: Riddle | null;
  selectedAnswer: string | null;
  showHint: boolean;
}

// Riddles database - 35+ riddles with varied difficulty
const riddles: Riddle[] = [
  // Classic riddles
  {
    question:
      'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
    answer: 'Echo',
    hint: 'Sound bouncing back',
    options: ['Echo', 'Ghost', 'Shadow', 'Wind'],
  },
  {
    question: 'The more you take, the more you leave behind. What am I?',
    answer: 'Footsteps',
    hint: 'Think about walking',
    options: ['Footsteps', 'Memories', 'Time', 'Breath'],
  },
  {
    question:
      "I have keys but no locks. I have space but no room. You can enter but can't go inside. What am I?",
    answer: 'Keyboard',
    hint: 'Used for typing',
    options: ['Keyboard', 'Piano', 'House', 'Map'],
  },
  {
    question: "What has hands but can't clap?",
    answer: 'Clock',
    hint: 'Tells time',
    options: ['Clock', 'Statue', 'Robot', 'Tree'],
  },
  {
    question:
      "I am not alive, but I grow. I don't have lungs, but I need air. What am I?",
    answer: 'Fire',
    hint: 'Hot and bright',
    options: ['Fire', 'Tree', 'Balloon', 'Cloud'],
  },
  {
    question: 'What can travel around the world while staying in a corner?',
    answer: 'Stamp',
    hint: 'Found on mail',
    options: ['Stamp', 'Map', 'Phone', 'Camera'],
  },
  {
    question:
      "The person who makes it, sells it. The person who buys it never uses it. The person who uses it never knows they're using it. What is it?",
    answer: 'Coffin',
    hint: 'Used after life',
    options: ['Coffin', 'Gift', 'Medicine', 'Insurance'],
  },
  {
    question: 'What gets wetter the more it dries?',
    answer: 'Towel',
    hint: 'Used after bathing',
    options: ['Towel', 'Sun', 'Air', 'Paper'],
  },
  {
    question:
      'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
    answer: 'Map',
    hint: 'Shows locations',
    options: ['Map', 'Globe', 'Picture', 'Dream'],
  },
  {
    question: 'What has a head and a tail but no body?',
    answer: 'Coin',
    hint: 'Something you spend',
    options: ['Coin', 'Snake', 'Comet', 'Pin'],
  },
  {
    question: 'What can you catch but not throw?',
    answer: 'Cold',
    hint: 'An illness',
    options: ['Cold', 'Ball', 'Fish', 'Dream'],
  },
  {
    question: "I'm tall when I'm young, and short when I'm old. What am I?",
    answer: 'Candle',
    hint: 'Gives light',
    options: ['Candle', 'Tree', 'Person', 'Shadow'],
  },
  // New riddles
  {
    question: "What has one eye but can't see?",
    answer: 'Needle',
    hint: 'Used for sewing',
    options: ['Needle', 'Cyclops', 'Storm', 'Camera'],
  },
  {
    question: 'What can fill a room but takes up no space?',
    answer: 'Light',
    hint: 'Opposite of darkness',
    options: ['Light', 'Air', 'Sound', 'Smell'],
  },
  {
    question: 'What has a neck but no head?',
    answer: 'Bottle',
    hint: 'Holds liquid',
    options: ['Bottle', 'Guitar', 'Shirt', 'Giraffe'],
  },
  {
    question: 'The more you have of me, the less you see. What am I?',
    answer: 'Darkness',
    hint: 'Absence of light',
    options: ['Darkness', 'Fog', 'Smoke', 'Clouds'],
  },
  {
    question: 'I have teeth but cannot bite. What am I?',
    answer: 'Comb',
    hint: 'Used on hair',
    options: ['Comb', 'Gear', 'Saw', 'Zipper'],
  },
  {
    question: 'What goes up but never comes down?',
    answer: 'Age',
    hint: 'Everyone gets this',
    options: ['Age', 'Balloon', 'Smoke', 'Rocket'],
  },
  {
    question: 'What has words but never speaks?',
    answer: 'Book',
    hint: 'You read it',
    options: ['Book', 'Sign', 'Letter', 'Poster'],
  },
  {
    question: 'What can you break without touching it?',
    answer: 'Promise',
    hint: 'A commitment',
    options: ['Promise', 'Silence', 'Record', 'Heart'],
  },
  {
    question: 'I have branches but no fruit, trunk, or leaves. What am I?',
    answer: 'Bank',
    hint: 'Financial institution',
    options: ['Bank', 'River', 'Family', 'Library'],
  },
  {
    question: 'What building has the most stories?',
    answer: 'Library',
    hint: 'Books everywhere',
    options: ['Library', 'Skyscraper', 'Museum', 'Hospital'],
  },
  {
    question: 'What can run but never walks, has a mouth but never talks?',
    answer: 'River',
    hint: 'Water flowing',
    options: ['River', 'Clock', 'Wind', 'Machine'],
  },
  {
    question:
      'I fly without wings. I cry without eyes. Wherever I go, darkness follows. What am I?',
    answer: 'Cloud',
    hint: 'In the sky',
    options: ['Cloud', 'Night', 'Bat', 'Storm'],
  },
  {
    question:
      'What has four legs in the morning, two at noon, and three in the evening?',
    answer: 'Human',
    hint: 'Stages of life',
    options: ['Human', 'Dog', 'Cat', 'Spider'],
  },
  {
    question: 'What invention lets you look right through a wall?',
    answer: 'Window',
    hint: 'Part of a house',
    options: ['Window', 'X-ray', 'Camera', 'Mirror'],
  },
  {
    question: 'What gets sharper the more you use it?',
    answer: 'Brain',
    hint: 'Inside your head',
    options: ['Brain', 'Knife', 'Pencil', 'Saw'],
  },
  {
    question: 'What can be cracked, made, told, and played?',
    answer: 'Joke',
    hint: 'Makes people laugh',
    options: ['Joke', 'Egg', 'Game', 'Code'],
  },
  {
    question: 'What has a ring but no finger?',
    answer: 'Phone',
    hint: 'Communication device',
    options: ['Phone', 'Bell', 'Doorbell', 'Tree'],
  },
  {
    question:
      'I am always hungry. I must always be fed. The finger I touch will soon turn red. What am I?',
    answer: 'Fire',
    hint: 'Hot and dangerous',
    options: ['Fire', 'Wolf', 'Bee', 'Acid'],
  },
  {
    question: "What has legs but doesn't walk?",
    answer: 'Table',
    hint: 'Furniture',
    options: ['Table', 'Chair', 'Bed', 'Desk'],
  },
  {
    question:
      "What is seen in the middle of March and April that can't be seen anywhere else?",
    answer: 'Letter R',
    hint: 'Look at the spelling',
    options: ['Letter R', 'Spring', 'Easter', 'Flower'],
  },
  {
    question: 'Forward I am heavy, backward I am not. What am I?',
    answer: 'Ton',
    hint: 'Think about the word spelled backward',
    options: ['Ton', 'Car', 'Rock', 'Lead'],
  },
  {
    question: 'What belongs to you but others use it more than you do?',
    answer: 'Name',
    hint: 'How people call you',
    options: ['Name', 'Phone', 'Photo', 'Voice'],
  },
  {
    question:
      'What starts with P and ends with E and has thousands of letters?',
    answer: 'Post Office',
    hint: 'Mail is sent here',
    options: ['Post Office', 'Package', 'Phrase', 'Encyclopedia'],
  },
];

export default function DailyRiddleClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'intro',
    round: 1,
    score: 0,
    totalRounds: 8,
    correctAnswers: 0,
    currentRiddle: null,
    selectedAnswer: null,
    showHint: false,
  });
  const [usedRiddles, setUsedRiddles] = useState<Set<string>>(new Set());

  const getNextRiddle = useCallback((): Riddle => {
    const availableRiddles = riddles.filter(
      (r) => !usedRiddles.has(r.question),
    );
    const riddleToUse =
      availableRiddles.length > 0
        ? availableRiddles[Math.floor(Math.random() * availableRiddles.length)]
        : riddles[Math.floor(Math.random() * riddles.length)];

    setUsedRiddles((prev) => new Set([...prev, riddleToUse.question]));
    return {
      ...riddleToUse,
      options: [...riddleToUse.options].sort(() => Math.random() - 0.5),
    };
  }, [usedRiddles]);

  const startGame = useCallback(() => {
    setUsedRiddles(new Set());
    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: 8,
      correctAnswers: 0,
      currentRiddle: getNextRiddle(),
      selectedAnswer: null,
      showHint: false,
    });
  }, [getNextRiddle]);

  const handleAnswer = (answer: string) => {
    if (gameState.phase !== 'playing' || !gameState.currentRiddle) return;

    const isCorrect = answer === gameState.currentRiddle.answer;
    const hintPenalty = gameState.showHint ? 5 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
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
        currentRiddle: getNextRiddle(),
        selectedAnswer: null,
        showHint: false,
      };
    });
  };

  if (gameState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Daily Riddle Challenge
          </h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Read the riddle carefully</li>
              <li>Think creatively - answers are often unexpected!</li>
              <li>Use hints if you&apos;re stuck (reduces score)</li>
              <li>Select the correct answer from the options</li>
            </ol>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Riddles
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
          setGameState((prev) => ({ ...prev, phase: 'intro' }))
        }
      />
    );
  }

  const isCorrect =
    gameState.selectedAnswer === gameState.currentRiddle?.answer;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.round}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Riddle</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-yellow-50 p-3 text-center dark:bg-yellow-900/20">
          <div className="text-2xl font-bold text-yellow-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Solved</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-4 flex items-center justify-center">
          <Lightbulb className="h-8 w-8 text-yellow-500" />
        </div>

        <p className="mb-6 text-center text-lg font-medium">
          {gameState.currentRiddle?.question}
        </p>

        {gameState.phase === 'playing' && (
          <div className="mb-6 flex justify-center">
            <Button
              variant="outline"
              onClick={() =>
                setGameState((prev) => ({ ...prev, showHint: !prev.showHint }))
              }
              className="gap-2"
            >
              {gameState.showHint ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              {gameState.showHint ? 'Hide Hint' : 'Show Hint (-5pts)'}
            </Button>
          </div>
        )}

        {gameState.showHint && gameState.phase === 'playing' && (
          <p className="mb-6 text-center text-muted-foreground">
            💡 Hint: {gameState.currentRiddle?.hint}
          </p>
        )}

        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          {gameState.currentRiddle?.options.map((option, index) => {
            const isSelected = gameState.selectedAnswer === option;
            const isCorrectOption = option === gameState.currentRiddle?.answer;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => handleAnswer(option)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-14 text-base font-medium',
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
              The answer is: <strong>{gameState.currentRiddle?.answer}</strong>
            </p>
            <Button
              onClick={nextRound}
              className="gap-2"
            >
              {gameState.round >= gameState.totalRounds
                ? 'See Results'
                : 'Next Riddle'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'intro' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
