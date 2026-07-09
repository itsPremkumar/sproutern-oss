# Complete System Design Interview Cheatsheet

> **Goal**: Quick reference for system design interviews covering scalability, databases, caching,
> and common architectures.

---

## 📖 Table of Contents

1.  [Key Concepts](#key-concepts)
2.  [Step-by-Step Framework](#framework)
3.  [Scalability Patterns](#scalability)
4.  [Database Design](#databases)
5.  [Caching Strategies](#caching)
6.  [Load Balancing](#load-balancing)
7.  [Message Queues](#message-queues)
8.  [Common System Designs](#common-designs)
9.  [Numbers Every Developer Should Know](#numbers)
10. [Interview Tips](#tips)

---

## 🔑 1. Key Concepts

### Scalability Types

| Type                   | Description                                   | Example                               |
| ---------------------- | --------------------------------------------- | ------------------------------------- |
| **Vertical Scaling**   | Add more power to existing machine (CPU, RAM) | Upgrade from 8GB to 32GB RAM          |
| **Horizontal Scaling** | Add more machines                             | Add more servers behind load balancer |

### CAP Theorem

You can only have **2 out of 3**:

- **C**onsistency: Every read receives the most recent write
- **A**vailability: Every request receives a response
- **P**artition Tolerance: System works despite network failures

**Common Choices:**

- **CP**: MongoDB, Redis, HBase (banks, transactions)
- **AP**: Cassandra, DynamoDB, CouchDB (social media, recommendations)

### ACID vs BASE

| ACID (Traditional SQL) | BASE (NoSQL)         |
| ---------------------- | -------------------- |
| Atomicity              | Basically Available  |
| Consistency            | Soft state           |
| Isolation              | Eventual consistency |
| Durability             |                      |

---

## 📋 2. Step-by-Step Framework (45 min interview)

### Step 1: Requirements Clarification (5 min)

Ask clarifying questions:

- Who are the users? How many?
- What are the core features?
- What's the scale? (DAU, requests/second)
- What's acceptable latency?
- Read-heavy or write-heavy?

### Step 2: Back-of-Envelope Estimation (5 min)

- **Users**: 100M DAU
- **Reads/Writes ratio**: 100:1
- **Storage**: 100M users × 1KB per record = 100GB
- **Bandwidth**: 100K requests/sec × 1KB = 100MB/s

### Step 3: High-Level Design (10 min)

Draw main components:

- Clients (Web, Mobile)
- Load Balancer
- Web Servers
- Application Servers
- Database
- Cache
- CDN

### Step 4: Deep Dive (15 min)

Pick 2-3 critical components and go deeper:

- Database schema
- API design
- Caching strategy
- Data partitioning

### Step 5: Identify Bottlenecks (5 min)

- Single points of failure?
- How to handle 10x traffic?
- Data consistency issues?

### Step 6: Wrap Up (5 min)

- Summarize design
- Trade-offs made
- Future improvements

---

## 📈 3. Scalability Patterns

### Microservices Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   User      │────→│  API        │────→│  Auth       │
│   Service   │     │  Gateway    │     │  Service    │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │             │
              ┌─────▼─────┐ ┌─────▼─────┐
              │  Order    │ │  Payment  │
              │  Service  │ │  Service  │
              └───────────┘ └───────────┘
```

### Database Sharding

**Horizontal Partitioning** - Split data across multiple databases:

| Strategy            | Description                        | Use Case          |
| ------------------- | ---------------------------------- | ----------------- |
| **Range-based**     | Shard by ID ranges (1-1M, 1M-2M)   | Time-series data  |
| **Hash-based**      | hash(user_id) % num_shards         | Even distribution |
| **Geographic**      | Shard by region                    | Multi-region apps |
| **Directory-based** | Lookup service maps keys to shards | Complex routing   |

### Replication

```
┌──────────────┐
│    Master    │ ◄── All Writes
└──────┬───────┘
       │
    Replicate
       │
┌──────┴───────┐
│              │
▼              ▼
┌──────────┐  ┌──────────┐
│  Slave 1 │  │  Slave 2 │  ◄── All Reads
└──────────┘  └──────────┘
```

---

## 🗄️ 4. Database Design

### SQL vs NoSQL Decision Matrix

| Choose SQL when          | Choose NoSQL when               |
| ------------------------ | ------------------------------- |
| ACID compliance required | High write throughput           |
| Complex joins needed     | Flexible schema                 |
| Data integrity critical  | Horizontal scaling              |
| Structured data          | Unstructured data (JSON, media) |

### Common Database Choices

| Database          | Type        | Best For                           |
| ----------------- | ----------- | ---------------------------------- |
| **PostgreSQL**    | Relational  | Complex queries, transactions      |
| **MySQL**         | Relational  | Web applications, read-heavy       |
| **MongoDB**       | Document    | Flexible schema, rapid development |
| **Cassandra**     | Wide-column | Time-series, high availability     |
| **Redis**         | Key-Value   | Caching, sessions, leaderboards    |
| **Elasticsearch** | Search      | Full-text search, logs             |
| **Neo4j**         | Graph       | Social networks, recommendations   |

### Indexing Strategies

```sql
-- B-Tree Index (default, good for range queries)
CREATE INDEX idx_user_email ON users(email);

-- Composite Index (multi-column)
CREATE INDEX idx_user_status_date ON orders(user_id, status, created_at);

-- Partial Index (for specific conditions)
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;
```

**Index Tips:**

- Index columns used in WHERE, JOIN, ORDER BY
- Composite indexes: put high-cardinality columns first
- Don't over-index (slows writes)

---

## 💾 5. Caching Strategies

### Cache Patterns

| Pattern           | How it Works                                  | Pros                        | Cons                   |
| ----------------- | --------------------------------------------- | --------------------------- | ---------------------- |
| **Cache-Aside**   | App checks cache, if miss → DB → update cache | Simple, good for read-heavy | Cache miss = 2 trips   |
| **Write-Through** | Write to cache AND DB                         | Always consistent           | Higher write latency   |
| **Write-Behind**  | Write to cache, async write to DB             | Fast writes                 | Risk of data loss      |
| **Read-Through**  | Cache handles DB reads                        | Simple app logic            | Cache is critical path |

### Cache-Aside Pattern (Most Common)

```python
def get_user(user_id):
    # 1. Check cache first
    user = cache.get(f"user:{user_id}")
    if user:
        return user

    # 2. Cache miss - fetch from DB
    user = db.query("SELECT * FROM users WHERE id = ?", user_id)

    # 3. Store in cache for next time
    cache.set(f"user:{user_id}", user, ttl=3600)

    return user
```

### Eviction Policies

| Policy   | Description           | Use Case              |
| -------- | --------------------- | --------------------- |
| **LRU**  | Least Recently Used   | General purpose       |
| **LFU**  | Least Frequently Used | Popular content stays |
| **FIFO** | First In First Out    | Simple, predictable   |
| **TTL**  | Time-To-Live expiry   | Session data          |

### Redis Data Structures

```bash
# String - simple key-value
SET user:1001:name "John"
GET user:1001:name

# Hash - object/map
HSET user:1001 name "John" age 25
HGETALL user:1001

# List - queue
LPUSH notifications:user:1001 "New message"
RPOP notifications:user:1001

# Set - unique items
SADD followers:user:1001 "user:1002" "user:1003"
SISMEMBER followers:user:1001 "user:1002"

# Sorted Set - leaderboard
ZADD leaderboard 100 "user:1001"
ZRANGE leaderboard 0 9 WITHSCORES
```

---

## ⚖️ 6. Load Balancing

### Load Balancer Algorithms

| Algorithm                | Description                             | Use Case              |
| ------------------------ | --------------------------------------- | --------------------- |
| **Round Robin**          | Sequential distribution                 | Equal server capacity |
| **Weighted Round Robin** | Based on server capacity                | Mixed hardware        |
| **Least Connections**    | Route to server with fewest connections | Varying request times |
| **IP Hash**              | Same client → same server               | Session affinity      |
| **Least Response Time**  | Route to fastest server                 | Performance-critical  |

### Layer 4 vs Layer 7

| Layer 4 (Transport) | Layer 7 (Application) |
| ------------------- | --------------------- |
| TCP/UDP level       | HTTP/HTTPS level      |
| Faster, simpler     | Can inspect content   |
| Less flexible       | URL-based routing     |
| HAProxy, AWS NLB    | Nginx, AWS ALB        |

---

## 📨 7. Message Queues

### When to Use

- Decouple services
- Handle traffic spikes
- Async processing
- Retry failed operations

### Queue vs Pub/Sub

| Queue (Point-to-Point)   | Pub/Sub (Broadcast)  |
| ------------------------ | -------------------- |
| One consumer per message | Multiple subscribers |
| RabbitMQ, SQS            | Kafka, Redis Pub/Sub |
| Task queues              | Event broadcasting   |

### Common Tools

| Tool              | Best For                              |
| ----------------- | ------------------------------------- |
| **Apache Kafka**  | High-throughput event streaming, logs |
| **RabbitMQ**      | Complex routing, traditional queuing  |
| **AWS SQS**       | Simple, managed, serverless           |
| **Redis Streams** | Real-time, low latency                |

---

## 🏗️ 8. Common System Designs

### URL Shortener (bit.ly)

**Key Components:**

- Base62 encoding (a-z, A-Z, 0-9)
- Key-Value store (DynamoDB/Redis)
- Counter service for unique IDs

**API:**

```
POST /shorten { "url": "https://..." } → { "short": "abc123" }
GET  /abc123 → 301 Redirect to original URL
```

**Design Decisions:**

- 6 characters = 62^6 = 56 billion unique URLs
- Use counter + base62 for unique short codes
- Cache popular URLs

---

### Twitter Feed

**Key Components:**

- User Service, Tweet Service, Timeline Service
- Fan-out on write (push to followers' timelines)
- Redis for timeline caching

**Trade-offs:**

- Celebrities (10M+ followers) → Fan-out on read
- Regular users → Fan-out on write
- Hybrid approach for optimal performance

---

### WhatsApp Messaging

**Key Components:**

- WebSocket for real-time
- Message Queue for delivery
- Cassandra for message storage

**Delivery Flow:**

1. User A sends message
2. Server stores in DB
3. Push to User B if online
4. Queue if offline, deliver on reconnect

---

### Netflix Streaming

**Key Components:**

- CDN for video delivery
- Adaptive bitrate streaming
- Recommendation engine (ML)
- Microservices architecture

**Video Processing:**

- Transcode to multiple resolutions
- Chunk videos for streaming
- Store on S3, cache on CDN

---

## 📊 9. Numbers Every Developer Should Know

### Latency Comparison

| Operation                    | Time   |
| ---------------------------- | ------ |
| L1 cache reference           | 0.5 ns |
| L2 cache reference           | 7 ns   |
| Main memory reference        | 100 ns |
| SSD random read              | 150 μs |
| HDD seek                     | 10 ms  |
| Same datacenter round trip   | 0.5 ms |
| Cross-continental round trip | 150 ms |

### Throughput Estimates

| System              | Capacity     |
| ------------------- | ------------ |
| SSD                 | 200-500 MB/s |
| 1 Gbps Network      | 125 MB/s     |
| HDD                 | 100 MB/s     |
| Database (per node) | 10K-50K QPS  |
| Redis               | 100K+ QPS    |

### Storage Estimates

| Data Type              | Size                |
| ---------------------- | ------------------- |
| 1 character (ASCII)    | 1 byte              |
| 1 character (UTF-8)    | 1-4 bytes           |
| UUID                   | 16 bytes            |
| Timestamp              | 8 bytes             |
| Tweet (280 chars)      | ~1 KB with metadata |
| Profile photo          | 100 KB - 1 MB       |
| 1 minute video (1080p) | 100-200 MB          |

---

## 💡 10. Interview Tips

### Do's

1. **Ask clarifying questions** - Don't assume
2. **Think out loud** - Show your thought process
3. **Start simple** - Iterate and improve
4. **Discuss trade-offs** - There's no perfect solution
5. **Use real numbers** - Back-of-envelope calculations
6. **Draw diagrams** - Visualize the architecture

### Don'ts

1. **Don't jump to solution** - Understand requirements first
2. **Don't over-engineer** - Start with MVP
3. **Don't ignore scale** - Always consider 10x growth
4. **Don't forget monitoring** - Logs, metrics, alerts
5. **Don't be silent** - Communicate constantly

### Common Follow-up Questions

- "How would you handle 10x traffic?"
- "What happens if X fails?"
- "How do you ensure data consistency?"
- "How would you debug this in production?"
- "What metrics would you monitor?"

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────┐
│                  SYSTEM DESIGN CHECKLIST               │
├─────────────────────────────────────────────────────────┤
│ □ Clarify requirements & constraints                    │
│ □ Estimate scale (users, data, QPS)                    │
│ □ Draw high-level architecture                         │
│ □ Design data model & API                              │
│ □ Choose database (SQL vs NoSQL)                       │
│ □ Add caching layer                                    │
│ □ Implement load balancing                             │
│ □ Consider message queues                              │
│ □ Plan for failures (replication, backups)            │
│ □ Discuss monitoring & alerting                        │
└─────────────────────────────────────────────────────────┘
```

---

**Remember**: There's no single correct answer in system design. What matters is your thought
process, communication, and ability to make reasonable trade-offs.

Good luck!
