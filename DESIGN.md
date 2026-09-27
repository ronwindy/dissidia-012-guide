# Visual Design Guide: Dissidia 012 [duodecim] Guide

> **Single Source of Truth:** All active values (hex codes, font imports, fluid scales) are maintained in [`src/styles/global.css`](src/styles/global.css).

---

## 1. Aesthetic Vision

- **Theme:** Authentic PSP Final Fantasy battle HUD & cosmic duality (Cosmos Gold/Cyan vs. Chaos Crimson/Obsidian).
- **Style:** Dark crystalline slate, subtle metallic bevels, high-contrast combat cues.

## 2. Semantic Token System

When styling components, use the CSS variables defined in `global.css` rather than hardcoding values:

- **Surfaces (`--bg-color`, `--surface-panel`, `--surface-hud`):** Deep obsidian void for backgrounds; crystalline slates for cards and panels.
- **Combat & Faction Accents:**
  - `--color-brv`: Cyan / Energy — BRV attacks, active metrics, primary interactions.
  - `--color-hp`: Crimson / Danger — HP damage, boss tags, critical alerts.
  - `--color-ex-gauge` & `--color-cosmos`: Gold / Radiant — EX mode, scenario milestones, Cosmos alignment.
  - `--color-chaos`: Dark Red / Volcanic — Chaos scenario, villain paths.
  - `--color-lufenia`: Purple / Arcane — Post-game 000, secret gates, dimensional rifts.
- **Text & Contrast:** Always use `--text-main`, `--text-sub`, or `--text-muted` to preserve $\ge 7:1$ contrast ratios.

## 3. Typography Roles

Managed centrally via CSS variables in `global.css`:

- `--font-heading` / `--font-display`: Thematic display or geometric sans for titles and HUD headers.
- `--font-body`: High-legibility sans-serif for long-form walkthroughs and mechanics.
- `--font-mono`: Strict columnar alignment for frame data, gateway coordinates, and damage formulas.

## 4. Layout & UX Principles

- **Touch Targets:** Minimum 44×44px for buttons, checkboxes, and interactive controls on touch viewports.
- **Responsive Data:** Data tables and gateway maps must be wrapped in horizontally scrollable containers (`.table-responsive`).
- **Progress Tracking:** Interactive guide elements (checklists, completed gateways) should provide immediate visual feedback and persist client-side.
