import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, BookOpen } from 'lucide-react';

/**
 * "Why Sproutern Exists" section - Human-written, mission-focused content
 * This is critical for E-E-A-T and should remain human-readable
 */
export function WhySprouternSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-10 shadow-xl dark:border-indigo-800 dark:from-indigo-950/40 dark:to-purple-950/40">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Why Sproutern Exists
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong>
                  Here's a hard truth about breaking into your career:
                </strong>{' '}
                students from privileged backgrounds have access to mentors,
                alumni networks, and career resources that most students can
                only dream of. Whether you're in India, studying abroad in
                Germany, or preparing for opportunities in the US — the
                information gap is real. Millions of talented students struggle
                alone, searching through fragmented advice, unsure if they're
                preparing for the right things.
              </p>
              <p>
                I've seen this inequality firsthand. As a student in Chennai, I
                watched friends from well-connected families get insider tips
                about interviews, while first-generation college students had no
                one to guide them. The gap wasn't about talent or hard work — it
                was about <em>access to information</em>.
              </p>
              <p>
                <strong>Sproutern was built to close that gap.</strong> Every
                interview experience shared on this platform is real — written
                by students who actually went through the process and wanted to
                help others. Every template, every guide, every tool has been
                created with one question in mind: "Will this actually help a
                student who has no other guidance?"
              </p>
              <p>
                We don't charge money for what students desperately need.
                There's no "premium tier" that locks away the best content. If
                you're a student preparing for your career — anywhere in the
                world — everything on Sproutern is yours. Free, forever. Because
                career success shouldn't depend on where you were born or which
                college accepted you.
              </p>
              <p className="font-medium text-foreground">
                That's why Sproutern exists. That's what drives every feature we
                build, every resource we create, and every decision we make.
                We're not just another career platform — we're on a mission to
                democratize career guidance for students worldwide.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
              >
                <Link
                  href="/about"
                  className="flex items-center gap-2"
                >
                  <User className="h-5 w-5" />
                  Read Our Full Story
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link
                  href="/resources"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Explore Resources
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 bg-primary/5 hover:bg-primary/10"
              >
                <Link
                  href="/donate"
                  className="flex items-center gap-2"
                >
                  <Heart className="h-5 w-5 text-red-500" />
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
