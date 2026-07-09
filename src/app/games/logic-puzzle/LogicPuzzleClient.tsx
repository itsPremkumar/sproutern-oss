'use client';

import { useState, useCallback } from 'react';
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
  Lightbulb,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface Puzzle {
  scenario: string;
  clues: string[];
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  type: string;
}

// Logic puzzle database
const puzzleDatabase: Puzzle[] = [
  // Syllogisms
  {
    scenario: 'Read the statements carefully:',
    clues: ['All roses are flowers.', 'Some flowers are red.'],
    question: 'Which conclusion is definitely true?',
    options: [
      'All roses are red',
      'Some roses may be red',
      'No roses are red',
      'All flowers are roses',
    ],
    correctAnswer: 'Some roses may be red',
    explanation:
      'Since some flowers are red and all roses are flowers, it\'s possible (but not certain) that some roses are red. We cannot conclude "All roses are red" from these statements.',
    type: 'Syllogism',
  },
  {
    scenario: 'Consider these statements:',
    clues: ['All programmers are logical.', 'Raj is a programmer.'],
    question: 'What can we conclude?',
    options: [
      'Raj is logical',
      'Raj is not logical',
      'All logical people are programmers',
      'Cannot be determined',
    ],
    correctAnswer: 'Raj is logical',
    explanation:
      'If all programmers are logical, and Raj is a programmer, then Raj must be logical. This is a classic deductive reasoning pattern.',
    type: 'Syllogism',
  },
  // Ordering
  {
    scenario: 'Five friends finished a race:',
    clues: [
      'Amit finished before Bala but after Chandra.',
      'Dev finished last.',
      'Esha finished between Bala and Dev.',
    ],
    question: 'Who finished first?',
    options: ['Amit', 'Bala', 'Chandra', 'Esha'],
    correctAnswer: 'Chandra',
    explanation:
      'From clue 1: Chandra > Amit > Bala. From clue 3: Bala > Esha > Dev. So the order is: Chandra > Amit > Bala > Esha > Dev. Chandra finished first.',
    type: 'Ordering',
  },
  {
    scenario: 'In a building with 5 floors:',
    clues: [
      'Anita lives above Bina.',
      'Chitra lives on the topmost floor.',
      'Deepa lives between Anita and Chitra.',
    ],
    question: 'If Bina lives on the 2nd floor, what floor does Deepa live on?',
    options: ['3rd', '4th', '5th', 'Cannot determine'],
    correctAnswer: '4th',
    explanation:
      'Chitra is on 5th (top). Bina is on 2nd. Anita is above Bina, so 3rd or above but below Deepa. Deepa is between Anita and Chitra. So: Anita on 3rd, Deepa on 4th.',
    type: 'Ordering',
  },
  // Truth-teller/Liar
  {
    scenario:
      'Of A, B, and C — one always lies, one always tells the truth, one alternates:',
    clues: [
      'A says: "B always lies."',
      'B says: "C sometimes lies."',
      'C says: "A tells the truth."',
    ],
    question: 'Who always tells the truth?',
    options: ['A', 'B', 'C', 'Cannot determine'],
    correctAnswer: 'B',
    explanation:
      "If A tells truth, B always lies. But then B's statement about C must be false, meaning C never lies OR always lies. If C always tells truth, C says A tells truth, consistent. But we need exactly one truth-teller. Testing B as truth-teller works with the constraints.",
    type: 'Truth/Lie',
  },
  // Direction
  {
    scenario: 'Starting from point P:',
    clues: [
      'Walk 5km North.',
      'Turn right and walk 3km.',
      'Turn right and walk 5km.',
    ],
    question: 'In which direction is point P from your final position?',
    options: ['North', 'South', 'East', 'West'],
    correctAnswer: 'West',
    explanation:
      "North 5km → East 3km → South 5km. You're now 3km East of P. So P is West of your position.",
    type: 'Direction',
  },
  // Blood relation
  {
    scenario: 'Family relationships:',
    clues: ["A is B's father.", "B is C's sister.", "D is A's father."],
    question: 'How is D related to C?',
    options: ['Grandfather', 'Great-grandfather', 'Uncle', 'Father'],
    correctAnswer: 'Grandfather',
    explanation:
      "D is A's father (A's dad). A is B's father. B is C's sister, meaning A is also C's father. So D is C's grandfather.",
    type: 'Blood Relation',
  },
  // Coding-Decoding
  {
    scenario: 'In a certain code:',
    clues: ['APPLE is coded as ELPPA', 'BANANA is coded as ANANAB'],
    question: 'How is MANGO coded?',
    options: ['OGNAM', 'MAHGO', 'GNAOM', 'MANGO'],
    correctAnswer: 'OGNAM',
    explanation:
      'The pattern is simple reversal: APPLE → ELPPA (reversed). So MANGO → OGNAM.',
    type: 'Coding',
  },
];

const diffSettings = {
  easy: { puzzles: 6, showHintFree: true },
  medium: { puzzles: 8, showHintFree: false },
  hard: { puzzles: 10, showHintFree: false },
};

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentPuzzle: Puzzle | null;
  puzzleNumber: number;
  totalPuzzles: number;
  score: number;
  correctAnswers: number;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  showHint: boolean;
  streak: number;
  bestStreak: number;
  usedPuzzles: number[];
}

export default function LogicPuzzleClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentPuzzle: null,
    puzzleNumber: 0,
    totalPuzzles: 6,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    isCorrect: null,
    showHint: false,
    streak: 0,
    bestStreak: 0,
    usedPuzzles: [],
  });

  const getRandomPuzzle = useCallback(
    (usedIndices: number[]): { puzzle: Puzzle; index: number } => {
      const available = puzzleDatabase
        .map((p, i) => ({ p, i }))
        .filter(({ i }) => !usedIndices.includes(i));

      if (available.length === 0) {
        const idx = Math.floor(Math.random() * puzzleDatabase.length);
        return { puzzle: puzzleDatabase[idx], index: idx };
      }

      const { p, i } = available[Math.floor(Math.random() * available.length)];
      return { puzzle: p, index: i };
    },
    [],
  );

  const startGame = useCallback(() => {
    const settings = diffSettings[difficulty];
    const { puzzle, index } = getRandomPuzzle([]);

    setGameState({
      phase: 'playing',
      currentPuzzle: puzzle,
      puzzleNumber: 1,
      totalPuzzles: settings.puzzles,
      score: 0,
      correctAnswers: 0,
      selectedAnswer: null,
      isCorrect: null,
      showHint: settings.showHintFree,
      streak: 0,
      bestStreak: 0,
      usedPuzzles: [index],
    });
  }, [difficulty, getRandomPuzzle]);

  const handleAnswer = (answer: string) => {
    if (!gameState.currentPuzzle) return;

    const isCorrect = answer === gameState.currentPuzzle.correctAnswer;
    const points = isCorrect
      ? gameState.showHint && !diffSettings[difficulty].showHintFree
        ? 10
        : 15
      : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      isCorrect,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextPuzzle = () => {
    if (gameState.puzzleNumber >= gameState.totalPuzzles) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      const { puzzle, index } = getRandomPuzzle(gameState.usedPuzzles);
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentPuzzle: puzzle,
        puzzleNumber: prev.puzzleNumber + 1,
        selectedAnswer: null,
        isCorrect: null,
        showHint: diffSettings[difficulty].showHintFree,
        usedPuzzles: [...prev.usedPuzzles, index],
      }));
    }
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
            <h3 className="mb-2 font-semibold">Puzzle Types Include:</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>Syllogisms:</strong> Conclusions from statements
              </li>
              <li>
                • <strong>Ordering:</strong> Sequences and positions
              </li>
              <li>
                • <strong>Directions:</strong> Navigation puzzles
              </li>
              <li>
                • <strong>Blood Relations:</strong> Family trees
              </li>
              <li>
                • <strong>Coding:</strong> Pattern decoding
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Lightbulb className="h-5 w-5" />
            Start Logic Puzzles
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalPuzzles}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalPuzzles - gameState.correctAnswers}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const puzzle = gameState.currentPuzzle!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Puzzle {gameState.puzzleNumber} of {gameState.totalPuzzles}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {puzzle.type}
          </span>
        </div>
      </div>

      {/* Puzzle Card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <p className="mb-4 text-muted-foreground">{puzzle.scenario}</p>

        {/* Clues */}
        <div className="mb-6 rounded-xl bg-muted/50 p-4">
          <h4 className="mb-2 font-semibold">Given Information:</h4>
          <ul className="space-y-1">
            {puzzle.clues.map((clue, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  {idx + 1}
                </span>
                {clue}
              </li>
            ))}
          </ul>
        </div>

        {/* Question */}
        <p className="mb-6 text-lg font-medium">{puzzle.question}</p>

        {gameState.phase === 'playing' && (
          <div className="space-y-3">
            {puzzle.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full rounded-xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary/5"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {gameState.phase === 'feedback' && (
          <div className="space-y-4">
            <div className="space-y-2">
              {puzzle.options.map((option) => (
                <div
                  key={option}
                  className={cn(
                    'rounded-xl border-2 p-4',
                    option === puzzle.correctAnswer &&
                      'border-green-500 bg-green-50 dark:bg-green-900/20',
                    option === gameState.selectedAnswer &&
                      option !== puzzle.correctAnswer &&
                      'border-red-500 bg-red-50 dark:bg-red-900/20',
                    option !== puzzle.correctAnswer &&
                      option !== gameState.selectedAnswer &&
                      'border-border opacity-50',
                  )}
                >
                  {option}
                  {option === puzzle.correctAnswer && ' ✓'}
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="mb-1 font-semibold text-blue-700 dark:text-blue-400">
                Explanation:
              </h4>
              <p className="text-sm">{puzzle.explanation}</p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextPuzzle}
                className="gap-2"
              >
                {gameState.puzzleNumber >= gameState.totalPuzzles
                  ? 'See Results'
                  : 'Next Puzzle'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset */}
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
