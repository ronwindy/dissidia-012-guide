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
 * Transforms MediaWiki Boss tables into the exact Boss Spotlight Card from GatewayMapCard.astro
 */
function transformBossTables(html: string, baseUrl: string): string {
  return html.replace(/<table(?:\s+[^>]*)?>((?:(?!<table)[\s\S])*?<b>Boss<\/b>[\s\S]*?)<\/table>/gi, (match, innerHtml) => {
    // Confirm it is a boss table by checking for HP or Brave Attacks
    if (!innerHtml.includes('HP') && !innerHtml.includes('Bravery')) {
      return match;
    }

    // Extract Boss Name
    let bossName = '';
    const nameMatch = innerHtml.match(/<tr[^>]*bgcolor=["']#1E90FF["'][^>]*>[\s\S]*?<td[^>]*colspan=["']6["'][^>]*>[\s\S]*?<b>([\s\S]*?)<\/b>/i);
    if (nameMatch) {
      bossName = nameMatch[1].replace(/<[^>]+>/g, '').trim();
    }

    // Fallback name search
    if (!bossName) {
      const linkMatch = innerHtml.match(/<a[^>]+title=["']([^"']+)["'][^>]*>/i);
      if (linkMatch) {
        bossName = linkMatch[1].replace(/\(.*\)/, '').trim();
      }
    }

    if (!bossName) return match;

    // Extract stats (HP, Level, Bravery)
    let hp = '';
    let level = '';
    let bravery = '';
    let braveAttacks = '';
    let hpAttacks = '';
    let summon = 'None';
    let difficulty = '';

    // Search table rows
    const trs = innerHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
    for (let i = 0; i < trs.length; i++) {
      const tr = trs[i];
      const text = tr.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

      if (text.includes('HP') && text.includes('Level') && i + 1 < trs.length) {
        const nextTr = trs[i + 1];
        const tds = nextTr.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
        if (tds.length >= 3) {
          hp = tds[0].replace(/<[^>]+>/g, '').trim();
          level = tds[1].replace(/<[^>]+>/g, '').trim();
          bravery = tds[2].replace(/<[^>]+>/g, '').trim();
        }
      }

      if (text.includes('Brave Attacks') && i + 1 < trs.length) {
        braveAttacks = trs[i + 1].replace(/<[^>]+>/g, '').trim();
      }

      if (text.includes('HP Attacks') && i + 1 < trs.length) {
        hpAttacks = trs[i + 1].replace(/<[^>]+>/g, '').trim();
      }

      if (text.includes('Difficulty') && i + 1 < trs.length) {
        const nextTr = trs[i + 1];
        const tds = nextTr.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
        if (tds.length >= 2) {
          summon = tds[0].replace(/<[^>]+>/g, '').trim();
          difficulty = tds[1].replace(/<[^>]+>/g, '').trim();
        }
      }
    }

    // Boss Portrait
    const bossImg = resolveLocalAsset(bossName, `${bossName} render`, baseUrl) || resolveImg('/images/story/drake/renders/chaos-render.png', baseUrl);

    // Build exact Boss Encounter Spotlight Card from GatewayMapCard.astro
    return `
<div class="boss-encounter-panel drake-boss-card" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%); border: 1px solid rgba(239, 68, 68, 0.3); border-left: 4px solid var(--color-chaos); border-radius: var(--radius-sm); padding: 1.25rem; margin: 1.75rem 0;">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <img src="${bossImg}" alt="${bossName}" style="width: 54px; height: 54px; object-fit: contain; border-radius: var(--radius-xs); border: 1px solid var(--color-chaos); background: rgba(0,0,0,0.5); padding: 2px;" />
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem;">
          <span class="badge-pill badge-chaos">Boss Encounter</span>
          ${difficulty ? `<span class="badge-pill badge-crystal">Difficulty: ${difficulty}</span>` : ''}
        </div>
        <h4 style="margin: 0.1rem 0 0; font-size: 1.35rem; color: var(--text-main); font-family: var(--font-heading);">
          ${bossName} ${level ? `<span style="font-size: 0.9rem; color: var(--color-chaos); font-family: var(--font-mono); font-weight: normal;">(Lv. ${level})</span>` : ''}
        </h4>
      </div>
    </div>
    <div style="display: flex; gap: 0.65rem; font-family: var(--font-mono); font-size: 0.82rem; flex-wrap: wrap;">
      ${hp ? `
        <div style="background: rgba(0,0,0,0.4); padding: 0.25rem 0.6rem; border-radius: var(--radius-xs); border: 1px solid rgba(255,255,255,0.06);">
          <span style="color: var(--text-dim);">HP:</span> <strong style="color: var(--color-hp);">${hp}</strong>
        </div>
      ` : ''}
      ${bravery ? `
        <div style="background: rgba(0,0,0,0.4); padding: 0.25rem 0.6rem; border-radius: var(--radius-xs); border: 1px solid rgba(255,255,255,0.06);">
          <span style="color: var(--text-dim);">BRV:</span> <strong style="color: var(--color-brv);">${bravery}</strong>
        </div>
      ` : ''}
      ${summon && summon !== 'None' ? `
        <div style="background: rgba(0,0,0,0.4); padding: 0.25rem 0.6rem; border-radius: var(--radius-xs); border: 1px solid rgba(255,255,255,0.06);">
          <span style="color: var(--text-dim);">Summon:</span> <strong style="color: #fbbf24;">${summon}</strong>
        </div>
      ` : ''}
    </div>
  </div>

  ${(braveAttacks || hpAttacks) ? `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.5rem; margin-top: 0.75rem; font-size: 0.82rem; font-family: var(--font-mono); background: rgba(0,0,0,0.25); padding: 0.6rem 0.85rem; border-radius: var(--radius-xs);">
      ${braveAttacks ? `<div><strong style="color: var(--color-brv);">BRV Attacks:</strong> <span style="color: var(--text-sub);">${braveAttacks}</span></div>` : ''}
      ${hpAttacks ? `<div><strong style="color: var(--color-hp);">HP Attacks:</strong> <span style="color: var(--text-sub);">${hpAttacks}</span></div>` : ''}
    </div>
  ` : ''}
</div>`;
  });
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
 * Applies styled badges and inline icons for loot, chests, gil, KP, and key combat mechanics
 */
function applyLootAndEntityHighlights(html: string, baseUrl: string): string {
  const chestIcon = resolveImg('/images/story/drake/pieces/chest.png', baseUrl);
  const moogleIcon = resolveImg('/images/story/drake/pieces/moogle-icon.png', baseUrl);

  let output = html;

  // Highlight Gil amounts: e.g. "50 gil", "200 gil", "120 gil", "1000 gil" (only outside tags)
  output = output.replace(/\b(\d+[\d,]*\s*gil)\b(?![^<]*>)/gi, (m) => {
    return `<span class="gil-highlight"><span class="gil-coin-icon">🪙</span><strong>${m}</strong></span>`;
  });

  // Highlight KP amounts: e.g. "9 KP", "10 KP" (only outside tags)
  output = output.replace(/\b(\d+\s*KP)\b(?![^<]*>)/gi, (m) => {
    return `<span class="kp-highlight"><span class="kp-crystal-icon">✦</span><strong>${m}</strong></span>`;
  });

  // Highlight Moogle mentions when referring to Moogles / Moogle shops (only outside tags)
  output = output.replace(/\b(Moogles?)\b(?![^<]*>)/g, (m) => {
    return `<span class="moogle-highlight"><img src="${moogleIcon}" class="inline-loot-icon" alt="Moogle" />${m}</span>`;
  });

  // Highlight specific chest discoveries with chest icon: e.g. "chest for [X]", "chest with [X]", "chest has [X]"
  output = output.replace(/(grab the chest for|open the chest for|open the two chests for|find a chest with|chest with an?|chest has an?|chest for)\s+([A-Z][a-zA-Z0-9\s-]{2,25}?)(?=[.,\n<])/g, (m, prefix, item) => {
    const cleanItem = item.trim();
    // Don't double highlight if it's already a span
    if (cleanItem.startsWith('<')) return m;
    return `${prefix} <span class="chest-loot-highlight"><img src="${chestIcon}" class="inline-loot-icon" alt="Chest" /><strong>${cleanItem}</strong></span>`;
  });

  // Highlight combat terms: EX Burst, EX Mode, EX Gauge, EX Revenge, Wall Rush, Chase, Bonus Line, KP Chance
  output = output.replace(/\b(EX Burst|EX Mode|EX Gauge|EX Revenge|Wall Rush|Chase|Bonus Line|KP Chance)\b(?![^<]*>)/g, (m) => {
    return `<span class="mechanic-highlight">${m}</span>`;
  });

  // Highlight Paradigm roles: Commando, Ravager, Medic
  output = output.replace(/\b(Commando|Ravager|Medic)\s+(role|mode)?\b(?![^<]*>)/g, (m, role, suffix) => {
    return `<span class="paradigm-highlight">${role}</span>${suffix ? ` ${suffix}` : ''}`;
  });

  return output;
}

/**
 * Central processor for Drake Walkthrough content HTML
 */
export function processDrakeContentHtml(html: string, baseUrl: string = '/'): string {
  if (!html) return '';

  let processed = html;

  // 1. Convert boss tables to GatewayMapCard Boss Spotlight Card markup FIRST
  processed = transformBossTables(processed, baseUrl);

  // 2. Convert board tables to GatewayChessBoard markup
  processed = transformBoardTables(processed, baseUrl);

  // 3. Transform Playable Hero sections to stylized hero banners
  processed = transformPlayableHeroHeaders(processed, baseUrl);

  // 4. Resolve remaining Wikia images to local assets
  processed = fixGeneralImages(processed, baseUrl);

  // 5. Add inline icons and highlights for chests, items, gil, KP, and mechanics
  processed = applyLootAndEntityHighlights(processed, baseUrl);

  return processed;
}
