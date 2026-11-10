import { readFileSync } from "node:fs";

/**
 * Remark plugin: bolds glossary terms and chapter/level references, and italicises
 * numbers, in prose at build time. Rules and glossary: BOLDING.md, src/data/glossary.json.
 *
 * Skipped: headings, links, code, existing **bold** / *italic* (the author's own markup
 * always wins), and anything inside an inline <span>…</span> (the escape hatch).
 * Pages listed in glossary.json `skipPages` are left untouched.
 */
const glossary = JSON.parse(
  readFileSync(new URL("../data/glossary.json", import.meta.url), "utf8"),
);

const escapeRe = (s) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/&/g, "&");

const terms = [...new Set(Object.values(glossary.terms).flat())]
  .filter(Boolean)
  .sort((a, b) => b.length - a.length)
  .map(escapeRe)
  .join("|");

const ref = "(?:Chapter|Gateway) \\d+|Level \\d+(?:-\\d+)?";
const num =
  "(?<![\\w.#])(?!01[23]\\b)\\d+(?:,\\d{3})*(?:\\.\\d+)?(?:-\\d+)?(?:%| ?(?:HP|BRV|KP|CP|seconds?|minutes?)(?!\\w))?(?![\\w])";
const re = new RegExp(
  `(${ref})|(Part \\d+)|(${num})|(?<![\\w'-])(${terms})(?![\\w])`,
  "g",
);

const SKIP = new Set([
  "heading",
  "link",
  "linkReference",
  "inlineCode",
  "code",
  "strong",
  "emphasis",
  "delete",
  "yaml",
]);

function convert(value) {
  const out = [];
  let last = 0;
  for (const m of value.matchAll(re)) {
    if (m.index > last) out.push({ type: "text", value: value.slice(last, m.index) });
    const [, rf, part, nm, tm] = m;
    if (part) {
      last = m.index + m[0].length;
      out.push({ type: "text", value: part });
      continue;
    }
    out.push(
      nm
        ? { type: "emphasis", children: [{ type: "text", value: nm }] }
        : { type: "strong", children: [{ type: "text", value: rf ?? tm }] },
    );
    last = m.index + m[0].length;
  }
  if (!out.length) return null;
  if (last < value.length) out.push({ type: "text", value: value.slice(last) });
  return out;
}

function visit(node) {
  if (!node.children) return;
  if (SKIP.has(node.type)) return;
  if (node.type === "mdxJsxTextElement" && node.name === "span") return;
  const next = [];
  for (const child of node.children) {
    if (child.type === "text") {
      next.push(...(convert(child.value) ?? [child]));
    } else {
      visit(child);
      next.push(child);
    }
  }
  node.children = next;
}

export default function remarkGlossary() {
  return (tree, file) => {
    const page = (file.path ?? "").replace(/\\/g, "/").split("/").pop()?.replace(/\.mdx?$/, "");
    if (glossary.skipPages.includes(page)) return;
    visit(tree);
  };
}
