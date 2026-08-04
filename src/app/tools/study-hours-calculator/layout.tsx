import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Hours Calculator | Plan Study Time',
  description:
    'Calculate optimal study hours based on your syllabus size, exam date, and learning pace. Get a personalized study schedule for exam preparation.',
  keywords:
    'study hours calculator, study time planner, exam preparation schedule, how many hours to study, study schedule generator',
  openGraph: {
    title: 'Study Hours Calculator',
    description: 'Plan your study hours based on syllabus and exam date.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/study-hours-calculator',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Hours Calculator',
    description: 'Get a personalized study schedule.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/study-hours-calculator',
  },
};

export default function StudyHoursCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
