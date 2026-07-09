import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generateMetadata({
  title: 'TCS Interview Questions - Complete Preparation Guide',
  description:
    'Comprehensive guide to TCS interview questions. Technical, HR, and aptitude questions with answers.',
  keywords: [
    'TCS interview',
    'TCS questions',
    'TCS preparation',
    'TCS placement',
  ],
  canonical: '/companies/tcs/interview-questions',
});

export default function TCSInterviewQuestionsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-4 text-4xl font-bold">TCS Interview Questions</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Complete guide to cracking TCS interviews with commonly asked questions
        and expert answers. This guide covers Technical, HR, and Managerial
        round questions for freshers and experienced candidates.
      </p>

      <div className="space-y-8">
        {/* Technical Round Section */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Technical Round Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  1. What is the difference between C and C++?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  C is a procedural programming language, while C++ is an
                  object-oriented programming language. C++ supports features
                  like classes, objects, inheritance, polymorphism, and
                  encapsulation, which are not present in C. C++ also supports
                  function overloading and exception handling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. What is polymorphism in OOP?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Polymorphism allows objects of different classes to be treated
                  as objects of a common parent class. It comes in two types:
                  Compile-time (Method Overloading) and Run-time (Method
                  Overriding). It enables flexibility and code reusability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. Explain the difference between SQL and NoSQL databases.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SQL databases are relational, table-based, and use structured
                  query language (e.g., MySQL, PostgreSQL). NoSQL databases are
                  non-relational, document/key-value based, and offer flexible
                  schemas (e.g., MongoDB, Cassandra). SQL is better for complex
                  queries, while NoSQL is better for scalability and
                  unstructured data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. What is a pointer in C?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A pointer is a variable that stores the memory address of
                  another variable. It allows for direct memory manipulation and
                  is used for dynamic memory allocation, arrays, and function
                  arguments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. What are the ACID properties in a database?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ACID stands for Atomicity, Consistency, Isolation, and
                  Durability. These properties ensure reliable processing of
                  database transactions. Atomicity ensures all-or-nothing
                  execution, Consistency ensures data validity, Isolation
                  ensures concurrent transactions don't interfere, and
                  Durability ensures saved changes persist.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  6. Explain the concept of normalization.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Normalization is the process of organizing data in a database
                  to reduce redundancy and improve data integrity. It involves
                  dividing large tables into smaller, related tables (1NF, 2NF,
                  3NF, BCNF).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  7. What is the difference between JVM, JRE, and JDK?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  JDK (Java Development Kit) is the full development
                  environment. JRE (Java Runtime Environment) is the environment
                  to run Java applications. JVM (Java Virtual Machine) is the
                  engine that executes Java bytecode. JDK contains JRE, and JRE
                  contains JVM.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  8. What is a deadlock in OS?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A deadlock is a situation where two or more processes are
                  unable to proceed because each is waiting for the other to
                  release a resource. It typically happens in multi-processing
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  9. What is Cloud Computing?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cloud computing is the delivery of computing
                  services—including servers, storage, databases, networking,
                  software, analytics, and intelligence—over the Internet ("the
                  cloud") to offer faster innovation, flexible resources, and
                  economies of scale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  10. Write a program to check if a number is prime.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                  {`bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* HR Round Section */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">HR Round Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  1. Tell me about yourself.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start with your name, educational background, and key skills.
                  Mention your projects and internships relevant to the role.
                  Keep it concise (1-2 minutes) and professional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. Why do you want to join TCS?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Highlight TCS's global reputation, commitment to innovation,
                  and employee training programs. Mention how TCS aligns with
                  your career goals and values. "I admire TCS's focus on digital
                  transformation and its supportive work culture..."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. Are you willing to relocate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Be honest. If you are flexible, say "Yes, I am open to
                  relocating as it will give me an opportunity to explore new
                  places and cultures while working." Flexibility is highly
                  valued in IT service companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. What are your strengths and weaknesses?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strengths: Adaptability, quick learner, team player.
                  Weaknesses: "I sometimes focus too much on details" (always
                  follow up with how you are improving it).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. Where do you see yourself in 5 years?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I see myself as a senior developer/lead, having mastered
                  [specific technologies] and contributing significantly to the
                  company's major projects. I also hope to mentor junior
                  developers."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
