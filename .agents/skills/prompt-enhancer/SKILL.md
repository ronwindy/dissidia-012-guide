---
name: prompt-enhancer
description: >-
  Turn sketchy, vague, or ambiguous user requests into high-quality, fully-contextualized,
  and token-efficient prompts for coding agents. Use this skill whenever the user asks to
  refine, enhance, optimize, or construct a prompt, or when preparing complex tasks where
  zero-assumption clarifying questions are needed to lock down requirements.
---

# Prompt Enhancer Skill

Transform rough, underspecified, or sketchy user requests into crystal-clear, high-performance prompts that maximize AI agent execution accuracy while consuming the minimum tokens possible.

## Core Philosophy: Zero Assumptions & Maximum Precision

1. **Zero Guesswork:** If any requirement, architectural pattern, edge case, UI behavior, or scope boundary is missing or ambiguous, **NEVER ASSUME**. Always ask clarifying questions.
2. **Context Reconnaissance First:** Inspect the local workspace (file paths, components, types, schemas, CSS tokens) to answer factual questions automatically. Do not bother the user with questions that can be answered by reading the codebase.
3. **Token Efficiency:** Keep prompt instructions dense, imperative, and surgically targeted. Use exact file paths (`file:///...`), symbol names, and line ranges. Avoid filler words, redundant boilerplate, and broad scope creep.
4. **Iterative Questioning:** Continue asking questions until all necessary context is solidified. Do not generate a half-baked prompt when requirements are still fuzzy.

---

## Workflow Steps

```mermaid
flowchart TD
    A[Receive Sketchy / Ambiguous Prompt] --> B[Silent Codebase Reconnaissance]
    B --> C{Context Complete & Unambiguous?}
    C -- No --> D[Ask Targeted Questions (Zero Assumptions)]
    D --> E[Receive User Clarifications]
    E --> C
    C -- Yes --> F[Assemble Token-Optimized Prompt]
    F --> G[Present Enhanced Prompt in Ready-to-Run Block]
```

### Step 1: Intake & Gap Analysis
Analyze the user's input for ambiguities:
- **Objective:** What is the exact desired outcome?
- **Scope & Boundaries:** What files should change? What must NOT be touched?
- **Behavior & Edge Cases:** What should happen in empty, error, loading, or responsive states?
- **Design & Architecture:** Does this adhere to existing project standards (e.g., [`DESIGN.md`](file:///d:/GAMES/GameGuides/dissidia-012-guide/DESIGN.md), [`AGENTS.md`](file:///d:/GAMES/GameGuides/dissidia-012-guide/AGENTS.md))?

### Step 2: Silent Codebase Reconnaissance
Before asking the user questions, check if the codebase already contains the answers:
- Locate existing patterns, shared utilities, data structures, or CSS tokens using `grep_search` and `list_dir`.
- Check conventions in project rules files ([`AGENTS.md`](file:///d:/GAMES/GameGuides/dissidia-012-guide/AGENTS.md), [`DESIGN.md`](file:///d:/GAMES/GameGuides/dissidia-012-guide/DESIGN.md)).
- Formulate precise questions grounded in actual project reality instead of generic queries.

### Step 3: Zero-Assumption Clarification Loop
If any functional, stylistic, or scope decisions remain unclear:
- Formulate focused questions. Use the `ask_question` tool (with multiple-choice options whenever possible) or present concise, numbered questions.
- If multiple interpretations exist, present each distinct option clearly with pros/cons or default recommendation.
- **Repeat this loop** until all ambiguities are resolved. Do not proceed to final generation prematurely.

### Step 4: Construct the Enhanced Prompt
Format the final prompt using the **Token-Optimized Agent Prompt Anatomy**:

```markdown
### Task Objective
[1-2 crisp imperative sentences defining the exact goal]

### Target Files & Scope
- **Modify:** `path/to/target.ts` (e.g. lines L50-L80)
- **Reference Only:** `path/to/schema.ts`, `DESIGN.md`
- **Do NOT Touch:** [Unrelated files or legacy code to protect]

### Context & Technical Requirements
- [Bullet points with precise variables, types, methods, CSS tokens]
- [Specific error handling, responsiveness, or edge cases]
- [Architectural constraints: e.g. no new external deps, follow AGENTS.md]

### Verification & Success Criteria
- [Exact verification steps: build command, tests, visual check]
- [Specific acceptance condition]
```

### Step 5: Deliver Output
1. Output the finalized prompt in a fenced code block (` ```markdown ... ``` `) so the user can easily copy and execute it.
2. Provide a brief (1-3 bullets) summary explaining the key context enhancements and token-saving decisions applied.

---

## Token Minimization Strategies

| Technique | Inefficient Approach (Avoid) | Token-Optimized Approach (Apply) |
| :--- | :--- | :--- |
| **File References** | Pasting 200 lines of existing code into the prompt | Specifying exact file path and symbol: `src/data/story/drakeData.ts` (`DrakeChapterData`) |
| **Instructions** | Verbose conversational explanations and preambles | Direct imperative bullet points ("Update X to accept Y") |
| **Style Directives** | Re-explaining color palettes and spacing rules | Pointing to CSS variables in `DESIGN.md` / `global.css` (`--color-brv`, `--surface-panel`) |
| **Scope Control** | Vague "Refactor the page" | Explicit boundaries: "Only edit `HeroCard.astro`; do not alter parent grid layout" |

---

## Supporting References

For in-depth question templates and prompt examples, see:
- [Questioning Guide & Prompt Templates](./references/questioning_and_templates.md)
