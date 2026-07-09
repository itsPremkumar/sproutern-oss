'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Play,
  RotateCcw,
  Trophy,
  CheckCircle,
  XCircle,
  ChevronRight,
  Bug,
} from 'lucide-react';
import { motion } from 'framer-motion';

const CHALLENGES = [
  {
    title: 'Array Index Bug',
    code: `function getLastElement(arr) {
  return arr[arr.length];
}`,
    question: "What's wrong with this code?",
    options: [
      'Should be arr.length - 1',
      'No error',
      'Should use arr.pop()',
      'Missing return type',
    ],
    answer: 'Should be arr.length - 1',
    explanation:
      'Arrays are 0-indexed. arr.length returns the count, but the last index is length - 1.',
  },
  {
    title: 'Async/Await Issue',
    code: `async function fetchData() {
  const data = fetch('/api/data');
  return data.json();
}`,
    question: 'Find the bug:',
    options: [
      "fetch doesn't return JSON",
      'Missing await keyword',
      'Should use .then()',
      'No error',
    ],
    answer: 'Missing await keyword',
    explanation:
      "fetch() returns a Promise. Without 'await', data is a Promise, not the response. Should be: await fetch()",
  },
  {
    title: 'Comparison Error',
    code: `function isEqual(a, b) {
  if (a == b) {
    return true;
  }
}`,
    question: "What's the best practice issue?",
    options: [
      'Should use === for strict equality',
      'Missing else clause',
      'Function is fine',
      'Should return false explicitly',
    ],
    answer: 'Should use === for strict equality',
    explanation:
      "== performs type coercion. Use === for strict comparison to avoid bugs like '1' == 1 returning true.",
  },
  {
    title: 'Loop Variable Scope',
    code: `for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    question: 'What will be printed?',
    options: [
      '0, 1, 2, 3, 4',
      '5, 5, 5, 5, 5',
      '4, 4, 4, 4, 4',
      'undefined 5 times',
    ],
    answer: '5, 5, 5, 5, 5',
    explanation:
      "'var' is function-scoped. By the time setTimeout runs, the loop has finished and i is 5. Use 'let' instead.",
  },
  {
    title: 'Mutation Problem',
    code: `const user = { name: 'John' };
user.name = 'Jane';
console.log(user.name);`,
    question: 'Is there an error?',
    options: [
      "Yes, can't modify const",
      'No, this is valid',
      'user should be let',
      'Should use Object.freeze()',
    ],
    answer: 'No, this is valid',
    explanation:
      'const prevents reassignment, not mutation. You can modify properties of a const object. Only user = {} would fail.',
  },
  {
    title: 'SQL Injection Risk',
    code: `const query = "SELECT * FROM users WHERE id = " + userId;
db.execute(query);`,
    question: "What's the security issue?",
    options: [
      'No issue',
      'SQL Injection vulnerability',
      'Missing WHERE clause',
      'Should use JOIN',
    ],
    answer: 'SQL Injection vulnerability',
    explanation:
      'String concatenation allows attackers to inject malicious SQL. Use parameterized queries instead.',
  },
  {
    title: 'Memory Leak',
    code: `useEffect(() => {
  const interval = setInterval(fetchData, 1000);
}, []);`,
    question: "What's missing?",
    options: [
      'clearInterval in cleanup',
      "Nothing, it's fine",
      'Should use setTimeout',
      'Missing dependency',
    ],
    answer: 'clearInterval in cleanup',
    explanation:
      'Without cleanup, the interval keeps running even after unmount. Return a cleanup function: return () => clearInterval(interval)',
  },
  {
    title: 'Floating Point',
    code: `if (0.1 + 0.2 === 0.3) {
  console.log('Equal');
}`,
    question: "Will 'Equal' be printed?",
    options: ['Yes', 'No', 'Depends on browser', 'Syntax error'],
    answer: 'No',
    explanation:
      'Due to floating-point precision, 0.1 + 0.2 = 0.30000000000000004, not exactly 0.3. Compare with tolerance instead.',
  },
];

export default function CodeReviewClient() {
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
    if (option === CHALLENGES[currentQ].answer) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ >= CHALLENGES.length - 1) {
      setGameState('end');
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const current = CHALLENGES[currentQ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Code Review Challenge</h2>
        <p className="text-muted-foreground">
          Spot bugs and bad practices in code snippets.
        </p>
      </div>

      {gameState === 'start' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <Bug className="mx-auto mb-6 h-20 w-20 text-red-500 opacity-50" />
            <h3 className="mb-4 text-2xl font-bold">Ready to Review Code?</h3>
            <p className="mb-8 text-muted-foreground">
              {CHALLENGES.length} code snippets with hidden issues.
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
          <div className="flex items-center justify-between bg-red-50 p-4 dark:bg-red-950">
            <Badge variant="outline">{current.title}</Badge>
            <div className="font-bold text-primary">
              Score: {score}/{CHALLENGES.length}
            </div>
          </div>
          <CardContent className="p-6">
            <pre className="mb-6 overflow-x-auto rounded-lg bg-slate-900 p-6 font-mono text-sm text-slate-100">
              {current.code}
            </pre>

            <p className="mb-4 font-medium">{current.question}</p>

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
                  className="mt-4 rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-900/30"
                >
                  <strong>Explanation:</strong> {current.explanation}
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
            <h3 className="mb-2 text-3xl font-bold">Review Complete!</h3>
            <p className="mb-8 text-xl">
              Score:{' '}
              <span className="font-bold text-primary">
                {score}/{CHALLENGES.length}
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
