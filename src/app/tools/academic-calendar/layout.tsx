import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Calendar Generator | College Semester Planner',
  description:
    'Create your academic calendar with exam dates, assignment deadlines, holidays, and events. Sync with Google Calendar and stay organized.',
  keywords:
    'academic calendar, college calendar, semester calendar, university calendar, exam schedule, assignment tracker, academic planner',
  openGraph: {
    title: 'Academic Calendar Generator',
    description: 'Create and manage your academic calendar effortlessly.',
    type: 'website',
    url: 'https://www.sproutern.com/tools/academic-calendar',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic Calendar Generator',
    description: 'Plan your semester with ease.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/tools/academic-calendar',
  },
};

export default function AcademicCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
