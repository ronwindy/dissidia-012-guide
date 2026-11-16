# Dissidia 012 [duodecim] Guide — Agent Instructions

A personal, easier-to-read static Astro site on GitHub Pages. The guide pages are **hand-owned**: the user edits them to their own taste. Same architecture as the persona-4-golden-guide project.

```text
src/content/guide/*.mdx (content collection) → Astro build
```

## 1. Core rule
`src/content/guide/*.mdx` is the source of truth. There is no extract/verify pipeline and no word-for-word fidelity check; the user accepts drift from any original source text.

- Edit page text and markup only when the user asks. Do not "improve" wording, facts or structure on your own initiative.
- Pages are either a single file (`reports.mdx`, `gameplay-basics.mdx`) or a chapter folder `part-N/` (`00-intro.mdx`, `01-gateway-1.mdx`, … one file per gateway plus its aftermath). Folder sections render in filename order as one page at `/guide/part-N`. Never have both `part-N.mdx` and `part-N/`.
- Only `00-*` section files carry frontmatter. Section files must not start with `---` (Astro reads it as frontmatter); use `***` for a horizontal rule.
- Frontmatter (`title`, `category`, `order`) sets the page list, order and sidebar categories. Keep `order` unique and consecutive when pages are added, moved or removed. `src/lib/guideData.ts` enforces these rules and fails the build when broken.
- The on-page ToC is built automatically from the `####` headings of all sections. Heading ids are made unique across sections by `src/lib/rehype-section-ids.mjs`.
- Prose is Markdown (`**bold**`, `*italic*`, `***`/`---` rules, `####` section headings). Components used directly in the MDX (`src/components/guide/`, board icon keys in `pieces.ts`): `<Board>`, `<EnemyCard>`, `<Figure>`, `<CharacterIntro>`, `<Callout>`, `<Gateway>`, `<BossFight>` (panels), `<PanelSection>` (kinds: chain, assist, enemies, objective, treasure, tips, warnings). Tables that do not fit a component stay as raw JSX/HTML in the page.
- Bolding and number italics are applied at build time by `src/lib/remark-glossary.mjs` from `src/data/glossary.json`; do not hand-bold glossary terms. Rules, escape hatch and opt-out pages: `BOLDING.md`.

## 2. Build
- Build: `npm run build` (run it normally, not through `cmd /c`). Ad-hoc JavaScript: temp `.mjs` file, not long `node -e`.
- Site settings (title, base, site URL) live in `project.config.json`.

## 3. Presentation (look decisions live in `DESIGN.md`)
- Default view is iPhone 13 landscape (844×390): design and check styling there first; portrait and desktop must not break (`DESIGN.md` section 5).
- Pages render each section's MDX `<Content />` inside `.guide-body` (`src/pages/guide/[id].astro`, which also registers the guide components); restyle via `src/styles/` (tokens in `tokens.css`, imported by `global.css`).
- Panel icons: Lucide components from `@lucide/astro` (`Gateway`/`BossFight` share `PanelShell.astro`).
- Shell: fixed sidebar with logo, mobile header + drawer (`src/components/layout/`), background, favicon.
- Features: sidebar nav + prev/next, reading progress (localStorage), on-page ToC (h4 headings), header icons, Lucide sidebar icons.
- No monospace anywhere.
- Header icons: headings carry `data-icon`; `src/styles/header-icons.css` holds one mask per icon.
- Sidebar icons: `src/lib/nav-icon-rules.mjs` (category → icon, keyword rules for entries).
- `public/drake/` holds the board pieces and portraits used by the components. Root `public/` holds logo, box art, background, favicon and `arenas.jpg` (not referenced by code yet).

## 4. Workflow rules
- No mutating git without approval, no browser testing unless asked.
- Ask before adding a new component or feature beyond section 3.

## 5. Out of scope
Crawling, backends, RAG, knowledge graphs, bulk converters.
