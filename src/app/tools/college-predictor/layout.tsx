import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'College Predictor - Predict Your College Admission | Sproutern',
  description:
    'Free college predictor tool. Enter your exam scores and ranks to predict which colleges you can get admission in. Based on previous year cutoffs.',
  keywords: [
    'college predictor',
    'jee college predictor',
    'admission predictor',
    'rank predictor',
    'college admission',
    'cutoff predictor',
  ],
  canonical: '/tools/college-predictor',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
