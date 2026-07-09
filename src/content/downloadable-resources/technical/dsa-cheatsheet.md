# Data Structures & Algorithms (DSA) Cheatsheet

## Time Complexity (Big O)

| Complexity     | Name         | Example Algorithm                           |
| :------------- | :----------- | :------------------------------------------ |
| **O(1)**       | Constant     | Accessing array index, Stack push/pop       |
| **O(log n)**   | Logarithmic  | Binary Search                               |
| **O(n)**       | Linear       | Linear Search, Traversing an array          |
| **O(n log n)** | Linearithmic | Merge Sort, Quick Sort (avg), Heap Sort     |
| **O(n^2)**     | Quadratic    | Bubble Sort, Insertion Sort, Selection Sort |
| **O(2^n)**     | Exponential  | Recursive Fibonacci                         |
| **O(n!)**      | Factorial    | Generating all permutations                 |

---

## Data Structures Quick Reference

### 1. Arrays

- **Access:** O(1)
- **Search:** O(n)
- **Insert/Delete:** O(n) (shifting required)
- **Use when:** You need fast access by index.

### 2. Linked Lists

- **Access:** O(n)
- **Search:** O(n)
- **Insert/Delete:** O(1) (if node is known)
- **Use when:** Frequent insertions/deletions, unknown size.

### 3. Stacks (LIFO)

- **Operations:** Push O(1), Pop O(1), Peek O(1)
- **Use cases:** Undo mechanisms, bracket matching, DFS.

### 4. Queues (FIFO)

- **Operations:** Enqueue O(1), Dequeue O(1)
- **Use cases:** Task scheduling, BFS, printers.

### 5. Hash Tables (Maps)

- **Access/Search/Insert/Delete:** O(1) average
- **Use cases:** Caching, frequency counting, finding duplicates.

### 6. Trees (BST)

- **Search/Insert/Delete:** O(log n) balanced, O(n) worst case
- **Use cases:** Hierarchical data, sorted data maintenance.

### 7. Heaps (Priority Queue)

- **Find Max/Min:** O(1)
- **Extract Max/Min:** O(log n)
- **Use cases:** Scheduling, Dijkstra's algo, Top K elements.

---

## Common Patterns & Tricks

### Two Pointers

- **Scenario:** Sorted arrays, finding pairs.
- **Logic:** One pointer at start, one at end. Move closer based on condition.
- **Problems:** Two Sum (Sorted), Palindrome check, Container with most water.

### Sliding Window

- **Scenario:** Subarrays or substrings of specific size or condition.
- **Logic:** Expand window (right++) until invalid, then shrink (left++).
- **Problems:** Max sum subarray of size K, Longest substring without repeating chars.

### Slow & Fast Pointers (Tortoise & Hare)

- **Scenario:** Cycles in LL, finding middle of LL.
- **Logic:** Fast moves 2x speed, Slow moves 1x. If they meet, cycle exists.
- **Problems:** Detect cycle in LinkedList, Middle of Linked List.

### Binary Search

- **Scenario:** Sorted arrays or search space.
- **Logic:** `mid = low + (high - low) / 2`. Discard half.
- **Problems:** Find element in sorted array, First/Last occurrence.

### BFS (Breadth First Search)

- **Data Structure:** Queue
- **Scenario:** Shortest path in unweighted graph, level order traversal.
- **Logic:** Process level by level.

### DFS (Depth First Search)

- **Data Structure:** Stack or Recursion
- **Scenario:** Pathfinding, topological sort, cycle detection.
- **Logic:** Go deep, then backtrack.

---

## Must-Know Code Snippets (Python-like Psuedocode)

**Binary Search**

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

**Reverse Linked List**

```python
def reverse(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev
```

---

## Top 20 Questions to Master

1.  Two Sum
2.  Best Time to Buy and Sell Stock
3.  Contains Duplicate
4.  Product of Array Except Self
5.  Maximum Subarray (Kadane's Algo)
6.  Valid Parentheses
7.  Merge Two Sorted Lists
8.  Reverse Linked List
9.  Invert Binary Tree
10. Valid Palindrome
11. Lowest Common Ancestor
12. Valid Anagram
13. Climbing Stairs
14. Linked List Cycle
15. Binary Search
16. Number of Islands (BFS/DFS)
17. Longest Substring Without Repeating Characters
18. Top K Frequent Elements
19. Group Anagrams
20. Reverse Bits
