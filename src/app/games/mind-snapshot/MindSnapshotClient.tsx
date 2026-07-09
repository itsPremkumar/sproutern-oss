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
  Eye,
  HelpCircle,
  Star,
  Circle,
  Square,
  Triangle,
  Heart,
  Diamond,
  Hexagon,
} from 'lucide-react';

interface SceneItem {
  id: number;
  shape: string;
  color: string;
  position: { row: number; col: number };
  icon: React.ElementType;
}

interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

interface GameState {
  phase: 'setup' | 'viewing' | 'question' | 'feedback' | 'result';
  round: number;
  score: number;
  scene: SceneItem[];
  currentQuestion: Question | null;
  selectedAnswer: string | null;
  totalRounds: number;
  correctAnswers: number;
  gridSize: number;
}

const shapes = [
  { name: 'Star', icon: Star },
  { name: 'Circle', icon: Circle },
  { name: 'Square', icon: Square },
  { name: 'Triangle', icon: Triangle },
  { name: 'Heart', icon: Heart },
  { name: 'Diamond', icon: Diamond },
  { name: 'Hexagon', icon: Hexagon },
];

const colors = [
  { name: 'Red', class: 'text-red-500' },
  { name: 'Blue', class: 'text-blue-500' },
  { name: 'Green', class: 'text-green-500' },
  { name: 'Yellow', class: 'text-yellow-500' },
  { name: 'Purple', class: 'text-purple-500' },
  { name: 'Orange', class: 'text-orange-500' },
  { name: 'Pink', class: 'text-pink-500' },
];

const difficultySettings = {
  easy: { items: 4, viewTime: 5000, gridSize: 3, rounds: 6 },
  medium: { items: 6, viewTime: 4000, gridSize: 4, rounds: 8 },
  hard: { items: 8, viewTime: 3000, gridSize: 5, rounds: 10 },
};

export default function MindSnapshotClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    round: 1,
    score: 0,
    scene: [],
    currentQuestion: null,
    selectedAnswer: null,
    totalRounds: 6,
    correctAnswers: 0,
    gridSize: 3,
  });
  const [countdown, setCountdown] = useState(0);

  const settings = difficultySettings[difficulty];

  const generateScene = useCallback(() => {
    const scene: SceneItem[] = [];
    const usedPositions = new Set<string>();

    for (let i = 0; i < settings.items; i++) {
      let row, col;
      do {
        row = Math.floor(Math.random() * settings.gridSize);
        col = Math.floor(Math.random() * settings.gridSize);
      } while (usedPositions.has(`${row}-${col}`));

      usedPositions.add(`${row}-${col}`);
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      scene.push({
        id: i,
        shape: shape.name,
        color: color.name,
        position: { row, col },
        icon: shape.icon,
      });
    }

    return scene;
  }, [settings.items, settings.gridSize]);

  const generateQuestion = useCallback((scene: SceneItem[]): Question => {
    const questionTypes = [
      () => {
        const item = scene[Math.floor(Math.random() * scene.length)];
        const wrongColors = colors
          .filter((c) => c.name !== item.color)
          .slice(0, 3)
          .map((c) => c.name);
        return {
          text: `What color was the ${item.shape}?`,
          options: [item.color, ...wrongColors].sort(() => Math.random() - 0.5),
          correctAnswer: item.color,
        };
      },
      () => {
        const item = scene[Math.floor(Math.random() * scene.length)];
        const wrongShapes = shapes
          .filter((s) => s.name !== item.shape)
          .slice(0, 3)
          .map((s) => s.name);
        return {
          text: `Which shape was ${item.color.toLowerCase()}?`,
          options: [item.shape, ...wrongShapes].sort(() => Math.random() - 0.5),
          correctAnswer: item.shape,
        };
      },
      () => {
        const count = scene.length;
        const options = [count, count + 1, count - 1, count + 2].filter(
          (n) => n > 0,
        );
        return {
          text: 'How many items were in the scene?',
          options: [...new Set(options)]
            .slice(0, 4)
            .map(String)
            .sort(() => Math.random() - 0.5),
          correctAnswer: String(count),
        };
      },
      () => {
        const randomColor =
          colors[Math.floor(Math.random() * colors.length)].name;
        const count = scene.filter((s) => s.color === randomColor).length;
        const options = [count, count + 1, Math.max(0, count - 1), count + 2];
        return {
          text: `How many ${randomColor.toLowerCase()} items were there?`,
          options: [...new Set(options)]
            .slice(0, 4)
            .map(String)
            .sort(() => Math.random() - 0.5),
          correctAnswer: String(count),
        };
      },
    ];

    const questionFn =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];
    return questionFn();
  }, []);

  const startGame = useCallback(() => {
    const scene = generateScene();
    setGameState({
      phase: 'viewing',
      round: 1,
      score: 0,
      scene,
      currentQuestion: null,
      selectedAnswer: null,
      totalRounds: settings.rounds,
      correctAnswers: 0,
      gridSize: settings.gridSize,
    });
    setCountdown(Math.floor(settings.viewTime / 1000));
  }, [generateScene, settings.rounds, settings.gridSize, settings.viewTime]);

  const nextRound = useCallback(() => {
    const scene = generateScene();
    setGameState((prev) => ({
      ...prev,
      phase: 'viewing',
      round: prev.round + 1,
      scene,
      currentQuestion: null,
      selectedAnswer: null,
    }));
    setCountdown(Math.floor(settings.viewTime / 1000));
  }, [generateScene, settings.viewTime]);

  // Viewing countdown
  useEffect(() => {
    if (gameState.phase !== 'viewing') return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const question = generateQuestion(gameState.scene);
      setGameState((prev) => ({
        ...prev,
        phase: 'question',
        currentQuestion: question,
      }));
    }
  }, [gameState.phase, countdown, gameState.scene, generateQuestion]);

  const handleAnswer = (answer: string) => {
    if (gameState.phase !== 'question' || !gameState.currentQuestion) return;

    const isCorrect = answer === gameState.currentQuestion.correctAnswer;
    setGameState((prev) => ({
      ...prev,
      selectedAnswer: answer,
      phase: 'feedback',
      score: isCorrect ? prev.score + 15 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  // Feedback timer
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
              <li>Study the scene carefully when it appears</li>
              <li>Remember the shapes, colors, and positions</li>
              <li>Answer questions about what you saw</li>
              <li>Score points for correct answers!</li>
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
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-2xl font-bold text-purple-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {gameState.phase === 'viewing' && (
          <>
            <div className="mb-4 text-center">
              <div className="mb-2 flex items-center justify-center gap-2 text-lg font-semibold text-primary">
                <Eye className="h-5 w-5" />
                Memorize the scene!
              </div>
              <div className="text-4xl font-bold text-primary">{countdown}</div>
            </div>
            <div
              className="mx-auto grid gap-2 rounded-xl bg-muted/30 p-4"
              style={{
                gridTemplateColumns: `repeat(${gameState.gridSize}, minmax(0, 1fr))`,
                maxWidth: `${gameState.gridSize * 70}px`,
              }}
            >
              {Array.from({
                length: gameState.gridSize * gameState.gridSize,
              }).map((_, index) => {
                const row = Math.floor(index / gameState.gridSize);
                const col = index % gameState.gridSize;
                const item = gameState.scene.find(
                  (s) => s.position.row === row && s.position.col === col,
                );
                const Icon = item?.icon;
                const colorClass = item
                  ? colors.find((c) => c.name === item.color)?.class
                  : '';

                return (
                  <div
                    key={index}
                    className="flex aspect-square items-center justify-center rounded-lg border-2 border-border bg-background"
                  >
                    {Icon && <Icon className={cn('h-8 w-8', colorClass)} />}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {(gameState.phase === 'question' || gameState.phase === 'feedback') &&
          gameState.currentQuestion && (
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center gap-2 text-lg font-semibold">
                <HelpCircle className="h-5 w-5 text-primary" />
                {gameState.currentQuestion.text}
              </div>
              <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
                {gameState.currentQuestion.options.map((option) => {
                  const isSelected = gameState.selectedAnswer === option;
                  const isCorrect =
                    option === gameState.currentQuestion?.correctAnswer;
                  const showResult = gameState.phase === 'feedback';

                  return (
                    <Button
                      key={option}
                      variant="outline"
                      onClick={() => handleAnswer(option)}
                      disabled={gameState.phase === 'feedback'}
                      className={cn(
                        'h-12',
                        showResult &&
                          isCorrect &&
                          'border-green-500 bg-green-500 text-white',
                        showResult &&
                          isSelected &&
                          !isCorrect &&
                          'border-red-500 bg-red-500 text-white',
                      )}
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>
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
