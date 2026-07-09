import { Metadata } from 'next';
import { AnalyticsDashboard } from './AnalyticsDashboard';

export const metadata: Metadata = {
  title: 'Analytics Dashboard | Admin',
  description:
    'View comprehensive Firebase Analytics reports and insights for Sproutern',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnalyticsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Track user engagement, page views, and key metrics across Sproutern
        </p>
      </div>
      <AnalyticsDashboard />
    </div>
  );
}
