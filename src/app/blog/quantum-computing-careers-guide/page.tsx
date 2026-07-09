import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  DollarSign,
  Code,
  Briefcase,
  Award,
  Globe,
  Cpu,
  Atom,
  Zap,
  GraduationCap,
  Building2,
  LineChart,
  Shield,
  Rocket,
  Brain,
  Database,
  Lock,
  Settings,
  Terminal,
  FileCode,
  Network,
  Layers,
  Box,
  Binary,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quantum Computing Careers: Complete Guide',
  description:
    'Start your quantum computing career. Learn about qubits, quantum algorithms, job opportunities, required skills, top companies, and salary expectations in this emerging field.',
  keywords: [
    'quantum computing career',
    'quantum computing jobs',
    'quantum developer',
    'quantum engineer',
    'quantum computing internship',
    'qiskit developer',
    'quantum machine learning',
    'quantum computing salary',
    'IBM quantum',
    'Google quantum AI',
  ],
  openGraph: {
    title: 'Quantum Computing Careers: Complete Guide',
    description:
      'Launch your career in quantum computing with this comprehensive guide covering skills, roadmap, and opportunities.',
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
            <Atom className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emerging Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Quantum Computing Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Quantum computing is revolutionizing technology as we know it. From
            breaking encryption to simulating molecules for drug discovery, this
            field offers unprecedented career opportunities for those ready to
            master the quantum realm.
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
              <span>22 min read</span>
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
                1. What is Quantum Computing?
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                2. Why Quantum Computing Matters
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                3. Career Paths & Job Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                4. Essential Skills Required
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                5. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-primary hover:underline"
              >
                6. Educational Pathways
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                7. Top Companies Hiring
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
                href="#projects"
                className="text-primary hover:underline"
              >
                9. Portfolio Projects
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                10. Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#future"
                className="text-primary hover:underline"
              >
                11. Future of Quantum
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
        <div className="not-prose mb-10 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-purple-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Quantum computing is projected to be a $850 billion industry by
                2040
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Salaries range from ₹15-60 LPA in India to $120K-250K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Python, linear algebra, and quantum mechanics fundamentals are
                essential
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                IBM Qiskit and Google Cirq are the most popular quantum
                frameworks
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                Major tech giants (IBM, Google, Microsoft, Amazon) are actively
                hiring
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Quantum Computing */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Atom className="h-6 w-6 text-primary" />
            1. What is Quantum Computing?
          </h2>

          <p>
            <strong>Quantum computing</strong> harnesses the principles of
            quantum mechanics—the physics governing atoms and subatomic
            particles—to process information in fundamentally new ways. Unlike
            classical computers that use bits (0 or 1), quantum computers use{' '}
            <strong>qubits</strong> that can exist in multiple states
            simultaneously through a phenomenon called superposition.
          </p>

          <h3>Core Quantum Concepts</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Superposition</p>
              <p className="text-muted-foreground">
                A qubit can be in state 0, state 1, or any quantum superposition
                of these states. This allows quantum computers to process many
                possibilities simultaneously.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Entanglement</p>
              <p className="text-muted-foreground">
                Qubits can be correlated in ways that have no classical analog.
                Measuring one entangled qubit instantly affects its partner,
                regardless of distance.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Quantum Gates</p>
              <p className="text-muted-foreground">
                Operations that manipulate qubits, similar to logic gates in
                classical computing but following quantum mechanical rules.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Quantum Interference</p>
              <p className="text-muted-foreground">
                The ability to amplify correct answers and cancel wrong ones
                through careful manipulation of quantum amplitudes.
              </p>
            </div>
          </div>

          <h3>Classical vs Quantum Computing</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Aspect</th>
                  <th className="p-3 text-left">Classical Computing</th>
                  <th className="p-3 text-left">Quantum Computing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Basic Unit</td>
                  <td className="p-3">Bit (0 or 1)</td>
                  <td className="p-3">Qubit (superposition of 0 and 1)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Processing</td>
                  <td className="p-3">Sequential</td>
                  <td className="p-3">Parallel (via superposition)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Speed-up</td>
                  <td className="p-3">Linear</td>
                  <td className="p-3">Exponential for certain problems</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Error Rate</td>
                  <td className="p-3">Very low</td>
                  <td className="p-3">Higher (requires error correction)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Operating Temp</td>
                  <td className="p-3">Room temperature</td>
                  <td className="p-3">Near absolute zero (-273°C)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Key Insight:</strong> Quantum computers won't replace
              classical computers. They excel at specific problems like
              optimization, simulation, and cryptography, while classical
              computers remain better for everyday tasks.
            </div>
          </div>
        </section>

        {/* Section 2: Why Quantum Computing Matters */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            2. Why Quantum Computing Matters
          </h2>

          <p>
            Quantum computing isn't just an academic curiosity—it's poised to
            transform industries worth trillions of dollars. Here's why you
            should care about this field:
          </p>

          <h3>Industry Applications</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Drug Discovery & Healthcare
              </p>
              <p className="mt-1 text-muted-foreground">
                Quantum computers can simulate molecular interactions at an
                atomic level, potentially reducing drug development time from 12
                years to months. Companies like Roche and Biogen are already
                investing heavily.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Financial Services</p>
              <p className="mt-1 text-muted-foreground">
                Portfolio optimization, risk analysis, and fraud detection can
                be dramatically improved. JPMorgan, Goldman Sachs, and Barclays
                have quantum computing teams.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                Cryptography & Security
              </p>
              <p className="mt-1 text-muted-foreground">
                Quantum computers can break current encryption (RSA, ECC), but
                also enable quantum-safe cryptography. This is driving massive
                government investment.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                Supply Chain & Logistics
              </p>
              <p className="mt-1 text-muted-foreground">
                Solving complex optimization problems like routing, scheduling,
                and inventory management. DHL, Volkswagen, and BMW are active
                researchers.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">Machine Learning & AI</p>
              <p className="mt-1 text-muted-foreground">
                Quantum machine learning algorithms can potentially train models
                exponentially faster and handle more complex patterns.
              </p>
            </div>
          </div>

          <h3>Market Growth Projections</h3>
          <ul>
            <li>
              <strong>2024:</strong> $1.3 billion market size
            </li>
            <li>
              <strong>2030:</strong> $65 billion projected
            </li>
            <li>
              <strong>2040:</strong> $850 billion projected
            </li>
            <li>
              <strong>Job Growth:</strong> 25-30% annually for quantum-related
              roles
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Career Timing:</strong> We're in the "ARPANET era" of
              quantum computing—early enough to become a pioneer, but developed
              enough to have real career opportunities. This is the ideal time
              to enter the field.
            </div>
          </div>
        </section>

        {/* Section 3: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Career Paths & Job Roles
          </h2>

          <h3>Research & Academic Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Quantum Research Scientist
              </p>
              <p className="mt-1 text-muted-foreground">
                Advance the theoretical foundations of quantum computing.
                Develop new algorithms, error correction methods, and quantum
                protocols. Typically requires a PhD.
              </p>
              <p className="mt-2 text-xs">
                Skills: Quantum mechanics, linear algebra, research methodology
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Quantum Algorithm Developer
              </p>
              <p className="mt-1 text-muted-foreground">
                Design and optimize quantum algorithms for specific problems.
                Work on improving existing algorithms like VQE, QAOA, and
                Grover's search.
              </p>
              <p className="mt-2 text-xs">
                Skills: Algorithm design, complexity theory, quantum information
              </p>
            </div>
          </div>

          <h3>Engineering & Development Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                Quantum Software Engineer (Most In-Demand)
              </p>
              <p className="mt-1 text-muted-foreground">
                Build applications using quantum computing frameworks like
                Qiskit, Cirq, or PennyLane. Bridge the gap between quantum
                hardware and real-world applications.
              </p>
              <p className="mt-2 text-xs">
                Skills: Python, Qiskit/Cirq, classical ML, software engineering
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                Quantum Hardware Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Work on the physical implementation of quantum computers—
                superconducting qubits, ion traps, photonics. Improve qubit
                coherence and gate fidelity.
              </p>
              <p className="mt-2 text-xs">
                Skills: Cryogenics, microwave engineering, physics, fabrication
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">
                Quantum Control Systems Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Develop the classical control systems that manage quantum
                hardware. Work on pulse sequences, calibration, and real-time
                feedback.
              </p>
              <p className="mt-2 text-xs">
                Skills: Control theory, FPGA programming, signal processing
              </p>
            </div>
          </div>

          <h3>Application-Specific Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">
                Quantum Machine Learning Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Combine quantum computing with machine learning. Develop quantum
                neural networks, quantum kernel methods, and hybrid
                classical-quantum ML pipelines.
              </p>
              <p className="mt-2 text-xs">
                Skills: ML/DL, Python, PennyLane, TensorFlow Quantum
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-500">
                Quantum Cryptography Specialist
              </p>
              <p className="mt-1 text-muted-foreground">
                Work on post-quantum cryptography and quantum key distribution
                (QKD). Help organizations prepare for the quantum threat to
                current encryption.
              </p>
              <p className="mt-2 text-xs">
                Skills: Cryptography, security protocols, network security
              </p>
            </div>
          </div>

          <h3>Non-Technical Roles</h3>
          <ul>
            <li>
              <strong>Quantum Technical Writer:</strong> Create documentation,
              tutorials, and educational content
            </li>
            <li>
              <strong>Quantum Product Manager:</strong> Define roadmaps for
              quantum products and services
            </li>
            <li>
              <strong>Quantum Business Developer:</strong> Identify use cases
              and customers for quantum solutions
            </li>
            <li>
              <strong>Quantum Educator:</strong> Teach quantum computing at
              universities or through online platforms
            </li>
          </ul>
        </section>

        {/* Section 4: Essential Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            4. Essential Skills Required
          </h2>

          <h3>Mathematical Foundations (Critical)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Subject</th>
                  <th className="p-3 text-left">What to Learn</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Linear Algebra</td>
                  <td className="p-3">
                    Vectors, matrices, eigenvalues, tensor products, Dirac
                    notation
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Complex Numbers</td>
                  <td className="p-3">
                    Complex arithmetic, Euler's formula, polar form
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Probability Theory</td>
                  <td className="p-3">
                    Probability distributions, expectation values, statistics
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Quantum Mechanics</td>
                  <td className="p-3">
                    Wave functions, observables, measurement, entanglement
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Information Theory</td>
                  <td className="p-3">
                    Entropy, mutual information, quantum information
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Programming Skills</h3>
          <ul>
            <li>
              <strong>Python (Essential):</strong> The primary language for
              quantum computing. Master NumPy, SciPy, and Matplotlib.
            </li>
            <li>
              <strong>Qiskit (IBM):</strong> Most popular quantum SDK. Rich
              ecosystem with tutorials and community.
            </li>
            <li>
              <strong>Cirq (Google):</strong> Google's quantum framework. Great
              for understanding circuit-level programming.
            </li>
            <li>
              <strong>PennyLane:</strong> Best for quantum machine learning.
              Integrates with TensorFlow and PyTorch.
            </li>
            <li>
              <strong>Classical ML:</strong> TensorFlow, PyTorch for hybrid
              quantum-classical applications.
            </li>
          </ul>

          <h3>Domain Knowledge</h3>
          <ul>
            <li>
              <strong>Quantum Circuits:</strong> Understand how to compose
              quantum gates, measure qubits, and interpret results.
            </li>
            <li>
              <strong>Quantum Algorithms:</strong> Grover's search, Shor's
              algorithm, VQE, QAOA—know when and how to apply them.
            </li>
            <li>
              <strong>Error Mitigation:</strong> Techniques to reduce noise on
              NISQ devices.
            </li>
            <li>
              <strong>Hybrid Approaches:</strong> Combine classical and quantum
              processing for practical advantage.
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> You don't need a physics PhD to work in
              quantum computing. Many successful quantum software engineers come
              from CS backgrounds and learn the physics they need on the job.
            </div>
          </div>
        </section>

        {/* Section 5: Learning Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            5. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Review linear algebra—vectors, matrices,
              eigenvalues. Complete 3Blue1Brown's "Essence of Linear Algebra".
            </li>
            <li>
              <strong>Month 2:</strong> Learn Python deeply if needed. Start IBM
              Qiskit Textbook (Chapters 1-3).
            </li>
            <li>
              <strong>Month 3:</strong> Understand quantum mechanics basics—
              superposition, measurement, entanglement. Complete "Quantum
              Computing Fundamentals" on Coursera.
            </li>
          </ul>

          <h3>Phase 2: Quantum Programming (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Build quantum circuits in Qiskit.
              Implement basic algorithms (Deutsch-Jozsa, Bernstein-Vazirani).
            </li>
            <li>
              <strong>Month 5:</strong> Study Grover's search algorithm. Build a
              working implementation. Run on IBM quantum hardware.
            </li>
            <li>
              <strong>Month 6:</strong> Learn VQE and QAOA for optimization
              problems. Understand variational circuits.
            </li>
          </ul>

          <h3>Phase 3: Specialization (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Choose your specialization—quantum ML,
              optimization, chemistry simulation, or cryptography.
            </li>
            <li>
              <strong>Month 8:</strong> Deep dive into your chosen area. Read
              research papers. Implement state-of-the-art algorithms.
            </li>
            <li>
              <strong>Month 9:</strong> Build 2-3 substantial portfolio
              projects. Contribute to open-source quantum libraries.
            </li>
          </ul>

          <h3>Phase 4: Career Preparation (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Participate in quantum hackathons
              (Qiskit Global Summer School, QHack).
            </li>
            <li>
              <strong>Month 11:</strong> Network with quantum professionals on
              LinkedIn. Attend quantum computing meetups/conferences.
            </li>
            <li>
              <strong>Month 12:</strong> Apply for internships and entry-level
              positions. Prepare for technical interviews.
            </li>
          </ul>
        </section>

        {/* Section 6: Educational Pathways */}
        <section
          id="education"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            6. Educational Pathways
          </h2>

          <h3>Recommended Degrees</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Physics (Best for Research)</p>
              <p className="mt-1 text-muted-foreground">
                Provides the deepest understanding of quantum mechanics. Ideal
                for hardware engineering and fundamental research roles.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Computer Science (Most Versatile)</p>
              <p className="mt-1 text-muted-foreground">
                Strong foundation in algorithms and programming. Best for
                quantum software engineering and applications development.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Mathematics (Strong Theoretical Base)</p>
              <p className="mt-1 text-muted-foreground">
                Excellent preparation for algorithm development and theoretical
                quantum computing.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Electrical Engineering</p>
              <p className="mt-1 text-muted-foreground">
                Ideal for quantum hardware, control systems, and microwave
                engineering roles.
              </p>
            </div>
          </div>

          <h3>Top Programs for Quantum Computing</h3>
          <p>
            <strong>India:</strong>
          </p>
          <ul>
            <li>IISc Bangalore - Quantum Computing Research</li>
            <li>IIT Madras - Centre for Quantum Information</li>
            <li>IISER Pune - Quantum Technology Initiative</li>
            <li>TIFR Mumbai - Quantum Physics</li>
          </ul>

          <p>
            <strong>Global (PhD Programs):</strong>
          </p>
          <ul>
            <li>MIT - Center for Theoretical Physics</li>
            <li>Caltech - Institute for Quantum Information</li>
            <li>ETH Zurich - Quantum Information Theory</li>
            <li>University of Waterloo - Institute for Quantum Computing</li>
          </ul>

          <h3>Do You Need a PhD?</h3>
          <p>
            <strong>For Research Roles:</strong> Yes, a PhD is typically
            required for research scientist positions at major labs.
          </p>
          <p>
            <strong>For Engineering Roles:</strong> No! Many quantum software
            engineers have Bachelor's or Master's degrees. Practical skills and
            portfolio projects matter more.
          </p>
        </section>

        {/* Section 7: Top Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            7. Top Companies Hiring
          </h2>

          <h3>Big Tech (Major Investment)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Focus Area</th>
                  <th className="p-3 text-left">Key Technology</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">IBM</td>
                  <td className="p-3">
                    Full-stack quantum (hardware + software)
                  </td>
                  <td className="p-3">Qiskit, 1000+ qubit roadmap</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Google</td>
                  <td className="p-3">Quantum supremacy, AI integration</td>
                  <td className="p-3">Cirq, Sycamore processor</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Microsoft</td>
                  <td className="p-3">Topological qubits, Azure Quantum</td>
                  <td className="p-3">Q#, Azure Quantum cloud</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Amazon (AWS)</td>
                  <td className="p-3">Quantum cloud services</td>
                  <td className="p-3">
                    Braket, partnerships with IonQ/Rigetti
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Intel</td>
                  <td className="p-3">Silicon-based quantum chips</td>
                  <td className="p-3">Horse Ridge cryogenic control</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Quantum Startups (High Growth)</h3>
          <ul>
            <li>
              <strong>IonQ:</strong> Trapped-ion quantum computers (publicly
              traded)
            </li>
            <li>
              <strong>Rigetti:</strong> Superconducting qubits and cloud
              platform
            </li>
            <li>
              <strong>D-Wave:</strong> Quantum annealing specialists
            </li>
            <li>
              <strong>PsiQuantum:</strong> Photonic quantum computing
            </li>
            <li>
              <strong>Xanadu:</strong> Photonic quantum + PennyLane framework
            </li>
            <li>
              <strong>Zapata Computing:</strong> Enterprise quantum software
            </li>
          </ul>

          <h3>Indian Companies & Research Labs</h3>
          <ul>
            <li>
              <strong>QNu Labs:</strong> Quantum cryptography solutions
            </li>
            <li>
              <strong>BosonQ Psi:</strong> Quantum simulation for engineering
            </li>
            <li>
              <strong>TCS:</strong> Quantum computing research division
            </li>
            <li>
              <strong>Infosys:</strong> Quantum computing center
            </li>
            <li>
              <strong>ISRO:</strong> Quantum technology research
            </li>
            <li>
              <strong>DRDO:</strong> Defense quantum applications
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
                  <th className="p-3 text-left">Entry Level</th>
                  <th className="p-3 text-left">Mid Level (3-5 yrs)</th>
                  <th className="p-3 text-left">Senior (5+ yrs)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Quantum Software Engineer</td>
                  <td className="p-3">₹12-20 LPA</td>
                  <td className="p-3">₹25-40 LPA</td>
                  <td className="p-3">₹45-70 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Quantum Research Scientist</td>
                  <td className="p-3">₹15-25 LPA</td>
                  <td className="p-3">₹30-50 LPA</td>
                  <td className="p-3">₹50-80 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Quantum ML Engineer</td>
                  <td className="p-3">₹15-25 LPA</td>
                  <td className="p-3">₹30-45 LPA</td>
                  <td className="p-3">₹50-75 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>US/Global Salary Ranges</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry Level</th>
                  <th className="p-3 text-left">Mid Level</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Quantum Software Engineer</td>
                  <td className="p-3">$100K-140K</td>
                  <td className="p-3">$150K-200K</td>
                  <td className="p-3">$200K-280K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Quantum Research Scientist</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                  <td className="p-3">$220K-300K+</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Quantum Hardware Engineer</td>
                  <td className="p-3">$110K-150K</td>
                  <td className="p-3">$160K-210K</td>
                  <td className="p-3">$210K-280K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Salary Premium:</strong> Quantum computing roles typically
              pay 20-40% more than equivalent classical computing roles due to
              the scarcity of talent and specialized skills required.
            </div>
          </div>
        </section>

        {/* Section 9: Portfolio Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            9. Portfolio Projects to Build
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Quantum Random Number Generator</p>
              <p className="mt-1 text-muted-foreground">
                Use quantum superposition to generate truly random numbers.
                Compare with classical pseudo-random generators.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Qiskit basics, measurement, classical post-processing
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Quantum Teleportation Simulator</p>
              <p className="mt-1 text-muted-foreground">
                Implement the quantum teleportation protocol. Visualize the
                process and explain entanglement's role.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Entanglement, Bell states, classical communication
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Quantum Image Classifier</p>
              <p className="mt-1 text-muted-foreground">
                Build a hybrid quantum-classical neural network for image
                classification. Compare performance with classical CNN.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: PennyLane, variational circuits, PyTorch integration
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Portfolio Optimization with QAOA</p>
              <p className="mt-1 text-muted-foreground">
                Solve a financial portfolio optimization problem using the
                Quantum Approximate Optimization Algorithm.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: QAOA, combinatorial optimization, financial modeling
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                5. Molecular Ground State Energy (VQE)
              </p>
              <p className="mt-1 text-muted-foreground">
                Use the Variational Quantum Eigensolver to calculate ground
                state energies of small molecules like H2 or LiH.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Quantum chemistry, VQE, ansatz design
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                6. Quantum Error Correction Implementation
              </p>
              <p className="mt-1 text-muted-foreground">
                Implement a basic error correction code (3-qubit bit-flip or
                Shor's 9-qubit code). Analyze error rates on real hardware.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: QEC theory, syndrome measurement, noise modeling
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            10. Best Learning Resources
          </h2>

          <h3>Free Courses</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">IBM Qiskit Textbook</p>
              <p className="mt-1 text-muted-foreground">
                The most comprehensive free resource. Covers everything from
                basics to advanced algorithms with interactive coding.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">MIT 8.370 Quantum Information Science</p>
              <p className="mt-1 text-muted-foreground">
                Full MIT course available on OCW. Rigorous mathematical
                treatment of quantum computing fundamentals.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Microsoft Quantum Katas</p>
              <p className="mt-1 text-muted-foreground">
                Self-paced programming exercises using Q#. Great for learning by
                doing.
              </p>
            </div>
          </div>

          <h3>Books</h3>
          <ul>
            <li>
              <strong>"Quantum Computing: An Applied Approach"</strong> by Jack
              Hidary - Best for practical implementation
            </li>
            <li>
              <strong>"Quantum Computation and Quantum Information"</strong> by
              Nielsen & Chuang - The bible of quantum computing (theoretical)
            </li>
            <li>
              <strong>"Programming Quantum Computers"</strong> by Gimeno-Segovia
              et al. - Hands-on approach with O'Reilly
            </li>
          </ul>

          <h3>Communities</h3>
          <ul>
            <li>
              <strong>Qiskit Slack:</strong> Active community with IBM engineers
            </li>
            <li>
              <strong>Quantum Computing Stack Exchange:</strong> Q&A for
              technical questions
            </li>
            <li>
              <strong>r/QuantumComputing:</strong> Reddit community for news and
              discussion
            </li>
            <li>
              <strong>Unitary Fund Discord:</strong> Open-source quantum
              community
            </li>
          </ul>
        </section>

        {/* Section 11: Future */}
        <section
          id="future"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            11. Future of Quantum Computing
          </h2>

          <h3>Near-Term (2025-2030)</h3>
          <ul>
            <li>1000+ qubit processors becoming available</li>
            <li>First practical quantum advantage demonstrations</li>
            <li>Hybrid quantum-classical algorithms dominating</li>
            <li>Growing demand for quantum software engineers</li>
          </ul>

          <h3>Medium-Term (2030-2040)</h3>
          <ul>
            <li>Fault-tolerant quantum computers emerging</li>
            <li>Quantum computers integrated into cloud infrastructure</li>
            <li>
              Disruption of cryptography (quantum-safe transition complete)
            </li>
            <li>Drug discovery and materials science transformed</li>
          </ul>

          <h3>Long-Term (2040+)</h3>
          <ul>
            <li>General-purpose quantum computers</li>
            <li>Quantum internet for distributed computing</li>
            <li>Quantum machine learning breakthroughs</li>
            <li>New applications we can't yet imagine</li>
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
                Can I learn quantum computing without a physics background?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! Many successful quantum software engineers come from CS or
                math backgrounds. Focus on linear algebra and learn the quantum
                mechanics concepts you need as you go.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How long does it take to become job-ready?
              </p>
              <p className="mt-2 text-muted-foreground">
                With dedicated study (10-15 hours/week), 12-18 months is
                realistic for entry-level positions. PhD research roles require
                4-6 years.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is quantum computing overhyped?</p>
              <p className="mt-2 text-muted-foreground">
                Short-term expectations may be inflated, but long-term potential
                is real. We're in a similar phase to the early
                internet—uncertain timeline but transformative technology.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What's the best programming language for quantum computing?
              </p>
              <p className="mt-2 text-muted-foreground">
                Python is dominant due to Qiskit, Cirq, and PennyLane. Q#
                (Microsoft) and Julia are alternatives but have smaller
                ecosystems.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I work in quantum computing from India?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely! IBM, Google, and Microsoft have India research labs.
                Many quantum startups offer remote positions. The National
                Quantum Mission is creating opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: Your Quantum Journey Starts Now
          </h2>

          <p>
            Quantum computing represents one of the most exciting frontiers in
            technology. While the field is still emerging, the foundations you
            build today will position you at the forefront of a revolution.
          </p>

          <p>
            Start with the basics—linear algebra and Python. Work through the
            IBM Qiskit Textbook. Build projects. Join the community. The quantum
            future needs talented people like you to build it.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more career guides and tools on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/ai-ml-career-path"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                AI/ML Career Guide →
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

        {/* Author & Share */}
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
