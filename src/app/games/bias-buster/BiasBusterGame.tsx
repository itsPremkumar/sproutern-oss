'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  Play,
  RotateCcw,
  Brain,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
} from 'lucide-react';

interface BiasQuestion {
  id: string;
  scenario: string;
  decision: string;
  options: string[];
  correctIndex: number;
  biasName: string;
  explanation: string;
  mitigation: string;
  difficulty: Difficulty;
}

const questions: BiasQuestion[] = [
  // EASY - Common and well-known biases
  {
    id: 'anchoring-1',
    scenario:
      'A car salesperson tells you the car is worth $30,000, then offers it for $22,000.',
    decision: "You feel like you're getting a great deal and are ready to buy.",
    options: ['Anchoring Bias', 'Bandwagon Effect', 'Halo Effect', 'No Bias'],
    correctIndex: 0,
    biasName: 'Anchoring Bias',
    explanation:
      'The initial $30,000 price "anchored" your expectations. The $22,000 seems great by comparison, but you never verified if it\'s actually a fair market price.',
    mitigation:
      'Always research market prices independently before any negotiation. Ignore the first number you hear.',
    difficulty: 'easy',
  },
  {
    id: 'confirmation-1',
    scenario:
      "You believe a new diet works, so you only read success stories and ignore studies showing it's ineffective.",
    decision: 'You conclude the diet definitely works based on your research.',
    options: [
      'Selection Bias',
      'Confirmation Bias',
      'Survivorship Bias',
      'Availability Heuristic',
    ],
    correctIndex: 1,
    biasName: 'Confirmation Bias',
    explanation:
      "You're only seeking information that confirms what you already believe, ignoring contradicting evidence.",
    mitigation:
      'Actively search for evidence AGAINST your belief. Ask: "What would change my mind?"',
    difficulty: 'easy',
  },
  {
    id: 'sunk-cost-1',
    scenario:
      'You\'ve watched 90 minutes of a terrible movie. You think "I\'ve already invested this much time, I should finish it."',
    decision:
      'You decide to watch the remaining 30 minutes despite not enjoying it.',
    options: ['Sunk Cost Fallacy', 'Loss Aversion', 'Status Quo Bias', 'FOMO'],
    correctIndex: 0,
    biasName: 'Sunk Cost Fallacy',
    explanation:
      'The time you spent is gone regardless of whether you finish. The decision should be: "Will the next 30 minutes be enjoyable?" not "Did I waste the first 90?"',
    mitigation:
      'Ask: "If I were starting fresh right now, would I make this choice?" Ignore past investments.',
    difficulty: 'easy',
  },
  {
    id: 'bandwagon-1',
    scenario:
      "All your friends are investing in a particular cryptocurrency. You don't understand it, but you invest too.",
    decision: 'You buy because "everyone else is doing it and making money."',
    options: ['FOMO', 'Bandwagon Effect', 'Authority Bias', 'Both A and B'],
    correctIndex: 3,
    biasName: 'Bandwagon Effect + FOMO',
    explanation:
      "You're following the crowd without independent analysis. FOMO (Fear Of Missing Out) amplifies this.",
    mitigation:
      "Never invest in something you don't understand. Popular ≠ profitable or safe.",
    difficulty: 'easy',
  },
  {
    id: 'halo-1',
    scenario:
      'A company CEO is attractive and charismatic. You assume they must also be intelligent and ethical.',
    decision: "You trust the company based on the CEO's appearance and charm.",
    options: [
      'Authority Bias',
      'Halo Effect',
      'Fundamental Attribution Error',
      'Spotlight Effect',
    ],
    correctIndex: 1,
    biasName: 'Halo Effect',
    explanation:
      'Positive impressions in one area (looks, charisma) spill over into unrelated areas (intelligence, ethics).',
    mitigation:
      'Evaluate each quality independently. Ask: "What evidence supports this specific claim?"',
    difficulty: 'easy',
  },
  // MEDIUM - Situational biases
  {
    id: 'availability-1',
    scenario:
      'After seeing news about a plane crash, you decide to drive 500 miles instead of flying.',
    decision: 'You feel driving is much safer than flying.',
    options: [
      'Availability Heuristic',
      'Risk Aversion',
      'Salience Bias',
      'Recency Bias',
    ],
    correctIndex: 0,
    biasName: 'Availability Heuristic',
    explanation:
      "Recent, vivid events (plane crash on news) feel more likely because they're easy to recall. Statistically, flying is much safer than driving.",
    mitigation:
      'Check actual statistics rather than relying on what comes easily to mind.',
    difficulty: 'medium',
  },
  {
    id: 'survivorship-1',
    scenario:
      'You study successful entrepreneurs who dropped out of college and conclude that college is unnecessary for success.',
    decision:
      'You consider dropping out because "Bill Gates and Zuckerberg did it."',
    options: [
      'Selection Bias',
      'Survivorship Bias',
      'Confirmation Bias',
      'Hasty Generalization',
    ],
    correctIndex: 1,
    biasName: 'Survivorship Bias',
    explanation:
      "You're only seeing the rare successes, not the millions of dropouts who failed. The failures are invisible.",
    mitigation:
      'Ask: "What happened to all the people who tried this and didn\'t succeed?"',
    difficulty: 'medium',
  },
  {
    id: 'dunning-kruger-1',
    scenario:
      'After taking one online course on investing, you feel confident giving financial advice to friends.',
    decision:
      'You believe you understand investing well enough to advise others.',
    options: [
      'Overconfidence Bias',
      'Dunning-Kruger Effect',
      'Self-Serving Bias',
      'Illusory Superiority',
    ],
    correctIndex: 1,
    biasName: 'Dunning-Kruger Effect',
    explanation:
      "People with limited knowledge often overestimate their competence because they don't know what they don't know.",
    mitigation:
      'Assume you\'re at the "peak of Mount Stupid." True experts know their limitations.',
    difficulty: 'medium',
  },
  {
    id: 'framing-1',
    scenario:
      'A surgeon says "90% survive this surgery" vs "10% die from this surgery." You feel differently about each.',
    decision:
      'The same information feels riskier when framed as deaths vs survivals.',
    options: [
      'Framing Effect',
      'Loss Aversion',
      'Negativity Bias',
      'All of the above',
    ],
    correctIndex: 0,
    biasName: 'Framing Effect',
    explanation:
      'How information is presented (framed) changes how we perceive it, even when the facts are identical.',
    mitigation:
      "Reframe information both positively and negatively before deciding. The facts haven't changed.",
    difficulty: 'medium',
  },
  {
    id: 'ingroup-1',
    scenario:
      'Your company\'s candidate makes a mistake in a presentation. You think "anyone can slip up." A competitor\'s candidate does the same, and you think "they\'re incompetent."',
    decision:
      'You judge the same behavior differently based on group membership.',
    options: [
      'Attribution Bias',
      'In-Group Bias',
      'Fundamental Attribution Error',
      'All apply',
    ],
    correctIndex: 3,
    biasName: 'In-Group Bias + Attribution Error',
    explanation:
      'We give the benefit of the doubt to "our" people while attributing others\' mistakes to character flaws.',
    mitigation:
      'Apply the same standards to everyone. Ask: "Would I excuse this if someone I dislike did it?"',
    difficulty: 'medium',
  },
  {
    id: 'status-quo-1',
    scenario:
      'Your pension is in a default low-risk fund. You know a better option exists but never switch.',
    decision:
      'You stick with the default because changing feels like too much effort.',
    options: [
      'Status Quo Bias',
      'Loss Aversion',
      'Default Effect',
      'All of the above',
    ],
    correctIndex: 3,
    biasName: 'Status Quo Bias',
    explanation:
      'We prefer things to stay the same. The effort of change feels larger than the benefit.',
    mitigation:
      'Ask: "If I were starting fresh, would I choose this option?" If no, switch.',
    difficulty: 'medium',
  },
  // HARD - Subtle and self-biases
  {
    id: 'hindsight-1',
    scenario:
      'After a startup fails, you say "I always knew it wouldn\'t work" even though you invested.',
    decision: 'You feel you predicted the outcome all along.',
    options: [
      'Hindsight Bias',
      'Self-Serving Bias',
      'Confirmation Bias',
      'Outcome Bias',
    ],
    correctIndex: 0,
    biasName: 'Hindsight Bias',
    explanation:
      'After knowing the outcome, it seems "obvious" in retrospect. But you didn\'t actually predict it.',
    mitigation:
      "Write down predictions BEFORE outcomes. You'll be surprised how often you were uncertain.",
    difficulty: 'hard',
  },
  {
    id: 'self-serving-1',
    scenario:
      'When your project succeeds, you credit your skill. When it fails, you blame the market/team/timing.',
    decision:
      'You take credit for wins but attribute losses to external factors.',
    options: [
      'Attribution Error',
      'Self-Serving Bias',
      'Actor-Observer Bias',
      'Ego Preservation',
    ],
    correctIndex: 1,
    biasName: 'Self-Serving Bias',
    explanation:
      'We attribute successes to internal factors (our skill) and failures to external factors (bad luck).',
    mitigation:
      'Ask: "What external factors helped my success? What internal mistakes contributed to failure?"',
    difficulty: 'hard',
  },
  {
    id: 'planning-1',
    scenario:
      'You estimate a project will take 2 weeks. It actually takes 6 weeks. Next time, you estimate another similar project at 2 weeks.',
    decision:
      'Despite past experience, you remain optimistic about your timeline.',
    options: [
      'Optimism Bias',
      'Planning Fallacy',
      'Overconfidence',
      'All of the above',
    ],
    correctIndex: 3,
    biasName: 'Planning Fallacy',
    explanation:
      "We consistently underestimate time, costs, and risks for our own projects while seeing others' estimates as unrealistic.",
    mitigation:
      'Use "reference class forecasting" - look at how long SIMILAR projects actually took, not your ideal estimate.',
    difficulty: 'hard',
  },
  {
    id: 'outcome-1',
    scenario:
      'A poker player goes all-in with a 5% chance hand and wins. You conclude they made a great decision.',
    decision: 'You judge the decision quality by the outcome, not the process.',
    options: [
      'Survivorship Bias',
      'Outcome Bias',
      'Results-Oriented Thinking',
      'Both B and C',
    ],
    correctIndex: 3,
    biasName: 'Outcome Bias',
    explanation:
      "A lucky outcome doesn't mean the decision was good. Good decisions can have bad outcomes, and vice versa.",
    mitigation:
      'Judge decisions by the process and information available AT THE TIME, not the result.',
    difficulty: 'hard',
  },
  {
    id: 'blind-spot-1',
    scenario:
      "You believe you're less biased than the average person and can recognize biases in others easily.",
    decision:
      "You think this quiz doesn't really apply to you—you're already good at this.",
    options: [
      'Illusory Superiority',
      'Bias Blind Spot',
      'Overconfidence',
      'All of the above',
    ],
    correctIndex: 3,
    biasName: 'Bias Blind Spot',
    explanation:
      "Everyone thinks they're less biased than average. If you think you're immune to biases, that's the bias talking.",
    mitigation:
      'Assume you\'re biased. Create systems and checklists that don\'t rely on your "objectivity."',
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentQuestion: BiasQuestion | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  usedQuestionIds: string[];
}

const difficultySettings: Record<Difficulty, { rounds: number }> = {
  easy: { rounds: 5 },
  medium: { rounds: 5 },
  hard: { rounds: 5 },
};

export default function BiasBusterClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentQuestion: null,
    roundNumber: 0,
    totalRounds: 5,
    score: 0,
    correctAnswers: 0,
    selectedIndex: null,
    usedQuestionIds: [],
  });

  const getAvailableQuestions = useCallback(
    (difficulty: Difficulty, usedIds: string[]) => {
      return questions.filter(
        (q) => q.difficulty === difficulty && !usedIds.includes(q.id),
      );
    },
    [],
  );

  const startGame = useCallback(() => {
    const available = getAvailableQuestions(gameState.difficulty, []);
    if (available.length === 0) return;

    const question = available[Math.floor(Math.random() * available.length)];

    setGameState({
      phase: 'playing',
      difficulty: gameState.difficulty,
      currentQuestion: question,
      roundNumber: 1,
      totalRounds: difficultySettings[gameState.difficulty].rounds,
      score: 0,
      correctAnswers: 0,
      selectedIndex: null,
      usedQuestionIds: [question.id],
    });
  }, [gameState.difficulty, getAvailableQuestions]);

  const handleSelect = (index: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentQuestion) return;

    const isCorrect = index === gameState.currentQuestion.correctIndex;
    const points = isCorrect ? 20 : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedIndex: index,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const available = getAvailableQuestions(
      gameState.difficulty,
      gameState.usedQuestionIds,
    );
    if (available.length === 0) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }

    const question = available[Math.floor(Math.random() * available.length)];

    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
      currentQuestion: question,
      roundNumber: prev.roundNumber + 1,
      selectedIndex: null,
      usedQuestionIds: [...prev.usedQuestionIds, question.id],
    }));
  };

  // Setup phase
  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={gameState.difficulty}
            onChange={(d) =>
              setGameState((prev) => ({ ...prev, difficulty: d }))
            }
            className="mb-8"
          />

          <div className="mb-8 grid gap-3 text-sm">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <strong>Easy:</strong> Common biases - Anchoring, Confirmation,
              Sunk Cost, Halo Effect
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <strong>Medium:</strong> Situational biases - Availability,
              Survivorship, Dunning-Kruger
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <strong>Hard:</strong> Self-biases - Hindsight, Planning Fallacy,
              Bias Blind Spot
            </div>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Brain className="h-5 w-5" />
            Start Busting Biases
          </Button>
        </div>
      </div>
    );
  }

  // Result phase
  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalRounds - gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const question = gameState.currentQuestion!;
  const isCorrect = gameState.selectedIndex === question.correctIndex;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Scenario {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Scenario */}
        <div className="mb-6">
          <div className="mb-4 rounded-xl bg-muted/50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <User className="h-4 w-4" />
              Scenario:
            </div>
            <p className="text-foreground">{question.scenario}</p>
          </div>
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
              <AlertTriangle className="h-4 w-4" />
              The Decision:
            </div>
            <p className="font-medium text-foreground">{question.decision}</p>
          </div>
        </div>

        {/* Question */}
        <h3 className="mb-6 text-center text-lg font-semibold">
          What cognitive bias is at play here?
        </h3>

        {/* Options */}
        <div className="mx-auto max-w-md space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrectOption = idx === question.correctIndex;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={idx}
                variant="outline"
                size="lg"
                onClick={() => handleSelect(idx)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-auto w-full justify-start px-4 py-3 text-left',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </span>
                {showFeedback && isCorrectOption && (
                  <CheckCircle className="ml-auto h-5 w-5" />
                )}
                {showFeedback && isSelected && !isCorrectOption && (
                  <XCircle className="ml-auto h-5 w-5" />
                )}
              </Button>
            );
          })}
        </div>

        {/* Feedback */}
        {gameState.phase === 'feedback' && (
          <div className="mt-8 space-y-4 duration-300 animate-in fade-in">
            <div
              className={cn(
                'mx-auto max-w-md rounded-xl p-4 text-center font-bold',
                isCorrect
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
              )}
            >
              {isCorrect
                ? `Correct! It's ${question.biasName}`
                : `The answer is ${question.biasName}`}
            </div>

            <div className="mx-auto max-w-md space-y-3">
              <div className="rounded-xl bg-blue-50 p-4 text-left dark:bg-blue-900/20">
                <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">
                  Why this is a bias:
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  {question.explanation}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4 text-left dark:bg-green-900/20">
                <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-700 dark:text-green-400">
                  <Lightbulb className="h-4 w-4" />
                  How to overcome it:
                </h4>
                <p className="text-sm text-green-600 dark:text-green-300">
                  {question.mitigation}
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Scenario'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset button */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'setup' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
