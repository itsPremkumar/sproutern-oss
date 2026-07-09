export interface DSATopic {
  slug: string;
  name: string;
  icon: string;
  order: number;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  patterns: string[];
  mustDoProblems: {
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    companies: string[];
  }[];
  keyConceptPoints: string[];
}

export const dsaTopics: DSATopic[] = [
  {
    slug: 'arrays',
    name: 'Arrays',
    icon: '📦',
    order: 1,
    description:
      'Arrays are the most fundamental data structure. Master two-pointer, sliding window, and prefix sum techniques.',
    timeComplexity: 'Access: O(1), Search: O(n), Insert: O(n), Delete: O(n)',
    spaceComplexity: 'O(n)',
    patterns: [
      'Two Pointers',
      'Sliding Window',
      'Prefix Sum',
      "Kadane's Algorithm",
      'Dutch National Flag',
      "Moore's Voting",
    ],
    mustDoProblems: [
      {
        name: 'Two Sum',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        companies: ['Amazon', 'Microsoft', 'Goldman Sachs'],
      },
      {
        name: "Maximum Subarray (Kadane's)",
        difficulty: 'Medium',
        companies: ['Google', 'Microsoft', 'Adobe'],
      },
      {
        name: 'Merge Intervals',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'Product of Array Except Self',
        difficulty: 'Medium',
        companies: ['Amazon', 'Microsoft', 'Apple'],
      },
      {
        name: 'Trapping Rain Water',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Goldman Sachs'],
      },
    ],
    keyConceptPoints: [
      'Arrays have O(1) random access but O(n) insertion/deletion',
      'Sorting the array can simplify many problems from O(n²) to O(n log n)',
      'Two pointers work great on sorted arrays',
      'Sliding window is ideal for subarray problems with a constraint',
    ],
  },
  {
    slug: 'strings',
    name: 'Strings',
    icon: '📝',
    order: 2,
    description:
      'String manipulation, pattern matching, and common algorithms like KMP and Rabin-Karp.',
    timeComplexity: 'Access: O(1), Search: O(n), Concatenation: O(n)',
    spaceComplexity: 'O(n)',
    patterns: [
      'Two Pointers',
      'Sliding Window',
      'HashMap for frequency',
      'KMP Pattern Matching',
      'Palindrome Check',
    ],
    mustDoProblems: [
      {
        name: 'Valid Anagram',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        companies: ['Amazon', 'Google', 'Meta'],
      },
      {
        name: 'Longest Palindromic Substring',
        difficulty: 'Medium',
        companies: ['Amazon', 'Microsoft', 'Adobe'],
      },
      {
        name: 'Group Anagrams',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Minimum Window Substring',
        difficulty: 'Hard',
        companies: ['Google', 'Meta', 'Uber'],
      },
    ],
    keyConceptPoints: [
      'Strings are immutable in Java/Python — concatenation creates new objects',
      'Use StringBuilder in Java for efficient string building',
      'Character frequency arrays (size 26) are faster than HashMaps for lowercase English',
      'KMP algorithm achieves O(n+m) pattern matching vs O(n*m) brute force',
    ],
  },
  {
    slug: 'linked-lists',
    name: 'Linked Lists',
    icon: '🔗',
    order: 3,
    description:
      'Singly and doubly linked lists. Master the fast-slow pointer technique for cycle detection and middle finding.',
    timeComplexity:
      'Access: O(n), Search: O(n), Insert at head: O(1), Delete: O(1) if node known',
    spaceComplexity: 'O(n)',
    patterns: [
      'Fast & Slow Pointers',
      'Reverse Linked List',
      'Merge Two Lists',
      'Dummy Head Node',
      'Runner Technique',
    ],
    mustDoProblems: [
      {
        name: 'Reverse Linked List',
        difficulty: 'Easy',
        companies: ['Microsoft', 'Amazon', 'Google'],
      },
      {
        name: 'Detect Cycle in Linked List',
        difficulty: 'Easy',
        companies: ['Amazon', 'Microsoft', 'TCS'],
      },
      {
        name: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        companies: ['Amazon', 'Microsoft', 'Apple'],
      },
      {
        name: 'Remove Nth Node From End',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'LRU Cache',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
    ],
    keyConceptPoints: [
      'Always use a dummy head node to simplify edge cases',
      'Fast-slow pointers: slow moves 1 step, fast moves 2 steps',
      'To reverse: keep track of prev, curr, next pointers',
      'Linked lists have poor cache locality compared to arrays',
    ],
  },
  {
    slug: 'stacks-queues',
    name: 'Stacks & Queues',
    icon: '📚',
    order: 4,
    description:
      'LIFO and FIFO data structures. Essential for expression evaluation, BFS, and monotonic stack problems.',
    timeComplexity: 'Push/Pop/Enqueue/Dequeue: O(1)',
    spaceComplexity: 'O(n)',
    patterns: [
      'Monotonic Stack',
      'Next Greater Element',
      'Valid Parentheses',
      'BFS with Queue',
      'Min Stack',
    ],
    mustDoProblems: [
      {
        name: 'Valid Parentheses',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Min Stack',
        difficulty: 'Medium',
        companies: ['Amazon', 'Microsoft', 'Goldman Sachs'],
      },
      {
        name: 'Daily Temperatures',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Largest Rectangle in Histogram',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
    ],
    keyConceptPoints: [
      'Stack: use for matching (parentheses), backtracking (DFS), undo operations',
      'Queue: use for BFS, level-order traversal, task scheduling',
      'Monotonic stack: maintains increasing/decreasing order for "next greater/smaller" problems',
      'Priority Queue (Heap) is a queue where dequeue returns min/max element',
    ],
  },
  {
    slug: 'trees',
    name: 'Trees',
    icon: '🌳',
    order: 5,
    description:
      'Binary trees, BSTs, and tree traversals. Foundation for many interview problems.',
    timeComplexity: 'BST Search/Insert/Delete: O(log n) avg, O(n) worst',
    spaceComplexity: 'O(n)',
    patterns: [
      'DFS (Inorder, Preorder, Postorder)',
      'BFS (Level Order)',
      'Recursive Subtree',
      'BST Property',
      'Lowest Common Ancestor',
    ],
    mustDoProblems: [
      {
        name: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        companies: ['Microsoft', 'Amazon', 'Google'],
      },
      {
        name: 'Binary Tree Level Order Traversal',
        difficulty: 'Medium',
        companies: ['Amazon', 'Meta', 'Microsoft'],
      },
      {
        name: 'Lowest Common Ancestor',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'Serialize and Deserialize Binary Tree',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
    ],
    keyConceptPoints: [
      'Most tree problems can be solved recursively',
      'Inorder traversal of BST gives sorted order',
      'Height of balanced tree = O(log n), skewed tree = O(n)',
      'BFS uses queue; DFS uses stack/recursion',
    ],
  },
  {
    slug: 'graphs',
    name: 'Graphs',
    icon: '🕸️',
    order: 6,
    description:
      'Graph representations, traversals, shortest paths, and topological sorting.',
    timeComplexity: 'BFS/DFS: O(V+E), Dijkstra: O((V+E) log V)',
    spaceComplexity: 'O(V+E)',
    patterns: [
      'BFS',
      'DFS',
      'Topological Sort',
      'Union-Find',
      "Dijkstra's Algorithm",
      'Cycle Detection',
    ],
    mustDoProblems: [
      {
        name: 'Number of Islands',
        difficulty: 'Medium',
        companies: ['Amazon', 'Google', 'Microsoft'],
      },
      {
        name: 'Clone Graph',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'Course Schedule (Topological Sort)',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Word Ladder',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Meta'],
      },
    ],
    keyConceptPoints: [
      'Adjacency list is preferred over matrix for sparse graphs',
      'BFS finds shortest path in unweighted graphs',
      'DFS is used for cycle detection, connected components, topological sort',
      'Union-Find is efficient for connectivity queries and MST',
    ],
  },
  {
    slug: 'dynamic-programming',
    name: 'Dynamic Programming',
    icon: '🧩',
    order: 7,
    description:
      'DP is the most asked topic at FAANG. Master memoization, tabulation, and common DP patterns.',
    timeComplexity: 'Varies by problem — typically O(n²) or O(n*W)',
    spaceComplexity: 'O(n) to O(n²)',
    patterns: [
      '0/1 Knapsack',
      'Unbounded Knapsack',
      'LCS/LIS',
      'Matrix Chain',
      'Fibonacci Type',
      'Partition DP',
      'DP on Strings',
    ],
    mustDoProblems: [
      {
        name: 'Climbing Stairs',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Adobe'],
      },
      {
        name: 'Longest Increasing Subsequence',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Coin Change',
        difficulty: 'Medium',
        companies: ['Amazon', 'Microsoft', 'Goldman Sachs'],
      },
      {
        name: 'Longest Common Subsequence',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Edit Distance',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Regular Expression Matching',
        difficulty: 'Hard',
        companies: ['Google', 'Meta', 'Amazon'],
      },
    ],
    keyConceptPoints: [
      'Two approaches: Top-down (memoization) and Bottom-up (tabulation)',
      'Identify: optimal substructure + overlapping subproblems',
      'State definition is the hardest part — what do we need to remember?',
      'Space optimization: often can reduce from O(n²) to O(n) using rolling arrays',
    ],
  },
  {
    slug: 'hashing',
    name: 'Hashing',
    icon: '#️⃣',
    order: 8,
    description:
      'Hash maps and hash sets for O(1) lookups. Essential for frequency counting and two-sum type problems.',
    timeComplexity: 'Insert/Search/Delete: O(1) average, O(n) worst',
    spaceComplexity: 'O(n)',
    patterns: [
      'Frequency Counter',
      'Two Sum Pattern',
      'Grouping by Key',
      'Sliding Window + HashMap',
      'Prefix Sum + HashMap',
    ],
    mustDoProblems: [
      {
        name: 'Two Sum',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Group Anagrams',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Subarray Sum Equals K',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'LRU Cache',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
    ],
    keyConceptPoints: [
      'HashMap: key-value pairs. HashSet: unique values only',
      'Hash collision handling: chaining (linked list) or open addressing',
      'In Python, use defaultdict for cleaner code',
      'Prefix sum + HashMap is a powerful pattern for subarray problems',
    ],
  },
  {
    slug: 'sorting-searching',
    name: 'Sorting & Searching',
    icon: '🔍',
    order: 9,
    description:
      'Sorting algorithms and binary search variations — fundamental to efficient problem solving.',
    timeComplexity: 'Binary Search: O(log n), Merge Sort: O(n log n)',
    spaceComplexity: 'Merge Sort: O(n), Quick Sort: O(log n)',
    patterns: [
      'Binary Search on Answer',
      'Binary Search on Rotated Array',
      'Quick Select',
      'Counting Sort',
      'Custom Comparators',
    ],
    mustDoProblems: [
      {
        name: 'Binary Search',
        difficulty: 'Easy',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Search in Rotated Sorted Array',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Kth Largest Element (Quick Select)',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'Median of Two Sorted Arrays',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
    ],
    keyConceptPoints: [
      'Binary search works on any monotonic function, not just sorted arrays',
      '"Binary search on answer": when you can\'t search the array directly but can verify if a value works',
      'Merge Sort is stable, Quick Sort is not',
      'For Top K problems: use a min-heap of size K for O(n log k)',
    ],
  },
  {
    slug: 'greedy',
    name: 'Greedy Algorithms',
    icon: '🏃',
    order: 10,
    description:
      'Greedy algorithms make locally optimal choices at each step. Key is proving that local optimal leads to global optimal.',
    timeComplexity: 'Usually O(n log n) due to sorting',
    spaceComplexity: 'O(1) to O(n)',
    patterns: [
      'Activity Selection',
      'Interval Scheduling',
      'Huffman Coding',
      'Fractional Knapsack',
      'Jump Game',
    ],
    mustDoProblems: [
      {
        name: 'Jump Game',
        difficulty: 'Medium',
        companies: ['Amazon', 'Microsoft', 'Google'],
      },
      {
        name: 'Non-overlapping Intervals',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Gas Station',
        difficulty: 'Medium',
        companies: ['Amazon', 'Google', 'Goldman Sachs'],
      },
      {
        name: 'Task Scheduler',
        difficulty: 'Medium',
        companies: ['Meta', 'Amazon', 'Google'],
      },
    ],
    keyConceptPoints: [
      'Greedy works when: (1) Greedy choice property + (2) Optimal substructure',
      'Sort by end time for interval problems',
      "If greedy doesn't work, try DP",
      "Proving greedy correctness: show that swapping any non-greedy choice doesn't improve the result",
    ],
  },
  {
    slug: 'backtracking',
    name: 'Backtracking',
    icon: '🔙',
    order: 11,
    description:
      'Systematic trial and error. Build solutions incrementally and abandon candidates that fail constraints.',
    timeComplexity: 'Usually exponential O(2^n) or O(n!)',
    spaceComplexity: 'O(n) recursion depth',
    patterns: [
      'Permutations',
      'Combinations',
      'Subsets',
      'N-Queens',
      'Sudoku Solver',
      'Word Search',
    ],
    mustDoProblems: [
      {
        name: 'Subsets',
        difficulty: 'Medium',
        companies: ['Google', 'Amazon', 'Meta'],
      },
      {
        name: 'Permutations',
        difficulty: 'Medium',
        companies: ['Google', 'Microsoft', 'Amazon'],
      },
      {
        name: 'Combination Sum',
        difficulty: 'Medium',
        companies: ['Amazon', 'Google', 'Airbnb'],
      },
      {
        name: 'N-Queens',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
    ],
    keyConceptPoints: [
      'Template: choose → explore → un-choose (backtrack)',
      'Use a visited array or set to avoid duplicates',
      'Pruning: skip invalid states early to reduce time',
      'Subsets = combinations without fixed size',
    ],
  },
  {
    slug: 'heap-priority-queue',
    name: 'Heap / Priority Queue',
    icon: '📊',
    order: 12,
    description:
      'Heaps efficiently find min/max elements. Essential for Top-K, merge K sorted lists, and scheduling problems.',
    timeComplexity: 'Insert: O(log n), Extract Min/Max: O(log n), Peek: O(1)',
    spaceComplexity: 'O(n)',
    patterns: [
      'Top K Elements',
      'Merge K Sorted Lists',
      'Two Heaps (Median)',
      'Scheduling',
      'Kth Smallest/Largest',
    ],
    mustDoProblems: [
      {
        name: 'Kth Largest Element in an Array',
        difficulty: 'Medium',
        companies: ['Google', 'Meta', 'Amazon'],
      },
      {
        name: 'Merge K Sorted Lists',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Find Median from Data Stream',
        difficulty: 'Hard',
        companies: ['Google', 'Amazon', 'Microsoft'],
      },
      {
        name: 'Top K Frequent Elements',
        difficulty: 'Medium',
        companies: ['Amazon', 'Google', 'Meta'],
      },
    ],
    keyConceptPoints: [
      'Min-heap: parent ≤ children. Max-heap: parent ≥ children',
      'In Python: heapq (min-heap by default). For max-heap, negate values',
      'Two heaps pattern: max-heap for lower half, min-heap for upper half → O(1) median',
      'Heap is NOT a sorted structure — only the root is guaranteed min/max',
    ],
  },
];

export function getDSATopicBySlug(slug: string): DSATopic | undefined {
  return dsaTopics.find((t) => t.slug === slug);
}

export function getDSASlugs(): string[] {
  return dsaTopics.map((t) => t.slug);
}
