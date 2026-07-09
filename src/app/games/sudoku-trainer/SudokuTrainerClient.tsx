'use client';

import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  Gamepad2,
  Lightbulb,
  Undo,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { generateSudoku } from '@/lib/sudoku-generator';
import { useGameSounds } from '@/hooks/useGameSounds';

interface GameState {
  phase: 'setup' | 'playing' | 'complete';
  puzzle: number[][];
  solution: number[][];
  userGrid: number[][];
  originalPuzzle: number[][];
  selectedCell: { row: number; col: number } | null;
  mistakes: number;
  hintsUsed: number;
  startTime: number;
  elapsedTime: number;
  history: { row: number; col: number; prevValue: number }[];
}

const maxMistakes = 3;
const maxHints = 5;

export default function SudokuTrainerClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const {
    playCorrect,
    playWrong,
    playClick,
    playComplete,
    toggleSound,
    isEnabled: soundEnabled,
  } = useGameSounds();
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    puzzle: [],
    solution: [],
    userGrid: [],
    originalPuzzle: [],
    selectedCell: null,
    mistakes: 0,
    hintsUsed: 0,
    startTime: 0,
    elapsedTime: 0,
    history: [],
  });

  const startGame = useCallback(() => {
    const { puzzle, solution } = generateSudoku(difficulty);
    setGameState({
      phase: 'playing',
      puzzle: puzzle.map((row) => [...row]),
      solution,
      userGrid: puzzle.map((row) => [...row]),
      originalPuzzle: puzzle.map((row) => [...row]),
      selectedCell: null,
      mistakes: 0,
      hintsUsed: 0,
      startTime: Date.now(),
      elapsedTime: 0,
      history: [],
    });
  }, [difficulty]);

  const handleCellClick = (row: number, col: number) => {
    if (gameState.originalPuzzle[row][col] !== 0) return; // Can't select fixed cells
    playClick();
    setGameState((prev) => ({
      ...prev,
      selectedCell: { row, col },
    }));
  };

  const handleNumberInput = (num: number) => {
    if (!gameState.selectedCell) return;
    const { row, col } = gameState.selectedCell;

    if (gameState.originalPuzzle[row][col] !== 0) return;

    const prevValue = gameState.userGrid[row][col];
    const isCorrect = num === gameState.solution[row][col] || num === 0;

    // Play sound based on answer
    if (num !== 0) {
      if (isCorrect) {
        playCorrect();
      } else {
        playWrong();
      }
    }

    setGameState((prev) => {
      const newGrid = prev.userGrid.map((r) => [...r]);
      newGrid[row][col] = num;

      const newMistakes =
        !isCorrect && num !== 0 ? prev.mistakes + 1 : prev.mistakes;

      // Check if puzzle is complete
      let isComplete = true;
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (newGrid[r][c] !== prev.solution[r][c]) {
            isComplete = false;
            break;
          }
        }
        if (!isComplete) break;
      }

      return {
        ...prev,
        userGrid: newGrid,
        mistakes: newMistakes,
        phase: isComplete
          ? 'complete'
          : newMistakes >= maxMistakes
            ? 'complete'
            : 'playing',
        elapsedTime:
          isComplete || newMistakes >= maxMistakes
            ? Math.floor((Date.now() - prev.startTime) / 1000)
            : 0,
        history:
          num !== 0 ? [...prev.history, { row, col, prevValue }] : prev.history,
      };
    });
  };

  const useHint = () => {
    if (!gameState.selectedCell || gameState.hintsUsed >= maxHints) return;
    const { row, col } = gameState.selectedCell;

    if (gameState.originalPuzzle[row][col] !== 0) return;

    handleNumberInput(gameState.solution[row][col]);
    setGameState((prev) => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1,
    }));
  };

  const undo = () => {
    if (gameState.history.length === 0) return;

    const lastMove = gameState.history[gameState.history.length - 1];
    setGameState((prev) => {
      const newGrid = prev.userGrid.map((r) => [...r]);
      newGrid[lastMove.row][lastMove.col] = lastMove.prevValue;
      return {
        ...prev,
        userGrid: newGrid,
        history: prev.history.slice(0, -1),
      };
    });
  };

  const isComplete =
    gameState.phase === 'complete' && gameState.mistakes < maxMistakes;
  const isGameOver =
    gameState.phase === 'complete' && gameState.mistakes >= maxMistakes;

  // Play sound on game complete/over
  useEffect(() => {
    if (isComplete) {
      playComplete();
    } else if (isGameOver) {
      playWrong();
    }
  }, [isComplete, isGameOver, playComplete, playWrong]);

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
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • Fill in the grid so every row, column, and 3×3 box contains
                1-9
              </li>
              <li>• Click a cell then select a number</li>
              <li>• You have {maxMistakes} mistakes allowed</li>
              <li>• Use hints wisely (max {maxHints})</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Gamepad2 className="h-5 w-5" />
            Start Sudoku
          </Button>
        </div>
      </div>
    );
  }

  if (isComplete || isGameOver) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center">
        <div className="mb-6 text-6xl">{isComplete ? '🎉' : '😓'}</div>
        <h2 className="mb-4 text-3xl font-bold">
          {isComplete ? 'Puzzle Solved!' : 'Game Over'}
        </h2>
        <p className="mb-6 text-muted-foreground">
          {isComplete
            ? `You completed the ${difficulty} puzzle in ${Math.floor(gameState.elapsedTime / 60)}:${(gameState.elapsedTime % 60).toString().padStart(2, '0')}!`
            : 'You ran out of lives. Try again!'}
        </p>
        <div className="mb-8 flex justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold">
              {gameState.mistakes}/{maxMistakes}
            </div>
            <div className="text-sm text-muted-foreground">Mistakes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {gameState.hintsUsed}/{maxHints}
            </div>
            <div className="text-sm text-muted-foreground">Hints Used</div>
          </div>
        </div>
        <Button
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Play Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <div className="flex gap-4">
          <span className="text-sm">
            ❤️ {maxMistakes - gameState.mistakes} lives
          </span>
          <span className="text-sm">
            💡 {maxHints - gameState.hintsUsed} hints
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="rounded-lg p-2 transition-colors hover:bg-muted"
            title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
          >
            {soundEnabled ? (
              <Volume2 className="h-4 w-4 text-muted-foreground" />
            ) : (
              <VolumeX className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
          <span className="rounded bg-primary/10 px-3 py-1 text-sm font-medium capitalize text-primary">
            {difficulty}
          </span>
        </div>
      </div>

      {/* Sudoku Grid */}
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-9 gap-0 overflow-hidden rounded-xl border-2 border-foreground/20">
          {gameState.userGrid.map((row, rowIdx) =>
            row.map((cell, colIdx) => {
              const isOriginal = gameState.originalPuzzle[rowIdx][colIdx] !== 0;
              const isSelected =
                gameState.selectedCell?.row === rowIdx &&
                gameState.selectedCell?.col === colIdx;
              const isWrong =
                cell !== 0 && cell !== gameState.solution[rowIdx][colIdx];
              const isSameNumber =
                gameState.selectedCell &&
                cell !== 0 &&
                cell ===
                  gameState.userGrid[gameState.selectedCell.row][
                    gameState.selectedCell.col
                  ];

              return (
                <button
                  key={`${rowIdx}-${colIdx}`}
                  onClick={() => handleCellClick(rowIdx, colIdx)}
                  className={cn(
                    'flex aspect-square items-center justify-center text-lg font-semibold transition-colors',
                    'border-b border-r border-foreground/10',
                    colIdx % 3 === 2 &&
                      colIdx !== 8 &&
                      'border-r-2 border-r-foreground/30',
                    rowIdx % 3 === 2 &&
                      rowIdx !== 8 &&
                      'border-b-2 border-b-foreground/30',
                    isOriginal
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-primary hover:bg-primary/5',
                    isSelected && 'bg-primary/20 ring-2 ring-primary',
                    isSameNumber && !isSelected && 'bg-primary/10',
                    isWrong && 'text-red-500',
                  )}
                  disabled={isOriginal}
                >
                  {cell !== 0 ? cell : ''}
                </button>
              );
            }),
          )}
        </div>
      </div>

      {/* Number pad */}
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <Button
              key={num}
              variant="outline"
              size="lg"
              onClick={() => handleNumberInput(num)}
              disabled={!gameState.selectedCell}
            >
              {num}
            </Button>
          ))}
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleNumberInput(0)}
            disabled={!gameState.selectedCell}
          >
            ✕
          </Button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        <Button
          variant="outline"
          onClick={undo}
          disabled={gameState.history.length === 0}
          className="gap-2"
        >
          <Undo className="h-4 w-4" />
          Undo
        </Button>
        <Button
          variant="outline"
          onClick={useHint}
          disabled={!gameState.selectedCell || gameState.hintsUsed >= maxHints}
          className="gap-2"
        >
          <Lightbulb className="h-4 w-4" />
          Hint ({maxHints - gameState.hintsUsed})
        </Button>
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          New Game
        </Button>
      </div>
    </div>
  );
}
