'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
  Printer,
} from 'lucide-react';
import Link from 'next/link';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGeneratorClient() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [markedDates, setMarkedDates] = useState<Set<string>>(new Set());
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [startOnMonday, setStartOnMonday] = useState(false);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    if (startOnMonday) {
      return day === 0 ? 6 : day - 1;
    }
    return day;
  };

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
      (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const toggleDateMark = (day: number) => {
    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
    const newMarked = new Set(markedDates);
    if (newMarked.has(dateKey)) {
      newMarked.delete(dateKey);
    } else {
      newMarked.add(dateKey);
    }
    setMarkedDates(newMarked);
  };

  const isMarked = (day: number) => {
    return markedDates.has(`${currentYear}-${currentMonth + 1}-${day}`);
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const printCalendar = () => {
    window.print();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month's days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        weekNumber: null,
      });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const weekNumber: number | null =
        showWeekNumbers && (days.length % 7 === 0 || days.length === 0)
          ? getWeekNumber(new Date(currentYear, currentMonth, day))
          : null;
      days.push({
        day,
        isCurrentMonth: true,
        weekNumber,
      });
    }

    // Next month's days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        weekNumber: null,
      });
    }

    return days;
  };

  const orderedDayNames = startOnMonday
    ? [...dayNames.slice(1), dayNames[0]]
    : dayNames;

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Free Utility Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Calendar Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Generate and print calendars for any month. Mark important dates and
            customize the layout.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Any Month</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Mark Dates</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Print Ready</span>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6 print:hidden">
          <CardContent className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showWeekNumbers}
                  onChange={(e) => setShowWeekNumbers(e.target.checked)}
                  className="h-4 w-4"
                />
                Week numbers
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={startOnMonday}
                  onChange={(e) => setStartOnMonday(e.target.checked)}
                  className="h-4 w-4"
                />
                Start on Monday
              </label>
            </div>
            <Button
              onClick={printCalendar}
              variant="outline"
              className="gap-2"
            >
              <Printer className="h-4 w-4" />
              Print Calendar
            </Button>
          </CardContent>
        </Card>

        {/* Calendar */}
        <Card className="print:border-none print:shadow-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={previousMonth}
              className="print:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-2xl">
              {monthNames[currentMonth]} {currentYear}
            </CardTitle>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMonth}
              className="print:hidden"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            {/* Day Headers */}
            <div
              className={`grid ${showWeekNumbers ? 'grid-cols-8' : 'grid-cols-7'} mb-2 gap-1`}
            >
              {showWeekNumbers && (
                <div className="p-2 text-center text-xs font-medium text-muted-foreground">
                  Wk
                </div>
              )}
              {orderedDayNames.map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-sm font-semibold text-muted-foreground"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div
              className={`grid ${showWeekNumbers ? 'grid-cols-8' : 'grid-cols-7'} gap-1`}
            >
              {generateCalendarDays().map((dayInfo, index) => (
                <>
                  {showWeekNumbers && index % 7 === 0 && (
                    <div
                      key={`week-${index}`}
                      className="flex items-center justify-center p-2 text-xs text-muted-foreground"
                    >
                      {getWeekNumber(
                        new Date(
                          currentYear,
                          currentMonth,
                          dayInfo.isCurrentMonth ? dayInfo.day : 1,
                        ),
                      )}
                    </div>
                  )}
                  <button
                    key={index}
                    onClick={() =>
                      dayInfo.isCurrentMonth && toggleDateMark(dayInfo.day)
                    }
                    className={`relative aspect-square rounded-lg p-2 text-center text-sm transition-colors ${
                      dayInfo.isCurrentMonth
                        ? 'cursor-pointer hover:bg-muted'
                        : 'cursor-default text-muted-foreground/50'
                    } ${
                      dayInfo.isCurrentMonth && isToday(dayInfo.day)
                        ? 'bg-primary font-bold text-primary-foreground'
                        : ''
                    } ${
                      dayInfo.isCurrentMonth &&
                      isMarked(dayInfo.day) &&
                      !isToday(dayInfo.day)
                        ? 'bg-red-100 font-semibold text-red-700 dark:bg-red-950 dark:text-red-300'
                        : ''
                    } `}
                    disabled={!dayInfo.isCurrentMonth}
                  >
                    {dayInfo.day}
                    {dayInfo.isCurrentMonth && isMarked(dayInfo.day) && (
                      <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red-500" />
                    )}
                  </button>
                </>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Marked Dates List */}
        {markedDates.size > 0 && (
          <Card className="mt-6 print:hidden">
            <CardHeader>
              <CardTitle className="text-lg">Marked Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Array.from(markedDates)
                  .sort()
                  .map((date) => (
                    <span
                      key={date}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700 dark:bg-red-950 dark:text-red-300"
                    >
                      {date}
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8 print:hidden">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Age Calculator',
                href: '/tools/age-calculator',
                desc: 'Calculate your age',
              },
              {
                title: 'Date Calculator',
                href: '/tools/date-calculator',
                desc: 'Calculate date differences',
              },
              {
                title: 'Exam Countdown',
                href: '/tools/exam-countdown',
                desc: 'Count down to exams',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
