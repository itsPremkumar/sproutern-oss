import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Target,
  DollarSign,
  Code,
  Briefcase,
  Award,
  Globe,
  GraduationCap,
  Building2,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Server,
  Database,
  Network,
  Shield,
  Cpu,
  BarChart,
  GitBranch,
  Workflow,
  HardDrive,
  Gauge,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'System Design Interview: Complete Guide',
  description:
    'Master system design interviews. Learn scalability, databases, caching, load balancing, microservices, and how to design real-world systems like top engineers.',
  keywords: [
    'system design interview',
    'system design preparation',
    'scalability design',
    'distributed systems',
    'system design concepts',
    'design youtube',
    'design instagram',
    'microservices architecture',
    'load balancer design',
    'database scaling',
  ],
  openGraph: {
    title: 'System Design Interview: Complete Guide',
    description:
      'Ace your system design interviews with this comprehensive preparation guide.',
    type: 'article',
    publishedTime: '2025-12-22T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <Network className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Interview Preparation
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            System Design Interview: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            System design interviews test your ability to design scalable
            systems. This comprehensive guide covers all the concepts and
            patterns you need to ace your interviews.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>30 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. What is System Design?
              </a>
            </li>
            <li>
              <a
                href="#framework"
                className="text-primary hover:underline"
              >
                2. Interview Framework
              </a>
            </li>
            <li>
              <a
                href="#scalability"
                className="text-primary hover:underline"
              >
                3. Scalability Fundamentals
              </a>
            </li>
            <li>
              <a
                href="#databases"
                className="text-primary hover:underline"
              >
                4. Database Design
              </a>
            </li>
            <li>
              <a
                href="#caching"
                className="text-primary hover:underline"
              >
                5. Caching Strategies
              </a>
            </li>
            <li>
              <a
                href="#loadbalancing"
                className="text-primary hover:underline"
              >
                6. Load Balancing
              </a>
            </li>
            <li>
              <a
                href="#microservices"
                className="text-primary hover:underline"
              >
                7. Microservices vs Monolith
              </a>
            </li>
            <li>
              <a
                href="#messaging"
                className="text-primary hover:underline"
              >
                8. Message Queues
              </a>
            </li>
            <li>
              <a
                href="#examples"
                className="text-primary hover:underline"
              >
                9. Common Design Problems
              </a>
            </li>
            <li>
              <a
                href="#patterns"
                className="text-primary hover:underline"
              >
                10. Key Design Patterns
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                11. Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                12. Interview Tips
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-purple-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>System design tests architecture thinking, not coding</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Use a structured framework: requirements → design → trade-offs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Master core concepts: scaling, caching, load balancing,
                databases
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Practice designing YouTube, Twitter, Uber, and similar systems
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Communication and trade-off analysis matter as much as the
                design
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is System Design */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Network className="h-6 w-6 text-primary" />
            1. What is System Design?
          </h2>

          <p>
            <strong>System design</strong> is the process of defining the
            architecture, components, and data flow of a system to satisfy
            specified requirements. In interviews, you're asked to design
            real-world systems like URL shorteners, chat apps, or video
            streaming platforms.
          </p>

          <h3>Why System Design Matters</h3>
          <ul>
            <li>
              <strong>Senior Roles:</strong> Required for mid-level and above
            </li>
            <li>
              <strong>Real Impact:</strong> These decisions affect millions of
              users
            </li>
            <li>
              <strong>Trade-offs:</strong> No perfect solution; understand
              compromises
            </li>
            <li>
              <strong>Cost:</strong> Architecture affects infrastructure spend
            </li>
          </ul>

          <h3>What Interviewers Look For</h3>
          <ul>
            <li>Ability to clarify requirements</li>
            <li>High-level architecture thinking</li>
            <li>Understanding of trade-offs</li>
            <li>Knowledge of scaling patterns</li>
            <li>Clear communication</li>
          </ul>
        </section>

        {/* Section 2: Framework */}
        <section
          id="framework"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Workflow className="h-6 w-6 text-primary" />
            2. Interview Framework (4-Step Process)
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-bold text-blue-500">
                Step 1: Clarify Requirements (5 min)
              </p>
              <p className="mt-1 text-muted-foreground">
                Ask questions. Define scope. Understand constraints. Who are the
                users? What features are needed? What scale?
              </p>
              <ul className="mt-2 text-xs">
                <li>• Functional requirements (what the system does)</li>
                <li>
                  • Non-functional requirements (scale, latency, availability)
                </li>
                <li>• Constraints (budget, existing tech, timeline)</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold text-green-500">
                Step 2: High-Level Design (10 min)
              </p>
              <p className="mt-1 text-muted-foreground">
                Draw the big picture. Main components, how they connect, data
                flow. Keep it simple initially.
              </p>
              <ul className="mt-2 text-xs">
                <li>• API design (endpoints, methods)</li>
                <li>• Core components (services, databases)</li>
                <li>• Data flow diagram</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold text-orange-500">
                Step 3: Deep Dive (15-20 min)
              </p>
              <p className="mt-1 text-muted-foreground">
                Dive into critical components. Database schema, caching
                strategy, scaling approach. Show depth.
              </p>
              <ul className="mt-2 text-xs">
                <li>• Database design and sharding</li>
                <li>• Caching layers</li>
                <li>• Scaling strategies</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold text-purple-500">
                Step 4: Trade-offs & Wrap-up (5 min)
              </p>
              <p className="mt-1 text-muted-foreground">
                Discuss trade-offs, bottlenecks, and future improvements. Show
                awareness of limitations.
              </p>
              <ul className="mt-2 text-xs">
                <li>• Potential bottlenecks</li>
                <li>• Alternative approaches</li>
                <li>• Future evolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Scalability */}
        <section
          id="scalability"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            3. Scalability Fundamentals
          </h2>

          <h3>Vertical vs Horizontal Scaling</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Aspect</th>
                  <th className="p-3 text-left">Vertical (Scale Up)</th>
                  <th className="p-3 text-left">Horizontal (Scale Out)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Method</td>
                  <td className="p-3">Bigger server</td>
                  <td className="p-3">More servers</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cost</td>
                  <td className="p-3">Expensive at scale</td>
                  <td className="p-3">Cost-effective</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Limit</td>
                  <td className="p-3">Hardware ceiling</td>
                  <td className="p-3">Virtually unlimited</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Complexity</td>
                  <td className="p-3">Simpler</td>
                  <td className="p-3">More complex</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Downtime</td>
                  <td className="p-3">Required for upgrade</td>
                  <td className="p-3">Zero downtime possible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Back-of-Envelope Calculations</h3>
          <p>Estimate scale to inform design decisions:</p>
          <ul>
            <li>
              <strong>Daily Active Users (DAU):</strong> How many users per day?
            </li>
            <li>
              <strong>Requests Per Second (RPS):</strong> DAU × actions / 86,400
            </li>
            <li>
              <strong>Storage:</strong> Data per user × user count × retention
            </li>
            <li>
              <strong>Bandwidth:</strong> Request size × RPS
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Quick Numbers:</strong> 1 day ≈ 100K seconds. 1 million
              daily users doing 10 actions = 100 RPS. Twitter does ~300K RPS.
            </div>
          </div>
        </section>

        {/* Section 4: Databases */}
        <section
          id="databases"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Database className="h-6 w-6 text-primary" />
            4. Database Design
          </h2>

          <h3>SQL vs NoSQL</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">SQL (PostgreSQL, MySQL)</th>
                  <th className="p-3 text-left">NoSQL (MongoDB, DynamoDB)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Schema</td>
                  <td className="p-3">Fixed, structured</td>
                  <td className="p-3">Flexible, schemaless</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Relationships</td>
                  <td className="p-3">Excellent (JOINs)</td>
                  <td className="p-3">Denormalized</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Scaling</td>
                  <td className="p-3">Vertical (harder horizontal)</td>
                  <td className="p-3">Horizontal (built-in)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">ACID</td>
                  <td className="p-3">Strong</td>
                  <td className="p-3">Eventual consistency</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="p-3">Transactions, complex queries</td>
                  <td className="p-3">High write volume, flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Database Scaling Techniques</h3>
          <ul>
            <li>
              <strong>Read Replicas:</strong> Copies for read-heavy workloads
            </li>
            <li>
              <strong>Sharding:</strong> Split data across multiple databases
            </li>
            <li>
              <strong>Partitioning:</strong> Split tables by key ranges
            </li>
            <li>
              <strong>Connection Pooling:</strong> Reuse database connections
            </li>
          </ul>

          <h3>CAP Theorem</h3>
          <p>Distributed systems can only guarantee 2 of 3:</p>
          <ul>
            <li>
              <strong>Consistency:</strong> Every read receives the latest write
            </li>
            <li>
              <strong>Availability:</strong> Every request gets a response
            </li>
            <li>
              <strong>Partition Tolerance:</strong> System operates despite
              network failures
            </li>
          </ul>
          <p>
            In practice, you must tolerate partitions, so choose between
            consistency (CP) or availability (AP).
          </p>
        </section>

        {/* Section 5: Caching */}
        <section
          id="caching"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Gauge className="h-6 w-6 text-primary" />
            5. Caching Strategies
          </h2>

          <p>
            Caching reduces database load and improves response times. It's
            essential for any high-scale system.
          </p>

          <h3>Where to Cache</h3>
          <ul>
            <li>
              <strong>Client Cache:</strong> Browser, mobile app
            </li>
            <li>
              <strong>CDN:</strong> Edge locations for static content
            </li>
            <li>
              <strong>Application Cache:</strong> Redis, Memcached
            </li>
            <li>
              <strong>Database Cache:</strong> Query cache, connection pool
            </li>
          </ul>

          <h3>Cache Strategies</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Cache-Aside (Lazy Loading)
              </p>
              <p className="mt-1 text-muted-foreground">
                App checks cache first. If miss, fetch from DB and update cache.
                Most common pattern.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Write-Through</p>
              <p className="mt-1 text-muted-foreground">
                Write to cache and DB together. Data in cache is always fresh.
                Higher write latency.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">Write-Behind</p>
              <p className="mt-1 text-muted-foreground">
                Write to cache immediately, async write to DB. Fast writes but
                risk of data loss.
              </p>
            </div>
          </div>

          <h3>Cache Eviction Policies</h3>
          <ul>
            <li>
              <strong>LRU (Least Recently Used):</strong> Most common
            </li>
            <li>
              <strong>LFU (Least Frequently Used):</strong> Usage-based
            </li>
            <li>
              <strong>TTL (Time To Live):</strong> Expire after duration
            </li>
          </ul>
        </section>

        {/* Section 6: Load Balancing */}
        <section
          id="loadbalancing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            6. Load Balancing
          </h2>

          <p>
            Load balancers distribute traffic across multiple servers for
            reliability and scalability.
          </p>

          <h3>Load Balancing Algorithms</h3>
          <ul>
            <li>
              <strong>Round Robin:</strong> Simple rotation
            </li>
            <li>
              <strong>Least Connections:</strong> Route to least busy server
            </li>
            <li>
              <strong>IP Hash:</strong> Consistent routing by client IP
            </li>
            <li>
              <strong>Weighted:</strong> More powerful servers get more traffic
            </li>
          </ul>

          <h3>Layer 4 vs Layer 7</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">L4 (Transport)</th>
                  <th className="p-3 text-left">L7 (Application)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Routes by</td>
                  <td className="p-3">IP + Port</td>
                  <td className="p-3">HTTP headers, URL, cookies</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Speed</td>
                  <td className="p-3">Faster</td>
                  <td className="p-3">Slower (more processing)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Flexibility</td>
                  <td className="p-3">Limited</td>
                  <td className="p-3">Highly flexible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Microservices */}
        <section
          id="microservices"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            7. Microservices vs Monolith
          </h2>

          <h3>Monolithic Architecture</h3>
          <ul>
            <li>Single deployable unit</li>
            <li>Simpler development and deployment</li>
            <li>Shared database</li>
            <li>Scaling means scaling everything</li>
          </ul>

          <h3>Microservices Architecture</h3>
          <ul>
            <li>Independent services per business domain</li>
            <li>Each service has own database</li>
            <li>Independent scaling and deployment</li>
            <li>Complex but flexible</li>
          </ul>

          <h3>When to Use What</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Scenario</th>
                  <th className="p-3 text-left">Recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Small team, MVP</td>
                  <td className="p-3 text-green-600">Monolith</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Large scale, many teams</td>
                  <td className="p-3 text-blue-600">Microservices</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Need independent scaling</td>
                  <td className="p-3 text-blue-600">Microservices</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Quick iteration needed</td>
                  <td className="p-3 text-green-600">Monolith</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: Messaging */}
        <section
          id="messaging"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            8. Message Queues
          </h2>

          <p>
            Message queues enable async communication between services.
            Essential for decoupling and reliability.
          </p>

          <h3>Popular Message Queues</h3>
          <ul>
            <li>
              <strong>Kafka:</strong> High throughput, event streaming
            </li>
            <li>
              <strong>RabbitMQ:</strong> Traditional queue, flexible routing
            </li>
            <li>
              <strong>AWS SQS:</strong> Managed, simple queuing
            </li>
            <li>
              <strong>Redis:</strong> In-memory, fast pub/sub
            </li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li>
              <strong>Async Processing:</strong> Email sending, notifications
            </li>
            <li>
              <strong>Load Leveling:</strong> Handle traffic spikes
            </li>
            <li>
              <strong>Decoupling:</strong> Services don't need to know about
              each other
            </li>
            <li>
              <strong>Event Sourcing:</strong> Record all state changes
            </li>
          </ul>
        </section>

        {/* Section 9: Common Problems */}
        <section
          id="examples"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            9. Common Design Problems
          </h2>

          <h3>URL Shortener (Easy)</h3>
          <div className="not-prose my-4 rounded-lg border p-4 text-sm">
            <p className="font-bold">Key Components:</p>
            <ul className="mt-2 text-muted-foreground">
              <li>• Base62 encoding for short URLs</li>
              <li>• Key-value store (Redis) for mapping</li>
              <li>• Analytics service for click tracking</li>
            </ul>
          </div>

          <h3>Twitter/Feed (Medium)</h3>
          <div className="not-prose my-4 rounded-lg border p-4 text-sm">
            <p className="font-bold">Key Components:</p>
            <ul className="mt-2 text-muted-foreground">
              <li>• Fan-out on write vs fan-out on read</li>
              <li>• Celebrity handling (hybrid approach)</li>
              <li>• Timeline caching per user</li>
            </ul>
          </div>

          <h3>YouTube/Video Streaming (Hard)</h3>
          <div className="not-prose my-4 rounded-lg border p-4 text-sm">
            <p className="font-bold">Key Components:</p>
            <ul className="mt-2 text-muted-foreground">
              <li>• CDN for video delivery</li>
              <li>• Transcoding pipeline (different resolutions)</li>
              <li>• Adaptive bitrate streaming</li>
              <li>• Recommendation engine</li>
            </ul>
          </div>

          <h3>Uber/Ride Sharing (Hard)</h3>
          <div className="not-prose my-4 rounded-lg border p-4 text-sm">
            <p className="font-bold">Key Components:</p>
            <ul className="mt-2 text-muted-foreground">
              <li>• Geospatial indexing (QuadTree, Geohash)</li>
              <li>• Real-time location updates (WebSockets)</li>
              <li>• Matching algorithm</li>
              <li>• ETA calculation</li>
            </ul>
          </div>
        </section>

        {/* Section 10: Patterns */}
        <section
          id="patterns"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            10. Key Design Patterns
          </h2>

          <ul>
            <li>
              <strong>API Gateway:</strong> Single entry point for all clients
            </li>
            <li>
              <strong>Circuit Breaker:</strong> Prevent cascade failures
            </li>
            <li>
              <strong>Rate Limiting:</strong> Protect against abuse
            </li>
            <li>
              <strong>CQRS:</strong> Separate read and write models
            </li>
            <li>
              <strong>Event Sourcing:</strong> Store events, derive state
            </li>
            <li>
              <strong>Saga Pattern:</strong> Distributed transactions
            </li>
          </ul>
        </section>

        {/* Section 11: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            11. Learning Resources
          </h2>

          <h3>Books</h3>
          <ul>
            <li>
              <strong>Designing Data-Intensive Applications:</strong> The bible
            </li>
            <li>
              <strong>System Design Interview (Alex Xu):</strong>{' '}
              Interview-focused
            </li>
          </ul>

          <h3>Free Resources</h3>
          <ul>
            <li>
              <strong>ByteByteGo:</strong> YouTube channel, blog
            </li>
            <li>
              <strong>Gaurav Sen:</strong> Great explanations
            </li>
            <li>
              <strong>System Design Primer (GitHub):</strong> Comprehensive
            </li>
          </ul>

          <h3>Practice</h3>
          <ul>
            <li>Mock interviews with friends</li>
            <li>Design a new system weekly</li>
            <li>Review real system architectures (Netflix, Uber tech blogs)</li>
          </ul>
        </section>

        {/* Section 12: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            12. Interview Tips
          </h2>

          <ol>
            <li>
              <strong>Always Clarify:</strong> Don't assume. Ask questions
              first.
            </li>
            <li>
              <strong>Start Simple:</strong> Build complexity incrementally.
            </li>
            <li>
              <strong>Communicate:</strong> Think aloud. Explain your reasoning.
            </li>
            <li>
              <strong>Know Trade-offs:</strong> Every decision has pros and
              cons.
            </li>
            <li>
              <strong>Use Real Numbers:</strong> Back estimates with
              calculations.
            </li>
            <li>
              <strong>Draw Diagrams:</strong> Visual aids help understanding.
            </li>
            <li>
              <strong>Admit Unknowns:</strong> It's okay not to know everything.
            </li>
            <li>
              <strong>Practice:</strong> Design 15-20 systems before interviews.
            </li>
          </ol>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Design at Scale
          </h2>

          <p>
            System design interviews test your ability to think architecturally.
            With practice and understanding of core concepts, you can design
            systems that serve millions of users.
          </p>

          <p>
            Master the framework, learn the building blocks, and practice
            regularly. The ability to design scalable systems is what separates
            senior engineers from juniors.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Practice?</h4>
            <p className="mb-4 text-sm">
              Explore more interview preparation guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/interview-experiences"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Interview Experiences →
              </Link>
              <Link
                href="/tools/career-roadmap"
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Career Roadmap Tool →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="not-prose mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Written by Sproutern Career Team</p>
              <p className="text-sm text-muted-foreground">
                Helping students ace system design interviews
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/blog"
                className="rounded-lg bg-muted px-4 py-2 text-sm hover:bg-muted/80"
              >
                ← All Articles
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
