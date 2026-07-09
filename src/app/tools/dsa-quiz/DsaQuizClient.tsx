'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
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
  Code,
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
}

const questions: Question[] = [
  {
    id: 1,
    question:
      'What is the time complexity of searching in a balanced Binary Search Tree (BST)?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    correctAnswer: 1,
    explanation:
      'In a balanced BST, the height is log(n). Since search operation traverses from root to leaf, it takes O(height) which is O(log n).',
    difficulty: 'Easy',
    topic: 'Trees',
  },
  {
    id: 2,
    question:
      'Which data structure is best suited for implementing a LIFO (Last In First Out) system?',
    options: ['Queue', 'Stack', 'Linked List', 'Array'],
    correctAnswer: 1,
    explanation:
      'A Stack follows the LIFO principle where the last element added is the first one to be removed.',
    difficulty: 'Easy',
    topic: 'Stacks',
  },
  {
    id: 3,
    question: 'What is the worst-case time complexity of QuickSort?',
    options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
    correctAnswer: 1,
    explanation:
      'QuickSort has a worst-case time complexity of O(n²) when the pivot is the smallest or largest element (e.g., sorted array). Average case is O(n log n).',
    difficulty: 'Medium',
    topic: 'Sorting',
  },
  {
    id: 4,
    question: 'Which of the following is NOT a linear data structure?',
    options: ['Array', 'Linked List', 'Queue', 'Tree'],
    correctAnswer: 3,
    explanation:
      'Trees are hierarchical data structures, unlike Arrays, Linked Lists, and Queues which are linear.',
    difficulty: 'Easy',
    topic: 'Data Structures',
  },
  {
    id: 5,
    question:
      'In a Hash Table, what happens when two keys hash to the same index?',
    options: ['Overflow', 'Collision', 'Deadlock', 'Segmentation Fault'],
    correctAnswer: 1,
    explanation:
      'When two different keys produce the same hash value, it is called a Collision. It is handled using chaining or open addressing.',
    difficulty: 'Medium',
    topic: 'Hashing',
  },
  {
    id: 6,
    question: 'What is the space complexity of Merge Sort?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    correctAnswer: 1,
    explanation:
      'Merge Sort requires O(n) auxiliary space for the temporary arrays used during the merge process.',
    difficulty: 'Medium',
    topic: 'Sorting',
  },
  {
    id: 7,
    question:
      'Which algorithm is used to find the shortest path in a weighted graph with non-negative weights?',
    options: ['BFS', 'DFS', "Dijkstra's Algorithm", "Kruskal's Algorithm"],
    correctAnswer: 2,
    explanation:
      "Dijkstra's Algorithm is used for finding the shortest paths between nodes in a graph with non-negative edge weights.",
    difficulty: 'Medium',
    topic: 'Graphs',
  },
  {
    id: 8,
    question:
      'What is the time complexity to access an element by index in an Array?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 0,
    explanation:
      'Arrays store elements in contiguous memory locations, allowing direct access using the index in O(1) time.',
    difficulty: 'Easy',
    topic: 'Arrays',
  },
  {
    id: 9,
    question: 'Which traversal of a BST yields the values in sorted order?',
    options: ['Pre-order', 'Post-order', 'In-order', 'Level-order'],
    correctAnswer: 2,
    explanation:
      'In-order traversal (Left-Root-Right) of a Binary Search Tree visits nodes in ascending sorted order.',
    difficulty: 'Medium',
    topic: 'Trees',
  },
  {
    id: 10,
    question: 'What is the primary advantage of a Linked List over an Array?',
    options: [
      'Faster access time',
      'Dynamic size',
      'Less memory usage',
      'Cache locality',
    ],
    correctAnswer: 1,
    explanation:
      'Linked Lists have dynamic size, meaning memory can be allocated or deallocated at runtime, unlike arrays which have fixed size.',
    difficulty: 'Easy',
    topic: 'Linked Lists',
  },
];

export default function DsaQuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
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
  };

  if (quizCompleted) {
    return (
      <Card className="py-12 text-center">
        <CardContent>
          <div className="mb-6">
            <Trophy className="mx-auto mb-4 h-20 w-20 text-yellow-500" />
            <h2 className="mb-2 text-3xl font-bold">Quiz Completed!</h2>
            <p className="text-muted-foreground">You scored</p>
            <div className="my-4 text-5xl font-bold text-primary">
              {score} / {questions.length}
            </div>
            <p className="mb-6 text-lg">
              {score >= 8
                ? "Excellent! You're ready for interviews."
                : score >= 5
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
            <Badge variant="secondary">{question.topic}</Badge>
          </div>
          <CardTitle className="mt-4 text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            let variant = 'outline';
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
