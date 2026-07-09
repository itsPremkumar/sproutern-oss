import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { StudentBudgetPlanner } from '@/components/tools/StudentBudgetPlanner';
import { Wallet, PieChart, TrendingUp, Target } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata = getPageSEO('studentBudgetPlanner');

export default function StudentBudgetPlannerPage() {
  const schemas = getPageSchema('studentBudgetPlanner');
  const content = toolsSEOContent['student-budget-planner'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Wallet className="h-4 w-4" />
              Free Financial Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Student Budget Planner
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Take control of your finances. Track your internship stipend,
              manage expenses, and save for your goals.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <PieChart className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Visual Analytics</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Smart Insights</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Goal Tracking</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Wallet className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">100% Private</span>
            </div>
          </div>

          {/* Tool Component */}
          <StudentBudgetPlanner />

          {content && (
            <div className="mt-20">
              <ToolSEOContent
                toolSlug="student-budget-planner"
                enhancedContent={content}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
