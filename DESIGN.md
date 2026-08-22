# Visual Design Guide: Dissidia 012 [duodecim] Final Fantasy Guide

## 1. Aesthetic Direction & Tone
The visual identity captures the high-stakes cosmic clash between the goddess **Cosmos** (Order, Crystals, Luminous Harmony) and the god **Chaos** (Discord, Abyss, Volcanic Ruin). The theme combines a modern, deep crystalline dark-mode surface with glassmorphic cards, luminous neon crystal accents, and crisp fighting-game typography.

---

## 2. Color Palette & Design Tokens

### Core Surfaces
- **Background Surface:** `--bg-color: #0b0e17;` (Deep cosmic navy/void)
- **Sidebar Surface:** `--bg-sidebar: #0f1320;` (Dark crystalline slate)
- **Card Surface:** `--bg-card: rgba(18, 24, 40, 0.72);` (Translucent glassmorphism with `backdrop-filter: blur(12px)`)
- **Card Border:** `--border-card: rgba(255, 255, 255, 0.08);`
- **Header Surface:** `--bg-header: rgba(11, 14, 23, 0.85);`

### Text & Contrast (7:1+ Compliance)
- **Primary Text:** `--text-main: #f1f5f9;` (High-contrast pure crystal white/silver)
- **Muted Text:** `--text-muted: #94a3b8;` (Legible secondary silver-gray)
- **Subtle / Meta Text:** `--text-dim: #64748b;`

### Factional & Game Accents
- **Primary Accent (Crystal Blue):** `--accent-primary: #38bdf8;`
- **Cosmos Accent (Radiant Gold):** `--accent-cosmos: #f59e0b;`
- **Chaos Accent (Discord Crimson):** `--accent-chaos: #ef4444;`
- **Lufenian Ancient Accent (Arcane Violet):** `--accent-crystal: #a855f7;`
- **Success / Check / Complete:** `--accent-success: #10b981;`
- **Warning / KP Chance:** `--accent-warning: #f59e0b;`
- **HP Attack Accent:** `--accent-hp: #f43f5e;`
- **Bravery Attack Accent:** `--accent-brv: #0ea5e9;`

---

## 3. Typography

- **Heading Font (`--font-heading`):** `'Barlow Condensed', 'Cinzel', system-ui, sans-serif`
  - High-impact, cinematic, athletic, ideal for move names, damage stats, and character headers.
- **Body Font (`--font-body`):** `'Inter', 'Plus Jakarta Sans', system-ui, sans-serif`
  - Clean, neutral, exceptional readability for walkthrough guides, mechanics, and strategies.
- **Accent & Data Font (`--font-mono`):** `'JetBrains Mono', 'Share Tech Mono', monospace`
  - Strict alignment for frame data, CP/AP numbers, KP Chance timers, and battle logs.

### Fluid Typography Scales
```css
--font-size-sm: clamp(0.85rem, 0.2vw + 0.8rem, 0.95rem);
--font-size-base: clamp(1rem, 0.3vw + 0.9rem, 1.125rem);
--font-size-h3: clamp(1.25rem, 1.5vw + 0.8rem, 1.5rem);
--font-size-h2: clamp(1.5rem, 2.5vw + 0.8rem, 2rem);
--font-size-h1: clamp(2rem, 4vw + 0.8rem, 3rem);
```

---

## 4. Mobile-First & Responsive Layout Rules

- **Mobile Viewport Priority:** Base layouts designed for 360px–430px mobile screens, expanding seamlessly to 768px tablets and 1200px+ desktop layouts.
- **Touch Targets:** All interactive buttons, checklist toggles, TOC jumps, and mobile drawers adhere strictly to $\ge 44 \times 44\text{px}$ touch targets.
- **Navigation Architecture:**
  - Desktop: Persistent left-hand sidebar with category accordion, search filter, and dynamic completion counter.
  - Mobile: Fixed top header with animated hamburger slide-out drawer and backdrop overlay (`.sidebar-overlay`).
- **Data & Matrix Tables:** Wrapped in responsive overflow containers (`overflow-x: auto; -webkit-overflow-scrolling: touch;`) with sticky headers.

---

## 5. Callouts & Semantic Indicators

- **Tip / Mechanics Insight:** Emerald crystal border with subtle glowing background (`rgba(16, 185, 129, 0.08)`).
- **Warning / Missable / Trap:** Amber-gold glowing indicator (`rgba(245, 158, 11, 0.08)`).
- **Boss / Critical Strategy:** Crimson discord styling (`rgba(239, 68, 68, 0.1)`).
- **Lore / Monologue / Report:** Arcane violet border with italicized quotes.

---

## 6. Faction Variants
- `.theme-cosmos` -> Emphasizes `--accent-primary: #f59e0b;` (Sun gold) & glowing crystal blue borders.
- `.theme-chaos` -> Emphasizes `--accent-primary: #ef4444;` (Chaos flame) & dark crimson card tints.
- `.theme-000` -> Emphasizes `--accent-primary: #a855f7;` (Lufenian / Dimensional rift).
