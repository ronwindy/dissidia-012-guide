import { getCollection, render } from 'astro:content';

export interface PageEntry {
  id: string;
  title: string;
  category: string;
}

export interface PageToc {
  id: string;
  title: string;
}

export interface TocCategory {
  category: string;
  entries: PageEntry[];
}

/** Pages sorted by frontmatter `order`. */
export async function getPages(): Promise<PageEntry[]> {
  const entries = await getCollection('guide');
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((e) => ({ id: e.id, title: e.data.title, category: e.data.category }));
}

/** On-page ToC entries: the h4 headings of a page. */
export async function getPageToc(entry: Parameters<typeof render>[0]): Promise<PageToc[]> {
  const { headings } = await render(entry);
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
