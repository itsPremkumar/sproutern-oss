'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  RefreshCw,
  Play,
  RotateCcw,
  Trophy,
  Keyboard,
  Timer,
  Zap,
  CheckCircle2,
  AlertCircle,
  Share2,
  Crown,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Pre-defined text samples
const TEXT_SAMPLES = {
  sentences: [
    'The quick brown fox jumps over the lazy dog.',
    'Pack my box with five dozen liquor jugs.',
    'How vexingly quick daft zebras jump!',
    'Sphinx of black quartz, judge my vow.',
    'Two driven jocks help fax my big quiz.',
    "A wizard's job is to vex chumps quickly in fog.",
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'In the middle of difficulty lies opportunity.',
    'The only way to do great work is to love what you do.',
  ],
  code: [
    'const [count, setCount] = useState(0);',
    'function binarySearch(arr, target) { let l = 0, r = arr.length - 1; }',
    "import { useEffect } from 'react'; export default function App() {}",
    'for (let i = 0; i < array.length; i++) { console.log(array[i]); }',
    'if (user.isAdmin && user.isLoggedIn) { return <AdminPanel />; }',
    "const data = await fetch('/api/user').then(res => res.json());",
    'arr.filter(x => x > 10).map(x => x * 2).reduce((a, b) => a + b, 0);',
    "public static void main(String[] args) { System.out.println('Hello'); }",
    'SELECT * FROM users WHERE active = 1 ORDER BY created_at DESC;',
    'const handleSubmit = async (e: FormEvent) => { e.preventDefault(); };',
    "interface User { id: string; name: string; email: string; role: 'admin' | 'user'; }",
    'export const getServerSideProps: GetServerSideProps = async (ctx) => { return { props: {} }; };',
    'const router = useRouter(); const { id } = router.query;',
    "app.get('/api/users/:id', async (req, res) => { const user = await User.findById(req.params.id); });",
    'try { const result = await Promise.all(promises); } catch (err) { console.error(err); }',
  ],
  words: [
    'algorithm',
    'complexity',
    'database',
    'frontend',
    'backend',
    'deployment',
    'interface',
    'variable',
    'constant',
    'function',
    'parameter',
    'argument',
    'network',
    'security',
    'protocol',
    'framework',
    'library',
    'dependency',
    'asynchronous',
    'synchronous',
    'promise',
    'callback',
    'recursion',
    'iteration',
    'middleware',
    'component',
    'typescript',
    'javascript',
    'kubernetes',
    'microservice',
  ],
  paragraphs: [
    'Software development is a discipline that combines problem-solving, creativity, and technical expertise. Modern developers must master not only programming languages but also frameworks, tools, and best practices that evolve rapidly. The ability to write clean, maintainable code is what separates great developers from good ones.',
    'In the world of competitive programming, speed and accuracy are paramount. Contestants must analyze problems quickly, identify the correct algorithm or data structure, and implement solutions under strict time constraints. Practice with typing tests helps build the muscle memory needed for rapid code entry during these competitions.',
    'Cloud computing has revolutionized how applications are built, deployed, and scaled. Services like AWS, Azure, and Google Cloud provide infrastructure on demand, allowing startups and enterprises alike to focus on building features rather than managing servers. Understanding containerization with Docker and orchestration with Kubernetes has become essential.',
    'The best engineers are not those who write the most code but those who solve problems most effectively. Sometimes the best solution is to delete code, simplify architecture, or choose a well-maintained library instead of building from scratch. Technical decision-making requires balancing trade-offs between performance, maintainability, and delivery speed.',
  ],
};

type Mode = 'sentences' | 'code' | 'words' | 'paragraphs';
type Duration = 30 | 60 | 120;

interface PersonalBest {
  wpm: number;
  accuracy: number;
  mode: Mode;
  duration: Duration;
  date: string;
}

const STORAGE_KEY = 'sproutern-typing-speed-pb';

function getPersonalBest(): PersonalBest | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function savePersonalBest(pb: PersonalBest) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pb));
  } catch {
    // Ignore storage errors
  }
}

export default function TypingSpeedClient() {
  const [mode, setMode] = useState<Mode>('sentences');
  const [duration, setDuration] = useState<Duration>(60);
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start',
  );
  const [charStatuses, setCharStatuses] = useState<
    ('correct' | 'incorrect' | 'pending')[]
  >([]);
  const [personalBest, setPersonalBest] = useState<PersonalBest | null>(null);
  const [isNewPB, setIsNewPB] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  // Refs for tracking
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const timeLeftRef = useRef(60);

  // Load personal best on mount
  useEffect(() => {
    setPersonalBest(getPersonalBest());
  }, []);

  // Sync timeLeft to ref for use in endGame callback
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  // Initialize Game
  const startGame = useCallback(() => {
    // Generate Text
    let newText = '';
    if (mode === 'words') {
      newText = [...TEXT_SAMPLES.words]
        .sort(() => 0.5 - Math.random())
        .slice(0, 20)
        .join(' ');
    } else if (mode === 'paragraphs') {
      const samples = TEXT_SAMPLES.paragraphs;
      newText = samples[Math.floor(Math.random() * samples.length)];
    } else {
      const samples = TEXT_SAMPLES[mode];
      newText = samples[Math.floor(Math.random() * samples.length)];
    }

    setText(newText);
    setInput('');
    setIsActive(true);
    setTimeLeft(duration);
    timeLeftRef.current = duration;
    setGameState('playing');
    setCharStatuses(new Array(newText.length).fill('pending'));
    setIsNewPB(false);
    setShareMessage('');

    // Focus input
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [mode, duration]);

  // End Game Calculation
  const endGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('end');
    setIsActive(false);

    // Use ref for current timeLeft value
    const currentTimeLeft = timeLeftRef.current;

    setInput((currentInput) => {
      setText((currentText) => {
        // Calculate Stats
        const timeSpent = duration - currentTimeLeft;
        const wordsTyped = currentInput.length / 5;
        const calculatedWpm =
          timeSpent > 0 ? Math.round((wordsTyped / timeSpent) * 60) : 0;

        // Accuracy
        let correctChars = 0;
        for (let i = 0; i < currentInput.length; i++) {
          if (currentInput[i] === currentText[i]) correctChars++;
        }
        const calculatedAccuracy =
          currentInput.length > 0
            ? Math.round((correctChars / currentInput.length) * 100)
            : 0;

        setWpm(calculatedWpm);
        setAccuracy(calculatedAccuracy);

        // Check personal best
        const currentPB = getPersonalBest();
        if (!currentPB || calculatedWpm > currentPB.wpm) {
          const newPB: PersonalBest = {
            wpm: calculatedWpm,
            accuracy: calculatedAccuracy,
            mode,
            duration,
            date: new Date().toISOString(),
          };
          savePersonalBest(newPB);
          setPersonalBest(newPB);
          setIsNewPB(true);
        }

        return currentText;
      });
      return currentInput;
    });
  }, [duration, mode]);

  // Handle Input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);

    // Calculate accuracy and char statuses
    const statuses = text.split('').map((char, index) => {
      if (index >= val.length) return 'pending';
      return val[index] === char ? 'correct' : 'incorrect';
    });
    setCharStatuses(statuses as ('correct' | 'incorrect' | 'pending')[]);

    // Check completion
    if (val === text) {
      endGame();
    }
  };

  // Timer Logic
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, endGame]);

  // Reset
  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('start');
    setInput('');
    setText('');
    setWpm(0);
    setAccuracy(100);
    setTimeLeft(duration);
    setIsNewPB(false);
    setShareMessage('');
  };

  // Share results
  const shareResults = async () => {
    const text = `🎯 Typing Speed Test Results\n⚡ ${wpm} WPM | ✅ ${accuracy}% Accuracy\n🎮 Mode: ${mode} | ⏱️ ${duration}s\n\nTest your typing speed at sproutern.com/games/typing-speed`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Typing Speed', text });
        setShareMessage('Shared!');
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(text);
      setShareMessage('Copied to clipboard!');
    }
    setTimeout(() => setShareMessage(''), 3000);
  };

  const durations: Duration[] = [30, 60, 120];
  const modes: { key: Mode; label: string; icon?: typeof Zap }[] = [
    { key: 'sentences', label: 'Sentences' },
    { key: 'code', label: 'Code', icon: Zap },
    { key: 'words', label: 'Words' },
    { key: 'paragraphs', label: 'Paragraphs' },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Speed Typer Pro</h2>
        <p className="text-muted-foreground">
          Test your typing speed with coding syntax, sentences, and paragraphs.
        </p>
      </div>

      {/* Personal Best Badge */}
      {personalBest && (
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="gap-2 border-yellow-300 bg-yellow-50 px-4 py-2 text-sm text-yellow-700 dark:border-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
          >
            <Crown className="h-4 w-4" />
            Personal Best: {personalBest.wpm} WPM ({personalBest.accuracy}%
            accuracy)
          </Badge>
        </div>
      )}

      {/* Mode Selection */}
      <div className="flex flex-wrap justify-center gap-3">
        {modes.map(({ key, label, icon: Icon }) => (
          <Button
            key={key}
            variant={mode === key ? 'default' : 'outline'}
            onClick={() => setMode(key)}
            disabled={gameState === 'playing'}
            size="sm"
          >
            {Icon && <Icon className="mr-1.5 h-4 w-4" />}
            {label}
          </Button>
        ))}
      </div>

      {/* Duration Selection */}
      <div className="flex justify-center gap-3">
        {durations.map((d) => (
          <Button
            key={d}
            variant={duration === d ? 'default' : 'outline'}
            onClick={() => {
              setDuration(d);
              setTimeLeft(d);
            }}
            disabled={gameState === 'playing'}
            size="sm"
            className="min-w-[70px]"
          >
            <Clock className="mr-1.5 h-3.5 w-3.5" />
            {d}s
          </Button>
        ))}
      </div>

      {/* Game Area */}
      <Card className="overflow-hidden border-2 shadow-lg">
        <CardContent className="p-8">
          {gameState === 'start' && (
            <div className="py-12 text-center">
              <Keyboard className="mx-auto mb-6 h-20 w-20 text-primary opacity-20" />
              <h3 className="mb-4 text-2xl font-bold">Ready to type?</h3>
              <p className="mb-2 text-muted-foreground">
                Mode: <strong>{mode}</strong> | Duration:{' '}
                <strong>{duration}s</strong>
              </p>
              <p className="mb-8 text-sm text-muted-foreground">
                Select a mode and duration above, then press start.
              </p>
              <Button
                size="lg"
                onClick={startGame}
                className="text-lg"
              >
                <Play className="mr-2 h-5 w-5" /> Start Test
              </Button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="space-y-6">
              {/* Stats Bar */}
              <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-primary" />
                  <span
                    className={`font-mono text-xl font-bold ${timeLeft <= 10 ? 'animate-pulse text-red-500' : ''}`}
                  >
                    {timeLeft}s
                  </span>
                </div>
                <Progress
                  value={(timeLeft / duration) * 100}
                  className="mx-4 h-2 w-full max-w-xs"
                />
                <div className="font-mono text-sm text-muted-foreground">
                  {Math.round(
                    (input.length / 5 / (duration - timeLeft || 1)) * 60,
                  )}{' '}
                  WPM
                </div>
              </div>

              {/* Text Display */}
              <div className="relative min-h-[100px] rounded-xl border bg-card p-6 text-xl leading-relaxed tracking-wide shadow-inner">
                {text.split('').map((char, i) => (
                  <span
                    key={i}
                    className={` ${i === input.length ? 'bg-primary/20 ring-2 ring-primary' : ''} ${charStatuses[i] === 'correct' ? 'text-green-600 dark:text-green-400' : ''} ${charStatuses[i] === 'incorrect' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : ''} ${charStatuses[i] === 'pending' ? 'text-muted-foreground' : ''} rounded px-[1px] transition-colors`}
                  >
                    {char}
                  </span>
                ))}
              </div>

              {/* Hidden Input field specifically for typing capture */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInput}
                className="absolute opacity-0"
                autoFocus
              />

              {/* Reset Button (during game) */}
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetGame}
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> Restart
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Start typing immediately...
              </p>
            </div>
          )}

          {gameState === 'end' && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8 inline-block rounded-full bg-yellow-100 p-6 dark:bg-yellow-900/20"
              >
                <Trophy className="h-16 w-16 text-yellow-600 dark:text-yellow-500" />
              </motion.div>

              {isNewPB && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mb-4"
                >
                  <Badge className="gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-sm font-bold text-white">
                    <Crown className="h-4 w-4" />
                    New Personal Best!
                  </Badge>
                </motion.div>
              )}

              <h3 className="mb-2 text-3xl font-bold">Test Complete!</h3>
              <p className="mb-8 text-muted-foreground">
                Here is how you performed ({mode} mode, {duration}s)
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-sm font-medium text-muted-foreground">
                      Speed
                    </p>
                    <p className="text-4xl font-black text-primary">
                      {wpm}{' '}
                      <span className="text-lg text-muted-foreground">WPM</span>
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10">
                  <CardContent className="pt-6">
                    <p className="text-sm font-medium text-muted-foreground">
                      Accuracy
                    </p>
                    <p className="text-4xl font-black text-green-600">
                      {accuracy}%
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={startGame}
                  size="lg"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Try Again
                </Button>
                <Button
                  onClick={shareResults}
                  variant="outline"
                  size="lg"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  {shareMessage || 'Share Score'}
                </Button>
                <Button
                  onClick={() =>
                    setMode(mode === 'code' ? 'sentences' : 'code')
                  }
                  variant="outline"
                  size="lg"
                >
                  Change Mode
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tips Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center gap-2 font-semibold">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Touch Typing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use all 10 fingers. Don&apos;t look at the keyboard. It&apos;s
              slower at first but much faster later.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center gap-2 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Accuracy First</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Don&apos;t rush. Speed comes naturally when your fingers stop
              making mistakes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center gap-2 font-semibold">
              <AlertCircle className="h-4 w-4 text-blue-500" />
              <span>Posture</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Keep your back straight and wrists floating above the keyboard,
              not resting on it.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
