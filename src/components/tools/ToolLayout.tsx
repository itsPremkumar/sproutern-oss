import { ReactNode } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { generateHowToSchema } from '@/lib/seo/schema-generators';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  relatedTools?: { href: string; label: string }[];
  howToSteps?: { name: string; text: string }[];
}

export function ToolLayout({
  title,
  description,
  children,
  relatedTools,
  howToSteps,
}: ToolLayoutProps) {
  return (
    <div className="container py-8">
      {howToSteps && (
        <SchemaMarkup
          schema={generateHowToSchema({
            name: title,
            description,
            steps: howToSteps,
          })}
        />
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="mb-6">
            <h1 className="mb-2 text-4xl font-bold">{title}</h1>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>

          <Card>
            <CardContent className="pt-6">{children}</CardContent>
          </Card>
        </div>

        {relatedTools && relatedTools.length > 0 && (
          <aside>
            <Card>
              <CardHeader>
                <CardTitle>Related Tools</CardTitle>
                <CardDescription>More tools to help you</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {relatedTools.map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {tool.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        )}
      </div>
    </div>
  );
}
