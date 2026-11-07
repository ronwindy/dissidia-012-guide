// Bolds curated game terms in paragraph/list text of src/data/pages/*.html (idempotent).
// Usage: node scripts/bold-terms.mjs [page-id ...]   (default: every page except part-1)
import fs from 'node:fs';
const dir = 'src/data/pages/';
const terms = `
Warrior of Light|Warriors of Chaos|Warrior of Antiquity|Lady of Antiquity|Onion Knight|Cloud of Darkness|Feral Chaos|Ultima Weapon|Giant of Babil|Magus Sisters|Iron Giant|Demon Wall|Land Worm|Maser Eye
Cosmos|Chaos|Cloud|Terra|Zidane|Firion|Squall|Bartz|Kain|Tidus|Emperor|Golbez|Jecht|Cecil|Kefka|Garland|Sephiroth|Tifa|Lightning|Exdeath|Kuja|Vaan|Shantotto|Prishe|Laguna|Yuna|Gabranth|Ultimecia|Gilgamesh|Ultros|Warrior|Bahamut|Omega|Tiamat|Hecatoncheir|Leviathan|Odin|Behemoth|Kraken|Typhon|Ifrit|Shiva|Ramuh|Alexander|Asura|Atomos|Carbuncle|Phoenix|Brynhildr|Deathgaze|Marilith|Cagnazzo|Scarmiglione|Calcabrina|Lich|Zalera|Shinryu|Mandragora|Malboro|Pupu|Cactuar|Chocobo|Moogle|Moogles|Manikin|Manikins
False Stalwart|False Hero|Phantasmal Harlequin|Phantasmal Girl|Counterfeit Wraith|Counterfeit Youth|Idle Sky Pirates|Idle Sky Pirate|Sky Pirates|Sky Pirate|Fallacious Tree|Fallacious Wanderer|Capricious Reaper|Capricious Thief|Transient Witch|Transient Gunner|Transient Lion|Delusory Dragoon|Delusory Knight|Delusory Warlock|Imitation Despot|Imitation Liegeman|Imaginary Soldier|Imaginary Champion|Imaginary Brawler|Ephemeral Phantom|Ephemeral Summoner|Ephemeral Vision
EX Mode|EX Gauge|EX Gauges|EX Burst|EX Bursts|EX Force|EX Cores|EX Core|EX Charge|EX Revenge|Pre-EX Mode|Pre-EX Revenge|BRV Charge|BRV Zero|Initial BRV Boost|Initial BRV|Assist Charge|Assist Change|Assist Gauge|Empty Assist Gauge|Assist Locked|Bravery|Break|KP Chance|KP Gambler|KP Gamblers|KP Bonuses|KP Bonus|KP Switch|KP|AP|CP|Multichains|Multichain|Jump Chains|Jump Chain|Cross Chain|Round Chains|Round Chain|Straight Chains|Straight Chain|Chain Skill|Level Gap|Last Chance|Hyperdrive|Bonus Day
Hyper Rings|Hyper Ring|Cursed Rings|Cursed Ring|Power Ring|Guard Ring|Diamond Ring|Ring Holy|Muscle Belts|Muscle Belt|Pearl Necklace|Pink Tails|Pink Tail|Guardian Bangle|Mythril Bangle|Mythril Vest|Mythril Armor|Silken Shirt|White Cape|Zephyr Cloak|Rosetta Stones|Rosetta Stone|Phoenix Down|Strange Battle Piece|Expert Battle Piece|Black Materia|Genesis Rock|Valor Resin|Arcane Resin|Iifa Leaf|Iifa Dew|Midgar Flower|Magic Pot|Heart's Ease|Red Drop|Blue Drop|Cyan Drop|Attractorb|Dragonfly Orb|Elixir|Potion|Earrings|Earring
Orbs of the Dead|Land of Discord|Kefka's Tower|Ultimecia's Castle|Crescent Lake|Planet's Core|Order's Sanctuary|Chaos Shrine|Frozen Continent|World of Darkness|Phantom Train|Pandaemonium|Cornelia|Prologus|Dissidia 012|PP Catalog|Crystals|Crystal
Ragnarok Blade|Heavenly Strike|Fleeting Flash|Wall Rush|Crushing Blow|Snatch Shot|Snatch Blow|Round Edge|Dark Flame|Flare Star|Reverse Polarity|Burst Energy|Meteor Strike|Energy Rain|Saint's Fall|Havoc Wing|Delta Attack|Rumble Rush|Sword Dance|Chain Cast|Shift Break|Great Attractor|Omni Block|Float System|Gravity System|Scoop Art|Hop Step|Rising Fang|Fervent Blow|Valiant Blow|Slashing Blow|Rising Buckler|Lance Barrage|Hell's Gate|Gravity Force|Homing Bazooka|Ricochet Shot|Shadow Flare|Shadow Lance|Rising Wave|Seraphic Star|Delusory
Meteor Crusher|Sonic Buster|Sonic Break|Satellite Laser|Satellite Beam|Fusillade Particle Beam|Anti-Air Particle Beam|Particle Beam|Shield Strike|Heaven's Light|Crashing Dive|Jecht Rush|Grand Lethal|Beat Fang|Upper Blues|Protect Stud|Solid Ascension|Thunder Barret|Cross-Slash|Double Trouble|Radiant Wings|Gravity Ball|Force Symphony|Lickity-Split Thundaga|Scatter-Spray Blizzaga|Blizzard Combo|Holy Combo|Lance Combo|Moonsault Kick|Burning Arrow|Heel Crush|Rough Divide|Fated Circle|Free Energy|Hazard Raid|Tentacle of Spite|Tentacle of Suffering|Blade Torrent|Missile Barrage|Mystic Flurry|Vacuum Wave|Black Hole|Meteor Crusher|Stellar Circle|Ventus Ire|Empyreal Paradox|Goblin Punch|Brute Force|Spiral Blow|Spiral Cut|Elbow Smash|Soul Eater|Lightning Strike|Dragon's Fang|Strike Energy|Razor Gale|Windburst|Storm Impulse|Meo Twister|Energy Ray|Thunder Crest|Light Crest|Thor's Hammer|Shield of Light|Gold Angel|Turn Guard|Swift Attack|Rush Impact|Round Robin|Solid Barrel|Dayflash|Nightglow|Nightfall|Starfall|Meteorain|Godspeed|Climhazzard|Octaslash|Almagest|Excalibur|Heavenly
Blizzaga|Blizzara|Blizzard|Thundaga|Thundara|Thunder|Firaga|Fire|Aerora|Aerospark|Flare|Cure|Watera|Ruin|Smite|Ultima|Meteor|Holy|Tornado|Cyclone|Hurricane|Earthquake|Flood|Comet|Hellfire|Inferno|Vortex|Torrent|Tempest|Oblivion|Ascension|Sunrise|Transience|Meltdown|Trine|Capella|Altair
Commando|Ravager|Medic|Paradigms|Paradigm|Dragoon|Summoner|Summon|KP Chance|Stigma of Chaos|Soul of Destruction|Dragon's Fang|Booster|Boosters
`.split(/[\n|]/).map((s) => s.trim()).filter(Boolean);
// Level N / Report N patterns handled separately.
const uniq = [...new Set(terms)].sort((a, b) => b.length - a.length);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, (c) => '\\' + c);
const re = new RegExp(String.raw`(?<![\w-])(?:${uniq.map(esc).join('|')}|Levels? \d+(?:-\d+)?|Reports? \d+)(?![\w])`, 'g');
const SKIP = new Set(['h1','h2','h3','h4','h5','h6','a','em','strong','table','figcaption','script','style']);

function boldHtml(html) {
  let out = '', depth = 0, skipStack = [];
  const parts = html.split(/(<[^>]+>)/);
  for (const p of parts) {
    if (p.startsWith('<')) {
      const m = p.match(/^<(\/?)([a-z0-9]+)/i);
      if (m && SKIP.has(m[2].toLowerCase()) && !p.endsWith('/>')) {
        if (m[1]) skipStack.pop(); else skipStack.push(m[2]);
      }
      out += p;
    } else if (skipStack.length === 0 && /\S/.test(p)) out += p.replace(re, (t) => `<strong>${t}</strong>`);
    else out += p;
  }
  return out;
}

const ids = process.argv.slice(2);
const files = (ids.length ? ids.map((i) => `${i}.html`) : fs.readdirSync(dir).filter((f) => f !== 'part-1.html'));
for (const f of files) {
  const src = fs.readFileSync(dir + f, 'utf8');
  const next = boldHtml(src);
  if (next !== src) fs.writeFileSync(dir + f, next);
  console.log(f, (next.match(/<strong>/g) || []).length);
}
