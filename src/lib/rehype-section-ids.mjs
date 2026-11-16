import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import GithubSlugger from "github-slugger";

/**
 * Rehype plugin: heading ids for chapter sections.
 *
 * A chapter folder (src/content/guide/<chapter>/*.mdx) renders as one page, but each
 * section is compiled on its own. Astro gives each file a fresh slugger, so a heading
 * repeated in two sections (e.g. "Boss Fight") would get the same id twice. This feeds
 * a slugger the headings of the earlier sibling sections first, so ids match what the
 * old single-document build produced (-1, -2 suffixes included).
 */

const HEADING_LINE = /^(#{1,6})\s+(.+?)\s*#*\s*$/;

/** Plain text of a markdown heading, roughly as hast-util-to-string would see it. */
function plain(md) {
  return md
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`]/g, "")
    .trim();
}

/** Heading texts of a markdown source, in order, skipping fenced code blocks. */
function markdownHeadings(source) {
  const out = [];
  let fence = false;
  for (const line of source.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    if (fence) continue;
    const m = HEADING_LINE.exec(line);
    if (m) out.push(plain(m[2]));
  }
  return out;
}

function toText(node) {
  if (node.type === "text") return node.value;
  return (node.children ?? []).map(toText).join("");
}

function walk(node, fn) {
  fn(node);
  for (const child of node.children ?? []) walk(child, fn);
}

export default function rehypeSectionIds() {
  return (tree, file) => {
    const filePath = String(file.path ?? "");
    const m = filePath.replace(/\\/g, "/").match(/\/content\/guide\/[^/]+\/([^/]+)\.mdx?$/);
    if (!m) return;

    const dir = path.dirname(filePath);
    const name = path.basename(filePath);
    const siblings = readdirSync(dir).filter((f) => f.endsWith(".mdx")).sort();
    const earlier = siblings.slice(0, siblings.indexOf(name));

    const slugger = new GithubSlugger();
    for (const f of earlier) {
      for (const text of markdownHeadings(readFileSync(path.join(dir, f), "utf8"))) {
        slugger.slug(text);
      }
    }

    walk(tree, (node) => {
      if (node.type !== "element" || !/^h[1-6]$/.test(node.tagName)) return;
      const id = slugger.slug(toText(node));
      node.properties ??= {};
      if (!node.properties.id) node.properties.id = id;
    });
  };
}
