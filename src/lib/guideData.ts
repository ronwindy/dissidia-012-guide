import { getCollection, type CollectionEntry } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

type GuideEntry = CollectionEntry<'guide'>;
type Heading = { depth: number; slug: string; text: string };

/** The contents page is navigation: it is left out of read progress and of its own list. */
export const CONTENTS_ID = 'contents';

export interface PageEntry {
  id: string;
  title: string;
  category: string;
  order: number;
}

export interface PageToc {
  id: string;
  title: string;
}

export interface TocCategory {
  category: string;
  entries: PageEntry[];
}

interface Page extends PageEntry {
  /** Section entries in page order (a single-file page has one). */
  sections: GuideEntry[];
}

// Build runs from the project root; import.meta.url points into dist/ once bundled.
const GUIDE_DIR = join(process.cwd(), 'src/content/guide');

function hasFrontmatter(id: string): boolean {
  return /^---\r?\n/.test(readFileSync(join(GUIDE_DIR, `${id}.mdx`), 'utf8'));
}

function metaOf(where: string, data: GuideEntry['data']): Omit<PageEntry, 'id'> {
  const { title, category, order } = data;
  if (!title || !category || order === undefined) {
    throw new Error(`Guide: ${where} needs title, category and order in its frontmatter.`);
  }
  return { title, category, order };
}

let pagesCache: Promise<Page[]> | undefined;

/** Builds the page list from the collection and enforces the chapter rules. */
function loadPages(): Promise<Page[]> {
  pagesCache ??= (async () => {
    const entries = await getCollection('guide');
    const singles = new Map<string, GuideEntry>();
    const folders = new Map<string, GuideEntry[]>();
    for (const entry of entries) {
      const slash = entry.id.indexOf('/');
      if (slash < 0) {
        singles.set(entry.id, entry);
      } else {
        const chapter = entry.id.slice(0, slash);
        folders.set(chapter, [...(folders.get(chapter) ?? []), entry]);
      }
    }

    const pages: Page[] = [];
    for (const [id, entry] of singles) {
      if (folders.has(id)) {
        throw new Error(`Guide: both "${id}.mdx" and the "${id}/" folder exist. Keep only one.`);
      }
      pages.push({ id, ...metaOf(`"${id}.mdx"`, entry.data), sections: [entry] });
    }

    for (const [id, files] of folders) {
      const sections = [...files].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
      const head = sections.find((s) => s.id.split('/')[1].startsWith('00-'));
      if (!head) {
        throw new Error(`Guide: folder "${id}/" has no 00-* file to hold the page title, category and order.`);
      }
      const meta = metaOf(`"${head.id}.mdx"`, head.data);
      for (const s of sections) {
        if (s !== head && hasFrontmatter(s.id)) {
          throw new Error(`Guide: "${s.id}.mdx" has frontmatter. Only the 00-* file of a chapter may.`);
        }
      }
      pages.push({ id, ...meta, sections });
    }

    pages.sort((a, b) => a.order - b.order);
    const consecutive = pages.every((p, i) => p.order === i + 1);
    if (!consecutive) {
      const found = pages.map((p) => `${p.id}=${p.order}`).join(', ');
      throw new Error(
        `Guide: "order" must be unique and consecutive 1..${pages.length}. Found: ${found}.`,
      );
    }
    return pages;
  })();
  return pagesCache;
}

/** Pages sorted by frontmatter `order`. */
export async function getPages(): Promise<PageEntry[]> {
  return (await loadPages()).map(({ id, title, category, order }) => ({ id, title, category, order }));
}

/** Section entries of one page, in page order. */
export async function getPageSections(id: string): Promise<GuideEntry[]> {
  const page = (await loadPages()).find((p) => p.id === id);
  if (!page) throw new Error(`Guide: no page "${id}".`);
  return page.sections;
}

/** On-page ToC entries: the h4 headings of all sections, in order. */
export function getPageToc(headings: Heading[]): PageToc[] {
  return headings.filter((h) => h.depth === 4).map((h) => ({ id: h.slug, title: h.text }));
}

/** Sidebar data: pages grouped by consecutive category. */
export async function getToc(): Promise<TocCategory[]> {
  const categories: TocCategory[] = [];
  for (const page of await getPages()) {
    let cat = categories[categories.length - 1];
    if (!cat || cat.category !== page.category) {
      cat = { category: page.category, entries: [] };
      categories.push(cat);
    }
    cat.entries.push(page);
  }
  return categories;
}

export async function getNeighbours(id: string): Promise<{ prev?: PageEntry; next?: PageEntry }> {
  const pages = await getPages();
  const at = pages.findIndex((p) => p.id === id);
  return at < 0 ? {} : { prev: pages[at - 1], next: pages[at + 1] };
}
