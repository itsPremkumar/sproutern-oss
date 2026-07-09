'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  UserCheck,
  MessageSquare,
  Mic,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
} from 'lucide-react';

interface Question {
  id: string;
  category: 'Behavioral' | 'Technical' | 'Situational';
  question: string;
  context?: string;
  options: {
    text: string;
    score: number; // 0-10
    feedback: string;
    tone: 'Confident' | 'Defensive' | 'Passive' | 'Arrogant';
  }[];
}

const questions: Question[] = [
  {
    id: 'tell_me_about_yourself',
    category: 'Behavioral',
    question: 'Tell me about yourself.',
    options: [
      {
        text: 'I was born in a small town... [Recite entire life history]',
        score: 2,
        feedback:
          'Too long and irrelevant. Keep it professional and focused on your career journey.',
        tone: 'Passive',
      },
      {
        text: 'I am a [Role] with experience in [Skills]. I recently worked on [Project] where I accomplished [Result]. I am looking to specialize in [Field].',
        score: 10,
        feedback:
          'Perfect "Elevator Pitch" structure: Role + History + Achievement + Goal.',
        tone: 'Confident',
      },
      {
        text: 'I am the best coder you will ever meet. I know everything about Java.',
        score: 1,
        feedback:
          'Overconfidence can be seen as arrogance and lack of self-awareness.',
        tone: 'Arrogant',
      },
      {
        text: 'What do you want to know?',
        score: 3,
        feedback:
          'Risky. It puts the burden back on the interviewer. Better to have a prepared summary.',
        tone: 'Defensive',
      },
    ],
  },
  {
    id: 'weakness',
    category: 'Behavioral',
    question: 'What is your greatest weakness?',
    options: [
      {
        text: "I don't have any weaknesses.",
        score: 0,
        feedback:
          'This shows a lack of self-awareness. Everyone has areas to improve.',
        tone: 'Arrogant',
      },
      {
        text: 'I am a perfectionist and work too hard.',
        score: 4,
        feedback:
          'A common cliché. Interviewers see through this "humble brag".',
        tone: 'Defensive',
      },
      {
        text: 'I sometimes struggle with public speaking, so I joined a Toastmasters club to improve.',
        score: 10,
        feedback:
          'Excellent. You identified a real weakness and showed proactive steps to fix it.',
        tone: 'Confident',
      },
      {
        text: 'I am lazy sometimes.',
        score: 1,
        feedback: 'Honesty is good, but this is a red flag for work ethic.',
        tone: 'Passive',
      },
    ],
  },
  {
    id: 'conflict',
    category: 'Situational',
    question: 'Tell me about a time you had a conflict with a team member.',
    options: [
      {
        text: 'I never have conflicts. I get along with everyone.',
        score: 2,
        feedback:
          'Unrealistic. Shows you might avoid necessary difficult conversations.',
        tone: 'Passive',
      },
      {
        text: "My teammate wasn't pulling their weight, so I reported them to the manager.",
        score: 3,
        feedback:
          'Escalating immediately instead of talking to the person suggests poor conflict resolution skills.',
        tone: 'Defensive',
      },
      {
        text: 'We disagreed on an API design. I listened to their points, explained my concern about scalability, and we compromised on a hybrid approach.',
        score: 10,
        feedback:
          'Great STAR method answer: Situation, Task, Action (listening/explaining), Result (compromise).',
        tone: 'Confident',
      },
    ],
  },
  {
    id: 'salary',
    category: 'Behavioral',
    question: 'What are your salary expectations?',
    options: [
      {
        text: 'I want 1 Million dollars.',
        score: 0,
        feedback: 'Unprofessional unless clearly a joke, but still risky.',
        tone: 'Arrogant',
      },
      {
        text: 'Whatever you think is fair works for me.',
        score: 4,
        feedback: 'Leaves money on the table. Shows lack of market research.',
        tone: 'Passive',
      },
      {
        text: 'Based on my research of market rates for this role and my experience, I am looking for something in the range of X to Y.',
        score: 10,
        feedback: 'Professional, researched, and leaves room for negotiation.',
        tone: 'Confident',
      },
    ],
  },
];

interface GameState {
  phase: 'intro' | 'playing' | 'feedback' | 'result';
  questions: Question[];
  currentQuestionIdx: number;
  score: number;
  maxScore: number;
  selectedOptionIdx: number | null;
  streak: number;
  bestStreak: number;
}

export default function InterviewReadyClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'intro',
    questions: [],
    currentQuestionIdx: 0,
    score: 0,
    maxScore: 0,
    selectedOptionIdx: null,
    streak: 0,
    bestStreak: 0,
  });

  const startGame = useCallback(() => {
    // Randomize order
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setGameState({
      phase: 'playing',
      questions: shuffled,
      currentQuestionIdx: 0,
      score: 0,
      maxScore: shuffled.length * 10,
      selectedOptionIdx: null,
      streak: 0,
      bestStreak: 0,
    });
  }, []);

  const handleAnswer = (optionIdx: number) => {
    const question = gameState.questions[gameState.currentQuestionIdx];
    const option = question.options[optionIdx];
    const isGoodAnswer = option.score >= 7;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedOptionIdx: optionIdx,
      score: prev.score + option.score,
      streak: isGoodAnswer ? prev.streak + 1 : 0,
      bestStreak:
        isGoodAnswer && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextQuestion = () => {
    if (gameState.currentQuestionIdx >= gameState.questions.length - 1) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentQuestionIdx: prev.currentQuestionIdx + 1,
        selectedOptionIdx: null,
      }));
    }
  };

  if (gameState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Interview Simulator
          </h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Master the Interview</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Face realistic interview questions and choose the best response.
              Learn to structure your answers using the STAR method and avoid
              common pitfalls.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Behavioral & Situational Questions</li>
              <li>• Learn what recruiters actually look for</li>
              <li>• Improve your confidence</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Mic className="h-5 w-5" />
            Start Mock Interview
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.maxScore}
        correctAnswers={Math.round(gameState.score / 10)}
        incorrectAnswers={
          gameState.questions.length - Math.round(gameState.score / 10)
        }
        labelOverride={{ total: 'Max Points', score: 'Your Score' }}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'intro' }))
        }
      />
    );
  }

  const question = gameState.questions[gameState.currentQuestionIdx];
  const selectedOption =
    gameState.selectedOptionIdx !== null
      ? question.options[gameState.selectedOptionIdx]
      : null;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Question {gameState.currentQuestionIdx + 1} of{' '}
          {gameState.questions.length}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <UserCheck className="h-4 w-4" />
            Interviewer says:
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            "{question.question}"
          </h3>
          {question.context && (
            <p className="mt-2 italic text-muted-foreground">
              {question.context}
            </p>
          )}
        </div>

        {gameState.phase === 'playing' ? (
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full rounded-xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary/5 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/30 text-xs text-primary">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
            <div
              className={cn(
                'rounded-xl border p-4',
                selectedOption!.score >= 7
                  ? 'border-green-200 bg-green-50 dark:bg-green-900/20'
                  : 'border-orange-200 bg-orange-50 dark:bg-orange-900/20',
              )}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold">
                  {selectedOption!.score >= 7 ? (
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <ThumbsDown className="h-4 w-4 text-orange-600" />
                  )}
                  {selectedOption!.score} Points
                </div>
                <span className="text-xs font-medium uppercase tracking-wider opacity-70">
                  Tone: {selectedOption!.tone}
                </span>
              </div>
              <p className="font-medium">"{selectedOption!.text}"</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="mb-1 font-semibold text-blue-700 dark:text-blue-300">
                Coach Feedback
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {selectedOption!.feedback}
              </p>
            </div>

            <Button
              onClick={nextQuestion}
              className="w-full gap-2"
              size="lg"
            >
              Next Question <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
