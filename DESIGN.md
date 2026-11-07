# Visual Design Guide: Dissidia 012 [duodecim] Guide

> **Single Source of Truth:** All active values (hex codes, font imports, sizes) live in [`src/styles/global.css`](src/styles/global.css).

## 1. Aesthetic Vision

- **Theme:** PSP Final Fantasy battle HUD with a Cosmos/Chaos duality.
- **Style:** Dark crystalline slate panels over the fixed background image, cyan accents, subtle bevels.

## 2. Tokens

Use the CSS variables in `global.css` rather than hardcoding values:

- **Surfaces:** `--bg-color`, `--surface-panel`, `--surface-hud`.
- **Accents:** `--color-brv` (cyan, primary interaction), `--color-hp` (crimson), `--color-ex-gauge` / `--color-cosmos` (gold), `--color-chaos`, `--color-lufenia` (purple), `--color-assist` (green, read marks).
- **Text:** `--text-main`, `--text-sub`, `--text-muted`.

## 3. Typography

- `--font-wallpoet`: h1 titles. `--font-heading` / `--font-subheading` (Rajdhani): headings, nav, buttons. `--font-body` (Jost): reading text. `--font-display` (Cinzel).
- No monospace anywhere.

## 4. Layout

- Fixed left sidebar (logo, reading progress, category groups); below 1024px a header with logo and a slide-in drawer.
- Guide page: centered reading column (`--reading-width`) with a sticky on-page ToC on screens 1280px and wider, collapsible above the text otherwise.
- Touch targets at least 44px. Wide tables sit in a scrollable `.table-wrap`.
