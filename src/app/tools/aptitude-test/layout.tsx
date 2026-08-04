import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aptitude Test Practice | Quantitative, Logical, Verbal',
  description:
    'Free aptitude test practice with quantitative, logical reasoning, and verbal ability questions. Get instant feedback and improve your placement exam scores.',
  keywords:
    'aptitude test, quantitative aptitude, logical reasoning, verbal ability, placement aptitude, TCS NQT, Infosys aptitude, campus placement test',
  openGraph: {
    title: 'Aptitude Test Practice',
    description:
      'Practice aptitude questions for placements with instant feedback.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/aptitude-test',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aptitude Test Practice',
    description: 'Free aptitude practice for placement exams.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/aptitude-test',
  },
};

export default function AptitudeTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
