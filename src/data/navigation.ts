import type { IconName } from "../components/common/icons";

export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
  icon: IconName;
}

export type NavLinkChild = NavLinkItem;

export interface NavGroup {
  title: string;
  links: NavLinkItem[];
}

export function getNavGroups(baseUrl: string): NavGroup[] {
  return [
    {
      title: "General",
      links: [
        {
          label: "Home",
          href: `${baseUrl}`,
          id: "home",
          icon: "home",
        },
        {
          label: "FAQ & Credits",
          href: `${baseUrl}faq/`,
          id: "faq",
          icon: "help-circle",
        },
      ],
    },
    {
      title: "Gameplay",
      links: [
        {
          label: "Characters",
          href: `${baseUrl}characters/`,
          id: "roster",
          icon: "swords",
        },
        {
          label: "Combat Mechanics",
          href: `${baseUrl}mechanics/`,
          id: "mechanics",
          icon: "zap",
        },
        {
          label: "Arenas",
          href: `${baseUrl}arenas/`,
          id: "arenas",
          icon: "globe",
        },
        {
          label: "Equipments & Shop",
          href: `${baseUrl}crafting/`,
          id: "crafting",
          icon: "gem",
        },
      ],
    },
    {
      title: "Walkthrough",
      links: [
        {
          label: "Walkthrough Hub",
          href: `${baseUrl}story/`,
          id: "story-hub",
          icon: "map",
        },
        {
          label: "Gameplay Basics",
          href: `${baseUrl}story/gameplay-basics/`,
          id: "story-basics",
          icon: "compass",
        },
        {
          label: "012: Treachery of Gods",
          href: `${baseUrl}story/012-treachery/`,
          id: "story-012",
          icon: "flame",
        },
        {
          label: "013: Light to All",
          href: `${baseUrl}story/013-light/`,
          id: "story-013",
          icon: "sparkles",
        },
        {
          label: "000: Creator's Gateways",
          href: `${baseUrl}story/000-creator/`,
          id: "story-000",
          icon: "layers",
        },
        {
          label: "Part 27: The Reports",
          href: `${baseUrl}story/reports/`,
          id: "story-reports",
          icon: "file-text",
        },
      ],
    },
    {
      title: "Lore & Unlocks",
      links: [
        {
          label: "20 Reports & Unlocks",
          href: `${baseUrl}reports/`,
          id: "reports",
          icon: "file-text",
        },
      ],
    },
    {
      title: "Extra",
      links: [
        {
          label: "Quests & Friend Cards",
          href: `${baseUrl}quests/`,
          id: "quests",
          icon: "layout",
        },
      ],
    },
  ];
}
