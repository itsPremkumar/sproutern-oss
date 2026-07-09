import Link from 'next/link';
import { AlertTriangle, Search, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function InternshipNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container py-20">
        <div className="mx-auto max-w-md text-center">
          <Alert
            variant="destructive"
            className="mb-8"
          >
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="text-lg">Internship Not Found</AlertTitle>
            <AlertDescription className="mt-2">
              This internship listing is no longer available. It may have been
              filled, expired, or removed by the employer.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Don&apos;t worry! We have plenty of other great opportunities for
              you.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
              >
                <Link href="/internships">
                  <Search className="mr-2 h-4 w-4" />
                  Browse All Internships
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
