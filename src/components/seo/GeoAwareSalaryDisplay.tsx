import { getGeoContext, formatCurrency, convertFromINR } from '@/lib/edge-geo';

// ─────────────────────────────────────────────────────────────────────────────
// GeoAwareSalaryDisplay — React Server Component
// Zero client JavaScript. Reads geo headers from Edge middleware and renders
// salary figures in the user's local currency at the Edge.
// ─────────────────────────────────────────────────────────────────────────────

interface SalaryRange {
  /** Role title */
  role: string;
  /** Company name */
  company: string;
  /** Minimum salary in INR */
  minINR: number;
  /** Maximum salary in INR */
  maxINR: number;
}

interface GeoAwareSalaryDisplayProps {
  salaries: SalaryRange[];
  /** Optional: override the title */
  title?: string;
}

/**
 * Server Component that displays salary data in the user's local currency.
 * The currency is determined by the Edge middleware — zero client-side JS.
 *
 * @example
 * ```tsx
 * <GeoAwareSalaryDisplay
 *   salaries={[
 *     { role: 'SDE-1', company: 'TCS', minINR: 350000, maxINR: 700000 },
 *     { role: 'SDE-1', company: 'Infosys', minINR: 360000, maxINR: 800000 },
 *   ]}
 * />
 * ```
 */
export async function GeoAwareSalaryDisplay({
  salaries,
  title,
}: GeoAwareSalaryDisplayProps) {
  const geo = await getGeoContext();
  const isIndian = geo.currency === 'INR';

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {title ?? 'Salary Comparison'}
        </h3>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {geo.country} • {geo.currency}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">Role</th>
              <th className="pb-3 pr-4 font-medium">Company</th>
              <th className="pb-3 pr-4 text-right font-medium">Min Salary</th>
              <th className="pb-3 text-right font-medium">Max Salary</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary, index) => {
              const minLocal = isIndian
                ? salary.minINR
                : convertFromINR(salary.minINR, geo.currency);
              const maxLocal = isIndian
                ? salary.maxINR
                : convertFromINR(salary.maxINR, geo.currency);

              return (
                <tr
                  key={`${salary.company}-${salary.role}-${index}`}
                  className="border-b last:border-0"
                >
                  <td className="py-3 pr-4 font-medium">{salary.role}</td>
                  <td className="py-3 pr-4 text-muted-foreground">
                    {salary.company}
                  </td>
                  <td className="py-3 pr-4 text-right tabular-nums">
                    {formatCurrency(minLocal, geo.currency, geo.locale)}
                  </td>
                  <td className="py-3 text-right font-semibold tabular-nums text-green-600 dark:text-green-400">
                    {formatCurrency(maxLocal, geo.currency, geo.locale)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {!isIndian && (
        <p className="mt-4 text-xs text-muted-foreground">
          * Salaries converted from INR to {geo.currency} using approximate
          exchange rates. Actual figures may vary.
        </p>
      )}
    </div>
  );
}
