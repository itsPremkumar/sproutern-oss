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
  Target,
  Award,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Amazon Interview Questions- Leadership Principles & Coding',
  description:
    'Complete list of Amazon interview questions for software engineers. Leadership Principles, technical, behavioral, and coding questions with detailed answers.',
  keywords: [
    'Amazon interview questions',
    'Amazon Leadership Principles',
    'Amazon coding interview',
    'Amazon behavioral interview',
    'Amazon SDE interview',
  ],
  canonical: '/companies/amazon/interview-questions',
});

const leadershipPrinciplesQuestions = [
  {
    principle: 'Customer Obsession',
    question: 'Tell me about a time you went above and beyond for a customer.',
    answer:
      "Structure with STAR: Describe a specific customer issue, your initiative to resolve it beyond normal expectations, and the positive impact. Emphasize understanding the customer's need, not just the request. Amazon wants leaders who start with the customer and work backward.",
  },
  {
    principle: 'Ownership',
    question:
      'Describe a time when you took on something outside your responsibility.',
    answer:
      "Share an example where you identified a problem no one was addressing and took initiative. Show you think long-term, don't sacrifice for short-term results, and never say \"that's not my job.\" Owners don't blame others.",
  },
  {
    principle: 'Invent and Simplify',
    question:
      'Tell me about a time you found a simple solution to a complex problem.',
    answer:
      'Describe an innovation or simplification you introduced. Show you seek new ideas from everywhere, aren\'t limited by "not invented here," and accept being misunderstood while innovating. Balance creativity with practicality.',
  },
  {
    principle: 'Are Right, A Lot',
    question:
      'Tell me about a time you had to make a decision with incomplete information.',
    answer:
      'Explain your decision-making process: how you gathered available data, weighed options, made a judgment call, and course-corrected if needed. Show good judgment and willingness to challenge your own beliefs with new data.',
  },
  {
    principle: 'Learn and Be Curious',
    question: "What's something you've taught yourself recently?",
    answer:
      "Share a genuine learning example: new technology, domain knowledge, or skill. Describe your learning process and how you applied it. Show you're never done learning and continuously seek self-improvement.",
  },
  {
    principle: 'Hire and Develop the Best',
    question: "Tell me about someone you've mentored or helped grow.",
    answer:
      'Describe specific mentoring: identifying their potential, creating growth opportunities, providing feedback. Show you raise the performance bar and recognize talent. Leaders develop leaders.',
  },
  {
    principle: 'Insist on the Highest Standards',
    question: 'Tell me about a time you refused to compromise on quality.',
    answer:
      'Share when you pushed back on cutting corners. Show you have relentlessly high standards others might think unreasonable. Explain how you ensured quality while meeting deadlines.',
  },
  {
    principle: 'Think Big',
    question: 'Describe your boldest professional idea.',
    answer:
      'Share a vision or initiative that was ambitious. Show you think differently and look around corners. Big thinking inspires results and attracts talent. Bold direction creates breakthroughs.',
  },
  {
    principle: 'Bias for Action',
    question: 'Tell me about a time you took a calculated risk.',
    answer:
      "Describe a situation where you acted quickly despite uncertainty. Show you value speed and calculated risk-taking. Many decisions are reversible - they don't need extensive study.",
  },
  {
    principle: 'Frugality',
    question: "Describe how you've done more with less.",
    answer:
      'Share an example of resourcefulness: optimizing costs, reusing solutions, or achieving goals with constraints. Show you accomplish more with fewer resources. Constraints breed resourcefulness.',
  },
  {
    principle: 'Earn Trust',
    question: "Tell me about a time you had to earn someone's trust.",
    answer:
      'Describe building trust through listening, speaking candidly, treating others respectfully. Show you are vocally self-critical and acknowledge mistakes. Trust is earned through actions.',
  },
  {
    principle: 'Dive Deep',
    question:
      'Tell me about a time you had to get into the details to solve a problem.',
    answer:
      "Share an example where surface-level analysis wasn't enough. Show you operate at all levels, stay connected to details, and question when metrics differ from anecdotes. No task is beneath you.",
  },
  {
    principle: 'Have Backbone; Disagree and Commit',
    question:
      'Describe a time you disagreed with a decision but still committed.',
    answer:
      "Explain a principled disagreement: how you advocated your position, respected the final decision even if different, and fully committed. Show you challenge decisions respectfully but don't compromise for social cohesion.",
  },
  {
    principle: 'Deliver Results',
    question:
      'Tell me about your most significant professional accomplishment.',
    answer:
      'Share a result with measurable impact. Focus on key business inputs, delivering with quality and timeliness. Show you rise to challenges and never settle. Quantify impact wherever possible.',
  },
];

const technicalQuestions = [
  {
    question: 'Explain the difference between ArrayList and LinkedList.',
    answer:
      'ArrayList uses dynamic array (O(1) random access, O(n) insertion). LinkedList uses doubly-linked nodes (O(n) access, O(1) insertion if position known). ArrayList is better for read-heavy operations; LinkedList for frequent insertions/deletions. ArrayList has better cache locality.',
  },
  {
    question:
      'What is the difference between an interface and an abstract class?',
    answer:
      'Interface: contract defining methods (all public), supports multiple inheritance, no state (pre-Java 8). Abstract class: partial implementation, single inheritance, can have state and constructors. Use interfaces for capabilities (Comparable), abstract classes for shared behavior in hierarchy.',
  },
  {
    question: 'Explain database indexing and when to use it.',
    answer:
      'Index is a data structure (B-tree, hash) that speeds up lookups at cost of write performance and storage. Use for: frequently queried columns, WHERE clauses, JOIN conditions, ORDER BY. Avoid for: small tables, frequently updated columns, low-cardinality columns.',
  },
  {
    question:
      'What is the difference between optimistic and pessimistic locking?',
    answer:
      'Pessimistic: locks data preemptively (SELECT FOR UPDATE), prevents conflicts but reduces concurrency. Optimistic: assumes no conflict, checks version at commit (CAS), retries if conflict. Use pessimistic for high-contention, optimistic for read-heavy with rare conflicts.',
  },
  {
    question: 'Explain what happens when you type a URL in a browser.',
    answer:
      'DNS lookup → TCP handshake → TLS handshake (HTTPS) → HTTP request → Server processing → HTTP response → Browser parsing (HTML → DOM, CSS → CSSOM) → Render tree → Layout → Paint → JavaScript execution. Each step has optimization opportunities.',
  },
  {
    question: 'How would you design a system to handle high traffic?',
    answer:
      'Horizontal scaling, load balancing, caching (CDN, Redis), database sharding/replication, async processing (SQS), microservices with circuit breakers, connection pooling, rate limiting. Monitor and auto-scale based on metrics. Amazon uses all of these.',
  },
];

const codingQuestions = [
  {
    question: 'Two Sum: Find indices of two numbers that add up to target.',
    code: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Example: twoSum([2, 7, 11, 15], 9) → [0, 1]
// Time: O(n), Space: O(n)`,
  },
  {
    question: 'Valid Parentheses: Check if brackets are balanced.',
    code: `function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  
  return stack.length === 0;
}

// Example: isValid("([]){}") → true
// Time: O(n), Space: O(n)`,
  },
  {
    question: 'Number of Islands: Count connected components in a grid.',
    code: `function numIslands(grid) {
  if (!grid.length) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  
  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || 
        grid[r][c] === '0') return;
    
    grid[r][c] = '0'; // Mark visited
    
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  
  return count;
}

// Time: O(rows × cols), Space: O(rows × cols) for recursion`,
  },
  {
    question: 'LRU Cache: Implement get and put with O(1) time.',
    code: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// Map maintains insertion order in JavaScript
// Time: O(1), Space: O(capacity)`,
  },
  {
    question: 'Meeting Rooms II: Find minimum rooms needed.',
    code: `function minMeetingRooms(intervals) {
  if (!intervals.length) return 0;
  
  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);
  
  let rooms = 0;
  let maxRooms = 0;
  let s = 0, e = 0;
  
  while (s < intervals.length) {
    if (starts[s] < ends[e]) {
      rooms++;
      s++;
    } else {
      rooms--;
      e++;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }
  
  return maxRooms;
}

// Example: [[0,30],[5,10],[15,20]] → 2
// Time: O(n log n), Space: O(n)`,
  },
  {
    question: 'Word Search: Find if word exists in grid.',
    code: `function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  function dfs(r, c, index) {
    if (index === word.length) return true;
    
    if (r < 0 || r >= rows || c < 0 || c >= cols || 
        board[r][c] !== word[index]) return false;
    
    const temp = board[r][c];
    board[r][c] = '#'; // Mark visited
    
    const found = dfs(r + 1, c, index + 1) ||
                  dfs(r - 1, c, index + 1) ||
                  dfs(r, c + 1, index + 1) ||
                  dfs(r, c - 1, index + 1);
    
    board[r][c] = temp; // Backtrack
    return found;
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  
  return false;
}

// Time: O(rows × cols × 4^word.length)`,
  },
];

export default function AmazonInterviewQuestionsPage() {
  return (
    <div className="container max-w-5xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0"
        >
          <Link href="/companies/amazon">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Amazon
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Amazon Interview Questions</h1>
        <p className="text-xl text-muted-foreground">
          Master Amazon&apos;s Leadership Principles and technical interview
          with this comprehensive question bank. Amazon focuses heavily on
          LP-based behavioral questions.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12 flex flex-wrap gap-4">
        <Button
          asChild
          variant="outline"
        >
          <a href="#leadership-principles">
            <Award className="mr-2 h-4 w-4" /> Leadership Principles (14)
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
        >
          <a href="#technical">
            <Code className="mr-2 h-4 w-4" /> Technical (6)
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

      {/* Leadership Principles Intro */}
      <section className="mb-8 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
        <h2 className="mb-2 text-lg font-semibold text-orange-800 dark:text-orange-200">
          Amazon&apos;s 14 Leadership Principles
        </h2>
        <p className="text-sm text-orange-700 dark:text-orange-300">
          Amazon interviews are famous for LP-based questions. Prepare 2-3 STAR
          stories for each principle. Interviewers are trained to probe deeply
          with follow-ups like &quot;What did YOU specifically do?&quot; and
          &quot;What would you do differently?&quot;
        </p>
      </section>

      {/* Leadership Principles Questions */}
      <section
        id="leadership-principles"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Award className="h-6 w-6 text-primary" />
          Leadership Principles Questions
        </h2>
        <div className="space-y-4">
          {leadershipPrinciplesQuestions.map((q, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 inline-block rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  {q.principle}
                </div>
                <CardTitle className="text-lg">{q.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{q.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
          Pro Tips for Amazon Interviews
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">1.</span>
            <span>
              Memorize all 14 Leadership Principles and have specific examples
              for each. Amazon interviewers will explicitly ask about LPs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">2.</span>
            <span>
              Use the STAR method (Situation, Task, Action, Result) with
              emphasis on YOUR specific contribution, not the team&apos;s.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">3.</span>
            <span>
              Amazon loves &quot;Dive Deep&quot; - be prepared to explain
              technical decisions at multiple levels of detail. Know your
              projects inside out.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">4.</span>
            <span>
              Quantify everything. &quot;Reduced latency by 40%&quot; beats
              &quot;improved performance.&quot; Amazon is data-driven; your
              answers should be too.
            </span>
          </li>
        </ul>
      </section>

      {/* Related Resources */}
      <section className="rounded-2xl bg-muted/50 p-8">
        <h2 className="mb-6 text-xl font-bold">Prepare More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/companies/amazon"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">Amazon Careers</h4>
            <p className="text-sm text-muted-foreground">
              Salary, teams, and benefits
            </p>
          </Link>
          <Link
            href="/tools/mock-interview"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">Mock Interviews</h4>
            <p className="text-sm text-muted-foreground">
              Practice with AI feedback
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
