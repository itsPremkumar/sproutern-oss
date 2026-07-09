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
  Brain,
  Target,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Google Interview Questions - Complete Guide',
  description:
    'Complete list of Google interview questions for software engineers. Technical, behavioral, Googleyness, and coding questions with detailed answers.',
  keywords: [
    'Google interview questions',
    'Google technical questions',
    'Googleyness questions',
    'Google coding interview',
    'Google system design',
  ],
  canonical: '/companies/google/interview-questions',
});

const technicalQuestions = [
  {
    question: 'What is the difference between a process and a thread?',
    answer:
      'A process is an independent program in execution with its own memory space. A thread is a lightweight unit of execution within a process that shares the same memory. Processes are isolated and more resource-intensive, while threads allow parallel execution within a single process. Context switching between threads is faster than between processes.',
  },
  {
    question: 'Explain how HashMap works internally in Java.',
    answer:
      'HashMap uses an array of buckets with linked lists (or trees in Java 8+). Keys are hashed using hashCode(), and the index is calculated using hash % array_length. Collisions are handled via chaining. When load factor exceeds 0.75, the array is resized. Java 8 converts linked lists to red-black trees when bucket size exceeds 8 for O(log n) lookup.',
  },
  {
    question: 'What is the CAP theorem?',
    answer:
      'CAP theorem states that a distributed system can only guarantee two of three properties: Consistency (all nodes see the same data), Availability (every request receives a response), and Partition Tolerance (system continues despite network failures). In practice, partition tolerance is required, so systems choose between CP (like HBase) or AP (like Cassandra).',
  },
  {
    question: 'Explain the difference between SQL and NoSQL databases.',
    answer:
      'SQL databases are relational, use structured schemas, support ACID transactions, and use SQL for queries (MySQL, PostgreSQL). NoSQL databases are non-relational, schema-flexible, optimized for specific use cases: document stores (MongoDB), key-value (Redis), column-family (Cassandra), graph (Neo4j). NoSQL scales horizontally better but may sacrifice consistency.',
  },
  {
    question: 'What is a distributed system and what challenges does it face?',
    answer:
      'A distributed system is a collection of autonomous computers that appear as a single coherent system. Challenges include: network failures, latency, partial failures, consistency, ordering of events, consensus, and debugging complexity. Key concepts: replication, partitioning, consensus protocols (Paxos, Raft), vector clocks.',
  },
  {
    question: 'Explain the concept of load balancing.',
    answer:
      'Load balancing distributes incoming requests across multiple servers to prevent overload. Types: Round-robin (sequential distribution), Least connections (send to least busy), IP hash (consistent routing), Weighted (based on server capacity). Google uses advanced load balancing with Maglev and global anycast for its services.',
  },
  {
    question: 'What are microservices and their advantages/disadvantages?',
    answer:
      'Microservices architecture breaks applications into small, independent services. Advantages: independent deployment, technology diversity, scalability, fault isolation. Disadvantages: network latency, distributed system complexity, data consistency challenges, operational overhead. Google uses microservices extensively with gRPC for inter-service communication.',
  },
  {
    question:
      'Explain the concept of caching and cache invalidation strategies.',
    answer:
      'Caching stores frequently accessed data for faster retrieval. Strategies: Write-through (write to cache and DB simultaneously), Write-back (write to cache first, async to DB), Write-around (write to DB only). Invalidation: TTL-based, event-based, LRU eviction. "There are only two hard things in CS: cache invalidation and naming things."',
  },
  {
    question: 'What is eventual consistency and when would you use it?',
    answer:
      'Eventual consistency guarantees that if no new updates are made, all replicas will eventually converge to the same value. Used when availability is prioritized over immediate consistency. Examples: social media feeds, shopping cart counts, DNS. Contrasts with strong consistency where reads always return the latest write.',
  },
  {
    question: 'Explain MapReduce and its use cases.',
    answer:
      'MapReduce is a programming model for processing large datasets across distributed clusters. Map phase: transforms input into key-value pairs. Reduce phase: aggregates values by key. Used for: log analysis, indexing, data transformation, machine learning. Google invented it but now uses more advanced systems like Flume and Dataflow.',
  },
];

const googleynessBehavioralQuestions = [
  {
    question:
      'Tell me about a time you had to work with incomplete information.',
    answer:
      'Use STAR method. Describe a project where requirements were unclear. Show how you: gathered available data, made reasonable assumptions, validated with stakeholders, iterated based on feedback. Emphasize comfort with ambiguity and proactive information gathering. Google values people who can make progress despite uncertainty.',
  },
  {
    question:
      'Describe a situation where you received difficult feedback. How did you handle it?',
    answer:
      'Share a genuine example of constructive criticism. Explain your initial reaction, how you reflected on it, and specific changes you made. Show intellectual humility and growth mindset. Google values people who seek feedback and genuinely improve from it, not those who become defensive.',
  },
  {
    question: 'Tell me about a time you disagreed with a teammate or manager.',
    answer:
      'Describe the disagreement respectfully. Focus on: understanding their perspective first, presenting data-driven arguments, finding common ground, accepting the final decision gracefully. Show you can challenge ideas while maintaining relationships. Google wants healthy debate, not conflict avoidance or stubbornness.',
  },
  {
    question: 'Give an example of when you helped someone else succeed.',
    answer:
      'Share a specific instance of mentoring, pair programming, or supporting a colleague. Describe the situation, your actions, and the positive outcome for them. Google values collaborative people who elevate their teams, not just individual contributors.',
  },
  {
    question:
      'Describe a project where you had to quickly learn something new.',
    answer:
      'Choose an example showing learning agility. Explain your approach: resources used, questions asked, practice methods, timeline. Demonstrate curiosity and systematic learning. Google values continuous learners who can adapt to new technologies and domains quickly.',
  },
  {
    question: 'Tell me about a time you went above and beyond for a user.',
    answer:
      'Share an example where you prioritized user experience. Could be debugging a customer issue, improving accessibility, or anticipating user needs. Show empathy and user-first thinking. Google\'s mission is user-focused: "Focus on the user and all else will follow."',
  },
  {
    question: 'How do you prioritize when everything seems important?',
    answer:
      'Explain your framework: impact vs effort analysis, alignment with goals, stakeholder input, dependencies. Give a specific example. Show you can make tough tradeoffs and communicate them. Google moves fast and expects engineers to make good prioritization decisions independently.',
  },
  {
    question:
      'Describe a time when you had to push back on a stakeholder request.',
    answer:
      'Share an example where you advocated for the right technical or product decision. Explain how you: understood their need, identified concerns, proposed alternatives, reached agreement. Show you can be diplomatic but firm when something matters.',
  },
];

const codingQuestions = [
  {
    question: 'LRU Cache: Design and implement a Least Recently Used cache.',
    code: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    // Move to end (most recently used)
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
    // Evict oldest if over capacity
    if (this.cache.size > this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}

// Time: O(1) for both get and put
// Space: O(capacity)`,
  },
  {
    question: 'Find the longest substring without repeating characters.',
    code: `function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLength = 0;
  let start = 0;
  
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}

// Example: "abcabcbb" → 3 ("abc")
// Time: O(n), Space: O(min(m, n)) where m is charset size`,
  },
  {
    question: 'Merge K sorted linked lists efficiently.',
    code: `function mergeKLists(lists) {
  if (!lists.length) return null;
  
  // Min-heap approach using priority queue
  const minHeap = new MinPriorityQueue({ priority: x => x.val });
  
  // Add first node from each list
  for (const list of lists) {
    if (list) minHeap.enqueue(list);
  }
  
  const dummy = new ListNode(0);
  let current = dummy;
  
  while (!minHeap.isEmpty()) {
    const node = minHeap.dequeue().element;
    current.next = node;
    current = current.next;
    
    if (node.next) {
      minHeap.enqueue(node.next);
    }
  }
  
  return dummy.next;
}

// Time: O(N log K) where N is total nodes, K is number of lists
// Space: O(K) for the heap`,
  },
  {
    question: 'Word Ladder: Find shortest transformation sequence.',
    code: `function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  
  const queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);
  
  while (queue.length) {
    const [word, level] = queue.shift();
    
    if (word === endWord) return level;
    
    // Try all single-character transformations
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + 
                        String.fromCharCode(c) + 
                        word.slice(i + 1);
        
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }
  
  return 0;
}

// BFS guarantees shortest path
// Time: O(M² × N), Space: O(M × N)`,
  },
  {
    question: 'Design a rate limiter (sliding window counter).',
    code: `class RateLimiter {
  constructor(windowSizeMs, maxRequests) {
    this.windowSize = windowSizeMs;
    this.maxRequests = maxRequests;
    this.requests = new Map(); // userId -> [timestamps]
  }
  
  isAllowed(userId) {
    const now = Date.now();
    const windowStart = now - this.windowSize;
    
    if (!this.requests.has(userId)) {
      this.requests.set(userId, []);
    }
    
    const timestamps = this.requests.get(userId);
    
    // Remove expired timestamps
    while (timestamps.length && timestamps[0] <= windowStart) {
      timestamps.shift();
    }
    
    if (timestamps.length >= this.maxRequests) {
      return false;
    }
    
    timestamps.push(now);
    return true;
  }
}

// Usage: Allow 100 requests per minute
const limiter = new RateLimiter(60000, 100);`,
  },
  {
    question: 'Serialize and deserialize a binary tree.',
    code: `function serialize(root) {
  const result = [];
  
  function dfs(node) {
    if (!node) {
      result.push('null');
      return;
    }
    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }
  
  dfs(root);
  return result.join(',');
}

function deserialize(data) {
  const values = data.split(',');
  let index = 0;
  
  function dfs() {
    if (values[index] === 'null') {
      index++;
      return null;
    }
    
    const node = new TreeNode(parseInt(values[index]));
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  
  return dfs();
}

// Preorder traversal ensures unique serialization
// Time: O(n), Space: O(n)`,
  },
];

const systemDesignTopics = [
  {
    topic: 'Design Google Search',
    keyPoints: [
      'Web crawling at petabyte scale',
      'Inverted index for fast lookups',
      'PageRank for relevance ranking',
      'Query parsing and spelling correction',
      'Sharding by document ID',
      'Caching popular queries',
    ],
  },
  {
    topic: 'Design YouTube',
    keyPoints: [
      'Video upload and transcoding pipeline',
      'CDN for global video delivery',
      'Recommendation system (collaborative filtering)',
      'Live streaming with adaptive bitrate',
      'View count with eventual consistency',
      'Comment system at scale',
    ],
  },
  {
    topic: 'Design Google Drive',
    keyPoints: [
      'File chunking and deduplication',
      'Sync across devices (operational transforms)',
      'Sharing and permissions model',
      'Versioning and conflict resolution',
      'Metadata storage vs file storage',
      'Offline support',
    ],
  },
  {
    topic: 'Design Gmail',
    keyPoints: [
      'Email storage and threading',
      'Spam detection (ML-based)',
      'Full-text search over billions of emails',
      'Push notifications',
      'Labels and filters',
      'IMAP/SMTP protocol handling',
    ],
  },
];

export default function GoogleInterviewQuestionsPage() {
  return (
    <div className="container max-w-5xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0"
        >
          <Link href="/companies/google">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Google
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Google Interview Questions</h1>
        <p className="text-xl text-muted-foreground">
          Complete collection of technical, behavioral, and coding questions
          asked in Google interviews. Master these to crack your Google
          interview.
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
          <a href="#googleyness">
            <Target className="mr-2 h-4 w-4" /> Googleyness (8)
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
            <Brain className="mr-2 h-4 w-4" /> System Design (4)
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

      {/* Googleyness & Behavioral Questions */}
      <section
        id="googleyness"
        className="mb-16"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6 text-primary" />
          Googleyness & Behavioral Questions
        </h2>
        <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Pro Tip:</strong> Googleyness is as important as technical
            skills. Prepare 8-10 STAR stories covering collaboration, feedback,
            ambiguity, and user focus.
          </p>
        </div>
        <div className="space-y-4">
          {googleynessBehavioralQuestions.map((q, index) => (
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
        <div className="grid gap-4 md:grid-cols-2">
          {systemDesignTopics.map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{topic.topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
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
          Pro Tips for Google Interviews
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">1.</span>
            <span>
              Practice on Google Docs - actual phone screens are conducted
              there. Get comfortable coding without autocomplete or syntax
              highlighting.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">2.</span>
            <span>
              Think aloud constantly. Google interviewers evaluate your
              problem-solving approach as much as the final answer.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">3.</span>
            <span>
              For system design, study Google&apos;s research papers: MapReduce,
              GFS, Bigtable, Spanner, and Borg. These reveal how Google thinks
              at scale.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-primary">4.</span>
            <span>
              Many candidates succeed on their 2nd or 3rd attempt. There&apos;s
              a 6-month cooldown, so use rejection as learning and try again.
            </span>
          </li>
        </ul>
      </section>

      {/* Related Resources */}
      <section className="rounded-2xl bg-muted/50 p-8">
        <h2 className="mb-6 text-xl font-bold">Prepare More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/companies/google"
            className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="mb-1 font-semibold">Google Careers</h4>
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
