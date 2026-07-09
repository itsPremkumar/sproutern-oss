export interface Company {
  name: string;
  fullName: string;
  description: string;
  interviewLink: string;
  salaryLink: string | null;
  hubLink?: string; // Optional link to company overview hub page
}

export const companies: Company[] = [
  {
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    description: "India's largest IT services company",
    interviewLink: '/companies/tcs/interview-questions',
    salaryLink: '/companies/tcs/salary',
    hubLink: '/companies/tcs',
  },
  {
    name: 'Infosys',
    fullName: 'Infosys Limited',
    description: 'Global leader in consulting and technology',
    interviewLink: '/companies/infosys/interview-questions',
    salaryLink: null,
  },
  {
    name: 'Wipro',
    fullName: 'Wipro Limited',
    description: 'Leading global IT consulting company',
    interviewLink: '/companies/wipro/interview-questions',
    salaryLink: null,
    hubLink: '/companies/wipro',
  },
  {
    name: 'Cognizant',
    fullName: 'Cognizant Technology Solutions',
    description: 'American multinational IT services and consulting company',
    interviewLink: '/companies/cognizant/interview-questions',
    salaryLink: '/companies/cognizant/salary',
  },
  {
    name: 'Accenture',
    fullName: 'Accenture plc',
    description:
      'Global professional services company - Strategy, Consulting, Technology',
    interviewLink: '/companies/accenture/interview-questions',
    salaryLink: '/companies/accenture/salary',
  },
  {
    name: 'Google',
    fullName: 'Google LLC',
    description: 'Global technology leader in search, cloud, and AI',
    interviewLink: '/companies/google',
    salaryLink: null,
  },
  {
    name: 'Microsoft',
    fullName: 'Microsoft Corporation',
    description: 'Leading software and cloud computing company',
    interviewLink: '/companies/microsoft',
    salaryLink: null,
  },
  {
    name: 'Amazon',
    fullName: 'Amazon.com, Inc.',
    description: 'Global e-commerce and cloud computing giant',
    interviewLink: '/companies/amazon',
    salaryLink: null,
  },
  {
    name: 'Adobe',
    fullName: 'Adobe Inc.',
    description: 'Digital media and creativity software leader',
    interviewLink: '/companies/adobe',
    salaryLink: null,
  },
  {
    name: 'Bank of America',
    fullName: 'Bank of America Corporation',
    description:
      'American multinational investment bank and financial services',
    interviewLink: '/companies/bank-of-america',
    salaryLink: null,
  },
  {
    name: 'Barclays',
    fullName: 'Barclays PLC',
    description: 'British multinational investment bank and financial services',
    interviewLink: '/companies/barclays',
    salaryLink: null,
  },
  {
    name: 'Citi',
    fullName: 'Citigroup Inc.',
    description:
      'American multinational investment bank and financial services',
    interviewLink: '/companies/citi',
    salaryLink: null,
  },
  {
    name: 'Wells Fargo',
    fullName: 'Wells Fargo & Company',
    description: 'American multinational financial services company',
    interviewLink: '/companies/wells-fargo',
    salaryLink: null,
  },
  {
    name: 'Societe Generale',
    fullName: 'Société Générale S.A.',
    description: 'French multinational investment bank and financial services',
    interviewLink: '/companies/societe-generale',
    salaryLink: null,
  },
  {
    name: 'Optum',
    fullName: 'Optum, Inc.',
    description: 'Health services and innovation company',
    interviewLink: '/companies/optum',
    salaryLink: null,
  },
  {
    name: 'NortonLifeLock',
    fullName: 'NortonLifeLock Inc.',
    description: 'Global leader in consumer cyber safety',
    interviewLink: '/companies/nortonlifelock',
    salaryLink: null,
  },
  {
    name: 'Trimble',
    fullName: 'Trimble Inc.',
    description: 'Technology company providing positioning solutions',
    interviewLink: '/companies/trimble',
    salaryLink: null,
  },
];
