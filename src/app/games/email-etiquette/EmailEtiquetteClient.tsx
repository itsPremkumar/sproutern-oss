'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Edit3,
} from 'lucide-react';

interface EmailScenario {
  id: string;
  context: string;
  subject: string;
  draft: string; // The draft with mistakes
  mistakes: string[]; // List of mistake IDs to find
  corrections: {
    mistakeId: string;
    originalText: string;
    correctedText: string;
    explanation: string;
  }[];
}

const scenarios: EmailScenario[] = [
  {
    id: 'leave_req',
    context: 'You need to ask your manager for sick leave.',
    subject: 'Sick Leave',
    draft: "Hey Boss,\n\nI won't be coming in today. Im sick.\n\nCya,\nPrem",
    mistakes: ['greeting', 'detail', 'signoff'],
    corrections: [
      {
        mistakeId: 'greeting',
        originalText: 'Hey Boss,',
        correctedText: 'Hi [Manager Name],',
        explanation: "'Hey Boss' is too casual. Use names.",
      },
      {
        mistakeId: 'detail',
        originalText: 'Im sick.',
        correctedText:
          "I'm not feeling well and will be taking a sick day. I am available on Slack for emergencies.",
        explanation: 'Provide context and availability status.',
      },
      {
        mistakeId: 'signoff',
        originalText: 'Cya,',
        correctedText: 'Best regards,',
        explanation: "'Cya' is unprofessional for formal leave requests.",
      },
    ],
  },
  {
    id: 'client_delay',
    context: 'You need to tell a client the project will be late.',
    subject: 'Project Update',
    draft:
      "Hi Client,\n\nWe missed the deadline. It was the design team's fault. We will send it whenever its done.\n\nThanks.",
    mistakes: ['blame', 'timeline', 'tone'],
    corrections: [
      {
        mistakeId: 'blame',
        originalText: "It was the design team's fault.",
        correctedText: 'We encountered some unexpected delays.',
        explanation:
          'Never blame internal teams to a client. Take collective responsibility.',
      },
      {
        mistakeId: 'timeline',
        originalText: 'We will send it whenever its done.',
        correctedText: 'We expect to deliver by Tuesday next week.',
        explanation:
          'Always provide a new estimated timeline, not vague promises.',
      },
      {
        mistakeId: 'tone',
        originalText: 'We missed the deadline.',
        correctedText: "I'm writing to update you on the project status.",
        explanation:
          "Start with a professional opening, don't just blunt force bad news.",
      },
    ],
  },
];

interface GameState {
  phase: 'intro' | 'playing' | 'result';
  currentScenarioIdx: number;
  score: number;
  foundMistakes: string[]; // List of mistake IDs found by user
  streak: number;
}

// Simplified version: Present Multiple Choice on "Which is the better email?" due to complexity of highlighting text in textareas for a simple game.
// Let's Pivot: "Select the Professional Response" format is safer and more robust for now.

interface MCEmailScenario {
  id: string;
  context: string;
  options: {
    subject: string;
    body: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

const mcScenarios: MCEmailScenario[] = [
  {
    id: 'intro_email',
    context: 'You are introducing yourself to a potential mentor via email.',
    options: [
      {
        subject: 'Mentorship',
        body: 'Hi,\n\nI want you to be my mentor. I saw your profile and it looks cool. Let me know when you are free.',
        isCorrect: false,
        feedback:
          'Too demanding and vague. It lacks value proposition or specific ask.',
      },
      {
        subject: 'Inquiry regarding mentorship opportunity',
        body: "Dear [Name],\n\nI've followed your work on [Topic] for a while and found your recent article on [X] very inspiring. I'm currently working on [Y] and would appreciate 15 mins of your time to ask about [Specific Question].\n\nBest,\n[My Name]",
        isCorrect: true,
        feedback:
          'Perfect. It shows research, is specific (`recent article`), and has a clear, low-friction ask (`15 mins`).',
      },
    ],
  },
  {
    id: 'cold_email',
    context: 'Sending a resume to a recruiter for a job posting.',
    options: [
      {
        subject: 'Application for Software Engineer Role - [My Name]',
        body: 'Hi [Recruiter],\n\nPlease find attached my resume for the Software Engineer position. I believe my background in React and Node.js aligns well with what your team is building. I look forward to hearing from you.\n\nBest,\n[My Name]',
        isCorrect: true,
        feedback:
          'Clear subject line, professional greeting, and concise body text highlighting relevance.',
      },
      {
        subject: 'Resume',
        body: 'Here is my resume. Hire me pls.',
        isCorrect: false,
        feedback:
          "Unprofessional subject, no context in body, and poor grammar ('pls').",
      },
    ],
  },
  {
    id: 'meeting_conflict',
    context:
      'You have a dentist appointment and need to reschedule a team meeting.',
    options: [
      {
        subject: 'Reschedule Meeting',
        body: "I can't make it. Move it to tomorrow.",
        isCorrect: false,
        feedback:
          'Too blunt/rude. Does not offer specific times or apologize for inconvenience.',
      },
      {
        subject: 'Rescheduling: Team Sync',
        body: 'Hi Team,\n\nApologies, but I have a conflict during our scheduled time today. Would it be possible to move the sync to tomorrow at 10 AM or 2 PM? Let me know what works.\n\nThanks,\n[My Name]',
        isCorrect: true,
        feedback:
          'Polite, provides a reason (briefly), and offers specific alternative slots to reduce back-and-forth.',
      },
    ],
  },
  {
    id: 'salary_negotiation',
    context: 'You received an offer but the salary is lower than expected.',
    options: [
      {
        subject: 'Offer Discussion',
        body: 'Thank you for the offer. I am very excited about the role. However, based on my experience and market research, I was targeting a base salary of [X]. Is there flexibility to get closer to this number?',
        isCorrect: true,
        feedback:
          "Gracious, expresses excitement first, then relies on data ('market research') to justify the ask.",
      },
      {
        subject: 'Money',
        body: 'The offer is too low. I need more money to accept.',
        isCorrect: false,
        feedback:
          'Ultimatum style. Very likely to have the offer rescinded or start off on the wrong foot.',
      },
    ],
  },
];

export default function EmailEtiquetteClient() {
  const [gameState, setGameState] = useState<{
    phase: 'intro' | 'playing' | 'result';
    idx: number;
    score: number;
    selectedIdx: number | null;
    feedback: string | null;
  }>({
    phase: 'intro',
    idx: 0,
    score: 0,
    selectedIdx: null,
    feedback: null,
  });

  const startGame = useCallback(() => {
    setGameState({
      phase: 'playing',
      idx: 0,
      score: 0,
      selectedIdx: null,
      feedback: null,
    });
  }, []);

  const handleAnswer = (optionIdx: number) => {
    const scenario = mcScenarios[gameState.idx];
    const isCorrect = scenario.options[optionIdx].isCorrect;

    setGameState((prev) => ({
      ...prev,
      selectedIdx: optionIdx,
      score: isCorrect ? prev.score + 10 : prev.score,
      feedback: scenario.options[optionIdx].feedback,
    }));
  };

  const next = () => {
    if (gameState.idx >= mcScenarios.length - 1) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      setGameState((prev) => ({
        ...prev,
        idx: prev.idx + 1,
        selectedIdx: null,
        feedback: null,
      }));
    }
  };

  if (gameState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Email Etiquette Pro
          </h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Write Like a Pro</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              First impressions these days happen in the Inbox. Choose the most
              professional email drafts for various scenarios to master
              corporate communication.
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Cold Emails
              </div>
              <div className="flex items-center gap-2">
                <Edit3 className="h-4 w-4" /> Negotiations
              </div>
            </div>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Send className="h-5 w-5" />
            Start Writing
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={mcScenarios.length * 10}
        correctAnswers={gameState.score / 10}
        incorrectAnswers={mcScenarios.length - gameState.score / 10}
        streak={0}
        bestStreak={0}
        labelOverride={{ total: 'Max Points', score: 'Your Score' }}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'intro' }))
        }
      />
    );
  }

  const scenario = mcScenarios[gameState.idx];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Scenario {gameState.idx + 1} of {mcScenarios.length}
        </span>
        <span className="font-bold">{gameState.score} Pts</span>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h3 className="mb-6 text-lg font-medium">{scenario.context}</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {scenario.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => gameState.selectedIdx === null && handleAnswer(i)}
              className={cn(
                'group cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-md',
                gameState.selectedIdx === null ? 'hover:border-primary/50' : '',
                gameState.selectedIdx === i
                  ? opt.isCorrect
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-muted',
              )}
            >
              <div className="mb-2 border-b pb-2 text-sm font-semibold text-muted-foreground">
                Subject: <span className="text-foreground">{opt.subject}</span>
              </div>
              <p className="whitespace-pre-line text-sm leading-relaxed">
                {opt.body}
              </p>

              {gameState.selectedIdx === i && (
                <div className="mt-4 flex items-center gap-2 text-sm font-bold">
                  {opt.isCorrect ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  {opt.isCorrect ? 'Great Choice!' : 'Needs Improvement'}
                </div>
              )}
            </div>
          ))}
        </div>

        {gameState.selectedIdx !== null && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
            <div className="mb-6 rounded-xl bg-blue-50 p-4 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100">
              <strong>Feedback:</strong> {gameState.feedback}
            </div>
            <div className="text-center">
              <Button
                onClick={next}
                size="lg"
                className="gap-2"
              >
                Next Scenario <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
