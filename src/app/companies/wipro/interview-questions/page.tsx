import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generateMetadata({
  title: 'Wipro Interview Questions - Complete Guide',
  description:
    'Prepare for Wipro interviews with commonly asked technical and HR questions.',
  keywords: [
    'Wipro interview',
    'Wipro questions',
    'Wipro placement',
    'Wipro preparation',
  ],
  canonical: '/companies/wipro/interview-questions',
});

export default function WiproInterviewQuestionsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-4 text-4xl font-bold">Wipro Interview Questions</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Complete preparation guide for Wipro placement interviews. This guide
        includes Wipro NLTH (National Level Talent Hunt) specific questions,
        technical coding problems, and HR interview tips.
      </p>

      <div className="space-y-8">
        {/* Technical Round Section */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Technical Round Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  1. Explain OOPS concepts.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Object-Oriented Programming System (OOPS) is a programming
                  paradigm based on the concept of "objects". Key concepts
                  include:
                  <br />- <strong>Class & Object:</strong> Blueprint and
                  instance.
                  <br />- <strong>Inheritance:</strong> Reusability of code.
                  <br />- <strong>Polymorphism:</strong> One name, many forms.
                  <br />- <strong>Abstraction:</strong> Hiding complexity.
                  <br />- <strong>Encapsulation:</strong> Data binding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. What is the difference between structure and union in C?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Structure:</strong> Each member has its own memory
                  location. Total size is the sum of sizes of all members.
                  <br />
                  <strong>Union:</strong> All members share the same memory
                  location. Total size is the size of the largest member.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. Write a program to check if a string is a palindrome.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                  {`bool isPalindrome(string str) {
    int l = 0;
    int h = str.length() - 1;
    while (h > l) {
        if (str[l++] != str[h--]) {
            return false;
        }
    }
    return true;
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. What is a dangling pointer?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A pointer pointing to a memory location that has been deleted
                  (or freed) is called a dangling pointer. It can lead to
                  segmentation faults or unpredictable behavior.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. What is the difference between process and thread?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Process:</strong> An executing program with its own
                  memory space. Heavyweight.
                  <br />
                  <strong>Thread:</strong> A segment of a process. Threads share
                  the same memory space. Lightweight.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  6. Explain the static keyword in Java/C++.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Static members belong to the class rather than any specific
                  instance. They can be accessed without creating an object of
                  the class. Static variables are initialized only once.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  7. What is a constructor?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A constructor is a special member function of a class that is
                  executed whenever we create new objects of that class. It has
                  the same name as the class and no return type.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  8. What is the difference between TCP and UDP?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>TCP (Transmission Control Protocol):</strong>{' '}
                  Connection-oriented, reliable, slower (e.g., Web browsing,
                  Email).
                  <br />
                  <strong>UDP (User Datagram Protocol):</strong> Connectionless,
                  unreliable, faster (e.g., Video streaming, Gaming).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  9. Write a program to find the factorial of a number.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                  {`int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  10. What is an Operating System?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  An Operating System (OS) is system software that manages
                  computer hardware, software resources, and provides common
                  services for computer programs. Examples: Windows, Linux,
                  macOS, Android.
                </p>
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
                  1. What are your strengths and weaknesses?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "My strength is my ability to learn new technologies quickly.
                  My weakness is that I sometimes have trouble saying no to
                  requests, but I'm learning to prioritize my tasks better."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. Why should we hire you?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I have a strong foundation in coding and I am passionate
                  about technology. I am a quick learner and a team player. I
                  believe I can contribute effectively to your projects."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. What do you know about Wipro?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Wipro is a leading global information technology, consulting
                  and business process services company. It is known for its
                  sustainability initiatives and ethical business practices. It
                  has a strong presence in various sectors like healthcare,
                  banking, and retail."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. Are you comfortable working in night shifts?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Yes, I understand that the IT industry works 24/7 to support
                  global clients. I am flexible and willing to work in shifts as
                  per project requirements."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. How do you handle stress?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I handle stress by staying organized and breaking down large
                  tasks into smaller, manageable steps. I also take short breaks
                  to refresh my mind."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
