# Dissidia 012 [duodecim] Guide — Agent Instructions

A personal, easier-to-read static Astro site on GitHub Pages. The guide pages are **hand-owned**: the user edits them to their own taste. Same architecture as the persona-4-golden-guide project.

```text
src/data/pages/*.html + src/data/manifest.json → Astro build
```

## 1. Core rule
`src/data/pages/*.html` is the source of truth. There is no extract/verify pipeline and no word-for-word fidelity check; the user accepts drift from any original source text.

- Edit page text and markup only when the user asks. Do not "improve" wording, facts or structure on your own initiative.
- `src/data/manifest.json` (page list, order, categories, ToC entries) is also hand-owned: keep it consistent when pages or h4 headings are added, renamed or removed.
- Bolding: default step whenever a page is converted/added; do it without asking (the exception to "only when the user asks" above). Wrap game mechanics, characters and enemies, abilities, items and places/objectives in plain `<strong>`, every occurrence. Touch paragraph text only, not headings, links, `<em>`, or the board/card tables. Curate the term list per page.
- Source files for the guide are not saved yet. The current `placeholder` page stands in until the user provides them.

## 2. Build
- Build: `cmd /c npm run build` (avoids PowerShell ExecutionPolicy errors). Ad-hoc JavaScript: temp `.mjs` file, not long `node -e`.
- Site settings (title, base, site URL) live in `project.config.json`.

## 3. Presentation (look decisions live in `DESIGN.md`)
- Pages render the stored HTML with `set:html` inside `.guide-body`; restyle via `src/styles/global.css` and the other files in `src/styles/`.
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
