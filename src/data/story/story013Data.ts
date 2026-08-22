export interface Story013Gateway {
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
}

export interface Story013Chapter {
  id: string;
  title: string;
  chapterNumber: string;
  character: string;
  location?: string;
  intro?: string;
  fieldEncounters?: string[];
  gateways: Story013Gateway[];
}

export const story013Key = [
  { key: "D", desc: "Deploy Point (Start Position)" },
  { key: "G", desc: "Goal (Stigma of Chaos)" },
  { key: "B", desc: "Boss Encounter" },
  { key: "A", desc: "Assist Ally Piece" },
  { key: "P", desc: "Potion Recovery Node" },
  { key: "R", desc: "Phoenix Down Node" },
  { key: "C", desc: "Treasure Chest" },
  { key: "S", desc: "Summon Stone Node" },
  { key: "E#", desc: "Emblem Board Buff (Stage BRV, Critical Up, Boosters)" },
  { key: "M#", desc: "Single Manikin Battle Piece" },
  { key: "M#-#", desc: "Group Battle Manikin and sequence" }
];

export const story013Chapters: Story013Chapter[] = [
  {
    id: "prologue-013",
    title: "A Final Hope",
    chapterNumber: "Prologue",
    character: "Warrior of Light",
    location: "Sanctuary of Order",
    intro: "The 10 chosen champions of Cosmos assemble as the 13th war of the gods commences.",
    gateways: [
      {
        id: "p013-forsaken-kingdom",
        title: "Forsaken Kingdom",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: "02",
        asciiMap: `    [  ]
[  ][  ]    [  ]
[D ][  ][E2][M1][  ][G ]
[  ][  ]    [  ]
[  ]    [C ][  ][  ]`,
        legend: [
          "M1 = False Hero Lv8",
          "M2 = Fleeting Flash Lv8",
          "E1 = (under M1) Physical Critical Rate Up",
          "E2 = Physical Critical Rate Up"
        ]
      }
    ]
  },
  {
    id: "ch1-cloud",
    title: "Beyond Doubt",
    chapterNumber: "Chapter 1 (Destiny Odyssey VII)",
    character: "Cloud",
    location: "Cornelia to Gulg Volcano",
    intro: "Cloud travels alone seeking the reason for his summon, crossing northern sanctuaries and dried river valleys.",
    fieldEncounters: [
      "Field: Ephemeral Phantom Lv9",
      "Field: False Stalwart Lv9",
      "Field: Ephemeral Phantom Lv9, False Stalwart Lv9",
      "Field: Counterfeit Wraith Lv9",
      "Field: Capricious Thief Lv9"
    ],
    gateways: [
      {
        id: "ch1-north-sanctuary",
        title: "Northern Sanctuary Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `[C ][  ][G ][  ][C ]
[M1]    [M2]    [M3]
[  ][C ][M4][  ][  ]
        [E ][  ][A ]
[  ][  ][  ][  ]
        [D ]`,
        legend: [
          "A = Tidus",
          "M1 = Fleeting Flash Lv8",
          "M2 = False Hero Lv5",
          "M3 = Capricious Thief Lv5",
          "M4 = Physical Critical Rate Up",
          "E = Physical Critical Rate Up"
        ]
      },
      {
        id: "ch1-good-evil",
        title: "Gateway of Good and Evil",
        kpChance: "BRV Break within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 3,
        asciiMap: `    [  ]
    [M1][  ][  ][B ]
[  ][E1][M2][A ]
    [D ][  ][  ]
[  ][E2][  ][M3][C ]
    [M4][  ]`,
        legend: [
          "A = Firion",
          "M1 = Ephemeral Vision Lv8",
          "M2 = Imaginary Champion Lv5",
          "M3 = Imaginary Brawler Lv8",
          "M4 = Delusory Dragoon Lv5",
          "E1 = Physical Critical Rate Up",
          "E2 = KP+1"
        ]
      },
      {
        id: "ch1-beyond-continent",
        title: "Beyond the Continent",
        kpChance: "BRV Break within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `    [  ]
    [  ][M1][C ][  ]
[D ][  ][  ][A ][M2][C ]
        [  ][  ][E ]
[G ][M4][M3]    [M5]`,
        legend: [
          "A = Cecil",
          "M1 = Delusory Knight Lv9",
          "M2 = Imaginary Champion Lv15",
          "M3 = Ephemeral Vision Lv9",
          "M4 = Delusory Knight Lv9",
          "M5 = Imaginary Soldier Lv15",
          "E = Booster Accessory x5"
        ]
      },
      {
        id: "ch1-pravoka",
        title: "Pravoka Gateway",
        isOptional: true,
        kpChance: "BRV Break within 30 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        asciiMap: `        [G ]
[  ][  ][  ][  ][M1]
[  ][  ][M2][M3]
[  ][  ][  ][E ]
[  ][  ][M4][  ][M5][C ]
    [  ][  ][  ]
        [D ]`,
        legend: [
          "M1 = Imaginary Soldier Lv15",
          "M2 = Ephemeral Vision Lv15",
          "M3 = Delusory Knight Lv15",
          "M4 = Capricious Thief Lv15",
          "M5 = Fleeting Flash Lv15",
          "E = Stage BRV Boost"
        ]
      },
      {
        id: "ch1-dried-river",
        title: "Dried River Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 11,
        asciiMap: `[C ]        [D ]
[M1]        [  ]
[E1][  ][  ][E2][M2]
            [  ][  ]
[B ][M3][  ][M4]`,
        legend: [
          "M1 = Delusory Warlock Lv20",
          "M2 = Imaginary Soldier Lv14",
          "M3 = Phantasmal Harlequin Lv19",
          "M4 = Fallacious Wanderer Lv14",
          "E1 = Booster Accessory x5",
          "E2 = Initial BRV Boost"
        ]
      },
      {
        id: "ch1-gulg-gateway",
        title: "Gulg Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `[M1]    [  ][M2][  ]
    [D ][E1][  ]
[  ][  ]    [  ]    [B ]
[E2][M3][M4][  ][M5][  ]
    [P ]
    [C ]`,
        legend: [
          "M1 = Idle Sky Pirate Lv19",
          "M2 = Idle Sky Pirate Lv14",
          "M3 = Capricious Reaper Lv25",
          "M4 = Transient Gunner Lv14",
          "M5 = Counterfeit Wraith Lv19",
          "E1 = Initial BRV 0",
          "E2 = Physical Critical Rate Up",
          "B = Sephiroth Lv20"
        ]
      }
    ]
  },
  {
    id: "ch2-ok",
    title: "Wisdom or Courage?",
    chapterNumber: "Chapter 2 (Destiny Odyssey III)",
    character: "Onion Knight",
    location: "Melmond Region & Dragon Caves",
    intro: "Onion Knight confronts doubts about his bravery while navigating dangerous subterranean mazes.",
    fieldEncounters: [
      "Field: Counterfeit Wraith Lv13",
      "Field: Counterfeit Wraith Lv17"
    ],
    gateways: [
      {
        id: "ch2-west-melmond",
        title: "West Melmond Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: "02",
        asciiMap: `    [M1][C ]
    [  ][A ]
[D ][E ][M2][  ][M4][  ][G ]
    [  ]        [  ][  ]
    [M3]            [  ]
    [C ]`,
        legend: [
          "A = Terra",
          "E = Booster x4",
          "M1 = Delusory Knight Lv9",
          "M2 = Ephemeral Summoner Lv5",
          "M3 = Counterfeit Youth Lv9",
          "M4 = Counterfeit Wraith Lv5"
        ]
      },
      {
        id: "ch2-north-melmond",
        title: "North Melmond Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 3,
        asciiMap: `            [G ]
            [M3]
        [M2][  ]
[  ][  ]    [E2][M4][C ]
    [  ]    [E1]    [A ]
    [  ][M1][  ][E3]
            [D ]`,
        legend: [
          "A = Terra",
          "M1 = Capricious Thief Lv9",
          "M2 = Phantasmal Harlequin Lv5",
          "M3 = False Hero Lv9",
          "M4 = Fleeting Flash Lv9",
          "E1 = HP Recovery before battle",
          "E2 = Both sides increased initial BRV",
          "E3 = Both sides increased initial BRV"
        ]
      },
      {
        id: "ch2-shrine-blue",
        title: "Gateway to the Shrine",
        isOptional: true,
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        asciiMap: `[M1][  ][M2]    [  ]
    [  ][D ][G ]
    [  ]    [E2][M5][C ]
[A ][  ][E1][M4]
    [M3]`,
        legend: [
          "A = Terra",
          "M1 = Counterfeit Wraith Lv9",
          "M2 = Capricious Thief Lv9",
          "M3 = Transient Gunner Lv9",
          "M4 = Idle Sky Pirate Lv9",
          "M5 = Phantasmal Harlequin Lv9",
          "E1 = Initial BRV Boost",
          "E2 = Both sides BRV = 0"
        ]
      },
      {
        id: "ch2-decay",
        title: "Gateway to Decay",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `    [A ]        [M1]
[D ][  ][  ][  ][E2][M2][S ]
            [E1][  ]
    [  ][  ]    [M3][M4][B ]
    [  ]`,
        legend: [
          "A = Terra",
          "M1 = Imaginary Champion Lv18",
          "M2 = Transient Gunner Lv18",
          "M3 = Transient Gunner Lv13",
          "M4 = Imaginary Soldier Lv18",
          "S = Demon Wall AUTO",
          "B = Terra Lv14"
        ],
        notes: "Terra remains in constant EX Mode during this encounter."
      },
      {
        id: "ch2-seasonless",
        title: "Seasonless Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 14,
        asciiMap: `[M1]
[  ]        [M4][  ][  ]
[E1][D ][E2][M3][  ][  ]
[  ]        [M5][  ]
[M2]        [  ][  ][B ]
[C ]`,
        legend: [
          "M1 = Counterfeit Wraith Lv18",
          "M2 = Phantasmal Girl Lv18",
          "M3 = Counterfeit Youth Lv13",
          "M4 = False Stalwart Lv18",
          "M5 = Counterfeit Youth Lv13",
          "E1 = Magic Critical Rate Up",
          "E2 = Booster Accessory x5",
          "B = Cloud of Darkness Lv20"
        ]
      }
    ]
  },
  {
    id: "ch3-terra",
    title: "The Chosen Path",
    chapterNumber: "Chapter 3 (Destiny Odyssey VI)",
    character: "Terra",
    location: "Snowfields & Mountain Passes",
    intro: "Terra grapples with the destructive power within her while Kefka schemes to manipulate her magical heritage.",
    gateways: [
      {
        id: "ch3-snow-sorrow",
        title: "Snow of Sorrow",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `[C ][  ][  ][C ]
    [M1]
[  ][  ][D ][E ][  ]
    [M2]    [M3]
    [G ][M4][M5]
            [  ]`,
        legend: [
          "M1 = Fleeting Flash Lv10",
          "M2 = Counterfeit Wraith Lv6",
          "M3 = Delusory Dragoon Lv6",
          "M4 = Imaginary Brawler Lv10",
          "M5 = Transient Gunner Lv6",
          "E = Stage BRV Boost"
        ]
      },
      {
        id: "ch3-frozen-continent",
        title: "Frozen Continent",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `[C ]        [  ][M1][  ][  ][G ]
[M2]            [  ]
[  ][  ][D ][E ][M3]
[M4]            [  ]
[C ]        [  ][M5][  ][  ][A ]`,
        legend: [
          "A = Squall",
          "M1 = Ephemeral Summoner Lv14",
          "M2 = Imaginary Brawler Lv10",
          "M3 = Delusory Dragoon Lv10",
          "M4 = Delusory Knight Lv14",
          "M5 = Fallacious Tree Lv14",
          "E = Physical Critical Rate Up"
        ]
      },
      {
        id: "ch3-fools-hope",
        title: "Gateway of Fools and Hope",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `    [M1][  ]
    [  ]    [M2]
[D ][E1]    [  ][  ][B ]
    [  ]    [E2]
    [M3][  ][M4]
            [C ]`,
        legend: [
          "M1 = Capricious Thief Lv23",
          "M2 = Capricious Thief Lv28",
          "M3 = Imaginary Champion Lv23",
          "M4 = False Hero Lv28",
          "E1 = Magic Critical Rate Up",
          "E2 = Booster x5",
          "B = Kefka Lv24"
        ]
      }
    ]
  },
  {
    id: "ch4-cecil",
    title: "Guidance of the Moon",
    chapterNumber: "Chapter 4 (Destiny Odyssey IV)",
    character: "Cecil",
    location: "Lunar Subterrane & Castle Ruins",
    intro: "Cecil struggles with the duality of Dark Knight and Paladin as Golbez challenges his convictions.",
    gateways: [
      {
        id: "ch4-omen-destruction",
        title: "Omen of Destruction",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 2,
        asciiMap: `[D ][  ][  ][E ][M1][  ][G ]
        [M2]        [M3]
        [C ]        [C ]`,
        legend: [
          "M1 = Delusory Dragoon Lv7",
          "M2 = False Stalwart Lv7",
          "M3 = Capricious Reaper Lv11",
          "E = Initial BRV Boost"
        ]
      },
      {
        id: "ch4-southern-shrine",
        title: "Southern Shrine Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `        [C ]
        [M1]
[D ][  ][E1][M2][  ][B ]
        [M3]
        [E2]
        [M4]`,
        legend: [
          "M1 = Counterfeit Wraith Lv26",
          "M2 = Transient Witch Lv21",
          "M3 = Fallacious Tree Lv21",
          "M4 = Delusory Dragoon Lv26",
          "E1 = Physical Critical Rate Up",
          "E2 = Magic Critical Rate Up",
          "B = Golbez Lv28"
        ]
      }
    ]
  },
  {
    id: "ch5-tidus",
    title: "Entrusted Power",
    chapterNumber: "Chapter 5 (Destiny Odyssey X)",
    character: "Tidus",
    location: "Giza Dunes & Sunken Caves",
    intro: "Tidus encounters Jecht, confronting his complex feelings toward his father in battle.",
    gateways: [
      {
        id: "ch5-encounters-treason",
        title: "Encounters and Treason",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 3,
        asciiMap: `[D ][  ][E ][M1][  ][G ]
        [M2]    [M3]
        [C ]    [C ]`,
        legend: [
          "M1 = Ephemeral Phantom Lv8",
          "M2 = Idle Sky Pirate Lv8",
          "M3 = Imaginary Brawler Lv12",
          "E = Physical Critical Rate Up"
        ]
      },
      {
        id: "ch5-ryukahn",
        title: "Ryukahn Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `[D ][  ][E1][M1][  ][B ]
    [M2]        [M3]
    [C ]        [E2]`,
        legend: [
          "M1 = Ephemeral Summoner Lv25",
          "M2 = False Stalwart Lv25",
          "M3 = Imaginary Champion Lv30",
          "E1 = Initial BRV Boost",
          "E2 = Booster x5",
          "B = Jecht Lv32"
        ]
      }
    ]
  },
  {
    id: "ch6-firion",
    title: "Seeds of Hope",
    chapterNumber: "Chapter 6 (Destiny Odyssey II)",
    character: "Firion",
    location: "Pandaemonium Approach",
    intro: "Firion protects his dream of a peaceful world where wild roses bloom against the Emperor's tyranny.",
    gateways: [
      {
        id: "ch6-great-forest",
        title: "Great Forest Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 4,
        asciiMap: `[D ][  ][E ][M1][  ][G ]
    [M2]    [M3]
    [C ]    [P ]`,
        legend: [
          "M1 = False Hero Lv9",
          "M2 = Transient Gunner Lv9",
          "M3 = Phantasmal Harlequin Lv13",
          "E = Physical Critical Rate Up"
        ]
      },
      {
        id: "ch6-sages-path",
        title: "Sage's Path Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 18,
        asciiMap: `[D ][  ][E1][M1][  ][B ]
    [M2]        [M3]
    [E2]        [C ]`,
        legend: [
          "M1 = Capricious Reaper Lv31",
          "M2 = Ephemeral Vision Lv26",
          "M3 = Delusory Warlock Lv31",
          "E1 = Magic Critical Rate Up",
          "E2 = Stage BRV Boost",
          "B = The Emperor Lv34"
        ]
      }
    ]
  },
  {
    id: "ch7-squall",
    title: "Resolve for Seclusion",
    chapterNumber: "Chapter 7 (Destiny Odyssey VIII)",
    character: "Squall",
    location: "Northern Mountains & Castles",
    intro: "Squall maintains distance from others, ultimately confronting Ultimecia's temporal sorcery.",
    gateways: [
      {
        id: "ch7-melting-snows",
        title: "Gateway of Melting Snows",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 4,
        asciiMap: `[D ][  ][E ][M1][  ][G ]
    [M2]    [M3]
    [C ]    [C ]`,
        legend: [
          "M1 = Delusory Dragoon Lv10",
          "M2 = Imaginary Soldier Lv10",
          "M3 = Transient Witch Lv14",
          "E = Physical Critical Rate Up"
        ]
      },
      {
        id: "ch7-crescent-lake",
        title: "Crescent Lake Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 18,
        asciiMap: `[D ][  ][E1][M1][  ][B ]
    [M2]        [M3]
    [C ]        [E2]`,
        legend: [
          "M1 = Transient Witch Lv33",
          "M2 = Ephemeral Phantom Lv28",
          "M3 = False Hero Lv33",
          "E1 = Initial BRV Boost",
          "E2 = Booster x5",
          "B = Ultimecia Lv36"
        ]
      }
    ]
  },
  {
    id: "ch8-zidane",
    title: "Trust",
    chapterNumber: "Chapter 8 (Destiny Odyssey IX)",
    character: "Zidane",
    location: "Floating Ruins & Mist Highlands",
    intro: "Zidane reaches out to his friends, defying Kuja's narcissistic view of despair.",
    gateways: [
      {
        id: "ch8-solitude",
        title: "Solitude and Treachery",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 5,
        asciiMap: `[D ][  ][E ][M1][  ][G ]
    [M2]    [M3]
    [C ]    [P ]`,
        legend: [
          "M1 = Capricious Thief Lv11",
          "M2 = Imaginary Brawler Lv11",
          "M3 = Ephemeral Vision Lv15",
          "E = Stage BRV Boost"
        ]
      },
      {
        id: "ch8-true-intent",
        title: "Gateway of True Intent",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 20,
        asciiMap: `[D ][  ][E1][M1][  ][B ]
    [M2]        [M3]
    [E2]        [C ]`,
        legend: [
          "M1 = Ephemeral Phantom Lv35",
          "M2 = Counterfeit Youth Lv30",
          "M3 = Phantasmal Girl Lv35",
          "E1 = Magic Critical Rate Up",
          "E2 = Physical Critical Rate Up",
          "B = Kuja Lv38"
        ]
      }
    ]
  },
  {
    id: "ch9-bartz",
    title: "A Treasure Hunt",
    chapterNumber: "Chapter 9 (Destiny Odyssey V)",
    character: "Bartz",
    location: "Dimensional Void & Ancient Ruins",
    intro: "Bartz's lighthearted curiosity guides him through Exdeath's void-infused gateways.",
    gateways: [
      {
        id: "ch9-departure",
        title: "Gateway to Departure",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 5,
        asciiMap: `[D ][  ][E ][M1][  ][G ]
    [M2]    [M3]
    [C ]    [C ]`,
        legend: [
          "M1 = Fallacious Wanderer Lv12",
          "M2 = Delusory Knight Lv12",
          "M3 = Fallacious Tree Lv16",
          "E = Initial BRV Boost"
        ]
      },
      {
        id: "ch9-sunken-lake",
        title: "Sunken Lake Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 22,
        asciiMap: `[D ][  ][E1][M1][  ][B ]
    [M2]        [M3]
    [C ]        [E2]`,
        legend: [
          "M1 = Fallacious Tree Lv38",
          "M2 = Transient Gunner Lv33",
          "M3 = Capricious Reaper Lv38",
          "E1 = Booster x5",
          "E2 = Physical Critical Rate Up",
          "B = Exdeath Lv42"
        ]
      }
    ]
  },
  {
    id: "ch10-wol",
    title: "Champions of Her Will",
    chapterNumber: "Chapter 10 (Destiny Odyssey I)",
    character: "Warrior of Light",
    location: "Old Chaos Shrine & Edge of Discord",
    intro: "The Warrior of Light leads the final push to Garland and the threshold of the god of discord.",
    gateways: [
      {
        id: "ch10-legendary-lake",
        title: "Legendary Lake Gateway",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 6,
        asciiMap: `[D ][  ][E ][M1][  ][G ]
    [M2]    [M3]
    [C ]    [P ]`,
        legend: [
          "M1 = False Stalwart Lv14",
          "M2 = Fleeting Flash Lv14",
          "M3 = False Hero Lv18",
          "E = Physical Critical Rate Up"
        ]
      },
      {
        id: "ch10-shrine-chaos",
        title: "Gateway to the Chaos Shrine",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 25,
        asciiMap: `[D ][  ][E1][M1][  ][B ]
    [M2]        [M3]
    [E2]        [C ]`,
        legend: [
          "M1 = False Stalwart Lv45",
          "M2 = Delusory Dragoon Lv40",
          "M3 = Imitation Despot Lv45",
          "E1 = Initial BRV Boost",
          "E2 = Booster x5",
          "B = Garland Lv48"
        ],
        notes: "Contains a treasure chest with Shell Armor near the exit."
      }
    ]
  },
  {
    id: "epilogue-013",
    title: "Conclusion of the Cycle",
    chapterNumber: "Epilogue",
    character: "Cosmos Champions (Party Selection)",
    location: "Edge of Discord • Throne of Chaos",
    intro: "With all 10 crystals gathered, the warriors initiate the final battle against the god of discord, Chaos.",
    gateways: [
      {
        id: "ep013-throne-chaos",
        title: "Throne of the Discord God (3-Stage Final Boss)",
        kpChance: "Defeat Chaos and end the cycle.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 50,
        asciiMap: `            [B3]
            [  ]
            [B2]
            [  ]
[D ][  ][  ][B1]`,
        legend: [
          "B1 = Chaos Stage 1 (Base Form Lv50)",
          "B2 = Chaos Stage 2 (Demonic Surge Lv50)",
          "B3 = Chaos Final Stage (Apocalyptic God Form Lv50)"
        ],
        strategy: "Chaos has three successive forms. Equip high EX absorption accessories and assist characters like Kuja or Aerith to interrupt his global arena-sweeping HP moves."
      }
    ]
  }
];
