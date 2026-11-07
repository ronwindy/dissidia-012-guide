// Converts a fetched Drake page (sources/drake/html/<name>.html) to semantic page HTML in src/data/pages/.
// Usage: node scripts/convert-drake.mjs <Part_N|Reports> <page-id> "<Page title>"
// Prints the ToC entries as JSON for src/data/manifest.json.
import fs from 'node:fs';
import { parseFragment } from 'parse5';

const [name, id, title] = process.argv.slice(2);
if (!name || !id || !title) throw new Error('usage: convert-drake.mjs <Part_N> <page-id> "<title>"');

const project = JSON.parse(fs.readFileSync('project.config.json', 'utf8'));
const images = JSON.parse(fs.readFileSync('sources/drake/images.json', 'utf8'));
const html = fs.readFileSync(`sources/drake/html/${name}.html`, 'utf8');

// ---- small helpers over parse5's default tree ----
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const cls = (n) => (attr(n, 'class') ?? '').split(/\s+/);
const kids = (n) => n.childNodes ?? [];
const text = (n) => (n.nodeName === '#text' ? n.value : kids(n).map(text).join(''));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const partIds = Object.fromEntries(
  Array.from({ length: 26 }, (_, i) => [`Part_${i + 1}`, `part-${i + 1}`]).concat([['Reports', 'reports']]),
);
const toc = [];

/** Local path for a Fandom image tag, or null when it is not one we downloaded. */
function localSrc(img) {
  const src = (attr(img, 'data-src') ?? attr(img, 'src') ?? '').replace(/&amp;/g, '&');
  const file = images[src];
  return file ? `${project.base}/${file}` : null;
}

/** Link target: Drake parts map to guide pages; other wiki links lose the link; external links stay. */
function linkTarget(a) {
  const href = attr(a, 'href') ?? '';
  const m = href.match(/Walkthrough:Dissidia_012_Final_Fantasy\/Drake\/([A-Za-z_0-9]+)/);
  if (m && partIds[m[1]]) return `${project.base}/guide/${partIds[m[1]]}`;
  return /^https?:/.test(href) && !href.includes('fandom.com') ? href : null;
}

const SIMPLE = { b: 'strong', strong: 'strong', i: 'em', em: 'em', ul: 'ul', ol: 'ol', li: 'li', p: 'p', br: 'br', hr: 'hr', u: 'u', sup: 'sup', sub: 'sub' };

function inline(n) {
  if (n.nodeName === '#text') return esc(n.value);
  if (n.nodeName.startsWith('#')) return '';
  return element(n);
}
const inner = (n) => kids(n).map(inline).join('');

/** An <a> wrapping an image is the file-page link; keep just the image. */
function image(img) {
  const src = localSrc(img);
  if (!src) return '';
  const w = attr(img, 'width');
  const h = attr(img, 'height');
  const wrapper = img.parentNode;
  const t = wrapper?.nodeName === 'a' ? attr(wrapper, 'title') : undefined;
  return `<img src="${src}" alt="${escAttr(attr(img, 'alt') ?? '')}"${t ? ` title="${escAttr(t)}"` : ''}${w ? ` width="${w}"` : ''}${h ? ` height="${h}"` : ''} loading="lazy">`;
}

function element(n) {
  const tag = n.nodeName;
  if (tag === 'img') return image(n);
  if (tag === 'a') {
    if (kids(n).some((c) => c.nodeName === 'img')) return inner(n);
    const to = linkTarget(n);
    return to ? `<a href="${escAttr(to)}">${inner(n)}</a>` : inner(n);
  }
  if (tag === 'figure') {
    const side = cls(n).find((c) => /^mw-halign-/.test(c))?.replace('mw-halign-', '');
    const body = kids(n).filter((c) => c.nodeName !== 'figcaption').map(inline).join('');
    return body ? `<figure${side ? ` class="${side}"` : ''}>${body}</figure>` : '';
  }
  if (tag === 'table') return table(n);
  if (tag === 'div' && /clear\s*:\s*both/.test(attr(n, 'style') ?? '')) return '';
  if (SIMPLE[tag]) {
    const t = SIMPLE[tag];
    if (t === 'br' || t === 'hr') return `<${t}>`;
    const body = inner(n);
    if (t === 'p' && !body.trim()) return '';
    return `<${t}>${body}</${t}>`;
  }
  if (/^h[2-6]$/.test(tag)) return heading(n);
  return inner(n); // span, font, div, svg wrappers etc.: unwrap
}

function heading(n) {
  const head = kids(n).find((c) => cls(c).includes('mw-headline')) ?? n;
  const label = text(head).trim();
  const level = Number(n.nodeName[1]) + 2; // wiki h2 -> site h4 (on-page ToC level)
  const hid = slug(label);
  if (level === 4) toc.push({ id: hid, title: label });
  return `<h${level} id="${hid}">${esc(label)}</h${level}>`;
}

// ---- tables ----
const BOARD_FLOOR = /cabd62/i;
const hidden = (n) => /display\s*:\s*none/.test(attr(n, 'style') ?? '');

function table(t) {
  if (cls(t).includes('board')) return board(t);
  return plainTable(t, cls(t).includes('toccolours') ? null : 'card');
}

function rows(t) {
  const out = [];
  const walk = (n) => kids(n).forEach((c) => (c.nodeName === 'tr' ? out.push(c) : walk(c)));
  walk(t);
  return out;
}
const cells = (tr) => kids(tr).filter((c) => (c.nodeName === 'td' || c.nodeName === 'th') && !hidden(c));

/** Map board: lettered columns, numbered rows, tan floor cells with tile icons. */
function board(t) {
  const [head, ...body] = rows(t);
  const letters = cells(head).map((c) => text(c).trim()).filter(Boolean);
  let out = `<table class="board"><thead><tr><td></td>${letters.map((l) => `<th scope="col">${l}</th>`).join('')}</tr></thead><tbody>`;
  for (const tr of body) {
    const [num, ...rest] = cells(tr);
    out += `<tr><th scope="row">${text(num).trim()}</th>`;
    for (const c of rest) {
      const floor = BOARD_FLOOR.test(attr(c, 'bgcolor') ?? '');
      out += `<td${floor ? ' class="floor"' : ''}>${inner(c).trim()}</td>`;
    }
    out += '</tr>';
  }
  return `${out}</tbody></table>`;
}

/** Other tables (boss / enemy cards): keep structure and spans, drop colours and widths. */
function plainTable(t, className) {
  if (!className) return ''; // navigation boxes
  let out = `<table class="${className}"><tbody>`;
  for (const tr of rows(t)) {
    out += '<tr>';
    for (const c of cells(tr)) {
      const span = ['colspan', 'rowspan'].map((k) => (attr(c, k) ? ` ${k}="${attr(c, k)}"` : '')).join('');
      out += `<${c.nodeName}${span}>${inner(c).trim()}</${c.nodeName}>`;
    }
    out += '</tr>';
  }
  return `${out}</tbody></table>`;
}

// ---- page ----
const root = parseFragment(html).childNodes.find((n) => n.nodeName === 'div');
let out = `<h1>${esc(title)}</h1>\n`;
for (const n of kids(root)) {
  if (n.nodeName === '#text' || n.nodeName === '#comment') continue;
  if (n.nodeName === 'div' && attr(n, 'id') === 'toc') continue;
  const piece = element(n).trim();
  if (piece) out += `${piece}\n`;
}

fs.writeFileSync(`src/data/pages/${id}.html`, out);
console.log(JSON.stringify(toc));
