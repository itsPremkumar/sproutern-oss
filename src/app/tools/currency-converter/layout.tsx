import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Currency Converter - Live Exchange Rates | Sproutern',
  description:
    'Free currency converter with live exchange rates. Convert between INR, USD, EUR, GBP and 150+ currencies. Perfect for students planning to study abroad.',
  keywords: [
    'currency converter',
    'exchange rate',
    'inr to usd',
    'money converter',
    'forex rates',
    'currency calculator',
  ],
  canonical: '/tools/currency-converter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
