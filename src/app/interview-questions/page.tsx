import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileQuestion } from 'lucide-react';
import {
  iqTopics,
  getIQByCategory,
  iqCategoryLabels,
} from '@/lib/interview-questions-data';

export const metadata: Metadata = {
  title:
    'Interview Questions & Answers 2026 | HR, SQL, Java, Python, React & More | Sproutern',
  description:
    'Practice 100+ interview questions with detailed answers across 15 topics: HR, SQL, Java, Python, React, DSA, System Design, and more. Prepare for FAANG and MNC interviews.',
  keywords:
    'interview questions, HR interview questions, SQL interview questions, Java interview questions, Python interview questions, React interview questions, DSA interview questions, coding interview preparation',
  alternates: { canonical: '/interview-questions' },
};

const companies = [
  { name: 'Google', slug: 'google' },
  { name: 'Amazon', slug: 'amazon' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Accenture', slug: 'accenture' },
  { name: 'TCS', slug: 'tcs' },
  { name: 'Infosys', slug: 'infosys' },
  { name: 'Cognizant', slug: 'cognizant' },
  { name: 'Wipro', slug: 'wipro' },
];

export default function InterviewQuestionsPage() {
  const byCategory = getIQByCategory();

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Interview Questions & Answers',
            description: '100+ interview questions across 15 topics',
            url: 'https://www.sproutern.com/interview-questions',
            numberOfItems: iqTopics.length,
          }),
        }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            {iqTopics.reduce((a, t) => a + t.questions.length, 0)}+ Questions
          </Badge>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Interview Questions & Answers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Practice questions across 15 topics — from HR to System Design.
            Detailed answers with examples.
          </p>
        </div>
      </section>

      {/* Topic-Based Questions */}
      {Object.entries(byCategory).map(([category, topics], idx) => (
        <section
          key={category}
          className={idx % 2 === 0 ? 'py-12' : 'bg-muted/30 py-12'}
        >
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">
              {iqCategoryLabels[category] || category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/interview-questions/${topic.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary">
                        <span className="text-2xl">{topic.icon}</span>
                        {topic.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                        {topic.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{topic.questions.length} questions</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Company-Specific */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
            <FileQuestion className="h-6 w-6 text-primary" /> Company-Specific
            Questions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((company) => (
              <Link
                key={company.slug}
                href={`/companies/${company.slug}/interview-questions`}
                className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium group-hover:text-primary">
                  {company.name}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
