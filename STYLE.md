# Guide Style (inferred from Chapter 3)

My reading of how the author writes and marks up a chapter, taken from `src/content/guide/part-3.mdx` (hand-edited by the author). It is an interpretation, not a spec: correct anything that is wrong. Use it to convert/format new chapters; it does not authorise rewording existing text.

## 1. Chapter skeleton

```text
frontmatter (title, category, order)
# Chapter N
Intro line (bold **Chapter N**, italic _Read on..._)
#### <Chapter hook heading>        <- witty/thematic, e.g. "The Greatest Attack Call Ever"
New-character intro (if any)       <- ---, <CharacterIntro> (opinion text + titled <PanelSection>s: e.g. Bravery attacks / HP attacks), ---
Build advice <Callout type="tip"> <- separated by ---
#### Gateway 1                      <- <Gateway> block
<Callout type="note"> aside        <- optional commentary after a gateway
#### Exploration                   <- world-map prose
---
#### Gateway 2 ... repeat
...
#### <Named / Final Gateway>
<BossFight> (EnemyCard + PanelSections)
Aftermath story prose + closing line (reports, Mognet, PP Catalog)
```

- Every `####` heading feeds the ToC. Every gateway, and every exploration stretch, gets one. Gateways are `Gateway N` or the gateway's story name (e.g. "The Font From Which Fear Springs"); the last before a boss may be "Final Gateway".
- `---` separates the character intro and callouts at the top, closes exploration/story sections before the next heading, and splits long prose (see section 5). It is not used between PanelSections or gateway panels.
- No trailing empty `<p>`.

## 2. Bold / italic rules

**Bold (`**…**`), every occurrence in prose:**
- Characters: Laguna, Squall, Vaan, Cosmos, Cloud of Darkness, VAs (Kefka, Kain).
- Enemies: Counterfeit Wraith, Wraith, Gunner, Dragoon, Fleeting Flashes, Sky Pirates, Manikins.
- Attacks/abilities/summons: Machine Gun, Ricochet Shot, Quickmove, Ifrit, Mandragora, Wide-Angle Particle Beam.
- Items/equipment/accessories/materials: Cross Chain, KP Gambler, Tanegashima, Valiant, Magicite Shard, Dragoon's Desire.
- Places and objects in the world: World of Darkness, Kefka's Tower, Rift, Mognet, Moogle, Chocobo (when it names an item/thing), `blue gateway` (when a world-map object).
- Game titles and acronyms: FF8, D012, Eyes on Me, VA.
- Named mechanics: Bravery, Break/Broke/Broken, Assist, Assist Locked, Assist Gauge, EX Burst, EX Mode, KP, CP, KP Chance, Strange Battle Piece, Battlegen, Level 100.
- Possessive: bold the name only (`**Laguna**'s`, `**Squall**'s **assist**`); keep the `'s` outside.
- Plurals: bold including the plural suffix when part of the name (`**Fleeting Flashes**`, `**Pink Tails**`).

**Left plain:**
- Generic nouns: chest, gateway (unless a named world object), gil, Esper capsules, enemies, battle.
- The abbreviation HP in "HP attack" / "HP hit" (italic `_HP_` appears only in emphasis).
- Headings, links, board/card props, callout titles.

**Italic (`_…_`):**
- Emphasis words: _a lot_, _ridiculously_, _after_, _every_.
- Short instructions/commands: _Immediately turn around_, _stick to the ground Assist_.
- Interjections/exclamations: _NEW!_, _Read on..._.
- Game titles in a casual aside (_FF8_, _Dissidia_) and quoted words (_"Soul"_ accessories).
- Board coordinates in prose: _C4_.

Italic inside bold is not used; bold terms inside an italic phrase are left as they are.

## 3. Components and when each is used

| Need | Component |
|---|---|
| New character portrait + comment + gameplay sections | `<CharacterIntro name src width height>` wrapping untitled opinion text then titled `<PanelSection title>`s |
| Gateway map | `<Gateway>` wrapping `<Board>` then `<PanelSection>`s |
| Boss fight | `<BossFight>` wrapping `<EnemyCard>` then sections |
| Aside | `<Callout type title>` |

**`<PanelSection kind>` order** (omit any that don't apply, never reorder): `objective` → `assist` → `chain` → `enemies` → `warnings` → `tips` → `treasure`. A section with no `kind` is allowed for untitled prose (opening comment, or "new skills learned") and goes where the story flows.
- `objective`: KP Chance / goal and its reward.
- `assist`: the Assist character present and how to use them.
- `chain`: which chain item to use, where (board coordinate), KP total, plus the list of enemies in the chain.
- `enemies`: enemy line-up and any new moves.
- `warnings`: dangerous attacks and how to dodge.
- `tips`: how to win fast.
- `treasure`: chest contents, new shop items, what to sell/buy.

**`<Board>`**: pieces are `"<coord> <type> <label>"`. Use the real enemy/chest names. Never leave a placeholder (e.g. "Enemy Name").

**`<Callout>` types:**
- `info`: character overview/skills, a fun aside.
- `tip`: build/equipment advice from the author.
- `note`: commentary on a game system (e.g. how the shop works).
- `warning`: save-this-item style cautions.
- A callout must add something. Do not repeat a paragraph that is already in a PanelSection directly above it. Callouts sit between sections, separated by `---` only at the chapter top.

## 4. Mechanics the author explains inline

New enemy, new move, new summon: one or two sentences in the relevant PanelSection, naming the move in bold and saying how to dodge/punish it. New skills the character learns get their own untitled `PanelSection` after the chain/enemies/warnings sections.

## 5. Readability (break up walls of text)

Applies to every chapter. Split and re-mark-up only; do not reword.

- Max about 2-3 sentences per paragraph. Break at sentence boundaries, and where the topic shifts.
- Turn enumerations into bullets: enemy line-ups, an enemy's moves, an Assist's ground/aerial moves, item/trade lists, step lists, shop advice. Each bullet keeps the author's own words (trim only the joining "and"/commas that the bullet replaces).
- Put a lead-in sentence ending in a colon before a bullet list, then a plain paragraph after it for the closing remark.
- Use `---` between topic groups inside long exploration/story prose (e.g. path directions vs. shop advice), and around story beats: after a `</Gateway>` before the next heading, before `<BossFight>`, after `</BossFight>`. Not between PanelSections inside a panel.
- Applies inside PanelSections, Callouts and CharacterIntro panels too.

## 6. Do not

- Reword, reorder or "improve" prose, facts or jokes.
- Add recap callouts that duplicate gateway text.
- Bold generic words, headings or component props.
- Fix spelling/grammar unless asked (the author pre-approved typo-only fixes for chapter 3).
