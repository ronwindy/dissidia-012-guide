import { Calendar, Gamepad2, Swords, Building2, User, Star, Music } from "@lucide/astro";

export interface GameInfoItem {
  label: string;
  value: string;
  icon: typeof Calendar;
}
export const gameInfo: GameInfoItem[] = [
  { label: "Release Date", value: "March 2011", icon: Calendar },
  { label: "Platform", value: "PlayStation Portable", icon: Gamepad2 },
  { label: "Genre", value: "Action RPG / Fighter", icon: Swords },
  { label: "Developer & Publisher", value: "Square Enix", icon: Building2 },
  { label: "Director", value: "Mitsunori Takahashi", icon: User },
  { label: "Creative Director", value: "Tetsuya Nomura", icon: Star },
  { label: "Producer", value: "Ichiro Hazama", icon: User },
  { label: "Composer", value: "Takeharu Ishimoto", icon: Music },
];
