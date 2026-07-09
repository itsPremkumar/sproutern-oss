'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Flame,
  Calendar,
  Clock,
  TrendingUp,
  Plus,
  RotateCcw,
  Trophy,
} from 'lucide-react';

interface DayLog {
  date: string;
  hours: number;
}

export default function StudyTrackerClient() {
  const [logs, setLogs] = useState<DayLog[]>([]);
  const [todayHours, setTodayHours] = useState<string>('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const today = new Date().toISOString().split('T')[0];

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('study-tracker-logs');
    if (saved) {
      const parsed = JSON.parse(saved);
      setLogs(parsed);
      calculateStreaks(parsed);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (logs.length > 0) {
      localStorage.setItem('study-tracker-logs', JSON.stringify(logs));
    }
  }, [logs]);

  const calculateStreaks = (logData: DayLog[]) => {
    if (logData.length === 0) {
      setCurrentStreak(0);
      setLongestStreak(0);
      return;
    }

    // Sort logs by date
    const sortedLogs = [...logData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    // Calculate current streak
    let streak = 0;
    const checkDate = new Date();

    for (let i = 0; i < sortedLogs.length; i++) {
      const logDate = new Date(sortedLogs[i].date);
      const expectedDate = new Date(checkDate);
      expectedDate.setDate(expectedDate.getDate() - i);

      if (
        logDate.toDateString() === expectedDate.toDateString() &&
        sortedLogs[i].hours > 0
      ) {
        streak++;
      } else if (
        i === 0 &&
        logDate.toDateString() !== expectedDate.toDateString()
      ) {
        // Allow if today's log is missing but yesterday's exists
        const yesterday = new Date(checkDate);
        yesterday.setDate(yesterday.getDate() - 1);
        if (
          logDate.toDateString() === yesterday.toDateString() &&
          sortedLogs[i].hours > 0
        ) {
          streak++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    setCurrentStreak(streak);

    // Calculate longest streak
    let maxStreak = 0;
    let tempStreak = 0;
    const sortedAsc = [...logData].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    for (let i = 0; i < sortedAsc.length; i++) {
      if (sortedAsc[i].hours > 0) {
        if (i === 0) {
          tempStreak = 1;
        } else {
          const prevDate = new Date(sortedAsc[i - 1].date);
          const currDate = new Date(sortedAsc[i].date);
          const diffDays = Math.floor(
            (currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24),
          );
          if (diffDays === 1) {
            tempStreak++;
          } else {
            tempStreak = 1;
          }
        }
        maxStreak = Math.max(maxStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    }
    setLongestStreak(maxStreak);
  };

  const logHours = () => {
    const hours = parseFloat(todayHours);
    if (isNaN(hours) || hours < 0 || hours > 24) return;

    const existingIndex = logs.findIndex((l) => l.date === today);
    let newLogs: DayLog[];

    if (existingIndex >= 0) {
      newLogs = logs.map((l, i) =>
        i === existingIndex ? { ...l, hours: l.hours + hours } : l,
      );
    } else {
      newLogs = [...logs, { date: today, hours }];
    }

    setLogs(newLogs);
    calculateStreaks(newLogs);
    setTodayHours('');
  };

  const resetData = () => {
    setLogs([]);
    setCurrentStreak(0);
    setLongestStreak(0);
    localStorage.removeItem('study-tracker-logs');
  };

  const getTodayTotal = () => {
    const todayLog = logs.find((l) => l.date === today);
    return todayLog?.hours || 0;
  };

  const getWeekTotal = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return logs
      .filter((l) => new Date(l.date) >= weekAgo)
      .reduce((sum, l) => sum + l.hours, 0);
  };

  const getMonthTotal = () => {
    const monthAgo = new Date();
    monthAgo.setDate(monthAgo.getDate() - 30);
    return logs
      .filter((l) => new Date(l.date) >= monthAgo)
      .reduce((sum, l) => sum + l.hours, 0);
  };

  // Generate calendar data for last 12 weeks
  const generateCalendarData = () => {
    const weeks: (DayLog | null)[][] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 83); // ~12 weeks
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from Sunday

    for (let week = 0; week < 12; week++) {
      const weekData: (DayLog | null)[] = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + week * 7 + day);
        const dateStr = date.toISOString().split('T')[0];

        if (date > today) {
          weekData.push(null);
        } else {
          const log = logs.find((l) => l.date === dateStr);
          weekData.push(log || { date: dateStr, hours: 0 });
        }
      }
      weeks.push(weekData);
    }
    return weeks;
  };

  const getHeatmapColor = (hours: number) => {
    if (hours === 0) return 'bg-muted';
    if (hours < 1) return 'bg-green-200 dark:bg-green-900';
    if (hours < 2) return 'bg-green-300 dark:bg-green-800';
    if (hours < 4) return 'bg-green-400 dark:bg-green-700';
    if (hours < 6) return 'bg-green-500 dark:bg-green-600';
    return 'bg-green-600 dark:bg-green-500';
  };

  const calendarData = generateCalendarData();
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today</p>
                <p className="text-2xl font-bold">
                  {getTodayTotal().toFixed(1)}h
                </p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold">
                  {getWeekTotal().toFixed(1)}h
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold">{currentStreak} days</p>
              </div>
              <Flame className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Best Streak</p>
                <p className="text-2xl font-bold">{longestStreak} days</p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Log Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Log Study Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              type="number"
              placeholder="Hours studied today"
              min="0"
              max="24"
              step="0.5"
              value={todayHours}
              onChange={(e) => setTodayHours(e.target.value)}
              className="max-w-xs"
            />
            <Button onClick={logHours}>
              <Plus className="mr-2 h-4 w-4" />
              Add Hours
            </Button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            You&apos;ve logged {getTodayTotal().toFixed(1)} hours today
          </p>
        </CardContent>
      </Card>

      {/* Heatmap Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Activity Calendar (Last 12 Weeks)
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={resetData}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="flex gap-1">
              {/* Day labels */}
              <div className="flex flex-col gap-1 pr-2">
                {dayLabels.map((day, i) => (
                  <div
                    key={i}
                    className="flex h-4 w-4 items-center text-xs text-muted-foreground"
                  >
                    {i % 2 === 1 ? day : ''}
                  </div>
                ))}
              </div>
              {/* Calendar grid */}
              {calendarData.map((week, weekIdx) => (
                <div
                  key={weekIdx}
                  className="flex flex-col gap-1"
                >
                  {week.map((day, dayIdx) => (
                    <div
                      key={dayIdx}
                      className={`h-4 w-4 rounded-sm ${
                        day === null
                          ? 'bg-transparent'
                          : getHeatmapColor(day.hours)
                      }`}
                      title={
                        day
                          ? `${day.date}: ${day.hours.toFixed(1)} hours`
                          : 'Future date'
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Legend */}
          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="h-4 w-4 rounded-sm bg-muted" />
            <div className="h-4 w-4 rounded-sm bg-green-200 dark:bg-green-900" />
            <div className="h-4 w-4 rounded-sm bg-green-300 dark:bg-green-800" />
            <div className="h-4 w-4 rounded-sm bg-green-400 dark:bg-green-700" />
            <div className="h-4 w-4 rounded-sm bg-green-500 dark:bg-green-600" />
            <div className="h-4 w-4 rounded-sm bg-green-600 dark:bg-green-500" />
            <span>More</span>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-muted/50 p-4 text-center">
              <p className="text-3xl font-bold text-primary">
                {getMonthTotal().toFixed(1)}h
              </p>
              <p className="text-sm text-muted-foreground">Last 30 Days</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4 text-center">
              <p className="text-3xl font-bold text-primary">
                {(getMonthTotal() / 30).toFixed(1)}h
              </p>
              <p className="text-sm text-muted-foreground">Daily Average</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4 text-center">
              <p className="text-3xl font-bold text-primary">{logs.length}</p>
              <p className="text-sm text-muted-foreground">Days Logged</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
