# Complete Technical Interview Preparation Guide

> **Goal**: Prepare comprehensively for coding interviews at top tech companies with DSA patterns,
> problem-solving strategies, and mock scenarios.

---

## 📖 Table of Contents

1.  [Understanding the Interview Process](#process)
2.  [Data Structures Essentials](#data-structures)
3.  [Algorithm Patterns](#algorithm-patterns)
4.  [Problem-Solving Framework](#problem-solving)
5.  [Top 50 Must-Solve Problems](#must-solve)
6.  [Complexity Analysis](#complexity)
7.  [Coding Best Practices](#best-practices)
8.  [System Design Basics](#system-design)
9.  [Behavioral Questions for Tech](#behavioral)
10. [Mock Interview Guide](#mock-interview)
11. [Study Plan](#study-plan)

---

## 🎯 1. Understanding the Interview Process

### Typical Interview Pipeline

| Round                 | What's Tested                             | Duration  |
| --------------------- | ----------------------------------------- | --------- |
| **Online Assessment** | DSA problems (2-3)                        | 60-90 min |
| **Technical Round 1** | Coding + CS fundamentals                  | 45-60 min |
| **Technical Round 2** | Problem solving + sometimes system design | 45-60 min |
| **Technical Round 3** | Advanced DSA or System Design             | 45-60 min |
| **HR/Managerial**     | Culture fit, behavioral                   | 30-45 min |

### Company-Specific Patterns

| Company       | Focus Areas                                   |
| ------------- | --------------------------------------------- |
| **Google**    | Arrays, Trees, Graphs, Dynamic Programming    |
| **Amazon**    | Arrays, Strings, Trees, Leadership Principles |
| **Microsoft** | Trees, Graphs, Design Patterns                |
| **Meta**      | Arrays, Strings, Binary Search, Recursion     |
| **Apple**     | Problem-solving depth, clean code             |
| **Startups**  | Practical coding, system design               |

---

## 🗄️ 2. Data Structures Essentials

### Arrays & Strings

**When to use:** Storing sequential data, manipulation problems

**Key operations:** | Operation | Time Complexity | |-----------|-----------------| | Access by
index | O(1) | | Search (unsorted) | O(n) | | Insert at end | O(1) amortized | | Insert at position
| O(n) | | Delete | O(n) |

**Common patterns:**

- Two pointers (opposite ends or same direction)
- Sliding window (fixed or variable size)
- Prefix sums
- In-place manipulation

**JavaScript example:**

```javascript
// Two-pointer: Reverse array in-place
function reverse(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

### Hash Maps / Hash Sets

**When to use:** Fast lookup, counting frequencies, detecting duplicates

**Key operations:** All O(1) average

- get, set, delete, has

**Common patterns:**

- Two-sum type problems
- Frequency counting
- Caching/memoization
- Grouping/bucketing

**Example: Two Sum**

```javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```

### Linked Lists

**When to use:** Frequent insertions/deletions, implementing queues/stacks

**Types:**

- Singly linked (next pointer only)
- Doubly linked (prev and next)
- Circular

**Common patterns:**

- Two pointers (slow/fast for cycle detection)
- Dummy head node
- Reverse linked list

**Example: Detect Cycle**

```javascript
function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

### Stacks & Queues

**Stack (LIFO):**

- Valid parentheses
- Monotonic stack problems
- DFS implementation
- Undo operations

**Queue (FIFO):**

- BFS implementation
- Level order traversal
- Task scheduling

**Example: Valid Parentheses**

```javascript
function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
```

### Trees

**Types:**

- Binary Tree
- Binary Search Tree (BST)
- N-ary Tree
- Trie (Prefix Tree)

**Traversals:** | Type | Order | Use Case | |------|-------|----------| | Inorder | Left, Root,
Right | BST sorted order | | Preorder | Root, Left, Right | Copying tree, prefix expression | |
Postorder | Left, Right, Root | Deleting tree, postfix expression | | Level order | BFS |
Level-by-level access |

**Example: Inorder Traversal**

```javascript
function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return result;
}
```

### Graphs

**Representations:**

- Adjacency List: `{ A: [B, C], B: [A, D] }`
- Adjacency Matrix: `matrix[i][j] = 1 if edge exists`

**Key algorithms:** | Algorithm | Use Case | Complexity | |-----------|----------|------------| |
BFS | Shortest path (unweighted), level-order | O(V + E) | | DFS | Path finding, cycle detection,
topological sort | O(V + E) | | Dijkstra | Shortest path (weighted, positive) | O(E log V) | |
Bellman-Ford | Shortest path (negative weights) | O(VE) | | Topological Sort | Task ordering,
dependency resolution | O(V + E) |

**Example: BFS**

```javascript
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

### Heaps

**When to use:**

- K largest/smallest elements
- Merge K sorted lists
- Priority queue
- Running median

**Operations:** | Operation | Time | |-----------|------| | Insert | O(log n) | | Extract max/min |
O(log n) | | Peek | O(1) | | Build heap | O(n) |

---

## 🧮 3. Algorithm Patterns

### Pattern 1: Two Pointers

**When:** Sorted arrays, finding pairs, partitioning

**Template:**

```javascript
function twoPointers(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    // Check condition
    // Move left++ or right-- based on condition
  }
}
```

**Problems:**

- Two Sum (sorted array)
- Container With Most Water
- 3Sum
- Trapping Rain Water

### Pattern 2: Sliding Window

**When:** Contiguous subarrays, substring problems

**Fixed size template:**

```javascript
function fixedWindow(arr, k) {
  let windowSum = 0;
  // Build initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    // Process window
  }
}
```

**Variable size template:**

```javascript
function variableWindow(s) {
  let left = 0;
  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    // Expand window (add s[right])

    while (/* window invalid */) {
      // Shrink window (remove s[left])
      left++;
    }

    // Process valid window
  }
}
```

**Problems:**

- Maximum Subarray of Size K
- Longest Substring Without Repeating Characters
- Minimum Window Substring
- Fruit Into Baskets

### Pattern 3: Binary Search

**When:** Sorted data, finding boundaries, optimization problems

**Template:**

```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

**Variants:**

- Find first/last occurrence
- Find insertion position
- Search in rotated array
- Binary search on answer

### Pattern 4: BFS/DFS

**When:** Trees, graphs, matrix traversal, shortest path

**BFS Template (using queue):**

```javascript
function bfs(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}
```

**DFS Template (recursive):**

```javascript
function dfs(node) {
  if (!node) return;

  // Pre-order: process node here
  dfs(node.left);
  // In-order: process node here
  dfs(node.right);
  // Post-order: process node here
}
```

### Pattern 5: Backtracking

**When:** Generating permutations, combinations, subsets, constraint satisfaction

**Template:**

```javascript
function backtrack(path, choices) {
  if (/* is solution */) {
    result.push([...path]);
    return;
  }

  for (const choice of choices) {
    // Make choice
    path.push(choice);

    // Recurse
    backtrack(path, /* updated choices */);

    // Undo choice (backtrack)
    path.pop();
  }
}
```

**Problems:**

- Subsets
- Permutations
- Combination Sum
- N-Queens
- Sudoku Solver

### Pattern 6: Dynamic Programming

**When:** Overlapping subproblems, optimal substructure

**Steps:**

1. Define state (what changes)
2. Define recurrence relation
3. Identify base cases
4. Determine traversal order
5. Optimize space if possible

**Template (1D DP):**

```javascript
function dp(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = /* base case */;

  for (let i = 1; i <= n; i++) {
    dp[i] = /* recurrence using dp[j] where j < i */;
  }

  return dp[n];
}
```

**Common DP Problems:** | Pattern | Examples | |---------|----------| | Linear | Climbing Stairs,
House Robber | | Grid | Unique Paths, Minimum Path Sum | | String | Longest Common Subsequence, Edit
Distance | | Knapsack | 0/1 Knapsack, Coin Change | | Interval | Matrix Chain Multiplication |

---

## 🧠 4. Problem-Solving Framework

### The UMPIRE Method

| Step           | Action                             |
| -------------- | ---------------------------------- |
| **U**nderstand | Clarify the problem, ask questions |
| **M**atch      | Identify similar problems/patterns |
| **P**lan       | Choose approach, write pseudocode  |
| **I**mplement  | Write clean code                   |
| **R**eview     | Check for bugs, edge cases         |
| **E**valuate   | Analyze time/space complexity      |

### Questions to Ask

```markdown
1. Input/Output format?
2. Size constraints? (affects complexity)
3. Are there duplicates?
4. Is the input sorted?
5. Can I modify the input?
6. What to return if no solution?
7. Are there negative numbers?
8. Can I use extra space?
```

### Communicating Your Approach

**Before coding:**

```
"Let me walk through my approach first.
I notice this problem has [pattern], so I'm thinking of using [algorithm].
The key insight is [explanation].
This would give us O(n) time and O(1) space."
```

**While coding:**

```
"I'm setting up a two-pointer approach here."
"This while loop handles the main logic."
"I'm using a hashmap to track..."
```

**After coding:**

```
"Let me trace through with an example."
"Edge cases: empty input, single element, all same elements."
"Time complexity is O(n), space is O(1)."
```

---

## 🎯 5. Top 50 Must-Solve Problems

### Arrays & Strings (15)

1. Two Sum
2. Best Time to Buy and Sell Stock
3. Contains Duplicate
4. Product of Array Except Self
5. Maximum Subarray
6. Maximum Product Subarray
7. 3Sum
8. Container With Most Water
9. Trapping Rain Water
10. Valid Anagram
11. Group Anagrams
12. Longest Substring Without Repeating Characters
13. Longest Palindromic Substring
14. Valid Parentheses
15. Merge Intervals

### Linked Lists (5)

16. Reverse Linked List
17. Detect Cycle in Linked List
18. Merge Two Sorted Lists
19. Remove Nth Node From End
20. Reorder List

### Trees (10)

21. Maximum Depth of Binary Tree
22. Same Tree
23. Invert Binary Tree
24. Binary Tree Level Order Traversal
25. Validate Binary Search Tree
26. Lowest Common Ancestor of BST
27. Binary Tree Maximum Path Sum
28. Construct Binary Tree from Preorder and Inorder
29. Serialize and Deserialize Binary Tree
30. Kth Smallest Element in a BST

### Graphs (5)

31. Number of Islands
32. Clone Graph
33. Course Schedule (Topological Sort)
34. Pacific Atlantic Water Flow
35. Graph Valid Tree

### Dynamic Programming (10)

36. Climbing Stairs
37. Coin Change
38. House Robber
39. Longest Increasing Subsequence
40. Unique Paths
41. Jump Game
42. Decode Ways
43. Word Break
44. Longest Common Subsequence
45. Edit Distance

### Other (5)

46. Implement Trie
47. Find Median from Data Stream
48. Top K Frequent Elements
49. Meeting Rooms II
50. LRU Cache

---

## ⏱️ 6. Complexity Analysis

### Time Complexity Hierarchy

| Notation   | Name         | Example                        |
| ---------- | ------------ | ------------------------------ |
| O(1)       | Constant     | Array access, hash lookup      |
| O(log n)   | Logarithmic  | Binary search                  |
| O(n)       | Linear       | Single loop, linear search     |
| O(n log n) | Linearithmic | Efficient sorts (merge, quick) |
| O(n²)      | Quadratic    | Nested loops                   |
| O(2ⁿ)      | Exponential  | Subsets without memoization    |
| O(n!)      | Factorial    | Permutations                   |

### Space Complexity

**Consider:**

- Variables: O(1)
- Arrays: O(n) where n = length
- Recursion: O(depth) for call stack
- HashMaps: O(keys stored)

### Tips for Analysis

1. Count loops: 1 loop = O(n), nested = O(n²)
2. Halving = log n
3. Recursion: T(n) = aT(n/b) + f(n)
4. Always mention both time AND space
5. Best, average, worst case if they differ

---

## 💻 7. Coding Best Practices

### Clean Code Principles

```javascript
// ❌ Bad
function f(a) {
  let r = 0;
  for (let i = 0; i < a.length; i++) r += a[i];
  return r;
}

// ✅ Good
function sumArray(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
```

### Naming Conventions

| Type      | Convention      | Example                     |
| --------- | --------------- | --------------------------- |
| Variables | camelCase       | `maxSum`, `leftPointer`     |
| Functions | camelCase, verb | `findMax`, `validateInput`  |
| Constants | UPPER_SNAKE     | `MAX_SIZE`, `DEFAULT_VALUE` |
| Classes   | PascalCase      | `TreeNode`, `LinkedList`    |

### Interview Coding Tips

1. **Type signatures:** Mention input/output types
2. **Edge cases:** Handle empty, null, single element
3. **Variable names:** Descriptive, not `i`, `j`, `temp`
4. **Comments:** Only for complex logic
5. **Test:** Walk through with example
6. **Modular:** Break into helper functions

---

## 🏗️ 8. System Design Basics

### For Junior Roles

Usually asked about:

- URL shortener
- Chat application (basic)
- Rate limiter
- Cache design

### Key Concepts to Know

| Concept            | What to Know                   |
| ------------------ | ------------------------------ |
| **Load Balancing** | What, why, algorithms          |
| **Caching**        | When, where, eviction policies |
| **Database**       | SQL vs NoSQL, when to use      |
| **Scaling**        | Vertical vs Horizontal         |
| **API Design**     | REST basics                    |

### Simple Framework

1. **Requirements:** Clarify functional and non-functional
2. **Estimation:** Users, storage, bandwidth
3. **High-level design:** Draw main components
4. **Deep dive:** Pick 2 components to detail
5. **Trade-offs:** Discuss alternatives

---

## 🗣️ 9. Behavioral Questions for Tech

### Amazon Leadership Principles Style

**Customer Obsession:** "Tell me about a time you went above and beyond for a user/customer."

**Ownership:** "Describe a time you took initiative on a project."

**Bias for Action:** "Tell me about a time you made a decision without complete information."

**Learn and Be Curious:** "How do you stay updated with technology?"

**Dive Deep:** "Describe a time you had to debug a complex issue."

### Tech-Specific Behavioral Questions

```markdown
1. Tell me about a challenging technical problem you solved.
2. How do you handle disagreements about technical decisions?
3. Describe a time you had to learn a new technology quickly.
4. Tell me about a project you're proud of.
5. How do you handle tight deadlines?
6. Describe a time you improved code quality or processes.
7. How do you mentor junior developers?
8. Tell me about a time you had to refactor legacy code.
```

---

## 🎭 10. Mock Interview Guide

### Self-Practice Format

1. **Choose a problem** (LeetCode medium)
2. **Set timer:** 30 minutes
3. **Talk out loud** as you solve
4. **Write clean code** (no IDE help)
5. **Test** with examples
6. **Analyze** complexity
7. **Review** optimal solution

### Peer Practice Format

**Interviewer role:**

- Present problem clearly
- Give hints only if stuck for 10+ minutes
- Ask follow-up questions
- Evaluate communication, not just code

**Candidate role:**

- Ask clarifying questions
- Explain approach before coding
- Think out loud
- Test your solution

### Evaluation Criteria

| Area                      | Points |
| ------------------------- | ------ |
| Problem understanding     | 10     |
| Approach/algorithm choice | 20     |
| Code correctness          | 30     |
| Code quality              | 15     |
| Complexity analysis       | 10     |
| Communication             | 15     |

---

## 📅 11. Study Plan

### 8-Week Intensive Plan

| Week | Focus                        | Problems/Day |
| ---- | ---------------------------- | ------------ |
| 1    | Arrays, Strings, HashMap     | 3-4          |
| 2    | Two Pointers, Sliding Window | 3-4          |
| 3    | Linked Lists, Stacks, Queues | 3-4          |
| 4    | Trees (DFS, BFS)             | 3-4          |
| 5    | Graphs, Topological Sort     | 3-4          |
| 6    | Binary Search, Heaps         | 3-4          |
| 7    | Dynamic Programming          | 3-4          |
| 8    | Mock Interviews, Review      | 2 mocks      |

### Daily Practice Routine

```
Morning (1.5 hours):
- Solve 2 new problems
- Focus on understanding, not speed

Evening (1 hour):
- Review today's problems
- Read solutions for problems you struggled with
- Update your notes

Weekly:
- 1 mock interview with a peer
- Review your weak topics
- Revise previous problems
```

### Resources

**Practice:**

- LeetCode (filter by company)
- NeetCode (curated 150)
- AlgoExpert

**Learning:**

- NeetCode YouTube (explanations)
- Abdul Bari (algorithms)
- Tech Interview Handbook

---

## 📋 Interview Day Checklist

**Before:**

- [ ] Review your notes
- [ ] Practice top 5 problems for that company
- [ ] Prepare questions for interviewer
- [ ] Test setup (if virtual: camera, mic, IDE)
- [ ] Sleep well the night before

**During:**

- [ ] Listen carefully
- [ ] Ask clarifying questions
- [ ] Talk through your approach
- [ ] Write clean code
- [ ] Test with examples
- [ ] Discuss complexity
- [ ] Ask thoughtful questions at the end

**After:**

- [ ] Send thank-you email (optional)
- [ ] Reflect on what went well/poorly
- [ ] Note problems for future practice

---

**Remember: Consistency beats intensity. Practice a little every day, and you'll be ready!** 🚀
