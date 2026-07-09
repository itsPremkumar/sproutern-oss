import { affiliates, sponsoredTools } from '@/config/monetization';
import { AffiliateLink } from '@/components/monetization/AffiliateLink';

/**
 * AffiliateStrip — a clean, non-intrusive row of partner links.
 * Render this in the footer or at the bottom of content pages.
 * Renders nothing if no affiliate URLs are configured.
 */
export function AffiliateStrip() {
  const active = affiliates.filter((a) => a.url);
  if (active.length === 0) return null;

  return (
    <section
      aria-label="Partner offers"
      className="mx-auto my-8 w-full max-w-5xl rounded-xl border border-border bg-muted/30 p-4"
    >
      <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
        🤝 Recommended for your career
      </h2>
      <ul className="flex flex-wrap gap-3">
        {active.map((a) => (
          <li key={a.id}>
            <AffiliateLink
              affiliate={a}
              className="inline-flex items-center rounded-lg bg-background px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-primary hover:text-primary-foreground"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * SponsoredTools — paid placements with an FTC-compliant badge.
 * Renders nothing until you add entries to `sponsoredTools`.
 */
export function SponsoredTools() {
  if (sponsoredTools.length === 0) return null;

  return (
    <section
      aria-label="Sponsored tools"
      className="mx-auto my-8 w-full max-w-5xl rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/30"
    >
      <h2 className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">
        ⭐ Sponsored
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {sponsoredTools.map((t) => (
          <li
            key={t.id}
            className="rounded-lg border border-border bg-background p-3"
          >
            <a
              href={t.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="font-semibold hover:underline"
            >
              {t.name}
            </a>
            <p className="text-sm text-muted-foreground">{t.tagline}</p>
            {t.badge ? (
              <span className="mt-1 inline-block rounded bg-amber-200 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-800 dark:text-amber-100">
                {t.badge}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
