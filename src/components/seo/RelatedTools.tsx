import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Tool {
  title: string;
  description: string;
  href: string;
}

export function RelatedTools({ tools }: { tools: Tool[] }) {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">Related Tools</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
          >
            <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center font-semibold text-primary">
                  Try it now <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
