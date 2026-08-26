import fs from 'fs';
import path from 'path';

// Category mapping and clean filenames for all 88 Drake assets
const assetMapping = [
  // 1. Board Pieces & Map Tokens (25 items)
  { original: 'DFF Battle Piece.png', target: 'pieces/battle-piece.png' },
  { original: 'DFF Hard Battle Piece.png', target: 'pieces/hard-battle-piece.png' },
  { original: 'DFF Strange Battle Piece.png', target: 'pieces/strange-battle-piece.png' },
  { original: 'DFF Expert Battle Piece.png', target: 'pieces/expert-battle-piece.png' },
  { original: 'DFF Ultimate Battle Piece.png', target: 'pieces/ultimate-battle-piece.png' },
  { original: 'D012 Mirror Battle Piece.png', target: 'pieces/mirror-battle-piece.png' },
  { original: 'D012 Party Battle Piece.png', target: 'pieces/party-battle-piece.png' },
  { original: 'DFF Chaos Piece.png', target: 'pieces/chaos-piece.png' },
  { original: 'DFF Cosmos Piece.png', target: 'pieces/cosmos-piece.png' },
  { original: 'D012 Cosmos Piece.png', target: 'pieces/cosmos-piece-012.png' },
  { original: 'DFF Start.png', target: 'pieces/start.png' },
  { original: 'DFF Stigma Of Chaos.png', target: 'pieces/stigma-of-chaos.png' },
  { original: 'DFF Chest.png', target: 'pieces/chest.png' },
  { original: 'DFF Rare Chest.png', target: 'pieces/rare-chest.png' },
  { original: 'Dissidia opened chest.png', target: 'pieces/opened-chest.png' },
  { original: 'DFF Summonstone.png', target: 'pieces/summonstone.png' },
  { original: 'DFF Potion.png', target: 'pieces/potion.png' },
  { original: 'D012 Phoenix Down.png', target: 'pieces/phoenix-down.png' },
  { original: 'D012 Emblem Red.png', target: 'pieces/emblem-red.png' },
  { original: 'D012 Emblem Blue.png', target: 'pieces/emblem-blue.png' },
  { original: 'D012 Emblem Purple.png', target: 'pieces/emblem-purple.png' },
  { original: 'DFF Moogle Icon.PNG', target: 'pieces/moogle-icon.png' },
  { original: 'D012 Silver Moogle Chalice.png', target: 'pieces/silver-moogle-chalice.png' },
  { original: 'D012 Gold Moogle Chalice.png', target: 'pieces/gold-moogle-chalice.png' },
  { original: 'D012 Locked Area.png', target: 'pieces/locked-area.png' },

  // 2. Character Icons / Dissicons (15 items)
  { original: 'Dissicon ff3 OK1.png', target: 'icons/onion-knight.png' },
  { original: 'Dissicon ff7 Tifa1.png', target: 'icons/tifa.png' },
  { original: 'Dissicon ff8 Lag1.png', target: 'icons/laguna.png' },
  { original: 'Dissicon ff2 Fir1.png', target: 'icons/firion.png' },
  { original: 'Dissicon ff8 Squ1.png', target: 'icons/squall.png' },
  { original: 'Dissicon ff9 zid1.png', target: 'icons/zidane.png' },
  { original: 'Dissicon ff4 Kain1.png', target: 'icons/kain.png' },
  { original: 'Dissicon ff6 Ter3.png', target: 'icons/terra-alt.png' },
  { original: 'Dissicon ff10 Jec3.png', target: 'icons/jecht.png' },
  { original: 'Dissicon ff12 Vaan1.png', target: 'icons/vaan.png' },
  { original: 'Dissicon ff4 cecD1.png', target: 'icons/cecil-dark-knight.png' },
  { original: 'Dissicon ff6 Ter1.png', target: 'icons/terra.png' },
  { original: 'Dissicon ff7 Clo1.png', target: 'icons/cloud.png' },
  { original: 'Dissicon ff10 tid1.png', target: 'icons/tidus.png' },
  { original: 'Dissicon ff5 Bar1.png', target: 'icons/bartz.png' },

  // 3. Character & Boss Renders (38 items)
  { original: 'Kuja Render.png', target: 'renders/kuja-render.png' },
  { original: 'Dissidia012.jpg', target: 'renders/dissidia-012-keyart.jpg' },
  { original: 'Lightning (Dissidia 012).png', target: 'renders/lightning-render.png' },
  { original: 'Vaan (Dissidia 012).png', target: 'renders/vaan-render.png' },
  { original: 'Dissidia012KainRender.png', target: 'renders/kain-render.png' },
  { original: 'Exdeath Render.png', target: 'renders/exdeath-render.png' },
  { original: 'Kain (Dissidia 012).png', target: 'renders/kain-artwork.png' },
  { original: 'Tifa-d012ff-artwork.png', target: 'renders/tifa-artwork.png' },
  { original: 'EmperorDissidiaRender.PNG', target: 'renders/emperor-render.png' },
  { original: 'UltimeciaDissidiaRender.PNG', target: 'renders/ultimecia-render.png' },
  { original: 'CoDDissidiaRender.PNG', target: 'renders/cloud-of-darkness-render.png' },
  { original: 'WoLDissidiaModel.PNG', target: 'renders/warrior-of-light-render.png' },
  { original: 'Laguna012.PNG', target: 'renders/laguna-render.png' },
  { original: 'Yuna.png', target: 'renders/yuna-render.png' },
  { original: 'DissidiaKefkaRender.png', target: 'renders/kefka-render.png' },
  { original: 'Dissidia Terra.png', target: 'renders/terra-render.png' },
  { original: 'Dissidia OnionKnight.png', target: 'renders/onion-knight-render.png' },
  { original: 'Dissidia Tidus.png', target: 'renders/tidus-render.png' },
  { original: 'Cloud Dissidia Artwork.png', target: 'renders/cloud-artwork.png' },
  { original: 'Dissidia Cloud Default Costume CG.png', target: 'renders/cloud-render.png' },
  { original: 'DissidiaSephirothRenderCropped.PNG', target: 'renders/sephiroth-render.png' },
  { original: 'Dissidia Warrior of Light.png', target: 'renders/warrior-of-light-artwork.png' },
  { original: 'GarlandDissidiaRender.PNG', target: 'renders/garland-render.png' },
  { original: 'GolbezDissidiaRender.PNG', target: 'renders/golbez-render.png' },
  { original: 'FirionDissidiaModel.PNG', target: 'renders/firion-render.png' },
  { original: 'DissidiaCecilArt.png', target: 'renders/cecil-render.png' },
  { original: 'DissidiaBartz.png', target: 'renders/bartz-render.png' },
  { original: 'Dissidia Firion.png', target: 'renders/firion-artwork.png' },
  { original: 'Dissidia Squall.png', target: 'renders/squall-render.png' },
  { original: 'Dissidia Zidane.png', target: 'renders/zidane-render.png' },
  { original: 'JechtDissidiaModel.png', target: 'renders/jecht-render.png' },
  { original: 'DissidiaChaosRender.PNG', target: 'renders/chaos-render.png' },
  { original: 'ShantottoDissidiaLaughing.PNG', target: 'renders/shantotto-laughing-render.png' },
  { original: 'GabranthDissidiaRender.PNG', target: 'renders/gabranth-render.png' },
  { original: 'DesperadoChaosAltRender.png', target: 'renders/feral-chaos-alt-render.png' },
  { original: 'DissidiaGabranthArt.png', target: 'renders/gabranth-artwork.png' },
  { original: 'ShantottoDissidia.PNG', target: 'renders/shantotto-render.png' },
  { original: 'DesperadoChaosRender.png', target: 'renders/feral-chaos-render.png' },

  // 4. World B Regional Maps (7 items)
  { original: 'World B Cornelian Plains.png', target: 'maps/world-b-cornelian-plains.png' },
  { original: 'World B Volcano Ring Gulg.png', target: 'maps/world-b-volcano-ring-gulg.png' },
  { original: 'World B Elven Snowfields.png', target: 'maps/world-b-elven-snowfields.png' },
  { original: 'World B Melmond Fens.png', target: 'maps/world-b-melmond-fens.png' },
  { original: 'World B Mirage Sandsea.png', target: 'maps/world-b-mirage-sandsea.png' },
  { original: 'World B Bahamut Isles.png', target: 'maps/world-b-bahamut-isles.png' },
  { original: 'World B Land of Discord.png', target: 'maps/world-b-land-of-discord.png' },

  // 5. PSP Buttons & Special (3 items)
  { original: 'Circle-button.png', target: 'buttons/circle.png' },
  { original: 'Square-button.png', target: 'buttons/square.png' },
  { original: 'Prishe.png', target: 'renders/prishe-render.png' }
];

const BASE_OUT_DIR = path.resolve('public/images/story/drake');

// Function to query MediaWiki imageinfo
async function getImageUrls(titles) {
  const chunks = [];
  for (let i = 0; i < titles.length; i += 20) {
    chunks.push(titles.slice(i, i + 20));
  }

  const urlMap = new Map();

  for (const chunk of chunks) {
    const titleParam = chunk.map(t => `File:${t}`).join('|');
    const url = `https://finalfantasy.fandom.com/api.php?action=query&titles=${encodeURIComponent(titleParam)}&prop=imageinfo&iiprop=url|size&format=json`;
    
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'DissidiaGuideBot/1.0 (https://github.com/ronwindy/dissidia-012-guide; contact: admin@dissidiaguide.local) NodeFetch/3.0',
          'Accept': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
        const pages = data?.query?.pages || {};
        for (const pid in pages) {
          const p = pages[pid];
          const rawTitle = p.title?.replace(/^File:/, '');
          const imgUrl = p.imageinfo?.[0]?.url;
          if (rawTitle && imgUrl) {
            urlMap.set(rawTitle, imgUrl);
          }
        }
      }
    } catch (err) {
      console.error('Error fetching imageinfo batch:', err);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  return urlMap;
}

async function downloadFile(url, destPath) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://finalfantasy.fandom.com/'
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  return buffer.length;
}

async function run() {
  console.log(`Starting download of ${assetMapping.length} Drake Guide assets...`);
  console.log(`Destination folder: ${BASE_OUT_DIR}`);

  const originalTitles = assetMapping.map(a => a.original);
  console.log('Querying latest CDN download URLs from MediaWiki API...');
  const urlMap = await getImageUrls(originalTitles);
  console.log(`Found CDN URLs for ${urlMap.size}/${assetMapping.length} items.`);

  let successCount = 0;
  let failCount = 0;

  for (const item of assetMapping) {
    const cdnUrl = urlMap.get(item.original);
    const dest = path.join(BASE_OUT_DIR, item.target);

    if (!cdnUrl) {
      console.error(`❌ Missing CDN URL for: "${item.original}"`);
      failCount++;
      continue;
    }

    try {
      process.stdout.write(`Downloading: ${item.target} ... `);
      const size = await downloadFile(cdnUrl, dest);
      console.log(`✓ (${size} bytes)`);
      successCount++;
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
      failCount++;
    }

    // small 100ms throttle
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\n========================================`);
  console.log(`Download Complete!`);
  console.log(`Successfully Downloaded: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`========================================`);
}

run();
