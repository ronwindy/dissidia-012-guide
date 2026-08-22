export interface Story000Floor {
  floorNumber: number | string;
  name?: string;
  kpChance?: string;
  bonusLine?: number | string;
  enemies: string[];
  chests?: string[];
  notes?: string;
}

export interface Story000Gateway {
  id: string;
  title: string;
  location: string;
  kpChance?: string;
  rules?: string;
  skills?: string;
  bonusLine?: number | string;
  enemies?: string[];
  chests?: string[];
  floors?: Story000Floor[];
  strategy?: string;
  notes?: string;
}

export interface Story000Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gateways?: Story000Gateway[];
}

export const story000Foreword = {
  title: "000: Confessions of the Creator Overview",
  desc: "The open-world postgame campaign of Dissidia 012. Unlocked after completing Scenario 012 and purchasing it in the PP Shop for 2,000 PP, or clearing Scenario 013.",
  tips: [
    "Custom Ruleset Advantage: Create custom rulesets prioritizing EX Core appearance or high Bravery multipliers to bridge equipment and level gaps.",
    "Party Selection: Select your 5 most comfortable characters. Your lead character appears in cutscenes and represents you on the world map. (Note: Squall has difficulty hitting field manikins with his BRV swing, and Exdeath has slower world-map movement).",
    "Unlocking the World: You begin restricted until you conquer the 10-floor dungeon 'Chasm in the Rotting Land' at the Cavern of Earth.",
    "Special Day Discount: On your designated Special Day, all Moogle Shop prices across World B are slashed by 50%!"
  ]
};

export const story000DeepDungeons: Story000Gateway[] = [
  {
    id: "chasm-rotting-land",
    title: "Chasm in the Rotting Land (10 Floors)",
    location: "Cavern of Earth Teleporter",
    strategy: "Conquering this gateway breaks the world map barriers and unlocks the Moogle companion who follows you across World B.",
    floors: [
      {
        floorNumber: 1,
        kpChance: "Win within 90 seconds.",
        bonusLine: 70,
        enemies: ["Warrior of Antiquity Lv72 w/ Assist", "Fleeting Flash Lv39"],
        notes: "Move 1 square forward to trigger manikins. Defeating one reveals the Stigma of Chaos. A Round Chain or Multichain easily traps both."
      },
      {
        floorNumber: 2,
        enemies: ["Horror of Antiquity Lv73", "Fallacious Giant Lv72", "Delusory Dragoon Lv39"],
        notes: "Move below deploy point to spawn enemies. Defeat the non-expert piece to reach the goal."
      },
      {
        floorNumber: 3,
        enemies: ["Horror of Antiquity Lv80", "Lady of Antiquity Lv79", "Counterfeit Youth Lv41", "Warrior of Antiquity Lv79", "Transient Gunner Lv40"],
        chests: ["Treasure Chest (via strong path)", "Potion (via easy path)"]
      },
      {
        floorNumber: 4,
        enemies: ["Imitation Despot Lv80", "Ephemeral Summoner Lv40", "Imaginary Brawler Lv40", "Imaginary Champion Lv82", "Counterfeit Wraith Lv80 / Delusory Warlock Lv81 (Group)"]
      },
      {
        floorNumber: 5,
        enemies: ["Delusory Dragoon Lv42", "Fallacious Tree Lv81 / Harlequin Lv81 / Champion Lv82 (Group)", "Imaginary Soldier Lv43", "Fleeting Flash Lv39 / Summoner Lv40 / Lion Lv43 (Group)", "Potion -> Capricious Reaper Lv82"],
        notes: "Engaging the Moogle node grants the Moogle Summon! Features 3 unique dialogue scenes (Cosmos, Chaos, or Terra variant)."
      },
      {
        floorNumber: 6,
        enemies: ["Delusory Dragoon Lv42", "Transient Witch Lv82", "Imitation Liegeman Lv41", "Capricious Reaper Lv52"]
      },
      {
        floorNumber: 7,
        enemies: ["Idle Sky Pirate Lv39 / Delusory Dragoon Lv39", "Fallacious Tree Lv100", "Imaginary Soldier Lv43", "Ephemeral Phantom Lv83", "Ephemeral Summoner Lv40", "Transient Lion Lv43"],
        notes: "Use a Cross Chain in the center to capture all pieces. Access the silver statue afterwards to double your KP."
      },
      {
        floorNumber: 8,
        enemies: ["Imaginary Soldier Lv43", "Counterfeit Wraith Lv80", "Phantasmal Girl Lv42", "Delusory Warlock Lv81", "Fleeting Flash Lv39 / Dragoon Lv39 / Pirate Lv39 (Group)"]
      },
      {
        floorNumber: 9,
        enemies: ["Delusory Dragoon Lv39", "Delusory Warlock Lv81", "False Stalwart Lv80", "Fallacious Wanderer Lv42 / Girl Lv42 / Phantom Lv82 (Group)"]
      },
      {
        floorNumber: 10,
        enemies: ["Red Chest Trap -> Fallacious Tree Lv90"],
        chests: ["High-grade Catalyst Chest"],
        notes: "Clearing Floor 10 spawns the companion Moogle who follows your party on the overworld."
      }
    ]
  },
  {
    id: "curses-hopes-yore",
    title: "Curses of Hopes of Yore (5 Floors - Shantotto's Remaster)",
    location: "Cavern of Earth Surroundings",
    strategy: "Remake of Shantotto's classic dungeon. Beware of 'Negate Physical Damage' and 'Negate Magic Damage' emblems throughout.",
    floors: [
      {
        floorNumber: 1,
        kpChance: "Win within 90 seconds.",
        bonusLine: 75,
        enemies: ["Delusory Dragoon Lv59", "Ephemeral Summoner Lv60", "Lady of Antiquity Lv60", "Idle Sky Pirate Lv59"],
        notes: "Multichain in the square above Lady of Antiquity."
      },
      {
        floorNumber: 2,
        enemies: ["Capricious Thief Lv63", "Horror of Antiquity Lv80", "Fallacious Wanderer Lv62", "Transient Gunner Lv60", "Delusory Warlock Lv62"]
      },
      {
        floorNumber: 3,
        enemies: ["Fallacious Wanderer Lv62", "Counterfeit Wraith Lv89", "Fallacious Giant Lv74", "Horror of Antiquity Lv61", "Transient Lion Lv63 / Thief Lv63 / Vision Lv63 / Antiquity Lv79 (4-Group)"],
        notes: "Use a Multichain on the 'Item Disable' emblem."
      },
      {
        floorNumber: 4,
        enemies: ["False Hero Lv100", "Imaginary Soldier Lv63", "False Stalwart Lv89", "Capricious Thief Lv63", "Red Chest -> Delusory Warlock Lv90 w/ Assist"],
        notes: "Disable EX Core Appearance rules against the Lv100 False Hero to prevent rapid EX Bursts."
      },
      {
        floorNumber: 5,
        name: "Shantotto's Sanctum",
        enemies: ["Horror of Antiquity Lv62", "Boss -> Shantotto Lv70 w/ Assist"],
        chests: ["Random piece of the Allure of Honey armor set"]
      }
    ]
  },
  {
    id: "forsaken-lands",
    title: "The Forsaken Lands (10 Floors - Gaia)",
    location: "Gaia Teleport Stone",
    strategy: "Endgame resource dungeon. Contains recurring chests filled with Electrum and rare ores on every playthrough.",
    floors: [
      {
        floorNumber: "1 - 10",
        name: "Gaia Labyrinth Gauntlet",
        enemies: [
          "Floor 1-4: Lv80-100 Manikins (Warriors & Ladies of Antiquity)",
          "Floor 5-8: Lv105-118 Manikins with high-tier equipment",
          "Floor 9-10: Lv120+ Manikins guarding elite chests"
        ],
        chests: ["Electrum x3", "Pink Tail", "Dragon's Tear", "Rosetta Stone", "Megalixir"],
        notes: "Teleport to Gaia to access this gateway directly. Repeatable farming spot for Electrum."
      }
    ]
  },
  {
    id: "dragon-kings-gateway",
    title: "Dragon King's Gateway (10 Floors)",
    location: "Dragon Caves Teleporter",
    strategy: "High-difficulty trial dungeon inhabited by max-level phantom dragons and elite manikins.",
    floors: [
      {
        floorNumber: "1 - 10",
        name: "Dragon King's Trial",
        enemies: [
          "Successive gauntlet of Lv90-125 Manikins with vicious AI profiles",
          "Boss Nodes: Bahamut-infused battle pieces"
        ],
        chests: ["Scarletite", "Dragon's Tear", "Genji Equipment Set Pieces", "Elixir / Megalixir"],
        notes: "Essential dungeon for gathering crafting bases for Genji and Lufenian gear sets."
      }
    ]
  },
  {
    id: "edge-of-discord",
    title: "Edge of Discord (5 Floors - Feral Chaos Final Battle)",
    location: "Land of Discord Core",
    strategy: "The absolute pinnacle of Dissidia 012. Floor 5 contains the Level 130 Feral Chaos boss fight with over 100,000 HP.",
    floors: [
      {
        floorNumber: 1,
        enemies: ["Phantasmal Girl Lv99", "Delusory Knight Lv123"],
        chests: ["Elixir x1", "KP 50"]
      },
      {
        floorNumber: 2,
        enemies: ["Imaginary Champion Lv127", "False Stalwart Lv125"],
        chests: ["Rosetta Stone x1"]
      },
      {
        floorNumber: 3,
        enemies: ["Ephemeral Phantom Lv100", "Counterfeit Youth Lv122", "Imitation Liegeman Lv122"],
        chests: ["Mythril Ring", "Tome of the Orator"]
      },
      {
        floorNumber: 4,
        enemies: ["Imaginary Champion Lv127", "False Stalwart Lv125", "Delusory Knight Lv123"],
        chests: ["Lufenian Armor Chest Piece"],
        notes: "Defeat the rear group to unlock the high-tier equipment chest."
      },
      {
        floorNumber: 5,
        name: "Cataclysmic Apex (Feral Chaos)",
        enemies: ["Boss -> Feral Chaos Lv130 w/ Garland Assist (100,000+ HP)"],
        chests: ["Feral Chaos Armor Set Piece", "Report 20 Unlock Key", "PP Catalog Feral Chaos Token"],
        notes: "Cid's node on the board will fully heal and revive your party members before initiating the fight. Defeating Feral Chaos unlocks him in the PP Catalog and expands Moglin's inventory in Cornelia!"
      }
    ]
  }
];

export const story000MoogleShops = [
  {
    location: "Cornelia Region",
    moogleName: "Moglin",
    inventory: [
      { item: "Broadsword", cost: "10 KP", desc: "Basic sword equipment" },
      { item: "Bronze Sword", cost: "20 KP", desc: "Tier 2 sword" },
      { item: "Iron Sword", cost: "40 KP", desc: "Tier 3 sword" },
      { item: "Mythril Sword", cost: "80 KP", desc: "Mid-tier sword base" },
      { item: "Rosetta Stone", cost: "100 KP", desc: "Adds +1 Accessory slot (Essential)" }
    ]
  },
  {
    location: "Cavern of Earth",
    moogleName: "Mogster",
    inventory: [
      { item: "Oak Staff", cost: "30 KP", desc: "Mage staff" },
      { item: "Mage's Staff", cost: "60 KP", desc: "Tier 2 staff" },
      { item: "Silver Dust", cost: "25 KP", desc: "Crafting reagent" },
      { item: "Gold Dust", cost: "50 KP", desc: "Rare crafting reagent" },
      { item: "KP Bonus Token", cost: "10 KP", desc: "Doubles KP for next gateway" }
    ]
  },
  {
    location: "Crescent Lake",
    moogleName: "Moguru",
    inventory: [
      { item: "Tanegashima", cost: "50 KP", desc: "Gun weapon" },
      { item: "Blazefire Saber", cost: "120 KP", desc: "Lightning signature weapon base" },
      { item: "Pink Tail", cost: "150 KP", desc: "Catalyst for Super Ribbon and rare gear" },
      { item: "Dusty Elixir", cost: "25 KP", desc: "Primary crafting catalyst" }
    ]
  },
  {
    location: "Dragon Caves",
    moogleName: "Mogbah",
    inventory: [
      { item: "Dragon's Tear", cost: "200 KP", desc: "Rare catalyst for dragon equipment" },
      { item: "Scarletite", cost: "250 KP", desc: "Required for Genji & Smiting Soul sets" },
      { item: "Elixir", cost: "50 KP", desc: "Full HP/BRV recovery during exploration" },
      { item: "Megalixir", cost: "100 KP", desc: "Ultimate recovery and high-tier crafting base" }
    ]
  },
  {
    location: "Gaia / Forsaken Lands",
    moogleName: "Mogrich",
    inventory: [
      { item: "Electrum", cost: "300 KP", desc: "Crucial catalyst for Excalibur II and high-end sets" },
      { item: "Lufenian Fragment", cost: "200 KP", desc: "Lufenian gear crafting" },
      { item: "Tome of the Orator", cost: "150 KP", desc: "Booster accessory recipe base" },
      { item: "Hi-Elixir", cost: "75 KP", desc: "100% EX & Assist meter recharge" }
    ]
  }
];
