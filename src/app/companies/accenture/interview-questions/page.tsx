import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  FileQuestion,
  Code,
  Users,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Accenture Interview Questions - Interview Questions',
  description:
    'Complete list of Accenture interview questions for freshers. Technical, HR, and coding questions with detailed answers for ASE and Associate roles.',
  keywords: [
    'Accenture interview questions',
    'Accenture technical questions',
    'Accenture HR questions',
    'ASE interview',
    'Accenture placement',
  ],
  canonical: '/companies/accenture/interview-questions',
});

const technicalQuestions = [
  {
    question: 'What is the difference between Java and JavaScript?',
    answer:
      'Java is a compiled, object-oriented programming language used for building enterprise and Android applications. JavaScript is an interpreted scripting language primarily used for web development (front-end and back-end with Node.js). Despite similar names, they have different syntax, use cases, and runtime environments.',
  },
  {
    question: 'Explain the concept of OOPs with examples.',
    answer:
      'OOP (Object-Oriented Programming) is a paradigm based on objects. Key concepts: 1) Class/Object - blueprint and instance (Car class, myCar object), 2) Encapsulation - data hiding (private variables with getters/setters), 3) Inheritance - reusing code (Electric Car extends Car), 4) Polymorphism - many forms (method overloading/overriding), 5) Abstraction - hiding complexity (abstract classes/interfaces).',
  },
  {
    question: 'What is the difference between SQL and MySQL?',
    answer:
      "SQL (Structured Query Language) is a standard language for managing relational databases - it's used for queries, updates, and schema operations. MySQL is a specific relational database management system (RDBMS) that uses SQL. Other RDBMS include PostgreSQL, Oracle, and SQL Server. SQL is the language; MySQL is the software.",
  },
  {
    question: 'Explain what is an API and how REST API works.',
    answer:
      'API (Application Programming Interface) allows different software systems to communicate. REST API uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources. Key principles: Stateless (each request contains all info), Client-Server architecture, Uniform Interface, Cacheable responses, and Layered System. Example: GET /users/123 retrieves user with ID 123.',
  },
  {
    question: 'What is the difference between primary key and foreign key?',
    answer:
      "Primary Key uniquely identifies each record in a table (no duplicates, not null). Foreign Key is a field in one table that references the primary key of another table, creating a relationship between tables. Example: In Orders table, customer_id is a foreign key referencing Customers table's id (primary key).",
  },
  {
    question: 'Explain the different types of testing.',
    answer:
      "1) Unit Testing - testing individual components/functions, 2) Integration Testing - testing how components work together, 3) System Testing - testing complete integrated system, 4) UAT (User Acceptance Testing) - testing by end users, 5) Regression Testing - ensuring new changes don't break existing features, 6) Performance Testing - testing speed and scalability.",
  },
  {
    question: 'What is Agile methodology?',
    answer:
      'Agile is an iterative approach to project management and software development. It emphasizes: Working software over documentation, Customer collaboration over contract negotiation, Responding to change over following a plan. Frameworks include Scrum (sprints, daily standups) and Kanban (visual boards). Delivery happens in short cycles with continuous feedback.',
  },
  {
    question: 'What is Cloud Computing? Explain different service models.',
    answer:
      'Cloud computing delivers computing services over the internet. Service models: 1) IaaS (Infrastructure as a Service) - virtual machines, storage (AWS EC2, Azure VMs), 2) PaaS (Platform as a Service) - development platforms (Heroku, Google App Engine), 3) SaaS (Software as a Service) - ready-to-use applications (Gmail, Salesforce). Deployment: Public, Private, Hybrid clouds.',
  },
  {
    question: 'What is the difference between Array and LinkedList?',
    answer:
      'Array: Contiguous memory allocation, fixed size, O(1) access by index, O(n) insertion/deletion. LinkedList: Non-contiguous memory with pointers, dynamic size, O(n) access, O(1) insertion/deletion (if position known). Arrays are better for random access; LinkedLists are better for frequent insertions/deletions.',
  },
  {
    question: 'Explain what is SDLC and its phases.',
    answer:
      'SDLC (Software Development Life Cycle) is a framework for building software. Phases: 1) Planning - feasibility study, resource allocation, 2) Analysis - requirement gathering, 3) Design - system architecture, UI/UX design, 4) Development - actual coding, 5) Testing - quality assurance, 6) Deployment - release to production, 7) Maintenance - updates and bug fixes.',
  },
];

const hrQuestions = [
  {
    question: 'Tell me about yourself.',
    answer:
      "Structure: Present-Past-Future. Present: 'I am a final year Computer Science student at XYZ University with a strong interest in software development.' Past: 'During my academics, I worked on projects using Java and Python, and completed an internship at ABC Company.' Future: 'I am excited to start my career at Accenture where I can leverage my skills and grow as a professional.'",
  },
  {
    question: 'Why do you want to join Accenture?',
    answer:
      "Highlight specific aspects: 'Accenture's reputation as a global leader in consulting and technology attracts me. I am impressed by your commitment to innovation and the diverse range of projects across industries. The training programs for freshers and clear career growth paths make Accenture an ideal place to start my career. Your core values of integrity and respect align with my personal values.'",
  },
  {
    question: 'What do you know about Accenture?',
    answer:
      "Accenture is a global professional services company headquartered in Dublin, Ireland. It operates in five businesses: Strategy & Consulting, Technology, Operations, Interactive (now Song), and Industry X. With 738,000+ employees serving clients in 120+ countries, it's a Fortune Global 500 company. Recent focus areas include cloud, AI, and sustainability solutions.",
  },
  {
    question: 'What are your strengths and weaknesses?',
    answer:
      "Strengths: 'I am a quick learner who adapts well to new technologies. My analytical mindset helps me solve problems systematically. I work well in teams and communicate effectively.' Weakness (with improvement): 'I sometimes spend too much time perfecting details. I've learned to set time limits and prioritize tasks to meet deadlines while maintaining quality.'",
  },
  {
    question: 'Are you comfortable working in rotational shifts?',
    answer:
      "Be honest and positive: 'Yes, I understand that Accenture serves global clients across time zones, making rotational shifts necessary. I am flexible and willing to adapt my schedule as per project requirements. I believe it's an opportunity to work with diverse international teams.'",
  },
  {
    question: 'Where do you see yourself in 5 years?',
    answer:
      "Show ambition with realism: 'In 5 years, I see myself as a senior consultant or technical lead, having developed expertise in specific domains like Cloud or Data Analytics. I hope to lead projects, mentor new joiners, and contribute to Accenture's growth while continuously upgrading my skills through certifications and hands-on experience.'",
  },
  {
    question: 'How do you handle pressure and tight deadlines?',
    answer:
      "Give an example: 'I handle pressure by breaking tasks into smaller, manageable parts and prioritizing based on urgency. During my final year project, I had multiple deadlines. I created a detailed schedule, communicated with my team, and delivered on time. I find that staying organized and maintaining clear communication helps me perform well under pressure.'",
  },
  {
    question: 'Why should we hire you?',
    answer:
      "Connect skills to role: 'You should hire me because I bring a combination of technical skills, adaptability, and a strong work ethic. My programming skills in Java and Python, combined with my problem-solving ability, make me ready to contribute immediately. I am eager to learn and grow, and I believe my enthusiasm and dedication will add value to your team.'",
  },
];

const codingQuestions = [
  {
    question: 'Write a program to check if a number is Armstrong number.',
    code: `function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => 
    acc + Math.pow(parseInt(digit), power), 0);
  return sum === num;
}

// Examples:
// isArmstrong(153) → true (1³ + 5³ + 3³ = 153)
// isArmstrong(370) → true (3³ + 7³ + 0³ = 370)
// isArmstrong(123) → false`,
  },
  {
    question: 'Write a program to find the largest element in an array.',
    code: `function findLargest(arr) {
  if (arr.length === 0) return null;
  
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Using built-in function
const findLargestBuiltIn = (arr) => Math.max(...arr);

// Example: findLargest([3, 1, 4, 1, 5, 9, 2, 6]) → 9`,
  },
  {
    question:
      'Write a SQL query to find employees with salary greater than average.',
    code: `-- Find employees earning more than average salary
SELECT employee_id, employee_name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- With department info
SELECT e.employee_name, e.salary, d.department_name
FROM Employees e
JOIN Departments d ON e.department_id = d.department_id
WHERE e.salary > (SELECT AVG(salary) FROM Employees)
ORDER BY e.salary DESC;`,
  },
  {
    question: 'Write a program to sort an array without using built-in sort.',
    code: `// Bubble Sort Implementation
function bubbleSort(arr) {
  const n = arr.length;
  const result = [...arr]; // Copy array
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

// Example: bubbleSort([64, 34, 25, 12, 22, 11, 90])
// Output: [11, 12, 22, 25, 34, 64, 90]`,
  },
  {
    question: 'Write a program to count vowels and consonants in a string.',
    code: `function countVowelsConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;
  
  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  
  return { vowels: vowelCount, consonants: consonantCount };
}

// Example: countVowelsConsonants("Hello World")
// Output: { vowels: 3, consonants: 7 }`,
  },
  {
    question: 'Write a program to check if two strings are anagrams.',
    code: `function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const clean = (s) => s.toLowerCase().replace(/[^a-z]/g, '');
  const s1 = clean(str1);
  const s2 = clean(str2);
  
  // Check if same length
  if (s1.length !== s2.length) return false;
  
  // Sort and compare
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// Examples:
// areAnagrams("listen", "silent") → true
// areAnagrams("hello", "world") → false`,
  },
];

export default function AccentureInterviewQuestionsPage() {
  return (
    <div className="container max-w-5xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0"
        >
          <Link href="/companies/accenture">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accenture
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          Accenture Interview Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive collection of technical, HR, and coding questions asked
          in Accenture interviews for freshers.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12 flex flex-wrap gap-4">
        <Button
          asChild
          variant="outline"
        >
          <a href="#technical">
            <Code className="mr-2 h-4 w-4" /> Technical (10)
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
        >
          <a href="#hr">
            <Users className="mr-2 h-4 w-4" /> HR Questions (8)
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
        >
          <a href="#coding">
            <FileQuestion className="mr-2 h-4 w-4" /> Coding (6)
          </a>
        </Button>
      </div>

      {/* Technical Questions */}
      <section
        id="technical"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Code className="h-6 w-6 text-primary" />
          Technical Interview Questions
        </h2>
        <div className="space-y-4">
          {technicalQuestions.map((q, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q{index + 1}. {q.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{q.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HR Questions */}
      <section
        id="hr"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Users className="h-6 w-6 text-primary" />
          HR Interview Questions
        </h2>
        <div className="space-y-4">
          {hrQuestions.map((q, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q{index + 1}. {q.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{q.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coding Questions */}
      <section
        id="coding"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <FileQuestion className="h-6 w-6 text-primary" />
          Coding Questions
        </h2>
        <div className="space-y-4">
          {codingQuestions.map((q, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q{index + 1}. {q.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                  {q.code}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-16 rounded-2xl bg-primary/5 p-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <MessageSquare className="h-5 w-5 text-primary" />
          Pro Tips for Accenture Interviews
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">1.</span>
            <span>
              Research Accenture's recent projects and news - interviewers
              appreciate candidates who know the company.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">2.</span>
            <span>
              For coding rounds, focus on writing clean, readable code. Partial
              solutions are better than no solution.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">3.</span>
            <span>
              Practice explaining your thought process - Accenture values
              communication skills highly.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">4.</span>
            <span>
              Be prepared to discuss your projects in detail - technologies
              used, challenges faced, and outcomes.
            </span>
          </li>
        </ul>
      </section>

      {/* Related Resources */}
      <section className="rounded-2xl bg-muted/50 p-8">
        <h2 className="mb-6 text-xl font-bold">Prepare More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/tools/aptitude-test"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">Practice Aptitude</h4>
            <p className="text-sm text-muted-foreground">
              Mock tests for cognitive round
            </p>
          </Link>
          <Link
            href="/tools/interview-questions"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">More Questions</h4>
            <p className="text-sm text-muted-foreground">
              Role-specific questions
            </p>
          </Link>
          <Link
            href="/resources/interview-prep"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">Interview Guide</h4>
            <p className="text-sm text-muted-foreground">
              Complete preparation tips
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
