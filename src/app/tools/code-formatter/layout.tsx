import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Code Formatter - Format & Beautify Code Online | Sproutern',
  description:
    'Free online code formatter and beautifier. Format JavaScript, TypeScript, HTML, CSS, JSON, and more. Make your code clean and readable instantly.',
  keywords: [
    'code formatter',
    'code beautifier',
    'format code online',
    'javascript formatter',
    'json formatter',
    'html beautifier',
  ],
  canonical: '/tools/code-formatter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
