import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Timeline Calculator | Student Visa Processing Times',
  description:
    'Plan your student visa application with country-specific processing times for USA, UK, Canada, Germany, Australia, France, and more. Get personalized visa timeline recommendations.',
  keywords:
    'student visa timeline, visa processing time, F1 visa timeline, UK student visa, Canada study permit, German student visa, visa application calculator',
  openGraph: {
    title: 'Visa Timeline Calculator | Student Visa Processing Times',
    description:
      'Plan your student visa application with country-specific processing times. Get personalized timeline recommendations for USA, UK, Canada, Germany, and more.',
    type: 'website',
    url: 'https://www.sproutern.com/tools/visa-timeline',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Timeline Calculator',
    description:
      'Plan your student visa application with country-specific processing times.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/tools/visa-timeline',
  },
};

export default function VisaTimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
