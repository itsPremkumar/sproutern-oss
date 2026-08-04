import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  Globe,
  Calendar,
  ExternalLink,
  CheckCircle,
  BookOpen,
  Banknote,
  Target,
  Clock,
  ArrowRight,
  Filter,
  Search,
  Info,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Scholarships for Students',
  description:
    'Comprehensive list of scholarships for students including NTSE, KVPY, Fulbright, Chevening, DAAD, Erasmus, and 50+ government, private & international scholarships. Find eligibility, deadlines, and application links.',
  keywords:
    'scholarships for students, NTSE scholarship, KVPY scholarship, merit scholarship India, international scholarships, Fulbright, Chevening, DAAD, Erasmus Mundus, study abroad scholarships, Gates Cambridge, Commonwealth scholarships',
  openGraph: {
    title: 'Scholarships for Students - India & International',
    description:
      'Find 60+ scholarships for school, college students, and professionals. Government, private & international opportunities.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/scholarships',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarships for Students - India & International',
    description:
      'Comprehensive scholarship database for students in India and abroad',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/scholarships',
  },
};

// Scholarship data organized by category
const scholarships = {
  schoolStudents: [
    {
      name: 'National Talent Search Examination (NTSE)',
      provider: 'NCERT, Government of India',
      amount: '₹1,250/month (Class XI-XII), ₹2,000/month (UG & PG)',
      eligibility: 'Class 10 students with minimum 60% marks',
      deadline: 'November (varies by state)',
      link: 'https://ncert.nic.in/national-talent-examination.php',
      type: 'Government',
      level: 'School',
    },
    {
      name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
      provider: 'Department of Science & Technology',
      amount: '₹5,000-7,000/month + Annual Contingency',
      eligibility: 'Class 11, 12 students & 1st year undergraduates in Science',
      deadline: 'August-September',
      link: 'http://kvpy.iisc.ernet.in/',
      type: 'Government',
      level: 'School',
    },
    {
      name: 'INSPIRE Scholarship',
      provider: 'Department of Science & Technology',
      amount: '₹80,000/year',
      eligibility: 'Top 1% in Class 12 boards pursuing Science',
      deadline: 'Ongoing',
      link: 'https://online-inspire.gov.in/',
      type: 'Government',
      level: 'School',
    },
    {
      name: 'Central Sector Scheme of Scholarships',
      provider: 'Ministry of Education',
      amount: '₹10,000-20,000/year',
      eligibility: 'Top 20% in Class 12 with family income < ₹8 lakh',
      deadline: 'October-November',
      link: 'https://scholarships.gov.in/',
      type: 'Government',
      level: 'School',
    },
    {
      name: 'Pre-Matric Scholarship for Minorities',
      provider: 'Ministry of Minority Affairs',
      amount: '₹1,000-4,200/year',
      eligibility: 'Class 1-10 minority students with family income < ₹1 lakh',
      deadline: 'September-November',
      link: 'https://scholarships.gov.in/',
      type: 'Government',
      level: 'School',
    },
    {
      name: 'Vidyasaarathi Scholarship',
      provider: 'NSDL e-Governance',
      amount: 'Varies (₹10,000-75,000)',
      eligibility: 'Class 10-12 students from various backgrounds',
      deadline: 'Ongoing',
      link: 'https://www.vidyasaarathi.co.in/',
      type: 'Private',
      level: 'School',
    },
  ],
  undergraduates: [
    {
      name: 'Prime Minister Special Scholarship Scheme (PMSSS)',
      provider: 'AICTE, Government of India',
      amount: '₹1.25 lakh - ₹3 lakh/year (tuition) + ₹1 lakh (maintenance)',
      eligibility: 'Students from J&K and Ladakh',
      deadline: 'April-June',
      link: 'https://www.aicte-india.org/schemes/students-development-schemes/PMSSS',
      type: 'Government',
      level: 'Undergraduate',
    },
    {
      name: 'Post-Matric Scholarship for SC/ST/OBC',
      provider: 'Ministry of Social Justice',
      amount: 'Full tuition + Maintenance',
      eligibility: 'SC/ST/OBC students with family income criteria',
      deadline: 'September-November',
      link: 'https://scholarships.gov.in/',
      type: 'Government',
      level: 'Undergraduate',
    },
    {
      name: 'Pragati Scholarship for Girls',
      provider: 'AICTE',
      amount: '₹50,000/year',
      eligibility: 'Girls in technical courses with family income < ₹8 lakh',
      deadline: 'December',
      link: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
      type: 'Government',
      level: 'Undergraduate',
    },
    {
      name: 'Saksham Scholarship for Disabled',
      provider: 'AICTE',
      amount: '₹50,000/year',
      eligibility: 'Students with 40%+ disability in technical courses',
      deadline: 'December',
      link: 'https://www.aicte-india.org/schemes/students-development-schemes/Saksham',
      type: 'Government',
      level: 'Undergraduate',
    },
    {
      name: 'Narotam Sekhsaria Scholarship',
      provider: 'Narotam Sekhsaria Foundation',
      amount: 'Interest-free loan up to ₹20 lakh',
      eligibility: 'Indian students pursuing PG abroad',
      deadline: 'March-April',
      link: 'https://www.nsscholarship.org/',
      type: 'Private',
      level: 'Undergraduate',
    },
    {
      name: 'Reliance Foundation Scholarship',
      provider: 'Reliance Foundation',
      amount: 'Up to ₹6 lakh',
      eligibility: 'UG students in select fields with academic merit',
      deadline: 'Varies',
      link: 'https://www.scholarships.reliancefoundation.org/',
      type: 'Private',
      level: 'Undergraduate',
    },
    {
      name: 'Tata Trusts Scholarship',
      provider: 'Tata Education & Development Trust',
      amount: 'Varies by course',
      eligibility: 'Undergraduate students with financial need',
      deadline: 'Ongoing',
      link: 'https://www.tatatrusts.org/',
      type: 'Private',
      level: 'Undergraduate',
    },
    {
      name: 'Foundation for Academic Excellence and Access (FAEA)',
      provider: 'FAEA',
      amount: 'Up to ₹10 lakh',
      eligibility: 'Students from underprivileged backgrounds',
      deadline: 'February-March',
      link: 'https://ffrnd.org/faea/',
      type: 'Private',
      level: 'Undergraduate',
    },
  ],
  postgraduates: [
    {
      name: 'GATE Scholarship',
      provider: 'AICTE/MHRD',
      amount: '₹12,400/month',
      eligibility: 'GATE qualified students in MTech/ME',
      deadline: 'Based on GATE exam',
      link: 'https://gate.iitd.ac.in/',
      type: 'Government',
      level: 'Postgraduate',
    },
    {
      name: 'UGC NET JRF',
      provider: 'UGC',
      amount: '₹31,000-35,000/month',
      eligibility: 'NET JRF qualified candidates for PhD',
      deadline: 'Based on NET exam',
      link: 'https://ugcnet.nta.nic.in/',
      type: 'Government',
      level: 'Postgraduate',
    },
    {
      name: 'CSIR NET JRF',
      provider: 'CSIR',
      amount: '₹31,000-35,000/month',
      eligibility: 'CSIR NET qualified in Science subjects',
      deadline: 'Based on CSIR NET exam',
      link: 'https://csirnet.nta.nic.in/',
      type: 'Government',
      level: 'Postgraduate',
    },
    {
      name: 'Prime Minister Research Fellowship (PMRF)',
      provider: 'Ministry of Education',
      amount: '₹70,000-80,000/month + Research Grant',
      eligibility: 'Top engineering, science graduates for PhD',
      deadline: 'May & October',
      link: 'https://www.pmrf.in/',
      type: 'Government',
      level: 'Postgraduate',
    },
    {
      name: 'Maulana Azad National Fellowship',
      provider: 'UGC',
      amount: '₹31,000-35,000/month',
      eligibility: 'Minority community students for MPhil/PhD',
      deadline: 'October-December',
      link: 'https://minorityaffairs.gov.in/',
      type: 'Government',
      level: 'Postgraduate',
    },
  ],
  international: [
    {
      name: 'Fulbright-Nehru Scholarship',
      provider: 'USIEF',
      amount: 'Full funding (tuition, living, travel)',
      eligibility: 'Indian citizens for Masters/PhD in USA',
      deadline: 'May-June',
      link: 'https://www.usief.org.in/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Commonwealth Scholarship',
      provider: 'Commonwealth Secretariat',
      amount: 'Full funding for UK universities',
      eligibility: 'Graduates from Commonwealth countries',
      deadline: 'October-December',
      link: 'https://cscuk.fcdo.gov.uk/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Chevening Scholarship',
      provider: 'UK Government',
      amount: 'Full funding for Masters in UK',
      eligibility: 'Professionals with 2+ years experience',
      deadline: 'November',
      link: 'https://www.chevening.org/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'DAAD Scholarship (Germany)',
      provider: 'German Academic Exchange Service',
      amount: '€861-1200/month',
      eligibility: 'Indian students for Masters/PhD in Germany',
      deadline: 'Varies by program',
      link: 'https://www.daad.de/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Erasmus Mundus Scholarship',
      provider: 'European Commission',
      amount: '€1,000-1,400/month + travel',
      eligibility: 'Students for joint Masters programs in Europe',
      deadline: 'December-January',
      link: 'https://erasmus-plus.ec.europa.eu/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Australia Awards (ASEAN)',
      provider: 'Australian Government',
      amount: 'Full funding for Masters/PhD',
      eligibility: 'Citizens of participating countries',
      deadline: 'April-May',
      link: 'https://www.australiaawardssouthasia.org/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'MEXT Scholarship (Japan)',
      provider: 'Japanese Government',
      amount: 'Full tuition + ¥143,000-145,000/month',
      eligibility: 'Students for UG/PG/Research in Japan',
      deadline: 'April',
      link: 'https://www.studyinjapan.go.jp/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Swiss Government Excellence Scholarship',
      provider: 'Swiss Confederation',
      amount: 'CHF 1,920/month',
      eligibility: 'Researchers & PhD students for Switzerland',
      deadline: 'August-November',
      link: 'https://www.sbfi.admin.ch/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Gates Cambridge Scholarship',
      provider: 'Bill & Melinda Gates Foundation',
      amount: 'Full funding (tuition, living, travel)',
      eligibility: 'Outstanding applicants for postgraduate study at Cambridge',
      deadline: 'October/December',
      link: 'https://www.gatescambridge.org/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Rhodes Scholarship',
      provider: 'Rhodes Trust',
      amount: 'Full funding for Oxford University',
      eligibility: 'Exceptional students from eligible countries',
      deadline: 'July-October (varies by country)',
      link: 'https://www.rhodeshouse.ox.ac.uk/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Vanier Canada Graduate Scholarships',
      provider: 'Government of Canada',
      amount: 'CAD 50,000/year for 3 years',
      eligibility: 'Doctoral students with academic excellence',
      deadline: 'November',
      link: 'https://vanier.gc.ca/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Korean Government Scholarship (KGSP)',
      provider: 'National Institute for International Education',
      amount: 'Full tuition + monthly stipend',
      eligibility: 'Students for UG/PG in South Korea',
      deadline: 'February-March',
      link: 'https://www.studyinkorea.go.kr/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'SN Bose Scholars Program',
      provider: 'IUSSTF (Indo-US Science & Technology Forum)',
      amount: '$2,500/month + travel',
      eligibility: 'Indian students for research internships in USA',
      deadline: 'January',
      link: 'https://www.iusstf.org/program/sn-bose-scholars-program',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Rotary Peace Fellowships',
      provider: 'Rotary Foundation',
      amount: 'Full funding for Peace Studies',
      eligibility: 'Professionals working in peace and conflict resolution',
      deadline: 'May',
      link: 'https://www.rotary.org/en/our-programs/peace-fellowships',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Aga Khan Foundation Scholarship',
      provider: 'Aga Khan Foundation',
      amount: '50% grant, 50% loan',
      eligibility: 'Developing country students for postgraduate study',
      deadline: 'March',
      link: 'https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Holland Scholarship (Netherlands)',
      provider: 'Dutch Ministry of Education',
      amount: '€5,000 one-time',
      eligibility: 'Non-EEA students for Bachelor/Master in Netherlands',
      deadline: 'February-May',
      link: 'https://www.studyinholland.nl/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Orange Tulip Scholarship (Netherlands)',
      provider: 'Nuffic Neso India',
      amount: 'Varies by university (€5,000-€25,000)',
      eligibility: 'Indian students for Dutch universities',
      deadline: 'January-April',
      link: 'https://www.nesoindia.org/scholarships',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Singapore Government Scholarship',
      provider: 'Ministry of Education, Singapore',
      amount: 'Full tuition + monthly stipend',
      eligibility: 'International students for UG in Singapore',
      deadline: 'January-March',
      link: 'https://www.moe.gov.sg/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'New Zealand Excellence Awards',
      provider: 'Education New Zealand',
      amount: 'NZD 10,000-30,000',
      eligibility: 'Indian students for study in New Zealand',
      deadline: 'April-August',
      link: 'https://www.studyinnewzealand.govt.nz/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Government of Ireland International Scholarship',
      provider: 'Irish Government',
      amount: '€10,000 + tuition waiver',
      eligibility: 'Non-EU students for undergraduate in Ireland',
      deadline: 'March',
      link: 'https://www.gov.ie/en/service/study-in-ireland/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'CSC Scholarship (China)',
      provider: 'China Scholarship Council',
      amount: 'Full funding (tuition, accommodation, stipend)',
      eligibility: 'International students for UG/PG/PhD in China',
      deadline: 'January-April',
      link: 'https://www.campuschina.org/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'UAE Government Scholarship',
      provider: 'UAE Ministry of Education',
      amount: 'Full tuition + living allowance',
      eligibility: 'Outstanding international students',
      deadline: 'March-May',
      link: 'https://www.moe.gov.ae/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Swedish Institute Scholarships',
      provider: 'Swedish Institute',
      amount: 'SEK 10,000/month + travel',
      eligibility: 'Students from eligible countries for Master in Sweden',
      deadline: 'January-February',
      link: 'https://si.se/en/apply/scholarships/',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Denmark Government Scholarship',
      provider: 'Danish Ministry of Higher Education',
      amount: 'Full/partial tuition waiver + grant',
      eligibility: 'Non-EU students with excellent academics',
      deadline: 'February-March',
      link: 'https://studyindenmark.dk/study-options/scholarships',
      type: 'International',
      level: 'International',
    },
    {
      name: 'Finland Government Scholarship',
      provider: 'Finnish National Agency for Education',
      amount: '€1,500/month',
      eligibility: 'Doctoral students and researchers',
      deadline: 'February',
      link: 'https://www.studyinfinland.fi/',
      type: 'International',
      level: 'International',
    },
  ],
  corporatePrivate: [
    {
      name: 'Google Scholarships',
      provider: 'Google',
      amount: '$10,000 USD',
      eligibility: 'Women and underrepresented groups in tech',
      deadline: 'December',
      link: 'https://buildyourfuture.withgoogle.com/scholarships',
      type: 'Corporate',
      level: 'Corporate',
    },
    {
      name: 'Adobe Research Women-in-Tech Scholarship',
      provider: 'Adobe',
      amount: '$10,000 USD',
      eligibility: 'Female students in CS/related fields',
      deadline: 'September',
      link: 'https://research.adobe.com/scholarship/',
      type: 'Corporate',
      level: 'Corporate',
    },
    {
      name: 'Aditya Birla Scholarship',
      provider: 'Aditya Birla Group',
      amount: '₹1.8 lakh - ₹2.65 lakh/year',
      eligibility: 'Students at IIMs, IITs, BITS, XLRIs, etc.',
      deadline: 'August',
      link: 'https://www.adityabirlascholars.net/',
      type: 'Corporate',
      level: 'Corporate',
    },
    {
      name: 'HDFC Educational Crisis Scholarship',
      provider: 'HDFC Bank',
      amount: 'Up to ₹75,000',
      eligibility: 'Students facing financial crisis',
      deadline: 'Ongoing',
      link: 'https://www.hdfcbank.com/',
      type: 'Corporate',
      level: 'Corporate',
    },
    {
      name: 'LIC Golden Jubilee Scholarship',
      provider: 'LIC of India',
      amount: '₹10,000-20,000/year',
      eligibility: 'Class 12 passed with 60%+ marks',
      deadline: 'December',
      link: 'https://www.licindia.in/',
      type: 'Corporate',
      level: 'Corporate',
    },
    {
      name: 'ONGC Scholarship',
      provider: 'ONGC',
      amount: '₹48,000/year',
      eligibility: 'SC/ST students in engineering/MBBS/MBA',
      deadline: 'September',
      link: 'https://www.ongcindia.com/',
      type: 'Corporate',
      level: 'Corporate',
    },
  ],
};

const ScholarshipCard = ({
  scholarship,
}: {
  scholarship: (typeof scholarships.schoolStudents)[0];
}) => (
  <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
    <CardContent className="p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold leading-tight">{scholarship.name}</h3>
        <Badge
          variant={
            scholarship.type === 'Government'
              ? 'default'
              : scholarship.type === 'International'
                ? 'secondary'
                : 'outline'
          }
        >
          {scholarship.type}
        </Badge>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {scholarship.provider}
      </p>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <Banknote className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
          <span className="text-sm">
            <strong>Amount:</strong> {scholarship.amount}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
          <span className="text-sm">
            <strong>Eligibility:</strong> {scholarship.eligibility}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
          <span className="text-sm">
            <strong>Deadline:</strong> {scholarship.deadline}
          </span>
        </div>
      </div>

      <Button
        asChild
        variant="outline"
        className="group mt-4 w-full"
      >
        <a
          href={scholarship.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default function ScholarshipsPage() {
  const faqs = [
    {
      question: 'How do I apply for government scholarships?',
      answer:
        'Most government scholarships are available through the National Scholarship Portal (scholarships.gov.in). Create an account, complete your profile, and apply to eligible scholarships. Keep your Aadhaar, bank details, and academic documents ready.',
    },
    {
      question:
        'What documents are typically required for scholarship applications?',
      answer:
        'Common requirements include: Academic marksheets, Income certificate, Caste certificate (if applicable), Aadhaar card, Bank passbook, Passport-size photos, Domicile certificate, and Bonafide certificate from institution.',
    },
    {
      question: 'Can I apply for multiple scholarships simultaneously?',
      answer:
        "Yes, you can apply for multiple scholarships. However, some scholarships don't allow concurrent benefits from other sources. Always read the terms carefully and disclose other scholarships during application.",
    },
    {
      question: 'When should I start applying for scholarships?',
      answer:
        'Start at least 3-6 months before deadlines. For international scholarships, begin 1 year in advance as they require more documentation. Create a calendar of deadlines and set reminders.',
    },
    {
      question:
        'What if my family income is slightly above the eligibility limit?',
      answer:
        "Look for merit-based scholarships that don't have income criteria. Many corporate and private scholarships focus on academic performance rather than financial background. Research alternative options.",
    },
    {
      question: 'Are there scholarships for students already in college?',
      answer:
        "Yes! Many scholarships are available for ongoing students including merit scholarships, research fellowships, and corporate sponsored scholarships. Check with your institution's scholarship cell regularly.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Scholarships',
        item: 'https://sproutern.dpdns.org/scholarships',
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Award className="h-4 w-4" />
            60+ Scholarships Updated Regularly
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Scholarships for Students
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Comprehensive database of government, private, and international
            scholarships for school students, undergraduates, postgraduates, and
            professionals. Study in India or abroad with our curated scholarship
            list.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#school">School Students</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#undergraduate">Undergraduates</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#international">Study Abroad</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <GraduationCap className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">60+ Scholarships</p>
              <p className="text-xs text-muted-foreground">Curated list</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Globe className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">20+ Countries</p>
              <p className="text-xs text-muted-foreground">
                International options
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Banknote className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Up to ₹20 Lakh</p>
              <p className="text-xs text-muted-foreground">Maximum amount</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Clock className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Updated Weekly</p>
              <p className="text-xs text-muted-foreground">Latest deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="container pb-8">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
                Important Note
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Scholarship deadlines and amounts may change. Always verify
                information on official websites before applying. Bookmark the{' '}
                <a
                  href="https://scholarships.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline"
                >
                  National Scholarship Portal
                </a>{' '}
                for government scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Students Scholarships */}
      <section
        id="school"
        className="container py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" />
            For School Students (Class 9-12)
          </div>
          <h2 className="mb-2 text-3xl font-bold">School Level Scholarships</h2>
          <p className="text-muted-foreground">
            Start early! These scholarships can fund your higher education
            journey.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.schoolStudents.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
            />
          ))}
        </div>
      </section>

      {/* Undergraduate Scholarships */}
      <section
        id="undergraduate"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            For Undergraduate Students
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Undergraduate Scholarships
          </h2>
          <p className="text-muted-foreground">
            Fund your bachelor's degree with these merit and need-based
            scholarships.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.undergraduates.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
            />
          ))}
        </div>
      </section>

      {/* Postgraduate Scholarships */}
      <section
        id="postgraduate"
        className="container py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Award className="h-4 w-4" />
            For Postgraduate & Research
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Postgraduate & Research Fellowships
          </h2>
          <p className="text-muted-foreground">
            Pursue higher studies and research with these prestigious
            fellowships.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.postgraduates.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
            />
          ))}
        </div>
      </section>

      {/* International Scholarships */}
      <section
        id="international"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Globe className="h-4 w-4" />
            Study Abroad Scholarships
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            International Scholarships
          </h2>
          <p className="text-muted-foreground">
            Fully funded opportunities to study in USA, UK, Germany, Japan &
            more.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.international.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
            />
          ))}
        </div>
      </section>

      {/* Corporate Scholarships */}
      <section
        id="corporate"
        className="container py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Target className="h-4 w-4" />
            Corporate & Private Scholarships
          </div>
          <h2 className="mb-2 text-3xl font-bold">Corporate Scholarships</h2>
          <p className="text-muted-foreground">
            Scholarships from leading companies and private foundations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.corporatePrivate.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
            />
          ))}
        </div>
      </section>

      {/* Application Tips */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Scholarship Application Tips
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Follow these tips to increase your chances of getting scholarships.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                1
              </span>
              Start Early
            </h3>
            <p className="text-sm text-muted-foreground">
              Begin your scholarship search 6-12 months before you need funding.
              Create a calendar of deadlines.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                2
              </span>
              Maintain Documents
            </h3>
            <p className="text-sm text-muted-foreground">
              Keep digital copies of all academic records, certificates, income
              proofs, and identity documents organized.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                3
              </span>
              Write Strong Essays
            </h3>
            <p className="text-sm text-muted-foreground">
              Personal statements matter. Be authentic, highlight your
              achievements, and explain your goals clearly.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                4
              </span>
              Get Strong Recommendations
            </h3>
            <p className="text-sm text-muted-foreground">
              Ask teachers/professors who know you well. Give them enough time
              and share your achievements.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                5
              </span>
              Apply to Multiple
            </h3>
            <p className="text-sm text-muted-foreground">
              Don't put all eggs in one basket. Apply to several scholarships
              matching your profile.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                6
              </span>
              Follow Up
            </h3>
            <p className="text-sm text-muted-foreground">
              After applying, track your applications and respond promptly to
              any requests for additional information.
            </p>
          </Card>
        </div>
      </section>

      {/* Study Abroad Application Timeline */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-16 dark:from-blue-950">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold">
              🌍 Study Abroad Application Timeline
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Plan your international education journey with this comprehensive
              month-by-month guide. Start early for best results!
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

              {/* Timeline Items */}
              {[
                {
                  month: '18-24 Months Before',
                  title: 'Research & Planning',
                  tasks: [
                    'Research target countries and universities',
                    'Start preparing for GRE/GMAT/IELTS/TOEFL',
                    'Build your profile (internships, projects, publications)',
                    'Connect with alumni for insights',
                  ],
                  icon: '🔍',
                },
                {
                  month: '12-18 Months Before',
                  title: 'Test Preparation',
                  tasks: [
                    'Take GRE/GMAT if required',
                    'Take IELTS/TOEFL/PTE for English proficiency',
                    'Create shortlist of 8-12 universities',
                    'Research scholarship deadlines',
                  ],
                  icon: '📚',
                },
                {
                  month: '9-12 Months Before',
                  title: 'Application Preparation',
                  tasks: [
                    'Request recommendation letters from professors',
                    'Start writing Statement of Purpose (SOP)',
                    'Gather academic transcripts and documents',
                    'Begin scholarship applications (early deadlines)',
                  ],
                  icon: '📝',
                },
                {
                  month: '6-9 Months Before',
                  title: 'Submit Applications',
                  tasks: [
                    'Submit university applications before deadlines',
                    'Apply for scholarships (Chevening, DAAD, etc.)',
                    'Track application status regularly',
                    'Prepare for interviews if required',
                  ],
                  icon: '🚀',
                },
                {
                  month: '3-6 Months Before',
                  title: 'Decisions & Visa',
                  tasks: [
                    'Receive admission decisions',
                    'Accept offer and pay deposit',
                    'Apply for student visa',
                    'Arrange financial documents (bank statements)',
                  ],
                  icon: '✅',
                },
                {
                  month: '1-3 Months Before',
                  title: 'Pre-Departure',
                  tasks: [
                    'Book flights and accommodation',
                    'Attend pre-departure orientations',
                    'Open international bank account if possible',
                    'Pack and prepare for new adventure!',
                  ],
                  icon: '✈️',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-8 flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <Card className="p-4">
                      <div className="mb-2 text-xs font-semibold uppercase text-primary">
                        {item.month}
                      </div>
                      <h3 className="mb-3 font-bold">{item.title}</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.tasks.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="text-primary">•</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              asChild
            >
              <Link href="/countries">🌍 Browse Country Guides</Link>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <Link href="/tools/gpa-converter">📊 GPA Converter</Link>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <Link href="/tools/exam-countdown">⏰ Exam Countdown Timer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about scholarship applications
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="p-6"
            >
              <h3 className="mb-2 font-semibold">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container bg-muted/30 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Need Help with Applications?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Check out our career resources for help with essays,
            recommendations, and interview preparation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <Link href="/resources">
                <BookOpen className="mr-2 h-5 w-5" />
                Career Resources
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="/global-career-guide">
                <Globe className="mr-2 h-5 w-5" />
                Study Abroad Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
