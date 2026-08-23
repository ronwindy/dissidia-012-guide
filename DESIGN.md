# Visual Design Guide: Dissidia 012 [duodecim] Final Fantasy Guide

## 1. Aesthetic Direction & Inspiration

The visual identity authentically captures the high-stakes cosmic clash between the goddess **Cosmos** (Order, Crystalline Radiance, Astral Gold) and the god **Chaos** (Discord, Volcanic Void, Crimson Ruin). Rather than generic dark glassmorphism, the design mirrors the **PSP Final Fantasy battle HUD & command menu architecture**:

- **Crystalline & Metallic Surfaces:** Solid dark obsidian panels with subtle metallic bevels, crisp crystal borders, and chamfered corner accents.
- **Combat HUD Accents:** Cyan-lit **Bravery (BRV)** energy meters, crimson **HP damage** indicators, glowing **EX Burst** gold gauges, and arcane **Lufenian violet** artifact trims.
- **Cosmic Duality:** Dynamic factional cues for Cosmos (Radiant Gold & Crystal Blue), Chaos (Discord Crimson & Dark Obsidian), 012 Prequel (Luminous Cyan & Steel), and Lufenia / Post-Game 000 (Arcane Violet).

---

## 2. Dynamic Token Architecture & CSS Variables

### Core Surfaces & Panels
- **Background Void:** `--bg-color: #070a13;` (Deep cosmic obsidian)
- **HUD Panel Surface:** `--surface-panel: #0e1424;` (Crisp dark crystalline slate)
- **HUD Secondary Surface:** `--surface-panel-alt: #131b30;` (Layered command panel)
- **Bevel & Border Accent:** `--surface-bevel: #1a2540;` (Metallic edge bevel)
- **Sidebar & Header:** `--surface-hud: #0a0e1a;` (High-contrast command bar)

### Domain-Specific Game Tokens
- **Bravery Attack (BRV):** `--color-brv: #38bdf8;` (Luminous cyan energy)
- **HP Attack & Damage:** `--color-hp: #f43f5e;` (High-impact crimson rose)
- **EX Gauge & Burst:** `--color-ex-gauge: #fbbf24;` (Astral gold radiance)
- **Cosmos / Order Faction:** `--color-cosmos: #f59e0b;` (Sun gold)
- **Chaos / Discord Faction:** `--color-chaos: #ef4444;` (Abyssal flame)
- **Lufenia / Dimensional Rift:** `--color-lufenia: #a855f7;` (Arcane purple)
- **Assist & Support Synergy:** `--color-assist: #10b981;` (Support emerald)

### High-Contrast Text Hierarchy (>= 7:1 Contrast Ratio)
- **Primary Text:** `--text-main: #f8fafc;` (Pure crystal silver / white)
- **Secondary Text:** `--text-sub: #cbd5e1;` (Polished silver plate)
- **Muted Text:** `--text-muted: #94a3b8;` (Legible secondary steel-gray)
- **Dim / Coordinate Text:** `--text-dim: #64748b;` (Tactical coordinates & timestamps)
- **Inverse Text:** `--text-inverse: #070a13;`

---

## 3. Typography Selection

- **Display & Title Font (`--font-display`):** `'Cinzel', 'Cinzel Decorative', serif`
  - Regal Roman serif aesthetic matching classic *Final Fantasy* title logos, chapter headings, and scenario banners.
- **Combat HUD & Headings (`--font-heading`, `--font-subheading`):** `'Rajdhani', -apple-system, BlinkMacSystemFont, sans-serif`
  - Condensed geometric sans with angled, mechanical corners. Fast, high-impact fighting-game HUD font ideal for move names, damage multipliers, and character cards.
- **Body & Walkthrough Font (`--font-body`):** `'Plus Jakarta Sans', system-ui, sans-serif`
  - Exceptional legibility and neutral clarity for dense walkthroughs, mechanics breakdowns, and combat guides.
- **Monospace, Frame Data & Board Maps (`--font-mono`):** `'JetBrains Mono', Consolas, monospace`
  - Strict columnar alignment for ASCII gateway maps, CP/AP costs, KP chance timers, and frame data.

### Fluid Typography Scales
```css
--font-size-xs: clamp(0.75rem, 0.1vw + 0.72rem, 0.82rem);
--font-size-sm: clamp(0.85rem, 0.2vw + 0.8rem, 0.95rem);
--font-size-base: clamp(1rem, 0.3vw + 0.92rem, 1.125rem);
--font-size-lg: clamp(1.15rem, 0.5vw + 1rem, 1.25rem);
--font-size-h3: clamp(1.3rem, 1.2vw + 0.95rem, 1.65rem);
--font-size-h2: clamp(1.6rem, 2vw + 1rem, 2.25rem);
--font-size-h1: clamp(2.1rem, 3.8vw + 1rem, 3.25rem);
```

---

## 4. Mobile-First & Responsive Layout Rules

- **Touch Targets:** All buttons, navigation links, filters, and progress checkboxes strictly adhere to $\ge 44 \times 44\text{px}$ touch targets.
- **Navigation Architecture:**
  - **Desktop:** Persistent left PSP Command Terminal sidebar with categorized sections, live local progress count, and quick scenario jumps.
  - **Mobile:** Fixed top HUD bar with $\ge 44\text{px}$ hamburger toggle and animated slide-out command drawer with backdrop overlay.
- **Responsive Tables & Maps:** Wrapped in `.table-responsive` containers with `-webkit-overflow-scrolling: touch;` and sticky headers.

---

## 5. Domain-Specific Component Styles

- **Move Cards:** High-contrast BRV Cyan / HP Crimson left-border indicators with CP/AP cost badges, range, wall rush, and link ability tags.
- **Character Headers:** Dual-pane combat HUD showing EX Mode effects, EX Burst inputs, Assist roles, and stage synergy.
- **Gateway Maps:** Terminal-style ASCII chessboard visualizer with color-coded token badges (`[D]` Deploy, `[G]` Goal, `[B]` Boss, `[C]` Chest, `[S]` Summon).
- **Progress Trackers:** Persistent client-side checkboxes with defensive `localStorage` synchronization.
