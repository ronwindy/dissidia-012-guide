# Autonomous Content Ingestion Workflow: Dissidia 012 [duodecim]

This document details the conversion rules and extraction pipeline used to transform raw walkthrough and move list data from `raw-sources/Dissidia 012_ Duodecim Final Fantasy - Move List and Guide - PSP - By Suih - GameFAQs.html` into structured, interactive Astro guide pages.

---

## 1. Source Mapping & Taxonomy

| Raw Source Section | Destination Route | Components Utilized | Key Invariants |
| :--- | :--- | :--- | :--- |
| **New Characters** (Lightning, Vaan, Laguna, Yuna, Kain, Tifa, Prishe, Gilgamesh, Feral Chaos, Aerith) | `src/pages/characters/[slug].astro` | `CharacterHeader`, `MoveCard`, `SkillchainTable`, `AlertCallout` | Retain 100% frame data, AP, CP, wall rush, combo cancels, assist pairings, stage preferences. |
| **Returning Cosmos Characters** (11 heroes) | `src/pages/characters/[slug].astro` | `CharacterHeader`, `MoveCard`, `AlertCallout` | Full pros/cons, assist synergy, EX mechanics. |
| **Returning Chaos Characters** (11 villains) | `src/pages/characters/[slug].astro` | `CharacterHeader`, `MoveCard`, `AlertCallout` | Full pros/cons, boss matchup strategies. |
| **012: Treachery of the Gods** | `src/pages/story/012-treachery.astro` | `GatewayCard`, `StoryNav`, `ProgressTracker` | Map gateways, chests, KP chances, enemy levels. |
| **013: Light to All** | `src/pages/story/013-light.astro` | `GatewayCard`, `StoryNav`, `ProgressTracker` | Remake chapter maps, DP/KP conditions, story chests. |
| **000: Confessions of the Creator** | `src/pages/story/000-creator.astro` | `GatewayCard`, `CraftingCard`, `AlertCallout` | Open world gateways, Moogle shops, Feral Chaos gauntlet. |
| **Reports 01-20** | `src/pages/reports/index.astro` | `ReportEntry`, `ProgressTracker` | Full transcripts, keyword triggers, unlockable battles. |
| **Help / Crafting** | `src/pages/crafting/index.astro` | `CraftingCard`, `DataTable`, `AlertCallout` | Equipment sets (Lufenian, Genji, Machine), farming routes, duplication tricks. |
| **Quests & Friend Cards** | `src/pages/quests/index.astro` | `QuestCard`, `AlertCallout` | Custom quests, friend cards, drop rates, PSP save injection rules. |
| **FAQ & Credits** | `src/pages/faq.astro` | `AlertCallout`, `DataTable` | GameFAQs FAQ, mechanics tips, credits, version history. |

---

## 2. Ingestion Rules & Content Fidelity

1. **Never Omit Data:** Preserve all numeric variables (levels, CP costs, AP costs, multipliers, frame cancel windows, drop rates).
2. **Game-Native Terminology:** Use game terms: *Bravery (BRV)*, *HP Attack*, *EX Mode*, *EX Burst*, *EX Revenge*, *Assist Gauge*, *Assist Lock*, *Wall Rush*, *Chase*, *Skillchains*, *Manikin*, *Lufenian*.
3. **Subpath Safety:** Always interpolate `import.meta.env.BASE_URL` for internal route links and assets.
4. **State Keys:** Use standard `localStorage` key `dissidia-012-guide-progress`.
