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
  Cpu,
  Zap,
  Server,
  Wifi,
  Cloud,
  Database,
  Shield,
  Smartphone,
  Factory,
  Car,
  Home,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Network,
  Activity,
  Timer,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edge Computing: Complete Beginners Guide',
  description:
    'Learn edge computing from scratch. Understand architecture, use cases, career opportunities, required skills, and how edge computing is transforming IoT, AI, and 5G.',
  keywords: [
    'edge computing',
    'edge computing careers',
    'edge computing tutorial',
    'fog computing',
    'edge ai',
    'edge computing vs cloud',
    'edge computing jobs',
    'edge computing salary',
    'iot edge computing',
    'aws wavelength',
  ],
  openGraph: {
    title: 'Edge Computing: Complete Beginners Guide',
    description:
      'Master edge computing fundamentals and launch your career in distributed computing.',
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
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <Server className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emerging Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Edge Computing: Complete Beginners Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Edge computing brings computation closer to where data is generated.
            This comprehensive guide covers everything you need to understand
            and build a career in edge computing.
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
              <span>20 min read</span>
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
                1. What is Edge Computing?
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                2. Why Edge Computing Matters
              </a>
            </li>
            <li>
              <a
                href="#architecture"
                className="text-primary hover:underline"
              >
                3. Edge Architecture
              </a>
            </li>
            <li>
              <a
                href="#usecases"
                className="text-primary hover:underline"
              >
                4. Use Cases & Applications
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="text-primary hover:underline"
              >
                5. Key Technologies
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                6. Career Paths & Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                7. Skills Required
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                8. Salary Expectations
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                9. Top Companies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                10. Hands-On Projects
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
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-indigo-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                Edge computing market projected to reach $232 billion by 2027
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                Reduces latency from 100ms+ (cloud) to &lt;10ms for real-time
                apps
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                75% of enterprise data will be processed at the edge by
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>Critical for 5G, IoT, autonomous vehicles, and AR/VR</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                Salaries range from ₹10-45 LPA in India to $100K-180K in the US
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Edge Computing */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            1. What is Edge Computing?
          </h2>

          <p>
            <strong>Edge computing</strong> is a distributed computing paradigm
            that brings computation and data storage closer to the sources of
            data (the "edge" of the network) rather than relying on a
            centralized data center.
          </p>

          <p>
            Instead of sending all data to the cloud for processing, edge
            computing processes data locally—on devices, gateways, or nearby
            servers—reducing latency, bandwidth usage, and enabling real-time
            responses.
          </p>

          <h3>Edge vs Cloud: The Key Difference</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Aspect</th>
                  <th className="p-3 text-left">Cloud Computing</th>
                  <th className="p-3 text-left">Edge Computing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Location</td>
                  <td className="p-3">Centralized data centers</td>
                  <td className="p-3">Near data sources</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Latency</td>
                  <td className="p-3">100-500ms typical</td>
                  <td className="p-3">&lt;10ms possible</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Bandwidth</td>
                  <td className="p-3">High—all data sent</td>
                  <td className="p-3">Low—only insights sent</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Reliability</td>
                  <td className="p-3">Depends on internet</td>
                  <td className="p-3">Works offline</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="p-3">Batch processing, storage</td>
                  <td className="p-3">Real-time, IoT, AI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>The Edge Computing Spectrum</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="border-l-4 border-indigo-500 py-2 pl-4">
              <p className="font-bold">Device Edge</p>
              <p className="text-muted-foreground">
                Processing on the device itself—smartphones, sensors, cameras.
                Lowest latency, limited compute.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Near Edge</p>
              <p className="text-muted-foreground">
                Local gateways, on-premise servers. Good balance of proximity
                and compute power.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Far Edge</p>
              <p className="text-muted-foreground">
                Regional edge data centers, 5G towers. More compute, slightly
                higher latency.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Edge Computing Matters */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            2. Why Edge Computing Matters
          </h2>

          <h3>The Four Drivers of Edge</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Timer className="h-5 w-5 text-red-500" />
                <p className="font-bold text-red-500">
                  1. Latency Requirements
                </p>
              </div>
              <p className="text-muted-foreground">
                Autonomous vehicles need &lt;10ms response times. Cloud
                round-trips of 100ms+ are too slow. Edge enables real-time AI
                decisions.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-500" />
                <p className="font-bold text-orange-500">
                  2. Bandwidth Explosion
                </p>
              </div>
              <p className="text-muted-foreground">
                IoT devices generate massive data. Sending everything to cloud
                is expensive and impractical. Edge filters and processes
                locally.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">
                  3. Data Privacy & Sovereignty
                </p>
              </div>
              <p className="text-muted-foreground">
                Regulations require data to stay local. Healthcare, finance, and
                government data often can't leave the country or facility.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Wifi className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">
                  4. Offline Reliability
                </p>
              </div>
              <p className="text-muted-foreground">
                Remote locations, factories, and vehicles need to work without
                constant internet. Edge enables autonomous operation.
              </p>
            </div>
          </div>

          <h3>Market Growth</h3>
          <ul>
            <li>$61 billion market in 2024 → $232 billion by 2027</li>
            <li>~20% compound annual growth rate (CAGR)</li>
            <li>5G rollout accelerating edge adoption</li>
            <li>AI at the edge is the fastest-growing segment</li>
          </ul>
        </section>

        {/* Section 3: Architecture */}
        <section
          id="architecture"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            3. Edge Computing Architecture
          </h2>

          <h3>The Three-Tier Architecture</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Tier</th>
                  <th className="p-3 text-left">Components</th>
                  <th className="p-3 text-left">Functions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Device Layer</td>
                  <td className="p-3">
                    Sensors, cameras, smartphones, industrial machines
                  </td>
                  <td className="p-3">
                    Data generation, basic filtering, local actions
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Edge Layer</td>
                  <td className="p-3">Gateways, edge servers, 5G MEC</td>
                  <td className="p-3">
                    Data processing, AI inference, aggregation
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloud Layer</td>
                  <td className="p-3">Public/private cloud data centers</td>
                  <td className="p-3">
                    Training, historical analysis, coordination
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Key Architectural Concepts</h3>
          <ul>
            <li>
              <strong>Fog Computing:</strong> Cisco's term for extending cloud
              to the edge with fog nodes
            </li>
            <li>
              <strong>Multi-access Edge Computing (MEC):</strong> Edge computing
              at 5G cell towers for ultra-low latency
            </li>
            <li>
              <strong>Content Delivery Networks (CDN):</strong> Edge caching for
              media and web content (Cloudflare, Akamai)
            </li>
            <li>
              <strong>Edge-Cloud Continuum:</strong> Seamless workload placement
              from device to cloud based on requirements
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Key Insight:</strong> Edge doesn't replace cloud—it
              complements it. The best architectures use edge for real-time
              processing and cloud for training, storage, and coordination.
            </div>
          </div>
        </section>

        {/* Section 4: Use Cases */}
        <section
          id="usecases"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Use Cases & Applications
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Car className="h-5 w-5 text-indigo-500" />
                <p className="font-bold text-indigo-500">Autonomous Vehicles</p>
              </div>
              <p className="text-muted-foreground">
                Self-driving cars process terabytes of sensor data in real-time.
                Edge AI makes split-second decisions that can't wait for cloud.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Factory className="h-5 w-5 text-orange-500" />
                <p className="font-bold text-orange-500">
                  Smart Manufacturing (IIoT)
                </p>
              </div>
              <p className="text-muted-foreground">
                Predictive maintenance, quality control, and process
                optimization. Factory floor edge computing prevents costly
                downtime.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">AR/VR & Gaming</p>
              </div>
              <p className="text-muted-foreground">
                Immersive experiences require &lt;20ms latency. Edge rendering
                enables cloud gaming and high-quality mobile AR.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">Smart Cities</p>
              </div>
              <p className="text-muted-foreground">
                Traffic management, public safety cameras, environmental
                monitoring. Edge enables city-scale real-time analytics.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-500" />
                <p className="font-bold text-red-500">Healthcare</p>
              </div>
              <p className="text-muted-foreground">
                Real-time patient monitoring, medical imaging AI, surgical
                robotics. Edge enables life-critical low-latency applications.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-500" />
                <p className="font-bold text-purple-500">Retail</p>
              </div>
              <p className="text-muted-foreground">
                Smart checkout, inventory tracking, in-store analytics,
                personalization. Edge powers next-gen retail experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Technologies */}
        <section
          id="technologies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-primary" />
            5. Key Technologies & Platforms
          </h2>

          <h3>Edge Hardware</h3>
          <ul>
            <li>
              <strong>NVIDIA Jetson:</strong> Edge AI platform for robotics,
              autonomous machines, embedded AI
            </li>
            <li>
              <strong>Intel NUC/Edge:</strong> Compact edge servers for
              enterprise deployment
            </li>
            <li>
              <strong>AWS Outposts:</strong> AWS infrastructure on-premises
            </li>
            <li>
              <strong>Azure Stack Edge:</strong> Microsoft's edge appliances
            </li>
            <li>
              <strong>Raspberry Pi/Similar:</strong> Low-cost edge prototyping
            </li>
          </ul>

          <h3>Cloud Edge Services</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Provider</th>
                  <th className="p-3 text-left">Edge Services</th>
                  <th className="p-3 text-left">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">AWS</td>
                  <td className="p-3">
                    Wavelength, Outposts, Greengrass, IoT Core
                  </td>
                  <td className="p-3">5G edge, enterprise, IoT</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Azure</td>
                  <td className="p-3">IoT Edge, Stack Edge, Arc</td>
                  <td className="p-3">Hybrid, Kubernetes, AI</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Google Cloud</td>
                  <td className="p-3">Anthos for edge, Distributed Cloud</td>
                  <td className="p-3">Kubernetes, AI/ML</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloudflare</td>
                  <td className="p-3">Workers, R2, Pages</td>
                  <td className="p-3">Serverless edge, CDN</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Edge Software & Frameworks</h3>
          <ul>
            <li>
              <strong>Kubernetes (K3s, KubeEdge):</strong> Container
              orchestration at the edge
            </li>
            <li>
              <strong>EdgeX Foundry:</strong> Open-source IoT edge framework
            </li>
            <li>
              <strong>Apache OpenWhisk:</strong> Serverless edge computing
            </li>
            <li>
              <strong>TensorFlow Lite/ONNX:</strong> Edge AI model deployment
            </li>
          </ul>
        </section>

        {/* Section 6: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            6. Career Paths & Job Roles
          </h2>

          <h3>Engineering Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-indigo-500">
                Edge Computing Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Design and implement edge infrastructure. Deploy and manage edge
                devices and software. Bridge IoT and cloud.
              </p>
              <p className="mt-2 text-xs">
                Skills: Linux, Kubernetes, networking, cloud platforms
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Edge AI/ML Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Optimize and deploy ML models for edge devices. Work on model
                compression, quantization, and inference optimization.
              </p>
              <p className="mt-2 text-xs">
                Skills: TensorFlow Lite, ONNX, PyTorch, edge hardware
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                IoT Solutions Architect
              </p>
              <p className="mt-1 text-muted-foreground">
                Design end-to-end IoT solutions. Determine what runs at edge vs
                cloud. Architect for scale, security, and reliability.
              </p>
              <p className="mt-2 text-xs">
                Skills: System design, IoT protocols, cloud, security
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Cloud/Edge Platform Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Build and maintain edge-cloud platforms. Deploy Kubernetes at
                the edge. Manage distributed infrastructure.
              </p>
              <p className="mt-2 text-xs">
                Skills: K8s, Terraform, GitOps, observability
              </p>
            </div>
          </div>

          <h3>Specialized Roles</h3>
          <ul>
            <li>
              <strong>5G/MEC Engineer:</strong> Edge computing at telecom
              infrastructure
            </li>
            <li>
              <strong>Embedded Systems Engineer:</strong> Device-level edge
              computing
            </li>
            <li>
              <strong>Edge Security Engineer:</strong> Securing distributed edge
              deployments
            </li>
            <li>
              <strong>Industrial IoT Engineer:</strong> Factory and
              manufacturing edge
            </li>
          </ul>
        </section>

        {/* Section 7: Skills Required */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            7. Skills Required
          </h2>

          <h3>Technical Skills</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Skill</th>
                  <th className="p-3 text-left">Why It Matters</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Linux</td>
                  <td className="p-3">
                    Edge devices run Linux; essential for all roles
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Kubernetes</td>
                  <td className="p-3">
                    K3s, KubeEdge for container orchestration
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Networking</td>
                  <td className="p-3">
                    TCP/IP, MQTT, edge networking fundamentals
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Python</td>
                  <td className="p-3">Scripting, automation, ML deployment</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloud Platforms</td>
                  <td className="p-3">AWS/Azure/GCP edge services</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Edge AI</td>
                  <td className="p-3">TensorFlow Lite, model optimization</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Foundational Knowledge</h3>
          <ul>
            <li>
              <strong>Distributed Systems:</strong> CAP theorem, consistency,
              availability
            </li>
            <li>
              <strong>IoT Fundamentals:</strong> Sensors, protocols, device
              management
            </li>
            <li>
              <strong>Security:</strong> Edge security challenges, zero trust
            </li>
            <li>
              <strong>Data Processing:</strong> Stream processing, time-series
              data
            </li>
          </ul>
        </section>

        {/* Section 8: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            8. Salary Expectations
          </h2>

          <h3>India Salary Ranges </h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Edge Computing Engineer</td>
                  <td className="p-3">₹8-15 LPA</td>
                  <td className="p-3">₹18-30 LPA</td>
                  <td className="p-3">₹35-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Edge AI/ML Engineer</td>
                  <td className="p-3">₹10-18 LPA</td>
                  <td className="p-3">₹22-38 LPA</td>
                  <td className="p-3">₹42-70 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IoT Solutions Architect</td>
                  <td className="p-3">₹15-25 LPA</td>
                  <td className="p-3">₹30-50 LPA</td>
                  <td className="p-3">₹55-90 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>US Salary Ranges</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Edge Computing Engineer</td>
                  <td className="p-3">$90K-120K</td>
                  <td className="p-3">$130K-165K</td>
                  <td className="p-3">$175K-220K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Edge AI/ML Engineer</td>
                  <td className="p-3">$100K-140K</td>
                  <td className="p-3">$150K-190K</td>
                  <td className="p-3">$200K-260K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            9. Top Companies Hiring
          </h2>

          <h3>Cloud & Tech Giants</h3>
          <ul>
            <li>
              <strong>AWS:</strong> Wavelength, Outposts, Greengrass teams
            </li>
            <li>
              <strong>Microsoft:</strong> Azure IoT Edge, Stack Edge
            </li>
            <li>
              <strong>Google:</strong> Anthos, Distributed Cloud
            </li>
            <li>
              <strong>NVIDIA:</strong> Jetson, edge AI platforms
            </li>
            <li>
              <strong>Intel:</strong> Edge solutions, OpenVINO
            </li>
          </ul>

          <h3>Telecom & 5G</h3>
          <ul>
            <li>
              <strong>Verizon:</strong> 5G edge, MEC
            </li>
            <li>
              <strong>AT&T:</strong> Edge solutions
            </li>
            <li>
              <strong>Reliance Jio:</strong> 5G edge in India
            </li>
            <li>
              <strong>Bharti Airtel:</strong> Edge partnerships
            </li>
          </ul>

          <h3>Edge-Focused Companies</h3>
          <ul>
            <li>
              <strong>Cloudflare:</strong> Edge computing platform
            </li>
            <li>
              <strong>Fastly:</strong> Edge cloud
            </li>
            <li>
              <strong>Zededa:</strong> Edge orchestration
            </li>
            <li>
              <strong>Macrometa:</strong> Edge data platform
            </li>
          </ul>

          <h3>Industrial & IoT</h3>
          <ul>
            <li>
              <strong>Siemens:</strong> Industrial edge
            </li>
            <li>
              <strong>GE Digital:</strong> Industrial IoT
            </li>
            <li>
              <strong>Bosch:</strong> Manufacturing edge
            </li>
            <li>
              <strong>Honeywell:</strong> Industrial automation
            </li>
          </ul>
        </section>

        {/* Section 10: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            10. Hands-On Projects
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Raspberry Pi Edge Gateway</p>
              <p className="mt-1 text-muted-foreground">
                Set up a Raspberry Pi as an edge gateway. Collect sensor data,
                process locally, and sync to cloud. Learn MQTT and edge basics.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. K3s Edge Cluster</p>
              <p className="mt-1 text-muted-foreground">
                Deploy K3s (lightweight Kubernetes) on Raspberry Pis. Run
                containerized workloads at the edge.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Edge AI Object Detection</p>
              <p className="mt-1 text-muted-foreground">
                Deploy TensorFlow Lite model on NVIDIA Jetson for real-time
                object detection. Process video streams locally.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. AWS Greengrass Deployment</p>
              <p className="mt-1 text-muted-foreground">
                Build an IoT solution using AWS Greengrass. Run Lambda functions
                at the edge with cloud synchronization.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Multi-site Edge Platform</p>
              <p className="mt-1 text-muted-foreground">
                Design and deploy edge infrastructure across multiple locations
                with centralized management and GitOps.
              </p>
            </div>
          </div>
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

          <h3>Courses</h3>
          <ul>
            <li>
              <strong>Linux Foundation - LFS158:</strong> Introduction to
              Kubernetes
            </li>
            <li>
              <strong>AWS Edge Services Training:</strong> Free on AWS Skill
              Builder
            </li>
            <li>
              <strong>Azure IoT Edge:</strong> Microsoft Learn modules
            </li>
            <li>
              <strong>NVIDIA DLI:</strong> Edge AI and Jetson courses
            </li>
          </ul>

          <h3>Books & Resources</h3>
          <ul>
            <li>
              <strong>"Edge Computing" by Jie Cao:</strong> Comprehensive
              textbook
            </li>
            <li>
              <strong>EdgeX Foundry Documentation:</strong> Practical IoT edge
            </li>
            <li>
              <strong>K3s Documentation:</strong> Lightweight Kubernetes
            </li>
          </ul>

          <h3>Communities</h3>
          <ul>
            <li>
              <strong>CNCF Edge:</strong> Cloud Native edge computing
            </li>
            <li>
              <strong>EdgeX Foundry:</strong> Linux Foundation project
            </li>
            <li>
              <strong>r/IOT:</strong> Reddit IoT community
            </li>
          </ul>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Will edge computing replace cloud computing?
              </p>
              <p className="mt-2 text-muted-foreground">
                No. They're complementary. Edge handles real-time, local
                processing while cloud handles training, storage, and
                coordination. Both are needed.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What's the difference between edge and fog computing?
              </p>
              <p className="mt-2 text-muted-foreground">
                Fog computing is Cisco's term for edge computing that extends
                cloud capabilities to the network edge. They're largely
                synonymous now.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need hardware to learn edge computing?
              </p>
              <p className="mt-2 text-muted-foreground">
                You can start with VMs and emulators, but a Raspberry Pi or
                similar device makes learning much more practical and engaging.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is 5G required for edge computing?</p>
              <p className="mt-2 text-muted-foreground">
                No. Edge works with any connectivity (WiFi, LTE, LoRa). 5G
                enables new use cases with ultra-low latency and MEC, but isn't
                required for most edge applications.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: Process Locally, Think Globally
          </h2>

          <p>
            Edge computing is the architectural shift that enables the next
            generation of applications—from autonomous vehicles to immersive
            AR/VR to smart cities. As data volumes explode and real-time
            requirements tighten, edge becomes essential.
          </p>

          <p>
            Start with the fundamentals: learn Linux, Kubernetes, and
            networking. Get a Raspberry Pi or Jetson and build hands-on
            projects. The edge is where the action is.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more technology career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/iot-internet-of-things-careers"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                IoT Careers Guide →
              </Link>
              <Link
                href="/blog/cloud-computing-beginners"
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Cloud Computing Guide →
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
                Helping students navigate emerging technology careers
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
