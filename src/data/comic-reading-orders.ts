export type ComicType = "EVENT" | "SERIES" | "ISSUE" | "GRAPHIC_NOVEL";

export interface ComicEntry {
  slug: string;
  title: string;
  overview: string;
  year?: number;
  type: ComicType;
  /** Search query for Amazon / Marvel.com search fallback */
  searchQuery: string;
  /** Official Marvel.com series, issue, or reading-guide URL */
  marvelUrl: string;
  /** Optional link to MCU timeline slug */
  relatedMcuSlug?: string;
}

export interface ComicReadingOrder {
  slug: string;
  name: string;
  description: string;
  accent: string;
  comics: ComicEntry[];
}

export const COMIC_READING_ORDERS: ComicReadingOrder[] = [
  {
    slug: "mcu-companion",
    name: "MCU Companion",
    description:
      "Comics that echo or deepen the films — read alongside or after the matching MCU title on our timeline.",
    accent: "#c8ff00",
    comics: [
      {
        slug: "iron-man-extremis",
        title: "Iron Man: Extremis",
        overview: "Tony's modern origin tone — closest comic DNA to the 2008 film.",
        year: 2005,
        type: "SERIES",
        searchQuery: "Iron Man Extremis",
        marvelUrl:
          "https://www.marvel.com/comics/series/835/the_invincible_iron_man_2004_2007",
        relatedMcuSlug: "iron-man",
      },
      {
        slug: "captain-america-winter-soldier",
        title: "Captain America: Winter Soldier",
        overview: "Bucky's return and political paranoia that inspired the film.",
        year: 2005,
        type: "SERIES",
        searchQuery: "Captain America Winter Soldier",
        marvelUrl:
          "https://www.marvel.com/comics/series/832/captain_america_2004_2011",
        relatedMcuSlug: "captain-america-the-winter-soldier",
      },
      {
        slug: "civil-war-event",
        title: "Civil War",
        overview: "The superhero registration war — core inspiration for the MCU film.",
        year: 2006,
        type: "EVENT",
        searchQuery: "Civil War",
        marvelUrl:
          "https://www.marvel.com/comics/series/1067/civil_war_2006_-_2007",
        relatedMcuSlug: "captain-america-civil-war",
      },
      {
        slug: "planet-hulk",
        title: "Planet Hulk",
        overview: "Hulk exiled to Sakaar — DNA for Thor: Ragnarok's arena arc.",
        year: 2007,
        type: "EVENT",
        searchQuery: "Planet Hulk",
        marvelUrl:
          "https://www.marvel.com/comics/series/2426/hulk_planet_hulk_2007",
        relatedMcuSlug: "thor-ragnarok",
      },
      {
        slug: "infinity-gantlet",
        title: "The Infinity Gauntlet",
        overview: "Thanos collects the stones — essential prelude to Infinity War & Endgame.",
        year: 1991,
        type: "EVENT",
        searchQuery: "Infinity Gauntlet",
        marvelUrl:
          "https://www.marvel.com/comics/series/2023/infinity_gauntlet_1991",
        relatedMcuSlug: "avengers-infinity-war",
      },
      {
        slug: "house-of-m",
        title: "House of M",
        overview: "Wanda reshapes reality — spiritual predecessor to WandaVision.",
        year: 2005,
        type: "EVENT",
        searchQuery: "House of M",
        marvelUrl: "https://www.marvel.com/comics/series/362/house_of_m_2006",
        relatedMcuSlug: "wandavision",
      },
      {
        slug: "multiverse-of-madness-comics",
        title: "Strange Tales / Darkhold",
        overview: "Horror-tinged Strange stories and dark magic before Multiverse of Madness.",
        year: 2019,
        type: "SERIES",
        searchQuery: "Doctor Strange",
        marvelUrl:
          "https://www.marvel.com/comics/series/20457/doctor_strange_2015_-_2018",
        relatedMcuSlug: "doctor-strange-multiverse",
      },
    ],
  },
  {
    slug: "infinity-saga-essentials",
    name: "Infinity Saga Essentials",
    description: "The comic backbone of Phases 1–3 — stones, Avengers, and the road to Thanos.",
    accent: "#e11d2e",
    comics: [
      {
        slug: "avengers-disassembled",
        title: "Avengers Disassembled",
        overview: "Team fractures before the modern era of crossover events.",
        year: 2004,
        type: "EVENT",
        searchQuery: "Avengers Disassembled",
        marvelUrl:
          "https://www.marvel.com/comics/series/344/avengers_disassembled_2006",
      },
      {
        slug: "annihilation",
        title: "Annihilation",
        overview: "Cosmic war that rebooted Guardians-era space Marvel.",
        year: 2006,
        type: "EVENT",
        searchQuery: "Annihilation",
        marvelUrl:
          "https://www.marvel.com/comics/series/3613/annihilation_2006_-_2007",
        relatedMcuSlug: "guardians-of-the-galaxy",
      },
      {
        slug: "infinity-event",
        title: "Infinity",
        overview: "Thanos and the Builders threaten Earth — big-team cosmic scale.",
        year: 2013,
        type: "EVENT",
        searchQuery: "Infinity Marvel",
        marvelUrl: "https://www.marvel.com/comics/series/17735/infinity_2013",
      },
      {
        slug: "infinity-gantlet-saga",
        title: "The Infinity Gauntlet",
        overview: "The definitive Thanos snap story.",
        year: 1991,
        type: "EVENT",
        searchQuery: "Infinity Gauntlet",
        marvelUrl:
          "https://www.marvel.com/comics/series/2023/infinity_gauntlet_1991",
        relatedMcuSlug: "avengers-infinity-war",
      },
      {
        slug: "infinity-war-comic",
        title: "Infinity War",
        overview: "Magus and cosmic doubles — not the same as the film, but stone lore gold.",
        year: 1992,
        type: "EVENT",
        searchQuery: "Infinity War Marvel",
        marvelUrl: "https://www.marvel.com/comics/series/2024/infinity_war_1992",
      },
    ],
  },
  {
    slug: "multiverse-starters",
    name: "Multiverse Saga Starters",
    description: "After Endgame — comics that set up Kang, the multiverse, and what comes next.",
    accent: "#2b6cff",
    comics: [
      {
        slug: "secret-wars-2015",
        title: "Secret Wars (2015)",
        overview: "Battleworld collapse — blueprint DNA for multiverse stakes.",
        year: 2015,
        type: "EVENT",
        searchQuery: "Secret Wars 2015",
        marvelUrl:
          "https://www.marvel.com/comics/series/19648/secret_wars_2015_-_2016",
      },
      {
        slug: "young-avengers",
        title: "Young Avengers",
        overview: "Next-gen heroes — Kamala, Kate, and teen legacy energy.",
        year: 2013,
        type: "SERIES",
        searchQuery: "Young Avengers",
        marvelUrl: "https://www.marvel.com/comics/series/17647/young_avengers_2013",
      },
      {
        slug: "immortal-hulk",
        title: "Immortal Hulk",
        overview: "Horror-forward Hulk run that influenced She-Hulk's tone.",
        year: 2018,
        type: "SERIES",
        searchQuery: "Immortal Hulk",
        marvelUrl:
          "https://www.marvel.com/comics/series/24278/immortal_hulk_2018_-_2021",
        relatedMcuSlug: "she-hulk",
      },
      {
        slug: "moon-knight-lemire",
        title: "Moon Knight (2016)",
        overview: "Jeff Lemire & Greg Smallwood — identity fracture before the Disney+ show.",
        year: 2016,
        type: "SERIES",
        searchQuery: "Moon Knight Lemire",
        marvelUrl:
          "https://www.marvel.com/comics/series/20488/moon_knight_2016_-_2018",
        relatedMcuSlug: "moon-knight",
      },
      {
        slug: "kang-dynasty",
        title: "Kang Dynasty",
        overview: "Kang conquers Earth — roadmap energy for Quantumania & beyond.",
        year: 2001,
        type: "EVENT",
        searchQuery: "Kang Dynasty",
        marvelUrl: "https://www.marvel.com/comics/series/354/avengers_1998_2004",
        relatedMcuSlug: "ant-man-quantumania",
      },
    ],
  },
  {
    slug: "spider-man-essential",
    name: "Spider-Man Essential",
    description: "Peter Parker foundations — perfect after Homecoming through No Way Home.",
    accent: "#e11d48",
    comics: [
      {
        slug: "amazing-fantasy-15",
        title: "Amazing Fantasy #15",
        overview: "With great power — the original origin.",
        year: 1962,
        type: "ISSUE",
        searchQuery: "Amazing Fantasy 15",
        marvelUrl: "https://www.marvel.com/comics/series/2987/amazing_fantasy_1962",
        relatedMcuSlug: "spider-man-homecoming",
      },
      {
        slug: "kravens-last-hunt",
        title: "Kraven's Last Hunt",
        overview: "Psychological horror masterpiece — Peter at his lowest.",
        year: 1987,
        type: "SERIES",
        searchQuery: "Kraven's Last Hunt",
        marvelUrl:
          "https://www.marvel.com/comics/series/23112/amazing_spiderman_epic_collection_kravens_last_hunt_2017",
      },
      {
        slug: "ultimate-spider-man",
        title: "Ultimate Spider-Man",
        overview: "Modern high-school Peter — MCU Homecoming vibes.",
        year: 2000,
        type: "SERIES",
        searchQuery: "Ultimate Spider-Man Bendis",
        marvelUrl:
          "https://www.marvel.com/comics/series/466/ultimate_spider-man_2000_-_2009",
        relatedMcuSlug: "spider-man-homecoming",
      },
      {
        slug: "spider-verse",
        title: "Spider-Verse",
        overview: "Every Spider ever — multiverse Peter energy before No Way Home.",
        year: 2014,
        type: "EVENT",
        searchQuery: "Spider-Verse",
        marvelUrl:
          "https://www.marvel.com/comics/series/18892/spiderverse_2014_2015",
        relatedMcuSlug: "spider-man-no-way-home",
      },
    ],
  },
  {
    slug: "cosmic-mcu",
    name: "Cosmic MCU",
    description: "Guardians, Carol, and space opera — read before or after the cosmic films.",
    accent: "#00c2a8",
    comics: [
      {
        slug: "annihilation-conquest",
        title: "Annihilation Conquest",
        overview: "Sequel that cemented modern Guardians roster.",
        year: 2007,
        type: "EVENT",
        searchQuery: "Annihilation Conquest",
        marvelUrl:
          "https://www.marvel.com/comics/series/3061/annihilation_conquest_2007",
        relatedMcuSlug: "guardians-of-the-galaxy",
      },
      {
        slug: "guardians-abnett",
        title: "Guardians of the Galaxy (2008)",
        overview: "DnA run — the definitive Star-Lord team book.",
        year: 2008,
        type: "SERIES",
        searchQuery: "Guardians of the Galaxy 2008",
        marvelUrl:
          "https://www.marvel.com/comics/series/4885/guardians_of_the_galaxy_2008_-_2010",
        relatedMcuSlug: "guardians-of-the-galaxy",
      },
      {
        slug: "captain-marvel-deconnick",
        title: "Captain Marvel (2012)",
        overview: "Carol takes the name — flight and cosmic punch.",
        year: 2012,
        type: "SERIES",
        searchQuery: "Captain Marvel DeConnick",
        marvelUrl:
          "https://www.marvel.com/comics/series/16280/captain_marvel_2012_-_2013",
        relatedMcuSlug: "captain-marvel",
      },
      {
        slug: "silver-surfer-reborn",
        title: "Silver Surfer (2014)",
        overview: "Cosmic wonder with heart — Ego & space road-trip tone.",
        year: 2014,
        type: "SERIES",
        searchQuery: "Silver Surfer 2014",
        marvelUrl:
          "https://www.marvel.com/comics/series/18310/silver_surfer_2014_-_2015",
        relatedMcuSlug: "guardians-of-the-galaxy-vol-2",
      },
    ],
  },
  {
    slug: "fantastic-four-first-steps",
    name: "Fantastic Four First Steps",
    description: "Before the MCU First Steps film — the family that started Marvel Comics.",
    accent: "#ffd400",
    comics: [
      {
        slug: "ff-hickman",
        title: "Fantastic Four (Hickman)",
        overview: "Epic science-fiction Fantastic Four — modern benchmark.",
        year: 2009,
        type: "SERIES",
        searchQuery: "Fantastic Four Hickman",
        marvelUrl:
          "https://www.marvel.com/comics/series/421/fantastic_four_1998_2012",
        relatedMcuSlug: "fantastic-four-first-steps",
      },
      {
        slug: "ff-2011",
        title: "FF (2011)",
        overview: "Future Foundation — Reed, Sue, kids, and the Baxter Building.",
        year: 2011,
        type: "SERIES",
        searchQuery: "FF Future Foundation",
        marvelUrl: "https://www.marvel.com/comics/series/13440/ff_2011_-_2012",
      },
      {
        slug: "unbeatable-squirrel-girl",
        title: "Unbeatable Squirrel Girl",
        overview: "Light cosmic comedy — MCU may lean playful.",
        year: 2015,
        type: "SERIES",
        searchQuery: "Unbeatable Squirrel Girl",
        marvelUrl:
          "https://www.marvel.com/comics/series/20620/the_unbeatable_squirrel_girl_2015_2019",
      },
      {
        slug: "galactus-origin",
        title: "Galactus: The Origin",
        overview: "Cosmic origin lore — possible Doomsday-adjacent reading.",
        year: 2003,
        type: "GRAPHIC_NOVEL",
        searchQuery: "Galactus Origin",
        marvelUrl:
          "https://www.marvel.com/comics/series/20424/galactus_the_devourer_1999_-_2000",
      },
    ],
  },
  {
    slug: "x-men-wolverine",
    name: "X-Men & Wolverine",
    description: "Mutant era starters — especially after Deadpool & Wolverine in the MCU.",
    accent: "#1a1a1a",
    comics: [
      {
        slug: "days-of-future-past",
        title: "Days of Future Past",
        overview: "Dystopian mutant classic — timeline stakes.",
        year: 1981,
        type: "ISSUE",
        searchQuery: "Days of Future Past",
        marvelUrl:
          "https://www.marvel.com/comics/guides/1467/x-men-days-of-future-past",
        relatedMcuSlug: "deadpool-wolverine",
      },
      {
        slug: "god-loves-man-kills",
        title: "X-Men: God Loves, Man Kills",
        overview: "Mutant persecution parable — still sharp.",
        year: 1982,
        type: "GRAPHIC_NOVEL",
        searchQuery: "God Loves Man Kills",
        marvelUrl:
          "https://www.marvel.com/comics/issue/20817/x-men_god_loves_man_kills_-_special_edition_1982",
      },
      {
        slug: "old-man-logan",
        title: "Old Man Logan",
        overview: "Wolverine in a broken future — Logan film DNA.",
        year: 2008,
        type: "SERIES",
        searchQuery: "Old Man Logan",
        marvelUrl: "https://www.marvel.com/comics/series/632/wolverine_2003_-_2009",
        relatedMcuSlug: "deadpool-wolverine",
      },
      {
        slug: "house-of-x",
        title: "House of X / Powers of X",
        overview: "Modern mutant status quo reboot — essential current X-Men.",
        year: 2019,
        type: "EVENT",
        searchQuery: "House of X",
        marvelUrl: "https://www.marvel.com/comics/series/26338/house_of_x_2019",
      },
    ],
  },
];

export function getComicReadingOrders() {
  return COMIC_READING_ORDERS;
}

export function getComicReadingOrder(slug: string) {
  return COMIC_READING_ORDERS.find((o) => o.slug === slug);
}

export function getTotalComicEntries() {
  return COMIC_READING_ORDERS.reduce((n, o) => n + o.comics.length, 0);
}
