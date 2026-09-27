# AI Blueprint: Universal Game Guide Architecture

> **Role & Intent:** This document gives rules for AI coding agents to build fast, interactive game guide websites from raw source files. Adapt the design, navigation, and tools to match each specific game.

---

## 1. Core Rules (Non-Negotiable)

When building or updating a game guide, the AI **MUST** follow these rules:

| ID | Rule | Description |
| --- | --- | --- |
| **INV-01** | **Static & Client-Side Logic** | Use [Astro](https://astro.build/) configured for static output (`output: 'static'`). Interactive features (trackers, calculators, filters) must run in the browser via vanilla JS and `localStorage` or URL query parameters with zero server runtime. |
| **INV-02** | **Vanilla CSS** | Use CSS variables in `src/styles/global.css` and scoped component styles. Do **not** use Tailwind or other CSS frameworks unless requested. |
| **INV-03** | **Keep Original Content** | Keep all text, terms, steps, and data **exactly as written** in raw source files. Do **not** rewrite, rephrase, summarize, or remove original content. Store raw files cleanly in `raw-sources/` and parse into structured data (`src/data/` or collections) instead of dumping unformatted text into templates. |
| **INV-04** | **Second-Screen Ergonomics** | Design mobile-first for companion use while playing (touch targets of at least $44\text{px}$, responsive tables, sticky TOC/search, and high contrast $\ge 4.5:1$). |
| **INV-05** | **GitHub Pages Support** | Support subpath deployment by using Astro's `base` config and `import.meta.env.BASE_URL` on all internal links and assets. |

---

## 2. Directory Structure

Keep the folder structure simple and adapt it to the game:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages automated deployment
├── public/                   # Static files (images, icons, logos)
├── raw-sources/              # Original guide files (.txt, .md, .html, .json)
├── src/
│   ├── components/           # Reusable UI and game components
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main page shell (meta tags, navigation, layout)
│   ├── pages/
│   │   └── index.astro       # Home page hub
│   └── styles/
│       └── global.css        # Colors, fonts, and base styles
├── astro.config.mjs          # Astro settings (base path and site URL)
├── package.json              # Dependencies and build scripts
└── DESIGN.md                 # Visual design rules, colors, and typography
```

### Organizing by Game

- **Components (`src/components/`):** Group components by game systems (e.g., character cards, move tables, build calculators).
- **Pages (`src/pages/`):** Create routes that match the game's layout. The home page (`index.astro`) must act as a central hub linking directly to all main sections (characters, walkthroughs, game systems).
- **Assets (`public/`):** Store images, sprites, maps, and icons directly in `public/` or subfolders.

---

## 3. Components & Interactive Features

> [!IMPORTANT]
> Do not copy generic components from other projects. Name and design components around the game's actual mechanics.

### Guidelines

- **In-Game Names:** Name components with game terms (e.g., `MateriaSlot.astro`, `PersonaCard.astro`, `DriveGauge.astro`).
- **TypeScript Props:** Every component must define an explicit `interface Props { ... }`.
- **Props vs. Slots:**
  - Use **props** (`interface Props { items: MoveData[] }`) for structured data like tables, stats, and item drops.
  - Use **slots** (`<slot />`) for text walkthroughs, story notes, or nested content.
- **Game-Specific Tools:** Create tools that fit the game mechanics (e.g., search filters, drop rate calculators, weakness charts).

---

## 4. Visual Identity (`DESIGN.md`)

`DESIGN.md` is the single source of truth for the site's look. It defines the color palette, fonts, and styling rules to match the game's aesthetic.

---

## 5. Anti-Patterns & Mistakes to Avoid

| Mistake | Why It Fails | What to Do Instead |
| --- | --- | --- |
| **Generic theme copying** | Every site looks like a generic blog instead of matching the game | Study the actual game's HUD and UI style defined in `DESIGN.md`. |
| **Monolithic wall-of-text** | Hard to find specific steps or data quickly while playing | Break guides into chapters and use sticky TOCs, search filters, and collapsible sections. |
| **Unscrollable data tables** | Wide stat/drop tables overflow screen width and break mobile layouts | Wrap tables in `overflow-x: auto` containers or convert to card lists on mobile. |
| **Inlining raw datasets in templates** | Clutters UI components and makes updating stats difficult | Keep datasets in `src/data/*.json` and import them cleanly into components. |
| **Hallucinating missing stats** | Corrupts guide accuracy when the raw source is missing data | Display `N/A` or mark unknown values clearly rather than guessing. |
| **Hardcoded absolute paths (`/images/...`)** | Breaks images and links when hosted on GitHub Pages subpaths | Always prefix internal routes and assets with `${import.meta.env.BASE_URL}`. |
| **Unsafe browser scripts** | Causes errors during static build (`SSR`/build-time DOM access) | Wrap DOM access in `if (typeof window !== "undefined")` or client-side `<script>` tags. |

