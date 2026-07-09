/**
 * Sudoku Generator using backtracking algorithm
 * Generates unique, valid Sudoku puzzles for different difficulty levels
 */

type SudokuGrid = number[][];
type Difficulty = 'easy' | 'medium' | 'hard';

// Number of cells to remove based on difficulty
const CELLS_TO_REMOVE: Record<Difficulty, { min: number; max: number }> = {
  easy: { min: 30, max: 35 },
  medium: { min: 40, max: 45 },
  hard: { min: 50, max: 55 },
};

/**
 * Creates an empty 9x9 grid
 */
function createEmptyGrid(): SudokuGrid {
  return Array(9)
    .fill(null)
    .map(() => Array(9).fill(0));
}

/**
 * Checks if a number can be placed at the given position
 */
function isValidPlacement(
  grid: SudokuGrid,
  row: number,
  col: number,
  num: number,
): boolean {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num) return false;
  }

  // Check column
  for (let y = 0; y < 9; y++) {
    if (grid[y][col] === num) return false;
  }

  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let y = boxRow; y < boxRow + 3; y++) {
    for (let x = boxCol; x < boxCol + 3; x++) {
      if (grid[y][x] === num) return false;
    }
  }

  return true;
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Fills the grid using backtracking with randomization
 */
function fillGrid(grid: SudokuGrid): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        // Try numbers 1-9 in random order
        const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        for (const num of numbers) {
          if (isValidPlacement(grid, row, col, num)) {
            grid[row][col] = num;

            if (fillGrid(grid)) {
              return true;
            }

            grid[row][col] = 0;
          }
        }

        return false;
      }
    }
  }
  return true;
}

/**
 * Counts the number of solutions for a puzzle (stops at 2)
 */
function countSolutions(grid: SudokuGrid, count = { value: 0 }): number {
  if (count.value > 1) return count.value;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValidPlacement(grid, row, col, num)) {
            grid[row][col] = num;
            countSolutions(grid, count);
            grid[row][col] = 0;
          }
        }
        return count.value;
      }
    }
  }

  count.value++;
  return count.value;
}

/**
 * Removes cells from a completed grid to create a puzzle
 * Ensures the puzzle has a unique solution
 */
function createPuzzle(
  solution: SudokuGrid,
  difficulty: Difficulty,
): SudokuGrid {
  const puzzle = solution.map((row) => [...row]);
  const { min, max } = CELLS_TO_REMOVE[difficulty];
  const targetRemoval = min + Math.floor(Math.random() * (max - min + 1));

  // Create list of all cell positions and shuffle
  const positions: [number, number][] = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      positions.push([row, col]);
    }
  }
  const shuffledPositions = shuffleArray(positions);

  let removed = 0;

  for (const [row, col] of shuffledPositions) {
    if (removed >= targetRemoval) break;

    const backup = puzzle[row][col];
    puzzle[row][col] = 0;

    // Check if puzzle still has unique solution
    const testGrid = puzzle.map((r) => [...r]);
    const solutions = countSolutions(testGrid);

    if (solutions !== 1) {
      // Restore if removing this cell creates multiple solutions
      puzzle[row][col] = backup;
    } else {
      removed++;
    }
  }

  return puzzle;
}

/**
 * Generates a complete Sudoku puzzle with solution
 */
export function generateSudoku(difficulty: Difficulty): {
  puzzle: SudokuGrid;
  solution: SudokuGrid;
} {
  // Generate a complete valid solution
  const solution = createEmptyGrid();
  fillGrid(solution);

  // Create puzzle by removing cells
  const puzzle = createPuzzle(solution, difficulty);

  return { puzzle, solution };
}

/**
 * Validates if a completed grid is a valid Sudoku solution
 */
export function isValidSudoku(grid: SudokuGrid): boolean {
  // Check each row
  for (let row = 0; row < 9; row++) {
    const seen = new Set<number>();
    for (let col = 0; col < 9; col++) {
      const num = grid[row][col];
      if (num < 1 || num > 9 || seen.has(num)) return false;
      seen.add(num);
    }
  }

  // Check each column
  for (let col = 0; col < 9; col++) {
    const seen = new Set<number>();
    for (let row = 0; row < 9; row++) {
      const num = grid[row][col];
      if (num < 1 || num > 9 || seen.has(num)) return false;
      seen.add(num);
    }
  }

  // Check each 3x3 box
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const seen = new Set<number>();
      for (let row = boxRow * 3; row < boxRow * 3 + 3; row++) {
        for (let col = boxCol * 3; col < boxCol * 3 + 3; col++) {
          const num = grid[row][col];
          if (num < 1 || num > 9 || seen.has(num)) return false;
          seen.add(num);
        }
      }
    }
  }

  return true;
}

/**
 * Gets a hint for a specific cell
 */
export function getHint(
  puzzle: SudokuGrid,
  solution: SudokuGrid,
  row: number,
  col: number,
): number | null {
  if (puzzle[row][col] !== 0) return null;
  return solution[row][col];
}

/**
 * Checks if a user's answer is correct for a cell
 */
export function checkAnswer(
  solution: SudokuGrid,
  row: number,
  col: number,
  answer: number,
): boolean {
  return solution[row][col] === answer;
}
