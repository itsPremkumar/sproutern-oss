'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Eye,
  Users,
  MousePointerClick,
  Timer,
  TrendingUp,
  Briefcase,
  UserPlus,
  Target,
} from 'lucide-react';

interface AnalyticsCardsProps {
  isLoading: boolean;
}

interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  description: string;
}

export function AnalyticsCards({ isLoading }: AnalyticsCardsProps) {
  // These would typically come from Firebase Analytics API or BigQuery
  // For now, we show the tracking setup status and example metrics
  const stats: StatCard[] = [
    {
      title: 'Page Views',
      value: 'Tracking Active',
      change: 'Real-time',
      changeType: 'positive',
      icon: <Eye className="h-4 w-4 text-muted-foreground" />,
      description: 'All page views tracked automatically',
    },
    {
      title: 'User Sessions',
      value: 'Tracking Active',
      change: 'Real-time',
      changeType: 'positive',
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      description: 'Session start events tracked',
    },
    {
      title: 'Engagement Events',
      value: '40+ Events',
      change: 'Configured',
      changeType: 'positive',
      icon: <MousePointerClick className="h-4 w-4 text-muted-foreground" />,
      description: 'Clicks, scrolls, interactions',
    },
    {
      title: 'Avg. Time on Page',
      value: 'Tracking Active',
      change: 'Real-time',
      changeType: 'neutral',
      icon: <Timer className="h-4 w-4 text-muted-foreground" />,
      description: 'Time milestones at 10s, 30s, 60s, 120s, 300s',
    },
    {
      title: 'Internship Events',
      value: 'View & Apply',
      change: 'Tracked',
      changeType: 'positive',
      icon: <Briefcase className="h-4 w-4 text-muted-foreground" />,
      description: 'Views, applications, errors',
    },
    {
      title: 'Sign Ups',
      value: 'Tracking Active',
      change: 'Conversion',
      changeType: 'positive',
      icon: <UserPlus className="h-4 w-4 text-muted-foreground" />,
      description: 'Registration funnel tracked',
    },
    {
      title: 'Tool Usage',
      value: '30+ Tools',
      change: 'Tracked',
      changeType: 'positive',
      icon: <Target className="h-4 w-4 text-muted-foreground" />,
      description: 'Start, complete, error events',
    },
    {
      title: 'Scroll Depth',
      value: '4 Milestones',
      change: '25-50-75-100%',
      changeType: 'neutral',
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
      description: 'Content engagement depth',
    },
  ];

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-4 rounded" />
            </CardHeader>
            <CardContent>
              <Skeleton className="mb-1 h-7 w-[120px]" />
              <Skeleton className="h-3 w-[80px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span
                className={
                  stat.changeType === 'positive'
                    ? 'text-green-600'
                    : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-muted-foreground'
                }
              >
                {stat.change}
              </span>
              {' • '}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
