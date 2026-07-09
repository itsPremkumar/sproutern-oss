'use client';

import { useState, useEffect, useCallback } from 'react';
import { Clock, Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GameTimerProps {
  initialTime: number; // in seconds
  onTimeUp?: () => void;
  onTick?: (timeLeft: number) => void;
  autoStart?: boolean;
  showControls?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GameTimer({
  initialTime,
  onTimeUp,
  onTick,
  autoStart = false,
  showControls = true,
  className,
  size = 'md',
}: GameTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [hasStarted, setHasStarted] = useState(autoStart);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const reset = useCallback(() => {
    setTimeLeft(initialTime);
    setIsRunning(false);
    setHasStarted(false);
  }, [initialTime]);

  const start = useCallback(() => {
    setIsRunning(true);
    setHasStarted(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const toggle = useCallback(() => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }, [isRunning, pause, start]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          onTick?.(newTime);
          if (newTime <= 0) {
            setIsRunning(false);
            onTimeUp?.();
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onTimeUp, onTick]);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const percentage = (timeLeft / initialTime) * 100;
  const isLow = percentage <= 20;
  const isWarning = percentage <= 50 && percentage > 20;

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      {/* Timer display */}
      <div
        className={cn(
          'flex items-center gap-2 rounded-xl px-4 py-2 font-mono font-bold transition-colors',
          sizeClasses[size],
          isLow
            ? 'animate-pulse bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
            : isWarning
              ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
              : 'bg-primary/10 text-primary',
        )}
      >
        <Clock className={cn('h-5 w-5', size === 'lg' && 'h-8 w-8')} />
        {formatTime(timeLeft)}
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-1000',
            isLow ? 'bg-red-500' : isWarning ? 'bg-yellow-500' : 'bg-primary',
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
          >
            {isRunning ? (
              <>
                <Pause className="mr-1 h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-1 h-4 w-4" />{' '}
                {hasStarted ? 'Resume' : 'Start'}
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={reset}
          >
            <RotateCcw className="mr-1 h-4 w-4" /> Reset
          </Button>
        </div>
      )}
    </div>
  );
}

// Export timer controls for external use
export interface TimerControls {
  start: () => void;
  pause: () => void;
  reset: () => void;
  toggle: () => void;
}
