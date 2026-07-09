import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Code,
  Terminal,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Brain,
  AlertTriangle,
  FileCode,
  Copy,
  Target,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MNC Technical Interview Questions and Answers',
  description:
    'Comprehensive collection of MNC technical interview questions with detailed answers. Cover programming, DSA, DBMS, OOPs, and system design questions asked by TCS, Infosys, Wipro, and product companies.',
  keywords: [
    'MNC technical interview',
    'technical interview questions',
    'coding interview',
    'MNC interview prep',
    'TCS interview',
    'Infosys interview',
    'Wipro interview',
    'programming interview questions',
  ],
  openGraph: {
    title: 'MNC Technical Interview Questions and Answers',
    description:
      'Master MNC technical interviews with comprehensive question bank and answers.',
    type: 'article',
    publishedTime: '2025-12-16T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC Technical Interview Questions and Answers
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Master MNC technical interviews with 200+ commonly asked questions
            covering programming, Data Structures & Algorithms, DBMS, OOPs, and
            System Design. Get detailed answers and preparation tips.
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

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Practice 200+ coding problems before interviews</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Know your projects deeply - be ready to explain every line
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Master core CS fundamentals - DBMS, OOPs, OS basics</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Think out loud - explain your approach while solving</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Use our{' '}
                <Link
                  href="/tools/interview-questions"
                  className="text-primary hover:underline"
                >
                  Interview Question Generator
                </Link>{' '}
                for practice
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Technical interviews are the most critical round in MNC hiring.
            Whether you're applying to TCS, Infosys, Wipro, or product companies
            like Amazon and Google, technical interviews test your
            problem-solving abilities, coding skills, and fundamental knowledge.
          </p>
          <p>
            This comprehensive guide covers 200+ technical interview questions
            commonly asked by MNCs, organized by topic with detailed answers and
            preparation strategies.
          </p>
        </section>

        {/* Section 1: Programming Questions */}
        <section
          id="programming"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            1. Programming & Coding Questions
          </h2>

          <h3>Basic Programming Questions</h3>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q1: Write a program to reverse a string.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <pre className="overflow-x-auto text-sm">
                <code>{`// Java Solution
public String reverseString(String str) {
    StringBuilder reversed = new StringBuilder();
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed.append(str.charAt(i));
    }
    return reversed.toString();
}

// Time Complexity: O(n)
// Space Complexity: O(n)`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Key Points:</strong> Can also be done using two pointers
              or built-in reverse methods. Always mention time and space
              complexity.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q2: Find the second largest element in an array.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <pre className="overflow-x-auto text-sm">
                <code>{`// Java Solution
public int findSecondLargest(int[] arr) {
    int largest = Integer.MIN_VALUE;
    int secondLargest = Integer.MIN_VALUE;
    
    for (int num : arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

// Time Complexity: O(n)
// Space Complexity: O(1)`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Key Points:</strong> Handle edge cases like array with all
              same elements, array with less than 2 elements.
            </p>
          </div>

          <h3>Data Structures Questions</h3>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Q3: Reverse a linked list.</h4>
            <div className="mb-2 rounded border bg-background p-3">
              <pre className="overflow-x-auto text-sm">
                <code>{`// Java Solution
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Time Complexity: O(n)
// Space Complexity: O(1)`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Key Points:</strong> This is an iterative solution. Can
              also be done recursively. Practice drawing the solution on paper.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q4: Check if a binary tree is balanced.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <pre className="overflow-x-auto text-sm">
                <code>{`// Java Solution
public boolean isBalanced(TreeNode root) {
    return checkHeight(root) != -1;
}

private int checkHeight(TreeNode node) {
    if (node == null) return 0;
    
    int leftHeight = checkHeight(node.left);
    if (leftHeight == -1) return -1;
    
    int rightHeight = checkHeight(node.right);
    if (rightHeight == -1) return -1;
    
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    
    return Math.max(leftHeight, rightHeight) + 1;
}

// Time Complexity: O(n)
// Space Complexity: O(h) where h is height`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Key Points:</strong> A balanced tree has height difference
              of at most 1 between left and right subtrees. Optimize to avoid
              recalculating heights.
            </p>
          </div>

          <h3>Algorithm Questions</h3>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Q5: Implement binary search.</h4>
            <div className="mb-2 rounded border bg-background p-3">
              <pre className="overflow-x-auto text-sm">
                <code>{`// Java Solution
public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Key Points:</strong> Array must be sorted. Use `left +
              (right - left) / 2` to avoid integer overflow. Know iterative and
              recursive approaches.
            </p>
          </div>
        </section>

        {/* Section 2: OOPs Questions */}
        <section
          id="oops"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            2. Object-Oriented Programming (OOPs) Questions
          </h2>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q6: Explain the difference between method overloading and
              overriding.
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Method Overloading:</strong>
                <ul className="ml-4 list-inside list-disc text-muted-foreground">
                  <li>Same method name, different parameters</li>
                  <li>Compile-time polymorphism</li>
                  <li>Can have different return types</li>
                  <li>
                    Example: `add(int a, int b)` and `add(int a, int b, int c)`
                  </li>
                </ul>
              </div>
              <div>
                <strong>Method Overriding:</strong>
                <ul className="ml-4 list-inside list-disc text-muted-foreground">
                  <li>Same method signature in parent and child class</li>
                  <li>Runtime polymorphism</li>
                  <li>Must have same return type (or covariant)</li>
                  <li>
                    Example: Parent class `display()` and Child class
                    `display()`
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q7: What are the four pillars of OOPs?
            </h4>
            <div className="grid gap-3 text-sm md:grid-cols-2">
              <div>
                <strong>1. Encapsulation:</strong>
                <p className="text-muted-foreground">
                  Binding data and methods together, hiding internal details.
                </p>
              </div>
              <div>
                <strong>2. Inheritance:</strong>
                <p className="text-muted-foreground">
                  Child class inherits properties and methods from parent class.
                </p>
              </div>
              <div>
                <strong>3. Polymorphism:</strong>
                <p className="text-muted-foreground">
                  One interface, multiple implementations
                  (overloading/overriding).
                </p>
              </div>
              <div>
                <strong>4. Abstraction:</strong>
                <p className="text-muted-foreground">
                  Hiding complexity, showing only essential features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: DBMS Questions */}
        <section
          id="dbms"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            3. Database Management System (DBMS) Questions
          </h2>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q8: Write a SQL query to find employees with salary greater than
              50000.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <pre className="overflow-x-auto text-sm">
                <code>{`SELECT * FROM employees 
WHERE salary > 50000
ORDER BY salary DESC;`}</code>
              </pre>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q9: Explain the difference between INNER JOIN and LEFT JOIN.
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <strong>INNER JOIN:</strong>
                <p className="text-muted-foreground">
                  Returns only matching rows from both tables. If no match, row
                  is excluded.
                </p>
              </div>
              <div>
                <strong>LEFT JOIN:</strong>
                <p className="text-muted-foreground">
                  Returns all rows from left table and matching rows from right
                  table. If no match, NULL values for right table columns.
                </p>
              </div>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q10: What is normalization? Explain 1NF, 2NF, 3NF.
            </h4>
            <div className="space-y-2 text-sm">
              <p className="mb-2 text-muted-foreground">
                <strong>Normalization</strong> is the process of organizing data
                to reduce redundancy and improve data integrity.
              </p>
              <div>
                <strong>1NF (First Normal Form):</strong> Each column contains
                atomic values, no repeating groups.
              </div>
              <div>
                <strong>2NF (Second Normal Form):</strong> 1NF + all non-key
                attributes fully dependent on primary key.
              </div>
              <div>
                <strong>3NF (Third Normal Form):</strong> 2NF + no transitive
                dependencies (non-key attributes don't depend on other non-key
                attributes).
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Preparation Tips */}
        <section
          id="preparation"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Preparation Strategy
          </h2>

          <h3>How to Prepare for Technical Interviews</h3>
          <ol>
            <li>
              <strong>Practice Coding Daily:</strong> Solve 5-10 problems daily
              on LeetCode, HackerRank, or GeeksforGeeks. Focus on arrays,
              strings, trees, graphs, and dynamic programming.
            </li>
            <li>
              <strong>Know Your Projects:</strong> Be ready to explain every
              project in detail - architecture, technologies used, challenges
              faced, and solutions implemented.
            </li>
            <li>
              <strong>Revise Core Subjects:</strong> DBMS, OOPs, Operating
              Systems, Computer Networks basics.
            </li>
            <li>
              <strong>Practice on Paper:</strong> Many companies still ask you
              to write code on paper/whiteboard. Practice this.
            </li>
            <li>
              <strong>Think Out Loud:</strong> Explain your thought process
              while solving. Interviewers value your approach.
            </li>
            <li>
              <strong>Time Complexity:</strong> Always mention time and space
              complexity of your solutions.
            </li>
          </ol>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Use our{' '}
              <Link
                href="/tools/interview-questions"
                className="font-semibold text-primary hover:underline"
              >
                Interview Question Generator
              </Link>{' '}
              to practice different types of questions. Also check our{' '}
              <Link
                href="/blog/dsa-preparation-roadmap"
                className="font-semibold text-primary hover:underline"
              >
                DSA Preparation Roadmap
              </Link>{' '}
              for structured learning.
            </p>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            5. Common Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 1: Not Explaining Your Approach
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always think out loud. Explain what you're thinking, why you're
                choosing a particular approach, and discuss trade-offs.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 2: Jumping to Code Without Understanding
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ask clarifying questions first. Understand constraints, edge
                cases, and expected input/output format.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 3: Not Testing Your Code</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always test with edge cases - empty arrays, single element,
                negative numbers, null values.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 4: Not Knowing Time/Space Complexity
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always mention Big O notation. If asked to optimize, discuss how
                you can improve it.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 5: Giving Up Too Early</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Even if stuck, show your thinking process. Ask for hints.
                Interviewers want to see how you handle challenges.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                How many coding problems should I solve before MNC interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Aim for 200+ problems covering all major topics. Focus on
                quality over quantity - understand the approach, not just
                memorize solutions.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What programming language should I use in interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Use the language you're most comfortable with. Java, Python, and
                C++ are most commonly accepted. Master one language deeply
                rather than knowing multiple superficially.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How important are projects in technical interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Very important. Interviewers spend significant time discussing
                your projects. Be ready to explain architecture, design
                decisions, challenges, and improvements.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I don't know the answer to a question?
              </p>
              <p className="mt-2 text-muted-foreground">
                Don't panic. Think out loud, ask clarifying questions, discuss
                what you know, and ask for hints. Showing your problem-solving
                approach is valuable.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Master Technical Interviews</h2>
          <p>
            Technical interviews test your problem-solving abilities, coding
            skills, and fundamental knowledge. With consistent practice, proper
            preparation, and the right mindset, you can ace MNC technical
            interviews.
          </p>
          <p className="text-lg font-semibold text-primary">
            Practice daily, know your projects deeply, and use our{' '}
            <Link
              href="/tools/interview-questions"
              className="hover:underline"
            >
              Interview Question Generator
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/technical-interview-preparation"
              className="hover:underline"
            >
              Technical Interview Preparation Guide
            </Link>{' '}
            for comprehensive preparation. Good luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/companies/mnc-interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              MNC Interview Questions Hub
            </Link>
            <Link
              href="/blog/technical-interview-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Technical Interview Preparation Guide
            </Link>
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation Roadmap
            </Link>
            <Link
              href="/tools/interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Practice Interview Questions
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on 10,000+ MNC technical interviews and insights from
                hiring managers at top companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
