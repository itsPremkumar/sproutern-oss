import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  GitBranch,
  Terminal,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Code,
  Zap,
  GitMerge,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Git & GitHub for Beginners: Complete Guide',
  description:
    'Master Git and GitHub from scratch. Learn essential commands, workflows, and collaboration techniques every developer needs.',
  keywords: [
    'git tutorial',
    'github beginners',
    'git commands',
    'version control',
    'git basics',
    'github workflow',
  ],
  openGraph: {
    title: 'Git & GitHub for Beginners: Complete Guide',
    description: 'Essential Git skills every developer needs.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-gray-600">
            <GitBranch className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Technical Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Git & GitHub for Beginners: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Git is non-negotiable for developers. Learn the essential commands,
            workflows, and collaboration techniques you'll use every day.
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
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#basics"
                className="text-primary hover:underline"
              >
                1. Git Basics & Setup
              </a>
            </li>
            <li>
              <a
                href="#commands"
                className="text-primary hover:underline"
              >
                2. Essential Commands
              </a>
            </li>
            <li>
              <a
                href="#branching"
                className="text-primary hover:underline"
              >
                3. Branching & Merging
              </a>
            </li>
            <li>
              <a
                href="#github"
                className="text-primary hover:underline"
              >
                4. GitHub Workflow
              </a>
            </li>
            <li>
              <a
                href="#collaboration"
                className="text-primary hover:underline"
              >
                5. Collaboration
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                6. Pro Tips
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
              <span>Git is version control; GitHub is a hosting platform</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Commit early, commit often—good commits tell a story</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Always work in feature branches, never directly on main
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Pull requests are how teams review and merge code</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Basics */}
        <section
          id="basics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            1. Git Basics & Setup
          </h2>

          <h3>What is Git?</h3>
          <p>
            Git is a distributed version control system. It tracks changes in
            your code, lets you collaborate with others, and provides a safety
            net to undo mistakes.
          </p>

          <h3>Initial Setup</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p># Configure your identity</p>
            <p>git config --global user.name "Your Name"</p>
            <p>git config --global user.email "you@email.com"</p>
            <p className="mt-2"># Initialize a new repo</p>
            <p>git init</p>
          </div>
        </section>

        {/* Section 2: Commands */}
        <section
          id="commands"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            2. Essential Commands
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Command</th>
                  <th className="border p-3 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-mono">git status</td>
                  <td className="border p-3">See changed files</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git add .</td>
                  <td className="border p-3">Stage all changes</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git commit -m "msg"</td>
                  <td className="border p-3">Save changes with message</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git push</td>
                  <td className="border p-3">Upload to remote</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git pull</td>
                  <td className="border p-3">Download latest changes</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git log</td>
                  <td className="border p-3">View commit history</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Branching */}
        <section
          id="branching"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GitMerge className="h-6 w-6 text-primary" />
            3. Branching & Merging
          </h2>

          <p>
            Branches let you work on features without affecting the main
            codebase:
          </p>

          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p># Create and switch to new branch</p>
            <p>git checkout -b feature/login-page</p>
            <p className="mt-2"># Switch branches</p>
            <p>git checkout main</p>
            <p className="mt-2"># Merge branch into current</p>
            <p>git merge feature/login-page</p>
          </div>

          <h3>Branch Naming Conventions</h3>
          <ul>
            <li>
              <code>feature/</code> - new features
            </li>
            <li>
              <code>bugfix/</code> - bug fixes
            </li>
            <li>
              <code>hotfix/</code> - urgent production fixes
            </li>
          </ul>
        </section>

        {/* Section 4: GitHub */}
        <section
          id="github"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GitBranch className="h-6 w-6 text-primary" />
            4. GitHub Workflow
          </h2>

          <h3>The Standard Workflow</h3>
          <ol>
            <li>
              Clone the repo: <code>git clone URL</code>
            </li>
            <li>Create a feature branch</li>
            <li>Make changes and commit</li>
            <li>Push your branch to GitHub</li>
            <li>Create a Pull Request (PR)</li>
            <li>Get code reviewed and merge</li>
          </ol>
        </section>

        {/* Section 5: Collaboration */}
        <section
          id="collaboration"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            5. Collaboration
          </h2>

          <h3>Pull Request Best Practices</h3>
          <ul>
            <li>Keep PRs small and focused (one feature per PR)</li>
            <li>Write descriptive PR titles and descriptions</li>
            <li>Request reviews from relevant team members</li>
            <li>Respond to feedback constructively</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Good commit messages follow this format:
              "Verb + what changed" (e.g., "Add user authentication", "Fix login
              bug", "Update README")
            </div>
          </div>
        </section>

        {/* Section 6: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            6. Pro Tips
          </h2>

          <ul>
            <li>
              <strong>Use .gitignore:</strong> Exclude node_modules, .env, and
              other files that shouldn't be tracked
            </li>
            <li>
              <strong>Commit frequently:</strong> Small, logical commits are
              easier to review and debug
            </li>
            <li>
              <strong>Pull before push:</strong> Always pull latest changes
              before pushing
            </li>
            <li>
              <strong>Learn to resolve conflicts:</strong> They're
              inevitable—don't fear them
            </li>
          </ul>
        </section>

        {/* Advanced Commands */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            Advanced Git Commands
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Command
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-mono">git stash</td>
                  <td className="border p-3">
                    Temporarily save uncommitted changes
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git stash pop</td>
                  <td className="border p-3">Restore stashed changes</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git rebase main</td>
                  <td className="border p-3">Reapply commits on top of main</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">
                    git cherry-pick &lt;hash&gt;
                  </td>
                  <td className="border p-3">Apply a specific commit</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">
                    git reset --hard HEAD~1
                  </td>
                  <td className="border p-3">Undo last commit (destructive)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git reflog</td>
                  <td className="border p-3">History of all Git operations</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">git bisect</td>
                  <td className="border p-3">
                    Find commit that introduced bug
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conflict Resolution */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <GitMerge className="h-6 w-6 text-primary" />
            Resolving Merge Conflicts
          </h2>

          <p>
            Conflicts happen when two branches modify the same lines. Here's how
            to handle them:
          </p>

          <ol>
            <li>
              <strong>Don't panic:</strong> Conflicts are normal
            </li>
            <li>
              <strong>Look for conflict markers:</strong>{' '}
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======,
              &gt;&gt;&gt;&gt;&gt;&gt;&gt;
            </li>
            <li>
              <strong>Choose which code to keep</strong> (or combine both)
            </li>
            <li>
              <strong>Remove the conflict markers</strong>
            </li>
            <li>
              <strong>Stage and commit:</strong> git add . && git commit
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> VS Code has excellent built-in conflict
              resolution tools. Use "Accept Current", "Accept Incoming", or
              "Accept Both" buttons.
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Git Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Committing directly to main
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always use feature branches. Protect main with branch rules.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Giant commits with vague messages
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  "Fixed stuff" tells nothing. Write descriptive commit
                  messages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Force pushing to shared branches
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  git push --force can destroy teammates' work. Never do it on
                  shared branches.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Committing sensitive data
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  API keys, passwords, .env files should never be committed. Use
                  .gitignore and check before every commit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not pulling before working
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always git pull before starting work. Prevents many conflicts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Git skills saved my internship interview..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Interviewer asked about my Git workflow. I explained branching,
                PRs, and code reviews. Got the job because I showed I could work
                in a team." — Rahul, IIT Bombay
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Green contribution graph got me noticed..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Made daily commits to my projects. Recruiter mentioned my
                GitHub activity during the interview. Showed consistency
                matters." — Priya, IIIT Hyderabad
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Learned to recover from disasters..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Accidentally deleted important code. Used git reflog to find
                the lost commit and restored everything. Git saved hours of
                work." — Karan, VIT Vellore
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the difference between Git and GitHub?
              </h3>
              <p className="text-muted-foreground">
                Git is the version control system (the tool). GitHub is a
                platform that hosts Git repositories online. Other alternatives
                include GitLab and Bitbucket.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How often should I commit?
              </h3>
              <p className="text-muted-foreground">
                Commit whenever you complete a logical unit of work. A good
                rule: if you can't describe the commit in one sentence, it's too
                big.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I use merge or rebase?
              </h3>
              <p className="text-muted-foreground">
                Merge is safer and preserves history. Rebase creates a cleaner
                history but can complicate things. For beginners, stick with
                merge.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I undo a commit?
              </h3>
              <p className="text-muted-foreground">
                Use git reset --soft HEAD~1 to undo but keep changes. Use git
                reset --hard HEAD~1 to completely remove (dangerous). git revert
                creates a new commit that undoes changes (safest).
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What should go in .gitignore?
              </h3>
              <p className="text-muted-foreground">
                node_modules, .env files, build folders, IDE settings (.idea,
                .vscode), OS files (.DS_Store), and any generated files.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I contribute to someone else's repo?
              </h3>
              <p className="text-muted-foreground">
                Fork the repo to your account, clone your fork, make changes,
                push to your fork, then create a Pull Request to the original.
              </p>
            </div>
          </div>
        </section>

        {/* Git Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Git Mastery Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Install Git and configure user.name and user.email</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Create a GitHub account</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Master basic commands: clone, add, commit, push, pull</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand branching: create, switch, merge branches</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Create your first Pull Request</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Successfully resolve a merge conflict</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Use git stash to save work temporarily</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Write good commit messages consistently</span>
            </div>
          </div>
        </section>

        {/* GitHub Profile Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            GitHub Profile Optimization
          </h2>

          <ul>
            <li>
              <strong>Add a profile README:</strong> Create a repo named your
              username with a README.md that shows on your profile
            </li>
            <li>
              <strong>Pin your best repos:</strong> Showcase 6 projects that
              demonstrate your skills
            </li>
            <li>
              <strong>Keep your contribution graph green:</strong> Regular
              commits show consistency
            </li>
            <li>
              <strong>Write good READMEs:</strong> Every project should have
              clear documentation
            </li>
            <li>
              <strong>Add project descriptions:</strong> One-line summaries help
              visitors understand
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Master Git for Your Career</h2>
          <p>
            Git is used in virtually every tech company. The more comfortable
            you are with it, the more effective you'll be as a developer.
          </p>
          <p>
            Remember: everyone struggles with Git at first. The important thing
            is to keep practicing, and don't be afraid to make mistakes—that's
            what version control is for!
          </p>
          <p className="text-lg font-semibold text-primary">
            Start using Git in all your projects. Practice makes perfect. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation Guide
            </Link>
            <Link
              href="/blog/projects-for-resume"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Projects for Your Resume
            </Link>
            <Link
              href="/blog/open-source-contribution-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Open Source Contribution Guide
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
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
                Practical Git knowledge for aspiring developers.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
