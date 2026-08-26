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

export interface Story012Gateway {
  id: string;
  title: string;
  location?: string;
  isOptional?: boolean;
  kpChance?: string;
  rules?: string;
  skills?: string;
  bonusLine?: number | string;
  asciiMap?: string;
  legend?: string[];
  enemyTactics?: EnemyTactic[];
  bossTactic?: BossTactic;
  strategy?: string;
  notes?: string;
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

export interface Story012Chapter {
  id: string;
  title: string;
  chapterNumber: string;
  characters: string;
  location?: string;
  intro?: string;
  fieldEncounters?: string[];
  characterGuide?: CharacterGuide;
  overworldSteps?: OverworldStep[];
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
    intro: "Lightning awakens in World B alongside Kain and Laguna. Guided by the crystalline terrain, the party sets out toward the Sanctuary of Order to receive Cosmos's blessing.",
    characterGuide: {
      name: "Lightning",
      title: "The Solitary Champion",
      portrait: "/dissidia_012_characters/17_Lightning.png",
      playstyle: "Lightning is an extremely versatile offensive specialist. Her Commando role delivers high-stagger physical strikes that consistently trigger Wall Rush, making her an ideal partner for Assist combos. Ravager spells provide midrange harassment and chase initiations.",
      paradigmOrMechanic: {
        name: "Optima / Paradigm Shift (L + R)",
        description: "Switches between Commando (physical melee focus), Ravager (elemental projectiles), and Medic (Curaja Bravery regeneration). De-equipping Cure spells allows instant toggling back and forth between Commando and Ravager without cycling through Medic."
      },
      recommendedAbilities: [
        { name: "Launch", type: "BRV", locationOrLevel: "Level 3", notes: "Superior ground launcher that Wall Rushes upwards and links into Flourish of Steel once mastered." },
        { name: "Smite", type: "BRV", locationOrLevel: "Default", notes: "Excellent aerial downward smash; slams opponents into the floor to setup ground assist strikes." },
        { name: "Watera", type: "BRV", locationOrLevel: "Default", notes: "Slow-moving projectile that staggers blocking enemies, creating immediate openings for Blitz or Crushing Blow." },
        { name: "Crushing Blow", type: "HP", locationOrLevel: "Default", notes: "Fast horizontal dash attack that frequently catches opponents at the end of their dodge animations." }
      ],
      assistEvaluation: {
        partner: "Laguna Loire",
        groundAssist: "Machine Gun (Barrage)",
        airAssist: "Shotgun",
        tactics: "Slam foes into the ground with Smite, then call Laguna's Machine Gun to lock them in place while you execute Crushing Blow or Razor Gale. Avoid his aerial Shotgun as it lacks follow-up utility."
      }
    },
    overworldSteps: [
      {
        title: "Awakening on the World Map",
        description: "Collect the 4 glowing Light Orbs scattered on the field path to synthesize your first Chain Skill (Straight Chain). Advance toward the mountain pass where Kain stands.",
        chests: [
          { location: "Path near mountain pass", reward: "50 Gil" }
        ],
        orbs: "4 Light Orbs (Straight Chain obtained)"
      },
      {
        title: "Entering the Departure Gateway",
        description: "Interact with the red gateway to enter the tutorial board. Grab the equipment chest and clear the stage to unlock the Level 1-9 Booster Accomplishment in the main menu."
      }
    ],
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
          "A = Kain Assist Piece",
          "C = Broadsword Chest",
          "D = Deploy Start",
          "G = Stigma of Chaos (Goal)"
        ],
        chests: ["Broadsword"],
        strategy: "Familiarize yourself with movement on the gateway grid. Open the chest at C3 to obtain the Broadsword, equip it immediately from the character menu, and engage the Stigma of Chaos to conclude the Prologue.",
        notes: "Completing this gateway rewards the Level 1-9 Booster (+1.5x accessory multiplier) from the Accomplishments menu."
      }
    ]
  },
  {
    id: "ch1",
    title: "A New Threat",
    chapterNumber: "Chapter 1",
    characters: "Lightning",
    location: "Cavern of Earth & Crescent Lake",
    intro: "Investigating crystalline imitation soldiers (Manikins), Lightning encounters Kuja and uncovers Kain's sudden disappearance.",
    characterGuide: {
      name: "Lightning",
      title: "Commando / Ravager Synergy",
      portrait: "/dissidia_012_characters/17_Lightning.png",
      playstyle: "Use Watera as a zone-control tool: if opponents block, they stagger; if they dodge, catch them with Launch or Crushing Blow upon landing. Transition into EX Mode against bosses for guaranteed critical bursts.",
      recommendedAbilities: [
        { name: "Thunder", type: "BRV", locationOrLevel: "Level 8", notes: "Fast-hitting Ravager projectile that initiates Chase sequences." },
        { name: "Ruin", type: "BRV", locationOrLevel: "Level 6", notes: "Ranged Commando projectile that tracks aerial opponents." },
        { name: "Air Dash", type: "Support", locationOrLevel: "Level 7", notes: "High-speed homing dash accessible during Quickmove sequences." }
      ],
      assistEvaluation: {
        partner: "Tifa Lockhart",
        groundAssist: "Waterkick (Initiates Chase)",
        airAssist: "Somersault (Ground Wall Rush)",
        tactics: "Tifa's aerial Somersault slams foes into the dirt, allowing Lightning to combo directly into Crushing Blow. Press X immediately during Waterkick to teleport and continue the chase combo."
      }
    },
    overworldSteps: [
      {
        title: "Crescent Lake Exploration",
        description: "After clearing the Crescent Lake Gateway, smash the glowing shoreline stone to generate a light bridge connecting to the isolated islet. Collect the Power Ring and extra Light Orbs before entering the Sage's Path.",
        chests: [
          { location: "Shoreline Islet (Light Bridge)", reward: "Power Ring" },
          { location: "Left of closed Gateway", reward: "120 Gil" },
          { location: "Northern Valley Gate", reward: "EX Charge Skill" }
        ],
        orbs: "6 Light Orbs across Crescent Lake shoreline"
      },
      {
        title: "Cornelia Plains & Moogle Merchant",
        description: "Access the menu shop to spend gil on upgraded armor. Speak with the overworld Moogle near Cornelia Plains to review booster accessories and equip a Rosetta Stone.",
        chests: [
          { location: "Cornelia Shoreline", reward: "Rosetta Stone (+1 Accessory Slot)" },
          { location: "Plains Ridge Chest 1", reward: "Pink Tail (Trade Material)" },
          { location: "Plains Ridge Chest 2", reward: "Cure Skill" }
        ],
        moogleShop: {
          location: "Cornelia Plains Moogle",
          notes: "Focus on buying HP=100% Boosters and Rosetta Stones with your earned KP.",
          inventory: [
            { item: "HP = 100% Booster", cost: "30 KP", desc: "1.5x accessory multiplier when at full HP" },
            { item: "Rosetta Stone", cost: "50 KP", desc: "Adds +1 permanent accessory slot" },
            { item: "Iron Shield", cost: "80 KP", desc: "DEF +10 shield" },
            { item: "Ifrit Summonstone", cost: "100 KP", desc: "Auto-BRV boost on enemy break" }
          ]
        }
      }
    ],
    fieldEncounters: [
      "Field: Capricious Reaper Lv4 (Havoc Wing, Ring Holy)",
      "Field: Capricious Reaper Lv5 (Snatch Blow, Seraphic Star)"
    ],
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
          "D = Deploy Point",
          "A = Laguna Loire Assist Piece",
          "C = Buckler Chest",
          "1 = Fleeting Flash Lv2 (Lightning Manikin)",
          "2 = Capricious Reaper Lv2 (Kuja Manikin)",
          "3 = Fleeting Flash Lv2",
          "4 = Delusory Dragoon Lv6 (Kain Manikin)",
          "G = Stigma of Chaos"
        ],
        enemyTactics: [
          {
            name: "Capricious Reaper",
            level: 2,
            attacks: ["Burst Energy", "Snatch Shot"],
            hpAttacks: ["Flare Star"],
            strategy: "Burst Energy is a point-blank radial blast. Keep a medium distance, bait the slow-moving Flare Star, and punish his long recovery with Blitz."
          },
          {
            name: "Delusory Dragoon",
            level: 6,
            attacks: ["Spiral Blow", "Lance Barrage"],
            hpAttacks: ["Dragon's Fang"],
            strategy: "Quick on startup. Block his lance thrusts with R, then counter immediately. Dodge sideways when you see the red gleam of Dragon's Fang."
          }
        ],
        chests: ["Buckler"],
        strategy: "Trigger enemy piece #4 by stepping onto C5, then position on C4 and activate a Straight Chain to battle all adjacent foes in a single 9 KP chain. Wall Rush enemies with Smite and call Laguna to lock them down with Machine Gun."
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
          "D = Deploy Point",
          "A = Tifa Lockhart Assist Piece",
          "C (Top Left) = 200 Gil",
          "C (Bottom Left) = Bronze Helm",
          "C (Right) = Soul of Destruction",
          "1 = Idle Sky Pirate Lv6 (Vaan Manikin)",
          "2 = Fleeting Flash Lv6",
          "3 = Delusory Dragoon Lv6",
          "4 = Delusory Dragoon Lv2",
          "5 = Fleeting Flash Lv2",
          "B = Kuja Boss Encounter (Lv8)"
        ],
        enemyTactics: [
          {
            name: "Idle Sky Pirate",
            level: 6,
            attacks: ["Axe & Shield", "Sword & Shield (Guard Counter)"],
            hpAttacks: ["Cataclysm"],
            strategy: "In midair, the Sky Pirate counters physical blows with Sword & Shield. Restrict your attacks to grounded encounters or hit him with Watera to bypass his parry."
          },
          {
            name: "Delusory Dragoon",
            level: 6,
            attacks: ["Crashing Dive", "Spiral Blow"],
            hpAttacks: ["Gungnir"],
            strategy: "Gungnir deals massive BRV damage horizontally. Dodge vertically into the air to evade the piercing beam."
          }
        ],
        bossTactic: {
          bossName: "Kuja",
          level: 8,
          hp: 1768,
          bravery: 233,
          attacks: ["Strike Energy", "Snatch Blow", "Burst Energy", "Snatch Shot", "Ring Holy"],
          hpAttacks: ["Flare Star", "Seraphic Star", "Force Symphony"],
          summon: "None",
          difficulty: "1.5 / 5",
          img: "/dissidia_012_characters/26_Kuja.png",
          strategy: "Kuja is equipped with Cursed Rings that impose heavy defense penalties, making him vulnerable to rapid Bravery break. Dash through Ring Holy rather than blocking it. When the screen darkens, check whether it is Seraphic Star (gravitational pull—dodge away repeatedly) or Force Symphony (rain of explosive orbs—dash forward underneath him). Finish with an EX Burst for bonus EXP.",
          dangerNotes: "Do not remain grounded beneath Kuja when he hovers at high altitude; his Force Symphony has infinite downward tracking."
        },
        chests: ["200 Gil", "Bronze Helm", "Soul of Destruction (+55 ATK for 1 fight)"],
        strategy: "Use a Straight Chain at C3 or Jump Chain at E3 to link the manikin pieces. Activate an EX Charge prior to engaging Kuja to start the boss encounter with a charged EX Gauge."
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
          "D = Deploy Point",
          "C (Left) = 500 Gil",
          "C (Right) = Red Drop (+3 Damage Accessory)",
          "1 = Fleeting Flash Lv6",
          "2 = Idle Sky Pirate Lv8",
          "3 = Delusory Dragoon Lv6",
          "4 = Idle Sky Pirate Lv8",
          "B = Kain Highwind Boss Encounter (Lv10)"
        ],
        enemyTactics: [
          {
            name: "Fleeting Flash",
            level: 6,
            attacks: ["Lightning Strike", "Launch"],
            hpAttacks: ["Crushing Blow"],
            strategy: "Lightning Strike fires a straight electrical wave along the ground; dodge backwards or jump to counter."
          },
          {
            name: "Idle Sky Pirate",
            level: 8,
            attacks: ["Crossbow", "Spear"],
            hpAttacks: ["Windburst"],
            strategy: "Windburst summons a pulling whirlwind. Use Crushing Blow directly through the cyclone to reflect the vortex back into the Sky Pirate."
          }
        ],
        bossTactic: {
          bossName: "Kain Highwind",
          level: 10,
          hp: 1459,
          bravery: 229,
          attacks: ["Spiral Blow", "Lance Burst", "Lance Barrage"],
          hpAttacks: ["Dragon's Fang"],
          summon: "None",
          difficulty: "2 / 5",
          img: "/dissidia_012_characters/05_Kain_Highwind.png",
          strategy: "Unlike Kuja, Kain has no defense penalties and fights with extreme aggression. Rely on Commando physical clashes and aerial Smite to break his poise. When Kain executes Dragon's Fang, wait for the brief audio cue before dodging sideways, then immediately punish his landing recovery with Razor Gale or Launch.",
          dangerNotes: "Kain's Lance Barrage has quick tracking. If caught in a combo near a wall, trigger EX Revenge to cancel his damage."
        },
        chests: ["500 Gil", "Red Drop"],
        strategy: "Defeating piece #1 spawns pieces 2, 3, and 4. Position at C4 and activate a Straight Chain to clear all three at once. Claim the Red Drop from the chest for a permanent damage boost."
      }
    ]
  },
  {
    id: "ch2",
    title: "The Traitor",
    chapterNumber: "Chapter 2",
    characters: "Vaan",
    location: "Cornelia to Elven Snowfields",
    intro: "Vaan investigates the southern ruins, crossing paths with a mind-controlled Terra and intervening against Kefka's manipulation.",
    characterGuide: {
      name: "Vaan",
      title: "Weapon Switch Specialist",
      portrait: "/dissidia_012_characters/16_Vaan.png",
      playstyle: "Vaan triggers enhanced Switch attacks by alternating between different weapon types. Spear delivers close-range multi-hit spins, Greatsword charges forward with heavy priority, and Crossbow provides high-speed tracking projectiles.",
      paradigmOrMechanic: {
        name: "Weapon Switch & Sheathe (R + Square in EX Mode)",
        description: "Using a different BRV attack from the last one triggers a Switch Attack with bonus properties (e.g., dual-spin Spear, extended Crossbow spread). In EX Mode, pressing R + Square sheathes your weapon to immediately prime a Switch attack without executing an unbuffed strike."
      },
      recommendedAbilities: [
        { name: "Crossbow", type: "BRV", locationOrLevel: "Level 2 (Ground) / Level 4 (Air)", notes: "Fires tracking bolts while rotating; ideal for chipping Bravery at midrange." },
        { name: "Spear", type: "BRV", locationOrLevel: "Default", notes: "Primary close-range spinning strike. Switch variant spins twice and inflicts Wall Rush." },
        { name: "Torrent", type: "HP", locationOrLevel: "Level 8", notes: "Summons descending water orbs from above that drive enemies into the ground. Combos flawlessly with Terra's assist." },
        { name: "Katana", type: "BRV", locationOrLevel: "Level 11", notes: "Dash-slashing launcher that generates substantial EX Force and initiates Chase." }
      ],
      assistEvaluation: {
        partner: "Terra Branford (or Onion Knight in Gateway 1)",
        groundAssist: "Graviga (High BRV orbital smash)",
        airAssist: "Blizzara (Rapid multi-shard freeze)",
        tactics: "Wall Rush enemies with Spear or Katana, then call Terra's aerial Blizzara as you descend to execute Torrent for guaranteed HP damage."
      }
    },
    overworldSteps: [
      {
        title: "Southern Island & Mountain Pass",
        description: "Explore the southern island for an EX Charge chest and Light Orbs. Check the eastern peninsula for a BRV Charge skill. Engage the field Harlequins to clear the path into the mountains.",
        chests: [
          { location: "Southern Islet Chest", reward: "EX Charge Skill" },
          { location: "Eastern Peninsula", reward: "BRV Charge Skill (5x Base BRV start)" },
          { location: "Mountain Valley Meadow", reward: "200 Gil" }
        ],
        orbs: "4 Light Orbs across mountain pass"
      },
      {
        title: "Elven Snowfields & Moogle Merchant",
        description: "Travel through the snowfields toward the Gateway of the Impasse. Open the shoreline chest for a Rosetta Stone and trade with the regional Moogle merchant.",
        chests: [
          { location: "Snowfield Islet Chest", reward: "Rosetta Stone" },
          { location: "Eastern Snow Ridge", reward: "Cure Skill" },
          { location: "Northern Plateau Chest 1", reward: "Leather Chestplate" },
          { location: "Northern Plateau Chest 2", reward: "Green Drop (+3 Damage)" },
          { location: "Harlequin Ridge Chest", reward: "Pink Tail" }
        ],
        moogleShop: {
          location: "Elven Snowfields Moogle",
          notes: "Cactuar is a high-priority purchase (deals instant 1,000 BRV damage on demand).",
          inventory: [
            { item: "Cactuar Summonstone", cost: "50 KP", desc: "Deals instant 1,000 unblockable BRV damage" },
            { item: "Mandragora Summon", cost: "30 KP", desc: "BRV regen booster" },
            { item: "Jump Chain Skill", cost: "6 KP", desc: "Grid chaining tool" },
            { item: "Rosetta Stone", cost: "50 KP", desc: "Adds +1 accessory slot" }
          ]
        }
      }
    ],
    fieldEncounters: [
      "Field: Phantasmal Harlequin Lv8 (Havoc Wing, Meteor)",
      "Field: False Stalwart Lv9 (Earthquake, Ground Slam)"
    ],
    gateways: [
      {
        id: "ch2-earth",
        title: "Gateway of Earth",
        isOptional: true,
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 5,
        asciiMap: `[C1]    [2][ ]
[ ][A][3][ ][ ]
[ ][4][ ][D][ ]
   [1][ ][ ][5]
      [C2]`,
        legend: [
          "D = Deploy Point",
          "A = Onion Knight Assist Piece",
          "C1 = 200 Gil",
          "C2 = Blue Drop (+20 Base BRV)",
          "1 = Idle Sky Pirate Lv8",
          "2 = Delusory Dragoon Lv8",
          "3 = Phantasmal Harlequin Lv8",
          "4 = Delusory Dragoon Lv6",
          "5 = Strange Battle Piece (Fleeting Flash Lv10 w/ Bahamut)"
        ],
        enemyTactics: [
          {
            name: "Phantasmal Harlequin",
            level: 8,
            attacks: ["Meteor (5 bouncing fireballs)", "Hyperdrive"],
            strategy: "Meteor fireballs track towards your position. Jump high and fire Crossbow bolts from above his projectiles."
          },
          {
            name: "Strange Battle Piece (Fleeting Flash)",
            level: 10,
            summon: "Bahamut (+99 BRV auto-buffs)",
            hpAttacks: ["Crushing Blow"],
            strategy: "Starts with low HP but continuously gains Bravery via Bahamut while spamming Crushing Blow. Evade the dash and execute a single HP strike on her recovery for an instant KO."
          }
        ],
        chests: ["200 Gil", "Blue Drop"],
        strategy: "Use a Jump Chain at C3 or Multichain at D3 to link all 5 manikins. Onion Knight's ground assist initiates Chase, allowing Vaan to combo directly into Greatsword."
      },
      {
        id: "ch2-dragon",
        title: "Gateway of the Dragon",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 7,
        asciiMap: `[ ][ ][ ][1]
[ ][ ]   [ ]
[2][A]   [ ][3][4]
[ ][ ][D][ ]
[C1]  [S][ ][5]
         [C2]`,
        legend: [
          "D = Deploy Point",
          "A = Terra Branford Assist Piece",
          "S = Ifrit (Auto) Summonstone Node",
          "C1 = Orange Drop Chest",
          "C2 = Slasher Weapon Chest",
          "1 = Idle Sky Pirate Lv10",
          "2 = Phantasmal Harlequin Lv10",
          "3 = Fleeting Flash Lv10",
          "4 = Delusory Dragoon Lv10",
          "5 = Capricious Reaper Lv15 (Expert Piece w/ Demon Wall)",
          "B = Kefka Palazzo Boss Encounter (Lv10)"
        ],
        enemyTactics: [
          {
            name: "Phantasmal Girl",
            level: 10,
            attacks: ["Blizzara", "Blizzard Combo"],
            hpAttacks: ["Tornado"],
            strategy: "Tornado creates a multi-hit swirling barrier. Keep your distance while the vortex spins, then punish her recovery with Crossbow or charged Greatsword."
          },
          {
            name: "Capricious Reaper (Expert Piece)",
            level: 15,
            summon: "Demon Wall (Immune to BRV break)",
            attacks: ["Burst Energy", "Snatch Shot"],
            hpAttacks: ["Flare Star"],
            strategy: "Boasts massive ATK/DEF at full HP and Demon Wall blocks BRV damage. Prioritize landing a direct HP attack immediately to strip his full-HP stat multipliers."
          }
        ],
        bossTactic: {
          bossName: "Kefka Palazzo",
          level: 10,
          hp: 2072,
          bravery: 248,
          attacks: ["Scatter Spray Blizzaga", "Waggle-Wobbly Firaga", "Extra-Crispy Firaga", "Meteor", "Ultima", "Lickity-Split Thundaga"],
          hpAttacks: ["Hyperdrive", "Havoc Wing", "Trine"],
          summon: "Brynhildr",
          difficulty: "1.5 / 5",
          img: "/dissidia_012_characters/23_Kefka_Palazzo.png",
          strategy: "Kefka relies on deceptive, erratic projectile paths. Waggle-Wobbly Firaga weaves slowly across the arena, while Extra-Crispy Firaga shoots 3 zig-zag fireballs. When Kefka flashes yellow for Trine, three converging energy triangles surround you—dodge sideways as the shapes converge. Knock Kefka into stage Banish Traps with basic Spear to drain 20% of his Bravery.",
          dangerNotes: "Do not attempt to block Scatter Spray Blizzaga at point-blank range; the projectile shatters on impact and bypasses normal guards."
        },
        chests: ["Orange Drop", "Slasher (ATK +18 Weapon)", "Ifrit Summonstone"],
        strategy: "Position at D4 with a Straight Chain and activate an EX Charge. Claim the Slasher from the chest and equip it immediately for a significant damage boost before challenging Kefka."
      },
      {
        id: "ch2-impasse",
        title: "Gateway of the Impasse",
        isOptional: true,
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 10,
        asciiMap: `[C1]
[1]
[ ]   [ ][A][ ]
[ ][D][ ][2][ ][ ]
[ ][ ]   [3]
[4]      [5][G]
[C2]`,
        legend: [
          "D = Deploy Point",
          "A = Terra Branford Assist Piece",
          "C1 = Pink Tail Chest",
          "C2 = Soul of Destruction Chest",
          "1 = Phantasmal Girl Lv12",
          "2 = Idle Sky Pirate Lv12",
          "3 = Phantasmal Harlequin Lv12",
          "4 = Fleeting Flash Lv15 (Strange Piece w/ Iron Giant)",
          "5 = Idle Sky Pirate Lv12",
          "G = Stigma of Chaos"
        ],
        enemyTactics: [
          {
            name: "Fleeting Flash (Strange Piece)",
            level: 15,
            summon: "Iron Giant (Halves opponent BRV upon HP hit)",
            hpAttacks: ["Crushing Blow"],
            strategy: "Lacks Bravery attacks entirely. Bait her Crushing Blow charge, dodge to the flank, and execute an immediate HP strike to claim the win."
          }
        ],
        chests: ["Pink Tail", "Soul of Destruction", "Iifa Leaf (Unlocks Second Chance Ability)", "Delicious Fish Scale"],
        strategy: "Use a Cross Chain at C4 to capture all 5 enemies for 25 KP. The Iifa Leaf in this gateway permanently enables the Second Chance survival ability."
      }
    ]
  },
  {
    id: "ch3",
    title: "A Step Toward Tomorrow",
    chapterNumber: "Chapter 3",
    characters: "Laguna",
    location: "Cavern of Earth to Gulg Volcano",
    intro: "Laguna travels through the volcanic crags of Gulg, employing his arsenal of high-tech firearms alongside the Warrior of Light.",
    characterGuide: {
      name: "Laguna Loire",
      title: "Tactical Gunner Specialist",
      portrait: "/dissidia_012_characters/11_Laguna_Loire.png",
      playstyle: "Laguna excels at controlling battlefield space with Machine Gun rapid fire, ricocheting Shotgun blasts, and homing Rocket Launchers. His ground Machine Gun traps enemies in place for extended Assist setups.",
      recommendedAbilities: [
        { name: "Machine Gun", type: "BRV", locationOrLevel: "Default", notes: "Continuous suppression fire that holds opponents in hitstun and charges Assist meter." },
        { name: "Rocket Launcher", type: "BRV", locationOrLevel: "Level 3", notes: "Fires slow-homing rockets that track airborne opponents and create zone pressure." },
        { name: "Pump Action", type: "BRV", locationOrLevel: "Level 6", notes: "Close-range blast that sends enemies flying into Wall Rushes." },
        { name: "Ragnarok Blade", type: "HP", locationOrLevel: "Default", notes: "Calls down satellite lasers in a wide pillar around Laguna." }
      ],
      assistEvaluation: {
        partner: "Warrior of Light",
        groundAssist: "Ascension (Skyward launcher)",
        airAssist: "Daybreak (Downward shield bash)",
        tactics: "Trap enemies with ground Machine Gun, then call Warrior of Light's Ascension to launch them skyward into Laguna's Satellite Beam or Ragnarok Blade."
      }
    },
    overworldSteps: [
      {
        title: "Gulg Volcano Mountain Trek",
        description: "Navigate the lava ridges towards the Gateway of Fire. Collect the Flametongue and Ice Shield from volcanic chests.",
        chests: [
          { location: "Volcanic Ridge Path", reward: "Flametongue (Fire Element Sword)" },
          { location: "Western Lava Basin", reward: "Ice Shield" },
          { location: "Northern Caldera", reward: "300 Gil" }
        ],
        orbs: "4 Light Orbs across volcano crater"
      },
      {
        title: "Gulg Moogle Merchant",
        description: "Visit the merchant Moogle outside the Gateway of the Flame to purchase summonstones and equipment upgrades.",
        moogleShop: {
          location: "Gulg Volcano Moogle",
          notes: "Carbuncle and Phoenix summonstones available for purchase.",
          inventory: [
            { item: "Carbuncle Summonstone", cost: "40 KP", desc: "Reflects opponent magic projectiles" },
            { item: "Phoenix Summonstone", cost: "60 KP", desc: "Auto-revives character upon death once" },
            { item: "Flametongue", cost: "100 KP", desc: "ATK +24 sword" },
            { item: "Rosetta Stone", cost: "50 KP", desc: "Adds +1 accessory slot" }
          ]
        }
      }
    ],
    gateways: [
      {
        id: "ch3-fire",
        title: "Gateway of Fire",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 12,
        asciiMap: `[D][ ][1][ ][C]
      [ ][2]
      [3][ ][G]`,
        legend: [
          "D = Deploy Point",
          "C = Bronze Armor Chest",
          "1 = Fleeting Flash Lv12",
          "2 = Delusory Dragoon Lv12",
          "3 = False Stalwart Lv14",
          "G = Stigma of Chaos"
        ],
        chests: ["Bronze Armor", "300 Gil"],
        strategy: "Use Machine Gun from distance to safely harass False Stalwart while avoiding his Earthquake ground shockwaves."
      },
      {
        id: "ch3-flame",
        title: "Gateway of the Flame",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 14,
        asciiMap: `[D][ ][1]   [B]
   [2][ ][3][C]
      [ ]   [G]`,
        legend: [
          "D = Deploy Point",
          "C = Silver Ring (+5% EX Intake)",
          "1 = Phantasmal Girl Lv14",
          "2 = Counterfeit Wraith Lv14 (Firion Manikin)",
          "3 = Delusory Dragoon Lv14",
          "B = Garland Boss Encounter (Lv14)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Garland",
          level: 14,
          hp: 2450,
          bravery: 280,
          attacks: ["Round Edge", "Bardiche", "High Strike", "Twin Sword"],
          hpAttacks: ["Cyclone", "Earthquake", "Tsunami"],
          summon: "None",
          difficulty: "2 / 5",
          img: "/dissidia_012_characters/18_Garland.png",
          strategy: "Garland is a heavy brawler with massive poise on melee attacks. Do not attempt close-range physical trades. Maintain distance with Laguna's Rocket Launcher and Machine Gun. When Garland leaps for Earthquake or spins for Cyclone, dash backwards and punish his landing with Ragnarok Blade.",
          dangerNotes: "Garland's Bardiche has deceptive forward reach that can break guards if blocked too close."
        },
        chests: ["Silver Ring", "Blue Drop"],
        strategy: "Keep Garland at bay with ranged projectiles. Use Warrior of Light's Assist to interrupt his charging HP attacks."
      }
    ]
  },
  {
    id: "ch4",
    title: "Temptation",
    chapterNumber: "Chapter 4",
    characters: "Yuna",
    location: "Crescent Lake to Melmond",
    intro: "Yuna journeys across the southern seas and coastline, accompanied by Bartz Klauser as they confront Jecht.",
    characterGuide: {
      name: "Yuna",
      title: "High Summoner",
      portrait: "/dissidia_012_characters/14_Yuna.png",
      playstyle: "Yuna commands Aeons for all Bravery and HP actions. Valefor provides aerial wind blasts, Ixion dashes with electric charge, Shiva freezes foes, and Bahamut executes Megaflare from above.",
      recommendedAbilities: [
        { name: "Valefor (Sonic Wings)", type: "BRV", locationOrLevel: "Default", notes: "Fires fast air shockwaves that initiate Chase." },
        { name: "Ixion (Aerospark)", type: "BRV", locationOrLevel: "Level 3", notes: "Charging lightning ram that dispels enemy magical buffs." },
        { name: "Megaflare (Bahamut)", type: "HP", locationOrLevel: "Default", notes: "Rains destructive energy beams over a wide ground radius." },
        { name: "Energy Ray (Valefor)", type: "HP", locationOrLevel: "Level 8", notes: "Rapid sweeping laser beam across the floor." }
      ],
      assistEvaluation: {
        partner: "Bartz Klauser",
        groundAssist: "Solid Breaker (Multi-weapon barrage)",
        airAssist: "Luminous Shard (Sword dive)",
        tactics: "Stun foes with Valefor's Sonic Wings, then summon Bartz's Solid Breaker to wall-rush the enemy into Bahamut's Megaflare."
      }
    },
    overworldSteps: [
      {
        title: "Melmond Coastline Exploration",
        description: "Travel through the ruins of Melmond toward the Gateway of the Moon. Collect the Diamond Ring and elemental Drops.",
        chests: [
          { location: "Melmond Beach Cliff", reward: "Diamond Ring (+10% EX Force)" },
          { location: "Southern Bay Chest", reward: "400 Gil" },
          { location: "Lighthouse Isle", reward: "Yellow Drop (+3 Damage)" }
        ],
        orbs: "4 Light Orbs on Melmond beach"
      },
      {
        title: "Melmond Moogle Shop",
        description: "Visit the Melmond merchant for Leviathan and Odin summonstones.",
        moogleShop: {
          location: "Melmond Coastal Moogle",
          notes: "Leviathan drains enemy Bravery over time.",
          inventory: [
            { item: "Leviathan Summonstone", cost: "50 KP", desc: "Drains enemy BRV over 20 seconds" },
            { item: "Odin Summonstone", cost: "70 KP", desc: "50% chance to immediately break enemy" },
            { item: "Ice Brand", cost: "120 KP", desc: "ATK +32 ice sword" },
            { item: "Rosetta Stone", cost: "50 KP", desc: "Adds +1 accessory slot" }
          ]
        }
      }
    ],
    gateways: [
      {
        id: "ch4-moon",
        title: "Gateway of the Moon",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 16,
        asciiMap: `[D][ ][1][ ][C]
      [ ][2]
[G][ ][3]`,
        legend: [
          "D = Deploy Point",
          "C = Silver Armlet Chest",
          "1 = Ephemeral Phantom Lv16 (Squall Manikin)",
          "2 = Capricious Thief Lv16 (Zidane Manikin)",
          "3 = Ephemeral Phantom Lv16",
          "G = Stigma of Chaos"
        ],
        chests: ["Silver Armlet", "400 Gil"],
        strategy: "Use Shiva's Heavenly Strike to pressure Zidane Manikins out of the air."
      },
      {
        id: "ch4-eclipse",
        title: "Gateway of the Eclipse",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 18,
        asciiMap: `[D][ ][1]   [B]
   [2][ ][3][C]
      [ ]   [G]`,
        legend: [
          "D = Deploy Point",
          "C = White Drop (+20 Base BRV)",
          "1 = Capricious Thief Lv18",
          "2 = Ephemeral Phantom Lv18",
          "3 = False Hero Lv18 (WoL Manikin)",
          "B = Jecht Boss Encounter (Lv18)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Jecht",
          level: 18,
          hp: 2890,
          bravery: 320,
          attacks: ["Jecht Rush", "Jecht Stream", "Jecht Stream 2", "Jecht Block"],
          hpAttacks: ["Jecht Blade", "Jecht Finger", "Ultimate Jecht Shot"],
          summon: "Ifrit",
          difficulty: "2.5 / 5",
          img: "/dissidia_012_characters/27_Jecht.png",
          strategy: "Jecht is a combo juggernaut with Jecht Block capable of staggering melee strikes. Use Yuna's long-range summoning attacks (Sonic Wings, Megaflare) to keep him out of melee reach. When Jecht leaps for Jecht Finger or Ultimate Jecht Shot, dodge under him and summon Bartz to punish his landing.",
          dangerNotes: "Do not attack Jecht while he is in his defensive stance; Jecht Block will stun you and guarantee his full HP combo."
        },
        chests: ["White Drop", "450 Gil"],
        strategy: "Keep Jecht at maximum distance using Valefor and Bahamut."
      }
    ]
  },
  {
    id: "ch5",
    title: "Pride of the Dragoon",
    chapterNumber: "Chapter 5",
    characters: "Kain",
    location: "Mt. Ordeals to Castle of Trials",
    intro: "Kain scales the peaks of Mt. Ordeals to confront the Tree of Void, Exdeath, while testing his resolve alongside Cecil Harvey.",
    characterGuide: {
      name: "Kain Highwind",
      title: "Holy Dragoon",
      portrait: "/dissidia_012_characters/05_Kain_Highwind.png",
      playstyle: "Kain dominates vertical airspace with rapid lance thrusts, spinning divebombs, and invulnerable Jump mechanics. His Lance Barrage inflicts heavy Wall Rush damage.",
      recommendedAbilities: [
        { name: "Spiral Blow", type: "BRV", locationOrLevel: "Default", notes: "Fast horizontal aerial thrust that chases opponents." },
        { name: "Lance Barrage", type: "BRV", locationOrLevel: "Default", notes: "Multi-hit spear thrust that pins foes against arena walls." },
        { name: "Dragon's Fang", type: "HP", locationOrLevel: "Default", notes: "Downward diving strike with wide area shockwave." },
        { name: "Gungnir", type: "HP", locationOrLevel: "Level 8", notes: "Horizontal piercing spear beam that deals massive BRV damage before HP hit." }
      ],
      assistEvaluation: {
        partner: "Cecil Harvey",
        groundAssist: "Shadowbringer (Dark Knight BRV beam)",
        airAssist: "Paladin Force (Paladin air juggle)",
        tactics: "Slam foes with Lance Barrage, then summon Cecil's Paladin Force in midair to juggle the target directly into Kain's Dragon's Fang."
      }
    },
    overworldSteps: [
      {
        title: "Mt. Ordeals Summit Route",
        description: "Scale the mountain slopes towards the Gateway of Heaven. Collect the Gold Ring and Flame Shield.",
        chests: [
          { location: "Mt. Ordeals Ridge", reward: "Gold Ring (+15% EX Force)" },
          { location: "Castle of Trials Gate", reward: "Flame Shield" },
          { location: "Summit Overlook", reward: "500 Gil" }
        ],
        orbs: "4 Light Orbs across mountain peak"
      },
      {
        title: "Mt. Ordeals Moogle Shop",
        description: "Trade for Alexander and Bahamut summonstones at the summit Moogle.",
        moogleShop: {
          location: "Mt. Ordeals Summit Moogle",
          notes: "Alexander locks opponent BRV from increasing.",
          inventory: [
            { item: "Alexander Summonstone", cost: "60 KP", desc: "Locks enemy BRV from increasing for 20s" },
            { item: "Bahamut Summonstone", cost: "80 KP", desc: "Boosts user BRV continuously" },
            { item: "Flame Sword", cost: "140 KP", desc: "ATK +38 fire blade" },
            { item: "Rosetta Stone", cost: "50 KP", desc: "Adds +1 accessory slot" }
          ]
        }
      }
    ],
    gateways: [
      {
        id: "ch5-heaven",
        title: "Gateway of Heaven",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 20,
        asciiMap: `[D][ ][1][ ][C]
      [ ][2]
[G][ ][3]`,
        legend: [
          "D = Deploy Point",
          "C = Mythril Helm Chest",
          "1 = False Stalwart Lv20",
          "2 = False Hero Lv20",
          "3 = False Stalwart Lv20",
          "G = Stigma of Chaos"
        ],
        chests: ["Mythril Helm", "500 Gil"],
        strategy: "Use Kain's Jump to leap over False Stalwart's ground slams."
      },
      {
        id: "ch5-sky",
        title: "Gateway of the Sky",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 22,
        asciiMap: `[D][ ][1]   [B]
   [2][ ][3][C]
      [ ]   [G]`,
        legend: [
          "D = Deploy Point",
          "C = Green Drop (+3 Damage)",
          "1 = False Hero Lv22",
          "2 = False Stalwart Lv22",
          "3 = Counterfeit Wraith Lv22",
          "B = Exdeath Boss Encounter (Lv22)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Exdeath",
          level: 22,
          hp: 3420,
          bravery: 360,
          attacks: ["High Block", "Omniblock", "Sword Dance", "Delta Attack"],
          hpAttacks: ["Grand Cross", "Almagest", "Black Hole"],
          summon: "None",
          difficulty: "3 / 5",
          img: "/dissidia_012_characters/22_Exdeath.png",
          strategy: "Exdeath is a master of guard counters. Omniblock and High Block will deflect and stagger normal lance thrusts. Bait his block by feigning approaches, then execute Gungnir or Dragon's Fang from outside his counter range. When Exdeath casts Grand Cross or Almagest, jump above the swirling void sphere and strike from the air.",
          dangerNotes: "Never execute Lance Barrage while Exdeath is performing Omniblock; the counter reflection will break Kain instantly."
        },
        chests: ["Green Drop", "550 Gil"],
        strategy: "Bait Exdeath's blocks with aerial maneuvers, then strike with Gungnir."
      }
    ]
  },
  {
    id: "ch6",
    title: "A Fateful Meeting",
    chapterNumber: "Chapter 6",
    characters: "Tifa",
    location: "Sunken Shrine & Onrac Region",
    intro: "Tifa navigates the snowy ruins near Onrac, crossing paths with Cloud Strife and engaging Sephiroth in high-stakes combat.",
    characterGuide: {
      name: "Tifa Lockhart",
      title: "Martial Arts Master",
      portrait: "/dissidia_012_characters/09_Tifa_Lockhart.png",
      playstyle: "Tifa utilizes a unique Feint cancel mechanic where pressing X during attack startup teleports her to the opponent's flank or rear. Waterkick, Falcon Dive, and Somersault deliver relentless pressure.",
      recommendedAbilities: [
        { name: "Waterkick", type: "BRV", locationOrLevel: "Default", notes: "Rapid forward kicks that initiate Chase sequences." },
        { name: "Falcon Dive", type: "BRV", locationOrLevel: "Level 3", notes: "Aerial downward dive that Wall Rushes foes into the floor." },
        { name: "Somersault", type: "BRV", locationOrLevel: "Default", notes: "Upward backflip kick; excellent vertical anti-air." },
        { name: "Meteodrive", type: "HP", locationOrLevel: "Default", notes: "Grabs opponent and executes a spinning piledriver." }
      ],
      assistEvaluation: {
        partner: "Cloud Strife",
        groundAssist: "Climhazzard (Upward sword thrust)",
        airAssist: "Blade Beam (Triple shockwave projectile)",
        tactics: "Feint through enemy attacks with Waterkick, then summon Cloud's Climhazzard to launch foes into Tifa's Meteodrive or Dolphin Blow."
      }
    },
    overworldSteps: [
      {
        title: "Onrac Coastline & Snowfields",
        description: "Traverse the Onrac snowfields toward the Gateway of the Sun. Collect the Diamond Shield and trade materials.",
        chests: [
          { location: "Onrac Shoreline Cave", reward: "Diamond Shield" },
          { location: "Western Glacial Pass", reward: "Diamond Ring" },
          { location: "Sunken Shrine Entrance", reward: "600 Gil" }
        ],
        orbs: "4 Light Orbs across Onrac snowfields"
      },
      {
        title: "Onrac Moogle Merchant",
        description: "Purchase top-tier summonstones and equipment from the Onrac regional Moogle.",
        moogleShop: {
          location: "Onrac Region Moogle",
          notes: "Diamond armor set and Rosetta Stones available.",
          inventory: [
            { item: "Diamond Bangle", cost: "100 KP", desc: "HP +500 armlet" },
            { item: "Diamond Armor", cost: "150 KP", desc: "DEF +45 heavy armor" },
            { item: "Rosetta Stone", cost: "50 KP", desc: "Adds +1 accessory slot" },
            { item: "Ramuh Summonstone", cost: "60 KP", desc: "Reverses enemy bravery multiplier" }
          ]
        }
      }
    ],
    gateways: [
      {
        id: "ch6-sun",
        title: "Gateway of the Sun",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 24,
        asciiMap: `[D][ ][1][ ][C]
      [ ][2]
[G][ ][3]`,
        legend: [
          "D = Deploy Point",
          "C = Mythril Bangle Chest",
          "1 = Capricious Thief Lv24",
          "2 = Ephemeral Phantom Lv24",
          "3 = Capricious Thief Lv24",
          "G = Stigma of Chaos"
        ],
        chests: ["Mythril Bangle", "600 Gil"],
        strategy: "Use Tifa's Feint (press X during Waterkick) to teleport behind Zidane Manikins and punish their ranged daggers."
      },
      {
        id: "ch6-star",
        title: "Gateway of the Star",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 26,
        asciiMap: `[D][ ][1]   [B]
   [2][ ][3][C]
      [ ]   [G]`,
        legend: [
          "D = Deploy Point",
          "C = Red Drop (+3 Damage)",
          "1 = Ephemeral Phantom Lv26",
          "2 = Capricious Thief Lv26",
          "3 = False Hero Lv26",
          "B = Sephiroth Boss Encounter (Lv26)",
          "G = Stigma of Chaos"
        ],
        bossTactic: {
          bossName: "Sephiroth",
          level: 26,
          hp: 4120,
          bravery: 410,
          attacks: ["Shadow Flare", "Godspeed", "Fervent Blow", "Sudden Cruelty", "Scintilla (Counter)"],
          hpAttacks: ["Octaslash", "Hell's Gate", "Black Materia"],
          summon: "None",
          difficulty: "3.5 / 5",
          img: "/dissidia_012_characters/24_Sephiroth.png",
          strategy: "Sephiroth possesses immense reach with the Masamune. Scintilla will parry incoming attacks and retaliate with an energy wave. Feint past his Shadow Flare orbs using Tifa's X-cancel, then execute Somersault into Falcon Dive. When Sephiroth rises for Hell's Gate, dash away immediately to avoid the plunge shockwave.",
          dangerNotes: "Do not challenge Sephiroth directly in frontal sword clashes; Masamune has higher priority than Tifa's punches."
        },
        chests: ["Red Drop", "650 Gil"],
        strategy: "Feint to Sephiroth's flank to bypass Scintilla and punish with Meteodrive."
      }
    ]
  },
  {
    id: "ch7",
    title: "The Final Gate",
    chapterNumber: "Chapter 7",
    characters: "Lightning, Vaan, Laguna, Yuna, Kain, Tifa (Party)",
    location: "Dimensional Rift",
    intro: "The six warriors unite as a full party to enter the Dimensional Rift, confronting waves of high-tier manikins and closing the rift before the cycle concludes.",
    characterGuide: {
      name: "Full 6-Hero Party",
      title: "United Champions of Cosmos",
      playstyle: "Assemble your 5 most comfortable characters into a balanced strike team. Place high-damage heroes like Lightning and Kain in slot 1 and 2, while utilizing Laguna and Yuna for zoning and Assist support.",
      recommendedAbilities: [
        { name: "Full Party Synergies", type: "Support", locationOrLevel: "Chapter 7", notes: "Equip all heroes with mastered support abilities and booster accessories." }
      ]
    },
    overworldSteps: [
      {
        title: "Approaching the Dimensional Rift",
        description: "The Dimensional Rift consists of multi-floor gauntlets. Ensure all 6 characters are equipped with high-tier armor and accessories before entering.",
        chests: [
          { location: "Rift Entrance Ridge", reward: "Rosetta Stone" },
          { location: "Void Boundary", reward: "Lufenian Armor Shard" }
        ]
      }
    ],
    gateways: [
      {
        id: "ch7-rift",
        title: "Gateway to the Rift (4 Floors)",
        kpChance: "Win battle within 90 seconds.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 30,
        floors: [
          {
            floorNumber: 1,
            kpChance: "Win within 90 seconds.",
            bonusLine: 28,
            enemies: ["False Hero Lv28", "Ephemeral Phantom Lv28", "Capricious Thief Lv28"],
            chests: ["1000 Gil"],
            notes: "Clear the vanguard manikins using your lead party member."
          },
          {
            floorNumber: 2,
            kpChance: "Win within 90 seconds.",
            bonusLine: 30,
            enemies: ["Phantasmal Harlequin Lv30", "False Stalwart Lv30", "Delusory Dragoon Lv30"],
            chests: ["Elixir"],
            notes: "Focus on Assist combos to secure quick breaks."
          },
          {
            floorNumber: 3,
            kpChance: "Win within 90 seconds.",
            bonusLine: 32,
            enemies: ["Counterfeit Wraith Lv32", "Fleeting Flash Lv32", "Idle Sky Pirate Lv32"],
            chests: ["Megalixir"],
            notes: "Trigger EX Burst against the high-level Flash piece."
          },
          {
            floorNumber: 4,
            kpChance: "Win within 90 seconds.",
            bonusLine: 35,
            enemies: ["Manikin Swarm Leader Lv35 w/ Chaos Boost"],
            bossTactic: {
              bossName: "Manikin Vanguard Prime",
              level: 35,
              hp: 5500,
              bravery: 500,
              attacks: ["Omnislash Prototype", "Blade Beam", "Climhazzard"],
              hpAttacks: ["Braver", "Meteorain"],
              difficulty: "3.5 / 5",
              strategy: "The vanguard prime possesses enhanced Bravery regeneration. Stagger with Lightning's Commando attacks or Kain's Lance Barrage and unleash full Assist chains."
            },
            chests: ["Lufenian Dagger"],
            notes: "Final floor before the story climax."
          }
        ],
        strategy: "Distribute your party members across the 4 floors to conserve HP."
      }
    ]
  },
  {
    id: "epilogue-012",
    title: "Treachery of the Gods Epilogue",
    chapterNumber: "Epilogue",
    characters: "Lightning, Kain, Warrior of Light",
    location: "Sanctuary of Order & Void Gate",
    intro: "The 12th cycle concludes with the sacrifice of the prequel heroes, sealing the rift and passing the crystal hope to the 10 champions of the 13th cycle.",
    gateways: [
      {
        id: "epilogue-gate",
        title: "Gateway of Final Sacrifice",
        kpChance: "Clear Gateway.",
        rules: "Disabled",
        skills: "Enabled",
        bonusLine: 35,
        strategy: "Conclude the narrative battle to unlock Scenario 013: Light to All and Report 01 in the Museum.",
        notes: "Completing Scenario 012 unlocks Scenario 013 and allows purchasing Scenario 000 in the PP Catalog."
      }
    ]
  }
];
