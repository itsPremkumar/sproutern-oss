import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Unit Converter - Convert Any Units Online | Sproutern',
  description:
    'Free unit converter for length, weight, temperature, area, and more. Convert between metric and imperial units instantly.',
  keywords: [
    'unit converter',
    'convert units',
    'metric converter',
    'length converter',
    'weight converter',
    'temperature converter',
  ],
  canonical: '/tools/unit-converter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
