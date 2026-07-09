import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generateMetadata({
  title: 'Infosys Interview Questions - Placement Guide',
  description:
    'Complete Infosys interview preparation guide with technical, HR, and aptitude questions.',
  keywords: [
    'Infosys interview',
    'Infosys questions',
    'Infosys placement',
    'Infosys preparation',
  ],
  canonical: '/companies/infosys/interview-questions',
});

export default function InfosysInterviewQuestionsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-4 text-4xl font-bold">Infosys Interview Questions</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Ace your Infosys interview with this comprehensive preparation guide. We
        cover the most frequently asked Technical and HR questions for freshers
        and experienced professionals.
      </p>

      <div className="space-y-8">
        {/* Technical Round Section */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Technical Round Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  1. What is the difference between abstract class and
                  interface?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Abstract classes can have both abstract and concrete methods,
                  and can maintain state (instance variables). Interfaces (prior
                  to Java 8) could only have abstract methods and constants. A
                  class can extend only one abstract class but can implement
                  multiple interfaces.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. Explain the four pillars of OOPs.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  1. <strong>Encapsulation:</strong> Wrapping data and methods
                  into a single unit (class).
                  <br />
                  2. <strong>Abstraction:</strong> Hiding implementation details
                  and showing only functionality.
                  <br />
                  3. <strong>Inheritance:</strong> Acquiring properties of one
                  class into another.
                  <br />
                  4. <strong>Polymorphism:</strong> Ability to take multiple
                  forms (overloading/overriding).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. What is a Primary Key and Foreign Key?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Primary Key:</strong> A unique identifier for a record
                  in a table. It cannot be null.
                  <br />
                  <strong>Foreign Key:</strong> A field that links to the
                  Primary Key of another table, establishing a relationship
                  between the two tables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. Write a program to reverse a string without using built-in
                  functions.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                  {`void reverseString(char* str) {
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        char temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. What is the final keyword in Java?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The `final` keyword is used to restrict the user:
                  <br />- <strong>Final Variable:</strong> Value cannot be
                  changed (constant).
                  <br />- <strong>Final Method:</strong> Cannot be overridden by
                  subclasses.
                  <br />- <strong>Final Class:</strong> Cannot be inherited.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  6. What is a stored procedure?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A stored procedure is a prepared SQL code that you can save,
                  so the code can be reused over and over again. It helps in
                  reducing network traffic and improves performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  7. Explain the concept of recursion.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recursion is a process where a function calls itself directly
                  or indirectly. It requires a base case to stop the infinite
                  loop. Example: Factorial calculation, Fibonacci series.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  8. What is the difference between C++ and Java?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  C++ supports pointers, multiple inheritance, and is
                  platform-dependent (compiled to machine code). Java does not
                  support explicit pointers, supports only single inheritance
                  (classes), and is platform-independent (compiled to bytecode
                  runs on JVM).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  9. What is an array and a linked list?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Array:</strong> Fixed-size collection of elements
                  stored in contiguous memory locations. Fast access (O(1)).
                  <br />
                  <strong>Linked List:</strong> Dynamic collection where
                  elements (nodes) are stored in non-contiguous memory, linked
                  by pointers. Efficient insertions/deletions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">10. What is SDLC?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SDLC (Software Development Life Cycle) is a process used by
                  the software industry to design, develop and test high-quality
                  software. Stages: Requirement Analysis, Design, Implementation
                  (Coding), Testing, Deployment, Maintenance.
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
                <CardTitle className="text-lg">1. Why Infosys?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Infosys is a global leader in consulting and digital
                  services. I am impressed by its world-class training facility
                  in Mysore and its focus on continuous learning. It provides a
                  great platform for freshers to start their career."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. Can you work under pressure?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Yes, I can. During my college projects, we had tight
                  deadlines which taught me how to prioritize tasks and manage
                  time effectively. I believe pressure can sometimes be a good
                  motivator to perform better."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. What are your short-term and long-term goals?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Short-term: To get placed in a reputed company like Infosys
                  and learn the corporate work culture. Long-term: To become a
                  subject matter expert in my domain and lead a team of
                  developers."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. Describe a difficult situation you faced and how you
                  handled it.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use the STAR method (Situation, Task, Action, Result).
                  Example: "In my final year project, a team member fell ill...
                  I took up extra responsibility... we successfully completed
                  the project on time."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. Do you have any questions for us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Always ask a question. "What technologies will I be working
                  on?" "What does the typical career path look like for a
                  fresher at Infosys?"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
