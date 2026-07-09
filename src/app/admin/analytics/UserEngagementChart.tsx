'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  TrendingUp,
  BarChart3,
  Users,
  Clock,
  Scroll,
  MousePointerClick,
} from 'lucide-react';

interface UserEngagementChartProps {
  isLoading: boolean;
}

// Engagement metrics being tracked
const engagementMetrics = [
  {
    title: 'Scroll Depth Tracking',
    description: 'Track how far users scroll on each page',
    icon: <Scroll className="h-5 w-5 text-blue-500" />,
    milestones: ['25%', '50%', '75%', '100%'],
    status: 'Active',
  },
  {
    title: 'Time on Page',
    description: 'Track engagement time milestones',
    icon: <Clock className="h-5 w-5 text-green-500" />,
    milestones: ['10s', '30s', '60s', '120s', '300s'],
    status: 'Active',
  },
  {
    title: 'Click Tracking',
    description: 'Track user interactions with UI elements',
    icon: <MousePointerClick className="h-5 w-5 text-purple-500" />,
    milestones: ['CTAs', 'Navigation', 'Footer', 'Outbound'],
    status: 'Active',
  },
  {
    title: 'Session Tracking',
    description: 'Track user session start and activity',
    icon: <Users className="h-5 w-5 text-orange-500" />,
    milestones: ['Session Start', 'Tab Return', 'Page Views'],
    status: 'Active',
  },
];

// Funnel configuration
const funnelSteps = [
  { name: 'Page View', event: 'page_view', color: 'bg-blue-500' },
  { name: 'View Internship', event: 'view_internship', color: 'bg-cyan-500' },
  {
    name: 'Begin Application',
    event: 'begin_application',
    color: 'bg-yellow-500',
  },
  { name: 'Apply', event: 'apply_internship', color: 'bg-green-500' },
];

const signupFunnel = [
  { name: 'View Signup Page', event: 'view_signup_page', color: 'bg-blue-500' },
  { name: 'Begin Sign Up', event: 'begin_sign_up', color: 'bg-cyan-500' },
  { name: 'Complete Sign Up', event: 'sign_up', color: 'bg-green-500' },
];

export function UserEngagementChart({ isLoading }: UserEngagementChartProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-4 w-[200px]" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Engagement Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        {engagementMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                {metric.icon}
                {metric.title}
              </CardTitle>
              <CardDescription>{metric.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {metric.milestones.map((milestone) => (
                  <span
                    key={milestone}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                  >
                    {milestone}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">
                  Status: {metric.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Conversion Funnels */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Application Funnel
            </CardTitle>
            <CardDescription>
              Track user journey to internship application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {funnelSteps.map((step, index) => (
                <div
                  key={step.name}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-8 w-8 rounded-full ${step.color} flex items-center justify-center text-sm font-bold text-white`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{step.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {step.event}
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Signup Funnel
            </CardTitle>
            <CardDescription>
              Track user journey to registration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {signupFunnel.map((step, index) => (
                <div
                  key={step.name}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-8 w-8 rounded-full ${step.color} flex items-center justify-center text-sm font-bold text-white`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{step.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {step.event}
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Properties
          </CardTitle>
          <CardDescription>
            Custom user properties being tracked for segmentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-semibold">user_type</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Categorize users by their role
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
                  student
                </span>
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800">
                  startup
                </span>
                <span className="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-800">
                  admin
                </span>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-semibold">engagement_level</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Track user engagement tier
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-800">
                  low
                </span>
                <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                  medium
                </span>
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800">
                  high
                </span>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-semibold">signup_date</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                User registration date
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs">
                  ISO 8601
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
