import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Random Generator - Random Numbers, Strings & More | Sproutern',
  description:
    'Free random generator tool. Generate random numbers, strings, UUIDs, colors, and more. Perfect for developers, testers, and everyday use.',
  keywords: [
    'random generator',
    'random number',
    'random string',
    'uuid generator',
    'random color',
    'random picker',
  ],
  canonical: '/tools/random-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
