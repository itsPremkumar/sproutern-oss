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
  Brain,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Microsoft Interview Questions - Complete Guide',
  description:
    'Complete list of Microsoft interview questions for software engineers. Technical, behavioral, system design, and coding questions with detailed answers.',
  keywords: [
    'Microsoft interview questions',
    'Microsoft technical questions',
    'Microsoft coding interview',
    'Microsoft SDE interview',
    'Azure interview questions',
  ],
  canonical: '/companies/microsoft/interview-questions',
});

const technicalQuestions = [
  {
    question: 'Explain the difference between stack and heap memory.',
    answer:
      'Stack: automatic memory for local variables, LIFO allocation, fast, fixed size, deallocated when function returns. Heap: dynamic memory for objects, programmer-controlled (or garbage collected), slower, variable size, persists until explicitly freed. Stack overflow occurs when too much stack memory is used (e.g., deep recursion).',
  },
  {
    question: 'What is polymorphism? Explain with examples.',
    answer:
      'Polymorphism means "many forms." Compile-time (static): method overloading, operator overloading. Runtime (dynamic): method overriding using virtual functions. Example: Animal base class with speak() method, Dog and Cat override it differently. Enables writing code against interfaces, not implementations.',
  },
  {
    question: 'Explain the SOLID principles.',
    answer:
      'S: Single Responsibility - one reason to change. O: Open/Closed - open for extension, closed for modification. L: Liskov Substitution - subtypes must be substitutable. I: Interface Segregation - many specific interfaces over one general. D: Dependency Inversion - depend on abstractions, not concretions.',
  },
  {
    question: 'What is the difference between REST and GraphQL?',
    answer:
      'REST: multiple endpoints, fixed response structure, over/under-fetching issues, HTTP semantics. GraphQL: single endpoint, client specifies exact data needed, eliminates over-fetching, typed schema, requires more setup. Microsoft uses both; Azure has strong REST APIs while some newer services use GraphQL.',
  },
  {
    question: 'Explain garbage collection and its types.',
    answer:
      'Garbage collection automatically reclaims unused memory. Types: Reference counting (counts references, cyclic reference issues), Mark-and-sweep (marks reachable objects, sweeps unmarked), Generational (objects in generations, young collected frequently). .NET uses generational GC with three generations; Java HotSpot uses G1GC.',
  },
  {
    question: 'What is a deadlock? How do you prevent it?',
    answer:
      'Deadlock: circular wait where processes hold resources while waiting for others. Four conditions: mutual exclusion, hold and wait, no preemption, circular wait. Prevention: break any condition - lock ordering, timeout, try-lock with backoff, avoid holding multiple locks.',
  },
  {
    question: 'Explain the difference between HTTP/1.1, HTTP/2, and HTTP/3.',
    answer:
      'HTTP/1.1: text-based, one request per connection, head-of-line blocking. HTTP/2: binary framing, multiplexing, header compression, server push. HTTP/3: uses QUIC over UDP, faster handshakes, better mobile performance, no head-of-line blocking at transport layer. Azure optimizes for HTTP/2 and HTTP/3.',
  },
  {
    question: 'What is dependency injection and why use it?',
    answer:
      'DI is passing dependencies to a class rather than creating them internally. Benefits: testability (mock dependencies), loose coupling, flexibility (swap implementations). Types: constructor injection (preferred), setter injection, interface injection. .NET Core has built-in DI container.',
  },
  {
    question:
      'Explain Azure App Service vs Azure Functions vs Azure Kubernetes Service.',
    answer:
      'App Service: managed PaaS for web apps, easy deployment, auto-scaling. Azure Functions: serverless, event-driven, pay-per-execution, short-lived. AKS: managed Kubernetes, full container orchestration, complex but flexible. Choose based on: control needs, scaling patterns, cost model, existing containerization.',
  },
  {
    question:
      'What is the difference between authentication and authorization?',
    answer:
      'Authentication: verifying identity (who you are) - passwords, MFA, OAuth tokens. Authorization: verifying permissions (what you can do) - RBAC, claims, policies. Microsoft uses Azure AD for identity, supports OAuth 2.0, OpenID Connect. Always authenticate first, then authorize.',
  },
];

const behavioralQuestions = [
  {
    question: 'Tell me about yourself and why Microsoft.',
    answer:
      'Structure: current role, key achievements, why transition to Microsoft. Research Microsoft\'s mission ("empower every person and organization") and connect it to your values. Mention specific products or initiatives that excite you - Azure, Windows, Teams, AI (Copilot).',
  },
  {
    question: 'Describe a challenging project and how you handled it.',
    answer:
      'Use STAR method focusing on technical and interpersonal challenges. Show problem-solving, collaboration, and learning. Microsoft values "growth mindset" - include what you learned and would do differently. Quantify impact where possible.',
  },
  {
    question: 'How do you handle disagreements with teammates?',
    answer:
      'Describe a specific disagreement. Show: active listening, understanding their perspective, data-driven discussion, willingness to be wrong, commitment to the final decision. Microsoft values "disagree and commit" - constructive conflict leads to better outcomes.',
  },
  {
    question: 'Tell me about a time you failed.',
    answer:
      "Share a genuine failure, not a humble brag. Focus on: what happened, your accountability, what you learned, how you applied that learning. Microsoft's growth mindset culture values learning from failures. Show resilience and self-awareness.",
  },
  {
    question: 'How do you stay current with technology?',
    answer:
      'Describe specific learning methods: online courses, documentation, side projects, conferences, communities. Give recent examples of technologies learned. Microsoft looks for lifelong learners who adapt to fast-changing tech landscape.',
  },
  {
    question: 'Describe a time you had to work with a difficult person.',
    answer:
      'Focus on: understanding their perspective, finding common ground, professional communication, achieving results despite friction. Don\'t be negative about others. Microsoft values collaboration and "One Microsoft" culture.',
  },
  {
    question: 'How do you prioritize when everything is urgent?',
    answer:
      'Explain your framework: business impact, stakeholder needs, dependencies, quick wins vs long-term. Give a specific example. Show communication with stakeholders about tradeoffs. Microsoft operates at scale; prioritization is crucial.',
  },
  {
    question: 'What questions do you have for us?',
    answer:
      'Ask thoughtful questions: team culture, current challenges, tech stack, growth opportunities, how success is measured. Avoid salary/benefits in technical rounds. Show genuine curiosity about the role and opportunity to contribute.',
  },
];

const codingQuestions = [
  {
    question: 'Reverse a linked list iteratively and recursively.',
    code: `// Iterative
function reverseListIterative(head) {
  let prev = null;
  let current = head;
  
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Recursive
function reverseListRecursive(head) {
  if (!head || !head.next) return head;
  
  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
}

// Time: O(n), Space: O(1) iterative, O(n) recursive`,
  },
  {
    question: 'Find the kth largest element in an unsorted array.',
    code: `// Using QuickSelect (average O(n))
function findKthLargest(nums, k) {
  const target = nums.length - k;
  
  function quickSelect(left, right) {
    const pivot = nums[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
      if (nums[j] <= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    
    [nums[i], nums[right]] = [nums[right], nums[i]];
    
    if (i === target) return nums[i];
    if (i < target) return quickSelect(i + 1, right);
    return quickSelect(left, i - 1);
  }
  
  return quickSelect(0, nums.length - 1);
}

// Average: O(n), Worst: O(n²)
// Alternative: Use min-heap of size k for O(n log k)`,
  },
  {
    question: 'Implement a binary search tree with insert, search, and delete.',
    code: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
      return;
    }
    
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }
  
  search(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }
    return false;
  }
  
  // Delete: handle 3 cases (no child, one child, two children)
}

// Time: O(log n) average, O(n) worst for skewed tree`,
  },
  {
    question: 'Detect cycle in a linked list and find the start of the cycle.',
    code: `function detectCycle(head) {
  if (!head || !head.next) return null;
  
  let slow = head;
  let fast = head;
  
  // Detect cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      // Find cycle start
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  
  return null;
}

// Floyd's Cycle Detection (Tortoise and Hare)
// Time: O(n), Space: O(1)`,
  },
  {
    question: 'Implement a min stack with O(1) getMin operation.',
    code: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  
  push(val) {
    this.stack.push(val);
    
    if (!this.minStack.length || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }
  
  pop() {
    const val = this.stack.pop();
    
    if (val === this.getMin()) {
      this.minStack.pop();
    }
    
    return val;
  }
  
  top() {
    return this.stack[this.stack.length - 1];
  }
  
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// All operations O(1) time
// Space: O(n) for both stacks`,
  },
  {
    question: 'Clone a graph with cycles.',
    code: `function cloneGraph(node) {
  if (!node) return null;
  
  const visited = new Map();
  
  function dfs(original) {
    if (visited.has(original)) {
      return visited.get(original);
    }
    
    const copy = new Node(original.val);
    visited.set(original, copy);
    
    for (const neighbor of original.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }
    
    return copy;
  }
  
  return dfs(node);
}

// Map prevents infinite loops on cycles
// Time: O(V + E), Space: O(V)`,
  },
];

const systemDesignTopics = [
  {
    topic: 'Design Microsoft Teams',
    keyPoints: [
      'Real-time messaging (WebSocket, SignalR)',
      'Video/audio calling (WebRTC, SFU)',
      'File sharing (SharePoint integration)',
      'Presence system',
      'Channel and thread architecture',
      'Notifications across devices',
    ],
  },
  {
    topic: 'Design OneDrive',
    keyPoints: [
      'File sync engine (delta sync)',
      'Deduplication and compression',
      'Conflict resolution',
      'Sharing and permissions (Azure AD)',
      'Mobile offline support',
      'Ransomware detection',
    ],
  },
  {
    topic: 'Design Azure Load Balancer',
    keyPoints: [
      'Layer 4 vs Layer 7 load balancing',
      'Health probes and failover',
      'Session affinity options',
      'Cross-region distribution (Traffic Manager)',
      'DDoS protection integration',
      'High availability zones',
    ],
  },
];

export default function MicrosoftInterviewQuestionsPage() {
  return (
    <div className="container max-w-5xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0"
        >
          <Link href="/companies/microsoft">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Microsoft
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          Microsoft Interview Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to Microsoft&apos;s technical and behavioral
          interviews. Focus on fundamentals, system design, and growth mindset.
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
          <a href="#behavioral">
            <Users className="mr-2 h-4 w-4" /> Behavioral (8)
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
        <Button
          asChild
          variant="outline"
        >
          <a href="#system-design">
            <Brain className="mr-2 h-4 w-4" /> System Design (3)
          </a>
        </Button>
      </div>

      {/* Microsoft Culture Note */}
      <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
        <h2 className="mb-2 text-lg font-semibold text-blue-800 dark:text-blue-200">
          Microsoft&apos;s Growth Mindset Culture
        </h2>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Under Satya Nadella, Microsoft transformed its culture around
          &quot;growth mindset&quot; - learning from failures, embracing
          challenges, and constantly improving. Show this mindset in your
          interviews: be curious, acknowledge what you don&apos;t know, and
          demonstrate how you learn.
        </p>
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

      {/* Behavioral Questions */}
      <section
        id="behavioral"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Users className="h-6 w-6 text-primary" />
          Behavioral Interview Questions
        </h2>
        <div className="space-y-4">
          {behavioralQuestions.map((q, index) => (
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

      {/* System Design */}
      <section
        id="system-design"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Brain className="h-6 w-6 text-primary" />
          System Design Topics
        </h2>
        <div className="grid gap-4 md:grid-cols-1">
          {systemDesignTopics.map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{topic.topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-1 text-sm text-muted-foreground md:grid-cols-2">
                  {topic.keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-16 rounded-2xl bg-primary/5 p-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <MessageSquare className="h-5 w-5 text-primary" />
          Pro Tips for Microsoft Interviews
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">1.</span>
            <span>
              Microsoft loves fundamentals. Understand CS basics deeply - data
              structures, algorithms, OOP, OS concepts. They may ask you to
              implement things from scratch.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">2.</span>
            <span>
              Know Azure basics even if not applying for a cloud role. Microsoft
              is cloud-first; understanding their ecosystem shows genuine
              interest.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">3.</span>
            <span>
              Show growth mindset - be comfortable saying &quot;I don&apos;t
              know, but here&apos;s how I&apos;d figure it out.&quot; Curiosity
              matters more than knowing everything.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">4.</span>
            <span>
              Microsoft asks follow-up questions to probe depth. After solving a
              problem, expect: &quot;How would you handle X edge case?&quot; or
              &quot;What if the input is 10x larger?&quot;
            </span>
          </li>
        </ul>
      </section>

      {/* Related Resources */}
      <section className="rounded-2xl bg-muted/50 p-8">
        <h2 className="mb-6 text-xl font-bold">Prepare More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/companies/microsoft"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">Microsoft Careers</h4>
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
