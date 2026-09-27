import type { IconName } from "../components/common/icons";

export interface GameInfoItem {
  label: string;
  value: string;
  sub: string;
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
