import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  Calendar,
  DollarSign,
  Laptop,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Remote Jobs for Students: Earn USD/EUR from Home',
  description:
    'Find high-paying remote internships and part-time jobs with international companies. Learn about platforms, required skills, and how to receive payments in foreign currency.',
  alternates: {
    canonical: 'https://www.sproutern.com/blog/remote-jobs-for-students',
  },
};

export default function RemoteJobsGuide() {
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
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-100">
                Remote Work
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Remote Jobs for Students: Earn in USD/EUR from Home
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Regularly updated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> 15 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Geography is no longer a limit. Students in India, Nigeria, or
              Brazil can now work for startups in Silicon Valley or London,
              earning strong currencies while building a global resume.
            </p>

            <div className="my-8 rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-green-900 dark:text-green-100">
                <DollarSign className="h-5 w-5" /> The Arbitrage Advantage
              </h3>
              <p className="text-green-800 dark:text-green-200">
                Earning even a "lower" US wage (e.g., $15-20/hr) translates to
                significant purchasing power in many countries. A 20-hour/week
                gig could earn you $1,600/month (approx ₹1.3 Lakhs).
              </p>
            </div>

            <h2>Top Platforms to Find Global Remote Work</h2>
            <ul>
              <li>
                <strong>Wellfound (formerly AngelList):</strong> The #1 place
                for startup jobs. Filter by "Remote" and "Contract" or
                "Internship".
              </li>
              <li>
                <strong>Upwork & Freelancer:</strong> competitive but good for
                building an initial portfolio.
              </li>
              <li>
                <strong>Sproutern:</strong> (Shameless plug!) We specifically
                curate internships for students at global startups.
              </li>
              <li>
                <strong>RemoteOK & WeWorkRemotely:</strong> Great for full-time
                roles, but occasionally have junior contract positions.
              </li>
            </ul>

            <h2>High-Demand Remote Skills</h2>
            <p>
              Companies aren't looking for "data entry" anymore. They need
              specialized skills.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="flex items-center gap-2 font-bold">
                  <Laptop className="h-4 w-4" /> Technical
                </h4>
                <ul className="text-sm">
                  <li>React/Next.js Development</li>
                  <li>Python/AI Scripting</li>
                  <li>No-Code Tools (Webflow, Zapier)</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="flex items-center gap-2 font-bold">
                  <Globe className="h-4 w-4" /> Creative/Growth
                </h4>
                <ul className="text-sm">
                  <li>Content Writing (SEO focused)</li>
                  <li>Social Media Management</li>
                  <li>Video Editing (Short-form)</li>
                </ul>
              </div>
            </div>

            <h2>How to Get Paid?</h2>
            <p>
              Don't let payment logistics scare you. Modern tools make it easy.
            </p>
            <ul>
              <li>
                <strong>PayPal:</strong> The standard, but high fees (4-5%).
              </li>
              <li>
                <strong>Wise (formerly TransferWise):</strong> Best for bank
                transfers. Low fees and real exchange rates.
              </li>
              <li>
                <strong>Crypto (USDC):</strong> Some Web3 startups prefer paying
                in stablecoins. Fast and low fee, but check local regulations.
              </li>
            </ul>

            <h2>Building Trust Remotely</h2>
            <p>The biggest barrier for international hiring is trust.</p>
            <blockquote>
              "Over-communicate. If you're stuck, say so. If you're done, send
              an update. Visibility is your currency in remote work."
            </blockquote>
            <p>
              Use tools like Loom to record video updates instead of long
              emails. It humanizes you and shows excellent communication skills.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
