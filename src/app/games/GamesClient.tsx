'use client';

import { useState, useMemo } from 'react';
import { GameCard } from '@/components/games/GameCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Brain,
  Gamepad2,
  TrendingUp,
  Clock,
  Target,
  BookOpen,
  Lightbulb,
  Calculator,
  MessageSquare,
  Eye,
  Puzzle,
  Hash,
  Terminal,
  Briefcase,
  Bug,
  Mic,
  Mail,
  Cpu,
  GitBranch,
  Zap,
  Scan,
  Shapes,
  ListOrdered,
  Filter,
  FunctionSquare,
  BrainCircuit,
  Layers,
  HelpCircle,
  Timer,
  Camera,
  Crosshair,
  Percent,
  PenTool,
  ArrowLeftRight,
  Contrast,
  LayoutGrid,
  MousePointerClick,
  Grid3X3,
  Search,
  Scale,
  Swords,
  BarChart2,
  Focus,
  LucideIcon,
  FlaskConical,
  Dna,
  Stethoscope,
  Atom,
  Ruler,
  AlertTriangle,
  Gauge,
  Trophy,
  Rocket,
  Keyboard,
  Database,
  BarChart3,
  BookCheck,
  MessageCircle,
} from 'lucide-react';

type Category =
  | 'All'
  | 'Memory'
  | 'Logic'
  | 'Math'
  | 'Vocabulary'
  | 'Focus'
  | 'Advanced'
  | 'Science'
  | 'Coding';
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'All Levels';

export interface GameData {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  difficulty: Difficulty;
  category:
    | 'Memory'
    | 'Logic'
    | 'Math'
    | 'Vocabulary'
    | 'Focus'
    | 'Advanced'
    | 'Science'
    | 'Coding';
  color: string;
  benefits: string[];
}

const categories: Category[] = [
  'All',
  'Memory',
  'Logic',
  'Math',
  'Vocabulary',
  'Focus',
  'Advanced',
  'Science',
  'Coding',
];

const games: GameData[] = [
  // ========== MEMORY GAMES ==========
  {
    title: 'Memory Matrix',
    description:
      'Test and improve your visual-spatial memory by remembering patterns on a grid. Great for enhancing short-term recall.',
    href: '/games/memory-matrix',
    icon: Eye,
    difficulty: 'All Levels' as const,
    category: 'Memory' as const,
    color: 'from-purple-500 to-pink-500',
    benefits: ['Improves short-term memory', 'Enhances visual processing'],
  },
  {
    title: 'Memory Match',
    description:
      'Find matching pairs of cards to test and improve your visual memory. Start with fewer cards and work your way up.',
    href: '/games/memory-match',
    icon: Layers,
    difficulty: 'All Levels' as const,
    category: 'Memory' as const,
    color: 'from-purple-500 to-violet-500',
    benefits: ['Pair matching skill', 'Visual memory training'],
  },
  {
    title: 'Card Flip Memory',
    description:
      'Classic card flipping memory game with multiple themes. Remember card positions and make matches.',
    href: '/games/card-flip-memory',
    icon: LayoutGrid,
    difficulty: 'Easy' as const,
    category: 'Memory' as const,
    color: 'from-indigo-500 to-purple-500',
    benefits: ['Position memory', 'Pattern recognition'],
  },
  {
    title: 'Quick Recall',
    description:
      'Speed-based memory challenge where you must remember and recall items quickly under time pressure.',
    href: '/games/quick-recall',
    icon: Timer,
    difficulty: 'Medium' as const,
    category: 'Memory' as const,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Fast recall training', 'Working memory boost'],
  },
  {
    title: 'Memory Power Test',
    description:
      'Comprehensive memory assessment testing visual, verbal, and sequence memory abilities.',
    href: '/games/memory-power-test',
    icon: Brain,
    difficulty: 'Hard' as const,
    category: 'Memory' as const,
    color: 'from-fuchsia-500 to-pink-500',
    benefits: ['Memory assessment', 'Cognitive benchmarking'],
  },
  {
    title: 'Mind Snapshot',
    description:
      'View an image briefly and recall details. Trains your brain to capture and retain visual information.',
    href: '/games/mind-snapshot',
    icon: Camera,
    difficulty: 'Medium' as const,
    category: 'Memory' as const,
    color: 'from-cyan-500 to-blue-500',
    benefits: ['Photographic memory', 'Attention to detail'],
  },
  {
    title: 'Concentration Challenge',
    description:
      'Advanced memory game that challenges both your memory and concentration simultaneously.',
    href: '/games/concentration-challenge',
    icon: Target,
    difficulty: 'Medium' as const,
    category: 'Memory' as const,
    color: 'from-violet-500 to-purple-500',
    benefits: ['Deep concentration', 'Memory under pressure'],
  },
  {
    title: 'Attention Trainer',
    description:
      'Train your attention span with exercises designed to improve sustained focus and memory.',
    href: '/games/attention-trainer',
    icon: Eye,
    difficulty: 'Easy' as const,
    category: 'Memory' as const,
    color: 'from-emerald-500 to-teal-500',
    benefits: ['Attention span', 'Sustained focus'],
  },

  // ========== LOGIC GAMES ==========
  {
    title: 'Pattern Recognition',
    description:
      'Identify visual patterns with shapes, colors, and rotations. Core skill for IQ tests and analytical reasoning.',
    href: '/games/pattern-recognition',
    icon: Puzzle,
    difficulty: 'Medium' as const,
    category: 'Logic' as const,
    color: 'from-indigo-500 to-violet-500',
    benefits: ['Develops spatial reasoning', 'Improves abstract thinking'],
  },
  {
    title: 'Logic Puzzle',
    description:
      'Solve deductive reasoning challenges using given clues. Classic grid puzzles and syllogism problems.',
    href: '/games/logic-puzzle',
    icon: Lightbulb,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-amber-500 to-orange-500',
    benefits: ['Sharpens critical thinking', 'Improves problem decomposition'],
  },
  {
    title: 'Sudoku Trainer',
    description:
      'Classic number puzzle with multiple difficulty levels. Learn solving techniques with the built-in hint system.',
    href: '/games/sudoku-trainer',
    icon: Gamepad2,
    difficulty: 'All Levels' as const,
    category: 'Logic' as const,
    color: 'from-sky-500 to-blue-500',
    benefits: ['Develops logical deduction', 'Improves patience'],
  },
  {
    title: 'Predict Output',
    description:
      'Test your coding logic in JS, Python, Java, & C++. Predict the result of tricky code snippets.',
    href: '/games/predict-output',
    icon: Terminal,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-slate-500 to-zinc-500',
    benefits: ['Improves code reading', 'Debug faster'],
  },
  {
    title: 'Debugging Challenge',
    description:
      'Find and fix logic errors in code snippets. Identify infinite loops and scope issues.',
    href: '/games/debugging-challenge',
    icon: Bug,
    difficulty: 'Medium' as const,
    category: 'Logic' as const,
    color: 'from-red-500 to-rose-500',
    benefits: ['Improves troubleshooting', 'Spot logic flaws'],
  },
  {
    title: 'Algorithm Thinking',
    description:
      'Arrange code blocks to solve problems. Visual logic building for sorting and searching.',
    href: '/games/algorithm-thinking',
    icon: GitBranch,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-cyan-500 to-teal-500',
    benefits: ['Builds computational thinking', 'Learn core algorithms'],
  },
  {
    title: 'Logic Builder',
    description:
      'Master digital logic by building and fixing logic circuits. Learn how AND, OR, and NOT gates work.',
    href: '/games/logic-builder',
    icon: Cpu,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-blue-500 to-indigo-500',
    benefits: ['Understands boolean logic', 'Improves circuit analysis'],
  },
  {
    title: 'Brain Logic Test',
    description:
      'Challenge your deductive skills with syllogisms, analogies, and logical reasoning problems.',
    href: '/games/brain-logic-test',
    icon: Brain,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Sharpens deductive reasoning', 'Prepares for IQ tests'],
  },
  {
    title: 'Reasoning Master',
    description:
      'Solve non-verbal reasoning puzzles and visual analogies to identify hidden rules.',
    href: '/games/reasoning-master',
    icon: Shapes,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-teal-500 to-emerald-500',
    benefits: ['Improves non-verbal reasoning', 'Enhances pattern analysis'],
  },
  {
    title: 'Sequence Solver',
    description:
      'Find the missing link in complex alphanumeric, symbol, and pattern sequences.',
    href: '/games/sequence-solver',
    icon: ListOrdered,
    difficulty: 'Medium' as const,
    category: 'Logic' as const,
    color: 'from-cyan-500 to-sky-500',
    benefits: ['Improves pattern recognition', 'Enhances inductive reasoning'],
  },
  {
    title: 'Odd One Out',
    description:
      'Identify the item that does not belong in the group based on category, logic, or properties.',
    href: '/games/odd-one-out',
    icon: Filter,
    difficulty: 'Easy' as const,
    category: 'Logic' as const,
    color: 'from-orange-500 to-amber-500',
    benefits: [
      'Sharpens categorization skills',
      'Improves logical discrimination',
    ],
  },
  {
    title: 'Smart Choice',
    description:
      'Maximize value within constraints. A strategic game about making the most efficient decisions.',
    href: '/games/smart-choice',
    icon: TrendingUp,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-emerald-500 to-green-500',
    benefits: [
      'Improves decision making',
      'Enhances resource management skills',
    ],
  },
  {
    title: 'Critical Thinking',
    description:
      'Test your ability to analyze arguments, spot logical fallacies, and distinguish fact from opinion.',
    href: '/games/critical-thinking-quiz',
    icon: BrainCircuit,
    difficulty: 'Medium' as const,
    category: 'Logic' as const,
    color: 'from-slate-500 to-gray-500',
    benefits: ['Identifies logical fallacies', 'Improves argument analysis'],
  },
  {
    title: 'Daily Riddle',
    description:
      'Solve fun riddles and brain teasers daily. Test your lateral thinking and problem-solving skills.',
    href: '/games/daily-riddle',
    icon: Lightbulb,
    difficulty: 'Medium' as const,
    category: 'Logic' as const,
    color: 'from-yellow-500 to-orange-500',
    benefits: ['Lateral thinking', 'Creative problem solving'],
  },
  {
    title: 'Trivia Quiz',
    description:
      'Challenge yourself with fun trivia questions across various topics. Test and expand your general knowledge.',
    href: '/games/trivia-quiz',
    icon: HelpCircle,
    difficulty: 'Easy' as const,
    category: 'Logic' as const,
    color: 'from-violet-500 to-purple-500',
    benefits: ['General knowledge', 'Quick recall'],
  },

  // ========== MATH GAMES ==========
  {
    title: 'Number Sequence',
    description:
      'Crack mathematical patterns and predict the next number. Master arithmetic, geometric, and Fibonacci sequences.',
    href: '/games/number-sequence',
    icon: Hash,
    difficulty: 'All Levels' as const,
    category: 'Math' as const,
    color: 'from-orange-500 to-red-500',
    benefits: [
      'Strengthens pattern recognition',
      'Prepares for aptitude tests',
    ],
  },
  {
    title: 'Speed Math',
    description:
      'Race against the clock solving arithmetic problems. Perfect for improving calculation speed for exams.',
    href: '/games/speed-math',
    icon: Calculator,
    difficulty: 'All Levels' as const,
    category: 'Math' as const,
    color: 'from-blue-500 to-cyan-500',
    benefits: ['Boosts calculation speed', 'Essential for aptitude rounds'],
  },
  {
    title: 'Mental Math',
    description:
      'Master mental calculation with complex problems. Learn Vedic math techniques for faster computations.',
    href: '/games/mental-math',
    icon: Brain,
    difficulty: 'Hard' as const,
    category: 'Math' as const,
    color: 'from-fuchsia-500 to-purple-500',
    benefits: ['Builds mental calculation skills', 'Teaches faster techniques'],
  },
  {
    title: 'Visual Logic',
    description:
      'Solve visual equations where shapes represent numbers. Sharpen algebraic thinking.',
    href: '/games/visual-logic-game',
    icon: FunctionSquare,
    difficulty: 'Medium' as const,
    category: 'Math' as const,
    color: 'from-lime-500 to-green-500',
    benefits: ['Builds algebraic understanding', 'Improves logical deduction'],
  },
  {
    title: 'Math Speed Test',
    description:
      'Race through arithmetic problems to test your calculation speed and accuracy under pressure.',
    href: '/games/math-speed-test',
    icon: Timer,
    difficulty: 'All Levels' as const,
    category: 'Math' as const,
    color: 'from-red-500 to-orange-500',
    benefits: ['Speed calculation', 'Accuracy under pressure'],
  },
  {
    title: 'Percentage Puzzle',
    description:
      'Master percentage calculations through fun puzzles. Essential for business and everyday math.',
    href: '/games/percentage-puzzle',
    icon: Percent,
    difficulty: 'Medium' as const,
    category: 'Math' as const,
    color: 'from-green-500 to-teal-500',
    benefits: ['Percentage mastery', 'Real-world math skills'],
  },
  {
    title: 'Profit & Loss Game',
    description:
      'Learn business math through profit and loss scenarios. Calculate margins, discounts, and markups.',
    href: '/games/profit-loss-game',
    icon: TrendingUp,
    difficulty: 'Medium' as const,
    category: 'Math' as const,
    color: 'from-emerald-500 to-green-500',
    benefits: ['Business math', 'Financial literacy'],
  },
  {
    title: 'Time & Work Challenge',
    description:
      'Solve time and work problems that appear frequently in aptitude tests and competitive exams.',
    href: '/games/time-work-challenge',
    icon: Clock,
    difficulty: 'Hard' as const,
    category: 'Math' as const,
    color: 'from-blue-500 to-indigo-500',
    benefits: ['Aptitude test prep', 'Problem solving'],
  },
  {
    title: 'Number Series',
    description:
      'Find the pattern and complete number series. Essential for banking and competitive exams.',
    href: '/games/number-series',
    icon: Hash,
    difficulty: 'Medium' as const,
    category: 'Math' as const,
    color: 'from-purple-500 to-indigo-500',
    benefits: ['Pattern detection', 'Exam preparation'],
  },

  // ========== VOCABULARY GAMES ==========
  {
    title: 'Word Association',
    description:
      'Build vocabulary and logical thinking by finding connections between words. Categories include synonyms, antonyms, and more.',
    href: '/games/word-association',
    icon: MessageSquare,
    difficulty: 'Medium' as const,
    category: 'Vocabulary' as const,
    color: 'from-green-500 to-emerald-500',
    benefits: ['Expands vocabulary', 'Improves verbal reasoning'],
  },
  {
    title: 'Word Scramble',
    description:
      'Unscramble letters to form words. Categories include tech terms, business vocabulary, and general knowledge.',
    href: '/games/word-scramble',
    icon: BookOpen,
    difficulty: 'Easy' as const,
    category: 'Vocabulary' as const,
    color: 'from-teal-500 to-green-500',
    benefits: ['Builds vocabulary', 'Improves word recognition'],
  },
  {
    title: 'Email Etiquette',
    description:
      'Choose the best email for the situation. Master cold emails, negotiations, and workplace comms.',
    href: '/games/email-etiquette',
    icon: Mail,
    difficulty: 'Easy' as const,
    category: 'Vocabulary' as const,
    color: 'from-slate-500 to-blue-500',
    benefits: ['Professional writing', 'Corporate communication'],
  },
  {
    title: 'Spelling Bee',
    description:
      'Practice your spelling with this interactive spelling bee game. Improve your English spelling skills.',
    href: '/games/spelling-bee',
    icon: PenTool,
    difficulty: 'Medium' as const,
    category: 'Vocabulary' as const,
    color: 'from-amber-500 to-yellow-500',
    benefits: ['Spelling accuracy', 'Vocabulary building'],
  },
  {
    title: 'Synonym Match',
    description:
      'Match words with their synonyms. Expand your vocabulary and improve your verbal reasoning.',
    href: '/games/synonym-match',
    icon: ArrowLeftRight,
    difficulty: 'Easy' as const,
    category: 'Vocabulary' as const,
    color: 'from-green-500 to-lime-500',
    benefits: ['Vocabulary expansion', 'Word relationships'],
  },
  {
    title: 'Antonym Challenge',
    description:
      'Find the opposite meaning. Test your knowledge of antonyms and expand your vocabulary.',
    href: '/games/antonym-challenge',
    icon: Contrast,
    difficulty: 'Easy' as const,
    category: 'Vocabulary' as const,
    color: 'from-pink-500 to-red-500',
    benefits: ['Opposite words', 'Verbal aptitude'],
  },

  // ========== FOCUS GAMES ==========
  {
    title: 'Concentration Test',
    description:
      'Challenge your focus with Stroop tests and attention tasks. Measure and improve your concentration abilities.',
    href: '/games/concentration-test',
    icon: Target,
    difficulty: 'Medium' as const,
    category: 'Focus' as const,
    color: 'from-rose-500 to-pink-500',
    benefits: ['Enhances focus', 'Reduces careless errors'],
  },
  {
    title: 'Situation Judgment',
    description:
      'Workplace scenario simulator. Test your ethics, leadership, and professional decision-making.',
    href: '/games/situation-judgment',
    icon: Briefcase,
    difficulty: 'Medium' as const,
    category: 'Focus' as const,
    color: 'from-blue-600 to-indigo-600',
    benefits: ['HR interview prep', 'Soft skills training'],
  },
  {
    title: 'Interview Ready',
    description:
      'Mock interview simulator. Practice your answers for common behavioral and situational questions.',
    href: '/games/interview-ready',
    icon: Mic,
    difficulty: 'Medium' as const,
    category: 'Focus' as const,
    color: 'from-indigo-500 to-pink-500',
    benefits: ['Build confidence', 'Master STAR method'],
  },
  {
    title: 'Think Fast',
    description:
      'Test your reaction time and decision making speed with rapid fire true/false questions.',
    href: '/games/think-fast',
    icon: Zap,
    difficulty: 'Easy' as const,
    category: 'Focus' as const,
    color: 'from-yellow-500 to-amber-500',
    benefits: ['Improves reaction time', 'Quick decision making'],
  },
  {
    title: 'Pattern Finder',
    description:
      'Sharpen your observation skills by quickly locating specific patterns in a chaotic grid.',
    href: '/games/pattern-finder',
    icon: Scan,
    difficulty: 'Medium' as const,
    category: 'Focus' as const,
    color: 'from-indigo-500 to-purple-500',
    benefits: ['Enhances observation skills', 'Improves visual scanning'],
  },
  {
    title: 'Reaction Time Test',
    description:
      'Measure your reaction time with this simple reflex test. See how fast you can respond to visual stimuli.',
    href: '/games/reaction-time-test',
    icon: Zap,
    difficulty: 'Easy' as const,
    category: 'Focus' as const,
    color: 'from-yellow-500 to-orange-500',
    benefits: ['Reflex training', 'Response speed'],
  },
  {
    title: 'Quick Click Challenge',
    description:
      'Test how fast you can click. Simple speed test to measure your clicking speed and hand-eye coordination.',
    href: '/games/quick-click-challenge',
    icon: MousePointerClick,
    difficulty: 'Easy' as const,
    category: 'Focus' as const,
    color: 'from-orange-500 to-red-500',
    benefits: ['Click speed', 'Hand-eye coordination'],
  },
  {
    title: 'Focus Booster',
    description:
      'Exercises designed to improve and maintain focus over extended periods. Great for study skills.',
    href: '/games/focus-booster',
    icon: Focus,
    difficulty: 'Medium' as const,
    category: 'Focus' as const,
    color: 'from-blue-500 to-cyan-500',
    benefits: ['Extended focus', 'Study efficiency'],
  },
  {
    title: 'Speed Focus Game',
    description:
      'Combine speed with accuracy in this focus-intensive game. Find targets quickly while avoiding mistakes.',
    href: '/games/speed-focus-game',
    icon: Crosshair,
    difficulty: 'Hard' as const,
    category: 'Focus' as const,
    color: 'from-red-500 to-pink-500',
    benefits: ['Speed + accuracy', 'Visual tracking'],
  },

  // ========== ADVANCED THINKING ==========
  {
    title: 'Causal Chain Builder',
    description:
      'Build cause-and-effect chains to understand how actions create ripple effects. Master system thinking for business analysis.',
    href: '/games/causal-chain-builder',
    icon: GitBranch,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-violet-500 to-indigo-500',
    benefits: ['System thinking', 'Cause-effect reasoning'],
  },
  {
    title: 'Fallacy Detective',
    description:
      'Spot logical fallacies in arguments. Learn to identify Ad Hominem, Straw Man, False Dilemma, and 15+ more fallacy types.',
    href: '/games/fallacy-detective',
    icon: Search,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-amber-500 to-orange-500',
    benefits: ['Critical thinking', 'Argument analysis'],
  },
  {
    title: 'Decision Matrix Lab',
    description:
      'Make complex decisions simpler using weighted criteria. A skill used by consultants and product managers worldwide.',
    href: '/games/decision-matrix-lab',
    icon: Grid3X3,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-teal-500 to-cyan-500',
    benefits: ['Decision making', 'Trade-off analysis'],
  },
  {
    title: 'Bias Buster',
    description:
      'Recognize cognitive biases that affect your decisions. Master anchoring, confirmation bias, sunk cost fallacy, and 15+ others.',
    href: '/games/bias-buster',
    icon: Brain,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Cognitive awareness', 'Better decisions'],
  },
  {
    title: 'Risk Radar',
    description:
      'Master probability thinking and expected value calculations. Learn to assess risks and make decisions under uncertainty.',
    href: '/games/risk-radar',
    icon: Target,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-red-500 to-orange-500',
    benefits: ['Probability thinking', 'Risk assessment'],
  },
  {
    title: 'Strategic Standoff',
    description:
      "Learn game theory through interactive scenarios. Understand Nash equilibrium, prisoner's dilemma, and strategic thinking.",
    href: '/games/strategic-standoff',
    icon: Swords,
    difficulty: 'Medium' as const,
    category: 'Advanced' as const,
    color: 'from-slate-500 to-zinc-500',
    benefits: ['Game theory', 'Strategic planning'],
  },
  {
    title: 'Data Detective',
    description:
      'Master data interpretation. Learn to read charts, spot anomalies, avoid misinterpretation, and ask the right questions.',
    href: '/games/data-detective',
    icon: BarChart2,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-blue-500 to-indigo-500',
    benefits: ['Data literacy', 'Chart interpretation'],
  },
  {
    title: 'Stats Skeptic',
    description:
      "Don't be fooled by misleading numbers. Learn to identify margin of error, p-packing, and biased samples.",
    href: '/games/stats-skeptic',
    icon: Percent,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-cyan-500 to-blue-500',
    benefits: ['Statistical reasoning', 'Data literacy'],
  },
  {
    title: 'Chart Challenge',
    description:
      'Master data visualization. Learn to choose the right chart and spot deceptive visual tricks.',
    href: '/games/chart-challenge',
    icon: BarChart2,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Visual literacy', 'Chart creation'],
  },
  {
    title: 'Complexity Cracker',
    description:
      'Optimize your thinking. Learn Big O notation, spot performance bottlenecks, and write efficient code.',
    href: '/games/complexity-cracker',
    icon: Cpu,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-orange-500 to-amber-500',
    benefits: ['Algorithmic thinking', 'Performance optimization'],
  },
  {
    title: 'Constraint Crusher',
    description:
      'Solve optimization puzzles. Maximize value under strict constraints involving budget, time, and space.',
    href: '/games/constraint-crusher',
    icon: Scale,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-emerald-500 to-teal-500',
    benefits: ['Resource allocation', 'Linear thinking'],
  },
  {
    title: 'System Simulator',
    description:
      'Everything is connected. Master feedback loops, delays, and leverage points in complex systems.',
    href: '/games/system-simulator',
    icon: Activity,
    difficulty: 'All Levels' as const,
    category: 'Advanced' as const,
    color: 'from-indigo-500 to-violet-500',
    benefits: ['Systems thinking', 'Causal analysis'],
  },

  // ========== SCIENCE GAMES ==========
  {
    title: 'Concept Sprint',
    description:
      'Test your ability to articulate core concepts in Physics and Math, then solve a hard follow-up problem to prove your understanding.',
    href: '/games/concept-sprint',
    icon: Rocket,
    difficulty: 'Hard' as const,
    category: 'Science' as const,
    color: 'from-amber-500 to-orange-500',
    benefits: ['Concept mastery', 'JEE/NEET preparation'],
  },
  {
    title: 'Deep Problem Marathon',
    description:
      'Build your solving stamina with multi-layered problems that require chain reasoning. Ideal for Advanced JEE and Competition math/physics practice.',
    href: '/games/deep-problem-marathon',
    icon: Trophy,
    difficulty: 'Hard' as const,
    category: 'Science' as const,
    color: 'from-rose-500 to-pink-500',
    benefits: ['Problem-solving endurance', 'Advanced reasoning'],
  },
  {
    title: 'Fermi Estimation Duel',
    description:
      'Master the art of approximation. Make rapid order-of-magnitude estimates for impossible-sounding problems using logical breakdowns.',
    href: '/games/fermi-estimation-duel',
    icon: Gauge,
    difficulty: 'Medium' as const,
    category: 'Science' as const,
    color: 'from-cyan-500 to-teal-500',
    benefits: ['Estimation skills', 'Scientific reasoning'],
  },
  {
    title: 'Math Proof Builder',
    description:
      'Build mathematical proofs from premises to conclusions. Master inequalities, number theory, and logical reasoning for JEE and Olympiad preparation.',
    href: '/games/math-proof-builder',
    icon: BookOpen,
    difficulty: 'Hard' as const,
    category: 'Math' as const,
    color: 'from-purple-500 to-violet-500',
    benefits: ['Formal proofs', 'Olympiad preparation'],
  },
  {
    title: 'Physics Intuition Lab',
    description:
      'Build physical intuition through interactive simulations. Predict outcomes before running experiments. Master oscillations, projectile motion, and waves.',
    href: '/games/physics-intuition-lab',
    icon: Atom,
    difficulty: 'Medium' as const,
    category: 'Science' as const,
    color: 'from-cyan-500 to-blue-500',
    benefits: ['Physical intuition', 'JEE/NEET physics'],
  },
  {
    title: 'Derivation Race',
    description:
      'Race to derive standard physics and math results step-by-step. Master symbolic reasoning and understand proofs deeply for JEE/NEET.',
    href: '/games/derivation-race',
    icon: GitBranch,
    difficulty: 'Hard' as const,
    category: 'Science' as const,
    color: 'from-indigo-500 to-blue-500',
    benefits: ['Deep understanding', 'Formula derivation'],
  },
  {
    title: 'Dimensional Detective',
    description:
      'Practice dimensional analysis problems. Verify equations, find dimensions of quantities. Essential for JEE Physics preparation.',
    href: '/games/dimensional-detective',
    icon: Ruler,
    difficulty: 'Medium' as const,
    category: 'Science' as const,
    color: 'from-violet-500 to-purple-500',
    benefits: ['Dimensional analysis', 'Equation verification'],
  },
  {
    title: 'Error Spotter',
    description:
      'Sharpen your attention to detail by finding errors in physics, chemistry, and math solutions. Perfect for JEE/NEET preparation.',
    href: '/games/error-spotter',
    icon: AlertTriangle,
    difficulty: 'Medium' as const,
    category: 'Science' as const,
    color: 'from-red-500 to-rose-500',
    benefits: ['Error detection', 'Attention to detail'],
  },
  {
    title: 'Problem Decomposition',
    description:
      'Break complex problems into manageable subproblems. Master algorithmic thinking and structured problem solving.',
    href: '/games/problem-decomposition',
    icon: Layers,
    difficulty: 'Hard' as const,
    category: 'Logic' as const,
    color: 'from-indigo-500 to-violet-500',
    benefits: ['Algorithmic thinking', 'Structured problem solving'],
  },
  {
    title: 'Organic Synthesis Planner',
    description:
      'Plan multi-step organic syntheses. Choose reagents and conditions to synthesize target molecules. Perfect for JEE and NEET organic chemistry.',
    href: '/games/organic-synthesis',
    icon: FlaskConical,
    difficulty: 'Hard' as const,
    category: 'Science' as const,
    color: 'from-emerald-500 to-green-500',
    benefits: ['Retrosynthesis', 'Organic chemistry mastery'],
  },
  {
    title: 'Biology Pathway Builder',
    description:
      'Build metabolic and signaling pathways step by step. Master glycolysis, photosynthesis, cell signaling for NEET biology preparation.',
    href: '/games/biology-pathway',
    icon: Dna,
    difficulty: 'Medium' as const,
    category: 'Science' as const,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Metabolic pathways', 'Systems biology'],
  },
  {
    title: 'Reaction Mechanism Detective',
    description:
      'Deduce organic reaction mechanisms from experimental observations. Master SN1, SN2, E1, E2, and more for JEE/NEET organic chemistry.',
    href: '/games/reaction-mechanism',
    icon: Search,
    difficulty: 'Hard' as const,
    category: 'Science' as const,
    color: 'from-orange-500 to-amber-500',
    benefits: ['Mechanism deduction', 'Organic chemistry'],
  },
  {
    title: 'Clinical Case Puzzle',
    description:
      'Practice diagnostic reasoning with clinical case vignettes. Analyze symptoms, vitals, and lab results for NEET medical preparation.',
    href: '/games/clinical-case',
    icon: Stethoscope,
    difficulty: 'Hard' as const,
    category: 'Science' as const,
    color: 'from-red-500 to-rose-500',
    benefits: ['Diagnostic reasoning', 'NEET medicine'],
  },

  // ========== CODING GAMES ==========
  {
    title: 'Code Battle',
    description:
      'Solve problems faster than the AI. Race against optimized solutions in real-time coding challenges with JavaScript and Python.',
    href: '/games/coding/code-battle',
    icon: Swords,
    difficulty: 'Medium' as const,
    category: 'Coding' as const,
    color: 'from-red-500 to-orange-500',
    benefits: ['AI competition', 'Timed challenges'],
  },
  {
    title: 'Debug Arena',
    description:
      'Find and fix bugs in real code. Practice debugging skills with increasingly difficult challenges in JavaScript and Python.',
    href: '/games/coding/debug-arena',
    icon: Bug,
    difficulty: 'All Levels' as const,
    category: 'Coding' as const,
    color: 'from-green-500 to-emerald-500',
    benefits: ['Debugging skills', 'Real code practice'],
  },
  {
    title: 'Algorithm Builder',
    description:
      'Build algorithms step-by-step. Fill in the missing pieces and learn algorithm design patterns from scratch.',
    href: '/games/coding/algorithm-builder',
    icon: Layers,
    difficulty: 'Medium' as const,
    category: 'Coding' as const,
    color: 'from-blue-500 to-cyan-500',
    benefits: ['Step-by-step learning', 'Pattern recognition'],
  },
  {
    title: 'Output Prediction',
    description:
      'Predict what the code will output. Test your understanding of JavaScript and Python tricky gotchas like closures, hoisting, and async.',
    href: '/games/coding/output-prediction',
    icon: Terminal,
    difficulty: 'All Levels' as const,
    category: 'Coding' as const,
    color: 'from-purple-500 to-pink-500',
    benefits: ['Code reading', 'Language mastery'],
  },
  {
    title: 'Refactor Challenge',
    description:
      'Optimize inefficient code. Learn performance tuning, clean code principles, and best practices by refactoring bad code.',
    href: '/games/coding/refactor-challenge',
    icon: Zap,
    difficulty: 'Medium' as const,
    category: 'Coding' as const,
    color: 'from-amber-500 to-orange-500',
    benefits: ['Performance optimization', 'Clean code'],
  },
  {
    title: 'Regex Master',
    description:
      'Write regex patterns to match text. Live testing shows results in real-time as you type your pattern.',
    href: '/games/coding/regex-master',
    icon: Search,
    difficulty: 'All Levels' as const,
    category: 'Coding' as const,
    color: 'from-pink-500 to-rose-500',
    benefits: ['Pattern matching', 'Text validation'],
  },

  // ========== NEW CAREER GAMES ==========
  {
    title: 'Typing Speed Test',
    description:
      'Test your typing speed (WPM) and accuracy with our developer-focused typing test. Practice coding syntax and common programming patterns.',
    href: '/games/typing-speed',
    icon: Keyboard,
    difficulty: 'All Levels' as const,
    category: 'Focus' as const,
    color: 'from-blue-500 to-indigo-500',
    benefits: ['Typing speed', 'Coding fluency'],
  },
  {
    title: 'Excel Shortcut Racer',
    description:
      'Master Excel and OS shortcuts by pressing the actual key combinations. Essential skill for data analysts and productivity.',
    href: '/games/excel-shortcuts',
    icon: Keyboard,
    difficulty: 'All Levels' as const,
    category: 'Focus' as const,
    color: 'from-green-500 to-emerald-500',
    benefits: ['Productivity shortcuts', 'Excel mastery'],
  },
  {
    title: 'SQL Query Master',
    description:
      'Practice SQL queries interactively. Learn SELECT, JOIN, WHERE, GROUP BY through fill-in-the-blank challenges.',
    href: '/games/coding/sql-builder',
    icon: Database,
    difficulty: 'Medium' as const,
    category: 'Coding' as const,
    color: 'from-blue-500 to-cyan-500',
    benefits: ['SQL fundamentals', 'Database querying'],
  },
  {
    title: 'Aptitude Speed Drill',
    description:
      'Rapid-fire quantitative aptitude questions. Covers Percentage, Profit/Loss, Time & Work, Ratio, and Speed-Distance-Time.',
    href: '/games/aptitude-drill',
    icon: Calculator,
    difficulty: 'All Levels' as const,
    category: 'Math' as const,
    color: 'from-orange-500 to-red-500',
    benefits: ['Placement aptitude', 'Quick calculation'],
  },
  {
    title: 'GD Topic Timer',
    description:
      'Practice Group Discussion topics with timed preparation and speaking phases. Includes key points for and against each topic.',
    href: '/games/gd-topic-timer',
    icon: MessageCircle,
    difficulty: 'Medium' as const,
    category: 'Focus' as const,
    color: 'from-purple-500 to-pink-500',
    benefits: ['GD preparation', 'Public speaking'],
  },
  {
    title: 'Grammar Fixer',
    description:
      'Identify and correct common grammatical errors in sentences. Perfect practice for verbal aptitude tests and professional writing.',
    href: '/games/grammar-fixer',
    icon: BookCheck,
    difficulty: 'Easy' as const,
    category: 'Vocabulary' as const,
    color: 'from-teal-500 to-cyan-500',
    benefits: ['Grammar mastery', 'Error spotting'],
  },
  {
    title: 'Data Interpretation',
    description:
      'Analyze tables and charts to answer questions. A critical skill for placement aptitude tests and analytics roles.',
    href: '/games/data-interpretation',
    icon: BarChart3,
    difficulty: 'Medium' as const,
    category: 'Math' as const,
    color: 'from-indigo-500 to-purple-500',
    benefits: ['Table analysis', 'Chart reading'],
  },
  {
    title: 'Code Review Challenge',
    description:
      'Spot bugs and bad practices in code snippets. Practice essential code review skills for technical interviews.',
    href: '/games/code-review',
    icon: Bug,
    difficulty: 'Medium' as const,
    category: 'Coding' as const,
    color: 'from-red-500 to-rose-500',
    benefits: ['Bug detection', 'Best practices'],
  },
  {
    title: 'Email Tone Analyzer',
    description:
      'Learn professional email etiquette. Identify casual, aggressive, or overly formal tones in workplace communication.',
    href: '/games/email-tone',
    icon: Mail,
    difficulty: 'Easy' as const,
    category: 'Vocabulary' as const,
    color: 'from-slate-500 to-gray-500',
    benefits: ['Business writing', 'Professional email'],
  },
  {
    title: 'Case Study Sprint',
    description:
      'Solve mini business cases like a consultant. Practice strategic thinking for MBA interviews and consulting roles.',
    href: '/games/case-study',
    icon: Briefcase,
    difficulty: 'Hard' as const,
    category: 'Advanced' as const,
    color: 'from-amber-500 to-orange-500',
    benefits: ['Business strategy', 'Case interviews'],
  },
];

export default function GamesClient() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    let result = games;

    // Filter by category
    if (activeFilter !== 'All') {
      result = result.filter((game) => game.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(query) ||
          game.description.toLowerCase().includes(query) ||
          game.benefits.some((benefit) =>
            benefit.toLowerCase().includes(query),
          ),
      );
    }

    return result;
  }, [activeFilter, searchQuery]);

  // Get count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      All: games.length,
      Memory: 0,
      Logic: 0,
      Math: 0,
      Vocabulary: 0,
      Focus: 0,
      Advanced: 0,
      Science: 0,
      Coding: 0,
    };
    games.forEach((game) => {
      counts[game.category]++;
    });
    return counts;
  }, []);

  return (
    <>
      {/* Search bar */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search games by name, description, or skill..."
            className="w-full rounded-full border border-border bg-background py-3 pl-10 pr-4 text-sm transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter === cat
                ? 'scale-105 bg-primary text-primary-foreground shadow-md'
                : 'hover:scale-102 bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-70">
              ({categoryCounts[cat]})
            </span>
          </button>
        ))}
      </div>

      {/* Games grid with animation */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredGames.map((game) => (
            <motion.div
              key={game.href}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <GameCard {...game} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredGames.length === 0 && (
        <div className="py-12 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
          <p className="text-muted-foreground">
            {searchQuery
              ? `No games found matching "${searchQuery}"`
              : 'No games found in this category.'}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-sm text-primary hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </>
  );
}
