// Fetches the Drake walkthrough (index + Part 1-26 + Reports) from the Fandom MediaWiki API.
// Writes raw wikitext + rendered HTML to sources/drake/ and downloads images to public/drake/.
// Usage: node scripts/fetch-drake.mjs
import fs from 'node:fs/promises';
import path from 'node:path';

const API = 'https://finalfantasy.fandom.com/api.php';
const BASE = 'Walkthrough:Dissidia_012_Final_Fantasy/Drake';
const UA = { 'User-Agent': 'Mozilla/5.0' };
const names = ['index', ...Array.from({ length: 26 }, (_, i) => `Part_${i + 1}`), 'Reports'];

const rawDir = 'sources/drake/raw';
const htmlDir = 'sources/drake/html';
const imgDir = 'public/drake';
for (const d of [rawDir, htmlDir, imgDir]) await fs.mkdir(d, { recursive: true });

const parse = async (title) => {
  const url = `${API}?action=parse&page=${title}&prop=wikitext|text&format=json&formatversion=2`;
  const res = await fetch(url, { headers: UA });
  const json = await res.json();
  if (!json.parse) throw new Error(`parse failed for ${title}: ${JSON.stringify(json.error)}`);
  return json.parse;
};

const images = new Map(); // remote url -> local file name
const fullUrl = new Map(); // local file name -> full-size remote url
for (const name of names) {
  const title = name === 'index' ? BASE : `${BASE}/${name}`;
  const p = await parse(title);
  await fs.writeFile(path.join(rawDir, `${name}.wiki`), p.wikitext);
  await fs.writeFile(path.join(htmlDir, `${name}.html`), p.text);
  for (const m of p.text.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const src = tag.match(/\bdata-src="([^"]+)"/)?.[1] ?? tag.match(/\bsrc="([^"]+)"/)?.[1];
    if (!src?.includes('static.wikia.nocookie.net')) continue;
    const key = tag.match(/data-image-key="([^"]+)"/)?.[1]
      ?? decodeURIComponent(src.split('/revision/')[0].split('/').pop());
    // Local file is always the full-size image; the scaled url is kept as a lookup key.
    const full = src.replace(/&amp;/g, '&').replace(/\/scale-to-width-down\/\d+/, '');
    images.set(src.replace(/&amp;/g, '&'), decodeURIComponent(key));
    fullUrl.set(decodeURIComponent(key), full);
  }
  console.log(name.padEnd(8), 'ok');
}

const byFile = new Map(fullUrl);

let done = 0;
const entries = [...byFile];
const worker = async () => {
  while (entries.length) {
    const [file, url] = entries.shift();
    const dest = path.join(imgDir, file);
    try { await fs.access(dest); done++; continue; } catch {}
    // format=original stops Fandom from re-encoding to WebP under a .png name.
    const res = await fetch(`${url}${url.includes('?') ? '&' : '?'}format=original`, { headers: UA });
    if (!res.ok) { console.log('FAIL', res.status, file); continue; }
    await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
    done++;
  }
};
await Promise.all(Array.from({ length: 6 }, worker));

const map = Object.fromEntries([...images].map(([url, file]) => [url, `drake/${file}`]));
await fs.writeFile('sources/drake/images.json', JSON.stringify(map, null, 2));
console.log(`images: ${byFile.size} unique files, ${done} present`);
