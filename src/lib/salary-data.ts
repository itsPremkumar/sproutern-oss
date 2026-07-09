export interface SalaryRole {
  slug: string;
  title: string;
  icon: string;
  category: 'engineering' | 'data' | 'design' | 'management' | 'qa' | 'cloud';
  description: string;
  levels: { level: string; minCTC: number; maxCTC: number; avgCTC: number }[];
  topCompanies: {
    name: string;
    fresher: number;
    mid: number;
    senior: number;
  }[];
  cities: { city: string; avgCTC: number }[];
  skills: string[];
  growth: string;
}

export const salaryRoles: SalaryRole[] = [
  {
    slug: 'software-engineer',
    title: 'Software Engineer',
    icon: '💻',
    category: 'engineering',
    description:
      'Software Engineers design, develop, test, and maintain software applications. One of the highest-paying roles in India.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 3.5, maxCTC: 45, avgCTC: 8 },
      { level: 'Mid (2-5 yrs)', minCTC: 8, maxCTC: 60, avgCTC: 18 },
      { level: 'Senior (5-10 yrs)', minCTC: 18, maxCTC: 90, avgCTC: 35 },
      { level: 'Lead/Staff (10+ yrs)', minCTC: 35, maxCTC: 150, avgCTC: 55 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 35, mid: 55, senior: 90 },
      { name: 'Microsoft', fresher: 28, mid: 45, senior: 75 },
      { name: 'Amazon', fresher: 26, mid: 42, senior: 70 },
      { name: 'TCS', fresher: 3.5, mid: 8, senior: 16 },
      { name: 'Infosys', fresher: 3.6, mid: 9, senior: 18 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 20 },
      { city: 'Hyderabad', avgCTC: 16 },
      { city: 'Pune', avgCTC: 14 },
      { city: 'Mumbai', avgCTC: 18 },
      { city: 'Delhi NCR', avgCTC: 17 },
      { city: 'Chennai', avgCTC: 14 },
    ],
    skills: [
      'DSA',
      'System Design',
      'Java/Python/JS',
      'Git',
      'SQL',
      'REST APIs',
      'Cloud (AWS/GCP)',
      'CI/CD',
    ],
    growth:
      'SDE 1 → SDE 2 → Senior SDE → Staff → Principal → Distinguished Engineer. Typical: 2-3 yrs per level.',
  },
  {
    slug: 'data-scientist',
    title: 'Data Scientist',
    icon: '📊',
    category: 'data',
    description:
      'Data Scientists analyze complex datasets to extract insights and build predictive models using ML/AI.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 4, maxCTC: 30, avgCTC: 9 },
      { level: 'Mid (2-5 yrs)', minCTC: 10, maxCTC: 50, avgCTC: 20 },
      { level: 'Senior (5-10 yrs)', minCTC: 25, maxCTC: 80, avgCTC: 40 },
      { level: 'Lead (10+ yrs)', minCTC: 40, maxCTC: 120, avgCTC: 60 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 30, mid: 50, senior: 85 },
      { name: 'Amazon', fresher: 22, mid: 40, senior: 65 },
      { name: 'Flipkart', fresher: 20, mid: 35, senior: 55 },
      { name: 'TCS', fresher: 4, mid: 10, senior: 20 },
      { name: 'Mu Sigma', fresher: 5, mid: 12, senior: 22 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 22 },
      { city: 'Hyderabad', avgCTC: 18 },
      { city: 'Mumbai', avgCTC: 20 },
      { city: 'Pune', avgCTC: 16 },
      { city: 'Delhi NCR', avgCTC: 18 },
    ],
    skills: [
      'Python',
      'ML/DL',
      'Statistics',
      'SQL',
      'TensorFlow/PyTorch',
      'NLP',
      'Data Visualization',
      'Big Data',
    ],
    growth:
      'Jr Data Scientist → Data Scientist → Sr DS → Lead DS → Head of Data Science → Chief Data Officer.',
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    icon: '📈',
    category: 'data',
    description:
      'Data Analysts collect, process, and interpret data to help businesses make data-driven decisions.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 3, maxCTC: 15, avgCTC: 5.5 },
      { level: 'Mid (2-5 yrs)', minCTC: 6, maxCTC: 25, avgCTC: 12 },
      { level: 'Senior (5-10 yrs)', minCTC: 15, maxCTC: 40, avgCTC: 22 },
      { level: 'Lead (10+ yrs)', minCTC: 25, maxCTC: 60, avgCTC: 35 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 15, mid: 28, senior: 45 },
      { name: 'Amazon', fresher: 12, mid: 22, senior: 38 },
      { name: 'Deloitte', fresher: 6, mid: 14, senior: 28 },
      { name: 'TCS', fresher: 3.5, mid: 7, senior: 14 },
      { name: 'Accenture', fresher: 4.5, mid: 10, senior: 20 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 13 },
      { city: 'Mumbai', avgCTC: 12 },
      { city: 'Delhi NCR', avgCTC: 11 },
      { city: 'Hyderabad', avgCTC: 10 },
      { city: 'Pune', avgCTC: 10 },
    ],
    skills: [
      'SQL',
      'Excel',
      'Python/R',
      'Tableau/Power BI',
      'Statistics',
      'Data Cleaning',
      'A/B Testing',
    ],
    growth:
      'Analyst → Sr Analyst → Lead Analyst → Analytics Manager → Director of Analytics.',
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    icon: '🔧',
    category: 'cloud',
    description:
      'DevOps Engineers bridge development and operations through automation, CI/CD, and infrastructure management.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 4, maxCTC: 20, avgCTC: 7 },
      { level: 'Mid (2-5 yrs)', minCTC: 10, maxCTC: 40, avgCTC: 18 },
      { level: 'Senior (5-10 yrs)', minCTC: 22, maxCTC: 65, avgCTC: 35 },
      { level: 'Lead (10+ yrs)', minCTC: 35, maxCTC: 100, avgCTC: 50 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 20, mid: 42, senior: 70 },
      { name: 'Amazon', fresher: 18, mid: 38, senior: 60 },
      { name: 'Microsoft', fresher: 18, mid: 35, senior: 55 },
      { name: 'Infosys', fresher: 4, mid: 10, senior: 20 },
      { name: 'HCLTech', fresher: 4.5, mid: 11, senior: 22 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 20 },
      { city: 'Hyderabad', avgCTC: 16 },
      { city: 'Pune', avgCTC: 15 },
      { city: 'Mumbai', avgCTC: 17 },
      { city: 'Delhi NCR', avgCTC: 16 },
    ],
    skills: [
      'AWS/Azure/GCP',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Terraform',
      'Linux',
      'Python/Bash',
      'Monitoring (Prometheus/Grafana)',
    ],
    growth:
      'Jr DevOps → DevOps Engineer → Sr DevOps → DevOps Lead → Platform Architect → VP Engineering.',
  },
  {
    slug: 'product-manager',
    title: 'Product Manager',
    icon: '🎯',
    category: 'management',
    description:
      'Product Managers define product vision, strategy, and roadmaps. They bridge business, tech, and design.',
    levels: [
      { level: 'Associate PM (0-2 yrs)', minCTC: 8, maxCTC: 35, avgCTC: 15 },
      { level: 'PM (2-5 yrs)', minCTC: 18, maxCTC: 55, avgCTC: 28 },
      { level: 'Senior PM (5-10 yrs)', minCTC: 30, maxCTC: 90, avgCTC: 45 },
      { level: 'Director+ (10+ yrs)', minCTC: 50, maxCTC: 150, avgCTC: 70 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 35, mid: 55, senior: 90 },
      { name: 'Microsoft', fresher: 28, mid: 45, senior: 70 },
      { name: 'Flipkart', fresher: 22, mid: 38, senior: 60 },
      { name: 'Swiggy', fresher: 18, mid: 32, senior: 50 },
      { name: 'Razorpay', fresher: 20, mid: 35, senior: 55 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 30 },
      { city: 'Mumbai', avgCTC: 25 },
      { city: 'Delhi NCR', avgCTC: 24 },
      { city: 'Hyderabad', avgCTC: 22 },
      { city: 'Pune', avgCTC: 20 },
    ],
    skills: [
      'Product Strategy',
      'User Research',
      'Data Analysis',
      'SQL',
      'A/B Testing',
      'Wireframing',
      'Agile/Scrum',
      'Stakeholder Management',
    ],
    growth:
      'APM → PM → Sr PM → Group PM → Director of Product → VP Product → CPO.',
  },
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    icon: '🎨',
    category: 'design',
    description:
      'UI/UX Designers create user-centered digital experiences through research, wireframing, and visual design.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 3, maxCTC: 18, avgCTC: 6 },
      { level: 'Mid (2-5 yrs)', minCTC: 8, maxCTC: 35, avgCTC: 15 },
      { level: 'Senior (5-10 yrs)', minCTC: 18, maxCTC: 55, avgCTC: 30 },
      { level: 'Lead (10+ yrs)', minCTC: 30, maxCTC: 80, avgCTC: 45 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 18, mid: 35, senior: 55 },
      { name: 'Microsoft', fresher: 15, mid: 30, senior: 50 },
      { name: 'Flipkart', fresher: 12, mid: 25, senior: 40 },
      { name: 'Swiggy', fresher: 10, mid: 20, senior: 35 },
      { name: 'CRED', fresher: 12, mid: 25, senior: 42 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 16 },
      { city: 'Mumbai', avgCTC: 14 },
      { city: 'Delhi NCR', avgCTC: 13 },
      { city: 'Pune', avgCTC: 11 },
      { city: 'Hyderabad', avgCTC: 11 },
    ],
    skills: [
      'Figma',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Usability Testing',
      'HTML/CSS basics',
      'Motion Design',
    ],
    growth:
      'Jr Designer → Designer → Sr Designer → Lead Designer → Design Manager → Head of Design → CDO.',
  },
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    icon: '🌐',
    category: 'engineering',
    description:
      'Frontend Developers build user interfaces using HTML, CSS, and JavaScript frameworks like React and Angular.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 3, maxCTC: 25, avgCTC: 6.5 },
      { level: 'Mid (2-5 yrs)', minCTC: 8, maxCTC: 45, avgCTC: 16 },
      { level: 'Senior (5-10 yrs)', minCTC: 18, maxCTC: 70, avgCTC: 30 },
      { level: 'Lead (10+ yrs)', minCTC: 30, maxCTC: 100, avgCTC: 48 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 25, mid: 45, senior: 70 },
      { name: 'Meta', fresher: 22, mid: 40, senior: 65 },
      { name: 'Flipkart', fresher: 18, mid: 30, senior: 50 },
      { name: 'TCS', fresher: 3.5, mid: 8, senior: 15 },
      { name: 'Infosys', fresher: 3.6, mid: 9, senior: 16 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 18 },
      { city: 'Mumbai', avgCTC: 15 },
      { city: 'Delhi NCR', avgCTC: 14 },
      { city: 'Hyderabad', avgCTC: 14 },
      { city: 'Pune', avgCTC: 13 },
    ],
    skills: [
      'React/Next.js',
      'TypeScript',
      'HTML/CSS',
      'Tailwind',
      'Responsive Design',
      'Performance Optimization',
      'Testing',
      'Accessibility',
    ],
    growth:
      'Jr FE Dev → FE Dev → Sr FE Dev → FE Architect → Engineering Manager.',
  },
  {
    slug: 'backend-developer',
    title: 'Backend Developer',
    icon: '⚙️',
    category: 'engineering',
    description:
      'Backend Developers build server-side logic, APIs, databases, and infrastructure that power applications.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 3.5, maxCTC: 30, avgCTC: 7.5 },
      { level: 'Mid (2-5 yrs)', minCTC: 9, maxCTC: 50, avgCTC: 18 },
      { level: 'Senior (5-10 yrs)', minCTC: 20, maxCTC: 80, avgCTC: 35 },
      { level: 'Lead (10+ yrs)', minCTC: 35, maxCTC: 120, avgCTC: 55 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 30, mid: 50, senior: 80 },
      { name: 'Amazon', fresher: 25, mid: 42, senior: 68 },
      { name: 'Flipkart', fresher: 20, mid: 35, senior: 55 },
      { name: 'TCS', fresher: 3.5, mid: 8, senior: 16 },
      { name: 'Wipro', fresher: 3.5, mid: 8, senior: 15 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 19 },
      { city: 'Hyderabad', avgCTC: 16 },
      { city: 'Mumbai', avgCTC: 17 },
      { city: 'Pune', avgCTC: 14 },
      { city: 'Delhi NCR', avgCTC: 16 },
    ],
    skills: [
      'Java/Python/Go/Node.js',
      'SQL/NoSQL',
      'REST/GraphQL',
      'Microservices',
      'Docker',
      'Message Queues',
      'System Design',
      'Caching',
    ],
    growth:
      'Jr Backend → Backend Dev → Sr Backend → Staff Engineer → Principal Engineer → Distinguished.',
  },
  {
    slug: 'cloud-architect',
    title: 'Cloud Architect',
    icon: '☁️',
    category: 'cloud',
    description:
      'Cloud Architects design and oversee cloud computing strategy including adoption plans, management, and monitoring.',
    levels: [
      { level: 'Jr Cloud (0-2 yrs)', minCTC: 5, maxCTC: 22, avgCTC: 10 },
      { level: 'Cloud Engineer (2-5 yrs)', minCTC: 12, maxCTC: 45, avgCTC: 22 },
      {
        level: 'Cloud Architect (5-10 yrs)',
        minCTC: 25,
        maxCTC: 80,
        avgCTC: 42,
      },
      { level: 'Principal (10+ yrs)', minCTC: 45, maxCTC: 130, avgCTC: 65 },
    ],
    topCompanies: [
      { name: 'AWS (Amazon)', fresher: 18, mid: 40, senior: 70 },
      { name: 'Microsoft Azure', fresher: 16, mid: 38, senior: 65 },
      { name: 'Google Cloud', fresher: 18, mid: 42, senior: 72 },
      { name: 'Infosys', fresher: 5, mid: 14, senior: 28 },
      { name: 'Wipro', fresher: 5, mid: 12, senior: 25 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 24 },
      { city: 'Hyderabad', avgCTC: 20 },
      { city: 'Mumbai', avgCTC: 22 },
      { city: 'Pune', avgCTC: 18 },
      { city: 'Delhi NCR', avgCTC: 20 },
    ],
    skills: [
      'AWS/Azure/GCP',
      'Terraform/Pulumi',
      'Kubernetes',
      'Networking',
      'Security',
      'Cost Optimization',
      'Multi-cloud',
      'Architecture Patterns',
    ],
    growth:
      'Cloud Jr → Cloud Engineer → Sr Cloud → Cloud Architect → Principal Architect → CTO.',
  },
  {
    slug: 'qa-engineer',
    title: 'QA/Test Engineer',
    icon: '🧪',
    category: 'qa',
    description:
      'QA Engineers ensure software quality through manual and automated testing, catching bugs before users do.',
    levels: [
      { level: 'Fresher (0-1 yr)', minCTC: 3, maxCTC: 12, avgCTC: 5 },
      { level: 'Mid (2-5 yrs)', minCTC: 6, maxCTC: 25, avgCTC: 12 },
      { level: 'Senior (5-10 yrs)', minCTC: 14, maxCTC: 45, avgCTC: 24 },
      { level: 'Lead (10+ yrs)', minCTC: 25, maxCTC: 65, avgCTC: 38 },
    ],
    topCompanies: [
      { name: 'Google', fresher: 12, mid: 28, senior: 50 },
      { name: 'Microsoft', fresher: 12, mid: 25, senior: 45 },
      { name: 'Amazon', fresher: 10, mid: 22, senior: 40 },
      { name: 'TCS', fresher: 3, mid: 6, senior: 12 },
      { name: 'Infosys', fresher: 3.5, mid: 7, senior: 14 },
    ],
    cities: [
      { city: 'Bangalore', avgCTC: 14 },
      { city: 'Hyderabad', avgCTC: 11 },
      { city: 'Pune', avgCTC: 11 },
      { city: 'Mumbai', avgCTC: 13 },
      { city: 'Delhi NCR', avgCTC: 12 },
    ],
    skills: [
      'Selenium',
      'Cypress',
      'API Testing',
      'Performance Testing',
      'CI/CD',
      'JIRA',
      'Python/Java',
      'SQL',
    ],
    growth:
      'Jr QA → QA Engineer → Sr QA → QA Lead → QA Manager → Director of Quality.',
  },
];

export function getSalaryRoleBySlug(slug: string): SalaryRole | undefined {
  return salaryRoles.find((r) => r.slug === slug);
}

export function getSalaryRoleSlugs(): string[] {
  return salaryRoles.map((r) => r.slug);
}

export function getSalaryRolesByCategory(): Record<string, SalaryRole[]> {
  return salaryRoles.reduce(
    (acc, r) => {
      if (!acc[r.category]) acc[r.category] = [];
      acc[r.category].push(r);
      return acc;
    },
    {} as Record<string, SalaryRole[]>,
  );
}

export const salaryCategoryLabels: Record<string, string> = {
  engineering: '💻 Software Engineering',
  data: '📊 Data & Analytics',
  design: '🎨 Design',
  management: '🎯 Product Management',
  qa: '🧪 Quality Assurance',
  cloud: '☁️ Cloud & DevOps',
};
