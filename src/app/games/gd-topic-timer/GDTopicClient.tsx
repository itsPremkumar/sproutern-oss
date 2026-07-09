'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  MessageSquare,
  Play,
  RotateCcw,
  Clock,
  Shuffle,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';

const GD_TOPICS = [
  {
    topic: 'Is Work From Home the Future of Employment?',
    forPoints: [
      'Improved work-life balance',
      'Reduced commute time and cost',
      'Access to global talent pool',
      'Lower office infrastructure costs',
      'Environmental benefits (less travel)',
    ],
    againstPoints: [
      'Lack of team collaboration',
      'Difficult to monitor productivity',
      'Mental health concerns due to isolation',
      'Not suitable for all industries',
      'Cybersecurity risks',
    ],
  },
  {
    topic: 'Should AI Replace Human Jobs?',
    forPoints: [
      'Increased efficiency and productivity',
      'Handles repetitive tasks',
      'Reduces human error',
      'Creates new types of jobs',
      '24/7 availability',
    ],
    againstPoints: [
      'Mass unemployment risk',
      'Lack of emotional intelligence',
      'Ethical concerns',
      'Widening inequality gap',
      'Dependency on technology',
    ],
  },
  {
    topic: 'Social Media: Boon or Bane?',
    forPoints: [
      'Instant global connectivity',
      'Platform for small businesses',
      'Awareness and activism',
      'Educational content access',
      'Entertainment and creativity',
    ],
    againstPoints: [
      'Mental health issues',
      'Spread of misinformation',
      'Privacy concerns',
      'Cyberbullying',
      'Addiction and time wastage',
    ],
  },
  {
    topic: 'Is Higher Education Worth the Cost?',
    forPoints: [
      'Better career opportunities',
      'Higher earning potential',
      'Networking opportunities',
      'Structured learning environment',
      'Personal development',
    ],
    againstPoints: [
      'Rising education costs',
      'Student loan burden',
      'Successful entrepreneurs without degrees',
      'Outdated curriculum',
      'Skills can be learned online',
    ],
  },
  {
    topic: 'Electric Vehicles: Ready for Mass Adoption?',
    forPoints: [
      'Zero direct emissions',
      'Lower long-term operating costs',
      'Government incentives',
      'Advancing battery technology',
      'Reduced oil dependency',
    ],
    againstPoints: [
      'High initial cost',
      'Limited charging infrastructure',
      'Range anxiety',
      'Battery disposal concerns',
      'Electricity grid capacity',
    ],
  },
  {
    topic: 'Should Startups Be Valued Over Stable Jobs?',
    forPoints: [
      'Higher growth potential',
      'Learning diverse skills',
      'Direct impact visibility',
      'Equity and ownership',
      'Innovation culture',
    ],
    againstPoints: [
      'High failure rate',
      'Financial instability',
      'Long working hours',
      'Lack of structured processes',
      'Limited benefits',
    ],
  },
];

export default function GDTopicClient() {
  const [gameState, setGameState] = useState<
    'select' | 'prep' | 'speaking' | 'done'
  >('select');
  const [currentTopic, setCurrentTopic] = useState(GD_TOPICS[0]);
  const [prepTime, setPrepTime] = useState(60);
  const [speakTime, setSpeakTime] = useState(120);
  const [showPoints, setShowPoints] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'prep' && prepTime > 0) {
      timer = setTimeout(() => setPrepTime((t) => t - 1), 1000);
    } else if (gameState === 'prep' && prepTime === 0) {
      setGameState('speaking');
    }
    if (gameState === 'speaking' && speakTime > 0) {
      timer = setTimeout(() => setSpeakTime((t) => t - 1), 1000);
    } else if (gameState === 'speaking' && speakTime === 0) {
      setGameState('done');
    }
    return () => clearTimeout(timer);
  }, [gameState, prepTime, speakTime]);

  const selectRandom = () => {
    const random = GD_TOPICS[Math.floor(Math.random() * GD_TOPICS.length)];
    setCurrentTopic(random);
  };

  const startPrep = () => {
    setPrepTime(60);
    setSpeakTime(120);
    setShowPoints(false);
    setGameState('prep');
  };

  const skipToSpeak = () => {
    setGameState('speaking');
  };

  const restart = () => {
    setGameState('select');
    setShowPoints(false);
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">GD Topic Timer</h2>
        <p className="text-muted-foreground">
          Practice Group Discussion with timed prep and speaking phases.
        </p>
      </div>

      {gameState === 'select' && (
        <Card className="border-2">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Select a Topic</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={selectRandom}
              >
                <Shuffle className="mr-2 h-4 w-4" /> Random
              </Button>
            </div>

            <div className="mb-8 grid gap-3">
              {GD_TOPICS.map((t, i) => (
                <Button
                  key={i}
                  variant={
                    currentTopic.topic === t.topic ? 'default' : 'outline'
                  }
                  className="h-auto justify-start py-4 text-left"
                  onClick={() => setCurrentTopic(t)}
                >
                  {t.topic}
                </Button>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={startPrep}
            >
              <Play className="mr-2 h-5 w-5" /> Start with "
              {currentTopic.topic.slice(0, 30)}..."
            </Button>
          </CardContent>
        </Card>
      )}

      {(gameState === 'prep' || gameState === 'speaking') && (
        <Card className="overflow-hidden border-2">
          <div
            className={`p-6 text-center ${gameState === 'prep' ? 'bg-blue-50 dark:bg-blue-950' : 'bg-green-50 dark:bg-green-950'}`}
          >
            <Badge className="mb-2">
              {gameState === 'prep' ? 'PREPARATION PHASE' : 'SPEAKING PHASE'}
            </Badge>
            <h3 className="mb-4 text-2xl font-bold">{currentTopic.topic}</h3>
            <div className="flex items-center justify-center gap-3 font-mono text-4xl font-bold">
              <Clock className="h-8 w-8" />
              {formatTime(gameState === 'prep' ? prepTime : speakTime)}
            </div>
            <Progress
              value={
                ((gameState === 'prep' ? prepTime : speakTime) /
                  (gameState === 'prep' ? 60 : 120)) *
                100
              }
              className="mt-4 h-2"
            />
          </div>

          <CardContent className="p-6">
            {gameState === 'prep' && (
              <div className="text-center">
                <p className="mb-4 text-muted-foreground">
                  Organize your thoughts. Timer will auto-advance to speaking
                  phase.
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowPoints(!showPoints)}
                  >
                    <Lightbulb className="mr-2 h-4 w-4" />{' '}
                    {showPoints ? 'Hide' : 'Show'} Key Points
                  </Button>
                  <Button onClick={skipToSpeak}>Skip to Speaking</Button>
                </div>
              </div>
            )}

            {gameState === 'speaking' && (
              <div className="text-center">
                <p className="mb-4 text-lg font-medium text-green-700 dark:text-green-400">
                  Speak now! Present your arguments clearly.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setShowPoints(!showPoints)}
                >
                  <Lightbulb className="mr-2 h-4 w-4" />{' '}
                  {showPoints ? 'Hide' : 'Show'} Key Points
                </Button>
              </div>
            )}

            {showPoints && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="mb-3 flex items-center gap-2 font-bold text-green-700">
                    <CheckCircle className="h-4 w-4" /> Points FOR
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {currentTopic.forPoints.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border bg-red-50 p-4 dark:bg-red-900/20">
                  <h4 className="mb-3 font-bold text-red-700">
                    Points AGAINST
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {currentTopic.againstPoints.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {gameState === 'done' && (
        <Card className="border-2">
          <CardContent className="py-16 text-center">
            <MessageSquare className="mx-auto mb-6 h-20 w-20 text-green-500" />
            <h3 className="mb-4 text-3xl font-bold">Great Practice!</h3>
            <p className="mb-8 text-muted-foreground">
              Review your performance and try another topic.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={restart}
              >
                <RotateCcw className="mr-2 h-4 w-4" /> New Topic
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
