import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Linkedin,
  Camera,
  FileText,
  MessageSquare,
  Users,
  Star,
  ArrowRight,
  Award,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LinkedIn Optimization for Students: Complete Guide',
  description:
    'Transform your LinkedIn profile from invisible to irresistible. Step-by-step guide with templates, examples, and strategies that helped students get discovered by top recruiters.',
  keywords: [
    'LinkedIn optimization',
    'student LinkedIn',
    'LinkedIn profile tips',
    'LinkedIn for jobs',
    'LinkedIn headline',
    'LinkedIn summary',
    'professional networking',
  ],
  openGraph: {
    title: 'LinkedIn Optimization for Students: Complete Guide',
    description:
      'Step-by-step guide to creating a LinkedIn profile that attracts recruiters.',
    type: 'article',
    publishedTime: '2025-09-22T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Linkedin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Personal Branding
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            LinkedIn Optimization for Students: The Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Turn your LinkedIn from an online resume into a powerful career
            tool. Learn the exact strategies that helped students land
            interviews at Google, Microsoft, Amazon, and top startups.
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
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Why LinkedIn Matters
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">87%</span>
              <span>of recruiters use LinkedIn to find candidates</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">40x</span>
              <span>more likely to be found with a complete profile</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">70%</span>
              <span>of jobs are filled through networking</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">1B+</span>
              <span>professionals on LinkedIn worldwide</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#photo-banner"
                className="text-primary hover:underline"
              >
                1. Profile Photo & Banner
              </a>
            </li>
            <li>
              <a
                href="#headline"
                className="text-primary hover:underline"
              >
                2. Headline Optimization
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-primary hover:underline"
              >
                3. About Section
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-primary hover:underline"
              >
                4. Experience & Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-primary hover:underline"
              >
                5. Education Section
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                6. Skills & Endorsements
              </a>
            </li>
            <li>
              <a
                href="#recommendations"
                className="text-primary hover:underline"
              >
                7. Getting Recommendations
              </a>
            </li>
            <li>
              <a
                href="#engagement"
                className="text-primary hover:underline"
              >
                8. Content & Engagement
              </a>
            </li>
            <li>
              <a
                href="#networking"
                className="text-primary hover:underline"
              >
                9. Strategic Networking
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="text-primary hover:underline"
              >
                10. Complete Checklist
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            LinkedIn isn't just an online resume—it's your digital professional
            identity, networking platform, and job search tool all in one. Yet
            most students treat it as an afterthought, creating a basic profile
            and wondering why recruiters never find them.
          </p>
          <p>
            This guide will show you exactly how to optimize every section of
            your LinkedIn profile, with templates, examples, and strategies from
            our research of 1,000+ successful student profiles.
          </p>
        </section>

        {/* Section 1: Photo & Banner */}
        <section
          id="photo-banner"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Camera className="h-6 w-6 text-primary" />
            1. Profile Photo & Banner
          </h2>

          <p>
            Profiles with photos get <strong>21x more views</strong> and{' '}
            <strong>36x more messages</strong>. Your photo is the first thing
            people see—make it count.
          </p>

          <h3>Profile Photo Guidelines</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 text-sm font-bold">✅ Do</p>
              <ul className="space-y-1 text-sm">
                <li>• Wear professional/business casual attire</li>
                <li>• Use natural lighting (face the window)</li>
                <li>• Smile genuinely—approachability matters</li>
                <li>• Use a neutral or blurred background</li>
                <li>• Fill 60% of frame with your face</li>
                <li>• Use a recent photo (last 2 years)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 text-sm font-bold">❌ Don't</p>
              <ul className="space-y-1 text-sm">
                <li>• Use group photos or cropped images</li>
                <li>• Use selfies with visible arm/phone</li>
                <li>• Use vacation or party photos</li>
                <li>• Use heavy filters or editing</li>
                <li>• Use a pixelated/blurry image</li>
                <li>• Leave the default avatar</li>
              </ul>
            </div>
          </div>

          <h3>Banner Image Strategy</h3>
          <p>
            Your banner is free real estate for personal branding. Use it to:
          </p>
          <ul>
            <li>
              <strong>Show your industry:</strong> Tech-themed graphic, city
              skyline, workspace
            </li>
            <li>
              <strong>Display achievements:</strong> Speaking at events, awards,
              project screenshots
            </li>
            <li>
              <strong>Highlight your focus:</strong> "Open to Opportunities"
              banner, skill keywords
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Create a custom banner on Canva (free).
              Search "LinkedIn banner" for templates. The ideal size is 1584 x
              396 pixels.
            </div>
          </div>
        </section>

        {/* Section 2: Headline */}
        <section
          id="headline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            2. Crafting a Powerful Headline
          </h2>

          <p>
            Your headline appears everywhere—search results, connection
            requests, and comments. You have 220 characters to make an
            impression. Don't waste them on just "Student at [University]."
          </p>

          <h3>The Headline Formula</h3>
          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <p className="text-center text-lg font-bold">
              [Role/Aspiration] | [Key Skills] | [Value Proposition/Passion]
            </p>
          </div>

          <h3>Headline Examples by Field</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm font-bold text-blue-600">
                Software Engineering
              </p>
              <p className="text-sm">
                "Aspiring SDE | Python, React, AWS | Building scalable web apps
                | Open to Summer Internships"
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm font-bold text-green-600">Data Science</p>
              <p className="text-sm">
                "Data Science Student | Machine Learning, SQL, Python | Turning
                data into insights | Kaggle Expert"
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-sm font-bold text-purple-600">
                Product Management
              </p>
              <p className="text-sm">
                "Aspiring Product Manager | User Research, Agile | Passionate
                about EdTech | MBA Candidate"
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="text-sm font-bold text-orange-600">Marketing</p>
              <p className="text-sm">
                "Digital Marketing Enthusiast | SEO, Content Strategy, Analytics
                | Growing brands with data-driven campaigns"
              </p>
            </div>
          </div>

          <div className="my-4 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="mb-2 text-sm font-bold">❌ Weak Headlines to Avoid</p>
            <ul className="space-y-1 text-sm">
              <li>• "Student at XYZ University" (default, says nothing)</li>
              <li>• "Looking for opportunities" (passive, vague)</li>
              <li>• "Jack of all trades" (unfocused)</li>
              <li>• "Unemployed" 🚫</li>
            </ul>
          </div>
        </section>

        {/* Section 3: About */}
        <section
          id="about"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            3. Writing a Compelling About Section
          </h2>

          <p>
            Your About section is where you tell your story. It should be
            first-person, conversational, and show personality while remaining
            professional.
          </p>

          <h3>The Perfect About Section Structure (2,600 characters max)</h3>
          <ol>
            <li>
              <strong>Hook (1-2 sentences):</strong> Start with something
              memorable
            </li>
            <li>
              <strong>Background (2-3 sentences):</strong> Who you are and what
              you're studying
            </li>
            <li>
              <strong>Skills & Interests (3-4 sentences):</strong> What you're
              good at and passionate about
            </li>
            <li>
              <strong>Achievements (2-3 sentences):</strong> Notable
              accomplishments with metrics
            </li>
            <li>
              <strong>Call to Action:</strong> What you're looking for and how
              to reach you
            </li>
          </ol>

          <h3>Example About Section</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-4">
              🚀 I believe technology should solve real problems for real
              people. That's why I'm majoring in Computer Science with a focus
              on accessible design.
            </p>
            <p className="mb-4">
              Currently in my third year at IIT Delhi, I've spent the past two
              years building projects that matter—from an AI-powered
              accessibility tool that helps visually impaired students navigate
              campus (used by 500+ students) to a sentiment analysis platform
              that helps small businesses understand customer feedback.
            </p>
            <p className="mb-4">
              <strong>What I bring to the table:</strong>
              <br />
              ✓ Strong foundation in Python, JavaScript, and React
              <br />
              ✓ Experience with machine learning (TensorFlow, scikit-learn)
              <br />
              ✓ Passion for clean code and user-centered design
              <br />✓ Track record of shipping products, not just writing code
            </p>
            <p className="mb-4">
              This summer, I interned at Razorpay where I built a fraud
              detection feature that reduced chargebacks by 15%. The experience
              taught me how engineering decisions impact millions of users.
            </p>
            <p>
              <strong>Currently seeking:</strong> Summer SDE internships at
              companies building products that matter.
              <br />
              <strong>Let's connect:</strong> priya.sharma@email.com | Always
              happy to chat about tech, startups, or career advice!
            </p>
          </div>

          <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tips:</strong>
              <ul className="mt-2 space-y-1">
                <li>
                  • Use emojis sparingly to draw attention to key sections
                </li>
                <li>
                  • Include relevant keywords for SEO (recruiters search for
                  skills)
                </li>
                <li>
                  • Break text into short paragraphs—walls of text get skipped
                </li>
                <li>• Update it every 3-6 months with new achievements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Experience */}
        <section
          id="experience"
          className="scroll-mt-20"
        >
          <h2>4. Experience & Projects Section</h2>

          <p>
            This is where you showcase what you've done. For students, projects
            can be just as valuable as internships—sometimes more so.
          </p>

          <h3>How to Write Experience Entries</h3>
          <div className="my-4 rounded-lg bg-primary/10 p-4">
            <p className="mb-2 text-sm font-bold">The Formula:</p>
            <p className="text-sm">
              [Action Verb] + [What You Did] + [Quantified Impact] + [How/Skills
              Used]
            </p>
          </div>

          <h3>Example Entry</h3>
          <div className="my-4 rounded-lg bg-muted p-4">
            <p className="font-bold">Software Engineering Intern</p>
            <p className="text-sm text-muted-foreground">
              Razorpay | Mumbai | May 2024 - July 2024
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                • Developed a real-time fraud detection pipeline processing 10M+
                transactions daily using Python and Apache Kafka
              </li>
              <li>
                • Reduced false positive rate by 25% through implementing an
                improved ML model, saving the company ₹2Cr annually in manual
                review costs
              </li>
              <li>
                • Collaborated with cross-functional teams (Product, Data
                Science) to define detection rules based on customer behavior
                analysis
              </li>
            </ul>
          </div>

          <h3>Projects Section (Crucial for Students)</h3>
          <p>
            Create a "Projects" section if you have fewer than 2 internships.
            Include:
          </p>
          <ul>
            <li>Project name and link (GitHub, live demo)</li>
            <li>Technologies used</li>
            <li>Your role (especially for team projects)</li>
            <li>Impact or results (users, downloads, recognition)</li>
          </ul>
        </section>

        {/* Section 5: Education */}
        <section
          id="education"
          className="scroll-mt-20"
        >
          <h2>5. Education Section</h2>

          <p>Include:</p>
          <ul>
            <li>
              <strong>Degree and major</strong> with expected graduation date
            </li>
            <li>
              <strong>Relevant coursework</strong> (list 3-5 courses relevant to
              target roles)
            </li>
            <li>
              <strong>GPA</strong> (if 7.5/10 or 3.5/4.0+)
            </li>
            <li>
              <strong>Extracurriculars</strong> - clubs, organizations,
              leadership roles
            </li>
            <li>
              <strong>Honors/Awards</strong> - Dean's List, scholarships,
              competitions
            </li>
          </ul>
        </section>

        {/* Section 6: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2>6. Skills & Endorsements</h2>

          <p>
            Add <strong>30-50 relevant skills</strong>. This is crucial for
            appearing in recruiter searches. Order them by importance—your top 3
            show in search results.
          </p>

          <h3>Skill Categories to Include</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-bold">Technical Skills</p>
              <p>
                Programming languages, frameworks, tools, databases, cloud
                platforms
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-bold">Industry Skills</p>
              <p>
                Data analysis, UI/UX design, digital marketing, financial
                modeling
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-bold">Soft Skills</p>
              <p>
                Leadership, communication, problem-solving, project management
              </p>
            </div>
          </div>

          <h3>Getting Endorsements</h3>
          <p>
            Endorsements add credibility. Strategy: Endorse 20-30 connections
            for their skills—many will reciprocate.
          </p>
        </section>

        {/* Section 7: Recommendations */}
        <section
          id="recommendations"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            7. Getting Powerful Recommendations
          </h2>

          <p>
            Recommendations are testimonials that build trust. Aim for 2-3
            quality recommendations.
          </p>

          <h3>Who to Ask</h3>
          <ul>
            <li>Former managers/supervisors from internships</li>
            <li>Professors who know your work well</li>
            <li>Project teammates who can speak to specific skills</li>
            <li>Mentors or advisors</li>
          </ul>

          <h3>How to Ask (Template)</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Hi [Name],</p>
            <br />
            <p>
              I hope you're doing well! I'm currently updating my LinkedIn
              profile as I prepare for my internship search.
            </p>
            <br />
            <p>
              Working with you on [project/role] was a valuable experience,
              especially [specific memory]. Would you be willing to write a
              brief LinkedIn recommendation about our work together?
            </p>
            <br />
            <p>
              I'd be happy to draft a few bullet points if that would be
              helpful. Please let me know!
            </p>
            <br />
            <p>
              Best,
              <br />
              [Your Name]
            </p>
          </div>
        </section>

        {/* Section 8: Engagement */}
        <section
          id="engagement"
          className="scroll-mt-20"
        >
          <h2>8. Content & Engagement Strategy</h2>

          <p>
            Active profiles get 5-10x more visibility. You don't need to post
            daily—even commenting counts.
          </p>

          <h3>Content Ideas for Students</h3>
          <ul>
            <li>Share what you're learning (new course, certifications)</li>
            <li>Project updates and launches</li>
            <li>Industry insights and article commentary</li>
            <li>Career milestones (starting internship, graduation)</li>
            <li>Helpful resources for fellow students</li>
          </ul>

          <h3>Engagement That Works</h3>
          <ul>
            <li>
              <strong>Comment thoughtfully</strong> on posts from target
              companies/leaders
            </li>
            <li>
              <strong>Share articles</strong> with your own insights added
            </li>
            <li>
              <strong>Celebrate others'</strong> achievements genuinely
            </li>
            <li>
              <strong>Post consistently</strong> - 1-2x per week is enough
            </li>
          </ul>
        </section>

        {/* Section 9: Networking */}
        <section
          id="networking"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            9. Strategic Networking
          </h2>

          <p>
            Your network is your net worth. Build connections intentionally, not
            randomly.
          </p>

          <h3>Who to Connect With</h3>
          <ul>
            <li>Alumni from your university at target companies</li>
            <li>Recruiters in your target industry</li>
            <li>People you've met at events or online</li>
            <li>Content creators in your field</li>
            <li>Classmates and professors</li>
          </ul>

          <h3>Connection Request Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>Hi [Name],</p>
            <br />
            <p>
              I'm a CS student at [University] really interested in [their
              company/field]. I noticed you're a fellow alum and would love to
              connect and learn from your journey to [their role].
            </p>
            <br />
            <p>
              Best,
              <br />
              [Your Name]
            </p>
          </div>

          <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> After connecting, don't immediately ask
              for a job or referral. Build the relationship first—comment on
              their posts, engage genuinely, then after 2-3 interactions,
              request an informational interview.
            </div>
          </div>
        </section>

        {/* Section 10: Checklist */}
        <section
          id="checklist"
          className="not-prose scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            10. Complete LinkedIn Optimization Checklist
          </h2>

          <div className="space-y-2">
            {[
              'Professional headshot with neutral background',
              'Custom banner reflecting your brand',
              "Keyword-optimized headline (not just 'Student')",
              'Compelling About section with personality',
              'All experience entries with quantified achievements',
              'Projects section with links to work',
              'Education with relevant coursework',
              '30+ relevant skills added and ordered',
              '2-3 recommendations from credible sources',
              'Custom URL (linkedin.com/in/yourname)',
              'Contact info visible (email in About section)',
              'Open to Work badge enabled (or not, your choice)',
              'Engaging with content weekly',
              '500+ connections in your network',
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

        {/* Section 11: Common Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            11. Common LinkedIn Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Using Default Headline</p>
              <p className="text-sm text-muted-foreground">
                &quot;Student at XYZ University&quot; tells recruiters nothing.
                Use the headline formula to showcase your skills and
                aspirations.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 No Profile Photo</p>
              <p className="text-sm text-muted-foreground">
                Profiles without photos get 21x fewer views. Use a professional
                headshot with good lighting.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Empty About Section</p>
              <p className="text-sm text-muted-foreground">
                This is prime real estate for your story. Leaving it blank is
                like submitting a resume with no summary.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 No Skills Listed</p>
              <p className="text-sm text-muted-foreground">
                Skills are how recruiters search. Missing skills = invisible
                profile. Add 30-50 relevant skills.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Passive Profile</p>
              <p className="text-sm text-muted-foreground">
                Creating a profile and never engaging limits visibility.
                Comment, post, and connect regularly.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Generic Connection Requests</p>
              <p className="text-sm text-muted-foreground">
                &quot;I&apos;d like to add you to my network&quot; gets ignored.
                Always personalize your connection requests.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Immediately Asking for Jobs</p>
              <p className="text-sm text-muted-foreground">
                Don&apos;t connect and immediately ask for referrals. Build
                relationship first, then ask for help.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Unprofessional Custom URL</p>
              <p className="text-sm text-muted-foreground">
                linkedin.com/in/john-random-numbers looks unprofessional.
                Customize to linkedin.com/in/johnsmith
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: LinkedIn Myths */}
        <section
          id="myths"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            12. LinkedIn Myths Debunked
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">
                ❌ Myth: &quot;You need 500+ connections to be taken
                seriously&quot;
              </p>
              <p className="mt-2 text-muted-foreground">
                ✅ Reality: Quality matters more than quantity. 200 relevant
                connections are better than 1000 random ones. Focus on building
                meaningful relationships.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                ❌ Myth: &quot;LinkedIn is just for job hunting&quot;
              </p>
              <p className="mt-2 text-muted-foreground">
                ✅ Reality: LinkedIn is for continuous professional
                development—learning, networking, and building your brand. Start
                before you need a job.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                ❌ Myth: &quot;Posting content is only for influencers&quot;
              </p>
              <p className="mt-2 text-muted-foreground">
                ✅ Reality: Anyone can benefit from sharing insights. Even
                sharing what you&apos;re learning adds value and increases
                visibility.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                ❌ Myth: &quot;You shouldn&apos;t connect with people you
                don&apos;t know&quot;
              </p>
              <p className="mt-2 text-muted-foreground">
                ✅ Reality: LinkedIn is for networking. Connect with alumni,
                industry professionals, and people whose content inspires
                you—with personalized requests.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                ❌ Myth: &quot;Recruiters don&apos;t actually use LinkedIn&quot;
              </p>
              <p className="mt-2 text-muted-foreground">
                ✅ Reality: 87% of recruiters use LinkedIn as their primary
                sourcing tool. It&apos;s often the first place they look.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                ❌ Myth: &quot;Open to Work badge makes you look desperate&quot;
              </p>
              <p className="mt-2 text-muted-foreground">
                ✅ Reality: Studies show profiles with Open to Work get 40% more
                InMails. Recruiters don&apos;t see it negatively—it helps them
                find active candidates.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13: Advanced Tips */}
        <section
          id="advanced"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            13. Advanced LinkedIn Strategies
          </h2>

          <h3>Creator Mode</h3>
          <p>
            Turn on Creator Mode to unlock extra features: Follow button instead
            of Connect, ability to add topics to your profile, and access to
            LinkedIn newsletters. Great for students building a personal brand.
          </p>

          <h3>Featured Section</h3>
          <p>
            Pin your best work—project demos, articles, presentations, or media
            coverage—to the Featured section. This appears prominently on your
            profile.
          </p>

          <h3>LinkedIn Analytics</h3>
          <ul>
            <li>Track who&apos;s viewing your profile</li>
            <li>See which posts perform best</li>
            <li>Identify which companies are visiting</li>
            <li>Use insights to optimize your profile</li>
          </ul>

          <h3>Alumni Tool</h3>
          <p>
            LinkedIn&apos;s Alumni Tool shows where graduates from your
            university work. Use it to find potential mentors and referral
            sources at target companies.
          </p>

          <h3>LinkedIn Learning</h3>
          <p>
            Complete relevant LinkedIn Learning courses to add certifications to
            your profile. Shows commitment to continuous learning.
          </p>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Power Tip:</strong> Export your connections periodically
              via Settings. This gives you a backup of your network that you
              own, including emails of connections who shared them.
            </div>
          </div>
        </section>

        {/* Section 14: Weekly LinkedIn Routine */}
        <section
          id="routine"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            14. Weekly LinkedIn Routine
          </h2>

          <p>
            Consistency beats intensity. Here&apos;s a minimal weekly routine:
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Day</th>
                  <th className="p-3 text-left">Activity</th>
                  <th className="p-3 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Monday</td>
                  <td className="p-3">Engage with 5 posts in your feed</td>
                  <td className="p-3">10 min</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tuesday</td>
                  <td className="p-3">
                    Send 3 personalized connection requests
                  </td>
                  <td className="p-3">10 min</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Wednesday</td>
                  <td className="p-3">Share a post or insight</td>
                  <td className="p-3">15 min</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Thursday</td>
                  <td className="p-3">Respond to messages and comments</td>
                  <td className="p-3">10 min</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Friday</td>
                  <td className="p-3">
                    Review profile views, update if needed
                  </td>
                  <td className="p-3">10 min</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Weekend</td>
                  <td className="p-3">
                    Read industry content, save ideas for posts
                  </td>
                  <td className="p-3">15 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Total: ~70 minutes per week. This consistent activity signals to
            LinkedIn&apos;s algorithm that you&apos;re an active user, boosting
            your visibility in search results and feeds.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Your LinkedIn Journey Starts Now</h2>

          <p>
            An optimized LinkedIn profile is one of the highest-ROI activities
            you can do for your career. Spend a few hours implementing these
            changes, and you&apos;ll start seeing results—more profile views,
            connection requests, and eventually, recruiter messages and job
            opportunities.
          </p>

          <p>
            Remember: LinkedIn is a marathon, not a sprint. Consistent
            engagement over time compounds into career opportunities you
            can&apos;t even imagine yet.
          </p>

          <p className="text-lg font-semibold text-primary">
            Your future network is waiting. Start building it today. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ultimate-guide-first-internship"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Ultimate Internship Guide
            </Link>
            <Link
              href="/blog/student-networking-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Complete Networking Guide
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
              Browse Internship Opportunities
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
                Based on research of 1,000+ successful student LinkedIn profiles
                and interviews with recruiters from top tech companies and
                startups.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
