# Dissidia 012 [duodecim] Guide — Agent Instructions

A personal, easier-to-read static Astro site on GitHub Pages. The guide pages are **hand-owned**: the user edits them to their own taste. Same architecture as the persona-4-golden-guide project.

```text
src/content/guide/*.mdx (content collection) → Astro build
```

## 1. Core rule
`src/content/guide/*.mdx` is the source of truth. There is no extract/verify pipeline and no word-for-word fidelity check; the user accepts drift from any original source text.

- Edit page text and markup only when the user asks. Do not "improve" wording, facts or structure on your own initiative.
- Long chapters can be split into a folder: `src/content/guide/part-N/00-intro.mdx`, `01-gateway-1.mdx`, … (one file per gateway plus its aftermath; filename order = page order; frontmatter only in `00-*`). `src/lib/chapterLoader.mjs` joins them into one page at build time (output goes to the git-ignored `src/content/generated/`; never edit that). Currently part-3 and part-4; the rest are single files. A chapter is either `part-N.mdx` or a `part-N/` folder, never both.
- Each page's frontmatter (`title`, `category`, `order`) replaces the old manifest: it sets the page list, order and sidebar categories. Keep `order` unique and consecutive when pages are added, moved or removed. The on-page ToC is built automatically from the `####` headings.
- Prose is Markdown (`**bold**`, `*italic*`, `---`, `####` section headings). Map boards, boss/enemy cards and character portraits are components used directly in the MDX: `<Board>`, `<EnemyCard>`, `<Figure>`, `<CharacterIntro>` (`src/components/guide/`; board icon keys in `pieces.ts`). Tables that do not fit a component stay as raw JSX/HTML in the page.
- Bolding: default step whenever a page is converted/added; do it without asking (the exception to "only when the user asks" above). Wrap game mechanics, characters and enemies, abilities, items and places/objectives in `**…**`, every occurrence. Touch paragraph text only, not headings, links, `*italics*`, or the board/card components. Rules, glossary and open decisions live in `BOLDING.md` (applies to part 4 and later pages; part 3 stays as hand-edited). Bold from the glossary only, longest match first.
- Source files for the guide are not saved yet. The current `placeholder` page stands in until the user provides them.

## 2. Build
- Build: `npm run build` (run it normally, not through `cmd /c`). Ad-hoc JavaScript: temp `.mjs` file, not long `node -e`.
- Site settings (title, base, site URL) live in `project.config.json`.

## 3. Presentation (look decisions live in `DESIGN.md`)
- Pages render the MDX `<Content />` inside `.guide-body` (`src/pages/guide/[id].astro`, which also registers the guide components); restyle via `src/styles/global.css` and the other files in `src/styles/`.
- Shell: fixed sidebar with logo, mobile header + drawer (`src/components/layout/`), background, favicon.
- Features: sidebar nav + prev/next, reading progress (localStorage), on-page ToC (h4 headings), header icons, Lucide sidebar icons.
- No monospace anywhere.
- Header icons: headings carry `data-icon`; `src/styles/header-icons.css` holds one mask per icon.
- Sidebar icons: `src/lib/nav-icon-rules.mjs` (category → icon, keyword rules for entries).
- `public/` still holds images from the old guide (characters, arenas, Drake walkthrough); they are unused until pages reference them.

## 4. Workflow rules
- No mutating git without approval, no browser testing unless asked.
- Ask before adding a new component or feature beyond section 3.

## 5. Out of scope
Crawling, backends, RAG, knowledge graphs, bulk converters.
