export interface CharacterData {
  id: string;
  name: string;
  title: string;
  origin: string;
  originShort: string;
  alignment: 'Cosmos' | 'Chaos' | 'New' | 'Assist';
  type: string;
  image: string;
  description: string;
  href?: string;
}

export const charactersData: CharacterData[] = [
  // 9 New Playable Fighters + 1 Assist
  {
    id: "lightning",
    name: "Lightning",
    title: "The Rose of Mayhem",
    origin: "Final Fantasy XIII",
    originShort: "FF XIII",
    alignment: "New",
    type: "Paradigm Shift / All-Rounder",
    image: "dissidia_012_characters/17_Lightning.png",
    description: "Versatile soldier capable of switching roles (Commando, Ravager, Medic) dynamically in battle to control range and restore Bravery."
  },
  {
    id: "vaan",
    name: "Vaan",
    title: "Skyward Youth",
    origin: "Final Fantasy XII",
    originShort: "FF XII",
    alignment: "New",
    type: "Switch Weapon / Tactical Trapper",
    image: "dissidia_012_characters/16_Vaan.png",
    description: "Switches between 8 weapon types dynamically. Powerful switch-cancel loops and trap-heavy zoning capabilities."
  },
  {
    id: "laguna",
    name: "Laguna",
    title: "The Tactless Marksman",
    origin: "Final Fantasy VIII",
    originShort: "FF VIII",
    alignment: "New",
    type: "Heavy Gunner / Long-Range Zoning",
    image: "dissidia_012_characters/11_Laguna_Loire.png",
    description: "Suppressive firearm master armed with Machine Gun, Shotgun, Homing Bazooka, and Ragnarok Satellite Laser."
  },
  {
    id: "yuna",
    name: "Yuna",
    title: "High Summoner of Spira",
    origin: "Final Fantasy X",
    originShort: "FF X",
    alignment: "New",
    type: "Summoner / Mid-Long Spells",
    image: "dissidia_012_characters/14_Yuna.png",
    description: "Commands Valefor, Ifrit, Shiva, Ixion, and Bahamut to strike foes from afar with unblockable pressure and multi-hit HP attacks."
  },
  {
    id: "kain",
    name: "Kain",
    title: "Dragoon of the Moon",
    origin: "Final Fantasy IV",
    originShort: "FF IV",
    alignment: "New",
    type: "High Mobility / Aerial Dragoon",
    image: "dissidia_012_characters/05_Kain_Highwind.png",
    description: "High-flying dragoon with multi-hit spear assaults, directional combo launches, and the legendary invulnerable Jump."
  },
  {
    id: "tifa",
    name: "Tifa",
    title: "Feint Brawler",
    origin: "Final Fantasy VII",
    originShort: "FF VII",
    alignment: "New",
    type: "Rushdown / Feint Specialist",
    image: "dissidia_012_characters/09_Tifa_Lockhart.png",
    description: "High-speed martial artist whose feints evade incoming attacks mid-combo and confuse defensive opponents."
  },
  {
    id: "prishe",
    name: "Prishe",
    title: "The Inscrutable Youth",
    origin: "Final Fantasy XI",
    originShort: "FF XI",
    alignment: "New",
    type: "Combo Customizer / Skillchain Master",
    image: "dissidia_012_characters/29_Prishe.png",
    description: "Chains varied martial arts and weapon skills into explosive elemental Skillchains for massive bonus BRV bursts."
  },
  {
    id: "gilgamesh",
    name: "Gilgamesh",
    title: "Sword Collector",
    origin: "Final Fantasy V",
    originShort: "FF V",
    alignment: "New",
    type: "Random Weapon / Heavy Melee",
    image: "dissidia_012_characters/30_Gilgamesh.png",
    description: "Draws random legendary blades (Excalibur, Masamune, Zantetsuken, Excalipoor) with devastating Death Claw hitboxes."
  },
  {
    id: "feral-chaos",
    name: "Feral Chaos",
    title: "God of Absolute Discord",
    origin: "Dissidia 012 [duodecim]",
    originShort: "Dissidia 012",
    alignment: "New",
    type: "Colossal Boss / Unblockable Power",
    image: "dissidia_012_characters/31_Feral_Chaos.png",
    description: "Untamed manifestation of Chaos with colossal area-of-effect strikes, relentless speed, and stagger on block."
  },
  {
    id: "aerith",
    name: "Aerith",
    title: "The Last Cetra",
    origin: "Final Fantasy VII",
    originShort: "FF VII",
    alignment: "Assist",
    type: "Dedicated Assist / Support White Mage",
    image: "dissidia_012_characters/32_Aerith.png",
    description: "Provides unrivaled assist utility with Seal Evil stasis, Bravery Cure, Planet Protector invincibility, and Holy."
  },

  // 11 Returning Cosmos
  {
    id: "warrior-of-light",
    name: "Warrior of Light",
    title: "Champion of Harmony",
    origin: "Final Fantasy I",
    originShort: "FF I",
    alignment: "Cosmos",
    type: "Shield Fighter / Aerial Dominance",
    image: "dissidia_012_characters/01_Warrior_of_Light.webp",
    description: "Excels at aerial guard counters, shield throws, and punishing dashes with Radiant Sword and Bitter End."
  },
  {
    id: "firion",
    name: "Firion",
    title: "Master of Weapons",
    origin: "Final Fantasy II",
    originShort: "FF II",
    alignment: "Cosmos",
    type: "Ground Specialist / Weapon Links",
    image: "dissidia_012_characters/02_Firion.png",
    description: "Commands sword, lance, and bow ground combos with versatile branch links and Lord of Arms sniping."
  },
  {
    id: "onion-knight",
    name: "Onion Knight",
    title: "Speedy Polymath",
    origin: "Final Fantasy III",
    originShort: "FF III",
    alignment: "Cosmos",
    type: "High Speed / Physical-Magic Switch",
    image: "dissidia_012_characters/03_Onion_Knight.png",
    description: "Fastest ground speed in the game with branching Ninja physical combos and Sage elemental barrage links."
  },
  {
    id: "cecil",
    name: "Cecil",
    title: "Split Soul of the Moon",
    origin: "Final Fantasy IV",
    originShort: "FF IV",
    alignment: "Cosmos",
    type: "Dark Knight / Paladin Switcher",
    image: "dissidia_012_characters/04_Cecil_Harvey.png",
    description: "Switches dynamically between heavy Dark Knight ground power and swift Paladin aerial tracking attacks."
  },
  {
    id: "bartz",
    name: "Bartz",
    title: "The Mimic Traveler",
    origin: "Final Fantasy V",
    originShort: "FF V",
    alignment: "Cosmos",
    type: "Skill Mimic / Link Master",
    image: "dissidia_012_characters/06_Bartz_Klauser.png",
    description: "Wields signature moves of all Cosmos companions. Features powerful Holy to Flare spell links."
  },
  {
    id: "terra",
    name: "Terra",
    title: "Esper Maiden",
    origin: "Final Fantasy VI",
    originShort: "FF VI",
    alignment: "Cosmos",
    type: "Charge Magic / Zoning Nuker",
    image: "dissidia_012_characters/07_Terra_Branford.png",
    description: "Long-range spellcaster with charge-level Meltdown, Graviga pressure, and high mobility Trance in EX Mode."
  },
  {
    id: "cloud",
    name: "Cloud",
    title: "Ex-SOLDIER Buster",
    origin: "Final Fantasy VII",
    originShort: "FF VII",
    alignment: "Cosmos",
    type: "Heavy Wall Rush / High Crits",
    image: "dissidia_012_characters/08_Cloud_Strife.png",
    description: "Crushing heavy blade strikes with guaranteed wall rush conversions, Slash Blow, and Omnislash EX Burst."
  },
  {
    id: "squall",
    name: "Squall",
    title: "Gunblade Duelist",
    origin: "Final Fantasy VIII",
    originShort: "FF VIII",
    alignment: "Cosmos",
    type: "Multi-Hit Burst / Fast Rushdown",
    image: "dissidia_012_characters/10_Squall_Leonhart.png",
    description: "Rapid gunblade trigger combos (Solid Barrel, Beat Fang, Rough Divide) with massive multi-hit Bravery output."
  },
  {
    id: "zidane",
    name: "Zidane",
    title: "Aerial Acrobat",
    origin: "Final Fantasy IX",
    originShort: "FF IX",
    alignment: "Cosmos",
    type: "Aerial Mobility / Dodge Attacks",
    image: "dissidia_012_characters/12_Zidane_Tribal.png",
    description: "Supreme air maneuverability with dual-daggers, aerial jump cancels, Free Energy, and Grand Lethal."
  },
  {
    id: "tidus",
    name: "Tidus",
    title: "Dodge Striker",
    origin: "Final Fantasy X",
    originShort: "FF X",
    alignment: "Cosmos",
    type: "Evasive Attacker / Swift Counter",
    image: "dissidia_012_characters/13_Tidus.png",
    description: "Built-in dodge frames on Hop Step, Dart & Weave, and Cut & Run allow seamless counter-attacks while evading."
  },
  {
    id: "shantotto",
    name: "Shantotto",
    title: "The Rhyming Sorceress",
    origin: "Final Fantasy XI",
    originShort: "FF XI",
    alignment: "Cosmos",
    type: "BRV Tier Scaling / Mana Sniping",
    image: "dissidia_012_characters/15_Shantotto.png",
    description: "Magic spells scale up in tier (Tier 1 to Tier 3) based on current Bravery value. Unrivaled magic pressure."
  },

  // 11 Returning Chaos
  {
    id: "garland",
    name: "Garland",
    title: "Armor of the Loop",
    origin: "Final Fantasy I",
    originShort: "FF I",
    alignment: "Chaos",
    type: "Heavy Blade / Super Armor",
    image: "dissidia_012_characters/18_Garland.png",
    description: "Devastating greatsword attacks with innate poise and unblockable smash properties (Highfall, Round Edge)."
  },
  {
    id: "the-emperor",
    name: "The Emperor",
    title: "Arrogant Overlord",
    origin: "Final Fantasy II",
    originShort: "FF II",
    alignment: "Chaos",
    type: "Trap Architect / Spatial Lock",
    image: "dissidia_012_characters/19_The_Emperor.png",
    description: "Controls the entire arena with Mine traps, Bomb traps, Light Crests, and tracking Starfall cataclysms."
  },
  {
    id: "cloud-of-darkness",
    name: "Cloud of Darkness",
    title: "Wrath of the Void",
    origin: "Final Fantasy III",
    originShort: "FF III",
    alignment: "Chaos",
    type: "Tentacle Strikes / Particle Beams",
    image: "dissidia_012_characters/20_Cloud_of_Darkness.png",
    description: "Zoning powerhouse with 0-frame Feint Particle Beam counters and wide-arcing tentacle multi-hits."
  },
  {
    id: "golbez",
    name: "Golbez",
    title: "Dark Shadow Mage",
    origin: "Final Fantasy IV",
    originShort: "FF IV",
    alignment: "Chaos",
    type: "Hybrid Melee-Magic / Spatial Burst",
    image: "dissidia_012_characters/21_Golbez.png",
    description: "Surrounds foes with dual physical and magical beams, Nightglow area eruptions, and Genesis Rock shields."
  },
  {
    id: "exdeath",
    name: "Exdeath",
    title: "Warlock of the Void",
    origin: "Final Fantasy V",
    originShort: "FF V",
    alignment: "Chaos",
    type: "Omni-Block / Counter Specialist",
    image: "dissidia_012_characters/22_Exdeath.png",
    description: "High Block and Omni Block nullify all opponent attacks, instantly retaliating with Delta Attack or Grand Cross."
  },
  {
    id: "kefka",
    name: "Kefka",
    title: "Mad Court Mage",
    origin: "Final Fantasy VI",
    originShort: "FF VI",
    alignment: "Chaos",
    type: "Erratic Magic / Unpredictable",
    image: "dissidia_012_characters/23_Kefka_Palazzo.png",
    description: "Bizarre magic trajectories (Scatter-Spray Blizzaga, Waggle-Wobbly Firaga) that confuse enemy dodge timing."
  },
  {
    id: "sephiroth",
    name: "Sephiroth",
    title: "The One-Winged Angel",
    origin: "Final Fantasy VII",
    originShort: "FF VII",
    alignment: "Chaos",
    type: "Long Blade / Multi-Slash Pressure",
    image: "dissidia_012_characters/24_Sephiroth.png",
    description: "Tremendous melee reach with Masamune, rapid Shadow Flare projectile setups, and fast Octaslash cancels."
  },
  {
    id: "ultimecia",
    name: "Ultimecia",
    title: "Sorceress of Time",
    origin: "Final Fantasy VIII",
    originShort: "FF VIII",
    alignment: "Chaos",
    type: "Arrow-Blade Stream / Time Control",
    image: "dissidia_012_characters/25_Ultimecia.png",
    description: "Infinite sustained projectile streams (Knight's Axe/Sword/Arrow) with charge-delay Shockwave Pulsar."
  },
  {
    id: "kuja",
    name: "Kuja",
    title: "Grim Reaper of the Sky",
    origin: "Final Fantasy IX",
    originShort: "FF IX",
    alignment: "Chaos",
    type: "Glide Striker / Multi-Ring Orbs",
    image: "dissidia_012_characters/26_Kuja.png",
    description: "Unmatched aerial glide speed with tracking ring flurries, Flare Star, and explosive Ultima finishes."
  },
  {
    id: "jecht",
    name: "Jecht",
    title: "Blitzball Legend",
    origin: "Final Fantasy X",
    originShort: "FF X",
    alignment: "Chaos",
    type: "Rhythm Cancel / Unblockable Rush",
    image: "dissidia_012_characters/27_Jecht.png",
    description: "Manual timing inputs on Jecht Stream and Jecht Block create devastating unblockable combo loops."
  },
  {
    id: "gabranth",
    name: "Gabranth",
    title: "Judge Magister",
    origin: "Final Fantasy XII",
    originShort: "FF XII",
    alignment: "Chaos",
    type: "EX Gauge Charge / Overpowered Boss",
    image: "dissidia_012_characters/28_Gabranth.png",
    description: "Charges EX Gauge at will. Transforms into an overwhelmingly powerful juggernaut in EX Mode with Innocence."
  }
];
