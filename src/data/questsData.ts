export interface Quest {
  id: string;
  title: string;
  series?: string;
  part?: string;
  author: string;
  format: 'Round-Robin' | 'Tournament';
  characters: string;
  summary: string;
  slot: number;
  version: string;
  date?: string;
  authorNote?: string;
  reviewerNote?: string;
  tags?: string[];
}

export const questsData: Quest[] = [
  {
    id: "food-rush",
    title: "Food Rush!",
    author: "Aiphrem",
    format: "Round-Robin",
    characters: "Prishe (Lv50)",
    summary: "Join Prishe, as she meets new people and fights enemies, during her quest to get to the store and buy something to eat!",
    slot: 0,
    version: "USA",
    date: "02/08/12",
    authorNote: "Prishe is following one of Shantotto's lectures, but suddenly gets hungry and wants to leave, but is stopped by Shantotto, who will be your first fight. Prishe will then partake on an epic quest to get to the store and buy food.",
    reviewerNote: "Man, the whole quest was pretty tricky.",
    tags: ["Humor", "Solo Character", "FFXI"]
  },
  {
    id: "ff-frustra-amare-1",
    title: "Final Fantasy Frustra Amare (Part 1 - Forgotten)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 1 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Squall (100), Firion (49), Zidane (100), Sephiroth (20)",
    summary: "Upon forgetting his past life, a warrior seeks to rebuild his memories.",
    slot: 0,
    version: "USA",
    date: "02/08/12",
    authorNote: "I also just wanna say, don't worry if you can't beat every fight. Some of them, you are meant to lose for dramatic effect. I hardly changed the script in the first couple quests and just finally decided not to bother with it. This series is mostly for plot rather than challenge.",
    tags: ["Story Campaign", "Narrative Drama", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-2",
    title: "Final Fantasy Frustra Amare (Part 2 - Invaded)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 2 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Bartz (37), Cloud (14), Squall (100), Vaan (31)",
    summary: "Squall and the others are attacked and must find a new shelter.",
    slot: 1,
    version: "USA",
    date: "02/08/12",
    tags: ["Story Campaign", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-3",
    title: "Final Fantasy Frustra Amare (Part 3 - Performer)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 3 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Zidane (100), Squall (100), Tifa (30)",
    summary: "Using the newly found theater ship Prima Vista, Zidane arranges a theatrical play. Squall reluctantly joins in.",
    slot: 2,
    version: "USA",
    date: "02/08/12",
    reviewerNote: "The character roles and comedic timing in the play were spot on!",
    tags: ["Story Campaign", "Humor", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-4",
    title: "Final Fantasy Frustra Amare (Part 4 - Airborn)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 4 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Cloud (100), Bartz (52), Tifa (100), Squall (100)",
    summary: "The play was a total... success? After being attacked, the party decides to move the airship and search for Bartz and Cloud.",
    slot: 3,
    version: "USA",
    date: "02/08/12",
    tags: ["Story Campaign", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-5",
    title: "Final Fantasy Frustra Amare (Part 5 - Barriers)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 5 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Bartz (52), Terra (37), Kuja (26), Terra (37), Lightning (100)",
    summary: "As Bartz tries to find his friends with a new ally, Tifa attempts to crack the tough barrier of Squall's emotional wall.",
    slot: 4,
    version: "USA",
    date: "02/08/12",
    tags: ["Story Campaign", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-6",
    title: "Final Fantasy Frustra Amare (Part 6 - Encounter)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 6 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Terra (37), Golbez (28), Zidane (100), Firion (49), Squall (100)",
    summary: "While the Prima Vista continues to fly, Firion spots a giant crater. Squall regrets lashing out at Tifa.",
    slot: 5,
    version: "USA",
    date: "02/08/12",
    tags: ["Story Campaign", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-7",
    title: "Final Fantasy Frustra Amare (Part 7 - Slumber)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 7 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Tifa (42), Zidane (100), Golbez (28)",
    summary: "Tifa attempts to escape The Emperor as Golbez continues to search for his brother. But the darkness is rising!",
    slot: 6,
    version: "USA",
    date: "02/08/12",
    tags: ["Story Campaign", "Multi-Part"]
  },
  {
    id: "ff-frustra-amare-8",
    title: "Final Fantasy Frustra Amare (Part 8 - Awkward)",
    series: "Final Fantasy Frustra Amare",
    part: "Part 8 of 8",
    author: "Ryken07",
    format: "Round-Robin",
    characters: "Lightning (100), Squall (100) [Unplayable], Terra (68), Bartz (53), Tifa (100)",
    summary: "Terra seeks answers from Squall, Lightning catches Zidane peeking, and Tifa meets her new friend in the dramatic campaign finale!",
    slot: 7,
    version: "USA",
    date: "02/08/12",
    tags: ["Story Campaign", "Finale", "Multi-Part"]
  },
  {
    id: "a-pet-dragon",
    title: "A Pet Dragon",
    author: "Remijia",
    format: "Round-Robin",
    characters: "Kain Highwind",
    summary: "Shantotto and Prishe, deeply concerned that Kain lacks a pet dragon unlike Vana'dielian dragoons, decide to help him find one across the realms.",
    slot: 0,
    version: "USA",
    date: "02/08/12",
    authorNote: "Since this is my first quest, I'd very much appreciate feedback of any kind, whether related to the story, the battles, or even the distribution method. I plan to make a number of quests like this, and so any constructive criticism (or encouragement!) will help me to make the others better, as well. Thank you for trying it out. ^_^",
    reviewerNote: "Wow, I enjoyed that a lot--it was a perfect quest in my opinion. First off there's no annoying obstacles to overcome just for the sake of making it 'challenging' and the characterization was spot on. The story was simple and likable in a good way.",
    tags: ["Fan Favorite", "Humor", "Story Focus"]
  },
  {
    id: "d-ffiv",
    title: "D: FFIV",
    author: "CharizardFire",
    format: "Round-Robin",
    characters: "Cecil Harvey (Lv100)",
    summary: "Final Fantasy IV's iconic boss progression re-imagined with Dissidia characters and custom battle rules.",
    slot: 0,
    version: "USA",
    date: "02/08/12",
    authorNote: "Pay attention to the custom rules! If you try to play the way you would if there were no custom rules, this quest will be a lot tougher!",
    tags: ["Retro Recreation", "Custom Rules", "FFIV"]
  },
  {
    id: "parallel-memories",
    title: "Parallel Memories",
    author: "BeRnYGP",
    format: "Round-Robin",
    characters: "Zidane (100), Tifa (100), Golbez (100), Bartz (100), Vaan (100)",
    summary: "Dimensional side-effects are corrupting the warriors, making them immensely strong and possessing them with alternate personalities.",
    slot: 20,
    version: "USA",
    date: "02/08/12",
    tags: ["High Difficulty", "Endgame Cast"]
  },
  {
    id: "itgs-brawl",
    title: "ITGS Brawl",
    author: "NationMaker",
    format: "Round-Robin",
    characters: "Free Choice",
    summary: "Whit prepares himself against his past interviewees of his show, in a test to prove himself as a Warrior of Cosmos.",
    slot: 0,
    version: "USA",
    date: "02/08/12",
    authorNote: "Based on the escapades of Creative Uncut's Inside The Gamer's Studio comics, I wanted the host Whit to have some fandom storyline inside the Dissidia Duodecim Universe. Easy for some beginners, but it could get tougher along the way. Game on folks.",
    tags: ["Comic Adaptation", "Free Choice"]
  },
  {
    id: "confessions-creator",
    title: "Confessions of the Creator (Edge of Discord Boss Rush)",
    author: "BeRnYGP",
    format: "Tournament",
    characters: "Free Choice",
    summary: "Recreation of the brutal final floor of the Edge of Discord from Main Scenario 000. Face off against the ultimate Feral Chaos in a gauntlet tournament!",
    slot: 21,
    version: "USA",
    date: "02/08/12",
    tags: ["Scenario 000", "Boss Rush", "Feral Chaos"]
  },
  {
    id: "deadly-chaos",
    title: "Deadly Chaos (Part 1)",
    author: "Johnathan",
    format: "Round-Robin",
    characters: "Zidane (50), Kuja (Free Select), Cloud (100), Shantotto (Free Select), 5th battle Free Select",
    summary: "While fleeing a Chaos-imbued Kefka, Kuja's only chance for survival is to seek aid from Zidane and his friends, Cloud and Shantotto.",
    slot: 1,
    version: "USA",
    date: "02/08/12",
    authorNote: "Kefka has become enriched with even more Chaos power due to an accident caused by Shantotto; it's up to these warriors to stop Kefka once and for all. If suffering a quest loss on battle 5, select Cloud for the alternate ending!",
    tags: ["Branching Endings", "Story Focus"]
  },
  {
    id: "world-at-war-1",
    title: "World At War (Part 1 - Palamecia)",
    series: "World At War",
    part: "Part 1 of 3",
    author: "Majin K",
    format: "Round-Robin",
    characters: "Sephiroth (100), Cloud (100), Garland (80)",
    summary: "Two warring kingdoms clash in an all-out global struggle. Play the first campaign as the Palamecians.",
    slot: 8,
    version: "USA",
    date: "08/05/11",
    authorNote: "Don't worry if you can't win certain fights. The ending scenes won't change.",
    tags: ["War Campaign", "Multi-Part"]
  },
  {
    id: "world-at-war-2",
    title: "World At War (Part 2 - Gestahl)",
    series: "World At War",
    part: "Part 2 of 3",
    author: "Majin K",
    format: "Round-Robin",
    characters: "Terra (60), Gabranth (65), Kuja (95), Squall (100)",
    summary: "The war intensifies across the continents. Take control of the Gestahlian empire's vanguard.",
    slot: 9,
    version: "USA",
    date: "08/09/11",
    authorNote: "Like last time, don't worry if you can't win a specific fight. The ending scene won't change.",
    tags: ["War Campaign", "Multi-Part"]
  },
  {
    id: "world-at-war-3",
    title: "World At War (Part 3 - Creator)",
    series: "World At War",
    part: "Part 3 of 3",
    author: "Majin K",
    format: "Tournament",
    characters: "Sephiroth (100), Cloud (100), Squall (100), Kuja (100), Kefka (100)",
    summary: "The Creator has seen enough. All combatants face the final judgment tournament.",
    slot: 10,
    version: "USA",
    date: "08/12/11",
    authorNote: "I actually made 2 different endings, depending on whether you win or lose. Enjoy!",
    tags: ["War Campaign", "Branching Endings", "Tournament Finale"]
  }
];
