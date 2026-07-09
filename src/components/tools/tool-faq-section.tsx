import Script from 'next/script';
import { FC, ReactNode } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ToolFAQSectionProps {
  /** Tool name for context */
  toolName: string;
  /** List of FAQs */
  faqs: FAQ[];
  /** Optional custom title */
  title?: string;
  /** Tool URL for schema */
  toolUrl: string;
}

/**
 * ToolFAQSection Component
 * Adds FAQ section with proper schema markup to tool pages
 * Improves SEO and featured snippet eligibility
 */
export function ToolFAQSection({
  toolName,
  faqs,
  title,
  toolUrl,
}: ToolFAQSectionProps) {
  // Generate FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${toolUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id={`faq-schema-${toolName.toLowerCase().replace(/\s+/g, '-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="tool-faq my-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <HelpCircle className="h-6 w-6 text-primary" />
          {title || `Frequently Asked Questions about ${toolName}`}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="faq-item group rounded-lg border bg-card"
              open={index === 0} // First FAQ open by default
            >
              <summary className="faq-question flex cursor-pointer items-center justify-between p-4 font-semibold hover:bg-muted/50">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="faq-answer border-t p-4 text-muted-foreground">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

// Pre-defined FAQ sets for common tools
export const cgpaCalculatorFAQs: FAQ[] = [
  {
    question: 'What is CGPA and how is it different from percentage?',
    answer:
      'CGPA (Cumulative Grade Point Average) is a grading system that measures academic performance on a scale (usually 10-point or 4-point). Unlike percentage which is out of 100, CGPA provides a standardized way to compare grades across different subjects and semesters. Each university may have different CGPA to percentage conversion formulas.',
  },
  {
    question: 'How do I convert CGPA to percentage for Anna University?',
    answer:
      'For Anna University, the formula is: Percentage = (CGPA - 0.75) × 10. For example, if your CGPA is 8.5, your percentage would be (8.5 - 0.75) × 10 = 77.5%. Our calculator automatically applies the correct formula based on your university selection.',
  },
  {
    question: 'Is CGPA to percentage conversion the same for all universities?',
    answer:
      'No, different universities use different conversion formulas. VTU uses Percentage = CGPA × 9.5, while Mumbai University uses CGPA × 7.25 + 11. Our CGPA calculator supports 20+ Indian universities with their specific formulas.',
  },
  {
    question: 'What CGPA is considered good for placements?',
    answer:
      'For campus placements in India, a CGPA of 7.0 or above (70%+) is generally considered good. Top product companies like Google, Amazon, and Microsoft typically require 8.0+ CGPA. Service companies like TCS, Infosys, and Wipro usually have a cutoff of 6.0-6.5 CGPA.',
  },
  {
    question: 'Can I use this calculator for international universities?',
    answer:
      'Yes, our calculator supports both Indian and international grading systems. For US universities (4.0 scale), select the GPA option. The converter handles 10-point, 4-point, and percentage-based systems.',
  },
];

export const salaryCalculatorFAQs: FAQ[] = [
  {
    question: 'How is In-Hand Salary calculated from CTC?',
    answer:
      'In-Hand Salary = CTC - (PF + Professional Tax + Income Tax + Other Deductions). Typically, in-hand salary is about 65-80% of CTC for freshers in India. Our calculator considers all standard deductions including EPF (12% of basic), professional tax (varies by state), and estimated income tax.',
  },
  {
    question: 'What is the difference between CTC and Take-Home salary?',
    answer:
      'CTC (Cost to Company) includes all expenses by the employer - base salary, allowances, bonuses, PF contribution, insurance, etc. Take-Home or In-Hand salary is what you actually receive after all deductions. For freshers, take-home is usually 60-75% of CTC.',
  },
  {
    question: 'What is a good salary for freshers in India (2026)?',
    answer:
      'For freshers in India (2026), a good salary depends on your field: IT/Software - ₹4-8 LPA (service companies), ₹10-25 LPA (product companies). Core engineering - ₹3-6 LPA. MBA - ₹8-15 LPA. Top performers from IITs/IIMs can get ₹20-50+ LPA at top companies.',
  },
  {
    question: 'How much PF is deducted from salary?',
    answer:
      'Provident Fund (PF) deduction is 12% of your basic salary, matched by an equal employer contribution. If your basic salary is ₹20,000, PF deduction is ₹2,400/month. This goes into your EPF account for retirement savings.',
  },
  {
    question: 'Is salary calculator accurate for all cities in India?',
    answer:
      'Yes, our calculator accounts for city-specific factors like professional tax rates which vary by state (Maharashtra: ₹200/month, Karnataka: ₹200/month, Tamil Nadu: ₹0 for most). HRA calculations also adjust based on metro vs non-metro cities.',
  },
];

export const typingTestFAQs: FAQ[] = [
  {
    question: 'What is a good typing speed for jobs?',
    answer:
      'For most office jobs, 40-50 WPM (words per minute) is acceptable. Data entry jobs require 60-80 WPM. Professional typists and transcriptionists aim for 80-100+ WPM. For IT/software roles, 40-50 WPM with accuracy above 95% is generally sufficient.',
  },
  {
    question: 'How can I improve my typing speed quickly?',
    answer:
      'To improve typing speed: 1) Practice daily for 15-30 minutes 2) Focus on accuracy first, speed will follow 3) Learn proper finger placement (home row keys) 4) Use all 10 fingers 5) Take our typing test regularly to track progress. Most people see 10-20 WPM improvement within 2-3 weeks of consistent practice.',
  },
  {
    question: 'What WPM is required for government typing exams?',
    answer:
      'Government typing exams in India typically require: SSC CGL - 35 WPM (English), 30 WPM (Hindi). SSC CHSL - 35 WPM (English). Court Stenographer - 80-100 WPM shorthand. Speed is calculated on net words (total words minus errors × penalty).',
  },
  {
    question: 'Is 30 WPM a good typing speed for freshers?',
    answer:
      '30 WPM is below average for most office jobs but acceptable for entry-level positions. For IT and corporate roles, aim for at least 40 WPM. With 2-3 weeks of practice, most people can increase from 30 to 45-50 WPM.',
  },
  {
    question: 'How is typing accuracy calculated?',
    answer:
      'Typing accuracy = (Correct Characters / Total Characters Typed) × 100. A 95%+ accuracy is considered good. In our test, we highlight errors in real-time and calculate both gross WPM (total words) and net WPM (after error penalty).',
  },
];

export const resumeCheckerFAQs: FAQ[] = [
  {
    question: 'How does the ATS resume checker work?',
    answer:
      'Our ATS (Applicant Tracking System) checker analyzes your resume for key factors that automated systems look for: keyword optimization, proper formatting, section completeness, and readability. We scan for 50+ parameters and provide a score out of 100 with specific improvement suggestions.',
  },
  {
    question: 'What resume score is good for getting interviews?',
    answer:
      'A resume score of 70+ is considered good for most positions. Scores above 85 indicate an excellent resume that should pass most ATS systems. If your score is below 60, significant improvements are needed. Our tool provides specific actionable feedback to increase your score.',
  },
  {
    question: 'Why is ATS compatibility important for freshers?',
    answer:
      "Over 75% of large companies use ATS to filter resumes before human review. If your resume isn't ATS-compatible, it may be rejected automatically regardless of your qualifications. Key ATS requirements: simple formatting, standard section headings, relevant keywords, and no graphics/tables.",
  },
  {
    question: 'What file format should I use for ATS resumes?',
    answer:
      'PDF is the safest format for ATS compatibility as it preserves formatting across all systems. DOCX is also widely accepted. Avoid image-based PDFs, complex layouts, or formats like ODT. Our checker supports both PDF and DOCX uploads.',
  },
  {
    question: 'How often should I update my resume?',
    answer:
      'Update your resume every 3-6 months or whenever you gain new skills, complete projects, or change roles. Before applying to any job, tailor your resume to match the job description keywords. Our resume checker can be used unlimited times to test different versions.',
  },
];

export const aptitudeTestFAQs: FAQ[] = [
  {
    question: 'What topics are covered in placement aptitude tests?',
    answer:
      'Placement aptitude tests typically cover: Quantitative Aptitude (arithmetic, algebra, geometry, time/work/speed problems), Logical Reasoning (puzzles, coding-decoding, blood relations, seating arrangements), Verbal Ability (reading comprehension, grammar, vocabulary), and sometimes basic technical questions specific to your field.',
  },
  {
    question: 'How much time should I spend preparing for aptitude tests?',
    answer:
      'For campus placements, start 2-3 months before placement season. Dedicate 1-2 hours daily for aptitude practice. Focus on weak areas identified through mock tests. Our platform offers unlimited practice tests with detailed solutions to help you improve systematically.',
  },
  {
    question: 'Which aptitude test pattern do top companies follow?',
    answer:
      'TCS uses TCS NQT (National Qualifier Test). Infosys uses InfyTQ. Wipro uses NLTH (National Level Talent Hunt). Cognizant uses GenC certification. Each has different patterns, but fundamentals remain similar. Our mock tests cover patterns for all major recruiters.',
  },
  {
    question: 'What is a good score in aptitude tests for placements?',
    answer:
      'Aim for 70%+ in aptitude tests to clear most company cutoffs. Top product companies may require 85%+. Focus on accuracy over speed initially - many tests have negative marking. Practice time management to attempt maximum questions.',
  },
  {
    question: 'Are these aptitude tests similar to actual placement tests?',
    answer:
      'Yes, our aptitude tests are designed based on actual placement test patterns from companies like TCS, Infosys, Wipro, Cognizant, and others. Questions are updated regularly to match current exam patterns. Each test provides detailed solutions and performance analytics.',
  },
];

export const emiCalculatorFAQs: FAQ[] = [
  {
    question: 'How is EMI calculated?',
    answer:
      'EMI (Equated Monthly Installment) is calculated using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P = Principal loan amount, R = Monthly interest rate (annual rate/12/100), N = Loan tenure in months. Our calculator does this automatically with accurate results.',
  },
  {
    question: 'What factors affect my EMI amount?',
    answer:
      'Three main factors affect EMI: 1) Principal Amount - higher loan = higher EMI, 2) Interest Rate - higher rate = higher EMI, 3) Loan Tenure - longer tenure = lower EMI but more total interest paid. Adjusting tenure is the easiest way to manage EMI affordability.',
  },
  {
    question: 'Is it better to choose a longer or shorter loan tenure?',
    answer:
      'Shorter tenure means higher EMI but less total interest paid. Longer tenure means lower EMI but more total interest. For example, a ₹10 lakh loan at 10% for 5 years costs ₹2.75 lakh in interest, while the same loan for 10 years costs ₹5.86 lakh. Choose based on your monthly budget.',
  },
  {
    question: 'What is a good EMI to income ratio?',
    answer:
      "Financial advisors recommend keeping total EMI obligations (all loans combined) below 40-50% of your monthly take-home salary. Banks typically approve loans where EMI doesn't exceed 50% of income. For freshers, aim for 30-35% to maintain financial flexibility.",
  },
  {
    question: 'Can I use this calculator for education loans?',
    answer:
      'Yes, this EMI calculator works for all types of loans including education loans, personal loans, home loans, and car loans. Education loans often have a moratorium period (repayment starts after course completion) which you should factor into your planning.',
  },
];

export const coverLetterFAQs: FAQ[] = [
  {
    question: 'What should a cover letter include?',
    answer:
      'A cover letter should include: 1) Opening paragraph stating the position and how you found it, 2) Body paragraphs highlighting relevant skills and achievements with specific examples, 3) Closing paragraph expressing enthusiasm and call to action. Keep it to one page (300-400 words).',
  },
  {
    question: 'How long should a cover letter be?',
    answer:
      'A cover letter should be 3-4 paragraphs, fitting on one page (300-400 words). Recruiters spend 6-7 seconds scanning, so be concise. Focus on 2-3 key achievements that match the job requirements rather than repeating your entire resume.',
  },
  {
    question: 'Should I customize my cover letter for each job?',
    answer:
      'Yes, always customize your cover letter for each application. Reference the specific company name, job title, and requirements. Generic cover letters are easily spotted and often rejected. Our generator helps create a base template you can quickly customize.',
  },
  {
    question: 'Is a cover letter still necessary in 2026?',
    answer:
      "While not always required, a cover letter can significantly improve your chances. Studies show applications with cover letters get 50% more callbacks. It's especially important for competitive roles, career changes, or when you want to explain gaps in your resume.",
  },
  {
    question: 'What mistakes should I avoid in my cover letter?',
    answer:
      'Common mistakes to avoid: 1) Using "Dear Sir/Madam" (find the hiring manager\'s name), 2) Repeating your resume verbatim, 3) Making it about you instead of how you can help them, 4) Typos and grammatical errors, 5) Being too long or too generic.',
  },
];

export const interviewQuestionsFAQs: FAQ[] = [
  {
    question: 'What are the most common interview questions?',
    answer:
      'The most common interview questions include: "Tell me about yourself", "Why do you want this job?", "What are your strengths and weaknesses?", "Where do you see yourself in 5 years?", "Why should we hire you?", and "Do you have any questions for us?" Our question bank covers 500+ commonly asked questions.',
  },
  {
    question: 'How should I prepare for behavioral interview questions?',
    answer:
      'Use the STAR method: Situation (context), Task (your responsibility), Action (what you did), Result (outcome with metrics if possible). Prepare 5-7 stories from your experience that you can adapt to different behavioral questions like teamwork, leadership, conflict resolution, and problem-solving.',
  },
  {
    question: 'What questions should I ask the interviewer?',
    answer:
      'Good questions to ask: "What does success look like in this role?", "What are the team\'s biggest challenges?", "How would you describe the team culture?", "What\'s the typical career progression?", "What are the next steps in the hiring process?" Avoid asking about salary in the first interview.',
  },
  {
    question: 'How do I answer "What is your expected salary?"',
    answer:
      'Research salary ranges on Glassdoor, LinkedIn, and our salary calculator first. You can say: "Based on my research and experience, I\'m looking for a competitive offer in the range of ₹X-Y LPA. However, I\'m flexible and open to discussing based on the overall compensation package."',
  },
  {
    question: 'How can I practice for interviews effectively?',
    answer:
      'Practice methods: 1) Record yourself answering questions, 2) Do mock interviews with friends or mentors, 3) Use our question bank to practice varied questions, 4) Research the company thoroughly, 5) Prepare questions to ask, 6) Practice in front of a mirror to improve body language.',
  },
];

export const careerRoadmapFAQs: FAQ[] = [
  {
    question: 'What is a career roadmap?',
    answer:
      'A career roadmap is a strategic plan outlining skills, experiences, and milestones needed to achieve your career goals. It includes short-term (6-12 months) and long-term (3-5 years) objectives, required skills, certifications, and actionable steps to progress in your chosen field.',
  },
  {
    question: 'How do I create a career roadmap as a fresher?',
    answer:
      'As a fresher: 1) Define your target role (e.g., Software Developer, Data Analyst), 2) Identify required technical and soft skills, 3) List certifications and projects needed, 4) Set SMART goals with timelines, 5) Identify mentors and resources, 6) Review and adjust every 3-6 months.',
  },
  {
    question: 'Which career paths have the best growth in India (2026)?',
    answer:
      'High-growth career paths in 2026: AI/ML Engineering, Data Science, Cloud Architecture, Cybersecurity, Product Management, Full-Stack Development, DevOps, and Blockchain. These roles offer 15-35 LPA for experienced professionals and have strong demand across industries.',
  },
  {
    question: 'How often should I update my career roadmap?',
    answer:
      'Review your roadmap quarterly (every 3 months) and do a major update annually. The tech industry evolves rapidly, so stay updated on emerging technologies and market demands. Adjust your plan based on new opportunities, skills gained, and changing career priorities.',
  },
  {
    question: 'What skills should every fresher develop in 2026?',
    answer:
      'Essential skills for freshers: Technical - Programming (Python/JavaScript), Git, Cloud basics, SQL, and AI tools. Soft skills - Communication, problem-solving, teamwork, and adaptability. Domain-specific certifications (AWS, Google Cloud, etc.) add significant value to your profile.',
  },
];

export const passwordGeneratorFAQs: FAQ[] = [
  {
    question: 'What makes a password strong?',
    answer:
      'A strong password has: 1) At least 12-16 characters, 2) Mix of uppercase and lowercase letters, 3) Numbers and special characters (!@#$%^&*), 4) No dictionary words or personal info, 5) Unique for each account. Our generator creates passwords meeting all these criteria.',
  },
  {
    question: 'How long should my password be?',
    answer:
      '12 characters is the minimum for good security. 16+ characters is recommended for sensitive accounts like banking, email, and social media. Every additional character makes the password exponentially harder to crack. A 16-character password takes centuries to brute-force.',
  },
  {
    question: 'Should I use a password manager?',
    answer:
      'Yes, password managers are essential. They generate, store, and auto-fill unique strong passwords for each account. Popular options: Bitwarden (free), 1Password, and LastPass. Using the same password everywhere is the #1 security mistake.',
  },
  {
    question: 'How often should I change my passwords?',
    answer:
      "Modern security advice: Only change passwords when there's a breach or suspected compromise. Using unique, strong passwords is more important than frequent changes. Enable two-factor authentication (2FA) for additional security layer.",
  },
  {
    question: 'Is this password generator safe to use?',
    answer:
      'Yes, our password generator runs entirely in your browser. No passwords are sent to any server or stored anywhere. You can even use it offline. The generated passwords are cryptographically random for maximum security.',
  },
];

export const wordCounterFAQs: FAQ[] = [
  {
    question: 'How is word count calculated?',
    answer:
      'Words are counted by splitting text at spaces and line breaks. We also count: characters (with/without spaces), sentences (by periods, question marks, exclamation marks), paragraphs (by double line breaks), and provide reading time estimate.',
  },
  {
    question: 'What word counts are required for different content types?',
    answer:
      'Typical requirements: Twitter post (280 characters), LinkedIn post (1,300 characters), Blog post (1,500-2,500 words for SEO), Resume (300-500 words), Cover letter (250-400 words), Research paper abstract (150-300 words).',
  },
  {
    question: 'How is reading time calculated?',
    answer:
      'Average reading speed is 200-250 words per minute for adults. We use 200 WPM for a comfortable estimate. A 1,000-word article takes about 5 minutes to read. Speaking time (for presentations) is slower, about 130 WPM.',
  },
  {
    question: 'Does this tool work for languages other than English?',
    answer:
      'Yes, our word counter works for all languages written with spaces between words (English, Hindi romanized, Spanish, French, etc.). For languages without spaces (Chinese, Japanese), character count is more relevant.',
  },
  {
    question: 'Can I check word count for my resume or essay?',
    answer:
      'Absolutely! Paste your resume or essay text and get instant word count, character count, and reading time. For resumes, aim for 400-600 words (1 page). For college essays like Common App, the limit is usually 650 words.',
  },
];

export const percentageCalculatorFAQs: FAQ[] = [
  {
    question: 'How do I calculate percentage?',
    answer:
      'Percentage = (Part / Total) × 100. For example, if you scored 75 out of 100, percentage = (75/100) × 100 = 75%. Our calculator handles: percentage of a number, increase/decrease, difference between numbers, and grade calculations.',
  },
  {
    question: 'How to calculate percentage increase or decrease?',
    answer:
      'Percentage change = ((New Value - Old Value) / Old Value) × 100. If price increased from ₹100 to ₹120, change = ((120-100)/100) × 100 = 20% increase. For decrease, the result will be negative.',
  },
  {
    question: 'How to convert CGPA to percentage?',
    answer:
      'Conversion depends on university: For VTU, Percentage = CGPA × 9.5. For Anna University, Percentage = (CGPA - 0.75) × 10. For 4.0 GPA scale (US), Percentage = (GPA / 4) × 100. Use our CGPA calculator for accurate conversion.',
  },
  {
    question: 'What percentage is needed to pass an exam?',
    answer:
      'Passing percentage varies: Most Indian universities require 40% (35% for each subject). CBSE/ICSE require 33%. Competitive exams like GATE have cutoffs around 25-30%. For placements, companies typically require 60%+ aggregate.',
  },
  {
    question: 'How do I calculate percentage marks from grades?',
    answer:
      'Grade to percentage (CBSE 10-point scale): A1 (91-100), A2 (81-90), B1 (71-80), B2 (61-70), C1 (51-60), C2 (41-50), D (33-40). Take the midpoint for estimation. Our calculator can convert grades to approximate percentages.',
  },
];

export const linkedinGeneratorFAQs: FAQ[] = [
  {
    question: 'How do I write a good LinkedIn headline?',
    answer:
      'A LinkedIn headline should include: 1) Your current role or target role, 2) Key skills or specializations, 3) Value proposition. Example: "Software Engineer | React & Node.js | Building Scalable Web Apps" - uses 120 characters maximum for full visibility.',
  },
  {
    question: 'What should I include in my LinkedIn summary?',
    answer:
      "Include: 1) Opening hook (what you do and your passion), 2) Key achievements with metrics, 3) Skills and expertise, 4) What you're looking for, 5) Call to action. Keep it 3-5 short paragraphs, using first person. Our generator helps structure this perfectly.",
  },
  {
    question: 'How long should my LinkedIn About section be?',
    answer:
      'Optimal length is 1,500-2,000 characters (about 300 words). The first 300 characters are most critical as they appear before "see more". Front-load key information and achievements. Include relevant keywords for searchability.',
  },
  {
    question: 'Should freshers have a LinkedIn profile?',
    answer:
      'Absolutely! 87% of recruiters use LinkedIn for hiring. Freshers should highlight: academic achievements, internships, projects, certifications, and skills. A complete profile gets 40x more opportunities than incomplete ones.',
  },
  {
    question: 'How often should I update my LinkedIn profile?',
    answer:
      'Update immediately when: changing jobs, completing certifications, finishing projects, or gaining new skills. Regular activity (posts, comments) increases visibility. Aim for at least one profile update monthly and weekly engagement.',
  },
];

export const mockInterviewFAQs: FAQ[] = [
  {
    question: 'Why are mock interviews important?',
    answer:
      'Mock interviews help you: 1) Practice articulating answers under pressure, 2) Get feedback on communication and body language, 3) Identify knowledge gaps, 4) Build confidence, 5) Reduce anxiety. Candidates who practice mock interviews are 3x more likely to succeed.',
  },
  {
    question: 'How many mock interviews should I do before placements?',
    answer:
      'Aim for 10-15 mock interviews minimum: 5+ technical interviews (DSA, projects, CS fundamentals), 3+ HR interviews (behavioral, situational), and 2-3 full mock placement drives. Quality matters more than quantity—get detailed feedback each time.',
  },
  {
    question: 'What should I focus on during mock interviews?',
    answer:
      'Focus on: 1) Clear communication (thinking aloud), 2) Structured answers (STAR method for HR), 3) Time management, 4) Asking clarifying questions, 5) Handling pressure gracefully, 6) Professional body language. Record yourself to review later.',
  },
  {
    question: 'Can I practice mock interviews alone?',
    answer:
      'Yes! Methods include: 1) Record yourself answering questions, 2) Use our AI mock interview tool, 3) Practice in front of a mirror, 4) Use Pramp or Interviewing.io for peer practice, 5) Explain concepts aloud as if teaching someone.',
  },
  {
    question: 'What common mistakes should I avoid in interviews?',
    answer:
      'Avoid: 1) Not asking clarifying questions, 2) Jumping to code without thinking, 3) Speaking too fast or too quietly, 4) Giving up too early, 5) Arguing with the interviewer, 6) Lying about skills, 7) Not preparing questions to ask, 8) Poor time management.',
  },
];

export default ToolFAQSection;
