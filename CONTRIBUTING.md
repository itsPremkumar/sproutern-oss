# Contributing to Sproutern

First off, thank you for considering contributing to Sproutern! We welcome
contributions from everyone, whether you're fixing a bug, adding a feature,
improving documentation, or writing tests.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Style Guides](#style-guides)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code.

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **yarn**

### Setup

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/itsPremkumar/sproutern-open-source.git
   cd sproutern-open-source
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Firebase credentials (see [Firebase Setup](./docs/FIREBASE_SETUP.md))

5. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:9002](http://localhost:9002)

## How to Contribute

### Types of Contributions

- **Bug Fixes**: Submit a PR with a clear description of the bug and fix
- **New Features**: Open a feature request issue first to discuss
- **Documentation**: Improvements to README, docs, comments, or this guide
- **Tools & Games**: Add new tools in `src/app/tools/` or games in `src/app/games/`
- **SEO & Content**: Improve metadata, structured data, or add blog content
- **Tests**: Add unit tests (Jest) or E2E tests (Playwright)

### Finding Issues

Look for issues labeled:
- `good first issue` — perfect for newcomers
- `help wanted` — contributions needed
- `bug` — something broken that needs fixing

## Development Workflow

1. Create a branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
3. Run tests:

   ```bash
   npm run typecheck
   npm run lint
   npm run test
   ```

4. Commit your changes (we follow conventional commits):

   ```bash
   git commit -m "feat: add new resume tool"
   git commit -m "fix: correct login redirect"
   git commit -m "docs: update API documentation"
   ```

5. Push and open a Pull Request

## Style Guides

### Code Style

- **TypeScript**: Strict mode enabled, prefer types over interfaces for objects
- **React**: Use functional components with hooks, avoid class components
- **CSS**: Use Tailwind utility classes; use custom CSS only when necessary
- **Formatting**: Prettier is configured — run `npm run format` before committing

### Naming Conventions

- **Files & folders**: `kebab-case` for files, `PascalCase` for components
- **Functions**: `camelCase`
- **Types & Interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE` for environment variables, `camelCase` for others

### Project Structure

- `src/app/` — Next.js App Router pages and API routes
- `src/components/` — Reusable UI components
- `src/lib/` — Utilities, Firebase config, helpers
- `src/ai/` — Genkit AI flows and configurations
- `src/hooks/` — Custom React hooks
- `src/types/` — TypeScript type definitions
- `src/content/` — Markdown content (blogs, guides)
- `scripts/` — Automation and maintenance scripts

## Pull Request Process

1. **Ensure your PR addresses an issue** — if no issue exists, open one first
2. **Keep PRs focused** — one feature/fix per PR
3. **Update documentation** — if you change behavior, update related docs
4. **Add tests** — for new features and bug fixes
5. **Pass all checks** — typecheck, lint, and tests must pass
6. **Describe your changes** — clear title and description in the PR

### PR Review Process

1. Maintainers will review your PR within a few days
2. Address any requested changes
3. Once approved, a maintainer will merge your PR

## Need Help?

- Open a [Discussion](https://github.com/itsPremkumar/sproutern-open-source/discussions)
- Check the [docs/](./docs/) directory
- Ask in the relevant issue or PR

Thank you for contributing to Sproutern!
