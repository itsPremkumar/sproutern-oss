import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exam Countdown Timer | Track Your Exam Dates',
  description:
    'Exam countdown timer to track days until your exams. Add multiple exams, get reminders, and stay motivated with preparation tips.',
  keywords:
    'exam countdown, exam timer, board exam countdown, JEE countdown, NEET countdown, exam date tracker, exam preparation timer',
  openGraph: {
    title: 'Exam Countdown Timer',
    description: 'Track days remaining for your important exams.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/exam-countdown',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exam Countdown Timer',
    description: 'Never miss an exam deadline again.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/exam-countdown',
  },
};

export default function ExamCountdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
