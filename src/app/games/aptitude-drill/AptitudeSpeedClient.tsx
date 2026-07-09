'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Calculator,
  Play,
  RotateCcw,
  Trophy,
  Zap,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const QUESTIONS = {
  percentage: [
    {
      q: 'What is 25% of 400?',
      options: ['100', '75', '125', '80'],
      answer: '100',
    },
    {
      q: 'If a product costs ₹800 after 20% discount, what was the original price?',
      options: ['₹960', '₹1000', '₹1200', '₹900'],
      answer: '₹1000',
    },
    {
      q: '30 is what percent of 150?',
      options: ['15%', '20%', '25%', '30%'],
      answer: '20%',
    },
    {
      q: 'A number increased by 50% gives 120. Find the number.',
      options: ['80', '90', '60', '70'],
      answer: '80',
    },
    {
      q: 'What is 12.5% of 800?',
      options: ['100', '80', '120', '90'],
      answer: '100',
    },
  ],
  profitLoss: [
    {
      q: 'CP = ₹500, SP = ₹600. Profit%?',
      options: ['10%', '15%', '20%', '25%'],
      answer: '20%',
    },
    {
      q: 'If SP = ₹450 and Loss = 10%, find CP.',
      options: ['₹500', '₹495', '₹400', '₹550'],
      answer: '₹500',
    },
    {
      q: 'An item bought for ₹200 is sold at 25% profit. SP = ?',
      options: ['₹225', '₹250', '₹275', '₹240'],
      answer: '₹250',
    },
    {
      q: 'SP = ₹720, Profit = 20%. Find CP.',
      options: ['₹600', '₹650', '₹576', '₹640'],
      answer: '₹600',
    },
    {
      q: 'Loss of ₹50 on CP of ₹500. Loss%?',
      options: ['5%', '10%', '15%', '8%'],
      answer: '10%',
    },
  ],
  timeWork: [
    {
      q: 'A can do a job in 10 days, B in 15 days. Together?',
      options: ['5 days', '6 days', '7 days', '8 days'],
      answer: '6 days',
    },
    {
      q: 'If 5 workers build a wall in 10 days, how many days for 10 workers?',
      options: ['5', '8', '6', '4'],
      answer: '5',
    },
    {
      q: 'A pipe fills a tank in 6 hrs. Another empties it in 8 hrs. If both open, time to fill?',
      options: ['12 hrs', '24 hrs', '18 hrs', '20 hrs'],
      answer: '24 hrs',
    },
    {
      q: 'Work done by A in 1 day = 1/8. By B = 1/12. Together in 1 day?',
      options: ['1/6', '1/5', '5/24', '1/4'],
      answer: '5/24',
    },
  ],
  ratio: [
    {
      q: 'Divide ₹500 in ratio 2:3.',
      options: ['₹200, ₹300', '₹250, ₹250', '₹150, ₹350', '₹100, ₹400'],
      answer: '₹200, ₹300',
    },
    {
      q: 'If A:B = 3:4 and B:C = 2:5, find A:C.',
      options: ['3:10', '6:20', '3:5', '6:10'],
      answer: '3:10',
    },
    {
      q: 'The ratio of boys to girls is 5:3. If there are 40 boys, how many girls?',
      options: ['24', '20', '30', '15'],
      answer: '24',
    },
  ],
  speed: [
    {
      q: 'A car travels 120 km in 2 hours. Speed?',
      options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'],
      answer: '60 km/h',
    },
    {
      q: 'Time to cover 150 km at 50 km/h?',
      options: ['2 hrs', '2.5 hrs', '3 hrs', '3.5 hrs'],
      answer: '3 hrs',
    },
    {
      q: 'A train 100m long passes a pole in 5 sec. Speed in km/h?',
      options: ['72', '60', '80', '54'],
      answer: '72',
    },
  ],
};

type Category = keyof typeof QUESTIONS;

export default function AptitudeSpeedClient() {
  const [category, setCategory] = useState<Category>('percentage');
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start',
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState<typeof QUESTIONS.percentage>([]);

  const startGame = useCallback(() => {
    const qs = [...QUESTIONS[category]]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    setQuestions(qs);
    setCurrentQ(0);
    setScore(0);
    setTimeLeft(10);
    setSelected(null);
    setShowResult(false);
    setGameState('playing');
  }, [category]);

  useEffect(() => {
    if (gameState !== 'playing' || showResult) return;
    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [gameState, timeLeft, showResult]);

  const handleTimeout = () => {
    setShowResult(true);
    setTimeout(() => nextQuestion(), 1500);
  };

  const handleAnswer = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    if (option === questions[currentQ].answer) {
      setScore((s) => s + 10 + timeLeft);
    }
    setTimeout(() => nextQuestion(), 1500);
  };

  const nextQuestion = () => {
    if (currentQ >= questions.length - 1) {
      setGameState('end');
    } else {
      setCurrentQ((q) => q + 1);
      setTimeLeft(10);
      setSelected(null);
      setShowResult(false);
    }
  };

  const current = questions[currentQ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Aptitude Speed Drill</h2>
        <p className="text-muted-foreground">
          Solve quantitative problems under time pressure.
        </p>
      </div>

      {gameState === 'start' && (
        <>
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(QUESTIONS) as Category[]).map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? 'default' : 'outline'}
                onClick={() => setCategory(cat)}
                className="capitalize"
              >
                {cat.replace(/([A-Z])/g, ' $1')}
              </Button>
            ))}
          </div>
          <Card className="border-2">
            <CardContent className="py-16 text-center">
              <Calculator className="mx-auto mb-6 h-20 w-20 text-primary opacity-50" />
              <h3 className="mb-4 text-2xl font-bold">
                Ready for {category.replace(/([A-Z])/g, ' $1')}?
              </h3>
              <p className="mb-8 text-muted-foreground">
                5 questions, 10 seconds each. Faster = More points!
              </p>
              <Button
                size="lg"
                onClick={startGame}
              >
                <Play className="mr-2 h-5 w-5" /> Start Drill
              </Button>
            </CardContent>
          </Card>
        </>
      )}

      {gameState === 'playing' && current && (
        <Card className="overflow-hidden border-2">
          <div className="flex items-center justify-between bg-primary/10 p-4">
            <Badge variant="outline">
              Q{currentQ + 1}/{questions.length}
            </Badge>
            <div className="flex items-center gap-2 font-bold">
              <Clock className="h-4 w-4" />
              <span className={timeLeft <= 3 ? 'text-red-500' : ''}>
                {timeLeft}s
              </span>
            </div>
            <div className="font-bold text-primary">Score: {score}</div>
          </div>
          <Progress
            value={(timeLeft / 10) * 100}
            className="h-1"
          />
          <CardContent className="p-8">
            <h3 className="mb-8 text-center text-2xl font-bold">{current.q}</h3>
            <div className="grid grid-cols-2 gap-4">
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
                    className={`h-16 text-lg ${btnClass}`}
                    onClick={() => handleAnswer(opt)}
                    disabled={showResult}
                  >
                    {opt}
                    {showResult && opt === current.answer && (
                      <CheckCircle className="ml-2 h-5 w-5 text-green-600" />
                    )}
                    {showResult &&
                      opt === selected &&
                      opt !== current.answer && (
                        <XCircle className="ml-2 h-5 w-5 text-red-600" />
                      )}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {gameState === 'end' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <Trophy className="mx-auto mb-6 h-20 w-20 text-yellow-500" />
            <h3 className="mb-2 text-3xl font-bold">Drill Complete!</h3>
            <p className="mb-8 text-xl">
              Your Score:{' '}
              <span className="font-bold text-primary">{score}</span>
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={startGame}
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Retry
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setGameState('start')}
              >
                Change Topic
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
