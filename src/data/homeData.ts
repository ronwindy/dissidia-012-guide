import type { IconName } from "../components/common/icons";

export interface GameInfoItem {
  label: string;
  value: string;
  sub: string;
  icon: IconName;
}

export interface PortalItem {
  title: string;
  badge: string;
  badgeClass: string;
  desc: string;
  href: string;
  cta: string;
  icon: IconName;
}

export const gameInfo: GameInfoItem[] = [
  {
    label: "Release Date",
    value: "March 2011",
    sub: "JP: Mar 3 · NA: Mar 22 · EU: Mar 25",
    icon: "calendar",
  },
  {
    label: "Platform",
    value: "PlayStation Portable",
    sub: "PSP (UMD / PSN) · PS Vita Compatible",
    icon: "gamepad",
  },
  {
    label: "Genre",
    value: "Action RPG / Fighter",
    sub: "3D Arena Brawler · Custom Quests",
    icon: "swords",
  },
  {
    label: "Developer & Publisher",
    value: "Square Enix",
    sub: "1st Production Department",
    icon: "building",
  },
  {
    label: "Director & Producer",
    value: "Mitsunori Takahashi",
    sub: "Producer: Ichiro Hazama",
    icon: "user",
  },
  {
    label: "Creative & Music",
    value: "Tetsuya Nomura",
    sub: "Composer: Takeharu Ishimoto",
    icon: "star",
  },
];

export function getPortals(baseUrl: string): PortalItem[] {
  return [
    {
      title: "Character Database & Movelists",
      badge: "32 Fighters",
      badgeClass: "badge-new",
      desc: "Complete move properties, frame cancels, wall rush triggers, EX Bursts, and assist synergy for all 32 playable heroes and villains.",
      href: `${baseUrl}characters/`,
      cta: "Explore Roster & Moves",
      icon: "swords",
    },
    {
      title: "Combat Mechanics Master Guide",
      badge: "System Deep-Dive",
      badgeClass: "badge-cosmos",
      desc: "Complete breakdown of Bravery & HP formulas, 012 Assist dynamics, EX Revenge time-dilation, collision priorities, frame cancels, and booster builds.",
      href: `${baseUrl}mechanics/`,
      cta: "Master Combat Mechanics",
      icon: "zap",
    },
    {
      title: "Arena & Stage Master Guide",
      badge: "19+ Arenas",
      badgeClass: "badge-crystal",
      desc: "Complete 3D geometry breakdown, standard vs. Omega hazards, destructible objects, Stage Battlegen drops, and character synergy ratings for all 19 stages.",
      href: `${baseUrl}arenas/`,
      cta: "Explore Battle Arenas",
      icon: "globe",
    },
    {
      title: "012: Treachery of the Gods",
      badge: "Main Story",
      badgeClass: "badge-cosmos",
      desc: "Full walkthrough for the 12th cycle: Prologue to Chapter 7, Epilogue, all gateway floors, enemy parties, KP conditions, and treasure chests.",
      href: `${baseUrl}story/012-treachery/`,
      cta: "Start 012 Walkthrough",
      icon: "flame",
    },
    {
      title: "013: Light to All",
      badge: "Classic Cycle",
      badgeClass: "badge-crystal",
      desc: "Full remastered 13th cycle walkthrough covering Chapters 1 through 10, Destiny Odysseys, terms, and final boss showdowns.",
      href: `${baseUrl}story/013-light/`,
      cta: "Start 013 Walkthrough",
      icon: "sparkles",
    },
    {
      title: "000: Confessions of the Creator",
      badge: "Post-Game / Open World",
      badgeClass: "badge-chaos",
      desc: "Open-world navigation, Dragon King's Gateway, The Forsaken Lands, Chasm of the Rotting Land, Moogle shops, and Feral Chaos gauntlets.",
      href: `${baseUrl}story/000-creator/`,
      cta: "Explore 000 Gateways",
      icon: "compass",
    },
    {
      title: "Crafting, Sets & Grinding Hub",
      badge: "Equipment & KP",
      badgeClass: "badge-cosmos",
      desc: "Step-by-step acquisition for Lufenian, Genji, Machine, and Smiting Soul sets. Includes fastest KP, AP, and Megalixer farming tricks.",
      href: `${baseUrl}crafting/`,
      cta: "View Crafting & Farming",
      icon: "gem",
    },
    {
      title: "20 Reports & Secret Unlocks",
      badge: "Lore & Characters",
      badgeClass: "badge-crystal",
      desc: "Full archival logs with highlightable battle triggers. Unlock Prishe, Gilgamesh, and Feral Chaos in the PP Catalog.",
      href: `${baseUrl}reports/`,
      cta: "Unlock Secret Reports",
      icon: "file-text",
    },
    {
      title: "Custom Quests & Friend Cards",
      badge: "Community",
      badgeClass: "badge-new",
      desc: "Community quest storylines (Frustra Amare, World At War) and high-yield Friend Cards for farming rare drops and Rosetta Stones.",
      href: `${baseUrl}quests/`,
      cta: "View Quests & Cards",
      icon: "layout",
    },
    {
      title: "FAQ & Mechanics Glossary",
      badge: "Reference",
      badgeClass: "badge-new",
      desc: "Answers to common mechanics questions, dodge block frame timing, booster accessories, credit roll, and version changelog.",
      href: `${baseUrl}faq/`,
      cta: "View FAQ & System Guide",
      icon: "help-circle",
    },
  ];
}
