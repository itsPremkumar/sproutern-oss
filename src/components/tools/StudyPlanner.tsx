'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Plus,
  Trash2,
  Check,
  Calendar,
  Clock,
  Target,
  Flame,
  Trophy,
  BookOpen,
} from 'lucide-react';

interface StudyTask {
  id: string;
  subject: string;
  topic: string;
  duration: number; // minutes
  completed: boolean;
  date: string;
}

interface StudyGoal {
  id: string;
  title: string;
  targetHours: number;
  currentHours: number;
  deadline: string;
}

interface DailyStats {
  date: string;
  minutesStudied: number;
  tasksCompleted: number;
}

export function StudyPlanner() {
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [goals, setGoals] = useState<StudyGoal[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [streak, setStreak] = useState(0);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);

  // Form states
  const [newSubject, setNewSubject] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [newDuration, setNewDuration] = useState(30);
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalHours, setNewGoalHours] = useState(10);
  const [newGoalDeadline, setNewGoalDeadline] = useState('');

  const today = new Date().toISOString().split('T')[0];

  // Load from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('studyTasks');
    const savedGoals = localStorage.getItem('studyGoals');
    const savedStats = localStorage.getItem('studyDailyStats');
    const savedStreak = localStorage.getItem('studyStreak');

    if (savedTasks) setTasks(JSON.parse(savedTasks));
    if (savedGoals) setGoals(JSON.parse(savedGoals));
    if (savedStats) setDailyStats(JSON.parse(savedStats));
    if (savedStreak) setStreak(JSON.parse(savedStreak));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('studyTasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('studyGoals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem('studyDailyStats', JSON.stringify(dailyStats));
  }, [dailyStats]);

  useEffect(() => {
    localStorage.setItem('studyStreak', JSON.stringify(streak));
  }, [streak]);

  // Calculate streak
  useEffect(() => {
    const calculateStreak = () => {
      let currentStreak = 0;
      const sortedStats = [...dailyStats].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );

      for (let i = 0; i < sortedStats.length; i++) {
        const stat = sortedStats[i];
        const expectedDate = new Date();
        expectedDate.setDate(expectedDate.getDate() - i);
        const expectedDateStr = expectedDate.toISOString().split('T')[0];

        if (stat.date === expectedDateStr && stat.minutesStudied >= 30) {
          currentStreak++;
        } else {
          break;
        }
      }
      setStreak(currentStreak);
    };

    if (dailyStats.length > 0) {
      calculateStreak();
    }
  }, [dailyStats]);

  const addTask = () => {
    if (!newSubject || !newTopic) return;

    const task: StudyTask = {
      id: Date.now().toString(),
      subject: newSubject,
      topic: newTopic,
      duration: newDuration,
      completed: false,
      date: today,
    };

    setTasks([...tasks, task]);
    setNewSubject('');
    setNewTopic('');
    setNewDuration(30);
    setShowAddTask(false);
  };

  const toggleTask = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
    setTasks(updatedTasks);

    // Update daily stats
    const existingStatIndex = dailyStats.findIndex((s) => s.date === today);
    const minutesDelta = task.completed ? -task.duration : task.duration;
    const taskDelta = task.completed ? -1 : 1;

    if (existingStatIndex >= 0) {
      const updatedStats = [...dailyStats];
      updatedStats[existingStatIndex] = {
        ...updatedStats[existingStatIndex],
        minutesStudied:
          updatedStats[existingStatIndex].minutesStudied + minutesDelta,
        tasksCompleted:
          updatedStats[existingStatIndex].tasksCompleted + taskDelta,
      };
      setDailyStats(updatedStats);
    } else {
      setDailyStats([
        ...dailyStats,
        {
          date: today,
          minutesStudied: task.completed ? 0 : task.duration,
          tasksCompleted: task.completed ? 0 : 1,
        },
      ]);
    }

    // Update goal progress
    if (!task.completed) {
      const updatedGoals = goals.map((g) => ({
        ...g,
        currentHours: g.currentHours + task.duration / 60,
      }));
      setGoals(updatedGoals);
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const addGoal = () => {
    if (!newGoalTitle || !newGoalDeadline) return;

    const goal: StudyGoal = {
      id: Date.now().toString(),
      title: newGoalTitle,
      targetHours: newGoalHours,
      currentHours: 0,
      deadline: newGoalDeadline,
    };

    setGoals([...goals, goal]);
    setNewGoalTitle('');
    setNewGoalHours(10);
    setNewGoalDeadline('');
    setShowAddGoal(false);
  };

  const deleteGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const todaysTasks = tasks.filter((t) => t.date === today);
  const completedToday = todaysTasks.filter((t) => t.completed).length;
  const todaysMinutes =
    dailyStats.find((s) => s.date === today)?.minutesStudied || 0;

  const getWeekStats = () => {
    const weekStats = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const stat = dailyStats.find((s) => s.date === dateStr);
      weekStats.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        minutes: stat?.minutesStudied || 0,
        tasks: stat?.tasksCompleted || 0,
      });
    }
    return weekStats;
  };

  const weekStats = getWeekStats();
  const maxMinutes = Math.max(...weekStats.map((s) => s.minutes), 60);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="pt-4 text-center">
            <Flame className="mx-auto mb-2 h-8 w-8 text-orange-500" />
            <p className="text-3xl font-bold">{streak}</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <Clock className="mx-auto mb-2 h-8 w-8 text-blue-500" />
            <p className="text-3xl font-bold">{Math.round(todaysMinutes)}</p>
            <p className="text-sm text-muted-foreground">Minutes Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <Check className="mx-auto mb-2 h-8 w-8 text-green-500" />
            <p className="text-3xl font-bold">
              {completedToday}/{todaysTasks.length}
            </p>
            <p className="text-sm text-muted-foreground">Tasks Done</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <Trophy className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
            <p className="text-3xl font-bold">{goals.length}</p>
            <p className="text-sm text-muted-foreground">Active Goals</p>
          </CardContent>
        </Card>
      </div>

      {/* Week Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5" />
            This Week's Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-32 items-end justify-between gap-2">
            {weekStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className="relative w-full rounded-t bg-muted"
                  style={{ height: '100px' }}
                >
                  <div
                    className="absolute bottom-0 w-full rounded-t bg-primary transition-all"
                    style={{ height: `${(stat.minutes / maxMinutes) * 100}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{stat.day}</p>
                <p className="text-xs font-medium">{stat.minutes}m</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Tasks */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5" />
            Today's Study Plan
          </CardTitle>
          <Button
            size="sm"
            onClick={() => setShowAddTask(!showAddTask)}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Task
          </Button>
        </CardHeader>
        <CardContent>
          {showAddTask && (
            <div className="mb-4 space-y-3 rounded-lg border p-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Subject (e.g., Mathematics)"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="rounded-md border p-2"
                />
                <input
                  type="text"
                  placeholder="Topic (e.g., Calculus Ch. 3)"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  className="rounded-md border p-2"
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={newDuration}
                  onChange={(e) => setNewDuration(Number(e.target.value))}
                  className="rounded-md border p-2"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={90}>1.5 hours</option>
                  <option value={120}>2 hours</option>
                </select>
                <Button onClick={addTask}>Add</Button>
              </div>
            </div>
          )}

          {todaysTasks.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">
              No tasks for today. Add your first study task!
            </p>
          ) : (
            <div className="space-y-2">
              {todaysTasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center justify-between rounded-lg border p-3 ${
                    task.completed
                      ? 'border-green-200 bg-green-50 dark:bg-green-950'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                        task.completed
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {task.completed && <Check className="h-4 w-4" />}
                    </button>
                    <div>
                      <p
                        className={`font-medium ${task.completed ? 'text-muted-foreground line-through' : ''}`}
                      >
                        {task.subject}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {task.topic}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {task.duration} min
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Goals */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="h-5 w-5" />
            Study Goals
          </CardTitle>
          <Button
            size="sm"
            onClick={() => setShowAddGoal(!showAddGoal)}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Goal
          </Button>
        </CardHeader>
        <CardContent>
          {showAddGoal && (
            <div className="mb-4 space-y-3 rounded-lg border p-4">
              <input
                type="text"
                placeholder="Goal (e.g., Complete DSA Course)"
                value={newGoalTitle}
                onChange={(e) => setNewGoalTitle(e.target.value)}
                className="w-full rounded-md border p-2"
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-muted-foreground">
                    Target Hours
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newGoalHours}
                    onChange={(e) => setNewGoalHours(Number(e.target.value))}
                    className="w-full rounded-md border p-2"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={newGoalDeadline}
                    onChange={(e) => setNewGoalDeadline(e.target.value)}
                    className="w-full rounded-md border p-2"
                  />
                </div>
              </div>
              <Button onClick={addGoal}>Add Goal</Button>
            </div>
          )}

          {goals.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">
              No goals yet. Set your first study goal!
            </p>
          ) : (
            <div className="space-y-4">
              {goals.map((goal) => {
                const progress = Math.min(
                  (goal.currentHours / goal.targetHours) * 100,
                  100,
                );
                const daysLeft = Math.ceil(
                  (new Date(goal.deadline).getTime() - Date.now()) /
                    (1000 * 60 * 60 * 24),
                );

                return (
                  <div
                    key={goal.id}
                    className="rounded-lg border p-4"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <p className="font-medium">{goal.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {goal.currentHours.toFixed(1)} / {goal.targetHours}{' '}
                          hours
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-2 py-1 text-xs ${
                            daysLeft < 0
                              ? 'bg-red-100 text-red-700'
                              : daysLeft <= 3
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {daysLeft < 0 ? 'Overdue' : `${daysLeft}d left`}
                        </span>
                        <button
                          onClick={() => deleteGoal(goal.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className={`h-2 rounded-full ${
                          progress >= 100 ? 'bg-green-500' : 'bg-primary'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
