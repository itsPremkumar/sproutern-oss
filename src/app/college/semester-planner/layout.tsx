import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Semester Planner | College Academic Planner Tool',
  description:
    'Plan your college semester effectively. Track courses, assignments, exams, and projects. Get reminders and stay on top of your academics.',
  keywords:
    'semester planner, college planner, academic planner, course tracker, assignment tracker, exam planner, student organization',
  openGraph: {
    title: 'Semester Planner',
    description: 'Plan your entire semester effectively.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/college/semester-planner',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semester Planner',
    description: 'Organize your college semester effortlessly.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/college/semester-planner',
  },
};

export default function SemesterPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
