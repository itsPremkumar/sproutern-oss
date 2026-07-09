import { Metadata } from 'next';
import CodeReviewClient from './CodeReviewClient';

export const metadata: Metadata = {
  title: 'Code Review Challenge | Sproutern Games',
  description:
    'Spot bugs and bad practices in code snippets. Practice for technical interviews and improve code quality skills.',
  keywords: [
    'code review',
    'debugging game',
    'javascript bugs',
    'coding interview',
    'best practices',
  ],
};

export default function CodeReviewPage() {
  return (
    <div className="container py-12 md:py-20">
      <CodeReviewClient />
    </div>
  );
}
