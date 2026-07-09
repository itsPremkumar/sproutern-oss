import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Diff Checker - Compare Text Online | Sproutern',
  description:
    'Free online diff checker to compare two texts. Highlight differences between code, documents, or any text. Side-by-side comparison view.',
  keywords: [
    'diff checker',
    'text compare',
    'code diff',
    'compare files',
    'text difference',
    'diff tool',
  ],
  canonical: '/tools/diff-checker',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
