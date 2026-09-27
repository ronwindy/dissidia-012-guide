# AI System Specification: Universal Game Guide Architecture & Ingestion Blueprint

> **Role & Intent:** This document is an autonomous execution blueprint for AI coding agents. It specifies the architectural invariants, domain-driven design rules, and execution protocol required to generate a complete, interactive, high-performance game guide website from raw source materials. The agent is expected to improvise the visual identity, navigation paradigm, and domain-specific utilities to authentically mirror the target game.

---

## 1. System Invariants & Non-Negotiable Rules

When constructing or modifying a game guide repository, the AI **MUST** adhere to the following core constraints:

| ID         | Constraint                  | Description                                                                                                                                    |
| ---------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **INV-01** | **Astro Static Generation** | Must use [Astro](https://astro.build/) configured for static output (`output: 'static'`). Zero server-side runtime, zero client JS by default. |

|
| **INV-02** | **Vanilla CSS + Thematic Tokens** | All styling must rely on CSS variables declared in `src/styles/global.css` and scoped component styles. Do **not** use Tailwind or bulky CSS frameworks unless explicitly instructed by the user.

|
| **INV-03** | **Strict Source Faithfulness** | Created guide pages **must be strictly faithful to raw source materials**. Do **not** rewrite, rephrase, embellish, or omit content. Maintain the original text, terminology, instructions, walkthrough steps, and gameplay data exactly as presented in the source. UI components and layouts must serve solely to present the source material faithfully without altering its content, tone, or meaning.

|
| **INV-04** | **Navigational Contract** | The site must feature a Landing Page (`src/pages/index.astro`) serving as the thematic entry hub, providing immediate access to the guide's primary systems, rosters, or progression routes.

|
| **INV-05** | **Zero-Backend State & Utilities** | All client-side tools (progress trackers, build calculators, fusion helpers, filter toggles, route pickers) must run purely in the browser using `localStorage` or URL params with defensive null-checking.

|
| **INV-06** | **GitHub Pages Compatibility** | All internal links, assets, and base paths must support subpath deployment via Astro's dynamic `base` config and `import.meta.env.BASE_URL`.

---

## 2. Directory Architecture & Customization Guidelines

> **AI Directive:** Maintain a minimal, lightweight directory scaffold. Improvise component breakdown, page routes, and folder organization on a per-game basis to best match the target game's systems, source materials, and mechanics.

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/                   # Static assets (favicons, images, logos)
├── raw-sources/              # Unedited community sources (.txt, .md, .html, .json)
├── src/
│   ├── components/           # Reusable UI & gameplay components (improvised per game)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Master shell (metadata, navigation, theme)
│   ├── pages/
│   │   └── index.astro       # Thematic landing hub (routes improvised per game)
│   └── styles/
│       └── global.css        # Thematic tokens, typography, and base styling
├── astro.config.mjs          # Astro configuration (base path & site URL)
├── package.json              # Scripts & dependencies
└── DESIGN.md                 # Game-specific visual identity, palettes, and UI rules
```

### Game-by-Game Improvisation Guidelines

Do not enforce predetermined or nested folder taxonomies. Tailor the structure naturally to the game being documented:

- **Components (`src/components/`):** Organize components flatly or group them intuitively based on game mechanics (e.g., boss stats, move tables, calculators, or interactive trackers) as needed by the content.
- **Pages & Routes (`src/pages/`):** Define route hierarchies that match the game's structure (e.g., character rosters, walkthrough chapters, mission stages, or databases).
- **Assets (`public/`):** Place static imagery, sprites, maps, and logos directly in `public/` or in custom subfolders appropriate for the game.

---

## 3. Autonomous Execution Protocol for AI Agents

Follow this deterministic 6-phase sequence when initializing or processing a game guide:

```mermaid
flowchart TD
    P1[Phase 1: Source Ingestion & System Analysis] --> P2[Phase 2: Game-Native Design & Aesthetic Synthesis]
    P2 --> P3[Phase 3: Component & Layout Crafting]
    P3 --> P4[Phase 4: Content Transformation & Fidelity Validation]
    P4 --> P5[Phase 5: Domain Utilities & Client State Wiring]
    P5 --> P6[Phase 6: Deployment Config & Build Verification]

```

### Phase 1: Source Ingestion & System Analysis

1. Scan all files in `raw-sources/`.

2. Identify:

- **Game Progression Archetype:** Roster-based, linear chapters, open-ended regional, or catalog database.

- **Core Game Mechanics:** Key systems (e.g., elemental weaknesses, frame data, fusion trees, crystal slots, combo routes, missable triggers, time constraints).

- **Visual Tone & Media Types:** Game HUD style, color cues, sprite vs. 3D renders, map diagrams, tables.

### Phase 2: Game-Native Design & Aesthetic Synthesis

1. Author `DESIGN.md` defining a visual style inspired directly by the game's UI and art direction.

2. Create `src/styles/global.css` with game-authentic CSS custom properties:

- **Surfaces:** Base background, surface panels, card layers, borders (e.g., modern dark, high-contrast neon pop, clean bright flat, parchment map, or retro-pixel).

- **Accents:** Game-specific color codes (e.g., element affinities, rarity tiers, faction colors, gauge meters).

- **Typography:** Select Google Fonts dynamically to reflect the game's actual typography style.

### Phase 3: Component & Layout Crafting

1. Create `src/layouts/BaseLayout.astro` with an intuitive navigation model matching the game's vibe (e.g., arcade HUD bar, RPG status menu, floating dock, or classic documentation sidebar).

2. Generate semantic components tailored to this specific game's systems (e.g., `BossStatBlock.astro`, `FrameDataRow.astro`, `FusionMatrix.astro`, `DialogueChoice.astro`, `LootTable.astro`).

### Phase 4: Content Transformation & Fidelity Validation

1. Convert raw files into structured `.astro` pages utilizing the game-tailored components.

2. **Apply Strict Source Faithfulness (INV-03):** Ensure guide pages strictly mirror the raw source materials. Do not rewrite, rephrase, summarize, embellish, or omit any text, walkthrough steps, statistics, choice outcomes, secret flags, or combat instructions. Preserve original wording, terminology, and structure faithfully.

3. For exceptionally large source files (>2,000 lines), break content logically into sub-pages or modular section components to ensure complete generation without truncation.

### Phase 5: Domain Utilities & Client State Wiring

1. Implement client-side utilities that directly solve pain points for this specific game (e.g., interactive checklist with `localStorage`, interactive build calculator, live search filter for large loot tables, or status-effect matchers).

2. Wire up navigation indicators (e.g., reading position scrollspy, completed item tallies, or active tab states).

### Phase 6: Deployment Config & Build Verification

1. Configure `astro.config.mjs` with production base-path handling:

```javascript
import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://<username>.github.io",
  base: process.env.NODE_ENV === "production" ? "/<repo-name>/" : "/",
});
```

2. Verify all internal links, router pushes, and static assets interpolate `${baseUrl}`:

```astro
---
const baseUrl = import.meta.env.BASE_URL;
---
<a href={`${baseUrl}characters/cloud`}>Cloud Strife</a>

```

3. Set up `.github/workflows/deploy.yml` with `withastro/action` and `actions/deploy-pages`.

4. Run `npm run build` to verify zero TypeScript errors and successful static HTML generation.

---

## 4. Component & Interactivity Authoring Principles

> [!IMPORTANT]
> **AI Directive:** Do not copy boilerplate components from other guides. Derive component structure, naming, and interactive features dynamically from the game's actual mechanics.

### Deriving Game-Native Components

- **Semantic Names:** Use terms from the game's universe (e.g., `MateriaSlot.astro`, `PersonaCard.astro`, `DriveGauge.astro`, `OverdriveTrack.astro`).

- **Strict TypeScript Props:** Ensure every component exports an explicit `interface Props { ... }`.

- **Slot-First Flexibility:** Use slots for narrative walkthrough text, lore notes, or nested multi-step objectives.

- **Context-Driven Tools:** Instead of defaulting only to basic checkboxes, build utilities that fit the game's system (e.g., a quick search filter for drop rates, a build point counter, or a damage weakness matrix).

---

## 5. DESIGN.md Authoring & Visual Identity Guidelines

`DESIGN.md` is the **single source of truth** for the visual identity. The agent must dynamically determine the UI tone, layout structure, and color system based on the target game's aesthetic:

### Pillar 1: Mobile-First Ergonomics & Readability

- **Touch Targets:** Interactive targets must have a minimum hit area of **$44 \times 44\text{px}$**.

- **Fluid Layout & Typography:** Utilize `clamp()` for responsive text scaling and generous line heights ($1.65–1.75$).

- **High Contrast:** Ensure text-to-background contrast adheres to at least a **7:1 ratio** (or 4.5:1 minimum for large elements) regardless of whether the palette is dark, light, or hyper-stylized.

- **Responsive Data:** Wrap dense tables in responsive scroll containers (`overflow-x: auto; -webkit-overflow-scrolling: touch;`).

### Pillar 2: Authentic Aesthetic Immersion

- **UI Inspiration:** Replicate the mood of the game's menus (e.g., clean terminal, comic pop-art, dark fantasy ledger, neon arcade, or tactical briefing map).

- **Typography Pairing:** Dynamically find Google Fonts that match the title's visual brand (e.g., a distinct heading display font paired with a clean, highly legible body font).

- **Semantic Palette:** Map CSS variables to game-meaningful concepts rather than generic UI names:

```css
:root {
  --bg-primary: #121016;
  --surface-hud: #1a1622;
  --border-style: 2px solid #ffcc00;
  --font-heading: "GameDisplayFont", sans-serif;
  --font-body: "CleanBodyFont", sans-serif;

  /* Domain-specific tokens */
  --color-affinity-fire: #e74c3c;
  --color-affinity-ice: #3498db;
  --color-rarity-legendary: #f39c12;
}
```

---

### Standard `DESIGN.md` Structure (To Be Generated in Phase 2)

```markdown
# Visual Design Guide: [Game Title]

## 1. Aesthetic Direction & Inspiration

[Describe the game UI motif: e.g., Street Arcade, Dark Fantasy Grimoire, High-Chroma Pop-Art, Tactical Military HUD, Retro 16-Bit]

## 2. Dynamic Token Architecture

- **Surfaces & Layout:** [List surface, panel, and border variables]
- **Text Hierarchy:** [List primary, secondary, and accent text colors]
- **Game-Specific Accents:** [List element, faction, tier, or status colors]

## 3. Typography Selection

- **Heading Font:** '[Selected Google Font]', [Font Category]
- **Body Font:** '[Selected Google Font]', [Font Category]
- **Specialty/Code/Stat Font:** '[Selected Google Font]', [Font Category]

## 4. Layout & Navigation Paradigm

- [Describe the navigation structure: e.g., HUD tab bar, character select matrix, sidebar drawer, or chapter ledger]

## 5. Domain-Specific Component Styles

- [Define styles for boss cards, skill trees, alert callouts, or stat matrices]
```

---

## 6. Anti-Patterns & Common Failure Modes

The AI must actively avoid these pitfalls:

| Failure Mode                                           | Reason It Fails                                                                         | Correct Behavior                                                                             |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Clone-Stamping Past Themes**                         | Making every site look like a dark glassmorphism portal                                 | Analyze the target game's actual UI and craft a tailored visual theme.                       |
| **Summarizing, rephrasing, or truncating source data** | Causes deviation from authoritative sources and loss of original instructions or nuance | Maintain strict source faithfulness; never rewrite, rephrase, or omit source content.        |
| **Hardcoded absolute URLs (`/images/...`)**            | Breaks on GitHub Pages subpaths                                                         | Always prefix static assets and routes with `${baseUrl}`.                                    |
| **Desktop-only layout bias**                           | Causes cramped navigation or unreadable tables on mobile                                | Design mobile-first with $\ge 44\text{px}$ touch targets and fluid text.                     |
| **Low-contrast text**                                  | Violates legibility when referencing while gaming                                       | Maintain high contrast ($\ge 7:1$) across all themes.                                        |
| **Using heavy UI frameworks**                          | Bloats bundle size and slows loading speed                                              | Stick to vanilla CSS tokens and lightweight scoped styles.                                   |
| **Unsafe DOM scripts**                                 | Throws client runtime errors during SSR/hydration                                       | Guard browser scripts with `if (typeof document !== "undefined")` and defensive null-checks. |
