'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Play,
  RotateCcw,
  Trophy,
  CheckCircle,
  XCircle,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const EMAILS = [
  {
    subject: 'Meeting Tomorrow',
    body: 'Hey! Can we meet tmrw? Got some stuff to discuss. Let me know ASAP!!',
    question: "What's wrong with this email to your manager?",
    options: [
      'Too casual for professional setting',
      'Too formal',
      'Perfect',
      'Too long',
    ],
    answer: 'Too casual for professional setting',
    explanation:
      "Abbreviations (tmrw, ASAP), exclamation marks, and 'Hey' are too casual for a manager. Use 'Dear/Hi [Name]' and write formally.",
  },
  {
    subject: 'URGENT: Need Response NOW',
    body: "I've been waiting for 3 days for your response. This is unacceptable. I need the report by EOD or I will escalate this matter.",
    question: "What's the issue with this email?",
    options: [
      'Too aggressive/threatening',
      'Too polite',
      'Perfect follow-up',
      'Too short',
    ],
    answer: 'Too aggressive/threatening',
    explanation:
      "Phrases like 'unacceptable' and 'escalate' come across as threatening. A better approach: 'I wanted to follow up as I haven't received a response yet. Could you please...'",
  },
  {
    subject: 'Application for Software Developer Position',
    body: 'Dear Hiring Manager,\n\nI am writing to express my interest in the Software Developer position at your esteemed organization. I have attached my resume for your kind perusal.\n\nI look forward to hearing from you.\n\nRespectfully,\nJohn',
    question: 'How is this email?',
    options: ['Too formal/old-fashioned', 'Perfect', 'Too casual', 'Too short'],
    answer: 'Too formal/old-fashioned',
    explanation:
      "Phrases like 'esteemed organization' and 'kind perusal' are outdated. Modern professional emails are formal but conversational.",
  },
  {
    subject: 'Thanks for the meeting!',
    body: "Hi Sarah,\n\nThank you for taking the time to meet with me today. I really enjoyed learning about the team's projects. I'm excited about the opportunity and look forward to the next steps.\n\nBest regards,\nAlex",
    question: 'Rate this follow-up email:',
    options: [
      'Perfect professional tone',
      'Too casual',
      'Too formal',
      'Missing details',
    ],
    answer: 'Perfect professional tone',
    explanation:
      'This is a well-balanced professional email: friendly yet formal, specific, and ends with a clear call to action.',
  },
  {
    subject: 'Need help plz',
    body: 'can u help me with the ppt? its due 2day n i havent started lol',
    question: "What's wrong with this email to a colleague?",
    options: [
      'Uses text speak/abbreviations',
      'Too formal',
      'Perfect for quick request',
      'Too long',
    ],
    answer: 'Uses text speak/abbreviations',
    explanation:
      'Text speak (u, plz, n, lol) is unprofessional even in casual workplace communication. Always write complete words.',
  },
  {
    subject: 'Re: Project Update',
    body: 'As per my last email, I had clearly mentioned the deadline. Please refer to the attachment again.',
    question: "What's problematic about this email?",
    options: [
      'Passive-aggressive tone',
      'Too short',
      'Too formal',
      'Perfect reminder',
    ],
    answer: 'Passive-aggressive tone',
    explanation:
      "'As per my last email' is often perceived as passive-aggressive. Instead: 'I wanted to follow up on my previous email regarding...'",
  },
  {
    subject: 'Question about the Assignment',
    body: 'Professor,\n\nI have a doubt regarding question 5 of the assignment. Can you please clarify?\n\nThanks',
    question: 'What could be improved?',
    options: [
      'Should specify the doubt clearly',
      'Too formal for a professor',
      'Perfect email',
      'Too short greeting',
    ],
    answer: 'Should specify the doubt clearly',
    explanation:
      "The email lacks specifics. What exactly is the confusion? Include: 'I'm unsure whether we need to use method A or B for...'",
  },
  {
    subject: '(no subject)',
    body: 'Attached',
    question: 'Rate this email sending a report:',
    options: [
      'Extremely unprofessional',
      'Efficient and to the point',
      'Acceptable for internal emails',
      'Perfect for busy people',
    ],
    answer: 'Extremely unprofessional',
    explanation:
      'No subject line, no context, no greeting. A one-word email is never acceptable. Always provide context.',
  },
];

export default function EmailToneClient() {
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
    if (option === EMAILS[currentQ].answer) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ >= EMAILS.length - 1) {
      setGameState('end');
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const current = EMAILS[currentQ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Email Tone Analyzer</h2>
        <p className="text-muted-foreground">
          Learn professional email etiquette by analyzing real examples.
        </p>
      </div>

      {gameState === 'start' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <Mail className="mx-auto mb-6 h-20 w-20 text-primary opacity-50" />
            <h3 className="mb-4 text-2xl font-bold">
              Master Email Communication
            </h3>
            <p className="mb-8 text-muted-foreground">
              {EMAILS.length} email scenarios to analyze.
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
          <div className="flex items-center justify-between bg-primary/10 p-4">
            <Badge variant="outline">
              Email {currentQ + 1}/{EMAILS.length}
            </Badge>
            <div className="font-bold text-primary">Score: {score}</div>
          </div>
          <CardContent className="p-6">
            {/* Email Preview */}
            <div className="mb-6 overflow-hidden rounded-lg border">
              <div className="border-b bg-muted px-4 py-2">
                <p className="text-sm">
                  <strong>Subject:</strong> {current.subject}
                </p>
              </div>
              <div className="whitespace-pre-wrap bg-white p-4 text-sm dark:bg-slate-900">
                {current.body}
              </div>
            </div>

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
                  {current.explanation}
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
            <h3 className="mb-2 text-3xl font-bold">Complete!</h3>
            <p className="mb-8 text-xl">
              Score:{' '}
              <span className="font-bold text-primary">
                {score}/{EMAILS.length}
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
