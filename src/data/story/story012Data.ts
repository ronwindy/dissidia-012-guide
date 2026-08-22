export interface Story012Gateway {
  id: string;
  title: string;
  isOptional?: boolean;
  kpChance?: string;
  rules?: string;
  skills?: string;
  bonusLine?: number | string;
  asciiMap?: string;
  legend?: string[];
  notes?: string;
  strategy?: string;
  floors?: {
    floorNumber: number | string;
    name?: string;
    kpChance?: string;
    rules?: string;
    skills?: string;
    bonusLine?: number | string;
    asciiMap?: string;
    legend?: string[];
    notes?: string;
  }[];
}

export interface Story012Chapter {
  id: string;
  title: string;
  chapterNumber: string;
  characters: string;
  location?: string;
  intro?: string;
  fieldEncounters?: string[];
  gateways: Story012Gateway[];
}

export const story012Key = [
  { key: "D", desc: "Deploy Point (Starting Position)" },
  { key: "G", desc: "Goal (Stigma of Chaos)" },
  { key: "B", desc: "Boss Encounter" },
  { key: "A", desc: "Assist Ally Piece" },
  { key: "P", desc: "Potion Recovery Node" },
  { key: "R", desc: "Phoenix Down Node" },
  { key: "C", desc: "Treasure Chest" },
  { key: "S", desc: "Summon Stone Node" },
  { key: "#", desc: "Single Manikin Battle Piece" },
  { key: "#-#", desc: "Group Battle Manikin and combat order" }
];

export const story012Chapters: Story012Chapter[] = [
  {
    id: "prologue",
    title: "Path to Sanctuary",
    chapterNumber: "Prologue",
    characters: "Lightning",
    location: "World Map • Near Cornelia",
    intro: "Lightning awakens in World B and takes her first steps across the crystalline terrain toward the Sanctuary of Order.",
    gateways: [
      {
        id: "prologue-departure",
        title: "Gateway to Departure",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `   [ ]
   [ ]
[D][ ][C][ ][ ][ ][G]
      [ ][A]
      [ ]
      [ ]`,
        legend: [
          "A = Kain",
          "C = Broadsword"
        ],
        notes: "Introductory gateway to familiarize with board movement and basic battle controls."
      }
    ]
  },
  {
    id: "ch1",
    title: "A New Threat",
    chapterNumber: "Chapter 1",
    characters: "Lightning",
    location: "Cavern of Earth & Crescent Lake",
    intro: "Investigating the appearance of imitation soldiers, Lightning traverses the volcanic routes and sacred paths.",
    gateways: [
      {
        id: "ch1-crescent-lake",
        title: "Crescent Lake Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `      [ ]
      [ ]         [ ]
[D]   [2][ ]   [ ][ ]
[ ][1][ ][3][ ][ ][A]
      [ ]      [ ]
      [4]      [G]
      [C]`,
        legend: [
          "A = Laguna",
          "C = Buckler",
          "1 = Fleeting Flash Lv2",
          "2 = Capricious Reaper Lv2",
          "3 = Fleeting Flash Lv2",
          "4 = Delusory Dragoon Lv6"
        ]
      },
      {
        id: "ch1-sages-path",
        title: "Sage's Path Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 3,
        asciiMap: `      [C][3][ ]   [ ][B]
      [1][ ][ ]   [C]
[D][ ][ ][ ][ ][4][5]
      [2][ ][ ][A]
      [C]   [ ]`,
        legend: [
          "A = Tifa",
          "C (Upper Left) = 200 gil",
          "C (Bottom Left) = Bronze Helm",
          "C (Right) = Soul of Destruction",
          "1 = Idle Sky Pirate Lv6",
          "2 = Fleeting Flash Lv6",
          "3 = Delusory Dragoon Lv6",
          "4 = Delusory Dragoon Lv2",
          "5 = Fleeting Flash Lv2",
          "B = Kuja Lv8"
        ]
      },
      {
        id: "ch1-fools-hope",
        title: "Gateway of Fools and Hope",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 8,
        asciiMap: `   [C][2]   [ ]
      [ ]   [ ][B]
[D][1][ ]   [C]
      [ ][3][4]
         [ ]`,
        legend: [
          "C (Left) = 500 gil",
          "C (Right) = Red Drop",
          "1 = Fleeting Flash Lv2",
          "2 = Idle Sky Pirate Lv2",
          "3 = Delusory Dragoon Lv2",
          "4 = Idle Sky Pirate Lv6",
          "B = Kain Lv10"
        ]
      }
    ]
  },
  {
    id: "ch2",
    title: "Stern Eyes Vaan",
    chapterNumber: "Chapter 2",
    characters: "Vaan",
    location: "Mount Gulg & Winter Highlands",
    intro: "Vaan searches the burning craters and frozen peaks seeking answers about the strange world.",
    fieldEncounters: [
      "Field: Phantasmal Harlequin Lv1, Phantasmal Harlequin Lv2",
      "Field: Phantasmal Harlequin Lv8, False Stalwart Lv6",
      "Field: Phantasmal Harlequin Lv10"
    ],
    gateways: [
      {
        id: "ch2-hidden-darkness",
        title: "Hidden Darkness Gateway",
        isOptional: true,
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `[C]      [3][ ]
[ ][A][2][ ][G]
[ ][1][ ][D][ ]
      [ ][ ][ ][5][C]`,
        legend: [
          "A = Onion Knight",
          "C (Left) = 200 gil",
          "C (Right) = Blue Drop",
          "1 = Delusory Dragoon Lv2",
          "2 = Phantasmal Harlequin Lv2",
          "3 = Fleeting Flash Lv2",
          "4 = Idle Sky Pirate Lv2",
          "5 = Fleeting Flash Lv5"
        ]
      },
      {
        id: "ch2-encounters-treason",
        title: "Encounters and Treason",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 4,
        asciiMap: `[ ]
   [ ][ ][ ][ ][1]
[ ][ ]         [ ]
[5][B]   [ ][2][ ][3][ ]
[ ]      [ ]
[C][4][ ][D]
         [ ][ ]`,
        legend: [
          "C = Orange Drop",
          "1 = Idle Sky Pirate Lv2",
          "2 = Fleeting Flash Lv2",
          "3 = Delusory Dragoon Lv2",
          "4 = Phantasmal Girl Lv2",
          "5 = Phantasmal Harlequin Lv5",
          "B = Terra Lv7"
        ],
        notes: "Veterans of the first Dissidia will recognize this boss battle—Terra is in near-infinite Trance form again."
      },
      {
        id: "ch2-gulg-gateway",
        title: "Gulg Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `[ ]   [ ][3][S]
   [D][ ][ ]
[ ][ ]   [ ]   [B]
[1][2]   [ ][5][ ]
   [ ]   [4]
   [C]`,
        legend: [
          "C = Slasher",
          "1 = Delusory Dragoon Lv5",
          "2 = Capricious Reaper Lv15",
          "3 = Idle Sky Pirate Lv5",
          "4 = Fleeting Flash Lv2",
          "5 = Phantasmal Harlequin Lv2",
          "B = Kefka Lv10",
          "S = Ifrit AUTO"
        ]
      },
      {
        id: "ch2-snow-sorrow",
        title: "Snow of Sorrow",
        isOptional: true,
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `[C][ ][1][C]
   [2]
[3][ ][D][ ][ ]
   [4][ ][ ]
      [G][ ]
         [ ]
         [A]`,
        legend: [
          "A = Terra",
          "C (Left) = Lila Leaf",
          "C (Right) = Delicious Fish Scale",
          "1 = Phantasmal Harlequin Lv7",
          "2 = Idle Sky Pirate Lv11",
          "3 = Idle Sky Pirate Lv7",
          "4 = Fleeting Flash Lv11"
        ]
      },
      {
        id: "ch2-seasonless",
        title: "Seasonless Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 11,
        asciiMap: `[C]
[1]
[ ]      [ ][A][ ]
[ ][D][ ][3][ ][ ]
[ ]      [4]
[2]      [ ][5][G]
[C]`,
        legend: [
          "A = Terra",
          "C (Up) = Pink Tail",
          "C (Down) = Soul of Destruction",
          "1 = Phantasmal Girl Lv15",
          "2 = Fleeting Flash Lv15",
          "3 = Idle Sky Pirate Lv11",
          "4 = Phantasmal Harlequin Lv15",
          "5 = Idle Sky Pirate Lv15"
        ]
      }
    ]
  },
  {
    id: "ch3",
    title: "Clues",
    chapterNumber: "Chapter 3",
    characters: "Laguna",
    location: "Great Forest & Southern Shrines",
    intro: "Laguna conducts field reconnaissance, uncovering the origins of the crystalline manikins.",
    fieldEncounters: [
      "Field: Capricious Reaper Lv7, Phantasmal Harlequin Lv7",
      "Field: Counterfeit Wraith Lv9, False Stalwart Lv11"
    ],
    gateways: [
      {
        id: "ch3-omen-destruction",
        title: "Omen of Destruction",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `            [C]
      [ ][ ][4]
   [ ]   [2]
[D][C][ ][1]
   [ ]   [3][G]
      [ ][ ][5]
      [ ]`,
        legend: [
          "C (Left) = Tanegashima",
          "C (Right) = Cross Chain",
          "1 = Transient Gunner Lv1",
          "2 = Counterfeit Wraith Lv1",
          "3 = Ephemeral Vision Lv1",
          "4 = Fleeting Flash Lv5",
          "5 = Fleeting Flash Lv5"
        ]
      },
      {
        id: "ch3-great-forest",
        title: "Great Forest Gateway",
        isOptional: true,
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `[1]         [C]
[ ][ ]      [3]
   [ ]      [ ]
[ ][2][ ][ ][D][ ][G]
[A]         [ ]
            [4]
            [C]`,
        legend: [
          "A = Squall",
          "C (Up) = Fish Scale",
          "C (Down) = Soul of Valor",
          "1 = Transient Gunner Lv1",
          "2 = Fleeting Flash Lv5",
          "3 = Delusory Dragoon Lv4",
          "4 = Ephemeral Vision Lv5"
        ]
      },
      {
        id: "ch3-decay",
        title: "Gateway to Decay",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `   [A]      [4]
[D][ ][ ][C][3][ ][ ]
      [1][ ][5]
   [2][ ]   [ ][6][G]
   [P]`,
        legend: [
          "A = Vaan",
          "C (Left) = Power Amulet",
          "1 = Transient Gunner Lv1",
          "2 = Fleeting Flash Lv5",
          "3 = Delusory Dragoon Lv4",
          "4 = Counterfeit Wraith Lv5",
          "5 = Fleeting Flash Lv1"
        ]
      },
      {
        id: "ch3-shrine-blue",
        title: "Gateway to Shrine",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `   [1][ ][2]   [ ]
      [ ][D][G]
[ ]   [ ]   [ ][4][C]
   [A][ ][ ][3]
      [ ]`,
        legend: [
          "A = Vaan",
          "C = Gargoyle Pebble",
          "1 = Delusory Dragoon Lv12",
          "2 = Delusory Dragoon Lv6",
          "3 = Fleeting Flash Lv6",
          "4 = Transient Witch Lv12"
        ]
      },
      {
        id: "ch3-southern-shrine",
        title: "Southern Shrine Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 11,
        asciiMap: `[1][S]
[ ][2][3]   [ ][ ]
[ ]   [ ]   [ ]
[ ][ ][ ][4][5][ ][A][B]
[ ]   [ ]   [6]
   [ ][ ][D]
[ ]`,
        legend: [
          "A = Vaan",
          "1 = Counterfeit Wraith Lv12",
          "2 = Counterfeit Wraith Lv12",
          "3 = Idle Sky Pirate Lv12",
          "4 = Transient Gunner Lv9",
          "5 = Idle Sky Pirate Lv9",
          "6 = Transient Gunner Lv12",
          "B = Cloud of Darkness Lv12",
          "S = Carbuncle AUTO"
        ]
      }
    ]
  },
  {
    id: "ch4",
    title: "Where Memories Wait",
    chapterNumber: "Chapter 4",
    characters: "Yuna",
    location: "Melmond & Submerged Ruins",
    intro: "Yuna searches for her companions, seeking clues about why summoned aeons retain memories from her home world.",
    fieldEncounters: [
      "Field: Counterfeit Wraith Lv4",
      "Field: False Stalwart Lv10"
    ],
    gateways: [
      {
        id: "ch4-west-melmond",
        title: "West Melmond Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `   [1][C]
   [ ][A]
[D][ ][2][C][4][ ][G]
   [ ]      [ ][ ]
   [3]         [ ]
   [C]`,
        legend: [
          "A = Jecht",
          "C (Leftmost) = Halberd",
          "C (Middle) = Guard Ring",
          "C (Rightmost) = Hairband",
          "1 = Ephemeral Phantom Lv3",
          "2 = Imitation Despot Lv1",
          "3 = Delusory Dragoon Lv3",
          "4 = Ephemeral Summoner Lv1"
        ]
      },
      {
        id: "ch4-north-melmond",
        title: "North Melmond Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 3,
        asciiMap: `      [G]
      [4]
   [5][ ]
[ ]   [2][3][S]
      [C]   [A]
[C][1][ ][ ]
      [D]`,
        legend: [
          "A = Zidane",
          "C (Leftmost) = Oak Staff",
          "C (Rightmost) = Mystery Item",
          "1 = Imitation Despot Lv3",
          "2 = False Hero Lv1",
          "3 = Ephemeral Phantom Lv3",
          "4 = Ephemeral Summoner Lv1",
          "5 = Fleeting Flash Lv3",
          "S = Ramuh AUTO"
        ]
      },
      {
        id: "ch4-shrine-blue",
        title: "Gateway to the Shrine",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `   [5][ ][ ][ ]   [4]
      [ ]   [6]
[1]   [ ]   [ ][3][C]
   [ ][ ][ ][2]
      [ ]`,
        legend: [
          "C = Guard Stick",
          "1 = Counterfeit Wraith Lv11",
          "2 = Fleeting Flash Lv6",
          "3 = Idle Sky Pirate Lv11",
          "4 = Idle Sky Pirate Lv11",
          "5 = Fallacious Wanderer Lv11"
        ]
      },
      {
        id: "ch4-southern-shrine",
        title: "Southern Shrine Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 12,
        asciiMap: `[1][C]
[ ][2][ ]   [8][C]
[ ]   [ ]   [ ]
[ ][3][ ][6][7][ ][ ][B]
[P]   [ ]   [5]
   [ ][ ][D][ ]
[4]`,
        legend: [
          "C (Left) = Pink Tail",
          "C (Right) = Soul of Valor",
          "1 = Ephemeral Vision Lv11",
          "2 = Ephemeral Phantom Lv11",
          "3 = Ephemeral Vision Lv11",
          "4 = False Hero Lv6",
          "5 = Ephemeral Phantom Lv6",
          "6 = Imitation Despot Lv6",
          "7 = Ephemeral Summoner Lv11",
          "8 = False Hero Lv11",
          "B = The Emperor Lv18"
        ],
        strategy: "Use a Multichain at the spot where Manikin #5 is located. Defeat it first to free up the panel."
      }
    ]
  },
  {
    id: "ch5",
    title: "Decision",
    chapterNumber: "Chapter 5",
    characters: "Lightning",
    location: "Northern Sanctuary & Citadel of Order",
    intro: "Lightning faces difficult choices as the cycle begins to unravel and ancient allies cross paths.",
    gateways: [
      {
        id: "ch5-north-sanctuary",
        title: "Northern Sanctuary Gateway",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `[C][ ][G][ ][C]
[1]   [ ]   [2]
[ ][3][ ][4][ ]
[5]   [ ][ ][ ]
[C]   [ ][ ]
      [D]`,
        legend: [
          "C (Upper Left) = Lila Leaf",
          "C (Upper Left 2) = Soul of Patience",
          "C (Upper Right) = Zombie Rag",
          "1 = False Hero Lv13",
          "2 = Idle Sky Pirate Lv13",
          "3 = Delusory Dragoon Lv8",
          "4 = Fleeting Flash Lv8",
          "5 = Imitation Despot Lv13"
        ]
      },
      {
        id: "ch5-forsaken-kingdom",
        title: "Forsaken Kingdom",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 12,
        asciiMap: `   [S]
[ ][1]   [P]
[D][ ][C][ ][ ][B]
[ ][2]   [ ]
[ ]      [3]
      [C][ ][C]`,
        legend: [
          "C (Upper Left) = 2000 gil",
          "C (Bottom Left) = Blazefire Saber",
          "C (Right) = Mythril",
          "1 = False Hero Lv13",
          "2 = Ephemeral Summoner Lv13",
          "3 = Ephemeral Phantom Lv23",
          "B = Warrior of Light Lv18",
          "S = Odin AUTO"
        ]
      }
    ]
  },
  {
    id: "ch6",
    title: "Indiscernible Truth",
    chapterNumber: "Chapter 6",
    characters: "Kain",
    location: "Sunken Lake & Ryukahn Region",
    intro: "Kain makes the painful choice to strike down his own comrades to shield them from permanent oblivion.",
    fieldEncounters: [
      "Field: Imitation Despot Lv7, False Stalwart Lv4",
      "Field: Counterfeit Wraith Lv7"
    ],
    gateways: [
      {
        id: "ch6-sunken-lake",
        title: "Sunken Lake Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `   [ ]   [ ]
      [ ][ ]
[D][ ][ ][2][ ][4][G]
      [1]   [3]
      [C]   [C]`,
        legend: [
          "C (Left) = Javelin",
          "C (Right) = Pink Tail",
          "1 = Imitation Despot Lv7",
          "2 = Delusory Dragoon Lv3",
          "3 = Fleeting Flash Lv7",
          "4 = Transient Gunner Lv3"
        ]
      },
      {
        id: "ch6-hidden-darkness",
        title: "Hidden Darkness Gateway",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `   [ ]
[ ][1]   [P]
[D][ ][ ][ ][ ][B]
[ ][2]   [ ]
[ ]      [3]
      [C][ ][C]`,
        legend: [
          "C (Left) = 500 gil",
          "C (Right) = Soul of Valor",
          "1 = Imitation Despot Lv7",
          "2 = Capricious Reaper Lv3",
          "3 = Idle Sky Pirate Lv7",
          "4 = Fleeting Flash Lv3",
          "5 = Phantasmal Girl Lv7"
        ]
      },
      {
        id: "ch6-legendary-lake",
        title: "Legendary Lake Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `   [A][2][ ][4][C]
[ ]   [ ][3][ ]
[1][ ][K][ ][5]
[S]   [D]   [G]`,
        legend: [
          "A = Firion",
          "C = Black Dragon Spear",
          "1 = Delusory Dragoon Lv7",
          "2 = Fallacious Tree Lv7",
          "3 = Fleeting Flash Lv7",
          "4 = Imitation Despot Lv17",
          "5 = Fleeting Flash Lv3",
          "S = Shiva AUTO"
        ],
        strategy: "Get to panel K and execute a Multichain to trap multiple manikins simultaneously."
      },
      {
        id: "ch6-true-intent",
        title: "Gateway of True Intent",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 10,
        asciiMap: `         [G]
          [4]
    [C][2][ ][3][C]
[ ]      [1]
          [ ][A]
    [ ][ ][D]   [ ]`,
        legend: [
          "A = Firion",
          "C (Left) = Pebble",
          "C (Right) = 500 gil",
          "1 = Transient Gunner Lv6",
          "2 = Idle Sky Pirate Lv13",
          "3 = Fallacious Tree Lv13",
          "4 = Fleeting Flash Lv13"
        ]
      },
      {
        id: "ch6-ryukahn",
        title: "Ryukahn Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 12,
        asciiMap: `      [B]
[ ][A][1][ ][3]
   [ ]   [2]
   [ ][ ][ ][ ][4][C]
      [D]   [ ]`,
        legend: [
          "A = Firion",
          "C = Yellow Drop",
          "1 = Delusory Dragoon Lv6",
          "2 = Phantasmal Girl Lv13",
          "3 = Transient Gunner Lv13",
          "4 = Idle Sky Pirate Lv13",
          "B = Exdeath Lv18"
        ]
      }
    ]
  },
  {
    id: "ch7",
    title: "Ally",
    chapterNumber: "Chapter 7",
    characters: "Tifa",
    location: "Glacial Highlands & Frozen Continent",
    intro: "Tifa pushes through the sub-zero blizzards to unite the remaining new warriors for the decisive clash.",
    fieldEncounters: [
      "Field: Transient Witch Lv8, False Stalwart Lv6",
      "Field: Transient Witch Lv6",
      "Field: False Stalwart Lv6, Transient Witch Lv8"
    ],
    gateways: [
      {
        id: "ch7-melting-snows",
        title: "Gateway of Melting Snows",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `[ ]   [S]   [ ]
[ ][ ][1]      [ ]
[D][ ][C][3][4][ ]
      [ ][ ]   [G]
[ ]   [2]   [ ]`,
        legend: [
          "C = Pearl Necklace",
          "1 = Imaginary Brawler Lv4",
          "2 = Ephemeral Summoner Lv4",
          "3 = Imaginary Brawler Lv1",
          "4 = Idle Sky Pirate Lv1",
          "S = Magic Pot AUTO"
        ]
      },
      {
        id: "ch7-solitude-1",
        title: "Solitude and Treachery",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `         [3][ ][5][C]
      [1][ ]   [ ]
[G][D][ ][ ]   [ ]
      [2][ ]   [ ]
         [4][ ][ ][ ]`,
        legend: [
          "C = 1000 gil",
          "1 = Imitation Despot Lv1",
          "2 = Delusory Dragoon Lv1",
          "3 = Ephemeral Vision Lv4",
          "4 = Counterfeit Wraith Lv4",
          "5 = Fleeting Flash Lv4"
        ]
      },
      {
        id: "ch7-frozen-continent",
        title: "Frozen Continent",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `[ ]   [5][B]
[1]   [4]
[2][D][K][ ][6][C]
[ ][ ][ ][ ]
   [ ][3]
      [P]`,
        legend: [
          "C = Metal Knuckles",
          "1 = Ephemeral Summoner Lv1",
          "2 = Fleeting Flash Lv4",
          "3 = Imaginary Brawler Lv4",
          "4 = Delusory Dragoon Lv1",
          "5 = Imaginary Brawler Lv4",
          "6 = Fallacious Tree Lv16",
          "B = Ultimecia Lv12"
        ],
        strategy: "Get to position K and execute a Straight Chain."
      },
      {
        id: "ch7-snow-sorrow",
        title: "Snow of Sorrow",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `[C][ ][1][C]
   [2]
[3][ ][D][ ][5]
   [ ][ ][4]
      [G][ ]
         [ ]`,
        legend: [
          "C (Left) = Wakizashi",
          "C (Right) = Cyan drop",
          "1 = Counterfeit Wraith Lv7",
          "2 = Fleeting Flash Lv11",
          "3 = Ephemeral Summoner Lv11",
          "4 = Transient Gunner Lv7",
          "5 = Imaginary Brawler Lv11"
        ]
      },
      {
        id: "ch7-solitude-2",
        title: "Solitude and Treachery (Revisit)",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `         [3][ ][5][C]
      [1][ ]   [ ]
[G][D][ ][ ]   [ ]
      [2][ ]   [ ]
         [4][ ][ ][ ]`,
        legend: [
          "C = Treasure Chest",
          "1 = Imitation Despot Lv1",
          "2 = Delusory Dragoon Lv1",
          "3 = Ephemeral Vision Lv4",
          "4 = Counterfeit Wraith Lv4",
          "5 = Fleeting Flash Lv4"
        ]
      },
      {
        id: "ch7-ryukahn",
        title: "Ryukahn Gateway",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 12,
        asciiMap: `      [G]
[2][A][ ][3]   [ ][ ]
   [ ]   [4]
[1][ ][ ][ ]   [ ][ ]
[C]   [D]   [ ]`,
        legend: [
          "C = White Drop",
          "A = Kain",
          "1 = Fleeting Flash Lv10",
          "2 = Ephemeral Summoner Lv10",
          "3 = Imaginary Brawler Lv11",
          "4 = Delusory Dragoon Lv11"
        ]
      }
    ]
  },
  {
    id: "epilogue",
    title: "An Undocumented Battle",
    chapterNumber: "Epilogue",
    characters: "Tifa, Laguna, Lightning, Vaan, and Yuna",
    location: "The Rift Core & Dimensional Breach",
    intro: "The final stand of the 012 warriors. A selfless sacrifice to seal the rift and ensure hope passes to the 13th cycle.",
    gateways: [
      {
        id: "ep-conflicting-virtues",
        title: "Conflicting Virtues",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 14,
        asciiMap: `   [D]   [ ]   [G]
[1][ ]   [ ][3][ ]
   [ ][ ][ ]   [A]
[ ][ ]   [ ]
   [2][C]`,
        legend: [
          "A = Kain",
          "C = 500 gil",
          "1 = Imaginary Brawler Lv13",
          "2-1 = Delusory Dragoon Lv13",
          "2-2 = False Stalwart Lv19",
          "3-1 = Fleeting Flash Lv13",
          "3-2 = False Stalwart Lv19"
        ]
      },
      {
        id: "ep-inherited-memories",
        title: "Inherited Memories",
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `[G][ ][ ]   [ ]
      [1][2][ ]
   [ ][3][ ]   [R]
   [ ][ ][ ][ ][4][ ]
         [D][A]
               [ ]`,
        legend: [
          "1 = Imaginary Brawler Lv13",
          "2 = Phantasmal Harlequin Lv13",
          "3 = Phantasmal Harlequin Lv19",
          "4-1 = Idle Sky Pirate Lv13",
          "4-2 = Phantasmal Harlequin Lv19",
          "4-3 = Delusory Dragoon Lv19"
        ]
      },
      {
        id: "ep-artificial-life",
        title: "Gateway of Artificial Life",
        kpChance: "BRV Break within 60 sec.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 19,
        asciiMap: `[ ]            [ ]
   [ ][1]   [ ][ ]
      [ ]   [ ]
[D][ ][ ][ ][ ][3][G]
         [2][A]
      [ ][C]
   [ ]`,
        legend: [
          "C = 2000 gil",
          "1 = Transient Witch Lv18",
          "2 = Fleeting Flash Lv24",
          "3-1 = Counterfeit Wraith Lv18",
          "3-2 = False Stalwart Lv18",
          "3-3 = Imaginary Brawler Lv24"
        ]
      },
      {
        id: "ep-lost-innocence",
        title: "Gateway of Lost Innocence",
        isOptional: true,
        kpChance: "BRV Break within 60 sec.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `   [G][1][ ][3]
   [D]   [ ][ ]   [C]
[2][ ][ ]   [K][4][ ]
      [ ][ ][ ]   [C]`,
        legend: [
          "C (Up) = Cyan Powder",
          "C (Down) = Chocobo Powder",
          "1 = Phantasmal Girl Lv19",
          "2 = False Stalwart Lv24",
          "3 = Transient Witch Lv24",
          "4 = Imaginary Champion Lv34"
        ],
        strategy: "A Multichain at position K will hit all surrounding pieces."
      },
      {
        id: "ep-recurring-tragedy",
        title: "Recurring Tragedy",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        asciiMap: `[C][5][ ][ ][ ][ ]
               [ ]
[C][4][ ][ ][ ][ ]
            [3][ ]
[G]      [ ][K][ ]
[ ]         [ ][2]
[D][ ][ ][ ][ ][1]`,
        legend: [
          "C (Up) = Mage's Staff",
          "C (Down) = Soul of Destruction",
          "1 = Delusory Dragoon Lv24",
          "2 = Idle Sky Pirate Lv24",
          "3 = Phantasmal Girl Lv24",
          "4 = Transient Gunner Lv24",
          "5 = Ephemeral Summoner Lv24"
        ],
        strategy: "At position K, use a Cross Chain."
      },
      {
        id: "ep-foreign-world",
        title: "To A Foreign World (Final Gauntlet - 3 Floors)",
        kpChance: "Win battle.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 23,
        floors: [
          {
            floorNumber: 1,
            name: "The Breach Approach",
            kpChance: "Win battle.",
            bonusLine: 23,
            asciiMap: `            [ ][ ][ ]
[D][ ][C][ ][1]   [ ][2][G]`,
            legend: [
              "C = 1000 gil",
              "1 = Phantasmal Harlequin Lv19",
              "2 = Phantasmal Girl Lv18"
            ]
          },
          {
            floorNumber: 2,
            name: "Rift Chasm",
            asciiMap: `      [ ]
[G][ ]   [ ]      [2]
   [ ][2]               [ ]
      [ ]   [1][ ][ ][D]
      [ ][ ][ ]
               [ ]`,
            legend: [
              "1 = Idle Sky Pirate Lv19",
              "2 = Counterfeit Wraith Lv19"
            ]
          },
          {
            floorNumber: 3,
            name: "Core of Discord (Final Round-Robin)",
            asciiMap: `            [ ]

            [ ]   [ ]
[D][ ][ ][ ][ ][ ][ ][ ][B]
         [ ]      [ ]
         [ ]`,
            legend: [
              "B-1 = Vaan vs. Kefka Lv22",
              "B-2 = Tifa vs. Ultimecia Lv24",
              "B-3 = Yuna vs. The Emperor Lv24",
              "B-4 = Laguna vs. Cloud of Darkness Lv22",
              "B-5 = Lightning vs. Garland Lv39"
            ],
            notes: "This is the final battle of 012. The boss battle is a round-robin style group battle where your characters and matchups are predetermined by the storyline."
          }
        ]
      }
    ]
  }
];
