// Sidebar icons: category heading -> Lucide icon, plus keyword rules for entry titles.
// An entry with no matching rule inherits its category's icon.

export const NAV_FALLBACK_ICON = 'Dot';

export const NAV_CATEGORY_ICONS = {
  'Getting Started': 'BookOpen',
  'Treachery of the Gods': 'Swords',
  'Light to All': 'Sun',
  'Confessions of the Creator': 'Skull',
  Extras: 'ScrollText',
};

// First matching rule wins.
export const NAV_ENTRY_RULES = [
  [/^Prologue/i, 'Sunrise'],
  [/^Epilogue/i, 'Sunset'],
  [/^Chapter \d+/i, 'Flag'],
  [/Reports/i, 'ScrollText'],
  [/Gameplay/i, 'Gamepad2'],
  [/Shantotto|Gabranth/i, 'Users'],
  [/Feral Chaos|Land of Discord/i, 'Flame'],
  [/Chasm|Castle/i, 'Castle'],
  [/Gaia|Bahamut|Southern/i, 'Map'],
];

export function navCategoryIconName(category) {
  return NAV_CATEGORY_ICONS[category] ?? NAV_FALLBACK_ICON;
}

/** Icon name for a sidebar entry; inherits the category icon when no rule matches. */
export function navEntryIconName(category, title) {
  const t = String(title ?? '');
  const hit = NAV_ENTRY_RULES.find(([re]) => re.test(t));
  return hit ? hit[1] : navCategoryIconName(category);
}
