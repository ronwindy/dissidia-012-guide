import type { IconName } from "../components/common/icons";

export interface GameInfoItem {
  label: string;
  value: string;
  icon: IconName;
}
export const gameInfo: GameInfoItem[] = [
  {
    label: "Release Date",
    value: "March 2011",
    icon: "calendar",
  },
  {
    label: "Platform",
    value: "PlayStation Portable",
    icon: "gamepad",
  },
  {
    label: "Genre",
    value: "Action RPG / Fighter",
    icon: "swords",
  },
  {
    label: "Developer & Publisher",
    value: "Square Enix",
    icon: "building",
  },
  {
    label: "Director",
    value: "Mitsunori Takahashi",
    icon: "user",
  },
  {
    label: "Creative Director",
    value: "Tetsuya Nomura",
    icon: "star",
  },
  {
    label: "Producer",
    value: "Ichiro Hazama",
    icon: "user",
  },
  {
    label: "Composer",
    value: "Takeharu Ishimoto",
    icon: "music",
  },
];
