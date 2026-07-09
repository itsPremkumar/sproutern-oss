import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generateMetadata({
  title: 'TCS Salary Structure - Fresher & Experienced',
  description:
    'Complete breakdown of TCS salary structure, CTC, in-hand salary, and benefits for freshers and experienced professionals.',
  keywords: ['TCS salary', 'TCS CTC', 'TCS fresher salary', 'TCS package'],
  canonical: '/companies/tcs/salary',
});

export default function TCSSalaryPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-4 text-4xl font-bold">TCS Salary Structure</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Detailed breakdown of TCS compensation packages for different roles and
        experience levels.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Fresher Salary (0-2 years)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>CTC:</strong> ₹3.5 - 7 LPA
              </p>
              <p>
                <strong>In-hand:</strong> ₹25,000 - 45,000/month
              </p>
              <p>
                <strong>Role:</strong> Assistant System Engineer / System
                Engineer
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits & Perks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Health Insurance</li>
              <li>• Performance Bonuses</li>
              <li>• Learning & Development Programs</li>
              <li>• Work from Home Options</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
