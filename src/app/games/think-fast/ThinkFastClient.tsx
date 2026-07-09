'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, RotateCcw, Check, X, Trophy, Timer, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types of questions
type QuestionType = 'math' | 'color' | 'logic' | 'even_odd';

interface Question {
  type: QuestionType;
  text: string;
  subText?: string;
  isTrue: boolean;
  color?: string; // For Stroop effect
}

const generateQuestion = (): Question => {
  const types: QuestionType[] = ['math', 'color', 'even_odd', 'logic'];
  const type = types[Math.floor(Math.random() * types.length)];
  const isTrue = Math.random() > 0.5;

  switch (type) {
    case 'math': {
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      const sum = a + b;
      const displayedSum = isTrue
        ? sum
        : sum +
          (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      return {
        type: 'math',
        text: `${a} + ${b} = ${displayedSum}`,
        isTrue,
      };
    }
    case 'even_odd': {
      const num = Math.floor(Math.random() * 100);
      const isEven = num % 2 === 0;
      // Question: "Is [num] Even?"
      // if isTrue, we want answer Yes. So if num is Even, we ask "Is it Even?" -> Yes.
      // if !isTrue, we ask "Is it Odd?" when it is Even -> No.
      // Actually simpler:
      // Text: "[num] is Even"
      // if isTrue -> num is even.
      // if !isTrue -> num is odd.
      const displayedNum = isTrue
        ? isEven
          ? num
          : num + 1
        : isEven
          ? num + 1
          : num;
      return {
        type: 'even_odd',
        text: `${displayedNum} is Even`,
        isTrue: displayedNum % 2 === 0,
      };
    }
    case 'color': {
      const colors = ['Red', 'Blue', 'Green', 'Yellow'];
      const colorMap: Record<string, string> = {
        Red: 'text-red-500',
        Blue: 'text-blue-500',
        Green: 'text-green-500',
        Yellow: 'text-yellow-500',
      };
      const text = colors[Math.floor(Math.random() * colors.length)];
      const colorKey = isTrue
        ? text
        : colors[Math.floor(Math.random() * colors.length)];
      // Ensure logic holds: if !isTrue, text and color must differ
      const finalColorKey =
        !isTrue && text === colorKey
          ? colors.find((c) => c !== text) || 'Blue'
          : colorKey;

      return {
        type: 'color',
        text: text,
        subText: 'Is the text color matching the word?',
        color: colorMap[finalColorKey],
        isTrue: text === finalColorKey,
      };
    }
    case 'logic': {
      // Simple comparisons
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      // "A > B"
      const operator = Math.random() > 0.5 ? '>' : '<';
      const correct = operator === '>' ? a > b : a < b;

      // We want the statement to be isTrue or !isTrue
      // If isTrue=true, we generate a statement that IS true.
      // If correct is NOT true, we must regenerate? No.
      // We generate random statement. Then calculate isTrue.
      // Discard the passed isTrue for this one to be simpler
      // return { type: 'logic', text: `${a} ${operator} ${b}`, isTrue: correct };

      // To respect generation distribution roughly 50/50:
      let text = '';
      let valid = false;
      if (isTrue) {
        // Generate true statement
        if (operator === '>') {
          // a > b
          const high = Math.max(a, b) + 1;
          const low = Math.min(a, b);
          text = `${high} > ${low}`;
          valid = true;
        } else {
          const low = Math.min(a, b);
          const high = Math.max(a, b) + 1;
          text = `${low} < ${high}`;
          valid = true;
        }
      } else {
        // Generate false statement
        if (operator === '>') {
          // want false, so a < b but say a > b
          const low = Math.min(a, b);
          const high = Math.max(a, b) + 1;
          text = `${low} > ${high}`;
          valid = false;
        } else {
          const high = Math.max(a, b) + 1;
          const low = Math.min(a, b);
          text = `${high} < ${low}`;
          valid = false;
        }
      }
      return { type: 'logic', text, isTrue: valid };
    }
    default:
      return { type: 'math', text: '1+1=2', isTrue: true };
  }
};

export default function ThinkFastClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>(
    'idle',
  );
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5000); // 5 seconds per question initially? Or total time? usually "per question" or "add time on correct"
  // Let's do: Time bar drains. Correct answer adds time. Mistake subtracts time heavily or Game Over.
  // "Think Fast" usually means sudden death or time attack.
  // Let's do: 3 lives. 3 seconds per question. Reset time on next question.
  const [lives, setLives] = useState(3);
  const [question, setQuestion] = useState<Question | null>(null);
  const [maxTime, setMaxTime] = useState(3000);

  // Animation states
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setMaxTime(3000);
    nextQuestion();
  };

  const nextQuestion = () => {
    setQuestion(generateQuestion());
    setTimeLeft(maxTime);
    startTimeRef.current = Date.now();

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = maxTime - elapsed;

      if (remaining <= 0) {
        handleTimeout();
      } else {
        setTimeLeft(remaining);
      }
    }, 50);
  };

  const handleTimeout = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    handleAnswer(null); // Treat timeout as wrong? Or special handling
  };

  const handleAnswer = (userSaidTrue: boolean | null) => {
    if (!question) return;

    let correct = false;
    if (userSaidTrue === null) {
      // Timeout
      correct = false;
    } else {
      correct = userSaidTrue === question.isTrue;
    }

    if (correct) {
      setScore((s) => s + 10);
      setFeedback('correct');
      // Increase speed slightly every 5 points
      if (score > 0 && score % 50 === 0) {
        setMaxTime((prev) => Math.max(1000, prev - 200));
      }
      setTimeout(() => {
        setFeedback(null);
        nextQuestion();
      }, 200); // Short delay for visual feedback
    } else {
      setFeedback('wrong');
      setLives((l) => l - 1);
      if (lives <= 1) {
        setGameState('gameover');
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        setTimeout(() => {
          setFeedback(null);
          nextQuestion();
        }, 500);
      }
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="mx-auto max-w-xl">
      {/* Stats Header */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="text-xl font-bold">{score}</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full ${i < lives ? 'bg-red-500' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border bg-background p-8 shadow-sm">
        {gameState === 'idle' && (
          <div className="py-12 text-center">
            <Zap className="mx-auto mb-6 h-16 w-16 text-yellow-500" />
            <h2 className="mb-4 text-2xl font-bold">Ready to Think Fast?</h2>
            <p className="mb-8 text-muted-foreground">
              Answer as many questions as you can. You have 3 seconds per
              question and 3 lives.
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Game
            </Button>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Trophy className="h-10 w-10 text-yellow-500" />
            </div>
            <h2 className="mb-2 text-3xl font-bold">Game Over!</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Final Score: {score}
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <RotateCcw className="mr-2 h-5 w-5" /> Play Again
            </Button>
          </div>
        )}

        {gameState === 'playing' && question && (
          <div className="flex flex-col items-center">
            {/* Timer Bar */}
            <div className="mb-12 h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${(timeLeft / maxTime) * 100}%` }}
                transition={{ duration: 0 }}
              />
            </div>

            {/* Question Card */}
            <div className="mb-12 flex h-48 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-muted/20 p-6 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={question.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <h3
                    className={`text-4xl font-black ${question.color ? question.color : 'text-foreground'}`}
                  >
                    {question.text}
                  </h3>
                  {question.subText && (
                    <p className="text-muted-foreground">{question.subText}</p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="grid w-full grid-cols-2 gap-4">
              <Button
                variant="destructive"
                className="h-24 text-2xl font-bold"
                onClick={() => handleAnswer(false)}
              >
                <X className="mr-2 h-8 w-8" /> False
              </Button>
              <Button
                className="h-24 bg-green-600 text-2xl font-bold hover:bg-green-700"
                onClick={() => handleAnswer(true)}
              >
                <Check className="mr-2 h-8 w-8" /> True
              </Button>
            </div>

            {/* Feedback Overlay */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm ${
                    feedback === 'correct' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {feedback === 'correct' ? (
                    <Check className="h-32 w-32" />
                  ) : (
                    <X className="h-32 w-32" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
