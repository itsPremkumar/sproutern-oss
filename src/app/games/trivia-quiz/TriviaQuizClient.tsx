'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import { Play, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: string;
  category: string;
  explanation: string;
}

interface GameState {
  phase: 'intro' | 'playing' | 'feedback' | 'result';
  round: number;
  score: number;
  totalRounds: number;
  correctAnswers: number;
  currentQuestion: Question | null;
  selectedAnswer: string | null;
}

// Trivia questions database - 55+ questions across multiple categories
const questions: Question[] = [
  // ========== SCIENCE (15 questions) ==========
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
    correct: 'Jupiter',
    category: 'Science',
    explanation:
      'Jupiter is the largest planet, with a mass more than twice that of all other planets combined.',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Au', 'Gd', 'Ag'],
    correct: 'Au',
    category: 'Science',
    explanation: "Au comes from the Latin word 'Aurum'.",
  },
  {
    question: 'Which element has the atomic number 1?',
    options: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
    correct: 'Hydrogen',
    category: 'Science',
    explanation:
      'Hydrogen is the lightest and most abundant element in the universe.',
  },
  {
    question: 'Which mammal can fly?',
    options: ['Flying squirrel', 'Bat', 'Sugar glider', 'Flying fish'],
    correct: 'Bat',
    category: 'Science',
    explanation: 'Bats are the only mammals capable of sustained flight.',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
    correct: 'Diamond',
    category: 'Science',
    explanation: 'Diamond is rated 10 on the Mohs hardness scale.',
  },
  {
    question: 'What is the speed of light?',
    options: ['300,000 km/s', '150,000 km/s', '200,000 km/s', '250,000 km/s'],
    correct: '300,000 km/s',
    category: 'Science',
    explanation: 'Light travels at approximately 299,792 km/s in a vacuum.',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    correct: 'Mars',
    category: 'Science',
    explanation: 'Mars appears red due to iron oxide (rust) on its surface.',
  },
  {
    question: 'What is the smallest unit of life?',
    options: ['Atom', 'Molecule', 'Cell', 'Tissue'],
    correct: 'Cell',
    category: 'Science',
    explanation:
      'The cell is the basic structural and functional unit of all living organisms.',
  },
  {
    question: 'What gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correct: 'Carbon Dioxide',
    category: 'Science',
    explanation: 'Plants use carbon dioxide for photosynthesis.',
  },
  {
    question: 'How many bones are in the adult human body?',
    options: ['186', '206', '226', '246'],
    correct: '206',
    category: 'Science',
    explanation:
      'Adults have 206 bones, though babies are born with around 270.',
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Liver', 'Heart', 'Skin', 'Brain'],
    correct: 'Skin',
    category: 'Science',
    explanation:
      'The skin is the largest organ, covering about 20 square feet.',
  },
  {
    question: 'What planet has the most moons?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correct: 'Saturn',
    category: 'Science',
    explanation: 'Saturn has over 80 known moons, the most of any planet.',
  },
  {
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi body'],
    correct: 'Mitochondria',
    category: 'Science',
    explanation: 'Mitochondria produce energy (ATP) for the cell.',
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    correct: 'Nitrogen',
    category: 'Science',
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
  },
  {
    question: 'What type of animal is a dolphin?',
    options: ['Fish', 'Mammal', 'Amphibian', 'Reptile'],
    correct: 'Mammal',
    category: 'Science',
    explanation:
      'Dolphins are mammals that give live birth and nurse their young.',
  },

  // ========== GEOGRAPHY (12 questions) ==========
  {
    question: 'Which country has the most islands?',
    options: ['Indonesia', 'Philippines', 'Sweden', 'Finland'],
    correct: 'Sweden',
    category: 'Geography',
    explanation: 'Sweden has approximately 267,570 islands.',
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correct: 'Canberra',
    category: 'Geography',
    explanation:
      'Canberra was chosen as a compromise between Sydney and Melbourne.',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    correct: 'Pacific',
    category: 'Geography',
    explanation:
      "The Pacific Ocean covers about 46% of the Earth's water surface.",
  },
  {
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
    correct: 'Vatican City',
    category: 'Geography',
    explanation: 'Vatican City is only about 0.44 square kilometers.',
  },
  {
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correct: '7',
    category: 'Geography',
    explanation:
      'The 7 continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America.',
  },
  {
    question: 'What is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correct: 'Nile',
    category: 'Geography',
    explanation: 'The Nile River is approximately 6,650 km long.',
  },
  {
    question: 'Which desert is the largest in the world?',
    options: ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
    correct: 'Antarctic',
    category: 'Geography',
    explanation:
      'Antarctica is technically a cold desert and is larger than the Sahara.',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Osaka', 'Kyoto', 'Tokyo', 'Nagoya'],
    correct: 'Tokyo',
    category: 'Geography',
    explanation: "Tokyo is Japan's capital and largest city.",
  },
  {
    question: 'Which country has the largest population?',
    options: ['India', 'China', 'USA', 'Indonesia'],
    correct: 'India',
    category: 'Geography',
    explanation:
      "India surpassed China as the world's most populous country in 2023.",
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['K2', 'Kangchenjunga', 'Mount Everest', 'Lhotse'],
    correct: 'Mount Everest',
    category: 'Geography',
    explanation: 'Mount Everest is 8,849 meters (29,032 ft) above sea level.',
  },
  {
    question: 'Which continent is the driest?',
    options: ['Africa', 'Australia', 'Antarctica', 'Asia'],
    correct: 'Antarctica',
    category: 'Geography',
    explanation:
      'Antarctica receives very little precipitation, making it technically a desert.',
  },
  {
    question: 'What is the currency of the United Kingdom?',
    options: ['Euro', 'Dollar', 'Pound Sterling', 'Franc'],
    correct: 'Pound Sterling',
    category: 'Geography',
    explanation: 'The UK uses the Pound Sterling (£).',
  },

  // ========== HISTORY (10 questions) ==========
  {
    question: 'In which year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correct: '1945',
    category: 'History',
    explanation: 'WWII ended in 1945 with the surrender of Japan in September.',
  },
  {
    question: 'Who was the first President of the United States?',
    options: [
      'Thomas Jefferson',
      'John Adams',
      'George Washington',
      'Benjamin Franklin',
    ],
    correct: 'George Washington',
    category: 'History',
    explanation: 'Washington served as president from 1789 to 1797.',
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1910', '1912', '1914', '1916'],
    correct: '1912',
    category: 'History',
    explanation: 'The Titanic sank on April 15, 1912.',
  },
  {
    question: 'Who discovered America?',
    options: [
      'Amerigo Vespucci',
      'Christopher Columbus',
      'Marco Polo',
      'Leif Erikson',
    ],
    correct: 'Christopher Columbus',
    category: 'History',
    explanation:
      'Columbus reached the Americas in 1492, though Vikings arrived earlier.',
  },
  {
    question: 'What year did the Berlin Wall fall?',
    options: ['1987', '1988', '1989', '1990'],
    correct: '1989',
    category: 'History',
    explanation: 'The Berlin Wall fell on November 9, 1989.',
  },
  {
    question: 'Who was the first woman to fly solo across the Atlantic?',
    options: [
      'Harriet Quimby',
      'Amelia Earhart',
      'Bessie Coleman',
      'Jacqueline Cochran',
    ],
    correct: 'Amelia Earhart',
    category: 'History',
    explanation: 'Earhart completed the solo flight in 1932.',
  },
  {
    question: 'Which ancient civilization built the pyramids?',
    options: ['Greeks', 'Romans', 'Egyptians', 'Mesopotamians'],
    correct: 'Egyptians',
    category: 'History',
    explanation:
      'The ancient Egyptians built the pyramids as tombs for pharaohs.',
  },
  {
    question: 'In what year did India gain independence?',
    options: ['1945', '1947', '1950', '1952'],
    correct: '1947',
    category: 'History',
    explanation: 'India gained independence from Britain on August 15, 1947.',
  },
  {
    question: 'Who invented the telephone?',
    options: [
      'Thomas Edison',
      'Nikola Tesla',
      'Alexander Graham Bell',
      'Guglielmo Marconi',
    ],
    correct: 'Alexander Graham Bell',
    category: 'History',
    explanation: 'Bell patented the telephone in 1876.',
  },
  {
    question:
      'What was the name of the ship that brought the Pilgrims to America?',
    options: ['Santa Maria', 'Mayflower', 'Victory', 'Endeavour'],
    correct: 'Mayflower',
    category: 'History',
    explanation: 'The Mayflower transported Pilgrims to Plymouth in 1620.',
  },

  // ========== ART & LITERATURE (8 questions) ==========
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Botticelli'],
    correct: 'Leonardo da Vinci',
    category: 'Art',
    explanation: 'Da Vinci painted the Mona Lisa between 1503 and 1519.',
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      'Charles Dickens',
      'William Shakespeare',
      'Jane Austen',
      'Mark Twain',
    ],
    correct: 'William Shakespeare',
    category: 'Literature',
    explanation: 'Shakespeare wrote this tragedy around 1594-1596.',
  },
  {
    question: "Who wrote 'Harry Potter'?",
    options: [
      'J.K. Rowling',
      'Stephen King',
      'George R.R. Martin',
      'Suzanne Collins',
    ],
    correct: 'J.K. Rowling',
    category: 'Literature',
    explanation: 'Rowling published the first Harry Potter book in 1997.',
  },
  {
    question: "Which artist painted 'The Starry Night'?",
    options: [
      'Pablo Picasso',
      'Vincent van Gogh',
      'Claude Monet',
      'Salvador Dalí',
    ],
    correct: 'Vincent van Gogh',
    category: 'Art',
    explanation:
      'Van Gogh painted The Starry Night in 1889 while in an asylum.',
  },
  {
    question: "Who wrote '1984'?",
    options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'H.G. Wells'],
    correct: 'George Orwell',
    category: 'Literature',
    explanation: 'Orwell published this dystopian novel in 1949.',
  },
  {
    question: 'What is the best-selling book of all time?',
    options: ['Harry Potter', 'The Bible', 'Don Quixote', 'The Quran'],
    correct: 'The Bible',
    category: 'Literature',
    explanation: 'The Bible has sold an estimated 5 billion copies.',
  },
  {
    question: "Who sculpted 'David'?",
    options: ['Leonardo da Vinci', 'Michelangelo', 'Donatello', 'Raphael'],
    correct: 'Michelangelo',
    category: 'Art',
    explanation: 'Michelangelo created David between 1501 and 1504.',
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: [
      'Emily Bronte',
      'Charlotte Bronte',
      'Jane Austen',
      'Mary Shelley',
    ],
    correct: 'Jane Austen',
    category: 'Literature',
    explanation: 'Austen published Pride and Prejudice in 1813.',
  },

  // ========== TECHNOLOGY (10 questions) ==========
  {
    question: 'Who founded Microsoft?',
    options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
    correct: 'Bill Gates',
    category: 'Technology',
    explanation: 'Bill Gates and Paul Allen founded Microsoft in 1975.',
  },
  {
    question: "What does 'HTTP' stand for?",
    options: [
      'HyperText Transfer Protocol',
      'High Tech Transfer Process',
      'HyperText Technical Process',
      'High Transfer Text Protocol',
    ],
    correct: 'HyperText Transfer Protocol',
    category: 'Technology',
    explanation: 'HTTP is the foundation of data communication on the web.',
  },
  {
    question: 'In what year was the iPhone first released?',
    options: ['2005', '2006', '2007', '2008'],
    correct: '2007',
    category: 'Technology',
    explanation: 'Apple released the first iPhone on June 29, 2007.',
  },
  {
    question: 'What programming language is known for its coffee cup logo?',
    options: ['Python', 'Java', 'C++', 'Ruby'],
    correct: 'Java',
    category: 'Technology',
    explanation:
      "Java's logo is a coffee cup because it was named after Java coffee.",
  },
  {
    question: 'What company created the Android operating system?',
    options: ['Apple', 'Google', 'Microsoft', 'Samsung'],
    correct: 'Google',
    category: 'Technology',
    explanation: 'Google acquired Android Inc. in 2005 and developed the OS.',
  },
  {
    question: "What does 'AI' stand for?",
    options: [
      'Automated Intelligence',
      'Artificial Intelligence',
      'Advanced Integration',
      'Analog Interface',
    ],
    correct: 'Artificial Intelligence',
    category: 'Technology',
    explanation:
      'AI refers to machines that can perform tasks typically requiring human intelligence.',
  },
  {
    question: 'Who is known as the father of the computer?',
    options: [
      'Alan Turing',
      'Charles Babbage',
      'John von Neumann',
      'Ada Lovelace',
    ],
    correct: 'Charles Babbage',
    category: 'Technology',
    explanation: 'Babbage designed the first mechanical computer in the 1830s.',
  },
  {
    question: 'What year was Facebook founded?',
    options: ['2002', '2004', '2006', '2008'],
    correct: '2004',
    category: 'Technology',
    explanation: 'Mark Zuckerberg founded Facebook in February 2004.',
  },
  {
    question: "What does 'USB' stand for?",
    options: [
      'Universal Serial Bus',
      'United System Bridge',
      'Unified Serial Base',
      'Universal System Bus',
    ],
    correct: 'Universal Serial Bus',
    category: 'Technology',
    explanation: 'USB is a standard for connecting devices to computers.',
  },
  {
    question: 'Which company makes the PlayStation?',
    options: ['Microsoft', 'Nintendo', 'Sony', 'Sega'],
    correct: 'Sony',
    category: 'Technology',
    explanation: 'Sony released the first PlayStation in 1994.',
  },
];

export default function TriviaQuizClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'intro',
    round: 1,
    score: 0,
    totalRounds: 10,
    correctAnswers: 0,
    currentQuestion: null,
    selectedAnswer: null,
  });
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());

  const getNextQuestion = useCallback((): Question => {
    const availableQuestions = questions.filter(
      (q) => !usedQuestions.has(q.question),
    );
    const questionToUse =
      availableQuestions.length > 0
        ? availableQuestions[
            Math.floor(Math.random() * availableQuestions.length)
          ]
        : questions[Math.floor(Math.random() * questions.length)];

    setUsedQuestions((prev) => new Set([...prev, questionToUse.question]));
    return {
      ...questionToUse,
      options: [...questionToUse.options].sort(() => Math.random() - 0.5),
    };
  }, [usedQuestions]);

  const startGame = useCallback(() => {
    setUsedQuestions(new Set());
    setGameState({
      phase: 'playing',
      round: 1,
      score: 0,
      totalRounds: 10,
      correctAnswers: 0,
      currentQuestion: getNextQuestion(),
      selectedAnswer: null,
    });
  }, [getNextQuestion]);

  const handleAnswer = (answer: string) => {
    if (gameState.phase !== 'playing' || !gameState.currentQuestion) return;

    const isCorrect = answer === gameState.currentQuestion.correct;
    setGameState((prev) => ({
      ...prev,
      phase: 'feedback',
      selectedAnswer: answer,
      score: isCorrect ? prev.score + 10 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
  };

  const nextRound = () => {
    setGameState((prev) => {
      if (prev.round >= prev.totalRounds) {
        return { ...prev, phase: 'result' };
      }
      return {
        ...prev,
        phase: 'playing',
        round: prev.round + 1,
        currentQuestion: getNextQuestion(),
        selectedAnswer: null,
      };
    });
  };

  if (gameState.phase === 'intro') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Trivia Quiz</h2>

          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Topics Include:</h3>
            <div className="flex flex-wrap gap-2">
              {['Science', 'Geography', 'History', 'Art', 'Literature'].map(
                (topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                  >
                    {topic}
                  </span>
                ),
              )}
            </div>
          </div>

          <Button
            onClick={startGame}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Start Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalRounds - gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'intro' }))
        }
      />
    );
  }

  const isCorrect =
    gameState.selectedAnswer === gameState.currentQuestion?.correct;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-2xl font-bold text-blue-600">
            {gameState.round}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Question</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-2xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-violet-50 p-3 text-center dark:bg-violet-900/20">
          <div className="text-2xl font-bold text-violet-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="mb-2 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
            {gameState.currentQuestion?.category}
          </span>
        </div>

        <p className="mb-6 flex items-start justify-center gap-2 text-center text-lg font-medium">
          <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
          {gameState.currentQuestion?.question}
        </p>

        <div className="mx-auto grid max-w-md gap-3">
          {gameState.currentQuestion?.options.map((option, index) => {
            const isSelected = gameState.selectedAnswer === option;
            const isCorrectOption =
              option === gameState.currentQuestion?.correct;
            const showFeedback = gameState.phase === 'feedback';

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => handleAnswer(option)}
                disabled={gameState.phase === 'feedback'}
                className={cn(
                  'h-auto justify-start px-4 py-3 text-left',
                  showFeedback &&
                    isCorrectOption &&
                    'border-green-500 bg-green-500 text-white',
                  showFeedback &&
                    isSelected &&
                    !isCorrectOption &&
                    'border-red-500 bg-red-500 text-white',
                )}
              >
                {option}
              </Button>
            );
          })}
        </div>

        {gameState.phase === 'feedback' && (
          <div className="mt-6 text-center">
            <div
              className={cn(
                'mb-2 text-lg font-bold',
                isCorrect ? 'text-green-600' : 'text-red-600',
              )}
            >
              {isCorrect ? '✓ Correct!' : '✗ Wrong!'}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {gameState.currentQuestion?.explanation}
            </p>
            <Button
              onClick={nextRound}
              className="gap-2"
            >
              {gameState.round >= gameState.totalRounds
                ? 'See Results'
                : 'Next Question'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setGameState((prev) => ({ ...prev, phase: 'intro' }))}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
