import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Keyboard Shortcuts - Essential Shortcuts Reference | Sproutern',
  description:
    'Complete keyboard shortcuts reference for Windows, Mac, VS Code, Chrome, and more. Boost your productivity with essential keyboard shortcuts.',
  keywords: [
    'keyboard shortcuts',
    'hotkeys',
    'shortcut keys',
    'vs code shortcuts',
    'windows shortcuts',
    'mac shortcuts',
  ],
  canonical: '/tools/keyboard-shortcuts',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
