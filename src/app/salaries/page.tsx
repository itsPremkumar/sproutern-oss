import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, IndianRupee } from 'lucide-react';
import {
  salaryRoles,
  getSalaryRolesByCategory,
  salaryCategoryLabels,
} from '@/lib/salary-data';

export const metadata: Metadata = {
  title:
    'Tech Salary Guide India 2026 | Role-wise CTC, Company-wise & City-wise | Sproutern',
  description:
    'Comprehensive salary guide for 10+ tech roles in India. Compare salaries by role, experience, company (Google, Amazon, TCS, Infosys), and city. Fresher to 10+ years.',
  keywords:
    'tech salary India, software engineer salary, data scientist salary, fresher salary India, IT salary guide 2026',
  alternates: { canonical: '/salaries' },
};

export default function SalariesPage() {
  const byCategory = getSalaryRolesByCategory();

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Tech Salary Guide India',
            description: 'Salary data for tech roles in India',
            url: 'https://www.sproutern.com/salaries',
            numberOfItems: salaryRoles.length,
          }),
        }}
      />

      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <IndianRupee className="mr-1 h-3 w-3" /> {salaryRoles.length} Roles
            Covered
          </Badge>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Tech Salary Guide India 2026
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Compare salaries by role, experience level, company, and city.
            Data-driven insights for career decisions.
          </p>
        </div>
      </section>

      {Object.entries(byCategory).map(([cat, roles], idx) => (
        <section
          key={cat}
          className={idx % 2 === 0 ? 'py-12' : 'bg-muted/30 py-12'}
        >
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">
              {salaryCategoryLabels[cat]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <Link
                  key={role.slug}
                  href={`/salaries/${role.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary">
                        <span className="text-2xl">{role.icon}</span>
                        {role.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                        {role.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                          <TrendingUp className="h-4 w-4" /> ₹
                          {role.levels[0].avgCTC} - ₹
                          {role.levels[role.levels.length - 1].avgCTC} LPA
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
