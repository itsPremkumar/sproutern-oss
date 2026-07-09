import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Link2,
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
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blockchain Careers: Complete Guide',
  description:
    'Start your blockchain and Web3 career. Learn about smart contracts, DeFi, NFTs, and crypto opportunities. Complete roadmap with salary insights.',
  keywords: [
    'blockchain career',
    'web3 jobs',
    'smart contract developer',
    'crypto careers',
    'solidity developer',
    'defi developer',
    'blockchain internship',
  ],
  openGraph: {
    title: 'Blockchain Careers: Complete Guide',
    description: 'Launch your Web3 career with this comprehensive guide.',
    type: 'article',
    publishedTime: '2025-12-28T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Link2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tech Deep Dive
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Blockchain Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Web3 is creating revolutionary opportunities in tech. Here's
            everything you need to build a successful blockchain career, from
            learning Solidity to landing your first role.
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
              <span>16 min read</span>
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
                1. What is Blockchain & Web3?
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                2. Career Paths in Blockchain
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                3. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                4. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                5. Portfolio Projects
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                6. Salary & Companies
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                7. Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                8. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Blockchain developers are among the highest-paid in tech (₹15-60
                LPA in India, $100K-250K in US)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Solidity is the most in-demand smart contract language (80%+ of
                Web3 jobs)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Strong JavaScript/TypeScript skills are essential before
                learning blockchain-specific tools
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Remote work is extremely common—many blockchain teams are fully
                distributed globally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Open source contributions and hackathon wins can fast-track your
                career
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Blockchain */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. What is Blockchain & Web3?
          </h2>

          <p>
            <strong>Blockchain</strong> is a decentralized, distributed ledger
            technology that records transactions across many computers. Once
            data is recorded, it cannot be altered without changing all
            subsequent blocks—making it tamper-proof and trustless.
          </p>

          <p>
            <strong>Web3</strong> is the vision of a decentralized internet
            built on blockchain technology. Unlike Web2 (where companies like
            Google and Facebook control your data), Web3 gives users ownership
            of their data, assets, and digital identity.
          </p>

          <h3>Key Blockchain Concepts</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Smart Contracts</p>
              <p className="text-muted-foreground">
                Self-executing code on the blockchain that runs when conditions
                are met. "Code is law."
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">DeFi (Decentralized Finance)</p>
              <p className="text-muted-foreground">
                Financial services (lending, trading, insurance) without banks
                or intermediaries.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">NFTs (Non-Fungible Tokens)</p>
              <p className="text-muted-foreground">
                Unique digital assets representing ownership of art, music,
                gaming items, and more.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">DAOs (Decentralized Autonomous Orgs)</p>
              <p className="text-muted-foreground">
                Community-governed organizations with rules encoded in smart
                contracts.
              </p>
            </div>
          </div>

          <h3>Major Blockchain Platforms</h3>
          <ul>
            <li>
              <strong>Ethereum:</strong> The dominant smart contract platform.
              Most DeFi, NFTs, and dApps are built here.
            </li>
            <li>
              <strong>Solana:</strong> High-speed, low-cost alternative. Popular
              for gaming and consumer apps.
            </li>
            <li>
              <strong>Polygon:</strong> Ethereum scaling solution. Many
              enterprise and gaming projects.
            </li>
            <li>
              <strong>Avalanche:</strong> Fast finality, growing DeFi ecosystem.
            </li>
            <li>
              <strong>Layer 2s (Arbitrum, Optimism, Base):</strong> Ethereum
              scaling layers with lower fees.
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Why Blockchain Matters:</strong> Over $50 billion is
              locked in DeFi protocols. NFT sales exceeded $25 billion in 2023.
              Major companies (JPMorgan, Nike, Starbucks) are building on
              blockchain.
            </div>
          </div>
        </section>

        {/* Section 2: Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            2. Career Paths in Blockchain
          </h2>

          <h3>Technical Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                Smart Contract Developer (Most In-Demand)
              </p>
              <p className="mt-1 text-muted-foreground">
                Write, test, and deploy smart contracts in Solidity. Build the
                core logic of DeFi protocols, NFT marketplaces, and dApps.
              </p>
              <p className="mt-2 text-xs">
                Skills: Solidity, Hardhat/Foundry, Testing, Security
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Web3 Frontend Developer</p>
              <p className="mt-1 text-muted-foreground">
                Build user interfaces for dApps using React/Next.js with Web3
                integration. Connect wallets, display blockchain data, and
                handle transactions.
              </p>
              <p className="mt-2 text-xs">
                Skills: React, TypeScript, Ethers.js/Wagmi, Wallet Integration
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Blockchain Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Work on blockchain infrastructure—nodes, consensus mechanisms,
                protocol development. Deeper systems-level work.
              </p>
              <p className="mt-2 text-xs">
                Skills: Rust/Go, Cryptography, Distributed Systems
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Smart Contract Auditor</p>
              <p className="mt-1 text-muted-foreground">
                Review and audit smart contracts for security vulnerabilities.
                High-paying niche requiring deep security knowledge.
              </p>
              <p className="mt-2 text-xs">
                Skills: Solidity, Security Patterns, Audit Frameworks
              </p>
            </div>
          </div>

          <h3>Non-Technical Roles</h3>
          <ul>
            <li>
              <strong>Product Manager:</strong> Define roadmap and features for
              Web3 products
            </li>
            <li>
              <strong>Community Manager:</strong> Build and engage
              Discord/Telegram communities
            </li>
            <li>
              <strong>Developer Relations:</strong> Create docs, tutorials, and
              support developers building on protocols
            </li>
            <li>
              <strong>Research Analyst:</strong> Analyze protocols, tokenomics,
              and market trends
            </li>
            <li>
              <strong>Content Writer:</strong> Create educational content about
              blockchain and crypto
            </li>
          </ul>
        </section>

        {/* Section 3: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            3. Essential Skills for Blockchain Developers
          </h2>

          <h3>Prerequisites (Learn First)</h3>
          <ul>
            <li>
              <strong>JavaScript/TypeScript:</strong> Essential for Web3
              frontend and tooling. Master ES6+, async/await, and npm ecosystem.
            </li>
            <li>
              <strong>React:</strong> Most dApp frontends use React. Learn
              hooks, state management, and Next.js.
            </li>
            <li>
              <strong>Git & GitHub:</strong> Version control is non-negotiable.
              Open source is huge in Web3.
            </li>
            <li>
              <strong>Basic Cryptography:</strong> Understand hashing,
              public/private keys, and digital signatures.
            </li>
          </ul>

          <h3>Core Blockchain Skills</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Skill</th>
                  <th className="p-3 text-left">What to Learn</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Solidity</td>
                  <td className="p-3">
                    Smart contract language for Ethereum & EVM chains
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Ethers.js / Viem</td>
                  <td className="p-3">
                    Libraries to interact with blockchain from JavaScript
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Hardhat / Foundry</td>
                  <td className="p-3">
                    Development frameworks for testing and deploying contracts
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Wagmi + RainbowKit</td>
                  <td className="p-3">
                    React hooks for wallet connection and blockchain interaction
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">OpenZeppelin</td>
                  <td className="p-3">
                    Standard, audited smart contract libraries
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">The Graph</td>
                  <td className="p-3">
                    Indexing protocol for querying blockchain data
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">IPFS</td>
                  <td className="p-3">
                    Decentralized file storage for NFT metadata, images
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Don't skip JavaScript fundamentals. Many
              developers rush to Solidity and struggle because they don't
              understand async programming, testing, or the tooling ecosystem.
            </div>
          </div>
        </section>

        {/* Section 4: Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            4. 9-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Web Development Foundations (Months 1-2)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Master JavaScript (ES6+), HTML, CSS.
              Build 2-3 frontend projects.
            </li>
            <li>
              <strong>Month 2:</strong> Learn React and TypeScript. Build a
              portfolio website. Understand API calls.
            </li>
          </ul>

          <h3>Phase 2: Blockchain Basics (Months 3-4)</h3>
          <ul>
            <li>
              <strong>Month 3:</strong> Learn how blockchain works—transactions,
              blocks, consensus. Use a testnet wallet (MetaMask). Understand gas
              and transactions.
            </li>
            <li>
              <strong>Month 4:</strong> Start Solidity—data types, functions,
              events, modifiers. Complete CryptoZombies.
            </li>
          </ul>

          <h3>Phase 3: Smart Contract Development (Months 5-6)</h3>
          <ul>
            <li>
              <strong>Month 5:</strong> Advanced Solidity—inheritance,
              interfaces, libraries. Learn Hardhat for testing and deployment.
            </li>
            <li>
              <strong>Month 6:</strong> Build a complete dApp—smart contract +
              React frontend. Deploy to testnet. Integrate wallet connection.
            </li>
          </ul>

          <h3>Phase 4: Specialization & Portfolio (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Learn DeFi patterns (AMM, lending) OR
              NFT standards (ERC-721, ERC-1155). Pick your focus.
            </li>
            <li>
              <strong>Month 8:</strong> Build 2-3 portfolio projects. Contribute
              to open source. Join hackathons.
            </li>
            <li>
              <strong>Month 9:</strong> Learn security best practices. Audit
              your own code. Start applying for roles.
            </li>
          </ul>

          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <BookOpen className="h-5 w-5 text-primary" />
              Accelerated Path: Hackathons
            </h4>
            <p className="text-sm">
              Hackathons are the fastest way to learn and get noticed. Top Web3
              hackathons:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                • <strong>ETHGlobal:</strong> Largest Ethereum hackathons with
                $100K+ prizes
              </li>
              <li>
                • <strong>Buildspace:</strong> Project-based learning with
                community
              </li>
              <li>
                • <strong>Gitcoin:</strong> Open source bounties and grants
              </li>
              <li>
                • <strong>Devfolio:</strong> India-focused with many Web3 tracks
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Wallet className="h-6 w-6 text-primary" />
            5. Portfolio Projects to Build
          </h2>

          <p>
            Blockchain hiring is very project-focused. GitHub portfolio and
            deployed dApps matter more than degrees.
          </p>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Simple Token (ERC-20)</p>
              <p className="mt-1 text-muted-foreground">
                Create your own fungible token with minting, burning, and
                transfer functionality. Deploy to testnet.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Solidity basics, OpenZeppelin, Hardhat
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Wallet Connect dApp</p>
              <p className="mt-1 text-muted-foreground">
                React app that connects to MetaMask, displays balance, and sends
                transactions.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: React, Ethers.js, Wagmi
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. NFT Collection with Minting dApp</p>
              <p className="mt-1 text-muted-foreground">
                ERC-721 smart contract with frontend for minting. Store metadata
                on IPFS. Add whitelist functionality.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: ERC-721, IPFS, Merkle trees, React
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Decentralized Crowdfunding</p>
              <p className="mt-1 text-muted-foreground">
                Smart contract for creating campaigns, contributing funds, and
                withdrawing if goal is met.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Solidity, State management, Testing
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. DeFi: Token Swap (Mini Uniswap)</p>
              <p className="mt-1 text-muted-foreground">
                Build a simplified AMM (Automated Market Maker) with liquidity
                pools and token swapping.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: DeFi concepts, Complex Solidity, Math
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. DAO with Governance</p>
              <p className="mt-1 text-muted-foreground">
                Create a DAO with proposal creation, voting, and execution. Use
                governance tokens.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Governance patterns, Timelock, OpenZeppelin Governor
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            6. Salary & Top Companies
          </h2>

          <h3>Salary Expectations</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">India</th>
                  <th className="p-3 text-left">US (Remote)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Junior Blockchain Developer</td>
                  <td className="p-3">₹10-20 LPA</td>
                  <td className="p-3">$80K-120K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Mid-Level Solidity Developer</td>
                  <td className="p-3">₹20-40 LPA</td>
                  <td className="p-3">$120K-180K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Senior Blockchain Engineer</td>
                  <td className="p-3">₹40-80 LPA</td>
                  <td className="p-3">$180K-250K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Smart Contract Auditor</td>
                  <td className="p-3">₹30-60 LPA</td>
                  <td className="p-3">$150K-300K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Note:</strong> Many blockchain roles are remote-first and
            pay globally competitive salaries. Companies often pay in crypto +
            stablecoins.
          </p>

          <h3>Top Blockchain Companies & Protocols</h3>
          <p>
            <strong>Major Protocols:</strong> Ethereum Foundation, Polygon,
            Solana Labs, Arbitrum, Optimism, Chainlink
          </p>
          <p>
            <strong>DeFi:</strong> Uniswap, Aave, Compound, MakerDAO, Lido,
            Curve
          </p>
          <p>
            <strong>Infrastructure:</strong> Alchemy, Infura, The Graph,
            OpenSea, Coinbase, Circle
          </p>
          <p>
            <strong>Indian Companies:</strong> Polygon (Matic), CoinDCX, WazirX,
            Mudrex, Hike (Rush Gaming)
          </p>
        </section>

        {/* Section 7: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            7. Best Learning Resources (Free)
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">CryptoZombies</p>
              <p className="mt-1 text-muted-foreground">
                Free, gamified Solidity tutorial. Build a zombie game while
                learning smart contracts. Start here.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Alchemy University</p>
              <p className="mt-1 text-muted-foreground">
                Comprehensive free course covering Solidity, Ethereum, and
                full-stack dApp development.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                Patrick Collins (YouTube/freeCodeCamp)
              </p>
              <p className="mt-1 text-muted-foreground">
                32-hour Solidity course. Extremely detailed and practical.
                Industry standard.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">SpeedRunEthereum</p>
              <p className="mt-1 text-muted-foreground">
                Hands-on challenges building real dApps with Scaffold-ETH. Great
                for learning by doing.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Solidity by Example</p>
              <p className="mt-1 text-muted-foreground">
                Code examples for common patterns and concepts. Excellent
                reference.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            8. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Is blockchain still a good career choice after the crypto crash?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Crypto prices are volatile, but blockchain
                development keeps growing. Major companies (JPMorgan, Nike,
                Starbucks) are building on blockchain. Developer demand
                consistently exceeds supply.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need to invest in crypto to work in blockchain?
              </p>
              <p className="mt-2 text-muted-foreground">
                No. You'll need testnet tokens (free) for development, but you
                don't need to invest real money. Many developers use stablecoins
                for salary to avoid volatility.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I learn Solidity or Rust?</p>
              <p className="mt-2 text-muted-foreground">
                Start with Solidity—it has 80%+ of the job market (Ethereum,
                Polygon, Arbitrum, etc.). Learn Rust later if you want to work
                on Solana or blockchain infrastructure.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I get a blockchain job without a CS degree?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! Blockchain is extremely meritocratic. Your GitHub
                portfolio, hackathon projects, and open source contributions
                matter far more than degrees. Many top developers are
                self-taught.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How long does it take to become job-ready?
              </p>
              <p className="mt-2 text-muted-foreground">
                With consistent effort (3-4 hours/day), 6-9 months is realistic.
                If you already know JavaScript/React, you can cut that to 4-6
                months focusing only on blockchain skills.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Join the Web3 Revolution</h2>
          <p>
            Blockchain is one of the most exciting fields in tech. It's still
            early—like joining the web in 1995. The developers building today's
            infrastructure will shape the future of finance, gaming, identity,
            and more.
          </p>
          <p>
            Start with CryptoZombies today. Join a Discord community. Build your
            first smart contract this week. The barrier to entry is lower than
            you think.
          </p>
          <p className="text-lg font-semibold text-primary">
            Decentralization is the future. Build it. 🔗
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/software-development-internships-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              SDE Internships Guide
            </Link>
            <Link
              href="/blog/open-source-contribution-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Open Source Guide
            </Link>
            <Link
              href="/blog/freelancing-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Freelancing for Students
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Tech Internships
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on insights from blockchain developers at leading
                protocols and Web3 companies. Our team helps students navigate
                emerging tech careers.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
