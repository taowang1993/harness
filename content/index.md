---
title: "Harness"
description: "A technical guide to how modern AI coding agents are built."
seo:
  title: "Harness"
  description: "A technical guide to how modern AI coding agents are built."
---

<div class="mx-auto max-w-3xl space-y-4 text-center">
  <p>Harness is a technical guide to how modern AI coding agents are built.</p>
  <p>This documentation compares <strong>Codex CLI</strong>, <strong>Claude Code</strong>, <strong>OpenCode</strong>, <strong>Pi</strong>, and <strong>Hermes</strong> across architecture, execution loops, tool systems, search, editing, security, permissions, context management, prompt assembly, model integration, and multi-agent behavior.</p>
</div>

## Start Here

| # | Chapter | Description |
|---|---------|-------------|
| 01 | [Overview](/overview) | What coding agents are, the agents compared, and their high-level design philosophies |
| 02 | [Architecture](/architecture) | Language choices, project structure, entry points, build, and distribution |
| 03 | [Agent Loop](/agent-loop) | The core execution cycle — how agents think, act, and iterate |
| 04 | [Tool System](/tool-system) | How tools are defined, registered, extended, and executed |
| 05 | [File Search](/file-search) | Finding files and searching code through shell and structured tooling |
| 06 | [File Editing](/file-editing) | Patch-based vs string-replacement approaches to code modification |
| 07 | [Sandbox & Security](/sandbox-security) | Kernel sandboxing, app-layer controls, and user-provided isolation |
| 08 | [Permissions & Approval System](/permissions) | Approval systems, classifiers, rule engines, and trust models |
| 09 | [Context Management](/context-management) | Session persistence, compaction, pruning, recall, and branch management |
| 10 | [Prompt Engineering](/prompt-engineering) | System prompt construction, templates, runtime overlays, and customization |
| 11 | [Model & API Integration](/model-integration) | API clients, provider abstractions, runtime transports, and auth |
| 12 | [Multi-Agent Architecture](/multi-agent) | Sub-agent spawning, coordination, delegation, and deliberate omission |
| A | [Agent Matrix](/appendix/agent-matrix) | A compact side-by-side reference across the major design dimensions |
| A | [Version Pinning](/appendix/version-pinning) | Exact repository snapshots, commits, and caveats for the analysis |

## Harnesses Covered

| Harness | Vendor | Language | Repository |
|---------|--------|----------|------------|
| **Codex CLI** | OpenAI | Rust | [openai/codex](https://github.com/openai/codex) |
| **Claude Code** | Anthropic | TypeScript | [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code) |
| **OpenCode** | Anomaly / OpenCode | TypeScript | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| **Pi** | Mario Zechner | TypeScript | [badlogic/pi-mono](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent) |
| **Hermes** | Nous Research | Python | [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent) |
