import { getDrakeBossRender, drakeIcons } from '../data/story/drakeAssets';

/**
 * Normalizes an asset path with the active BASE_URL
 */
export function resolveImg(src: string, baseUrl: string = '/'): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${base}${cleanSrc}`;
}

/**
 * Maps any MediaWiki / Fandom image name or URL to local static asset
 */
export function resolveLocalAsset(rawNameOrSrc: string, altText: string = '', baseUrl: string = '/'): string | null {
  const combined = decodeURIComponent(`${rawNameOrSrc} ${altText}`.toLowerCase());

  // Check specific board piece names
  if (combined.includes('start')) return resolveImg('/images/story/drake/pieces/start.png', baseUrl);
  if (combined.includes('hard battle') || combined.includes('hard_battle')) return resolveImg('/images/story/drake/pieces/hard-battle-piece.png', baseUrl);
  if (combined.includes('battle piece') || combined.includes('battle_piece')) return resolveImg('/images/story/drake/pieces/battle-piece.png', baseUrl);
  if (combined.includes('chaos piece') || combined.includes('chaos_piece')) return resolveImg('/images/story/drake/pieces/chaos-piece.png', baseUrl);
  if (combined.includes('rare chest') || combined.includes('rare_chest')) return resolveImg('/images/story/drake/pieces/rare-chest.png', baseUrl);
  if (combined.includes('chest')) return resolveImg('/images/story/drake/pieces/chest.png', baseUrl);
  if (combined.includes('stigma')) return resolveImg('/images/story/drake/pieces/stigma-of-chaos.png', baseUrl);
  if (combined.includes('cosmos piece') || combined.includes('cosmos_piece')) return resolveImg('/images/story/drake/pieces/cosmos-piece-012.png', baseUrl);
  if (combined.includes('potion')) return resolveImg('/images/story/drake/pieces/potion.png', baseUrl);
  if (combined.includes('phoenix')) return resolveImg('/images/story/drake/pieces/phoenix-down.png', baseUrl);
  if (combined.includes('summonstone') || combined.includes('summon')) return resolveImg('/images/story/drake/pieces/summonstone.png', baseUrl);
  if (combined.includes('emblem-blue') || combined.includes('blue emblem')) return resolveImg('/images/story/drake/pieces/emblem-blue.png', baseUrl);
  if (combined.includes('emblem-purple') || combined.includes('purple emblem')) return resolveImg('/images/story/drake/pieces/emblem-purple.png', baseUrl);
  if (combined.includes('emblem')) return resolveImg('/images/story/drake/pieces/emblem-red.png', baseUrl);
  if (combined.includes('moogle')) return resolveImg('/images/story/drake/pieces/moogle-icon.png', baseUrl);

  // Check character assists (e.g. Dissicon ff8 Lag1, Dissicon ff7 Tifa1, etc.)
  for (const charKey of Object.keys(drakeIcons)) {
    if (combined.includes(charKey)) {
      return resolveImg(drakeIcons[charKey], baseUrl);
    }
  }
  if (combined.includes('lag1') || combined.includes('laguna')) return resolveImg('/images/story/drake/icons/laguna.png', baseUrl);
  if (combined.includes('tifa1') || combined.includes('tifa')) return resolveImg('/images/story/drake/icons/tifa.png', baseUrl);
  if (combined.includes('kain1') || combined.includes('kain')) return resolveImg('/images/story/drake/icons/kain.png', baseUrl);
  if (combined.includes('vaan1') || combined.includes('vaan')) return resolveImg('/images/story/drake/icons/vaan.png', baseUrl);
  if (combined.includes('yuna1') || combined.includes('yuna')) return resolveImg('/images/story/drake/renders/yuna-render.png', baseUrl);

  // Character portraits & renders
  const bossRender = getDrakeBossRender(combined);
  if (bossRender) return resolveImg(bossRender, baseUrl);

  // Specific character renders
  if (combined.includes('lightning')) return resolveImg('/dissidia_012_characters/17_Lightning.png', baseUrl);
  if (combined.includes('warrior of light')) return resolveImg('/dissidia_012_characters/01_Warrior_of_Light.webp', baseUrl);
  if (combined.includes('firion')) return resolveImg('/dissidia_012_characters/02_Firion.png', baseUrl);
  if (combined.includes('onion knight')) return resolveImg('/dissidia_012_characters/03_Onion_Knight.png', baseUrl);
  if (combined.includes('cecil')) return resolveImg('/dissidia_012_characters/04_Cecil_Harvey.png', baseUrl);
  if (combined.includes('bartz')) return resolveImg('/dissidia_012_characters/06_Bartz_Klauser.png', baseUrl);
  if (combined.includes('terra')) return resolveImg('/dissidia_012_characters/07_Terra_Branford.png', baseUrl);
  if (combined.includes('cloud') && !combined.includes('darkness')) return resolveImg('/dissidia_012_characters/08_Cloud_Strife.png', baseUrl);
  if (combined.includes('squall')) return resolveImg('/dissidia_012_characters/10_Squall_Leonhart.png', baseUrl);
  if (combined.includes('zidane')) return resolveImg('/dissidia_012_characters/12_Zidane_Tribal.png', baseUrl);
  if (combined.includes('tidus')) return resolveImg('/dissidia_012_characters/13_Tidus.png', baseUrl);
  if (combined.includes('shantotto')) return resolveImg('/dissidia_012_characters/15_Shantotto.png', baseUrl);
  if (combined.includes('garland')) return resolveImg('/dissidia_012_characters/18_Garland.png', baseUrl);
  if (combined.includes('emperor')) return resolveImg('/dissidia_012_characters/19_The_Emperor.png', baseUrl);
  if (combined.includes('cloud of darkness')) return resolveImg('/dissidia_012_characters/20_Cloud_of_Darkness.png', baseUrl);
  if (combined.includes('golbez')) return resolveImg('/dissidia_012_characters/21_Golbez.png', baseUrl);
  if (combined.includes('exdeath')) return resolveImg('/dissidia_012_characters/22_Exdeath.png', baseUrl);
  if (combined.includes('kefka')) return resolveImg('/dissidia_012_characters/23_Kefka_Palazzo.png', baseUrl);
  if (combined.includes('sephiroth')) return resolveImg('/dissidia_012_characters/24_Sephiroth.png', baseUrl);
  if (combined.includes('ultimecia')) return resolveImg('/dissidia_012_characters/25_Ultimecia.png', baseUrl);
  if (combined.includes('kuja')) return resolveImg('/dissidia_012_characters/26_Kuja.png', baseUrl);
  if (combined.includes('jecht')) return resolveImg('/dissidia_012_characters/27_Jecht.png', baseUrl);
  if (combined.includes('gabranth')) return resolveImg('/dissidia_012_characters/28_Gabranth.png', baseUrl);
  if (combined.includes('prishe')) return resolveImg('/dissidia_012_characters/29_Prishe.png', baseUrl);
  if (combined.includes('gilgamesh')) return resolveImg('/dissidia_012_characters/30_Gilgamesh.png', baseUrl);
  if (combined.includes('feral chaos') || combined.includes('desperado chaos')) return resolveImg('/dissidia_012_characters/31_Feral_Chaos.png', baseUrl);
  if (combined.includes('aerith')) return resolveImg('/dissidia_012_characters/32_Aerith.png', baseUrl);

  return null;
}

/**
 * 1. Remove all redundant MediaWiki bottom navigation tables (Image 1)
 */
export function removeRedundantNavigation(html: string): string {
  if (!html) return '';
  let output = html;
  
  // Robust balanced removal for toccolours navigation tables with any depth of nested tables
  let searchIdx = 0;
  while (true) {
    const startMatch = output.slice(searchIdx).match(/<table(?:\s+[^>]*)?class=["'][^"']*toccolours[^"']*["'][^>]*>/i);
    if (!startMatch || startMatch.index === undefined) break;

    const tableStart = searchIdx + startMatch.index;
    let depth = 0;
    let tableEnd = -1;
    const tagRegex = /<\/?table\b[^>]*>/gi;
    tagRegex.lastIndex = tableStart;

    let tagMatch: RegExpExecArray | null;
    while ((tagMatch = tagRegex.exec(output)) !== null) {
      if (tagMatch[0].toLowerCase().startsWith('<table')) {
        depth++;
      } else {
        depth--;
        if (depth === 0) {
          tableEnd = tagMatch.index + tagMatch[0].length;
          break;
        }
      }
    }

    if (tableEnd !== -1) {
      output = output.slice(0, tableStart) + output.slice(tableEnd);
      searchIdx = tableStart;
    } else {
      output = output.slice(0, tableStart);
      break;
    }
  }

  // Remove standalone tables containing Drake Clawfang's Dissidia 012 Walkthrough navigation links
  output = output.replace(/<table(?:\s+[^>]*)?>((?:(?!<table)[\s\S])*?Drake Clawfang(?:'s)?\s+Dissidia\s+012\s+Walkthrough[\s\S]*?)<\/table>/gi, '');

  // Clean HTML comments
  output = output.replace(/<!--[\s\S]*?-->/g, '');

  // Clean empty paragraphs or trailing breaks left behind
  output = output.replace(/<p>\s*(?:<br\s*\/?>)?\s*<\/p>/gi, '');
  
  return output;
}

/**
 * Helper to replace text only in text nodes (outside HTML tags)
 */
function replaceInTextNodes(html: string, replacerFn: (text: string) => string): string {
  const parts = html.split(/(<[^>]+>)/g);
  for (let i = 0; i < parts.length; i += 2) {
    if (parts[i]) {
      parts[i] = replacerFn(parts[i]);
    }
  }
  return parts.join('');
}

/**
 * Transforms MediaWiki Boss tables into the Boss Spotlight Card including Fighting Tips & Combat Strategy inside
 */
function transformBossTables(html: string, baseUrl: string): string {
  const bossRegex = /<table(?:\s+[^>]*)?>((?:(?!<table)[\s\S])*?<b>Boss<\/b>[\s\S]*?)<\/table>/gi;
  
  let match: RegExpExecArray | null;
  const matches: { index: number; length: number; tableHtml: string; innerHtml: string }[] = [];
  
  while ((match = bossRegex.exec(html)) !== null) {
    if (match[1].includes('HP') || match[1].includes('Bravery')) {
      matches.push({
        index: match.index,
        length: match[0].length,
        tableHtml: match[0],
        innerHtml: match[1]
      });
    }
  }

  if (matches.length === 0) return html;

  let result = '';
  let lastIndex = 0;

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    
    // Append content before this boss table
    result += html.slice(lastIndex, m.index);
    
    // Find the boundary for paragraphs following this boss table
    const afterStart = m.index + m.length;
    let afterEnd = html.length;
    if (i + 1 < matches.length) {
      afterEnd = matches[i + 1].index;
    }
    
    const segment = html.slice(afterStart, afterEnd);
    
    // Boss tips end before next <h2>, <table>, or <hr />
    const boundaryMatch = segment.match(/(?:<h2|<table|<hr\s*\/?>)/i);
    const tipSegmentEnd = boundaryMatch ? boundaryMatch.index : segment.length;
    const rawTipSegment = segment.slice(0, tipSegmentEnd);
    
    // Extract paragraphs inside tipSegment
    const pMatches = rawTipSegment.match(/<p>[\s\S]*?<\/p>/gi) || [];
    
    // Filter paragraphs for boss fighting tips vs world map transition
    const bossTipsParagraphs: string[] = [];
    const outsideParagraphs: string[] = [];
    
    for (let pIdx = 0; pIdx < pMatches.length; pIdx++) {
      const p = pMatches[pIdx];
      const text = p.replace(/<[^>]+>/g, '').trim();
      
      // If the last paragraph starts with world navigation instructions, leave it outside the boss card
      if (pIdx === pMatches.length - 1 && (text.startsWith('On the world map') || text.startsWith('With that done') || text.startsWith('You\'ll receive notification') || text.startsWith('Head to the PP Catalog'))) {
        outsideParagraphs.push(p);
      } else {
        bossTipsParagraphs.push(p);
      }
    }

    // Extract Boss Name
    let bossName = '';
    const trs = m.innerHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
    for (let tIdx = 0; tIdx < trs.length; tIdx++) {
      const tr = trs[tIdx];
      if (tr.includes('Boss</b>') || tr.includes('Boss</font>')) {
        if (tIdx + 1 < trs.length) {
          const nextTr = trs[tIdx + 1];
          const nameM = nextTr.match(/<b>([\s\S]*?)<\/b>/i);
          if (nameM) bossName = nameM[1].replace(/<[^>]+>/g, '').trim();
        }
      }
    }
    if (!bossName) {
      const linkMatch = m.innerHtml.match(/<a[^>]+title=["']([^"']+)["'][^>]*>/i);
      if (linkMatch) bossName = linkMatch[1].replace(/\(.*\)/, '').trim();
    }
    if (!bossName) bossName = 'Boss Encounter';

    // Extract stats (HP, Level, Bravery)
    let hp = '';
    let level = '';
    let bravery = '';
    let braveAttacks = '';
    let hpAttacks = '';
    let summon = 'None';
    let difficulty = '';

    for (let tIdx = 0; tIdx < trs.length; tIdx++) {
      const tr = trs[tIdx];
      const text = tr.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

      if (text.includes('HP') && text.includes('Level') && tIdx + 1 < trs.length) {
        const nextTr = trs[tIdx + 1];
        const tds = nextTr.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
        if (tds.length >= 3) {
          hp = tds[0].replace(/<[^>]+>/g, '').trim();
          level = tds[1].replace(/<[^>]+>/g, '').trim();
          bravery = tds[2].replace(/<[^>]+>/g, '').trim();
        }
      }

      if (text.includes('Brave Attacks') && tIdx + 1 < trs.length) {
        braveAttacks = trs[tIdx + 1].replace(/<[^>]+>/g, '').trim();
      }

      if (text.includes('HP Attacks') && tIdx + 1 < trs.length) {
        hpAttacks = trs[tIdx + 1].replace(/<[^>]+>/g, '').trim();
      }

      if (text.includes('Difficulty') && tIdx + 1 < trs.length) {
        const nextTr = trs[tIdx + 1];
        const tds = nextTr.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
        if (tds.length >= 2) {
          summon = tds[0].replace(/<[^>]+>/g, '').trim();
          difficulty = tds[1].replace(/<[^>]+>/g, '').trim();
        }
      }
    }

    const bossImg = resolveLocalAsset(bossName, `${bossName} render`, baseUrl) || resolveImg('/images/story/drake/renders/chaos-render.png', baseUrl);

    // Build the Boss Spotlight Card containing fighting tips & combat strategy inside
    const bossCardHtml = `
<div class="boss-encounter-panel drake-boss-card" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.7) 100%); border: 1px solid rgba(239, 68, 68, 0.35); border-left: 4px solid var(--color-chaos); border-radius: var(--radius-sm); padding: 1.5rem; margin: 2rem 0; box-shadow: 0 6px 20px rgba(0,0,0,0.4);">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.85rem;">
    <div style="display: flex; align-items: center; gap: 0.85rem;">
      <img src="${bossImg}" alt="${bossName}" style="width: 58px; height: 58px; object-fit: contain; border-radius: var(--radius-xs); border: 1px solid var(--color-chaos); background: rgba(0,0,0,0.5); padding: 2px;" />
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <span class="badge-pill badge-chaos">Boss Encounter</span>
          ${difficulty ? `<span class="badge-pill badge-crystal">Difficulty: ${difficulty}</span>` : ''}
        </div>
        <h4 style="margin: 0.1rem 0 0; font-size: 1.4rem; color: #ffffff; font-family: var(--font-heading); letter-spacing: 0.02em;">
          ${bossName} ${level ? `<span style="font-size: 0.95rem; color: var(--color-chaos); font-family: var(--font-mono); font-weight: 600;">(Lv. ${level})</span>` : ''}
        </h4>
      </div>
    </div>
    <div style="display: flex; gap: 0.65rem; font-family: var(--font-mono); font-size: 0.85rem; flex-wrap: wrap;">
      ${hp ? `
        <div style="background: rgba(0,0,0,0.45); padding: 0.3rem 0.7rem; border-radius: var(--radius-xs); border: 1px solid rgba(239, 68, 68, 0.25);">
          <span style="color: var(--text-dim);">HP:</span> <strong style="color: var(--color-hp);">${hp}</strong>
        </div>
      ` : ''}
      ${bravery ? `
        <div style="background: rgba(0,0,0,0.45); padding: 0.3rem 0.7rem; border-radius: var(--radius-xs); border: 1px solid rgba(56, 189, 248, 0.25);">
          <span style="color: var(--text-dim);">BRV:</span> <strong style="color: var(--color-brv);">${bravery}</strong>
        </div>
      ` : ''}
      ${summon && summon !== 'None' && summon !== 'Non' ? `
        <div style="background: rgba(0,0,0,0.45); padding: 0.3rem 0.7rem; border-radius: var(--radius-xs); border: 1px solid rgba(251, 191, 36, 0.25);">
          <span style="color: var(--text-dim);">Summon:</span> <strong style="color: #fbbf24;">${summon}</strong>
        </div>
      ` : ''}
    </div>
  </div>

  ${(braveAttacks || hpAttacks) ? `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.65rem; margin-bottom: 1.25rem; font-size: 0.85rem; font-family: var(--font-mono); background: rgba(0,0,0,0.3); padding: 0.75rem 1rem; border-radius: var(--radius-xs); border: 1px solid rgba(255,255,255,0.05);">
      ${braveAttacks ? `<div><strong style="color: var(--color-brv);">BRV Attacks:</strong> <span style="color: var(--text-sub);">${braveAttacks}</span></div>` : ''}
      ${hpAttacks ? `<div><strong style="color: var(--color-hp);">HP Attacks:</strong> <span style="color: var(--text-sub);">${hpAttacks}</span></div>` : ''}
    </div>
  ` : ''}

  ${bossTipsParagraphs.length > 0 ? `
    <div class="boss-fighting-tips-panel">
      <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.75rem; color: #fca5a5; font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;">
        <span style="font-size: 1.05rem;">⚔️</span> Combat Strategy & Fighting Tips
      </div>
      <div class="boss-tips-content" style="font-size: 0.93rem; line-height: 1.75; color: var(--text-main);">
        ${bossTipsParagraphs.join('\n')}
      </div>
    </div>
  ` : ''}
</div>`;

    result += bossCardHtml;
    if (outsideParagraphs.length > 0) {
      result += '\n' + outsideParagraphs.join('\n');
    }

    lastIndex = afterStart + tipSegmentEnd;
  }

  result += html.slice(lastIndex);
  return result;
}

/**
 * Transforms MediaWiki board tables into the exact GatewayChessBoard component structure
 */
function transformBoardTables(html: string, baseUrl: string): string {
  return html.replace(/<table(?:\s+[^>]*)?class=["'][^"']*D012\s+board[^"']*["'][^>]*>((?:(?!<table)[\s\S])*?)<\/table>/gi, (match, innerHtml) => {
    // Parse rows from table
    const trMatches = innerHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi);
    if (!trMatches || trMatches.length === 0) return match;

    // Header row (contains columns A, B, C...)
    const headerRow = trMatches[0];
    const colThs = headerRow.match(/<th[^>]*>([\s\S]*?)<\/th>/gi) || [];
    const cols: string[] = [];
    colThs.forEach((th: string) => {
      const text = th.replace(/<[^>]+>/g, '').trim();
      if (text && /^[A-Z]$/i.test(text)) {
        cols.push(text.toUpperCase());
      }
    });

    if (cols.length === 0) return match;

    // Data rows (1, 2, 3...)
    const rowItems: { rowNum: string; cells: { isTile: boolean; content: string; tooltip: string }[] }[] = [];

    for (let r = 1; r < trMatches.length; r++) {
      const tr = trMatches[r];
      const rowNumMatch = tr.match(/<th[^>]*>([\s\S]*?)<\/th>/i);
      const rowNum = rowNumMatch ? rowNumMatch[1].replace(/<[^>]+>/g, '').trim() : `${r}`;
      if (!rowNum || isNaN(Number(rowNum))) continue;

      const cellMatches = tr.match(/<(th|td)[^>]*>[\s\S]*?<\/(th|td)>/gi) || [];
      // Skip the first cell if it was the row number th
      const actualCells = cellMatches.slice(1);
      const cells: { isTile: boolean; content: string; tooltip: string }[] = [];

      for (let c = 0; c < cols.length; c++) {
        const cellHtml = actualCells[c] || '';
        const isTile = cellHtml.toLowerCase().includes('cabd62') || cellHtml.toLowerCase().includes('bgcolor="cabd62"');
        const coord = `${cols[c]}${rowNum}`;

        let pieceContent = '';
        let tooltip = coord;

        if (isTile) {
          // Check for image inside cell
          const imgMatch = cellHtml.match(/<img[^>]+>/i);
          if (imgMatch) {
            const imgTag = imgMatch[0];
            const dataNameMatch = imgTag.match(/data-image-name=["']([^"']+)["']/i);
            const altMatch = imgTag.match(/alt=["']([^"']+)["']/i);
            const titleMatch = cellHtml.match(/title=["']([^"']+)["']/i);
            const rawSrcMatch = imgTag.match(/src=["']([^"']+)["']/i);

            const imgName = dataNameMatch ? dataNameMatch[1] : (altMatch ? altMatch[1] : '');
            const title = titleMatch ? titleMatch[1] : (altMatch ? altMatch[1] : imgName);
            const resolvedSrc = resolveLocalAsset(imgName || rawSrcMatch?.[1] || '', title, baseUrl);

            if (resolvedSrc) {
              tooltip = `${coord}: ${title}`;
              pieceContent = `<img src="${resolvedSrc}" alt="${title}" title="${title}" style="max-width: 32px; max-height: 32px; object-fit: contain; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.6));" loading="lazy" />`;
            }
          } else {
            tooltip = `${coord}: Open Ground Tile`;
          }
        }

        cells.push({ isTile, content: pieceContent, tooltip });
      }

      rowItems.push({ rowNum, cells });
    }

    if (rowItems.length === 0) return match;

    const firstCol = cols[0];
    const lastCol = cols[cols.length - 1];
    const rowCount = rowItems.length;

    // Build exact GatewayChessBoard output
    return `
<div class="gateway-chessboard-wrapper" style="margin: 1.5rem 0 2rem;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
    <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--color-cosmos); text-transform: uppercase; font-weight: bold; display: flex; align-items: center; gap: 0.4rem;">
      <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #0284c7;"></span>
      Gateway Board Grid (${firstCol}1 - ${lastCol}${rowCount})
    </div>
    <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-dim);">
      Coordinates: <strong style="color: #38bdf8;">[${firstCol}-${lastCol}][1-${rowCount}]</strong>
    </div>
  </div>

  <div class="chessboard-table-container" style="background: #070b14; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-sm); padding: 0.75rem; overflow-x: auto; box-shadow: inset 0 2px 8px rgba(0,0,0,0.6);">
    <table class="drake-chessboard" style="border-collapse: separate; border-spacing: 2px; margin: 0 auto; user-select: none;">
      <thead>
        <tr>
          <th style="width: 32px; height: 32px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 2px;"></th>
          ${cols.map(c => `<th style="width: 44px; height: 32px; background: #0284c7; color: #ffffff; font-family: var(--font-mono); font-size: 0.88rem; font-weight: 800; text-align: center; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); letter-spacing: 0.05em;">${c}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rowItems.map(r => `
          <tr>
            <th style="width: 32px; height: 44px; background: #0284c7; color: #ffffff; font-family: var(--font-mono); font-size: 0.88rem; font-weight: 800; text-align: center; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">${r.rowNum}</th>
            ${r.cells.map(c => `
              <td 
                class="${c.isTile ? 'chess-cell active-tile' : 'chess-cell empty-void'}"
                title="${c.tooltip}"
                style="${c.isTile ? `
                  width: 44px; 
                  height: 44px; 
                  background: linear-gradient(135deg, #d8ca77 0%, #cabd62 60%, #b3a54b 100%); 
                  border: 1px solid rgba(255,255,255,0.4); 
                  border-radius: 3px; 
                  text-align: center; 
                  vertical-align: middle; 
                  padding: 2px;
                  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.3);
                  position: relative;
                  cursor: pointer;
                  transition: transform 0.15s ease, filter 0.15s ease;
                ` : `
                  width: 44px; 
                  height: 44px; 
                  background: transparent; 
                  border: 1px solid rgba(255,255,255,0.02);
                `}"
              >
                ${c.isTile ? `<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">${c.content}</div>` : ''}
              </td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
</div>`;
  });
}

/**
 * Transforms Playable Character header section into a stylized hero banner
 */
function transformPlayableHeroHeaders(html: string, baseUrl: string): string {
  return html.replace(/<p>\s*PLAYABLE CHARACTER\s*-\s*<b><a[^>]*>([^<]+)<\/a><\/b>\s*<\/p>\s*(<figure[\s\S]*?<\/figure>)?/gi, (match, heroName) => {
    const cleanName = heroName.trim();
    const heroImg = resolveLocalAsset(cleanName, `${cleanName} portrait`, baseUrl) || resolveImg('/images/story/drake/renders/lightning-render.png', baseUrl);

    return `
<div class="playable-hero-banner" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 0.7) 100%); border: 1px solid rgba(56, 189, 248, 0.3); border-left: 4px solid var(--color-cosmos); border-radius: var(--radius-sm); padding: 1rem 1.25rem; margin: 1.5rem 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
  <div style="display: flex; align-items: center; gap: 1rem;">
    <img src="${heroImg}" alt="${cleanName}" style="width: 58px; height: 58px; object-fit: contain; background: rgba(0,0,0,0.4); border-radius: var(--radius-xs); border: 1px solid var(--border-panel-subtle); padding: 3px;" />
    <div>
      <span class="badge-pill badge-cosmos" style="font-size: 0.72rem; letter-spacing: 0.05em;">PLAYABLE HERO</span>
      <h3 style="margin: 0.2rem 0 0; font-size: 1.45rem; color: var(--text-main); font-family: var(--font-heading); letter-spacing: 0.03em;">
        ${cleanName}
      </h3>
    </div>
  </div>
  <span class="badge-pill badge-new">Scenario Protagonist</span>
</div>`;
  });
}

/**
 * Replaces broken Wikia <img> tags across body content with local assets
 */
function fixGeneralImages(html: string, baseUrl: string): string {
  return html.replace(/<img([^>]+)>/gi, (match, attributes) => {
    const dataNameMatch = attributes.match(/data-image-name=["']([^"']+)["']/i);
    const altMatch = attributes.match(/alt=["']([^"']+)["']/i);
    const srcMatch = attributes.match(/src=["']([^"']+)["']/i);

    const imageName = dataNameMatch ? dataNameMatch[1] : (altMatch ? altMatch[1] : '');
    const currentSrc = srcMatch ? srcMatch[1] : '';

    // If it's an external static.wikia URL, resolve locally
    if (currentSrc.includes('wikia.nocookie.net') || (!currentSrc.startsWith('/') && !currentSrc.startsWith('http'))) {
      const localSrc = resolveLocalAsset(imageName || currentSrc, altMatch ? altMatch[1] : '', baseUrl);
      if (localSrc) {
        return `<img ${attributes.replace(/src=["'][^"']*["']/i, `src="${localSrc}"`)} style="max-width: 100%; height: auto; object-fit: contain;" />`;
      }
    }

    return match;
  });
}

/**
 * 7. Applies styled badges and inline icons for loot, chests, gil, KP, enemies, summons, skills, items, chains, gateways, and key combat mechanics
 */
function applyLootAndEntityHighlights(html: string, baseUrl: string): string {
  const chestIcon = resolveImg('/images/story/drake/pieces/chest.png', baseUrl);
  const moogleIcon = resolveImg('/images/story/drake/pieces/moogle-icon.png', baseUrl);

  return replaceInTextNodes(html, (text) => {
    let t = text;

    // Highlight Gil amounts: e.g. "50 gil", "200 gil", "120 gil", "1000 gil", "15,000 gil"
    t = t.replace(/\b(\d+[\d,]*\s*gil)\b/gi, '<span class="gil-highlight"><span class="gil-coin-icon">🪙</span><strong>$1</strong></span>');

    // Highlight KP amounts: e.g. "9 KP", "10 KP", "25 KP", "55 KP", "65 KP"
    t = t.replace(/\b(\d+\s*KP)\b/gi, '<span class="kp-highlight"><span class="kp-crystal-icon">✦</span><strong>$1</strong></span>');

    // Highlight Moogle mentions
    t = t.replace(/\b(Moogles?)\b/g, `<span class="moogle-highlight"><img src="${moogleIcon}" class="inline-loot-icon" alt="Moogle" />$1</span>`);

    // Highlight Chains & Chain Skills
    t = t.replace(/\b(Straight Chains?|Jump Chains?|Cross Chains?|Round Chains?|Multichains?|Multi-chains?|Multi Chains?|Chain Skills?|Chain Skill)\b/gi, '<span class="chain-highlight"><span class="chain-icon">⛓️</span><strong>$1</strong></span>');

    // Highlight Overworld interactive objects / items
    t = t.replace(/\b(Orbs? of the Dead|glowing orbs? of light|Orbs? of light)\b/gi, '<span class="chain-highlight"><span class="chain-icon">✦</span><strong>$1</strong></span>');

    // Highlight Gateways, Stigmas & Board Pieces
    t = t.replace(/\b(Blue Gateways?|Red Gateways?|Strange Battle Pieces?|Hard Battle Pieces?|Expert Battle Pieces?|Party Battle Pieces?|Chaos Pieces?|Cosmos Pieces?|Stigma of Chaos)\b/gi, '<span class="gateway-highlight"><span class="gateway-icon">🏛️</span><strong>$1</strong></span>');

    // Highlight Summons
    t = t.replace(/\b(Ifrit\s*\(Auto\)|Ifrit|Brynhildr|Demon Wall|Bahamut|Iron Giant|Mandragora|Tonberry|Cactuar|Shiva|Ramuh|Titan|Odin|Leviathan|Phoenix|Carbuncle|Alexander|Sylph|Magus Sisters|Atomos|Scarmiglione|Cagnazzo|Barbariccia|Rubicante|Calcabrina|Asura|Land Worm|Behemoth|Deathgaze|Puchily|Ultros|Typhon|Zalera|Lich|Marilith|Kraken|Tiamat)\b/g, '<span class="summon-highlight"><span class="summon-icon">🔮</span><strong>$1</strong></span>');

    // Highlight Enemy & Manikin names
    t = t.replace(/\b(Phantasmal Harlequins?|Phantasmal Girls?|Capricious Reapers?|Delusory Dragoons?|Idle Sky Pirates?|Fleeting Flash(?:es)?|False Stalwarts?|Imitation Gunners?|Transient Lions?|Imaginary Champions?|Fallacious Trees?|Mirage Magus(?:es)?|Mirage Magi|Phase Clowns?|Shadowy Sorceresses?|Conceptual Fools?|Fictitious Warriors?|Counterfeit Wraiths?|Imitation Liegemen|Imitation Liegeman|False Heroes?|False Champions?|Illusory Pugilists?|Ephemeral Summoners?|Deceptive Thoughts?|Pretending Scamps?|Unknown Soldiers?|Unknown Youth|Fake Puppets?|Gruesome Pawns?|Unfettered Pawns?|Feral Chaos|Desperado Chaos)\b/g, '<span class="enemy-highlight"><span class="enemy-icon">⚔️</span><strong>$1</strong></span>');

    // Highlight Specific Items, Accessories, Weapons, Armor & Equipment
    t = t.replace(/\b(Level 1-9(?:\s*Booster)?|Near Opponent(?:\s*Booster|\s*booster)?|HP 100%(?:\s*Booster|\s*accessories)?|Flash's Desires?|Dragoon's Desires?|Stalwart's Hopes?|Blackcrystal Slivers?|Delicious Fish Scales?|Iifa Leaves?|Iifa Leaf|Rosetta Stones?|Soul of Destruction|Pink Tails?|Power Rings?|Hyper Rings?|Guard Rings?|Pearl Rings?|Cursed Rings?|Cracked Shields?|Iron Shields?|Muscle Belts?|Earrings?|Hero's Seal|Mog's Amulet|Growth Eggs?|Super Ribbons?|Ribbons?|Chocobo Colognes?|Midgar Flowers?|Blue Drops?|Orange Drops?|Green Drops?|Red Drops?|Yellow Drops?|White Drops?|Black Drops?|Attractorbs?|Pearl Necklaces?|Dragonfly Orbs?|Guardian Bangles?|Blue Gems?|Puppeteer's Wheel|Bonecrushers?|Safety Bits?|Sniper Eyes?|Door to Despair|Together as One|True Past|Encounter and Survival|Leather Chestplates?|Leather Clothing|Leather Hats?|Bronze Helms?|Bronze Armor|Chainmail|Linen Cuirass|Power Armlets?|Plumed Hats?|Iron Helms?|Headbands?|Broadswords?|Bucklers?|Axis Blade|Kunai|Wakizashi|Slashers?|Capella|Altair|Flamberge|Shielded Armor|Ultima Weapon|Loxley Bow|Kotetsu|Healer's Staff|Brave Blade|Rebellion)\b/g, '<span class="item-highlight"><span class="item-icon">🛡️</span><strong>$1</strong></span>');

    // Highlight combat mechanics and system terms
    t = t.replace(/\b(EX Burst|EX Mode|EX Gauge|EX Revenge|EX Force|EX Charge|BRV Charge|Wall Rush(?:es|ed)?(?:\s+HP damage)?|Chase|Banish Traps?|Second Chance|Speed Boost|pre-emptive strikes?|Pre-emptive strikes?|Pre-emptive Strikes?|pre-emptive|Pre-emptive|Bonus Line|KP Chances?|KP Chance|AP Chances?|AP Chance|PP Catalog|Mognet|Battlegen(?:'d)?|Breaking|Break)\b/g, '<span class="mechanic-highlight">$1</span>');

    // Highlight Switch attack mechanics
    t = t.replace(/\b(Switch Attacks?|Switch attacks?|Switch attack|Switch Canceling|Switch-Canceling|Switch-canceling)\b/g, '<span class="mechanic-highlight">$1</span>');

    // Highlight Character Skills, Weapon Moves & Named Spells
    t = t.replace(/\b(Switch Spear|double Switch Spear|normal Spear|Spear|charged Greatsword|Greatsword|Crossbow|Axe &amp; Shield|Axe & Shield|Sword &amp; Shield|Sword & Shield|Switch Katana|Katana|Cataclysm|Inferno|Torrent|White Whorl|Pyroclasm|Calamity Drive|Luminescent Robe|Windburst|Earthquake|Lightning Strike|Watera|Blitz|Crushing Blow|Launch|Thunder|Flourish of Steel|Ruin|Smite|Army of One|Razor Gale|Scene Drive|Scatter-Spray Blizzaga|Scatter Spray Blizzaga|Waggle-Wobbly Firaga|Extra-Crispy Firaga|Lickity-Split Thundaga|Hyperdrive|Havoc Wing|Trine|Forsaken|Firagas|Firaga|Blizzaga|Thundaga|Burst Energy|Strike Energy|Snatch Blow|Snatch Shot|Ring Holy|Flare Star|Seraphic Star|Force Symphony|Graviga|Blizzara|Blizzard Combo|Tornado|Meltdown|Flood|Spiral Blow|Lance Barrage|Crashing Dive|Gungnir|Dragon's Fang|Sky Rave|Dragoon's Pride|Machine Gun|Rocket Launcher|Sticky Bomb|Homing Bazooka|Ragnarok Blade|Satellite Laser|Split Laser|Pummel|Energy Ray|Energy Blast|Megaflare|Hellfire|Diamond Dust|Thor's Hammer|Heavenly Strike|Sonic Wings|Grand Summon|Beat Rush|Somersault|Water Strike|Moonsault Kick|Falcon Dive|Elbow Smash|Meteorodrive|Meteodrive|Dolphin Blow|Final Heaven|Burning Arrow|Radiant Sword|Bitter End|Shield Bash|Rope Knife|Reel Magick|Lord of Arms|Dark Cannon|Dark Flame|Paladin Force|Saint's Fall|Omnislash|Braver|Cross Slash|Blade Beam|Climhazzard|Meteorain|Finishing Touch|Solid Barrel|Rough Divide|Fated Circle|Blasting Zone|Lion Heart|Free Energy|Tidal Flame|Scoop Art|Shift Break|Grand Lethal|Spiral Cut|Slice &amp; Dice|Slice & Dice|Blitz Ace|Death Claw|Meteor|Ultima|Cure command|Cure skill|Cure spells?)\b/g, '<span class="skill-highlight"><span class="skill-icon">⚡</span><strong>$1</strong></span>');

    // Highlight Paradigm roles: Commando, Ravager, Medic
    t = t.replace(/\b(Commando|Ravager|Medic)\s+(role|mode)?\b/g, '<span class="paradigm-highlight">$1</span> $2');

    return t;
  });
}

/**
 * Central processor for Drake Walkthrough content HTML
 */
export function processDrakeContentHtml(html: string, baseUrl: string = '/'): string {
  if (!html) return '';

  let processed = html;

  // 1. Strip redundant MediaWiki bottom navigation tables (Image 1)
  processed = removeRedundantNavigation(processed);

  // 2. Convert boss tables to Boss Spotlight Card with integrated fighting tips
  processed = transformBossTables(processed, baseUrl);

  // 3. Convert board tables to GatewayChessBoard markup
  processed = transformBoardTables(processed, baseUrl);

  // 4. Transform Playable Hero sections to stylized hero banners
  processed = transformPlayableHeroHeaders(processed, baseUrl);

  // 5. Resolve remaining Wikia images to local assets
  processed = fixGeneralImages(processed, baseUrl);

  // 6. Add inline icons and highlights for chests, items, enemies, chains, gil, KP, and mechanics
  processed = applyLootAndEntityHighlights(processed, baseUrl);

  return processed;
}
