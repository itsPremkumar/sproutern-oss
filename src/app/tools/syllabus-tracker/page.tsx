import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import SyllabusTrackerClient from './SyllabusTrackerClient';
import { BookOpen, CheckCircle, Clock, Save } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Syllabus Tracker - Track Preparation',
  description:
    'Free syllabus tracker for GATE CS, campus placements, and web development. Mark topics as complete, track progress, and stay on top of your preparation.',
  keywords: [
    'syllabus tracker',
    'gate cs syllabus',
    'placement preparation tracker',
    'study progress tracker',
    'exam preparation',
  ],
  canonical: '/tools/syllabus-tracker',
});

export default function SyllabusTrackerPage() {
  const content = toolsSEOContent['syllabus-tracker'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" />
            Study Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Syllabus Tracker
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Track your exam preparation progress. Mark topics as complete and
            visualize how much you&apos;ve covered.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">3 Syllabi</p>
              <p className="text-xs text-muted-foreground">
                GATE, Placement, Web
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">60+ Topics</p>
              <p className="text-xs text-muted-foreground">
                Organized by subject
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Save className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Auto-Save</p>
              <p className="text-xs text-muted-foreground">
                Progress saved locally
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Clock className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Visual Progress</p>
              <p className="text-xs text-muted-foreground">Track completion</p>
            </div>
          </div>
        </div>

        {/* Tracker Component */}
        <SyllabusTrackerClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="syllabus-tracker"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
