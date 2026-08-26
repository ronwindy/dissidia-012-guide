/**
 * Localized Drake Walkthrough Asset Manifest & Typed Helpers
 * All images are stored locally under public/images/story/drake/
 */

export interface DrakePieceMetadata {
  key: string;
  name: string;
  src: string;
  type: 'deploy' | 'goal' | 'boss' | 'assist' | 'chest' | 'potion' | 'phoenix' | 'summon' | 'emblem' | 'enemy' | 'moogle' | 'other';
}

export const drakePieces: Record<string, DrakePieceMetadata> = {
  // Start / Deploy
  D: { key: 'D', name: 'Deploy Point', src: '/images/story/drake/pieces/start.png', type: 'deploy' },
  
  // Goal / Stigma of Chaos
  G: { key: 'G', name: 'Stigma of Chaos (Goal)', src: '/images/story/drake/pieces/stigma-of-chaos.png', type: 'goal' },
  
  // Boss / Chaos Piece
  B: { key: 'B', name: 'Boss Encounter', src: '/images/story/drake/pieces/chaos-piece.png', type: 'boss' },
  
  // Assist / Cosmos Piece
  A: { key: 'A', name: 'Assist Ally Piece', src: '/images/story/drake/pieces/cosmos-piece-012.png', type: 'assist' },
  
  // Chests
  C: { key: 'C', name: 'Treasure Chest', src: '/images/story/drake/pieces/chest.png', type: 'chest' },
  C1: { key: 'C1', name: 'Treasure Chest 1', src: '/images/story/drake/pieces/chest.png', type: 'chest' },
  C2: { key: 'C2', name: 'Treasure Chest 2', src: '/images/story/drake/pieces/chest.png', type: 'chest' },
  C3: { key: 'C3', name: 'Treasure Chest 3', src: '/images/story/drake/pieces/chest.png', type: 'chest' },
  RC: { key: 'RC', name: 'Rare Treasure Chest', src: '/images/story/drake/pieces/rare-chest.png', type: 'chest' },
  
  // Recovery
  P: { key: 'P', name: 'Potion Recovery Node', src: '/images/story/drake/pieces/potion.png', type: 'potion' },
  R: { key: 'R', name: 'Phoenix Down Node', src: '/images/story/drake/pieces/phoenix-down.png', type: 'phoenix' },
  
  // Summonstone
  S: { key: 'S', name: 'Summonstone Node', src: '/images/story/drake/pieces/summonstone.png', type: 'summon' },
  
  // Emblems
  E: { key: 'E', name: 'Board Emblem', src: '/images/story/drake/pieces/emblem-red.png', type: 'emblem' },
  E1: { key: 'E1', name: 'Board Emblem (Primary)', src: '/images/story/drake/pieces/emblem-red.png', type: 'emblem' },
  E2: { key: 'E2', name: 'Board Emblem (Secondary)', src: '/images/story/drake/pieces/emblem-blue.png', type: 'emblem' },
  E3: { key: 'E3', name: 'Board Emblem (Special)', src: '/images/story/drake/pieces/emblem-purple.png', type: 'emblem' },
  
  // Single Battles & Enemies
  '1': { key: '1', name: 'Manikin Battle Piece 1', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  '2': { key: '2', name: 'Manikin Battle Piece 2', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  '3': { key: '3', name: 'Manikin Battle Piece 3', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  '4': { key: '4', name: 'Manikin Battle Piece 4', src: '/images/story/drake/pieces/hard-battle-piece.png', type: 'enemy' },
  '5': { key: '5', name: 'Manikin Battle Piece 5', src: '/images/story/drake/pieces/hard-battle-piece.png', type: 'enemy' },
  '6': { key: '6', name: 'Manikin Battle Piece 6', src: '/images/story/drake/pieces/hard-battle-piece.png', type: 'enemy' },
  
  M1: { key: 'M1', name: 'Manikin 1', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  M2: { key: 'M2', name: 'Manikin 2', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  M3: { key: 'M3', name: 'Manikin 3', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  M4: { key: 'M4', name: 'Manikin 4', src: '/images/story/drake/pieces/hard-battle-piece.png', type: 'enemy' },
  M5: { key: 'M5', name: 'Manikin 5', src: '/images/story/drake/pieces/hard-battle-piece.png', type: 'enemy' },
  
  // Special Pieces
  '#': { key: '#', name: 'Manikin Battle Piece', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  '#-#': { key: '#-#', name: 'Group / Party Battle Piece', src: '/images/story/drake/pieces/party-battle-piece.png', type: 'enemy' },
  'M#': { key: 'M#', name: 'Manikin Battle Piece', src: '/images/story/drake/pieces/battle-piece.png', type: 'enemy' },
  'M#-#': { key: 'M#-#', name: 'Group Battle Manikin', src: '/images/story/drake/pieces/party-battle-piece.png', type: 'enemy' },
  MOG: { key: 'MOG', name: 'Moogle Merchant', src: '/images/story/drake/pieces/moogle-icon.png', type: 'moogle' }
};

export const drakeIcons: Record<string, string> = {
  'onion-knight': '/images/story/drake/icons/onion-knight.png',
  'tifa': '/images/story/drake/icons/tifa.png',
  'laguna': '/images/story/drake/icons/laguna.png',
  'firion': '/images/story/drake/icons/firion.png',
  'squall': '/images/story/drake/icons/squall.png',
  'zidane': '/images/story/drake/icons/zidane.png',
  'kain': '/images/story/drake/icons/kain.png',
  'terra': '/images/story/drake/icons/terra.png',
  'terra-alt': '/images/story/drake/icons/terra-alt.png',
  'jecht': '/images/story/drake/icons/jecht.png',
  'vaan': '/images/story/drake/icons/vaan.png',
  'cecil': '/images/story/drake/icons/cecil-dark-knight.png',
  'cecil-dark-knight': '/images/story/drake/icons/cecil-dark-knight.png',
  'cloud': '/images/story/drake/icons/cloud.png',
  'tidus': '/images/story/drake/icons/tidus.png',
  'bartz': '/images/story/drake/icons/bartz.png'
};

export const drakeRenders: Record<string, string> = {
  'kuja': '/images/story/drake/renders/kuja-render.png',
  'lightning': '/images/story/drake/renders/lightning-render.png',
  'vaan': '/images/story/drake/renders/vaan-render.png',
  'kain': '/images/story/drake/renders/kain-render.png',
  'exdeath': '/images/story/drake/renders/exdeath-render.png',
  'tifa': '/images/story/drake/renders/tifa-artwork.png',
  'emperor': '/images/story/drake/renders/emperor-render.png',
  'the-emperor': '/images/story/drake/renders/emperor-render.png',
  'ultimecia': '/images/story/drake/renders/ultimecia-render.png',
  'cloud-of-darkness': '/images/story/drake/renders/cloud-of-darkness-render.png',
  'warrior-of-light': '/images/story/drake/renders/warrior-of-light-render.png',
  'laguna': '/images/story/drake/renders/laguna-render.png',
  'yuna': '/images/story/drake/renders/yuna-render.png',
  'kefka': '/images/story/drake/renders/kefka-render.png',
  'terra': '/images/story/drake/renders/terra-render.png',
  'onion-knight': '/images/story/drake/renders/onion-knight-render.png',
  'tidus': '/images/story/drake/renders/tidus-render.png',
  'cloud': '/images/story/drake/renders/cloud-render.png',
  'sephiroth': '/images/story/drake/renders/sephiroth-render.png',
  'garland': '/images/story/drake/renders/garland-render.png',
  'golbez': '/images/story/drake/renders/golbez-render.png',
  'firion': '/images/story/drake/renders/firion-render.png',
  'cecil': '/images/story/drake/renders/cecil-render.png',
  'bartz': '/images/story/drake/renders/bartz-render.png',
  'squall': '/images/story/drake/renders/squall-render.png',
  'zidane': '/images/story/drake/renders/zidane-render.png',
  'jecht': '/images/story/drake/renders/jecht-render.png',
  'chaos': '/images/story/drake/renders/chaos-render.png',
  'shantotto': '/images/story/drake/renders/shantotto-render.png',
  'gabranth': '/images/story/drake/renders/gabranth-render.png',
  'feral-chaos': '/images/story/drake/renders/feral-chaos-render.png',
  'desperado-chaos': '/images/story/drake/renders/feral-chaos-render.png',
  'prishe': '/images/story/drake/renders/prishe-render.png'
};

export const drakeWorldMaps: Record<string, string> = {
  'cornelian-plains': '/images/story/drake/maps/world-b-cornelian-plains.png',
  'cavern-of-earth': '/images/story/drake/maps/world-b-cornelian-plains.png',
  'volcano-ring-gulg': '/images/story/drake/maps/world-b-volcano-ring-gulg.png',
  'gulg-volcano': '/images/story/drake/maps/world-b-volcano-ring-gulg.png',
  'elven-snowfields': '/images/story/drake/maps/world-b-elven-snowfields.png',
  'melmond-fens': '/images/story/drake/maps/world-b-melmond-fens.png',
  'mirage-sandsea': '/images/story/drake/maps/world-b-mirage-sandsea.png',
  'bahamut-isles': '/images/story/drake/maps/world-b-bahamut-isles.png',
  'land-of-discord': '/images/story/drake/maps/world-b-land-of-discord.png'
};

/**
 * Lookup piece icon for a map key or legend entry
 */
export function getDrakePieceIcon(keyOrLegend: string): string | null {
  if (!keyOrLegend) return null;
  const cleanKey = keyOrLegend.trim().split(/[\s=]/)[0].toUpperCase();
  
  if (drakePieces[cleanKey]) {
    return drakePieces[cleanKey].src;
  }
  
  // Check matching prefixes
  if (cleanKey.startsWith('C')) return drakePieces.C.src;
  if (cleanKey.startsWith('E')) return drakePieces.E.src;
  if (cleanKey.startsWith('M')) return drakePieces.M1.src;
  if (/^\d+$/.test(cleanKey)) return drakePieces['1'].src;
  
  return null;
}

/**
 * Lookup character mini-icon by name
 */
export function getDrakeCharacterIcon(name: string): string | null {
  if (!name) return null;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return drakeIcons[slug] || null;
}

/**
 * Lookup boss or hero render by name
 */
export function getDrakeBossRender(bossName: string): string | null {
  if (!bossName) return null;
  const slug = bossName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  for (const key of Object.keys(drakeRenders)) {
    if (slug.includes(key)) {
      return drakeRenders[key];
    }
  }
  
  return null;
}
