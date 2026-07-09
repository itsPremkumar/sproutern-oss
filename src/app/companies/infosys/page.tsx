import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building2,
  Users,
  MapPin,
  Briefcase,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Infosys Careers | Jobs, Salary & Interview Guide',
  description:
    'Complete guide to Infosys careers. Learn about Infosys salary, interview questions, and job opportunities for freshers and experienced professionals.',
  keywords:
    'infosys careers, infosys salary, infosys interview questions, infosys jobs, infosys limited',
  alternates: { canonical: 'https://www.sproutern.com/companies/infosys' },
};

export default function InfosysPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Badge className="mb-4">IT Services</Badge>
          <h1 className="mb-4 text-4xl font-bold">Infosys Limited</h1>
          <p className="text-lg text-muted-foreground">
            Infosys is a global leader in next-generation digital services and
            consulting, enabling clients in more than 50 countries.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Founded</p>
                <p className="font-bold">1981</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Employees</p>
                <p className="font-bold">3.4 Lakh+</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Headquarters</p>
                <p className="font-bold">Bangalore, India</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Industry</p>
                <p className="font-bold">IT Services</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Interview Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Prepare with common Infosys interview questions and tips.
              </p>
              <Button asChild>
                <Link href="/companies/infosys/interview-questions">
                  View Questions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                All Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Explore other top IT companies and their career opportunities.
              </p>
              <Button
                asChild
                variant="outline"
              >
                <Link href="/companies">
                  View All Companies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
