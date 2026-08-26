export interface OverworldChest {
  location: string;
  reward: string;
}

export interface MoogleShopItem {
  item: string;
  cost: string;
  desc?: string;
}

export interface OverworldStep {
  title: string;
  description: string;
  chests?: OverworldChest[];
  orbs?: string;
  moogleShop?: {
    location?: string;
    notes?: string;
    inventory: MoogleShopItem[];
  };
}

export interface RecommendedAbility {
  name: string;
  type: 'BRV' | 'HP' | 'Support';
  locationOrLevel: string;
  notes: string;
}

export interface CharacterGuide {
  name: string;
  title: string;
  portrait?: string;
  playstyle: string;
  paradigmOrMechanic?: {
    name: string;
    description: string;
  };
  recommendedAbilities?: RecommendedAbility[];
  assistEvaluation?: {
    partner: string;
    groundAssist: string;
    airAssist: string;
    tactics: string;
  };
}

export interface EnemyTactic {
  name: string;
  level?: number | string;
  attacks?: string[];
  hpAttacks?: string[];
  summon?: string;
  strategy: string;
}

export interface BossTactic {
  bossName: string;
  level: number | string;
  hp?: number | string;
  bravery?: number | string;
  attacks?: string[];
  hpAttacks?: string[];
  summon?: string;
  difficulty?: string;
  strategy: string;
  dangerNotes?: string;
  img?: string;
}

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
  enemyTactics?: EnemyTactic[];
  bossTactic?: BossTactic;
  notes?: string;
  strategy?: string;
  chests?: string[];
  floors?: {
    floorNumber: number | string;
    name?: string;
    kpChance?: string;
    rules?: string;
    skills?: string;
    bonusLine?: number | string;
    asciiMap?: string;
    legend?: string[];
    enemyTactics?: EnemyTactic[];
    bossTactic?: BossTactic;
    notes?: string;
  }[];
}

export interface Story013Chapter {
  id: string;
  title: string;
  chapterNumber: string;
  character: string;
  location?: string;
  intro?: string;
  fieldEncounters?: string[];
  characterGuide?: CharacterGuide;
  overworldSteps?: OverworldStep[];
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
    intro: "The 10 chosen champions of Cosmos assemble as the 13th war of the gods commences. The Warrior of Light leads the vanguard toward the Forsaken Kingdom.",
    characterGuide: {
      name: "Warrior of Light",
      title: "Paragon of Cosmos",
      portrait: "/dissidia_012_characters/01_Warrior_of_Light.webp",
      playstyle: "A rock-solid defensive vanguard. His shield maneuvers block physical and magical strikes automatically during attack startup. Radiant Sword provides ranged tracking, while Ascension launches foes for midair Assist follow-ups.",
      recommendedAbilities: [
        { name: "Daybreak", type: "BRV", locationOrLevel: "Default", notes: "Downward shield bash with auto-guard on startup; crashes foes into the floor." },
        { name: "Ascension", type: "BRV", locationOrLevel: "Level 3", notes: "Skyward sword thrust that launches opponents for Chase sequences." },
        { name: "Radiant Sword", type: "HP", locationOrLevel: "Default", notes: "Fires 4 light blades that home in on airborne targets." },
        { name: "Shining Wave", type: "HP", locationOrLevel: "Level 8", notes: "Grounded light pillar that travels across the floor with high vertical reach." }
      ],
      assistEvaluation: {
        partner: "Kain Highwind",
        groundAssist: "Spiral Blow",
        airAssist: "Dragon's Fang",
        tactics: "Launch targets with Ascension, then call Kain's Dragon's Fang to smash them into the dirt before following up with Shining Wave."
      }
    },
    overworldSteps: [
      {
        title: "Sanctuary of Order Vanguard",
        description: "Gather the initial Light Orbs and speak with Cosmos before advancing into the Forsaken Kingdom gateway.",
        chests: [
          { location: "Sanctuary Gateway Ridge", reward: "Potion & 100 Gil" }
        ],
        orbs: "3 Light Orbs near sanctuary gate"
      }
    ],
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
          "D = Deploy Point",
          "M1 = Delusory Dragoon Lv1",
          "E2 = Emblem Node (Bravery Boost)",
          "C = Bronze Sword Chest",
          "G = Stigma of Chaos"
        ],
        chests: ["Bronze Sword"],
        strategy: "Use Daybreak's auto-guard to parry the Delusory Dragoon's lance charges. Equip the Bronze Sword from chest C to complete the prologue."
      }
    ]
  },
  {
    id: "do-vii-cloud",
    title: "Destiny Odyssey VII: Cloud",
    chapterNumber: "Chapter 1",
    character: "Cloud",
    location: "Cavern of Earth to Gulg Pass",
    intro: "Cloud searches for his own reason to fight while being pursued by Sephiroth's phantom presence.",
    characterGuide: {
      name: "Cloud Strife",
      title: "Buster Blade Bruiser",
      portrait: "/dissidia_012_characters/08_Cloud_Strife.png",
      playstyle: "Cloud delivers crushing, guard-breaking strikes with heavy poise. Slashing Blow and Aerial Fang easily Wall Rush enemies. Master Braver and Omnislash Ver. 5 for devastating HP punishment.",
      recommendedAbilities: [
        { name: "Slashing Blow", type: "BRV", locationOrLevel: "Default", notes: "Double Buster Sword slash; holds high guard-crush properties." },
        { name: "Aerial Fang", type: "BRV", locationOrLevel: "Level 3", notes: "Upward aerial slash that chases enemies toward arena ceilings." },
        { name: "Braver", type: "HP", locationOrLevel: "Default", notes: "Downward diving leap that breaks normal blocks and inflicts heavy Wall Rush." },
        { name: "Blade Beam", type: "HP", locationOrLevel: "Level 8", notes: "Ranged sword shockwaves that split on floor impact." }
      ],
      assistEvaluation: {
        partner: "Tidus",
        groundAssist: "Cut & Run",
        airAssist: "Hop Step",
        tactics: "Wall Rush foes with Slashing Blow, then call Tidus's Hop Step to juggle the opponent into an inescapable Braver plunge."
      }
    },
    overworldSteps: [
      {
        title: "Cornelia to Gulg Canyon",
        description: "Explore the northern canyon for equipment chests and engage field manikins to level Cloud to Lv10+ before entering Sephiroth's gateway.",
        chests: [
          { location: "Canyon Edge", reward: "200 Gil" },
          { location: "North Ridge", reward: "Bronze Bangle" },
          { location: "Gulg Pass Islet", reward: "Power Ring" }
        ],
        orbs: "4 Light Orbs across canyon floor"
      }
    ],
    gateways: [
      {
        id: "do7-g1",
        title: "Gateway of Northern Sanctuary",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 4,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2]
    [C ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Capricious Thief Lv4",
          "M2 = Ephemeral Phantom Lv4",
          "E1 = Critical Up Emblem",
          "C = Iron Helm Chest",
          "G = Stigma of Chaos"
        ],
        chests: ["Iron Helm"],
        strategy: "Use Slashing Blow to stagger Zidane manikins. Claim the Critical Up emblem before engaging the phantom."
      },
      {
        id: "do7-boss",
        title: "Shrine of the Dark Knight",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 8,
        asciiMap: `[D ][  ][M1]    [B ]
    [  ][  ][M2][C ]
    [  ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Ephemeral Phantom Lv6",
          "M2 = Capricious Thief Lv6",
          "C = Mythril Dagger",
          "B = Sephiroth Boss Encounter (Lv8)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Sephiroth",
          level: 8,
          hp: 2100,
          bravery: 250,
          attacks: ["Shadow Flare", "Godspeed", "Fervent Blow"],
          hpAttacks: ["Octaslash", "Hell's Gate"],
          difficulty: "2 / 5",
          img: "/dissidia_012_characters/24_Sephiroth.png",
          strategy: "Sephiroth attempts to control mid-range with Masamune thrusts and Shadow Flare orbs. Dash through Shadow Flare and punish his recovery with Slashing Blow. When Sephiroth leaps into the sky for Hell's Gate, roll backwards and execute Braver as he descends.",
          dangerNotes: "Never block Masamune point-blank without full guard abilities; Sephiroth's Fervent Blow will stagger Cloud."
        },
        chests: ["Mythril Dagger"],
        strategy: "Focus on Guard Stagger + Braver combos to deplete Sephiroth's HP."
      }
    ]
  },
  {
    id: "do-ii-firion",
    title: "Destiny Odyssey II: Firion",
    chapterNumber: "Chapter 2",
    character: "Firion",
    location: "Cavern of Earth & Melmond",
    intro: "Firion seeks the Wild Rose that symbolizes a world free from tyranny, confronting the Emperor of Palamecia.",
    characterGuide: {
      name: "Firion",
      title: "Weapons Master",
      portrait: "/dissidia_012_characters/02_Firion.png",
      playstyle: "Firion is the undisputed king of ground combat. His Reel Move rope-dagger reels enemies directly to his feet, transitioning into devastating weapon chains (Swords, Axes, Lances, and Shield Bashes). Keep grounded for maximum advantage.",
      recommendedAbilities: [
        { name: "Rope Knife (Reel Move)", type: "BRV", locationOrLevel: "Default", notes: "Hooks enemies from midrange and drags them in for multi-weapon physical combos." },
        { name: "Lance (Lance Barrage)", type: "BRV", locationOrLevel: "Level 3", notes: "High anti-air reach; intercepts opponents attempting to drop onto Firion." },
        { name: "Shield Bash", type: "BRV", locationOrLevel: "Level 6", notes: "Blocks incoming physical/magic strikes and counters with explosive point-blank damage." },
        { name: "Straightarrow", type: "HP", locationOrLevel: "Default", notes: "Fires a high-speed piercing arrow across the floor with infinite range." }
      ],
      assistEvaluation: {
        partner: "Cecil Harvey",
        groundAssist: "Shadowbringer",
        airAssist: "Paladin Force",
        tactics: "Hook targets with Reel Move, then call Cecil's Shadowbringer to blast them into the arena wall for an easy Straightarrow finish."
      }
    },
    overworldSteps: [
      {
        title: "Cavern of Earth & Melmond Ruins",
        description: "Search the ruined temple steps for Iron equipment and trade materials before entering Pandemonium Gateway.",
        chests: [
          { location: "Melmond Ruins Path", reward: "250 Gil" },
          { location: "Earth Cavern Entrance", reward: "Iron Shield" },
          { location: "Coastal Ledge", reward: "Red Drop (+3 Damage)" }
        ],
        orbs: "4 Light Orbs across ruins"
      }
    ],
    gateways: [
      {
        id: "do2-boss",
        title: "Pandemonium Gateway",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 10,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Counterfeit Wraith Lv8",
          "M2 = False Stalwart Lv8",
          "E1 = Bravery Up Emblem",
          "C = Round Shield",
          "B = Emperor Boss Encounter (Lv10)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "The Emperor",
          level: 10,
          hp: 2350,
          bravery: 260,
          attacks: ["Bomb Core", "Landmine", "Light Crest", "Thunder Crest"],
          hpAttacks: ["Starfall", "Flare"],
          difficulty: "2.5 / 5",
          img: "/dissidia_012_characters/19_The_Emperor.png",
          strategy: "The Emperor sets defensive traps (Landmines, Bomb Cores) around himself. Do not charge in recklessly. Use Reel Move to drag him through his own trap fields or snipe him with Straightarrow when he begins casting Starfall. When the Emperor summons Flare, dash toward him—the slow fireball cannot turn sharply.",
          dangerNotes: "Do not remain stationary when the Emperor casts Light Crest; the orbiting seals will detonate and break your Bravery."
        },
        chests: ["Round Shield"],
        strategy: "Reel the Emperor out of his trap nests with Reel Move and punish with Shield Bash."
      }
    ]
  },
  {
    id: "do-iv-cecil",
    title: "Destiny Odyssey IV: Cecil",
    chapterNumber: "Chapter 3",
    character: "Cecil",
    location: "Mt. Ordeals & Lunar Path",
    intro: "Cecil struggles with the duality of his Dark Knight and Paladin forms as he confronts Golbez on the lunar slopes.",
    characterGuide: {
      name: "Cecil Harvey",
      title: "Dual Knight",
      portrait: "/dissidia_012_characters/04_Cecil_Harvey.png",
      playstyle: "Switches dynamically between Dark Knight (ground combat specialist with heavy gravity projectiles) and Paladin (aerial combat master with superior mobility and homing strikes). Master his Job Switch attacks to adapt instantly.",
      recommendedAbilities: [
        { name: "Dark Cannon", type: "BRV", locationOrLevel: "Default (Dark Knight)", notes: "Fires 3 homing dark spheres that trap enemies on the floor." },
        { name: "Shadowbringer", type: "BRV", locationOrLevel: "Level 3 (Dark Knight)", notes: "Ranged dark wave that launches foes upward and transforms Cecil into Paladin." },
        { name: "Paladin Force", type: "HP", locationOrLevel: "Level 8 (Paladin)", notes: "Homing light-blade dash that juggles enemies into a radiant explosion." },
        { name: "Saint's Fall", type: "HP", locationOrLevel: "Default (Paladin)", notes: "Rapid aerial downward plunge that Wall Rushes targets." }
      ],
      assistEvaluation: {
        partner: "Kain Highwind",
        groundAssist: "Spiral Blow",
        airAssist: "Dragon's Fang",
        tactics: "Blast foes into the air with Shadowbringer, transition to Paladin, call Kain's Dragon's Fang, and finish with Paladin Force."
      }
    },
    overworldSteps: [
      {
        title: "Mt. Ordeals Lunar Ascent",
        description: "Scale the moonlit slopes towards the Lunar Gate. Pick up Silver equipment and Blue elemental drops.",
        chests: [
          { location: "Lunar Ridge Path", reward: "300 Gil" },
          { location: "Ordeals Summit Ledge", reward: "Silver Ring" },
          { location: "Cavern Mouth", reward: "Blue Drop (+20 Base BRV)" }
        ],
        orbs: "4 Light Orbs on summit path"
      }
    ],
    gateways: [
      {
        id: "do4-boss",
        title: "Lunar Gate",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 12,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = False Stalwart Lv10",
          "M2 = Delusory Dragoon Lv10",
          "E1 = EX Charge Emblem",
          "C = Silver Armlet",
          "B = Golbez Boss Encounter (Lv12)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Golbez",
          level: 12,
          hp: 2500,
          bravery: 280,
          attacks: ["Gravity System", "Glaresaliant", "Float System", "Rising Ring"],
          hpAttacks: ["Nightglow", "Genesis Rock", "Sector Ray"],
          difficulty: "2.5 / 5",
          img: "/dissidia_012_characters/21_Golbez.png",
          strategy: "Golbez attacks in dual-action bursts: a close-range physical swipe followed immediately by a ranged energy beam. Do not dodge after the first swing—wait for the follow-up beam. Switch to Paladin to fight Golbez from above his Genesis Rock spinning stones. Punish Nightglow startup with Paladin Force.",
          dangerNotes: "Golbez's Gravity System pulls Cecil directly into point-blank range; execute an immediate aerial dodge if caught."
        },
        chests: ["Silver Armlet"],
        strategy: "Use Paladin aerial mobility to evade Golbez's ground magic."
      }
    ]
  },
  {
    id: "do-x-tidus",
    title: "Destiny Odyssey X: Tidus",
    chapterNumber: "Chapter 4",
    character: "Tidus",
    location: "Besaid Coast & Moonflow",
    intro: "Tidus races across the coastline, testing his agility against his father Jecht.",
    characterGuide: {
      name: "Tidus",
      title: "Blitzball Ace",
      portrait: "/dissidia_012_characters/13_Tidus.png",
      playstyle: "Tidus excels at dodge-counter gameplay. His signature moves (Full Slide, Hop Step, Cut & Run) possess built-in evasive frames that automatically phase through incoming attacks before striking.",
      recommendedAbilities: [
        { name: "Full Slide", type: "BRV", locationOrLevel: "Default", notes: "Sliding tackle with invulnerability frames that passes under projectiles." },
        { name: "Hop Step", type: "BRV", locationOrLevel: "Level 3", notes: "Leaping aerial flip that evades horizontal strikes and Wall Rushes downward." },
        { name: "Spiral Cut", type: "HP", locationOrLevel: "Default", notes: "Somersault sword slash with rapid startup." },
        { name: "Slice & Dice", type: "HP", locationOrLevel: "Level 8", notes: "Multi-hit aerial blitz combo that tracks opponents across the arena." }
      ],
      assistEvaluation: {
        partner: "Yuna",
        groundAssist: "Megaflare",
        airAssist: "Sonic Wings",
        tactics: "Wall Rush opponents with Hop Step, then call Yuna's Sonic Wings to freeze them in hitstun for an inescapable Slice & Dice."
      }
    },
    overworldSteps: [
      {
        title: "Besaid Coastline Route",
        description: "Explore the tidal shoals for Ice Brand and Yellow Drops before entering Dream's End.",
        chests: [
          { location: "Besaid Beach Ledge", reward: "350 Gil" },
          { location: "Moonflow Shallows", reward: "Ice Brand" },
          { location: "Tide Pool Isle", reward: "Yellow Drop (+3 Damage)" }
        ],
        orbs: "4 Light Orbs on coastline"
      }
    ],
    gateways: [
      {
        id: "do10-boss",
        title: "Dream's End Gateway",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 14,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Capricious Thief Lv12",
          "M2 = Counterfeit Wraith Lv12",
          "E1 = Assist Boost Emblem",
          "C = Ice Shield",
          "B = Jecht Boss Encounter (Lv14)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Jecht",
          level: 14,
          hp: 2750,
          bravery: 300,
          attacks: ["Jecht Rush", "Jecht Stream", "Jecht Block"],
          hpAttacks: ["Jecht Blade", "Jecht Finger"],
          difficulty: "3 / 5",
          img: "/dissidia_012_characters/27_Jecht.png",
          strategy: "Jecht relies heavily on Jecht Block to stun melee attackers. Bait his block by approaching and jumping over him, then execute Full Slide under his recovery. When Jecht launches Jecht Finger, dodge sideways and execute Slice & Dice from behind.",
          dangerNotes: "Never trade hits with Jecht in neutral; his physical attacks have superior stagger priority."
        },
        chests: ["Ice Shield"],
        strategy: "Use Full Slide and Hop Step's evasion frames to bypass Jecht's combos."
      }
    ]
  },
  {
    id: "do-viii-squall",
    title: "Destiny Odyssey VIII: Squall",
    chapterNumber: "Chapter 5",
    character: "Squall",
    location: "Balamb Ridge & Galbadia",
    intro: "Squall journeys across the snowy ridges of Galbadia, confronting the Sorceress Ultimecia.",
    characterGuide: {
      name: "Squall Leonhart",
      title: "Gunblade Specialist",
      portrait: "/dissidia_012_characters/10_Squall_Leonhart.png",
      playstyle: "Squall is a high-speed melee assassin. Timing R1 trigger pulls during Gunblade strikes triggers critical explosive detonations. Solid Barrel and Beat Fang inflict massive hitstun.",
      recommendedAbilities: [
        { name: "Solid Barrel", type: "BRV", locationOrLevel: "Default", notes: "Multi-hit ground sword combo with explosive trigger explosions." },
        { name: "Upper Blues", type: "BRV", locationOrLevel: "Level 3", notes: "Aerial launcher that sends opponents skyward into Chase." },
        { name: "Fated Circle", type: "HP", locationOrLevel: "Default", notes: "Spins gunblade in a wide 360-degree explosive barrier." },
        { name: "Rough Divide", type: "HP", locationOrLevel: "Level 8", notes: "Charging ground-to-air energy dash that catches dodging opponents." }
      ],
      assistEvaluation: {
        partner: "Laguna Loire",
        groundAssist: "Machine Gun",
        airAssist: "Shotgun",
        tactics: "Wall Rush with Upper Blues, then summon Laguna's Machine Gun to lock the enemy for Squall's Fated Circle or Blasting Zone."
      }
    },
    overworldSteps: [
      {
        title: "Balamb Ridge Exploration",
        description: "Collect Gold equipment and Green drops before challenging Ultimecia in the Castle of Time.",
        chests: [
          { location: "Balamb Snow Valley", reward: "400 Gil" },
          { location: "Galbadia Highway", reward: "Gold Ring" },
          { location: "Castle Gate Ridge", reward: "Green Drop (+3 Damage)" }
        ],
        orbs: "4 Light Orbs across ridge"
      }
    ],
    gateways: [
      {
        id: "do8-boss",
        title: "Castle of Time",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Ephemeral Phantom Lv14",
          "M2 = Capricious Thief Lv14",
          "E1 = EX Intake Emblem",
          "C = Gold Armlet",
          "B = Ultimecia Boss Encounter (Lv16)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Ultimecia",
          level: 16,
          hp: 3000,
          bravery: 330,
          attacks: ["Knight's Blade", "Knight's Arrow", "Knight's Axe", "Time Crush"],
          hpAttacks: ["Great Attractor", "Hell's Judgment", "Apocalypse"],
          difficulty: "3 / 5",
          img: "/dissidia_012_characters/25_Ultimecia.png",
          strategy: "Ultimecia bombards the arena with continuous streams of magical blades and axes. Dash aggressively through Knight's Arrow to close the distance. Time Crush will freeze Squall in place—if you see the purple chronosphere forming, dash away immediately. Punish her long Great Attractor charging window with Rough Divide or Fated Circle.",
          dangerNotes: "Never stay grounded at long range; Ultimecia's Knight's Axe has heavy tracking and guard-break properties."
        },
        chests: ["Gold Armlet"],
        strategy: "Use Solid Barrel trigger timing to burst through Ultimecia's magic barriers."
      }
    ]
  },
  {
    id: "do-ix-zidane",
    title: "Destiny Odyssey IX: Zidane",
    chapterNumber: "Chapter 6",
    character: "Zidane",
    location: "Alexandria Glade to Iifa",
    intro: "Zidane navigates the mist-covered valleys of Alexandria, confronting Kuja in the Crystal World.",
    characterGuide: {
      name: "Zidane Tribal",
      title: "Tantalus Thief",
      portrait: "/dissidia_012_characters/12_Zidane_Tribal.png",
      playstyle: "The most agile aerial combatant in the game. Zidane possesses exceptional air mobility, multiple midair jumps, and swift dual-dagger flurries (Tempest, Vortex, Swift Attack) that easily out-maneuver opponents.",
      recommendedAbilities: [
        { name: "Tempest", type: "BRV", locationOrLevel: "Default", notes: "Aerial dual-dagger flurry that pulls opponents into multi-hit slashes." },
        { name: "Vortex", type: "BRV", locationOrLevel: "Level 3", notes: "Spinning aerial dagger dive that Wall Rushes targets into the floor." },
        { name: "Free Energy", type: "HP", locationOrLevel: "Default", notes: "Rapid point-blank energy burst with virtually instant startup." },
        { name: "Grand Lethal", type: "HP", locationOrLevel: "Level 8", notes: "Multi-hit aerial divebomb that covers immense vertical space." }
      ],
      assistEvaluation: {
        partner: "Kuja",
        groundAssist: "Snatch Shot",
        airAssist: "Strike Energy",
        tactics: "Slam foes with Vortex, then summon Kuja's Strike Energy to suspend them in hitstun for an instant Free Energy blast."
      }
    },
    overworldSteps: [
      {
        title: "Alexandria to Iifa Route",
        description: "Search the glades for Diamond equipment and White Drops before challenging Kuja.",
        chests: [
          { location: "Alexandria Meadow", reward: "450 Gil" },
          { location: "Iifa Trunk Path", reward: "Diamond Ring" },
          { location: "Crystal Gate Ledge", reward: "White Drop (+20 Base BRV)" }
        ],
        orbs: "4 Light Orbs in glade"
      }
    ],
    gateways: [
      {
        id: "do9-boss",
        title: "Crystal World Gateway",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 18,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Fleeting Flash Lv16",
          "M2 = Delusory Dragoon Lv16",
          "E1 = Speed Up Emblem",
          "C = Diamond Bangle",
          "B = Kuja Boss Encounter (Lv18)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Kuja",
          level: 18,
          hp: 3200,
          bravery: 350,
          attacks: ["Strike Energy", "Snatch Blow", "Ring Holy", "Burst Energy"],
          hpAttacks: ["Flare Star", "Seraphic Star", "Force Symphony"],
          difficulty: "3 / 5",
          img: "/dissidia_012_characters/26_Kuja.png",
          strategy: "Kuja glides gracefully while casting Ring Holy and Flare Star. Use Zidane's superior air speed and double jumps to stay above Kuja at all times. Drop onto him with Vortex to break his cast animations, then combo directly into Free Energy.",
          dangerNotes: "Do not chase Kuja into tight corners; his Burst Energy radial explosion will catch Zidane during forward dashes."
        },
        chests: ["Diamond Bangle"],
        strategy: "Exploit Zidane's air mobility to stay above Kuja and punish with Free Energy."
      }
    ]
  },
  {
    id: "do-v-bartz",
    title: "Destiny Odyssey V: Bartz",
    chapterNumber: "Chapter 7",
    character: "Bartz",
    location: "Castle Tycoon & Void Path",
    intro: "Bartz travels through the rift-torn halls of Castle Tycoon, confronting the void lord Exdeath.",
    characterGuide: {
      name: "Bartz Klauser",
      title: "Mime of the Void",
      portrait: "/dissidia_012_characters/06_Bartz_Klauser.png",
      playstyle: "Bartz mimics the signature weapons and techniques of all other heroes (Firion's lance, Cloud's Buster Sword, Squall's gunblade, Zidane's daggers, Tidus's slide). High versatility and unpredictable attack angles make him formidable in any match.",
      recommendedAbilities: [
        { name: "Spellblade (Sword Dance)", type: "BRV", locationOrLevel: "Default", notes: "Multi-element blade flurry that breaks enemy blocks." },
        { name: "Dragoon Lance (Gungnir)", type: "BRV", locationOrLevel: "Level 3", notes: "Midair piercing lance dive with immense vertical tracking." },
        { name: "Paladin Force", type: "HP", locationOrLevel: "Level 8", notes: "Homing light-blade dash copied from Cecil." },
        { name: "Hazard Drive", type: "HP", locationOrLevel: "Default", notes: "Aerial blade dive with massive blast radius on impact." }
      ],
      assistEvaluation: {
        partner: "Gilgamesh",
        groundAssist: "Excalipoor / Excalibur",
        airAssist: "Dance of Swords",
        tactics: "Stagger foes with Spellblade, call Gilgamesh's Dance of Swords to lock them down, and execute Hazard Drive."
      }
    },
    overworldSteps: [
      {
        title: "Castle Tycoon Rift Route",
        description: "Pick up Flame Sword and Black Drops before entering the Void Abyss.",
        chests: [
          { location: "Tycoon Courtyard", reward: "500 Gil" },
          { location: "Rift Chasm Bridge", reward: "Flame Sword" },
          { location: "Void Boundary", reward: "Black Drop (+20 Base BRV)" }
        ],
        orbs: "4 Light Orbs in courtyard"
      }
    ],
    gateways: [
      {
        id: "do5-boss",
        title: "Void Abyss Gateway",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 20,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = False Stalwart Lv18",
          "M2 = Counterfeit Wraith Lv18",
          "E1 = Bravery Boost Emblem",
          "C = Flame Shield",
          "B = Exdeath Boss Encounter (Lv20)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Exdeath",
          level: 20,
          hp: 3500,
          bravery: 380,
          attacks: ["Omniblock", "High Block", "Sword Dance", "Delta Attack"],
          hpAttacks: ["Grand Cross", "Almagest", "Black Hole"],
          difficulty: "3.5 / 5",
          img: "/dissidia_012_characters/22_Exdeath.png",
          strategy: "Exdeath will attempt to Omniblock Bartz's physical strikes. Use long-range Dragoon Lance or spellblade projectiles to bypass his counter stance. When Exdeath begins casting Grand Cross or Almagest, jump high into the air and punish with Hazard Drive.",
          dangerNotes: "Never use close-range multi-hit attacks while Exdeath is idle; his counter reflects 100% of damage back to Bartz."
        },
        chests: ["Flame Shield"],
        strategy: "Bait Exdeath's block and punish with Hazard Drive from above."
      }
    ]
  },
  {
    id: "do-vi-terra",
    title: "Destiny Odyssey VI: Terra",
    chapterNumber: "Chapter 8",
    character: "Terra",
    location: "Narshe Snowfield to Fanatics Tower",
    intro: "Terra embraces her magical heritage, confronting Kefka once more at the summit of the Tower of Fanatics.",
    characterGuide: {
      name: "Terra Branford",
      title: "Magitek Sorceress",
      portrait: "/dissidia_012_characters/07_Terra_Branford.png",
      playstyle: "Terra is a powerhouse ranged caster. Charging her spells (Fire, Blizzara, Thundaga, Holy) alters their trajectory, blast radius, and hit properties. In Trance EX Mode, all spells double in projectile count.",
      recommendedAbilities: [
        { name: "Blizzara", type: "BRV", locationOrLevel: "Default", notes: "Multi-shard ice projectile with immense tracking when charged." },
        { name: "Holy", type: "BRV", locationOrLevel: "Level 3", notes: "Summons orbiting light orbs that converge on the target and initiate Chase." },
        { name: "Meltdown", type: "HP", locationOrLevel: "Default", notes: "Bouncing fireball that travels along surfaces and tracks dodging foes." },
        { name: "Flood", type: "HP", locationOrLevel: "Level 8", notes: "Spouts water pillars beneath the enemy's feet with infinite vertical reach." }
      ],
      assistEvaluation: {
        partner: "Vaan",
        groundAssist: "Torrent",
        airAssist: "Inferno",
        tactics: "Trap foes with charged Holy orbs, then call Vaan's Inferno to Wall Rush them into Terra's Meltdown or Ultima."
      }
    },
    overworldSteps: [
      {
        title: "Narshe to Fanatics Tower Route",
        description: "Navigate the snowy slopes for Diamond equipment and Orange Drops.",
        chests: [
          { location: "Narshe Snow Ridge", reward: "550 Gil" },
          { location: "Magitek Facility Gate", reward: "Diamond Shield" },
          { location: "Tower Steps Ledge", reward: "Orange Drop (+3 Damage)" }
        ],
        orbs: "4 Light Orbs on snowfield"
      }
    ],
    gateways: [
      {
        id: "do6-boss",
        title: "Tower of Fanatics",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 22,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = Phantasmal Harlequin Lv20",
          "M2 = Capricious Reaper Lv20",
          "E1 = Magic Boost Emblem",
          "C = Diamond Circlet",
          "B = Kefka Palazzo Boss Encounter (Lv22)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Kefka Palazzo",
          level: 22,
          hp: 3700,
          bravery: 400,
          attacks: ["Scatter Spray Blizzaga", "Waggle-Wobbly Firaga", "Extra-Crispy Firaga", "Meteor", "Ultima"],
          hpAttacks: ["Hyperdrive", "Havoc Wing", "Trine"],
          summon: "Brynhildr",
          difficulty: "3.5 / 5",
          img: "/dissidia_012_characters/23_Kefka_Palazzo.png",
          strategy: "Kefka fires erratic spells from all angles. Counter his projectiles with charged Blizzara (which plows through his weaker fireballs). When Kefka channels Trine or Hyperdrive, cast Flood beneath him—the geyser will interrupt his casting animation instantly.",
          dangerNotes: "Watch for Kefka's Meteor bouncing orbs; if caught, they will drain Bravery and knock you into Banish Traps."
        },
        chests: ["Diamond Circlet"],
        strategy: "Use charged Holy and Flood to interrupt Kefka's spellcasting."
      }
    ]
  },
  {
    id: "do-iii-onion",
    title: "Destiny Odyssey III: Onion Knight",
    chapterNumber: "Chapter 9",
    character: "Onion Knight",
    location: "Floating Continent & Ancient Ruins",
    intro: "The Onion Knight explores the ancient floating continent, overcoming his doubts to confront the Cloud of Darkness.",
    characterGuide: {
      name: "Onion Knight",
      title: "Little Champion",
      portrait: "/dissidia_012_characters/03_Onion_Knight.png",
      playstyle: "Onion Knight transitions between rapid physical multi-hits (Ninja) and high-tier magical artillery (Sage). Turbo Hit and Guiding Strike deliver blazing-fast physical combos, while Flare and Holy provide long-range pressure.",
      recommendedAbilities: [
        { name: "Turbo Hit", type: "BRV", locationOrLevel: "Default", notes: "Rapid physical sword flurry that transitions into Ninja class." },
        { name: "Guiding Strike", type: "BRV", locationOrLevel: "Level 3", notes: "Aerial homing strike that chases opponents with immense speed." },
        { name: "Wind Shear", type: "HP", locationOrLevel: "Default", notes: "Spinning physical cyclone copied from Ninja." },
        { name: "Flare", type: "HP", locationOrLevel: "Level 8", notes: "Massive explosive magical burst copied from Sage." }
      ],
      assistEvaluation: {
        partner: "Bartz Klauser",
        groundAssist: "Solid Breaker",
        airAssist: "Luminous Shard",
        tactics: "Juggle foes with Guiding Strike, call Bartz's Luminous Shard to wall-rush them, and cast Flare."
      }
    },
    overworldSteps: [
      {
        title: "Floating Continent Ascent",
        description: "Pick up Pearl Ring and Rosetta Stone before challenging the Cloud of Darkness.",
        chests: [
          { location: "Floating Island Ridge", reward: "600 Gil" },
          { location: "Ancient Ruins Gate", reward: "Pearl Ring" },
          { location: "Dark Boundary", reward: "Rosetta Stone" }
        ],
        orbs: "4 Light Orbs on floating continent"
      }
    ],
    gateways: [
      {
        id: "do3-boss",
        title: "World of Darkness",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 24,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = False Hero Lv22",
          "M2 = Delusory Dragoon Lv22",
          "E1 = Critical Up Emblem",
          "C = Diamond Armor",
          "B = Cloud of Darkness Boss Encounter (Lv24)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Cloud of Darkness",
          level: 24,
          hp: 4000,
          bravery: 420,
          attacks: ["Tentacle Smash", "Tentacle Flurry", "Wrath Particle Beam", "Subside Particle Beam"],
          hpAttacks: ["0-Form Particle Beam", "Active Particle Beam", "Feint Particle Beam"],
          difficulty: "3.5 / 5",
          img: "/dissidia_012_characters/20_Cloud_of_Darkness.png",
          strategy: "Cloud of Darkness controls massive space with her tentacles and particle beams. 0-Form Particle Beam fires a massive forward beam with high startup; dodge behind her and punish with Turbo Hit. Feint Particle Beam delays its firing to catch early dodgers—wait for the flash before rolling.",
          dangerNotes: "Do not jump directly into her tentacle flurries; the tentacles block oncoming projectiles."
        },
        chests: ["Diamond Armor"],
        strategy: "Use Onion Knight's high speed to get behind her particle beams and unleash Turbo Hit."
      }
    ]
  },
  {
    id: "do-i-wol",
    title: "Destiny Odyssey I: Warrior of Light",
    chapterNumber: "Chapter 10",
    character: "Warrior of Light",
    location: "Castle Cornelia to Chaos Shrine",
    intro: "The Warrior of Light returns to where it all began, confronting Garland in the past Chaos Shrine to secure the crystal.",
    characterGuide: {
      name: "Warrior of Light",
      title: "True Champion of the Light",
      portrait: "/dissidia_012_characters/01_Warrior_of_Light.webp",
      playstyle: "With mastered support abilities and advanced gear, the Warrior of Light is nearly impervious to frontal assaults. Combine Shield of Light, Shining Wave, and Radiant Sword to dominate close and long ranges.",
      recommendedAbilities: [
        { name: "Shield of Light", type: "BRV", locationOrLevel: "Mastered", notes: "Creates an impenetrable radiant shield that reflects enemy magic and counters." },
        { name: "Ascension", type: "BRV", locationOrLevel: "Mastered", notes: "Skyward launcher that guarantees high Wall Rush." },
        { name: "Radiant Sword", type: "HP", locationOrLevel: "Mastered", notes: "Multi-blade light homing barrage." },
        { name: "Ultimate Shield", type: "HP", locationOrLevel: "Level 10", notes: "Giant circular shield bash with immense forward range." }
      ],
      assistEvaluation: {
        partner: "Kain Highwind",
        groundAssist: "Spiral Blow",
        airAssist: "Dragon's Fang",
        tactics: "Parry Garland with Shield of Light, call Kain's Dragon's Fang, and finish with Ultimate Shield."
      }
    },
    overworldSteps: [
      {
        title: "Cornelia to Chaos Shrine Route",
        description: "Gather final high-tier materials and Elixirs before challenging Garland in the Past Chaos Shrine.",
        chests: [
          { location: "Cornelia Throne Room", reward: "650 Gil" },
          { location: "Chaos Shrine Outer Ring", reward: "Elixir" },
          { location: "Past Shrine Steps", reward: "Lufenian Armor Shard" }
        ],
        orbs: "4 Light Orbs in shrine"
      }
    ],
    gateways: [
      {
        id: "do1-boss",
        title: "Past Chaos Shrine",
        kpChance: "Win battle within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 26,
        asciiMap: `[D ][  ][M1][  ]
    [  ][E1][M2][B ]
    [C ][  ][  ][G ]`,
        legend: [
          "D = Deploy Point",
          "M1 = False Stalwart Lv24",
          "M2 = Counterfeit Wraith Lv24",
          "E1 = EX Charge Emblem",
          "C = Lufenian Helm",
          "B = Garland Boss Encounter (Lv26)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Garland",
          level: 26,
          hp: 4300,
          bravery: 450,
          attacks: ["Round Edge", "Bardiche", "High Strike", "Twin Sword"],
          hpAttacks: ["Cyclone", "Earthquake", "Tsunami", "Flare"],
          difficulty: "4 / 5",
          img: "/dissidia_012_characters/18_Garland.png",
          strategy: "Garland hits with catastrophic force. Auto-guard through his Bardiche with Shield of Light, then launch him with Ascension. When Garland executes Earthquake or Tsunami, leap above the wave and strike with Radiant Sword.",
          dangerNotes: "Never attempt to block Garland's Cyclone with basic guard; the spinning vortex will shatter shields."
        },
        chests: ["Lufenian Helm"],
        strategy: "Use Shield of Light to counter Garland's sword swings and counter with Radiant Sword."
      }
    ]
  },
  {
    id: "epilogue-013-part1",
    title: "Shade Impulse: Part 1 & 2",
    chapterNumber: "Epilogue Part 1",
    character: "Cosmos Champions (Party)",
    location: "Void Boundary & Moat of Hatred",
    intro: "With the 10 crystals gathered, the heroes step into the void to challenge Chaos's inner sanctum.",
    gateways: [
      {
        id: "shade-impulse-1",
        title: "Gateway of Good and Evil (3 Floors)",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 35,
        floors: [
          { floorNumber: 1, enemies: ["False Hero Lv30", "Counterfeit Wraith Lv30"], chests: ["1000 Gil"], notes: "Warm up with your lead hero." },
          { floorNumber: 2, enemies: ["Ephemeral Phantom Lv32", "Capricious Thief Lv32"], chests: ["Elixir"], notes: "Use Assist combos." },
          { floorNumber: 3, enemies: ["Manikin Boss Prime Lv35"], chests: ["Lufenian Sword"], notes: "Climax of Part 1." }
        ],
        strategy: "Rotate your party members across floors to conserve HP."
      }
    ]
  },
  {
    id: "epilogue-013-part2",
    title: "Shade Impulse: Part 3 & 4 (Final Battle)",
    chapterNumber: "Epilogue Part 2",
    character: "Cosmos Champions (Party)",
    location: "Edge of Discord • Throne of Chaos",
    intro: "The final confrontation against Chaos, the God of Discord, spanning a 3-phase epic battle for the fate of the universe.",
    gateways: [
      {
        id: "shade-impulse-final",
        title: "Edge of Discord (Chaos Final Boss - 3 Phases)",
        kpChance: "Defeat Chaos.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 45,
        bossTactic: {
          bossName: "Chaos (God of Discord - 3 Phases)",
          level: 45,
          hp: 8500,
          bravery: 650,
          attacks: ["Demon Fire", "Scarlet Rain", "Soul of Chaos", "Condemnation", "Utter Chaos"],
          hpAttacks: ["Brink of Delusion", "Demon Dance", "God in Fire (Phase 3)"],
          difficulty: "5 / 5",
          img: "/dissidia_012_characters/31_Feral_Chaos.png",
          strategy: "Phase 1: Chaos uses Demon Fire and Scarlet Rain. Stay in the air and dodge Scarlet Rain fire pillars as they appear under your feet. Phase 2: Chaos gains Soul of Chaos (summoning flaming clones) and Condemnation. Dash sideways when the arena darkens. Phase 3: Chaos ignites in a colossal fiery form. When Chaos casts Brink of Delusion or God in Fire, execute EX Revenge to cancel his cinematic attack and counter with your strongest HP combo.",
          dangerNotes: "In Phase 3, Chaos's Demon Dance covers the entire floor; you MUST fight from the air to survive."
        },
        strategy: "Equip your highest-level characters with Phoenix summons, EX Intake boosters, and mastered HP abilities. Dodge Scarlet Rain vertically and punish Chaos during his long recovery frames."
      }
    ]
  }
];
