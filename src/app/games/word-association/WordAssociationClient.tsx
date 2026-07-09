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
  MessageSquare,
  ChevronRight,
  Clock,
  Lightbulb,
} from 'lucide-react';

interface Question {
  baseWord: string;
  correctAnswer: string;
  options: string[];
  relationship: string;
  explanation: string;
}

// Word association database - 65+ questions across multiple relationship types
const questionDatabase: Question[] = [
  // ========== SYNONYMS (15 questions) ==========
  {
    baseWord: 'HAPPY',
    correctAnswer: 'JOYFUL',
    options: ['JOYFUL', 'SAD', 'ANGRY', 'TIRED'],
    relationship: 'Synonym',
    explanation: 'Happy and Joyful both mean feeling pleasure or contentment.',
  },
  {
    baseWord: 'FAST',
    correctAnswer: 'QUICK',
    options: ['SLOW', 'QUICK', 'HEAVY', 'LIGHT'],
    relationship: 'Synonym',
    explanation: 'Fast and Quick both mean moving with high speed.',
  },
  {
    baseWord: 'BIG',
    correctAnswer: 'LARGE',
    options: ['SMALL', 'LARGE', 'NARROW', 'SHORT'],
    relationship: 'Synonym',
    explanation: 'Big and Large both describe something of considerable size.',
  },
  {
    baseWord: 'SMART',
    correctAnswer: 'INTELLIGENT',
    options: ['DULL', 'INTELLIGENT', 'WEAK', 'SLOW'],
    relationship: 'Synonym',
    explanation: 'Smart and Intelligent both refer to high mental ability.',
  },
  {
    baseWord: 'BEAUTIFUL',
    correctAnswer: 'GORGEOUS',
    options: ['UGLY', 'GORGEOUS', 'PLAIN', 'SIMPLE'],
    relationship: 'Synonym',
    explanation:
      'Beautiful and Gorgeous both describe something pleasing to look at.',
  },
  {
    baseWord: 'DIFFICULT',
    correctAnswer: 'CHALLENGING',
    options: ['EASY', 'CHALLENGING', 'SIMPLE', 'CLEAR'],
    relationship: 'Synonym',
    explanation:
      'Difficult and Challenging both mean requiring effort to accomplish.',
  },
  {
    baseWord: 'ANGRY',
    correctAnswer: 'FURIOUS',
    options: ['CALM', 'FURIOUS', 'HAPPY', 'PEACEFUL'],
    relationship: 'Synonym',
    explanation: 'Angry and Furious both express strong displeasure.',
  },
  {
    baseWord: 'QUIET',
    correctAnswer: 'SILENT',
    options: ['LOUD', 'SILENT', 'NOISY', 'ROWDY'],
    relationship: 'Synonym',
    explanation: 'Quiet and Silent both mean making little or no sound.',
  },
  {
    baseWord: 'BRAVE',
    correctAnswer: 'COURAGEOUS',
    options: ['COWARDLY', 'COURAGEOUS', 'TIMID', 'FEARFUL'],
    relationship: 'Synonym',
    explanation: 'Brave and Courageous both mean showing no fear.',
  },
  {
    baseWord: 'WEALTHY',
    correctAnswer: 'RICH',
    options: ['POOR', 'RICH', 'BROKE', 'MODEST'],
    relationship: 'Synonym',
    explanation: 'Wealthy and Rich both mean having a lot of money or assets.',
  },
  {
    baseWord: 'TIRED',
    correctAnswer: 'EXHAUSTED',
    options: ['ENERGETIC', 'EXHAUSTED', 'ACTIVE', 'LIVELY'],
    relationship: 'Synonym',
    explanation: 'Tired and Exhausted both mean lacking energy.',
  },
  {
    baseWord: 'OLD',
    correctAnswer: 'ANCIENT',
    options: ['NEW', 'ANCIENT', 'MODERN', 'RECENT'],
    relationship: 'Synonym',
    explanation: 'Old and Ancient both refer to something from long ago.',
  },
  {
    baseWord: 'STRANGE',
    correctAnswer: 'PECULIAR',
    options: ['NORMAL', 'PECULIAR', 'COMMON', 'USUAL'],
    relationship: 'Synonym',
    explanation: 'Strange and Peculiar both mean unusual or odd.',
  },
  {
    baseWord: 'IMPORTANT',
    correctAnswer: 'SIGNIFICANT',
    options: ['TRIVIAL', 'SIGNIFICANT', 'MINOR', 'SMALL'],
    relationship: 'Synonym',
    explanation:
      'Important and Significant both mean having great value or meaning.',
  },
  {
    baseWord: 'SCARED',
    correctAnswer: 'FRIGHTENED',
    options: ['BRAVE', 'FRIGHTENED', 'BOLD', 'FEARLESS'],
    relationship: 'Synonym',
    explanation: 'Scared and Frightened both mean feeling fear.',
  },

  // ========== ANTONYMS (15 questions) ==========
  {
    baseWord: 'HOT',
    correctAnswer: 'COLD',
    options: ['WARM', 'COLD', 'MILD', 'COOL'],
    relationship: 'Antonym',
    explanation: 'Hot and Cold are opposites in temperature.',
  },
  {
    baseWord: 'LIGHT',
    correctAnswer: 'DARK',
    options: ['BRIGHT', 'DARK', 'DIM', 'GLOW'],
    relationship: 'Antonym',
    explanation: 'Light and Dark are opposites describing illumination.',
  },
  {
    baseWord: 'ANCIENT',
    correctAnswer: 'MODERN',
    options: ['OLD', 'MODERN', 'CLASSIC', 'VINTAGE'],
    relationship: 'Antonym',
    explanation: 'Ancient (very old) is opposite to Modern (recent/current).',
  },
  {
    baseWord: 'EXPAND',
    correctAnswer: 'CONTRACT',
    options: ['GROW', 'CONTRACT', 'STRETCH', 'EXTEND'],
    relationship: 'Antonym',
    explanation: 'Expand (get larger) is opposite to Contract (get smaller).',
  },
  {
    baseWord: 'VICTORY',
    correctAnswer: 'DEFEAT',
    options: ['WIN', 'DEFEAT', 'SUCCESS', 'TRIUMPH'],
    relationship: 'Antonym',
    explanation: 'Victory (winning) is opposite to Defeat (losing).',
  },
  {
    baseWord: 'GENEROUS',
    correctAnswer: 'SELFISH',
    options: ['KIND', 'SELFISH', 'GIVING', 'CARING'],
    relationship: 'Antonym',
    explanation:
      'Generous (giving freely) is opposite to Selfish (keeping for oneself).',
  },
  {
    baseWord: 'ARTIFICIAL',
    correctAnswer: 'NATURAL',
    options: ['FAKE', 'NATURAL', 'SYNTHETIC', 'MADE'],
    relationship: 'Antonym',
    explanation:
      'Artificial (man-made) is opposite to Natural (occurring in nature).',
  },
  {
    baseWord: 'TEMPORARY',
    correctAnswer: 'PERMANENT',
    options: ['BRIEF', 'PERMANENT', 'SHORT', 'PASSING'],
    relationship: 'Antonym',
    explanation:
      'Temporary (lasting briefly) is opposite to Permanent (lasting forever).',
  },
  {
    baseWord: 'MAXIMUM',
    correctAnswer: 'MINIMUM',
    options: ['HIGHEST', 'MINIMUM', 'GREATEST', 'MOST'],
    relationship: 'Antonym',
    explanation: 'Maximum (the most) is opposite to Minimum (the least).',
  },
  {
    baseWord: 'ARRIVAL',
    correctAnswer: 'DEPARTURE',
    options: ['COMING', 'DEPARTURE', 'ENTRY', 'LANDING'],
    relationship: 'Antonym',
    explanation: 'Arrival (coming) is opposite to Departure (leaving).',
  },
  {
    baseWord: 'INNOCENT',
    correctAnswer: 'GUILTY',
    options: ['PURE', 'GUILTY', 'CLEAN', 'BLAMELESS'],
    relationship: 'Antonym',
    explanation:
      'Innocent (not responsible) is opposite to Guilty (responsible for wrongdoing).',
  },
  {
    baseWord: 'ACCEPT',
    correctAnswer: 'REJECT',
    options: ['TAKE', 'REJECT', 'RECEIVE', 'APPROVE'],
    relationship: 'Antonym',
    explanation: 'Accept (to take) is opposite to Reject (to refuse).',
  },
  {
    baseWord: 'SIMPLE',
    correctAnswer: 'COMPLEX',
    options: ['EASY', 'COMPLEX', 'PLAIN', 'BASIC'],
    relationship: 'Antonym',
    explanation:
      'Simple (easy to understand) is opposite to Complex (complicated).',
  },
  {
    baseWord: 'INTERNAL',
    correctAnswer: 'EXTERNAL',
    options: ['INSIDE', 'EXTERNAL', 'INNER', 'INDOOR'],
    relationship: 'Antonym',
    explanation: 'Internal (inside) is opposite to External (outside).',
  },
  {
    baseWord: 'FREEDOM',
    correctAnswer: 'CAPTIVITY',
    options: ['LIBERTY', 'CAPTIVITY', 'RELEASE', 'ESCAPE'],
    relationship: 'Antonym',
    explanation: 'Freedom (being free) is opposite to Captivity (being held).',
  },

  // ========== PART TO WHOLE (12 questions) ==========
  {
    baseWord: 'CHAPTER',
    correctAnswer: 'BOOK',
    options: ['PAGE', 'BOOK', 'LETTER', 'WORD'],
    relationship: 'Part to Whole',
    explanation: 'A Chapter is a part of a Book.',
  },
  {
    baseWord: 'WHEEL',
    correctAnswer: 'CAR',
    options: ['ROAD', 'CAR', 'TIRE', 'SEAT'],
    relationship: 'Part to Whole',
    explanation: 'A Wheel is a part of a Car.',
  },
  {
    baseWord: 'KEY',
    correctAnswer: 'KEYBOARD',
    options: ['LOCK', 'KEYBOARD', 'DOOR', 'MOUSE'],
    relationship: 'Part to Whole',
    explanation: 'A Key is part of a Keyboard.',
  },
  {
    baseWord: 'PETAL',
    correctAnswer: 'FLOWER',
    options: ['STEM', 'FLOWER', 'LEAF', 'ROOT'],
    relationship: 'Part to Whole',
    explanation: 'A Petal is part of a Flower.',
  },
  {
    baseWord: 'BRICK',
    correctAnswer: 'WALL',
    options: ['CEMENT', 'WALL', 'HOUSE', 'FLOOR'],
    relationship: 'Part to Whole',
    explanation: 'A Brick is part of a Wall.',
  },
  {
    baseWord: 'STANZA',
    correctAnswer: 'POEM',
    options: ['LINE', 'POEM', 'VERSE', 'WORD'],
    relationship: 'Part to Whole',
    explanation: 'A Stanza is part of a Poem.',
  },
  {
    baseWord: 'ACTOR',
    correctAnswer: 'CAST',
    options: ['MOVIE', 'CAST', 'STAGE', 'SCRIPT'],
    relationship: 'Part to Whole',
    explanation: 'An Actor is part of a Cast.',
  },
  {
    baseWord: 'PLAYER',
    correctAnswer: 'TEAM',
    options: ['GAME', 'TEAM', 'SPORT', 'FIELD'],
    relationship: 'Part to Whole',
    explanation: 'A Player is part of a Team.',
  },
  {
    baseWord: 'INGREDIENT',
    correctAnswer: 'RECIPE',
    options: ['FOOD', 'RECIPE', 'KITCHEN', 'MEAL'],
    relationship: 'Part to Whole',
    explanation: 'An Ingredient is part of a Recipe.',
  },
  {
    baseWord: 'STATE',
    correctAnswer: 'COUNTRY',
    options: ['CITY', 'COUNTRY', 'TOWN', 'REGION'],
    relationship: 'Part to Whole',
    explanation: 'A State is part of a Country.',
  },
  {
    baseWord: 'BRANCH',
    correctAnswer: 'TREE',
    options: ['LEAF', 'TREE', 'FOREST', 'ROOT'],
    relationship: 'Part to Whole',
    explanation: 'A Branch is part of a Tree.',
  },
  {
    baseWord: 'PIXEL',
    correctAnswer: 'IMAGE',
    options: ['SCREEN', 'IMAGE', 'COLOR', 'DISPLAY'],
    relationship: 'Part to Whole',
    explanation: 'A Pixel is part of a digital Image.',
  },

  // ========== CAUSE & EFFECT (12 questions) ==========
  {
    baseWord: 'RAIN',
    correctAnswer: 'FLOOD',
    options: ['CLOUD', 'FLOOD', 'SUN', 'WIND'],
    relationship: 'Cause & Effect',
    explanation: 'Excessive Rain can cause a Flood.',
  },
  {
    baseWord: 'STUDY',
    correctAnswer: 'SUCCESS',
    options: ['BOOK', 'SUCCESS', 'SCHOOL', 'EXAM'],
    relationship: 'Cause & Effect',
    explanation: 'Study leads to Success in academics.',
  },
  {
    baseWord: 'FIRE',
    correctAnswer: 'SMOKE',
    options: ['WATER', 'SMOKE', 'HEAT', 'FLAME'],
    relationship: 'Cause & Effect',
    explanation: 'Fire produces Smoke.',
  },
  {
    baseWord: 'EXERCISE',
    correctAnswer: 'FITNESS',
    options: ['GYM', 'FITNESS', 'MUSCLE', 'SWEAT'],
    relationship: 'Cause & Effect',
    explanation: 'Regular Exercise leads to Fitness.',
  },
  {
    baseWord: 'VIRUS',
    correctAnswer: 'DISEASE',
    options: ['BACTERIA', 'DISEASE', 'MEDICINE', 'DOCTOR'],
    relationship: 'Cause & Effect',
    explanation: 'A Virus can cause Disease.',
  },
  {
    baseWord: 'EARTHQUAKE',
    correctAnswer: 'DESTRUCTION',
    options: ['TREMOR', 'DESTRUCTION', 'BUILDING', 'GROUND'],
    relationship: 'Cause & Effect',
    explanation: 'An Earthquake causes Destruction.',
  },
  {
    baseWord: 'HUNGER',
    correctAnswer: 'EATING',
    options: ['FOOD', 'EATING', 'STOMACH', 'THIRST'],
    relationship: 'Cause & Effect',
    explanation: 'Hunger causes Eating.',
  },
  {
    baseWord: 'PRACTICE',
    correctAnswer: 'IMPROVEMENT',
    options: ['SKILL', 'IMPROVEMENT', 'EFFORT', 'TIME'],
    relationship: 'Cause & Effect',
    explanation: 'Practice leads to Improvement.',
  },
  {
    baseWord: 'CONFLICT',
    correctAnswer: 'WAR',
    options: ['PEACE', 'WAR', 'ARMY', 'COUNTRY'],
    relationship: 'Cause & Effect',
    explanation: 'Prolonged Conflict can lead to War.',
  },
  {
    baseWord: 'NEGLECT',
    correctAnswer: 'FAILURE',
    options: ['CARE', 'FAILURE', 'IGNORE', 'WORK'],
    relationship: 'Cause & Effect',
    explanation: 'Neglect often leads to Failure.',
  },
  {
    baseWord: 'INNOVATION',
    correctAnswer: 'PROGRESS',
    options: ['IDEA', 'PROGRESS', 'CHANGE', 'THOUGHT'],
    relationship: 'Cause & Effect',
    explanation: 'Innovation drives Progress.',
  },
  {
    baseWord: 'POLLUTION',
    correctAnswer: 'ILLNESS',
    options: ['FACTORY', 'ILLNESS', 'SMOKE', 'WASTE'],
    relationship: 'Cause & Effect',
    explanation: 'Pollution can cause Illness.',
  },

  // ========== ITEM TO CATEGORY (11 questions) ==========
  {
    baseWord: 'APPLE',
    correctAnswer: 'FRUIT',
    options: ['TREE', 'FRUIT', 'RED', 'SWEET'],
    relationship: 'Item to Category',
    explanation: 'Apple belongs to the category of Fruits.',
  },
  {
    baseWord: 'PYTHON',
    correctAnswer: 'SNAKE',
    options: ['LANGUAGE', 'SNAKE', 'CODE', 'PET'],
    relationship: 'Item to Category',
    explanation: 'Python is a type of Snake (also a programming language!).',
  },
  {
    baseWord: 'DOCTOR',
    correctAnswer: 'PROFESSION',
    options: ['HOSPITAL', 'PROFESSION', 'MEDICINE', 'HEALTH'],
    relationship: 'Item to Category',
    explanation: 'Doctor is a Profession.',
  },
  {
    baseWord: 'VIOLIN',
    correctAnswer: 'INSTRUMENT',
    options: ['MUSIC', 'INSTRUMENT', 'STRING', 'ORCHESTRA'],
    relationship: 'Item to Category',
    explanation: 'Violin is a musical Instrument.',
  },
  {
    baseWord: 'ROSE',
    correctAnswer: 'FLOWER',
    options: ['RED', 'FLOWER', 'THORN', 'GARDEN'],
    relationship: 'Item to Category',
    explanation: 'Rose is a type of Flower.',
  },
  {
    baseWord: 'SPARROW',
    correctAnswer: 'BIRD',
    options: ['FLY', 'BIRD', 'WING', 'NEST'],
    relationship: 'Item to Category',
    explanation: 'Sparrow is a type of Bird.',
  },
  {
    baseWord: 'CHAIR',
    correctAnswer: 'FURNITURE',
    options: ['WOOD', 'FURNITURE', 'SIT', 'ROOM'],
    relationship: 'Item to Category',
    explanation: 'Chair is a piece of Furniture.',
  },
  {
    baseWord: 'DIAMOND',
    correctAnswer: 'GEMSTONE',
    options: ['RING', 'GEMSTONE', 'CARBON', 'JEWELRY'],
    relationship: 'Item to Category',
    explanation: 'Diamond is a Gemstone.',
  },
  {
    baseWord: 'TOYOTA',
    correctAnswer: 'BRAND',
    options: ['CAR', 'BRAND', 'JAPAN', 'VEHICLE'],
    relationship: 'Item to Category',
    explanation: 'Toyota is a Brand (automotive manufacturer).',
  },
  {
    baseWord: 'FRENCH',
    correctAnswer: 'LANGUAGE',
    options: ['FRANCE', 'LANGUAGE', 'COUNTRY', 'PEOPLE'],
    relationship: 'Item to Category',
    explanation: 'French is a Language.',
  },
  {
    baseWord: 'OXYGEN',
    correctAnswer: 'ELEMENT',
    options: ['AIR', 'ELEMENT', 'GAS', 'BREATH'],
    relationship: 'Item to Category',
    explanation: 'Oxygen is a chemical Element.',
  },

  // ========== TOOL & ACTION (10 questions) ==========
  {
    baseWord: 'PEN',
    correctAnswer: 'WRITE',
    options: ['PAPER', 'WRITE', 'INK', 'DRAW'],
    relationship: 'Tool & Action',
    explanation: 'A Pen is used to Write.',
  },
  {
    baseWord: 'KNIFE',
    correctAnswer: 'CUT',
    options: ['FOOD', 'CUT', 'SHARP', 'COOK'],
    relationship: 'Tool & Action',
    explanation: 'A Knife is used to Cut.',
  },
  {
    baseWord: 'HAMMER',
    correctAnswer: 'BUILD',
    options: ['NAIL', 'BUILD', 'WOOD', 'TOOL'],
    relationship: 'Tool & Action',
    explanation: 'A Hammer is used to Build (by driving nails).',
  },
  {
    baseWord: 'TELESCOPE',
    correctAnswer: 'OBSERVE',
    options: ['STAR', 'OBSERVE', 'SPACE', 'LENS'],
    relationship: 'Tool & Action',
    explanation: 'A Telescope is used to Observe distant objects.',
  },
  {
    baseWord: 'BRUSH',
    correctAnswer: 'PAINT',
    options: ['ART', 'PAINT', 'CANVAS', 'COLOR'],
    relationship: 'Tool & Action',
    explanation: 'A Brush is used to Paint.',
  },
  {
    baseWord: 'CAMERA',
    correctAnswer: 'CAPTURE',
    options: ['PHOTO', 'CAPTURE', 'LENS', 'FILM'],
    relationship: 'Tool & Action',
    explanation: 'A Camera is used to Capture images.',
  },
  {
    baseWord: 'MICROPHONE',
    correctAnswer: 'RECORD',
    options: ['VOICE', 'RECORD', 'SOUND', 'SPEAK'],
    relationship: 'Tool & Action',
    explanation: 'A Microphone is used to Record audio.',
  },
  {
    baseWord: 'SCISSORS',
    correctAnswer: 'CUT',
    options: ['PAPER', 'CUT', 'BLADE', 'CRAFT'],
    relationship: 'Tool & Action',
    explanation: 'Scissors are used to Cut.',
  },
  {
    baseWord: 'THERMOMETER',
    correctAnswer: 'MEASURE',
    options: ['TEMPERATURE', 'MEASURE', 'FEVER', 'HEAT'],
    relationship: 'Tool & Action',
    explanation: 'A Thermometer is used to Measure temperature.',
  },
  {
    baseWord: 'CALCULATOR',
    correctAnswer: 'COMPUTE',
    options: ['MATH', 'COMPUTE', 'NUMBER', 'ADD'],
    relationship: 'Tool & Action',
    explanation: 'A Calculator is used to Compute mathematical operations.',
  },
];

const diffSettings = {
  easy: { questions: 10, timePerQuestion: 20, showRelationship: true },
  medium: { questions: 12, timePerQuestion: 15, showRelationship: false },
  hard: { questions: 15, timePerQuestion: 10, showRelationship: false },
};

interface GameState {
  phase: 'setup' | 'playing' | 'feedback' | 'result';
  currentQuestion: Question | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  correctAnswers: number;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  timeLeft: number;
  streak: number;
  bestStreak: number;
  usedQuestions: number[];
}

export default function WordAssociationClient() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentQuestion: null,
    questionNumber: 0,
    totalQuestions: 10,
    score: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    isCorrect: null,
    timeLeft: 20,
    streak: 0,
    bestStreak: 0,
    usedQuestions: [],
  });

  const getRandomQuestion = useCallback(
    (usedIndices: number[]): { question: Question; index: number } => {
      const available = questionDatabase
        .map((q, i) => ({ q, i }))
        .filter(({ i }) => !usedIndices.includes(i));

      if (available.length === 0) {
        // Reset if all used
        const idx = Math.floor(Math.random() * questionDatabase.length);
        return { question: questionDatabase[idx], index: idx };
      }

      const { q, i } = available[Math.floor(Math.random() * available.length)];
      return { question: q, index: i };
    },
    [],
  );

  const startGame = useCallback(() => {
    const settings = diffSettings[difficulty];
    const { question, index } = getRandomQuestion([]);

    setGameState({
      phase: 'playing',
      currentQuestion: question,
      questionNumber: 1,
      totalQuestions: settings.questions,
      score: 0,
      correctAnswers: 0,
      selectedAnswer: null,
      isCorrect: null,
      timeLeft: settings.timePerQuestion,
      streak: 0,
      bestStreak: 0,
      usedQuestions: [index],
    });
  }, [difficulty, getRandomQuestion]);

  const handleAnswer = (answer: string) => {
    if (!gameState.currentQuestion) return;

    const isCorrect = answer === gameState.currentQuestion.correctAnswer;
    const timeBonus = Math.floor(
      (gameState.timeLeft / diffSettings[difficulty].timePerQuestion) * 5,
    );
    const points = isCorrect ? 10 + timeBonus : 0;

    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      isCorrect,
      score: prev.score + points,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      streak: isCorrect ? prev.streak + 1 : 0,
      bestStreak:
        isCorrect && prev.streak + 1 > prev.bestStreak
          ? prev.streak + 1
          : prev.bestStreak,
    }));
  };

  const nextQuestion = () => {
    if (gameState.questionNumber >= gameState.totalQuestions) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
    } else {
      const { question, index } = getRandomQuestion(gameState.usedQuestions);
      setGameState((prev) => ({
        ...prev,
        phase: 'playing',
        currentQuestion: question,
        questionNumber: prev.questionNumber + 1,
        selectedAnswer: null,
        isCorrect: null,
        timeLeft: diffSettings[difficulty].timePerQuestion,
        usedQuestions: [...prev.usedQuestions, index],
      }));
    }
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={difficulty}
            onChange={setDifficulty}
            className="mb-8"
          />

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Relationship Types:</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                • <strong>Synonyms:</strong> Words with similar meanings
              </li>
              <li>
                • <strong>Antonyms:</strong> Words with opposite meanings
              </li>
              <li>
                • <strong>Part-Whole:</strong> Component to its whole
              </li>
              <li>
                • <strong>Cause-Effect:</strong> Action and its result
              </li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            Start Association Game
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalQuestions}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalQuestions - gameState.correctAnswers}
        streak={gameState.streak}
        bestStreak={gameState.bestStreak}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup' }))
        }
      />
    );
  }

  const question = gameState.currentQuestion!;
  const settings = diffSettings[difficulty];

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
        <span className="text-sm font-medium">
          Question {gameState.questionNumber} of {gameState.totalQuestions}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Score: <strong>{gameState.score}</strong>
          </span>
          <span className="text-sm">🔥 {gameState.streak}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        {settings.showRelationship && (
          <div className="mb-2 text-center text-sm text-muted-foreground">
            Relationship: {question.relationship}
          </div>
        )}

        <p className="mb-6 text-center text-lg">
          Which word is most closely associated with:
        </p>

        {/* Base word */}
        <div className="mb-8 text-center">
          <span className="rounded-xl bg-primary/10 px-8 py-4 text-4xl font-black text-primary">
            {question.baseWord}
          </span>
        </div>

        {gameState.phase === 'playing' && (
          <div className="grid grid-cols-2 gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="rounded-xl border-2 border-border bg-card p-4 text-lg font-medium transition-all hover:border-primary hover:bg-primary/5"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {gameState.phase === 'feedback' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {question.options.map((option) => (
                <div
                  key={option}
                  className={cn(
                    'rounded-xl border-2 p-4 text-center text-lg font-medium',
                    option === question.correctAnswer &&
                      'border-green-500 bg-green-50 dark:bg-green-900/20',
                    option === gameState.selectedAnswer &&
                      option !== question.correctAnswer &&
                      'border-red-500 bg-red-50 dark:bg-red-900/20',
                    option !== question.correctAnswer &&
                      option !== gameState.selectedAnswer &&
                      'border-border opacity-50',
                  )}
                >
                  {option}
                  {option === question.correctAnswer && ' ✓'}
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-muted/50 p-4 text-center text-sm">
              <strong>{question.relationship}:</strong> {question.explanation}
            </div>

            <div className="text-center">
              <Button
                onClick={nextQuestion}
                className="gap-2"
              >
                {gameState.questionNumber >= gameState.totalQuestions
                  ? 'See Results'
                  : 'Next Question'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset */}
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
