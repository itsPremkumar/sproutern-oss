import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Student Budget Planner - Manage Your Finances | Sproutern',
  description:
    'Free student budget planner. Track expenses, manage income, and save money as a student. Create budget plans for college life.',
  keywords: [
    'student budget planner',
    'budget calculator',
    'student finances',
    'expense tracker',
    'money management',
    'college budget',
  ],
  canonical: '/tools/student-budget-planner',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
