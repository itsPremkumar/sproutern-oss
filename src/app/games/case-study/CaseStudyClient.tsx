'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Play,
  RotateCcw,
  Trophy,
  CheckCircle,
  XCircle,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

const CASES = [
  {
    title: 'The Pricing Dilemma',
    scenario:
      "TechStart, a SaaS startup, has 1000 customers paying $50/month. They're considering raising prices to $65/month. Market research shows 20% of customers might churn due to the increase.",
    question: 'Should they raise the price?',
    options: [
      'Yes, revenue increases',
      'No, customer loss is too high',
      'Need more data',
      'Only for new customers',
    ],
    answer: 'Yes, revenue increases',
    explanation:
      'Current: 1000 × $50 = $50,000/month. After increase: 800 × $65 = $52,000/month. Despite 20% churn, revenue increases by $2,000/month. The price increase is financially beneficial, though they should also consider long-term brand impact.',
  },
  {
    title: 'Market Entry Strategy',
    scenario:
      'GlobalFoods wants to enter the Indian market with premium organic snacks. They can either: (A) Partner with BigRetail for nationwide distribution, or (B) Start D2C (Direct-to-Consumer) online.',
    question: 'Which strategy is better for initial launch?',
    options: [
      'Partner with BigRetail',
      'Start D2C online first',
      'Both simultaneously',
      'Franchise model',
    ],
    answer: 'Start D2C online first',
    explanation:
      'D2C allows: lower initial investment, direct customer feedback, ability to test product-market fit, and build brand before scaling. Once validated, they can negotiate better terms with retailers.',
  },
  {
    title: 'Cost Cutting Decision',
    scenario:
      'A manufacturing company needs to cut costs by 15%. Options: (A) Lay off 10% of workforce, (B) Reduce marketing budget by 50%, (C) Switch to cheaper raw materials.',
    question: 'Which option poses the highest long-term risk?',
    options: [
      'Layoffs',
      'Cutting marketing',
      'Cheaper materials',
      'All equal risk',
    ],
    answer: 'Cheaper materials',
    explanation:
      'Cheaper materials directly affect product quality, leading to customer complaints, returns, and brand damage. Layoffs and marketing cuts are painful but reversible; quality issues can permanently damage reputation.',
  },
  {
    title: 'The Pivot Question',
    scenario:
      "FitApp, a fitness app with 50K users, has low engagement (5 min/day). Users report they want social features. The dev team suggests pivoting to become a 'social fitness network'. Investment required: $500K.",
    question: 'What should they do first?',
    options: [
      'Full pivot to social',
      'Test social features with MVP',
      'Shut down and restart',
      'Continue current model',
    ],
    answer: 'Test social features with MVP',
    explanation:
      'Before investing $500K, validate the hypothesis with a Minimum Viable Product (MVP). Add basic social features, measure engagement improvement, then decide on full pivot. This reduces risk significantly.',
  },
  {
    title: 'Acquisition Offer',
    scenario:
      'CodeLearn, an edtech startup with $1M ARR, receives a $15M acquisition offer. Founders own 60%, investors own 40%. The company is growing 100% YoY.',
    question: 'Based purely on financials, should founders accept?',
    options: [
      'Yes, 15x revenue is great',
      'No, growth suggests higher value',
      'Counter with $20M',
      'Need profit data',
    ],
    answer: 'No, growth suggests higher value',
    explanation:
      'At 100% YoY growth, next year ARR = $2M. Industry multiples for high-growth edtech can be 20-30x revenue. $15M for a company potentially worth $40-60M in 1-2 years is too low. However, risk tolerance and cash needs matter too.',
  },
  {
    title: 'Customer Acquisition',
    scenario:
      'EcoClean sells eco-friendly cleaning products. CAC (Customer Acquisition Cost) = $30. LTV (Lifetime Value) = $90. Marketing team wants to double ad spend to acquire more customers.',
    question: 'Is doubling ad spend a good idea?',
    options: [
      'Yes, LTV:CAC ratio is healthy',
      'No, ratio is too low',
      'Only if CAC decreases',
      'Need more margin data',
    ],
    answer: 'Yes, LTV:CAC ratio is healthy',
    explanation:
      'LTV:CAC = 90:30 = 3:1, which is the benchmark for healthy unit economics. Doubling spend makes sense IF the CAC remains stable at scale. They should monitor CAC closely as they scale.',
  },
];

export default function CaseStudyClient() {
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
    if (option === CASES[currentQ].answer) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ >= CASES.length - 1) {
      setGameState('end');
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const current = CASES[currentQ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Case Study Sprint</h2>
        <p className="text-muted-foreground">
          Solve mini business cases like a consultant.
        </p>
      </div>

      {gameState === 'start' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <Briefcase className="mx-auto mb-6 h-20 w-20 text-primary opacity-50" />
            <h3 className="mb-4 text-2xl font-bold">
              Business Strategy Challenge
            </h3>
            <p className="mb-8 text-muted-foreground">
              {CASES.length} real-world business scenarios.
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
          <div className="flex items-center justify-between bg-amber-50 p-4 dark:bg-amber-950">
            <Badge className="bg-amber-100 text-amber-800">
              {current.title}
            </Badge>
            <div className="font-bold text-primary">
              Score: {score}/{CASES.length}
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-6 rounded-lg bg-muted p-6">
              <p className="text-sm leading-relaxed">{current.scenario}</p>
            </div>

            <p className="mb-4 font-bold">{current.question}</p>

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
                    className={`h-14 justify-start ${btnClass}`}
                    onClick={() => handleAnswer(opt)}
                    disabled={showResult}
                  >
                    {opt}
                    {showResult && opt === current.answer && (
                      <CheckCircle className="ml-auto h-4 w-4 text-green-600" />
                    )}
                    {showResult &&
                      opt === selected &&
                      opt !== current.answer && (
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
                  className="mt-4 rounded-lg bg-blue-50 p-4 text-sm dark:bg-blue-900/30"
                >
                  <strong>Analysis:</strong> {current.explanation}
                </motion.div>
                <Button
                  size="lg"
                  className="mt-4 w-full"
                  onClick={nextQuestion}
                >
                  Next Case <ChevronRight className="ml-2 h-4 w-4" />
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
            <h3 className="mb-2 text-3xl font-bold">Sprint Complete!</h3>
            <p className="mb-8 text-xl">
              Score:{' '}
              <span className="font-bold text-primary">
                {score}/{CASES.length}
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
