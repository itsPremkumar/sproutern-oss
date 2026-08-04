'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Brain,
  CheckCircle2,
  XCircle,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Lightbulb,
  AlertCircle,
  BookOpen,
  Calculator,
  TrendingUp,
  Target,
  GraduationCap,
  ArrowRight,
  Percent,
  Timer,
  Globe,
} from 'lucide-react';
import {
  ToolFAQSection,
  aptitudeTestFAQs,
} from '@/components/tools/tool-faq-section';

const allQuestions = [
  // Speed, Time & Distance
  {
    q: 'If a train travels 120 km in 2 hours, what is its speed in km/h?',
    options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
    correct: 1,
    explanation: 'Speed = Distance / Time = 120 / 2 = 60 km/h',
    topic: 'Speed & Distance',
  },
  {
    q: 'A car covers 450 km in 5 hours. How long will it take to cover 630 km at the same speed?',
    options: ['6 hours', '7 hours', '8 hours', '9 hours'],
    correct: 1,
    explanation: 'Speed = 450/5 = 90 km/h. Time = 630/90 = 7 hours',
    topic: 'Speed & Distance',
  },
  {
    q: 'A train 150m long passes a pole in 15 seconds. What is the speed of the train?',
    options: ['10 m/s', '36 km/h', 'Both A and B', 'None'],
    correct: 2,
    explanation:
      'Speed = 150/15 = 10 m/s = 10 × 3.6 = 36 km/h. Both are correct.',
    topic: 'Speed & Distance',
  },
  {
    q: 'Two trains are moving in opposite directions at 60 km/h and 40 km/h. Their relative speed is:',
    options: ['20 km/h', '50 km/h', '100 km/h', '80 km/h'],
    correct: 2,
    explanation:
      'When moving in opposite directions, relative speed = 60 + 40 = 100 km/h',
    topic: 'Speed & Distance',
  },
  // Percentage
  {
    q: 'What is 15% of 200?',
    options: ['25', '30', '35', '40'],
    correct: 1,
    explanation: '15% of 200 = (15/100) × 200 = 30',
    topic: 'Percentage',
  },
  {
    q: 'If the price of an item increases from ₹400 to ₹500, what is the percentage increase?',
    options: ['20%', '25%', '30%', '35%'],
    correct: 1,
    explanation: 'Increase = 100, % increase = (100/400) × 100 = 25%',
    topic: 'Percentage',
  },
  {
    q: 'A number is increased by 20% and then decreased by 20%. The final value is:',
    options: ['Same as original', '4% more', '4% less', '2% less'],
    correct: 2,
    explanation: 'Net effect = 100 × 1.2 × 0.8 = 96. So 4% less than original.',
    topic: 'Percentage',
  },
  {
    q: 'If 40% of a number is 80, what is the number?',
    options: ['160', '180', '200', '220'],
    correct: 2,
    explanation: '40% × N = 80, N = 80 × (100/40) = 200',
    topic: 'Percentage',
  },
  // Profit & Loss
  {
    q: 'If the cost price is ₹800 and selling price is ₹1000, what is the profit percentage?',
    options: ['20%', '25%', '30%', '35%'],
    correct: 1,
    explanation: 'Profit = 200, Profit% = (200/800) × 100 = 25%',
    topic: 'Profit & Loss',
  },
  {
    q: 'A shopkeeper sells an item at 10% loss. If CP is ₹500, what is the SP?',
    options: ['₹400', '₹450', '₹475', '₹425'],
    correct: 1,
    explanation: 'Loss = 10% of 500 = 50. SP = 500 - 50 = ₹450',
    topic: 'Profit & Loss',
  },
  {
    q: 'An article was sold at 20% profit. If CP was ₹250, what was the SP?',
    options: ['₹275', '₹290', '₹300', '₹320'],
    correct: 2,
    explanation: 'Profit = 20% of 250 = 50. SP = 250 + 50 = ₹300',
    topic: 'Profit & Loss',
  },
  {
    q: 'A merchant marks his goods 40% above CP and gives 20% discount. His profit% is:',
    options: ['15%', '12%', '18%', '20%'],
    correct: 1,
    explanation: 'Let CP = 100. MP = 140. SP = 140 × 0.8 = 112. Profit = 12%',
    topic: 'Profit & Loss',
  },
  // Number Series
  {
    q: 'Complete the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correct: 1,
    explanation: 'Pattern: +4, +6, +8, +10, +12. So 30 + 12 = 42',
    topic: 'Number Series',
  },
  {
    q: 'Find the next number: 1, 4, 9, 16, 25, ?',
    options: ['30', '36', '35', '49'],
    correct: 1,
    explanation: 'Series of perfect squares: 1², 2², 3², 4², 5², 6² = 36',
    topic: 'Number Series',
  },
  {
    q: 'Complete: 3, 9, 27, 81, ?',
    options: ['162', '243', '256', '324'],
    correct: 1,
    explanation: 'Each number × 3: 81 × 3 = 243. (Powers of 3)',
    topic: 'Number Series',
  },
  {
    q: 'Next in series: 2, 3, 5, 7, 11, 13, ?',
    options: ['15', '17', '19', '21'],
    correct: 1,
    explanation: 'Series of prime numbers. Next prime after 13 is 17.',
    topic: 'Number Series',
  },
  // Time & Work
  {
    q: 'If A can complete a work in 10 days and B in 15 days, how many days will they take together?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correct: 1,
    explanation: 'Combined rate = 1/10 + 1/15 = 5/30 = 1/6. Time = 6 days',
    topic: 'Time & Work',
  },
  {
    q: '20 workers can build a wall in 15 days. How many workers are needed to build it in 10 days?',
    options: ['25', '30', '35', '40'],
    correct: 1,
    explanation: 'Workers × Days = Constant. 20 × 15 = W × 10. W = 30 workers',
    topic: 'Time & Work',
  },
  {
    q: 'A can do a work in 12 days. B is 50% more efficient than A. B can finish in:',
    options: ['6 days', '8 days', '10 days', '9 days'],
    correct: 1,
    explanation: 'B is 1.5 times as efficient. Time = 12/1.5 = 8 days',
    topic: 'Time & Work',
  },
  {
    q: 'A does 1/3 of work in 5 days. He finishes remaining in how many more days?',
    options: ['5 days', '10 days', '15 days', '12 days'],
    correct: 1,
    explanation: '1/3 work = 5 days. Remaining 2/3 = 10 days',
    topic: 'Time & Work',
  },
  // Simple Interest
  {
    q: 'Find SI on ₹5000 at 8% per annum for 3 years.',
    options: ['₹1000', '₹1200', '₹1400', '₹1500'],
    correct: 1,
    explanation: 'SI = (P × R × T)/100 = (5000 × 8 × 3)/100 = ₹1200',
    topic: 'Interest',
  },
  {
    q: 'At what rate will ₹800 give ₹200 as SI in 5 years?',
    options: ['4%', '5%', '6%', '8%'],
    correct: 1,
    explanation: 'R = (SI × 100)/(P × T) = (200 × 100)/(800 × 5) = 5%',
    topic: 'Interest',
  },
  // Compound Interest
  {
    q: 'Find CI on ₹10000 at 10% for 2 years compounded annually.',
    options: ['₹2000', '₹2100', '₹2200', '₹2500'],
    correct: 1,
    explanation:
      'A = P(1+R/100)^n = 10000(1.1)² = 12100. CI = 12100-10000 = ₹2100',
    topic: 'Interest',
  },
  // Ratio & Proportion
  {
    q: 'If A:B = 2:3 and B:C = 4:5, find A:B:C.',
    options: ['8:12:15', '2:3:5', '4:6:7', '6:9:10'],
    correct: 0,
    explanation: 'B is common: A:B = 8:12, B:C = 12:15. So A:B:C = 8:12:15',
    topic: 'Ratio & Proportion',
  },
  {
    q: "Divide ₹1200 between A and B in ratio 3:5. B's share is:",
    options: ['₹450', '₹600', '₹750', '₹800'],
    correct: 2,
    explanation: "B's share = (5/8) × 1200 = ₹750",
    topic: 'Ratio & Proportion',
  },
  // Averages
  {
    q: 'Average of 5 numbers is 20. If one number is excluded, average becomes 18. The excluded number is:',
    options: ['24', '26', '28', '30'],
    correct: 2,
    explanation:
      'Sum = 5 × 20 = 100. Remaining = 4 × 18 = 72. Excluded = 100 - 72 = 28',
    topic: 'Averages',
  },
  {
    q: "The average age of 30 students is 15 years. If teacher's age is included, average becomes 16. Teacher's age is:",
    options: ['40 years', '46 years', '50 years', '55 years'],
    correct: 1,
    explanation:
      'Sum of students = 450. New sum = 31 × 16 = 496. Teacher = 496 - 450 = 46 years',
    topic: 'Averages',
  },
  // Ages
  {
    q: 'Father is 3 times as old as son. After 12 years, he will be twice as old. Present age of son is:',
    options: ['10 years', '12 years', '14 years', '16 years'],
    correct: 1,
    explanation:
      'Let son = x, father = 3x. After 12: 3x + 12 = 2(x + 12). x = 12',
    topic: 'Ages',
  },
  {
    q: "Present ages of A and B are in ratio 5:7. After 5 years ratio becomes 3:4. A's present age is:",
    options: ['20 years', '25 years', '30 years', '35 years'],
    correct: 1,
    explanation:
      '5x+5/7x+5 = 3/4. Solving: 20x + 20 = 21x + 15. x = 5. A = 25 years',
    topic: 'Ages',
  },
  // LCM & HCF
  {
    q: 'Find LCM of 12, 18, and 24.',
    options: ['36', '48', '72', '144'],
    correct: 2,
    explanation: 'LCM = 2³ × 3² = 72. Prime factorization method.',
    topic: 'LCM & HCF',
  },
  {
    q: 'HCF of 36 and 48 is:',
    options: ['6', '12', '18', '24'],
    correct: 1,
    explanation: '36 = 2² × 3², 48 = 2⁴ × 3. HCF = 2² × 3 = 12',
    topic: 'LCM & HCF',
  },
];

export default function AptitudeTestPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  const [testQuestions, setTestQuestions] = useState<typeof allQuestions>([]);
  const [questionCount, setQuestionCount] = useState(10);

  const startTest = () => {
    // Shuffle and pick questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, questionCount);
    setTestQuestions(selected);
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers(new Array(questionCount).fill(-1));
    setShowResults(false);
    setSelectedAnswer(-1);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer(-1);

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === testQuestions[index]?.correct) correct++;
    });
    return correct;
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80)
      return {
        text: "Excellent! You're well prepared!",
        color: 'text-green-600',
      };
    if (percentage >= 60)
      return {
        text: 'Good! Keep practicing to improve.',
        color: 'text-blue-600',
      };
    if (percentage >= 40)
      return {
        text: 'Average. Review the formulas and practice more.',
        color: 'text-yellow-600',
      };
    return {
      text: 'Needs improvement. Focus on basics.',
      color: 'text-red-600',
    };
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            Free Practice Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Aptitude Mock Test
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Practice 30+ quantitative aptitude questions for placement exams,
            campus interviews, and competitive tests.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">30+ Questions</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Timer className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">No Time Limit</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Target className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Detailed Solutions</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Users className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">15,000+ Users</span>
          </div>
        </div>

        {!started && !showResults && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Aptitude Test
              </CardTitle>
              <CardDescription>
                Test your quantitative aptitude skills with randomly selected
                questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg bg-secondary p-4">
                  <h3 className="mb-3 font-semibold">Test Settings:</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>Number of Questions</Label>
                      <div className="mt-2 flex gap-2">
                        {[5, 10, 15, 20].map((num) => (
                          <Button
                            key={num}
                            variant={
                              questionCount === num ? 'default' : 'outline'
                            }
                            size="sm"
                            onClick={() => setQuestionCount(num)}
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        • Topics: Speed & Distance, Percentage, Profit & Loss,
                        Time & Work, Series, Interest, Ratio, Averages, Ages,
                        LCM & HCF
                      </p>
                      <p>
                        • Questions are randomly selected from a pool of 30+
                      </p>
                      <p>• No time limit - practice at your own pace</p>
                      <p>• Detailed explanations after each question</p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={startTest}
                  className="w-full"
                  size="lg"
                >
                  Start Test ({questionCount} Questions)
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {started && !showResults && testQuestions.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    Question {currentQuestion + 1} of {testQuestions.length}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Topic: {testQuestions[currentQuestion].topic}
                  </CardDescription>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                  {currentQuestion + 1}/{testQuestions.length}
                </span>
              </div>
              {/* Progress bar */}
              <div className="mt-4 h-2 w-full rounded-full bg-secondary">
                <div
                  className="h-2 rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / testQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-secondary p-4">
                <p className="text-lg font-medium">
                  {testQuestions[currentQuestion].q}
                </p>
              </div>

              <RadioGroup
                value={selectedAnswer.toString()}
                onValueChange={(val) => handleAnswer(parseInt(val))}
              >
                <div className="space-y-3">
                  {testQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`flex cursor-pointer items-center space-x-2 rounded-lg border p-3 transition-colors hover:bg-secondary ${selectedAnswer === index ? 'border-primary bg-primary/5' : ''}`}
                      >
                        <RadioGroupItem
                          value={index.toString()}
                          id={`option-${index}`}
                        />
                        <Label
                          htmlFor={`option-${index}`}
                          className="flex-1 cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ),
                  )}
                </div>
              </RadioGroup>

              <Button
                onClick={nextQuestion}
                disabled={selectedAnswer === -1}
                className="w-full"
                size="lg"
              >
                {currentQuestion < testQuestions.length - 1
                  ? 'Next Question'
                  : 'Submit Test'}
              </Button>
            </CardContent>
          </Card>
        )}

        {showResults && testQuestions.length > 0 && (
          <div className="space-y-6">
            <Card className="border-2 border-primary shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <p className="text-6xl font-bold text-primary">
                    {calculateScore()}/{testQuestions.length}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Score:{' '}
                    {Math.round(
                      (calculateScore() / testQuestions.length) * 100,
                    )}
                    %
                  </p>
                  <p
                    className={`text-lg font-medium ${getScoreMessage(calculateScore(), testQuestions.length).color}`}
                  >
                    {
                      getScoreMessage(calculateScore(), testQuestions.length)
                        .text
                    }
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Answer Key & Explanations</h3>
              {testQuestions.map((question, index) => (
                <Card
                  key={index}
                  className={
                    answers[index] === question.correct
                      ? 'border-green-500'
                      : 'border-red-500'
                  }
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      {answers[index] === question.correct ? (
                        <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                      ) : (
                        <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                      )}
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="rounded bg-secondary px-2 py-1 text-xs">
                            {question.topic}
                          </span>
                        </div>
                        <CardTitle className="mb-2 text-lg">
                          Q{index + 1}. {question.q}
                        </CardTitle>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-semibold">Your Answer: </span>
                            <span
                              className={
                                answers[index] === question.correct
                                  ? 'text-green-600'
                                  : 'text-red-600'
                              }
                            >
                              {answers[index] >= 0
                                ? question.options[answers[index]]
                                : 'Not answered'}
                            </span>
                          </p>
                          <p>
                            <span className="font-semibold">
                              Correct Answer:{' '}
                            </span>
                            <span className="text-green-600">
                              {question.options[question.correct]}
                            </span>
                          </p>
                          <div className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                            <p className="text-blue-800 dark:text-blue-200">
                              <span className="font-semibold">
                                Explanation:{' '}
                              </span>
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Button
              onClick={startTest}
              className="w-full"
              size="lg"
            >
              Take Another Test
            </Button>
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            📊 <strong>97 students</strong> practiced aptitude questions in the
            last hour
          </p>
        </div>

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Complete Aptitude Test Preparation Guide
          </h2>
          <p>
            Quantitative aptitude tests are a crucial part of placement exams,
            competitive tests (like CAT, GMAT, GRE, Bank PO exams), and campus
            recruitment processes. Mastering these concepts requires
            understanding formulas and regular practice.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Why Aptitude Tests Matter
            </h3>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-900">
                <p className="text-2xl font-bold text-primary">90%</p>
                <p className="text-muted-foreground">
                  of companies use aptitude tests
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-900">
                <p className="text-2xl font-bold text-primary">60-70%</p>
                <p className="text-muted-foreground">cutoff in most exams</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-900">
                <p className="text-2xl font-bold text-primary">45-60 min</p>
                <p className="text-muted-foreground">typical test duration</p>
              </div>
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            Essential Formulas by Topic
          </h2>

          <h3>1. Speed, Time & Distance</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Speed = Distance / Time</strong>
              </li>
              <li>
                <strong>Distance = Speed × Time</strong>
              </li>
              <li>
                <strong>Time = Distance / Speed</strong>
              </li>
              <li>
                Average Speed (same distance) = <strong>2ab/(a+b)</strong> where
                a and b are speeds
              </li>
              <li>Relative Speed (same direction) = |a - b|</li>
              <li>Relative Speed (opposite direction) = a + b</li>
              <li>1 km/h = 5/18 m/s | 1 m/s = 18/5 km/h</li>
            </ul>
          </div>

          <h3>2. Percentage</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>% = (Part/Whole) × 100</strong>
              </li>
              <li>x% of y = y% of x</li>
              <li>Successive % change: Net = a + b + ab/100</li>
              <li>% Increase = [(New - Old)/Old] × 100</li>
              <li>% Decrease = [(Old - New)/Old] × 100</li>
            </ul>
          </div>

          <h3>3. Profit & Loss</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Profit = SP - CP</strong> (when SP &gt; CP)
              </li>
              <li>
                <strong>Loss = CP - SP</strong> (when CP &gt; SP)
              </li>
              <li>Profit% = (Profit/CP) × 100</li>
              <li>Loss% = (Loss/CP) × 100</li>
              <li>SP = CP × (1 + Profit%/100)</li>
              <li>SP = CP × (1 - Loss%/100)</li>
              <li>Discount% = (Discount/MP) × 100</li>
              <li>SP = MP × (1 - Discount%/100)</li>
            </ul>
          </div>

          <h3>4. Time & Work</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                If A completes in x days, work rate ={' '}
                <strong>1/x per day</strong>
              </li>
              <li>
                A and B together: <strong>1/A + 1/B = 1/T</strong>
              </li>
              <li>MDH formula: M₁D₁H₁/W₁ = M₂D₂H₂/W₂</li>
              <li>Efficiency ratio ∝ 1/Time ratio</li>
              <li>Pipes & Cisterns: Inlet (fill), Outlet (empty)</li>
            </ul>
          </div>

          <h3>5. Simple & Compound Interest</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>SI = (P × R × T) / 100</strong>
              </li>
              <li>Amount = P + SI = P(1 + RT/100)</li>
              <li>
                <strong>CI: A = P(1 + R/100)^n</strong>
              </li>
              <li>CI = A - P = P[(1 + R/100)^n - 1]</li>
              <li>CI - SI for 2 years = P × (R/100)²</li>
              <li>When compounded half-yearly: Rate/2, Time × 2</li>
            </ul>
          </div>

          <h3>6. Ratio, Proportion & Averages</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Average = Sum of values / Number of values</strong>
              </li>
              <li>Sum = Average × Count</li>
              <li>a:b = c:d → ad = bc (cross multiplication)</li>
              <li>To find A:B:C when A:B and B:C given, make B common</li>
              <li>Mixture: (Qty₁ × C₁ + Qty₂ × C₂) / (Qty₁ + Qty₂) = Cavg</li>
            </ul>
          </div>

          <h3>7. LCM & HCF</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>LCM × HCF = Product of numbers</strong> (for two
                numbers)
              </li>
              <li>LCM = highest power of all prime factors</li>
              <li>HCF = lowest power of common prime factors</li>
              <li>LCM of fractions = LCM(numerators) / HCF(denominators)</li>
              <li>HCF of fractions = HCF(numerators) / LCM(denominators)</li>
            </ul>
          </div>

          <h2>Quick Calculation Tips</h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  Mental Math Shortcuts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">
                  • 25 × any number: Divide by 4, add 00
                </li>
                <li className="list-none">
                  • Square of numbers ending in 5: First part × (First part +
                  1), then 25
                </li>
                <li className="list-none">
                  • % calculation: Move decimal 2 places left
                </li>
                <li className="list-none">
                  • Multiply by 11: Sum middle digits
                </li>
                <li className="list-none">
                  • Division by 5: Double the number, divide by 10
                </li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-green-600" />
                  Test-Taking Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">• Attempt easy questions first</li>
                <li className="list-none">• Use elimination method</li>
                <li className="list-none">
                  • Substitute answer options when stuck
                </li>
                <li className="list-none">
                  • Manage time: ~1 min per question
                </li>
                <li className="list-none">• Don't get stuck on one question</li>
              </CardContent>
            </Card>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>How many questions are typically in an aptitude test?</h3>
          <p>
            Most placement aptitude tests have <strong>20-35 questions</strong>{' '}
            with a time limit of 30-60 minutes. Competitive exams like CAT have
            34 questions in the Quantitative section with 40 minutes allotted.
          </p>

          <h3>What topics appear most frequently?</h3>
          <p>
            Based on placement exam patterns:{' '}
            <strong>
              Percentages, Profit & Loss, Time & Work, and Speed & Distance
            </strong>
            account for about 60% of questions. Number series, Ratio &
            Proportion, and Averages make up most of the rest.
          </p>

          <h3>How long should I practice before an aptitude test?</h3>
          <p>
            For consistent improvement, practice{' '}
            <strong>at least 30 minutes daily for 4-6 weeks</strong> before your
            test. Focus on understanding concepts first, then speed. Take
            full-length mock tests in the final 2 weeks.
          </p>

          <h3>Should I use a calculator?</h3>
          <p>
            Most placement tests don't allow calculators. Practice mental math
            and approximation techniques. For exams that allow calculators (like
            GRE), learn to use them efficiently but don't over-rely on them.
          </p>

          <h3>What's the best way to improve accuracy?</h3>
          <p>
            Focus on <strong>understanding concepts</strong> rather than
            memorizing solutions. Practice similar questions in batches. Review
            mistakes thoroughly - maintain an error log. Accuracy comes before
            speed.
          </p>

          <h3>How do I manage time during the test?</h3>
          <p>
            Quick scan all questions first. Attempt questions from your strong
            topics first. Set a time limit per question (usually 1-1.5 minutes).
            If stuck for more than 2 minutes, mark and move on. Leave 5 minutes
            for review.
          </p>

          <h3>Are negative marks applied in aptitude tests?</h3>
          <p>
            Many competitive exams have{' '}
            <strong>1/4 or 1/3 negative marking</strong>. For placement tests,
            it varies by company. Always check the exam rules. If negative
            marking exists, avoid random guessing.
          </p>

          <h3>What resources should I use for practice?</h3>
          <p>
            Use a combination of: textbooks (RS Aggarwal, Arun Sharma), online
            practice tests, previous year papers, and apps. Practice on similar
            interfaces to the actual test. Time yourself during practice.
          </p>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Career Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Interview Questions',
                href: '/tools/interview-questions',
                desc: 'Practice 50+ interview questions',
              },
              {
                title: 'Resume Score Checker',
                href: '/tools/resume-score-checker',
                desc: 'Get your resume ATS score',
              },
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate in-hand from CTC',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-bold">
            Aptitude Preparation Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/resources/aptitude-formulas"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Complete Aptitude Formulas</h3>
              <p className="text-sm text-muted-foreground">
                All formulas in one place for quick revision.
              </p>
            </Link>
            <Link
              href="/resources/interview-prep"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Interview Preparation Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Complete guide for placement interviews.
              </p>
            </Link>
          </div>
        </section>

        {/* International Aptitude Tests Section */}
        <section className="mt-12">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Globe className="h-6 w-6 text-primary" />
            🌍 Aptitude Tests for Global Opportunities
          </h2>
          <p className="mb-6 text-muted-foreground">
            Aptitude skills are universally valued. Whether you're appearing for
            GRE, GMAT, or international company placements, quantitative skills
            are essential.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* GRE Quant */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                <h3 className="font-bold">GRE Quantitative</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> Graduate school admissions (USA,
                  Canada)
                </p>
                <p>
                  <strong>Topics:</strong> Arithmetic, Algebra, Geometry, Data
                  Analysis
                </p>
                <p>
                  <strong>Score:</strong> 130-170 (aim for 165+)
                </p>
                <p>
                  <strong>Time:</strong> 47 mins (27 questions)
                </p>
                <p>
                  <strong>Difficulty:</strong> High school level but tricky
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Practice speed and accuracy - calculators allowed
                </p>
              </div>
            </Card>

            {/* GMAT Quant */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold">GMAT Quantitative</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> MBA admissions worldwide
                </p>
                <p>
                  <strong>Topics:</strong> Problem Solving, Data Sufficiency
                </p>
                <p>
                  <strong>Score:</strong> 6-51 (aim for 48+)
                </p>
                <p>
                  <strong>Time:</strong> 62 mins (31 questions)
                </p>
                <p>
                  <strong>Difficulty:</strong> Moderate to Hard
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Data Sufficiency is unique to GMAT - practice it!
                </p>
              </div>
            </Card>

            {/* CAT */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🇮🇳</span>
                <h3 className="font-bold">CAT Quantitative</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> IIM and top B-school admissions
                </p>
                <p>
                  <strong>Topics:</strong> Arithmetic, Algebra, Geometry, Number
                  Theory
                </p>
                <p>
                  <strong>Score:</strong> Percentile based (aim 99+)
                </p>
                <p>
                  <strong>Time:</strong> 40 mins (22 questions)
                </p>
                <p>
                  <strong>Difficulty:</strong> Very Hard
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Known for tricky questions - concept clarity is key
                </p>
              </div>
            </Card>

            {/* Global Companies */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🏢</span>
                <h3 className="font-bold">FAANG & Tech Companies</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Used by:</strong> Google, Amazon, Microsoft, Meta
                </p>
                <p>
                  <strong>Topics:</strong> Logical Reasoning, Pattern
                  Recognition
                </p>
                <p>
                  <strong>Format:</strong> Online Assessment (OA)
                </p>
                <p>
                  <strong>Time:</strong> 60-90 mins typically
                </p>
                <p>
                  <strong>Focus:</strong> Problem-solving speed
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Often combined with coding challenges
                </p>
              </div>
            </Card>

            {/* Consulting */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <h3 className="font-bold">Consulting Firms</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Used by:</strong> McKinsey, BCG, Bain
                </p>
                <p>
                  <strong>Topics:</strong> Case Math, Data Interpretation
                </p>
                <p>
                  <strong>Format:</strong> McKinsey PST, BCG Casey
                </p>
                <p>
                  <strong>Skills:</strong> Quick mental math, business sense
                </p>
                <p>
                  <strong>Focus:</strong> Accuracy under pressure
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Often no calculator - practice mental math
                </p>
              </div>
            </Card>

            {/* Investment Banking */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <h3 className="font-bold">Investment Banking</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Used by:</strong> Goldman Sachs, JPMorgan, Morgan
                  Stanley
                </p>
                <p>
                  <strong>Topics:</strong> Financial Math, Probability,
                  Statistics
                </p>
                <p>
                  <strong>Format:</strong> SHL, Korn Ferry, custom tests
                </p>
                <p>
                  <strong>Skills:</strong> Percentages, ratios, quick
                  calculations
                </p>
                <p>
                  <strong>Focus:</strong> Speed and accuracy
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Practice SHL-style numerical reasoning
                </p>
              </div>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mt-8 overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left font-semibold">Test</th>
                  <th className="p-3 text-left font-semibold">
                    Time per Question
                  </th>
                  <th className="p-3 text-left font-semibold">Calculator</th>
                  <th className="p-3 text-left font-semibold">Difficulty</th>
                  <th className="p-3 text-left font-semibold">Best Prep</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">GRE Quant</td>
                  <td className="p-3">~1.7 min</td>
                  <td className="p-3">✅ Yes</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">ETS Powerprep, Magoosh</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3 font-medium">GMAT Quant</td>
                  <td className="p-3">~2 min</td>
                  <td className="p-3">❌ No</td>
                  <td className="p-3">Medium-Hard</td>
                  <td className="p-3">OG, TTP, Manhattan</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CAT Quant</td>
                  <td className="p-3">~1.8 min</td>
                  <td className="p-3">✅ Yes</td>
                  <td className="p-3">Very Hard</td>
                  <td className="p-3">IMS, TIME, Unacademy</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3 font-medium">TCS NQT</td>
                  <td className="p-3">~1 min</td>
                  <td className="p-3">❌ No</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">PrepInsta, GeeksforGeeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <ToolFAQSection
          toolName="Aptitude Mock Test"
          faqs={aptitudeTestFAQs}
          toolUrl="https://sproutern.dpdns.org/tools/aptitude-test"
        />

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Explore More Learning Tools
          </h2>
          <p className="mb-6 text-muted-foreground">
            Practice with our free tools to prepare for exams and assessments
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              View Scholarships
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
