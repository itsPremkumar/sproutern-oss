---
title: 'Top 50 Python Interview Questions and Answers'
date: '2026-01-04'
category: 'Technical Skills'
readTime: '28 min read'
excerpt:
  'Master Python interviews with our comprehensive guide to the top 50 Python interview questions
  and answers. Covers basics, OOP, data structures, libraries, and coding challenges for freshers
  and experienced developers.'
author: 'Sproutern Career Team'
keywords:
  - Python interview questions
  - Python coding interview
  - Python interview preparation
  - Python developer interview
  - Python questions answers
  - Python technical interview
  - Python job interview
  - Python programming questions
---

# Top 50 Python Interview Questions and Answers

Python is one of the most in-demand programming languages today. Whether you're interviewing for a
software developer, data scientist, automation engineer, or backend developer role, you'll likely
face Python questions.

This comprehensive guide covers 50 essential Python interview questions organized by difficulty and
topic, with detailed answers and code examples.

---

## How to Use This Guide

### Question Categories

| Category                     | Questions | Focus                            |
| ---------------------------- | --------- | -------------------------------- |
| Basic Python                 | 1-15      | Fundamentals, syntax, data types |
| Intermediate                 | 16-30     | OOP, functions, error handling   |
| Advanced                     | 31-40     | Decorators, generators, memory   |
| Data Structures & Algorithms | 41-45     | Common coding problems           |
| Libraries & Frameworks       | 46-50     | NumPy, Pandas, Django            |

### Study Strategy

1. **For Freshers**: Focus on questions 1-30, plus 2-3 coding problems
2. **For 1-3 Years Experience**: All questions with emphasis on OOP and coding
3. **For Senior Roles**: All questions, especially 31-40 and system design aspects

---

## Part 1: Basic Python Questions (1-15)

### Question 1: What is Python? What are its key features?

**Answer:** Python is a high-level, interpreted, dynamically-typed programming language created by
Guido van Rossum in 1991.

**Key Features:**

- **Easy to learn**: Simple, readable syntax resembling English
- **Interpreted**: No compilation needed; runs line by line
- **Dynamically typed**: No need to declare variable types
- **Object-oriented**: Supports classes and objects
- **Extensive libraries**: Rich ecosystem (NumPy, Pandas, Django, etc.)
- **Cross-platform**: Runs on Windows, Mac, Linux
- **Memory management**: Automatic garbage collection

---

### Question 2: What's the difference between Python 2 and Python 3?

**Answer:**

| Feature  | Python 2                     | Python 3                       |
| -------- | ---------------------------- | ------------------------------ |
| Print    | `print "Hello"`              | `print("Hello")`               |
| Division | `5/2 = 2` (integer)          | `5/2 = 2.5` (float)            |
| Unicode  | Strings are ASCII by default | Strings are Unicode by default |
| Input    | `raw_input()`                | `input()`                      |
| Range    | `xrange()` for iteration     | Only `range()` exists          |
| Support  | No longer supported          | Active development             |

**Note**: Python 2 is deprecated. Always use Python 3 for new projects.

---

### Question 3: What are Python's built-in data types?

**Answer:**

| Type         | Examples                           | Mutable?                   |
| ------------ | ---------------------------------- | -------------------------- |
| **Numeric**  | `int`, `float`, `complex`          | No                         |
| **Sequence** | `list`, `tuple`, `range`           | list: Yes, others: No      |
| **Text**     | `str`                              | No                         |
| **Set**      | `set`, `frozenset`                 | set: Yes, frozenset: No    |
| **Mapping**  | `dict`                             | Yes                        |
| **Boolean**  | `bool`                             | No                         |
| **Binary**   | `bytes`, `bytearray`, `memoryview` | bytearray: Yes, others: No |
| **None**     | `NoneType`                         | No                         |

---

### Question 4: What's the difference between a list and a tuple?

**Answer:**

| Feature     | List                            | Tuple                     |
| ----------- | ------------------------------- | ------------------------- |
| Syntax      | `[1, 2, 3]`                     | `(1, 2, 3)`               |
| Mutability  | Mutable (can change)            | Immutable (cannot change) |
| Performance | Slower                          | Faster                    |
| Memory      | More memory                     | Less memory               |
| Use case    | When data changes               | When data is constant     |
| Methods     | Many (`append`, `remove`, etc.) | Few (`count`, `index`)    |

**Example:**

```python
# List - can modify
my_list = [1, 2, 3]
my_list[0] = 10  # Works

# Tuple - cannot modify
my_tuple = (1, 2, 3)
my_tuple[0] = 10  # TypeError!
```

---

### Question 5: What are \*args and \*\*kwargs?

**Answer:** They allow functions to accept variable numbers of arguments.

**`*args`**: Accepts any number of positional arguments as a tuple.

```python
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # Output: 10
```

**`**kwargs`\*\*: Accepts any number of keyword arguments as a dictionary.

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="John", age=25, city="Delhi")
# Output:
# name: John
# age: 25
# city: Delhi
```

**Combined:**

```python
def combined_example(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

combined_example("hello", 1, 2, 3, name="John", age=25)
```

---

### Question 6: What is the difference between `==` and `is`?

**Answer:**

- `==` compares **values** (equality)
- `is` compares **identity** (same object in memory)

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)  # True (same values)
print(a is b)  # False (different objects)
print(a is c)  # True (same object)

# Check with id()
print(id(a), id(b), id(c))  # a and c have same id
```

**When to use each:**

- Use `==` for value comparison (most common)
- Use `is` to check if two variables point to the same object
- Use `is` for `None` checks: `if x is None:`

---

### Question 7: What are Python decorators?

**Answer:** Decorators are functions that modify the behavior of other functions or classes without
changing their source code.

**Simple Example:**

```python
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function
# Hello!
# After function
```

**Practical Example - Timing:**

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(2)
    return "Done"

slow_function()  # slow_function took 2.00s
```

---

### Question 8: What are list comprehensions?

**Answer:** List comprehensions provide a concise way to create lists.

**Syntax:** `[expression for item in iterable if condition]`

**Examples:**

```python
# Basic
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# With expression
words = ["hello", "world"]
upper_words = [word.upper() for word in words]
# ['HELLO', 'WORLD']

# Nested
matrix = [[1, 2], [3, 4], [5, 6]]
flattened = [num for row in matrix for num in row]
# [1, 2, 3, 4, 5, 6]
```

**Dictionary and Set Comprehensions:**

```python
# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_lengths = {len(word) for word in ["hello", "world", "hi"]}
# {2, 5}
```

---

### Question 9: How is memory managed in Python?

**Answer:**

**Memory Management Components:**

1. **Private Heap**: All objects and data structures are stored in a private heap managed by
   Python's memory manager.

2. **Reference Counting**: Python tracks how many references point to each object. When count
   reaches 0, memory is freed.

```python
import sys

a = [1, 2, 3]
print(sys.getrefcount(a))  # Shows reference count (includes func argument)
```

3. **Garbage Collection**: Python has a garbage collector for circular references (when objects
   reference each other).

```python
import gc

# Force garbage collection
gc.collect()

# Get garbage collection stats
print(gc.get_stats())
```

4. **Memory Pools**: Python uses memory pools for small objects (pymalloc) to reduce fragmentation.

---

### Question 10: What are Python generators?

**Answer:** Generators are functions that yield values one at a time instead of returning all at
once. They're memory-efficient for large datasets.

**Creating a Generator:**

```python
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Using the generator
for num in count_up_to(5):
    print(num)
# Output: 1, 2, 3, 4, 5

# Generator object
gen = count_up_to(3)
print(next(gen))  # 1
print(next(gen))  # 2
print(next(gen))  # 3
print(next(gen))  # StopIteration error
```

**Generator Expression:**

```python
# Like list comprehension but with parentheses
squares_gen = (x**2 for x in range(1000000))

# Memory efficient - doesn't store all values
print(next(squares_gen))  # 0
print(next(squares_gen))  # 1
```

---

### Question 11: What is the Global Interpreter Lock (GIL)?

**Answer:** The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at
a time.

**Implications:**

- Makes single-threaded programs faster
- Limits multi-threaded CPU-bound programs
- Doesn't affect I/O-bound programs much
- Doesn't affect multiprocessing (separate processes)

**Workarounds:**

```python
# For CPU-bound: Use multiprocessing
from multiprocessing import Pool

def cpu_heavy(n):
    return sum(range(n))

with Pool(4) as p:
    results = p.map(cpu_heavy, [1000000, 2000000, 3000000])

# For I/O-bound: Threading still works well
import threading
import requests

def fetch_url(url):
    return requests.get(url)

# Threading is fine for I/O
threads = [threading.Thread(target=fetch_url, args=(url,)) for url in urls]
```

---

### Question 12: What are lambda functions?

**Answer:** Lambda functions are small anonymous functions defined with the `lambda` keyword.

**Syntax:** `lambda arguments: expression`

**Examples:**

```python
# Basic lambda
square = lambda x: x ** 2
print(square(5))  # 25

# Multiple arguments
add = lambda x, y: x + y
print(add(3, 4))  # 7

# With built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
# [1, 4, 9, 16, 25]

# Sorting with lambda
students = [("John", 25), ("Jane", 22), ("Bob", 27)]
sorted_by_age = sorted(students, key=lambda x: x[1])
# [('Jane', 22), ('John', 25), ('Bob', 27)]

# Filter with lambda
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4]
```

---

### Question 13: What is the difference between shallow copy and deep copy?

**Answer:**

**Shallow Copy:** Creates a new object but references the same nested objects.

**Deep Copy:** Creates a new object and recursively copies all nested objects.

```python
import copy

original = [[1, 2, 3], [4, 5, 6]]

# Shallow copy
shallow = copy.copy(original)
shallow[0][0] = 'X'
print(original)  # [['X', 2, 3], [4, 5, 6]] - Changed!

# Reset
original = [[1, 2, 3], [4, 5, 6]]

# Deep copy
deep = copy.deepcopy(original)
deep[0][0] = 'X'
print(original)  # [[1, 2, 3], [4, 5, 6]] - Unchanged
```

**Visual:**

```
Shallow Copy:
original → [list1, list2]
shallow → [   ↑  ,   ↑   ]  (points to same lists)

Deep Copy:
original → [list1, list2]
deep    → [copy1, copy2]  (completely independent)
```

---

### Question 14: What are Python namespaces and scope?

**Answer:**

**Namespace:** A container that maps names to objects (like a dictionary).

**Types of Namespaces:**

1. **Built-in**: Python's built-in functions (`print`, `len`)
2. **Global**: Module-level names
3. **Enclosing**: Outer function's local namespace (for closures)
4. **Local**: Current function's namespace

**LEGB Rule (Scope Resolution Order):** Local → Enclosing → Global → Built-in

```python
x = "global"

def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)  # Prints "local"

    inner()
    print(x)  # Prints "enclosing"

outer()
print(x)  # Prints "global"
```

**Modifying Outer Scopes:**

```python
counter = 0

def increment():
    global counter  # Required to modify global
    counter += 1

def outer():
    count = 0

    def inner():
        nonlocal count  # Required to modify enclosing
        count += 1

    inner()
    return count
```

---

### Question 15: How do you handle exceptions in Python?

**Answer:**

**Basic Try-Except:**

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

**Multiple Exceptions:**

```python
try:
    value = int("abc")
except ValueError:
    print("Invalid integer")
except TypeError:
    print("Type error")
except Exception as e:  # Catch-all
    print(f"Unexpected error: {e}")
```

**Full Structure:**

```python
try:
    file = open("file.txt")
    content = file.read()
except FileNotFoundError:
    print("File not found")
except PermissionError:
    print("Permission denied")
else:
    print("File read successfully")  # Runs if no exception
finally:
    file.close()  # Always runs
```

**Raising Exceptions:**

```python
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

# Custom exception
class CustomError(Exception):
    pass

raise CustomError("Something went wrong")
```

---

## Part 2: Intermediate Questions (16-30)

### Question 16: Explain OOP concepts in Python.

**Answer:**

**Four Pillars of OOP:**

```python
# 1. ENCAPSULATION - Bundling data and methods
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

# 2. ABSTRACTION - Hiding complexity
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass  # Must be implemented by subclasses

# 3. INHERITANCE - Deriving from parent class
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

# 4. POLYMORPHISM - Same interface, different behavior
class Cat(Animal):
    def speak(self):
        return "Meow!"

def make_speak(animal):
    print(animal.speak())  # Works for any Animal

make_speak(Dog())  # Woof!
make_speak(Cat())  # Meow!
```

---

### Question 17: What is the difference between `@staticmethod` and `@classmethod`?

**Answer:**

```python
class MyClass:
    class_variable = "I'm a class variable"

    def instance_method(self):
        # Has access to instance (self) and class
        print(f"Instance method: {self}")

    @classmethod
    def class_method(cls):
        # Has access to class, not instance
        print(f"Class method: {cls.class_variable}")

    @staticmethod
    def static_method():
        # No access to class or instance
        print("Static method: No access to self or cls")

# Usage
obj = MyClass()
obj.instance_method()  # Needs instance
MyClass.class_method()  # Can call on class
MyClass.static_method()  # Utility function
```

**When to Use:**

- **Instance method**: When you need access to instance attributes
- **Class method**: Factory methods, when you modify class state
- **Static method**: Utility functions logically related to the class

---

### Question 18: What are Python dunder (magic) methods?

**Answer:** Dunder methods (double underscore) define behavior for built-in operations.

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        # For print() and str()
        return f"Point({self.x}, {self.y})"

    def __repr__(self):
        # For debugging, repr()
        return f"Point({self.x!r}, {self.y!r})"

    def __add__(self, other):
        # For + operator
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        # For == operator
        return self.x == other.x and self.y == other.y

    def __len__(self):
        # For len()
        return 2

    def __getitem__(self, index):
        # For indexing []
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        raise IndexError

p1 = Point(1, 2)
p2 = Point(3, 4)
print(p1 + p2)  # Point(4, 6)
print(p1 == Point(1, 2))  # True
```

---

### Question 19: What is the `with` statement and context managers?

**Answer:** The `with` statement simplifies exception handling by automatically handling setup and
cleanup.

**Built-in Example:**

```python
# Without with - must handle cleanup manually
file = open("file.txt")
try:
    content = file.read()
finally:
    file.close()

# With statement - automatic cleanup
with open("file.txt") as file:
    content = file.read()
# File automatically closed
```

**Creating Context Managers:**

```python
# Method 1: Using __enter__ and __exit__
class DatabaseConnection:
    def __enter__(self):
        print("Opening connection")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")
        # Return True to suppress exceptions
        return False

    def query(self, sql):
        print(f"Executing: {sql}")

with DatabaseConnection() as db:
    db.query("SELECT * FROM users")

# Method 2: Using contextlib
from contextlib import contextmanager

@contextmanager
def timer():
    import time
    start = time.time()
    yield  # Code inside 'with' block runs here
    print(f"Time: {time.time() - start:.2f}s")

with timer():
    # Some code to time
    sum(range(1000000))
```

---

### Question 20: Explain Python's `self` keyword.

**Answer:** `self` is a reference to the current instance of a class. It's used to access instance
attributes and methods.

```python
class Person:
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age

    def introduce(self):
        # self allows access to instance data
        return f"Hi, I'm {self.name}, {self.age} years old"

    def celebrate_birthday(self):
        self.age += 1  # Modifying instance attribute
        return f"Happy Birthday! Now {self.age}"

# Creating instances
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# self refers to different objects
print(person1.introduce())  # Hi, I'm Alice, 25 years old
print(person2.introduce())  # Hi, I'm Bob, 30 years old
```

**Notes:**

- `self` is just a convention; you could use any name
- Python passes the instance automatically
- Always include `self` as first parameter in instance methods

---

### Question 21: What are Python iterators?

**Answer:** An iterator is an object that allows traversal through a container.

**Iterator Protocol:**

- `__iter__()`: Returns the iterator object
- `__next__()`: Returns the next value

```python
# Creating an iterator
class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1

# Using the iterator
for num in CountDown(5):
    print(num)  # 5, 4, 3, 2, 1

# Built-in functions create iterators
my_list = [1, 2, 3]
iterator = iter(my_list)
print(next(iterator))  # 1
print(next(iterator))  # 2
```

---

### Question 22: What is the difference between `range()` and `xrange()`?

**Answer:** In Python 3, only `range()` exists and it behaves like Python 2's `xrange()`.

| Feature | `range()` (Python 3)             | Old `range()` (Python 2) |
| ------- | -------------------------------- | ------------------------ |
| Returns | Range object (iterator)          | List                     |
| Memory  | Efficient (calculated on demand) | Stores all values        |
| Speed   | Fast for large ranges            | Slow for large ranges    |

```python
# Python 3 range is memory efficient
big_range = range(1000000000)  # Uses minimal memory
print(big_range[0])  # Calculates on demand

# You can still convert to list if needed
small_list = list(range(10))  # [0, 1, 2, ..., 9]
```

---

### Question 23: How do you implement multithreading in Python?

**Answer:**

```python
import threading
import time

# Creating a thread
def task(name, delay):
    for i in range(3):
        time.sleep(delay)
        print(f"Thread {name}: {i}")

# Method 1: Using Thread directly
thread1 = threading.Thread(target=task, args=("A", 0.5))
thread2 = threading.Thread(target=task, args=("B", 0.3))

thread1.start()
thread2.start()

thread1.join()  # Wait for completion
thread2.join()

# Method 2: Subclassing Thread
class MyThread(threading.Thread):
    def __init__(self, name):
        super().__init__()
        self.name = name

    def run(self):
        for i in range(3):
            time.sleep(0.5)
            print(f"{self.name}: {i}")

# Thread synchronization
lock = threading.Lock()
counter = 0

def increment():
    global counter
    with lock:  # Prevents race conditions
        counter += 1
```

---

### Question 24: What is pickling and unpickling?

**Answer:** Pickling is serializing Python objects to bytes (for storage/transmission). Unpickling
is the reverse.

```python
import pickle

# Pickling - saving object
data = {
    'name': 'John',
    'scores': [90, 85, 88],
    'passed': True
}

# Save to file
with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)

# Unpickling - loading object
with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)

print(loaded_data)  # Same as original data

# Pickle to bytes
pickled_bytes = pickle.dumps(data)
unpickled = pickle.loads(pickled_bytes)
```

**Security Warning:** Never unpickle data from untrusted sources—it can execute arbitrary code.

---

### Question 25: What are Python slots?

**Answer:** `__slots__` is used to explicitly declare data attributes, saving memory and preventing
dynamic attribute creation.

```python
# Without slots
class RegularClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# With slots
class SlottedClass:
    __slots__ = ['x', 'y']

    def __init__(self, x, y):
        self.x = x
        self.y = y

# Regular class allows dynamic attributes
obj1 = RegularClass(1, 2)
obj1.z = 3  # Works

# Slotted class doesn't
obj2 = SlottedClass(1, 2)
obj2.z = 3  # AttributeError!

# Memory comparison
import sys
print(sys.getsizeof(obj1.__dict__))  # ~104 bytes
# SlottedClass has no __dict__, uses less memory
```

**When to Use Slots:**

- Creating many instances of a class
- Need to save memory
- Want to prevent accidental attribute addition

---

### Question 26: How do you perform unit testing in Python?

**Answer:**

```python
# calculator.py
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# test_calculator.py
import unittest
from calculator import add, divide

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)

    def test_add_floats(self):
        self.assertAlmostEqual(add(0.1, 0.2), 0.3, places=5)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

    def setUp(self):
        # Runs before each test
        print("Setting up")

    def tearDown(self):
        # Runs after each test
        print("Tearing down")

if __name__ == '__main__':
    unittest.main()
```

**Using pytest (more popular):**

```python
# test_calc.py
import pytest
from calculator import add, divide

def test_add():
    assert add(2, 3) == 5

def test_divide_by_zero():
    with pytest.raises(ValueError):
        divide(10, 0)

# Run with: pytest test_calc.py
```

---

### Question 27: What is monkey patching?

**Answer:** Monkey patching is modifying a class or module at runtime.

```python
# Original class
class MyClass:
    def greeting(self):
        return "Hello"

# Monkey patching - adding a method
def new_greeting(self):
    return "Hi there!"

MyClass.greeting = new_greeting

obj = MyClass()
print(obj.greeting())  # "Hi there!"

# Monkey patching in testing
# Replacing external dependencies for testing
import requests

def mock_get(*args, **kwargs):
    class MockResponse:
        status_code = 200
        text = "Mocked response"
    return MockResponse()

# Save original
original_get = requests.get
# Patch
requests.get = mock_get

# Now requests.get returns mocked data
response = requests.get("any url")
print(response.text)  # "Mocked response"

# Restore
requests.get = original_get
```

---

### Question 28: What are Python metaclasses?

**Answer:** Metaclasses are classes for classes. They define how classes behave.

```python
# Default metaclass is 'type'
# When you write:
class MyClass:
    pass

# Python executes:
MyClass = type('MyClass', (), {})

# Creating a metaclass
class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        print("Initializing database")

# Both variables point to same instance
db1 = Database()  # "Initializing database"
db2 = Database()  # Nothing printed - returns existing
print(db1 is db2)  # True
```

---

### Question 29: What is the `__name__` variable?

**Answer:** `__name__` is a special variable that holds the name of the current module.

```python
# my_module.py
print(f"__name__ is: {__name__}")

def main():
    print("Main function running")

if __name__ == "__main__":
    # This block runs only when file is executed directly
    main()
```

**When run directly:**

```
python my_module.py
# Output: __name__ is: __main__
# Main function running
```

**When imported:**

```python
import my_module
# Output: __name__ is: my_module
# (main() is NOT called)
```

---

### Question 30: Explain the difference between `append()` and `extend()`.

**Answer:**

```python
# append() adds ONE element to the end
list1 = [1, 2, 3]
list1.append([4, 5])
print(list1)  # [1, 2, 3, [4, 5]]

# extend() adds EACH element from an iterable
list2 = [1, 2, 3]
list2.extend([4, 5])
print(list2)  # [1, 2, 3, 4, 5]

# append with single item
list3 = [1, 2, 3]
list3.append(4)
print(list3)  # [1, 2, 3, 4]

# extend with string (treats as iterable of chars)
list4 = [1, 2, 3]
list4.extend("ab")
print(list4)  # [1, 2, 3, 'a', 'b']
```

---

## Part 3: Advanced Questions (31-40)

### Question 31: How do decorators with arguments work?

**Answer:**

```python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
# ['Hello, World!', 'Hello, World!', 'Hello, World!']
```

---

### Question 32: What are coroutines and async/await?

**Answer:**

```python
import asyncio

async def fetch_data(delay, data):
    print(f"Start fetching {data}")
    await asyncio.sleep(delay)  # Non-blocking wait
    print(f"Done fetching {data}")
    return {"data": data}

async def main():
    # Run concurrently
    task1 = asyncio.create_task(fetch_data(2, "A"))
    task2 = asyncio.create_task(fetch_data(1, "B"))

    result1 = await task1
    result2 = await task2

    print(result1, result2)

asyncio.run(main())
```

---

### Question 33: What is method resolution order (MRO)?

**Answer:** MRO defines the order in which base classes are searched when looking for a method.

```python
class A:
    def method(self):
        return "A"

class B(A):
    def method(self):
        return "B"

class C(A):
    def method(self):
        return "C"

class D(B, C):
    pass

# MRO can be viewed with:
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

d = D()
print(d.method())  # "B" (B comes before C in MRO)
```

---

### Question 34: What are descriptors?

**Answer:** Descriptors are objects that define `__get__`, `__set__`, or `__delete__` methods to
customize attribute access.

```python
class Validator:
    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, type=None):
        return obj.__dict__.get(self.name)

    def __set__(self, obj, value):
        if not isinstance(value, int):
            raise TypeError(f"{self.name} must be an integer")
        if value < 0:
            raise ValueError(f"{self.name} must be positive")
        obj.__dict__[self.name] = value

class Person:
    age = Validator()

    def __init__(self, age):
        self.age = age

p = Person(25)  # Works
p = Person(-5)  # ValueError!
```

---

### Question 35: What is the `functools` module?

**Answer:**

```python
from functools import lru_cache, partial, reduce, wraps

# lru_cache - Memoization
@lru_cache(maxsize=100)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# partial - Pre-fill arguments
def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
print(square(5))  # 25

# reduce - Accumulate values
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120

# wraps - Preserve function metadata in decorators
def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper
```

---

## Part 4: Data Structures & Algorithms (41-45)

### Question 41: Reverse a string in Python.

```python
# Method 1: Slicing (most Pythonic)
s = "hello"
reversed_s = s[::-1]
print(reversed_s)  # "olleh"

# Method 2: reversed() + join()
reversed_s = ''.join(reversed(s))

# Method 3: Loop
reversed_s = ''
for char in s:
    reversed_s = char + reversed_s
```

---

### Question 42: Find duplicates in a list.

```python
def find_duplicates(lst):
    seen = set()
    duplicates = set()
    for item in lst:
        if item in seen:
            duplicates.add(item)
        seen.add(item)
    return list(duplicates)

# Alternative using Counter
from collections import Counter
def find_duplicates_counter(lst):
    counts = Counter(lst)
    return [item for item, count in counts.items() if count > 1]

print(find_duplicates([1, 2, 3, 2, 4, 3, 5]))  # [2, 3]
```

---

### Question 43: Check if two strings are anagrams.

```python
def are_anagrams(s1, s2):
    # Method 1: Sorting
    return sorted(s1.lower()) == sorted(s2.lower())

def are_anagrams_counter(s1, s2):
    # Method 2: Counter (more efficient)
    from collections import Counter
    return Counter(s1.lower()) == Counter(s2.lower())

print(are_anagrams("listen", "silent"))  # True
print(are_anagrams("hello", "world"))    # False
```

---

### Question 44: Implement a stack using Python.

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)
```

---

### Question 45: Find the first non-repeating character.

```python
def first_non_repeating(s):
    from collections import Counter
    counts = Counter(s)
    for char in s:
        if counts[char] == 1:
            return char
    return None

print(first_non_repeating("aabbcdef"))  # 'c'
```

---

## Part 5: Libraries & Frameworks (46-50)

### Question 46: What is NumPy and why is it used?

**Answer:** NumPy is a library for numerical computing with powerful array operations.

```python
import numpy as np

# Creating arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Operations are vectorized (fast)
print(arr * 2)  # [2, 4, 6, 8, 10]
print(arr.mean())  # 3.0

# Useful for data science and ML
```

---

### Question 47: What is Pandas and how does it differ from NumPy?

**Answer:** Pandas provides data structures (DataFrame, Series) for data manipulation and analysis.

```python
import pandas as pd

# DataFrame creation
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Salary': [50000, 60000, 70000]
})

# Operations
print(df[df['Age'] > 25])  # Filter
print(df.groupby('Name')['Salary'].mean())  # Aggregate
```

**Difference**: NumPy is for numerical arrays; Pandas is for tabular data with labels.

---

### Question 48: What is Flask vs Django?

**Answer:**

| Feature  | Flask                 | Django               |
| -------- | --------------------- | -------------------- |
| Type     | Micro-framework       | Full-stack framework |
| Size     | Lightweight           | Batteries-included   |
| ORM      | External (SQLAlchemy) | Built-in             |
| Admin    | Manual                | Automatic            |
| Best for | APIs, small apps      | Large applications   |

---

### Question 49: What is Virtual Environment?

**Answer:** A virtual environment is an isolated Python environment for managing project
dependencies.

```bash
# Create
python -m venv myenv

# Activate (Windows)
myenv\Scripts\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Install packages
pip install requests

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

---

### Question 50: What is PEP 8?

**Answer:** PEP 8 is Python's official style guide for writing clean, readable code.

**Key Rules:**

- Indentation: 4 spaces
- Line length: max 79 characters
- Naming: `snake_case` for functions/variables, `PascalCase` for classes
- Imports: One per line, at top of file
- Whitespace: Around operators, after commas

---

## Key Takeaways

1. **Know the basics well**—data types, control flow, functions
2. **Understand OOP deeply**—classes, inheritance, magic methods
3. **Practice coding problems**—algorithms matter
4. **Know Python-specific features**—decorators, generators, context managers
5. **Be familiar with popular libraries**—NumPy, Pandas, Flask/Django

---

_Preparing for tech interviews? Explore more resources on [Sproutern](/) for coding practice and
career guidance._

---

## Frequently Asked Questions

### Is this information up-to-date?

Yes! This article is regularly reviewed and updated by the Sproutern Career Research Team with the
latest data and insights for 2026.

### Can freshers benefit from this guide?

Absolutely. This guide covers information relevant to students, freshers, and experienced
professionals. We include specific tips for each experience level.

### Where can I find more resources?

Explore our [complete resource library](/resources) with 200+ free tools, guides, and templates for
career preparation.

---

## Related Resources on Sproutern

- [AI Resume Optimizer](/resume-optimizer) — Get your resume reviewed by AI for free
- [Career Roadmaps](/roadmaps) — Plan your career path step by step
- [Interview Experiences](/interview-experiences) — Read real stories from candidates
- [Salary Calculator](/tools/salary-calculator) — Compare salaries across companies
- [Typing Speed Test](/tools/typingspeedtest) — Test and improve your typing speed

---

_This article was last reviewed and updated on February 23, 2026. Source: Sproutern Career Research
Team._
