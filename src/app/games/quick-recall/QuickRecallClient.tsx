'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Eye, Keyboard } from 'lucide-react';

type SequenceType = 'numbers' | 'letters' | 'mixed';

interface GameState {
  phase: 'setup' | 'showing' | 'input' | 'feedback' | 'result';
  round: number;
  score: number;
  streak: number;
  bestStreak: number;
  sequence: string;
  userInput: string;
  sequenceLength: number;
  totalRounds: number;
  correctRounds: number;
  sequenceType: SequenceType;
}

const difficultySettings = {
  easy: { startLength: 3, maxLength: 6, showTime: 2000, rounds: 8 },
  medium: { startLength: 4, maxLength: 8, showTime: 1500, rounds: 10 },
  hard: { startLength: 5, maxLength: 10, showTime: 1000, rounds: 12 },
};

const sequenceTypes: SequenceType[] = ['numbers', 'letters', 'mixed'];

export default function QuickRecallClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    streak: 0,
    bestStreak: 0,
    sequence: '',
    userInput: '',
    sequenceLength: 3,
    totalRounds: 8,
    correctRounds: 0,
    sequenceType: 'numbers',
  });

  const settings = difficultySettings[difficulty];

  const generateSequence = useCallback(
    (length: number, type: SequenceType): string => {
      let chars = '';
      if (type === 'numbers') {
        chars = '0123456789';
      } else if (type === 'letters') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else {
        chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }

      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    },
    [],
  );

  const startGame = useCallback(() => {
    const seqType =
      sequenceTypes[Math.floor(Math.random() * sequenceTypes.length)];
    const sequence = generateSequence(settings.startLength, seqType);

    setGameState({
      phase: 'showing',
      round: 1,
      score: 0,
      streak: 0,
      bestStreak: 0,
      sequence,
      userInput: '',
      sequenceLength: settings.startLength,
      totalRounds: settings.rounds,
      correctRounds: 0,
      sequenceType: seqType,
    });
  }, [settings.startLength, settings.rounds, generateSequence]);

  const nextRound = useCallback(() => {
    setGameState((prev) => {
      const newLength = Math.min(
        prev.sequenceLength + (prev.streak >= 2 ? 1 : 0),
        settings.maxLength,
      );
      const seqType =
        sequenceTypes[Math.floor(Math.random() * sequenceTypes.length)];
      const sequence = generateSequence(newLength, seqType);

      return {
        ...prev,
        phase: 'showing',
        round: prev.round + 1,
        sequence,
        userInput: '',
        sequenceLength: newLength,
        sequenceType: seqType,
      };
    });
  }, [settings.maxLength, generateSequence]);

  // Show phase timer
  useEffect(() => {
    if (gameState.phase !== 'showing') return;

    const timer = setTimeout(() => {
      setGameState((prev) => ({ ...prev, phase: 'input' }));
    }, settings.showTime);

    return () => clearTimeout(timer);
  }, [gameState.phase, settings.showTime]);

  // Handle keyboard input
  useEffect(() => {
    if (gameState.phase !== 'input') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (/^[A-Z0-9]$/.test(key)) {
        setGameState((prev) => {
          const newInput = prev.userInput + key;
          if (newInput.length >= prev.sequence.length) {
            // Check answer
            const isCorrect = newInput === prev.sequence;
            const newStreak = isCorrect ? prev.streak + 1 : 0;
            const newBestStreak = Math.max(newStreak, prev.bestStreak);
            const scoreBonus = isCorrect
              ? 10 + prev.sequenceLength * 5 + newStreak * 3
              : 0;

            return {
              ...prev,
              userInput: newInput,
              phase: 'feedback',
              score: prev.score + scoreBonus,
              streak: newStreak,
              bestStreak: newBestStreak,
              correctRounds: isCorrect
                ? prev.correctRounds + 1
                : prev.correctRounds,
            };
          }
          return { ...prev, userInput: newInput };
        });
      } else if (e.key === 'Backspace') {
        setGameState((prev) => ({
          ...prev,
          userInput: prev.userInput.slice(0, -1),
        }));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.phase]);

  // Feedback phase timer
  useEffect(() => {
    if (gameState.phase !== 'feedback') return;

    const timer = setTimeout(() => {
      if (gameState.round >= gameState.totalRounds) {
        setGameState((prev) => ({ ...prev, phase: 'result' }));
      } else {
        nextRound();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [gameState.phase, gameState.round, gameState.totalRounds, nextRound]);

  const handleVirtualKey = (key: string) => {
    if (gameState.phase !== 'input') return;

    setGameState((prev) => {
      const newInput = prev.userInput + key;
      if (newInput.length >= prev.sequence.length) {
        const isCorrect = newInput === prev.sequence;
        const newStreak = isCorrect ? prev.streak + 1 : 0;
        const newBestStreak = Math.max(newStreak, prev.bestStreak);
        const scoreBonus = isCorrect
          ? 10 + prev.sequenceLength * 5 + newStreak * 3
          : 0;

        return {
          ...prev,
          userInput: newInput,
          phase: 'feedback',
          score: prev.score + scoreBonus,
          streak: newStreak,
          bestStreak: newBestStreak,
          correctRounds: isCorrect
            ? prev.correctRounds + 1
            : prev.correctRounds,
        };
      }
      return { ...prev, userInput: newInput };
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
              <li>A sequence of characters will flash on screen</li>
              <li>Memorize it as quickly as you can</li>
              <li>Type the sequence using your keyboard or the buttons</li>
              <li>Build streaks for bonus points!</li>
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
        correctAnswers={gameState.correctRounds}
        incorrectAnswers={gameState.totalRounds - gameState.correctRounds}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const isCorrect =
    gameState.phase === 'feedback' &&
    gameState.userInput === gameState.sequence;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
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
        <div className="rounded-xl bg-orange-50 p-3 text-center dark:bg-orange-900/20">
          <div className="text-2xl font-bold text-orange-600">
            {gameState.streak}🔥
          </div>
          <div className="text-xs text-muted-foreground">Streak</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600">
            {gameState.sequenceLength}
          </div>
          <div className="text-xs text-muted-foreground">Length</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {gameState.phase === 'showing' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-primary">
              <Eye className="h-5 w-5" />
              Memorize this sequence!
            </div>
            <div className="mb-4 font-mono text-6xl font-bold tracking-widest text-primary">
              {gameState.sequence}
            </div>
          </div>
        )}

        {gameState.phase === 'input' && (
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
              <Keyboard className="h-5 w-5 text-primary" />
              Type what you saw!
            </div>
            <div className="mb-6 flex justify-center gap-2">
              {gameState.sequence.split('').map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex h-14 w-10 items-center justify-center rounded-lg border-2 font-mono text-2xl font-bold',
                    gameState.userInput[index]
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-muted',
                  )}
                >
                  {gameState.userInput[index] || ''}
                </div>
              ))}
            </div>

            {/* Virtual keyboard for mobile */}
            <div className="mx-auto grid max-w-md grid-cols-6 gap-2">
              {(gameState.sequenceType === 'numbers'
                ? '0123456789'
                : gameState.sequenceType === 'letters'
                  ? 'QWERTYUIOPASDFGHJKLZXCVBNM'
                  : '0123456789QWERTYUIOPASDFGHJKLZXCVBNM'
              )
                .split('')
                .map((char) => (
                  <Button
                    key={char}
                    variant="outline"
                    size="sm"
                    onClick={() => handleVirtualKey(char)}
                    className="font-mono"
                  >
                    {char}
                  </Button>
                ))}
            </div>
          </div>
        )}

        {gameState.phase === 'feedback' && (
          <div className="text-center">
            <div
              className={cn(
                'mb-4 text-2xl font-bold',
                isCorrect ? 'text-green-600' : 'text-red-600',
              )}
            >
              {isCorrect ? '✓ Correct!' : '✗ Wrong!'}
            </div>
            <div className="mb-2">
              <span className="text-muted-foreground">Your answer: </span>
              <span className="font-mono font-bold">{gameState.userInput}</span>
            </div>
            {!isCorrect && (
              <div>
                <span className="text-muted-foreground">Correct: </span>
                <span className="font-mono font-bold text-green-600">
                  {gameState.sequence}
                </span>
              </div>
            )}
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
