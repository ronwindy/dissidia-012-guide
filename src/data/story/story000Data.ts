export interface WalkthroughImage {
  src: string;
  alt?: string;
  caption: string;
}

export interface Story000Floor {
  floorNumber: number | string;
  name?: string;
  kpChance?: string;
  rules?: string;
  skills?: string;
  bonusLine?: number | string;
  enemies?: string[];
  chests?: string[];
  notes?: string;
  images?: WalkthroughImage[];
}

export interface Story000Gateway {
  id: string;
  title: string;
  location?: string;
  chapter?: string;
  isOptional?: boolean;
  kpChance?: string;
  rules?: string;
  skills?: string;
  bonusLine?: number | string;
  enemies?: string[];
  chests?: string[];
  floors?: Story000Floor[];
  strategy?: string;
  notes?: string;
  images?: WalkthroughImage[];
}

export interface WalkthroughStep {
  id: string;
  title: string;
  location?: string;
  description: string;
  dialogue?: { speaker: string; text: string };
  images?: WalkthroughImage[];
  gateways?: Story000Gateway[];
}

export const story000Foreword = {
  title: "000: Confessions of the Creator Overview",
  desc: "The open-world postgame campaign of Dissidia 012. Unlocked after completing Scenario 012 and purchasing it in the PP Shop for 2,000 PP, or clearing Scenario 013.",
  tips: [
    "Custom Ruleset Advantage: Create custom rulesets prioritizing EX Core appearance or high Bravery multipliers to bridge equipment and level gaps.",
    "Party Selection: Select your 5 most comfortable characters. Your lead character appears in cutscenes and represents you on the world map. (Note: Squall has difficulty hitting field manikins with his BRV swing, and Exdeath has slower world-map movement).",
    "Unlocking the World: You begin restricted until you conquer the 10-floor dungeon 'Chasm in the Rotting Land' at the Cavern of Earth.",
    "Special Day Discount: On your designated Special Day, all Moogle Shop prices across World B are slashed by 50%!"
  ]
};

export const story000WalkthroughSteps: WalkthroughStep[] = [
  {
    id: "step-intro-cavern",
    title: "1. Awakening & Journey to Cavern of the Earth",
    location: "Sanctuary of Order & Cavern of the Earth",
    description: "After the opening cutscene, you will appear in front of a Moogle. Speak with him for dialogue and browse his shop if you wish. When ready, access the yellow teleport stone to travel to the Cavern of the Earth. Follow the path to grab the Treasure Chest at the end. Backtrack a short distance and interact with the red gateway to begin your first major trial.",
    gateways: [
      {
        id: "chasm-rotting-land",
        title: "Chasm in the Rotting Land (10 Floors)",
        location: "Cavern of Earth Teleporter",
        strategy: "Conquering this gateway breaks the world map barriers and unlocks the Moogle companion who follows you across World B.",
        floors: [
          {
            floorNumber: 1,
            kpChance: "Win within 90 seconds.",
            rules: "Enabled",
            skills: "Enabled",
            bonusLine: 70,
            enemies: ["Warrior of Antiquity Lv72 w/ Assist", "Fleeting Flash Lv39"],
            notes: "Move 1 square forward to trigger manikins. Defeating one reveals the Stigma of Chaos. The Warrior of Antiquity is in EX-form (Gabranth base) but has weak AI. A Round Chain or Multichain easily traps both."
          },
          {
            floorNumber: 2,
            enemies: ["Horror of Antiquity Lv73", "Fallacious Giant Lv72", "Delusory Dragoon Lv39"],
            notes: "Move below deploy point to spawn enemies. Defeat the non-expert piece to reach the goal."
          },
          {
            floorNumber: 3,
            enemies: ["Horror of Antiquity Lv80", "Lady of Antiquity Lv79", "Counterfeit Youth Lv41", "Warrior of Antiquity Lv79", "Transient Gunner Lv40"],
            chests: ["Treasure Chest (via strong path)", "Potion (via easy path)"],
            notes: "Taking the path with easier enemies allows access to the Potion and the Goal. Going through the stronger path gives access to the Chest."
          },
          {
            floorNumber: 4,
            enemies: ["Imitation Despot Lv80", "Ephemeral Summoner Lv40", "Imaginary Brawler Lv40", "Imaginary Champion Lv82", "Counterfeit Wraith Lv80 / Delusory Warlock Lv81 (Group)"]
          },
          {
            floorNumber: 5,
            enemies: [
              "Delusory Dragoon Lv42",
              "Fallacious Tree Lv81 / Phantasmal Harlequin Lv81 / Imaginary Champion Lv82 (Group)",
              "Imaginary Soldier Lv43",
              "Fleeting Flash Lv39 / Ephemeral Summoner Lv40 / Transient Lion Lv43 (Group)",
              "Potion -> Capricious Reaper Lv82"
            ],
            notes: "In here you'll get the Moogle summon upon engaging the Moogle piece. There are three possible scenes upon talking to the Moogle — a Cosmos version, a Chaos version, and a Terra version.",
            images: [
              {
                src: "/images/walkthrough/moogle-cosmos.png",
                alt: "Moogle summon encounter cutscene - Cosmos version",
                caption: "Cosmos version."
              },
              {
                src: "/images/walkthrough/moogle-chaos.png",
                alt: "Moogle summon encounter cutscene - Chaos version",
                caption: "Chaos version."
              },
              {
                src: "/images/walkthrough/moogle-terra.png",
                alt: "Moogle summon encounter cutscene - Terra version",
                caption: "Terra version."
              }
            ]
          },
          {
            floorNumber: 6,
            enemies: ["Delusory Dragoon Lv42", "Transient Witch Lv82", "Imitation Liegeman Lv41", "Capricious Reaper Lv52"]
          },
          {
            floorNumber: 7,
            enemies: [
              "Idle Sky Pirate Lv39 / Delusory Dragoon Lv39 (Group)",
              "Fallacious Tree Lv100",
              "Imaginary Soldier Lv43",
              "Ephemeral Phantom Lv83",
              "Ephemeral Summoner Lv40",
              "Transient Lion Lv43"
            ],
            notes: "Use a crosschain in the center and you should get them all. Access the silver statue when all is said and done to double your KP."
          },
          {
            floorNumber: 8,
            enemies: [
              "Imaginary Soldier Lv43",
              "Counterfeit Wraith Lv80",
              "Phantasmal Girl Lv42",
              "Delusory Warlock Lv81",
              "Fleeting Flash Lv39 / Delusory Dragoon Lv39 / Idle Sky Pirate Lv39 (Group)"
            ]
          },
          {
            floorNumber: 9,
            enemies: [
              "Delusory Dragoon Lv39",
              "Delusory Warlock Lv81",
              "False Stalwart Lv80",
              "Fallacious Wanderer Lv42 / Phantasmal Girl Lv42 / Ephemeral Phantom Lv82 (Group)"
            ]
          },
          {
            floorNumber: 10,
            enemies: ["Red Chest -> Fallacious Tree Lv90"],
            chests: ["High-grade Catalyst Chest"],
            notes: "Clearing Floor 10 spawns the companion Moogle who follows your party across World B."
          }
        ]
      }
    ]
  },
  {
    id: "step-shantotto-remake",
    title: "2. The Moogle Companion & Shantotto's Remaster Dungeon",
    location: "Cavern of the Earth Surroundings",
    description: "And behold! A moogle will follow you now. From here go past the gateway you cleared and destroy the rock. Collect a chest then go back and head for the red gateway nearby. Players who have gone through the first DFF will recognize the scenario as it is a remake of Shantotto's dungeon. You should probably bring a character that's pretty proficient in physical attacks as there's a lot of 'Negate Physical Damage' emblems. Even though there are also 'Negate Magic Damage' emblems, you can get around all of them more easily than the 'Negate Physical Damage' emblems. (Alternatively, a powerful mage can circumvent defense mechanics).",
    gateways: [
      {
        id: "curses-hopes-yore",
        title: "Curses of Hopes of Yore (5 Floors - Shantotto's Remaster)",
        location: "Cavern of Earth Surroundings",
        kpChance: "Win within 90 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 75,
        strategy: "Remake of Shantotto's classic dungeon. Beware of 'Negate Physical Damage' and 'Negate Magic Damage' emblems throughout.",
        floors: [
          {
            floorNumber: 1,
            kpChance: "Win within 90 seconds.",
            rules: "Enabled",
            skills: "Enabled",
            bonusLine: 75,
            enemies: ["Delusory Dragoon Lv59", "Ephemeral Summoner Lv60", "Lady of Antiquity Lv60", "Idle Sky Pirate Lv59"],
            notes: "Multichain right in the square above the Lady of Antiquity."
          },
          {
            floorNumber: 2,
            enemies: ["Capricious Thief Lv63", "Horror of Antiquity Lv80", "Fallacious Wanderer Lv62", "Transient Gunner Lv60", "Delusory Warlock Lv62"]
          },
          {
            floorNumber: 3,
            enemies: [
              "Fallacious Wanderer Lv62",
              "Counterfeit Wraith Lv89",
              "Fallacious Giant Lv74",
              "Horror of Antiquity Lv61",
              "Transient Lion Lv63 / Capricious Thief Lv63 / Ephemeral Vision Lv63 / Lady of Antiquity Lv79 (4-Group)"
            ],
            notes: "Use a Multichain in the 'Item Disable' emblem."
          },
          {
            floorNumber: 4,
            enemies: [
              "False Hero Lv100",
              "Imaginary Soldier Lv63",
              "False Stalwart Lv89",
              "Capricious Thief Lv63",
              "Red Chest -> Delusory Warlock Lv90 w/ Assist"
            ],
            notes: "Turn off any rules that accentuate EX Core Appearance Rate when fighting the False Hero because its AI is set up to hunt those down as soon as they appear. If having trouble with False Stalwart, focus on wall rush and blocking."
          },
          {
            floorNumber: 5,
            name: "Shantotto's Sanctum",
            enemies: ["Horror of Antiquity Lv62", "Boss -> Shantotto Lv70 w/ Assist"],
            chests: ["Random piece of the Allure of Honey armor set"],
            notes: "To have access to all of the chests, you'll need to defeat your Assist on this map as well."
          }
        ]
      }
    ]
  },
  {
    id: "step-cornelia-plain-trek",
    title: "3. Castle Cornelia & Departure Plain",
    location: "Cornelia Region",
    description: "Go through the now opened gate and to your right is a chest. Backtrack all the way to the teleporter and return to Castle Cornelia. Once you've arrived, head for the red gateway which is a short distance away from you.",
    images: [
      {
        src: "/images/walkthrough/departure-grass-chest.png",
        alt: "Follow the red arrow through the grassy route to claim the hidden chest",
        caption: "Follow the arrow."
      }
    ],
    gateways: [
      {
        id: "gw-departure-000",
        title: "Gateway to Departure",
        location: "Cornelia Plain",
        kpChance: "BRV Break within 30 sec",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 50,
        enemies: [
          "Fallacious Tree Lv51",
          "Phantasmal Harlequin Lv51",
          "Imaginary Champion Lv51",
          "Transient Witch Lv52",
          "Capricious Reaper Lv52"
        ],
        strategy: "To bag all of the enemies in one fell swoop, head to the square in front of you and then activate Multichain. Use KP Gambler and similar skills to maximize your profits."
      },
      {
        id: "gw-good-evil",
        title: "Gateway of Good and Evil",
        location: "Cornelia Coastal Ridge",
        kpChance: "BRV Break within 30 sec",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 50,
        enemies: [
          "Fallacious Tree Lv51",
          "Transient Witch Lv52",
          "Counterfeit Youth Lv41",
          "Fallacious Wanderer Lv42",
          "Counterfeit Wraith Lv50",
          "Imitation Despot Lv50",
          "Ephemeral Phantom Lv52"
        ],
        notes: "After completing Gateway to Departure: Go forward and head to your left through the grass for a chest (Follow the arrow). After accessing the chest go to the path's right and enter this gateway."
      }
    ]
  },
  {
    id: "step-volcano-gulg-snows",
    title: "4. Ancient Volcano Ring Gulg & Elven Snowfields",
    location: "Ancient Volcano Ring - Gulg & Elven Snowfields",
    description: "Head for the red gateway in the distance. Smash the magma rock first to access a Moogle that sells all the Summons. Buy a few and then enter Beyond the Continent. Next, at the intersection, destroy the front rock for a chest, then head right to Ancient Volcano Ring - Gulg to smash another magma rock for a chest. Head to the snowy mountain area for a chest and a battle with Delusory Warlock Lv88 w/ Assist. Backtrack to Encounters and Treason.",
    gateways: [
      {
        id: "gw-beyond-continent",
        title: "Beyond the Continent",
        location: "Volcano Ring Outer Perimeter",
        kpChance: "BRV Break within 30 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 50,
        enemies: [
          "Phantasmal Harlequin Lv51",
          "Imaginary Champion Lv51",
          "Ephemeral Phantom Lv52",
          "Imaginary Soldier Lv43",
          "Capricious Thief Lv43",
          "Capricious Reaper Lv52"
        ]
      },
      {
        id: "gw-encounters-treason",
        title: "Encounters and Treason",
        location: "Ancient Volcano Ring - Gulg",
        kpChance: "BRV Break within 30 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 60,
        enemies: [
          "Transient Witch Lv52 / Capricious Reaper Lv52 / Ephemeral Phantom Lv52 (Group)",
          "Ephemeral Vision Lv63",
          "Fallacious Tree Lv51 / Phantasmal Harlequin Lv51 / Imaginary Champion Lv51 (Group)"
        ],
        notes: "After clearing: Talk to the Moogle. Continue along path and make a left. You should see Kain who utters: 'Prepare yourself...' Go through nearby grass for a chest, then backtrack."
      },
      {
        id: "gw-frozen-continent",
        title: "Frozen Continent",
        location: "Elven Snowfields",
        kpChance: "BRV Break within 30 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 60,
        enemies: [
          "Imaginary Brawler Lv60 / Transient Gunner Lv60 (Group)",
          "Phantasmal Harlequin Lv51 / Imaginary Champion Lv51 (Group)",
          "Imitation Despot Lv50 / Counterfeit Wraith Lv50 (Group)",
          "Ephemeral Summoner Lv60 / False Hero Lv61 / Imaginary Champion Lv61 (Group)"
        ],
        notes: "After clearing: Make a trip right for a chest guarded by Imaginary Champion Lv88 w/ Assist. Speak to Tifa in distance ('Everything's going to disappear...'). Grab rock chest behind you, defeat second Lv88 Champion guarding another chest, and visit the Moogle for Heike Armor."
      },
      {
        id: "gw-melting-snows",
        title: "Gateway of Melting Snows",
        location: "Northern Glacier Path",
        kpChance: "Win within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 60,
        enemies: [
          "Delusory Warlock Lv50 / Fallacious Tree Lv51 / Ephemeral Phantom Lv52 (Group)",
          "Fallacious Wanderer Lv62",
          "Counterfeit Youth Lv61",
          "Transient Witch Lv52",
          "Phantasmal Harlequin Lv51",
          "Delusory Warlock Lv62"
        ],
        notes: "Go through the opened area: left features another Imaginary Champion Lv88 w/ Assist guarding a chest. Break nearby rock and slide to the next gateway."
      },
      {
        id: "gw-great-will",
        title: "Gateway of the Great Will",
        location: "Glacier Ridge Slide",
        kpChance: "Win within 30 seconds",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 60,
        enemies: [
          "Capricious Reaper Lv63",
          "Fleeting Flash Lv59",
          "Imaginary Soldier Lv63",
          "Idle Sky Pirate Lv59",
          "Transient Lion Lv63"
        ],
        notes: "Slide back and head right to Gulg. Break right rock for a chest. Defeat Delusory Warlock Lv88 for chest. Upperlands grassy area holds another chest. Follow orbs of light past Delusory Dragoon Lv88 w/ Assist for another chest. Smash rock in Cornelia Plains before Southern Lufenia."
      }
    ]
  },
  {
    id: "step-southern-lufenia-apex",
    title: "5. Southern Lufenia Gateway (Feral Chaos Phase 1)",
    location: "Southern Lufenia Ridge",
    description: "Before you enter this gateway, prepare your strongest anti-boss setup. Exit and re-enter if necessary until you draw your preferred assist partner.",
    gateways: [
      {
        id: "gw-southern-lufenia",
        title: "Southern Lufenia Gateway",
        location: "Southern Lufenia Ridge",
        kpChance: "None",
        rules: "Disabled",
        skills: "Disabled",
        bonusLine: 80,
        enemies: ["Red Chest -> Feral Chaos Lv95"],
        strategy: "Employ wall-rush HP attacks, Assist-punish timing, and high EX build accessories. Clearing unlocks a Report."
      }
    ]
  },
  {
    id: "step-sandsea-melmond-trek",
    title: "6. Mirage Sandsea, Melmond Fens & Cornelia Plain Trek",
    location: "Mirage Sandsea, Elvaan Castle, Melmond Fens & Cornelia Plains",
    description: "Backtrack to speak with Prishe. Next, head to Mirage Sandsea on the other side of the opened gateway. Destroy the magma rock for treasure and use the Teleport Stone to travel to Elvaan Castle. Talk to Terra in the distance. Walk to Melmond Fens (chest to left). Head right for a battle with Transient Witch Lv89 w/ Assist and break the rock leading to a chest. Follow the last path for another rock chest, slide back, and continue past the Teleport Stone until you reach Cornelia Plain.",
    images: [
      {
        src: "/images/walkthrough/melmond-cursor-map.png",
        alt: "World map cursor location indicating Melmond Fens and Cornelia Plain route",
        caption: "Where the cursor is."
      }
    ],
    dialogue: {
      speaker: "Prishe & Terra",
      text: "Prishe: 'Hmph... No matter what you think or what you do, it's all forgotten and lost in the end. Everybody is the same... as long as they can fight. Because we're not \"creatures.\" We're just \"rocks,\" after all!'\n\nTerra: 'I can't do this anymore. I don't want to fight. Every time I wake, my head aches, and I can't remember what matters to me. I wish I were still just a puppet. I wish I never found anything...'"
    },
    gateways: [
      {
        id: "gw-forgotten-trail",
        title: "Forgotten Trail",
        location: "Northern Lufenia Sands",
        kpChance: "Win within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 80,
        enemies: [
          "Lady of Antiquity Lv71 / Warrior of Antiquity Lv72 (Group)",
          "Fleeting Flash Lv97",
          "Idle Sky Pirate Lv97",
          "Imaginary Brawler Lv97",
          "Delusory Dragoon Lv97"
        ],
        notes: "Trudge through the grassy area in Cornelia Plain for a chest, return to Melmond Fens, teleport to Melmond (see map image) to grab the chest near the teleport stone. Defeat Transient Witch Lv89 w/ Assist for her guarded chest, then teleport to Lufenia, head north, and slash the ball of light to enter."
      },
      {
        id: "gw-eastern-mirage",
        title: "Eastern Mirage Gateway",
        location: "Eastern Mirage Desert",
        kpChance: "Win within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 60,
        enemies: [
          "Imitation Despot Lv89",
          "False Stalwart Lv89",
          "Counterfeit Wraith Lv89",
          "Idle Sky Pirate Lv97",
          "Delusory Dragoon Lv97",
          "Mirror Piece"
        ],
        notes: "The Counterfeit Wraith seeks EX cores. Turn off any rules that have a high EX Core Appearance Rate."
      }
    ]
  },
  {
    id: "step-flying-castle-farming",
    title: "7. Dreams of a Flying Castle & Lufenian Armor Farming",
    location: "Center of Mirage Desert (Sky Sanctuary)",
    description: "Turn off any rules that emphasize EX Modes, as high enemy defense and HP will make battles drag on endlessly due to enemy Regen. Equip your best weapons and characters like Firion or Golbez before entering the red gateway in the desert center.",
    gateways: [
      {
        id: "gw-flying-castle",
        title: "Dreams of a Flying Castle (5 Floors - Lufenian Gear Farm)",
        location: "Center of Mirage Desert",
        kpChance: "Win within 30 seconds (Floor 1)",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        strategy: "Floor 4 contains 4 Mirror Pieces and 8 Red Chests with elite Lv100-122 manikins carrying Lufenian armor pieces. Unequip your characters' armor before entering to make their Mirror clones fragile and easy to break.",
        floors: [
          {
            floorNumber: 1,
            kpChance: "Win within 30 seconds.",
            rules: "Enabled",
            skills: "Enabled",
            bonusLine: 100,
            enemies: [
              "Transient Lion Lv100",
              "Warrior of Antiquity Lv79",
              "Horror of Antiquity Lv80",
              "Transient Lion Lv100",
              "Imaginary Soldier Lv100",
              "Mirror Piece x2"
            ]
          },
          {
            floorNumber: 2,
            enemies: [
              "Fallacious Tree Lv90",
              "Imaginary Brawler Lv121",
              "Fallacious Wanderer Lv99",
              "Phantasmal Harlequin Lv90",
              "Transient Lion Lv100",
              "Phantasmal Girl Lv99"
            ]
          },
          {
            floorNumber: 3,
            enemies: [
              "Transient Gunner Lv121",
              "Ephemeral Summoner Lv98 / Ephemeral Vision Lv100 / Delusory Knight Lv100 (Group)",
              "Mirror Piece"
            ],
            notes: "Use a cross chain above the mirror."
          },
          {
            floorNumber: 4,
            name: "Lufenian Treasure Vault",
            enemies: [
              "Mirror Piece x4",
              "Red Chest -> Fleeting Flash Lv120 w/ Assist",
              "Red Chest -> False Hero Lv122 w/ Assist",
              "Red Chest -> Counterfeit Youth Lv122 w/ Assist",
              "Red Chest -> Idle Sky Pirate Lv120 w/ Assist",
              "Red Chest -> Delusory Dragoon Lv120 w/ Assist",
              "Red Chest -> Ephemeral Phantom Lv100",
              "Red Chest -> Warrior of Antiquity Lv100",
              "Red Chest -> Lady of Antiquity Lv100"
            ],
            chests: ["Complete set of Lufenian Armor components"],
            notes: "When you approach the panel next to the goal, red chests appear across the map. Defeating them yields Lufenian armor drops."
          },
          {
            floorNumber: 5,
            enemies: [
              "Red Chest -> Ephemeral Vision Lv100",
              "Red Chest -> Imitation Liegeman Lv100",
              "Red Chest -> Counterfeit Youth Lv122 w/ Assist",
              "Red Chest -> Fallacious Wanderer Lv123 w/ Assist",
              "Red Chest -> Capricious Thief Lv100",
              "Red Chest -> False Stalwart Lv100",
              "Mirror Piece x2"
            ],
            notes: "Unequip EX Core Appearance rules when fighting Capricious Thief (top-left red chest) to prevent EX core farming."
          }
        ]
      }
    ]
  },
  {
    id: "step-bahamut-isles-discord",
    title: "8. Bahamut Isles & Land of Discord Approaches",
    location: "Bahamut Isles & Land of Discord",
    description: "Head south: defeat False Stalwart Lv123 w/ Assist on your right and the group of 3 False Stalwarts on your left to open chests. Head north to Bahamut Isles. Defeat Imitation Despot Lv123 w/ Assist for a chest, slide via magma rock to an island with two chests, and break the left rock for a long slide to another chest. Approach Lightning for dialogue, pass the teleport stone, and enter Conquered Trials Gateway.",
    dialogue: {
      speaker: "Lightning",
      text: "'The mured moogle... That's quite the impressive title but faking your name isn't gonna change your reality. There's little time left... So stop running and face the truth.'"
    },
    gateways: [
      {
        id: "gw-conquered-trials",
        title: "Conquered Trials Gateway",
        location: "Bahamut Isles",
        kpChance: "Win within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 80,
        enemies: [
          "Transient Gunner Lv98 / Ephemeral Summoner Lv98 / False Hero Lv98 (Group)",
          "Red Chest -> Horror of Antiquity Lv80",
          "Red Chest -> Imaginary Champion Lv127 w/ Assist",
          "Red Chest -> Warrior of Antiquity Lv79",
          "Red Chest -> Lady of Antiquity Lv79"
        ],
        notes: "Red chest enemies here are weaker than Dreams of a Flying Castle and drop Lufenian armor. Afterwards, you learn the Feral Chaos fought earlier was merely a manikin."
      },
      {
        id: "gw-inherited-memories",
        title: "Inherited Memories",
        location: "Land of Discord Entrance",
        kpChance: "BRV Break within 60 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Delusory Dragoon Lv100",
          "Fallacious Wanderer Lv123",
          "Fleeting Flash Lv120",
          "Idle Sky Pirate Lv120",
          "Phantasmal Girl Lv123 / Capricious Thief Lv124 / Imaginary Champion Lv127 (Group)"
        ]
      },
      {
        id: "gw-artificial-life",
        title: "Gateway of Artificial Life",
        location: "Discord Crater",
        kpChance: "BRV Break within 60 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Phantasmal Harlequin Lv127",
          "Transient Witch Lv127",
          "Capricious Thief Lv124",
          "Imaginary Champion Lv127",
          "Imitation Liegeman Lv122 / Counterfeit Youth Lv122 / Delusory Knight Lv123 / Counterfeit Wraith Lv126 / Delusory Warlock Lv126 (5-Group)"
        ],
        notes: "Strike the ball of light, defeat Capricious Reaper Lv126 w/ Assist, and explore the shore for chests before entering."
      },
      {
        id: "gw-foreign-world",
        title: "To a Foreign World (Secret Moogle Access)",
        location: "Land of Discord Desert Gate",
        kpChance: "Win battle within 60 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Ephemeral Vision Lv125",
          "False Stalwart Lv125",
          "Imitation Despot Lv125",
          "Counterfeit Wraith Lv126",
          "Delusory Warlock Lv126",
          "Ephemeral Phantom Lv128 / Lady of Antiquity Lv128 / Warrior of Antiquity Lv129 (Group)"
        ],
        notes: "Clearing this gate grants access to the Secret Moogle Shop with the most exclusive items in World B."
      },
      {
        id: "gw-confinement-flight",
        title: "Confinement and Flight",
        location: "Discord Outer Spires",
        kpChance: "Win battle within 60 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Delusory Dragoon Lv100 / Transient Lion Lv100 / Imaginary Soldier Lv100 (Group)",
          "Fallacious Wanderer Lv100",
          "Counterfeit Wraith Lv100",
          "Delusory Warlock Lv100"
        ],
        notes: "Composed mostly of gold battle pieces. A Multichain at deploy point can wrap things up quickly."
      }
    ]
  },
  {
    id: "step-gabranth-and-onrac",
    title: "9. Marsh Cave (Gabranth's Remaster) & Onrac Approaches",
    location: "Marsh Cave & Onrac",
    description: "Use the Teleport Stone to travel to Marsh Cave. Take the left path for a chest and enter Land of the Stolen Crown — the remake of Gabranth's classic dungeon. Afterward, teleport to Onrac and ride the red slides to Pervasive Sorrow and Solitary Salvation.",
    gateways: [
      {
        id: "gw-stolen-crown",
        title: "Land of the Stolen Crown (5 Floors - Gabranth's Remaster)",
        location: "Marsh Cave",
        kpChance: "Win within 90 seconds (Floor 1)",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 90,
        strategy: "Remake of Gabranth's dungeon. Multiple blue chests require defeating your assist ally piece.",
        floors: [
          {
            floorNumber: 1,
            kpChance: "Win within 90 seconds.",
            rules: "Enabled",
            skills: "Enabled",
            bonusLine: 90,
            enemies: ["Horror of Antiquity Lv80", "False Stalwart Lv89", "Lady of Antiquity Lv79", "Warrior of Antiquity Lv79"]
          },
          {
            floorNumber: 2,
            enemies: [
              "Horror of Antiquity Lv73 / Fallacious Giant Lv74 (Group)",
              "Fallacious Giant Lv81",
              "Warrior of Antiquity Lv79",
              "Horror of Antiquity Lv80",
              "Lady of Antiquity Lv71 / Warrior of Antiquity Lv72 (Group)"
            ]
          },
          {
            floorNumber: 3,
            enemies: [
              "Horror of Antiquity Lv80",
              "Warrior of Antiquity Lv79",
              "Lady of Antiquity Lv79",
              "Phantasmal Harlequin Lv90 / Capricious Reaper Lv91 (Group)",
              "Delusory Dragoon Lv97",
              "Fallacious Giant Lv81"
            ]
          },
          {
            floorNumber: 4,
            enemies: [
              "Phantasmal Harlequin Lv81 / Imaginary Champion Lv82 / Transient Witch Lv82 (Group)",
              "Counterfeit Wraith Lv80",
              "Imitation Despot Lv80",
              "False Stalwart Lv80",
              "Delusory Warlock Lv81",
              "Fallacious Tree Lv81"
            ],
            notes: "You must fight your assist to open the blue chest."
          },
          {
            floorNumber: 5,
            name: "Judge Magister's Sanctum",
            enemies: [
              "Warrior of Antiquity Lv79",
              "Horror of Antiquity Lv80",
              "Red Chest -> Idle Sky Pirate Lv97 w/ Assist",
              "Boss -> Gabranth Lv90 w/ Assist"
            ]
          }
        ]
      },
      {
        id: "gw-pervasive-sorrow",
        title: "Pervasive Sorrow",
        location: "Onrac Slides Perimeter",
        kpChance: "Win battle within 10 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Phantasmal Harlequin Lv100",
          "Ephemeral Vision Lv100",
          "Counterfeit Youth Lv100",
          "Fleeting Flash Lv100",
          "Idle Sky Pirate Lv100",
          "Delusory Knight Lv100",
          "Imaginary Champion Lv100"
        ]
      },
      {
        id: "gw-solitary-salvation",
        title: "Solitary Salvation",
        location: "Land of Discord Threshold",
        kpChance: "BRV Break within 60 sec.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Fallacious Wanderer Lv123",
          "False Stalwart Lv125",
          "Delusory Knight Lv123",
          "Imitation Despot Lv125",
          "Ephemeral Phantom Lv128"
        ]
      }
    ]
  },
  {
    id: "step-edge-of-discord-apex",
    title: "10. Edge of Discord (Level 130 Feral Chaos Apex)",
    location: "Core of Discord",
    description: "The climactic gauntlet of Scenario 000. Re-equip your best Lufenian/Genji gear and prepare your top party members before stepping onto the board.",
    gateways: [
      {
        id: "edge-of-discord",
        title: "Edge of Discord (5 Floors - Feral Chaos Final Battle)",
        location: "Land of Discord Core",
        strategy: "Floor 5 contains Level 130 Feral Chaos with over 100,000 HP and Garland Assist. Cid's piece on the board fully heals and revives all party members prior to battle.",
        floors: [
          {
            floorNumber: 1,
            kpChance: "Win battle.",
            rules: "Disabled",
            skills: "Disabled",
            bonusLine: 100,
            enemies: [
              "Delusory Dragoon Lv120",
              "Fleeting Flash Lv120",
              "False Stalwart Lv100",
              "Imaginary Brawler Lv121",
              "Idle Sky Pirate Lv120"
            ]
          },
          {
            floorNumber: 2,
            enemies: [
              "False Hero Lv122",
              "Counterfeit Youth Lv122",
              "Transient Gunner Lv121",
              "Imitation Liegeman Lv122",
              "Ephemeral Summoner Lv121",
              "Capricious Thief Lv100",
              "Delusory Warlock Lv100"
            ]
          },
          {
            floorNumber: 3,
            enemies: [
              "Phantasmal Girl Lv99 / Phantasmal Harlequin Lv127 (Group)",
              "Delusory Knight Lv123",
              "Ephemeral Phantom Lv100 / Ephemeral Vision Lv125 (Group)",
              "Counterfeit Youth Lv122",
              "Imitation Liegeman Lv122",
              "False Hero Lv122"
            ]
          },
          {
            floorNumber: 4,
            enemies: [
              "Imaginary Champion Lv127",
              "False Stalwart Lv125",
              "Imitation Despot Lv125 / Delusory Knight Lv123 / False Hero Lv122 (Group)"
            ],
            notes: "Defeating the rear group unlocks a chest containing high-tier Lufenian armor."
          },
          {
            floorNumber: 5,
            name: "Cataclysmic Apex (Feral Chaos Lv130)",
            enemies: ["Boss -> Feral Chaos Lv130 w/ Garland Assist (100,000+ HP)"],
            chests: ["Feral Chaos Armor Set Piece", "Report 20 Unlock Key", "PP Catalog Feral Chaos Token"],
            notes: "Cid's node on the board fully heals and revives your party members before initiating the fight. Defeating Feral Chaos unlocks him in the PP Catalog, gives Report 20, and expands Moglin's shop inventory in Cornelia!"
          }
        ]
      }
    ]
  }
];

export const story000DeepDungeons: Story000Gateway[] = [
  {
    id: "forsaken-lands",
    title: "The Forsaken Lands (10 Floors - Gaia Resource Gauntlet)",
    location: "Gaia Teleport Stone",
    strategy: "Endgame resource dungeon. Contains recurring chests filled with Electrum and rare ores on every playthrough.",
    floors: [
      {
        floorNumber: 1,
        kpChance: "BRV Break within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: [
          "Delusory Warlock Lv90",
          "Fallacious Tree Lv90",
          "Idle Sky Pirate Lv120",
          "Delusory Dragoon Lv120",
          "Imaginary Champion Lv90 / Fleeting Flash Lv120 (Group)"
        ],
        notes: "Multichain in the panel right of the group to catch all but one."
      },
      {
        floorNumber: 2,
        enemies: ["Delusory Warlock Lv90", "Fallacious Tree Lv90", "Transient Witch Lv91", "Capricious Reaper Lv91", "Fallacious Giant Lv129"]
      },
      {
        floorNumber: 3,
        enemies: ["Imaginary Champion Lv90", "Transient Witch Lv91", "Counterfeit Wraith Lv89 / Imaginary Brawler Lv121 (Group)"]
      },
      {
        floorNumber: 4,
        enemies: [
          "Delusory Knight Lv123",
          "Fallacious Wanderer Lv123",
          "Phantasmal Girl Lv123",
          "Imaginary Soldier Lv124",
          "Imitation Despot Lv89 / Counterfeit Wraith Lv89 / Delusory Warlock Lv90 / Fallacious Tree Lv90 (4-Group)"
        ]
      },
      {
        floorNumber: 5,
        enemies: [
          "Fleeting Flash Lv100",
          "False Stalwart Lv80 / Counterfeit Wraith Lv80 (Group)",
          "Red Chest -> Imitation Despot Lv125"
        ]
      },
      {
        floorNumber: 6,
        enemies: ["Delusory Warlock Lv90", "Fallacious Tree Lv90", "Imaginary Champion Lv90", "Phantasmal Harlequin Lv90"]
      },
      {
        floorNumber: 7,
        enemies: [
          "Transient Witch Lv91",
          "Capricious Reaper Lv91",
          "Ephemeral Phantom Lv91",
          "Fallacious Tree Lv126",
          "Red Chest -> Phantasmal Harlequin Lv127 w/ Assist"
        ]
      },
      {
        floorNumber: 8,
        enemies: ["Imaginary Brawler Lv121", "Delusory Dragoon Lv120", "Idle Sky Pirate Lv120"]
      },
      {
        floorNumber: 9,
        enemies: [
          "Fleeting Flash Lv120",
          "Delusory Dragoon Lv120",
          "Transient Gunner Lv121",
          "Idle Sky Pirate Lv120",
          "Imaginary Brawler Lv121",
          "False Hero Lv122 / Imitation Liegeman Lv122 (Group)"
        ],
        notes: "Chests here increase in gil multiplier values dramatically (3 to 30,000+)."
      },
      {
        floorNumber: 10,
        enemies: [
          "Counterfeit Youth Lv122",
          "False Hero Lv122",
          "Delusory Knight Lv123",
          "Imitation Liegeman Lv122"
        ],
        chests: ["Electrum x3", "Pink Tail", "Dragon's Tear", "Rosetta Stone", "Megalixir"]
      }
    ]
  },
  {
    id: "dragon-kings-gateway",
    title: "Dragon King's Gateway (10 Floors - Dragon Caves Trial)",
    location: "Dragon Caves Teleporter",
    strategy: "High-difficulty trial dungeon inhabited by max-level phantom dragons and elite manikins. Floor 8 features the FF1-FF5 protagonists in chronological order.",
    floors: [
      {
        floorNumber: 1,
        kpChance: "Win within 60 seconds.",
        rules: "Enabled",
        skills: "Enabled",
        bonusLine: 100,
        enemies: ["Fallacious Giant Lv81", "Warrior of Antiquity Lv79", "Horror of Antiquity Lv80", "Lady of Antiquity Lv79", "Fallacious Wanderer Lv123"]
      },
      {
        floorNumber: 2,
        enemies: ["False Stalwart Lv89", "Counterfeit Wraith Lv89", "Imitation Despot Lv89", "Horror of Antiquity Lv129", "Delusory Warlock Lv90"]
      },
      {
        floorNumber: 3,
        enemies: ["Transient Witch Lv127", "Imaginary Champion Lv90 / Transient Lion Lv100 (Group)", "Phantasmal Harlequin Lv90", "Fallacious Tree Lv90"]
      },
      {
        floorNumber: 4,
        enemies: ["Transient Witch Lv91", "Capricious Reaper Lv91", "Warrior of Antiquity Lv129", "Ephemeral Phantom Lv128", "Lady of Antiquity Lv128"]
      },
      {
        floorNumber: 5,
        enemies: [
          "Ephemeral Phantom Lv91",
          "Fleeting Flash Lv97",
          "Idle Sky Pirate Lv97",
          "Red Chest -> False Hero Lv122 w/ Assist",
          "Red Chest -> Idle Sky Pirate Lv120 w/ Assist",
          "Red Chest -> Imaginary Soldier Lv124 w/ Assist",
          "Red Chest -> Delusory Knight Lv123 w/ Assist"
        ],
        notes: "Red chests drop valuable component accessories."
      },
      {
        floorNumber: 6,
        enemies: ["Warrior of Antiquity Lv79", "Delusory Warlock Lv90", "Horror of Antiquity Lv80", "Counterfeit Wraith Lv126"]
      },
      {
        floorNumber: 7,
        enemies: ["Delusory Dragoon Lv100", "Transient Gunner Lv100", "Imaginary Champion Lv100", "Imaginary Brawler Lv100"]
      },
      {
        floorNumber: 8,
        enemies: [
          "Imaginary Champion Lv127",
          "Lady of Antiquity Lv128",
          "False Hero Lv98 / Imitation Liegeman Lv98 / Counterfeit Youth Lv99 / Delusory Knight Lv99 / Fallacious Wanderer Lv99 (FF1-FF5 5-Group)",
          "Red Chest -> Fallacious Giant Lv129 w/ Assist"
        ],
        notes: "The 5-manikin group battle features Warrior of Light, Firion, Onion Knight, Cecil, and Bartz in chronological order."
      },
      {
        floorNumber: 9,
        enemies: ["Horror of Antiquity Lv129", "Phantasmal Girl Lv99", "Transient Lion Lv100", "Phantasmal Harlequin Lv127"],
        notes: "Horror of Antiquity is an EX Core hunter."
      },
      {
        floorNumber: 10,
        enemies: [
          "Transient Giant Lv121",
          "Fleeting Flash Lv120",
          "Idle Sky Pirate Lv120",
          "Delusory Dragoon Lv120 w/ Fleeting Flash Assist",
          "Imaginary Brawler Lv121"
        ],
        chests: ["Scarletite", "Dragon's Tear", "Genji Equipment Set Pieces", "Elixir / Megalixir"]
      }
    ]
  }
];

export const story000MoogleShops = [
  {
    location: "Castle Cornelia (Post-Game)",
    moogleName: "Moglin",
    notes: "Requires defeating the Lv130 incarnation of Feral Chaos before these rare items become available. Limited to 1 purchase per day.",
    inventory: [
      { item: "Dusty Elixir", cost: "25 KP", desc: "Basic crafting catalyst" },
      { item: "Elixir", cost: "50 KP", desc: "Party HP/BRV recovery item" },
      { item: "Hi-Elixir", cost: "75 KP", desc: "Full EX & Assist gauge recharge" },
      { item: "Megalixir", cost: "100 KP", desc: "Ultimate recovery and high-tier crafting base" },
      { item: "KP Bonus", cost: "10 KP", desc: "Doubles KP earned in next gateway" },
      { item: "Banish/Death", cost: "10 KP", desc: "Field board skill" },
      { item: "Level Gap >= 90", cost: "180 KP", desc: "Appears on days following Bonus Day" },
      { item: "Hatless / Armorless", cost: "115-140 KP", desc: "No-equipment booster accessories" },
      { item: "Gloveless (1500+ KP)", cost: "100 KP", desc: "Unlocked after earning 1,500 lifetime KP" },
      { item: "Weaponless (2000+ KP)", cost: "150 KP", desc: "Unlocked after earning 2,000 lifetime KP" },
      { item: "Pre-Air Dash / Pre-EX Mode", cost: "200 KP", desc: "Special combat condition accessories" },
      { item: "Pupu / Behemoth", cost: "50 KP", desc: "Acquired from 2 post-special day buys" },
      { item: "Zalera / Ultima", cost: "120 KP", desc: "Rare summon stones" },
      { item: "Gilgamesh", cost: "1 KP", desc: "Unique summon stone" }
    ]
  },
  {
    location: "Ancient Volcano Ring - Gulg (Near Encounters and Treason)",
    moogleName: "Mogster (Volcano)",
    notes: "Teleport to Pravoka, head South to Ancient Volcano Ring - Gulg. Essential for Machine and Ribbon sets.",
    inventory: [
      { item: "Scarletite", cost: "50 KP", desc: "Required for Genji & Smiting Soul sets" },
      { item: "Gear Collection", cost: "150 KP", desc: "Need 6 to forge the Machine Set" },
      { item: "Pink Tail", cost: "200 KP", desc: "Need 20 to forge the Super Ribbon" }
    ]
  },
  {
    location: "Elven Snowfields (Near Frozen Continent)",
    moogleName: "Moguru (Snowfields)",
    notes: "Head east from Elven Castle teleport stone. Sells the complete Heike and Warlord / Uniter sets.",
    inventory: [
      { item: "Warblade", cost: "200 KP", desc: "Uniter set weapon base" },
      { item: "Heike's Blade", cost: "200 KP", desc: "Heike set sword base" },
      { item: "Heike's Shield", cost: "200 KP", desc: "Heike set shield base" },
      { item: "Warlord's Soul", cost: "200 KP", desc: "Uniter set helm base" },
      { item: "Heike's Helm", cost: "200 KP", desc: "Heike set helm base" },
      { item: "Heike's Armor", cost: "200 KP", desc: "Heike set heavy armor" },
      { item: "Warlord's Corselet", cost: "200 KP", desc: "Uniter set light armor" },
      { item: "Warlord's Gauntlets", cost: "200 KP", desc: "Uniter set gauntlet base" }
    ]
  },
  {
    location: "Elven Snowfields SE Island (Trade Materials)",
    moogleName: "Mogrich (Snowfields Trade)",
    notes: "Located on the southeast island in Elven Snowfields past Gateway of the Great Will (south from Crescent Lake).",
    inventory: [
      { item: "Flame / Ice Equipment", cost: "60-200 KP", desc: "Elemental equipment bases" },
      { item: "Mythril / Gold / Diamond / Crystal", cost: "20-50 KP", desc: "Refining minerals" },
      { item: "Rusted / Shiny Metal", cost: "50 KP", desc: "Forging components" },
      { item: "Corel / Narshe Ore", cost: "50-100 KP", desc: "High-grade regional ores" },
      { item: "Gulg / Gagazet Steel", cost: "100 KP", desc: "Elite crafting steels" },
      { item: "Figaro / Yaschas Gravel", cost: "50 KP", desc: "Regional catalyst gravels" },
      { item: "Basilisk / Gargoyle Pebble", cost: "50-100 KP", desc: "Monster stone reagents" },
      { item: "Epitaph / Golem Stone", cost: "100 KP", desc: "Ancient stones" },
      { item: "Mithra Tooth", cost: "50 KP", desc: "Rare monster component" }
    ]
  },
  {
    location: "Secret Moogle Shop (Past 'To a Foreign World' Gate)",
    moogleName: "Secret Mog",
    notes: "The ultimate trade merchant in World B. Located past the 'To a Foreign World' gateway in Land of Discord.",
    inventory: [
      { item: "Electrum", cost: "300 KP", desc: "Crucial catalyst for Excalibur II and high-end sets" },
      { item: "Dragon's Tear", cost: "200 KP", desc: "Rare catalyst for dragon equipment" },
      { item: "Lufenian Fragment", cost: "200 KP", desc: "Lufenian gear crafting catalyst" },
      { item: "Tome of the Orator", cost: "150 KP", desc: "Booster accessory recipe base" },
      { item: "Rosetta Stone", cost: "100 KP", desc: "Adds +1 Accessory Slot (Essential)" }
    ]
  }
];

