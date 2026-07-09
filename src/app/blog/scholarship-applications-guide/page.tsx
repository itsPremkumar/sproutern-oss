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
  DollarSign,
  Award,
  FileText,
  Search,
  Mail,
  Star,
  AlertCircle,
  GraduationCap,
  Heart,
  Globe,
  PenTool,
  Zap,
  List,
  CheckSquare,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scholarship Applications: Complete Guide for Students',
  description:
    'Master scholarship applications with proven strategies. Learn how to find scholarships, write winning essays, and secure funding for your education in India and abroad.',
  keywords: [
    'scholarship applications',
    'scholarships for students',
    'scholarship essay',
    'financial aid',
    'merit scholarships',
    'need-based scholarships',
    'study abroad scholarships',
    'Indian scholarships',
    'how to get scholarship',
  ],
  openGraph: {
    title: 'Scholarship Applications: Complete Guide for Students',
    description: 'Fund your dreams through scholarships.',
    type: 'article',
    publishedTime: '2025-12-24T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-green-600">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Financial Aid
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Scholarship Applications: Complete Guide for Students
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your comprehensive guide to finding, applying for, and winning
            scholarships. Transform your educational dreams into reality through
            strategic scholarship hunting.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Financial Aid Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Education is one of the most valuable investments you can make in
            yourself, but the rising costs can seem overwhelming. Whether
            you&apos;re pursuing undergraduate studies, postgraduate degrees, or
            studying abroad, scholarships can be the bridge between your dreams
            and reality.
          </p>
          <p>
            Every year, billions of rupees in scholarship money go unclaimed
            simply because students don&apos;t know about the opportunities or
            don&apos;t apply correctly. This comprehensive guide will change
            that for you. We&apos;ll cover everything from finding the right
            scholarships to crafting winning applications that stand out from
            thousands of others.
          </p>
          <p>
            Many students mistakenly believe scholarships are only for toppers
            or those from financially weak backgrounds. In reality, there are
            scholarships for almost every profile—academic achievers, sports
            enthusiasts, artists, students from specific communities,
            first-generation learners, and many more categories you might not
            even know exist.
          </p>
          <p>
            By the end of this guide, you&apos;ll have a complete roadmap for
            your scholarship journey, from initial research to final application
            submission.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of Scholarships
              </a>
            </li>
            <li>
              <a
                href="#finding"
                className="text-primary hover:underline"
              >
                2. Finding Scholarships
              </a>
            </li>
            <li>
              <a
                href="#eligibility"
                className="text-primary hover:underline"
              >
                3. Understanding Eligibility
              </a>
            </li>
            <li>
              <a
                href="#application"
                className="text-primary hover:underline"
              >
                4. Application Strategy
              </a>
            </li>
            <li>
              <a
                href="#essay"
                className="text-primary hover:underline"
              >
                5. Winning Essay Writing
              </a>
            </li>
            <li>
              <a
                href="#recommendations"
                className="text-primary hover:underline"
              >
                6. Letters of Recommendation
              </a>
            </li>
            <li>
              <a
                href="#indian"
                className="text-primary hover:underline"
              >
                7. Top Scholarships in India
              </a>
            </li>
            <li>
              <a
                href="#international"
                className="text-primary hover:underline"
              >
                8. International Scholarships
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                9. Common Mistakes to Avoid
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                10. FAQs
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
                Start your scholarship search at least 12-18 months before your
                program
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Apply to multiple scholarships—quantity increases your chances
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Customize each application to match the scholarship&apos;s
                values
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Your essay should tell a unique, compelling story—not a resume
                summary
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Request recommendations early and provide recommenders with
                context
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Keep track of deadlines religiously—late applications are
                rejected
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Review your application multiple times before submitting
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <List className="h-6 w-6 text-primary" />
            1. Types of Scholarships
          </h2>

          <p>
            Understanding the different types of scholarships helps you identify
            which ones you qualify for and how to position your applications.
          </p>

          <h3>Merit-Based Scholarships</h3>
          <p>Awarded based on academic excellence, typically measured by:</p>
          <ul>
            <li>High school or undergraduate GPA/percentage</li>
            <li>Board exam performance (10th, 12th)</li>
            <li>Entrance exam scores (JEE, NEET, CAT, GMAT, GRE)</li>
            <li>Class rank or percentile</li>
          </ul>
          <p>
            Examples: INSPIRE Scholarship (for top performers in Class 12),
            Central Sector Scholarship, university merit scholarships.
          </p>

          <h3>Need-Based Scholarships</h3>
          <p>
            For students from economically weaker backgrounds. Usually require:
          </p>
          <ul>
            <li>Family income certificates</li>
            <li>BPL (Below Poverty Line) documentation</li>
            <li>Income tax returns of parents</li>
            <li>Affidavits regarding financial status</li>
          </ul>
          <p>
            Examples: Post-Matric Scholarship for SC/ST/OBC, NSP scholarships,
            state government scholarships based on income.
          </p>

          <h3>Category-Specific Scholarships</h3>
          <p>Reserved for students from specific backgrounds:</p>
          <ul>
            <li>
              <strong>Caste-based:</strong> SC, ST, OBC, Minority scholarships
            </li>
            <li>
              <strong>Gender-based:</strong> Scholarships for women/girls
            </li>
            <li>
              <strong>Region-based:</strong> State-specific scholarships
            </li>
            <li>
              <strong>Disability:</strong> For students with disabilities
            </li>
            <li>
              <strong>First-generation:</strong> For first-generation
              college-goers
            </li>
          </ul>

          <h3>Field-Specific Scholarships</h3>
          <p>For students pursuing particular fields of study:</p>
          <ul>
            <li>STEM scholarships (Science, Technology, Engineering, Maths)</li>
            <li>Arts and humanities scholarships</li>
            <li>Management and business scholarships</li>
            <li>Medical and healthcare scholarships</li>
            <li>Sports scholarships</li>
            <li>Cultural and performing arts scholarships</li>
          </ul>

          <h3>Institution-Specific Scholarships</h3>
          <p>Offered by specific colleges and universities:</p>
          <ul>
            <li>IIT/IIM institutional scholarships</li>
            <li>Private university merit scholarships</li>
            <li>Alumni-funded scholarships</li>
            <li>Department-specific awards</li>
          </ul>

          <h3>Corporate and Private Scholarships</h3>
          <p>Funded by companies, foundations, and NGOs:</p>
          <ul>
            <li>Tata Trusts scholarships</li>
            <li>L&apos;Oréal India scholarships</li>
            <li>Google India scholarships</li>
            <li>Foundation for Excellence scholarships</li>
            <li>Aditya Birla Group scholarships</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> You often qualify for multiple
              categories. A high-achieving female student from an OBC background
              could apply for merit, gender-based, and category-based
              scholarships simultaneously. Don&apos;t limit yourself!
            </div>
          </div>
        </section>

        {/* Section 2: Finding */}
        <section
          id="finding"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            2. Finding Scholarships
          </h2>

          <p>
            The scholarship search itself is a skill. Many students miss
            opportunities simply because they don&apos;t know where to look.
            Here&apos;s a comprehensive approach to finding scholarships.
          </p>

          <h3>Official Government Portals</h3>
          <ul>
            <li>
              <strong>National Scholarship Portal (NSP):</strong> Central
              platform for most government scholarships in India
            </li>
            <li>
              <strong>State scholarship portals:</strong> Each state has its own
              portal
            </li>
            <li>
              <strong>Ministry-specific portals:</strong> Ministry of HRD,
              Minority Affairs, Social Justice, etc.
            </li>
          </ul>

          <h3>Scholarship Search Engines</h3>
          <ul>
            <li>
              <strong>Buddy4Study:</strong> India&apos;s largest scholarship
              platform
            </li>
            <li>
              <strong>Vidyasaarathi:</strong> NSDL-backed scholarship portal
            </li>
            <li>
              <strong>AICTE Fellowship Portal:</strong> For engineering students
            </li>
            <li>
              <strong>UGC NET Fellowship:</strong> For research aspirants
            </li>
          </ul>

          <h3>University Financial Aid Offices</h3>
          <p>
            Often overlooked, your target university&apos;s financial aid or
            scholarship office can provide:
          </p>
          <ul>
            <li>Institutional scholarships</li>
            <li>Departmental grants</li>
            <li>Teaching/research assistantships</li>
            <li>Work-study opportunities</li>
          </ul>

          <h3>Corporate and Foundation Websites</h3>
          <p>
            Many companies run scholarship programs directly. Check websites of:
          </p>
          <ul>
            <li>Major tech companies (Google, Microsoft, Amazon)</li>
            <li>Indian conglomerates (Tata, Reliance, Aditya Birla)</li>
            <li>Banks (SBI, HDFC often have education scholarships)</li>
            <li>
              NGOs and foundations (Sitaram Jindal Foundation, Give Foundation)
            </li>
          </ul>

          <h3>Professional Associations</h3>
          <p>
            Industry associations often offer scholarships for students
            interested in their field:
          </p>
          <ul>
            <li>NASSCOM for IT/tech students</li>
            <li>IMA for medical students</li>
            <li>Bar Council for law students</li>
          </ul>

          <h3>Creating a Search System</h3>
          <p>Organization is key. Create a spreadsheet tracking:</p>
          <ul>
            <li>Scholarship name and provider</li>
            <li>Amount and duration</li>
            <li>Eligibility criteria</li>
            <li>Application deadline</li>
            <li>Required documents</li>
            <li>Application status</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Set a goal:</strong> Aim to apply for at least 10-15
              scholarships. Treating scholarship applications like a job
              (spending dedicated hours each week) significantly increases your
              success rate.
            </div>
          </div>
        </section>

        {/* Section 3: Eligibility */}
        <section
          id="eligibility"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckSquare className="h-6 w-6 text-primary" />
            3. Understanding Eligibility
          </h2>

          <p>
            Before investing time in an application, ensure you meet all
            eligibility criteria. Missing even one requirement can disqualify
            you immediately.
          </p>

          <h3>Common Eligibility Requirements</h3>

          <h4>Academic Requirements</h4>
          <ul>
            <li>Minimum percentage/GPA in previous exams</li>
            <li>Specific board exam performance</li>
            <li>Entrance exam scores</li>
            <li>Currently enrolled in a recognized institution</li>
          </ul>

          <h4>Financial Requirements</h4>
          <ul>
            <li>Family income below a certain threshold</li>
            <li>Specific income tax return status</li>
            <li>BPL/EWS category documentation</li>
          </ul>

          <h4>Category Requirements</h4>
          <ul>
            <li>Caste/community certificates</li>
            <li>Domicile certificates</li>
            <li>Gender (for women-only scholarships)</li>
            <li>Age limits</li>
          </ul>

          <h4>Field/Course Requirements</h4>
          <ul>
            <li>Specific streams (Science, Commerce, Arts)</li>
            <li>Particular courses (Engineering, Medical, MBA)</li>
            <li>
              Institution type (government, AICTE-approved, UGC-recognized)
            </li>
          </ul>

          <h3>Document Checklist</h3>
          <p>Always have these documents ready (keep scanned copies):</p>
          <ul>
            <li>Mark sheets (10th, 12th, graduation)</li>
            <li>Income certificate</li>
            <li>Caste certificate (if applicable)</li>
            <li>Domicile certificate</li>
            <li>Aadhaar card</li>
            <li>Bank account details (account in your name)</li>
            <li>Passport-size photographs</li>
            <li>Admission letter/bonafide certificate</li>
            <li>Fee receipt</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Warning:</strong> Document requirements can be very
              specific. Some scholarships require notarized copies, specific
              formats, or attestation from gazetted officers. Read requirements
              carefully!
            </div>
          </div>
        </section>

        {/* Section 4: Application Strategy */}
        <section
          id="application"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Application Strategy
          </h2>

          <p>
            Winning scholarships requires a strategic approach. Think of it as a
            campaign that needs planning, execution, and tracking.
          </p>

          <h3>Create a Timeline</h3>
          <p>Start 12-18 months before you need the funding:</p>
          <ul>
            <li>
              <strong>12-18 months before:</strong> Research and identify
              scholarships
            </li>
            <li>
              <strong>9-12 months before:</strong> Prepare documents, improve
              profile
            </li>
            <li>
              <strong>6-9 months before:</strong> Begin early applications
            </li>
            <li>
              <strong>3-6 months before:</strong> Apply to bulk of scholarships
            </li>
            <li>
              <strong>0-3 months:</strong> Follow up and apply to any remaining
              ones
            </li>
          </ul>

          <h3>Apply Broadly</h3>
          <p>Don&apos;t put all eggs in one basket:</p>
          <ul>
            <li>Apply to 10-20 scholarships minimum</li>
            <li>Include a mix of high-competition and niche scholarships</li>
            <li>Apply to both small and large amounts</li>
            <li>Consider partial scholarships—they add up</li>
          </ul>

          <h3>Customize Each Application</h3>
          <p>Generic applications rarely win. For each scholarship:</p>
          <ul>
            <li>Research the organization&apos;s mission and values</li>
            <li>Align your narrative with what they&apos;re looking for</li>
            <li>Use keywords from their description in your essay</li>
            <li>Explain specifically why this scholarship matters to you</li>
          </ul>

          <h3>Building Your Profile</h3>
          <p>Before applying, strengthen your candidacy:</p>
          <ul>
            <li>
              <strong>Academics:</strong> Maintain strong grades
            </li>
            <li>
              <strong>Extracurriculars:</strong> Leadership roles, clubs, sports
            </li>
            <li>
              <strong>Community service:</strong> Volunteering, social work
            </li>
            <li>
              <strong>Skills:</strong> Certifications, workshops, courses
            </li>
            <li>
              <strong>Achievements:</strong> Competitions, publications,
              projects
            </li>
          </ul>

          <h3>Meeting Deadlines</h3>
          <p>Deadlines are non-negotiable:</p>
          <ul>
            <li>Set reminders 2 weeks and 1 week before each deadline</li>
            <li>Submit at least 2-3 days early (for technical issues)</li>
            <li>Don&apos;t wait for the last day</li>
            <li>Keep proof of submission</li>
          </ul>
        </section>

        {/* Section 5: Essay */}
        <section
          id="essay"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            5. Winning Essay Writing
          </h2>

          <p>
            The essay is often the most important component of your application.
            It&apos;s your chance to become more than a collection of grades and
            certificates—it&apos;s where you become a person.
          </p>

          <h3>What Scholarship Committees Look For</h3>
          <ul>
            <li>
              <strong>Authenticity:</strong> Your genuine voice and story
            </li>
            <li>
              <strong>Purpose:</strong> Clear goals and how the scholarship
              helps
            </li>
            <li>
              <strong>Impact:</strong> What you&apos;ll do with your education
            </li>
            <li>
              <strong>Resilience:</strong> How you&apos;ve overcome challenges
            </li>
            <li>
              <strong>Fit:</strong> Alignment with the scholarship&apos;s
              mission
            </li>
          </ul>

          <h3>Essay Structure</h3>

          <h4>Opening Hook</h4>
          <p>
            Start with something memorable—a story, a vivid scene, a surprising
            fact about yourself. Avoid generic openings like &quot;I am applying
            for this scholarship because...&quot;
          </p>

          <h4>Your Story</h4>
          <p>Share your journey authentically:</p>
          <ul>
            <li>What experiences shaped you?</li>
            <li>What challenges did you face?</li>
            <li>What did you learn from them?</li>
            <li>What drives your passion for your field?</li>
          </ul>

          <h4>Your Goals</h4>
          <p>Be specific about what you want to achieve:</p>
          <ul>
            <li>Short-term: What will you achieve with this degree?</li>
            <li>Long-term: How will you contribute to society?</li>
            <li>Why this specific field?</li>
          </ul>

          <h4>The Scholarship&apos;s Role</h4>
          <p>Connect the scholarship to your journey:</p>
          <ul>
            <li>How will this specific scholarship help you?</li>
            <li>What would you do differently with this support?</li>
            <li>How do you align with the organization&apos;s values?</li>
          </ul>

          <h4>Strong Conclusion</h4>
          <p>
            End memorably with a forward-looking statement that leaves the
            reader feeling confident in your potential.
          </p>

          <h3>Writing Tips</h3>
          <ul>
            <li>
              <strong>Show, don&apos;t tell:</strong> Use specific examples and
              stories
            </li>
            <li>
              <strong>Be concise:</strong> Respect word limits strictly
            </li>
            <li>
              <strong>Use active voice:</strong> &quot;I led&quot; not &quot;The
              project was led by me&quot;
            </li>
            <li>
              <strong>Avoid clichés:</strong> &quot;I want to give back to
              society&quot; is overused
            </li>
            <li>
              <strong>Be honest:</strong> Don&apos;t exaggerate or fabricate
            </li>
            <li>
              <strong>Get feedback:</strong> Have teachers, mentors review your
              essay
            </li>
            <li>
              <strong>Revise multiple times:</strong> First drafts are never
              final drafts
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>The Specificity Test:</strong> If someone else could
              submit your essay with their name, it&apos;s too generic. Your
              essay should be uniquely YOU—details only you could write.
            </div>
          </div>

          <h3>Sample Essay Prompt Approach</h3>
          <p>
            <strong>Prompt:</strong> &quot;Describe a challenge you&apos;ve
            overcome and what you learned.&quot;
          </p>
          <p>
            <strong>Weak approach:</strong> &quot;I faced financial
            difficulties. My parents worked hard. I learned the value of
            money.&quot;
          </p>
          <p>
            <strong>Strong approach:</strong> A vivid story about a specific
            moment (perhaps watching your mother work late to pay fees), your
            feelings, your decision to excel academically, a specific
            achievement as a result, and how this shaped your current purpose.
          </p>
        </section>

        {/* Section 6: Recommendations */}
        <section
          id="recommendations"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            6. Letters of Recommendation
          </h2>

          <p>
            Strong letters of recommendation can tip the scales in your favor.
            They provide third-party validation of your qualities and potential.
          </p>

          <h3>Choosing Recommenders</h3>
          <p>Select people who can speak to your abilities authentically:</p>
          <ul>
            <li>Teachers who know you well (not just teach your class)</li>
            <li>Professors you&apos;ve worked with on projects</li>
            <li>Employers or internship supervisors</li>
            <li>Research mentors</li>
            <li>Activity/club advisors</li>
          </ul>

          <p>
            <strong>Quality over prestige:</strong> A detailed letter from a
            teacher who knows you well is better than a generic letter from a
            famous person who doesn&apos;t.
          </p>

          <h3>How to Ask</h3>
          <ul>
            <li>Ask at least 4-6 weeks before the deadline</li>
            <li>Ask in person if possible, then follow up in writing</li>
            <li>Be specific about why you&apos;re asking them</li>
            <li>Give them an easy way to decline (no pressure)</li>
          </ul>

          <h3>Provide Context</h3>
          <p>Make it easy for recommenders to write a strong letter:</p>
          <ul>
            <li>Your updated resume</li>
            <li>Scholarship description and what they&apos;re looking for</li>
            <li>Specific projects or achievements they might mention</li>
            <li>Your personal statement draft (if relevant)</li>
            <li>Deadline and submission instructions</li>
          </ul>

          <h3>Follow Up</h3>
          <ul>
            <li>Send a reminder one week before deadline</li>
            <li>Thank them after they submit</li>
            <li>Update them on your scholarship results</li>
            <li>Maintain the relationship for future opportunities</li>
          </ul>
        </section>

        {/* Section 7: Indian Scholarships */}
        <section
          id="indian"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            7. Top Scholarships in India
          </h2>

          <p>
            India has a vast ecosystem of scholarships. Here are some of the
            most significant ones across different categories:
          </p>

          <h3>Government Scholarships</h3>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">
                Central Sector Scholarship for College and University Students
              </p>
              <p className="text-muted-foreground">
                For students scoring above 80th percentile in Class 12.
                ₹20,000-25,000/year for graduation, ₹20,000/year for
                postgraduation. Apply via NSP.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">INSPIRE Scholarship</p>
              <p className="text-muted-foreground">
                For top 1% performers in Class 12 pursuing science. ₹80,000/year
                for 5 years. Department of Science & Technology.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">
                Post-Matric Scholarship for SC/ST/OBC/Minorities
              </p>
              <p className="text-muted-foreground">
                Covers tuition, maintenance, and other expenses. Income criteria
                apply. Apply via NSP and state portals.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">
                Prime Minister&apos;s Scholarship Scheme (PMSS)
              </p>
              <p className="text-muted-foreground">
                For children of ex-servicemen and widows. ₹30,000-36,000/year
                for professional courses.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">AICTE Pragati/Saksham Scholarships</p>
              <p className="text-muted-foreground">
                Pragati for girls, Saksham for students with disabilities in
                technical education. ₹50,000/year.
              </p>
            </div>
          </div>

          <h3>Corporate Scholarships</h3>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Tata Trusts Scholarships</p>
              <p className="text-muted-foreground">
                Multiple programs for undergraduate and postgraduate students.
                Need-based and merit-based options available.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Aditya Birla Scholarship</p>
              <p className="text-muted-foreground">
                For students at IIMs, IITs, BITS Pilani, XLRI, etc. ₹1.2-1.8
                lakh/year plus mentorship.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">
                L&apos;Oréal India For Young Women in Science
              </p>
              <p className="text-muted-foreground">
                For women pursuing science at the postgraduate level. ₹2.5 lakh
                fellowship.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Google India Scholarships</p>
              <p className="text-muted-foreground">
                Generation Google Scholarship, Women Techmakers, and other
                programs for CS/tech students.
              </p>
            </div>
          </div>

          <h3>Foundation Scholarships</h3>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Sitaram Jindal Foundation Scholarship</p>
              <p className="text-muted-foreground">
                For meritorious students with financial need. Multiple
                categories for different courses.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Foundation for Excellence (FFE)</p>
              <p className="text-muted-foreground">
                For first-generation engineering graduates from financially
                disadvantaged backgrounds.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">KC Mahindra Scholarships</p>
              <p className="text-muted-foreground">
                Multiple programs for undergraduate, postgraduate, and research
                studies in India and abroad.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: International */}
        <section
          id="international"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            8. International Scholarships
          </h2>

          <p>
            For students looking to study abroad, here are major international
            scholarship opportunities:
          </p>

          <h3>Fully Funded Scholarships</h3>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Fulbright-Nehru Fellowship (USA)</p>
              <p className="text-muted-foreground">
                For Master&apos;s and PhD in the USA. Fully funded including
                travel, tuition, living expenses. Highly competitive.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Chevening Scholarship (UK)</p>
              <p className="text-muted-foreground">
                For 1-year Master&apos;s in UK. Full funding. Leadership
                potential and work experience required.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Commonwealth Scholarship (UK)</p>
              <p className="text-muted-foreground">
                For Master&apos;s and PhD in UK from Commonwealth countries.
                Full funding for selected candidates.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">DAAD Scholarship (Germany)</p>
              <p className="text-muted-foreground">
                Multiple programs for studying in Germany. Living allowance,
                travel, health insurance covered.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Australia Awards</p>
              <p className="text-muted-foreground">
                Fully funded Master&apos;s and PhD in Australia. Tuition,
                living, and return airfare included.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Erasmus Mundus (Europe)</p>
              <p className="text-muted-foreground">
                For joint Master&apos;s programs across multiple European
                universities. Full scholarship available for non-EU students.
              </p>
            </div>
          </div>

          <h3>University-Specific Scholarships</h3>
          <p>Many top universities offer significant scholarships:</p>
          <ul>
            <li>
              Stanford Knight-Hennessy Scholars (fully funded for graduate
              school)
            </li>
            <li>Oxford Rhodes Scholarship (fully funded)</li>
            <li>Cambridge Gates Scholarship (fully funded)</li>
            <li>Yale World Fellows</li>
            <li>MIT Abdul Kalam Fellowship</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Application Tip:</strong> International scholarships often
              require early application—12-18 months before your program begins.
              Start researching and preparing documents early!
            </div>
          </div>
        </section>

        {/* Section 9: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            9. Common Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Missing deadlines</p>
              <p className="text-muted-foreground">
                No excuses work. Late applications are rejected automatically.
                Set reminders, plan ahead, and submit early.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Using generic essays</p>
              <p className="text-muted-foreground">
                Committees read hundreds of applications. Generic &quot;I want
                to change the world&quot; essays blend together. Be specific and
                personal.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Not following instructions</p>
              <p className="text-muted-foreground">
                Word limits, document formats, naming conventions—follow them
                exactly. Disregarding instructions shows carelessness.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Applying to only one scholarship</p>
              <p className="text-muted-foreground">
                Even the best candidates face rejection. Apply widely to
                increase your chances. 10-20 applications is reasonable.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Weak letters of recommendation</p>
              <p className="text-muted-foreground">
                Asking the wrong people or not giving recommenders enough time
                and context leads to generic, unhelpful letters.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Incomplete applications</p>
              <p className="text-muted-foreground">
                Missing documents, unsigned forms, or incomplete sections lead
                to automatic rejection. Double-check everything.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Not proofreading</p>
              <p className="text-muted-foreground">
                Spelling errors, grammatical mistakes, and typos signal
                carelessness. Have someone else review your application before
                submitting.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            10. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                When should I start looking for scholarships?
              </p>
              <p className="mt-2 text-muted-foreground">
                Ideally 12-18 months before your program begins. Many
                scholarships have deadlines 6-9 months before the academic year
                starts. Start as early as possible.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I apply for multiple scholarships simultaneously?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely yes, unless a specific scholarship prohibits it.
                Applying to multiple scholarships increases your chances
                significantly. Just manage your applications carefully.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need perfect grades to get a scholarship?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not always. While merit scholarships require strong academics,
                many scholarships consider leadership, community service,
                financial need, or specific talents. There&apos;s a scholarship
                for almost every profile.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Are scholarship applications really worth the effort?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Consider it this way: if you spend 10 hours on an
                application and win a ₹50,000 scholarship, that&apos;s ₹5,000
                per hour of work—far more than most part-time jobs pay.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I don&apos;t have extraordinary achievements?
              </p>
              <p className="mt-2 text-muted-foreground">
                You don&apos;t need to be extraordinary. Authentic stories about
                your journey, genuine passion for your field, and clear goals
                can be more compelling than a list of achievements. Focus on
                what makes you YOU.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How do I handle scholarship interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Know your application thoroughly, research the organization,
                prepare to discuss your goals and motivations, and practice
                common questions. Be authentic—they want to know the real you.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Your Scholarship Journey Starts Now</h2>
          <p>
            Scholarships are not just about money—they&apos;re recognition of
            your potential. Every scholarship you win is a vote of confidence in
            your ability to make a difference.
          </p>
          <p>
            The process requires effort, organization, and persistence. You may
            face rejections—every successful scholarship recipient has. But with
            each application, you refine your story, strengthen your profile,
            and increase your chances.
          </p>
          <p>
            Start today. Open that spreadsheet, find three scholarships you
            qualify for, and mark their deadlines. Your future self will thank
            you.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your dreams deserve funding. Go get it! 🎓💰✨
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/study-abroad-guide-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Study Abroad Guide for Indian Students
            </Link>
            <Link
              href="/blog/one-page-resume-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Writing Guide
            </Link>
            <Link
              href="/blog/sop-writing-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              SOP Writing Guide
            </Link>
            <Link
              href="/blog/gre-vs-gmat-comparison"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              GRE vs GMAT Comparison
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Score Checker
            </Link>
            <Link
              href="/blog/international-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              International Internships Guide
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
              <p className="font-bold">
                Written by Sproutern Financial Aid Team
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                Expert guidance from education counselors and scholarship
                advisors who have helped hundreds of students secure funding.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
