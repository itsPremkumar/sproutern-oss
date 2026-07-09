'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Briefcase,
  Building2,
  ChevronRight,
  UserCheck,
  MessageSquare,
} from 'lucide-react';

interface Scenario {
  id: string;
  category: 'Ethics' | 'Teamwork' | 'Leadership' | 'Communication';
  question: string;
  context: string;
  options: {
    text: string;
    score: number; // 0 to 10
    feedback: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 'eth_1',
    category: 'Ethics',
    context:
      'You notice a colleague, who is also a close friend, leaving work early every day without approval, but marking full attendance.',
    question: 'How do you handle this situation?',
    options: [
      {
        text: 'Report them to HR immediately without talking to them.',
        score: 2,
        feedback:
          'While adhering to policy is good, escalating immediately without understanding the context or warning a friend can damage trust and team dynamics.',
      },
      {
        text: 'Talk to your friend privately, expressing concern and advising them to correct their attendance.',
        score: 10,
        feedback:
          'Excellent. This approaches the problem directly but empathetically, giving them a chance to correct behavior before escalation.',
      },
      {
        text: 'Ignore it. It’s not your business.',
        score: 0,
        feedback:
          "Ignoring ethical violations can create a toxic culture where rules don't matter. It affects team fairness.",
      },
      {
        text: 'Start leaving early too, since no one notices.',
        score: -5,
        feedback:
          'This compromises your own integrity and compounds the problem.',
      },
    ],
  },
  {
    id: 'team_1',
    category: 'Teamwork',
    context:
      'Your team is behind on a critical project deadline. One team member is struggling with their tasks, slowing everyone down.',
    question: 'What is the most effective action?',
    options: [
      {
        text: 'Complain to the manager that this person is incompetent.',
        score: 1,
        feedback:
          "Blaming doesn't solve the immediate deadline issue and harms team morale.",
      },
      {
        text: 'Take over their work and do it yourself to ensure it gets done.',
        score: 5,
        feedback:
          "Gets the job done, but leads to burnout for you and doesn't help the team member improve.",
      },
      {
        text: 'Offer to pair program or help them with specific blockers to speed things up.',
        score: 10,
        feedback:
          'Perfect. This solves the immediate blocking issue while building capacity/skills in the team.',
      },
      {
        text: 'Ask the manager to extend the deadline.',
        score: 6,
        feedback:
          "Reasonable if the workload is truly too high, but doesn't address the performance gap directly.",
      },
    ],
  },
  {
    id: 'lead_1',
    category: 'Leadership',
    context:
      'You are leading a meeting, and two team members start arguing heatedly about a technical decision.',
    question: 'How do you intervene?',
    options: [
      {
        text: 'Let them fight it out until one wins.',
        score: 0,
        feedback:
          'Passive leadership allows conflict to become toxic and wastes meeting time.',
      },
      {
        text: 'Yell at them to stop behaving like children.',
        score: -2,
        feedback: 'Unprofessional and escalates the aggression.',
      },
      {
        text: 'Pick a side immediately to end the argument.',
        score: 4,
        feedback:
          'Ends the argument, but might alienate the other person if they had valid points not fully heard.',
      },
      {
        text: 'Interject calmly, acknowledge both points, and suggest tabling the discussion or moving to a data-based comparison.',
        score: 10,
        feedback:
          'Great leadership. You de-escalate, validate both team members, and move toward a constructive resolution method.',
      },
    ],
  },
  {
    id: 'comm_1',
    category: 'Communication',
    context:
      'A client emails you complaining about a feature that "doesn\'t work," but you know it works exactly as designed.',
    question: 'How do you reply?',
    options: [
      {
        text: 'Reply saying "It works fine, you are probably using it wrong."',
        score: 0,
        feedback: 'Defensive and dismissive. Will likely anger the client.',
      },
      {
        text: 'Ignore the email until they figure it out.',
        score: 0,
        feedback: 'Unprofessional and damaging to client relationships.',
      },
      {
        text: 'Apologize for the confusion and ask for screenshots or steps to reproduce the issue so you can help.',
        score: 10,
        feedback:
          'Excellent. You validate their frustration without admitting fault, and pivot to constructive troubleshooting.',
      },
      {
        text: 'Forward the email to your manager.',
        score: 3,
        feedback:
          'Okay if you are very junior, but generally you should try to handle initial clarification yourself.',
      },
    ],
  },
  {
    id: 'work_1',
    category: 'Teamwork',
    context:
      'You discover a critical bug in production code written by a senior developer who is currently on vacation.',
    question: 'What do you do?',
    options: [
      {
        text: 'Wait for them to return next week.',
        score: 1,
        feedback:
          'Too passive for a "critical" bug. Could cost the company significantly.',
      },
      {
        text: 'Fix it immediately and deploy without telling anyone.',
        score: 3,
        feedback:
          'Proactive, but risky. Deploying without code review or notification can lead to other issues.',
      },
      {
        text: 'Alert the team lead/manager immediately and propose a fix for review.',
        score: 10,
        feedback:
          'Correct. You escalate the criticality appropriately and follow professional engineering processes.',
      },
      {
        text: 'Email the senior developer on their personal email.',
        score: 2,
        feedback:
          'Disturbs their vacation. Only do this if strictly necessary and after internal escalation failed.',
      },
    ],
  },
];

interface GameState {
  phase: 'intro' | 'playing' | 'feedback' | 'result';
  currentScenario: Scenario | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  maxPossibleScore: number;
  selectedOptionIndex: number | null;
  optionFeedback: string | null;
  optionScore: number;
}

export default function SituationJudgmentClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'intro',
    currentScenario: null,
    questionNumber: 0,
    totalQuestions: 5,
    score: 0,
    maxPossibleScore: 0,
    selectedOptionIndex: null,
    optionFeedback: null,
    optionScore: 0,
  });

  const getFilteredScenarios = useCallback(() => {
    // Randomize or filter scenarios in a real app
    return scenarios;
  }, []);

  const startGame = useCallback(() => {
    const allScenarios = getFilteredScenarios();
    setGameState({
      phase: 'playing',
      currentScenario: allScenarios[0],
      questionNumber: 1,
      totalQuestions: allScenarios.length,
      score: 0,
      maxPossibleScore: allScenarios.length * 10,
      selectedOptionIndex: null,
      optionFeedback: null,
      optionScore: 0,
    });
  }, [getFilteredScenarios]);

  const handleAnswer = (optionIdx: number) => {
    if (!gameState.currentScenario) return;

    const option = gameState.currentScenario.options[optionIdx];

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedOptionIndex: optionIdx,
      optionFeedback: option.feedback,
      optionScore: option.score,
      score: prev.score + option.score,
    }));
  };

  const nextScenario = () => {
    const allScenarios = getFilteredScenarios();
    if (gameState.questionNumber >= allScenarios.length) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentScenario: allScenarios[prev.questionNumber],
        questionNumber: prev.questionNumber + 1,
        selectedOptionIndex: null,
        optionFeedback: null,
        optionScore: 0,
      }));
    }
  };

  if (gameState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Workplace Scenarios
          </h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">
              What is a Situation Judgment Test (SJT)?
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Employers use SJTs to assess your soft skills, judgment, and
              cultural fit. You'll be presented with realistic workplace
              dilemmas and asked to choose the most effective response.
            </p>
            <h3 className="mb-2 font-semibold">Key Areas Tested:</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>Ethics & Integrity:</strong> Doing the right thing
              </li>
              <li>
                • <strong>Teamwork:</strong> Cooperation vs. Conflict
              </li>
              <li>
                • <strong>Communication:</strong> Professional handling of
                issues
              </li>
              <li>
                • <strong>Decision Making:</strong> Problem-solving under
                pressure
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Briefcase className="h-5 w-5" />
            Start Assessment
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    // Map score to percentage for displaying purpose
    // Note: ScoreBoard expects standard correct/incorrect count, but SJT is point based.
    // We can adapt slightly or just show the points.
    // Let's adapt logic: >7 points count as "Correct", else Incorrect
    const approximateCorrect = Math.round(gameState.score / 10);

    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.maxPossibleScore} // Showing max score instead of count
        correctAnswers={approximateCorrect}
        incorrectAnswers={gameState.totalQuestions - approximateCorrect}
        labelOverride={{
          total: 'Max Score',
          score: 'Your Points',
        }}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'intro' }))
        }
      />
    );
  }

  const scenario = gameState.currentScenario!;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Scenario {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium capitalize text-primary">
            {scenario.category}
          </span>
          <span className="text-sm">
            Points: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Scenario Card */}
      <div className="overflow-hidden rounded-2xl border bg-card">
        {/* Context Header */}
        <div className="border-b bg-gradient-to-r from-muted/50 to-muted/10 p-6 md:p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {scenario.category === 'Ethics' && (
              <UserCheck className="h-6 w-6" />
            )}
            {scenario.category === 'Teamwork' && (
              <Building2 className="h-6 w-6" />
            )}
            {scenario.category === 'Leadership' && (
              <UserCheck className="h-6 w-6" />
            )}
            {scenario.category === 'Communication' && (
              <MessageSquare className="h-6 w-6" />
            )}
          </div>
          <p className="text-lg leading-relaxed text-foreground">
            {scenario.context}
          </p>
        </div>

        {/* Question Area */}
        <div className="p-6 md:p-8">
          <h3 className="mb-6 font-semibold text-muted-foreground">
            {scenario.question}
          </h3>

          {gameState.phase === 'playing' && (
            <div className="space-y-3">
              {scenario.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full rounded-xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary/5"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}

          {gameState.phase === 'feedback' && (
            <div className="space-y-6">
              <div className="space-y-3">
                {scenario.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      'rounded-xl border-2 p-4 text-left transition-all',
                      gameState.selectedOptionIndex === idx
                        ? gameState.optionScore > 5
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : 'border-border opacity-50',
                    )}
                  >
                    <div className="flex justify-between gap-2">
                      <span>{option.text}</span>
                      {gameState.selectedOptionIndex === idx && (
                        <span
                          className={cn(
                            'font-bold',
                            gameState.optionScore > 5
                              ? 'text-green-600'
                              : 'text-orange-600',
                          )}
                        >
                          {gameState.optionScore > 0 ? '+' : ''}
                          {gameState.optionScore} pts
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  'rounded-xl p-4',
                  gameState.optionScore > 5
                    ? 'bg-green-100 dark:bg-green-900/30'
                    : 'bg-orange-100 dark:bg-orange-900/30',
                )}
              >
                <div className="mb-1 font-semibold">Feedback</div>
                <p className="text-sm">{gameState.optionFeedback}</p>
              </div>

              <div className="text-center">
                <Button
                  onClick={nextScenario}
                  className="gap-2"
                >
                  {gameState.questionNumber >= gameState.totalQuestions
                    ? 'See Results'
                    : 'Next Scenario'}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
