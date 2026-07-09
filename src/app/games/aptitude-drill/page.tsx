import { Metadata } from 'next';
import AptitudeSpeedClient from './AptitudeSpeedClient';

export const metadata: Metadata = {
  title: 'Aptitude Speed Drill | Sproutern Games',
  description:
    'Practice quantitative aptitude under time pressure. Covers Percentage, Profit & Loss, Time & Work, Ratio, and Speed Distance Time.',
  keywords: [
    'aptitude test',
    'quantitative aptitude',
    'placement aptitude',
    'math quiz',
    'speed math',
  ],
};

export default function AptitudeDrillPage() {
  return (
    <div className="container py-12 md:py-20">
      <AptitudeSpeedClient />
    </div>
  );
}
