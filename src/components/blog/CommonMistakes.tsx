import { AlertTriangle, X, CheckCircle } from 'lucide-react';

interface Mistake {
  mistake: string;
  whyWrong: string;
  correctApproach: string;
  realExample: string;
}

interface CommonMistakesProps {
  title?: string;
  mistakes: Mistake[];
}

export function CommonMistakes({
  title = '5 Common Mistakes Indian Students Make (And How to Avoid Them)',
  mistakes,
}: CommonMistakesProps) {
  return (
    <section className="not-prose my-10">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <AlertTriangle className="h-6 w-6 text-red-600" />
        {title}
      </h2>

      <div className="space-y-6">
        {mistakes.map((mistake, index) => (
          <div
            key={index}
            className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950"
          >
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <X className="h-5 w-5 text-red-600" />❌ Mistake #{index + 1}:{' '}
              {mistake.mistake}
            </h3>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-semibold text-red-700 dark:text-red-300">
                  Why it's wrong:
                </p>
                <p className="text-sm text-muted-foreground">
                  {mistake.whyWrong}
                </p>
              </div>

              <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-300">
                  <CheckCircle className="h-4 w-4" />
                  The fix:
                </p>
                <p className="text-sm">{mistake.correctApproach}</p>
              </div>

              <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
                <p className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                  Real example:
                </p>
                <p className="text-sm italic">{mistake.realExample}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
