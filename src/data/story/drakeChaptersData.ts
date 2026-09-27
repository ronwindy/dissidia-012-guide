/**
 * Complete Typed Metadata Dataset for All 27 Chapters of Drake's Walkthrough
 * Source: https://finalfantasy.fandom.com/wiki/Walkthrough:Dissidia_012_Final_Fantasy/Drake
 */

export interface DrakeSectionNav {
  level: string | number;
  line: string;
  anchor: string;
}

export interface DrakeChapterPagination {
  campaign: string;
  slug: string;
  title: string;
  href: string;
}

export interface DrakeChapterDetail {
  partNumber: number;
  campaign: '012-treachery' | '013-light' | '000-creator' | 'reports';
  campaignName: string;
  slug: string;
  title: string;
  subtitle: string;
  character: string;
  portrait?: string;
  trackerId: string;
  href: string;
  sections: DrakeSectionNav[];
  prev: DrakeChapterPagination | null;
  next: DrakeChapterPagination | null;
}

export type DrakeChapterMeta = DrakeChapterDetail;

export const drakeChapters: DrakeChapterDetail[] = [
  {
    "partNumber": 1,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "prologue-chapter-1",
    "title": "Prologue & Chapter 1",
    "subtitle": "The Adventure Begins",
    "character": "Lightning",
    "portrait": "/dissidia_012_characters/17_Lightning.png",
    "trackerId": "drake-ch-prologue-chapter-1",
    "href": "/story/012-treachery/prologue-chapter-1/",
    "sections": [
      {
        "level": "2",
        "line": "The Adventure Begins",
        "anchor": "The_Adventure_Begins"
      },
      {
        "level": "2",
        "line": "The Manikins",
        "anchor": "The_Manikins"
      },
      {
        "level": "2",
        "line": "Prepare for Fabulousness!",
        "anchor": "Prepare_for_Fabulousness!"
      },
      {
        "level": "2",
        "line": "The Traitor",
        "anchor": "The_Traitor"
      }
    ],
    "prev": null,
    "next": {
      "campaign": "012-treachery",
      "slug": "chapter-2",
      "title": "Chapter 2",
      "href": "/story/012-treachery/chapter-2/"
    }
  },
  {
    "partNumber": 2,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "chapter-2",
    "title": "Chapter 2",
    "subtitle": "The Fool's Quest",
    "character": "Vaan",
    "portrait": "/dissidia_012_characters/16_Vaan.png",
    "trackerId": "drake-ch-chapter-2",
    "href": "/story/012-treachery/chapter-2/",
    "sections": [
      {
        "level": "2",
        "line": "The Fool's Quest",
        "anchor": "The_Fool's_Quest"
      },
      {
        "level": "2",
        "line": "Business Picks Up",
        "anchor": "Business_Picks_Up"
      },
      {
        "level": "2",
        "line": "A New Path",
        "anchor": "A_New_Path"
      },
      {
        "level": "2",
        "line": "Character Derailment FTL",
        "anchor": "Character_Derailment_FTL"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "prologue-chapter-1",
      "title": "Prologue & Chapter 1",
      "href": "/story/012-treachery/prologue-chapter-1/"
    },
    "next": {
      "campaign": "012-treachery",
      "slug": "chapter-3",
      "title": "Chapter 3",
      "href": "/story/012-treachery/chapter-3/"
    }
  },
  {
    "partNumber": 3,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "chapter-3",
    "title": "Chapter 3",
    "subtitle": "The Greatest Attack Call Ever",
    "character": "Laguna",
    "portrait": "/dissidia_012_characters/11_Laguna_Loire.png",
    "trackerId": "drake-ch-chapter-3",
    "href": "/story/012-treachery/chapter-3/",
    "sections": [
      {
        "level": "2",
        "line": "The Greatest Attack Call Ever",
        "anchor": "The_Greatest_Attack_Call_Ever"
      },
      {
        "level": "2",
        "line": "Exploration",
        "anchor": "Exploration"
      },
      {
        "level": "2",
        "line": "The Font From Which Fear Springs",
        "anchor": "The_Font_From_Which_Fear_Springs"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "chapter-2",
      "title": "Chapter 2",
      "href": "/story/012-treachery/chapter-2/"
    },
    "next": {
      "campaign": "012-treachery",
      "slug": "chapter-4",
      "title": "Chapter 4",
      "href": "/story/012-treachery/chapter-4/"
    }
  },
  {
    "partNumber": 4,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "chapter-4",
    "title": "Chapter 4",
    "subtitle": "The Lone Summoner",
    "character": "Yuna",
    "portrait": "/dissidia_012_characters/14_Yuna.png",
    "trackerId": "drake-ch-chapter-4",
    "href": "/story/012-treachery/chapter-4/",
    "sections": [
      {
        "level": "2",
        "line": "Stay Away From The Summoner!",
        "anchor": "Stay_Away_From_The_Summoner!"
      },
      {
        "level": "2",
        "line": "The Pilgrimage",
        "anchor": "The_Pilgrimage"
      },
      {
        "level": "2",
        "line": "Family Reunion",
        "anchor": "Family_Reunion"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "chapter-3",
      "title": "Chapter 3",
      "href": "/story/012-treachery/chapter-3/"
    },
    "next": {
      "campaign": "012-treachery",
      "slug": "chapter-5",
      "title": "Chapter 5",
      "href": "/story/012-treachery/chapter-5/"
    }
  },
  {
    "partNumber": 5,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "chapter-5",
    "title": "Chapter 5",
    "subtitle": "Enter the Dragon...er, Dragoon",
    "character": "Lightning",
    "portrait": "/dissidia_012_characters/17_Lightning.png",
    "trackerId": "drake-ch-chapter-5",
    "href": "/story/012-treachery/chapter-5/",
    "sections": [
      {
        "level": "2",
        "line": "The Fabled Gun Appears",
        "anchor": "The_Fabled_Gun_Appears"
      },
      {
        "level": "2",
        "line": "The Fallen Hero",
        "anchor": "The_Fallen_Hero"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "chapter-4",
      "title": "Chapter 4",
      "href": "/story/012-treachery/chapter-4/"
    },
    "next": {
      "campaign": "012-treachery",
      "slug": "chapter-6",
      "title": "Chapter 6",
      "href": "/story/012-treachery/chapter-6/"
    }
  },
  {
    "partNumber": 6,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "chapter-6",
    "title": "Chapter 6",
    "subtitle": "The Dragoon's Mission",
    "character": "Kain",
    "portrait": "/dissidia_012_characters/05_Kain_Highwind.png",
    "trackerId": "drake-ch-chapter-6",
    "href": "/story/012-treachery/chapter-6/",
    "sections": [
      {
        "level": "2",
        "line": "The Dragoon's Path",
        "anchor": "The_Dragoon's_Path"
      },
      {
        "level": "2",
        "line": "A Naive Ally",
        "anchor": "A_Naive_Ally"
      },
      {
        "level": "2",
        "line": "The Tree's Pursuit",
        "anchor": "The_Tree's_Pursuit"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "chapter-5",
      "title": "Chapter 5",
      "href": "/story/012-treachery/chapter-5/"
    },
    "next": {
      "campaign": "012-treachery",
      "slug": "chapter-7",
      "title": "Chapter 7",
      "href": "/story/012-treachery/chapter-7/"
    }
  },
  {
    "partNumber": 7,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "chapter-7",
    "title": "Chapter 7",
    "subtitle": "Desperate Measures",
    "character": "Tifa",
    "portrait": "/dissidia_012_characters/09_Tifa_Lockhart.png",
    "trackerId": "drake-ch-chapter-7",
    "href": "/story/012-treachery/chapter-7/",
    "sections": [
      {
        "level": "2",
        "line": "The Brawler's Quest",
        "anchor": "The_Brawler's_Quest"
      },
      {
        "level": "2",
        "line": "The Snowfields",
        "anchor": "The_Snowfields"
      },
      {
        "level": "2",
        "line": "The Chase",
        "anchor": "The_Chase"
      },
      {
        "level": "2",
        "line": "Preparations",
        "anchor": "Preparations"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "chapter-6",
      "title": "Chapter 6",
      "href": "/story/012-treachery/chapter-6/"
    },
    "next": {
      "campaign": "012-treachery",
      "slug": "epilogue",
      "title": "Epilogue",
      "href": "/story/012-treachery/epilogue/"
    }
  },
  {
    "partNumber": 8,
    "campaign": "012-treachery",
    "campaignName": "012: Treachery of the Gods",
    "slug": "epilogue",
    "title": "Epilogue",
    "subtitle": "The Final Push & The End of the 12th Cycle",
    "character": "All Cosmos Warriors",
    "portrait": "/images/story/renders/lightning-render.png",
    "trackerId": "drake-ch-epilogue",
    "href": "/story/012-treachery/epilogue/",
    "sections": [
      {
        "level": "2",
        "line": "Launch",
        "anchor": "Launch"
      },
      {
        "level": "2",
        "line": "The Final Path",
        "anchor": "The_Final_Path"
      },
      {
        "level": "2",
        "line": "The Last Stand",
        "anchor": "The_Last_Stand"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "chapter-7",
      "title": "Chapter 7",
      "href": "/story/012-treachery/chapter-7/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "prologue",
      "title": "Prologue",
      "href": "/story/013-light/prologue/"
    }
  },
  {
    "partNumber": 9,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "prologue",
    "title": "Prologue",
    "subtitle": "The 13th Cycle Begins",
    "character": "Warrior of Light",
    "portrait": "/dissidia_012_characters/01_Warrior_of_Light.webp",
    "trackerId": "drake-ch-prologue",
    "href": "/story/013-light/prologue/",
    "sections": [
      {
        "level": "2",
        "line": "Preparations",
        "anchor": "Preparations"
      },
      {
        "level": "2",
        "line": "Awakening",
        "anchor": "Awakening"
      }
    ],
    "prev": {
      "campaign": "012-treachery",
      "slug": "epilogue",
      "title": "Epilogue",
      "href": "/story/012-treachery/epilogue/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-1",
      "title": "Chapter 1: Destiny Odyssey I",
      "href": "/story/013-light/chapter-1/"
    }
  },
  {
    "partNumber": 10,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-1",
    "title": "Chapter 1: Destiny Odyssey I",
    "subtitle": "A Light Toward Hope",
    "character": "Warrior of Light",
    "portrait": "/dissidia_012_characters/01_Warrior_of_Light.webp",
    "trackerId": "drake-ch-chapter-1",
    "href": "/story/013-light/chapter-1/",
    "sections": [
      {
        "level": "2",
        "line": "The Buster Basher",
        "anchor": "The_Buster_Basher"
      },
      {
        "level": "2",
        "line": "A Reason To Fight",
        "anchor": "A_Reason_To_Fight"
      },
      {
        "level": "2",
        "line": "The Lonesome Road",
        "anchor": "The_Lonesome_Road"
      },
      {
        "level": "2",
        "line": "The Volcano",
        "anchor": "The_Volcano"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "prologue",
      "title": "Prologue",
      "href": "/story/013-light/prologue/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-2",
      "title": "Chapter 2: Destiny Odyssey II",
      "href": "/story/013-light/chapter-2/"
    }
  },
  {
    "partNumber": 11,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-2",
    "title": "Chapter 2: Destiny Odyssey II",
    "subtitle": "The Path to the Rose",
    "character": "Firion",
    "portrait": "/dissidia_012_characters/02_Firion.png",
    "trackerId": "drake-ch-chapter-2",
    "href": "/story/013-light/chapter-2/",
    "sections": [
      {
        "level": "2",
        "line": "Onion Powah!",
        "anchor": "Onion_Powah!"
      },
      {
        "level": "2",
        "line": "The Pursuit",
        "anchor": "The_Pursuit"
      },
      {
        "level": "2",
        "line": "Rescue Operation",
        "anchor": "Rescue_Operation"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-1",
      "title": "Chapter 1: Destiny Odyssey I",
      "href": "/story/013-light/chapter-1/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-3",
      "title": "Chapter 3: Destiny Odyssey III",
      "href": "/story/013-light/chapter-3/"
    }
  },
  {
    "partNumber": 12,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-3",
    "title": "Chapter 3: Destiny Odyssey III",
    "subtitle": "The Truth of the Crystal",
    "character": "Onion Knight",
    "portrait": "/dissidia_012_characters/03_Onion_Knight.png",
    "trackerId": "drake-ch-chapter-3",
    "href": "/story/013-light/chapter-3/",
    "sections": [
      {
        "level": "2",
        "line": "The Esperkin",
        "anchor": "The_Esperkin"
      },
      {
        "level": "2",
        "line": "A New Ally",
        "anchor": "A_New_Ally"
      },
      {
        "level": "2",
        "line": "Dream of the Future",
        "anchor": "Dream_of_the_Future"
      },
      {
        "level": "2",
        "line": "The Lady's Crystal",
        "anchor": "The_Lady's_Crystal"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-2",
      "title": "Chapter 2: Destiny Odyssey II",
      "href": "/story/013-light/chapter-2/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-4",
      "title": "Chapter 4: Destiny Odyssey IV",
      "href": "/story/013-light/chapter-4/"
    }
  },
  {
    "partNumber": 13,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-4",
    "title": "Chapter 4: Destiny Odyssey IV",
    "subtitle": "Light and Darkness",
    "character": "Cecil",
    "portrait": "/dissidia_012_characters/04_Cecil_Harvey.png",
    "trackerId": "drake-ch-chapter-4",
    "href": "/story/013-light/chapter-4/",
    "sections": [
      {
        "level": "2",
        "line": "Twilight Knights",
        "anchor": "Twilight_Knights"
      },
      {
        "level": "2",
        "line": "A Divergent Path",
        "anchor": "A_Divergent_Path"
      },
      {
        "level": "2",
        "line": "Reaffirming The Already Affirmed",
        "anchor": "Reaffirming_The_Already_Affirmed"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-3",
      "title": "Chapter 3: Destiny Odyssey III",
      "href": "/story/013-light/chapter-3/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-5",
      "title": "Chapter 5: Destiny Odyssey V",
      "href": "/story/013-light/chapter-5/"
    }
  },
  {
    "partNumber": 14,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-5",
    "title": "Chapter 5: Destiny Odyssey V",
    "subtitle": "A Breeze from the Past",
    "character": "Bartz",
    "portrait": "/dissidia_012_characters/06_Bartz_Klauser.png",
    "trackerId": "drake-ch-chapter-5",
    "href": "/story/013-light/chapter-5/",
    "sections": [
      {
        "level": "2",
        "line": "The Ace",
        "anchor": "The_Ace"
      },
      {
        "level": "2",
        "line": "Love to Hatred Turned",
        "anchor": "Love_to_Hatred_Turned"
      },
      {
        "level": "2",
        "line": "And Then There Was One",
        "anchor": "And_Then_There_Was_One"
      },
      {
        "level": "2",
        "line": "Dream's End",
        "anchor": "Dream's_End"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-4",
      "title": "Chapter 4: Destiny Odyssey IV",
      "href": "/story/013-light/chapter-4/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-6",
      "title": "Chapter 6: Destiny Odyssey VI",
      "href": "/story/013-light/chapter-6/"
    }
  },
  {
    "partNumber": 15,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-6",
    "title": "Chapter 6: Destiny Odyssey VI",
    "subtitle": "A Warmth from Within",
    "character": "Terra",
    "portrait": "/dissidia_012_characters/07_Terra_Branford.png",
    "trackerId": "drake-ch-chapter-6",
    "href": "/story/013-light/chapter-6/",
    "sections": [
      {
        "level": "2",
        "line": "The Rebel",
        "anchor": "The_Rebel"
      },
      {
        "level": "2",
        "line": "A Dream of Roses",
        "anchor": "A_Dream_of_Roses"
      },
      {
        "level": "2",
        "line": "The Passage to Discord",
        "anchor": "The_Passage_to_Discord"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-5",
      "title": "Chapter 5: Destiny Odyssey V",
      "href": "/story/013-light/chapter-5/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-7",
      "title": "Chapter 7: Destiny Odyssey VII",
      "href": "/story/013-light/chapter-7/"
    }
  },
  {
    "partNumber": 16,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-7",
    "title": "Chapter 7: Destiny Odyssey VII",
    "subtitle": "The Lone Road",
    "character": "Cloud",
    "portrait": "/dissidia_012_characters/08_Cloud_Strife.png",
    "trackerId": "drake-ch-chapter-7",
    "href": "/story/013-light/chapter-7/",
    "sections": [
      {
        "level": "2",
        "line": "The Lion, the Mouse, and the Monkey",
        "anchor": "The_Lion,_the_Mouse,_and_the_Monkey"
      },
      {
        "level": "2",
        "line": "Friendship or Duty?",
        "anchor": "Friendship_or_Duty?"
      },
      {
        "level": "2",
        "line": "The Strength of Solitude",
        "anchor": "The_Strength_of_Solitude"
      },
      {
        "level": "2",
        "line": "The Witch's Den",
        "anchor": "The_Witch's_Den"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-6",
      "title": "Chapter 6: Destiny Odyssey VI",
      "href": "/story/013-light/chapter-6/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-8",
      "title": "Chapter 8: Destiny Odyssey VIII",
      "href": "/story/013-light/chapter-8/"
    }
  },
  {
    "partNumber": 17,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-8",
    "title": "Chapter 8: Destiny Odyssey VIII",
    "subtitle": "A Silent Resolve",
    "character": "Squall",
    "portrait": "/dissidia_012_characters/10_Squall_Leonhart.png",
    "trackerId": "drake-ch-chapter-8",
    "href": "/story/013-light/chapter-8/",
    "sections": [
      {
        "level": "2",
        "line": "The Thief Steals The Show",
        "anchor": "The_Thief_Steals_The_Show"
      },
      {
        "level": "2",
        "line": "The Trap",
        "anchor": "The_Trap"
      },
      {
        "level": "2",
        "line": "Reunion",
        "anchor": "Reunion"
      },
      {
        "level": "2",
        "line": "Plan B",
        "anchor": "Plan_B"
      },
      {
        "level": "2",
        "line": "You're Not Alone",
        "anchor": "You're_Not_Alone"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-7",
      "title": "Chapter 7: Destiny Odyssey VII",
      "href": "/story/013-light/chapter-7/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-9",
      "title": "Chapter 9: Destiny Odyssey IX",
      "href": "/story/013-light/chapter-9/"
    }
  },
  {
    "partNumber": 18,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-9",
    "title": "Chapter 9: Destiny Odyssey IX",
    "subtitle": "In Search of the Secret",
    "character": "Zidane",
    "portrait": "/dissidia_012_characters/12_Zidane_Tribal.png",
    "trackerId": "drake-ch-chapter-9",
    "href": "/story/013-light/chapter-9/",
    "sections": [
      {
        "level": "2",
        "line": "The Mouse Trapped",
        "anchor": "The_Mouse_Trapped"
      },
      {
        "level": "2",
        "line": "The Escape",
        "anchor": "The_Escape"
      },
      {
        "level": "2",
        "line": "Salvation",
        "anchor": "Salvation"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-8",
      "title": "Chapter 8: Destiny Odyssey VIII",
      "href": "/story/013-light/chapter-8/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "chapter-10",
      "title": "Chapter 10: Destiny Odyssey X",
      "href": "/story/013-light/chapter-10/"
    }
  },
  {
    "partNumber": 19,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "chapter-10",
    "title": "Chapter 10: Destiny Odyssey X",
    "subtitle": "A Father and Son Bond",
    "character": "Tidus",
    "portrait": "/dissidia_012_characters/13_Tidus.png",
    "trackerId": "drake-ch-chapter-10",
    "href": "/story/013-light/chapter-10/",
    "sections": [
      {
        "level": "2",
        "line": "Light 'Em Up",
        "anchor": "Light_'Em_Up"
      },
      {
        "level": "2",
        "line": "A Friend In Need",
        "anchor": "A_Friend_In_Need"
      },
      {
        "level": "2",
        "line": "The Journey North",
        "anchor": "The_Journey_North"
      },
      {
        "level": "2",
        "line": "An Old Friend",
        "anchor": "An_Old_Friend"
      },
      {
        "level": "2",
        "line": "The Dramatic Re-Reveal",
        "anchor": "The_Dramatic_Re-Reveal"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-9",
      "title": "Chapter 9: Destiny Odyssey IX",
      "href": "/story/013-light/chapter-9/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "epilogue-part-1",
      "title": "Epilogue Part 1: Shade Impulse",
      "href": "/story/013-light/epilogue-part-1/"
    }
  },
  {
    "partNumber": 20,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "epilogue-part-1",
    "title": "Epilogue Part 1: Shade Impulse",
    "subtitle": "Shade Impulse Chapters 1-3",
    "character": "All Cosmos Warriors",
    "portrait": "/images/story/renders/warrior-of-light-render.png",
    "trackerId": "drake-ch-epilogue-part-1",
    "href": "/story/013-light/epilogue-part-1/",
    "sections": [
      {
        "level": "2",
        "line": "Preparations",
        "anchor": "Preparations"
      },
      {
        "level": "2",
        "line": "A Light in the Darkness",
        "anchor": "A_Light_in_the_Darkness"
      },
      {
        "level": "2",
        "line": "Clipping An Angel's Wings",
        "anchor": "Clipping_An_Angel's_Wings"
      },
      {
        "level": "2",
        "line": "Cruel Truths",
        "anchor": "Cruel_Truths"
      },
      {
        "level": "2",
        "line": "Beauty Ne'er Tarnished",
        "anchor": "Beauty_Ne'er_Tarnished"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "chapter-10",
      "title": "Chapter 10: Destiny Odyssey X",
      "href": "/story/013-light/chapter-10/"
    },
    "next": {
      "campaign": "013-light",
      "slug": "epilogue-part-2",
      "title": "Epilogue Part 2: Chaos",
      "href": "/story/013-light/epilogue-part-2/"
    }
  },
  {
    "partNumber": 21,
    "campaign": "013-light",
    "campaignName": "013: Light to All",
    "slug": "epilogue-part-2",
    "title": "Epilogue Part 2: Chaos",
    "subtitle": "Shade Impulse 4: The Edge of Madness",
    "character": "All Cosmos Warriors",
    "portrait": "/images/story/renders/chaos-render.png",
    "trackerId": "drake-ch-epilogue-part-2",
    "href": "/story/013-light/epilogue-part-2/",
    "sections": [
      {
        "level": "2",
        "line": "A Family Matter",
        "anchor": "A_Family_Matter"
      },
      {
        "level": "2",
        "line": "The Ham Stands Alone",
        "anchor": "The_Ham_Stands_Alone"
      },
      {
        "level": "2",
        "line": "Endless Chaos",
        "anchor": "Endless_Chaos"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "epilogue-part-1",
      "title": "Epilogue Part 1: Shade Impulse",
      "href": "/story/013-light/epilogue-part-1/"
    },
    "next": {
      "campaign": "000-creator",
      "slug": "southern-areas",
      "title": "Southern Areas",
      "href": "/story/000-creator/southern-areas/"
    }
  },
  {
    "partNumber": 22,
    "campaign": "000-creator",
    "campaignName": "000: Confessions of the Creator",
    "slug": "southern-areas",
    "title": "Southern Areas",
    "subtitle": "World B Open Exploration",
    "character": "Party Formation",
    "portrait": "/images/story/maps/world-b-cornelian-plains.png",
    "trackerId": "drake-ch-southern-areas",
    "href": "/story/000-creator/southern-areas/",
    "sections": [
      {
        "level": "2",
        "line": "Beyond Discord",
        "anchor": "Beyond_Discord"
      },
      {
        "level": "2",
        "line": "Cornelia",
        "anchor": "Cornelia"
      },
      {
        "level": "2",
        "line": "Gulg Volcano Ring",
        "anchor": "Gulg_Volcano_Ring"
      },
      {
        "level": "2",
        "line": "Elven Snowfields",
        "anchor": "Elven_Snowfields"
      },
      {
        "level": "2",
        "line": "Melmond Fens",
        "anchor": "Melmond_Fens"
      }
    ],
    "prev": {
      "campaign": "013-light",
      "slug": "epilogue-part-2",
      "title": "Epilogue Part 2: Chaos",
      "href": "/story/013-light/epilogue-part-2/"
    },
    "next": {
      "campaign": "000-creator",
      "slug": "shantotto-and-gabranth",
      "title": "Shantotto and Gabranth",
      "href": "/story/000-creator/shantotto-and-gabranth/"
    }
  },
  {
    "partNumber": 23,
    "campaign": "000-creator",
    "campaignName": "000: Confessions of the Creator",
    "slug": "shantotto-and-gabranth",
    "title": "Shantotto and Gabranth",
    "subtitle": "Hidden Warrior Portals",
    "character": "Party Formation",
    "portrait": "/dissidia_012_characters/15_Shantotto.png",
    "trackerId": "drake-ch-shantotto-and-gabranth",
    "href": "/story/000-creator/shantotto-and-gabranth/",
    "sections": [
      {
        "level": "2",
        "line": "Sanctuary",
        "anchor": "Sanctuary"
      },
      {
        "level": "2",
        "line": "The Lady's Lesson",
        "anchor": "The_Lady's_Lesson"
      },
      {
        "level": "2",
        "line": "Highway to Hell",
        "anchor": "Highway_to_Hell"
      },
      {
        "level": "2",
        "line": "The Warrior's Judgment",
        "anchor": "The_Warrior's_Judgment"
      }
    ],
    "prev": {
      "campaign": "000-creator",
      "slug": "southern-areas",
      "title": "Southern Areas",
      "href": "/story/000-creator/southern-areas/"
    },
    "next": {
      "campaign": "000-creator",
      "slug": "chasm-of-earth-and-flying-castle",
      "title": "Chasm of Earth & Flying Castle",
      "href": "/story/000-creator/chasm-of-earth-and-flying-castle/"
    }
  },
  {
    "partNumber": 24,
    "campaign": "000-creator",
    "campaignName": "000: Confessions of the Creator",
    "slug": "chasm-of-earth-and-flying-castle",
    "title": "Chasm of Earth & Flying Castle",
    "subtitle": "Dragon King & High Gauntlets",
    "character": "Party Formation",
    "portrait": "/images/story/renders/feral-chaos-render.png",
    "trackerId": "drake-ch-chasm-of-earth-and-flying-castle",
    "href": "/story/000-creator/chasm-of-earth-and-flying-castle/",
    "sections": [
      {
        "level": "2",
        "line": "The Cavern of Earth",
        "anchor": "The_Cavern_of_Earth"
      },
      {
        "level": "2",
        "line": "The Depths of the Earth",
        "anchor": "The_Depths_of_the_Earth"
      },
      {
        "level": "2",
        "line": "Release the Seals",
        "anchor": "Release_the_Seals"
      },
      {
        "level": "2",
        "line": "God in Fire",
        "anchor": "God_in_Fire"
      },
      {
        "level": "2",
        "line": "To the Desert",
        "anchor": "To_the_Desert"
      },
      {
        "level": "2",
        "line": "The Flying Castle",
        "anchor": "The_Flying_Castle"
      }
    ],
    "prev": {
      "campaign": "000-creator",
      "slug": "shantotto-and-gabranth",
      "title": "Shantotto and Gabranth",
      "href": "/story/000-creator/shantotto-and-gabranth/"
    },
    "next": {
      "campaign": "000-creator",
      "slug": "gaia-and-bahamut-isles",
      "title": "Gaia & Bahamut Isles",
      "href": "/story/000-creator/gaia-and-bahamut-isles/"
    }
  },
  {
    "partNumber": 25,
    "campaign": "000-creator",
    "campaignName": "000: Confessions of the Creator",
    "slug": "gaia-and-bahamut-isles",
    "title": "Gaia & Bahamut Isles",
    "subtitle": "Endgame Megadungeons",
    "character": "Party Formation",
    "portrait": "/images/story/maps/world-b-bahamut-isles.png",
    "trackerId": "drake-ch-gaia-and-bahamut-isles",
    "href": "/story/000-creator/gaia-and-bahamut-isles/",
    "sections": [
      {
        "level": "2",
        "line": "The Forgotten Land",
        "anchor": "The_Forgotten_Land"
      },
      {
        "level": "2",
        "line": "Forging Deeper",
        "anchor": "Forging_Deeper"
      },
      {
        "level": "2",
        "line": "Beyond the Desert",
        "anchor": "Beyond_the_Desert"
      },
      {
        "level": "2",
        "line": "The Dragon King's Lair",
        "anchor": "The_Dragon_King's_Lair"
      },
      {
        "level": "2",
        "line": "Five Final Floors",
        "anchor": "Five_Final_Floors"
      }
    ],
    "prev": {
      "campaign": "000-creator",
      "slug": "chasm-of-earth-and-flying-castle",
      "title": "Chasm of Earth & Flying Castle",
      "href": "/story/000-creator/chasm-of-earth-and-flying-castle/"
    },
    "next": {
      "campaign": "000-creator",
      "slug": "land-of-discord-and-feral-chaos",
      "title": "Land of Discord & Feral Chaos",
      "href": "/story/000-creator/land-of-discord-and-feral-chaos/"
    }
  },
  {
    "partNumber": 26,
    "campaign": "000-creator",
    "campaignName": "000: Confessions of the Creator",
    "slug": "land-of-discord-and-feral-chaos",
    "title": "Land of Discord & Feral Chaos",
    "subtitle": "The Level 130 Ultimate Confrontation",
    "character": "Party Formation",
    "portrait": "/images/story/renders/feral-chaos-render.png",
    "trackerId": "drake-ch-land-of-discord-and-feral-chaos",
    "href": "/story/000-creator/land-of-discord-and-feral-chaos/",
    "sections": [
      {
        "level": "2",
        "line": "Return to Where It Began",
        "anchor": "Return_to_Where_It_Began"
      },
      {
        "level": "2",
        "line": "Return to Onrac",
        "anchor": "Return_to_Onrac"
      },
      {
        "level": "2",
        "line": "God in Fire",
        "anchor": "God_in_Fire"
      }
    ],
    "prev": {
      "campaign": "000-creator",
      "slug": "gaia-and-bahamut-isles",
      "title": "Gaia & Bahamut Isles",
      "href": "/story/000-creator/gaia-and-bahamut-isles/"
    },
    "next": {
      "campaign": "reports",
      "slug": "the-reports",
      "title": "The Reports",
      "href": "/story/reports/"
    }
  },
  {
    "partNumber": 27,
    "campaign": "reports",
    "campaignName": "The Reports",
    "slug": "the-reports",
    "title": "The Reports",
    "subtitle": "Complete 20 Reports Unlocks & Lore",
    "character": "All Characters",
    "portrait": "/dissidia_012_characters/30_Gilgamesh.png",
    "trackerId": "drake-ch-the-reports",
    "href": "/story/reports/",
    "sections": [
      {
        "level": "2",
        "line": "Report 01",
        "anchor": "Report_01"
      },
      {
        "level": "2",
        "line": "Report 02",
        "anchor": "Report_02"
      },
      {
        "level": "2",
        "line": "Report 05",
        "anchor": "Report_05"
      },
      {
        "level": "2",
        "line": "Report 06",
        "anchor": "Report_06"
      },
      {
        "level": "2",
        "line": "Report 07",
        "anchor": "Report_07"
      },
      {
        "level": "2",
        "line": "Report 08",
        "anchor": "Report_08"
      },
      {
        "level": "2",
        "line": "Report 09",
        "anchor": "Report_09"
      },
      {
        "level": "2",
        "line": "Report 12",
        "anchor": "Report_12"
      },
      {
        "level": "2",
        "line": "Report 15",
        "anchor": "Report_15"
      },
      {
        "level": "2",
        "line": "Report 16",
        "anchor": "Report_16"
      },
      {
        "level": "2",
        "line": "Report 17",
        "anchor": "Report_17"
      },
      {
        "level": "2",
        "line": "Report 18",
        "anchor": "Report_18"
      },
      {
        "level": "2",
        "line": "Report 19",
        "anchor": "Report_19"
      }
    ],
    "prev": {
      "campaign": "000-creator",
      "slug": "land-of-discord-and-feral-chaos",
      "title": "Land of Discord & Feral Chaos",
      "href": "/story/000-creator/land-of-discord-and-feral-chaos/"
    },
    "next": null
  }
];

export function getAllDrakeChapters(): DrakeChapterDetail[] {
  return drakeChapters;
}

export function getDrakeChapter(campaign: string, slug: string): DrakeChapterDetail | undefined {
  return drakeChapters.find(c => c.campaign === campaign && c.slug === slug);
}

export function getDrakeChaptersByCampaign(campaign: string): DrakeChapterDetail[] {
  return drakeChapters.filter(c => c.campaign === campaign);
}
