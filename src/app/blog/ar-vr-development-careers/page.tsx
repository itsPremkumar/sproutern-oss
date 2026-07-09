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
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Eye,
  Glasses,
  Gamepad2,
  Box,
  Palette,
  Smartphone,
  Monitor,
  Headphones,
  Camera,
  Play,
  Compass,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AR/VR Development Careers: Complete Guide',
  description:
    'Start your AR/VR development career. Learn about Unity, Unreal Engine, XR development, job opportunities, skills required, and salary expectations in immersive technology.',
  keywords: [
    'ar vr career',
    'vr developer',
    'ar developer',
    'unity developer',
    'unreal engine career',
    'xr development',
    'metaverse jobs',
    'virtual reality salary',
    'augmented reality internship',
    'spatial computing',
  ],
  openGraph: {
    title: 'AR/VR Development Careers: Complete Guide',
    description:
      'Launch your career in augmented and virtual reality development.',
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
          <div className="mb-4 flex items-center gap-2 text-fuchsia-600">
            <Glasses className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emerging Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            AR/VR Development Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            From the Vision Pro to Quest 3 to enterprise training, immersive
            technology is transforming how we work and play. This comprehensive
            guide will help you build a career in AR/VR development.
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
                1. What is AR/VR/XR?
              </a>
            </li>
            <li>
              <a
                href="#market"
                className="text-primary hover:underline"
              >
                2. Market & Opportunities
              </a>
            </li>
            <li>
              <a
                href="#applications"
                className="text-primary hover:underline"
              >
                3. Applications & Use Cases
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                4. Career Paths & Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                5. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                6. Tools & Platforms
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                7. Learning Roadmap
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
                10. Portfolio Projects
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
        <div className="not-prose mb-10 rounded-lg border border-fuchsia-200 bg-fuchsia-50 p-6 dark:border-fuchsia-800 dark:bg-fuchsia-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-fuchsia-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-fuchsia-600" />
              <span>XR market projected to reach $450 billion by 2030</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-fuchsia-600" />
              <span>
                Apple Vision Pro & Meta Quest are driving consumer adoption
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-fuchsia-600" />
              <span>
                Unity and Unreal Engine are the dominant development platforms
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-fuchsia-600" />
              <span>
                Salaries range from ₹8-45 LPA in India to $80K-200K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-fuchsia-600" />
              <span>
                Enterprise XR (training, collaboration) is the fastest-growing
                segment
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is AR/VR/XR */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            1. What is AR/VR/XR?
          </h2>

          <p>
            <strong>Extended Reality (XR)</strong> is the umbrella term for all
            immersive technologies that blend the physical and digital worlds.
            It encompasses Augmented Reality (AR), Virtual Reality (VR), and
            Mixed Reality (MR).
          </p>

          <h3>The XR Spectrum</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Augmented Reality (AR)</p>
              <p className="text-muted-foreground">
                Overlays digital content on the real world. Your phone camera
                showing Pokémon, furniture apps, or navigation arrows.
              </p>
              <p className="mt-2 text-xs text-primary">
                Examples: Pokémon GO, IKEA Place, Google Lens
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Virtual Reality (VR)</p>
              <p className="text-muted-foreground">
                Fully immersive digital environment. Headsets block the real
                world and replace it with a virtual one.
              </p>
              <p className="mt-2 text-xs text-primary">
                Examples: Meta Quest, Beat Saber, VR training
              </p>
            </div>
            <div className="border-l-4 border-fuchsia-500 py-2 pl-4">
              <p className="font-bold">Mixed Reality (MR)</p>
              <p className="text-muted-foreground">
                Digital objects interact with the real world. You can place
                virtual objects on real surfaces and interact with both.
              </p>
              <p className="mt-2 text-xs text-primary">
                Examples: Apple Vision Pro, HoloLens
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Spatial Computing</p>
              <p className="text-muted-foreground">
                Apple's term for computing that understands and interacts with
                the 3D space around you. The future interface paradigm.
              </p>
              <p className="mt-2 text-xs text-primary">
                Examples: visionOS apps, 3D interfaces
              </p>
            </div>
          </div>

          <h3>Key Hardware Categories</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Examples</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Standalone VR</td>
                  <td className="p-3">Meta Quest 3, Pico 4</td>
                  <td className="p-3">Consumer, gaming, fitness</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">PC VR</td>
                  <td className="p-3">Valve Index, HP Reverb</td>
                  <td className="p-3">High-end gaming, simulation</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Premium MR</td>
                  <td className="p-3">Apple Vision Pro</td>
                  <td className="p-3">Productivity, spatial computing</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Enterprise MR</td>
                  <td className="p-3">HoloLens 2, Magic Leap 2</td>
                  <td className="p-3">Industrial, training</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Mobile AR</td>
                  <td className="p-3">Smartphones, tablets</td>
                  <td className="p-3">Mass market, social AR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Market & Opportunities */}
        <section
          id="market"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            2. Market & Opportunities
          </h2>

          <h3>Market Size & Growth</h3>
          <ul>
            <li>$62 billion in 2024 → $450+ billion by 2030</li>
            <li>~25% compound annual growth rate (CAGR)</li>
            <li>Enterprise XR growing faster than consumer</li>
            <li>Apple Vision Pro driving developer interest</li>
          </ul>

          <h3>Key Growth Drivers</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Better Hardware</p>
              <p className="mt-1 text-muted-foreground">
                Quest 3 and Vision Pro represent major leaps in quality,
                comfort, and capability. Prices decreasing while quality
                increases.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Enterprise Adoption</p>
              <p className="mt-1 text-muted-foreground">
                Training, design review, remote collaboration. Companies seeing
                clear ROI from XR investments.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">AI Integration</p>
              <p className="mt-1 text-muted-foreground">
                AI-powered hand tracking, scene understanding, content
                generation. Makes XR more natural and easier to develop.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Career Insight:</strong> The XR job market is cyclical—
              hype → cooling → steady growth. We're now in the steady growth
              phase with real enterprise adoption. Good time to build skills.
            </div>
          </div>
        </section>

        {/* Section 3: Applications */}
        <section
          id="applications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. Applications & Use Cases
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-fuchsia-500" />
                <p className="font-bold text-fuchsia-500">
                  Gaming & Entertainment
                </p>
              </div>
              <p className="text-muted-foreground">
                The largest consumer segment. VR games (Beat Saber, Half-Life
                Alyx), social VR (VRChat, Rec Room), media consumption.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">Training & Education</p>
              </div>
              <p className="text-muted-foreground">
                Medical training, industrial skills, soft skills, safety
                training. VR training can improve retention by 70%. Fastest-
                growing enterprise segment.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Box className="h-5 w-5 text-orange-500" />
                <p className="font-bold text-orange-500">
                  Design & Visualization
                </p>
              </div>
              <p className="text-muted-foreground">
                Architecture walkthroughs, automotive design, product
                visualization. Review designs in 3D before building.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">Remote Collaboration</p>
              </div>
              <p className="text-muted-foreground">
                Virtual meetings, shared workspaces, telepresence. Post-
                pandemic push for better remote collaboration.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-purple-500" />
                <p className="font-bold text-purple-500">Retail & E-commerce</p>
              </div>
              <p className="text-muted-foreground">
                Virtual try-on (glasses, makeup, clothes), furniture placement,
                product visualization. AR driving conversions.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Compass className="h-5 w-5 text-red-500" />
                <p className="font-bold text-red-500">
                  Navigation & Wayfinding
                </p>
              </div>
              <p className="text-muted-foreground">
                AR navigation in malls, airports, cities. Google Maps Live View.
                Indoor positioning systems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            4. Career Paths & Job Roles
          </h2>

          <h3>Development Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-fuchsia-500">
                XR/VR Developer (Most In-Demand)
              </p>
              <p className="mt-1 text-muted-foreground">
                Build VR/AR applications using Unity or Unreal Engine. Implement
                interactions, performance optimization, and platform-specific
                features.
              </p>
              <p className="mt-2 text-xs">
                Skills: Unity/Unreal, C#/C++, 3D math, XR SDKs
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Unity Developer (AR/VR Focus)
              </p>
              <p className="mt-1 text-muted-foreground">
                Specialize in Unity for XR development. Most common path due to
                Unity's market dominance in XR.
              </p>
              <p className="mt-2 text-xs">
                Skills: Unity, C#, XR Interaction Toolkit, platform SDKs
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                3D Artist/Technical Artist
              </p>
              <p className="mt-1 text-muted-foreground">
                Create and optimize 3D assets for real-time rendering. Bridge
                between artists and developers.
              </p>
              <p className="mt-2 text-xs">
                Skills: Blender/Maya, Substance, optimization, shaders
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">XR UX Designer</p>
              <p className="mt-1 text-muted-foreground">
                Design spatial interfaces and interactions. Unique discipline
                combining UX with 3D and embodied interaction.
              </p>
              <p className="mt-2 text-xs">
                Skills: Spatial design, prototyping, user research, 3D tools
              </p>
            </div>
          </div>

          <h3>Specialized Roles</h3>
          <ul>
            <li>
              <strong>visionOS Developer:</strong> Apple Vision Pro and spatial
              computing
            </li>
            <li>
              <strong>Graphics/Rendering Engineer:</strong> Shaders, rendering
              optimization
            </li>
            <li>
              <strong>Interaction Designer:</strong> Hand tracking, eye
              tracking, haptics
            </li>
            <li>
              <strong>XR Researcher:</strong> Advancing state of the art
              (academia, labs)
            </li>
          </ul>
        </section>

        {/* Section 5: Essential Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            5. Essential Skills
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
                  <td className="p-3 font-medium">Unity</td>
                  <td className="p-3">Dominant XR engine, most job listings</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">C#</td>
                  <td className="p-3">Unity's primary scripting language</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">3D Math</td>
                  <td className="p-3">Vectors, quaternions, matrices for 3D</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">XR SDKs</td>
                  <td className="p-3">
                    Meta XR SDK, ARCore/ARKit, XR Interaction Toolkit
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Unreal Engine</td>
                  <td className="p-3">Higher-end graphics, some enterprises</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">3D Modeling Basics</td>
                  <td className="p-3">Understand assets, optimization</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>XR-Specific Knowledge</h3>
          <ul>
            <li>
              <strong>Performance Optimization:</strong> 72-90 FPS required for
              comfort
            </li>
            <li>
              <strong>Comfort & Safety:</strong> Preventing motion sickness
            </li>
            <li>
              <strong>Spatial Interaction:</strong> Hand tracking, controllers,
              gaze
            </li>
            <li>
              <strong>Platform Guidelines:</strong> Meta, Apple, SteamVR
              requirements
            </li>
          </ul>
        </section>

        {/* Section 6: Tools & Platforms */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-primary" />
            6. Tools & Platforms
          </h2>

          <h3>Game Engines</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Unity (Recommended Start)
              </p>
              <p className="mt-1 text-muted-foreground">
                Dominant in XR with 60%+ market share. Easier learning curve,
                massive community, free for learning. C# scripting.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Unreal Engine</p>
              <p className="mt-1 text-muted-foreground">
                Superior graphics, growing in XR. More complex but powerful.
                Blueprint visual scripting or C++. Great for high-fidelity apps.
              </p>
            </div>
          </div>

          <h3>XR Development SDKs</h3>
          <ul>
            <li>
              <strong>Meta XR SDK:</strong> For Quest development (largest
              platform)
            </li>
            <li>
              <strong>ARCore/ARKit:</strong> Mobile AR on Android/iOS
            </li>
            <li>
              <strong>Unity XR Interaction Toolkit:</strong> Cross-platform XR
              interactions
            </li>
            <li>
              <strong>visionOS SDK:</strong> Apple Vision Pro development
            </li>
            <li>
              <strong>OpenXR:</strong> Cross-platform standard (use via
              Unity/Unreal)
            </li>
          </ul>

          <h3>3D & Design Tools</h3>
          <ul>
            <li>
              <strong>Blender:</strong> Free, powerful 3D modeling
            </li>
            <li>
              <strong>Substance Painter:</strong> Texturing for games
            </li>
            <li>
              <strong>Figma + ShapesXR:</strong> XR prototyping
            </li>
            <li>
              <strong>Gravity Sketch:</strong> VR 3D design
            </li>
          </ul>
        </section>

        {/* Section 7: Learning Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Compass className="h-6 w-6 text-primary" />
            7. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Unity Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Learn C# programming fundamentals.
              Complete Unity's official tutorials.
            </li>
            <li>
              <strong>Month 2:</strong> Build simple 3D games. Understand
              GameObjects, components, physics, UI.
            </li>
            <li>
              <strong>Month 3:</strong> Learn 3D math (vectors, quaternions).
              Understand transforms and camera systems.
            </li>
          </ul>

          <h3>Phase 2: XR Development (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Set up XR development environment. Build
              first VR experience for Quest.
            </li>
            <li>
              <strong>Month 5:</strong> Master XR Interaction Toolkit. Implement
              hand tracking, teleportation, grab interactions.
            </li>
            <li>
              <strong>Month 6:</strong> Learn AR development with ARCore/ARKit.
              Build mobile AR experiences.
            </li>
          </ul>

          <h3>Phase 3: Specialization (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Performance optimization for VR. Hit
              frame rate targets. Optimize assets.
            </li>
            <li>
              <strong>Month 8:</strong> Choose specialization: gaming,
              enterprise training, social VR, or visionOS.
            </li>
            <li>
              <strong>Month 9:</strong> Deep dive into chosen area. Study
              successful apps in your niche.
            </li>
          </ul>

          <h3>Phase 4: Portfolio & Job Prep (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build 2-3 polished portfolio projects.
              Publish to stores if possible.
            </li>
            <li>
              <strong>Month 11:</strong> Polish portfolio, create demo videos.
              Set up online presence.
            </li>
            <li>
              <strong>Month 12:</strong> Apply for jobs. Prepare for technical
              interviews and design challenges.
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
                  <td className="p-3">Unity XR Developer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-28 LPA</td>
                  <td className="p-3">₹32-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">XR Technical Artist</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-22 LPA</td>
                  <td className="p-3">₹25-45 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">XR UX Designer</td>
                  <td className="p-3">₹7-14 LPA</td>
                  <td className="p-3">₹16-30 LPA</td>
                  <td className="p-3">₹35-60 LPA</td>
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
                  <td className="p-3">XR Developer</td>
                  <td className="p-3">$80K-110K</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-230K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">XR Technical Artist</td>
                  <td className="p-3">$70K-100K</td>
                  <td className="p-3">$100K-140K</td>
                  <td className="p-3">$150K-200K</td>
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

          <h3>Platform Companies</h3>
          <ul>
            <li>
              <strong>Meta Reality Labs:</strong> Quest, Horizon, research
            </li>
            <li>
              <strong>Apple:</strong> Vision Pro, visionOS, AR
            </li>
            <li>
              <strong>Microsoft:</strong> HoloLens, Mesh
            </li>
            <li>
              <strong>Magic Leap:</strong> Enterprise AR
            </li>
            <li>
              <strong>Snap:</strong> Spectacles, AR lenses
            </li>
          </ul>

          <h3>Gaming & Entertainment</h3>
          <ul>
            <li>
              <strong>Beat Games (Meta):</strong> Beat Saber team
            </li>
            <li>
              <strong>Valve:</strong> SteamVR, Index
            </li>
            <li>
              <strong>Sony:</strong> PlayStation VR
            </li>
            <li>
              <strong>VRChat:</strong> Social VR platform
            </li>
            <li>
              <strong>Rec Room:</strong> Social gaming
            </li>
          </ul>

          <h3>Enterprise XR</h3>
          <ul>
            <li>
              <strong>Strivr:</strong> VR training
            </li>
            <li>
              <strong>Varjo:</strong> Enterprise headsets
            </li>
            <li>
              <strong>Spatial:</strong> VR collaboration
            </li>
            <li>
              <strong>Niantic:</strong> AR platform (Pokémon GO)
            </li>
          </ul>

          <h3>Indian XR Companies</h3>
          <ul>
            <li>
              <strong>Tesseract (Reliance):</strong> AR/VR hardware and software
            </li>
            <li>
              <strong>SmartVizX:</strong> Architecture VR
            </li>
            <li>
              <strong>AjnaLens:</strong> Enterprise AR glasses
            </li>
            <li>
              <strong>Imaginate:</strong> Industrial AR/VR
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
            10. Portfolio Projects
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. VR Room Escape Game</p>
              <p className="mt-1 text-muted-foreground">
                Build a simple escape room with puzzles, grabbable objects, and
                basic locomotion. Learn core VR interactions.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. AR Furniture Placement App</p>
              <p className="mt-1 text-muted-foreground">
                Place and move 3D furniture on real surfaces. Learn plane
                detection, object placement, and mobile AR.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. VR Training Simulation</p>
              <p className="mt-1 text-muted-foreground">
                Create a training scenario (safety, assembly, soft skills).
                Include scoring, feedback, and analytics.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Multiplayer VR Experience</p>
              <p className="mt-1 text-muted-foreground">
                Build a shared VR space with avatars and real-time interaction.
                Learn networking for XR.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Hand Tracking Game</p>
              <p className="mt-1 text-muted-foreground">
                Create a controller-free experience using hand tracking. Design
                natural gesture-based interactions.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Published App on Quest Store</p>
              <p className="mt-1 text-muted-foreground">
                Go through the full process: polish, optimize, submit, and
                iterate based on user feedback.
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

          <h3>Free Courses</h3>
          <ul>
            <li>
              <strong>Unity Learn:</strong> Official tutorials, XR content
            </li>
            <li>
              <strong>Meta Quest Developer Hub:</strong> Official tutorials and
              docs
            </li>
            <li>
              <strong>Coursera - XR Specialization:</strong> University courses
            </li>
            <li>
              <strong>YouTube - VR with Andrew:</strong> Unity XR tutorials
            </li>
          </ul>

          <h3>Paid Courses</h3>
          <ul>
            <li>
              <strong>Udemy - Unity XR Courses:</strong> Comprehensive
              project-based
            </li>
            <li>
              <strong>Unity Certified Developer:</strong> Official certification
            </li>
          </ul>

          <h3>Communities</h3>
          <ul>
            <li>
              <strong>Meta Developer Forums:</strong> Quest development help
            </li>
            <li>
              <strong>Unity XR Forum:</strong> Unity-specific XR discussion
            </li>
            <li>
              <strong>r/virtualreality:</strong> Reddit VR community
            </li>
            <li>
              <strong>VR/AR Association:</strong> Industry organization
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
              <p className="font-bold">Is VR dead or is it still growing?</p>
              <p className="mt-2 text-muted-foreground">
                Growing steadily. The hype-crash cycle is normal for emerging
                tech. Quest 3 and Vision Pro signal continued investment.
                Enterprise adoption is strong.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Unity or Unreal Engine?</p>
              <p className="mt-2 text-muted-foreground">
                Start with Unity—it dominates XR job listings and is easier to
                learn. Learn Unreal later if you want high-fidelity graphics or
                AAA game development.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need a VR headset to learn XR development?
              </p>
              <p className="mt-2 text-muted-foreground">
                Strongly recommended. Meta Quest 2/3 is affordable and great for
                development. You can start with Unity simulators but need real
                hardware eventually.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I focus on AR or VR?</p>
              <p className="mt-2 text-muted-foreground">
                Both skills are valuable and transferable. VR has more jobs
                currently; AR has larger long-term potential. Start with one,
                then add the other.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: Build the Future of Interaction
          </h2>

          <p>
            XR represents the next major computing platform—moving from 2D
            screens to 3D spatial computing. The skills you build now will be
            increasingly valuable as the technology matures.
          </p>

          <p>
            Start with Unity and build your first VR experience. Get a Quest
            headset and develop for it. The best way to learn XR is to build and
            iterate. The immersive future needs developers like you.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/game-development-career"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Game Development Guide →
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
