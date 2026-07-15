# Vercel MCP Setup Guide — Sproutern

> A step-by-step guide to connecting Vercel MCP (Model Context Protocol) with OpenCode for AI-powered deployment management, log inspection, and Web Analytics.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step 1: Install Vercel CLI](#step-1-install-vercel-cli)
- [Step 2: Add Vercel MCP to OpenCode](#step-2-add-vercel-mcp-to-opencode)
- [Step 3: Authenticate via OAuth](#step-3-authenticate-via-oauth)
- [Step 4: Authenticate Vercel CLI](#step-4-authenticate-vercel-cli)
- [Step 5: Query Web Analytics](#step-5-query-web-analytics)
- [Available MCP Tools](#available-mcp-tools)
- [Troubleshooting](#troubleshooting)
- [Common Queries](#common-queries)

---

## Overview

Vercel MCP is Vercel's official remote MCP server at `https://mcp.vercel.com`. It allows AI coding assistants (via OpenCode) to:

- List and inspect projects and deployments
- Read build logs and runtime logs
- Check domain availability and purchase domains
- View and manage preview deployment comments
- Search Vercel documentation

Web Analytics data is available through the `vercel metrics` CLI command (v55+), which supports page views, visitors, custom events, and filtering by path, country, device, referrer, UTM parameters, and more.

---

## Prerequisites

- Node.js 18+
- A Vercel account with the **Sproutern** project deployed
- OpenCode installed and configured
- Project has `@vercel/analytics` installed (already present in `package.json`)

---

## Step 1: Install Vercel CLI

Install or upgrade to the latest version:

```bash
npm install -g vercel@latest
```

Verify the installation:

```bash
vercel --version
# Expected output: 55.0.0 or later
```

The Web Analytics `metrics` command requires v55+.

---

## Step 2: Add Vercel MCP to OpenCode

Edit your OpenCode config file at `~/.config/opencode/opencode.json`:

```json
{
  "mcp": {
    "vercel": {
      "type": "remote",
      "url": "https://mcp.vercel.com",
      "enabled": true
    }
  }
}
```

This registers Vercel MCP as a remote server. The `url` is the official Vercel MCP endpoint. No API key or token is needed here — authentication is handled via OAuth in the next step.

---

## Step 3: Authenticate via OAuth

Run the OpenCode MCP authentication command:

```bash
opencode mcp auth vercel
```

This will:
1. Open your default browser
2. Prompt you to sign in to Vercel (use the account that owns this project)
3. Request authorization for OpenCode to access your Vercel account

After authorizing, verify the connection:

```bash
opencode mcp list
```

Expected output:

```
MCP Servers
| • ✓ vercel connected
|       https://mcp.vercel.com
```

To inspect the stored credentials:

```bash
opencode mcp debug vercel
```

You should see:
- Auth status: ✓ authenticated
- An access token (starts with `vca_`)
- A refresh token (starts with `vcr_`)
- Expiry timestamp

---

## Step 4: Authenticate Vercel CLI

The MCP OAuth token cannot be reused with the Vercel CLI. Login separately:

```bash
vercel login
```

This opens a browser window. Complete the login flow with the same Vercel account.

To confirm:

```bash
vercel whoami
```

Set the team scope for this project:

```bash
vercel switch --scope YOUR_TEAM_SLUG
```

Or, if you're the only team member, `vercel switch` will show your personal team (usually named `<your-name>'s projects`).

---

## Step 5: Query Web Analytics

### 5.1 — Verify metrics are available

```bash
vercel metrics schema --scope YOUR_TEAM_SLUG
```

This lists all queryable metrics. Look for `vercel.analytics_pageview.count`.

### 5.2 — Basic page views (last 30 days)

```bash
vercel metrics vercel.analytics_pageview.count --since 30d --granularity 1d --project sproutern --prod --scope YOUR_TEAM_SLUG
```

Replace `YOUR_TEAM_SLUG` with your team slug (e.g., `YOUR_TEAM_SLUG`).

Expected output format:

```
Metric: vercel.analytics_pageview.count sum
Period: 2026-06-10 to 2026-07-10 (UTC)
Interval: 1d (UTC)
Filter: environment eq 'production'
Project: sproutern (YOUR_TEAM_SLUG)

  total    avg         min                max          
  4,713  152.0  74 at 07-10  399 at 06-13  

sparklines:
  ▂▂▂█▂▃▄▂▃▃▂▁▃▃▃▂▂▂▁▂▂▄▃▄▃▃▃▃▄▄▁
```

### 5.3 — Top pages

```bash
vercel metrics vercel.analytics_pageview.count --since 30d --group-by request_path --limit 10 --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### 5.4 — By country

```bash
vercel metrics vercel.analytics_pageview.count --since 30d --group-by country --limit 10 --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### 5.5 — By device type

```bash
vercel metrics vercel.analytics_pageview.count --since 30d --group-by device_type --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### 5.6 — By referrer hostname

```bash
vercel metrics vercel.analytics_pageview.count --since 30d --group-by referrer_hostname --limit 10 --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### 5.7 — Unique visitors

```bash
vercel metrics vercel.analytics_pageview.count --aggregation unique --since 30d --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### 5.8 — JSON output for automation

Append `--format json` to any query for machine-readable output:

```bash
vercel metrics vercel.analytics_pageview.count --since 30d --group-by country --limit 10 --project sproutern --prod --scope YOUR_TEAM_SLUG --format json
```

---

## Available MCP Tools

The Vercel MCP server (19+ tools, no analytics tools — use `vercel metrics` CLI instead):

| Category | Tools |
|----------|-------|
| **Teams & Projects** | `list_teams`, `list_projects`, `get_project` |
| **Deployments** | `list_deployments`, `get_deployment`, `get_deployment_build_logs`, `get_runtime_logs` |
| **Domains** | `check_domain_availability_and_price`, `buy_domain` |
| **Toolbar** | `list_toolbar_threads`, `get_toolbar_thread`, `change_toolbar_thread_resolve_status`, `reply_to_toolbar_thread`, `edit_toolbar_message`, `add_toolbar_reaction` |
| **Access** | `get_access_to_vercel_url`, `web_fetch_vercel_url` |
| **Deploy** | `deploy_to_vercel`, `use_vercel_cli` |
| **Docs** | `search_documentation` |

---

## Troubleshooting

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| `opencode mcp list` shows "needs authentication" | OAuth expired or not completed | Run `opencode mcp auth vercel` again |
| `opencode mcp auth vercel` hangs on "Starting OAuth flow" | Browser didn't open | Check for browser popup blocker. Run in a terminal that supports browser launch |
| `vercel metrics` command not found | CLI version too old | Run `npm install -g vercel@latest` |
| "User not found" with `--token` flag | Using MCP OAuth token instead of a personal access token | Don't use `--token` with MCP OAuth tokens — use `vercel login` instead |
| `vercel metrics` returns "no data" | Web Analytics not enabled | Ensure `@vercel/analytics` is in your dependencies and deployed. Check Vercel Dashboard → Project → Analytics |
| `opencode mcp debug vercel` shows "HTTP 401 Unauthorized" but "already authenticated" | Debug test doesn't send the auth header (known quirk) | Ignore — the actual MCP connection works. Test by using the tools |
| Multiple Vercel accounts | Wrong account authenticated | Run `opencode mcp logout vercel`, then `opencode mcp auth vercel` again and select the correct account |
| `vercel logout` (to switch accounts) | CLI logged into wrong account | Run `vercel logout` then `vercel login` again |

---

## Common Queries

### Week-over-week comparison

```bash
vercel metrics vercel.analytics_pageview.count --since 14d --granularity 7d --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### Filter by specific page

```bash
vercel metrics vercel.analytics_pageview.count --filter "startswith(request_path, '/blog')" --since 30d --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### Traffic excluding a country

```bash
vercel metrics vercel.analytics_pageview.count --filter "country ne 'US'" --group-by country --since 30d --limit 10 --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### Custom events (if configured in app)

```bash
vercel metrics vercel.analytics_event.count --group-by event_name --since 7d --limit 20 --project sproutern --prod --scope YOUR_TEAM_SLUG
```

### Team-wide comparison (all projects)

```bash
vercel metrics vercel.analytics_pageview.count --all --group-by project_name --since 7d --prod --scope YOUR_TEAM_SLUG
```

---

## Reference

- [Vercel MCP Documentation](https://vercel.com/docs/agent-resources/vercel-mcp)
- [Vercel CLI metrics command](https://vercel.com/docs/cli/metrics)
- [OpenCode MCP Configuration](https://opencode.ai/docs/mcp-servers/)
- [OpenCode MCP OAuth Guide](https://opencode.ai/docs/mcp-servers/#oauth)
- [Vercel Web Analytics](https://vercel.com/docs/analytics)
