# Sproutern Application Structure

This document provides a detailed guide to the project structure, including routing, data schemas,
and key files. Understanding this organization is essential for making changes confidently.

This project is built with **Next.js** using the **App Router**.

---

### How Routing Works (`src/app/`)

The core of your application's routing is managed by the directory structure inside `src/app/`.

- **File-based Routing**: Every folder inside `app/` creates a new URL path. A file named `page.tsx`
  inside any folder defines the user interface for that specific route.
  - `src/app/page.tsx` corresponds to the homepage (`/`).
  - `src/app/about/page.tsx` corresponds to the `/about` page.
- **Dynamic Routes**: Folders with names in square brackets, like `[internshipId]`, create dynamic
  routes. For example, `src/app/internships/[internshipId]/page.tsx` can handle any URL like
  `/internships/abc` or `/internships/123`.
- **Layouts**: The `layout.tsx` file defines a shared UI structure (like a navigation bar and
  footer) that wraps around all the pages within its directory and subdirectories.
  `src/app/layout.tsx` is the root layout for the entire application.

---

### Where are the Schemas?

The term "schema" can refer to two different things in this project: the database schema and the AI
input/output schemas.

1.  **Database Schema (`src/lib/database-schema.md`)**
    - This defines the structure of your data in the Firestore database.
    - I have created a detailed document outlining every collection (`users`, `studentProfiles`,
      `internships`, etc.) and the fields within them.
    - **You can view it here: [Database Schema](src/lib/database-schema.md)**

2.  **AI & Zod Schemas (`src/ai/flows/`)**
    - These schemas define the exact shape of the data that your AI functions expect as input and
      what they produce as output.
    - They are created using a library called **Zod**. You will find them inside each AI flow file.
      For example, in `src/ai/flows/applicant-summarizer.ts`, you'll see
      `SummarizeApplicantInputSchema` and `SummarizeApplicantOutputSchema`, which ensure that the
      data being passed to and from the AI is always in the correct format.

---

### Explanation of Most Important Files

Here are some of the most critical files in the project and what they do:

- **`src/app/layout.tsx`**
  - **Purpose**: The main shell of your entire application.
  - **Details**: It sets up the basic HTML structure, includes the global CSS file (`globals.css`),
    and renders the shared `Navbar` and `Footer` components. Every page in your app is rendered
    inside this layout.

- **`src/app/actions.ts`**
  - **Purpose**: The central hub for all server-side logic and data handling.
  - **Details**: This file uses Next.js "Server Actions." These are functions that run securely on
    the server, not in the user's browser. All interactions with the AI (Genkit) and the Firebase
    database (like creating an application or fetching data) are handled here. This is where you'll
    look to understand the core business logic.

- **`src/app/profile/page.tsx`**
  - **Purpose**: A key page that demonstrates user-specific functionality.
  - **Details**: This component checks if a user is logged in and what their `userType` is
    ('student' or 'startup'). It then conditionally renders the correct profile component
    (`StudentProfile` or `StartupProfile`), showing how to create personalized experiences.

- **`src/lib/firebase.ts`**
  - **Purpose**: Firebase configuration and initialization.
  - **Details**: This file reads your environment variables (your Firebase project credentials) and
    connects the application to all the necessary Firebase services: Authentication (for user
    login), Firestore (for the database), and Storage (for file uploads like resumes). Without this
    file, the application cannot connect to its backend.

- **`src/ai/flows/applicant-summarizer.ts`**
  - **Purpose**: A perfect example of a complete AI flow.
  - **Details**: This file shows how to:
    1.  Define input and output data shapes with Zod (`SummarizeApplicantInputSchema`).
    2.  Write a prompt that instructs the AI on its task.
    3.  Combine the prompt and logic into a Genkit flow.
    4.  Export a function (`summarizeApplicant`) that can be called from your Server Actions file.

- **`src/app/globals.css`**
  - **Purpose**: Global styling and application theme.
  - **Details**: This file contains the base styles for Tailwind CSS and, most importantly, defines
    the CSS variables (`--primary`, `--background`, etc.) that control your application's color
    scheme. To change the site's theme, you would edit the HSL values here.

This detailed breakdown should give you a solid understanding of how the different parts of the
application work together.
