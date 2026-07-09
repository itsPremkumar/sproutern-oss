'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Clock } from 'lucide-react';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

type Theme = 'animals' | 'fruits' | 'nature' | 'sports';
type GridSize = '4x4' | '4x5' | '5x6';

const themes: Record<Theme, string[]> = {
  animals: [
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼',
    '🐨',
    '🐯',
    '🦁',
    '🐮',
    '🐷',
    '🐸',
    '🐵',
  ],
  fruits: [
    '🍎',
    '🍐',
    '🍊',
    '🍋',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🫐',
    '🍒',
    '🍑',
    '🥭',
    '🍍',
    '🥝',
    '🥥',
  ],
  nature: [
    '🌸',
    '🌺',
    '🌻',
    '🌹',
    '🌷',
    '🌾',
    '🍀',
    '🍁',
    '🌲',
    '🌴',
    '🌵',
    '⭐',
    '🌙',
    '☀️',
    '🌈',
  ],
  sports: [
    '⚽',
    '🏀',
    '🏈',
    '⚾',
    '🎾',
    '🏐',
    '🏉',
    '🎱',
    '🏓',
    '🏸',
    '🥊',
    '🎯',
    '🏋️',
    '🚴',
    '🏊',
  ],
};

const gridConfigs: Record<GridSize, { pairs: number; cols: number }> = {
  '4x4': { pairs: 8, cols: 4 },
  '4x5': { pairs: 10, cols: 5 },
  '5x6': { pairs: 15, cols: 6 },
};

export default function CardFlipMemoryClient() {
  const [theme, setTheme] = useState<Theme>('animals');
  const [gridSize, setGridSize] = useState<GridSize>('4x4');
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>(
    'setup',
  );
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const config = gridConfigs[gridSize];

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = useCallback(() => {
    const selectedEmojis = shuffleArray(themes[theme]).slice(0, config.pairs);
    const cardPairs: Card[] = [];

    selectedEmojis.forEach((emoji, index) => {
      cardPairs.push({
        id: index * 2,
        emoji,
        isFlipped: false,
        isMatched: false,
      });
      cardPairs.push({
        id: index * 2 + 1,
        emoji,
        isFlipped: false,
        isMatched: false,
      });
    });

    setCards(shuffleArray(cardPairs));
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setStartTime(Date.now());
    setEndTime(0);
    setGameState('playing');
  }, [theme, config.pairs]);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState, startTime]);

  const handleCardClick = (cardId: number) => {
    if (isChecking || flippedCards.length >= 2) return;

    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)),
    );
  };

  // Check for matches
  useEffect(() => {
    if (flippedCards.length !== 2) return;

    setIsChecking(true);
    setMoves((prev) => prev + 1);

    const [first, second] = flippedCards;
    const firstCard = cards.find((c) => c.id === first);
    const secondCard = cards.find((c) => c.id === second);
    const isMatch = firstCard?.emoji === secondCard?.emoji;

    setTimeout(() => {
      if (isMatch) {
        setCards((prev) =>
          prev.map((c) =>
            c.id === first || c.id === second ? { ...c, isMatched: true } : c,
          ),
        );
        setMatches((prev) => {
          const newMatches = prev + 1;
          if (newMatches === config.pairs) {
            setEndTime(Date.now());
            setGameState('result');
          }
          return newMatches;
        });
      } else {
        setCards((prev) =>
          prev.map((c) =>
            c.id === first || c.id === second ? { ...c, isFlipped: false } : c,
          ),
        );
      }
      setFlippedCards([]);
      setIsChecking(false);
    }, 800);
  }, [flippedCards, cards, config.pairs]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScore = () => {
    const timePenalty = Math.max(0, elapsedTime - 30) * 2;
    const movePenalty = Math.max(0, moves - config.pairs) * 5;
    return Math.max(0, 1000 - timePenalty - movePenalty);
  };

  if (gameState === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Choose Your Game
          </h2>

          {/* Theme selection */}
          <div className="mb-6">
            <h3 className="mb-3 font-semibold">Theme</h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {(Object.keys(themes) as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={cn(
                    'rounded-xl border-2 p-4 text-center transition-all',
                    theme === t
                      ? 'border-primary bg-primary/10 ring-2 ring-primary ring-offset-2'
                      : 'border-border hover:border-primary/50',
                  )}
                >
                  <div className="mb-2 text-2xl">
                    {themes[t].slice(0, 3).join('')}
                  </div>
                  <div className="text-sm font-medium capitalize">{t}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Grid size selection */}
          <div className="mb-8">
            <h3 className="mb-3 font-semibold">Grid Size</h3>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(gridConfigs) as GridSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => setGridSize(size)}
                  className={cn(
                    'rounded-xl border-2 p-4 text-center transition-all',
                    gridSize === size
                      ? 'border-primary bg-primary/10 ring-2 ring-primary ring-offset-2'
                      : 'border-border hover:border-primary/50',
                  )}
                >
                  <div className="text-lg font-bold">{size}</div>
                  <div className="text-xs text-muted-foreground">
                    {gridConfigs[size].pairs} pairs
                  </div>
                </button>
              ))}
            </div>
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

  if (gameState === 'result') {
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    return (
      <ScoreBoard
        score={getScore()}
        totalQuestions={config.pairs}
        correctAnswers={matches}
        incorrectAnswers={moves - matches}
        timeTaken={timeTaken}
        onPlayAgain={() => setGameState('setup')}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">{moves}</div>
          <div className="text-xs text-muted-foreground">Moves</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {matches}/{config.pairs}
          </div>
          <div className="text-xs text-muted-foreground">Matches</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="flex items-center justify-center gap-1 text-2xl font-bold text-purple-600">
            <Clock className="h-5 w-5" />
            {formatTime(elapsedTime)}
          </div>
          <div className="text-xs text-muted-foreground">Time</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-4 md:p-6">
        <div
          className="mx-auto grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${config.cols}, minmax(0, 1fr))`,
            maxWidth: `${config.cols * 70}px`,
          }}
        >
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isFlipped || card.isMatched || isChecking}
              className={cn(
                'aspect-square transform rounded-xl border-2 text-3xl transition-all duration-300',
                'flex items-center justify-center',
                card.isFlipped || card.isMatched
                  ? 'rotate-0 border-violet-500 bg-gradient-to-br from-violet-500 to-purple-600'
                  : 'cursor-pointer border-border bg-muted hover:scale-105 hover:border-primary',
                card.isMatched && 'scale-95 opacity-60',
              )}
            >
              {card.isFlipped || card.isMatched ? card.emoji : '❓'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState('setup')}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          New Game
        </Button>
      </div>
    </div>
  );
}
