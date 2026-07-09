import { Metadata } from 'next';
import ExcelGameClient from './ExcelGameClient';

export const metadata: Metadata = {
  title: 'Excel Shortcut Racer | Sproutern Games',
  description:
    'Test your memory of Excel and keyboard shortcuts. Essential practice for data analysts, consultants, and power users.',
  keywords: [
    'excel shortcuts',
    'keyboard shortcut game',
    'productivity game',
    'excel training',
  ],
};

export default function ExcelGamePage() {
  return (
    <div className="container py-12 md:py-20">
      <ExcelGameClient />
    </div>
  );
}
