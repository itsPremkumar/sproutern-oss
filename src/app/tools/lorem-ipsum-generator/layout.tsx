import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Lorem Ipsum Generator - Generate Placeholder Text | Sproutern',
  description:
    'Free Lorem Ipsum text generator. Generate placeholder text for design mockups, website prototypes, and documents. Customize paragraphs, words, or sentences.',
  keywords: [
    'lorem ipsum generator',
    'placeholder text',
    'dummy text',
    'filler text',
    'lipsum generator',
    'text generator',
  ],
  canonical: '/tools/lorem-ipsum-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
