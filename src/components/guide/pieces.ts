/** Map icons and board pieces. Keys are used in `<Board pieces>` entries; files live in public/drake. */
export interface PieceIcon {
  file: string;
  width: number;
  height: number;
}

const p = (file: string, width: number, height: number): PieceIcon => ({ file, width, height });

export const pieces: Record<string, PieceIcon> = {
  start: p('DFF_Start.png', 40, 40),
  battle: p('DFF_Battle_Piece.png', 16, 40),
  hard: p('DFF_Hard_Battle_Piece.png', 33, 40),
  expert: p('DFF_Expert_Battle_Piece.png', 25, 40),
  strange: p('DFF_Strange_Battle_Piece.png', 17, 40),
  ultimate: p('DFF_Ultimate_Battle_Piece.png', 29, 40),
  party: p('D012_Party_Battle_Piece.png', 30, 40),
  mirror: p('D012_Mirror_Battle_Piece.png', 14, 40),
  stigma: p('DFF_Stigma_Of_Chaos.png', 39, 40),
  chaos: p('DFF_Chaos_Piece.png', 36, 40),
  cosmos: p('D012_Cosmos_Piece.png', 24, 40),
  'cosmos-dff': p('DFF_Cosmos_Piece.png', 25, 40),
  chest: p('DFF_Chest.png', 40, 30),
  'rare-chest': p('DFF_Rare_Chest.png', 40, 30),
  'opened-chest': p('Dissidia_opened_chest.png', 40, 30),
  potion: p('DFF_Potion.png', 21, 40),
  'phoenix-down': p('D012_Phoenix_Down.png', 10, 40),
  summonstone: p('DFF_Summonstone.png', 40, 38),
  moogle: p('DFF_Moogle_Icon.PNG', 39, 40),
  'silver-chalice': p('D012_Silver_Moogle_Chalice.png', 21, 40),
  'gold-chalice': p('D012_Gold_Moogle_Chalice.png', 21, 40),
  locked: p('D012_Locked_Area.png', 40, 40),
  'emblem-blue': p('D012_Emblem_Blue.png', 40, 40),
  'emblem-purple': p('D012_Emblem_Purple.png', 40, 40),
  'emblem-red': p('D012_Emblem_Red.png', 40, 40),
  // Character icons
  'ff2-firion': p('Dissicon_ff2_Fir1.png', 39, 40),
  'ff3-onion-knight': p('Dissicon_ff3_OK1.png', 61, 70),
  'ff4-cecil-dark': p('Dissicon_ff4_cecD1.png', 38, 50),
  'ff4-kain': p('Dissicon_ff4_Kain1.png', 50, 45),
  'ff5-bartz': p('Dissicon_ff5_Bar1.png', 36, 40),
  'ff6-terra-1': p('Dissicon_ff6_Ter1.png', 64, 50),
  'ff6-terra-3': p('Dissicon_ff6_Ter3.png', 62, 50),
  'ff7-cloud': p('Dissicon_ff7_Clo1.png', 33, 40),
  'ff7-tifa': p('Dissicon_ff7_Tifa1.png', 29, 40),
  'ff8-laguna': p('Dissicon_ff8_Lag1.png', 31, 40),
  'ff8-squall': p('Dissicon_ff8_Squ1.png', 34, 40),
  'ff9-zidane': p('Dissicon_ff9_zid1.png', 53, 40),
  'ff10-tidus': p('Dissicon_ff10_tid1.png', 36, 40),
  'ff10-jecht': p('Dissicon_ff10_Jec3.png', 34, 40),
  'ff12-vaan': p('Dissicon_ff12_Vaan1.png', 31, 40),
};

/** Alt text used when a piece has no label: the file name without extension, underscores as spaces. */
export function defaultAlt(file: string): string {
  return file.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
}
