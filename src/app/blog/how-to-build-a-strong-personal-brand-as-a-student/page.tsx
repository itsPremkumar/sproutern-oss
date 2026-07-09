import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Briefcase,
  Search,
  FileText,
  MessageCircle,
  Award,
  AlertCircle,
  Globe,
  Zap,
  Star,
  Shield,
  Heart,
  Coffee,
  GraduationCap,
  Building,
  Mail,
  Camera,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Edit,
  Eye,
  Share2,
  Sparkles,
  PenTool,
  Megaphone,
  BarChart2,
  Layers,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Strong Personal Brand as a Student',
  description:
    'Complete guide to building a powerful personal brand as a student. Learn how to stand out, create your online presence, leverage social media, and launch your career with a memorable brand.',
  keywords: [
    'personal brand student',
    'personal branding',
    'student brand building',
    'linkedin personal brand',
    'social media branding',
    'career branding',
    'build online presence',
    'professional identity',
    'student career',
    'networking students',
    'digital presence',
    'personal marketing',
  ],
  openGraph: {
    title: 'How to Build a Strong Personal Brand as a Student ',
    description:
      'Your complete roadmap to creating a personal brand that opens doors.',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Development
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Build a Strong Personal Brand as a Student (2025 Guide)
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your personal brand is your professional identity—the unique
            combination of skills, experiences, and personality that you want
            the world to see. Learn how to build a powerful brand that opens
            doors to opportunities before you even graduate.
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
              <span>30 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            In today&apos;s hyper-connected world, your personal brand
            isn&apos;t just a nice-to-have—it&apos;s essential. Before you walk
            into an interview, apply for an internship, or send a cold email,
            hiring managers and recruiters are already forming opinions about
            you based on your digital presence.
          </p>
          <p>
            Think about it: when was the last time you met someone new and
            didn&apos;t look them up on LinkedIn or Google afterward? Employers
            do the same thing. In fact, 70% of employers check candidates&apos;
            social media profiles before making hiring decisions. Your personal
            brand is being built whether you&apos;re intentional about it or
            not.
          </p>
          <p>
            The good news? As a student, you have a unique advantage.
            You&apos;re at the perfect stage to shape your narrative from the
            ground up. You don&apos;t have to rebrand or overcome outdated
            perceptions—you get to create your professional identity from
            scratch.
          </p>
          <p>
            This comprehensive guide will walk you through everything you need
            to know about building a personal brand that positions you for
            success. From defining your unique value proposition to mastering
            social media platforms, you&apos;ll learn actionable strategies used
            by successful professionals and adapted for students like you.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what-is-personal-brand"
                className="text-primary hover:underline"
              >
                1. What is Personal Branding?
              </a>
            </li>
            <li>
              <a
                href="#why-it-matters"
                className="text-primary hover:underline"
              >
                2. Why Personal Branding Matters
              </a>
            </li>
            <li>
              <a
                href="#self-discovery"
                className="text-primary hover:underline"
              >
                3. Self-Discovery: Finding Your Brand
              </a>
            </li>
            <li>
              <a
                href="#value-proposition"
                className="text-primary hover:underline"
              >
                4. Crafting Your Value Proposition
              </a>
            </li>
            <li>
              <a
                href="#visual-identity"
                className="text-primary hover:underline"
              >
                5. Visual Identity & Consistency
              </a>
            </li>
            <li>
              <a
                href="#linkedin-mastery"
                className="text-primary hover:underline"
              >
                6. LinkedIn Mastery
              </a>
            </li>
            <li>
              <a
                href="#other-platforms"
                className="text-primary hover:underline"
              >
                7. Other Social Platforms
              </a>
            </li>
            <li>
              <a
                href="#portfolio-website"
                className="text-primary hover:underline"
              >
                8. Building Your Portfolio
              </a>
            </li>
            <li>
              <a
                href="#content-strategy"
                className="text-primary hover:underline"
              >
                9. Content Strategy
              </a>
            </li>
            <li>
              <a
                href="#networking"
                className="text-primary hover:underline"
              >
                10. Strategic Networking
              </a>
            </li>
            <li>
              <a
                href="#offline-brand"
                className="text-primary hover:underline"
              >
                11. Offline Brand Building
              </a>
            </li>
            <li>
              <a
                href="#common-mistakes"
                className="text-primary hover:underline"
              >
                12. Common Mistakes to Avoid
              </a>
            </li>
            <li>
              <a
                href="#measuring-success"
                className="text-primary hover:underline"
              >
                13. Measuring Success
              </a>
            </li>
            <li>
              <a
                href="#case-studies"
                className="text-primary hover:underline"
              >
                14. Student Success Stories
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                15. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Your personal brand exists whether you build it intentionally or
                not
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Authenticity trumps perfection—be genuine in your online
                presence
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                LinkedIn is your most important platform as a student
                professional
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Consistency across platforms builds recognition and trust
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Content creation establishes you as a thought leader in your
                field
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Building relationships is more valuable than collecting
                connections
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Personal Branding */}
        <section
          id="what-is-personal-brand"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            1. What is Personal Branding?
          </h2>

          <p>
            Personal branding is the practice of defining and promoting what you
            stand for. It&apos;s the unique combination of skills, experience,
            personality, and values that you want others to associate with you.
            Think of it as your professional reputation—packaged intentionally.
          </p>

          <h3>Personal Brand vs. Personal Image</h3>
          <p>
            Your image is what you look like on the surface. Your brand is
            deeper—it&apos;s what people say about you when you leave the room.
            It&apos;s the feeling people have when they think of you, the
            expertise they associate with your name, and the trust they place in
            your abilities.
          </p>

          <h3>Components of a Personal Brand</h3>
          <ul>
            <li>
              <strong>Identity:</strong> Who you are at your core—values,
              beliefs, personality
            </li>
            <li>
              <strong>Expertise:</strong> What you&apos;re good at and what you
              know
            </li>
            <li>
              <strong>Unique Value:</strong> What makes you different from
              others with similar skills
            </li>
            <li>
              <strong>Visibility:</strong> How and where you show up in the
              world
            </li>
            <li>
              <strong>Narrative:</strong> The story you tell about your journey
              and goals
            </li>
            <li>
              <strong>Perception:</strong> How others actually see and describe
              you
            </li>
          </ul>

          <h3>The Personal Brand Equation</h3>
          <div className="not-prose my-6 rounded-lg bg-muted p-6 text-center">
            <p className="text-lg font-bold">
              Your Skills + Your Personality + Your Story + Your Visibility =
              Your Personal Brand
            </p>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Key Insight:</strong> Jeff Bezos famously said, &quot;Your
              brand is what people say about you when you&apos;re not in the
              room.&quot; Personal branding is about taking control of that
              conversation.
            </div>
          </div>
        </section>

        {/* Section 2: Why It Matters */}
        <section
          id="why-it-matters"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            2. Why Personal Branding Matters for Students
          </h2>

          <p>
            As a student, you might think personal branding is only for
            entrepreneurs, executives, or influencers. This couldn&apos;t be
            further from the truth. Here&apos;s why building your brand early
            gives you a significant advantage.
          </p>

          <h3>The Statistics Don&apos;t Lie</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-left">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Recruiters checking social media
                  </td>
                  <td className="p-3">70% screen candidates online</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Hiring managers using LinkedIn
                  </td>
                  <td className="p-3">87% use LinkedIn for recruiting</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Jobs from networking</td>
                  <td className="p-3">Up to 80% of jobs are never posted</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Personal brand impact on income
                  </td>
                  <td className="p-3">
                    Strong brands command 10-15% higher salaries
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Benefits for Students</h3>
          <ul>
            <li>
              <strong>Stand Out in Applications:</strong> When hundreds apply,
              your brand makes you memorable
            </li>
            <li>
              <strong>Attract Opportunities:</strong> Internships, jobs, and
              collaborations find you
            </li>
            <li>
              <strong>Build Credibility Early:</strong> Establish expertise
              before entering the workforce
            </li>
            <li>
              <strong>Create a Safety Net:</strong> Your network becomes a
              career insurance policy
            </li>
            <li>
              <strong>Develop Clarity:</strong> The branding process helps you
              understand yourself better
            </li>
            <li>
              <strong>Future-Proof Your Career:</strong> A strong brand
              transcends any single job
            </li>
          </ul>

          <h3>Real-World Example</h3>
          <p>
            Consider two students applying for the same internship. Student A
            submits a resume. Student B has the same resume but also has a
            LinkedIn with 1,000+ followers, a portfolio website, and blog posts
            demonstrating industry knowledge. Who do you think gets the
            interview?
          </p>

          <div className="not-prose my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
            <p className="flex items-center gap-2 font-bold text-yellow-700 dark:text-yellow-400">
              <AlertCircle className="h-5 w-5" />
              The Cost of Inaction
            </p>
            <p className="mt-2 text-sm">
              If you don&apos;t define your personal brand, others will define
              it for you. A blank LinkedIn profile or unprofessional social
              media presence creates a negative impression—or worse, makes you
              invisible to opportunities.
            </p>
          </div>
        </section>

        {/* Section 3: Self-Discovery */}
        <section
          id="self-discovery"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            3. Self-Discovery: Finding Your Brand
          </h2>

          <p>
            Before you can communicate your brand to the world, you need to
            understand it yourself. This section will guide you through the
            self-discovery process that forms the foundation of an authentic
            personal brand.
          </p>

          <h3>The Core Questions</h3>
          <p>
            Take time to reflect deeply on these questions. Write down your
            answers—this exercise reveals patterns that define your brand.
          </p>
          <ul>
            <li>
              What am I genuinely passionate about? (Not what you think you
              should care about)
            </li>
            <li>What unique experiences have shaped who I am?</li>
            <li>What problems do I love solving?</li>
            <li>
              What do people consistently compliment me on or ask me for help
              with?
            </li>
            <li>
              What topics could I talk about for hours without getting bored?
            </li>
            <li>What do I want to be known for in 5 years?</li>
            <li>What values are non-negotiable for me?</li>
            <li>Who do I admire, and what about them resonates with me?</li>
          </ul>

          <h3>The 360° Feedback Exercise</h3>
          <p>
            Ask 5-10 people who know you well (friends, family, professors,
            colleagues) to answer these questions about you:
          </p>
          <ul>
            <li>What are three words you&apos;d use to describe me?</li>
            <li>What do you think is my greatest strength?</li>
            <li>When do you see me at my best?</li>
            <li>What unique perspective do I bring?</li>
            <li>What would you hire me for?</li>
          </ul>
          <p>
            The patterns in their responses reveal how you&apos;re already being
            perceived—your existing brand. Compare this with how you want to be
            perceived.
          </p>

          <h3>Identify Your Superpowers</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold text-primary">Hard Skills</h4>
              <ul className="space-y-1 text-sm">
                <li>• Technical abilities</li>
                <li>• Certifications</li>
                <li>• Industry knowledge</li>
                <li>• Tool proficiency</li>
                <li>• Languages (spoken & programming)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold text-primary">Soft Skills</h4>
              <ul className="space-y-1 text-sm">
                <li>• Communication style</li>
                <li>• Leadership qualities</li>
                <li>• Problem-solving approach</li>
                <li>• Emotional intelligence</li>
                <li>• Creativity & innovation</li>
              </ul>
            </div>
          </div>

          <h3>Your Unique Intersection</h3>
          <p>Your personal brand exists at the intersection of:</p>
          <ul>
            <li>What you&apos;re good at (skills)</li>
            <li>What you love doing (passion)</li>
            <li>What the world needs (demand)</li>
          </ul>
          <p>
            The sweet spot where all three overlap is where your brand should
            live. This is your unique positioning that no one else can
            replicate.
          </p>
        </section>

        {/* Section 4: Value Proposition */}
        <section
          id="value-proposition"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Crafting Your Unique Value Proposition
          </h2>

          <p>
            Your unique value proposition (UVP) is a clear statement that
            explains who you are, what you do, who you help, and what makes you
            different. It&apos;s your elevator pitch, LinkedIn headline, and
            Twitter bio all in one.
          </p>

          <h3>The UVP Formula</h3>
          <div className="rounded-lg bg-muted p-4 text-sm">
            <p className="font-bold">
              I help [target audience] achieve [outcome] through [your unique
              approach/skill].
            </p>
          </div>

          <h3>Examples for Students</h3>
          <ul>
            <li>
              &quot;Computer Science student passionate about building
              accessible tech that makes education available to everyone&quot;
            </li>
            <li>
              &quot;Marketing major who combines data analytics with creative
              storytelling to help brands connect with Gen-Z&quot;
            </li>
            <li>
              &quot;Finance student bridging traditional investment principles
              with emerging crypto markets&quot;
            </li>
            <li>
              &quot;Environmental Engineering student developing sustainable
              solutions for urban waste management&quot;
            </li>
          </ul>

          <h3>Creating Your Personal Brand Statement</h3>
          <p>Fill in this template based on your self-discovery work:</p>
          <ul>
            <li>
              <strong>I am:</strong> [Your role/identity]
            </li>
            <li>
              <strong>I help:</strong> [Target audience]
            </li>
            <li>
              <strong>To achieve:</strong> [Desired outcome]
            </li>
            <li>
              <strong>By:</strong> [Your unique method/approach]
            </li>
            <li>
              <strong>Because:</strong> [Your motivation/story]
            </li>
          </ul>

          <h3>Test Your UVP</h3>
          <p>A strong UVP should be:</p>
          <ul>
            <li>
              <strong>Clear:</strong> A stranger should understand it in 10
              seconds
            </li>
            <li>
              <strong>Specific:</strong> Avoid generic terms like
              &quot;passionate&quot; or &quot;hardworking&quot;
            </li>
            <li>
              <strong>Memorable:</strong> It sticks in people&apos;s minds
            </li>
            <li>
              <strong>Authentic:</strong> It genuinely represents you
            </li>
            <li>
              <strong>Differentiated:</strong> It sets you apart from others
            </li>
          </ul>
        </section>

        {/* Section 5: Visual Identity */}
        <section
          id="visual-identity"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            5. Visual Identity & Consistency
          </h2>

          <p>
            Your visual identity is the first thing people notice. Consistency
            across platforms creates recognition and professionalism—making you
            look like you have your act together even as a student.
          </p>

          <h3>Professional Photo Guidelines</h3>
          <ul>
            <li>
              <strong>Quality:</strong> Use a high-resolution image (not blurry
              or pixelated)
            </li>
            <li>
              <strong>Background:</strong> Clean, simple background (solid color
              or subtle)
            </li>
            <li>
              <strong>Framing:</strong> Head and shoulders, face takes up 60% of
              frame
            </li>
            <li>
              <strong>Expression:</strong> Friendly, approachable smile with eye
              contact
            </li>
            <li>
              <strong>Lighting:</strong> Natural light or professional lighting,
              no harsh shadows
            </li>
            <li>
              <strong>Dress:</strong> What you&apos;d wear to an interview in
              your field
            </li>
            <li>
              <strong>Consistency:</strong> Use the same photo across all
              platforms
            </li>
          </ul>

          <h3>Creating Your Visual System</h3>
          <p>
            Establish consistent visual elements you&apos;ll use across all
            platforms:
          </p>
          <ul>
            <li>
              <strong>Color Palette:</strong> 2-3 colors that represent your
              brand personality
            </li>
            <li>
              <strong>Font Choices:</strong> 1-2 fonts for headers and body text
            </li>
            <li>
              <strong>Logo/Monogram:</strong> Optional but adds professionalism
            </li>
            <li>
              <strong>Banner Images:</strong> Consistent style across LinkedIn,
              Twitter, etc.
            </li>
            <li>
              <strong>Content Templates:</strong> For graphics, presentations,
              documents
            </li>
          </ul>

          <h3>Tools for Visual Branding</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Free Tools</h4>
              <ul className="space-y-1 text-sm">
                <li>• Canva (graphics, presentations)</li>
                <li>• Remove.bg (background removal)</li>
                <li>• Coolors (color palette generator)</li>
                <li>• Google Fonts (typography)</li>
                <li>• Unsplash (stock photos)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Photo Tips</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use natural daylight near a window</li>
                <li>• Ask a friend to take photos on a smartphone</li>
                <li>• Take many shots, choose the best</li>
                <li>• Use portrait mode for background blur</li>
                <li>• Edit lightly for brightness and contrast</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Your professional photo is one of the
              highest-ROI investments you can make in your brand. Consider
              hiring a photographer for ₹2,000-5,000 for a proper headshot
              session—it&apos;s worth it.
            </div>
          </div>
        </section>

        {/* Section 6: LinkedIn Mastery */}
        <section
          id="linkedin-mastery"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-primary" />
            6. LinkedIn Mastery: Your Digital Resume
          </h2>

          <p>
            LinkedIn is the most important platform for professional personal
            branding. It&apos;s where recruiters, hiring managers, and industry
            professionals will look you up. A complete, optimized LinkedIn
            profile is non-negotiable.
          </p>

          <h3>Profile Optimization Checklist</h3>
          <ul>
            <li>
              <strong>Professional Photo:</strong> Profiles with photos get 21x
              more views
            </li>
            <li>
              <strong>Custom Banner:</strong> 1584 x 396 pixels, shows your
              personality or field
            </li>
            <li>
              <strong>Headline:</strong> More than just your title—include value
              proposition and keywords
            </li>
            <li>
              <strong>About Section:</strong> Your story in first person,
              300-500 words
            </li>
            <li>
              <strong>Experience:</strong> Detailed descriptions with
              accomplishments, not just duties
            </li>
            <li>
              <strong>Skills:</strong> Top 3 should be your core strengths
            </li>
            <li>
              <strong>Recommendations:</strong> Ask professors, supervisors,
              peers
            </li>
            <li>
              <strong>Featured Section:</strong> Showcase your best work
            </li>
            <li>
              <strong>Custom URL:</strong> linkedin.com/in/yourname
            </li>
          </ul>

          <h3>Writing Your Headline</h3>
          <p>
            Don&apos;t just say &quot;Student at XYZ University.&quot; Your
            headline should:
          </p>
          <ul>
            <li>Include your target role or industry</li>
            <li>Highlight a unique skill or passion</li>
            <li>Use keywords recruiters search for</li>
          </ul>
          <p>Examples:</p>
          <ul>
            <li>
              &quot;Computer Science Student | Full-Stack Developer | Building
              EdTech Solutions&quot;
            </li>
            <li>
              &quot;MBA Candidate at IIM | Marketing Strategy | Ex-Startup
              Founder&quot;
            </li>
            <li>
              &quot;Aspiring Data Scientist | Python & Machine Learning | IIT
              Delhi&quot;
            </li>
          </ul>

          <h3>Crafting Your About Section</h3>
          <p>Structure it like this:</p>
          <ol>
            <li>
              <strong>Hook:</strong> Opening line that grabs attention
            </li>
            <li>
              <strong>Story:</strong> Your journey and what drives you
            </li>
            <li>
              <strong>Skills:</strong> What you bring to the table
            </li>
            <li>
              <strong>Achievements:</strong> Concrete accomplishments
            </li>
            <li>
              <strong>Call to Action:</strong> What you&apos;re looking for
            </li>
          </ol>

          <h3>LinkedIn Engagement Strategy</h3>
          <ul>
            <li>Post original content 2-3 times per week</li>
            <li>Comment thoughtfully on others&apos; posts daily</li>
            <li>Share articles with your insights</li>
            <li>Engage with industry leaders and company pages</li>
            <li>Join and participate in relevant groups</li>
            <li>Send personalized connection requests</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Algorithm Tip:</strong> LinkedIn heavily favors posts that
              generate early engagement. When you post, stay active for the
              first hour—respond to comments quickly and engage with others to
              boost visibility.
            </div>
          </div>
        </section>

        {/* Section 7: Other Platforms */}
        <section
          id="other-platforms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            7. Other Social Media Platforms
          </h2>

          <p>
            While LinkedIn is essential, other platforms can amplify your brand
            depending on your field and goals. Here&apos;s how to use each
            strategically.
          </p>

          <h3>Twitter/X</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="flex items-center gap-2 font-bold">
              <Twitter className="h-4 w-4" /> Best For:
            </p>
            <p className="text-sm">
              Tech, startups, journalism, thought leadership, real-time industry
              conversations
            </p>
            <p className="mt-2 font-bold">Strategy:</p>
            <ul className="mt-1 text-sm">
              <li>• Share quick insights and hot takes</li>
              <li>• Engage with industry leaders</li>
              <li>• Build in public (share your learning journey)</li>
              <li>• Participate in Twitter chats and trending topics</li>
            </ul>
          </div>

          <h3>Instagram</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="flex items-center gap-2 font-bold">
              <Instagram className="h-4 w-4" /> Best For:
            </p>
            <p className="text-sm">
              Creative fields, design, photography, lifestyle branding, visual
              portfolios
            </p>
            <p className="mt-2 font-bold">Strategy:</p>
            <ul className="mt-1 text-sm">
              <li>• Showcase visual work and behind-the-scenes</li>
              <li>• Use Stories for daily updates</li>
              <li>• Create educational carousels in your field</li>
              <li>
                • Keep it professional (separate personal account if needed)
              </li>
            </ul>
          </div>

          <h3>YouTube</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="flex items-center gap-2 font-bold">
              <Youtube className="h-4 w-4" /> Best For:
            </p>
            <p className="text-sm">
              Teaching, tutorials, vlogs, personal coaching, long-form content
            </p>
            <p className="mt-2 font-bold">Strategy:</p>
            <ul className="mt-1 text-sm">
              <li>• Create how-to content in your expertise area</li>
              <li>• Document your learning journey</li>
              <li>
                • Consistency matters more than production quality initially
              </li>
              <li>• Repurpose content for other platforms</li>
            </ul>
          </div>

          <h3>GitHub (for Tech Students)</h3>
          <div className="my-4 rounded-lg border p-4">
            <p className="font-bold">Best For:</p>
            <p className="text-sm">
              Software developers, data scientists, open-source contributors
            </p>
            <p className="mt-2 font-bold">Strategy:</p>
            <ul className="mt-1 text-sm">
              <li>• Maintain active contribution graph (green squares)</li>
              <li>• Create and showcase personal projects</li>
              <li>• Contribute to open source</li>
              <li>• Write clear README files</li>
            </ul>
          </div>

          <h3>Platform Selection Guide</h3>
          <p>
            You don&apos;t need to be everywhere. Choose 2-3 platforms based on:
          </p>
          <ul>
            <li>Where your target industry/audience spends time</li>
            <li>What content format you&apos;re best at creating</li>
            <li>What you can consistently maintain</li>
          </ul>
        </section>

        {/* Section 8: Portfolio Website */}
        <section
          id="portfolio-website"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            8. Building Your Portfolio Website
          </h2>

          <p>
            A personal website is your digital home base—the one place online
            that you completely control. It signals professionalism and gives
            you space to showcase your work beyond what fits on LinkedIn.
          </p>

          <h3>What to Include</h3>
          <ul>
            <li>
              <strong>About Page:</strong> Your story, background, and
              personality
            </li>
            <li>
              <strong>Portfolio/Projects:</strong> Your best work with case
              studies
            </li>
            <li>
              <strong>Resume:</strong> Downloadable PDF version
            </li>
            <li>
              <strong>Blog:</strong> Optional but great for thought leadership
            </li>
            <li>
              <strong>Contact:</strong> Easy way to reach you
            </li>
            <li>
              <strong>Testimonials:</strong> Social proof from those who&apos;ve
              worked with you
            </li>
          </ul>

          <h3>Platform Options</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Platform</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">GitHub Pages</td>
                  <td className="p-3">Developers (free hosting)</td>
                  <td className="p-3 text-green-600">Free</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Notion</td>
                  <td className="p-3">Quick setup, clean design</td>
                  <td className="p-3 text-green-600">Free</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Carrd</td>
                  <td className="p-3">Simple one-page sites</td>
                  <td className="p-3">Free-$19/yr</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Wix/Squarespace</td>
                  <td className="p-3">Visual drag-and-drop</td>
                  <td className="p-3">$12-40/mo</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">WordPress</td>
                  <td className="p-3">Full customization</td>
                  <td className="p-3">Free-$25/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Domain Name Tips</h3>
          <ul>
            <li>Use your name if available (yourname.com)</li>
            <li>Consider .me, .io, or .dev if .com is taken</li>
            <li>Keep it short and memorable</li>
            <li>Avoid numbers and hyphens</li>
            <li>Budget ₹500-1,500 per year for a domain</li>
          </ul>
        </section>

        {/* Section 9: Content Strategy */}
        <section
          id="content-strategy"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Edit className="h-6 w-6 text-primary" />
            9. Content Strategy: Become a Thought Leader
          </h2>

          <p>
            Content creation is the fastest way to build authority and
            visibility. By sharing valuable insights, you position yourself as
            someone worth following and hiring.
          </p>

          <h3>Content Pillars</h3>
          <p>
            Choose 3-4 topics that align with your brand and create content
            around them:
          </p>
          <ul>
            <li>
              <strong>Educational:</strong> Teach what you know (tutorials,
              how-tos, tips)
            </li>
            <li>
              <strong>Inspirational:</strong> Share your journey, failures, and
              lessons
            </li>
            <li>
              <strong>Industry Insights:</strong> Your take on trends and news
            </li>
            <li>
              <strong>Behind-the-Scenes:</strong> Show your work process and
              projects
            </li>
          </ul>

          <h3>Content Ideas for Students</h3>
          <ul>
            <li>&quot;What I learned from [course/project/experience]&quot;</li>
            <li>&quot;Top 5 resources for learning [skill]&quot;</li>
            <li>&quot;A day in the life of a [major] student&quot;</li>
            <li>&quot;How I got my internship at [company]&quot;</li>
            <li>
              &quot;Mistakes I made as a freshman (so you don&apos;t have
              to)&quot;
            </li>
            <li>&quot;Book summary/review relevant to your field&quot;</li>
            <li>&quot;Comparing [tool A] vs [tool B]&quot;</li>
            <li>&quot;My campus placement preparation strategy&quot;</li>
          </ul>

          <h3>The Content Calendar</h3>
          <p>Start simple with a sustainable cadence:</p>
          <ul>
            <li>LinkedIn: 2-3 posts per week</li>
            <li>Twitter: 1-3 tweets per day</li>
            <li>Blog: 1-2 long-form articles per month</li>
            <li>Instagram: 2-3 posts per week (if relevant)</li>
          </ul>

          <h3>Repurposing Content</h3>
          <p>One idea can become many pieces of content:</p>
          <ul>
            <li>
              Long-form blog post → LinkedIn article → Twitter thread → Carousel
              → Video
            </li>
            <li>
              Maximize your effort by adapting content for different platforms
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Consistency Over Perfection:</strong> It&apos;s better to
              post good content regularly than perfect content rarely. Start
              before you&apos;re ready and improve as you go.
            </div>
          </div>
        </section>

        {/* Section 10: Networking */}
        <section
          id="networking"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            10. Strategic Networking
          </h2>

          <p>
            Building relationships is the multiplier for your personal brand.
            Your network amplifies your message, opens doors, and provides
            opportunities that never get published.
          </p>

          <h3>The Give-First Mindset</h3>
          <p>
            Effective networking isn&apos;t about what you can get—it&apos;s
            about what you can give. Before asking for anything, ask yourself:
            &quot;How can I provide value to this person?&quot;
          </p>
          <ul>
            <li>Share their content and tag them</li>
            <li>Introduce them to someone they should know</li>
            <li>Offer your skills or time to help their project</li>
            <li>Send them an article or resource they&apos;d find valuable</li>
          </ul>

          <h3>Building Your Network as a Student</h3>
          <ul>
            <li>
              <strong>Alumni:</strong> Reach out to graduates from your
              university
            </li>
            <li>
              <strong>Professors:</strong> Build genuine relationships beyond
              class
            </li>
            <li>
              <strong>Industry Events:</strong> Attend conferences, webinars,
              meetups
            </li>
            <li>
              <strong>Classmates:</strong> Your peers will become industry
              professionals
            </li>
            <li>
              <strong>Online Communities:</strong> Join Discord, Slack, and
              Reddit groups in your field
            </li>
            <li>
              <strong>Informational Interviews:</strong> Request 15-minute calls
              to learn from professionals
            </li>
          </ul>

          <h3>The Follow-Up System</h3>
          <p>
            Most people fail at networking because they don&apos;t follow up.
            After meeting someone new:
          </p>
          <ul>
            <li>
              Connect on LinkedIn within 24 hours with a personalized note
            </li>
            <li>Send a thank-you message after any conversation</li>
            <li>Set reminders to check in every few months</li>
            <li>Keep notes on what you discussed for future reference</li>
          </ul>
        </section>

        {/* Section 11: Offline Brand */}
        <section
          id="offline-brand"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Coffee className="h-6 w-6 text-primary" />
            11. Offline Brand Building
          </h2>

          <p>
            Your personal brand isn&apos;t just digital. How you show up in
            person—in classrooms, at events, in meetings—is equally important.
          </p>

          <h3>Develop Your Personal Presentation</h3>
          <ul>
            <li>
              <strong>Body Language:</strong> Confident posture, eye contact,
              firm handshake
            </li>
            <li>
              <strong>Speaking Skills:</strong> Practice articulating your
              thoughts clearly
            </li>
            <li>
              <strong>Elevator Pitch:</strong> 30-second introduction you can
              deliver anywhere
            </li>
            <li>
              <strong>Dress Code:</strong> Dress appropriately for your industry
            </li>
            <li>
              <strong>Listening Skills:</strong> People remember how you made
              them feel
            </li>
          </ul>

          <h3>Opportunities for Visibility</h3>
          <ul>
            <li>Speak at campus events or clubs</li>
            <li>Lead a student organization</li>
            <li>Volunteer for event organizing</li>
            <li>Participate in competitions and hackathons</li>
            <li>Mentor junior students</li>
            <li>Organize study groups or workshops</li>
          </ul>

          <h3>Your Email Signature</h3>
          <p>Every email you send is a branding opportunity. Include:</p>
          <ul>
            <li>Your name</li>
            <li>One-line value proposition or title</li>
            <li>LinkedIn URL</li>
            <li>Portfolio website (if applicable)</li>
            <li>Phone number (optional)</li>
          </ul>
        </section>

        {/* Section 12: Common Mistakes */}
        <section
          id="common-mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            12. Common Personal Branding Mistakes
          </h2>

          <p>
            Avoid these pitfalls that can undermine your brand-building efforts:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Being Inauthentic</p>
              <p className="text-sm text-muted-foreground">
                Copying someone else&apos;s brand or pretending to be someone
                you&apos;re not. People can sense fakeness—authenticity always
                wins.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Inconsistency</p>
              <p className="text-sm text-muted-foreground">
                Different photos, bios, and messaging across platforms creates
                confusion. Your brand should be recognizable everywhere.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Being Too Broad</p>
              <p className="text-sm text-muted-foreground">
                &quot;I&apos;m interested in everything&quot; means you&apos;re
                memorable for nothing. Niche down first, expand later.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ All Promotion, No Value</p>
              <p className="text-sm text-muted-foreground">
                If you only talk about yourself, people tune out. Follow the
                80/20 rule: 80% value, 20% promotion.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Neglecting Engagement</p>
              <p className="text-sm text-muted-foreground">
                Posting without engaging with others. Social media is
                social—respond to comments, like others&apos; posts, join
                conversations.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Giving Up Too Soon</p>
              <p className="text-sm text-muted-foreground">
                Personal branding is a long game. It takes 6-12 months of
                consistent effort to see significant results. Keep going.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13: Measuring Success */}
        <section
          id="measuring-success"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BarChart2 className="h-6 w-6 text-primary" />
            13. Measuring Your Brand&apos;s Success
          </h2>

          <p>
            How do you know if your personal branding efforts are working? Track
            these metrics to measure progress and adjust your strategy.
          </p>

          <h3>Quantitative Metrics</h3>
          <ul>
            <li>LinkedIn profile views (aim for consistent growth)</li>
            <li>LinkedIn connection count and quality</li>
            <li>Social media followers and engagement rates</li>
            <li>Website traffic (if you have one)</li>
            <li>Inbound messages and opportunities</li>
            <li>Content reach and impressions</li>
          </ul>

          <h3>Qualitative Indicators</h3>
          <ul>
            <li>People mentioning you for opportunities</li>
            <li>Getting invited to speak or contribute</li>
            <li>Receiving cold messages about your content</li>
            <li>Being introduced as &quot;the person who [does X]&quot;</li>
            <li>Recruiters reaching out proactively</li>
          </ul>

          <h3>Monthly Brand Audit Questions</h3>
          <ul>
            <li>What content performed best this month?</li>
            <li>What new connections did I make?</li>
            <li>What opportunities came inbound?</li>
            <li>Is my messaging still aligned with my goals?</li>
            <li>What should I do differently next month?</li>
          </ul>
        </section>

        {/* Section 14: Case Studies */}
        <section
          id="case-studies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            14. Student Success Stories
          </h2>

          <p>
            Here are examples of students who built powerful personal brands:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">The Tech Blogger</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                A third-year CS student started writing about her coding journey
                on Medium. After 6 months of weekly posts, she had 5,000
                followers and received a referral for a Google internship from a
                stranger who read her blog.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">The LinkedIn Creator</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                A management student started posting career tips on LinkedIn.
                Within a year, he built 15,000 followers and was approached by 3
                startups for marketing roles before graduation.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">The Portfolio Builder</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                A design student created a stunning portfolio website with case
                studies of her personal projects. She landed her dream
                internship at a top agency because the hiring manager said her
                portfolio &quot;showed how she thinks, not just what she can
                do.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 15: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            15. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">
                I&apos;m just a student—what do I have to brand?
              </p>
              <p className="mt-2 text-muted-foreground">
                You have your unique perspective, learning journey, projects,
                and potential. Every professional started somewhere. Your
                student status is actually an advantage because you bring fresh
                perspectives and enthusiasm.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How long does it take to build a personal brand?
              </p>
              <p className="mt-2 text-muted-foreground">
                Expect 6-12 months of consistent effort to see meaningful
                results. You can set up your profiles and start creating content
                in a weekend, but building recognition takes time. Be patient
                and consistent.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What if I&apos;m not sure what I want to do career-wise?
              </p>
              <p className="mt-2 text-muted-foreground">
                That&apos;s okay! Start with broader interests and narrow down
                as you learn more about yourself. Your brand can evolve. Many
                successful professionals pivoted multiple times.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Is personal branding fake or inauthentic?
              </p>
              <p className="mt-2 text-muted-foreground">
                Only if you make it so. Good personal branding is about
                amplifying your authentic self, not creating a fake persona.
                It&apos;s about intentionally showcasing who you really are.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How do I balance personal and professional on social media?
              </p>
              <p className="mt-2 text-muted-foreground">
                Keep LinkedIn purely professional. For other platforms, you can
                show personality while staying appropriate. A good rule: would
                you be comfortable if a future employer saw this?
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What if I post something and nobody engages?
              </p>
              <p className="mt-2 text-muted-foreground">
                This happens to everyone, especially at the beginning. Keep
                posting. Refine your content based on what gets traction. Growth
                is rarely linear—stick with it.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Building Your Brand Today</h2>
          <p>
            Your personal brand is already being formed by every interaction,
            post, and choice you make. The question isn&apos;t whether you have
            a brand—it&apos;s whether you&apos;re shaping it intentionally or
            leaving it to chance.
          </p>
          <p>
            The best time to start building your personal brand was when you
            started college. The second best time is right now. Pick one action
            from this guide— update your LinkedIn headline, post your first
            piece of content, or reach out to an alumnus—and do it today.
          </p>
          <p>
            Your future self will thank you for the foundation you lay today.
            The opportunities, connections, and clarity that come from
            intentional personal branding are worth every minute you invest.
          </p>
          <p>Now go out there and make your mark. 🌟</p>
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
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Build Your Portfolio Website
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking for Introverts
            </Link>
            <Link
              href="/blog/student-networking-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Student Networking Guide
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
