import { glob } from "astro/loaders";
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  statSync,
} from "node:fs";
import path from "node:path";

/**
 * Guide content loader.
 *
 * - `src/content/guide/*.mdx`              -> single-file chapters (as before)
 * - `src/content/guide/<chapter>/*.mdx`    -> chapter split into sections; the files are
 *   joined in filename order (00-intro, 01-..., ...) into one page `<chapter>`.
 *   Only the first file carries frontmatter.
 *
 * Joined chapters are written to `src/content/generated/<chapter>.mdx` (git-ignored,
 * never edit) so the normal MDX pipeline compiles them.
 */
const GUIDE = "src/content/guide";
const OUT = "src/content/generated";

function sectionFiles(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort();
}

function buildChapters() {
  mkdirSync(OUT, { recursive: true });
  for (const name of readdirSync(GUIDE)) {
    const dir = path.join(GUIDE, name);
    if (!statSync(dir).isDirectory()) continue;
    const body =
      sectionFiles(dir)
        .map((f) => readFileSync(path.join(dir, f), "utf8").trimEnd())
        .join("\n\n") + "\n";
    const target = path.join(OUT, `${name}.mdx`);
    let prev = "";
    try {
      prev = readFileSync(target, "utf8");
    } catch {}
    if (prev !== body) writeFileSync(target, body);
  }
}

export function guideLoader() {
  const inner = glob({
    base: "./src/content",
    pattern: ["guide/*.mdx", "generated/*.mdx"],
    generateId: ({ entry }) => path.basename(entry, ".mdx"),
  });
  return {
    name: "guide-loader",
    async load(ctx) {
      buildChapters();
      // Rebuild the joined chapter when a section file changes in dev.
      ctx.watcher?.add(GUIDE);
      ctx.watcher?.on("change", (file) => {
        const rel = path.relative(GUIDE, file).split(path.sep);
        if (rel.length === 2 && rel[1].endsWith(".mdx")) buildChapters();
      });
      return inner.load(ctx);
    },
  };
}
