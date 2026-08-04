import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Work Visa Guide for Indians: USA, UK, Canada & More',
  description:
    'Complete guide for Indian professionals seeking work visas abroad. Detailed analysis of H-1B, UK Skilled Worker, Canada Express Entry, and Germany Job Seeker visas.',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/blog/work-visa-guide-indians',
  },
};

export default function WorkVisaGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Button
          asChild
          variant="ghost"
          className="mb-8"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="mx-auto max-w-4xl">
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Global Careers
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Work Visa Guide for Indians: Top Destinations
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Regularly updated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> 20 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              For Indian professionals, the dream of working abroad is often
              complicated by complex visa regulations. This comprehensive guide
              breaks down the most popular work visa pathways, offering clarity
              and actionable strategies.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
              <h3 className="mb-2 text-lg font-bold text-blue-900 dark:text-blue-100">
                Why read this guide?
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                We cover specific requirements for Indian citizens, including
                income thresholds, point systems, and recent policy changes in
                the USA, UK, Canada, and Germany.
              </p>
            </div>

            <h2>🇺🇸 United States: The H-1B & Alternatives</h2>
            <p>
              The US remains the top destination for Indian tech talent, but
              reliance on the H-1B lottery is risky.
            </p>
            <ul>
              <li>
                <strong>H-1B Visa:</strong> The standard path for specialty
                occupations. Requires employer sponsorship. Cap of 85,000
                annually (regular + masters cap).
              </li>
              <li>
                <strong>L-1 Visa:</strong> For intra-company transfers. Great if
                you work for an MNC in India (Microsoft, Amazon, etc.) and
                transfer to a US office. No lottery!
              </li>
              <li>
                <strong>O-1 Visa:</strong> For individuals with extraordinary
                ability. If you have national awards, patents, or high-impact
                publications, this is a powerful alternative to H-1B.
              </li>
            </ul>

            <h2>🇬🇧 United Kingdom: The Skilled Worker Route</h2>
            <p>
              Post-Brexit, the UK has leveled the playing field. The{' '}
              <strong>Skilled Worker Visa</strong> is points-based.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Requirements</h4>
                <ul className="text-sm">
                  <li>Job offer from licensed sponsor</li>
                  <li>Salary usually above £26,200 (varies by code)</li>
                  <li>B1 Level English</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-bold">Pros for Indians</h4>
                <ul className="text-sm">
                  <li>No lottery system</li>
                  <li>Faster processing (often 3-4 weeks)</li>
                  <li>Leads to ILR (Permanent Residence) in 5 years</li>
                </ul>
              </div>
            </div>

            <h2>🇨🇦 Canada: The Express Entry Champion</h2>
            <p>
              Canada offers the most predictable pathway via{' '}
              <strong>Express Entry</strong>.
            </p>
            <ul>
              <li>
                <strong>Category-Based Selection:</strong> Canada prioritizes
                STEM, Healthcare, and Trades categories. If you are in Tech,
                your CRS score cutoff might be lower.
              </li>
              <li>
                <strong>Provincial Nominee Programs (PNP):</strong> Ontario
                (OINP) and BC (BC PNP) tech draws are excellent options if your
                CRS score is below the federal cutoff.
              </li>
            </ul>

            <h2>🇩🇪 Germany: The Opportunity Card (Chancenkarte)</h2>
            <p>
              Germany's new <strong>Opportunity Card</strong> (introduced late )
              allows non-EU citizens to enter Germany to <em>look</em> for work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Points Based:</strong> Points for age, language
                  (English/German), experience, and connection to Germany.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>No Job Offer Needed:</strong> You can move first, then
                  find a job.
                </span>
              </li>
            </ul>

            <h2>Strategic Tips for Indian Applicants</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h4 className="flex items-center gap-2 font-bold">
                  <Globe className="h-4 w-4" /> Global Mobility Strategy
                </h4>
                <p className="text-sm">
                  Don't put all eggs in one basket. Apply for Canada Express
                  Entry <em>while</em> waiting for H-1B. Consider an internal
                  transfer (L-1/ICT) as the safest route.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h4 className="flex items-center gap-2 font-bold">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" /> Document
                  Verification
                </h4>
                <p className="text-sm">
                  Indian degrees often need WES evaluation for Canada/US. Start
                  this process early (takes 2-3 months).
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2>Conclusion</h2>
              <p>
                Global career opportunities are more diverse than ever. While
                the US H-1B remains popular, the UK and Germany are emerging as
                faster, more reliable alternatives for Indian talent.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
