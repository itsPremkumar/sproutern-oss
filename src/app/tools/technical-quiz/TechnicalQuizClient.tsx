'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Brain,
  CheckCircle,
  XCircle,
  RefreshCw,
  ChevronRight,
  Trophy,
  Filter,
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subject: 'OS' | 'DBMS' | 'CN' | 'OOPs';
}

const allQuestions: Question[] = [
  // Operating Systems Questions
  {
    id: 1,
    question: 'Which scheduling algorithm may cause starvation?',
    options: ['Round Robin', 'FCFS', 'Shortest Job First', 'Both B and C'],
    correctAnswer: 2,
    explanation:
      'Shortest Job First (SJF) can cause starvation for long processes as shorter processes keep getting priority.',
    difficulty: 'Medium',
    subject: 'OS',
  },
  {
    id: 2,
    question: 'What is a deadlock?',
    options: [
      'A process in waiting state',
      'Circular wait among processes for resources',
      'A crashed system',
      'CPU overload',
    ],
    correctAnswer: 1,
    explanation:
      'Deadlock occurs when processes are stuck in circular wait, each holding resources the other needs.',
    difficulty: 'Easy',
    subject: 'OS',
  },
  {
    id: 3,
    question: 'Which of these is NOT a condition for deadlock?',
    options: [
      'Mutual Exclusion',
      'Hold and Wait',
      'Preemption',
      'Circular Wait',
    ],
    correctAnswer: 2,
    explanation:
      'The 4 conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Preemption (not No Preemption) is not a condition.',
    difficulty: 'Medium',
    subject: 'OS',
  },
  {
    id: 4,
    question: 'What is thrashing in OS?',
    options: [
      'Excessive paging causing low CPU utilization',
      'CPU running at 100%',
      'Memory overflow',
      'Process termination',
    ],
    correctAnswer: 0,
    explanation:
      'Thrashing occurs when the system spends more time paging than executing, leading to very low CPU utilization.',
    difficulty: 'Medium',
    subject: 'OS',
  },
  {
    id: 5,
    question:
      'Which memory allocation strategy suffers from external fragmentation?',
    options: ['Paging', 'Segmentation', 'Both', 'Neither'],
    correctAnswer: 1,
    explanation:
      'Segmentation suffers from external fragmentation as segments are of variable size. Paging uses fixed-size pages.',
    difficulty: 'Hard',
    subject: 'OS',
  },
  // DBMS Questions
  {
    id: 6,
    question: 'What does ACID stand for in database transactions?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Access, Control, Identity, Data',
      'Automatic, Controlled, Indexed, Durable',
      'None of the above',
    ],
    correctAnswer: 0,
    explanation:
      'ACID properties ensure reliable database transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (permanent changes).',
    difficulty: 'Easy',
    subject: 'DBMS',
  },
  {
    id: 7,
    question: 'Which normal form eliminates transitive dependency?',
    options: ['1NF', '2NF', '3NF', 'BCNF'],
    correctAnswer: 2,
    explanation:
      '3NF (Third Normal Form) eliminates transitive dependency where non-key attributes depend on other non-key attributes.',
    difficulty: 'Medium',
    subject: 'DBMS',
  },
  {
    id: 8,
    question: 'What is a foreign key?',
    options: [
      'A key from another country',
      'A key that references primary key of another table',
      'An encrypted key',
      'A unique identifier',
    ],
    correctAnswer: 1,
    explanation:
      'A foreign key is an attribute that creates a link between two tables by referencing the primary key of another table.',
    difficulty: 'Easy',
    subject: 'DBMS',
  },
  {
    id: 9,
    question: 'Which SQL clause is used to filter groups?',
    options: ['WHERE', 'HAVING', 'GROUP BY', 'ORDER BY'],
    correctAnswer: 1,
    explanation:
      'HAVING clause filters groups after GROUP BY, while WHERE filters rows before grouping.',
    difficulty: 'Easy',
    subject: 'DBMS',
  },
  {
    id: 10,
    question: 'What is a view in SQL?',
    options: [
      'A physical table',
      'A virtual table based on query result',
      'A backup of table',
      'An index',
    ],
    correctAnswer: 1,
    explanation:
      'A view is a virtual table that is the result of a stored query. It does not store data physically.',
    difficulty: 'Medium',
    subject: 'DBMS',
  },
  // Computer Networks Questions
  {
    id: 11,
    question: 'Which layer of OSI model is responsible for routing?',
    options: ['Physical', 'Data Link', 'Network', 'Transport'],
    correctAnswer: 2,
    explanation:
      'The Network layer (Layer 3) handles routing of packets between networks. Routers operate at this layer.',
    difficulty: 'Easy',
    subject: 'CN',
  },
  {
    id: 12,
    question: 'What is the default port for HTTP?',
    options: ['21', '22', '80', '443'],
    correctAnswer: 2,
    explanation:
      'HTTP uses port 80 by default. HTTPS uses 443, FTP uses 21, and SSH uses 22.',
    difficulty: 'Easy',
    subject: 'CN',
  },
  {
    id: 13,
    question: 'Which protocol is connection-oriented?',
    options: ['UDP', 'TCP', 'IP', 'ICMP'],
    correctAnswer: 1,
    explanation:
      'TCP (Transmission Control Protocol) is connection-oriented, ensuring reliable delivery. UDP is connectionless.',
    difficulty: 'Easy',
    subject: 'CN',
  },
  {
    id: 14,
    question: 'What does ARP do?',
    options: [
      'Maps domain names to IP',
      'Maps IP addresses to MAC addresses',
      'Routes packets',
      'Encrypts data',
    ],
    correctAnswer: 1,
    explanation:
      'ARP (Address Resolution Protocol) resolves IP addresses to MAC (hardware) addresses on a local network.',
    difficulty: 'Medium',
    subject: 'CN',
  },
  {
    id: 15,
    question: 'What is the maximum segment size in TCP?',
    options: [
      'Fixed at 1460 bytes',
      'Negotiated during handshake',
      'Always 64KB',
      'Depends on IP version only',
    ],
    correctAnswer: 1,
    explanation:
      'TCP MSS is negotiated during the 3-way handshake based on MTU. Commonly 1460 bytes for Ethernet.',
    difficulty: 'Hard',
    subject: 'CN',
  },
  // OOPs Questions
  {
    id: 16,
    question: 'What is encapsulation?',
    options: [
      'Hiding implementation details',
      'Inheriting from parent class',
      'Creating multiple forms',
      'Abstracting behavior',
    ],
    correctAnswer: 0,
    explanation:
      'Encapsulation is bundling data and methods that operate on that data, hiding internal implementation details.',
    difficulty: 'Easy',
    subject: 'OOPs',
  },
  {
    id: 17,
    question: 'Which keyword is used to prevent inheritance in Java?',
    options: ['static', 'final', 'abstract', 'private'],
    correctAnswer: 1,
    explanation:
      'The "final" keyword on a class prevents it from being inherited. Final methods cannot be overridden.',
    difficulty: 'Easy',
    subject: 'OOPs',
  },
  {
    id: 18,
    question: 'What is polymorphism?',
    options: [
      'Same name, different forms',
      'Single inheritance',
      'Data hiding',
      'Code reusability',
    ],
    correctAnswer: 0,
    explanation:
      'Polymorphism allows objects to take many forms. Same method name can behave differently based on context (overloading/overriding).',
    difficulty: 'Easy',
    subject: 'OOPs',
  },
  {
    id: 19,
    question: 'What is the difference between abstract class and interface?',
    options: [
      'Abstract class can have constructor, interface cannot',
      'They are exactly the same',
      'Interface can have method implementations',
      'Abstract class cannot have fields',
    ],
    correctAnswer: 0,
    explanation:
      'Abstract classes can have constructors, fields, and method implementations. Interfaces (pre-Java 8) only had method signatures.',
    difficulty: 'Medium',
    subject: 'OOPs',
  },
  {
    id: 20,
    question: 'What is the diamond problem?',
    options: [
      'Memory leak issue',
      'Ambiguity in multiple inheritance',
      'Compilation error',
      'Runtime exception',
    ],
    correctAnswer: 1,
    explanation:
      'The diamond problem occurs in multiple inheritance when a class inherits from two classes that have a common ancestor, causing ambiguity.',
    difficulty: 'Hard',
    subject: 'OOPs',
  },
];

export default function TechnicalQuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [selectedSubject, setSelectedSubject] = useState<
    'All' | 'OS' | 'DBMS' | 'CN' | 'OOPs'
  >('All');
  const [quizStarted, setQuizStarted] = useState(false);

  const questions =
    selectedSubject === 'All'
      ? allQuestions
      : allQuestions.filter((q) => q.subject === selectedSubject);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setAnswers({ ...answers, [currentQuestion]: index });

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers({});
    setQuizStarted(false);
  };

  const startQuiz = (subject: 'All' | 'OS' | 'DBMS' | 'CN' | 'OOPs') => {
    setSelectedSubject(subject);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
  };

  if (!quizStarted) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card className="p-6">
          <CardHeader className="text-center">
            <CardTitle className="mb-4 text-2xl">Choose a Subject</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="h-16 w-full text-lg"
              variant="outline"
              onClick={() => startQuiz('All')}
            >
              <Brain className="mr-2 h-5 w-5" />
              All Subjects (20 Questions)
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="h-14 bg-blue-600 text-base hover:bg-blue-700"
                onClick={() => startQuiz('OS')}
              >
                Operating Systems
              </Button>
              <Button
                className="h-14 bg-green-600 text-base hover:bg-green-700"
                onClick={() => startQuiz('DBMS')}
              >
                DBMS
              </Button>
              <Button
                className="h-14 bg-orange-600 text-base hover:bg-orange-700"
                onClick={() => startQuiz('CN')}
              >
                Computer Networks
              </Button>
              <Button
                className="h-14 bg-purple-600 text-base hover:bg-purple-700"
                onClick={() => startQuiz('OOPs')}
              >
                OOPs Concepts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="py-12 text-center">
        <CardContent>
          <div className="mb-6">
            <Trophy className="mx-auto mb-4 h-20 w-20 text-yellow-500" />
            <h2 className="mb-2 text-3xl font-bold">Quiz Completed!</h2>
            <Badge className="mb-4">
              {selectedSubject === 'All' ? 'All Subjects' : selectedSubject}
            </Badge>
            <p className="text-muted-foreground">You scored</p>
            <div className="my-4 text-5xl font-bold text-primary">
              {score} / {questions.length}
            </div>
            <p className="mb-2 text-2xl font-semibold">{percentage}%</p>
            <p className="mb-6 text-lg">
              {percentage >= 80
                ? "Excellent! You're ready for interviews."
                : percentage >= 50
                  ? 'Good job! Keep practicing.'
                  : 'Keep learning! Review the basics.'}
            </p>
          </div>
          <Button
            onClick={restartQuiz}
            size="lg"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;

  const subjectColors: Record<string, string> = {
    OS: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    DBMS: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    CN: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    OOPs: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-sm text-muted-foreground">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <Progress
          value={progress}
          className="h-2"
        />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <Badge
              variant="outline"
              className={
                question.difficulty === 'Easy'
                  ? 'border-green-200 bg-green-100 text-green-800'
                  : question.difficulty === 'Medium'
                    ? 'border-yellow-200 bg-yellow-100 text-yellow-800'
                    : 'border-red-200 bg-red-100 text-red-800'
              }
            >
              {question.difficulty}
            </Badge>
            <Badge className={subjectColors[question.subject]}>
              {question.subject}
            </Badge>
          </div>
          <CardTitle className="mt-4 text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            let className =
              'w-full justify-start text-left p-4 h-auto text-base hover:bg-muted';

            if (selectedOption !== null) {
              if (index === question.correctAnswer) {
                className +=
                  ' bg-green-100 border-green-500 text-green-900 hover:bg-green-100';
              } else if (index === selectedOption) {
                className +=
                  ' bg-red-100 border-red-500 text-red-900 hover:bg-red-100';
              } else {
                className += ' opacity-50';
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={className}
                onClick={() => handleOptionSelect(index)}
                disabled={selectedOption !== null}
              >
                <div className="flex w-full items-center">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold text-muted-foreground">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                  {selectedOption !== null &&
                    index === question.correctAnswer && (
                      <CheckCircle className="ml-auto h-5 w-5 text-green-600" />
                    )}
                  {selectedOption !== null &&
                    index === selectedOption &&
                    index !== question.correctAnswer && (
                      <XCircle className="ml-auto h-5 w-5 text-red-600" />
                    )}
                </div>
              </Button>
            );
          })}
        </CardContent>

        {showExplanation && (
          <CardFooter className="flex-col items-start border-t bg-muted/30 p-6">
            <div className="mb-4">
              <h4 className="mb-1 flex items-center gap-2 font-semibold">
                <Brain className="h-4 w-4 text-primary" /> Explanation
              </h4>
              <p className="text-sm text-muted-foreground">
                {question.explanation}
              </p>
            </div>
            <Button
              onClick={nextQuestion}
              className="w-full"
            >
              {currentQuestion === questions.length - 1
                ? 'Finish Quiz'
                : 'Next Question'}{' '}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
