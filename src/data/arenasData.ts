export interface ArenaCharacterSynergy {
  name: string;
  slug: string;
  role: "Advantaged" | "Disadvantaged";
  reason: string;
}

export interface ArenaData {
  id: string;
  name: string;
  japaneseName: string;
  gameOrigin: string;
  gameNumber: string;
  gameSlug: string;
  type: "Classic Stage" | "012 New Stage" | "Boss Arena";
  image: string | null;
  hasOmega: boolean;
  bgm: string[];
  lore: string;
  geometry: {
    size: "Small" | "Medium" | "Large" | "Huge";
    structure: "Enclosed Chamber" | "Open Sky" | "Linear Corridor" | "Multi-Tiered Platforms" | "Dynamic Shifting";
    ceilingHeight: "Low" | "Medium" | "High" | "Infinite / Open Sky";
    wallDensity: "Very High" | "High" | "Moderate" | "Low" | "None (Drop Zones)";
    grindRails: string;
    exCoreRoutes: string;
  };
  standardMechanics: {
    description: string;
    features: string[];
    destructibleObjects: string[];
    hazards: string;
  };
  omegaMechanics: {
    title: string;
    description: string;
    stageBraveryFormula: string;
    hazardBehavior: string;
    tacticalImplication: string;
  } | null;
  battlegen: {
    item: string;
    description: string;
    condition: string;
    baseRate: string;
    bestTechnique: string;
  };
  competitiveData: {
    tier: "Starter (Legal)" | "Counterpick" | "Hazard (Banned/Casual)";
    summary: string;
    wallRushAdvantage: "High" | "Medium" | "Low";
    aerialAdvantage: "High" | "Medium" | "Low";
    projectileAdvantage: "High" | "Medium" | "Low";
    favoredArchetypes: string[];
    disfavoredArchetypes: string[];
    characterSynergies: ArenaCharacterSynergy[];
  };
  tacticalTips: string[];
}

export const arenasData: ArenaData[] = [
  {
    id: "old-chaos-shrine",
    name: "Old Chaos Shrine",
    japaneseName: "過去のカオス神殿 (Kako no Kaosu Shinden)",
    gameOrigin: "Final Fantasy I",
    gameNumber: "FF I",
    gameSlug: "ff1",
    type: "Classic Stage",
    image: "images/arenas/old-chaos-shrine.jpg",
    hasOmega: true,
    bgm: ["Battle (FFI)", "Chaos Shrine (FFI)", "Town Theme (FFI)"],
    lore: "The temple where Garland was transported 2,000 years into the past through the power of the Four Fiends, sealing his dark transformation into Chaos.",
    geometry: {
      size: "Medium",
      structure: "Enclosed Chamber",
      ceilingHeight: "Medium",
      wallDensity: "Moderate",
      grindRails: "Horizontal perimeter rails running along the ruined upper portico columns.",
      exCoreRoutes: "Spawns regularly on the central circular altar and near outer fallen columns."
    },
    standardMechanics: {
      description: "A balanced, classical arena featuring a ring of fluted ancient pillars around a central stone dais. Symmetrical geometry makes it an ideal testing ground for fundamentals.",
      features: [
        "Symmetrical square perimeter with high stone pillars.",
        "Central altar providing light cover from linear horizontal projectiles.",
        "Fallen stone capitals acting as low launch steps for aerial combos."
      ],
      destructibleObjects: [
        "Outer Fluted Stone Columns (shatter on heavy impact)",
        "Dais Pedestal Corners"
      ],
      hazards: "None in Standard mode. Clean neutral fighting environment."
    },
    omegaMechanics: {
      title: "Temporal Bravery Siphon",
      description: "A dark time-vortex slowly drains the Bravery of both combatants and feeds it into the Stage Bravery pool.",
      stageBraveryFormula: "Drains 1.5% of current Bravery every 2 seconds from active players into the Map Pool.",
      hazardBehavior: "Continuous passive Bravery bleed. Extended turtling or defensive camping actively siphons offensive momentum to the stage.",
      tacticalImplication: "Forces aggressive engagements. Landing an EX Break or Assist Break awards an astronomical Bravery payout from the siphoned pool."
    },
    battlegen: {
      item: "Blackcrystal Silver",
      description: "Ancient refined silver crystal used to forge primordial FFI artifact equipment and Knight shields.",
      condition: "Smash opponent into stone columns or destroy 2+ pillars with heavy collision.",
      baseRate: "12.0%",
      bestTechnique: "Use Garland's High Blow or Cloud's Climhazzard to slam the target into the outer ring of pillars."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "Universal tournament starter stage. Perfect balance between ground movement, aerial neutral, and accessible Wall Rush surfaces.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "Medium",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["All-Rounders (Warrior of Light, Bartz)", "Melee Rushdown (Squall, Tifa)"],
      disfavoredArchetypes: ["Extreme Wallcampers"],
      characterSynergies: [
        { name: "Warrior of Light", slug: "warrior-of-light", role: "Advantaged", reason: "Shield of Light and Daybreak easily rebound opponents off symmetrical pillars." },
        { name: "Garland", slug: "garland", role: "Advantaged", reason: "Wide spherical swings cover entire corridor zones between pillars." },
        { name: "The Emperor", slug: "the-emperor", role: "Disadvantaged", reason: "Symmetrical layout offers few natural blind spots for pre-laid Mine traps." }
      ]
    },
    tacticalTips: [
      "Use the perimeter pillars to shield against long-range spells like Firion's Straightarrow or Laguna's Machine Gun.",
      "Destructible pillars do not regenerate; breaking them removes cover and opens direct diagonal Wall Rush angles.",
      "In Omega mode, cash out the swollen Stage Bravery immediately via Assist Break when the opponent calls support."
    ]
  },
  {
    id: "pandaemonium",
    name: "Pandaemonium",
    japaneseName: "パンデモニウム (Pandemoniumu)",
    gameOrigin: "Final Fantasy II",
    gameNumber: "FF II",
    gameSlug: "ff2",
    type: "Classic Stage",
    image: "images/arenas/pandaemonium.jpg",
    hasOmega: true,
    bgm: ["Battle 1 (FFII)", "Battle 2 (FFII)", "Rebel Army Theme (FFII)"],
    lore: "The hellish palace summoned from the depths of the Netherworld by the Emperor after ascending to the throne of Hell.",
    geometry: {
      size: "Small",
      structure: "Enclosed Chamber",
      ceilingHeight: "Low",
      wallDensity: "Very High",
      grindRails: "Vertical corner conduits and narrow elevator-side rails.",
      exCoreRoutes: "Spawns within the central shaft or right beneath the overhead spike ceiling."
    },
    standardMechanics: {
      description: "A claustrophobic, brutal subterranean throne chamber surrounded by relief-carved stone and iron hazard spikes.",
      features: [
        "Extremely tight corridors with four compact walls.",
        "Central elevator column that periodically moves between ground and ceiling.",
        "Protruding floor spikes and wall brambles that trigger lethal Wall Rush damage."
      ],
      destructibleObjects: [
        "Intricate Stone Wall Panels",
        "Elevator Railing and Base Trim"
      ],
      hazards: "Wall spikes inflict standard Wall Rush collision damage with immediate stagger."
    },
    omegaMechanics: {
      title: "Hell's Iron Spikes & EX Nullification",
      description: "The spikes along the floors and walls surge with demonic crimson fire, activating periodically and punishing Wall Rushes.",
      stageBraveryFormula: "Wall rushing an opponent into active spikes steals 20% of their Bravery and transfers it directly to the attacker.",
      hazardBehavior: "Touching or crashing into active spikes immediately cancels the player's EX Revenge state and inflicts severe stagger.",
      tacticalImplication: "The most dangerous hazard stage in the game. Corner traps and wall splats become lethal one-touch KOs."
    },
    battlegen: {
      item: "Demon Soul",
      description: "Dark netherworld essence used to forge the Emperor's signature weapons and high-tier armor.",
      condition: "Inflict Wall Rush against the spike-lined back wall or break the central paneling.",
      baseRate: "10.5%",
      bestTechnique: "Land Firion's Shield Bash or Jecht's Jecht Stream to force a heavy backward wall crash."
    },
    competitiveData: {
      tier: "Hazard (Banned/Casual)",
      summary: "Banned in competitive tournament play due to extreme wall density, cramped camera angles, and unescapable corner-pressure loops.",
      wallRushAdvantage: "High",
      aerialAdvantage: "Low",
      projectileAdvantage: "Low",
      favoredArchetypes: ["Trap Masters (The Emperor)", "Close-Combat Grapplers (Jecht, Prishe, Firion)"],
      disfavoredArchetypes: ["Long-Range Snipers (Terra, Laguna)", "Floaty Aerial Mages (Ultimecia, Kuja)"],
      characterSynergies: [
        { name: "The Emperor", slug: "the-emperor", role: "Advantaged", reason: "Mine, Bomb, and Thunder Crest completely carpet the narrow floor with nowhere for the enemy to dodge." },
        { name: "Firion", slug: "firion", role: "Advantaged", reason: "Reel Magik and Lance combo directly into instant wall rush on almost every angle." },
        { name: "Terra", slug: "terra", role: "Disadvantaged", reason: "Cannot build adequate range or glide distance without crashing into corners." }
      ]
    },
    tacticalTips: [
      "Keep your back away from the spike walls; a single high-priority Bravery hit will chain into maximum Wall Rush damage.",
      "The central elevator column can be used to block line-of-sight tracking attacks like Starfall or Hell's Gate.",
      "In Omega mode, never pop EX Revenge while pressed against the spikes, as hazard contact will instantly purge your gauge."
    ]
  },
  {
    id: "pandaemonium-top-floor",
    name: "Pandaemonium - Top Floor",
    japaneseName: "パンデモニウム最上階 (Pandemoniumu Saijōkai)",
    gameOrigin: "Final Fantasy II",
    gameNumber: "FF II",
    gameSlug: "ff2",
    type: "012 New Stage",
    image: "images/arenas/pandaemonium-top-floor.jpg",
    hasOmega: false,
    bgm: ["Castle Pandemonium (FFII)", "Battle 2 (FFII)"],
    lore: "The majestic open-air summit of Pandaemonium overlooking the eternal fires of Hell, where the Emperor conducts his ultimate dark rituals.",
    geometry: {
      size: "Large",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "Infinite / Open Sky",
      wallDensity: "Low",
      grindRails: "Arcing crystal banister rails along the grand imperial staircase.",
      exCoreRoutes: "Spawns high above the shattered crystalline balconies and on the central throne dais."
    },
    standardMechanics: {
      description: "An expansive, tiered open-air platform high above the hellish sky. Completely remedies the claustrophobia of the lower floors.",
      features: [
        "Multi-tiered stepped platforms with breakable crystalline floors.",
        "Shatterable glass balconies that drop fighters into lower platform levels.",
        "Unrestricted vertical space allowing soaring aerial maneuvers and high-altitude assists."
      ],
      destructibleObjects: [
        "Crystal Glass Balconies (shatter upon receiving heavy HP/BRV strikes)",
        "Throne Room Imperial Balustrades"
      ],
      hazards: "Shattered crystal floors expose lower drops, forcing ground fighters to reposition."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Imperial Crystal",
      description: "Pristine crystalline shard from the Emperor's grand hall used in mid-tier weapon synthesis.",
      condition: "Shatter a crystalline floor balcony during combat.",
      baseRate: "15.0%",
      bestTechnique: "Execute an aerial diving HP move like Kain's Dragon's Claws or Cloud's Braver directly onto the balcony."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "Popular tournament counterpick stage. Favors aerial fighters and spatial controllers with high vertical mobility.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "High",
      projectileAdvantage: "High",
      favoredArchetypes: ["Aerial Specialists (Kain, Kuja)", "Long-Range Artillery (Terra, Shantotto)"],
      disfavoredArchetypes: ["Strict Ground Fighters (Firion, Gabranth pre-EX)"],
      characterSynergies: [
        { name: "Kain", slug: "kain", role: "Advantaged", reason: "Soaring vertical jump and Gungnir dive dominate the high open ceiling." },
        { name: "Terra", slug: "terra", role: "Advantaged", reason: "Can safely charge Meltdown and Holy while floating above broken floor balconies." },
        { name: "Firion", slug: "firion", role: "Disadvantaged", reason: "Broken platforms disrupt his ground weapon-chain stances." }
      ]
    },
    tacticalTips: [
      "Shatter the crystal balconies early if facing ground-locked opponents to limit their grounded combo starters.",
      "Use the grand staircase grind rails to quickly close distance or escape aerial assist tracking.",
      "Watch the drop zones—falling through shattered glass leaves you briefly vulnerable to Assist Chase attacks."
    ]
  },
  {
    id: "world-of-darkness",
    name: "World of Darkness",
    japaneseName: "闇の世界 (Yami no Sekai)",
    gameOrigin: "Final Fantasy III",
    gameNumber: "FF III",
    gameSlug: "ff3",
    type: "Classic Stage",
    image: "images/arenas/world-of-darkness.jpg",
    hasOmega: true,
    bgm: ["Battle 1 (FFIII)", "Battle 2 (FFIII)", "This is the Last Battle (FFIII)"],
    lore: "The primordial realm of pure Void from which Cloud of Darkness emerges to return all existence to nothingness.",
    geometry: {
      size: "Large",
      structure: "Open Sky",
      ceilingHeight: "High",
      wallDensity: "Moderate",
      grindRails: "Dark undulating void tentacles and floating miasma ribbons.",
      exCoreRoutes: "Spawns floating above the central dark roots and along the outer murky perimeter."
    },
    standardMechanics: {
      description: "A wide, eerie floating platform suspended in dark murky waters, entwined with ancient roots and monoliths.",
      features: [
        "Wide central floor surrounded by floating cubic stone platforms.",
        "Dark overgrown roots provide natural elevation ramps and partial cover.",
        "Breakable dark obelisks scatter explosive shadow dust."
      ],
      destructibleObjects: [
        "Dark Obelisk Pillars (collapse into debris)",
        "Void Crystal Formations"
      ],
      hazards: "Murky abyss below outer edges resets position if dropped."
    },
    omegaMechanics: {
      title: "Void Mist & Dissolving Ground",
      description: "Dark miasma rises and the ground periodically dissolves into the Void, dragging combatants down.",
      stageBraveryFormula: "Falling into the dark mist drains 300 Bravery every second and adds it directly to the Stage Bravery pool.",
      hazardBehavior: "The floor becomes intangible during Void Pulses. Grounded fighters sink into the mist and suffer vacuum drag.",
      tacticalImplication: "Forces combatants into the air. Ground combat becomes hazardous, heavily penalizing grounded combos."
    },
    battlegen: {
      item: "Dark Crystal",
      description: "Essence of absolute darkness used in crafting high-tier dark staves and Cloud of Darkness armor.",
      condition: "Shatter the central Dark Obelisk with a high-priority attack.",
      baseRate: "11.0%",
      bestTechnique: "Target the obelisk with Cloud of Darkness's [0-Form Particle Beam] or Sephiroth's [Scintilla]."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "Excellent standard tournament stage in Standard mode. Spacious dimensions provide fair matchups for both rushdown and zoning.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "High",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Aerial Duelists (Zidane, Kuja)", "Mid-Range Mages (Cloud of Darkness, Golbez)"],
      disfavoredArchetypes: ["Pure Wall-Pin Specialists"],
      characterSynergies: [
        { name: "Cloud of Darkness", slug: "cloud-of-darkness", role: "Advantaged", reason: "Particle beams and tentacle sweeps cover wide swathes of the root-covered platform." },
        { name: "Zidane", slug: "zidane", role: "Advantaged", reason: "Superb aerial drift and Free Energy connect seamlessly off root ramps." },
        { name: "Garland", slug: "garland", role: "Disadvantaged", reason: "Lack of immediate walls makes high-impact wall pins harder to confirm." }
      ]
    },
    tacticalTips: [
      "Use the tentacle grind rails to loop behind opponents who are charging stationary projectile attacks.",
      "In Omega mode, equip aerial mobility abilities (like Air Dash++ and Free Fall) to stay aloft while the floor dissolves.",
      "Destructible obelisks can be detonated to interrupt opponents who are collecting EX Cores nearby."
    ]
  },
  {
    id: "crystal-tower",
    name: "Crystal Tower",
    japaneseName: "クリスタルタワー (Kurisutaru Tawā)",
    gameOrigin: "Final Fantasy III",
    gameNumber: "FF III",
    gameSlug: "ff3",
    type: "012 New Stage",
    image: "images/arenas/crystal-tower.jpg",
    hasOmega: false,
    bgm: ["Crystal Tower (FFIII)", "Battle 2 (FFIII)"],
    lore: "The colossal azure spire constructed by the Ancients to channel the immense energy of the Light and Dark Crystals.",
    geometry: {
      size: "Medium",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "High",
      wallDensity: "High",
      grindRails: "Vertical crystalline facets running along the tower facade.",
      exCoreRoutes: "Spawns atop the ancient stone portal arch and on the grand staircase landing."
    },
    standardMechanics: {
      description: "The grand entrance courtyard situated between the Ancients' Maze and the soaring blue crystal spire.",
      features: [
        "Steep stone staircases flanked by massive crystalline retaining walls.",
        "Elevated entrance portico providing dominant high-ground positioning.",
        "Abundant vertical surfaces offering constant Wall Rush opportunities."
      ],
      destructibleObjects: [
        "Ancient Stone Gateposts",
        "Crystal Lantern Sconces"
      ],
      hazards: "Steep drop-offs between stairs create sudden vertical collision angles."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Ancient Crystal",
      description: "Radiant crystal remnant of the Ancients required for Onion Knight gear and Syrcus relics.",
      condition: "Execute a vertical Wall Rush against the Crystal Tower facade wall.",
      baseRate: "14.0%",
      bestTechnique: "Use Onion Knight's Swiftspell or Tifa's Waterkick into Falcon Dive against the tower wall."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "High-tier competitive arena. The distinct stair tiers and solid walls provide balanced options for wall rush setups without claustrophobic hazards.",
      wallRushAdvantage: "High",
      aerialAdvantage: "Medium",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Rushdown Comboists (Tifa, Onion Knight)", "Wall-Rush Specialists (Cecil, Squall)"],
      disfavoredArchetypes: ["Extreme Ground Campers"],
      characterSynergies: [
        { name: "Onion Knight", slug: "onion-knight", role: "Advantaged", reason: "Compact hitboxes and rapid physical-to-magic job switches thrive on tiered stairs." },
        { name: "Cecil", slug: "cecil", role: "Advantaged", reason: "Paladin Force and Dark Cannon leverage staircase elevation changes effortlessly." },
        { name: "The Emperor", slug: "the-emperor", role: "Disadvantaged", reason: "Sloped staircases cause ground mines and bomb traps to trigger at awkward angles." }
      ]
    },
    tacticalTips: [
      "Control the top landing of the grand staircase to force opponents to approach from disadvantageous lower angles.",
      "Vertical wall rushes against the crystal facade trigger extended stun, allowing easy follow-ups into Assist attacks.",
      "Grind the crystalline facet rails to quickly bypass enemy projectile spam on the stairs."
    ]
  },
  {
    id: "lunar-subterrane",
    name: "Lunar Subterrane",
    japaneseName: "月の民の館 (Tsuki no Tami no Yakata)",
    gameOrigin: "Final Fantasy IV",
    gameNumber: "FF IV",
    gameSlug: "ff4",
    type: "Classic Stage",
    image: "images/arenas/lunar-subterrane.jpg",
    hasOmega: true,
    bgm: ["Battle 1 (FFIV)", "Battle 2 (FFIV)", "The Dreadful Fight (FFIV)"],
    lore: "The mystical crystalline underground sanctum on the Red Moon where the slumbering Lunarians and Zemus reside.",
    geometry: {
      size: "Medium",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "High",
      wallDensity: "High",
      grindRails: "Translucent lunar energy rails traversing between upper crystal spires.",
      exCoreRoutes: "Spawns along the narrow crystal suspension bridges and inside the central crystal hollow."
    },
    standardMechanics: {
      description: "A gorgeous, multi-tiered crystalline cavern dominated by soaring translucent pillars and narrow glowing bridges.",
      features: [
        "Multiple levels of crystalline platforms connected by narrow walkways.",
        "Towering crystal spires that block wide-range projectile attacks.",
        "Reflective crystal floors that accentuate ground wave abilities."
      ],
      destructibleObjects: [
        "Crystal Stalactites (break loose and drop from ceiling)",
        "Translucent Bridge Railings"
      ],
      hazards: "Falling crystal debris when upper ceilings are struck with heavy attacks."
    },
    omegaMechanics: {
      title: "Lunar Gravity & Crystal Resonance",
      description: "Gravitational pulses fluctuate periodically, shifting EX Force absorption and altering falling speeds.",
      stageBraveryFormula: "Stage Bravery multiplies by 1.5x whenever a combatant is Wall Rushed into a resonant crystal spire.",
      hazardBehavior: "Low gravity pulses slow downward descent; EX Force orbs are violently pulled toward the ceiling.",
      tacticalImplication: "Rewards high-altitude aerial battles and makes EX Core race timing critical."
    },
    battlegen: {
      item: "Moon Stone",
      description: "Luminous lunar ore required for Cecil's Holy Lance / Deathbringer and Kain's Dragoon sets.",
      condition: "Dislodge and shatter a crystal stalactite using an upward launch attack.",
      baseRate: "13.5%",
      bestTechnique: "Launch the opponent upward with Kain's Rising Drive or Cecil's Radiant Wings into the ceiling."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "One of the most popular tournament stages in Dissidia history. Exceptional vertical variety and well-placed obstacles.",
      wallRushAdvantage: "High",
      aerialAdvantage: "High",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Aerial Skirmishers (Kain, Golbez)", "Mid-Range Jugglers (Cecil, Bartz)"],
      disfavoredArchetypes: ["Flat-Ground Only Fighters"],
      characterSynergies: [
        { name: "Cecil", slug: "cecil", role: "Advantaged", reason: "Switches seamlessly between Dark Knight ground control and Paladin aerial dominance." },
        { name: "Kain", slug: "kain", role: "Advantaged", reason: "Lancet and Jump utilize the tall crystal spires for cover and surprise dives." },
        { name: "Golbez", slug: "golbez", role: "Advantaged", reason: "Nightglow and Gravity Force trap enemies easily between crystal pillars." }
      ]
    },
    tacticalTips: [
      "Use the crystal spires to break lock-on from long-range homing attacks like Terra's Flare or Ultimecia's Apocalypse.",
      "Strike the ceiling stalactites while the opponent is underneath to drop heavy debris and force a dodge.",
      "In Omega mode, jump immediately when gravity shifts to collect rising EX Force before your rival."
    ]
  },
  {
    id: "the-rift",
    name: "The Interdimensional Rift",
    japaneseName: "次元の狭間 (Jigen no Hazama)",
    gameOrigin: "Final Fantasy V",
    gameNumber: "FF V",
    gameSlug: "ff5",
    type: "Classic Stage",
    image: "images/arenas/the-rift.jpg",
    hasOmega: true,
    bgm: ["Battle 1 (FFV)", "Clash on the Big Bridge (FFV)", "The Final Battle (FFV)"],
    lore: "The chaotic vortex between dimensions where Exdeath was banished and where the Tree of Moore merged with the Void.",
    geometry: {
      size: "Medium",
      structure: "Dynamic Shifting",
      ceilingHeight: "Variable",
      wallDensity: "Variable",
      grindRails: "Ethereal void ribbons that morph shape as the stage shifts.",
      exCoreRoutes: "Dynamically repositioned depending on active dimensional form (Tree / Castle / Void)."
    },
    standardMechanics: {
      description: "A surreal, metamorphic arena that transitions across three distinct dimensional forms during battle.",
      features: [
        "Form 1 (Tree of Moore): Organic wooden platforms with multiple vertical branches.",
        "Form 2 (Phantom Castle): Classical masonry battlements, narrow doorways, and stone walls.",
        "Form 3 (The Void): Minimalist floating platforms in pure space with wide open lines."
      ],
      destructibleObjects: [
        "Phantom Castle Turret Walls",
        "Ancient Tree Roots",
        "Void Fragment Crystals"
      ],
      hazards: "Shifting geometry dynamically alters Wall Rush angles and defensive cover mid-match."
    },
    omegaMechanics: {
      title: "Dimensional Distortion & Void Vortex",
      description: "Form transitions occur twice as fast, accompanied by spatial distortion fields that deflect ranged attacks.",
      stageBraveryFormula: "Stage Bravery surges by +500 every time the dimension shifts forms.",
      hazardBehavior: "Gravitational anomalies bend projectile flight paths and cause random Wall Rush ricochets.",
      tacticalImplication: "Forces players to constantly adapt their combat style as the arena shifts between tight castle and open void."
    },
    battlegen: {
      item: "Void Fragment",
      description: "Raw essence of nothingness used to forge Exdeath's Void gear and Bartz's Brave Blade.",
      condition: "Cause a Wall Rush right as the stage transitions between forms.",
      baseRate: "10.0%",
      bestTechnique: "Time Bartz's Climhazzard or Gilgamesh's Naginata to wall-splat the opponent during form shift."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "Dynamic counterpick stage. Demands high player adaptability as preferred strategies change with each form shift.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "Medium",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Adaptable All-Rounders (Bartz, Gilgamesh)", "Counter Specialists (Exdeath)"],
      disfavoredArchetypes: ["One-Dimensional Specialists"],
      characterSynergies: [
        { name: "Bartz", slug: "bartz", role: "Advantaged", reason: "Versatile toolkit adapts instantly whether the stage is tight (Castle) or wide open (Void)." },
        { name: "Exdeath", slug: "exdeath", role: "Advantaged", reason: "Omniblock and High Block benefit immensely from tight doorways in Castle form." },
        { name: "Gilgamesh", slug: "gilgamesh", role: "Advantaged", reason: "RNG weapon swings and Rocket Punch control changing platform spaces." }
      ]
    },
    tacticalTips: [
      "Pay attention to the background distortion audio cue—it signals an imminent stage form shift.",
      "Switch to close-quarters combat during Castle form, then transition to projectile harassment when Void form opens up.",
      "In Omega mode, aim projectiles slightly off-center to compensate for gravitational distortion bending."
    ]
  },
  {
    id: "kefkas-tower",
    name: "Kefka's Tower",
    japaneseName: "瓦礫の塔 (Gareki no Tō)",
    gameOrigin: "Final Fantasy VI",
    gameNumber: "FF VI",
    gameSlug: "ff6",
    type: "Classic Stage",
    image: "images/arenas/kefkas-tower.jpg",
    hasOmega: true,
    bgm: ["Battle (FFVI)", "The Decisive Battle (FFVI)", "Dancing Mad (FFVI)"],
    lore: "The twisted monument of junk metal, Magitek machinery, and Imperial ruins erected by God Kefka atop the World of Ruin.",
    geometry: {
      size: "Medium",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "High",
      wallDensity: "High",
      grindRails: "Rusted metal girders, copper pipes, and heavy steam conduits.",
      exCoreRoutes: "Spawns directly above the active Magitek steam vents and on the central crane girder."
    },
    standardMechanics: {
      description: "An asymmetric industrial wasteland filled with rusted girders, broken cranes, and pressurized Magitek steam vents.",
      features: [
        "Multi-tiered junk platforms with jagged metal edges.",
        "Magitek steam vents that periodically blast superheated steam upward.",
        "Numerous metallic surfaces providing harsh Wall Rush rebounds."
      ],
      destructibleObjects: [
        "Rusted Crane Arms (collapse on impact)",
        "Magitek Steam Pipes (erupt with steam when broken)"
      ],
      hazards: "Steam vents deal 100 BRV damage and launch fighters high into the air if stepped on while active."
    },
    omegaMechanics: {
      title: "Magitek Overload & Hyper Steam",
      description: "Kefka's Magitek reactor overloads, causing steam vents to blast continuously with expanded hitboxes.",
      stageBraveryFormula: "Every time a player is hit by a steam vent, 250 Bravery is transferred from the player to the Stage Bravery pool.",
      hazardBehavior: "Steam vents erupt violently and randomly across all platforms, creating airborne launch traps.",
      tacticalImplication: "Extremely volatile. Can be used defensively to escape enemy combos by intentionally riding a steam jet."
    },
    battlegen: {
      item: "Magicite Shard",
      description: "Crystallized soul of an Esper used in forging Terra's Maduin sets and Kefka's clown staves.",
      condition: "Shatter a pressurized Magitek steam pipe during battle.",
      baseRate: "12.5%",
      bestTechnique: "Smash the opponent into a steam pipe with Terra's Riot Blade or Kefka's Havoc Wing."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "Tactical counterpick arena. The steam vents introduce vertical movement opportunities and escape routes for skilled players.",
      wallRushAdvantage: "High",
      aerialAdvantage: "High",
      projectileAdvantage: "Low",
      favoredArchetypes: ["Trap Masters (Kefka)", "Air-to-Ground Divers (Terra, Sephiroth)"],
      disfavoredArchetypes: ["Linear Horizontal Projectile Users (Laguna)"],
      characterSynergies: [
        { name: "Kefka", slug: "kefka", role: "Advantaged", reason: "Bouncing, zig-zag magic projectiles richochet unpredictably off junk girders." },
        { name: "Terra", slug: "terra", role: "Advantaged", reason: "Floats effortlessly above steam hazards while raining Meteor from above." },
        { name: "Laguna", slug: "laguna", role: "Disadvantaged", reason: "Machine gun and shotgun bullet paths get frequently blocked by junk walls." }
      ]
    },
    tacticalTips: [
      "Bait aggressive opponents into chasing you over a dormant steam vent right as it begins to whistle.",
      "Use the rusted crane rails for quick repositioning from the low junk yard to the high control tower.",
      "Destructible steam pipes can be smashed to create instant temporary smoke screens that obscure projectile trajectories."
    ]
  },
  {
    id: "phantom-train",
    name: "Phantom Train",
    japaneseName: "魔列車 (Maressha)",
    gameOrigin: "Final Fantasy VI",
    gameNumber: "FF VI",
    gameSlug: "ff6",
    type: "012 New Stage",
    image: "images/arenas/phantom-train.jpg",
    hasOmega: false,
    bgm: ["Phantom Forest / Train (FFVI)", "The Decisive Battle (FFVI)"],
    lore: "The spectral steam engine traveling through the Phantom Forest, ferrying departed souls to the world beyond.",
    geometry: {
      size: "Small",
      structure: "Linear Corridor",
      ceilingHeight: "Low",
      wallDensity: "Very High",
      grindRails: "Overhead telephone wires and locomotive roof edge trim.",
      exCoreRoutes: "Spawns near the locomotive smokestack and on the rear caboose platform."
    },
    standardMechanics: {
      description: "A narrow, high-speed moving stage set atop the roofs and inside the passenger cars of a speeding spectral locomotive.",
      features: [
        "Narrow horizontal layout with fixed camera tracking along the train cars.",
        "Destructible passenger seats, windows, and steam chimneys.",
        "Constant high-speed background parallax and rushing wind."
      ],
      destructibleObjects: [
        "Train Roof Hatches (break to drop into interior passenger cars)",
        "Passenger Seats and Luggage Racks",
        "Smokestack Cowling"
      ],
      hazards: "Severe lateral boundary limits. Sidestepping is constrained to forward and backward linear paths."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Ghostly Coal",
      description: "Spectral fuel from the Phantom Train used to forge Sabin's claws and Shadow's ninja gear.",
      condition: "Break through a train roof hatch to force the fight into the passenger cabin.",
      baseRate: "16.0%",
      bestTechnique: "Execute an overhead downward slam like Cloud's Braver or Garland's Round Edge onto the roof hatch."
    },
    competitiveData: {
      tier: "Hazard (Banned/Casual)",
      summary: "Banned in competitive tournaments due to extreme linear corridor constraints, restrictive camera angles, and projectile lockdown loops.",
      wallRushAdvantage: "High",
      aerialAdvantage: "Low",
      projectileAdvantage: "High",
      favoredArchetypes: ["Linear Snipers (Laguna, Firion)", "Straight-Line Rushers (Squall, Tidus, Lightning)"],
      disfavoredArchetypes: ["Evasive Mages (Ultimecia, Kuja, Terra)"],
      characterSynergies: [
        { name: "Laguna", slug: "laguna", role: "Advantaged", reason: "Machine gun bullets, Ragnarok Blade, and Shotgun pierce straight down the narrow train corridor." },
        { name: "Squall", slug: "squall", role: "Advantaged", reason: "Solid Barrel and Rough Divide track flawlessly in the narrow hallway with zero escape room." },
        { name: "Kuja", slug: "kuja", role: "Disadvantaged", reason: "Cannot perform wide aerial dance rings inside the tight passenger cabins." }
      ]
    },
    tacticalTips: [
      "Break the roof hatches to drop inside the cabin if you need to escape aerial bombardment from above.",
      "Fire straight-line attacks like Firion's Straightarrow or Cloud's Blade Beam—opponents have minimal room to dodge laterally.",
      "Watch the caboose edge: knocking an opponent off the rear causes an immediate Wall Rush reset against the train coupler."
    ]
  },
  {
    id: "planets-core",
    name: "Planet's Core",
    japaneseName: "星の体内 (Hoshi no Tainai)",
    gameOrigin: "Final Fantasy VII",
    gameNumber: "FF VII",
    gameSlug: "ff7",
    type: "Classic Stage",
    image: "images/arenas/planets-core.jpg",
    hasOmega: true,
    bgm: ["Let the Battles Begin! (FFVII)", "Fight On! (FFVII)", "One-Winged Angel (FFVII)"],
    lore: "The innermost crater of the Northern Cave where Sephiroth gathered the Lifestream to summon Meteor and merge with the Planet.",
    geometry: {
      size: "Large",
      structure: "Enclosed Chamber",
      ceilingHeight: "High",
      wallDensity: "Moderate",
      grindRails: "Swirling green Lifestream arcs and ancient geological crystalline rings.",
      exCoreRoutes: "Spawns directly atop the central rising Mako platform and inside the crater vortex."
    },
    standardMechanics: {
      description: "A colossal circular subterranean crater with a central floating platform that ascends and descends over a glowing pool of pure Mako.",
      features: [
        "Dynamic central elevator platform that periodically changes vertical height.",
        "Curved crater walls providing circular Wall Rush trajectory rebounds.",
        "Mako pool at the bottom that acts as a hazard pit."
      ],
      destructibleObjects: [
        "Mako Crystal Outcrops",
        "Floating Geological Slabs"
      ],
      hazards: "Falling into the bottom Mako pool causes 150 BRV damage and launches the player upward."
    },
    omegaMechanics: {
      title: "Lifestream Geysers & Mako Eruption",
      description: "The Lifestream erupts violently, shooting green Mako geysers from the abyss that shower the arena with EX energy.",
      stageBraveryFormula: "Stage Bravery surges by +1,000 whenever a Mako geyser erupts.",
      hazardBehavior: "Geysers erupt from the floor at random intervals, dealing heavy BRV damage and knocking targets into the ceiling.",
      tacticalImplication: "High-risk high-reward EX Core farming. Players must dodge geysers while snatching massive clusters of EX Force."
    },
    battlegen: {
      item: "Materia",
      description: "Condensed Mako sphere containing the knowledge of the Ancients, required for Cloud and Sephiroth ultimate gear.",
      condition: "Wall-rush the opponent into the central floating elevator platform while it is moving.",
      baseRate: "12.0%",
      bestTechnique: "Use Cloud's Climhazzard or Sephiroth's Godspeed to smash the target against the elevator column."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "A premier tournament arena. The circular geometry, central elevator, and expansive flight ceiling allow every playstyle to express skill.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "High",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Heavy Hitters (Cloud, Sephiroth)", "Aerial Duelists (Tifa, Kain)"],
      disfavoredArchetypes: ["Pure Ground Campers"],
      characterSynergies: [
        { name: "Cloud", slug: "cloud", role: "Advantaged", reason: "Omnislash Ver. 5 and Slashing Blow benefit from circular wall ricochet angles." },
        { name: "Sephiroth", slug: "sephiroth", role: "Advantaged", reason: "Octaslash and Black Materia cover the entire width of the central platform." },
        { name: "Tifa", slug: "tifa", role: "Advantaged", reason: "Feint cancels and Somersault bounce cleanly off the circular perimeter." }
      ]
    },
    tacticalTips: [
      "Stand on the central platform as it rises to gain high-ground advantage for downward HP moves like Braver or Hell's Gate.",
      "Ride the swirling Lifestream grind rails to safely collect floating EX Cores without touching the Mako pool.",
      "In Omega mode, time your Wall Rush attacks so the opponent ricochets directly into an active Mako geyser."
    ]
  },
  {
    id: "ultimecias-castle",
    name: "Ultimecia's Castle",
    japaneseName: "アルティミシア城 (Arutimisia Jō)",
    gameOrigin: "Final Fantasy VIII",
    gameNumber: "FF VIII",
    gameSlug: "ff8",
    type: "Classic Stage",
    image: "images/arenas/ultimecias-castle.jpg",
    hasOmega: true,
    bgm: ["Don't be Afraid (FFVIII)", "Force Your Way (FFVIII)", "The Extreme (FFVIII)"],
    lore: "The gothic fortress suspended in the future where Time Compression converges all space, time, and existence into a single point.",
    geometry: {
      size: "Medium",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "High",
      wallDensity: "High",
      grindRails: "Giant swinging clock pendulums and rotating brass clockwork gears.",
      exCoreRoutes: "Spawns atop the swinging chandelier and inside the giant rotating clock mechanism."
    },
    standardMechanics: {
      description: "A gothic clockwork cathedral featuring swinging pendulums, massive spinning gears, grand chandeliers, and broken bridges.",
      features: [
        "Hanging chandeliers that can be severed, crashing onto the lower floor.",
        "Massive clock pendulums that act as moving platforms and grind rails.",
        "Grand staircases and cathedral arches providing complex Wall Rush angles."
      ],
      destructibleObjects: [
        "Crystal Chandeliers (shatter and drop down)",
        "Clock Tower Glass Dials",
        "Stone Balcony Railings"
      ],
      hazards: "Falling chandeliers deal damage and crush anyone standing below."
    },
    omegaMechanics: {
      title: "Time Compression & Chaos Clockwork",
      description: "Time rewinds, fast-forwards, and fractures. Destroyed chandeliers reconstruct and shatter repeatedly, and clock gears spin wildly.",
      stageBraveryFormula: "Stage Bravery constantly randomizes every 5 seconds, fluctuating wildly between 500 and 6,000.",
      hazardBehavior: "Spinning clock gears deal contact BRV damage; time-distortion waves reverse player momentum unexpectedly.",
      tacticalImplication: "Completely destabilizes Bravery management. A single Break during high Stage Bravery can instantly decide the match."
    },
    battlegen: {
      item: "Sorceress's Heart",
      description: "Arcane temporal jewel used to forge Squall's Lionheart and Ultimecia's Sorceress sets.",
      condition: "Cut down or shatter the grand central chandelier with an attack.",
      baseRate: "11.5%",
      bestTechnique: "Slash the chandelier chain using Squall's Aerial Circle or Ultimecia's Great Attractor."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "Staple competitive stage in Standard mode. The moving pendulum rails and multi-level layout encourage dynamic aerial movement.",
      wallRushAdvantage: "High",
      aerialAdvantage: "High",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Acrobatic Melee (Squall, Laguna)", "Time / Space Zoners (Ultimecia)"],
      disfavoredArchetypes: ["Low-Mobility Brutes"],
      characterSynergies: [
        { name: "Squall", slug: "squall", role: "Advantaged", reason: "Beat Fang and Rough Divide chase enemies effortlessly across pendulum grind rails." },
        { name: "Ultimecia", slug: "ultimecia", role: "Advantaged", reason: "Knight's Arrows and Great Attractor trap opponents against the complex clockwork geometry." },
        { name: "Laguna", slug: "laguna", role: "Advantaged", reason: "Can perch on upper balcony ledges to rain down Satellite Beam and grenades." }
      ]
    },
    tacticalTips: [
      "Sever the chandelier while the opponent is engaging below to score a surprise stagger and free Bravery break.",
      "Jump onto the swinging pendulum to ride it up to the high ceiling EX Core spawn point.",
      "In Omega mode, monitor the fluctuating Stage Bravery counter and only commit your high-risk HP attacks when the pool is peaked."
    ]
  },
  {
    id: "crystal-world",
    name: "Crystal World",
    japaneseName: "クリスタルワールド (Kurisutaru Wārudo)",
    gameOrigin: "Final Fantasy IX",
    gameNumber: "FF IX",
    gameSlug: "ff9",
    type: "Classic Stage",
    image: "images/arenas/crystal-world.jpg",
    hasOmega: true,
    bgm: ["Battle 1 (FFIX)", "Battle 2 (FFIX)", "The Darkness of Eternity (FFIX)"],
    lore: "The birthplace of all souls where the Crystal resides at the core of existence, targeted by Trance Kuja for total annihilation.",
    geometry: {
      size: "Large",
      structure: "Open Sky",
      ceilingHeight: "Infinite / Open Sky",
      wallDensity: "Low",
      grindRails: "Orbiting crystal shards and luminous planetary rings.",
      exCoreRoutes: "Spawns floating in the high cosmic open void and around the central crystal core."
    },
    standardMechanics: {
      description: "A surreal, infinite cosmic void filled with floating geometric crystal blocks set before the ominous backdrop of Grand Cross.",
      features: [
        "Scattered floating crystal platforms that shatter upon taking heavy damage and slowly regenerate.",
        "Zero outer walls—completely unobstructed aerial combat space.",
        "Uncapped ceiling allowing maximum vertical climbing and high-altitude Assist calls."
      ],
      destructibleObjects: [
        "Floating Crystal Blocks (shatter into floating fragments)",
        "Planetary Ring Facets"
      ],
      hazards: "Lack of walls makes ground Wall Rush difficult; requires downward floor slams."
    },
    omegaMechanics: {
      title: "Grand Cross Cosmic Pulse",
      description: "The Grand Cross celestial vortex pulses in the background, detonating all floating crystal platforms simultaneously.",
      stageBraveryFormula: "Stage Bravery is dynamically gifted to the player with lower HP whenever Grand Cross pulses.",
      hazardBehavior: "Periodic cosmic shockwaves disintegrate all platforms, creating zero-gravity float zones.",
      tacticalImplication: "Acts as a powerful comeback mechanic for trailing fighters while stripping all defensive cover."
    },
    battlegen: {
      item: "Star's Core",
      description: "Pure origin crystal shard used to synthesize Zidane's Ultima Weapon and Kuja's Astral robes.",
      condition: "Shatter three or more floating crystal platforms in a single match.",
      baseRate: "14.0%",
      bestTechnique: "Use wide explosive AoE attacks like Kuja's Ultima or Zidane's Tidal Flame across platform clusters."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "The definitive aerial tournament arena. Tests pure spacing, flight trajectory, and assist timing with minimal wall interference.",
      wallRushAdvantage: "Low",
      aerialAdvantage: "High",
      projectileAdvantage: "High",
      favoredArchetypes: ["Aerial Duelists (Zidane, Kuja)", "Artillery Mages (Terra, Shantotto)"],
      disfavoredArchetypes: ["Wall-Dependent Grapplers (Jecht, Garland)"],
      characterSynergies: [
        { name: "Zidane", slug: "zidane", role: "Advantaged", reason: "Supreme 8-way aerial dash mobility and Vortex dominate the open air." },
        { name: "Kuja", slug: "kuja", role: "Advantaged", reason: "Glide and Flare Star control massive spheres of empty space with impunity." },
        { name: "Jecht", slug: "jecht", role: "Disadvantaged", reason: "Cannot easily confirm Jecht Rush without solid perimeter walls nearby." }
      ]
    },
    tacticalTips: [
      "Since outer walls are absent, aim all Wall Rush attacks downward into the bottom crystal floor or upward into the ceiling boundary.",
      "Shatter platforms under your opponent to interrupt their stationary spell charging.",
      "In Omega mode, preserve your EX Revenge for the Grand Cross pulse to maximize your comeback Bravery boost."
    ]
  },
  {
    id: "prima-vista",
    name: "Theater Ship Prima Vista",
    japaneseName: "劇場艇プリマビスタ (Gekijōtei Purima Bisuta)",
    gameOrigin: "Final Fantasy IX",
    gameNumber: "FF IX",
    gameSlug: "ff9",
    type: "012 New Stage",
    image: "images/arenas/prima-vista.jpg",
    hasOmega: false,
    bgm: ["Battle 1 (FFIX)", "Vamo' Alla Flamenco (FFIX)"],
    lore: "The massive luxury theater airship of Baku and the Tantalus Theater Troupe, outfitted with a full opera proscenium and steam engines.",
    geometry: {
      size: "Medium",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "High",
      wallDensity: "High",
      grindRails: "Tightrope rigging, swinging stage ropes, and upper catwalk railings.",
      exCoreRoutes: "Spawns center stage under the proscenium arch and atop the stage lighting truss."
    },
    standardMechanics: {
      description: "The theatrical wooden stage, ornate proscenium arch, swinging ropes, and cargo netting of the Tantalus theater ship.",
      features: [
        "Multi-layered theater stage with backdrop scenery and elevated orchestra catwalks.",
        "Swinging rope rigging that allows rapid swinging and grind-rail glides.",
        "Destructible stage props, wooden backdrops, and lighting rigs."
      ],
      destructibleObjects: [
        "Theatrical Stage Backdrops (can be torn and smashed down)",
        "Stage Lighting Rigging and Props",
        "Cinna's Cargo Barrels"
      ],
      hazards: "Swinging stage props can stagger careless fighters who bump into them."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Cinna's Mallet",
      description: "Iconic wooden hammer component from Tantalus member Cinna, used to forge unique comedy weapons.",
      condition: "Shatter the main stage backdrop or smash 3+ theater props.",
      baseRate: "18.0%",
      bestTechnique: "Smash the opponent through the backdrop with Zidane's Stellar Circle 5 or Bartz's Solid Barrel."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "Dynamic counterpick arena. The rope rigging and multi-tiered proscenium catwalks provide unmatched mobility options for acrobatic fighters.",
      wallRushAdvantage: "High",
      aerialAdvantage: "High",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Acrobatic Skirmishers (Zidane, Prishe, Bartz)", "Assault Mages (Yuna)"],
      disfavoredArchetypes: ["Sluggish Heavy Tank Archetypes"],
      characterSynergies: [
        { name: "Zidane", slug: "zidane", role: "Advantaged", reason: "Rope rails and stage catwalks mirror his canonical home turf; unrivaled agility." },
        { name: "Prishe", slug: "prishe", role: "Advantaged", reason: "Dropkick and Spin Attack chain effortlessly across multi-level theater decks." },
        { name: "Yuna", slug: "yuna", role: "Advantaged", reason: "Can summon Valefor and Bahamut from the safety of the upper lighting catwalks." }
      ]
    },
    tacticalTips: [
      "Use the stage ropes to instantly slingshot behind opponents who are charging high-commitment moves.",
      "Tear down the stage backdrop early to open up clean horizontal Wall Rush routes into the rear backstage wall.",
      "Climb to the upper lighting catwalk to gain uncontested control of EX Core spawns."
    ]
  },
  {
    id: "dreams-end",
    name: "Dream's End",
    japaneseName: "夢の終わり (Yume no Owari)",
    gameOrigin: "Final Fantasy X",
    gameNumber: "FF X",
    gameSlug: "ff10",
    type: "Classic Stage",
    image: "images/arenas/dreams-end.jpg",
    hasOmega: true,
    bgm: ["Battle Theme (FFX)", "Otherworld (FFX)", "Fight With Seymour (FFX)"],
    lore: "The somber, suspended ruins of Dream Zanarkand where Braska's Final Aeon (Jecht) fell and Yu Yevon's cycle of sorrow ended.",
    geometry: {
      size: "Medium",
      structure: "Enclosed Chamber",
      ceilingHeight: "Medium",
      wallDensity: "Moderate",
      grindRails: "Rotating golden Yu Yevon glyph rings circling the central sword.",
      exCoreRoutes: "Spawns directly along the crossguard of the giant central sword and on outer stone ledges."
    },
    standardMechanics: {
      description: "A ruined circular Zanarkand plaza dominated by a colossal greatsword plunged into the center, surrounded by rotating glyph discs.",
      features: [
        "The massive central greatsword serves as a massive line-of-sight blocker and high Wall Rush target.",
        "Rotating outer glyph rings that provide elevated vantage points.",
        "Sunken circular courtyard that funnels grounded engagements toward the sword."
      ],
      destructibleObjects: [
        "Zanarkand Ruin Masonry",
        "Outer Stone Pedestals"
      ],
      hazards: "None in Standard mode. Clean, focused circular combat arena."
    },
    omegaMechanics: {
      title: "Yu Yevon's Curse & Gravitational Abyss",
      description: "Yu Yevon's dark glyphs glow with cursed energy, creating a gravitational vortex around the central greatsword.",
      stageBraveryFormula: "Stage Bravery is siphoned at 2x rate from the player currently holding the higher HP percentage.",
      hazardBehavior: "The central sword emanates dark gravitational pulses, pulling combatants toward the hilt and slowing outward dashes.",
      tacticalImplication: "Penalizes running away to protect a life lead; forces the leader to fight in close-quarters under heavy gravity."
    },
    battlegen: {
      item: "Moonflow",
      description: "Mystical Pyreflies and water essence from the Moonflow river, used in forging Tidus's Brotherhood and Jecht gear.",
      condition: "Slam the opponent into the giant central greatsword with a Wall Rush attack.",
      baseRate: "12.0%",
      bestTechnique: "Land Tidus's Spiral Cut or Jecht's Ultimate Jecht Shot directly into the greatsword blade."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "Premier tournament arena. The central sword creates deep tactical mindgames around line-of-sight breaking, baiting, and corner trapping.",
      wallRushAdvantage: "High",
      aerialAdvantage: "Medium",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Rushdown Specialists (Tidus, Jecht, Squall)", "Close-Quarters Duelists (Firion, Tifa)"],
      disfavoredArchetypes: ["Blind Long-Range Projectile Spammers"],
      characterSynergies: [
        { name: "Tidus", slug: "tidus", role: "Advantaged", reason: "Dodge attacks (Dart, Cut & Run) effortlessly weave around the central sword geometry." },
        { name: "Jecht", slug: "jecht", role: "Advantaged", reason: "Jecht Block and Jecht Stream pin opponents easily against the colossal sword blade." },
        { name: "The Emperor", slug: "the-emperor", role: "Advantaged", reason: "Hides behind the giant sword to safely cast unblockable Starfall cataclysms." }
      ]
    },
    tacticalTips: [
      "Use the massive greatsword to safely break line-of-sight when an opponent activates EX Mode or Assist Chase.",
      "Wall Rush angles against the curved sword blade rebound at sharp 90-degree angles—be ready to input quick Assist follows.",
      "In Omega mode, use the gravitational pull to accelerate your forward dash when initiating aggressive rushdowns."
    ]
  },
  {
    id: "empyreal-paradox",
    name: "Empyreal Paradox",
    japaneseName: "宿星の座 (Shukusei no Za)",
    gameOrigin: "Final Fantasy XI",
    gameNumber: "FF XI",
    gameSlug: "ff11",
    type: "012 New Stage",
    image: "images/arenas/empyreal-paradox.jpg",
    hasOmega: false,
    bgm: ["Battle Theme (FFXI)", "Awakening (FFXI)"],
    lore: "The celestial sanctum atop the floating ruins of Tu'Lia (The Celestial Capital), housing the radiant Mothercrystal where Promathia and Selh'teus clashed.",
    geometry: {
      size: "Huge",
      structure: "Open Sky",
      ceilingHeight: "Infinite / Open Sky",
      wallDensity: "Very Low",
      grindRails: "Luminous curved light-ribbon rails orbiting the Mothercrystal vortex.",
      exCoreRoutes: "Spawns within the inner orbit of the Mothercrystal and high above the floating polygonal platforms."
    },
    standardMechanics: {
      description: "Pristine white floating polygonal rings orbiting the radiant Mothercrystal in an endless celestial void.",
      features: [
        "Vast open airspace with minimal physical obstructions.",
        "Floating celestial crystal monoliths that absorb stray magical projectiles.",
        "Slower natural Bravery drainage when recovering from Break status."
      ],
      destructibleObjects: [
        "Celestial Polygonal Slabs",
        "Orbital Crystal Runestones"
      ],
      hazards: "Virtually zero perimeter walls; Wall Rush only possible into ground slabs or ceiling boundary."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Mothercrystal Shard",
      description: "Divine crystal fragment holding the pure light of Altana, required for Shantotto and Prishe relic gear.",
      condition: "Discharge an EX Burst or land a 5000+ damage HP attack within orbit of the Mothercrystal.",
      baseRate: "15.0%",
      bestTechnique: "Trigger Shantotto's Play Rough EX Burst or Prishe's Auroral Uppercut inside the central orbit."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "Top-tier tournament stage for open-field aerial warfare. Exceptional neutral spacing with zero hazard disruptions.",
      wallRushAdvantage: "Low",
      aerialAdvantage: "High",
      projectileAdvantage: "High",
      favoredArchetypes: ["High-Tier Zoners (Shantotto, Terra, Ultimecia)", "Aerial Kings (Kuja, Zidane)"],
      disfavoredArchetypes: ["Corner-Pressure Wall Specialists"],
      characterSynergies: [
        { name: "Shantotto", slug: "shantotto", role: "Advantaged", reason: "Can safely charge tier-3 ancient magic (Freeze, Flare, Tornado) across massive open distances." },
        { name: "Prishe", slug: "prishe", role: "Advantaged", reason: "Weapon skill chains cover tremendous horizontal ground across floating rings." },
        { name: "Garland", slug: "garland", role: "Disadvantaged", reason: "Lack of nearby walls reduces the lethal payoff of his heavy swing knockbacks." }
      ]
    },
    tacticalTips: [
      "Leverage the orbital light-ribbon grind rails to reach top speed across the massive arena in seconds.",
      "Ground recovery from Bravery Break takes longer to drain—use this window to collect floating EX Cores safely.",
      "Position yourself between the opponent and the Mothercrystal to use its solid hitbox as cover against laser projectiles."
    ]
  },
  {
    id: "sky-fortress-bahamut",
    name: "Sky Fortress Bahamut",
    japaneseName: "空中要塞バハムート (Kūchū Yōsai Bahamūto)",
    gameOrigin: "Final Fantasy XII",
    gameNumber: "FF XII",
    gameSlug: "ff12",
    type: "012 New Stage",
    image: "images/arenas/sky-fortress-bahamut.jpg",
    hasOmega: false,
    bgm: ["Boss Battle (FFXII)", "Esper Battle (FFXII)", "Theme of the Empire (FFXII)"],
    lore: "The gigantic Mist-powered flying dreadnought created by Doctor Cid and Vayne Solidor to impose the Archadian Empire's eternal will.",
    geometry: {
      size: "Huge",
      structure: "Multi-Tiered Platforms",
      ceilingHeight: "Infinite / Open Sky",
      wallDensity: "Moderate",
      grindRails: "Heavy exterior armor conduits and massive wing-edge glide rails.",
      exCoreRoutes: "Spawns atop the main command bridge and above the colossal main cannon battery."
    },
    standardMechanics: {
      description: "The expansive exterior flight deck, colossal main cannons, massive wing nacelles, and roaring Mist thrusters of the Archadian airship.",
      features: [
        "Enormous horizontal flight deck with multi-tiered gun turret platforms.",
        "Slower Stage Bravery accumulation while standing grounded on the main deck.",
        "Massive cannon housings and radar towers providing sturdy Wall Rush obstacles."
      ],
      destructibleObjects: [
        "Fortress Sensor Radomes",
        "Airship Deck Plating and Exhaust Grates"
      ],
      hazards: "Roaring Mist engine exhausts at the rear deck push fighters upward if traversed."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Archadian Plate",
      description: "Heavy reinforced armor plating from the dreadnought hull, used to craft Gabranth and Vaan endgame gear.",
      condition: "Slam the opponent into the main cannon battery or command bridge structure.",
      baseRate: "14.5%",
      bestTechnique: "Use Vaan's Pyroclasm or Gabranth's Innocence into Hatred to wall-pin the target against the cannon."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "Popular tournament starter stage. Offers an enormous horizontal battlefield with distinct upper cannon ledges for tactical high-ground control.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "Medium",
      projectileAdvantage: "High",
      favoredArchetypes: ["Tactical Mid-Rangers (Vaan, Gabranth)", "High-Speed Rushers (Lightning, Sephiroth)"],
      disfavoredArchetypes: ["Slow Close-Range Bruisers"],
      characterSynergies: [
        { name: "Vaan", slug: "vaan", role: "Advantaged", reason: "8-weapon switch stances and Switch Ability cancel thrive in expansive multi-level terrain." },
        { name: "Gabranth", slug: "gabranth", role: "Advantaged", reason: "Can freely charge his EX Gauge from across the massive deck without immediate harassment." },
        { name: "Sephiroth", slug: "sephiroth", role: "Advantaged", reason: "Long Masamune reach and Godspeed cover tremendous horizontal swathes of the flight deck." }
      ]
    },
    tacticalTips: [
      "Gabranth players should immediately retreat to the far wingtips at round start to charge EX Mode safely.",
      "Use the giant cannon batteries to block horizontal Assist calls like Kuja or Cloud.",
      "Ride the wing-edge grind rails to perform high-speed dive attacks onto opponents below."
    ]
  },
  {
    id: "orphans-cradle",
    name: "Orphan's Cradle",
    japaneseName: "オーファンズ・クレイドル (Ōfanzu Kureidoru)",
    gameOrigin: "Final Fantasy XIII",
    gameNumber: "FF XIII",
    gameSlug: "ff13",
    type: "012 New Stage",
    image: "images/arenas/orphans-cradle.jpg",
    hasOmega: false,
    bgm: ["Blinded By Light (FFXIII)", "Saber's Edge (FFXIII)", "Nascent Requiem (FFXIII)"],
    lore: "The hyper-geometric pocket dimension generated by the fal'Cie Eden inside the Sanctum where Orphan reposes.",
    geometry: {
      size: "Large",
      structure: "Dynamic Shifting",
      ceilingHeight: "High",
      wallDensity: "Moderate",
      grindRails: "Luminescent geometric laser guide-lines connecting floating cubic platform clusters.",
      exCoreRoutes: "Spawns dynamically in the center of shifting cubic modules and along upper geometric arcs."
    },
    standardMechanics: {
      description: "A surreal, shifting labyrinth of cubic and geometric crystalline platforms floating in a neon-lit void.",
      features: [
        "Slowly shifting geometric platforms that rearrange elevation and line-of-sight during battle.",
        "Hollow geometric cubes that can be entered or utilized for cover.",
        "High-contrast neon surfaces with clear Wall Rush hitboxes."
      ],
      destructibleObjects: [
        "Geometric Fal'Cie Glyphs",
        "Floating Neon Cubic Segments"
      ],
      hazards: "Shifting platforms can cut off retreat paths or open sudden unexpected Wall Rush angles."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Eden Crystalline",
      description: "Hyper-advanced Sanctum matter used to synthesize Lightning's Blazefire Saber and ultimate Omega Weapon.",
      condition: "Break a shifting cubic module or execute a Wall Rush right as platforms rearrange.",
      baseRate: "15.5%",
      bestTechnique: "Use Lightning's Army of One or Crushing Blow to drive the opponent into a shifting cube."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "Modern tactical counterpick stage. Dynamic moving platforms test situational awareness and flexible positioning.",
      wallRushAdvantage: "High",
      aerialAdvantage: "High",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["Paradigm Changers (Lightning)", "High-Mobility Aerialists (Cloud, Bartz, Kain)"],
      disfavoredArchetypes: ["Rigid Stationary Trappers"],
      characterSynergies: [
        { name: "Lightning", slug: "lightning", role: "Advantaged", reason: "Ravager spells and Commando launches adapt instantly to shifting platform elevations." },
        { name: "Cloud", slug: "cloud", role: "Advantaged", reason: "Sonic Break and Climhazzard track smoothly across moving cubic platforms." },
        { name: "The Emperor", slug: "the-emperor", role: "Disadvantaged", reason: "Moving platforms disrupt pre-planted stationary mine and flare setups." }
      ]
    },
    tacticalTips: [
      "Keep track of the platform slide cycles—moving platforms can block an incoming HP attack if timed properly.",
      "Jump inside hollow cubic frames to take cover from wide-range Assist assists like Aerith or Kuja.",
      "Use the geometric laser rails for lightning-fast cross-map traversal when racing for newly spawned EX Cores."
    ]
  },
  {
    id: "orders-sanctuary",
    name: "Order's Sanctuary",
    japaneseName: "秩序の聖域 (Chitsujo no Seiiki)",
    gameOrigin: "Original / Cosmos",
    gameNumber: "Cosmos",
    gameSlug: "original",
    type: "Classic Stage",
    image: "images/arenas/orders-sanctuary.jpg",
    hasOmega: true,
    bgm: ["Cosmos (Dissidia)", "Battle 1 - Arrangement (Dissidia)", "The Messenger (Dissidia 012)"],
    lore: "The immaculate crystalline throne room and sacred sanctuary of the Goddess Cosmos, embodying divine harmony and order.",
    geometry: {
      size: "Medium",
      structure: "Enclosed Chamber",
      ceilingHeight: "High",
      wallDensity: "Moderate",
      grindRails: "Radiant golden halo rails suspended along the perimeter colonnade.",
      exCoreRoutes: "Spawns center stage right before the radiant throne of Cosmos and on the symmetrical side landings."
    },
    standardMechanics: {
      description: "A flawless, radiant crystalline palace featuring polished marble floors, symmetrical colonnades, and a golden throne dais.",
      features: [
        "Perfect rectangular symmetry designed specifically for competitive balance.",
        "Zero environmental RNG or hazardous floor traps in Standard mode.",
        "Clean, predictable Wall Rush rebounds off symmetrical marble pillars."
      ],
      destructibleObjects: [
        "Marble Temple Columns",
        "Cosmos Throne Side Banners"
      ],
      hazards: "None in Standard mode. The gold standard for pure 1v1 competitive dueling."
    },
    omegaMechanics: {
      title: "Cosmic Harmony & EX Radiance",
      description: "Divine light fills the sanctuary, accelerating Stage Bravery regeneration and prolonging EX Force life.",
      stageBraveryFormula: "Stage Bravery base pool is locked at 2,500 and regenerates twice as fast after a Break.",
      hazardBehavior: "EX Force orbs linger in the air 50% longer before fading; EX Gauge charge rate is boosted by 20%.",
      tacticalImplication: "Significantly accelerates EX Mode activation, favoring characters with devastating EX Bursts or EX Mode perks."
    },
    battlegen: {
      item: "Whitecrystal Gold",
      description: "Pure celestial gold blessed by Cosmos, required to forge the highest tier Cosmos relic equipment.",
      condition: "Shatter a temple marble pillar or execute an EX Burst in the throne dais.",
      baseRate: "12.0%",
      bestTechnique: "Trigger Warrior of Light's Overseer EX Burst or Firion's Dual Wield EX Burst center stage."
    },
    competitiveData: {
      tier: "Starter (Legal)",
      summary: "The primary tournament standard arena in competitive Dissidia 012. Symmetrical, fair, and free of disruptive gimmicks.",
      wallRushAdvantage: "Medium",
      aerialAdvantage: "Medium",
      projectileAdvantage: "Medium",
      favoredArchetypes: ["All Playstyles (100% Balanced)"],
      disfavoredArchetypes: ["Gimmick-Reliant Hazard Abusers"],
      characterSynergies: [
        { name: "Warrior of Light", slug: "warrior-of-light", role: "Advantaged", reason: "Shield tosses and Ascension mirror the flawless geometric balance of the room." },
        { name: "Squall", slug: "squall", role: "Advantaged", reason: "Honest frame data and solid Wall Rush confirmations reward pure execution." },
        { name: "Sephiroth", slug: "sephiroth", role: "Advantaged", reason: "Mid-range spacing and Iai strike timing are totally unobstructed." }
      ]
    },
    tacticalTips: [
      "Use the side marble pillars to intercept straight-line projectiles without losing offensive positioning.",
      "The symmetrical layout makes calculating Wall Rush trajectories 100% consistent from any location in the room.",
      "In Omega mode, capitalize on the accelerated EX Gauge boost to trigger early EX Revenge defensive counters."
    ]
  },
  {
    id: "edge-of-madness",
    name: "Edge of Madness",
    japaneseName: "狂乱の域 (Kyōran no Iki)",
    gameOrigin: "Original / Chaos",
    gameNumber: "Chaos",
    gameSlug: "original",
    type: "Boss Arena",
    image: "images/arenas/edge-of-madness.jpg",
    hasOmega: true,
    bgm: ["Chaos - Last Battle 1", "Chaos - Last Battle 2", "Chaos - Last Battle 3"],
    lore: "The apocalyptic volcanic abyss where the God of Discord, Chaos, reigns supreme over endless cycles of destruction.",
    geometry: {
      size: "Large",
      structure: "Enclosed Chamber",
      ceilingHeight: "High",
      wallDensity: "Moderate",
      grindRails: "Crimson magma conduits and jagged volcanic obsidian arcs.",
      exCoreRoutes: "Spawns floating over the deep magma chasm and above the ruined obsidian throne."
    },
    standardMechanics: {
      description: "A dark volcanic ruin overlooking a churning sea of magma, broken obsidian arches, and jagged rock pillars.",
      features: [
        "Jagged, uneven rocky footing that creates sloped combat angles.",
        "Deep magma trenches that deal damage upon direct contact.",
        "Dark obsidian arches providing high-altitude perch points."
      ],
      destructibleObjects: [
        "Obsidian Throne Spires",
        "Volcanic Rock Columns"
      ],
      hazards: "Magma pools deal 100 BRV damage and launch fallen fighters into the air."
    },
    omegaMechanics: {
      title: "Discord Cataclysm & Meteor Storm",
      description: "Chaos unleashes apocalyptic fury: molten magma geysers erupt and burning meteor debris rains from the dark sky.",
      stageBraveryFormula: "Stage Bravery doubles whenever either combatant enters EX Break.",
      hazardBehavior: "Falling burning meteors randomly strike the arena, inflicting heavy knockback and breaking guards.",
      tacticalImplication: "Extreme volatility. High-stakes gambling where a single Break can yield over 9,999 Bravery."
    },
    battlegen: {
      item: "Discord Essence",
      description: "Chaotic primordial fire used to synthesize Chaos faction weapons and dark Lufenian gear.",
      condition: "Slam the opponent into the ruined obsidian throne or shatter 2+ volcanic columns.",
      baseRate: "11.0%",
      bestTechnique: "Use Garland's Earthquake or Garland's Flare to destroy the throne pillars."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "High-drama boss arena. Sloped terrain and magma trenches add tactical depth while retaining ample room for high-level neutral.",
      wallRushAdvantage: "High",
      aerialAdvantage: "High",
      projectileAdvantage: "Low",
      favoredArchetypes: ["Heavy Bruisers (Garland, Golbez)", "Aggressive Rushdown (Squall, Tifa)"],
      disfavoredArchetypes: ["Flat-Ground Campers"],
      characterSynergies: [
        { name: "Garland", slug: "garland", role: "Advantaged", reason: "Brutal sweeping heavy attacks smash opponents into jagged volcanic spires." },
        { name: "Golbez", slug: "golbez", role: "Advantaged", reason: "Sector Ray and Cosmic Ray trap enemies in the magma trenches." },
        { name: "Firion", slug: "firion", role: "Disadvantaged", reason: "Uneven rocky slopes cause ground weapon chains to miss vertical hitboxes." }
      ]
    },
    tacticalTips: [
      "Force opponents toward the magma trenches where a Wall Rush downward causes double impact damage.",
      "Use the jagged obsidian arches to take high ground and rain down tracking projectiles.",
      "In Omega mode, watch for the red ground target markers indicating incoming meteor strikes."
    ]
  },
  {
    id: "edge-of-discord",
    name: "Edge of Discord (Land of the Stupor)",
    japaneseName: "大混乱の果て / 愚者の大地 (Gusha no Daichi)",
    gameOrigin: "Original / Feral Chaos",
    gameNumber: "000 Post-Game",
    gameSlug: "original",
    type: "Boss Arena",
    image: "images/arenas/edge-of-discord.jpg",
    hasOmega: false,
    bgm: ["Cantata Mortis & God in Fire (Dissidia 012)", "The Beginning of the End"],
    lore: "The desolate scorched wasteland at the deepest floor of the 000 Gateway gauntlet where the mindless primal rage of Feral Chaos is unleashed.",
    geometry: {
      size: "Huge",
      structure: "Open Sky",
      ceilingHeight: "Infinite / Open Sky",
      wallDensity: "Low",
      grindRails: "Vast crimson flame trails and smoking volcanic crater ridges.",
      exCoreRoutes: "Spawns across the vast open volcanic plain and atop smoking rock crags."
    },
    standardMechanics: {
      description: "An immense, scorched volcanic plain designed to give players room to survive the screen-filling, relentless assaults of Feral Chaos.",
      features: [
        "Massive flat ground expanse allowing maximum sprint, glide, and evasion room.",
        "Distant jagged volcanic cliffs that serve as outer perimeter walls.",
        "Unobstructed line-of-sight for long-distance Assist summons."
      ],
      destructibleObjects: [
        "Scorched Volcanic Crags",
        "Molten Obsidian Monoliths"
      ],
      hazards: "Distant perimeter walls mean getting caught in a corner is almost certain death against high-damage bosses."
    },
    omegaMechanics: null,
    battlegen: {
      item: "Feral Horn",
      description: "Burning primal horn from Feral Chaos, used to forge ultimate level 100 endgame weapons and armor.",
      condition: "Perform an EX Revenge counter against a high-damage HP attack or trigger an EX Burst.",
      baseRate: "20.0%",
      bestTechnique: "Equip high EX intake accessories and trigger an EX Burst while Feral Chaos is staggered."
    },
    competitiveData: {
      tier: "Counterpick",
      summary: "Colossal open battlefield. Provides unmatched space for long-range kite strategies and maximum mobility, though difficult to secure early Wall Rushes.",
      wallRushAdvantage: "Low",
      aerialAdvantage: "High",
      projectileAdvantage: "High",
      favoredArchetypes: ["Evasive Aerialists (Kuja, Zidane)", "Long-Range Snipers (Terra, Shantotto, Laguna)"],
      disfavoredArchetypes: ["Corner-Pin Wall Trap Specialists"],
      characterSynergies: [
        { name: "Feral Chaos", slug: "feral-chaos", role: "Advantaged", reason: "Massive hurtboxes and screen-wide AoE swings dominate the entire open plain." },
        { name: "Terra", slug: "terra", role: "Advantaged", reason: "Can safely kite across miles of open space while charging Meltdown and Holy." },
        { name: "Jecht", slug: "jecht", role: "Disadvantaged", reason: "Struggles to pin mobile opponents without immediate nearby walls." }
      ]
    },
    tacticalTips: [
      "Use the enormous open space to kite aggressive melee bosses and charge your EX Gauge from maximum safety.",
      "Call long-range Assists like Aerith (Seal Evil) or Kuja (Snatch Blow) to freeze enemies in the open field.",
      "Avoid getting pushed into the distant perimeter cliffs where Feral Chaos's multi-hit combos deal maximum Wall Rush damage."
    ]
  }
];

export const arenaCategories = [
  { id: "all", label: "All Arenas (19+)", count: arenasData.length },
  { id: "classic", label: "Classic Stages (10)", count: arenasData.filter(a => a.type === "Classic Stage").length },
  { id: "new-012", label: "012 New Stages (7)", count: arenasData.filter(a => a.type === "012 New Stage").length },
  { id: "boss", label: "Boss Arenas (2)", count: arenasData.filter(a => a.type === "Boss Arena").length },
  { id: "starter", label: "Tournament Starters (10)", count: arenasData.filter(a => a.competitiveData.tier.includes("Starter")).length },
  { id: "omega", label: "Omega (Ω) Available (12)", count: arenasData.filter(a => a.hasOmega).length }
];
