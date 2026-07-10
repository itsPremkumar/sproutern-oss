import { digitalProducts, type DigitalProduct } from '@/config/monetization';
import { ShoppingBag, ArrowRight } from 'lucide-react';

/**
 * ProductsStrip — showcases YOUR digital products (resume packs, Q-banks,
 * guides) via a free checkout (Gumroad / Razorpay Payment Page).
 * Zero inventory, instant payout. Renders nothing until you add products.
 */
export function ProductsStrip() {
  if (digitalProducts.length === 0) return null;

  return (
    <section
      aria-label="Our products"
      className="mx-auto my-10 w-full max-w-5xl rounded-xl border border-primary/30 bg-primary/5 p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <ShoppingBag className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">🛍️ Career resources you can buy</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {digitalProducts.map((p: DigitalProduct) => (
          <div
            key={p.id}
            className="flex flex-col rounded-lg border border-border bg-background p-4"
          >
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-semibold">{p.title}</h3>
              {p.badge ? (
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {p.badge}
                </span>
              ) : null}
            </div>
            <p className="mb-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Buy · {p.price} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
