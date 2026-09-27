# Prompt Enhancement Reference & Questioning Guide

This reference provides question taxonomies, prompt structures, and before/after examples for the `prompt-enhancer` skill.

---

## 1. Zero-Assumption Question Taxonomy

When clarifying sketchy prompts, categorize missing information into one of these buckets:

### A. Intent & Boundaries
- "Are we replacing existing behavior or adding an opt-in variation?"
- "Which files or components are strictly out-of-scope for this change?"
- "Should this change affect both desktop and mobile viewports, or only a specific breakpoint?"

### B. Data & Contract
- "What is the expected TypeScript type / interface for this new prop/data field?"
- "How should null, undefined, or empty list states be handled visually?"
- "Is this data statically loaded or fetched dynamically?"

### C. Design & Styling (Project Specific)
- "Should this use the Cosmos palette (`--color-cosmos`, `--color-brv`) or Chaos palette (`--color-chaos`, `--color-hp`)?"
- "Does this component follow the standard HUD panel card pattern (`.hud-panel`, `.surface-panel`)?"
- "What is the desired interaction feedback (hover glow, scale transition, active press)?"

### D. Verification & Safety
- "What verification command or test proves this task is complete?"
- "Are there breaking changes to existing consumer components that need backwards-compatibility?"

---

## 2. Before & After Showcase

### Example: Component Creation

#### Sketchy Prompt (Original)
> "Make a card for boss encounters in the story mode that looks cool with stats."

#### Questioning Phase Output
1. "Where should this card live? (`src/components/story/BossCard.astro` or another path?)"
2. "What stats must be displayed? (HP, Bravery, Weakness, Drops, Difficulty?)"
3. "Which design token style should it follow? (Cosmos gold/cyan or Chaos crimson/obsidian HUD theme?)"
4. "Is there an existing data model or interface in `src/data/story/` that feeds this component?"

#### Enhanced Prompt (Final, Token-Optimized)
````markdown
### Task Objective
Create a reusable `BossCard.astro` component to display boss encounters with high-contrast PSP battle HUD aesthetics.

### Target Files & Scope
- **Create:** `src/components/story/BossCard.astro`
- **Reference:** `src/data/story/storyTypes.ts` (or relevant story interfaces), `DESIGN.md`
- **Do NOT Touch:** Global CSS or parent layout files.

### Context & Requirements
- **Props Interface:**
  - `name: string`
  - `hp: number`
  - `brv: number`
  - `weakness?: string[]`
  - `drops?: string[]`
  - `faction?: 'chaos' | 'cosmos'` (default: `'chaos'`)
- **Styling Directives:**
  - Container: Glassmorphism / crystalline slate (`var(--surface-panel)`, `border: 1px solid var(--border-color)`).
  - Combat accents: Crimson (`var(--color-hp)`) for HP & boss tag, Gold/Cyan for Cosmos variations.
  - Typography: `--font-heading` for boss name, `--font-mono` for stats.
  - Interactive: Subtle hover glow and minimum 44px touch target.
- **Constraints:**
  - Pure Astro + scoped CSS (no new npm dependencies).
  - Comply with `DESIGN.md` $\ge 7:1$ contrast rules and responsive wrapping.

### Verification
- Run `npm run build` to verify template compilation and TypeScript type checking.
````

---

## 3. Quick Checklist for Final Prompt Quality

- [ ] Does it start with an imperative single-sentence objective?
- [ ] Are exact target file paths specified?
- [ ] Are out-of-scope files explicitly listed?
- [ ] Are existing project conventions, types, or design tokens linked rather than copy-pasted?
- [ ] Is there a clear, non-subjective acceptance criterion?
- [ ] Is all conversational fluff stripped out to save token context?
