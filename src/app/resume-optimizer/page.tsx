import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { ResumeOptimizerForm } from '@/components/resume-optimizer-form';

export const metadata = getPageSEO('resumeOptimizer');

export default function ResumeOptimizerPage() {
  const schemas = getPageSchema('resumeOptimizer');
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Advanced AI Resume Rewriter
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Upload your resume as a PDF, and our AI will read and rewrite its
          content to be perfectly optimized for Applicant Tracking Systems
          (ATS). Download your new, improved resume in seconds.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <ResumeOptimizerForm />
      </div>
    </div>
  );
}
