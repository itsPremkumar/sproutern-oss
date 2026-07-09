export interface Scholarship {
  name: string;
  slug: string;
  category:
    | 'government-india'
    | 'international'
    | 'stem'
    | 'merit'
    | 'need-based';
  country: string;
  amount: string;
  eligibility: string;
  deadline: string;
  coverage: string[];
  officialUrl: string;
  fullyFunded: boolean;
}

export const scholarships: Scholarship[] = [
  // Government India
  {
    name: 'INSPIRE Scholarship',
    slug: 'inspire',
    category: 'government-india',
    country: 'India',
    amount: '₹80,000/year',
    eligibility: 'Top 1% in 12th boards, pursuing BSc/MSc',
    deadline: 'October every year',
    coverage: ['Tuition', 'Living expenses'],
    officialUrl: 'https://www.online-inspire.gov.in/',
    fullyFunded: false,
  },
  {
    name: 'National Means-cum-Merit Scholarship (NMMS)',
    slug: 'nmms',
    category: 'government-india',
    country: 'India',
    amount: '₹12,000/year',
    eligibility: 'Class 8 students, family income < ₹3.5 LPA',
    deadline: 'November every year',
    coverage: ['Education expenses'],
    officialUrl: 'https://scholarships.gov.in/',
    fullyFunded: false,
  },
  {
    name: 'Central Sector Scheme (CSSS)',
    slug: 'csss',
    category: 'government-india',
    country: 'India',
    amount: '₹10,000-20,000/year',
    eligibility: 'Top 20% in 12th boards, family income < ₹8 LPA',
    deadline: 'December every year',
    coverage: ['Tuition', 'Books'],
    officialUrl: 'https://scholarships.gov.in/',
    fullyFunded: false,
  },
  {
    name: 'AICTE Pragati Scholarship',
    slug: 'aicte-pragati',
    category: 'government-india',
    country: 'India',
    amount: '₹50,000/year',
    eligibility:
      'Female students in AICTE-approved colleges, family income < ₹8 LPA',
    deadline: 'December every year',
    coverage: ['Tuition', 'Books', 'Equipment'],
    officialUrl: 'https://www.aicte-india.org/',
    fullyFunded: false,
  },
  {
    name: 'KVPY Fellowship',
    slug: 'kvpy',
    category: 'government-india',
    country: 'India',
    amount: '₹5,000-7,000/month',
    eligibility: 'Students pursuing basic science (BSc/MSc)',
    deadline: 'August every year',
    coverage: ['Monthly stipend', 'Research grant'],
    officialUrl: 'http://www.kvpy.iisc.ernet.in/',
    fullyFunded: false,
  },
  {
    name: 'Post Matric Scholarship for SC/ST/OBC',
    slug: 'post-matric-sc-st',
    category: 'need-based',
    country: 'India',
    amount: 'Full tuition + maintenance',
    eligibility: 'SC/ST/OBC students, family income criteria',
    deadline: 'State-specific (Oct-Dec)',
    coverage: ['Tuition', 'Maintenance', 'Books'],
    officialUrl: 'https://scholarships.gov.in/',
    fullyFunded: true,
  },

  // International
  {
    name: 'Fulbright Scholarship (USA)',
    slug: 'fulbright',
    category: 'international',
    country: 'USA',
    amount: 'Full funding',
    eligibility: 'Masters/PhD applicants with excellent academics',
    deadline: 'February (for next year)',
    coverage: ['Tuition', 'Living', 'Airfare', 'Insurance', 'Book allowance'],
    officialUrl: 'https://www.usief.org.in/',
    fullyFunded: true,
  },
  {
    name: 'Chevening Scholarship (UK)',
    slug: 'chevening',
    category: 'international',
    country: 'UK',
    amount: 'Full funding',
    eligibility: "2+ years work experience, Master's in UK",
    deadline: 'November every year',
    coverage: ['Tuition', 'Living', 'Airfare', 'Visa', 'Travel grant'],
    officialUrl: 'https://www.chevening.org/',
    fullyFunded: true,
  },
  {
    name: 'DAAD Scholarship (Germany)',
    slug: 'daad',
    category: 'international',
    country: 'Germany',
    amount: '€934-1,300/month',
    eligibility: "Master's/PhD applicants, 2+ years degree",
    deadline: 'July-October (program-specific)',
    coverage: ['Monthly stipend', 'Health insurance', 'Travel allowance'],
    officialUrl: 'https://www.daad.de/',
    fullyFunded: true,
  },
  {
    name: 'Erasmus Mundus (Europe)',
    slug: 'erasmus-mundus',
    category: 'international',
    country: 'Europe (multiple)',
    amount: '€1,400/month + tuition',
    eligibility: "Master's applicants, excellent academics",
    deadline: 'January every year',
    coverage: ['Tuition', 'Monthly stipend', 'Travel', 'Installation costs'],
    officialUrl: 'https://erasmus-plus.ec.europa.eu/',
    fullyFunded: true,
  },
  {
    name: 'Commonwealth Scholarship (UK)',
    slug: 'commonwealth',
    category: 'international',
    country: 'UK',
    amount: 'Full funding',
    eligibility: "Citizens of Commonwealth nations, Master's/PhD",
    deadline: 'December every year',
    coverage: [
      'Tuition',
      'Living',
      'Airfare',
      'Thesis grant',
      'Warm clothing allowance',
    ],
    officialUrl: 'http://cscuk.fcdo.gov.uk/apply/',
    fullyFunded: true,
  },
  {
    name: 'Australia Awards Scholarship',
    slug: 'australia-awards',
    category: 'international',
    country: 'Australia',
    amount: 'Full funding',
    eligibility: "Developing country citizens, Master's/PhD",
    deadline: 'May every year',
    coverage: [
      'Tuition',
      'Living',
      'Airfare',
      'Health insurance',
      'Establishment allowance',
    ],
    officialUrl: 'https://www.dfat.gov.au/people-to-people/australia-awards/',
    fullyFunded: true,
  },
  {
    name: 'Japanese MEXT Scholarship',
    slug: 'mext',
    category: 'international',
    country: 'Japan',
    amount: '¥143,000-145,000/month',
    eligibility: "Bachelor's/Master's/PhD applicants, age < 35",
    deadline: 'April every year',
    coverage: [
      'Tuition',
      'Monthly stipend',
      'Airfare',
      'Japanese language training',
    ],
    officialUrl: 'https://www.studyinjapan.go.jp/',
    fullyFunded: true,
  },
  {
    name: 'Swiss Government Excellence Scholarship',
    slug: 'swiss-excellence',
    category: 'international',
    country: 'Switzerland',
    amount: 'CHF 1,920/month',
    eligibility: 'PhD/Postdoc/Research, excellent academic record',
    deadline: 'August-November (country-specific)',
    coverage: [
      'Monthly stipend',
      'Tuition waiver',
      'Health insurance',
      'Airfare',
    ],
    officialUrl: 'https://www.sbfi.admin.ch/',
    fullyFunded: true,
  },

  // STEM
  {
    name: 'Google Scholarship (Women Techmakers)',
    slug: 'google-women-techmakers',
    category: 'stem',
    country: 'Global',
    amount: '$10,000',
    eligibility: 'Women in CS/EE/related fields, enrolled in university',
    deadline: 'December every year',
    coverage: ['Scholarship award', 'Community membership'],
    officialUrl: 'https://www.womentechmakers.com/',
    fullyFunded: false,
  },
  {
    name: 'Adobe Research Women-in-Technology',
    slug: 'adobe-wit',
    category: 'stem',
    country: 'India',
    amount: '₹1,00,000',
    eligibility: 'Female students in CS/IT/EE, 1st/2nd year',
    deadline: 'September every year',
    coverage: ['Scholarship', 'Mentorship', 'Internship opportunity'],
    officialUrl: 'https://research.adobe.com/',
    fullyFunded: false,
  },
  {
    name: 'Microsoft Engage Scholarship',
    slug: 'microsoft-engage',
    category: 'stem',
    country: 'India',
    amount: 'Mentorship + Project + PPO chance',
    eligibility: 'Pre-final year CS/IT students',
    deadline: 'May every year',
    coverage: ['Mentorship', 'Project experience'],
    officialUrl: 'https://microsoft.com/',
    fullyFunded: false,
  },

  // Merit-based
  {
    name: 'Reliance Foundation Scholarship',
    slug: 'reliance-foundation',
    category: 'merit',
    country: 'India',
    amount: '₹4,00,000 (total)',
    eligibility: 'UG students in engineering/CS, merit-based',
    deadline: 'August every year',
    coverage: ['Tuition', 'Living expenses'],
    officialUrl: 'https://www.reliancefoundation.org/',
    fullyFunded: false,
  },
  {
    name: 'Tata Trusts Scholarship',
    slug: 'tata-trusts',
    category: 'merit',
    country: 'India',
    amount: 'Up to ₹50,000/year',
    eligibility: 'Merit + need-based, any UG/PG program',
    deadline: 'Year-round',
    coverage: ['Tuition', 'Books'],
    officialUrl: 'https://www.tatatrusts.org/',
    fullyFunded: false,
  },
  {
    name: 'OP Jindal Engineering & Management Scholarship',
    slug: 'op-jindal',
    category: 'merit',
    country: 'India',
    amount: 'Up to ₹2,50,000/year',
    eligibility: 'Engineering/Management students, merit-based',
    deadline: 'July every year',
    coverage: ['Tuition', 'Learning materials'],
    officialUrl: 'https://www.opjglobal.com/',
    fullyFunded: false,
  },
];

export function getScholarshipsByCategory(): Record<string, Scholarship[]> {
  return scholarships.reduce(
    (acc, s) => {
      if (!acc[s.category]) acc[s.category] = [];
      acc[s.category].push(s);
      return acc;
    },
    {} as Record<string, Scholarship[]>,
  );
}

export function getScholarshipCategories(): string[] {
  return [...new Set(scholarships.map((s) => s.category))];
}

export const scholarshipCategoryLabels: Record<string, string> = {
  'government-india': '🇮🇳 Government of India Scholarships',
  international: '🌍 International Fully-Funded Scholarships',
  stem: '💻 STEM & Women in Tech Scholarships',
  merit: '🏆 Merit-Based Scholarships',
  'need-based': '🤝 Need-Based Scholarships',
};

export const scholarshipCategorySlugs: Record<string, string> = {
  'government-india': 'government-india',
  international: 'international',
  stem: 'stem',
  merit: 'merit',
  'need-based': 'need-based',
};
