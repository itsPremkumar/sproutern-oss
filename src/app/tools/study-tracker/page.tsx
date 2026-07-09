import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import StudyTrackerClient from './StudyTrackerClient';
import { Flame, Calendar, TrendingUp, Save } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Study Tracker - Track Study Hours & Build Consistency',
  description:
    'Free study tracker with GitHub-style heatmap. Log study hours, track streaks, and visualize your consistency. Build productive study habits.',
  keywords: [
    'study tracker',
    'study hours tracker',
    'study streak',
    'habit tracker',
    'productivity tracker',
    'study consistency',
  ],
  canonical: '/tools/study-tracker',
});

export default function StudyTrackerPage() {
  const content = toolsSEOContent['study-tracker'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Flame className="h-4 w-4" />
            Productivity Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Study Tracker</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Track your daily study hours and build consistency. Visualize your
            progress with a GitHub-style activity calendar.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Flame className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Streak Tracking</p>
              <p className="text-xs text-muted-foreground">Stay motivated</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">Heatmap</p>
              <p className="text-xs text-muted-foreground">Visual progress</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Calendar className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">12-Week View</p>
              <p className="text-xs text-muted-foreground">See patterns</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Save className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Auto-Save</p>
              <p className="text-xs text-muted-foreground">Never lose data</p>
            </div>
          </div>
        </div>

        {/* Tracker Component */}
        <StudyTrackerClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="study-tracker"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
