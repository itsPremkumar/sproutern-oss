import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stream Selection Quiz | Science vs Commerce vs Arts Guide',
  description:
    'Take our interactive quiz to find the best stream after 10th class. Discover if Science (PCM/PCB), Commerce, or Arts/Humanities suits your interests and career goals.',
  keywords:
    'stream selection quiz, science vs commerce, arts vs science, after 10th stream, PCM or PCB, career aptitude test, which stream to choose',
  openGraph: {
    title: 'Stream Selection Quiz | Find Your Best Stream After 10th',
    description:
      'Interactive quiz to discover which stream suits you best - Science, Commerce, or Arts. Get personalized career recommendations.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/school/stream-selection',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stream Selection Quiz',
    description:
      'Find your best stream after 10th - Science, Commerce, or Arts.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/school/stream-selection',
  },
};

export default function StreamSelectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
