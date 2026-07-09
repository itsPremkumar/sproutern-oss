import { AdTopOfPage, AdBottomOfPage } from '@/components/ads/ezoic-sections';

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Top of page ad */}
      <div className="container mx-auto max-w-6xl px-4">
        <AdTopOfPage />
      </div>

      {/* Games content */}
      {children}

      {/* Bottom of page ad */}
      <div className="container mx-auto max-w-6xl px-4">
        <AdBottomOfPage />
      </div>
    </div>
  );
}
