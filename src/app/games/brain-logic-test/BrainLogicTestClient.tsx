'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question:
      'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
    options: ['(1/3)', '(1/8)', '(2/8)', '(1/16)'],
    correctIndex: 1,
    explanation: 'Each number is half the previous number.',
  },
  {
    id: 2,
    question:
      'Syllogism: All flowers are trees. Some trees are houses. All houses are wheels. Conclusion: Some wheels are trees.',
    options: ['True', 'False', 'Cannot be determined'],
    correctIndex: 0,
    explanation:
      'Some trees are houses -> All houses are wheels -> So some trees are wheels. Thus, some wheels are trees.',
  },
  {
    id: 3,
    question: 'Which word does NOT belong with the others?',
    options: ['Index', 'Glossary', 'Chapter', 'Book'],
    correctIndex: 3,
    explanation:
      'Index, Glossary, and Chapter are parts of a book. Book is the whole object.',
  },
  {
    id: 4,
    question: 'Cup is to Coffee as Bowl is to...',
    options: ['Dish', 'Soup', 'Spoon', 'Food'],
    correctIndex: 1,
    explanation: 'Coffee goes into a Cup. Soup goes into a Bowl.',
  },
  {
    id: 5,
    question: 'If PAINTER is coded as NCGPRGP, then REASON is coded as?',
    options: ['PCYQMP', 'PCYUMP', 'PGYQMP', 'PCTQMP'],
    correctIndex: 0,
    explanation: 'Logic: -2 letters. R->P, E->C, A->Y, S->Q, O->M, N->P.',
  },
];

export default function BrainLogicTestClient() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'results'>(
    'idle',
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    setSelectedOption(index);
    setShowExplanation(true);

    if (index === questions[currentQuestionIndex].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setGameState('results');
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Bar */}
      {gameState === 'playing' && (
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQuestionIndex + 1}/{questions.length}
            </span>
            <span>Score: {score}</span>
          </div>
          <Progress
            value={(currentQuestionIndex / questions.length) * 100}
            className="h-2"
          />
        </div>
      )}

      <div className="overflow-hidden rounded-3xl border bg-background p-8 shadow-sm">
        {gameState === 'idle' && (
          <div className="py-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Trophy className="mx-auto mb-6 h-20 w-20 text-pink-500" />
              <h2 className="mb-4 text-3xl font-bold">Brain Logic Test</h2>
              <p className="mb-8 text-xl text-muted-foreground">
                5 questions to test your logical reasoning. Can you get a
                perfect score?
              </p>
              <Button
                size="lg"
                onClick={startGame}
                className="w-full max-w-xs text-lg"
              >
                <Play className="mr-2 h-5 w-5" /> Start Test
              </Button>
            </motion.div>
          </div>
        )}

        {gameState === 'results' && (
          <div className="py-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                <Trophy
                  className={`h-12 w-12 ${score === questions.length ? 'text-yellow-500' : 'text-gray-400'}`}
                />
              </div>
              <h2 className="mb-2 text-3xl font-bold">Test Complete!</h2>
              <p className="mb-6 text-4xl font-black text-primary">
                {score} / {questions.length}
              </p>
              <p className="mb-8 text-muted-foreground">
                {score === questions.length
                  ? 'Perfect Score! You are a logic master.'
                  : score > questions.length / 2
                    ? 'Great job! Keep practicing.'
                    : 'Keep training to improve your score.'}
              </p>
              <Button
                size="lg"
                onClick={startGame}
                className="w-full max-w-xs text-lg"
              >
                <RotateCcw className="mr-2 h-5 w-5" /> Retake Test
              </Button>
            </motion.div>
          </div>
        )}

        {gameState === 'playing' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-6 text-xl font-bold leading-relaxed">
                {questions[currentQuestionIndex].question}
              </h3>

              <div className="grid gap-3">
                {questions[currentQuestionIndex].options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect =
                    idx === questions[currentQuestionIndex].correctIndex;
                  const showResult = selectedOption !== null;

                  let variant = 'outline';
                  let className =
                    'justify-start text-left h-auto py-4 px-6 text-lg';

                  if (showResult) {
                    if (isCorrect) {
                      className +=
                        ' border-green-500 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700';
                    } else if (isSelected) {
                      className +=
                        ' border-red-500 bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700';
                    } else {
                      className += ' opacity-50';
                    }
                  } else {
                    className += ' hover:border-primary';
                  }

                  return (
                    <Button
                      key={idx}
                      variant="outline"
                      className={className}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={showResult}
                    >
                      <span className="mr-4 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                      {showResult && isCorrect && (
                        <CheckCircle2 className="ml-auto h-6 w-6 text-green-600" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="ml-auto h-6 w-6 text-red-600" />
                      )}
                    </Button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-xl bg-muted/50 p-6"
                >
                  <h4 className="mb-2 font-semibold">Explanation:</h4>
                  <p className="mb-6 text-muted-foreground">
                    {questions[currentQuestionIndex].explanation}
                  </p>
                  <Button
                    onClick={nextQuestion}
                    size="lg"
                    className="w-full"
                  >
                    {currentQuestionIndex < questions.length - 1
                      ? 'Next Question'
                      : 'View Results'}{' '}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
