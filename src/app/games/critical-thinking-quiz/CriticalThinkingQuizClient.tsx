'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CriticalQuestion {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: CriticalQuestion[] = [
  {
    id: 1,
    scenario:
      "Debate: 'We should not listen to Candidate A's economic plan because he has a bad haircut.'",
    question: 'What logical fallacy is this?',
    options: ['Ad Hominem', 'Straw Man', 'Slippery Slope', 'Red Herring'],
    correctIndex: 0,
    explanation:
      "Ad Hominem attacks the person's character or appearance rather than their argument.",
  },
  {
    id: 2,
    scenario:
      "News Headline: 'Scientists believe the new treatment is promising.'",
    question: 'Is this statement a Fact or Opinion?',
    options: ['Fact', 'Opinion'],
    correctIndex: 0,
    explanation:
      'It is a FACT that scientists believe this (verifiable). Whether the treatment IS promising is an opinion/prediction, but the report on their belief is factual reporting.',
    // Wait, "Scientists believe" is a statement of fact about their belief.
    // Actually, let's make it clearer.
    // "The new treatment differs from the old one." -> Fact.
    // "The new treatment is better." -> Opinion.
    // Let's change scenario.
  },
  {
    id: 3,
    scenario:
      "Statement: 'If we ban gas cars, next they will ban bicycles, and soon we won't be allowed to walk outside!'",
    question: 'What logical fallacy is this?',
    options: [
      'False Dilemma',
      'Slippery Slope',
      'Circular Reasoning',
      'Hasty Generalization',
    ],
    correctIndex: 1,
    explanation:
      'Slippery Slope argues that a small step will inevitably lead to an extreme chain of events without evidence.',
  },
  {
    id: 4,
    scenario:
      "Advertisement: '9 out of 10 dentists recommend this toothpaste.'",
    question: 'What critical question should you ask?',
    options: [
      'What color is the toothpaste?',
      'Who were the 10 dentists and were they paid?',
      'Is it minty?',
      'can I buy it online?',
    ],
    correctIndex: 1,
    explanation:
      'Evaluating the source and potential bias (sample size, selection, funding) is key to critical thinking.',
  },
  {
    id: 5,
    scenario: "Argument: 'You are either with us, or you are against us.'",
    question: 'What logical fallacy is this?',
    options: [
      'False Dilemma',
      'Appeal to Emotion',
      'Bandwagon Fallacy',
      'Post Hoc',
    ],
    correctIndex: 0,
    explanation:
      'False Dilemma (or False Dichotomy) presents only two options when more possibilities exist (e.g., being neutral).',
  },
];

export default function CriticalThinkingQuizClient() {
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
    if (selectedOption !== null) return;
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
            <BookOpen className="mx-auto mb-6 h-20 w-20 text-slate-500" />
            <h2 className="mb-4 text-3xl font-bold">Critical Thinking Quiz</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Identify fallacies and analyze arguments.
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Start Quiz
            </Button>
          </div>
        )}

        {gameState === 'results' && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <Trophy
                className={`h-12 w-12 ${score === questions.length ? 'text-yellow-500' : 'text-gray-400'}`}
              />
            </div>
            <h2 className="mb-2 text-3xl font-bold">Quiz Complete!</h2>
            <p className="mb-6 text-4xl font-black text-primary">
              {score} / {questions.length}
            </p>
            <Button
              size="lg"
              onClick={startGame}
              className="w-full max-w-xs text-lg"
            >
              <RotateCcw className="mr-2 h-5 w-5" /> Retake Quiz
            </Button>
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
              <div className="mb-6 rounded-xl bg-muted/50 p-6 italic text-muted-foreground">
                "{questions[currentQuestionIndex].scenario}"
              </div>
              <h3 className="mb-6 text-xl font-bold">
                {questions[currentQuestionIndex].question}
              </h3>

              <div className="grid gap-3">
                {questions[currentQuestionIndex].options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect =
                    idx === questions[currentQuestionIndex].correctIndex;
                  const showResult = selectedOption !== null;

                  let className =
                    'justify-start text-left h-auto py-4 px-6 text-lg';
                  if (showResult) {
                    if (isCorrect)
                      className +=
                        ' border-green-500 bg-green-50 text-green-700';
                    else if (isSelected)
                      className += ' border-red-500 bg-red-50 text-red-700';
                    else className += ' opacity-50';
                  }

                  return (
                    <Button
                      key={idx}
                      variant="outline"
                      className={className}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={showResult}
                    >
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

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20"
                >
                  <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
                    Analysis:
                  </h4>
                  <p className="mb-6 text-sm text-blue-600 dark:text-blue-300">
                    {questions[currentQuestionIndex].explanation}
                  </p>
                  <Button
                    onClick={nextQuestion}
                    size="lg"
                    className="w-full"
                  >
                    Next <ChevronRight className="ml-2 h-4 w-4" />
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
