'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Play,
  RotateCcw,
  Trophy,
  CheckCircle,
  XCircle,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const QUESTIONS = [
  {
    sentence: "He don't know the answer to this question.",
    options: [
      "He doesn't know",
      "He didn't knew",
      "He don't knows",
      'No error',
    ],
    answer: "He doesn't know",
    explanation:
      "'He' is third person singular, so we use 'doesn't' not 'don't'.",
  },
  {
    sentence: 'Neither the teacher nor the students was present.',
    options: ['was presents', 'were present', 'is present', 'No error'],
    answer: 'were present',
    explanation:
      "With 'neither...nor', the verb agrees with the closer subject ('students' is plural).",
  },
  {
    sentence: 'I have been living here since five years.',
    options: [
      'for five years',
      'from five years',
      'since five year',
      'No error',
    ],
    answer: 'for five years',
    explanation:
      "'Since' is used with a specific point in time. 'For' is used with a duration.",
  },
  {
    sentence: 'The news are very shocking today.',
    options: ['The news is', 'The news were', 'The news are being', 'No error'],
    answer: 'The news is',
    explanation: "'News' is an uncountable noun and takes a singular verb.",
  },
  {
    sentence: 'She is more taller than her brother.',
    options: ['more tall', 'taller', 'most taller', 'No error'],
    answer: 'taller',
    explanation:
      "Don't use 'more' with comparatives ending in '-er'. Just 'taller' is correct.",
  },
  {
    sentence: 'Each of the students have submitted their assignment.',
    options: ['has submitted', 'having submitted', 'have submit', 'No error'],
    answer: 'has submitted',
    explanation: "'Each' is singular and takes a singular verb ('has').",
  },
  {
    sentence: 'I enjoyed to watch the movie last night.',
    options: [
      'enjoyed watching',
      'enjoyed watch',
      'enjoy to watch',
      'No error',
    ],
    answer: 'enjoyed watching',
    explanation:
      "'Enjoy' is followed by a gerund (-ing form), not an infinitive.",
  },
  {
    sentence: 'He gave me an useful advice.',
    options: [
      'a useful advice',
      'an useful advices',
      'useful advices',
      'No error',
    ],
    answer: 'a useful advice',
    explanation:
      "'Useful' starts with a 'y' sound (consonant), so we use 'a' not 'an'.",
  },
  {
    sentence: 'I will call you when I will reach home.',
    options: [
      'when I reach',
      'when I am reaching',
      'when I reached',
      'No error',
    ],
    answer: 'when I reach',
    explanation:
      "In time clauses with 'when', use simple present for future actions.",
  },
  {
    sentence: 'The committee have made their decision.',
    options: ['has made its', 'have make their', 'has made their', 'No error'],
    answer: 'has made its',
    explanation:
      "In formal English, 'committee' as a single unit takes singular verb and pronoun.",
  },
];

export default function GrammarFixerClient() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start',
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const startGame = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setGameState('playing');
  };

  const handleAnswer = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    if (option === QUESTIONS[currentQ].answer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ >= QUESTIONS.length - 1) {
      setGameState('end');
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const current = QUESTIONS[currentQ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Grammar Fixer</h2>
        <p className="text-muted-foreground">
          Identify and correct grammatical errors in sentences.
        </p>
      </div>

      {gameState === 'start' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <BookOpen className="mx-auto mb-6 h-20 w-20 text-primary opacity-50" />
            <h3 className="mb-4 text-2xl font-bold">
              Test Your Grammar Skills
            </h3>
            <p className="mb-8 text-muted-foreground">
              {QUESTIONS.length} sentences with common errors. Find the fix!
            </p>
            <Button
              size="lg"
              onClick={startGame}
            >
              <Play className="mr-2 h-5 w-5" /> Start Quiz
            </Button>
          </CardContent>
        </Card>
      )}

      {gameState === 'playing' && (
        <Card className="overflow-hidden border-2">
          <div className="flex items-center justify-between bg-primary/10 p-4">
            <Badge variant="outline">
              Q{currentQ + 1}/{QUESTIONS.length}
            </Badge>
            <div className="font-bold text-primary">Score: {score}</div>
          </div>
          <CardContent className="p-8">
            <p className="mb-2 text-sm text-muted-foreground">
              Find the error and select the correction:
            </p>
            <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-center text-xl font-medium">
                "{current.sentence}"
              </p>
            </div>

            <div className="grid gap-3">
              {current.options.map((opt) => {
                let btnClass = '';
                if (showResult) {
                  if (opt === current.answer)
                    btnClass =
                      'bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30';
                  else if (opt === selected)
                    btnClass =
                      'bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30';
                }
                return (
                  <Button
                    key={opt}
                    variant="outline"
                    className={`h-14 justify-start text-lg ${btnClass}`}
                    onClick={() => handleAnswer(opt)}
                    disabled={showResult}
                  >
                    {opt}
                    {showResult && opt === current.answer && (
                      <CheckCircle className="ml-auto h-5 w-5 text-green-600" />
                    )}
                    {showResult &&
                      opt === selected &&
                      opt !== current.answer && (
                        <XCircle className="ml-auto h-5 w-5 text-red-600" />
                      )}
                  </Button>
                );
              })}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 rounded-lg p-4 text-sm ${selected === current.answer ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}
              >
                <strong>
                  {selected === current.answer ? 'Correct!' : 'Incorrect.'}
                </strong>{' '}
                {current.explanation}
              </motion.div>
            )}

            {showResult && (
              <Button
                size="lg"
                className="mt-6 w-full"
                onClick={nextQuestion}
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {gameState === 'end' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <Trophy className="mx-auto mb-6 h-20 w-20 text-yellow-500" />
            <h3 className="mb-2 text-3xl font-bold">Quiz Complete!</h3>
            <p className="mb-8 text-xl">
              You scored{' '}
              <span className="font-bold text-primary">
                {score}/{QUESTIONS.length}
              </span>
            </p>
            <Button
              size="lg"
              onClick={startGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Try Again
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
