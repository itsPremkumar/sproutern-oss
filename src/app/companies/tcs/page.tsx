import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building2,
  Users,
  MapPin,
  Briefcase,
  GraduationCap,
  ArrowRight,
  FileText,
  IndianRupee,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'TCS Careers | Jobs, Salary & Interview Guide',
  description:
    'Complete guide to TCS careers. Learn about TCS salary, interview questions, NQT exam, and job opportunities for freshers and experienced professionals.',
  keywords:
    'tcs careers, tcs salary, tcs interview questions, tcs nqt, tcs jobs, tata consultancy services',
  alternates: { canonical: 'https://www.sproutern.com/companies/tcs' },
};

export default function TCSPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Badge className="mb-4">IT Services</Badge>
          <h1 className="mb-4 text-4xl font-bold">
            Tata Consultancy Services (TCS)
          </h1>
          <p className="text-lg text-muted-foreground">
            TCS is India&apos;s largest IT services company and a global leader
            in IT services, consulting, and business solutions.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Founded</p>
                <p className="font-bold">1968</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Employees</p>
                <p className="font-bold">6 Lakh+</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Headquarters</p>
                <p className="font-bold">Mumbai, India</p>
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

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5" />
                Salary Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Explore TCS salary structure for freshers and experienced.
              </p>
              <Button asChild>
                <Link href="/companies/tcs/salary">
                  View Salary Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Interview Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Prepare with common TCS interview questions.
              </p>
              <Button asChild>
                <Link href="/companies/tcs/interview-questions">
                  View Questions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                NQT & ILP Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Complete guide to TCS NQT exam and ILP training.
              </p>
              <Button asChild>
                <Link href="/companies/tcs/nqt-ilp-guide">
                  View Guide
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
