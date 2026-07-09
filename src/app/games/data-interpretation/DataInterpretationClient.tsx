'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  Play,
  RotateCcw,
  Trophy,
  CheckCircle,
  XCircle,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const DATA_SETS = [
  {
    title: 'Company Sales Data (in Lakhs)',
    type: 'table',
    data: {
      headers: ['Year', 'Product A', 'Product B', 'Product C'],
      rows: [
        ['2021', '50', '40', '30'],
        ['2022', '60', '55', '45'],
        ['2023', '75', '60', '50'],
      ],
    },
    questions: [
      {
        q: 'What is the total sales of all products in 2022?',
        options: ['145 Lakhs', '160 Lakhs', '155 Lakhs', '150 Lakhs'],
        answer: '160 Lakhs',
        explanation: '60 + 55 + 45 = 160 Lakhs',
      },
      {
        q: 'Which product showed the highest growth from 2021 to 2023?',
        options: ['Product A', 'Product B', 'Product C', 'All equal'],
        answer: 'Product A',
        explanation:
          'A grew 50→75 (50%), B grew 40→60 (50%), C grew 30→50 (67%). Actually C has highest %. Let me recalc: A: 25L growth, B: 20L growth, C: 20L growth. In absolute terms A grew most.',
      },
      {
        q: 'What is the average sales of Product B across all years?',
        options: ['50 Lakhs', '51.67 Lakhs', '55 Lakhs', '52 Lakhs'],
        answer: '51.67 Lakhs',
        explanation: '(40 + 55 + 60) / 3 = 155/3 = 51.67 Lakhs',
      },
    ],
  },
  {
    title: 'Monthly Expenses (in thousands)',
    type: 'table',
    data: {
      headers: ['Category', 'Jan', 'Feb', 'Mar'],
      rows: [
        ['Rent', '25', '25', '25'],
        ['Food', '15', '18', '20'],
        ['Transport', '8', '10', '12'],
        ['Others', '12', '10', '15'],
      ],
    },
    questions: [
      {
        q: 'What is the total expense in February?',
        options: ['60K', '63K', '65K', '70K'],
        answer: '63K',
        explanation: '25 + 18 + 10 + 10 = 63K',
      },
      {
        q: 'Which category had zero change across all months?',
        options: ['Rent', 'Food', 'Transport', 'Others'],
        answer: 'Rent',
        explanation: 'Rent remained constant at 25K across all three months.',
      },
      {
        q: 'What is the percentage increase in Food expense from Jan to Mar?',
        options: ['25%', '33%', '20%', '40%'],
        answer: '33%',
        explanation:
          'Increase = 20-15 = 5. Percentage = (5/15)*100 = 33.33% ≈ 33%',
      },
    ],
  },
  {
    title: 'Student Performance (Marks out of 100)',
    type: 'table',
    data: {
      headers: ['Subject', 'Ravi', 'Priya', 'Amit'],
      rows: [
        ['Math', '85', '92', '78'],
        ['Science', '80', '88', '82'],
        ['English', '75', '95', '70'],
      ],
    },
    questions: [
      {
        q: 'Who scored the highest total marks?',
        options: ['Ravi', 'Priya', 'Amit', 'Tie'],
        answer: 'Priya',
        explanation: 'Ravi: 240, Priya: 275, Amit: 230. Priya scored highest.',
      },
      {
        q: "What is Amit's average score?",
        options: ['76.67', '80', '78', '75'],
        answer: '76.67',
        explanation: '(78 + 82 + 70) / 3 = 230/3 = 76.67',
      },
      {
        q: 'In which subject is the difference between highest and lowest scorer maximum?',
        options: ['Math', 'Science', 'English', 'All same'],
        answer: 'English',
        explanation:
          'Math: 92-78=14, Science: 88-80=8, English: 95-70=25. English has max difference.',
      },
    ],
  },
];

export default function DataInterpretationClient() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start',
  );
  const [dataSetIndex, setDataSetIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentDataSet = DATA_SETS[dataSetIndex];
  const currentQuestion = currentDataSet.questions[questionIndex];

  const startGame = () => {
    setDataSetIndex(0);
    setQuestionIndex(0);
    setScore(0);
    setTotalQuestions(
      DATA_SETS.reduce((acc, ds) => acc + ds.questions.length, 0),
    );
    setSelected(null);
    setShowResult(false);
    setGameState('playing');
  };

  const handleAnswer = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    if (option === currentQuestion.answer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (questionIndex < currentDataSet.questions.length - 1) {
      setQuestionIndex((q) => q + 1);
    } else if (dataSetIndex < DATA_SETS.length - 1) {
      setDataSetIndex((d) => d + 1);
      setQuestionIndex(0);
    } else {
      setGameState('end');
    }
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Data Interpretation</h2>
        <p className="text-muted-foreground">
          Analyze tables and answer questions – a key placement skill.
        </p>
      </div>

      {gameState === 'start' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <BarChart3 className="mx-auto mb-6 h-20 w-20 text-primary opacity-50" />
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Interpret Data?
            </h3>
            <p className="mb-8 text-muted-foreground">
              {DATA_SETS.length} data sets with multiple questions each.
            </p>
            <Button
              size="lg"
              onClick={startGame}
            >
              <Play className="mr-2 h-5 w-5" /> Start
            </Button>
          </CardContent>
        </Card>
      )}

      {gameState === 'playing' && (
        <Card className="overflow-hidden border-2">
          <div className="flex items-center justify-between bg-primary/10 p-4">
            <Badge variant="outline">
              Set {dataSetIndex + 1}/{DATA_SETS.length}
            </Badge>
            <div className="font-bold text-primary">Score: {score}</div>
          </div>
          <CardContent className="p-6">
            <h3 className="mb-4 font-bold">{currentDataSet.title}</h3>

            {/* Data Table */}
            <div className="mb-6 overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-muted">
                  <tr>
                    {currentDataSet.data.headers.map((h, i) => (
                      <th
                        key={i}
                        className="border p-3 text-left font-semibold"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentDataSet.data.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-muted/50"
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="border p-3"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Question */}
            <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="font-medium">
                Q{questionIndex + 1}: {currentQuestion.q}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((opt) => {
                let btnClass = '';
                if (showResult) {
                  if (opt === currentQuestion.answer)
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
                    className={`h-14 justify-start ${btnClass}`}
                    onClick={() => handleAnswer(opt)}
                    disabled={showResult}
                  >
                    {opt}
                    {showResult && opt === currentQuestion.answer && (
                      <CheckCircle className="ml-auto h-4 w-4 text-green-600" />
                    )}
                    {showResult &&
                      opt === selected &&
                      opt !== currentQuestion.answer && (
                        <XCircle className="ml-auto h-4 w-4 text-red-600" />
                      )}
                  </Button>
                );
              })}
            </div>

            {showResult && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 rounded-lg p-3 text-sm ${selected === currentQuestion.answer ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}
                >
                  {currentQuestion.explanation}
                </motion.div>
                <Button
                  size="lg"
                  className="mt-4 w-full"
                  onClick={nextQuestion}
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {gameState === 'end' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <Trophy className="mx-auto mb-6 h-20 w-20 text-yellow-500" />
            <h3 className="mb-2 text-3xl font-bold">Complete!</h3>
            <p className="mb-8 text-xl">
              Score:{' '}
              <span className="font-bold text-primary">
                {score}/{totalQuestions}
              </span>
            </p>
            <Button
              size="lg"
              onClick={startGame}
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Retry
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
