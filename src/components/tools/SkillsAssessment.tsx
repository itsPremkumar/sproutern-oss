'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

type SkillCategory =
  | 'technical'
  | 'communication'
  | 'analytical'
  | 'leadership';

interface Question {
  id: number;
  category: SkillCategory;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface CategoryResult {
  category: SkillCategory;
  correct: number;
  total: number;
  percentage: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  recommendations: string[];
}

const questions: Question[] = [
  // Technical Skills
  {
    id: 1,
    category: 'technical',
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Advanced Program Integration',
      'Automated Processing Input',
      'Application Process Interaction',
    ],
    correctIndex: 0,
    explanation:
      'API stands for Application Programming Interface - a set of protocols for building software applications.',
  },
  {
    id: 2,
    category: 'technical',
    question: 'Which data structure uses LIFO (Last In, First Out)?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    correctIndex: 1,
    explanation:
      'Stack uses LIFO - the last element added is the first one removed, like a stack of plates.',
  },
  {
    id: 3,
    category: 'technical',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
    correctIndex: 2,
    explanation:
      'Binary search has O(log n) complexity as it divides the search space in half each iteration.',
  },
  {
    id: 4,
    category: 'technical',
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Logic',
      'System Query Language',
      'Standard Question Language',
    ],
    correctIndex: 0,
    explanation:
      'SQL stands for Structured Query Language, used for managing relational databases.',
  },
  {
    id: 5,
    category: 'technical',
    question: 'Which protocol is used for secure web browsing?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctIndex: 2,
    explanation:
      'HTTPS (HTTP Secure) encrypts data between browser and server for secure communication.',
  },
  // Communication Skills
  {
    id: 6,
    category: 'communication',
    question: 'What is the most important aspect of active listening?',
    options: [
      'Taking notes',
      'Maintaining eye contact',
      'Providing feedback and understanding',
      'Staying silent',
    ],
    correctIndex: 2,
    explanation:
      'Active listening involves providing feedback and demonstrating understanding, not just hearing words.',
  },
  {
    id: 7,
    category: 'communication',
    question: 'When giving feedback, which approach is most effective?',
    options: [
      'Focus only on negatives',
      'Be vague to avoid conflict',
      'Be specific and focus on behavior',
      'Delay feedback for weeks',
    ],
    correctIndex: 2,
    explanation:
      'Effective feedback is specific, timely, and focuses on observable behaviors rather than personality.',
  },
  {
    id: 8,
    category: 'communication',
    question: 'In a professional email, what should come first?',
    options: [
      'Detailed background',
      'Clear purpose/request',
      'Personal greeting',
      'Attachment reference',
    ],
    correctIndex: 1,
    explanation:
      'Professional emails should lead with the purpose or request, then provide supporting details.',
  },
  {
    id: 9,
    category: 'communication',
    question: "What is 'mirroring' in communication?",
    options: [
      "Copying someone's appearance",
      'Subtly matching body language and tone',
      'Repeating everything they say',
      'Looking in mirrors while talking',
    ],
    correctIndex: 1,
    explanation:
      "Mirroring is subtly matching another person's body language and tone to build rapport.",
  },
  {
    id: 10,
    category: 'communication',
    question:
      "When presenting, how should you handle questions you can't answer?",
    options: [
      'Make up an answer',
      'Ignore the question',
      'Acknowledge and offer to follow up',
      'Criticize the question',
    ],
    correctIndex: 2,
    explanation:
      'Honestly acknowledging uncertainty and offering to follow up builds credibility.',
  },
  // Analytical Skills
  {
    id: 11,
    category: 'analytical',
    question: 'If a task takes 2 people 6 days, how long for 3 people?',
    options: ['9 days', '4 days', '3 days', '2 days'],
    correctIndex: 1,
    explanation:
      'Total work = 2 × 6 = 12 person-days. With 3 people: 12 ÷ 3 = 4 days.',
  },
  {
    id: 12,
    category: 'analytical',
    question: 'What comes next: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '36'],
    correctIndex: 1,
    explanation:
      'Differences are 4, 6, 8, 10, so next difference is 12. 30 + 12 = 42.',
  },
  {
    id: 13,
    category: 'analytical',
    question:
      "A product's price increased by 20%, then decreased by 20%. Net change?",
    options: ['No change', '4% increase', '4% decrease', '2% decrease'],
    correctIndex: 2,
    explanation:
      '100 → 120 (after +20%) → 96 (after -20% of 120). Net: 4% decrease.',
  },
  {
    id: 14,
    category: 'analytical',
    question: 'Which is the best first step when solving a complex problem?',
    options: [
      'Jump to solutions',
      'Define the problem clearly',
      'Ask others for answers',
      'Ignore it initially',
    ],
    correctIndex: 1,
    explanation:
      'Clearly defining the problem is essential before attempting solutions.',
  },
  {
    id: 15,
    category: 'analytical',
    question: "In data analysis, what is a 'correlation'?",
    options: [
      'Proof of causation',
      'Statistical relationship between variables',
      'Random coincidence',
      'Guaranteed prediction',
    ],
    correctIndex: 1,
    explanation:
      "Correlation indicates a statistical relationship between variables but doesn't prove causation.",
  },
  // Leadership Skills
  {
    id: 16,
    category: 'leadership',
    question: 'What is the primary role of a leader in a team?',
    options: [
      'Do all the work',
      'Enable team success',
      'Avoid decision-making',
      'Focus only on results',
    ],
    correctIndex: 1,
    explanation:
      "Effective leaders focus on enabling their team's success, not doing everything themselves.",
  },
  {
    id: 17,
    category: 'leadership',
    question: 'How should a leader handle team conflicts?',
    options: [
      'Ignore them',
      'Take sides quickly',
      'Address constructively and facilitate resolution',
      'Punish everyone involved',
    ],
    correctIndex: 2,
    explanation:
      'Leaders should address conflicts constructively, understanding all perspectives and facilitating resolution.',
  },
  {
    id: 18,
    category: 'leadership',
    question: "What is 'servant leadership'?",
    options: [
      'Leaders serve themselves first',
      'Leaders prioritize team needs',
      'Avoiding leadership',
      'Delegating all decisions',
    ],
    correctIndex: 1,
    explanation:
      'Servant leadership prioritizes the needs of team members, helping them develop and perform.',
  },
  {
    id: 19,
    category: 'leadership',
    question: "When delegating tasks, what's most important?",
    options: [
      'Give vague instructions',
      "Match task to person's skills and provide support",
      'Never check progress',
      'Micromanage every step',
    ],
    correctIndex: 1,
    explanation:
      'Effective delegation matches tasks to skills and provides appropriate support without micromanaging.',
  },
  {
    id: 20,
    category: 'leadership',
    question: 'How should a leader respond to their own mistakes?',
    options: [
      'Hide them',
      'Blame others',
      'Acknowledge, learn, and improve',
      'Resign immediately',
    ],
    correctIndex: 2,
    explanation:
      'Good leaders acknowledge mistakes, take responsibility, learn from them, and model this behavior.',
  },
];

const categoryInfo: Record<
  SkillCategory,
  { name: string; color: string; icon: string }
> = {
  technical: { name: 'Technical Skills', color: 'text-blue-600', icon: '💻' },
  communication: { name: 'Communication', color: 'text-green-600', icon: '💬' },
  analytical: {
    name: 'Analytical Thinking',
    color: 'text-purple-600',
    icon: '🧠',
  },
  leadership: { name: 'Leadership', color: 'text-orange-600', icon: '👥' },
};

export function SkillsAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return; // Already answered
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  const calculateResults = (): CategoryResult[] => {
    const categories: SkillCategory[] = [
      'technical',
      'communication',
      'analytical',
      'leadership',
    ];

    return categories.map((category) => {
      const categoryQuestions = questions.filter(
        (q) => q.category === category,
      );
      let correct = 0;

      categoryQuestions.forEach((q) => {
        const answerIndex = answers[questions.indexOf(q)];
        if (answerIndex === q.correctIndex) correct++;
      });

      const total = categoryQuestions.length;
      const percentage = Math.round((correct / total) * 100);

      let level: CategoryResult['level'];
      let recommendations: string[];

      if (percentage >= 80) {
        level = 'Expert';
        recommendations = [
          'Consider mentoring others',
          'Take on advanced challenges',
          'Share knowledge through content',
        ];
      } else if (percentage >= 60) {
        level = 'Advanced';
        recommendations = [
          'Practice with real projects',
          'Seek feedback regularly',
          'Focus on edge cases',
        ];
      } else if (percentage >= 40) {
        level = 'Intermediate';
        recommendations = [
          'Build more foundational knowledge',
          'Take structured courses',
          'Practice daily',
        ];
      } else {
        level = 'Beginner';
        recommendations = [
          'Start with fundamentals',
          'Use beginner-friendly resources',
          'Learn actively, not passively',
        ];
      }

      return { category, correct, total, percentage, level, recommendations };
    });
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const results = calculateResults();
    const overallScore = Math.round(
      results.reduce((sum, r) => sum + r.percentage, 0) / results.length,
    );

    return (
      <div className="space-y-6">
        <Card className="text-center">
          <CardContent className="pb-8 pt-8">
            <Award className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-2 text-3xl font-bold">Assessment Complete!</h2>
            <p className="mb-2 text-5xl font-bold text-primary">
              {overallScore}%
            </p>
            <p className="text-muted-foreground">Overall Score</p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {results.map((result) => (
            <Card key={result.category}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span>{categoryInfo[result.category].icon}</span>
                    <span className={categoryInfo[result.category].color}>
                      {categoryInfo[result.category].name}
                    </span>
                  </span>
                  <span className="text-lg">{result.percentage}%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3 h-3 w-full rounded-full bg-muted">
                  <div
                    className={`h-3 rounded-full ${
                      result.percentage >= 80
                        ? 'bg-green-500'
                        : result.percentage >= 60
                          ? 'bg-blue-500'
                          : result.percentage >= 40
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                    }`}
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
                <p className="mb-2 font-semibold">Level: {result.level}</p>
                <p className="mb-2 text-sm text-muted-foreground">
                  {result.correct}/{result.total} correct
                </p>
                <div className="text-sm">
                  <p className="mb-1 font-medium">Recommendations:</p>
                  <ul className="list-inside list-disc text-muted-foreground">
                    {result.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={resetQuiz}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Take Assessment Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className={categoryInfo[question.category].color}>
            {categoryInfo[question.category].icon}{' '}
            {categoryInfo[question.category].name}
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctIndex;
            const showFeedback = showExplanation;

            let buttonClass =
              'w-full p-4 text-left border rounded-lg transition-all ';
            if (showFeedback) {
              if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50 dark:bg-green-950';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-50 dark:bg-red-950';
              } else {
                buttonClass += 'opacity-50';
              }
            } else if (isSelected) {
              buttonClass += 'border-primary bg-primary/10';
            } else {
              buttonClass += 'hover:border-primary hover:bg-muted';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && isCorrect && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </CardContent>
      </Card>

      {/* Explanation */}
      {showExplanation && (
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950">
          <CardContent className="pt-4">
            <p className="mb-2 font-medium">
              {selectedAnswer === question.correctIndex
                ? '✅ Correct!'
                : '❌ Incorrect'}
            </p>
            <p className="text-sm text-muted-foreground">
              {question.explanation}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Next Button */}
      {showExplanation && (
        <Button
          onClick={nextQuestion}
          className="w-full gap-2"
        >
          {currentQuestion < questions.length - 1 ? (
            <>
              Next Question
              <ChevronRight className="h-4 w-4" />
            </>
          ) : (
            <>
              View Results
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
