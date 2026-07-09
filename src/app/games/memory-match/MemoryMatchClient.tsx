'use client';

import { useState, useEffect, useCallback } from 'react';
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
  Star,
  Heart,
  Zap,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Music,
  Camera,
  Gift,
  Cake,
  Car,
  Plane,
  Rocket,
  Trophy,
  Target,
  Crown,
  Diamond,
  Gem,
  Flower2,
  Leaf,
  Apple,
  Cherry,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useGameSounds } from '@/hooks/useGameSounds';

interface Card {
  id: number;
  icon: React.ElementType;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  cards: Card[];
  flippedCards: number[];
  moves: number;
  matches: number;
  score: number;
  startTime: number;
  endTime: number;
}

const allIcons = [
  Star,
  Heart,
  Zap,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Music,
  Camera,
  Gift,
  Cake,
  Car,
  Plane,
  Rocket,
  Trophy,
  Target,
  Crown,
  Diamond,
  Gem,
  Flower2,
  Leaf,
  Apple,
  Cherry,
];

const difficultySettings = {
  easy: { pairs: 6, gridCols: 3 },
  medium: { pairs: 8, gridCols: 4 },
  hard: { pairs: 12, gridCols: 4 },
};

export default function MemoryMatchClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    cards: [],
    flippedCards: [],
    moves: 0,
    matches: 0,
    score: 0,
    startTime: 0,
    endTime: 0,
  });
  const [isChecking, setIsChecking] = useState(false);
  const {
    playCorrect,
    playWrong,
    playClick,
    playComplete,
    toggleSound,
    isEnabled: soundEnabled,
  } = useGameSounds();

  const settings = difficultySettings[difficulty];

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = useCallback(() => {
    const selectedIcons = shuffleArray(allIcons).slice(0, settings.pairs);
    const cardPairs: Card[] = [];

    selectedIcons.forEach((icon, index) => {
      cardPairs.push({
        id: index * 2,
        icon,
        isFlipped: false,
        isMatched: false,
      });
      cardPairs.push({
        id: index * 2 + 1,
        icon,
        isFlipped: false,
        isMatched: false,
      });
    });

    setGameState({
      phase: 'playing',
      cards: shuffleArray(cardPairs),
      flippedCards: [],
      moves: 0,
      matches: 0,
      score: 0,
      startTime: Date.now(),
      endTime: 0,
    });
  }, [settings.pairs]);

  const handleCardClick = (cardId: number) => {
    if (isChecking) return;
    if (gameState.flippedCards.length >= 2) return;

    const card = gameState.cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    playClick();
    setGameState((prev) => ({
      ...prev,
      cards: prev.cards.map((c) =>
        c.id === cardId ? { ...c, isFlipped: true } : c,
      ),
      flippedCards: [...prev.flippedCards, cardId],
    }));
  };

  // Check for matches when two cards are flipped
  useEffect(() => {
    if (gameState.flippedCards.length !== 2) return;

    setIsChecking(true);
    const [first, second] = gameState.flippedCards;
    const firstCard = gameState.cards.find((c) => c.id === first);
    const secondCard = gameState.cards.find((c) => c.id === second);

    const isMatch = firstCard?.icon === secondCard?.icon;

    // Play sound for match result
    if (isMatch) {
      playCorrect();
    } else {
      playWrong();
    }

    setTimeout(() => {
      setGameState((prev) => {
        const newMatches = isMatch ? prev.matches + 1 : prev.matches;
        const newMoves = prev.moves + 1;
        const scoreBonus = isMatch ? Math.max(100 - newMoves * 2, 10) : 0;
        const newScore = prev.score + scoreBonus;
        const allMatched = newMatches === settings.pairs;

        return {
          ...prev,
          cards: prev.cards.map((c) => {
            if (c.id === first || c.id === second) {
              return isMatch
                ? { ...c, isMatched: true }
                : { ...c, isFlipped: false };
            }
            return c;
          }),
          flippedCards: [],
          moves: newMoves,
          matches: newMatches,
          score: newScore,
          phase: allMatched ? 'result' : 'playing',
          endTime: allMatched ? Date.now() : 0,
        };
      });
      setIsChecking(false);
    }, 800);
  }, [
    gameState.flippedCards,
    gameState.cards,
    settings.pairs,
    playCorrect,
    playWrong,
  ]);

  const getTimeTaken = () => {
    if (gameState.endTime && gameState.startTime) {
      return Math.floor((gameState.endTime - gameState.startTime) / 1000);
    }
    return 0;
  };

  // Play complete sound when game is won
  useEffect(() => {
    if (gameState.phase === 'result') {
      playComplete();
    }
  }, [gameState.phase, playComplete]);

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
              <li>Click on any card to flip it and reveal the icon</li>
              <li>Click on another card to find its match</li>
              <li>If the icons match, both cards stay revealed</li>
              <li>If they don't match, both cards flip back</li>
              <li>Find all pairs to complete the game!</li>
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
        totalQuestions={settings.pairs}
        correctAnswers={gameState.matches}
        incorrectAnswers={gameState.moves - gameState.matches}
        timeTaken={getTimeTaken()}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Game stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.moves}
          </div>
          <div className="text-xs text-muted-foreground">Moves</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.matches}/{settings.pairs}
          </div>
          <div className="text-xs text-muted-foreground">Matches</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
      </div>

      {/* Game grid */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div
          className="mx-auto grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${settings.gridCols}, minmax(0, 1fr))`,
            maxWidth: `${settings.gridCols * 80 + (settings.gridCols - 1) * 12}px`,
          }}
        >
          {gameState.cards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                disabled={card.isFlipped || card.isMatched || isChecking}
                className={cn(
                  'aspect-square transform rounded-xl border-2 transition-all duration-300',
                  'flex items-center justify-center',
                  card.isFlipped || card.isMatched
                    ? 'rotate-0 border-primary bg-gradient-to-br from-primary to-secondary'
                    : 'cursor-pointer border-border bg-muted hover:scale-105 hover:border-primary',
                  card.isMatched && 'scale-95 opacity-70',
                )}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {card.isFlipped || card.isMatched ? (
                  <Icon className="h-8 w-8 text-white" />
                ) : (
                  <div className="h-8 w-8 rounded-lg bg-muted-foreground/20" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reset button */}
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
