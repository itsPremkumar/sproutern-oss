# Git & GitHub Complete Reference Guide

> **Goal**: Master Git from basics to advanced workflows for professional development.

---

## 📖 Table of Contents

1.  [Setup & Configuration](#setup)
2.  [Basic Commands](#basic-commands)
3.  [Branching & Merging](#branching)
4.  [Remote Repositories](#remote)
5.  [Advanced Operations](#advanced)
6.  [Undoing Changes](#undoing)
7.  [Git Workflows](#workflows)
8.  [GitHub Features](#github)
9.  [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)
11. [Cheat Sheet](#cheat-sheet)

---

## 🔧 1. Setup & Configuration

### Initial Setup

```bash
# Set your identity (required for commits)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Set default editor (VS Code)
git config --global core.editor "code --wait"

# Enable colorful output
git config --global color.ui auto

# View all configs
git config --list
```

### SSH Key Setup (Recommended)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key (add this to GitHub Settings > SSH Keys)
cat ~/.ssh/id_ed25519.pub
# OR on macOS
pbcopy < ~/.ssh/id_ed25519.pub

# Test connection
ssh -T git@github.com
```

### Useful Aliases

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
git config --global alias.lg "log --oneline --graph --decorate"
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
```

After setting up, use:

```bash
git st   # instead of git status
git co   # instead of git checkout
git lg   # pretty log view
```

---

## 📝 2. Basic Commands

### Repository Initialization

```bash
# Create new repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git

# Clone with different folder name
git clone https://github.com/user/repo.git my-folder

# Clone specific branch
git clone -b develop https://github.com/user/repo.git

# Shallow clone (faster, less history)
git clone --depth 1 https://github.com/user/repo.git
```

### Staging & Committing

```bash
# Check status
git status

# Add specific file
git add filename.js

# Add all changes
git add .
git add -A

# Add interactively (choose hunks)
git add -p

# Commit with message
git commit -m "feat: add user authentication"

# Add and commit together (tracked files only)
git commit -am "fix: resolve login bug"

# Amend last commit
git commit --amend

# Amend without changing message
git commit --amend --no-edit
```

### Viewing History

```bash
# View commit history
git log

# Compact log
git log --oneline

# With graph
git log --oneline --graph --all

# Last N commits
git log -5

# View specific file history
git log -- path/to/file.js

# Search commit messages
git log --grep="authentication"

# View changes in log
git log -p

# Show who changed each line
git blame filename.js
```

### Differences

```bash
# Changes not yet staged
git diff

# Changes staged for commit
git diff --staged
git diff --cached

# Compare two branches
git diff main..feature-branch

# Compare specific file
git diff HEAD -- path/to/file.js

# Summary of changes
git diff --stat
```

---

## 🌿 3. Branching & Merging

### Branch Basics

```bash
# List local branches
git branch

# List all branches (including remote)
git branch -a

# Create new branch
git branch feature/login

# Switch to branch
git checkout feature/login
# OR (Git 2.23+)
git switch feature/login

# Create and switch in one command
git checkout -b feature/login
git switch -c feature/login

# Rename branch
git branch -m old-name new-name

# Delete branch (safe)
git branch -d feature/login

# Delete branch (force)
git branch -D feature/login

# Delete remote branch
git push origin --delete feature/login
```

### Merging

```bash
# Merge branch into current branch
git checkout main
git merge feature/login

# Merge with commit message
git merge feature/login -m "Merge: add login feature"

# Abort merge (if conflicts)
git merge --abort

# Continue after resolving conflicts
git add .
git merge --continue
```

### Handling Merge Conflicts

When you see a conflict:

```
<<<<<<< HEAD
Your current branch changes
=======
Incoming branch changes
>>>>>>> feature-branch
```

**Steps to resolve:**

1. Edit the file to resolve conflict
2. Remove conflict markers (`<<<<`, `====`, `>>>>`)
3. Stage the resolved file: `git add filename`
4. Complete the merge: `git commit`

### Rebasing

```bash
# Rebase current branch onto main
git checkout feature/login
git rebase main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Continue after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort

# Skip current commit during rebase
git rebase --skip
```

**Interactive Rebase Options:**

- `pick` - keep commit
- `reword` - keep but edit message
- `edit` - pause to amend
- `squash` - combine with previous commit
- `fixup` - like squash but discard message
- `drop` - remove commit

---

## 🌐 4. Remote Repositories

### Remote Basics

```bash
# View remotes
git remote -v

# Add remote
git remote add origin https://github.com/user/repo.git

# Change remote URL
git remote set-url origin git@github.com:user/repo.git

# Remove remote
git remote remove origin

# Rename remote
git remote rename origin upstream
```

### Fetch, Pull & Push

```bash
# Fetch updates (doesn't merge)
git fetch origin

# Fetch all remotes
git fetch --all

# Pull (fetch + merge)
git pull origin main

# Pull with rebase (cleaner history)
git pull --rebase origin main

# Push to remote
git push origin main

# Push and set upstream
git push -u origin feature/login
# Then just: git push

# Push all branches
git push --all origin

# Push tags
git push --tags
```

### Tracking Branches

```bash
# Set upstream for existing branch
git branch --set-upstream-to=origin/main main

# Create tracking branch from remote
git checkout --track origin/feature-branch

# View tracking info
git branch -vv
```

---

## 🔮 5. Advanced Operations

### Stashing

```bash
# Stash current changes
git stash

# Stash with message
git stash save "WIP: login feature"

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{2}

# Drop specific stash
git stash drop stash@{0}

# Clear all stashes
git stash clear

# Create branch from stash
git stash branch new-branch stash@{0}
```

### Cherry-Pick

```bash
# Apply specific commit to current branch
git cherry-pick abc123

# Cherry-pick without committing
git cherry-pick --no-commit abc123

# Cherry-pick range of commits
git cherry-pick abc123..def456

# Continue after conflict
git cherry-pick --continue

# Abort cherry-pick
git cherry-pick --abort
```

### Tags

```bash
# List tags
git tag

# Create lightweight tag
git tag v1.0.0

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Version 1.0.0 release"

# Tag specific commit
git tag -a v1.0.0 abc123

# Push single tag
git push origin v1.0.0

# Push all tags
git push --tags

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0
```

### Submodules

```bash
# Add submodule
git submodule add https://github.com/user/lib.git libs/lib

# Clone with submodules
git clone --recurse-submodules https://github.com/user/repo.git

# Initialize submodules after clone
git submodule init
git submodule update

# Update all submodules
git submodule update --remote

# Remove submodule
git submodule deinit -f libs/lib
git rm -f libs/lib
```

---

## ↩️ 6. Undoing Changes

### Unstage Changes

```bash
# Unstage specific file
git restore --staged filename.js
# OR (older syntax)
git reset HEAD filename.js

# Unstage all
git reset HEAD
```

### Discard Local Changes

```bash
# Discard changes in working directory
git restore filename.js
# OR (older syntax)
git checkout -- filename.js

# Discard all changes
git restore .
git checkout -- .
```

### Reset Commits

```bash
# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Mixed reset (keep changes unstaged) - DEFAULT
git reset HEAD~1
git reset --mixed HEAD~1

# Hard reset (discard everything)
git reset --hard HEAD~1

# Reset to specific commit
git reset --hard abc123

# Reset to match remote
git reset --hard origin/main
```

### Revert (Safe for Shared History)

```bash
# Create new commit that undoes specific commit
git revert abc123

# Revert without committing
git revert --no-commit abc123

# Revert merge commit
git revert -m 1 abc123
```

### Recovery

```bash
# View history of HEAD changes
git reflog

# Recover deleted branch/commits
git checkout -b recovered-branch abc123

# Recover file from specific commit
git checkout abc123 -- path/to/file.js
```

---

## 🔄 7. Git Workflows

### Git Flow

**Branches:**

- `main` - Production code
- `develop` - Development branch
- `feature/*` - New features
- `release/*` - Release preparation
- `hotfix/*` - Emergency fixes

```
main ────●────────────●────────────●─── (releases)
          \          /
develop ───●────●────●────●────●───── (integration)
                \  /
feature/login ───●────●──────────────── (feature work)
```

**Commands:**

```bash
# Start new feature
git checkout develop
git checkout -b feature/new-feature

# Finish feature
git checkout develop
git merge feature/new-feature

# Start release
git checkout develop
git checkout -b release/1.0.0

# Finish release
git checkout main
git merge release/1.0.0
git tag v1.0.0
git checkout develop
git merge release/1.0.0

# Hotfix
git checkout main
git checkout -b hotfix/critical-bug
# Fix and commit
git checkout main
git merge hotfix/critical-bug
git tag v1.0.1
git checkout develop
git merge hotfix/critical-bug
```

### GitHub Flow (Simpler)

**Branches:**

- `main` - Always deployable
- `feature/*` - All work happens here

```bash
# 1. Create branch
git checkout -b feature/add-login

# 2. Make commits
git add .
git commit -m "feat: add login form"

# 3. Push and create PR
git push -u origin feature/add-login
# → Create Pull Request on GitHub

# 4. After review, merge PR on GitHub

# 5. Delete branch locally
git checkout main
git pull
git branch -d feature/add-login
```

### Trunk-Based Development

- Single `main` branch
- Short-lived feature branches (< 1 day)
- Feature flags for incomplete work
- CI/CD deploys from main

---

## 🐙 8. GitHub Features

### Pull Requests

**Best Practices:**

- Clear title: `feat: add user authentication`
- Descriptive body with context
- Link related issues: `Closes #123`
- Request reviews from team
- Respond to feedback promptly

**PR Description Template:**

```markdown
## What

Brief description of changes

## Why

Reason for the change

## How

Implementation details

## Testing

How to test these changes

## Screenshots

If applicable

## Checklist

- [ ] Tests added
- [ ] Documentation updated
- [ ] No console errors
```

### Issues

**Good Issue Title:** `Bug: Login fails on Safari`

**Issue Labels:**

- `bug` - Something broken
- `enhancement` - New feature
- `documentation` - Docs improvement
- `good first issue` - Beginner friendly
- `help wanted` - Need assistance
- `priority: high` - Urgent

### GitHub Actions (CI/CD)

**Example workflow** (`.github/workflows/ci.yml`):

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build
```

### GitHub CLI

```bash
# Install: brew install gh (macOS)

# Login
gh auth login

# Create repo
gh repo create my-repo --public

# Clone
gh repo clone owner/repo

# Create PR
gh pr create --title "feat: add login" --body "Description"

# View PRs
gh pr list

# Check out PR locally
gh pr checkout 123

# Create issue
gh issue create --title "Bug: login fails" --body "Details"
```

---

## ✅ 9. Best Practices

### Commit Messages

**Format:**

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting (no code change)
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**

```
feat(auth): add JWT token validation

fix(api): handle null response from user endpoint

docs(readme): update installation instructions

refactor(utils): extract date formatting to helper
```

### .gitignore

```gitignore
# Dependencies
node_modules/
vendor/

# Build output
dist/
build/
*.min.js

# Environment
.env
.env.local
.env.*.local

# IDE
.idea/
.vscode/
*.swp

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Test coverage
coverage/

# Temp files
*.tmp
*.temp
```

### Branch Naming

```
feature/add-user-authentication
feature/JIRA-123-payment-integration

fix/login-redirect-bug
fix/JIRA-456-null-pointer

hotfix/security-vulnerability

release/v1.2.0

docs/update-api-readme

refactor/cleanup-utils
```

---

## 🔧 10. Troubleshooting

### Common Issues

**"Permission denied (publickey)"**

```bash
# Check SSH key is added
ssh-add -l

# Add your key
ssh-add ~/.ssh/id_ed25519

# Test connection
ssh -T git@github.com
```

**"Your branch has diverged"**

```bash
# Option 1: Merge remote into local
git pull origin main

# Option 2: Rebase local onto remote
git pull --rebase origin main

# Option 3: Force push (ONLY if you're sure)
git push --force-with-lease origin main
```

**"Merge conflict"**

```bash
# See conflicted files
git status

# After manually resolving:
git add resolved-file.js
git commit
```

**"Detached HEAD state"**

```bash
# Create branch to save work
git checkout -b save-my-work

# OR return to branch
git checkout main
```

**"fatal: refusing to merge unrelated histories"**

```bash
git pull origin main --allow-unrelated-histories
```

**Undo last push (dangerous!)**

```bash
git reset --hard HEAD~1
git push --force-with-lease origin main
```

---

## 📋 11. Cheat Sheet

### Daily Commands

```
┌─────────────────────────────────────────────────────────┐
│                    GIT QUICK REFERENCE                 │
├─────────────────────────────────────────────────────────┤
│ git status          │ Check current state             │
│ git add .           │ Stage all changes               │
│ git commit -m "msg" │ Commit with message             │
│ git push            │ Push to remote                  │
│ git pull            │ Fetch and merge                 │
│ git log --oneline   │ View history                    │
├─────────────────────────────────────────────────────────┤
│ git branch name     │ Create branch                   │
│ git checkout name   │ Switch branch                   │
│ git merge name      │ Merge branch                    │
│ git branch -d name  │ Delete branch                   │
├─────────────────────────────────────────────────────────┤
│ git stash           │ Save work temporarily           │
│ git stash pop       │ Restore stashed work            │
│ git reset HEAD~1    │ Undo last commit (keep changes) │
│ git revert abc123   │ Undo specific commit (safe)     │
└─────────────────────────────────────────────────────────┘
```

### Workflow Summary

```
1. git pull                    # Get latest
2. git checkout -b feature/x   # Create branch
3. # Make changes
4. git add .                   # Stage
5. git commit -m "feat: ..."   # Commit
6. git push -u origin feature/x # Push
7. # Create Pull Request on GitHub
8. # After merge:
9. git checkout main
10. git pull
11. git branch -d feature/x
```

---

**Master these commands, and you'll navigate any codebase with confidence!** 🚀
