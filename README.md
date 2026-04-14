# Harness

Harness is a Nuxt UI + Nuxt Content documentation site about how modern AI coding agents are built.

It compares **Codex CLI**, **Claude Code**, **OpenCode**, **Pi**, and **Hermes** across architecture, execution loops, tool systems, search, editing, security, permissions, context management, prompt assembly, model integration, and multi-agent behavior.

## Project Structure

```text
.
├── .github/workflows/      # CI and GitHub Pages deployment
├── app/                    # Nuxt app shell, components, layouts, and pages
├── content/                # Long-form documentation chapters and appendix pages
├── public/                 # Static assets such as favicons
├── content.config.ts       # Nuxt Content collections
├── nuxt.config.ts          # Nuxt app and module configuration
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript config
```

## Tech Stack

- Nuxt 4
- Nuxt UI
- Nuxt Content
- Nuxt Image
- nuxt-og-image
- nuxt-llms
- Tailwind CSS v4
- TypeScript
- pnpm
- GitHub Actions + GitHub Pages

| Agent | Language | Core Runtime Shape | Tooling Model | Sandbox / Security Model | Context Strategy | Multi-Agent Support |
|---|---|---|---|---|---|---|
| Codex CLI | Rust | Native CLI | Structured built-in tools + shell flows | OS/process-level controls with approval-driven execution | Session history with compaction and continuation | Limited / task-oriented delegation |
| Claude Code | TypeScript | Node.js CLI | Rich tool registry with strong product-level affordances | Approval rules + sandbox-aware execution modes | Transcript management with summarization and carry-forward context | Supports sub-agents / delegated flows |
| OpenCode | TypeScript | Node.js app/CLI | Extensible tool surface with app-layer orchestration | Policy-driven execution with approvals and runtime controls | Persistent conversational context with session orchestration | Strong multi-agent orientation |
| Pi | TypeScript | Local coding-agent runtime | API/tool-call model with skills, extensions, and custom tools | Secure Workspace sandboxing plus host-broker boundaries | Session persistence, truncation, and tool-result-aware transcript handling | Single-agent by default, extensible by architecture |
| Hermes | Python | Agent framework / service runtime | Python tool abstractions and agent-task composition | Framework-level controls, environment isolation, and operator-managed boundaries | Memory and runtime state management across agent tasks | Designed for multi-agent coordination |
