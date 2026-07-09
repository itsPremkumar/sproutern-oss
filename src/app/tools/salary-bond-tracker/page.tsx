import { Metadata } from 'next';
import SalaryBondTracker from './SalaryTracker';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = {
  title: 'Fresher Salary & Bond Checker',
  description:
    'Check fresher salaries (CTC vs In-Hand) and bond penalties for top IT companies like TCS, Infosys, Accenture, Zoho, and more.',
};

export default function Page() {
  const content = toolsSEOContent['salary-bond-tracker'];

  return (
    <>
      <SalaryBondTracker />
      {content && (
        <div className="container pb-12">
          <ToolSEOContent
            toolSlug="salary-bond-tracker"
            enhancedContent={content}
          />
        </div>
      )}
    </>
  );
}
