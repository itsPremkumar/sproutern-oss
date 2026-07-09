'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  MessageSquare,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Lightbulb,
  AlertCircle,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Star,
  ArrowRight,
  Brain,
  Building,
  Code,
  Megaphone,
} from 'lucide-react';

const questionBank: Record<
  string,
  Array<{ q: string; a: string; tips?: string[] }>
> = {
  hr: [
    {
      q: 'Tell me about yourself.',
      a: "Focus on your professional journey, key achievements, and why you're interested in this role. Keep it concise (2-3 minutes). Use the Present-Past-Future formula: start with your current role, mention key past experiences, and explain your future goals.",
      tips: [
        'Prepare a 2-minute pitch',
        'Connect your story to the role',
        'Avoid personal details unless relevant',
      ],
    },
    {
      q: 'What are your strengths and weaknesses?',
      a: "Mention 2-3 relevant strengths with specific examples and quantifiable achievements. For weaknesses, choose something you're actively working to improve and share the steps you're taking.",
      tips: [
        'Be honest but strategic',
        'Show self-awareness',
        'Demonstrate growth mindset',
      ],
    },
    {
      q: 'Why do you want to work here?',
      a: "Research the company's mission, values, products, recent news, and culture. Mention specific aspects that align with your career goals and values. Show genuine enthusiasm and explain how you can contribute.",
      tips: [
        'Research the company thoroughly',
        'Mention specific projects or values',
        'Connect to your career goals',
      ],
    },
    {
      q: 'Where do you see yourself in 5 years?',
      a: "Show ambition while staying realistic. Align your goals with potential growth in the company. Demonstrate that you've thought about your career trajectory and how this role fits into your plans.",
      tips: [
        'Be realistic',
        'Show commitment to growth',
        "Align with company's trajectory",
      ],
    },
    {
      q: 'Why should we hire you?',
      a: 'Highlight your unique combination of skills, experiences, and personality traits that make you the ideal candidate. Reference specific job requirements and how you exceed them.',
      tips: [
        'Summarize your key value proposition',
        'Reference job requirements',
        'Be confident, not arrogant',
      ],
    },
    {
      q: 'Why are you leaving your current job?',
      a: "Focus on what you're looking for rather than what you're running from. Emphasize growth opportunities, new challenges, or alignment with career goals. Never badmouth previous employers.",
      tips: [
        'Stay positive',
        'Focus on future opportunities',
        'Never criticize past employers',
      ],
    },
    {
      q: 'What is your expected salary?',
      a: 'Research industry standards and company pay scales. Provide a range based on your research and experience. Be prepared to justify your expectations with market data and your qualifications.',
      tips: [
        'Research market rates',
        'Give a range, not a fixed number',
        'Be prepared to negotiate',
      ],
    },
    {
      q: 'Do you have any questions for us?',
      a: 'Always have 3-5 thoughtful questions prepared. Ask about team dynamics, growth opportunities, company culture, or recent challenges. Avoid asking about salary or benefits in early rounds.',
      tips: [
        "Never say 'No, I'm good'",
        'Ask about team and culture',
        'Show genuine curiosity',
      ],
    },
    {
      q: 'How do you handle stress and pressure?',
      a: "Share specific techniques you use to manage stress. Provide examples of high-pressure situations you've navigated successfully. Demonstrate self-awareness and emotional intelligence.",
      tips: [
        'Give concrete examples',
        'Mention coping strategies',
        'Show resilience',
      ],
    },
    {
      q: 'Describe your ideal work environment.',
      a: 'Research the company culture beforehand. Align your preferences with what the company offers while being genuine about your needs. Show flexibility and adaptability.',
      tips: [
        'Research company culture first',
        'Be honest but flexible',
        'Focus on productivity factors',
      ],
    },
  ],
  technical: [
    {
      q: 'Explain the difference between var, let, and const in JavaScript.',
      a: 'var is function-scoped and hoisted, let and const are block-scoped. const cannot be reassigned but objects/arrays it references can be mutated. let allows reassignment but not redeclaration in the same scope.',
      tips: [
        'Use code examples',
        'Explain hoisting behavior',
        'Mention temporal dead zone',
      ],
    },
    {
      q: 'What is the difference between SQL and NoSQL databases?',
      a: 'SQL databases are relational with structured schemas, ACID compliance, and use SQL for queries (e.g., MySQL, PostgreSQL). NoSQL is non-relational with flexible schemas, eventual consistency, and various data models (document, key-value, graph, columnar).',
      tips: [
        'Give specific examples',
        'Discuss use cases',
        'Mention scalability differences',
      ],
    },
    {
      q: 'Explain OOP concepts with examples.',
      a: 'The four pillars are: Encapsulation (bundling data with methods, e.g., class properties), Inheritance (deriving new classes from existing ones), Polymorphism (same interface, different implementations - method overloading/overriding), Abstraction (hiding complexity, showing only essentials).',
      tips: [
        'Use real-world analogies',
        'Provide code examples',
        'Explain benefits of each',
      ],
    },
    {
      q: 'What is REST API?',
      a: 'Representational State Transfer - an architectural style for designing networked applications. Uses HTTP methods (GET, POST, PUT, DELETE), stateless communication, uniform interface, and resource-based URLs. Returns data typically in JSON format.',
      tips: [
        'Explain HTTP methods',
        'Discuss statelessness',
        'Mention status codes',
      ],
    },
    {
      q: 'Explain the concept of Big O notation.',
      a: 'Big O describes the worst-case time or space complexity of an algorithm as input grows. Common complexities: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2^n) exponential.',
      tips: [
        'Give examples for each complexity',
        'Explain why it matters',
        'Discuss optimization',
      ],
    },
    {
      q: "What are design patterns? Name a few you've used.",
      a: 'Design patterns are reusable solutions to common software design problems. Common patterns: Singleton (single instance), Factory (object creation), Observer (pub-sub communication), Strategy (interchangeable algorithms), MVC (separation of concerns).',
      tips: [
        'Explain when to use each',
        'Give real examples from your projects',
        'Discuss trade-offs',
      ],
    },
    {
      q: 'Explain microservices vs monolithic architecture.',
      a: 'Monolithic: Single codebase, easier to develop initially, harder to scale. Microservices: Independent services, each with its own database, independently deployable, better scalability but more complex operations, communication via APIs/message queues.',
      tips: [
        'Discuss pros and cons',
        'Mention when to choose each',
        'Talk about DevOps implications',
      ],
    },
    {
      q: 'What is version control and why is it important?',
      a: 'Version control tracks changes to code over time, enabling collaboration, rollback, branching, and code review. Git is the most popular VCS. Key concepts: commits, branches, merges, pull requests, conflict resolution.',
      tips: [
        'Explain branching strategies',
        'Discuss Git workflow',
        'Mention CI/CD integration',
      ],
    },
    {
      q: 'Explain the difference between authentication and authorization.',
      a: 'Authentication verifies identity (who you are) - using passwords, tokens, biometrics. Authorization determines access (what you can do) - using roles, permissions, policies. Both are essential for security.',
      tips: [
        'Give real examples',
        'Discuss common implementations',
        'Mention OAuth, JWT',
      ],
    },
    {
      q: 'What is the difference between a stack and a queue?',
      a: 'Stack: LIFO (Last In First Out) - like a stack of plates. Operations: push, pop, peek. Queue: FIFO (First In First Out) - like a line at a store. Operations: enqueue, dequeue. Both are fundamental data structures.',
      tips: [
        'Draw visual diagrams',
        'Mention use cases',
        'Discuss time complexity',
      ],
    },
  ],
  behavioral: [
    {
      q: 'Describe a challenging project you worked on.',
      a: 'Use the STAR method: Situation (context), Task (your responsibility), Action (steps you took), Result (outcome and learnings). Focus on problem-solving skills, collaboration, and measurable results.',
      tips: [
        'Quantify your impact',
        'Highlight your specific contribution',
        'Discuss what you learned',
      ],
    },
    {
      q: 'Tell me about a time you failed.',
      a: "Be honest about a real failure, but focus 80% on what you learned and how you've improved. Demonstrate self-awareness, accountability, and growth mindset. Choose a failure that isn't a deal-breaker for the role.",
      tips: [
        'Take responsibility',
        'Focus on the learning',
        "Show how you've grown",
      ],
    },
    {
      q: 'How do you handle conflicts in a team?',
      a: 'Emphasize communication, empathy, and finding win-win solutions. Share a specific example where you resolved a conflict professionally. Focus on understanding different perspectives and collaborative problem-solving.',
      tips: [
        'Give a specific example',
        'Show emotional intelligence',
        'Demonstrate leadership',
      ],
    },
    {
      q: 'Describe a time you showed leadership.',
      a: "Share a specific example where you took initiative, motivated others, or guided a team to success. Leadership isn't just about titles - it's about influence, decision-making, and enabling others.",
      tips: ['Even small examples work', 'Focus on impact', 'Show initiative'],
    },
    {
      q: 'How do you prioritize tasks?',
      a: 'Explain your method (e.g., Eisenhower Matrix, MoSCoW, deadline-based) with a real example. Demonstrate ability to balance urgency and importance, communicate with stakeholders, and adjust as needed.',
      tips: [
        'Mention specific frameworks',
        'Give a real example',
        'Discuss communication',
      ],
    },
    {
      q: 'Tell me about a time you went above and beyond.',
      a: 'Share an example where you exceeded expectations without being asked. Focus on the initiative you took, the impact it had, and what motivated you. Show your commitment and work ethic.',
      tips: [
        'Be specific about results',
        'Show self-motivation',
        'Explain your thought process',
      ],
    },
    {
      q: 'How do you handle feedback and criticism?',
      a: 'Demonstrate openness to feedback and continuous improvement. Share an example where you received constructive criticism and used it to grow. Show emotional maturity and growth mindset.',
      tips: [
        'Give a specific example',
        'Show growth from feedback',
        'Mention seeking feedback proactively',
      ],
    },
    {
      q: 'Describe a time you had to learn something quickly.',
      a: 'Share an example of rapid learning under pressure. Explain your learning strategies, resources used, and how you applied the new knowledge. Demonstrate adaptability and curiosity.',
      tips: [
        'Explain your learning process',
        'Show resourcefulness',
        'Highlight quick application',
      ],
    },
    {
      q: 'Tell me about a time you disagreed with your manager.',
      a: 'Choose an example that shows professionalism and respect. Explain how you expressed your concerns constructively, listened to their perspective, and either found common ground or supported the final decision.',
      tips: [
        'Show respect for authority',
        'Focus on constructive approach',
        'Mention outcome',
      ],
    },
    {
      q: 'How do you stay motivated during repetitive tasks?',
      a: 'Share genuine strategies: setting personal goals, finding ways to improve efficiency, understanding the bigger purpose, or gamifying the task. Demonstrate self-awareness and practical coping mechanisms.',
      tips: [
        'Be genuine',
        'Mention efficiency improvements',
        'Connect to larger goals',
      ],
    },
  ],
  caseStudy: [
    {
      q: 'How would you approach launching a new product in the market?',
      a: 'Framework: 1) Market research and competitor analysis, 2) Define target audience and value proposition, 3) Develop go-to-market strategy (pricing, channels, messaging), 4) Set KPIs and success metrics, 5) Create launch timeline and rollback plans.',
      tips: [
        'Use structured frameworks',
        'Ask clarifying questions',
        'Consider risks',
      ],
    },
    {
      q: "A client's website traffic dropped by 40%. How would you diagnose and fix it?",
      a: 'Structured approach: 1) When did it start? 2) Check Google Search Console for penalties, 3) Analyze traffic sources affected, 4) Review recent changes (tech, content, competitors), 5) Check site speed and mobile issues, 6) Develop recovery plan.',
      tips: [
        'Be systematic',
        'Prioritize likely causes',
        'Propose short and long-term fixes',
      ],
    },
    {
      q: 'How would you reduce customer churn by 20%?',
      a: 'Framework: 1) Analyze churn data and patterns, 2) Identify key churn reasons (surveys, exit interviews), 3) Segment high-risk customers, 4) Implement proactive retention strategies, 5) Improve onboarding and customer success, 6) Measure and iterate.',
      tips: [
        'Focus on data-driven approach',
        'Consider customer lifecycle',
        'Propose measurable actions',
      ],
    },
    {
      q: 'Estimate the number of gas stations in India.',
      a: 'Fermi estimation: Consider population (1.4B), vehicles per capita, average distance traveled, fuel efficiency, station capacity. Divide into urban/rural. Rough estimate: ~80,000-100,000 gas stations.',
      tips: [
        'Think out loud',
        'Break down the problem',
        'Make reasonable assumptions',
      ],
    },
    {
      q: 'How would you improve user engagement for a mobile app?',
      a: 'Framework: 1) Define current engagement metrics, 2) Analyze user behavior and drop-off points, 3) Identify quick wins (push notifications, onboarding), 4) Plan feature improvements (gamification, personalization), 5) A/B test and iterate.',
      tips: [
        'Ask about the app type',
        'Use product frameworks',
        'Prioritize by impact',
      ],
    },
  ],
  groupDiscussion: [
    {
      q: 'What makes an effective team?',
      a: 'Key elements: Clear goals and roles, diverse skills and perspectives, open communication, trust and psychological safety, accountability, effective leadership, regular feedback and recognition.',
      tips: [
        'Listen actively',
        "Build on others' points",
        'Stay balanced and inclusive',
      ],
    },
    {
      q: 'Is remote work the future of employment?',
      a: 'Balanced view: Benefits (flexibility, no commute, global talent), Challenges (collaboration, culture, work-life boundaries). Future likely hybrid - depends on industry, role, and company culture. Key is outcome-based evaluation.',
      tips: [
        'Present multiple perspectives',
        'Use statistics if known',
        'Respect diverse opinions',
      ],
    },
    {
      q: 'Should AI replace human jobs?',
      a: 'Nuanced discussion: AI augments human capabilities in many areas. Some jobs will be automated, but new jobs will emerge. Focus should be on reskilling, human-AI collaboration, and ethical AI development.',
      tips: [
        'Acknowledge both sides',
        'Stay informed on current trends',
        'Focus on evolution, not replacement',
      ],
    },
    {
      q: 'Is social media beneficial or harmful to society?',
      a: 'Both perspectives: Benefits (connectivity, information access, social movements, business opportunities). Harms (mental health, misinformation, privacy concerns, addiction). Key is responsible use and platform accountability.',
      tips: [
        'Back up with examples',
        'Show balanced thinking',
        'Propose solutions',
      ],
    },
    {
      q: 'How can India become a global superpower?',
      a: 'Key areas: Economic growth (manufacturing, exports, innovation), Education and skill development, Infrastructure development, Good governance, Digital transformation, Sustainable development, Global partnerships.',
      tips: [
        'Be organized in presentation',
        'Use current examples',
        'Show national awareness',
      ],
    },
  ],
  freshers: [
    {
      q: 'Why should we hire a fresher like you?',
      a: 'Highlight: Fresh perspective and latest skills, eagerness to learn, adaptability, lower training bias, enthusiasm, relevant projects and internships, willingness to grow with the company.',
      tips: [
        'Turn inexperience into advantage',
        'Highlight learning ability',
        'Show genuine enthusiasm',
      ],
    },
    {
      q: 'What can you bring to this role without experience?',
      a: 'Emphasize: Relevant coursework and projects, internship experiences, quick learning ability, up-to-date skills, fresh ideas, dedication and enthusiasm, transferable skills from college activities.',
      tips: [
        'Connect academic to practical',
        'Mention relevant projects',
        'Show problem-solving ability',
      ],
    },
    {
      q: 'How do you plan to overcome your lack of experience?',
      a: 'Strategy: Seek mentorship, learn from experienced colleagues, take on challenging assignments, self-study and certifications, ask questions, document learnings, set personal development goals.',
      tips: [
        'Show proactive attitude',
        'Mention specific learning plans',
        'Demonstrate humility',
      ],
    },
    {
      q: 'Tell me about your final year project.',
      a: 'Structure: Problem statement, your role, technology used, challenges faced, solutions implemented, results achieved, what you learned. Be prepared for technical deep-dive questions.',
      tips: [
        'Know your project thoroughly',
        'Explain technical choices',
        'Mention real-world applications',
      ],
    },
    {
      q: 'Why this company for your first job?',
      a: "Research-based answer: Company's reputation, growth opportunities, technology stack, learning culture, alignment with career goals, impactful work, company values that resonate with you.",
      tips: [
        'Be specific about the company',
        'Show genuine research',
        'Connect to career goals',
      ],
    },
    {
      q: 'How would you rate your technical skills?',
      a: 'Honest self-assessment: Rate yourself fairly (not too high or low), mention areas of strength and improvement. Show self-awareness and commitment to continuous learning.',
      tips: ['Be honest', 'Back with examples', 'Show learning mindset'],
    },
    {
      q: 'Are you willing to relocate/travel?',
      a: 'Be honest about your flexibility. If flexible, express enthusiasm. If constraints exist, explain professionally. Emphasize your commitment to the role and willingness to find solutions.',
      tips: [
        'Be honest upfront',
        'Show flexibility if possible',
        "Don't commit to what you can't do",
      ],
    },
    {
      q: 'What did you learn in your internship?',
      a: 'Share: Technical skills gained, soft skills developed, industry insights, professional work culture exposure, specific projects or contributions, mentor learnings.',
      tips: [
        'Be specific about learnings',
        'Mention contributions made',
        'Connect to job requirements',
      ],
    },
  ],
  situational: [
    {
      q: 'What would you do if you realized you made a mistake that affected a client?',
      a: 'Steps: 1) Acknowledge the mistake immediately, 2) Assess the impact, 3) Inform relevant stakeholders (manager, team), 4) Develop solution and prevent recurrence, 5) Communicate transparently with client, 6) Document learnings.',
      tips: [
        'Show accountability',
        'Focus on solution',
        'Demonstrate integrity',
      ],
    },
    {
      q: "How would you handle a situation where you disagree with your team's approach?",
      a: 'Approach: 1) Understand their reasoning, 2) Present your perspective with data/logic, 3) Find common ground, 4) Escalate constructively if needed, 5) Support the final decision regardless of personal opinion.',
      tips: ['Show collaboration', 'Be respectful', 'Focus on team success'],
    },
    {
      q: "What would you do if you couldn't meet a deadline?",
      a: 'Steps: 1) Communicate early (not at the last minute), 2) Explain the reasons and impact, 3) Propose alternative timeline, 4) Prioritize and seek help if needed, 5) Learn and prevent recurrence.',
      tips: [
        'Emphasize early communication',
        'Have a solution ready',
        'Show responsibility',
      ],
    },
    {
      q: 'How would you handle a coworker not pulling their weight?',
      a: "Approach: 1) Assess if there's an underlying issue, 2) Have a private, supportive conversation, 3) Offer help if possible, 4) Set clear expectations, 5) Escalate to manager only if necessary, 6) Focus on team outcomes.",
      tips: ['Show empathy first', 'Be constructive', 'Know when to escalate'],
    },
    {
      q: "What would you do if given a task you've never done before?",
      a: 'Approach: 1) Break down the task, 2) Research and self-learn, 3) Identify resources (people, documentation), 4) Ask for guidance when stuck, 5) Start with what you know, 6) Iterate and seek feedback.',
      tips: [
        'Show resourcefulness',
        'Demonstrate learning ability',
        'Be honest about gaps',
      ],
    },
  ],
};

const categories = [
  { value: 'hr', label: 'HR / General Questions', icon: Users, count: 10 },
  { value: 'technical', label: 'Technical Questions', icon: Code, count: 10 },
  {
    value: 'behavioral',
    label: 'Behavioral Questions',
    icon: Brain,
    count: 10,
  },
  { value: 'caseStudy', label: 'Case Study Questions', icon: Target, count: 5 },
  {
    value: 'groupDiscussion',
    label: 'Group Discussion Topics',
    icon: Megaphone,
    count: 5,
  },
  {
    value: 'freshers',
    label: 'Fresher-Specific Questions',
    icon: GraduationCap,
    count: 8,
  },
  {
    value: 'situational',
    label: 'Situational Questions',
    icon: Lightbulb,
    count: 5,
  },
];

export default function InterviewQuestionsContent() {
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState<
    Array<{ q: string; a: string; tips?: string[] }>
  >([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const generateQuestions = () => {
    if (!category) {
      alert('Please select a category');
      return;
    }
    setQuestions(questionBank[category]);
    setExpandedIndex(null);
  };

  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <MessageSquare className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Interview Questions Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Practice 50+ common interview questions with expert sample answers
            and preparation tips. Master HR, Technical, and Behavioral rounds.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">50+ Questions</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Expert Answers</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Shield className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">STAR Method</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Users className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">18,000+ Users</span>
          </div>
        </div>

        {/* Question Generator Tool */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Select Question Category
            </CardTitle>
            <CardDescription>
              Choose the type of interview questions you want to practice
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Question Category</Label>
              <Select
                value={category}
                onValueChange={setCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat.value}
                      value={cat.value}
                    >
                      <div className="flex items-center gap-2">
                        <cat.icon className="h-4 w-4" />
                        {cat.label} ({cat.count} questions)
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={generateQuestions}
              className="w-full"
              size="lg"
            >
              Generate Questions
            </Button>
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            🎯 <strong>142 students</strong> practiced interview questions in
            the last hour
          </p>
        </div>

        {/* Questions Display */}
        {questions.length > 0 && (
          <div className="mb-16 space-y-4">
            <h2 className="mb-4 text-2xl font-bold">
              {categories.find((c) => c.value === category)?.label}
            </h2>

            {questions.map((item, index) => (
              <Card
                key={index}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="flex items-start justify-between">
                    <CardTitle className="pr-4 text-lg">
                      {index + 1}. {item.q}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                    >
                      {expandedIndex === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                {expandedIndex === index && (
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                      <p className="mb-2 text-sm font-semibold text-green-900 dark:text-green-100">
                        Sample Answer:
                      </p>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        {item.a}
                      </p>
                    </div>
                    {item.tips && item.tips.length > 0 && (
                      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
                        <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-900 dark:text-blue-100">
                          <Lightbulb className="h-4 w-4" />
                          Pro Tips:
                        </p>
                        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                          {item.tips.map((tip, i) => (
                            <li key={i}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Complete Interview Preparation Guide
          </h2>
          <p>
            Preparing for job interviews can be daunting, but with the right
            approach and practice, you can confidently tackle any question
            thrown your way. This comprehensive guide covers everything from
            understanding different interview formats to mastering the art of
            storytelling with the STAR method.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Key Statistics
            </h3>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-900">
                <p className="text-2xl font-bold text-primary">75%</p>
                <p className="text-muted-foreground">
                  of candidates eliminated at screening
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-900">
                <p className="text-2xl font-bold text-primary">33%</p>
                <p className="text-muted-foreground">
                  decision made in first 90 seconds
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-gray-900">
                <p className="text-2xl font-bold text-primary">46%</p>
                <p className="text-muted-foreground">
                  fail due to lack of preparation
                </p>
              </div>
            </div>
          </div>

          <h2>Types of Interview Rounds</h2>

          <h3>1. HR/Screening Round</h3>
          <p>
            The HR round is typically the first filter. Recruiters assess your
            communication skills, cultural fit, salary expectations, and verify
            basic qualifications. Key focus areas include:
          </p>
          <ul>
            <li>Professional introduction and career goals</li>
            <li>Salary expectations and notice period</li>
            <li>Company-specific questions (why this company?)</li>
            <li>Behavioral traits and soft skills</li>
            <li>Relocation and availability</li>
          </ul>

          <h3>2. Technical Round</h3>
          <p>
            Technical interviews assess your domain knowledge and
            problem-solving abilities. Depending on the role, you may face:
          </p>
          <ul>
            <li>
              <strong>Coding interviews:</strong> Data structures, algorithms,
              system design
            </li>
            <li>
              <strong>Domain-specific:</strong> Concepts, tools, technologies
              relevant to the role
            </li>
            <li>
              <strong>Live coding:</strong> Solving problems in real-time with
              explanation
            </li>
            <li>
              <strong>Take-home assignments:</strong> Projects to complete
              within a deadline
            </li>
            <li>
              <strong>Whiteboard/System design:</strong> Architecture and
              scalability discussions
            </li>
          </ul>

          <h3>3. Behavioral/Managerial Round</h3>
          <p>
            This round evaluates your past behavior as an indicator of future
            performance. Interviewers look for leadership potential, conflict
            resolution, teamwork, and cultural alignment. The STAR method is
            essential here.
          </p>

          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            The STAR Method Explained
          </h2>
          <p>
            The STAR method is a structured way to respond to behavioral
            interview questions. It helps you provide complete, concise, and
            relevant answers with concrete examples.
          </p>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">
                  S - Situation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Set the scene. Describe the context and background.</p>
                <p className="mt-2 text-muted-foreground">
                  "In my previous role at XYZ Company, we faced a critical
                  deadline for a client project..."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">
                  T - Task
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Explain your specific responsibility in that situation.</p>
                <p className="mt-2 text-muted-foreground">
                  "As the team lead, I was responsible for ensuring timely
                  delivery while maintaining quality..."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">
                  A - Action
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Describe the steps YOU took. Use "I" not "we".</p>
                <p className="mt-2 text-muted-foreground">
                  "I implemented daily standups, prioritized critical features,
                  and personally handled client communication..."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">
                  R - Result
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Share the outcome with quantifiable results if possible.</p>
                <p className="mt-2 text-muted-foreground">
                  "We delivered the project 2 days early, the client renewed
                  their contract, and team satisfaction improved by 25%..."
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>Interview Preparation Timeline</h2>

          <div className="not-prose my-6 space-y-4">
            {[
              {
                time: '1 Week Before',
                tasks:
                  'Research company, review job description, prepare 5 STAR stories, practice common questions',
              },
              {
                time: '2-3 Days Before',
                tasks:
                  'Do a mock interview, prepare questions for interviewer, select and iron outfit, confirm logistics',
              },
              {
                time: 'Day Before',
                tasks:
                  "Review notes lightly (don't cram), get good sleep, prepare documents and bag",
              },
              {
                time: 'Day Of',
                tasks:
                  'Arrive 15 min early, review key points, stay calm and confident, be yourself',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border p-4"
              >
                <div className="w-32 flex-shrink-0">
                  <span className="font-bold text-primary">{item.time}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm">{item.tasks}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Common Interview Mistakes to Avoid</h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Don't Do This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">✗ Arriving late or too early</li>
                <li className="list-none">
                  ✗ Speaking negatively about past employers
                </li>
                <li className="list-none">
                  ✗ Rambling or giving one-word answers
                </li>
                <li className="list-none">✗ Not researching the company</li>
                <li className="list-none">
                  ✗ Lying or exaggerating experience
                </li>
                <li className="list-none">
                  ✗ Focusing only on salary in early rounds
                </li>
                <li className="list-none">✗ Not preparing questions to ask</li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Do This Instead
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">✓ Arrive 10-15 minutes early</li>
                <li className="list-none">✓ Stay positive and professional</li>
                <li className="list-none">
                  ✓ Give structured, concise answers
                </li>
                <li className="list-none">
                  ✓ Know the company's mission and recent news
                </li>
                <li className="list-none">
                  ✓ Be honest about your experience level
                </li>
                <li className="list-none">✓ Focus on value you bring first</li>
                <li className="list-none">
                  ✓ Have 3-5 thoughtful questions ready
                </li>
              </CardContent>
            </Card>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>How long should my answers be?</h3>
          <p>
            For most behavioral and HR questions, aim for{' '}
            <strong>1-2 minutes</strong>. Technical explanations can be longer
            if needed. If unsure, ask "Would you like me to go into more
            detail?" The key is being comprehensive yet concise.
          </p>

          <h3>Should I memorize answers word-for-word?</h3>
          <p>
            No. Memorized answers sound robotic and fall apart when asked
            follow-up questions. Instead, prepare key points and stories, then
            practice delivering them naturally. Know your content, not your
            script.
          </p>

          <h3>How do I handle a question I don't know the answer to?</h3>
          <p>
            Be honest. Say "I'm not sure about that specific topic, but here's
            what I do know..." or "I haven't encountered that situation, but I
            would approach it by..." Interviewers appreciate honesty and
            problem-solving attitude over pretending.
          </p>

          <h3>What should I do if I get nervous?</h3>
          <p>
            Nervousness is normal and often invisible to interviewers. Before
            the interview: practice deep breathing, power poses, and positive
            visualization. During: take pauses, drink water, and remember - they
            want you to succeed. Adrenaline actually helps with performance.
          </p>

          <h3>How many STAR stories should I prepare?</h3>
          <p>
            Prepare at least <strong>5-7 stories</strong> that can be adapted to
            different questions. Good themes: Leadership, Conflict resolution,
            Failure and learning, Achievement, Teamwork, Initiative, and
            Overcoming challenge. Each story can answer multiple questions.
          </p>

          <h3>What if I have gaps in my resume?</h3>
          <p>
            Be prepared to address gaps honestly. Whether for personal reasons,
            further education, or job searching - focus on what you did during
            that time (skills learned, freelance work, certifications) and why
            you're now the right fit.
          </p>

          <h3>How do I follow up after an interview?</h3>
          <p>
            Send a thank-you email within <strong>24 hours</strong>. Personalize
            it by mentioning something specific from the conversation. Reiterate
            your interest and fit. Keep it brief - 3-4 sentences. If you haven't
            heard back in a week, one polite follow-up is appropriate.
          </p>

          <h3>Is it okay to ask for feedback if rejected?</h3>
          <p>
            Absolutely. Many companies will provide feedback if asked politely.
            Frame it as: "I'd appreciate any feedback to help me improve for
            future opportunities." Not all will respond, but the ones that do
            provide valuable learning.
          </p>

          <h3>How do I negotiate if the offer is lower than expected?</h3>
          <p>
            Don't accept or reject immediately. Express enthusiasm, then ask for
            time to consider. Research market rates, prepare your case based on
            skills and value, then counter professionally. Focus on total
            compensation (bonus, benefits, growth) not just base salary.
          </p>

          <h3>What should I wear to an interview?</h3>
          <p>
            Research the company culture. When in doubt, dress one level above
            the company's typical dress code. For corporate: business formal.
            For startups: business casual. Always ensure clothes are clean,
            well-fitted, and professional. First impressions matter.
          </p>
        </div>

        {/* Global Interview Section */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            🌍 Interview Tips for Global & Remote Opportunities
          </h2>
          <p className="mb-8 text-muted-foreground">
            Interviewing for international companies or remote positions
            requires understanding different cultures, time zones, and
            expectations. Here's what you need to know to succeed in global
            interviews.
          </p>

          {/* Interview Culture by Region */}
          <div className="mb-8">
            <h3 className="mb-4 font-bold">🏢 Interview Culture by Region</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    🇺🇸 USA & Canada
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Style:</strong> Direct, results-focused, informal
                    first names
                  </p>
                  <p>
                    <strong>Format:</strong> 4-6 rounds typical (phone → coding
                    → system design → behavioral)
                  </p>
                  <p>
                    <strong>Key Focus:</strong> Problem-solving ability,
                    cultural fit ("culture add")
                  </p>
                  <p>
                    <strong>Tip:</strong> Be confident, use "I" statements,
                    quantify achievements
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    🇬🇧 UK & Europe
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Style:</strong> Formal initially, competency-based
                    questions
                  </p>
                  <p>
                    <strong>Format:</strong> 2-4 rounds, often includes
                    assessment centers
                  </p>
                  <p>
                    <strong>Key Focus:</strong> Qualifications, structured
                    competency frameworks
                  </p>
                  <p>
                    <strong>Tip:</strong> Be prepared for STAR method questions,
                    research company values deeply
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    🇩🇪 Germany
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Style:</strong> Very formal, punctuality is critical
                  </p>
                  <p>
                    <strong>Format:</strong> Technical + HR rounds, often in
                    German
                  </p>
                  <p>
                    <strong>Key Focus:</strong> Technical depth, formal
                    qualifications
                  </p>
                  <p>
                    <strong>Tip:</strong> Arrive 5-10 min early, prepare German
                    self-introduction
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    🇸🇬 Singapore & APAC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Style:</strong> Mix of Western and Asian formality
                  </p>
                  <p>
                    <strong>Format:</strong> Similar to US, often virtual first
                    rounds
                  </p>
                  <p>
                    <strong>Key Focus:</strong> Adaptability, regional
                    experience valued
                  </p>
                  <p>
                    <strong>Tip:</strong> Show awareness of regional market
                    differences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAANG Interview Tips */}
          <div className="mb-8 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Star className="h-5 w-5 text-purple-600" />
              FAANG & Big Tech Interview Tips
            </h3>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold">Technical Rounds:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Practice 200+ LeetCode problems (Easy to Hard)</li>
                  <li>• Master system design fundamentals</li>
                  <li>• Think aloud while solving problems</li>
                  <li>• Know complexity analysis inside out</li>
                  <li>• Practice on whiteboard/Google Doc</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold">Behavioral Rounds:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Prepare 8-10 STAR stories covering key themes</li>
                  <li>• Research company leadership principles</li>
                  <li>• Practice articulating technical decisions</li>
                  <li>• Show collaboration and conflict resolution</li>
                  <li>• Demonstrate ownership and growth mindset</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Remote Interview Tips */}
          <div className="mb-8 rounded-lg border p-6">
            <h3 className="mb-4 font-bold">
              📹 Remote & Virtual Interview Best Practices
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Technical Setup:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Test internet, camera, mic 30 minutes before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>
                      Use wired connection if possible, have mobile hotspot
                      backup
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>
                      Good lighting (face the window), clean background
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Have water nearby, mute notifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-primary">
                  Virtual Communication:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Look at camera (not screen) for eye contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Nod and give visual cues to show engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Wait a beat before speaking (to avoid overlap)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Have notes visible but don't read from them</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visa Sponsorship Questions */}
          <div className="mb-8 rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              🛂 Handling Visa & Work Authorization Questions
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="mb-2 font-semibold text-orange-800 dark:text-orange-200">
                  Common Questions:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • "Are you authorized to work in [country]?" - Be honest
                    about visa status
                  </li>
                  <li>
                    • "Will you need sponsorship?" - Clarify type (H-1B, Skilled
                    Worker, etc.)
                  </li>
                  <li>
                    • "When can you start?" - Factor in visa processing time
                    (1-6 months)
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-gray-900">
                <p className="font-semibold text-orange-800 dark:text-orange-200">
                  How to Respond:
                </p>
                <p className="mt-1 text-muted-foreground">
                  "I will require [visa type] sponsorship. I understand the
                  process and am prepared for the timeline. Many companies
                  successfully sponsor international talent, and I'm committed
                  to making this transition seamless. I can handle the
                  documentation and am flexible with start dates to accommodate
                  processing time."
                </p>
              </div>
            </div>
          </div>

          {/* Time Zone Tips */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>⏰ Time Zone Tip:</strong> When scheduling interviews
              across time zones, always confirm in both zones. Example: "9 AM
              PST / 10:30 PM IST on Tuesday" - double-check if it's the same or
              next day. Use WorldTimeBuddy or similar tools to avoid confusion.
            </p>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Career Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Resume Score Checker',
                href: '/tools/resume-score-checker',
                desc: 'Get ATS-friendly score for your resume',
              },
              {
                title: 'Cover Letter Generator',
                href: '/tools/cover-letter-generator',
                desc: 'Create tailored cover letters instantly',
              },
              {
                title: 'Aptitude Test',
                href: '/tools/aptitude-test',
                desc: 'Practice quantitative aptitude questions',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-bold">
            Interview Preparation Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/resources/interview-prep"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Complete Interview Prep Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                In-depth strategies for every interview round.
              </p>
            </Link>
            <Link
              href="/resources/interview-cheatsheet"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Interview Cheatsheet</h3>
              <p className="text-sm text-muted-foreground">
                Quick reference for common questions and answers.
              </p>
            </Link>
            <Link
              href="/blog/mastering-star-method"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Mastering the STAR Method</h3>
              <p className="text-sm text-muted-foreground">
                Expert tips to ace behavioral interviews.
              </p>
            </Link>
            <Link
              href="/blog/50-common-interview-questions"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                50 Common Interview Questions
              </h3>
              <p className="text-sm text-muted-foreground">
                Complete list with detailed answers.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Start Your Career Journey Today
          </h2>
          <p className="mb-6 text-muted-foreground">
            Browse thousands of internship opportunities from top startups
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
