import Link from 'next/link';
import { Megaphone, ArrowRight } from 'lucide-react';

/**
 * SponsorCTA — drives high-margin sponsored-placements revenue.
 * Links to the contact page (partnerships section already exists there).
 * Renders a clear, non-intrusive "Advertise with us" card.
 */
export function SponsorCTA() {
  return (
    <section className="my-10 rounded-xl border border-primary/30 bg-primary/5 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Promote your product to students & freshers</h3>
            <p className="text-sm text-muted-foreground">
              Sproutern reaches career-focused learners daily. Sponsor a tool or
              get a featured placement — relevant, FTC-compliant, high-intent audience.
            </p>
          </div>
        </div>
        <Link
          href="/contact?topic=sponsorship"
          className="inline-flex flex-shrink-0 items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Advertise with us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
