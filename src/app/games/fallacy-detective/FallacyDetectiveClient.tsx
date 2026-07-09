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
  Search,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  Quote,
  AlertTriangle,
} from 'lucide-react';

interface FallacyQuestion {
  id: string;
  statement: string;
  context?: string;
  options: string[];
  correctIndex: number;
  fallacyName: string;
  explanation: string;
  teachingNote: string;
  difficulty: Difficulty;
}

const questions: FallacyQuestion[] = [
  // EASY - Common and obvious fallacies
  {
    id: 'ad-hominem-1',
    statement:
      "We shouldn't listen to Dr. Smith's research on nutrition because she's overweight herself.",
    options: ['Ad Hominem', 'Red Herring', 'Appeal to Authority', 'No Fallacy'],
    correctIndex: 0,
    fallacyName: 'Ad Hominem',
    explanation:
      "This attacks the person's character rather than their argument. Her weight has nothing to do with whether her research is valid.",
    teachingNote:
      "In job interviews, if someone says 'Their last startup failed, ignore their advice,' that's the same fallacy. Past personal failures don't invalidate current ideas.",
    difficulty: 'easy',
  },
  {
    id: 'false-dilemma-1',
    statement: "You're either with us or against us. There's no middle ground.",
    options: [
      'Slippery Slope',
      'False Dilemma',
      'Hasty Generalization',
      'Circular Reasoning',
    ],
    correctIndex: 1,
    fallacyName: 'False Dilemma',
    explanation:
      'This presents only two options when many more exist. You could be neutral, partially supportive, or have a nuanced position.',
    teachingNote:
      "Politicians love this one. 'You either support this bill or you hate children.' Reality is rarely binary.",
    difficulty: 'easy',
  },
  {
    id: 'slippery-slope-1',
    statement:
      "If we allow students to use calculators, soon they won't be able to do any math, and eventually our whole education system will collapse!",
    options: [
      'False Dilemma',
      'Slippery Slope',
      'Appeal to Tradition',
      'Bandwagon Fallacy',
    ],
    correctIndex: 1,
    fallacyName: 'Slippery Slope',
    explanation:
      'This assumes one small step will inevitably lead to extreme consequences without evidence for the chain of events.',
    teachingNote:
      "Not all slippery slopes are fallacies—some chains ARE likely. The fallacy is when there's no evidence connecting A to Z.",
    difficulty: 'easy',
  },
  {
    id: 'appeal-authority-1',
    statement:
      'This investment strategy must be good because a famous actor endorsed it.',
    options: [
      'Ad Hominem',
      'Appeal to Authority',
      'Bandwagon Fallacy',
      'No Fallacy',
    ],
    correctIndex: 1,
    fallacyName: 'Appeal to Authority',
    explanation:
      "The actor isn't a financial expert. Being famous doesn't make someone an authority on investments.",
    teachingNote:
      "Legitimate authority appeals exist—citing a cardiologist on heart health is fine. The fallacy is when the 'authority' has no expertise.",
    difficulty: 'easy',
  },
  {
    id: 'bandwagon-1',
    statement:
      'Everyone is switching to this new social media app, so it must be the best one.',
    options: [
      'Bandwagon Fallacy',
      'Appeal to Authority',
      'Hasty Generalization',
      'Red Herring',
    ],
    correctIndex: 0,
    fallacyName: 'Bandwagon Fallacy',
    explanation:
      "Popularity doesn't equal quality. Many people can be wrong simultaneously.",
    teachingNote:
      "Tech bubbles are driven by this. 'Everyone is investing in crypto/AI/NFTs' doesn't make it a good investment for you.",
    difficulty: 'easy',
  },
  // MEDIUM - Requires more careful analysis
  {
    id: 'straw-man-1',
    statement:
      "Person A: 'We should have more bike lanes in the city.' Person B: 'So you want to ban all cars and destroy our economy?'",
    options: ['Slippery Slope', 'Straw Man', 'False Dilemma', 'Red Herring'],
    correctIndex: 1,
    fallacyName: 'Straw Man',
    explanation:
      "Person B misrepresents Person A's position, making it easier to attack. A said 'more bike lanes,' not 'ban all cars.'",
    teachingNote:
      "When someone argues against something you didn't actually say, that's a straw man. Call it out: 'That's not what I said.'",
    difficulty: 'medium',
  },
  {
    id: 'red-herring-1',
    statement:
      'Why are you worried about my speeding ticket? There are murderers walking free out there!',
    options: ['Ad Hominem', 'Red Herring', 'Tu Quoque', 'Whataboutism'],
    correctIndex: 1,
    fallacyName: 'Red Herring',
    explanation:
      "This introduces an unrelated issue to divert attention from the original topic. Murderers existing doesn't change whether speeding is wrong.",
    teachingNote:
      "Politicians often use this in debates. When asked about their policy, they talk about their opponent's different issue.",
    difficulty: 'medium',
  },
  {
    id: 'circular-1',
    statement:
      'The Bible is true because it says so in the Bible. And we know what it says is true because the Bible is the word of God.',
    options: [
      'Appeal to Authority',
      'Begging the Question',
      'Circular Reasoning',
      'No Fallacy',
    ],
    correctIndex: 2,
    fallacyName: 'Circular Reasoning',
    explanation:
      "The conclusion is assumed in the premise. You can't prove X by assuming X is true.",
    teachingNote:
      "Circular reasoning hides in complex language. Always ask: 'Does this prove the thing, or just restate it differently?'",
    difficulty: 'medium',
  },
  {
    id: 'hasty-gen-1',
    statement:
      'I met two rude people from that city. People from there must all be rude.',
    options: [
      'Hasty Generalization',
      'Stereotyping',
      'Sampling Bias',
      'All of the above',
    ],
    correctIndex: 0,
    fallacyName: 'Hasty Generalization',
    explanation:
      'Concluding something about a whole group from a tiny sample size is hasty generalization.',
    teachingNote:
      "Statistics requires adequate sample sizes. Two people can't represent millions. Always ask: 'How many cases is this based on?'",
    difficulty: 'medium',
  },
  {
    id: 'tu-quoque-1',
    statement: 'How can you tell me to quit smoking? You used to smoke too!',
    options: [
      'Ad Hominem',
      'Tu Quoque (You Too)',
      'Hypocrisy Fallacy',
      'Both B and C',
    ],
    correctIndex: 3,
    fallacyName: 'Tu Quoque',
    explanation:
      "Tu Quoque means 'you too.' It dismisses advice based on the advisor's past or current behavior. But advice can be valid regardless of who gives it.",
    teachingNote:
      "A reformed addict's advice on addiction might actually be MORE valuable due to firsthand experience.",
    difficulty: 'medium',
  },
  {
    id: 'post-hoc-1',
    statement:
      'I wore my lucky socks and we won the game. The socks caused the victory!',
    options: [
      'Post Hoc Ergo Propter Hoc',
      'Superstition',
      'Correlation vs Causation',
      'All correct',
    ],
    correctIndex: 0,
    fallacyName: 'Post Hoc Ergo Propter Hoc',
    explanation:
      "Just because B happened after A doesn't mean A caused B. The socks and the win are likely unrelated.",
    teachingNote:
      "This is why scientific studies need control groups. 'I took this supplement and felt better' doesn't prove the supplement worked.",
    difficulty: 'medium',
  },
  {
    id: 'appeal-emotion-1',
    statement:
      "If you don't support this policy, you clearly don't care about children suffering.",
    options: [
      'Ad Hominem',
      'Appeal to Emotion',
      'False Dilemma',
      'Guilt by Association',
    ],
    correctIndex: 1,
    fallacyName: 'Appeal to Emotion',
    explanation:
      'This tries to win through guilt rather than logic. You can care about children and still disagree with this specific policy.',
    teachingNote:
      "Charities sometimes use this ethically (showing suffering to motivate action), but in arguments it's manipulation.",
    difficulty: 'medium',
  },
  // HARD - Subtle and often confused fallacies
  {
    id: 'equivocation-1',
    statement:
      'A feather is light. What is light cannot be dark. Therefore, a feather cannot be dark.',
    options: [
      'Non Sequitur',
      'Equivocation',
      'Ambiguity Fallacy',
      'Both B and C',
    ],
    correctIndex: 3,
    fallacyName: 'Equivocation',
    explanation:
      "'Light' means 'not heavy' in the first sentence but 'not dark' in the second. The same word is used with different meanings.",
    teachingNote:
      "Legal contracts are written carefully to avoid equivocation. 'Shall' vs 'may' can mean very different things.",
    difficulty: 'hard',
  },
  {
    id: 'composition-1',
    statement:
      'Every player on this team is excellent. Therefore, this must be an excellent team.',
    options: [
      'Hasty Generalization',
      'Fallacy of Composition',
      'No Fallacy',
      'Non Sequitur',
    ],
    correctIndex: 1,
    fallacyName: 'Fallacy of Composition',
    explanation:
      "What's true of parts isn't necessarily true of the whole. Great individuals don't always make a great team (chemistry matters).",
    teachingNote:
      "This is why 'all-star' teams sometimes underperform. Individual excellence doesn't guarantee collective excellence.",
    difficulty: 'hard',
  },
  {
    id: 'no-true-scots-1',
    statement:
      "No real programmer uses that language.' 'But John uses it and he's a programmer.' 'Well, no TRUE programmer would use it.'",
    options: [
      'Moving the Goalposts',
      'No True Scotsman',
      'Ad Hoc Rescue',
      'All of the above',
    ],
    correctIndex: 1,
    fallacyName: 'No True Scotsman',
    explanation:
      'When faced with a counterexample, the speaker redefines the group to exclude it. The definition keeps shifting.',
    teachingNote:
      "Watch for this in debates about identity: 'No real [X] would do that' is often a way to dismiss inconvenient examples.",
    difficulty: 'hard',
  },
  {
    id: 'appeal-nature-1',
    statement:
      'This medicine is made from natural herbs, so it must be safe and good for you.',
    options: [
      'Appeal to Nature',
      'Naturalistic Fallacy',
      'No Fallacy',
      'Both A and B',
    ],
    correctIndex: 3,
    fallacyName: 'Appeal to Nature',
    explanation:
      "Natural doesn't mean safe or good. Arsenic, poison ivy, and cobra venom are all natural.",
    teachingNote:
      "The wellness industry profits heavily from this fallacy. Always ask for evidence beyond 'it's natural.'",
    difficulty: 'hard',
  },
  {
    id: 'burden-proof-1',
    statement:
      "You can't prove there AREN'T invisible unicorns on Mars, so they probably exist.",
    options: [
      'Argument from Ignorance',
      'Shifting Burden of Proof',
      "Russell's Teapot",
      'All correct',
    ],
    correctIndex: 3,
    fallacyName: 'Shifting Burden of Proof',
    explanation:
      "The person making the extraordinary claim must provide evidence, not the skeptic. You can't 'prove a negative.'",
    teachingNote:
      "In science and law, the burden of proof is on the claimant. 'Prove I'm wrong' is not a valid argument.",
    difficulty: 'hard',
  },
  {
    id: 'genetic-1',
    statement: "That idea came from a competitor, so we shouldn't consider it.",
    options: [
      'Ad Hominem',
      'Genetic Fallacy',
      'Guilt by Association',
      'Not Invented Here',
    ],
    correctIndex: 1,
    fallacyName: 'Genetic Fallacy',
    explanation:
      'Judging an idea based on its origin rather than its merit. Good ideas can come from anywhere.',
    teachingNote:
      "Tech companies often suffer from 'Not Invented Here' syndrome—rejecting outside ideas just because they're external.",
    difficulty: 'hard',
  },
  {
    id: 'sunk-cost-arg-1',
    statement:
      "We've already spent $5 million on this project, so we have to keep going even though it's failing.",
    options: [
      'Sunk Cost Fallacy',
      'Appeal to Consequences',
      'Escalation of Commitment',
      'Both A and C',
    ],
    correctIndex: 3,
    fallacyName: 'Sunk Cost Fallacy',
    explanation:
      "Past investments shouldn't dictate future decisions. The $5M is gone either way—decide based on future value, not past costs.",
    teachingNote:
      "This is why VCs say 'fail fast.' Good decision-making ignores sunk costs and focuses on expected future returns.",
    difficulty: 'hard',
  },
  {
    id: 'false-balance-1',
    statement:
      'To be fair, we should give equal time to climate scientists and climate deniers on this news segment.',
    options: [
      'False Balance',
      'Appeal to Fairness',
      'No Fallacy',
      'Bothsidesism',
    ],
    correctIndex: 0,
    fallacyName: 'False Balance',
    explanation:
      "Presenting fringe views as equally valid as scientific consensus creates false equivalence. 97% of scientists vs 3% isn't a 50-50 debate.",
    teachingNote:
      "Media often does this for 'balance.' But balanced reporting should reflect the actual weight of evidence, not assume 50/50.",
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  difficulty: Difficulty;
  currentQuestion: FallacyQuestion | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  selectedIndex: number | null;
  hintUsed: boolean;
  usedQuestionIds: string[];
}

const difficultySettings = {
  easy: { rounds: 5 },
  medium: { rounds: 5 },
  hard: { rounds: 5 },
};

export default function FallacyDetectiveClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentQuestion: null,
    roundNumber: 0,
    totalRounds: 5,
    score: 0,
    correctAnswers: 0,
    selectedIndex: null,
    hintUsed: false,
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
      hintUsed: false,
      usedQuestionIds: [question.id],
    });
  }, [gameState.difficulty, getAvailableQuestions]);

  const handleSelect = (index: number) => {
    if (gameState.phase !== 'playing' || !gameState.currentQuestion) return;

    const isCorrect = index === gameState.currentQuestion.correctIndex;
    const points = isCorrect ? (gameState.hintUsed ? 10 : 20) : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedIndex: index,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const useHint = () => {
    if (!gameState.currentQuestion || gameState.hintUsed) return;

    // Hint: eliminate one wrong answer (grey it out)
    setGameState((prev) => ({ ...prev, hintUsed: true }));
  };

  const getHintEliminatedIndex = () => {
    if (!gameState.currentQuestion || !gameState.hintUsed) return -1;
    // Eliminate first wrong answer that's not the correct one
    const wrongIndices = gameState.currentQuestion.options
      .map((_, i) => i)
      .filter((i) => i !== gameState.currentQuestion?.correctIndex);
    return wrongIndices[0];
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
      hintUsed: false,
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
              <strong>Easy:</strong> Common fallacies like Ad Hominem, False
              Dilemma, Slippery Slope
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <strong>Medium:</strong> Straw Man, Red Herring, Circular
              Reasoning, Tu Quoque
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <strong>Hard:</strong> Equivocation, Composition, No True
              Scotsman, Genetic Fallacy
            </div>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Search className="h-5 w-5" />
            Start Detecting Fallacies
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
  const hintEliminated = getHintEliminatedIndex();

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Case {gameState.roundNumber} of {gameState.totalRounds}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {/* Statement */}
        <div className="mb-8">
          <div className="mb-4 flex items-start gap-3">
            <Quote className="h-6 w-6 shrink-0 text-primary" />
            <blockquote className="text-lg font-medium italic text-foreground">
              "{question.statement}"
            </blockquote>
          </div>
          {question.context && (
            <p className="ml-9 text-sm text-muted-foreground">
              {question.context}
            </p>
          )}
        </div>

        {/* Question */}
        <h3 className="mb-6 text-center text-lg font-semibold">
          What logical fallacy is this?
        </h3>

        {/* Options */}
        <div className="mx-auto max-w-md space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrectOption = idx === question.correctIndex;
            const showFeedback = gameState.phase === 'feedback';
            const isEliminated = hintEliminated === idx && !showFeedback;

            return (
              <Button
                key={idx}
                variant="outline"
                size="lg"
                onClick={() => handleSelect(idx)}
                disabled={gameState.phase === 'feedback' || isEliminated}
                className={cn(
                  'h-auto w-full justify-start px-4 py-3 text-left',
                  isEliminated && 'line-through opacity-40',
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

        {/* Hint button */}
        {gameState.phase === 'playing' && !gameState.hintUsed && (
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              onClick={useHint}
              className="gap-2 text-yellow-600"
            >
              <Lightbulb className="h-4 w-4" />
              Eliminate One Option (-10 pts)
            </Button>
          </div>
        )}

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
                ? `Correct! It's ${question.fallacyName}`
                : `Wrong! The answer is ${question.fallacyName}`}
            </div>

            <div className="mx-auto max-w-md rounded-xl bg-blue-50 p-4 text-left dark:bg-blue-900/20">
              <div className="mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
                <h4 className="font-semibold text-blue-700 dark:text-blue-400">
                  Why it's a fallacy:
                </h4>
              </div>
              <p className="mb-3 text-sm text-blue-600 dark:text-blue-300">
                {question.explanation}
              </p>
              <h4 className="mb-1 font-semibold text-blue-700 dark:text-blue-400">
                Real-world tip:
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                {question.teachingNote}
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={nextRound}
                className="gap-2"
              >
                {gameState.roundNumber >= gameState.totalRounds
                  ? 'See Results'
                  : 'Next Case'}
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
