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
  Cpu,
  Zap,
  GraduationCap,
  Building2,
  Settings,
  Cog,
  Wrench,
  Factory,
  Bot,
  CircuitBoard,
  Hammer,
  Navigation,
  Eye,
  Hand,
  Layers,
  Box,
  GitBranch,
  Terminal,
  FileCode,
  Rocket,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Robotics & Automation Careers: Complete Guide',
  description:
    'Start your robotics and automation career. Learn about ROS, industrial automation, AI robotics, job opportunities, skills required, and salary expectations.',
  keywords: [
    'robotics career',
    'robotics engineer',
    'automation engineer',
    'ROS developer',
    'industrial robotics',
    'robotics internship',
    'autonomous systems',
    'robotics salary',
    'mechatronics career',
    'robot programming',
  ],
  openGraph: {
    title: 'Robotics & Automation Careers: Complete Guide',
    description:
      'Launch your career in robotics and automation with this comprehensive guide.',
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
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Bot className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emerging Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Robotics & Automation Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            From manufacturing floors to Mars rovers, robotics is transforming
            every industry. This comprehensive guide will help you navigate the
            exciting world of robotics and automation careers.
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
              <span>24 min read</span>
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
                1. What is Robotics & Automation?
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                2. Types of Robotics
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
                11. Future of Robotics
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
        <div className="not-prose mb-10 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-orange-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                Global robotics market projected to reach $225 billion by 2030
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                Salaries range from ₹8-50 LPA in India to $80K-180K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                ROS (Robot Operating System) is the industry standard framework
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>Python and C++ are the primary programming languages</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                Hands-on projects and competitions are crucial for career entry
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Robotics */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-primary" />
            1. What is Robotics & Automation?
          </h2>

          <p>
            <strong>Robotics</strong> is the interdisciplinary field that
            combines mechanical engineering, electrical engineering, and
            computer science to design, build, and operate robots—machines that
            can perform tasks autonomously or semi-autonomously.
          </p>

          <p>
            <strong>Automation</strong> refers to the use of technology to
            perform tasks with minimal human intervention. While all robots
            involve some automation, not all automation uses robots—it can also
            include software systems, PLCs, and control systems.
          </p>

          <h3>Core Components of a Robot</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Sensors (Perception)</p>
              <p className="text-muted-foreground">
                Cameras, LiDAR, ultrasonic, IMUs, encoders—allowing robots to
                perceive their environment and internal state.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Actuators (Action)</p>
              <p className="text-muted-foreground">
                Motors, servos, pneumatics, hydraulics—the muscles that enable
                physical movement and manipulation.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Controllers (Brain)</p>
              <p className="text-muted-foreground">
                Microcontrollers, PLCs, embedded computers—processing sensor
                data and commanding actuators.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Software (Intelligence)</p>
              <p className="text-muted-foreground">
                Algorithms for perception, planning, control, and learning that
                give robots their capabilities.
              </p>
            </div>
          </div>

          <h3>The Robotics Stack</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Layer</th>
                  <th className="p-3 text-left">Components</th>
                  <th className="p-3 text-left">Skills Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Application</td>
                  <td className="p-3">User interfaces, task planning</td>
                  <td className="p-3">Python, ROS, AI/ML</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Perception</td>
                  <td className="p-3">Computer vision, sensor fusion, SLAM</td>
                  <td className="p-3">OpenCV, PCL, deep learning</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Planning</td>
                  <td className="p-3">Path planning, motion planning</td>
                  <td className="p-3">Algorithms, optimization</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Control</td>
                  <td className="p-3">Motor control, PID, dynamics</td>
                  <td className="p-3">C++, control theory</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Hardware</td>
                  <td className="p-3">Sensors, actuators, mechanics</td>
                  <td className="p-3">Electronics, mechanical design</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Types of Robotics */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. Types of Robotics
          </h2>

          <h3>By Application Domain</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">Industrial Robotics</p>
              <p className="mt-1 text-muted-foreground">
                Manufacturing, assembly lines, welding, painting, material
                handling. Dominated by FANUC, ABB, KUKA, and Yaskawa.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key Skills: PLC programming, robot programming (RAPID, KRL),
                safety
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Mobile Robotics</p>
              <p className="mt-1 text-muted-foreground">
                AGVs, AMRs, delivery robots, warehouse automation. Fast-growing
                segment with companies like Boston Dynamics, ANYbotics.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key Skills: SLAM, navigation, ROS, sensor fusion
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Autonomous Vehicles</p>
              <p className="mt-1 text-muted-foreground">
                Self-driving cars, trucks, drones, agricultural robots. Major
                investment from Tesla, Waymo, Aurora, and automotive giants.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key Skills: Computer vision, deep learning, sensor fusion,
                simulation
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Medical & Surgical Robotics
              </p>
              <p className="mt-1 text-muted-foreground">
                Surgical robots (da Vinci), rehabilitation robots, prosthetics,
                medical imaging robots. High-precision, high-stakes
                applications.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key Skills: Haptics, precision control, safety-critical systems
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">
                Consumer & Service Robotics
              </p>
              <p className="mt-1 text-muted-foreground">
                Vacuum robots (Roomba), social robots, hospitality robots, home
                assistants. Growing consumer market.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key Skills: HRI, embedded systems, product design
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">
                Space & Defense Robotics
              </p>
              <p className="mt-1 text-muted-foreground">
                Mars rovers, satellite servicing, bomb disposal, surveillance
                drones. Government-funded, high-reliability requirements.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key Skills: Extreme environment design, redundancy,
                space-qualified systems
              </p>
            </div>
          </div>

          <h3>By Robot Form Factor</h3>
          <ul>
            <li>
              <strong>Articulated Arms:</strong> 6-axis industrial robots for
              manipulation (FANUC, Universal Robots)
            </li>
            <li>
              <strong>SCARA:</strong> Fast pick-and-place robots for assembly
            </li>
            <li>
              <strong>Delta/Parallel:</strong> High-speed sorting and packaging
            </li>
            <li>
              <strong>Wheeled Mobile:</strong> AGVs, AMRs for logistics
            </li>
            <li>
              <strong>Legged:</strong> Walking robots for uneven terrain (Spot)
            </li>
            <li>
              <strong>Aerial:</strong> Drones and UAVs for inspection, delivery
            </li>
            <li>
              <strong>Humanoid:</strong> Research and service applications
            </li>
            <li>
              <strong>Collaborative (Cobots):</strong> Safe human-robot
              interaction
            </li>
          </ul>
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

          <h3>Engineering Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                Robotics Software Engineer (Most In-Demand)
              </p>
              <p className="mt-1 text-muted-foreground">
                Develop software for robot perception, planning, and control.
                Work with ROS, implement algorithms, and integrate systems.
              </p>
              <p className="mt-2 text-xs">
                Skills: C++, Python, ROS/ROS2, Linux, algorithms
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Perception/Computer Vision Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Build the "eyes" of robots—object detection, segmentation, 3D
                reconstruction, visual SLAM.
              </p>
              <p className="mt-2 text-xs">
                Skills: OpenCV, deep learning, PCL, sensor calibration
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                Motion Planning Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Develop algorithms for robot motion—path planning, trajectory
                optimization, collision avoidance.
              </p>
              <p className="mt-2 text-xs">
                Skills: MoveIt, OMPL, optimization, kinematics/dynamics
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Controls Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Design and tune control systems for stable, precise robot
                motion. Work on PID, MPC, and adaptive control.
              </p>
              <p className="mt-2 text-xs">
                Skills: Control theory, MATLAB/Simulink, real-time systems
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">
                Mechanical/Hardware Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Design robot structures, select actuators, create custom
                mechanisms, and handle fabrication.
              </p>
              <p className="mt-2 text-xs">
                Skills: CAD (SolidWorks), FEA, mechanism design, materials
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">
                Embedded Systems Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Develop firmware for microcontrollers, interface with sensors
                and actuators, optimize for real-time performance.
              </p>
              <p className="mt-2 text-xs">
                Skills: C/C++, RTOS, hardware/software integration
              </p>
            </div>
          </div>

          <h3>Specialized Roles</h3>
          <ul>
            <li>
              <strong>SLAM Engineer:</strong> Simultaneous localization and
              mapping for mobile robots
            </li>
            <li>
              <strong>Manipulation Engineer:</strong> Grasping, dexterous
              manipulation, force control
            </li>
            <li>
              <strong>Simulation Engineer:</strong> Gazebo, Isaac Sim, realistic
              robot testing environments
            </li>
            <li>
              <strong>Systems Integration Engineer:</strong> Bringing together
              software, hardware, and infrastructure
            </li>
            <li>
              <strong>Field Robotics Engineer:</strong> Deploying and
              maintaining robots in real-world settings
            </li>
          </ul>

          <h3>Industrial Automation Roles</h3>
          <ul>
            <li>
              <strong>Automation Engineer:</strong> Design and implement
              automated manufacturing systems
            </li>
            <li>
              <strong>PLC Programmer:</strong> Program industrial controllers
              (Siemens, Allen-Bradley)
            </li>
            <li>
              <strong>Robot Programmer:</strong> Teach and program industrial
              robots on the factory floor
            </li>
            <li>
              <strong>Controls Technician:</strong> Maintain and troubleshoot
              automation systems
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

          <h3>Programming Languages</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Language</th>
                  <th className="p-3 text-left">Use Case</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">C++</td>
                  <td className="p-3">
                    Performance-critical robotics code, ROS nodes, real-time
                    control
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Python</td>
                  <td className="p-3">
                    Rapid prototyping, scripting, ML integration, ROS tools
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">MATLAB</td>
                  <td className="p-3">
                    Control system design, simulation, algorithm development
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">C</td>
                  <td className="p-3">
                    Embedded systems, microcontroller programming
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Rust</td>
                  <td className="p-3">
                    Emerging for safety-critical robotics applications
                  </td>
                  <td className="p-3 text-blue-600">🔵 Growing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Frameworks & Tools</h3>
          <ul>
            <li>
              <strong>ROS/ROS2:</strong> Robot Operating System—the industry
              standard middleware for robotics
            </li>
            <li>
              <strong>Gazebo:</strong> Robot simulation with physics engines
            </li>
            <li>
              <strong>OpenCV:</strong> Computer vision library for image
              processing
            </li>
            <li>
              <strong>PCL:</strong> Point Cloud Library for 3D data processing
            </li>
            <li>
              <strong>MoveIt:</strong> Motion planning framework for
              manipulation
            </li>
            <li>
              <strong>TensorFlow/PyTorch:</strong> Deep learning for perception
            </li>
          </ul>

          <h3>Mathematics & Theory</h3>
          <ul>
            <li>
              <strong>Linear Algebra:</strong> Transformations, rotations,
              matrices
            </li>
            <li>
              <strong>Kinematics:</strong> Forward and inverse kinematics for
              arms
            </li>
            <li>
              <strong>Dynamics:</strong> Forces, torques, motion equations
            </li>
            <li>
              <strong>Control Theory:</strong> PID, state-space, optimal control
            </li>
            <li>
              <strong>Probability & Statistics:</strong> Sensor noise,
              filtering, estimation
            </li>
            <li>
              <strong>Optimization:</strong> Path planning, trajectory
              optimization
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Master ROS2 over ROS1. ROS2 is the
              future with better real-time support, security, and scalability.
              Most new robotics projects use ROS2.
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
            5. 18-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-4)</h3>
          <ul>
            <li>
              <strong>Month 1-2:</strong> Master Python and C++ basics. Learn
              Linux command line. Set up ROS2 development environment.
            </li>
            <li>
              <strong>Month 3:</strong> Study linear algebra and basic physics
              (mechanics, dynamics). Understand coordinate transformations.
            </li>
            <li>
              <strong>Month 4:</strong> Complete ROS2 tutorials. Build your
              first ROS2 package. Simulate a simple robot in Gazebo.
            </li>
          </ul>

          <h3>Phase 2: Core Robotics (Months 5-9)</h3>
          <ul>
            <li>
              <strong>Month 5-6:</strong> Learn kinematics and control theory.
              Implement PID controllers. Simulate robot arms and mobile robots.
            </li>
            <li>
              <strong>Month 7:</strong> Study computer vision with OpenCV. Build
              object detection systems. Integrate cameras with ROS2.
            </li>
            <li>
              <strong>Month 8:</strong> Learn SLAM basics. Implement gmapping or
              cartographer. Build a mapping robot.
            </li>
            <li>
              <strong>Month 9:</strong> Study motion planning with MoveIt2.
              Implement pick-and-place operations.
            </li>
          </ul>

          <h3>Phase 3: Specialization (Months 10-14)</h3>
          <ul>
            <li>
              <strong>Month 10-11:</strong> Choose specialization: mobile
              robots, manipulation, perception, or autonomous vehicles.
            </li>
            <li>
              <strong>Month 12-13:</strong> Deep dive into chosen area. Read
              research papers. Implement advanced algorithms.
            </li>
            <li>
              <strong>Month 14:</strong> Build substantial portfolio projects.
              Document everything on GitHub.
            </li>
          </ul>

          <h3>Phase 4: Industry Preparation (Months 15-18)</h3>
          <ul>
            <li>
              <strong>Month 15:</strong> Participate in robotics competitions
              (RoboCup, FIRST, Robocon) if possible.
            </li>
            <li>
              <strong>Month 16:</strong> Contribute to open-source robotics
              projects (ROS packages, OpenCV, etc.).
            </li>
            <li>
              <strong>Month 17-18:</strong> Apply for internships and jobs.
              Prepare for technical interviews.
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
              <p className="font-bold">
                Mechanical Engineering + Robotics Focus
              </p>
              <p className="mt-1 text-muted-foreground">
                Strong foundation in mechanisms, dynamics, and design. Add
                programming and controls courses for robotics focus.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Electrical/Electronics Engineering</p>
              <p className="mt-1 text-muted-foreground">
                Essential for embedded systems, sensor integration, and control
                electronics. Great for hardware-focused roles.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Computer Science</p>
              <p className="mt-1 text-muted-foreground">
                Strong programming and algorithms foundation. Best for software-
                focused robotics roles (perception, planning).
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Mechatronics Engineering</p>
              <p className="mt-1 text-muted-foreground">
                Dedicated robotics-related degree combining mechanical,
                electrical, and software. Ideal if available.
              </p>
            </div>
          </div>

          <h3>Top Programs in India</h3>
          <ul>
            <li>IIT Bombay - Systems & Control Engineering</li>
            <li>IIT Madras - Robotics Research Lab</li>
            <li>IIT Kanpur - Center for Robotics</li>
            <li>
              IISc Bangalore - Centre for Product Design and Manufacturing
            </li>
            <li>BITS Pilani - Mechatronics</li>
            <li>VIT - School of Mechanical Engineering</li>
          </ul>

          <h3>Top Global Programs</h3>
          <ul>
            <li>CMU Robotics Institute (world's best)</li>
            <li>MIT CSAIL / MechE</li>
            <li>Stanford Artificial Intelligence Lab</li>
            <li>ETH Zurich Autonomous Systems Lab</li>
            <li>Georgia Tech Robotics</li>
            <li>University of Michigan Robotics</li>
          </ul>
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

          <h3>Autonomous Vehicles</h3>
          <ul>
            <li>
              <strong>Tesla:</strong> Autopilot/FSD development
            </li>
            <li>
              <strong>Waymo:</strong> Leading autonomous driving (Alphabet)
            </li>
            <li>
              <strong>Aurora:</strong> Trucking autonomy startup
            </li>
            <li>
              <strong>Cruise:</strong> GM's autonomous vehicle unit
            </li>
            <li>
              <strong>Nuro:</strong> Autonomous delivery vehicles
            </li>
            <li>
              <strong>Ola Electric/Krutrim:</strong> India autonomous mobility
            </li>
          </ul>

          <h3>Industrial & Logistics Robotics</h3>
          <ul>
            <li>
              <strong>Amazon Robotics:</strong> Warehouse automation (Kiva)
            </li>
            <li>
              <strong>Boston Dynamics:</strong> Advanced mobile robots (Spot,
              Atlas)
            </li>
            <li>
              <strong>FANUC/ABB/KUKA:</strong> Industrial robot manufacturers
            </li>
            <li>
              <strong>Universal Robots:</strong> Collaborative robots leader
            </li>
            <li>
              <strong>Locus Robotics:</strong> Warehouse AMRs
            </li>
            <li>
              <strong>GreyOrange:</strong> Indian warehouse robotics
            </li>
          </ul>

          <h3>Consumer & Service Robotics</h3>
          <ul>
            <li>
              <strong>iRobot:</strong> Roomba and home robots
            </li>
            <li>
              <strong>NVIDIA:</strong> Isaac robotics platform
            </li>
            <li>
              <strong>Dyson:</strong> Home robotics R&D
            </li>
            <li>
              <strong>Samsung:</strong> Bespoke robots
            </li>
          </ul>

          <h3>Space & Defense</h3>
          <ul>
            <li>
              <strong>ISRO:</strong> Space robotics India
            </li>
            <li>
              <strong>NASA/JPL:</strong> Mars rovers, space manipulation
            </li>
            <li>
              <strong>SpaceX:</strong> Rocket autonomous systems
            </li>
            <li>
              <strong>DRDO:</strong> Defense robotics India
            </li>
          </ul>

          <h3>Indian Robotics Startups</h3>
          <ul>
            <li>
              <strong>Addverb:</strong> Warehouse automation (unicorn)
            </li>
            <li>
              <strong>GreyOrange:</strong> AI-powered robotics
            </li>
            <li>
              <strong>Systemantics:</strong> Industrial automation
            </li>
            <li>
              <strong>Miko:</strong> Consumer companion robots
            </li>
            <li>
              <strong>Ati Motors:</strong> Autonomous vehicles for factories
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
                  <td className="p-3">Robotics Software Engineer</td>
                  <td className="p-3">₹8-15 LPA</td>
                  <td className="p-3">₹18-30 LPA</td>
                  <td className="p-3">₹35-60 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Automation Engineer</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-22 LPA</td>
                  <td className="p-3">₹25-40 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Perception Engineer</td>
                  <td className="p-3">₹10-18 LPA</td>
                  <td className="p-3">₹22-35 LPA</td>
                  <td className="p-3">₹40-65 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Mechanical/Hardware Engineer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-25 LPA</td>
                  <td className="p-3">₹30-50 LPA</td>
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
                  <th className="p-3 text-left">Entry Level</th>
                  <th className="p-3 text-left">Mid Level</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Robotics Software Engineer</td>
                  <td className="p-3">$90K-120K</td>
                  <td className="p-3">$130K-170K</td>
                  <td className="p-3">$180K-250K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Perception Engineer</td>
                  <td className="p-3">$100K-130K</td>
                  <td className="p-3">$140K-180K</td>
                  <td className="p-3">$190K-260K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Controls Engineer</td>
                  <td className="p-3">$85K-115K</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                </tr>
              </tbody>
            </table>
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
              <p className="font-bold">1. Line Following Robot</p>
              <p className="mt-1 text-muted-foreground">
                Build a robot that follows a line using IR sensors. Implement
                PID control for smooth tracking.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Arduino/Raspberry Pi, sensors, basic control
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. ROS2 Turtlebot Simulation</p>
              <p className="mt-1 text-muted-foreground">
                Set up Turtlebot in Gazebo. Implement keyboard control and basic
                autonomous navigation.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: ROS2, Gazebo, Linux, Python
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. SLAM-Enabled Mapping Robot</p>
              <p className="mt-1 text-muted-foreground">
                Build a robot with LiDAR/depth camera that creates maps of its
                environment using SLAM2D or ORB-SLAM.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: SLAM, ROS2, sensor integration, localization
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Object Detection & Tracking Robot</p>
              <p className="mt-1 text-muted-foreground">
                Robot that detects and follows specific objects using deep
                learning (YOLO) and camera tracking.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: OpenCV, deep learning, ROS2, control
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Robotic Arm Pick-and-Place</p>
              <p className="mt-1 text-muted-foreground">
                Build or simulate a robot arm that can detect objects, plan
                grasps, and execute pick-and-place operations.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: MoveIt2, kinematics, perception, manipulation
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Autonomous Delivery Robot</p>
              <p className="mt-1 text-muted-foreground">
                Build a robot that can navigate to waypoints, avoid obstacles,
                and deliver payloads—combining all robotics skills.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Navigation stack, path planning, systems integration
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

          <h3>Online Courses</h3>
          <ul>
            <li>
              <strong>Coursera - Modern Robotics (Northwestern):</strong> Best
              theoretical foundation by leading researchers
            </li>
            <li>
              <strong>Udacity - Robotics Software Engineer:</strong>{' '}
              Project-based learning with industry mentors
            </li>
            <li>
              <strong>edX - Autonomous Mobile Robots (ETH Zurich):</strong>
              Excellent mobile robotics course
            </li>
            <li>
              <strong>The Construct:</strong> ROS-focused online courses and
              simulation environment
            </li>
          </ul>

          <h3>Books</h3>
          <ul>
            <li>
              <strong>"Modern Robotics" by Lynch & Park:</strong> Best modern
              textbook with free online version
            </li>
            <li>
              <strong>"Probabilistic Robotics" by Thrun:</strong> Essential for
              perception and localization
            </li>
            <li>
              <strong>"ROS Robot Programming" by ROBOTIS:</strong> Practical ROS
              learning
            </li>
            <li>
              <strong>"Introduction to Autonomous Robots":</strong> Free online
              textbook
            </li>
          </ul>

          <h3>Communities</h3>
          <ul>
            <li>
              <strong>ROS Discourse:</strong> Official ROS community forum
            </li>
            <li>
              <strong>r/robotics:</strong> Active Reddit community
            </li>
            <li>
              <strong>Robotics Stack Exchange:</strong> Q&A for technical
              questions
            </li>
            <li>
              <strong>Discord servers:</strong> ROS, robotics competitions
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
            11. Future of Robotics
          </h2>

          <h3>Near-Term Trends (2025-2030)</h3>
          <ul>
            <li>Massive growth in warehouse and logistics robotics</li>
            <li>Cobots becoming mainstream in manufacturing</li>
            <li>Autonomous delivery (last-mile) deployment</li>
            <li>AI/ML integration for smarter perception and planning</li>
          </ul>

          <h3>Medium-Term (2030-2040)</h3>
          <ul>
            <li>Fully autonomous vehicles in commercial service</li>
            <li>Humanoid robots entering service industries</li>
            <li>Construction and agricultural automation</li>
            <li>Personal robots in homes</li>
          </ul>

          <h3>Emerging Areas</h3>
          <ul>
            <li>
              <strong>Soft robotics:</strong> Compliant, safe robots for human
              interaction
            </li>
            <li>
              <strong>Swarm robotics:</strong> Coordinated multi-robot systems
            </li>
            <li>
              <strong>Bio-inspired robots:</strong> Learning from nature
            </li>
            <li>
              <strong>Cloud robotics:</strong> Robots leveraging cloud computing
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
                Do I need a Master's or PhD for robotics careers?
              </p>
              <p className="mt-2 text-muted-foreground">
                For most industry roles, a Bachelor's with strong projects is
                sufficient. Research positions and advanced roles may prefer
                Master's/PhD, but practical experience matters more.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is ROS necessary to learn?</p>
              <p className="mt-2 text-muted-foreground">
                Yes. ROS/ROS2 is the industry standard for robotics software
                development. Most robotics job postings require ROS experience.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I learn robotics without hardware?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! Simulators like Gazebo, Isaac Sim, and Webots let you learn
                and develop without physical robots. Many companies use
                simulation extensively.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Which is better: industrial automation or autonomous systems?
              </p>
              <p className="mt-2 text-muted-foreground">
                Industrial automation offers more jobs currently and stable
                growth. Autonomous systems (AV, mobile robots) is higher risk/
                higher reward with potentially more cutting-edge work.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How important are robotics competitions?
              </p>
              <p className="mt-2 text-muted-foreground">
                Extremely valuable. Competitions like RoboCup, FIRST, and
                Robocon provide hands-on experience and are highly valued by
                employers. They often lead directly to job opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: Build the Future
          </h2>

          <p>
            Robotics and automation are transforming every industry—from
            manufacturing to healthcare to space exploration. The skills you
            develop in this field will remain valuable for decades.
          </p>

          <p>
            Start with the fundamentals—programming, ROS, and hands-on projects.
            Build a strong portfolio. Join competitions and communities. The
            robots of the future need engineers like you to build them.
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
