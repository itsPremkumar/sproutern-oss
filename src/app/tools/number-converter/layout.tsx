import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Number Converter - Binary, Hex, Octal Conversion | Sproutern',
  description:
    'Free number converter between decimal, binary, hexadecimal, and octal systems. Convert numbers instantly with step-by-step explanations.',
  keywords: [
    'number converter',
    'binary converter',
    'hex converter',
    'decimal to binary',
    'number system',
    'base converter',
  ],
  canonical: '/tools/number-converter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
