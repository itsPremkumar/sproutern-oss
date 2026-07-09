export interface IQTopic {
  slug: string;
  name: string;
  icon: string;
  category: 'technical' | 'behavioral' | 'aptitude';
  description: string;
  questions: { q: string; a: string; difficulty: 'Easy' | 'Medium' | 'Hard' }[];
}

export const iqTopics: IQTopic[] = [
  {
    slug: 'hr-interview',
    name: 'HR Interview Questions',
    icon: '👥',
    category: 'behavioral',
    description:
      'Common HR and behavioral interview questions asked at every MNC. Master these to ace the final round.',
    questions: [
      {
        q: 'Tell me about yourself.',
        a: "Structure your answer: Present role/education → Key achievements → Why this company. Keep it under 2 minutes. Example: \"I'm a final-year CS student at VIT with a 8.5 CGPA. I've built 3 full-stack projects including a real-time chat app, and interned at TCS where I optimized API response times by 40%. I'm drawn to your company because of your focus on cloud-native solutions.\"",
        difficulty: 'Easy',
      },
      {
        q: 'What are your strengths and weaknesses?',
        a: 'Strengths: Pick 2-3 relevant to the role with examples. Weakness: Choose a genuine one you\'re actively improving. Example: "My strength is problem-solving — I won 2 hackathons by breaking complex problems into smaller ones. My weakness was public speaking, but I\'ve been actively improving by presenting in college seminars."',
        difficulty: 'Easy',
      },
      {
        q: 'Why should we hire you?',
        a: 'Connect your skills to their needs: "I bring three things: strong DSA skills (solved 500+ problems), hands-on project experience with your tech stack (React, Node.js), and a proven ability to learn fast — I picked up AWS in 2 weeks for my internship project."',
        difficulty: 'Medium',
      },
      {
        q: 'Where do you see yourself in 5 years?',
        a: 'Show ambition aligned with the company: "I see myself as a senior engineer leading a small team, having deep expertise in distributed systems. I want to grow from writing features to designing architectures."',
        difficulty: 'Easy',
      },
      {
        q: 'Why do you want to leave your current company?',
        a: "Stay positive — focus on growth, not complaints: \"I've learned a lot at my current role, but I'm looking for opportunities to work on larger-scale systems and take on more ownership. Your company's engineering challenges excite me.\"",
        difficulty: 'Medium',
      },
      {
        q: 'Describe a conflict with a teammate and how you resolved it.',
        a: 'Use STAR method: Situation → Task → Action → Result. Show empathy and communication skills. "My teammate and I disagreed on the database choice. I proposed we each prototype our solution for 2 days and compare results. His approach actually performed better for our use case, and we went with it."',
        difficulty: 'Medium',
      },
      {
        q: 'What is your expected salary?',
        a: 'Research market rates first. "Based on my research and the industry standard for this role and experience level, I\'m looking at ₹X-Y LPA. But I\'m open to discussing this based on the complete compensation package."',
        difficulty: 'Hard',
      },
      {
        q: 'Do you have any questions for us?',
        a: 'Always ask 2-3 thoughtful questions: "What does the onboarding process look like?", "What\'s the team structure I\'d be joining?", "What are the biggest engineering challenges your team is solving right now?"',
        difficulty: 'Easy',
      },
    ],
  },
  {
    slug: 'sql',
    name: 'SQL Interview Questions',
    icon: '🗄️',
    category: 'technical',
    description:
      'Essential SQL questions for database rounds. Covers joins, subqueries, window functions, optimization, and real-world scenarios.',
    questions: [
      {
        q: 'What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN?',
        a: "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table + matching from right (NULLs for non-matches). RIGHT JOIN is the opposite. FULL OUTER JOIN returns all rows from both tables, with NULLs where there's no match.",
        difficulty: 'Easy',
      },
      {
        q: 'What are window functions? Give an example.',
        a: 'Window functions perform calculations across a set of rows related to the current row, without collapsing them. Example: `SELECT name, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank FROM employees;` — This ranks employees by salary within each department.',
        difficulty: 'Medium',
      },
      {
        q: 'Explain the difference between WHERE and HAVING.',
        a: "WHERE filters rows before grouping (works on individual rows). HAVING filters groups after GROUP BY (works on aggregated results). Example: `SELECT dept, AVG(salary) FROM emp WHERE status='active' GROUP BY dept HAVING AVG(salary) > 50000;`",
        difficulty: 'Easy',
      },
      {
        q: 'What is a correlated subquery?',
        a: 'A correlated subquery references columns from the outer query and executes once for each row of the outer query. Example: `SELECT e.name FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);` — finds employees earning above their department average.',
        difficulty: 'Hard',
      },
      {
        q: 'How do you find the second highest salary?',
        a: 'Multiple approaches: 1) `SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);` 2) Using DENSE_RANK: `SELECT salary FROM (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) as rnk FROM emp) WHERE rnk = 2;` 3) Using LIMIT/OFFSET: `SELECT DISTINCT salary FROM emp ORDER BY salary DESC LIMIT 1 OFFSET 1;`',
        difficulty: 'Medium',
      },
      {
        q: 'What is normalization? Explain 1NF, 2NF, 3NF.',
        a: "1NF: Atomic values, no repeating groups. 2NF: 1NF + no partial dependencies (every non-key column depends on the entire primary key). 3NF: 2NF + no transitive dependencies (non-key columns don't depend on other non-key columns). Example: A table with student_id, course_id, student_name, course_name violates 2NF because student_name depends only on student_id.",
        difficulty: 'Medium',
      },
      {
        q: 'What is an index? When should you NOT use one?',
        a: 'An index is a data structure (usually B-tree) that speeds up data retrieval. Avoid indexes on: (1) Small tables, (2) Columns with high write frequency, (3) Columns with low cardinality (e.g., boolean), (4) Columns rarely used in WHERE/JOIN/ORDER BY.',
        difficulty: 'Medium',
      },
      {
        q: 'Write a query to find duplicate records.',
        a: '`SELECT email, COUNT(*) as cnt FROM users GROUP BY email HAVING COUNT(*) > 1;` To find all columns: `SELECT * FROM users WHERE email IN (SELECT email FROM users GROUP BY email HAVING COUNT(*) > 1);`',
        difficulty: 'Easy',
      },
    ],
  },
  {
    slug: 'javascript',
    name: 'JavaScript Interview Questions',
    icon: '⚡',
    category: 'technical',
    description:
      'Core JavaScript concepts for frontend and full-stack interviews. Covers closures, promises, prototypes, event loop, and ES6+ features.',
    questions: [
      {
        q: 'What is the difference between var, let, and const?',
        a: '`var` is function-scoped, hoisted, can be redeclared. `let` is block-scoped, hoisted but not initialized (TDZ), can be reassigned. `const` is block-scoped, must be initialized at declaration, cannot be reassigned (but objects/arrays can be mutated).',
        difficulty: 'Easy',
      },
      {
        q: 'Explain closures with an example.',
        a: 'A closure is a function that remembers variables from its outer scope even after the outer function has returned. Example: `function counter() { let count = 0; return () => ++count; } const inc = counter(); inc(); // 1, inc(); // 2` — The inner function "closes over" `count`.',
        difficulty: 'Medium',
      },
      {
        q: 'What is the event loop?',
        a: "JavaScript is single-threaded. The event loop handles async operations: (1) Call stack executes synchronous code, (2) Web APIs handle async tasks (setTimeout, fetch), (3) Callback queue holds completed callbacks, (4) Microtask queue (Promises) has higher priority, (5) Event loop moves callbacks to call stack when it's empty.",
        difficulty: 'Hard',
      },
      {
        q: 'What is the difference between == and ===?',
        a: '`==` (loose equality) performs type coercion before comparison: `"5" == 5` is true. `===` (strict equality) checks both value and type: `"5" === 5` is false. Best practice: always use `===` to avoid unexpected bugs.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain Promises and async/await.',
        a: 'A Promise represents a future value with 3 states: pending, fulfilled, rejected. `async/await` is syntactic sugar over Promises. `async function getData() { try { const res = await fetch(url); const data = await res.json(); return data; } catch(err) { console.error(err); } }` — Makes async code look synchronous and easier to read.',
        difficulty: 'Medium',
      },
      {
        q: 'What is prototypal inheritance?',
        a: 'Every JS object has a `__proto__` linking to its prototype. When accessing a property, JS looks up the prototype chain. `class Dog extends Animal {}` — Dog.prototype.__proto__ === Animal.prototype. This is how methods are shared without copying.',
        difficulty: 'Hard',
      },
      {
        q: 'What is debouncing and throttling?',
        a: 'Debouncing: delays execution until user stops triggering (e.g., search input — wait 300ms after last keystroke). Throttling: limits execution to once per interval (e.g., scroll handler — max once per 100ms). Debounce for input, throttle for scroll/resize.',
        difficulty: 'Medium',
      },
      {
        q: 'What are higher-order functions?',
        a: 'Functions that take other functions as arguments OR return functions. Examples: `map`, `filter`, `reduce`, `forEach`. Custom: `const multiply = (x) => (y) => x * y; const double = multiply(2); double(5); // 10`',
        difficulty: 'Easy',
      },
    ],
  },
  {
    slug: 'python',
    name: 'Python Interview Questions',
    icon: '🐍',
    category: 'technical',
    description:
      'Python interview questions covering OOP, data structures, decorators, generators, and Pythonic best practices.',
    questions: [
      {
        q: 'What is the difference between list, tuple, set, and dictionary?',
        a: 'List: ordered, mutable, allows duplicates `[1,2,3]`. Tuple: ordered, immutable `(1,2,3)`. Set: unordered, mutable, no duplicates `{1,2,3}`. Dictionary: key-value pairs, ordered (3.7+) `{"a":1}`. Use tuples for fixed data, sets for uniqueness, dicts for lookups.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain decorators in Python.',
        a: 'Decorators modify function behavior without changing its code. They\'re functions that take a function and return a modified function. `def timer(func): def wrapper(*args): start = time.time(); result = func(*args); print(f"Took {time.time()-start}s"); return result; return wrapper`. Use `@timer` above any function to time it.',
        difficulty: 'Medium',
      },
      {
        q: 'What are generators? How are they different from lists?',
        a: 'Generators produce values lazily using `yield`, consuming O(1) memory vs O(n) for lists. `def fib(): a, b = 0, 1; while True: yield a; a, b = b, a+b`. Use `next(gen)` or `for x in gen`. Perfect for large datasets or infinite sequences.',
        difficulty: 'Medium',
      },
      {
        q: 'What is the GIL (Global Interpreter Lock)?',
        a: "The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. This means CPU-bound tasks don't benefit from multithreading. Solutions: use `multiprocessing` for CPU-bound tasks, `asyncio` or threading for I/O-bound tasks.",
        difficulty: 'Hard',
      },
      {
        q: 'Explain list comprehension vs map/filter.',
        a: 'List comprehension: `[x**2 for x in range(10) if x%2==0]` — More Pythonic, readable. map/filter: `list(map(lambda x: x**2, filter(lambda x: x%2==0, range(10))))` — Functional style. List comprehensions are generally preferred in Python for readability.',
        difficulty: 'Easy',
      },
      {
        q: 'What is the difference between deepcopy and shallow copy?',
        a: 'Shallow copy (`copy.copy()`) creates a new object but references the same nested objects. Deep copy (`copy.deepcopy()`) creates completely independent copies of all nested objects. `a = [[1,2]]; b = copy.copy(a); a[0].append(3)` — b is also affected. With deepcopy, b remains unchanged.',
        difficulty: 'Medium',
      },
      {
        q: 'What are *args and **kwargs?',
        a: '`*args` collects extra positional arguments as a tuple. `**kwargs` collects extra keyword arguments as a dict. `def func(*args, **kwargs): print(args, kwargs)`. `func(1, 2, name="test")` → `(1, 2) {"name": "test"}`. Used for flexible function signatures.',
        difficulty: 'Easy',
      },
      {
        q: "Explain Python's MRO (Method Resolution Order).",
        a: 'MRO determines which method to call in multiple inheritance. Python uses C3 linearization. Check with `ClassName.__mro__`. For `class D(B, C)` where B and C both inherit from A: D → B → C → A. This avoids the diamond problem.',
        difficulty: 'Hard',
      },
    ],
  },
  {
    slug: 'react',
    name: 'React Interview Questions',
    icon: '⚛️',
    category: 'technical',
    description:
      'React.js interview questions covering hooks, state management, performance, virtual DOM, and modern React patterns.',
    questions: [
      {
        q: 'What is the Virtual DOM? How does it work?',
        a: 'The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes: (1) React creates a new Virtual DOM tree, (2) Diffs it with the previous one (reconciliation), (3) Calculates minimal changes needed, (4) Batch-updates the real DOM. This makes updates efficient — O(n) instead of re-rendering everything.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain useState and useEffect hooks.',
        a: '`useState` manages component state: `const [count, setCount] = useState(0)`. `useEffect` handles side effects (fetching data, subscriptions): `useEffect(() => { fetchData(); return () => cleanup(); }, [dependency])`. The dependency array controls when the effect re-runs. Empty array = mount only.',
        difficulty: 'Easy',
      },
      {
        q: 'What is the difference between useMemo and useCallback?',
        a: '`useMemo` memoizes a computed value: `const total = useMemo(() => items.reduce(...), [items])`. `useCallback` memoizes a function reference: `const handleClick = useCallback(() => {...}, [deps])`. Use useMemo for expensive calculations, useCallback to prevent unnecessary child re-renders.',
        difficulty: 'Medium',
      },
      {
        q: 'Explain React context vs Redux.',
        a: 'Context: built-in, for low-frequency updates (theme, auth, locale). Re-renders all consumers on change. Redux: external library, for complex state with many updates. Has middleware, devtools, predictable state updates. Rule of thumb: use Context for simple global state, Redux for complex app-wide state with actions.',
        difficulty: 'Medium',
      },
      {
        q: 'What are React Server Components?',
        a: 'RSCs run on the server, sending only HTML to the client. Benefits: zero JS bundle size, direct database access, better performance. They can\'t use hooks, event handlers, or browser APIs. In Next.js, all components are server components by default — add "use client" for interactivity.',
        difficulty: 'Hard',
      },
      {
        q: 'How do you optimize React performance?',
        a: 'Key techniques: (1) React.memo for preventing unnecessary re-renders, (2) useMemo/useCallback for expensive computations, (3) Code splitting with lazy/Suspense, (4) Virtualization for long lists (react-window), (5) Key prop optimization, (6) Avoiding inline object/function creation in JSX.',
        difficulty: 'Medium',
      },
      {
        q: 'What is the useRef hook used for?',
        a: '`useRef` creates a mutable reference that persists across renders without causing re-renders. Two uses: (1) DOM access: `const inputRef = useRef(); inputRef.current.focus()`, (2) Storing mutable values: `const prevValue = useRef(value)` — like instance variables in class components.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain error boundaries in React.',
        a: "Error boundaries catch JavaScript errors in child component trees, log them, and display a fallback UI instead of crashing. Implemented as class components with `static getDerivedStateFromError()` and `componentDidCatch()`. They don't catch errors in event handlers, async code, or SSR.",
        difficulty: 'Medium',
      },
    ],
  },
  {
    slug: 'java',
    name: 'Java Interview Questions',
    icon: '☕',
    category: 'technical',
    description:
      'Core Java interview questions on OOP, collections, multithreading, JVM internals, and design patterns.',
    questions: [
      {
        q: 'What is the difference between abstract class and interface?',
        a: 'Abstract class: can have constructors, instance variables, concrete methods, single inheritance. Interface: no constructors (until Java 8 default methods), multiple inheritance, all methods implicitly public. Use abstract class for "is-a" with shared code, interface for "can-do" capabilities.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain HashMap internal working.',
        a: 'HashMap uses an array of buckets. `put(key, value)`: (1) Compute hash of key, (2) Find bucket index = hash & (n-1), (3) If collision, use linked list (or red-black tree if ≥8 nodes in Java 8+). `get(key)`: same hash → same bucket → traverse list comparing keys with equals(). Load factor 0.75 triggers rehashing.',
        difficulty: 'Hard',
      },
      {
        q: 'What is the difference between String, StringBuilder, and StringBuffer?',
        a: 'String: immutable (creates new object on modification). StringBuilder: mutable, not thread-safe, faster. StringBuffer: mutable, thread-safe (synchronized), slower. Use StringBuilder in single-threaded code for string manipulation, StringBuffer in multi-threaded scenarios.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain Java memory model (Stack vs Heap).',
        a: 'Stack: stores method frames, local variables, references. Thread-specific, LIFO. Heap: stores objects and instance variables. Shared across threads. Stack is faster but smaller. `int x = 5` → stack. `new Object()` → heap (reference on stack). Garbage collector manages heap memory.',
        difficulty: 'Medium',
      },
      {
        q: 'What are Java streams? Give an example.',
        a: "Streams provide functional-style operations on collections. They're lazy and can be parallelized. Example: `employees.stream().filter(e -> e.getSalary() > 50000).map(Employee::getName).sorted().collect(Collectors.toList())`. Key operations: filter, map, reduce, collect, flatMap.",
        difficulty: 'Medium',
      },
      {
        q: 'Explain the SOLID principles.',
        a: 'S: Single Responsibility — one class, one reason to change. O: Open/Closed — open for extension, closed for modification. L: Liskov Substitution — subclass should be substitutable for parent. I: Interface Segregation — many specific interfaces > one general. D: Dependency Inversion — depend on abstractions, not concretions.',
        difficulty: 'Medium',
      },
      {
        q: 'What is the difference between checked and unchecked exceptions?',
        a: 'Checked exceptions (IOException, SQLException): must be caught or declared with throws. Detected at compile time. Unchecked exceptions (NullPointerException, ArrayIndexOutOfBoundsException): extend RuntimeException, no requirement to handle. Errors (OutOfMemoryError) should not be caught.',
        difficulty: 'Easy',
      },
      {
        q: 'What is a deadlock? How do you prevent it?',
        a: "Deadlock: two+ threads waiting for each other's locks indefinitely. Prevention: (1) Lock ordering — always acquire locks in the same order, (2) Lock timeout — tryLock with timeout, (3) Avoid nested locks, (4) Use concurrent utilities (ConcurrentHashMap, atomic variables).",
        difficulty: 'Hard',
      },
    ],
  },
  {
    slug: 'dsa-interview',
    name: 'DSA Interview Questions',
    icon: '🧮',
    category: 'technical',
    description:
      'Data Structures & Algorithms questions commonly asked in coding interviews at FAANG and product companies.',
    questions: [
      {
        q: 'What is the time complexity of common operations in Arrays vs Linked Lists?',
        a: 'Array: Access O(1), Search O(n), Insert at end O(1) amortized, Insert at position O(n), Delete O(n). Linked List: Access O(n), Search O(n), Insert at head O(1), Insert at position O(n), Delete O(1) if node known. Arrays have better cache locality.',
        difficulty: 'Easy',
      },
      {
        q: 'Explain BFS vs DFS. When to use each?',
        a: 'BFS (Breadth-First): uses queue, explores level by level. Best for shortest path in unweighted graphs. DFS (Depth-First): uses stack/recursion, explores as deep as possible. Best for cycle detection, topological sort, connected components. BFS uses O(V) space, DFS uses O(height) space.',
        difficulty: 'Medium',
      },
      {
        q: 'What is Dynamic Programming? How do you identify DP problems?',
        a: 'DP solves problems by breaking them into overlapping subproblems, storing results to avoid recomputation. Identify DP: (1) Optimal substructure — optimal solution uses optimal sub-solutions, (2) Overlapping subproblems — same subproblems solved multiple times. Approach: define state → recurrence relation → base cases → tabulation/memoization.',
        difficulty: 'Hard',
      },
      {
        q: 'How does a hash table handle collisions?',
        a: 'Two main methods: (1) Chaining — each bucket stores a linked list of entries. Simple but uses extra memory. (2) Open Addressing — find next empty slot using linear probing, quadratic probing, or double hashing. Better cache performance but degrades at high load factors. Good hash table: O(1) average for insert/search/delete.',
        difficulty: 'Medium',
      },
      {
        q: 'Explain the difference between a stack and a queue.',
        a: 'Stack: LIFO (Last In, First Out). push/pop from top. Use cases: function calls, undo, expression evaluation, DFS. Queue: FIFO (First In, First Out). enqueue at back, dequeue from front. Use cases: BFS, task scheduling, buffering. Both have O(1) push/pop operations.',
        difficulty: 'Easy',
      },
      {
        q: 'What is a balanced BST? Why does it matter?',
        a: "A balanced BST (AVL, Red-Black tree) ensures height is O(log n), guaranteeing O(log n) search/insert/delete. Unbalanced BST can degrade to O(n) — essentially a linked list. Java's TreeMap uses Red-Black tree. AVL is more strictly balanced (heights differ by ≤1) but has costlier rotations.",
        difficulty: 'Medium',
      },
      {
        q: 'How do you detect a cycle in a linked list?',
        a: "Floyd's Tortoise and Hare algorithm: use two pointers — slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle. To find cycle start: reset one pointer to head, move both at 1 step — they meet at the cycle start. Time: O(n), Space: O(1).",
        difficulty: 'Medium',
      },
      {
        q: 'What is the difference between Merge Sort and Quick Sort?',
        a: 'Merge Sort: divide array, sort halves, merge. Always O(n log n). Stable. Extra O(n) space. Quick Sort: pick pivot, partition, sort partitions. Average O(n log n), worst O(n²). In-place (O(log n) stack). Not stable. Quick Sort is faster in practice due to cache locality.',
        difficulty: 'Medium',
      },
    ],
  },
  {
    slug: 'system-design',
    name: 'System Design Questions',
    icon: '🏗️',
    category: 'technical',
    description:
      'System design interview questions for senior roles. Covers scalability, databases, caching, load balancing, and distributed systems.',
    questions: [
      {
        q: 'How would you design a URL shortener (like bit.ly)?',
        a: 'Components: (1) API: POST /shorten, GET /:shortId. (2) ID generation: Base62 encoding of auto-increment ID or random 7-char string. (3) Storage: NoSQL (DynamoDB) for key-value lookups. (4) Cache: Redis for popular URLs. (5) Analytics: async event logging. Scale: 100M URLs → ~500GB. Read-heavy → cache aggressively.',
        difficulty: 'Medium',
      },
      {
        q: 'Explain CAP theorem.',
        a: 'In a distributed system, you can only guarantee 2 of 3: Consistency (all nodes see same data), Availability (every request gets a response), Partition tolerance (system works despite network failures). Since partitions are inevitable, choose CP (banking) or AP (social media). Examples: MongoDB = CP, Cassandra = AP.',
        difficulty: 'Hard',
      },
      {
        q: 'What is database sharding?',
        a: 'Sharding splits data across multiple databases. Strategies: (1) Range-based: shard by date/ID range, (2) Hash-based: hash(key) % num_shards, (3) Directory-based: lookup table. Challenges: cross-shard queries, rebalancing, joins. Use when vertical scaling hits limits (typically 1TB+).',
        difficulty: 'Hard',
      },
      {
        q: 'How does a load balancer work?',
        a: 'Load balancers distribute traffic across servers. Algorithms: Round Robin, Least Connections, IP Hash, Weighted. Types: L4 (TCP/UDP — faster) vs L7 (HTTP — smarter routing). Tools: Nginx, HAProxy, AWS ALB. Health checks remove unhealthy servers. Session stickiness for stateful apps.',
        difficulty: 'Medium',
      },
      {
        q: 'Design a notification system.',
        a: 'Components: (1) Notification Service accepts requests via API/events, (2) Priority Queue for ordering, (3) Rate Limiter to prevent spam, (4) Channel adapters (email/SMS/push), (5) Template engine for messages, (6) Analytics for delivery tracking. Scale: async processing with message queues (Kafka/SQS). Store preferences in NoSQL.',
        difficulty: 'Hard',
      },
    ],
  },
  {
    slug: 'oops',
    name: 'OOPs Interview Questions',
    icon: '🔷',
    category: 'technical',
    description:
      'Object-Oriented Programming concepts: encapsulation, inheritance, polymorphism, abstraction, and design patterns.',
    questions: [
      {
        q: 'Explain the 4 pillars of OOP.',
        a: 'Encapsulation: bundling data + methods, hiding internal state (private fields, public getters). Inheritance: class inherits properties/methods from parent (code reuse). Polymorphism: same interface, different implementations (method overloading = compile-time, overriding = runtime). Abstraction: hiding complexity, showing only essentials (abstract classes, interfaces).',
        difficulty: 'Easy',
      },
      {
        q: 'What is the difference between composition and inheritance?',
        a: 'Inheritance: "is-a" relationship (Dog is-a Animal). Tight coupling, fragile base class problem. Composition: "has-a" relationship (Car has-a Engine). Loose coupling, more flexible. Prefer composition over inheritance — it\'s easier to change behavior at runtime and avoids deep hierarchies.',
        difficulty: 'Medium',
      },
      {
        q: 'What are design patterns? Name 3 commonly used ones.',
        a: 'Design patterns are reusable solutions to common problems. (1) Singleton: one instance globally (DB connection). (2) Factory: create objects without specifying exact class. (3) Observer: notify multiple objects of state changes (event systems). Others: Strategy, Decorator, Adapter, Builder.',
        difficulty: 'Medium',
      },
      {
        q: 'What is method overloading vs method overriding?',
        a: "Overloading (compile-time polymorphism): same method name, different parameters in the SAME class. `add(int a, int b)` vs `add(double a, double b)`. Overriding (runtime polymorphism): same method signature in PARENT and CHILD class. Child replaces parent's implementation. Requires inheritance.",
        difficulty: 'Easy',
      },
      {
        q: 'Explain the Singleton pattern and its thread-safe implementation.',
        a: 'Singleton ensures only one instance exists. Thread-safe approaches: (1) Eager initialization: create at class load. (2) Double-checked locking: `if(instance==null) synchronized(class) { if(instance==null) instance = new Singleton(); }`. (3) Bill Pugh: static inner class holder. (4) Enum Singleton (Java) — simplest and safest.',
        difficulty: 'Hard',
      },
    ],
  },
  {
    slug: 'dbms',
    name: 'DBMS Interview Questions',
    icon: '💾',
    category: 'technical',
    description:
      'Database Management System concepts: ACID, transactions, normalization, indexing, and NoSQL vs SQL.',
    questions: [
      {
        q: 'What are ACID properties?',
        a: "Atomicity: transaction is all-or-nothing. Consistency: database moves from one valid state to another. Isolation: concurrent transactions don't interfere. Durability: committed data survives system failure. Example: bank transfer — debit and credit must both succeed or both fail (Atomicity).",
        difficulty: 'Easy',
      },
      {
        q: 'What is the difference between SQL and NoSQL databases?',
        a: 'SQL (MySQL, PostgreSQL): structured schema, tables, ACID, joins, vertical scaling. Best for: complex queries, transactions. NoSQL (MongoDB, Redis, Cassandra): flexible schema, documents/key-value/graph, eventual consistency, horizontal scaling. Best for: high throughput, flexible data, massive scale.',
        difficulty: 'Medium',
      },
      {
        q: 'Explain database transactions and isolation levels.',
        a: 'Isolation levels (weakest to strongest): READ UNCOMMITTED (dirty reads possible), READ COMMITTED (default in most DBs), REPEATABLE READ (prevents non-repeatable reads), SERIALIZABLE (full isolation, slowest). Higher isolation = fewer anomalies but lower concurrency.',
        difficulty: 'Hard',
      },
      {
        q: 'What is a stored procedure vs a function?',
        a: 'Stored procedure: precompiled SQL, can modify data, return multiple values, use transactions. Called with CALL/EXEC. Function: returns a single value, can be used in SELECT statements, typically no side effects. Functions are used in queries, procedures for business logic.',
        difficulty: 'Medium',
      },
      {
        q: 'What is denormalization? When should you use it?',
        a: 'Denormalization intentionally adds redundancy to reduce joins and improve read performance. Use when: (1) Read-heavy workloads, (2) Complex joins causing slow queries, (3) Reporting/analytics tables. Trade-off: faster reads but slower writes, data inconsistency risk. Common in data warehouses.',
        difficulty: 'Medium',
      },
    ],
  },
  {
    slug: 'operating-systems',
    name: 'OS Interview Questions',
    icon: '🖥️',
    category: 'technical',
    description:
      'Operating System concepts: processes, threads, memory management, scheduling, and synchronization — essential for systems interviews.',
    questions: [
      {
        q: 'What is the difference between a process and a thread?',
        a: 'Process: independent program with own memory space, heavier to create (fork). Thread: lightweight unit within a process, shares memory space. Processes communicate via IPC (pipes, sockets). Threads share heap but have separate stacks. Multi-threading is faster but riskier (race conditions).',
        difficulty: 'Easy',
      },
      {
        q: 'Explain virtual memory and paging.',
        a: "Virtual memory lets programs use more memory than physically available. Pages (fixed-size blocks, typically 4KB) are mapped from virtual to physical addresses via page table. When a page isn't in RAM → page fault → OS loads it from disk (swap). Benefits: isolation, larger address space, memory sharing.",
        difficulty: 'Medium',
      },
      {
        q: 'What are the CPU scheduling algorithms?',
        a: 'FCFS: first come, first served (convoy effect). SJF: shortest job first (optimal avg wait). Round Robin: time quantum rotation (good for interactive). Priority: highest priority first (starvation possible, solved with aging). MLFQ: multiple queues with feedback. Most modern OS use MLFQ/CFS variants.',
        difficulty: 'Medium',
      },
      {
        q: 'Explain mutex vs semaphore.',
        a: 'Mutex: binary lock, only one thread can hold it. Owner must release it. Used for mutual exclusion. Semaphore: counting mechanism allowing N threads. sem_wait() decrements, sem_post() increments. Any thread can signal. Use mutex for exclusive access, semaphore for resource pools (e.g., connection pool of 10).',
        difficulty: 'Hard',
      },
      {
        q: 'What is thrashing?',
        a: 'Thrashing occurs when the OS spends more time swapping pages than executing processes. Cause: too many processes competing for limited RAM → constant page faults. Solution: (1) Increase RAM, (2) Reduce degree of multiprogramming, (3) Use working set model, (4) Better page replacement algorithms (LRU).',
        difficulty: 'Medium',
      },
    ],
  },
  {
    slug: 'computer-networks',
    name: 'Networking Interview Questions',
    icon: '🌐',
    category: 'technical',
    description:
      'Computer networking essentials: TCP/IP, HTTP, DNS, security protocols, and network architecture — asked in both IT services and product companies.',
    questions: [
      {
        q: 'Explain the OSI model layers.',
        a: '7 layers (bottom to top): Physical (bits, cables), Data Link (frames, MAC, switches), Network (packets, IP, routers), Transport (segments, TCP/UDP), Session (connections), Presentation (encryption, compression), Application (HTTP, FTP, DNS). Mnemonic: "Please Do Not Throw Sausage Pizza Away".',
        difficulty: 'Easy',
      },
      {
        q: 'What is the difference between TCP and UDP?',
        a: 'TCP: connection-oriented, reliable (retransmission), ordered delivery, flow/congestion control. Slower. Used for: HTTP, email, file transfer. UDP: connectionless, unreliable, no ordering, no flow control. Faster. Used for: video streaming, gaming, DNS, VoIP. Trade-off: reliability vs speed.',
        difficulty: 'Easy',
      },
      {
        q: 'What happens when you type a URL in the browser?',
        a: '(1) DNS resolution: browser → local cache → OS → DNS resolver → root → TLD → authoritative. (2) TCP handshake (SYN, SYN-ACK, ACK). (3) TLS handshake if HTTPS. (4) HTTP request sent. (5) Server processes request. (6) Response with HTML. (7) Browser parses HTML, loads CSS/JS, renders page.',
        difficulty: 'Medium',
      },
      {
        q: 'What is HTTPS and how does TLS work?',
        a: 'HTTPS = HTTP + TLS. TLS handshake: (1) Client Hello (supported cipher suites), (2) Server Hello + certificate, (3) Client verifies certificate with CA, (4) Key exchange (asymmetric encryption for session key), (5) Both sides derive symmetric session key, (6) All subsequent data encrypted symmetrically. SSL is deprecated; TLS 1.3 is current.',
        difficulty: 'Hard',
      },
      {
        q: 'What is DNS and how does it work?',
        a: 'DNS translates domain names to IP addresses. Resolution path: Browser cache → OS cache → Recursive resolver (ISP) → Root server (.com) → TLD server → Authoritative server (returns IP). Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (nameserver). TTL controls caching duration.',
        difficulty: 'Medium',
      },
    ],
  },
  {
    slug: 'aptitude',
    name: 'Aptitude & Reasoning Questions',
    icon: '🧠',
    category: 'aptitude',
    description:
      'Quantitative aptitude and logical reasoning questions for placement tests (AMCAT, CoCubes, eLitmus) and company assessments.',
    questions: [
      {
        q: 'A train 200m long crosses a platform 300m long in 25 seconds. Find its speed.',
        a: 'Total distance = train length + platform length = 200 + 300 = 500m. Time = 25 seconds. Speed = 500/25 = 20 m/s = 20 × 18/5 = 72 km/hr. Key formula: Speed = (Length of train + Length of object) / Time.',
        difficulty: 'Easy',
      },
      {
        q: 'If A can do a job in 12 days and B in 15 days, how long will they take working together?',
        a: "A's rate = 1/12, B's rate = 1/15. Combined rate = 1/12 + 1/15 = 5/60 + 4/60 = 9/60 = 3/20. Time = 20/3 = 6.67 days ≈ 6 days 16 hours. Formula: Time = (A×B)/(A+B) = (12×15)/(12+15) = 180/27 = 20/3 days.",
        difficulty: 'Easy',
      },
      {
        q: 'In how many ways can 5 people be seated in a row?',
        a: '5! = 5 × 4 × 3 × 2 × 1 = 120 ways. If seated in a circle: (5-1)! = 24 ways (fix one person, arrange rest). If only 3 seats: P(5,3) = 5!/(5-3)! = 60 ways.',
        difficulty: 'Easy',
      },
      {
        q: 'A bag contains 3 red, 5 blue, and 2 green balls. What is the probability of picking 2 blue balls?',
        a: 'Total balls = 10. P(2 blue) = C(5,2)/C(10,2) = 10/45 = 2/9 ≈ 0.222. Using combinations: C(5,2) = 10, C(10,2) = 45. If with replacement: (5/10) × (5/10) = 1/4 = 0.25.',
        difficulty: 'Medium',
      },
      {
        q: 'Complete the series: 2, 6, 12, 20, 30, ?',
        a: 'Differences: 4, 6, 8, 10, … (increasing by 2). Next difference = 12. Answer = 30 + 12 = 42. Alternative pattern: n(n+1) where n = 1,2,3,4,5,6 → 2, 6, 12, 20, 30, 42.',
        difficulty: 'Easy',
      },
      {
        q: 'Two pipes fill a tank in 12 and 16 hours. A drain empties it in 24 hours. How long to fill with all open?',
        a: 'Rate: 1/12 + 1/16 - 1/24 = 2/24 + 1.5/24 - 1/24 = 2.5/24. Using LCM(12,16,24) = 48: Pipe1 fills 4/hr, Pipe2 fills 3/hr, Drain empties 2/hr. Net = 5 units/hr. Time = 48/5 = 9.6 hours.',
        difficulty: 'Medium',
      },
    ],
  },
  {
    slug: 'behavioral',
    name: 'Behavioral Interview Questions',
    icon: '🎯',
    category: 'behavioral',
    description:
      'STAR-method behavioral questions for Amazon Leadership Principles, Google Googliness, and general cultural fit rounds.',
    questions: [
      {
        q: 'Tell me about a time you failed.',
        a: 'Use STAR: "In my 3rd year, I led a team for a college hackathon. I took on too many features and we couldn\'t complete the project. I learned to scope MVPs and prioritize ruthlessly. In the next hackathon, I defined a clear MVP first, and we won 2nd place."',
        difficulty: 'Medium',
      },
      {
        q: 'Describe a situation where you had to learn something quickly.',
        a: '"During my internship, I was assigned to a Python/Django project but I only knew Node.js. I spent the first weekend doing the official Django tutorial and reading the codebase. By Monday, I submitted my first PR. Within 2 weeks, I was contributing independently. Key: I focused on learning by doing, not just reading docs."',
        difficulty: 'Easy',
      },
      {
        q: 'How do you handle disagreements with your manager?',
        a: '"I believe in data-driven decisions. When my manager suggested using REST for a real-time feature, I prepared a comparison showing WebSocket reduced latency by 80%. I presented it respectfully with benchmarks. He appreciated the analysis and we went with WebSocket. The key is to disagree with evidence, not emotion."',
        difficulty: 'Medium',
      },
      {
        q: 'Tell me about your most challenging project.',
        a: 'Pick a project that shows technical depth + teamwork. Structure: What was the challenge → What did you do specifically → What was the impact. "I built a real-time collaboration tool during my internship. The hardest part was handling concurrent edits — I implemented OT (Operational Transformation). Result: 500+ daily active users."',
        difficulty: 'Medium',
      },
      {
        q: 'How do you prioritize when you have multiple deadlines?',
        a: '"I use the Eisenhower Matrix: Urgent+Important (do first), Important+Not Urgent (schedule), Urgent+Not Important (delegate/automate), Neither (drop). I also communicate proactively — if I can\'t meet a deadline, I flag it early with a revised estimate and a plan."',
        difficulty: 'Easy',
      },
    ],
  },
  {
    slug: 'html-css',
    name: 'HTML & CSS Interview Questions',
    icon: '🎨',
    category: 'technical',
    description:
      'Frontend fundamentals: semantic HTML, CSS layouts, responsive design, accessibility, and modern CSS features.',
    questions: [
      {
        q: 'What is the difference between display: none and visibility: hidden?',
        a: '`display: none` removes the element from the layout entirely — takes no space. `visibility: hidden` hides the element but it still occupies space in the layout. `opacity: 0` is similar to visibility:hidden but the element is still interactive (clickable).',
        difficulty: 'Easy',
      },
      {
        q: 'Explain CSS Flexbox vs Grid.',
        a: 'Flexbox: 1-dimensional layout (row OR column). Best for: navbars, card rows, centering. `display: flex; justify-content: center; align-items: center;`. Grid: 2-dimensional layout (rows AND columns). Best for: page layouts, complex grids. `display: grid; grid-template-columns: repeat(3, 1fr);`. Use both together for best results.',
        difficulty: 'Medium',
      },
      {
        q: 'What is the CSS box model?',
        a: 'Every element is a box: Content (actual content) → Padding (space inside border) → Border → Margin (space outside border). `box-sizing: content-box` (default): width = content only. `box-sizing: border-box`: width includes padding + border. Always use border-box for predictable layouts.',
        difficulty: 'Easy',
      },
      {
        q: 'What are semantic HTML elements? Why do they matter?',
        a: 'Semantic elements describe their meaning: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`. Benefits: (1) Accessibility — screen readers understand page structure, (2) SEO — search engines understand content hierarchy, (3) Maintainability — code is self-documenting. Avoid using `<div>` for everything.',
        difficulty: 'Easy',
      },
      {
        q: 'How do you make a website responsive?',
        a: 'Key techniques: (1) Media queries: `@media (max-width: 768px) { ... }`, (2) Flexible layouts: Flexbox/Grid with fr units and percentages, (3) Responsive images: `max-width: 100%`, srcset, picture element, (4) Mobile-first approach: design for mobile, enhance for desktop, (5) Viewport meta tag, (6) CSS clamp() for fluid typography.',
        difficulty: 'Medium',
      },
    ],
  },
];

export function getIQTopicBySlug(slug: string): IQTopic | undefined {
  return iqTopics.find((t) => t.slug === slug);
}

export function getIQSlugs(): string[] {
  return iqTopics.map((t) => t.slug);
}

export function getIQByCategory(): Record<string, IQTopic[]> {
  return iqTopics.reduce(
    (acc, topic) => {
      if (!acc[topic.category]) acc[topic.category] = [];
      acc[topic.category].push(topic);
      return acc;
    },
    {} as Record<string, IQTopic[]>,
  );
}

export const iqCategoryLabels: Record<string, string> = {
  technical: '💻 Technical',
  behavioral: '🤝 Behavioral & HR',
  aptitude: '🧠 Aptitude & Reasoning',
};
