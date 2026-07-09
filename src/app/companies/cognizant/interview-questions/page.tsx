import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileQuestion, Code, Users } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Cognizant Interview Questions - Interview Questions',
  description:
    'Complete list of Cognizant interview questions for freshers. Technical, HR, and coding questions with detailed answers for GenC, GenC Next, and GenC Pro roles.',
  keywords: [
    'Cognizant interview questions',
    'Cognizant technical questions',
    'Cognizant HR questions',
    'GenC interview',
    'Cognizant placement',
  ],
  canonical: '/companies/cognizant/interview-questions',
});

const technicalQuestions = [
  {
    question: 'What is Object-Oriented Programming? Explain its four pillars.',
    answer:
      'OOP is a programming paradigm based on objects containing data and code. The four pillars are: 1) Encapsulation - bundling data and methods together, 2) Abstraction - hiding complex implementation details, 3) Inheritance - deriving new classes from existing ones, 4) Polymorphism - one interface, multiple implementations.',
  },
  {
    question: 'Explain the difference between Stack and Heap memory.',
    answer:
      'Stack memory is used for static allocation and stores local variables/function calls. It follows LIFO and is automatically managed. Heap memory is used for dynamic allocation, stores objects, and requires manual memory management (in C/C++) or garbage collection (Java). Stack is faster but limited in size.',
  },
  {
    question:
      'What is the difference between an abstract class and an interface?',
    answer:
      "Abstract class can have both abstract and concrete methods, supports constructors, and allows single inheritance. Interface traditionally had only abstract methods (Java 8+ allows default methods), no constructors, and supports multiple inheritance. Use abstract class for 'is-a' relationship and interface for 'can-do' capabilities.",
  },
  {
    question: 'Explain ACID properties in databases.',
    answer:
      "ACID ensures reliable database transactions. Atomicity - transaction is all or nothing. Consistency - database remains in valid state. Isolation - concurrent transactions don't interfere. Durability - committed changes persist even after system failure.",
  },
  {
    question: 'What are joins in SQL? Explain different types.',
    answer:
      'Joins combine rows from two or more tables based on related columns. Types: INNER JOIN (matching rows only), LEFT JOIN (all from left + matching), RIGHT JOIN (all from right + matching), FULL JOIN (all from both), CROSS JOIN (cartesian product), SELF JOIN (table joined with itself).',
  },
  {
    question: 'What is normalization? Explain different normal forms.',
    answer:
      'Normalization organizes data to reduce redundancy. 1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies. BCNF: 3NF + every determinant is a candidate key. Higher forms reduce redundancy but may impact query performance.',
  },
  {
    question: 'Explain the concept of multithreading.',
    answer:
      'Multithreading allows concurrent execution of multiple threads within a single process. Threads share the same memory space, enabling efficient resource usage. Benefits include improved performance, responsive UI, and better CPU utilization. Challenges include race conditions, deadlocks, and synchronization issues.',
  },
  {
    question: 'What is a deadlock? How can it be prevented?',
    answer:
      'Deadlock occurs when two or more processes are waiting for each other to release resources. Prevention methods: 1) Resource ordering - request resources in a fixed order, 2) Lock timeout - acquire locks with timeout, 3) Deadlock detection - periodically check and break deadlocks, 4) Resource allocation graph - track resource allocation.',
  },
  {
    question: 'Explain REST API and its principles.',
    answer:
      'REST (Representational State Transfer) is an architectural style for web services. Principles: Stateless (no client context stored), Client-Server separation, Cacheable responses, Uniform interface (standard HTTP methods), Layered system, Code on demand (optional). Uses HTTP methods: GET, POST, PUT, DELETE.',
  },
  {
    question: 'What is the difference between process and thread?',
    answer:
      "Process is an independent program with its own memory space. Thread is a lightweight unit within a process sharing memory. Processes are isolated and communicate via IPC; threads share memory and can access each other's data directly. Context switching is faster for threads than processes.",
  },
];

const hrQuestions = [
  {
    question: 'Tell me about yourself.',
    answer:
      "Start with your name and educational background, then mention your technical skills and interests. Highlight relevant projects and achievements. End with your career goals and why you're interested in Cognizant. Keep it concise (1-2 minutes) and professional.",
  },
  {
    question: 'Why do you want to join Cognizant?',
    answer:
      "Mention Cognizant's global presence, diverse projects, and learning opportunities. Highlight their work culture, digital transformation initiatives, and career growth potential. Show that you've researched the company: 'Cognizant's work in digital solutions and cloud services aligns with my interest in emerging technologies.'",
  },
  {
    question: 'What are your strengths and weaknesses?',
    answer:
      "Strengths: Quick learner, team player, problem-solving ability, adaptability. Be specific with examples. Weakness: Choose something genuine but not critical, and show how you're improving. Example: 'I sometimes focus too much on details, but I've learned to prioritize tasks and meet deadlines.'",
  },
  {
    question: 'Are you willing to relocate to any Cognizant office in India?',
    answer:
      "Yes, flexibility is valued. Say: 'I am open to relocation as it would be a great opportunity to explore new places and gain diverse work experience. I understand that the IT industry requires flexibility, and I'm ready for it.'",
  },
  {
    question: 'Do you have any questions for us?',
    answer:
      "Always ask thoughtful questions: 'What does the training program look like for freshers?', 'What technologies will I be working with?', 'What are the growth opportunities for high performers?', 'Can you tell me about the team I would be joining?'",
  },
  {
    question: 'Where do you see yourself in 5 years?',
    answer:
      "Show ambition while being realistic: 'In 5 years, I see myself as a senior developer with expertise in specific technologies. I hope to lead projects and mentor juniors while continuously learning new skills. I want to grow with Cognizant and contribute to meaningful projects.'",
  },
  {
    question: 'How do you handle pressure and tight deadlines?',
    answer:
      "Describe your approach: 'I prioritize tasks, break down work into manageable parts, and focus on the most critical items first. I communicate proactively with team members if I need help. During my college projects, I successfully managed multiple deadlines by maintaining a schedule.'",
  },
  {
    question: 'Are you aware of the service agreement/bond?',
    answer:
      "Cognizant typically has a service agreement for freshers (usually 2 years). Say: 'Yes, I am aware of the service agreement and I am fully committed to fulfilling my obligation. I view this as an opportunity to learn and grow within the company.'",
  },
];

const codingQuestions = [
  {
    question: 'Write a program to check if a string is a palindrome.',
    code: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Example: isPalindrome("A man a plan a canal Panama") // true`,
  },
  {
    question: 'Write a program to find the factorial of a number.',
    code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Iterative version
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}`,
  },
  {
    question:
      'Write a SQL query to find the second highest salary from an Employee table.',
    code: `-- Method 1: Using LIMIT and OFFSET
SELECT DISTINCT salary 
FROM Employee 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;

-- Method 2: Using subquery
SELECT MAX(salary) 
FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);`,
  },
  {
    question: 'Write a program to reverse a linked list.',
    code: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}`,
  },
  {
    question: 'Write a program to find duplicates in an array.',
    code: `function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = [];
  
  for (const item of arr) {
    if (seen.has(item)) {
      if (!duplicates.includes(item)) {
        duplicates.push(item);
      }
    } else {
      seen.add(item);
    }
  }
  
  return duplicates;
}

// Example: findDuplicates([1, 2, 3, 2, 4, 3]) // [2, 3]`,
  },
];

export default function CognizantInterviewQuestionsPage() {
  return (
    <div className="container max-w-5xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0"
        >
          <Link href="/companies/cognizant">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cognizant
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          Cognizant Interview Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive collection of technical, HR, and coding questions asked
          in Cognizant interviews for freshers.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12 flex flex-wrap gap-4">
        <Button
          asChild
          variant="outline"
        >
          <a href="#technical">
            <Code className="mr-2 h-4 w-4" /> Technical Questions
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
        >
          <a href="#hr">
            <Users className="mr-2 h-4 w-4" /> HR Questions
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
        >
          <a href="#coding">
            <FileQuestion className="mr-2 h-4 w-4" /> Coding Questions
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
              Mock tests for online round
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
