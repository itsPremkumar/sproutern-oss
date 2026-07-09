'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Play,
  Pause,
  RotateCcw,
  Coffee,
  Brain,
  Volume2,
  VolumeX,
  Settings,
} from 'lucide-react';

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

interface SessionStats {
  focusSessions: number;
  totalFocusMinutes: number;
  totalBreakMinutes: number;
  currentStreak: number;
}

const TIMER_PRESETS = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

const SOUND_OPTIONS = [
  { id: 'none', name: 'No Sound', emoji: '🔇' },
  { id: 'tick', name: 'Soft Tick', emoji: '⏱️' },
  { id: 'rain', name: 'Rain', emoji: '🌧️' },
  { id: 'cafe', name: 'Cafe', emoji: '☕' },
  { id: 'forest', name: 'Forest', emoji: '🌲' },
];

export function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(TIMER_PRESETS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [stats, setStats] = useState<SessionStats>({
    focusSessions: 0,
    totalFocusMinutes: 0,
    totalBreakMinutes: 0,
    currentStreak: 0,
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedSound, setSelectedSound] = useState('none');
  const [showSettings, setShowSettings] = useState(false);
  const [customFocus, setCustomFocus] = useState(25);
  const [customShortBreak, setCustomShortBreak] = useState(5);
  const [customLongBreak, setCustomLongBreak] = useState(15);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('pomodoroStats');
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) {
        console.error('Failed to load stats');
      }
    }
  }, []);

  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoroStats', JSON.stringify(stats));
  }, [stats]);

  const switchMode = useCallback(
    (newMode: TimerMode) => {
      setMode(newMode);
      setIsRunning(false);
      const presets = {
        focus: customFocus * 60,
        shortBreak: customShortBreak * 60,
        longBreak: customLongBreak * 60,
      };
      setTimeLeft(presets[newMode]);
    },
    [customFocus, customShortBreak, customLongBreak],
  );

  const handleTimerComplete = useCallback(() => {
    setIsRunning(false);

    // Play completion sound
    if (soundEnabled) {
      try {
        const audio = new Audio('/sounds/bell.mp3');
        audio.play().catch(() => {
          /* Ignore autoplay errors */
        });
      } catch {
        // Ignore audio errors
      }
    }

    // Update stats
    if (mode === 'focus') {
      setStats((prev) => ({
        ...prev,
        focusSessions: prev.focusSessions + 1,
        totalFocusMinutes:
          prev.totalFocusMinutes + Math.floor(TIMER_PRESETS.focus / 60),
        currentStreak: prev.currentStreak + 1,
      }));

      // Auto-switch to break after focus session
      if ((stats.focusSessions + 1) % 4 === 0) {
        switchMode('longBreak');
      } else {
        switchMode('shortBreak');
      }
    } else {
      setStats((prev) => ({
        ...prev,
        totalBreakMinutes:
          prev.totalBreakMinutes +
          Math.floor(
            mode === 'shortBreak'
              ? TIMER_PRESETS.shortBreak / 60
              : TIMER_PRESETS.longBreak / 60,
          ),
      }));
      switchMode('focus');
    }

    // Show notification if supported
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(
        mode === 'focus'
          ? 'Focus session complete! Take a break.'
          : 'Break over! Ready to focus?',
      );
    }
  }, [mode, soundEnabled, stats.focusSessions, switchMode]);

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, handleTimerComplete]);

  const toggleTimer = () => {
    if (
      !isRunning &&
      'Notification' in window &&
      Notification.permission === 'default'
    ) {
      Notification.requestPermission();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    const presets = {
      focus: customFocus * 60,
      shortBreak: customShortBreak * 60,
      longBreak: customLongBreak * 60,
    };
    setTimeLeft(presets[mode]);
  };

  const resetStats = () => {
    setStats({
      focusSessions: 0,
      totalFocusMinutes: 0,
      totalBreakMinutes: 0,
      currentStreak: 0,
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = () => {
    const total =
      mode === 'focus'
        ? customFocus * 60
        : mode === 'shortBreak'
          ? customShortBreak * 60
          : customLongBreak * 60;
    return ((total - timeLeft) / total) * 100;
  };

  const getModeColor = () => {
    switch (mode) {
      case 'focus':
        return 'text-red-500';
      case 'shortBreak':
        return 'text-green-500';
      case 'longBreak':
        return 'text-blue-500';
    }
  };

  const getModeBgColor = () => {
    switch (mode) {
      case 'focus':
        return 'bg-red-500';
      case 'shortBreak':
        return 'bg-green-500';
      case 'longBreak':
        return 'bg-blue-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex justify-center gap-2">
        <Button
          variant={mode === 'focus' ? 'default' : 'outline'}
          onClick={() => switchMode('focus')}
          className="gap-2"
        >
          <Brain className="h-4 w-4" />
          Focus
        </Button>
        <Button
          variant={mode === 'shortBreak' ? 'default' : 'outline'}
          onClick={() => switchMode('shortBreak')}
          className="gap-2"
        >
          <Coffee className="h-4 w-4" />
          Short Break
        </Button>
        <Button
          variant={mode === 'longBreak' ? 'default' : 'outline'}
          onClick={() => switchMode('longBreak')}
          className="gap-2"
        >
          <Coffee className="h-4 w-4" />
          Long Break
        </Button>
      </div>

      {/* Timer Display */}
      <Card className="overflow-hidden">
        <div className="h-2 bg-muted">
          <div
            className={`h-full ${getModeBgColor()} transition-all duration-1000`}
            style={{ width: `${progress()}%` }}
          />
        </div>
        <CardContent className="pb-8 pt-8 text-center">
          <p className={`font-mono text-8xl font-bold ${getModeColor()}`}>
            {formatTime(timeLeft)}
          </p>
          <p className="mt-2 capitalize text-muted-foreground">
            {mode === 'focus'
              ? '🎯 Focus Time'
              : mode === 'shortBreak'
                ? '☕ Short Break'
                : '🌴 Long Break'}
          </p>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={toggleTimer}
          className="w-32 gap-2"
        >
          {isRunning ? (
            <>
              <Pause className="h-5 w-5" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-5 w-5" />
              Start
            </>
          )}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={resetTimer}
          className="gap-2"
        >
          <RotateCcw className="h-5 w-5" />
          Reset
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => setSoundEnabled(!soundEnabled)}
        >
          {soundEnabled ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => setShowSettings(!showSettings)}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Timer Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Focus (min)</label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={customFocus}
                  onChange={(e) => setCustomFocus(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Short Break (min)</label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={customShortBreak}
                  onChange={(e) => setCustomShortBreak(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Long Break (min)</label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={customLongBreak}
                  onChange={(e) => setCustomLongBreak(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>
            </div>
            <Button
              onClick={resetTimer}
              className="w-full"
            >
              Apply Settings
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-primary">
              {stats.focusSessions}
            </p>
            <p className="text-sm text-muted-foreground">Sessions Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-green-600">
              {stats.totalFocusMinutes}
            </p>
            <p className="text-sm text-muted-foreground">Focus Minutes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-blue-600">
              {stats.totalBreakMinutes}
            </p>
            <p className="text-sm text-muted-foreground">Break Minutes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-orange-600">
              {stats.currentStreak}🔥
            </p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </CardContent>
        </Card>
      </div>

      {/* Reset Stats Button */}
      <div className="text-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={resetStats}
        >
          Reset Statistics
        </Button>
      </div>
    </div>
  );
}
