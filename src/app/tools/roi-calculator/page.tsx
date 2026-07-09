import { ToolLayout } from '@/components/tools/ToolLayout';
import { CollegeROICalculator } from '@/components/tools/ROICalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College ROI Calculator | Is Your Degree Worth It?',
  description:
    'Calculate the Return on Investment (ROI) of your college degree. Enter your fees and expected salary to know how many years it will take to recover your investment.',
  keywords: [
    'college roi calculator',
    'education investment calculator',
    'is college worth it',
    'engineering roi india',
    'mba roi calculator',
  ],
};

export default function ROICalculatorPage() {
  return (
    <ToolLayout
      title="College ROI Calculator"
      description="The brutal truth about your education investment. Find out exactly how long it will take to earn back your college fees."
    >
      <CollegeROICalculator />

      <div className="mx-auto mt-12 max-w-4xl space-y-8 text-left text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Why Calculate College ROI?
          </h2>
          <p className="leading-relaxed">
            Education is likely the second biggest investment you'll make in
            your life (after a house). Yet, most students in India join colleges
            without doing the math. If you spend ₹20 Lakhs on a degree that gets
            you a ₹4 LPA job, you might spend the next 7-8 years just paying
            back the debt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            How We Calculate This
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Total Investment:</strong> We calculate Tuition Fees +
              (Monthly Living Cost × 48 months).
            </li>
            <li>
              <strong>Net Income:</strong> We assume ~15-20% deductions (Tax,
              PF) on your salary.
            </li>
            <li>
              <strong>Savings Rate:</strong> We realistically assume you can
              save only 60% of your in-hand salary (living expenses don't stop
              after college!).
            </li>
            <li>
              <strong>Recovery Time:</strong> Total Investment ÷ Yearly Savings.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            What is a Good ROI?
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <h3 className="font-bold text-green-700 dark:text-green-400">
                Excellent
              </h3>
              <p className="mt-1 text-sm">&lt; 2 Years</p>
              <p className="mt-2 text-xs opacity-80">
                Top IITs, NITs, and Government Colleges usually fall here.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
              <h3 className="font-bold text-yellow-700 dark:text-yellow-400">
                Average
              </h3>
              <p className="mt-1 text-sm">2 - 4 Years</p>
              <p className="mt-2 text-xs opacity-80">
                Good private colleges with decent placements.
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <h3 className="font-bold text-red-700 dark:text-red-400">Poor</h3>
              <p className="mt-1 text-sm">&gt; 5 Years</p>
              <p className="mt-2 text-xs opacity-80">
                Expensive private universities with low median packages.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ToolLayout>
  );
}
