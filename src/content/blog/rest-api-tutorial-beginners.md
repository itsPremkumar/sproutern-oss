---
title: 'REST API Tutorial for Beginners'
date: '2026-01-06'
category: 'Programming'
readTime: '20 min read'
excerpt:
  'Learn REST API fundamentals from scratch. Understand HTTP methods, status codes, authentication,
  and how to design, consume, and build RESTful APIs step by step.'
author: 'Sproutern Career Team'
keywords:
  - REST API
  - API tutorial
  - web development
  - HTTP methods
  - API design
  - backend development
  - JSON API
  - RESTful services
---

# REST API Tutorial for Beginners

APIs power the modern internet. Every time you use a mobile app, check the weather, or make an
online payment, you're interacting with APIs. Understanding APIs is essential for any developer, and
REST is the most common API architecture.

This comprehensive tutorial explains REST APIs from scratch—what they are, how they work, and how to
build and consume them.

---

## What is an API?

### Definition

API (Application Programming Interface) is a way for different software applications to communicate
with each other. It defines the rules and protocols for how applications request and exchange data.

**Real-World Analogy:** Think of a restaurant:

- You (client) → make a request (order from menu)
- Waiter (API) → takes your request to the kitchen
- Kitchen (server) → prepares the food
- Waiter (API) → brings the response (food)

You don't need to know how the kitchen works—the waiter handles the communication.

### Why APIs Matter

| Use Case                | Example                       |
| ----------------------- | ----------------------------- |
| Mobile apps             | App fetches data from server  |
| Third-party integration | Login with Google             |
| Microservices           | Services communicate          |
| Automation              | Scripts interact with systems |
| Data sharing            | Weather data for websites     |

---

## What is REST?

### Definition

REST (Representational State Transfer) is an architectural style for designing networked
applications. It's not a protocol or standard—it's a set of constraints and principles.

### REST Principles

| Principle             | Explanation                                                         |
| --------------------- | ------------------------------------------------------------------- |
| **Stateless**         | Each request contains all info needed; no server-side sessions      |
| **Client-Server**     | Separation of concerns; client and server evolve independently      |
| **Uniform Interface** | Standard way to interact with resources                             |
| **Cacheable**         | Responses can be cached for performance                             |
| **Layered System**    | Client doesn't know if it's connected to end server or intermediary |

### What is a RESTful API?

A RESTful API is an API that follows REST principles. It uses:

- Standard HTTP methods
- URLs to identify resources
- JSON or XML for data exchange
- HTTP status codes for response status

---

## HTTP Fundamentals

### HTTP Methods (Verbs)

REST APIs use HTTP methods to indicate the action:

| Method     | Action              | Example                  |
| ---------- | ------------------- | ------------------------ |
| **GET**    | Retrieve data       | Get all users            |
| **POST**   | Create new data     | Create a new user        |
| **PUT**    | Update/replace data | Update user completely   |
| **PATCH**  | Partial update      | Update user's email only |
| **DELETE** | Remove data         | Delete a user            |

### CRUD Operations

| CRUD       | HTTP Method | Example                          |
| ---------- | ----------- | -------------------------------- |
| **C**reate | POST        | `POST /users`                    |
| **R**ead   | GET         | `GET /users` or `GET /users/123` |
| **U**pdate | PUT/PATCH   | `PUT /users/123`                 |
| **D**elete | DELETE      | `DELETE /users/123`              |

### HTTP Status Codes

| Code Range | Category      | Common Codes                                     |
| ---------- | ------------- | ------------------------------------------------ |
| **1xx**    | Informational | 100 Continue                                     |
| **2xx**    | Success       | 200 OK, 201 Created, 204 No Content              |
| **3xx**    | Redirection   | 301 Moved, 304 Not Modified                      |
| **4xx**    | Client Error  | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| **5xx**    | Server Error  | 500 Internal Error, 503 Service Unavailable      |

**Common Status Codes:**

| Code | Meaning      | When Used                      |
| ---- | ------------ | ------------------------------ |
| 200  | OK           | Successful GET, PUT            |
| 201  | Created      | Successful POST (new resource) |
| 204  | No Content   | Successful DELETE              |
| 400  | Bad Request  | Invalid request data           |
| 401  | Unauthorized | Authentication required        |
| 403  | Forbidden    | Not allowed even with auth     |
| 404  | Not Found    | Resource doesn't exist         |
| 500  | Server Error | Something broke on server      |

---

## REST API Structure

### URL Structure (Endpoints)

RESTful URLs are resource-based:

```
https://api.example.com/v1/users/123/orders
```

**Breakdown:**

- `https://` - Protocol
- `api.example.com` - Domain
- `/v1` - API version
- `/users` - Resource (collection)
- `/123` - Resource ID (specific user)
- `/orders` - Sub-resource (user's orders)

### Naming Conventions

| Good ✓              | Bad ✗            |
| ------------------- | ---------------- |
| `/users`            | `/getUsers`      |
| `/users/123`        | `/user?id=123`   |
| `/users/123/orders` | `/getUserOrders` |
| `/products`         | `/product-list`  |

**Rules:**

- Use nouns, not verbs
- Use plural names for collections
- Use lowercase
- Use hyphens for multi-word (if needed)

### Request Structure

**GET Request** (Retrieve):

```http
GET /api/users/123 HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>
Accept: application/json
```

**POST Request** (Create):

```http
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
}
```

### Response Structure

**Success Response:**

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

**Error Response:**

```json
{
  "status": "error",
  "message": "User not found",
  "code": "USER_NOT_FOUND"
}
```

---

## Data Formats

### JSON (JavaScript Object Notation)

Most common format for REST APIs:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "roles": ["user", "admin"],
  "profile": {
    "bio": "Developer",
    "location": "India"
  },
  "active": true
}
```

**JSON Data Types:** | Type | Example | |------|---------| | String | `"hello"` | | Number | `42`,
`3.14` | | Boolean | `true`, `false` | | Null | `null` | | Array | `[1, 2, 3]` | | Object |
`{"key": "value"}` |

### Headers

Common HTTP headers:

| Header          | Purpose                  | Example            |
| --------------- | ------------------------ | ------------------ |
| `Content-Type`  | Format of request body   | `application/json` |
| `Accept`        | Expected response format | `application/json` |
| `Authorization` | Authentication           | `Bearer token123`  |
| `Cache-Control` | Caching behavior         | `no-cache`         |

---

## Consuming REST APIs

### Using JavaScript (Fetch)

**GET Request:**

```javascript
fetch('https://api.example.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

**With async/await:**

```javascript
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

**POST Request:**

```javascript
async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer token123',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
}

// Usage
createUser({ name: 'John', email: 'john@example.com' });
```

### Using Python (Requests)

**GET Request:**

```python
import requests

response = requests.get('https://api.example.com/users')
data = response.json()
print(data)
```

**POST Request:**

```python
import requests

user_data = {
    'name': 'John',
    'email': 'john@example.com'
}

response = requests.post(
    'https://api.example.com/users',
    json=user_data,
    headers={'Authorization': 'Bearer token123'}
)

print(response.status_code)
print(response.json())
```

### Using cURL (Command Line)

**GET:**

```bash
curl https://api.example.com/users
```

**POST:**

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'
```

---

## Building REST APIs

### Example with Node.js (Express)

**Setup:**

```bash
npm init -y
npm install express
```

**Basic API:**

```javascript
const express = require('express');
const app = express();
app.use(express.json());

// In-memory data store
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' },
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(user);
  res.status(201).json(user);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Example with Python (Flask)

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

users = [
    {'id': 1, 'name': 'John', 'email': 'john@example.com'},
    {'id': 2, 'name': 'Jane', 'email': 'jane@example.com'}
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if not user:
        return jsonify({'message': 'User not found'}), 404
    return jsonify(user)

@app.route('/api/users', methods=['POST'])
def create_user():
    user = {
        'id': len(users) + 1,
        'name': request.json['name'],
        'email': request.json['email']
    }
    users.append(user)
    return jsonify(user), 201

if __name__ == '__main__':
    app.run(debug=True)
```

---

## Authentication

### Types of API Authentication

| Method           | How It Works                     | Use Case         |
| ---------------- | -------------------------------- | ---------------- |
| **API Key**      | Static key in header/query       | Simple apps      |
| **Basic Auth**   | Base64-encoded username:password | Simple, internal |
| **Bearer Token** | Token in Authorization header    | Common for apps  |
| **OAuth 2.0**    | Token-based, refresh tokens      | Third-party auth |
| **JWT**          | Self-contained JSON tokens       | Stateless auth   |

### API Key Example

**Request:**

```http
GET /api/data HTTP/1.1
X-API-Key: your-api-key-here
```

### Bearer Token Example

**Request:**

```http
GET /api/users HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### JWT (JSON Web Token)

JWT is a self-contained token with three parts:

```
header.payload.signature
```

**Example:**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE1MTYyMzkwMjJ9.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

## API Design Best Practices

### URL Design

| Practice                       | Good Example                             |
| ------------------------------ | ---------------------------------------- |
| Use plural nouns               | `/users`, `/products`                    |
| Nest related resources         | `/users/123/orders`                      |
| Use query params for filtering | `/users?role=admin`                      |
| Version your API               | `/v1/users`                              |
| Keep URLs simple               | `/orders/123` not `/getOrderById?id=123` |

### Response Design

```json
{
    "status": "success",
    "data": {
        "users": [...],
        "pagination": {
            "page": 1,
            "per_page": 20,
            "total": 100,
            "total_pages": 5
        }
    }
}
```

### Error Handling

```json
{
  "status": "error",
  "code": "VALIDATION_ERROR",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Pagination

**Query Parameters:**

```
GET /api/users?page=2&per_page=20
```

**Response:**

```json
{
    "data": [...],
    "pagination": {
        "page": 2,
        "per_page": 20,
        "total_items": 100,
        "total_pages": 5
    }
}
```

### Filtering and Sorting

```
GET /api/products?category=electronics&price_min=1000&sort=price_desc
```

---

## Testing APIs

### Tools for Testing

| Tool           | Type | Best For                        |
| -------------- | ---- | ------------------------------- |
| **Postman**    | GUI  | Visual testing, collections     |
| **Insomnia**   | GUI  | Clean interface                 |
| **cURL**       | CLI  | Quick tests, scripting          |
| **Swagger UI** | Web  | Documentation + testing         |
| **HTTPie**     | CLI  | Human-friendly cURL alternative |

### Postman Usage

1. Create a new request
2. Select HTTP method (GET, POST, etc.)
3. Enter URL
4. Add headers (if needed)
5. Add body (for POST/PUT)
6. Click Send
7. View response

### Automated Testing

**JavaScript (Jest + Supertest):**

```javascript
const request = require('supertest');
const app = require('./app');

describe('Users API', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Test', email: 'test@test.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test');
  });
});
```

---

## Common API Examples to Explore

### Public APIs for Practice

| API             | Purpose       | Auth        |
| --------------- | ------------- | ----------- |
| JSONPlaceholder | Fake REST API | None        |
| GitHub API      | GitHub data   | OAuth/Token |
| OpenWeatherMap  | Weather data  | API Key     |
| REST Countries  | Country info  | None        |
| PokeAPI         | Pokémon data  | None        |
| The Movie DB    | Movie data    | API Key     |

---

## Key Takeaways

1. **REST is an architecture**—not a protocol
2. **HTTP methods matter**—GET, POST, PUT, DELETE
3. **Status codes communicate**—200s success, 400s client error, 500s server error
4. **URLs are resource-based**—use nouns, not verbs
5. **JSON is standard**—for request and response bodies
6. **Authentication is essential**—API keys, tokens, OAuth
7. **Design for developers**—clear, consistent, well-documented
8. **Test your APIs**—Postman, cURL, automated tests
9. **Version your API**—/v1, /v2 for backward compatibility
10. **Practice with public APIs**—before building your own

---

## Frequently Asked Questions

### What's the difference between REST and GraphQL?

REST uses multiple endpoints for different resources. GraphQL uses one endpoint where clients
specify exactly what data they need. REST is simpler; GraphQL is more flexible for complex queries.

### Is REST the same as HTTP?

No. REST is an architectural style, HTTP is a protocol. REST commonly uses HTTP, but REST principles
could theoretically apply to other protocols.

### How do I secure my REST API?

Use HTTPS, implement authentication (JWT/OAuth), validate inputs, rate limit requests, and use
proper authorization for each endpoint.

### What's the difference between PUT and PATCH?

PUT replaces the entire resource. PATCH updates only specified fields. Use PUT when updating
everything, PATCH for partial updates.

### How do I handle API versioning?

Common methods: URL path (/v1/users), header (Accept-Version: v1), or query param (?version=1). URL
path is most common and visible.

---

_Learning backend development? Explore more resources on [Sproutern](/) for programming tutorials,
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
