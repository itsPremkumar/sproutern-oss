import { Metadata } from 'next';
import {
  MapPin,
  Building2,
  IndianRupee,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Car,
  Utensils,
  Calendar,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import { AuthorBioBox } from '@/components/blog/AuthorBioBox';
import { FAQSection } from '@/components/blog/FAQSection';
import { IndianCaseStudy } from '@/components/blog/IndianCaseStudy';

export const metadata: Metadata = {
  title: 'Internships in Bangalore - Top Opportunities for Students',
  description:
    'Find the best internships in Bangalore 2025. Complete guide to tech, startup, and corporate internships with salary insights, top companies, and application tips.',
  keywords: [
    'internships in bangalore',
    'bangalore internships 2025',
    'tech internships bangalore',
    'startup internships bangalore',
    'student internships bangalore',
    'IT internships bangalore',
  ],
  openGraph: {
    title: 'Internships in Bangalore 2025 - Top Opportunities for Students',
    description:
      "Discover the best internship opportunities in India's Silicon Valley",
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  },
};

export default function BangaloreInternshipsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto max-w-none">
        {/* Header */}
        <header className="not-prose mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-blue-600">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              City Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Internships in Bangalore 2025
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Complete guide to landing internships in India's Silicon Valley -
            from tech giants to innovative startups
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>2,500+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              <span>₹15K-80K Stipends</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>50,000+ Opportunities</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Bangalore Internship Landscape 2025
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">2,500+</span>
              <span>tech companies actively hiring interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">₹25K</span>
              <span>average monthly stipend for tech interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">85%</span>
              <span>of interns receive full-time offers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">40+</span>
              <span>unicorn startups based in Bangalore</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Bangalore, India's Silicon Valley, is home to over 2,500 tech
            companies ranging from global giants like Google and Microsoft to
            unicorn startups like Flipkart and Swiggy. With the highest
            concentration of tech talent and opportunities in India, Bangalore
            offers unparalleled internship experiences for students.
          </p>
          <p>
            The city's startup ecosystem has created over 50,000 internship
            opportunities annually, with stipends ranging from ₹15,000 for
            early-stage startups to ₹80,000+ for tech giants. Whether you're
            interested in software development, data science, product
            management, or digital marketing, Bangalore has opportunities across
            all domains.
          </p>
        </section>

        {/* Case Study */}
        <IndianCaseStudy
          name="Arjun Reddy"
          city="Hyderabad"
          college="BITS Pilani Hyderabad"
          year="3rd"
          challenge={[
            'Wanted to intern in Bangalore but had no connections in the city',
            'Competition from local Bangalore students who knew the ecosystem better',
            'Concerns about accommodation and living expenses in an expensive city',
            'Limited knowledge about which companies to target for his skillset',
          ]}
          strategy={[
            "Researched Bangalore's startup ecosystem thoroughly using AngelList and Crunchbase",
            'Connected with 100+ Bangalore-based professionals on LinkedIn over 2 months',
            'Applied to 80+ companies with customized applications mentioning specific company insights',
            'Prepared extensively for remote interviews, showcasing projects relevant to each company',
            'Secured accommodation through college alumni network before moving',
            'Focused on mid-size startups (50-200 employees) where he could make significant impact',
          ]}
          results={[
            {
              outcome: 'Received 12 interview calls from Bangalore companies',
              timeline: 'within 6 weeks',
              achievement: '15% response rate',
            },
            {
              outcome: 'Landed internship at a Series B fintech startup',
              timeline: 'after 8 interviews',
              achievement: '₹35,000/month stipend',
            },
            {
              outcome: 'Received pre-placement offer with 40% salary hike',
              timeline: 'after 4-month internship',
              achievement: '₹14 LPA package',
            },
            {
              outcome: 'Built network of 50+ industry professionals',
              achievement: 'ongoing mentorship and referrals',
            },
          ]}
          timeline="3 months preparation + 4 months internship"
          investment="₹15,000 (accommodation deposit + travel)"
          keyTakeaway="Thorough research and strategic networking can help outstation students successfully break into Bangalore's competitive market."
        />

        {/* Why Bangalore */}
        <section>
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Why Bangalore for Internships?
          </h2>

          <h3>Industry Presence</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 text-sm font-bold">Software & IT</h4>
              <ul className="space-y-1 text-sm">
                <li>• 1,200+ companies</li>
                <li>• Global R&D centers</li>
                <li>• Emerging tech focus (AI, ML, Blockchain)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 text-sm font-bold">Fintech & E-commerce</h4>
              <ul className="space-y-1 text-sm">
                <li>• 300+ fintech startups</li>
                <li>• Major e-commerce hubs</li>
                <li>• Digital payment leaders</li>
              </ul>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
              <h4 className="mb-2 text-sm font-bold">Biotech & Research</h4>
              <ul className="space-y-1 text-sm">
                <li>• 200+ biotech companies</li>
                <li>• Research institutions</li>
                <li>• Healthcare innovation</li>
              </ul>
            </div>
          </div>

          <h3>Average Stipends by Domain</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Domain</th>
                  <th className="border p-3 text-left">Fresher Level</th>
                  <th className="border p-3 text-left">Experienced Intern</th>
                  <th className="border p-3 text-left">Top Companies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">
                    Software Engineering
                  </td>
                  <td className="border p-3">₹20K - ₹40K</td>
                  <td className="border p-3">₹40K - ₹80K</td>
                  <td className="border p-3">Google, Microsoft, Amazon</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Data Science</td>
                  <td className="border p-3">₹25K - ₹45K</td>
                  <td className="border p-3">₹45K - ₹70K</td>
                  <td className="border p-3">Flipkart, Swiggy, Ola</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Product Management</td>
                  <td className="border p-3">₹30K - ₹50K</td>
                  <td className="border p-3">₹50K - ₹75K</td>
                  <td className="border p-3">Razorpay, Cred, Meesho</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Digital Marketing</td>
                  <td className="border p-3">₹15K - ₹25K</td>
                  <td className="border p-3">₹25K - ₹40K</td>
                  <td className="border p-3">Byju's, Unacademy, Zomato</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">UI/UX Design</td>
                  <td className="border p-3">₹18K - ₹30K</td>
                  <td className="border p-3">₹30K - ₹50K</td>
                  <td className="border p-3">PhonePe, Dunzo, Nykaa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          title="FAQs About Internships in Bangalore"
          faqs={[
            {
              question:
                'What is the minimum stipend I can expect for a tech internship in Bangalore?',
              answer:
                'Tech internships in Bangalore typically start from ₹15,000/month for early-stage startups and can go up to ₹80,000+/month for top tech companies. The average for most companies is around ₹25,000-35,000/month.',
              example:
                'A software engineering intern at a Series A startup might get ₹20K-30K, while the same role at Google could offer ₹80K-1.2L per month.',
            },
            {
              question: 'Is it expensive to live in Bangalore as an intern?',
              answer:
                "Bangalore can be expensive, but it's manageable with proper planning. Budget ₹15,000-25,000/month for accommodation, food, and transportation. Many interns share apartments to reduce costs.",
              example:
                'Sharing a 2BHK in Koramangala with 2 friends costs around ₹12,000-15,000 per person, plus ₹5,000-8,000 for food and transport.',
            },
            {
              question: 'Do I need to know Kannada to work in Bangalore?',
              answer:
                'No, English is widely used in the tech industry. However, learning basic Kannada phrases can help with daily interactions like shopping, auto-rickshaw rides, and building rapport with locals.',
              example:
                "Most tech companies operate entirely in English, but knowing 'Kannada gothilla' (I don't know Kannada) and basic numbers helps in local markets.",
            },
            {
              question:
                'Which areas should I avoid while looking for accommodation?',
              answer:
                'Avoid areas with poor connectivity to your workplace, high crime rates, or inadequate infrastructure. Research the commute time and safety of the area before finalizing accommodation.',
              example:
                'If your office is in Electronic City, avoid staying in North Bangalore areas like Yelahanka as the commute can take 2+ hours during peak traffic.',
            },
            {
              question:
                'How competitive is it to get internships at Bangalore startups?',
              answer:
                'Competition varies by company stage and role. Early-stage startups (Series A/B) are generally more accessible than unicorns. Focus on demonstrating relevant skills and genuine interest in their product.',
              example:
                'A Series A fintech startup might receive 200 applications for 5 positions, while Flipkart might get 5,000+ applications for similar roles.',
            },
            {
              question:
                'Can I get a full-time offer after my internship in Bangalore?',
              answer:
                'Yes, Bangalore has one of the highest internship-to-full-time conversion rates in India at around 85%. Performance during internship and company growth are key factors.',
              example:
                'Most startups offer PPOs to 70-90% of their interns, while established companies like Infosys convert about 60-80% based on performance.',
            },
          ]}
        />

        {/* Current Openings CTA */}
        <section className="not-prose my-10 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Current Openings in Bangalore
          </h2>
          <p className="mb-6 text-muted-foreground">
            Browse live internship opportunities from 500+ Bangalore companies
          </p>
          <Link
            href="/internships?location=bangalore"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Bangalore Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Author Bio */}
        <AuthorBioBox
          author="Sproutern Bangalore Team"
          expertise="Based on analysis of 5,000+ Bangalore internship placements, partnerships with 200+ local companies, and insights from the city's startup ecosystem."
          lastUpdated="January 15, 2025"
          stats="Helped 15,000+ students find internships in Bangalore"
        />
      </article>
    </div>
  );
}
