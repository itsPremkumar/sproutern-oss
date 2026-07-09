import { Metadata } from 'next';
import AcademicCalendarClient from './AcademicCalendarClient';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = {
  title: 'Academic Calendar Generator - Free Student Planner',
  description:
    'Create and export your university academic calendar. Organize exams, assignments, and holidays. Free semester planning tool for students.',
  keywords: [
    'academic calendar generator',
    'student planner',
    'semester schedule',
    'exam calendar',
    'university planner',
    'syllabus organizer',
  ],
};

export default function AcademicCalendarPage() {
  const content = toolsSEOContent['academic-calendar'];

  return (
    <>
      <AcademicCalendarClient />

      {content && (
        <div className="container pb-20">
          <ToolSEOContent
            toolSlug="academic-calendar"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
