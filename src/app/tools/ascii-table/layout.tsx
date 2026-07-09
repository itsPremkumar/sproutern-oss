import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'ASCII Table - Complete Character Reference | Sproutern',
  description:
    'Complete ASCII table with decimal, hexadecimal, octal, and binary values. Quick reference for all 128 ASCII characters including control codes and printable characters.',
  keywords: [
    'ascii table',
    'ascii codes',
    'character codes',
    'hex codes',
    'binary codes',
    'ascii reference',
  ],
  canonical: '/tools/ascii-table',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
