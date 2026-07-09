'use client';

import { useState, useEffect, useCallback } from 'react';

export interface GameProgress {
  highScore: number;
  gamesPlayed: number;
  bestStreak: number;
  totalCorrect: number;
  totalWrong: number;
  lastPlayed: string;
  averageScore: number;
}

interface GameProgressState {
  [gameId: string]: GameProgress;
}

const STORAGE_KEY = 'sproutern_game_progress';

const defaultProgress: GameProgress = {
  highScore: 0,
  gamesPlayed: 0,
  bestStreak: 0,
  totalCorrect: 0,
  totalWrong: 0,
  lastPlayed: '',
  averageScore: 0,
};

/**
 * Hook to manage game progress with localStorage persistence
 */
export function useGameProgress(gameId: string) {
  const [progress, setProgress] = useState<GameProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const allProgress: GameProgressState = JSON.parse(stored);
        if (allProgress[gameId]) {
          setProgress(allProgress[gameId]);
        }
      }
    } catch (error) {
      console.error('Error loading game progress:', error);
    }
    setIsLoaded(true);
  }, [gameId]);

  // Save progress to localStorage
  const saveProgress = useCallback(
    (newData: Partial<GameProgress>) => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const allProgress: GameProgressState = stored ? JSON.parse(stored) : {};

        const currentProgress = allProgress[gameId] || defaultProgress;
        const updatedProgress: GameProgress = {
          ...currentProgress,
          ...newData,
          lastPlayed: new Date().toISOString(),
        };

        // Update high score if new score is higher
        if (newData.highScore !== undefined) {
          updatedProgress.highScore = Math.max(
            currentProgress.highScore,
            newData.highScore,
          );
        }

        // Update best streak if new streak is higher
        if (newData.bestStreak !== undefined) {
          updatedProgress.bestStreak = Math.max(
            currentProgress.bestStreak,
            newData.bestStreak,
          );
        }

        // Increment games played
        if (newData.gamesPlayed !== undefined) {
          updatedProgress.gamesPlayed = currentProgress.gamesPlayed + 1;
        }

        // Update totals
        if (newData.totalCorrect !== undefined) {
          updatedProgress.totalCorrect =
            currentProgress.totalCorrect + newData.totalCorrect;
        }
        if (newData.totalWrong !== undefined) {
          updatedProgress.totalWrong =
            currentProgress.totalWrong + newData.totalWrong;
        }

        // Calculate average score
        if (updatedProgress.gamesPlayed > 0) {
          const totalScore =
            currentProgress.averageScore * currentProgress.gamesPlayed +
            (newData.highScore || 0);
          updatedProgress.averageScore = Math.round(
            totalScore / updatedProgress.gamesPlayed,
          );
        }

        allProgress[gameId] = updatedProgress;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
        setProgress(updatedProgress);

        return updatedProgress;
      } catch (error) {
        console.error('Error saving game progress:', error);
        return progress;
      }
    },
    [gameId, progress],
  );

  // Get all game progress for dashboard
  const getAllProgress = useCallback((): GameProgressState => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Error getting all progress:', error);
      return {};
    }
  }, []);

  // Reset progress for current game
  const resetProgress = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const allProgress: GameProgressState = stored ? JSON.parse(stored) : {};
      delete allProgress[gameId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
      setProgress(defaultProgress);
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  }, [gameId]);

  return {
    progress,
    isLoaded,
    saveProgress,
    getAllProgress,
    resetProgress,
  };
}

export default useGameProgress;
