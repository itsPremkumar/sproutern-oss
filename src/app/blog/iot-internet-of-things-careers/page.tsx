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
  Wifi,
  Radio,
  Cloud,
  Database,
  Shield,
  Smartphone,
  Thermometer,
  Car,
  Home,
  Factory,
  Heart,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Lock,
  Network,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IoT (Internet of Things) Careers: Complete Guide',
  description:
    'Start your IoT career. Learn about embedded systems, sensors, cloud platforms, job opportunities, required skills, and salary expectations in this connected world.',
  keywords: [
    'iot career',
    'internet of things jobs',
    'iot developer',
    'embedded systems engineer',
    'iot internship',
    'iot salary',
    'smart devices',
    'connected devices',
    'iot platforms',
    'aws iot',
    'azure iot',
  ],
  openGraph: {
    title: 'IoT Careers: Complete Guide ',
    description:
      'Launch your career in IoT with this comprehensive guide covering skills, roadmap, and opportunities.',
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
          <div className="mb-4 flex items-center gap-2 text-teal-600">
            <Wifi className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emerging Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            IoT (Internet of Things) Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            From smart homes to industrial sensors, IoT is connecting billions
            of devices worldwide. This comprehensive guide will help you build a
            career in the internet of things revolution.
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
                1. What is IoT?
              </a>
            </li>
            <li>
              <a
                href="#applications"
                className="text-primary hover:underline"
              >
                2. IoT Applications & Industries
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
                11. Future of IoT
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
        <div className="not-prose mb-10 rounded-lg border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-teal-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-teal-600" />
              <span>
                75+ billion IoT devices expected by 2030 (up from 15 billion in
                2023)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-teal-600" />
              <span>IoT market projected to exceed $1.5 trillion by 2030</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-teal-600" />
              <span>
                Salaries range from ₹6-40 LPA in India to $70K-160K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-teal-600" />
              <span>
                Embedded C, Python, and cloud platforms are essential skills
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-teal-600" />
              <span>
                AWS IoT, Azure IoT, and Google Cloud IoT are leading platforms
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is IoT */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Wifi className="h-6 w-6 text-primary" />
            1. What is IoT (Internet of Things)?
          </h2>

          <p>
            <strong>IoT (Internet of Things)</strong> refers to the network of
            physical devices, vehicles, appliances, and other objects embedded
            with sensors, software, and connectivity that enables them to
            collect and exchange data over the internet.
          </p>

          <p>
            From your smartwatch tracking health metrics to industrial sensors
            monitoring factory equipment, IoT connects the physical and digital
            worlds—enabling automation, insights, and new capabilities.
          </p>

          <h3>IoT Architecture Layers</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-teal-500 py-2 pl-4">
              <p className="font-bold">1. Device/Perception Layer</p>
              <p className="text-muted-foreground">
                Sensors, actuators, microcontrollers that collect data from the
                physical world (temperature, motion, GPS, etc.).
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">2. Connectivity/Network Layer</p>
              <p className="text-muted-foreground">
                Communication protocols (WiFi, Bluetooth, LoRa, 5G, NB-IoT) that
                transmit data from devices to the cloud.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">3. Edge/Gateway Layer</p>
              <p className="text-muted-foreground">
                Local processing and aggregation before sending to cloud.
                Reduces latency and bandwidth requirements.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">4. Cloud/Platform Layer</p>
              <p className="text-muted-foreground">
                Cloud infrastructure for storage, processing, analytics, and
                device management (AWS IoT, Azure IoT).
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">5. Application Layer</p>
              <p className="text-muted-foreground">
                User-facing applications, dashboards, and APIs that deliver
                value from IoT data.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">6. Security Layer</p>
              <p className="text-muted-foreground">
                End-to-end security including device authentication, encryption,
                and secure communication.
              </p>
            </div>
          </div>

          <h3>Key IoT Protocols & Technologies</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Technologies</th>
                  <th className="p-3 text-left">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Short Range</td>
                  <td className="p-3">WiFi, Bluetooth, BLE, Zigbee, Z-Wave</td>
                  <td className="p-3">Smart home, wearables, indoor</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Long Range</td>
                  <td className="p-3">LoRa, NB-IoT, LTE-M, 5G</td>
                  <td className="p-3">Smart cities, agriculture, fleet</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Messaging</td>
                  <td className="p-3">MQTT, CoAP, AMQP, HTTP</td>
                  <td className="p-3">Device-cloud communication</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Hardware</td>
                  <td className="p-3">ESP32, Arduino, Raspberry Pi, STM32</td>
                  <td className="p-3">Prototyping and production</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Applications */}
        <section
          id="applications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. IoT Applications & Industries
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Home className="h-5 w-5 text-teal-500" />
                <p className="font-bold text-teal-500">Smart Home</p>
              </div>
              <p className="text-muted-foreground">
                Smart thermostats, lighting, security cameras, voice assistants,
                connected appliances. Market leaders: Google Nest, Amazon Alexa,
                Apple HomeKit.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Factory className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">Industrial IoT (IIoT)</p>
              </div>
              <p className="text-muted-foreground">
                Predictive maintenance, asset tracking, quality control, supply
                chain optimization. Largest IoT segment by revenue. Companies:
                Siemens, GE, Bosch.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <p className="font-bold text-red-500">Healthcare IoT</p>
              </div>
              <p className="text-muted-foreground">
                Wearable health monitors, remote patient monitoring, smart
                medical devices, hospital asset tracking. Growing rapidly post-
                pandemic.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Car className="h-5 w-5 text-purple-500" />
                <p className="font-bold text-purple-500">Connected Vehicles</p>
              </div>
              <p className="text-muted-foreground">
                Vehicle telematics, fleet management, V2X communication,
                insurance telematics. Every new car is now an IoT device.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">Smart Cities</p>
              </div>
              <p className="text-muted-foreground">
                Traffic management, smart parking, waste management,
                environmental monitoring, public safety. Major government
                investment worldwide.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-orange-500" />
                <p className="font-bold text-orange-500">Smart Agriculture</p>
              </div>
              <p className="text-muted-foreground">
                Precision farming, soil monitoring, automated irrigation, crop
                monitoring, livestock tracking. Critical for food security.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <p className="font-bold text-yellow-500">Energy & Utilities</p>
              </div>
              <p className="text-muted-foreground">
                Smart meters, grid monitoring, renewable energy optimization,
                building energy management. Essential for sustainability.
              </p>
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

          <h3>Hardware/Embedded Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-500">
                Embedded Systems Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Develop firmware for microcontrollers and IoT devices. Write
                drivers, implement protocols, optimize for power and
                performance.
              </p>
              <p className="mt-2 text-xs">
                Skills: C/C++, RTOS, microcontrollers, hardware debugging
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">IoT Hardware Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Design PCBs, select components, integrate sensors and
                communication modules. Work on physical device development.
              </p>
              <p className="mt-2 text-xs">
                Skills: PCB design (Altium, KiCad), electronics, RF design
              </p>
            </div>
          </div>

          <h3>Software/Cloud Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                IoT Software Developer (Most In-Demand)
              </p>
              <p className="mt-1 text-muted-foreground">
                Build applications that process IoT data—from edge computing to
                cloud services to user-facing dashboards.
              </p>
              <p className="mt-2 text-xs">
                Skills: Python, Node.js, MQTT, cloud platforms, APIs
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                IoT Cloud/Platform Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Design and implement cloud infrastructure for IoT at scale.
                Device management, data pipelines, and analytics.
              </p>
              <p className="mt-2 text-xs">
                Skills: AWS IoT, Azure IoT, Kubernetes, serverless
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                IoT Data Engineer/Analyst
              </p>
              <p className="mt-1 text-muted-foreground">
                Build data pipelines for IoT streams. Analyze sensor data for
                insights, anomalies, and predictions.
              </p>
              <p className="mt-2 text-xs">
                Skills: Kafka, Spark, time-series databases, ML
              </p>
            </div>
          </div>

          <h3>Security & Specialized Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">IoT Security Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Secure IoT devices and systems—authentication, encryption,
                vulnerability assessment, secure boot.
              </p>
              <p className="mt-2 text-xs">
                Skills: Cryptography, penetration testing, security protocols
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">
                Solutions Architect (IoT)
              </p>
              <p className="mt-1 text-muted-foreground">
                Design end-to-end IoT solutions for clients. Combine business
                requirements with technical architecture.
              </p>
              <p className="mt-2 text-xs">
                Skills: System design, cloud architecture, communication
              </p>
            </div>
          </div>
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
                  <td className="p-3 font-medium">C/Embedded C</td>
                  <td className="p-3">
                    Microcontroller programming, firmware development
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Python</td>
                  <td className="p-3">
                    Prototyping, cloud services, data analysis, ML
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">C++</td>
                  <td className="p-3">
                    Edge computing, performance-critical applications
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">JavaScript/Node.js</td>
                  <td className="p-3">
                    Backend services, dashboards, MQTT handling
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">MicroPython</td>
                  <td className="p-3">
                    Rapid prototyping on microcontrollers (ESP32)
                  </td>
                  <td className="p-3 text-blue-600">🔵 Useful</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Hardware & Platforms</h3>
          <ul>
            <li>
              <strong>Microcontrollers:</strong> ESP32, Arduino, STM32,
              Raspberry Pi Pico
            </li>
            <li>
              <strong>Single-Board Computers:</strong> Raspberry Pi, BeagleBone,
              NVIDIA Jetson (edge AI)
            </li>
            <li>
              <strong>Development Boards:</strong> Understanding of sensors,
              actuators, and peripherals
            </li>
            <li>
              <strong>Communication Modules:</strong> WiFi, BLE, LoRa, NB-IoT
              modules
            </li>
          </ul>

          <h3>Cloud Platforms</h3>
          <ul>
            <li>
              <strong>AWS IoT:</strong> IoT Core, Greengrass (edge), analytics
            </li>
            <li>
              <strong>Azure IoT:</strong> IoT Hub, IoT Central, Digital Twins
            </li>
            <li>
              <strong>Google Cloud IoT:</strong> Cloud IoT Core, Pub/Sub
            </li>
            <li>
              <strong>Open Source:</strong> ThingsBoard, Eclipse IoT, Node-RED
            </li>
          </ul>

          <h3>Protocols & Standards</h3>
          <ul>
            <li>
              <strong>MQTT:</strong> Publish-subscribe messaging (most
              important)
            </li>
            <li>
              <strong>CoAP:</strong> Constrained application protocol for
              resource-limited devices
            </li>
            <li>
              <strong>HTTP/REST:</strong> Traditional web APIs
            </li>
            <li>
              <strong>Modbus:</strong> Industrial protocol (IIoT)
            </li>
            <li>
              <strong>OPC UA:</strong> Industrial interoperability standard
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Start with ESP32 and MQTT—they're the
              bread and butter of IoT development. You can prototype nearly any
              IoT project with these tools.
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
              <strong>Month 1:</strong> Learn C programming and basic
              electronics. Understand digital/analog I/O, sensors, and
              actuators.
            </li>
            <li>
              <strong>Month 2:</strong> Start with Arduino—build simple projects
              (LED control, sensor reading, motor control).
            </li>
            <li>
              <strong>Month 3:</strong> Move to ESP32—learn WiFi connectivity,
              basic web servers, and data logging.
            </li>
          </ul>

          <h3>Phase 2: Communication & Protocols (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Master MQTT protocol. Set up Mosquitto
              broker. Build publish/subscribe systems.
            </li>
            <li>
              <strong>Month 5:</strong> Learn Python for IoT—data processing,
              visualization, and cloud interaction.
            </li>
            <li>
              <strong>Month 6:</strong> Explore BLE and LoRa for different
              connectivity options. Build a sensor network.
            </li>
          </ul>

          <h3>Phase 3: Cloud & Analytics (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Learn AWS IoT Core—device provisioning,
              rules engine, shadow devices.
            </li>
            <li>
              <strong>Month 8:</strong> Build data pipelines—time-series
              databases (InfluxDB), analytics dashboards (Grafana).
            </li>
            <li>
              <strong>Month 9:</strong> Introduction to edge computing—AWS
              Greengrass, local processing, ML at the edge.
            </li>
          </ul>

          <h3>Phase 4: Specialization & Portfolio (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Choose specialization: embedded
              systems, cloud platforms, IIoT, or security.
            </li>
            <li>
              <strong>Month 11:</strong> Build 2-3 end-to-end portfolio
              projects. Document on GitHub with videos.
            </li>
            <li>
              <strong>Month 12:</strong> Learn IoT security basics. Apply for
              internships and entry-level positions.
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
                Electronics & Communication Engineering
              </p>
              <p className="mt-1 text-muted-foreground">
                Best foundation for IoT with embedded systems, communications,
                and signal processing. Most relevant traditional degree.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Computer Science Engineering</p>
              <p className="mt-1 text-muted-foreground">
                Strong software foundation. Add hardware/embedded courses for
                IoT focus. Good for cloud and software roles.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Electrical Engineering</p>
              <p className="mt-1 text-muted-foreground">
                Hardware design fundamentals. Strong for sensor, power, and
                circuit design aspects of IoT.
              </p>
            </div>
          </div>

          <h3>Certifications Worth Pursuing</h3>
          <ul>
            <li>
              <strong>AWS IoT Specialty:</strong> Most recognized IoT
              certification
            </li>
            <li>
              <strong>Azure IoT Developer:</strong> Microsoft's IoT
              certification
            </li>
            <li>
              <strong>IIC IoT Professional:</strong> Industry-focused
              certification
            </li>
            <li>
              <strong>Cisco IoT Fundamentals:</strong> Networking perspective
            </li>
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

          <h3>Tech Giants</h3>
          <ul>
            <li>
              <strong>Amazon:</strong> AWS IoT, Ring, Alexa devices
            </li>
            <li>
              <strong>Google:</strong> Nest, Cloud IoT, Android Things
            </li>
            <li>
              <strong>Microsoft:</strong> Azure IoT, HoloLens
            </li>
            <li>
              <strong>Apple:</strong> HomeKit, wearables
            </li>
            <li>
              <strong>Samsung:</strong> SmartThings, connected appliances
            </li>
          </ul>

          <h3>Industrial IoT Leaders</h3>
          <ul>
            <li>
              <strong>Siemens:</strong> MindSphere platform, industrial
              automation
            </li>
            <li>
              <strong>GE Digital:</strong> Predix platform, industrial IoT
            </li>
            <li>
              <strong>Bosch:</strong> IoT Suite, connected mobility
            </li>
            <li>
              <strong>ABB:</strong> Industrial automation and IoT
            </li>
            <li>
              <strong>Honeywell:</strong> Building automation, aerospace IoT
            </li>
          </ul>

          <h3>IoT Startups & Specialists</h3>
          <ul>
            <li>
              <strong>Particle:</strong> IoT development platform
            </li>
            <li>
              <strong>Samsara:</strong> Fleet and industrial IoT
            </li>
            <li>
              <strong>Helium:</strong> Decentralized IoT network
            </li>
            <li>
              <strong>ARM Pelion:</strong> IoT device management
            </li>
          </ul>

          <h3>Indian IoT Companies</h3>
          <ul>
            <li>
              <strong>Tata Elxsi:</strong> IoT services and solutions
            </li>
            <li>
              <strong>Tech Mahindra:</strong> IoT platform and services
            </li>
            <li>
              <strong>Wipro:</strong> Connected platforms
            </li>
            <li>
              <strong>L&T Technology Services:</strong> Engineering IoT
            </li>
            <li>
              <strong>Sasken:</strong> Embedded and IoT services
            </li>
            <li>
              <strong>Aeris:</strong> IoT platform (India operations)
            </li>
            <li>
              <strong>Altizon:</strong> IIoT platform maker
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
                  <th className="p-3 text-left">Mid Level</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Embedded Systems Engineer</td>
                  <td className="p-3">₹4-8 LPA</td>
                  <td className="p-3">₹10-18 LPA</td>
                  <td className="p-3">₹22-40 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IoT Software Developer</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-22 LPA</td>
                  <td className="p-3">₹25-45 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IoT Cloud Engineer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-28 LPA</td>
                  <td className="p-3">₹30-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IoT Solutions Architect</td>
                  <td className="p-3">₹12-20 LPA</td>
                  <td className="p-3">₹25-40 LPA</td>
                  <td className="p-3">₹45-80 LPA</td>
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
                  <td className="p-3">Embedded Engineer</td>
                  <td className="p-3">$75K-100K</td>
                  <td className="p-3">$110K-140K</td>
                  <td className="p-3">$150K-190K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IoT Developer</td>
                  <td className="p-3">$80K-110K</td>
                  <td className="p-3">$120K-150K</td>
                  <td className="p-3">$160K-200K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IoT Architect</td>
                  <td className="p-3">$100K-130K</td>
                  <td className="p-3">$140K-175K</td>
                  <td className="p-3">$180K-240K</td>
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
              <p className="font-bold">
                1. Weather Station with Cloud Dashboard
              </p>
              <p className="mt-1 text-muted-foreground">
                ESP32 + temperature/humidity/pressure sensors. Send data via
                MQTT to cloud. Visualize with Grafana dashboard.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: ESP32, sensors, MQTT, InfluxDB, Grafana
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Smart Door Lock System</p>
              <p className="mt-1 text-muted-foreground">
                RFID/fingerprint authentication with mobile app control. Learn
                security basics and BLE communication.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Authentication, BLE, mobile app integration
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. LoRa Sensor Network</p>
              <p className="mt-1 text-muted-foreground">
                Multiple sensor nodes communicating over LoRa to a gateway.
                Ideal for agriculture or environmental monitoring.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: LoRa, networking, gateway design, power optimization
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Predictive Maintenance System</p>
              <p className="mt-1 text-muted-foreground">
                Vibration sensors on motors with ML model to predict failures.
                Classic IIoT use case valued by employers.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Vibration analysis, edge ML, time-series analysis
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Complete Smart Home System</p>
              <p className="mt-1 text-muted-foreground">
                Hub + multiple devices (lights, sensors, actuators) with mobile
                app and voice control. Full end-to-end solution.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: System design, multiple protocols, app development
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. AWS IoT Fleet Management Solution</p>
              <p className="mt-1 text-muted-foreground">
                Device provisioning, OTA updates, device shadows, and fleet
                analytics. Enterprise-grade IoT skills.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: AWS IoT, device management, security, scaling
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
          <ul>
            <li>
              <strong>AWS IoT Learning Path:</strong> Official AWS training for
              IoT services (free tier)
            </li>
            <li>
              <strong>Coursera - IoT Specialization:</strong> UC Irvine's
              comprehensive program
            </li>
            <li>
              <strong>edX - IoT MicroMasters:</strong> Curtin University IoT
              program
            </li>
            <li>
              <strong>freeCodeCamp ESP32 Tutorial:</strong> Hands-on ESP32
              course
            </li>
          </ul>

          <h3>Books</h3>
          <ul>
            <li>
              <strong>"Programming the ESP32":</strong> Practical guide to the
              most popular IoT chip
            </li>
            <li>
              <strong>"Designing the Internet of Things":</strong> O'Reilly
              guide to IoT architecture
            </li>
            <li>
              <strong>"IoT Fundamentals":</strong> Cisco Press comprehensive
              reference
            </li>
          </ul>

          <h3>Communities</h3>
          <ul>
            <li>
              <strong>r/IOT and r/esp32:</strong> Active Reddit communities
            </li>
            <li>
              <strong>Hackster.io:</strong> Project sharing platform
            </li>
            <li>
              <strong>Arduino Forum:</strong> Hardware enthusiasts
            </li>
            <li>
              <strong>AWS IoT Community:</strong> Official support forum
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
            11. Future of IoT
          </h2>

          <h3>Emerging Trends</h3>
          <ul>
            <li>
              <strong>5G IoT:</strong> Massive IoT deployments with ultra-low
              latency and high density
            </li>
            <li>
              <strong>Edge AI:</strong> ML inference on devices for real-time
              intelligence
            </li>
            <li>
              <strong>Digital Twins:</strong> Virtual replicas of physical
              assets for simulation and monitoring
            </li>
            <li>
              <strong>Sustainability IoT:</strong> Energy monitoring, carbon
              tracking, circular economy
            </li>
            <li>
              <strong>Healthcare IoT:</strong> Remote monitoring, wearables,
              smart medical devices
            </li>
          </ul>

          <h3>Growth Projections</h3>
          <ul>
            <li>75+ billion connected devices by 2030</li>
            <li>$1.5 trillion+ annual IoT market by 2030</li>
            <li>25% CAGR for IoT security market</li>
            <li>Industrial IoT largest segment by revenue</li>
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
                Is IoT still growing or is it already saturated?
              </p>
              <p className="mt-2 text-muted-foreground">
                Still rapidly growing! We're only at ~15-20 billion devices
                today with 75+ billion projected. IIoT and 5G IoT are just
                beginning.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need hardware experience for IoT jobs?
              </p>
              <p className="mt-2 text-muted-foreground">
                Depends on the role. Cloud/platform roles focus on software, but
                understanding hardware basics helps greatly even for software
                roles.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Which is better: ESP32 or Raspberry Pi?
              </p>
              <p className="mt-2 text-muted-foreground">
                ESP32 for low-power, embedded applications. Raspberry Pi for
                complex processing (edge AI, video). Learn both—they serve
                different purposes.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How important is security in IoT careers?
              </p>
              <p className="mt-2 text-muted-foreground">
                Extremely important and growing. IoT security is a major concern
                for enterprises. Security-focused IoT roles are
                well-compensated.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: Connect the Future
          </h2>

          <p>
            IoT is not just a technology—it's a platform connecting physical and
            digital worlds across every industry. The skills you develop today
            will remain relevant for decades.
          </p>

          <p>
            Start with an ESP32 and build something. Learn MQTT and connect to
            the cloud. Understand both hardware and software aspects. The
            connected future needs engineers like you.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more career guides and tools on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/cloud-computing-beginners"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Cloud Computing Guide →
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
