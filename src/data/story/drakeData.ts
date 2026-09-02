/**
 * Master Metadata & Verbatim Content for Drake's Walkthrough Hub & Gameplay Basics
 * Source: https://finalfantasy.fandom.com/wiki/Walkthrough:Dissidia_012_Final_Fantasy/Drake
 */

export interface DrakeGameplayTopic {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  summary: string;
  content: string;
  controls?: {
    button?: string;
    label: string;
    desc: string;
  }[];
}

export interface DrakeFormatAssumption {
  id: string;
  title: string;
  icon: string;
  rule: string;
  rationale: string;
}

export interface DrakeCampaignMeta {
  code: string;
  campaignSlug: string;
  title: string;
  subtitle: string;
  partsRange: string;
  totalChapters: number;
  badge: string;
  badgeClass: string;
  borderColor: string;
  href: string;
  desc: string;
  featuredHeroes: string[];
}

export interface DrakeBiblioEntry {
  title: string;
  game: string;
  type: string;
  notes?: string;
}

export const drakeIntro = {
  author: "Drake Clawfang",
  title: "Drake's Walkthrough",
  sourceUrl: "https://finalfantasy.fandom.com/wiki/Walkthrough:Dissidia_012_Final_Fantasy/Drake",
  tagline: "The definitive step-by-step master guide spanning all 3 Story Cycles and 20 Reports.",
  openingBanter: "Welcome kiddies, it's that time again! Yes, I, Drake Clawfang, am writing another walkthrough! Hold your applause, please....you could at least pretend to applaud a little."
};

export const drakeGameplayTopics: DrakeGameplayTopic[] = [
  {
    id: "bravery-hp",
    title: "Bravery and HP",
    badge: "Combat Core",
    badgeClass: "badge-brv",
    summary: "The fundamental two-tier combat system governing damage output and victory conditions.",
    content: "Bravery and HP - the white number above your HP gauge is your Bravery, when you use a Bravery attack you damage an opponent's Bravery and increase your own. When you land an HP attack you damage the opponent's HP equivalent to your Bravery, but your Bravery falls to 0 and slowly regenerates back to its base value. If Bravery is reduced below 0, the character enters Break status, where their Bravery attacks do no damage (but their own Bravery is still increases) and an HP attack will do 0 damage. The opponent that broke them receives the stage Bravery pool displayed between the two HP gauges at the bottom of the screen. After getting Broken, Bravery will be shown in transparent numbers and regenerates back to its base value, and Break is cured.",
    controls: [
      { button: "Circle", label: "Bravery Attack", desc: "Damages opponent's Bravery pool and increases your current Bravery." },
      { button: "Square", label: "HP Attack", desc: "Inflicts HP damage equal to your current Bravery, resetting your Bravery to 0." }
    ]
  },
  {
    id: "ex-mode",
    title: "EX Mode & EX Burst",
    badge: "Awakening",
    badgeClass: "badge-cosmos",
    summary: "High-octane transformation granting character-specific traits, critical boosts, and cinematic EX Bursts.",
    content: "EX Mode - as you land hits, glowing blue-white orbs called EX Force appear in the air, and occasionally bell-like EX Cores appear and absorb all the EX Force in the arena. Gathering EX Force and Cores will fill the purple gauge by your character's portrait. When filled it turns orange and you can enter EX Mode by pressing R and [Square]. While in EX Mode you get Regen status and deal more critical hits, and get a special ability for each character. You can perform an EX Burst when you land an HP attack by pressing [Square]. The EX Gauge depletes while in EX Mode and can still be refilled, and when empty EX Mode ends.",
    controls: [
      { button: "R + Square", label: "Activate EX Mode", desc: "Requires full orange EX gauge. Grants Regen, higher Critical rates, and unique character perks." },
      { button: "Square (On HP Hit)", label: "Trigger EX Burst", desc: "Initiates the ultimate cinematic quick-time event attack during EX Mode." }
    ]
  },
  {
    id: "assists",
    title: "Assist System",
    badge: "Synergy",
    badgeClass: "badge-assist",
    summary: "Tag-team support characters that break opponent momentum and extend combo strings.",
    content: "Assists - as you attack, your Assist gauge below your HP bar will fill, and will turn orange when filled half or full. Press [Circle] and L when you have half a charge to all your Assist character to use a Bravery attack at the cost of half the bar. When the bar is full, press [Square] and L to call them to perform an HP attack. This guide only uses Bravery Assists as I find HP Assists unneeded and a waste of a charge. Don't let your Assist get attacked though, or you'll get Assist Locked and be unable to charge or use Assists until it wears off.",
    controls: [
      { button: "L + Circle", label: "BRV Assist (1 Bar)", desc: "Calls ally to execute a Bravery strike, launching or Wall Rushing the foe for follow-up attacks." },
      { button: "L + Square", label: "HP Assist (2 Bars)", desc: "Calls ally for a direct HP strike (not recommended by Drake to preserve meter efficiency)." },
      { label: "Assist Lock Caution", desc: "If your assist is intercepted during execution, your assist meter is locked for a duration." }
    ]
  },
  {
    id: "ap-cp",
    title: "AP, CP & Skill Mastery",
    badge: "Progression",
    badgeClass: "badge-crystal",
    summary: "Capacity management, ability mastery, and targeting start-of-fight AP chances.",
    content: "AP and CP - All skills cost CP to equip, and you gain more CP as you level up. As you earn AP you will master skills, reducing their CP costs. To gain AP quicker, watch at the start of each fight for the AP chance. It may say something like \"First [Square] attack over 500: +2\". This means the first character to land an HP attack of 500 Bravery or more, without getting struck prior will get 2 AP. Thus avoiding attacks is helpful to master attacks quickly since it lets you get the AP chances.",
    controls: [
      { label: "CP Capacity", desc: "Equip budget that scales as character level increases." },
      { label: "AP Mastery", desc: "Halves CP cost once an ability reaches master status." },
      { label: "AP Chances", desc: "Bonus condition displayed before fight; avoiding damage ensures high mastery speed." }
    ]
  }
];

export const drakeFormatAssumptions: DrakeFormatAssumption[] = [
  {
    id: "experience-drops",
    title: "Personal Playthrough & Experience",
    icon: "🎲",
    rule: "Authentic Playthrough Basis",
    rationale: "This walkthrough is based on my experiences, if I get lucky and get a random drop of something awesome or some such, well, that's how it went for me."
  },
  {
    id: "story-focus",
    title: "Storyline Mastery Focus",
    icon: "📜",
    rule: "Campaign & Gateway Specialization",
    rationale: "I am by no means a master of all characters, and would likely get my ass kicked in PvP matches, but I'm great at the game storyline, which is what's important here."
  },
  {
    id: "template-reuse",
    title: "Proven Guide Structure",
    icon: "📐",
    rule: "Direct Dissidia Wiki Templates",
    rationale: "I'm going to be shamelessly copying templates from our Dissidia storyline pages. Hey, I added most of them in the first place, so why not?"
  },
  {
    id: "no-data-import",
    title: "No Original Dissidia Save Import",
    icon: "🛡️",
    rule: "Zero High-Level Grinding Assumptions",
    rationale: "I will assume you do not import your data from the original Dissidia. Why? Because it makes the first storyline easier and makes the second and third ones a total joke. For similar reasons I'm assuming you do no level grinding outside the storylines unless I mention such. If you have Prologus data to import, I'll address that quickly since it has a slight impact."
  },
  {
    id: "no-clock-exploit",
    title: "No PSP Clock Manipulation",
    icon: "⏱️",
    rule: "Standard Fair Calendar Play",
    rationale: "A common exploit for this game is to constantly change the PSP's clock so you're always playing on your Bonus Day for the boosts. I will not be doing this."
  }
];

export const drakeCampaigns: DrakeCampaignMeta[] = [
  {
    code: "012",
    campaignSlug: "012-treachery",
    title: "012: Treachery of the Gods",
    subtitle: "The 12th Cycle Prequel Campaign",
    partsRange: "Parts 1 – 8 (Prologue to Epilogue)",
    totalChapters: 8,
    badge: "12th Cycle Prequel",
    badgeClass: "badge-cosmos",
    borderColor: "var(--color-cosmos)",
    href: "/story/drake/012-treachery/",
    desc: "Follow Lightning, Vaan, Laguna, Yuna, Kain, and Tifa through the 12th cycle. Detailed character reviews, overworld step-by-step chest routes, and gateway chessboard maps.",
    featuredHeroes: ["Lightning", "Vaan", "Laguna", "Yuna", "Kain", "Tifa"]
  },
  {
    code: "013",
    campaignSlug: "013-light",
    title: "013: Light to All",
    subtitle: "The 13th Cycle Remastered Campaign",
    partsRange: "Parts 9 – 21 (Destiny Odysseys I-X & Shade Impulse)",
    totalChapters: 13,
    badge: "13th Cycle Classic",
    badgeClass: "badge-crystal",
    borderColor: "var(--color-lufenia)",
    href: "/story/drake/013-light/",
    desc: "All 10 original Destiny Odysseys for Cloud, Terra, Squall, Zidane, Cecil, Bartz, Onion Knight, Firion, Tidus, and Warrior of Light, followed by the 4-part Shade Impulse and Chaos gauntlet.",
    featuredHeroes: ["Warrior of Light", "Firion", "Onion Knight", "Cecil", "Bartz", "Terra", "Cloud", "Squall", "Zidane", "Tidus"]
  },
  {
    code: "000",
    campaignSlug: "000-creator",
    title: "000: Confessions of the Creator",
    subtitle: "Open World Endgame Gauntlet",
    partsRange: "Parts 22 – 26 (Southern Areas to Feral Chaos)",
    totalChapters: 5,
    badge: "Open World Endgame",
    badgeClass: "badge-chaos",
    borderColor: "var(--color-chaos)",
    href: "/story/drake/000-creator/",
    desc: "Open-world exploration of World B. Megadungeons (Dragon King's Gateway, The Forsaken Lands), secret Moogle merchants, unlocked teleport gates, and Level 130 Feral Chaos.",
    featuredHeroes: ["Party Formation", "Shantotto", "Gabranth", "Feral Chaos"]
  },
  {
    code: "REP",
    campaignSlug: "reports",
    title: "The Reports",
    subtitle: "Archival Lore & Hidden Battles",
    partsRange: "Part 27 (Reports 1 – 20)",
    totalChapters: 1,
    badge: "Archival Lore",
    badgeClass: "badge-new",
    borderColor: "var(--color-brv)",
    href: "/story/drake/reports/",
    desc: "Detailed unlock requirements, transcripts, battle setups, and author notes for all 20 Dissidia 012 Reports.",
    featuredHeroes: ["Prishe", "Gilgamesh", "Feral Chaos", "Cosmos", "Chaos"]
  }
];

export const drakeBibliography: DrakeBiblioEntry[] = [
  { title: "Final Fantasy IV", game: "FFIV", type: "Full Walkthrough" },
  { title: "Final Fantasy IV: The After Years", game: "FFIV: TAY", type: "Full Walkthrough" },
  { title: "Final Fantasy V Job FAQ", game: "FFV", type: "Comprehensive Job Guide" },
  { title: "Final Fantasy VI", game: "FFVI", type: "Full Walkthrough" },
  { title: "Final Fantasy VII", game: "FFVII", type: "Full Walkthrough" },
  { title: "Crisis Core: Final Fantasy VII", game: "CC: FFVII", type: "Full Walkthrough" },
  { title: "Final Fantasy VIII", game: "FFVIII", type: "Full Walkthrough" },
  { title: "Final Fantasy IX", game: "FFIX", type: "Full Walkthrough" },
  { title: "Final Fantasy X", game: "FFX", type: "Full Walkthrough" },
  { title: "Final Fantasy Mystic Quest", game: "FFMQ", type: "Full Walkthrough" },
  { title: "Final Fantasy XII License Board FAQ", game: "FFXII", type: "License Board Guide" },
  { title: "Dissidia 012 Final Fantasy", game: "Dissidia 012", type: "Master Story & Reports Walkthrough" }
];
