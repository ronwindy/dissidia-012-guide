export interface FriendCard {
  id: string;
  name: string;
  category: 'farming' | 'themed' | 'competitive';
  ghost: string;
  level: number;
  rank: 'SSS' | 'SS' | 'S' | 'A' | 'B';
  behavior: 'Tactician' | 'Vicious' | 'Cautious';
  rules: 'On' | 'Off';
  version: string;
  date?: string;
  equipment: [string, string, string, string]; // Weapon, Shield/Hand, Head, Armor
  accessories: string[]; // 10 accessories
  targetDrops: string[];
  strategy: string;
  author?: string;
  authorNote?: string;
  reviewerNote?: string;
}

export const friendCardsData: FriendCard[] = [
  {
    id: "exulus",
    name: "Exulus-",
    category: "farming",
    ghost: "Sephiroth",
    level: 100,
    rank: "SSS",
    behavior: "Tactician",
    rules: "Off",
    version: "USA",
    date: "02/08/12",
    equipment: ["Genji Blade", "Genji Shield", "Genji Helm", "Genji Armor"],
    accessories: [
      "Megalixer",
      "Hi-Elixer",
      "Rosetta Stone",
      "Chocobo Cologne",
      "Glutton",
      "First to Victory",
      "Fiery Spirit",
      "Mystic Guard",
      "Center of the World",
      "Together as One"
    ],
    targetDrops: [
      "Genji Equipment Set (Genji Blade, Shield, Helm, Armor)",
      "Rosetta Stone (Extra Accessory Slots)",
      "Megalixers & Hi-Elixers",
      "Chocobo Cologne"
    ],
    strategy: "The ghost is configured with Black Materia as its ONLY attack, making it incapable of punishing at melee range. The only challenge is its evasion frequency, which can be effortlessly blasted through using tracking moves like Chaos Judgement, Edge of Madness, or Firion's Lord of Arms.",
    reviewerNote: "Exulus has made a very easy card to farm from since he's only put Black Materia as his Ghost's only attack. The only thing you really have to worry about is how much it dodges in which case can be remedied by Chaos Judgement, Edge of Madness, and/or Lord of Arms to the face."
  },
  {
    id: "ryuuhime",
    name: "Ryuuhime",
    category: "farming",
    ghost: "Bartz",
    level: 100,
    rank: "SSS",
    behavior: "Tactician",
    rules: "On",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Dorgann's Blade",
      "Lufenian Dirk",
      "Lufenian Headband",
      "Lufenian Jacket"
    ],
    accessories: [
      "Growth Egg",
      "Chocobo Down",
      "Chocobo Wing",
      "Chocobo Feather",
      "Superslick",
      "Mog's Amulet",
      "Diamond Ring",
      "Diamond Studs",
      "Training Ring",
      "Growth Seed"
    ],
    targetDrops: [
      "Growth Egg & Growth Seed (Extreme EXP Multipliers)",
      "Mog's Amulet & Training Ring (Extreme AP Multipliers)",
      "Chocobo Feathers, Wings, & Down",
      "Diamond Ring & Diamond Studs",
      "Lufenian Armor Pieces"
    ],
    strategy: "The ghost only has Ragnarok Blade equipped as its sole ability. Keep your distance or counter the predictable startup to easily battlegen the game's best EXP & AP booster accessories.",
    author: "mewtwokirby",
    authorNote: "I've set up a Friend Card that will make it a lot easier to get those annoying EXP/AP booster items. The Ghost only has Ragnarok Blade equipped as its only ability."
  },
  {
    id: "edgar",
    name: "Edgar",
    category: "themed",
    ghost: "Laguna",
    level: 100,
    rank: "S",
    behavior: "Vicious",
    rules: "On",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Air Anchor",
      "Chainsaw",
      "Drill",
      "Auto Crossbow"
    ],
    accessories: [
      "Dusty Elixer",
      "Elixer",
      "Hi-Elixer",
      "Megalixer",
      "Tome of the Orator",
      "Tome of Silence",
      "Tome of Adventure",
      "Tome of Men",
      "Tome of the Farplane",
      "Tome of Lies"
    ],
    targetDrops: [
      "Complete Machine Equipment Set (Air Anchor, Chainsaw, Drill, Auto Crossbow)",
      "Complete Lore Tome Suite (Orator, Silence, Adventure, Men, Farplane, Lies)",
      "Elixirs & Megalixers"
    ],
    strategy: "Crafted specifically to allow fast farming of the Machine set and Tomes. Laguna only has two skills equipped: Satellite Laser and Equip Machines. Punish the heavy startup animation of Satellite Laser with rapid rushdown attacks.",
    author: "Zahlzeit",
    reviewerNote: "This is created by me. It literally only has two skills equipped: Satellite Laser and Equip Machines so it should be easy to farm and grind from."
  },
  {
    id: "sora",
    name: "SoRa",
    category: "competitive",
    ghost: "Feral Chaos",
    level: 100,
    rank: "SSS",
    behavior: "Vicious",
    rules: "Off",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Endless Oblivion",
      "Eternal Despair",
      "Phantasmal Abyss",
      "Cycle's End"
    ],
    accessories: [
      "Hyper Ring",
      "Muscle Belt",
      "Empty Assist Gauge",
      "After Summon (etc)",
      "Pre-Assist",
      "After Summon (Opp)",
      "Hero Spirit",
      "Hero Spirit",
      "Hero Essence",
      "Center of the World"
    ],
    targetDrops: [
      "Feral Chaos Signature Gear (Endless Oblivion, Eternal Despair, Phantasmal Abyss, Cycle's End)",
      "Hero Essence & Hero Spirit",
      "Center of the World"
    ],
    strategy: "Hyper-aggressive physical powerhouse build. Maximizes damage output with dual Hero Spirits and Hyper Ring. Exploit Feral Chaos's large hitbox with long-range magic or staggered Assist counters."
  },
  {
    id: "axel",
    name: "axeL",
    category: "competitive",
    ghost: "Zidane",
    level: 100,
    rank: "SS",
    behavior: "Vicious",
    rules: "Off",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Ozma's Splinter",
      "Lufenian Gauntlets",
      "Lufenian Hairpin",
      "Lufenian Vest"
    ],
    accessories: [
      "Dismay Shock",
      "Battle Hammer",
      "Large Gap in HP",
      "Empty EX Gauge",
      "Summon Unused (etc)",
      "Pre-EX Mode",
      "Pre-EX Revenge",
      "Aerial",
      "Summon Unused (Opp)",
      "Side by Side"
    ],
    targetDrops: [
      "Ozma's Splinter (Zidane Exclusive Component)",
      "Lufenian Light Armor Gear",
      "Side by Side (Endgame Assist Booster)",
      "Dismay Shock & Battle Hammer"
    ],
    strategy: "Equipped with Side by Side to trade standard EX generation for blazing-fast Assist bar charging. Beware Zidane's relentless aerial mobility and EX depletion pressure from Dismay Shock."
  },
  {
    id: "naruga",
    name: "Naruga",
    category: "competitive",
    ghost: "Cloud of Darkness",
    level: 100,
    rank: "SSS",
    behavior: "Vicious",
    rules: "On",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Star of Lufenia",
      "Dragon Armlet",
      "Lufenian Hairpin",
      "Lufenian Jacket"
    ],
    accessories: [
      "Hyper Ring",
      "Muscle Belt",
      "Earring",
      "Attractorb",
      "Pearl Necklace",
      "HP = 100% (Self)",
      "BRV >= Base Value (Self)",
      "Summon Unused (etc)",
      "Pre-EX Revenge",
      "Tenacious Attacker"
    ],
    targetDrops: [
      "Star of Lufenia",
      "Dragon Armlet",
      "Lufenian Hairpin & Jacket",
      "Tenacious Attacker",
      "Pearl Necklace"
    ],
    strategy: "Constructed around Tenacious Attacker to maintain continuous high Base Bravery while at 100% HP. Zone her out or chip away health early to disable her core condition multipliers."
  },
  {
    id: "score",
    name: "score",
    category: "competitive",
    ghost: "Squall",
    level: 100,
    rank: "SSS",
    behavior: "Cautious",
    rules: "On",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Hardwood Katana",
      "Lufenian Greatshield",
      "Lufenian Cap",
      "Lufenian Jacket"
    ],
    accessories: [
      "Final Position",
      "Soul of Thamasa",
      "Together As One",
      "Attacking Bravery",
      "Hero's Spirit",
      "First to Victory",
      "Sturm und Drang",
      "Final Decision",
      "Hero's Spirit",
      "Hero's Essence"
    ],
    targetDrops: [
      "Hardwood Katana",
      "Lufenian Greatshield & Heavy Armor",
      "Soul of Thamasa & Sturm und Drang",
      "Hero's Essence & Hero's Spirit"
    ],
    strategy: "A disciplined, cautious AI utilizing double Hero's Spirit, Sturm und Drang, and Soul of Thamasa. Gunblade critical timings hit with devastating force at mid-range."
  },
  {
    id: "aether",
    name: "Aether",
    category: "competitive",
    ghost: "Lightning",
    level: 100,
    rank: "SSS",
    behavior: "Vicious",
    rules: "On",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Zantetsuken",
      "Blurry Moon",
      "Glass Mask",
      "Adamant Vest"
    ],
    accessories: [
      "Muscle Belt",
      "Guardian Bangle",
      "Dismay Shock",
      "Battle Hammer",
      "A Comrade's Vow",
      "Near Loss",
      "Large Gap in HP",
      "HP <= 25% (self)",
      "Large Gap in BRV",
      "Summon Unused"
    ],
    targetDrops: [
      "Zantetsuken & Blurry Moon",
      "Glass Mask & Adamant Vest",
      "A Comrade's Vow & Dismay Shock"
    ],
    strategy: "High-risk pinch/comeback build. Lightning gains exponential Assist and EX bonuses when her HP drops into critical condition (< 25%). Finish her quickly with a high-damage HP combo to prevent comeback triggers."
  },
  {
    id: "khellendros",
    name: "Khellendros",
    category: "competitive",
    ghost: "Shantotto",
    level: 100,
    rank: "B",
    behavior: "Vicious",
    rules: "Off",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Lufenian Rod",
      "Seydlitz",
      "Lufenian Cap",
      "Lufenian Robes"
    ],
    accessories: [
      "Dragonfly Orb",
      "Battle Hammer",
      "A Comrade's Vow",
      "Near Death",
      "Large Gap in HP",
      "Pre-EX Mode",
      "Pre-EX Revenge",
      "First to Victory",
      "Hero's Seal",
      "Fiery Spirit"
    ],
    targetDrops: [
      "Lufenian Rod & Seydlitz Shield",
      "Lufenian Robes & Cap",
      "Hero's Seal & Dragonfly Orb"
    ],
    strategy: "Magical artillery and EX Revenge specialist. Combines Seydlitz's massive defensive stats with Hero's Seal and First to Victory for punishing counter-attacks."
  },
  {
    id: "lyokoninja",
    name: "LyokoNinja",
    category: "competitive",
    ghost: "Lightning",
    level: 100,
    rank: "SSS",
    behavior: "Vicious",
    rules: "Off",
    version: "USA",
    date: "02/08/12",
    equipment: [
      "Odin Blade",
      "Lufenian Shield",
      "Lufenian Cap",
      "Lufenian Chestplate"
    ],
    accessories: [
      "Muscle Belt",
      "Sniper Eye",
      "A Comrade's Vow",
      "Large Gap in HP",
      "BRV >= Base Value (Self)",
      "Empty EX Gauge (Self)",
      "After Summon (Self)",
      "Pre-EX Mode",
      "Pre-EX Revenge",
      "Side By Side"
    ],
    targetDrops: [
      "Odin Blade (Lightning Exclusive)",
      "Lufenian Shield & Chestplate",
      "Side By Side",
      "Sniper Eye"
    ],
    strategy: "Side By Side Assist build that turns Lightning into an Assist-summoning storm. Rapid multi-hit attacks build 2 full Assist gauges in seconds."
  }
];
