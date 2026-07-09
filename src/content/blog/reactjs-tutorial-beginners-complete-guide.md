---
title: 'React.js Tutorial for Beginners: Complete Guide'
date: '2026-01-06'
category: 'Programming'
readTime: '26 min read'
excerpt:
  "Learn React.js from scratch with this comprehensive beginner's guide. Covers components, state,
  props, hooks, and building your first React application step by step."
author: 'Sproutern Career Team'
keywords:
  - React.js
  - React tutorial
  - front-end development
  - JavaScript framework
  - React components
  - React hooks
  - web development
  - learn React
---

# React.js Tutorial for Beginners: Complete Guide

React.js has become the most popular JavaScript library for building user interfaces. Created by
Facebook, it powers Instagram, WhatsApp Web, Netflix, and thousands of other applications.

If you're looking to enter front-end development or level up your JavaScript skills, learning React
is one of the best investments you can make. This comprehensive tutorial takes you from zero to
building real React applications.

---

## What is React?

### Definition

React is a JavaScript library for building user interfaces, specifically for single-page
applications. It allows you to create reusable UI components that update efficiently when data
changes.

### React vs Other Frameworks

| Feature        | React        | Vue          | Angular       |
| -------------- | ------------ | ------------ | ------------- |
| Type           | Library      | Framework    | Framework     |
| Learning Curve | Medium       | Easy         | Steep         |
| Size           | Small (42kb) | Small (33kb) | Large (143kb) |
| Data Binding   | One-way      | Two-way      | Two-way       |
| Created By     | Facebook     | Evan You     | Google        |
| Popularity     | Highest      | High         | High          |

### Why Learn React?

| Reason                | Explanation                         |
| --------------------- | ----------------------------------- |
| **Job Market**        | Most in-demand front-end skill      |
| **Large Ecosystem**   | Huge community, many libraries      |
| **Component-Based**   | Reusable, maintainable code         |
| **React Native**      | Build mobile apps with same skills  |
| **Performance**       | Virtual DOM makes updates efficient |
| **Industry Standard** | Used by top companies globally      |

---

## Prerequisites

Before starting React, you should know:

| Skill      | Level Needed        |
| ---------- | ------------------- |
| HTML       | Comfortable         |
| CSS        | Comfortable         |
| JavaScript | Strong fundamentals |

**JavaScript Concepts You Need:**

| Concept                     | Why Important    |
| --------------------------- | ---------------- |
| Variables (let, const)      | Used throughout  |
| Arrow functions             | Component syntax |
| Array methods (map, filter) | Rendering lists  |
| Destructuring               | Props and state  |
| Spread operator             | Updating state   |
| Modules (import/export)     | Organizing code  |
| Template literals           | JSX usage        |
| Promises/async-await        | API calls        |

If these are unfamiliar, spend 1-2 weeks on modern JavaScript first.

---

## Setting Up Your Development Environment

### Requirements

1. **Node.js** (version 16+)
   - Download from nodejs.org
   - Verify: `node --version`

2. **Code Editor**
   - VS Code (recommended)
   - Extensions: ES7+ React snippets, Prettier

3. **Browser**
   - Chrome with React Developer Tools extension

### Creating Your First React App

**Using Create React App (CRA):**

```bash
npx create-react-app my-first-app
cd my-first-app
npm start
```

**Using Vite (Faster alternative):**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

Your app runs at `http://localhost:3000` (CRA) or `http://localhost:5173` (Vite).

### Project Structure

```
my-app/
├── node_modules/     # Dependencies
├── public/           # Static files
│   └── index.html    # Main HTML file
├── src/              # Source code
│   ├── App.js        # Main component
│   ├── App.css       # Styles
│   ├── index.js      # Entry point
│   └── index.css     # Global styles
├── package.json      # Project config
└── README.md
```

---

## Understanding JSX

### What is JSX?

JSX (JavaScript XML) lets you write HTML-like code in JavaScript. It's not HTML—it's a syntax
extension that gets compiled to JavaScript.

**JSX:**

```jsx
const element = <h1>Hello, World!</h1>;
```

**Compiles to:**

```javascript
const element = React.createElement('h1', null, 'Hello, World!');
```

### JSX Rules

| Rule                        | Example                            |
| --------------------------- | ---------------------------------- |
| Return single root element  | Wrap in `<div>` or `<>` (Fragment) |
| Close all tags              | `<img />` not `<img>`              |
| Use `className` not `class` | `<div className="box">`            |
| Use `htmlFor` not `for`     | `<label htmlFor="name">`           |
| camelCase for attributes    | `onClick`, `onSubmit`              |
| JavaScript in `{}`          | `<p>{variable}</p>`                |

### JSX Examples

**Expressions in JSX:**

```jsx
const name = 'John';
const element = <h1>Hello, {name}!</h1>;
```

**Conditional Rendering:**

```jsx
const isLoggedIn = true;

return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}</div>;
```

**Rendering Lists:**

```jsx
const items = ['Apple', 'Banana', 'Orange'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

---

## Components

### What are Components?

Components are the building blocks of React applications. They are reusable, independent pieces of
UI.

**Types of Components:**

| Type               | Syntax    | State Support    |
| ------------------ | --------- | ---------------- |
| Function Component | Function  | Yes (with hooks) |
| Class Component    | ES6 Class | Yes (built-in)   |

Modern React uses function components almost exclusively.

### Creating a Function Component

**Basic Component:**

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

**Arrow Function:**

```jsx
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};
```

**Using the Component:**

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
```

### Component Best Practices

| Practice               | Why                       |
| ---------------------- | ------------------------- |
| One component per file | Organization              |
| PascalCase naming      | React requirement         |
| Start simple           | Break down later          |
| Keep components small  | Easier to maintain        |
| Single responsibility  | One purpose per component |

### Example: Breaking Down UI

**Full Page:**

```jsx
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

**Header Component:**

```jsx
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}
```

---

## Props

### What are Props?

Props (properties) are how you pass data from parent to child components. They're read-only—a
component cannot modify its own props.

### Passing Props

**Parent Component:**

```jsx
function App() {
  return (
    <div>
      <Greeting
        name="John"
        age={25}
      />
      <Greeting
        name="Jane"
        age={30}
      />
    </div>
  );
}
```

**Child Component:**

```jsx
function Greeting(props) {
  return (
    <p>
      Hello, {props.name}! You are {props.age} years old.
    </p>
  );
}
```

### Destructuring Props

**Cleaner Syntax:**

```jsx
function Greeting({ name, age }) {
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}
```

### Default Props

```jsx
function Greeting({ name = 'Guest', age = 0 }) {
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}
```

### Props with Children

Special `children` prop for content inside component tags:

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is the card content</p>
  <button>Click me</button>
</Card>;
```

---

## State with useState Hook

### What is State?

State is data that can change over time and affects what the component renders. When state changes,
React re-renders the component.

### useState Hook

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Breakdown:**

- `useState(0)`: Initialize state with value 0
- `count`: Current state value
- `setCount`: Function to update state
- Never modify state directly, always use setter

### Updating State

**With New Value:**

```jsx
setCount(5); // Set to 5
```

**With Previous Value (recommended for updates based on previous):**

```jsx
setCount((prevCount) => prevCount + 1);
```

### Multiple State Variables

```jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // ...
}
```

### State with Objects

```jsx
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, // Keep existing values
      [e.target.name]: e.target.value, // Update one field
    });
  };

  return (
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
  );
}
```

### State with Arrays

```jsx
function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build a project']);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Add to end
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove by index
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## Event Handling

### Basic Events

```jsx
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**Inline Handler (for simple cases):**

```jsx
<button onClick={() => alert('Clicked!')}>Click</button>
```

### Common Events

| Event      | React Event | Use Case           |
| ---------- | ----------- | ------------------ |
| Click      | onClick     | Buttons, links     |
| Change     | onChange    | Inputs, selects    |
| Submit     | onSubmit    | Forms              |
| Focus      | onFocus     | Input focus        |
| Blur       | onBlur      | Input loses focus  |
| Mouse Over | onMouseOver | Hover effects      |
| Key Press  | onKeyDown   | Keyboard shortcuts |

### Passing Arguments to Event Handlers

```jsx
function ItemList() {
  const handleDelete = (id) => {
    console.log('Deleting item:', id);
  };

  return <button onClick={() => handleDelete(5)}>Delete Item 5</button>;
}
```

### Form Handling

```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## useEffect Hook

### What is useEffect?

useEffect lets you perform side effects in function components:

- Fetching data
- Setting up subscriptions
- Manually changing the DOM
- Timers

### Basic useEffect

```jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs after every render
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Dependency Array

| Dependency            | When Effect Runs     |
| --------------------- | -------------------- |
| No array              | After every render   |
| Empty array `[]`      | Only on mount (once) |
| With values `[value]` | When value changes   |

**Run Once on Mount:**

```jsx
useEffect(() => {
  console.log('Component mounted');
}, []); // Empty array
```

**Run When Value Changes:**

```jsx
useEffect(() => {
  console.log('Count changed to:', count);
}, [count]); // Only when count changes
```

### Cleanup Function

For effects that need cleanup (subscriptions, timers):

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);
```

### Fetching Data

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return <div>{user.name}</div>;
}
```

---

## Conditional Rendering

### If Statement (Outside JSX)

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in</h1>;
}
```

### Ternary Operator

```jsx
function Greeting({ isLoggedIn }) {
  return <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}</div>;
}
```

### Logical AND (&&)

Render something only if condition is true:

```jsx
function Notification({ hasMessages, count }) {
  return <div>{hasMessages && <p>You have {count} new messages</p>}</div>;
}
```

### Multiple Conditions

```jsx
function StatusMessage({ status }) {
  return (
    <div>
      {status === 'loading' && <Spinner />}
      {status === 'error' && <ErrorMessage />}
      {status === 'success' && <SuccessMessage />}
    </div>
  );
}
```

---

## Lists and Keys

### Rendering Lists

```jsx
function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy it' },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

### Why Keys Matter

Keys help React identify which items changed, were added, or removed:

- Use unique, stable identifiers
- Don't use array index if items can reorder
- Keys must be unique among siblings

**Good Key:**

```jsx
{
  todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
}
```

**Bad Key (avoid):**

```jsx
{
  todos.map((todo, index) => (
    <li key={index}>{todo.text}</li> // Problematic if list reorders
  ));
}
```

---

## Styling in React

### Option 1: CSS Stylesheets

**App.css:**

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}
```

**Component:**

```jsx
import './App.css';

function Button() {
  return <button className="button">Click Me</button>;
}
```

### Option 2: Inline Styles

```jsx
function Button() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
  };

  return <button style={buttonStyle}>Click Me</button>;
}
```

### Option 3: CSS Modules

**Button.module.css:**

```css
.button {
  background-color: blue;
  color: white;
}
```

**Component:**

```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

### Option 4: Styled Components

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;

  &:hover {
    background-color: darkblue;
  }
`;

function Button() {
  return <StyledButton>Click Me</StyledButton>;
}
```

---

## Building a Complete Project: Todo App

Let's build a complete todo application:

### App.js

```jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
```

### TodoForm.js

```jsx
import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
```

### TodoList.js

```jsx
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
```

### TodoItem.js

```jsx
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
```

---

## Next Steps After Basics

### What to Learn Next

| Topic                                 | Why Important     |
| ------------------------------------- | ----------------- |
| React Router                          | Multi-page apps   |
| Context API                           | Global state      |
| Custom Hooks                          | Reusable logic    |
| State Management (Redux/Zustand)      | Complex state     |
| React Query                           | Server state      |
| TypeScript with React                 | Type safety       |
| Testing (Jest, React Testing Library) | Quality assurance |

### Project Ideas for Practice

| Level        | Project                                       |
| ------------ | --------------------------------------------- |
| Beginner     | Todo App, Counter, Quiz App                   |
| Intermediate | Weather App, E-commerce Cart, Blog            |
| Advanced     | Social Media Clone, Dashboard, Full-stack App |

---

## Key Takeaways

1. **React uses components**—reusable UI building blocks
2. **JSX mixes HTML and JavaScript**—with some syntax differences
3. **Props pass data down**—parent to child, read-only
4. **State is for changing data**—triggers re-renders
5. **Hooks add functionality**—useState, useEffect, and more
6. **Events use camelCase**—onClick, onChange
7. **Keys identify list items**—use unique IDs
8. **useEffect handles side effects**—API calls, subscriptions
9. **Start simple, build up**—don't over-engineer early
10. **Practice with projects**—real apps teach more than tutorials

---

## Frequently Asked Questions

### How long does it take to learn React?

Basics: 2-4 weeks. Comfortable for projects: 2-3 months. Advanced: 6+ months of building projects.

### Should I learn JavaScript first?

Yes. Solid JavaScript fundamentals (especially ES6+) are essential. Spend 1-2 months on JavaScript
before React.

### React vs Vue vs Angular—which to learn?

React has the largest job market. Vue is easiest to learn. Angular is comprehensive but complex. For
careers, React is usually the best choice.

### Do I need to learn class components?

Not for new projects. Modern React uses function components with hooks. Learn them briefly for
reading legacy code.

### What backend should I use with React?

Any backend works. Popular choices: Node.js/Express, Python/Django, or Firebase for quick setup.

---

_Learning web development? Explore more resources on [Sproutern](/) for programming tutorials,
career guidance, and skill development._

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
