'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import {
  BookOpen,
  CheckCircle,
  Circle,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  subtopics?: string[];
}

interface Subject {
  name: string;
  topics: Topic[];
}

interface Syllabus {
  id: string;
  name: string;
  description: string;
  subjects: Subject[];
}

const syllabi: Syllabus[] = [
  {
    id: 'gate-cs',
    name: 'GATE CS/IT',
    description: 'Complete syllabus for GATE Computer Science',
    subjects: [
      {
        name: 'Data Structures & Algorithms',
        topics: [
          { id: 'arrays', name: 'Arrays & Strings' },
          { id: 'linked-lists', name: 'Linked Lists' },
          { id: 'stacks-queues', name: 'Stacks & Queues' },
          { id: 'trees', name: 'Trees & BST' },
          { id: 'graphs', name: 'Graphs' },
          { id: 'hashing', name: 'Hashing' },
          { id: 'sorting', name: 'Sorting Algorithms' },
          { id: 'searching', name: 'Searching Algorithms' },
          { id: 'dp', name: 'Dynamic Programming' },
          { id: 'greedy', name: 'Greedy Algorithms' },
        ],
      },
      {
        name: 'Operating Systems',
        topics: [
          { id: 'process', name: 'Process Management' },
          { id: 'threads', name: 'Threads & Concurrency' },
          { id: 'scheduling', name: 'CPU Scheduling' },
          { id: 'sync', name: 'Process Synchronization' },
          { id: 'deadlock', name: 'Deadlocks' },
          { id: 'memory', name: 'Memory Management' },
          { id: 'virtual', name: 'Virtual Memory' },
          { id: 'file', name: 'File Systems' },
        ],
      },
      {
        name: 'Database Management',
        topics: [
          { id: 'er', name: 'ER Model' },
          { id: 'relational', name: 'Relational Model' },
          { id: 'sql', name: 'SQL Queries' },
          { id: 'normalization', name: 'Normalization' },
          { id: 'transactions', name: 'Transactions & ACID' },
          { id: 'concurrency', name: 'Concurrency Control' },
          { id: 'indexing', name: 'Indexing & B-Trees' },
        ],
      },
      {
        name: 'Computer Networks',
        topics: [
          { id: 'osi', name: 'OSI & TCP/IP Model' },
          { id: 'physical', name: 'Physical Layer' },
          { id: 'datalink', name: 'Data Link Layer' },
          { id: 'network', name: 'Network Layer & IP' },
          { id: 'transport', name: 'Transport Layer (TCP/UDP)' },
          { id: 'application', name: 'Application Layer Protocols' },
          { id: 'security', name: 'Network Security' },
        ],
      },
      {
        name: 'Theory of Computation',
        topics: [
          { id: 'fa', name: 'Finite Automata' },
          { id: 'regex', name: 'Regular Expressions' },
          { id: 'cfg', name: 'Context-Free Grammars' },
          { id: 'pda', name: 'Pushdown Automata' },
          { id: 'tm', name: 'Turing Machines' },
          { id: 'decidability', name: 'Decidability' },
        ],
      },
    ],
  },
  {
    id: 'placement',
    name: 'Campus Placement',
    description: 'Core topics for campus placement preparation',
    subjects: [
      {
        name: 'Aptitude',
        topics: [
          { id: 'quant', name: 'Quantitative Aptitude' },
          { id: 'logical', name: 'Logical Reasoning' },
          { id: 'verbal', name: 'Verbal Ability' },
          { id: 'di', name: 'Data Interpretation' },
        ],
      },
      {
        name: 'Programming',
        topics: [
          { id: 'basics', name: 'Programming Basics' },
          { id: 'oops', name: 'Object-Oriented Programming' },
          { id: 'dsa-basic', name: 'Basic DSA' },
          { id: 'problem-solving', name: 'Problem Solving' },
        ],
      },
      {
        name: 'Core CS',
        topics: [
          { id: 'os-basics', name: 'OS Fundamentals' },
          { id: 'dbms-basics', name: 'DBMS & SQL' },
          { id: 'cn-basics', name: 'Networking Basics' },
        ],
      },
      {
        name: 'Soft Skills',
        topics: [
          { id: 'resume', name: 'Resume Preparation' },
          { id: 'hr', name: 'HR Interview' },
          { id: 'gd', name: 'Group Discussion' },
          { id: 'communication', name: 'Communication Skills' },
        ],
      },
    ],
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Full-stack web development learning path',
    subjects: [
      {
        name: 'Frontend',
        topics: [
          { id: 'html', name: 'HTML5' },
          { id: 'css', name: 'CSS3 & Flexbox/Grid' },
          { id: 'js', name: 'JavaScript Fundamentals' },
          { id: 'react', name: 'React.js' },
          { id: 'ts', name: 'TypeScript' },
        ],
      },
      {
        name: 'Backend',
        topics: [
          { id: 'nodejs', name: 'Node.js' },
          { id: 'express', name: 'Express.js' },
          { id: 'rest', name: 'REST APIs' },
          { id: 'auth', name: 'Authentication' },
        ],
      },
      {
        name: 'Database',
        topics: [
          { id: 'sql-basics', name: 'SQL Basics' },
          { id: 'mongodb', name: 'MongoDB' },
          { id: 'orm', name: 'ORM (Prisma/Mongoose)' },
        ],
      },
      {
        name: 'DevOps',
        topics: [
          { id: 'git', name: 'Git & GitHub' },
          { id: 'deployment', name: 'Deployment (Vercel/AWS)' },
          { id: 'docker', name: 'Docker Basics' },
        ],
      },
    ],
  },
];

export default function SyllabusTrackerClient() {
  const [selectedSyllabus, setSelectedSyllabus] = useState<string>('gate-cs');
  const [completedTopics, setCompletedTopics] = useState<
    Record<string, boolean>
  >({});
  const [expandedSubjects, setExpandedSubjects] = useState<
    Record<string, boolean>
  >({});

  const currentSyllabus =
    syllabi.find((s) => s.id === selectedSyllabus) || syllabi[0];

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`syllabus-tracker-${selectedSyllabus}`);
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    } else {
      setCompletedTopics({});
    }
    // Expand all subjects by default
    const expanded: Record<string, boolean> = {};
    currentSyllabus.subjects.forEach((s) => {
      expanded[s.name] = true;
    });
    setExpandedSubjects(expanded);
  }, [selectedSyllabus, currentSyllabus.subjects]);

  // Save to localStorage
  useEffect(() => {
    if (Object.keys(completedTopics).length > 0) {
      localStorage.setItem(
        `syllabus-tracker-${selectedSyllabus}`,
        JSON.stringify(completedTopics),
      );
    }
  }, [completedTopics, selectedSyllabus]);

  const toggleTopic = (topicId: string) => {
    setCompletedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const toggleSubject = (subjectName: string) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectName]: !prev[subjectName],
    }));
  };

  const resetProgress = () => {
    setCompletedTopics({});
    localStorage.removeItem(`syllabus-tracker-${selectedSyllabus}`);
  };

  const totalTopics = currentSyllabus.subjects.reduce(
    (acc, s) => acc + s.topics.length,
    0,
  );
  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalTopics) * 100);

  const getSubjectProgress = (subject: Subject) => {
    const completed = subject.topics.filter(
      (t) => completedTopics[t.id],
    ).length;
    return { completed, total: subject.topics.length };
  };

  return (
    <div className="space-y-6">
      {/* Syllabus Selector */}
      <div className="flex flex-wrap gap-2">
        {syllabi.map((s) => (
          <Button
            key={s.id}
            variant={selectedSyllabus === s.id ? 'default' : 'outline'}
            onClick={() => setSelectedSyllabus(s.id)}
          >
            {s.name}
          </Button>
        ))}
      </div>

      {/* Overall Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{currentSyllabus.name}</h3>
              <p className="text-sm text-muted-foreground">
                {currentSyllabus.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">
                {progressPercent}%
              </div>
              <p className="text-sm text-muted-foreground">
                {completedCount} / {totalTopics} topics
              </p>
            </div>
          </div>
          <Progress
            value={progressPercent}
            className="h-3"
          />
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={resetProgress}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Progress
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Subjects */}
      <div className="space-y-4">
        {currentSyllabus.subjects.map((subject) => {
          const progress = getSubjectProgress(subject);
          const isExpanded = expandedSubjects[subject.name];
          const isComplete = progress.completed === progress.total;

          return (
            <Card
              key={subject.name}
              className={isComplete ? 'border-green-500/50' : ''}
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleSubject(subject.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isComplete ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <BookOpen className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={isComplete ? 'default' : 'secondary'}>
                      {progress.completed}/{progress.total}
                    </Badge>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <Progress
                  value={(progress.completed / progress.total) * 100}
                  className="mt-2 h-1"
                />
              </CardHeader>
              {isExpanded && (
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {subject.topics.map((topic) => (
                      <div
                        key={topic.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                          completedTopics[topic.id]
                            ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30'
                            : 'hover:bg-muted/50'
                        }`}
                        onClick={() => toggleTopic(topic.id)}
                      >
                        <Checkbox
                          checked={completedTopics[topic.id] || false}
                          onCheckedChange={() => toggleTopic(topic.id)}
                        />
                        <span
                          className={
                            completedTopics[topic.id]
                              ? 'text-green-700 line-through dark:text-green-400'
                              : ''
                          }
                        >
                          {topic.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
