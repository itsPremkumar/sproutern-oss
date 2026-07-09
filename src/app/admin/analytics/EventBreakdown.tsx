'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { PieChart } from 'lucide-react';

interface EventBreakdownProps {
  isLoading: boolean;
}

// Event categories and their tracking status
const eventCategories = [
  { name: 'Page Views', count: 'Active', color: 'bg-blue-500', percent: 100 },
  {
    name: 'User Engagement',
    count: '8 Events',
    color: 'bg-green-500',
    percent: 100,
  },
  {
    name: 'Authentication',
    count: '4 Events',
    color: 'bg-purple-500',
    percent: 100,
  },
  {
    name: 'Internships',
    count: '6 Events',
    color: 'bg-orange-500',
    percent: 100,
  },
  { name: 'Tools', count: '4 Events', color: 'bg-cyan-500', percent: 100 },
  { name: 'Content', count: '4 Events', color: 'bg-pink-500', percent: 100 },
  {
    name: 'Navigation',
    count: '4 Events',
    color: 'bg-yellow-500',
    percent: 100,
  },
  { name: 'Errors', count: '3 Events', color: 'bg-red-500', percent: 100 },
  { name: 'Profile', count: '4 Events', color: 'bg-indigo-500', percent: 100 },
  {
    name: 'Conversions',
    count: '4 Events',
    color: 'bg-emerald-500',
    percent: 100,
  },
];

export function EventBreakdown({ isLoading }: EventBreakdownProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-[140px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[60px]" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChart className="h-5 w-5" />
          Event Categories
        </CardTitle>
        <CardDescription>Tracking status by event category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {eventCategories.map((category) => (
            <div
              key={category.name}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span className="font-medium">{category.name}</span>
                <span className="text-muted-foreground">{category.count}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${category.color}`} />
                <Progress
                  value={category.percent}
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
