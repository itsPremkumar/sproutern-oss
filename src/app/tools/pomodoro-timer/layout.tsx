import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Pomodoro Timer - Focus & Productivity Timer | Sproutern',
  description:
    'Free Pomodoro timer for focused study sessions. 25-minute work intervals with breaks. Stay productive and avoid burnout with this time management tool.',
  keywords: [
    'pomodoro timer',
    'focus timer',
    'study timer',
    'productivity timer',
    'pomodoro technique',
    'work timer',
  ],
  canonical: '/tools/pomodoro-timer',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
