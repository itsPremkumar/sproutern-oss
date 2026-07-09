import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Users,
  Lightbulb,
  CheckCircle,
  MessageSquare,
  Coffee,
  ArrowRight,
  Heart,
  UserPlus,
  Linkedin,
  Mail,
  Star,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Networking Guide for Students',
  description:
    'Learn proven networking strategies for students and introverts. Master LinkedIn networking, cold outreach, informational interviews, and building relationships that lead to opportunities.',
  keywords: [
    'networking for students',
    'professional networking',
    'how to network',
    'networking tips',
    'LinkedIn networking',
    'informational interview',
    'networking for introverts',
  ],
  openGraph: {
    title: 'Complete Networking Guide for Students',
    description:
      'Build professional connections that open doors to opportunities.',
    type: 'article',
    publishedTime: '2025-10-12T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Development
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            The Power of Networking: Build Professional Connections as a Student
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            70% of jobs are filled through networking. Learn how to build
            genuine relationships that lead to opportunities—even if you're an
            introvert.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 text-lg font-bold">📊 Networking Facts</h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">70%</span>
              <span>
                of jobs are never publicly advertised (hidden job market)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">85%</span>
              <span>of positions are filled through networking</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">4x</span>
              <span>more likely to get a job through warm introduction</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">46%</span>
              <span>of freelance work comes from referrals</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#mindset"
                className="text-primary hover:underline"
              >
                1. The Right Mindset
              </a>
            </li>
            <li>
              <a
                href="#existing"
                className="text-primary hover:underline"
              >
                2. Your Existing Network
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                className="text-primary hover:underline"
              >
                3. LinkedIn Networking
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-primary hover:underline"
              >
                4. Events & Conferences
              </a>
            </li>
            <li>
              <a
                href="#informational"
                className="text-primary hover:underline"
              >
                5. Informational Interviews
              </a>
            </li>
            <li>
              <a
                href="#cold-outreach"
                className="text-primary hover:underline"
              >
                6. Cold Outreach That Works
              </a>
            </li>
            <li>
              <a
                href="#provide-value"
                className="text-primary hover:underline"
              >
                7. Providing Value First
              </a>
            </li>
            <li>
              <a
                href="#introverts"
                className="text-primary hover:underline"
              >
                8. For Introverts
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            "It's not what you know, it's who you know." This saying exists
            because it's true—but not in the way you might think. Networking
            isn't about schmoozing or being fake. It's about building genuine
            relationships with people who share your professional interests.
          </p>
          <p>
            The good news? Networking is a skill, and like any skill, it can be
            learned. This guide will show you how students (even shy ones) can
            build a powerful professional network.
          </p>
        </section>

        {/* Mindset */}
        <section
          id="mindset"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            1. The Right Networking Mindset
          </h2>

          <h3>What Networking ISN'T</h3>
          <div className="my-4 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <ul className="space-y-1 text-sm">
              <li>❌ Asking strangers for jobs within 5 minutes of meeting</li>
              <li>
                ❌ Collecting business cards/LinkedIn connections as trophies
              </li>
              <li>❌ Only reaching out when you need something</li>
              <li>❌ Being someone you're not to impress people</li>
              <li>❌ Transactional "what can you do for me" thinking</li>
            </ul>
          </div>

          <h3>What Networking IS</h3>
          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <ul className="space-y-1 text-sm">
              <li>✅ Building genuine relationships over time</li>
              <li>✅ Learning from people with more experience</li>
              <li>✅ Sharing knowledge and opportunities</li>
              <li>✅ Being curious about others' stories and experiences</li>
              <li>✅ Helping others without expecting immediate returns</li>
            </ul>
          </div>

          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-3 font-bold">The Give-First Philosophy</h4>
            <p className="text-sm">
              The best networkers focus on what they can give, not what they can
              get. Paradoxically, this approach leads to receiving more
              opportunities in the long run. Ask yourself: "How can I be helpful
              to this person?"
            </p>
          </div>
        </section>

        {/* Existing Network */}
        <section
          id="existing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <UserPlus className="h-6 w-6 text-primary" />
            2. Leveraging Your Existing Network
          </h2>

          <p>You already have a network. It's bigger than you think:</p>

          <h3>Your Hidden Network</h3>
          <ul>
            <li>
              <strong>Family:</strong> Parents' colleagues, relatives in your
              target industry
            </li>
            <li>
              <strong>Friends' families:</strong> Your roommate's dad works at
              Google?
            </li>
            <li>
              <strong>Professors:</strong> Often have industry connections and
              research networks
            </li>
            <li>
              <strong>Alumni:</strong> People who went to your college are more
              likely to help
            </li>
            <li>
              <strong>Classmates:</strong> They'll be professionals in 2-3 years
            </li>
            <li>
              <strong>Former colleagues:</strong> From part-time jobs,
              volunteering, clubs
            </li>
          </ul>

          <h3>How to Activate This Network</h3>
          <ol>
            <li>Make a list of everyone you know (seriously, write it down)</li>
            <li>Note anyone connected to your target industry/company</li>
            <li>Reach out with a genuine, non-asking message first</li>
            <li>
              Let them know what you're interested in (they can't help if they
              don't know)
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Post on LinkedIn/social media that
              you're looking for internships in [field]. Your network can only
              help if they know what you're looking for!
            </div>
          </div>
        </section>

        {/* LinkedIn */}
        <section
          id="linkedin"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-primary" />
            3. LinkedIn Networking Strategy
          </h2>

          <p>
            LinkedIn is the most powerful professional networking tool. Here's
            how to use it strategically:
          </p>

          <h3>Connection Strategy</h3>
          <div className="my-6 space-y-4">
            <div className="border-l-4 border-blue-500 p-4 pl-4">
              <h4 className="font-bold">Tier 1: High-Priority</h4>
              <p className="text-sm text-muted-foreground">
                Alumni at target companies, recruiters in your field, people who
                post content you learn from
              </p>
            </div>
            <div className="border-l-4 border-green-500 p-4 pl-4">
              <h4 className="font-bold">Tier 2: Medium-Priority</h4>
              <p className="text-sm text-muted-foreground">
                People at target companies (any role), industry thought leaders,
                conference attendees
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 p-4 pl-4">
              <h4 className="font-bold">Tier 3: Low-Priority</h4>
              <p className="text-sm text-muted-foreground">
                General professionals in your field, people who like/comment on
                posts you follow
              </p>
            </div>
          </div>

          <h3>Connection Request Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Hi [Name],</p>
            <br />
            <p>
              I'm a [Year] student at [College] studying [Major]. I came across
              your profile while researching [Company/Role/Topic] and was
              impressed by [specific thing about them].
            </p>
            <br />
            <p>
              I'd love to connect and learn from your experience in
              [industry/role].
            </p>
            <br />
            <p>
              Best,
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Engagement Strategy</h3>
          <ul>
            <li>
              <strong>Comment thoughtfully</strong> on posts from people you
              want to notice you
            </li>
            <li>
              <strong>Share your learnings</strong> - What you're working on,
              courses you took
            </li>
            <li>
              <strong>Congratulate others</strong> on job changes, promotions,
              achievements
            </li>
            <li>
              <strong>Reshare with insights</strong> - Add your perspective to
              articles
            </li>
          </ul>
        </section>

        {/* Events */}
        <section
          id="events"
          className="scroll-mt-20"
        >
          <h2>4. Networking at Events & Conferences</h2>

          <h3>Before the Event</h3>
          <ul>
            <li>Research attendees and speakers—identify 3-5 people to meet</li>
            <li>Prepare your 30-second introduction</li>
            <li>Have questions ready for speakers/panelists</li>
            <li>Bring business cards (or Blinq/digital card)</li>
          </ul>

          <h3>During the Event</h3>
          <ul>
            <li>
              <strong>Arrive early:</strong> Fewer people, easier to start
              conversations
            </li>
            <li>
              <strong>Don't stick with friends:</strong> Force yourself to meet
              new people
            </li>
            <li>
              <strong>Ask open-ended questions:</strong> "What brings you here?"
              "What are you working on?"
            </li>
            <li>
              <strong>Take notes:</strong> On the back of their card or in your
              phone
            </li>
          </ul>

          <h3>After the Event (Critical!)</h3>
          <ul>
            <li>Connect on LinkedIn within 24 hours</li>
            <li>Reference something specific from your conversation</li>
            <li>Suggest a follow-up coffee chat if appropriate</li>
          </ul>
        </section>

        {/* Informational Interviews */}
        <section
          id="informational"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Coffee className="h-6 w-6 text-primary" />
            5. Informational Interviews
          </h2>

          <p>
            An informational interview is a casual conversation with a
            professional to learn about their career path and industry. It's one
            of the most powerful networking tools that students underutilize.
          </p>

          <h3>How to Request One</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Subject: Quick question about your career in [industry]</p>
            <br />
            <p>Hi [Name],</p>
            <br />
            <p>
              I'm a [Year] [Major] student at [College] exploring careers in
              [their field]. I came across your profile and was fascinated by
              your journey from [their past role] to [current role].
            </p>
            <br />
            <p>
              I'd love to learn about your experience at [Company] and any
              advice you have for someone starting in [field]. Would you be open
              to a 20-minute virtual coffee chat in the next couple of weeks?
            </p>
            <br />
            <p>
              I completely understand if you're too busy—I know your time is
              valuable.
            </p>
            <br />
            <p>
              Best,
              <br />
              [Name]
              <br />
              [LinkedIn URL]
            </p>
          </div>

          <h3>Questions to Ask</h3>
          <ul>
            <li>How did you get into this field?</li>
            <li>What's a typical day/week like in your role?</li>
            <li>What do you wish you knew when you were starting out?</li>
            <li>What skills are most important for success in this field?</li>
            <li>Is there anyone else you'd recommend I speak with?</li>
          </ul>

          <div className="my-4 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="mb-2 text-sm font-bold">⚠️ Don't Ask for a Job!</p>
            <p className="text-sm">
              The purpose is to learn, not to pitch yourself. If you make a
              great impression, they may offer to help—but don't ask directly.
            </p>
          </div>

          <h3>After the Conversation</h3>
          <ul>
            <li>Send a thank you message within 24 hours</li>
            <li>Reference something specific you learned</li>
            <li>Follow through on anything they suggested</li>
            <li>Stay in touch periodically (every 2-3 months)</li>
          </ul>
        </section>

        {/* Cold Outreach */}
        <section
          id="cold-outreach"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            6. Cold Outreach That Actually Works
          </h2>

          <p>
            Cold outreach has low response rates (10-20%), but when done right,
            it can open doors that seem impossible.
          </p>

          <h3>The Formula</h3>
          <ol>
            <li>
              <strong>Personalization:</strong> Show you've researched them
              specifically
            </li>
            <li>
              <strong>Relevance:</strong> Explain why you're reaching out to
              THEM
            </li>
            <li>
              <strong>Value:</strong> Make the interaction easy/beneficial for
              them
            </li>
            <li>
              <strong>Clear Ask:</strong> One specific, small request
            </li>
            <li>
              <strong>Brevity:</strong> 150 words max
            </li>
          </ol>

          <h3>What NOT to Do</h3>
          <ul>
            <li>❌ Generic copy-paste messages</li>
            <li>❌ Long life story (save it for the call)</li>
            <li>❌ Attach resume in first message</li>
            <li>❌ Multiple asks at once</li>
            <li>❌ Being overly formal or informal</li>
          </ul>
        </section>

        {/* Provide Value */}
        <section
          id="provide-value"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            7. How Students Can Provide Value
          </h2>

          <p>
            "But I'm just a student—what value can I offer?" More than you
            think:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Knowledge Value</h4>
              <ul className="space-y-1 text-sm">
                <li>• Share relevant research or articles</li>
                <li>• Summarize industry trends</li>
                <li>• Offer a fresh perspective</li>
                <li>• Teach them tools they don't know</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Connection Value</h4>
              <ul className="space-y-1 text-sm">
                <li>• Introduce two people who should meet</li>
                <li>• Share job postings they'd be good for</li>
                <li>• Invite them to relevant events</li>
                <li>• Connect them with other students/alumni</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Visibility Value</h4>
              <ul className="space-y-1 text-sm">
                <li>• Engage with their content publicly</li>
                <li>• Write a LinkedIn recommendation</li>
                <li>• Share their work with your network</li>
                <li>• Quote them in your content</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Action Value</h4>
              <ul className="space-y-1 text-sm">
                <li>• Be a beta tester for their product</li>
                <li>• Give feedback on their work</li>
                <li>• Help with small projects/research</li>
                <li>• Volunteer for their events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Introverts */}
        <section
          id="introverts"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            8. Networking for Introverts
          </h2>

          <p>
            Networking can feel exhausting if you're an introvert. But
            introversion is not a disadvantage—some of the best networkers are
            introverts because they excel at deep, meaningful conversations.
          </p>

          <h3>Introvert-Friendly Strategies</h3>
          <ul>
            <li>
              <strong>1-on-1 over group events:</strong> Coffee chats beat
              career fairs
            </li>
            <li>
              <strong>Written communication:</strong> LinkedIn, email, Twitter
              work great
            </li>
            <li>
              <strong>Prepare ahead:</strong> Research people, prepare questions
            </li>
            <li>
              <strong>Quality over quantity:</strong> 5 deep relationships beat
              50 shallow ones
            </li>
            <li>
              <strong>Smaller events:</strong> Workshops beat conferences
            </li>
            <li>
              <strong>Strategic breaks:</strong> At events, take solo breaks to
              recharge
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Reframe it:</strong> You're not "networking"—you're having
              interesting conversations with people who do cool things. That's
              it.
            </div>
          </div>

          <h3>The Introvert's Networking Script</h3>
          <p>
            Use questions to let others talk (introverts are great listeners):
          </p>
          <ul>
            <li>"What are you working on that excites you?"</li>
            <li>"What got you into [their field]?"</li>
            <li>"What's the most interesting problem you're solving?"</li>
          </ul>
        </section>

        {/* Checklist */}
        <section className="not-prose">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            Networking Action Checklist
          </h2>

          <div className="space-y-2">
            {[
              'Optimize your LinkedIn profile (headline, photo, about)',
              'Make a list of 10 people you already know in your target industry',
              'Set a goal: Connect with 3 new people this week',
              'Identify 5 dream companies and find alumni connections',
              'Request 2 informational interviews this month',
              'Engage with 5 LinkedIn posts daily (thoughtful comments)',
              'Attend at least 1 industry event/webinar per month',
              'Follow up with everyone you meet within 24 hours',
              'Keep a CRM/spreadsheet of your network',
              'Find ways to help 2 people in your network this week',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>The Long Game</h2>

          <p>
            Networking is a long-term investment. The coffee chat you have today
            might lead to a job opportunity 3 years from now. The connection you
            help might remember you when they're hiring.
          </p>

          <p>
            Start small: one new connection a week, one helpful action a day.
            Over time, these compound into a powerful professional network that
            opens doors throughout your career.
          </p>

          <p className="text-lg font-semibold text-primary">
            Your network is your net worth. Start building it today. 🤝
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization Guide
            </Link>
            <Link
              href="/blog/50-common-interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              50 Interview Questions
            </Link>
            <Link
              href="/blog/building-impressive-portfolio"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building Guide
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Our team includes career coaches who've helped thousands of
                students build meaningful professional networks.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
