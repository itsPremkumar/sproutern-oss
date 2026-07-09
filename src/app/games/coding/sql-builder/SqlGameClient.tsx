'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  X,
  RotateCcw,
  Database,
  Play,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const CHALLENGES = [
  {
    id: 1,
    question: 'Select all users who are active.',
    table: 'users',
    schema: ['id', 'name', 'email', 'is_active'],
    template: ['SELECT *', 'FROM users', 'WHERE _____ = 1;'],
    options: ['name', 'email', 'is_active', 'id'],
    answer: 'is_active',
    explanation: "We filter by the 'is_active' column set to 1 (True).",
  },
  {
    id: 2,
    question: 'Find the total number of orders.',
    table: 'orders',
    schema: ['order_id', 'customer_id', 'amount', 'date'],
    template: ['SELECT _____', 'FROM orders;'],
    options: ['SUM(amount)', 'COUNT(*)', 'AVG(amount)', 'order_id'],
    answer: 'COUNT(*)',
    explanation: 'COUNT(*) returns the total number of rows in the table.',
  },
  {
    id: 3,
    question: "Get customers from 'New York' sorted by name.",
    table: 'customers',
    schema: ['id', 'name', 'city', 'phone'],
    template: [
      'SELECT * FROM customers',
      "WHERE city = 'New York'",
      'ORDER BY _____ ASC;',
    ],
    options: ['city', 'id', 'name', 'phone'],
    answer: 'name',
    explanation:
      "We use ORDER BY to sort results. Here we sort by 'name' in Ascending order.",
  },
  {
    id: 4,
    question: 'Find the average salary of employees.',
    table: 'employees',
    schema: ['id', 'dept', 'role', 'salary'],
    template: ['SELECT _____(salary)', 'FROM employees;'],
    options: ['SUM', 'MAX', 'COUNT', 'AVG'],
    answer: 'AVG',
    explanation:
      'The AVG() function calculates the average value of a numeric column.',
  },
  {
    id: 5,
    question: 'Join users with their orders.',
    table: 'users, orders',
    schema: ['users.id', 'orders.user_id'],
    template: ['SELECT * FROM users', 'JOIN orders', 'ON users.id = _____;'],
    options: ['orders.id', 'orders.user_id', 'users.name', 'orders.date'],
    answer: 'orders.user_id',
    explanation:
      'We join the tables on the common key: users.id matches orders.user_id.',
  },
  {
    id: 6,
    question: 'Get top 5 highest paid employees.',
    table: 'employees',
    schema: ['id', 'name', 'salary', 'dept'],
    template: ['SELECT * FROM employees', 'ORDER BY salary DESC', '_____ 5;'],
    options: ['TOP', 'LIMIT', 'FIRST', 'FETCH'],
    answer: 'LIMIT',
    explanation:
      'LIMIT restricts the number of rows returned. In MySQL/PostgreSQL we use LIMIT.',
  },
  {
    id: 7,
    question: 'Count employees in each department.',
    table: 'employees',
    schema: ['id', 'name', 'dept', 'salary'],
    template: ['SELECT dept, COUNT(*)', 'FROM employees', '_____ dept;'],
    options: ['ORDER BY', 'GROUP BY', 'SORT BY', 'FILTER BY'],
    answer: 'GROUP BY',
    explanation:
      'GROUP BY groups rows with the same value, allowing aggregate functions like COUNT.',
  },
  {
    id: 8,
    question: 'Find products with price between 100 and 500.',
    table: 'products',
    schema: ['id', 'name', 'price', 'category'],
    template: ['SELECT * FROM products', 'WHERE price _____ 100 AND 500;'],
    options: ['IN', 'BETWEEN', 'FROM', 'RANGE'],
    answer: 'BETWEEN',
    explanation: 'BETWEEN selects values within a given range (inclusive).',
  },
];

export default function SqlGameClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start',
  );

  const currentChallenge = CHALLENGES[currentIndex];

  const handleSelect = (option: string) => {
    if (isCorrect !== null) return;
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    const correct = selectedOption === currentChallenge.answer;
    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);
  };

  const nextChallenge = () => {
    if (currentIndex < CHALLENGES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setGameState('end');
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameState('playing');
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">SQL Query Master</h2>
        <p className="text-muted-foreground">
          Complete the SQL queries to fetch the right data.
        </p>
      </div>

      <Card className="overflow-hidden border-2 bg-slate-50 shadow-lg dark:bg-slate-950">
        <CardContent className="p-0">
          {gameState === 'start' && (
            <div className="p-8 py-20 text-center">
              <Database className="mx-auto mb-6 h-20 w-20 text-blue-500 opacity-80" />
              <h3 className="mb-4 text-2xl font-bold">Ready to Query?</h3>
              <p className="mb-8 text-muted-foreground">
                Test your knowledge of SELECT, JOIN, WHERE, and GROUP BY.
              </p>
              <Button
                size="lg"
                onClick={() => setGameState('playing')}
                className="bg-blue-600 text-lg hover:bg-blue-700"
              >
                <Play className="mr-2 h-5 w-5" /> Start Challenge
              </Button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="grid min-h-[400px] md:grid-cols-2">
              <div className="border-r bg-white p-8 dark:bg-slate-900">
                <div className="mb-6 flex items-center justify-between">
                  <Badge variant="outline">
                    Q{currentIndex + 1}/{CHALLENGES.length}
                  </Badge>
                  <span className="font-bold text-blue-600">
                    Score: {score}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {currentChallenge.question}
                </h3>

                <div className="mb-6 rounded-lg border bg-slate-100 p-4 dark:bg-slate-800">
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Database className="h-3 w-3" /> Table:{' '}
                    {currentChallenge.table}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentChallenge.schema.map((col) => (
                      <Badge
                        key={col}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {col}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-slate-900 p-6 font-mono text-lg text-slate-100 shadow-inner">
                  {currentChallenge.template.map((line, i) => (
                    <div
                      key={i}
                      className="leading-loose"
                    >
                      {line.split('_____').map((part, j, arr) => (
                        <span key={j}>
                          <span className="text-purple-400">{part}</span>
                          {j < arr.length - 1 && (
                            <span
                              className={`mx-1 inline-block min-w-[80px] border-b-2 px-1 text-center ${isCorrect === true ? 'border-green-500 text-green-400' : isCorrect === false ? 'border-red-500 text-red-400' : 'border-slate-500'}`}
                            >
                              {selectedOption || '?'}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center bg-slate-50 p-8 dark:bg-slate-950">
                <div className="mb-8 grid grid-cols-1 gap-3">
                  {currentChallenge.options.map((opt) => (
                    <Button
                      key={opt}
                      variant={selectedOption === opt ? 'default' : 'outline'}
                      className={`h-14 justify-start font-mono text-lg ${isCorrect !== null && opt === currentChallenge.answer ? 'border-green-500 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : ''} ${isCorrect === false && selectedOption === opt ? 'border-red-500 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : ''}`}
                      onClick={() => handleSelect(opt)}
                      disabled={isCorrect !== null}
                    >
                      {opt}
                      {isCorrect !== null &&
                        opt === currentChallenge.answer && (
                          <Check className="ml-auto h-5 w-5" />
                        )}
                      {isCorrect === false && selectedOption === opt && (
                        <X className="ml-auto h-5 w-5" />
                      )}
                    </Button>
                  ))}
                </div>

                {isCorrect === null ? (
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={checkAnswer}
                    disabled={!selectedOption}
                  >
                    Run Query <Play className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-lg p-4 text-sm ${isCorrect ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}
                    >
                      <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong>{' '}
                      {currentChallenge.explanation}
                    </motion.div>
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={nextChallenge}
                    >
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {gameState === 'end' && (
            <div className="p-8 py-20 text-center">
              <Database className="mx-auto mb-6 h-20 w-20 text-green-500" />
              <h3 className="mb-4 text-3xl font-bold">Query Complete!</h3>
              <p className="mb-8 text-xl">
                You scored{' '}
                <span className="font-bold text-blue-600">
                  {score}/{CHALLENGES.length}
                </span>
              </p>
              <Button
                onClick={restartGame}
                size="lg"
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Play Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
