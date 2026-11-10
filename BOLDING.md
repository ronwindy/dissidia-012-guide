# Bolding rules and glossary

Bolding is applied **automatically at build time** by `src/lib/remark-glossary.mjs` (registered in `astro.config.mjs`). Pages contain no baked-in bold for glossary terms. `CLAUDE.md` points here.

## How it works

- **Glossary:** `src/data/glossary.json` is the single source of truth. To bold a new term, add it there (aliases and plurals as separate entries) and restart the dev server. Longest match wins (`Chaos Piece`, never `**Chaos** Piece`). Matching is case-sensitive and whole-word.
- **Numbers** with their unit are italic automatically (`*1600 BRV*`, `*50%*`, `*15 seconds*`). Spelled-out counts stay plain. `Part N` and the series numbers 012/013 are left alone.
- **References** (`Chapter N`, `Gateway N`, `Level N`, `Level N-M`) are bold automatically.
- **Never touched:** headings, links, code, component props, and anything you wrote yourself as `**bold**` or `*italic*` (your own markup always wins).
- **Escape hatch:** wrap text in an inline `<span>…</span>` to stop the plugin there, e.g. `<span>Chaos</span>` when it is just a word.
- **Opt-out pages:** `skipPages` in `glossary.json` (currently `part-3` and `gameplay-basics`, which stay as hand-edited).

## Working rules for Claude

- Do not hand-bold glossary terms or italicise numbers in new pages; the plugin does it.
- Unknown capitalised phrases are not bolded. Report them as candidates and add them to the glossary only after the user rules on them.
- When a term is wrongly missed, fix it in `glossary.json`, not in the page.
