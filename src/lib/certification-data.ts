export interface Certification {
  slug: string;
  name: string;
  provider: string;
  icon: string;
  category: 'cloud' | 'data' | 'programming' | 'it' | 'management' | 'security';
  description: string;
  cost: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  duration: string;
  validity: string;
  salaryBoost: string;
  prerequisites: string[];
  syllabus: string[];
  freeAlternatives: string[];
  examFormat: string;
  officialUrl: string;
}

export const certifications: Certification[] = [
  {
    slug: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    icon: '☁️',
    category: 'cloud',
    description:
      'Entry-level AWS certification validating cloud concepts, AWS services, security, architecture, and pricing.',
    cost: '$100 (≈₹8,300)',
    difficulty: 'Beginner',
    duration: '4-6 weeks',
    validity: '3 years',
    salaryBoost: '₹2-4 LPA',
    prerequisites: [
      'No prerequisites',
      '6 months cloud/IT experience recommended',
    ],
    syllabus: [
      'Cloud Concepts (24%)',
      'Security & Compliance (30%)',
      'Technology (34%)',
      'Billing & Pricing (12%)',
    ],
    freeAlternatives: [
      'AWS Skill Builder free courses',
      'freeCodeCamp AWS course',
      'AWS Cloud Quest',
    ],
    examFormat: '65 questions, 90 minutes, 700/1000 to pass',
    officialUrl:
      'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
  {
    slug: 'aws-solutions-architect',
    name: 'AWS Solutions Architect Associate',
    provider: 'Amazon Web Services',
    icon: '🏗️',
    category: 'cloud',
    description:
      'Most popular AWS certification. Validates designing distributed systems on AWS.',
    cost: '$150 (≈₹12,400)',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    validity: '3 years',
    salaryBoost: '₹4-8 LPA',
    prerequisites: [
      '1+ year AWS hands-on experience',
      'Cloud Practitioner recommended',
    ],
    syllabus: [
      'Resilient Architectures (30%)',
      'High-Performing Architectures (28%)',
      'Secure Applications (24%)',
      'Cost-Optimized Architectures (18%)',
    ],
    freeAlternatives: [
      'AWS Workshops',
      'Adrian Cantrill free tier',
      'AWS Well-Architected Labs',
    ],
    examFormat: '65 questions, 130 minutes, 720/1000 to pass',
    officialUrl:
      'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
  },
  {
    slug: 'azure-fundamentals',
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    provider: 'Microsoft',
    icon: '🔵',
    category: 'cloud',
    description:
      'Entry-level Azure certification covering cloud concepts, Azure services, security, privacy, and pricing.',
    cost: '$99 (≈₹8,200)',
    difficulty: 'Beginner',
    duration: '3-4 weeks',
    validity: 'No expiry (recommended renewal)',
    salaryBoost: '₹1.5-3 LPA',
    prerequisites: ['No prerequisites', 'Basic IT knowledge helpful'],
    syllabus: [
      'Cloud Concepts (25-30%)',
      'Azure Architecture (35-40%)',
      'Azure Management (30-35%)',
    ],
    freeAlternatives: [
      'Microsoft Learn free modules',
      'Azure free account + labs',
      'John Savill YouTube channel',
    ],
    examFormat: '40-60 questions, 85 minutes, 700/1000 to pass',
    officialUrl:
      'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
  },
  {
    slug: 'google-cloud-digital-leader',
    name: 'Google Cloud Digital Leader',
    provider: 'Google',
    icon: '🟢',
    category: 'cloud',
    description:
      'Entry-level GCP certification for understanding Google Cloud products and how they solve business problems.',
    cost: '$99 (≈₹8,200)',
    difficulty: 'Beginner',
    duration: '3-4 weeks',
    validity: '3 years',
    salaryBoost: '₹1.5-3 LPA',
    prerequisites: ['No prerequisites'],
    syllabus: [
      'Digital Transformation with Google Cloud (17%)',
      'Innovating with Data/ML (23%)',
      'Infrastructure & Security (30%)',
      'Scaling with Cloud Operations (30%)',
    ],
    freeAlternatives: [
      'Google Cloud Skills Boost free courses',
      'Coursera Google Cloud specialization (audit)',
    ],
    examFormat: '50-60 questions, 90 minutes, 70% to pass',
    officialUrl: 'https://cloud.google.com/certification/cloud-digital-leader',
  },
  {
    slug: 'google-data-analytics',
    name: 'Google Data Analytics Certificate',
    provider: 'Google',
    icon: '📊',
    category: 'data',
    description:
      'Professional certificate by Google covering data cleaning, analysis, visualization, SQL, R, and Tableau.',
    cost: '₹1,500/month on Coursera (6 months)',
    difficulty: 'Beginner',
    duration: '6 months (10 hrs/week)',
    validity: 'No expiry',
    salaryBoost: '₹2-4 LPA',
    prerequisites: ['No prerequisites', 'No prior experience needed'],
    syllabus: [
      'Data Foundations',
      'Ask Questions to Make Data-Driven Decisions',
      'Prepare & Process Data',
      'Analyze Data',
      'Share Data (Tableau)',
      'Data Analysis with R',
      'Capstone Project',
    ],
    freeAlternatives: [
      'Google Analytics Academy (free)',
      'Khan Academy statistics',
      'freeCodeCamp Data Analysis with Python',
    ],
    examFormat: 'Course-based assessments + capstone project',
    officialUrl: 'https://grow.google/certificates/data-analytics/',
  },
  {
    slug: 'meta-frontend-developer',
    name: 'Meta Front-End Developer Certificate',
    provider: 'Meta',
    icon: '⚛️',
    category: 'programming',
    description:
      'Professional certificate by Meta covering HTML, CSS, JavaScript, React, and UX/UI fundamentals.',
    cost: '₹1,500/month on Coursera (7 months)',
    difficulty: 'Beginner',
    duration: '7 months (6 hrs/week)',
    validity: 'No expiry',
    salaryBoost: '₹2-5 LPA',
    prerequisites: ['No programming experience needed'],
    syllabus: [
      'Intro to Front-End Development',
      'Programming with JavaScript',
      'Version Control (Git)',
      'HTML & CSS in Depth',
      'React Basics',
      'Advanced React',
      'Principles of UX/UI Design',
      'Front-End Capstone Project',
      'Coding Interview Preparation',
    ],
    freeAlternatives: [
      'freeCodeCamp Frontend curriculum',
      'The Odin Project',
      'MDN Web Docs',
    ],
    examFormat: 'Course-based assessments + capstone',
    officialUrl:
      'https://www.coursera.org/professional-certificates/meta-front-end-developer',
  },
  {
    slug: 'oracle-java-se',
    name: 'Oracle Certified Professional: Java SE',
    provider: 'Oracle',
    icon: '☕',
    category: 'programming',
    description:
      'Industry-recognized Java certification validating core Java skills including OOP, generics, functional programming.',
    cost: '$245 (≈₹20,000)',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    validity: 'No expiry',
    salaryBoost: '₹2-4 LPA',
    prerequisites: ['Java SE Fundamentals certification (recommended)'],
    syllabus: [
      'Handling Date/Time/Text/Numeric Values',
      'Controlling Program Flow',
      'Java OOP',
      'Exception Handling',
      'Working with Arrays',
      'Java Streams',
      'Lambda Expressions',
      'Modules',
      'Concurrency',
    ],
    freeAlternatives: [
      'Oracle Java tutorials (free)',
      'MOOC.fi Java programming',
      'Codecademy Java (free tier)',
    ],
    examFormat: '50 questions, 90 minutes, 68% to pass',
    officialUrl: 'https://education.oracle.com/java-se-programmer',
  },
  {
    slug: 'comptia-a-plus',
    name: 'CompTIA A+',
    provider: 'CompTIA',
    icon: '🖥️',
    category: 'it',
    description:
      'Industry-standard certification for IT support roles. Covers hardware, networking, OS troubleshooting, and security.',
    cost: '$370 (≈₹30,600) for 2 exams',
    difficulty: 'Beginner',
    duration: '2-3 months',
    validity: '3 years',
    salaryBoost: '₹1.5-3 LPA',
    prerequisites: [
      'No prerequisites',
      '9-12 months hands-on experience recommended',
    ],
    syllabus: [
      'Core 1: Mobile Devices, Networking, Hardware, Virtualization/Cloud, Troubleshooting',
      'Core 2: OS, Security, Software, Operational Procedures',
    ],
    freeAlternatives: [
      'Professor Messer videos (free)',
      'CompTIA free resources',
      'freeCodeCamp IT course',
    ],
    examFormat:
      '2 exams: 90 questions each, 90 minutes, 675/900 and 700/900 to pass',
    officialUrl: 'https://www.comptia.org/certifications/a',
  },
  {
    slug: 'comptia-security-plus',
    name: 'CompTIA Security+',
    provider: 'CompTIA',
    icon: '🔒',
    category: 'security',
    description:
      'Globally recognized cybersecurity certification covering threats, vulnerabilities, attacks, and security architecture.',
    cost: '$404 (≈₹33,400)',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    validity: '3 years',
    salaryBoost: '₹3-6 LPA',
    prerequisites: ['CompTIA Network+ recommended', '2+ years IT experience'],
    syllabus: [
      'Threats/Attacks/Vulnerabilities (24%)',
      'Architecture/Design (21%)',
      'Implementation (25%)',
      'Operations/Incident Response (16%)',
      'Governance/Risk/Compliance (14%)',
    ],
    freeAlternatives: [
      'Cybrary free tier',
      'Professor Messer Security+ (free)',
      'NIST Cybersecurity Framework docs',
    ],
    examFormat: '90 questions, 90 minutes, 750/900 to pass',
    officialUrl: 'https://www.comptia.org/certifications/security',
  },
  {
    slug: 'pmp',
    name: 'PMP (Project Management Professional)',
    provider: 'PMI',
    icon: '📋',
    category: 'management',
    description:
      'Gold standard project management certification recognized worldwide. Required for senior PM/PMO roles.',
    cost: '$405 members / $555 non-members (≈₹33K-46K)',
    difficulty: 'Advanced',
    duration: '3-6 months',
    validity: '3 years (60 PDUs to renew)',
    salaryBoost: '₹4-8 LPA',
    prerequisites: [
      '35 hours PM education',
      "3 years (Bachelor's) or 5 years (diploma) PM experience",
    ],
    syllabus: [
      'People (42%)',
      'Process (50%)',
      'Business Environment (8%)',
      'Agile + Predictive approaches',
    ],
    freeAlternatives: [
      'PMI free courses',
      'Google Project Management Certificate as foundational prep',
    ],
    examFormat: '180 questions, 230 minutes, pass/fail (no fixed score)',
    officialUrl: 'https://www.pmi.org/certifications/project-management-pmp',
  },
  {
    slug: 'scrum-master',
    name: 'Certified ScrumMaster (CSM)',
    provider: 'Scrum Alliance',
    icon: '🔄',
    category: 'management',
    description:
      'Certification for Scrum Masters and agile team leaders. Validates understanding of Scrum framework.',
    cost: '₹30,000-60,000 (includes training)',
    difficulty: 'Beginner',
    duration: '2-day training + exam',
    validity: '2 years',
    salaryBoost: '₹2-4 LPA',
    prerequisites: ['No prerequisites', 'Must attend certified training'],
    syllabus: [
      'Scrum Framework',
      'Scrum Roles',
      'Scrum Events',
      'Scrum Artifacts',
      'Servant Leadership',
      'Agile Principles',
    ],
    freeAlternatives: [
      'Scrum Guide (free, 13 pages)',
      'Scrum.org free assessments',
      'Agile Manifesto readings',
    ],
    examFormat: '50 questions, 60 minutes, 74% to pass',
    officialUrl:
      'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
  },
  {
    slug: 'terraform-associate',
    name: 'HashiCorp Terraform Associate',
    provider: 'HashiCorp',
    icon: '🔧',
    category: 'cloud',
    description:
      'Validates infrastructure as code skills with Terraform — essential for modern DevOps/Cloud roles.',
    cost: '$70 (≈₹5,800)',
    difficulty: 'Intermediate',
    duration: '4-6 weeks',
    validity: '2 years',
    salaryBoost: '₹2-5 LPA',
    prerequisites: ['Basic terminal/CLI skills', 'Cloud basics (any provider)'],
    syllabus: [
      'IaC Concepts',
      'Terraform Purpose & Purpose',
      'Terraform CLI',
      'Modules',
      'Terraform Workflow',
      'State Management',
      'Read/Generate/Modify Configuration',
      'Terraform Cloud/Enterprise',
    ],
    freeAlternatives: [
      'HashiCorp Learn (free)',
      'freeCodeCamp Terraform course',
      'Terraform documentation',
    ],
    examFormat: '57 questions, 60 minutes, 70% to pass',
    officialUrl: 'https://www.hashicorp.com/certification/terraform-associate',
  },
  {
    slug: 'kubernetes-ckad',
    name: 'CKAD (Certified Kubernetes Application Developer)',
    provider: 'CNCF / Linux Foundation',
    icon: '⚓',
    category: 'cloud',
    description:
      'Hands-on certification proving ability to design, build, and configure cloud-native applications for Kubernetes.',
    cost: '$395 (≈₹32,600)',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    validity: '2 years',
    salaryBoost: '₹3-6 LPA',
    prerequisites: ['Docker basics', 'Kubernetes fundamentals'],
    syllabus: [
      'Application Design & Build (20%)',
      'Application Deployment (20%)',
      'Application Observability (15%)',
      'Application Environment (25%)',
      'Services & Networking (20%)',
    ],
    freeAlternatives: [
      'Kubernetes documentation',
      'Play with Kubernetes (browser-based)',
      'KodeKloud free labs',
    ],
    examFormat: 'Performance-based (hands-on), 2 hours, 66% to pass',
    officialUrl:
      'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
  },
];

export function getCertBySlug(slug: string): Certification | undefined {
  return certifications.find((c) => c.slug === slug);
}

export function getCertSlugs(): string[] {
  return certifications.map((c) => c.slug);
}

export function getCertsByCategory(): Record<string, Certification[]> {
  return certifications.reduce(
    (acc, c) => {
      if (!acc[c.category]) acc[c.category] = [];
      acc[c.category].push(c);
      return acc;
    },
    {} as Record<string, Certification[]>,
  );
}

export const certCategoryLabels: Record<string, string> = {
  cloud: '☁️ Cloud Computing',
  data: '📊 Data & Analytics',
  programming: '💻 Programming',
  it: '🖥️ IT Support',
  management: '📋 Project Management',
  security: '🔒 Cybersecurity',
};
