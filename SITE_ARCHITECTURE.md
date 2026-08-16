# BeCoder-Web — Site Architecture & Page Section Specification

## 1. Document Purpose

This document defines the information architecture, page structure, content hierarchy, and the product expression goals of each Section for the BeCoder official website.

This document answers:

- How is the page organized?
- What does each Section display?
- Which content belongs to the core product narrative?
- Which content is auxiliary information?

This document does not specify concrete visual implementation.

Visuals, typography, motion effects, colors, spatial relationships, etc., are governed by `DESIGN.md`.

Technical implementation, code organization, development workflow, and engineering standards are governed by `AGENTS.md`.

---

# 2. Website Positioning

BeCoder-Web is the official product website for BeCoder.

The main language is Chinese, and it's fine to add English.

The website is not:

- An online IDE
- An online compiler
- An OJ
- A user community backend
- A software marketplace
- A SaaS product

The core task of the website is:

> To help users quickly understand BeCoder, understand why it exists, see the real product experience, and be able to download the software immediately.

Core users:

- OI / ICPC competition users
- C/C++ learners
- Algorithm competition participants
- University students

---

# 3. Core Narrative

The entire official website should revolve around the following narrative:

    What is BeCoder, why BeCoder is needed, the problems that targeted users will face and BeCoder can solve.
            ↓
    BeCoder's design philosophy, explain the features in short.
            ↓
    A truly self-contained C/C++ environment, clean, convenient and always ready to go
            ↓
    Write → Diagnose → Compile → Run → Improve, elegant and clean throughout the whole process
            ↓
    Why BeCoder deliberately stays focused on C/C++ competitive programming and is so elegant to code without AI, returning to the root
            ↓
    Open Source / GitHub / Support Development

The official website should not become a point-by-point "feature list."

It should become:

> An interpreter of BeCoder's product philosophy, features, real experience, a call to return to the roots.

---

# 4. Sitemap

Currently targeted site structure:

/
├── /product(top)
├── /target user
├── /features
├── /wish&hope
└── /support

Auxiliary external entries:

GitHub Repository
GitHub Releases
Buy Me a Coffee

---

# 5. Homepage `/`

The homepage is the core of the entire website.

Homepage goal:

> To help users understand what BeCoder is, why it is worth using, and how to obtain it, within the shortest possible browsing path.

---

## Section 01 — Hero

### Purpose

Establish product identity in the first screen.

Users can get to know or do in this screen:

- What BeCoder is;
- One click to download it;
- Who it is for;
- What the core value is;

### Content

Product positioning:

    专注竞赛编程的C/C++编辑器
    一切就绪

CTA:

    Download BeCoder

Users can download the latest release of BeCoder here.

Use the real BeCoder product interface as the primary visual subject.

It's for:

- The first time someone goes to college and learns C language, and needs an editor that can run C/C++ programs. And maybe they will make their further way in competitive programming. It's good enough for both of these people.

Core values:

- elegant and clean
- Small and tidy
- Self-contained
- Ready by default
- Focused on C/C++

---

# Section 02 — Why BeCoder

### Purpose

Explain why BeCoder exists.

Do not start by listing features in detail.

Core question:

> Why is BeCoder good enough for algorithm competition users to use and C/C++ learners to start with?

It can revolve around:

- Configuration cost
- Other editors' features are overloaded
- Fragmented compile / run workflow
- Competition scenarios don't need general-purpose IDEs

And compare to other products like Visual Studio 20XX, Dev-C++

Ultimately lead to:

> BeCoder is built around the workflow that matters.

---

# Section 03 — Design Philosophy

### Purpose

Showcase BeCoder's three core design philosophies.

## 3.1 Self-contained

BeCoder organizes:

- Editor
- GCC compiler
- clangd
- Runner
- Diagnostics

into a complete product environment. It can go by a drive and run on every Windows system that can run it.

Core expression:

> Everything you need, in one place, and ready to go.

---

## 3.2 Ready by default

Emphasize:

After installation, you can immediately begin C/C++ learning.

Core expression:

> Less setup. More coding. Back to initial.

Can use a visual comparison of "traditional environment setup vs BeCoder."

---

## 3.3 Strong isolation

Emphasize:

BeCoder's toolchain, data, and configuration have clear boundaries. Except for the original shell, it won't change your environment or get affected by the environment.

Core expression:

> BeCoder has its own, and keeps boundaries to yours.

Note:

Must not exaggerate as an "absolute sandbox" or "completely no contact with the system."

---

# Section 04 — The C/C++ Experience

### Purpose

Enter real product capabilities.

Title direction:

> Built for C/C++.

Showcase:

- C/C++ editing
- Hover
- Signature Help
- Formatting
- Symbols
- Inlay Hints

Visual:

Use real editor screenshots or partial UI displays.

---

# Section 05 — GCC

### Purpose

Showcase the GCC toolchain bundled with BeCoder.

Content:

    GCC
    Compiler
    C/C++ standards
    Compiler arguments

Key point:

> The compiler is part of the product environment.

Do not hardcode specific version numbers on the homepage.

If version numbers are displayed, they should be generated from real project configuration or Release information.

---

# Section 06 — Diagnostics

### Purpose

Showcase GCC diagnostics.

Core flow:

    Write code
        ↓
    Compile
        ↓
    Error
        ↓
    Diagnostics
        ↓
    Fix
        ↓
    Run again

Can use real code error cases.

The goal is not to explain GCC, but to show:

> Compiler feedback enters the development workflow directly.

---

# Section 07 — BeCoder Runner

### Purpose

This is one of the core Sections of the homepage.

Title direction:

> Compile. Run. Repeat.

Showcase:

    Source
      ↓
    Compile
      ↓
    Run
      ↓
    Output

Need to highlight:

- Dedicated Runner shell
- C/C++
- Compile
- Execute
- Output
- input with file

Can use the real Runner UI.

---

# Section 08 — Focused by Design

### Purpose

Explain why BeCoder "has fewer things."

Core philosophy:

> A focused editor doesn't need everything.

Showcase BeCoder's clear product boundaries.

### Kept

    C/C++
    GCC
    clangd
    Runner
    Diagnostics
    Extensions

### Not treated as product capabilities

    AI
    Agent
    MCP
    Debug
    SCM / Git UI
    Remote Development

Note:

This is not an attack on VS Code.

Nor is it saying these technologies are "bad."

The expression is:

> BeCoder targets a different product goal.

---

# Section 9 — Extensions

### Purpose

Explain that BeCoder is not a closed editor.

Showcase:

- Open VSX
- Extension search
- Extension installation
- Local VSIX

Core expression:

> Keep the editor focused, while keeping it extensible.

Can show Python with extension, notebook with extension.

---

# Section 10 — Beyond C/C++ to assist user

### Purpose

Showcase a small number of auxiliary capabilities.

Including:

- Markdown
- Mermaid
- CodeSnap

The priority of this Section is lower than:

- C/C++
- GCC
- clangd
- Runner
- Diagnostics

Do not let these auxiliary capabilities steal the main product narrative.

---

# Section 11 — Built on Code-OSS

### Purpose

Explain the technical origin.

Expression:

    Code-OSS 1.130
         ↓
    Editor Foundation
         ↓
      BeCoder
         ↓
    Competitive Programming focused production

Core message:

BeCoder is built on the mature Code-OSS editor foundation and redesigned for C/C++ competitive programming workflows.

Prohibited:

- Implying that BeCoder is an official Microsoft product;
- Using the VS Code trademark to create an official association;
- Simply describing BeCoder as "VS Code with a different name."

---

# Section 12 — Open Source

### Purpose

Build developer trust.

Content:

    Open Source
    GPL-3.0-or-later

CTA:

    View on GitHub

Can showcase:

- Source Code
- Issues
- Discussions
- Releases

Core expression:

> Built in the open.

---

# Section 13 — Support Development

### Purpose

Support the ongoing maintenance of the open-source project.

Core expression:

> BeCoder is free and open source.
> If it helps you, consider supporting its development.

CTA:

    Buy Me a Coffee
    WeChat

Support is voluntary.

Do not describe support as:

- Software purchase;
- Feature unlocking;
- Forced payment;
- Commercial licensing.

---

# Section 18 — Footer

The Footer should include:

## Legal

    GPL-3.0-or-later
    Third-party licenses

And:

    Copyright © 2026-present Bc408

---

# 17. Screenshot Strategy

Product screenshots should prioritize showing:

1. Full editor
2. Runner
3. C++ Intelligence
4. GCC Diagnostics
5. Extensions
6. Settings
7. Markdown / Mermaid
8. CodeSnap

Screenshots must come from the real BeCoder.

---

# Final Product Principle

BeCoder-Web should not look like:

> A marketing website with many Sections.

It should look like:

> A real software product website.

Core feeling:

    Focused
    Technical
    Precise
    Calm
    Modern
    Open

When users leave the official website, they should remember three things:

    What BeCoder is

    Why it is suitable for C/C++ competitive programmers