import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Linkedin,
  Mail,
  Coffee,
  Users,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  MessageSquare,
  Calendar,
  UserPlus,
  Award,
  BookOpen,
} from 'lucide-react';

export const metadata = getPageSEO('networking');

export default function NetworkingPage() {
  const schemas = getPageSchema('networking');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <UserPlus className="h-4 w-4" />
          Complete Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          The Art of Professional Networking
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Your network is your net worth. Learn how to build meaningful
          connections, find mentors, and unlock hidden job opportunities without
          feeling awkward.
        </p>
      </div>

      {/* Trust Stats */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">85%</p>
          <p className="text-sm text-muted-foreground">
            Jobs filled via networking
          </p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">70%</p>
          <p className="text-sm text-muted-foreground">Jobs never advertised</p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">10x</p>
          <p className="text-sm text-muted-foreground">Higher response rate</p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-primary">46%</p>
          <p className="text-sm text-muted-foreground">
            Higher job satisfaction
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Why Networking Section */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Why Networking Matters
          </h2>
          <p>
            In today's competitive job market, networking isn't optional—it's
            essential. While job portals receive thousands of applications per
            role, networking helps you bypass the crowd and connect directly
            with decision-makers.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Key Statistics
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>LinkedIn data shows</strong> referrals are 4x more
                likely to be hired than applicants
              </li>
              <li>
                • <strong>85% of jobs</strong> are filled through personal and
                professional connections
              </li>
              <li>
                • Referred candidates are hired <strong>55% faster</strong> than
                those from career sites
              </li>
              <li>
                • Networking leads to{' '}
                <strong>46% higher job satisfaction</strong> according to
                surveys
              </li>
            </ul>
          </div>

          <h3>The Hidden Job Market</h3>
          <p>
            Many positions are never publicly advertised. Companies prefer to
            hire through referrals because:
          </p>
          <ul>
            <li>
              It reduces hiring risk (referrals come with social validation)
            </li>
            <li>
              It saves recruiting costs (job ads and recruiter fees are
              expensive)
            </li>
            <li>Referred employees have 45% higher retention rates</li>
            <li>It speeds up the hiring process significantly</li>
          </ul>
        </section>

        {/* Networking Channels */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">
            Networking Channels & Strategies
          </h2>
          <div className="my-8 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <Linkedin className="h-8 w-8 text-[#0077b5]" />
                  <h3 className="m-0 text-xl font-bold">LinkedIn</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  The world's largest professional network with 900M+ members.
                  Essential for building your professional brand.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Optimize
                    profile with keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Engage
                    with industry content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Send
                    personalized connection requests
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <Mail className="h-8 w-8 text-gray-600" />
                  <h3 className="m-0 text-xl font-bold">Cold Emailing</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Direct outreach to professionals you admire. More personal
                  than LinkedIn messages.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Keep
                    emails under 150 words
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Lead with
                    value, not requests
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Follow up
                    after 5-7 days
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <Coffee className="h-8 w-8 text-amber-700" />
                  <h3 className="m-0 text-xl font-bold">
                    Informational Interviews
                  </h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  15-30 minute conversations to learn about someone's career
                  journey. Not a job request.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Ask for
                    advice, not a job
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Prepare
                    specific questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Send a
                    thank-you note after
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <Users className="h-8 w-8 text-indigo-600" />
                  <h3 className="m-0 text-xl font-bold">Events & Meetups</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  In-person connections are often stronger. Attend industry
                  events, hackathons, and conferences.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Prepare
                    an elevator pitch
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Exchange
                    LinkedIn/cards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> Follow up
                    within 48 hours
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* LinkedIn Optimization */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-[#0077b5]" />
            LinkedIn Profile Optimization Guide
          </h2>
          <p>
            Your LinkedIn profile is your digital first impression. Recruiters
            spend an average of 7 seconds scanning a profile. Here's how to make
            every second count:
          </p>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Professional Headshot',
                desc: 'Professional photo gets 14x more profile views. Use a clear, well-lit photo with a simple background.',
              },
              {
                title: 'Compelling Headline',
                desc: "Don't just use your job title. Include value proposition: 'Frontend Developer | Building Accessible Web Apps | React Expert'",
              },
              {
                title: 'Keyword-Rich Summary',
                desc: 'Write 3-5 paragraphs about your experience, skills, and goals. Include industry keywords for search.',
              },
              {
                title: 'Featured Section',
                desc: 'Showcase your best work: portfolio links, published articles, presentations, or certifications.',
              },
              {
                title: 'Detailed Experience',
                desc: "Use action verbs and quantify achievements. 'Increased website traffic by 150%' beats 'Managed website.'",
              },
              {
                title: 'Skills & Endorsements',
                desc: 'List relevant skills. Ask colleagues to endorse you. Most important skills should be pinned.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="not-prose my-6 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Common LinkedIn Mistakes
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span> Using "Open to Work"
                banner without strategy (can appear desperate)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span> Not customizing
                connection request messages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span> Listing every job you've
                ever had (focus on relevant ones)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span> Ignoring LinkedIn
                activity (you should engage 2-3x weekly)
              </li>
            </ul>
          </div>

          <div className="not-prose my-6 rounded-xl border bg-primary/5 p-6">
            <h3 className="mb-2 text-lg font-bold">
              Want a stronger LinkedIn profile before you start networking?
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Use our dedicated LinkedIn optimization guide for headline
              examples, summary structure, profile checklists, and recruiter
              visibility tips.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/resources/linkedin-optimization">
                  Read LinkedIn Guide
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link href="/tools/linkedin-generator">
                  Try LinkedIn Generator
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cold Outreach Templates */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            Cold Outreach Templates
          </h2>
          <p>
            Struggling with what to say? Use these templates as a starting
            point, but always customize them for each person.
          </p>

          <div className="not-prose space-y-6">
            <div className="rounded-xl border bg-secondary/30 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-[#0077b5]" />
                <h3 className="m-0 text-lg font-bold">
                  LinkedIn Connection Request
                </h3>
              </div>
              <p className="rounded border bg-background p-4 font-mono text-sm">
                Hi [Name],
                <br />
                <br />
                I came across your profile while researching [Industry/Company]
                and was impressed by your transition from [Role A] to [Role B].
                As a [Your Role/Student] aiming for a similar path, I'd love to
                connect and learn from your experience.
                <br />
                <br />
                Best,
                <br />
                [Your Name]
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Keep it under 300 characters to fit in the connection request
                box.
              </p>
            </div>

            <div className="rounded-xl border bg-secondary/30 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <h3 className="m-0 text-lg font-bold">
                  Informational Interview Request (Email)
                </h3>
              </div>
              <p className="rounded border bg-background p-4 font-mono text-sm">
                Subject: Quick question from a [University] student
                <br />
                <br />
                Hi [Name],
                <br />
                <br />
                I'm a final year student at [University] passionate about
                [Industry]. I noticed you transitioned from [Role A] to [Role
                B], which is exactly the path I hope to take.
                <br />
                <br />
                Would you be open to a 15-minute chat? I'd love to hear your
                perspective on [Specific Topic]. I know you're busy, so even a
                brief email reply would be incredibly helpful.
                <br />
                <br />
                Thanks,
                <br />
                [Your Name]
              </p>
            </div>

            <div className="rounded-xl border bg-secondary/30 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <h3 className="m-0 text-lg font-bold">
                  Follow-Up After No Response (5-7 days later)
                </h3>
              </div>
              <p className="rounded border bg-background p-4 font-mono text-sm">
                Hi [Name],
                <br />
                <br />
                Just bumping this up in case it got buried. I completely
                understand if you're too busy—I'd be grateful even for a quick
                reply pointing me to any resources or advice you'd recommend for
                someone entering [Industry].
                <br />
                <br />
                Thanks again for your time!
                <br />
                [Your Name]
              </p>
            </div>

            <div className="rounded-xl border bg-secondary/30 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                <h3 className="m-0 text-lg font-bold">
                  Thank You Note After a Chat
                </h3>
              </div>
              <p className="rounded border bg-background p-4 font-mono text-sm">
                Hi [Name],
                <br />
                <br />
                Thank you so much for taking the time to chat with me today.
                Your advice on [specific topic] was incredibly valuable—I
                especially appreciated your insight about [specific takeaway].
                <br />
                <br />
                I've already started [action you're taking based on their
                advice]. I'll be sure to keep you posted on my progress!
                <br />
                <br />
                Thanks again,
                <br />
                [Your Name]
              </p>
            </div>
          </div>
        </section>

        {/* Networking Do's and Don'ts */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">
            Networking Do's and Don'ts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-green-700 dark:text-green-300">
                <CheckCircle className="h-5 w-5" />
                Do's
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    <strong>Give before you ask:</strong> Share articles, make
                    introductions, offer help
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    <strong>Be specific:</strong> "Can I ask about your
                    transition from engineer to PM?" beats "Can I pick your
                    brain?"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    <strong>Follow up consistently:</strong> Keep connections
                    warm with occasional updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    <strong>Be genuine:</strong> People can sense transactional
                    behavior. Build real relationships.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    <strong>Respect their time:</strong> Keep meetings to the
                    agreed duration
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-950">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">
                <AlertTriangle className="h-5 w-5" />
                Don'ts
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>
                    <strong>Don't ask for a job directly:</strong> Ask for
                    advice and let referrals happen naturally
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>
                    <strong>Don't mass-message:</strong> Generic messages get
                    ignored. Personalization is key.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>
                    <strong>Don't be pushy:</strong> If someone doesn't respond
                    after 2 follow-ups, move on.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>
                    <strong>Don't forget to follow up:</strong> Meeting someone
                    once isn't networking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>
                    <strong>Don't network only when you need something:</strong>{' '}
                    Build relationships proactively
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2>Frequently Asked Questions</h2>

          <div className="not-prose space-y-4">
            {[
              {
                q: "I'm introverted. How can I network effectively?",
                a: 'Introverts make great networkers! Focus on one-on-one connections rather than large events. Written communication (emails, LinkedIn) can be your strength. Quality matters more than quantity—building deep relationships with 5 people is better than superficial connections with 50.',
              },
              {
                q: 'How many connections should I aim for on LinkedIn?',
                a: "Quality over quantity. Having 500+ connections helps your profile visibility, but focus on meaningful connections relevant to your industry. It's better to have 200 engaged connections than 5,000 inactive ones.",
              },
              {
                q: 'What should I say when following up with someone I met at an event?',
                a: "Reference something specific from your conversation: 'Hi [Name], great meeting you at [Event]! I really enjoyed our chat about [Topic]. Would love to continue the conversation—are you free for a coffee next week?' Send the follow-up within 24-48 hours while the memory is fresh.",
              },
              {
                q: 'Is it okay to reach out to strangers on LinkedIn?',
                a: "Absolutely! That's what LinkedIn is for. The key is personalization. Mention why you're reaching out to them specifically—a mutual connection, a post they wrote, their career path, or their company. Never send the default connection request.",
              },
              {
                q: 'How do I ask for a referral without being awkward?',
                a: "Don't ask directly for a referral in your first interaction. Build rapport first through informational interviews or regular engagement. When you do ask, make it easy: 'I noticed [Company] is hiring for [Role]. Would you be comfortable referring me? I'd be happy to send you my resume and a note you could use.'",
              },
              {
                q: 'How often should I post on LinkedIn?',
                a: "Aim for 2-3 times per week. Share industry insights, lessons from your projects, or thoughtful comments on others' posts. Consistency matters more than frequency. Engage with others' content daily—comments are as valuable as posts.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Start Networking Today</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            The best time to start building your network was yesterday. The
            second best time is now. Create your Sproutern profile and connect
            with students and professionals in your field.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/signup">Create Profile</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/interview-prep">
                Prepare for Interviews
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/resume-guide"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Resume Writing Guide</h3>
              <p className="text-sm text-muted-foreground">
                Create an ATS-friendly resume
              </p>
            </Link>
            <Link
              href="/resources/interview-prep"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Interview Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Ace your next interview
              </p>
            </Link>
            <Link
              href="/blog/cold-emailing-tips"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Cold Emailing Blog</h3>
              <p className="text-sm text-muted-foreground">
                Advanced outreach strategies
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
