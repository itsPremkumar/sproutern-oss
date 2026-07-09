import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'JSON Formatter - Format & Validate JSON Online | Sproutern',
  description:
    'Free JSON formatter and validator. Format, beautify, and validate JSON data online. Tree view, minify, and copy formatted JSON instantly.',
  keywords: [
    'json formatter',
    'json validator',
    'format json',
    'json beautifier',
    'json viewer',
    'json parser',
  ],
  canonical: '/tools/json-formatter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
