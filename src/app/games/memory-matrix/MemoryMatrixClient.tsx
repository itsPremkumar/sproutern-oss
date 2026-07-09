'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, Eye, Brain, Zap, Trophy } from 'lucide-react';

interface GameState {
  phase: 'setup' | 'memorize' | 'recall' | 'result';
  level: number;
  score: number;
  lives: number;
  pattern: number[];
  userPattern: number[];
  gridSize: number;
  cellsToRemember: number;
  streak: number;
  bestStreak: number;
  totalCorrect: number;
  totalWrong: number;
}

const difficultySettings = {
  easy: { startGrid: 3, startCells: 3, memorizeTime: 3000 },
  medium: { startGrid: 4, startCells: 4, memorizeTime: 2000 },
  hard: { startGrid: 5, startCells: 5, memorizeTime: 1500 },
};

export default function MemoryMatrixClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    level: 1,
    score: 0,
    lives: 3,
    pattern: [],
    userPattern: [],
    gridSize: 3,
    cellsToRemember: 3,
    streak: 0,
    bestStreak: 0,
    totalCorrect: 0,
    totalWrong: 0,
  });
  const [countdown, setCountdown] = useState(3);

  const settings = difficultySettings[difficulty];

  const generatePattern = useCallback(
    (gridSize: number, cellCount: number): number[] => {
      const totalCells = gridSize * gridSize;
      const pattern: number[] = [];
      while (pattern.length < cellCount) {
        const cell = Math.floor(Math.random() * totalCells);
        if (!pattern.includes(cell)) {
          pattern.push(cell);
        }
      }
      return pattern;
    },
    [],
  );

  const startGame = useCallback(() => {
    const { startGrid, startCells } = settings;
    const pattern = generatePattern(startGrid, startCells);

    setGameState({
      phase: 'memorize',
      level: 1,
      score: 0,
      lives: 3,
      pattern,
      userPattern: [],
      gridSize: startGrid,
      cellsToRemember: startCells,
      streak: 0,
      bestStreak: 0,
      totalCorrect: 0,
      totalWrong: 0,
    });
    setCountdown(3);
  }, [settings, generatePattern]);

  const nextLevel = useCallback(() => {
    setGameState((prev) => {
      const newLevel = prev.level + 1;
      let newGridSize = prev.gridSize;
      let newCellsToRemember = prev.cellsToRemember + 1;

      // Increase grid size every 3 levels
      if (newLevel % 3 === 0 && newGridSize < 7) {
        newGridSize++;
        newCellsToRemember = Math.min(
          newCellsToRemember,
          newGridSize * newGridSize - 2,
        );
      }

      const pattern = generatePattern(newGridSize, newCellsToRemember);

      return {
        ...prev,
        phase: 'memorize',
        level: newLevel,
        pattern,
        userPattern: [],
        gridSize: newGridSize,
        cellsToRemember: newCellsToRemember,
      };
    });
    setCountdown(3);
  }, [generatePattern]);

  // Countdown timer for memorize phase
  useEffect(() => {
    if (gameState.phase !== 'memorize') return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Switch to recall phase
      setGameState((prev) => ({ ...prev, phase: 'recall' }));
    }
  }, [gameState.phase, countdown]);

  const handleCellClick = (cellIndex: number) => {
    if (gameState.phase !== 'recall') return;
    if (gameState.userPattern.includes(cellIndex)) return;

    const isCorrect = gameState.pattern.includes(cellIndex);

    setGameState((prev) => {
      const newUserPattern = [...prev.userPattern, cellIndex];
      let newScore = prev.score;
      let newLives = prev.lives;
      let newStreak = prev.streak;
      let newBestStreak = prev.bestStreak;
      let newCorrect = prev.totalCorrect;
      let newWrong = prev.totalWrong;

      if (isCorrect) {
        newScore += 10 * prev.level;
        newStreak++;
        newCorrect++;
        if (newStreak > newBestStreak) newBestStreak = newStreak;
      } else {
        newLives--;
        newStreak = 0;
        newWrong++;
      }

      // Check if level complete or game over
      const correctClicks = newUserPattern.filter((c) =>
        prev.pattern.includes(c),
      ).length;
      const levelComplete = correctClicks === prev.pattern.length;
      const gameOver = newLives <= 0;

      return {
        ...prev,
        userPattern: newUserPattern,
        score: newScore,
        lives: newLives,
        streak: newStreak,
        bestStreak: newBestStreak,
        totalCorrect: newCorrect,
        totalWrong: newWrong,
        phase: gameOver ? 'result' : levelComplete ? 'result' : 'recall',
      };
    });
  };

  // Check if level was completed successfully
  const levelCompleted =
    gameState.phase === 'result' &&
    gameState.lives > 0 &&
    gameState.userPattern.filter((c) => gameState.pattern.includes(c))
      .length === gameState.pattern.length;

  const renderGrid = () => {
    const cells = [];
    const totalCells = gameState.gridSize * gameState.gridSize;

    for (let i = 0; i < totalCells; i++) {
      const isPattern = gameState.pattern.includes(i);
      const isClicked = gameState.userPattern.includes(i);
      const showPattern = gameState.phase === 'memorize';
      const showResult = gameState.phase === 'result';
      const isCorrectClick = isClicked && isPattern;
      const isWrongClick = isClicked && !isPattern;

      cells.push(
        <button
          key={i}
          onClick={() => handleCellClick(i)}
          disabled={gameState.phase !== 'recall' || isClicked}
          className={cn(
            'aspect-square rounded-lg border-2 transition-all duration-200',
            gameState.phase === 'recall' &&
              !isClicked &&
              'cursor-pointer hover:border-primary hover:bg-primary/10',
            showPattern && isPattern && 'border-primary bg-primary',
            !showPattern && !isClicked && 'border-border bg-muted/50',
            isCorrectClick && 'border-green-500 bg-green-500',
            isWrongClick && 'border-red-500 bg-red-500',
            showResult &&
              isPattern &&
              !isClicked &&
              'border-primary/50 bg-primary/50',
            gameState.phase === 'recall' && isClicked && 'cursor-not-allowed',
          )}
        />,
      );
    }

    return (
      <div
        className="mx-auto grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gameState.gridSize}, minmax(0, 1fr))`,
          maxWidth: `${gameState.gridSize * 60 + (gameState.gridSize - 1) * 8}px`,
        }}
      >
        {cells}
      </div>
    );
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
              <li>
                Watch the highlighted cells carefully during the memorize phase
              </li>
              <li>
                After the pattern disappears, click on the cells you remember
              </li>
              <li>Complete the pattern to advance to the next level</li>
              <li>You have 3 lives — wrong clicks cost you a life!</li>
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

  if (gameState.phase === 'result' && gameState.lives <= 0) {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalCorrect + gameState.totalWrong}
        correctAnswers={gameState.totalCorrect}
        incorrectAnswers={gameState.totalWrong}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Game stats */}
      <div className="grid grid-cols-4 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.level}
          </div>
          <div className="text-xs text-muted-foreground">Level</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-red-50 p-3 text-center dark:bg-red-900/20">
          <div className="text-2xl font-bold text-red-600">
            {'❤️'.repeat(gameState.lives)}
          </div>
          <div className="text-xs text-muted-foreground">Lives</div>
        </div>
        <div className="rounded-xl bg-orange-50 p-3 text-center dark:bg-orange-900/20">
          <div className="text-2xl font-bold text-orange-600">
            {gameState.streak}🔥
          </div>
          <div className="text-xs text-muted-foreground">Streak</div>
        </div>
      </div>

      {/* Game area */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {gameState.phase === 'memorize' && (
          <div className="mb-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-lg font-semibold text-primary">
              <Eye className="h-5 w-5" />
              Memorize the pattern!
            </div>
            <div className="text-4xl font-bold text-primary">{countdown}</div>
          </div>
        )}

        {gameState.phase === 'recall' && (
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold">
              <Brain className="h-5 w-5 text-primary" />
              Click the cells you remember!
            </div>
            <p className="text-sm text-muted-foreground">
              {gameState.pattern.length -
                gameState.userPattern.filter((c) =>
                  gameState.pattern.includes(c),
                ).length}{' '}
              cells remaining
            </p>
          </div>
        )}

        {levelCompleted && gameState.phase === 'result' && (
          <div className="mb-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-green-600">
              <Trophy className="h-5 w-5" />
              Level Complete!
            </div>
          </div>
        )}

        {renderGrid()}

        {levelCompleted && gameState.phase === 'result' && (
          <div className="mt-6 flex justify-center">
            <Button
              onClick={nextLevel}
              size="lg"
              className="gap-2"
            >
              <Zap className="h-5 w-5" />
              Next Level
            </Button>
          </div>
        )}
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
