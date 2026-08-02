import type {
  Character,
  Event,
  InfinityStone,
  Location,
  Movie,
  MultiverseEntry,
  Organization,
  StoryArc,
  WatchGuide,
} from "@/types";

export const movies: Movie[] = [
  {
    id: "1", slug: "captain-america-the-first-avenger", title: "Captain America: The First Avenger",
    overview: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'.",
    posterUrl: "https://image.tmdb.org/t/p/w500/vSNxAJT98DwyWR6GBwXaPOXbtjW.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/8wKaNRV4h7B7u59Qmenqu6O9V9c.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=JerVrbLldXw",
    releaseDate: "2011-07-22", timelineDate: "1942-1945", timelineYear: 1943, runtime: 124, phase: 1, saga: "Infinity Saga",
    rating: 6.9, watchOrder: 5, chronologicalOrder: 1, mediaType: "MOVIE", director: "Joe Johnston",
    postCreditScenes: ["Nick Fury recruits Steve Rogers for the Avengers Initiative"],
    importantObjects: ["Tesseract", "Super Soldier Serum"],
    characters: [
      { slug: "steve-rogers", name: "Captain America", type: "INTRODUCED" },
      { slug: "bucky-barnes", name: "Bucky Barnes", type: "INTRODUCED" },
      { slug: "peggy-carter", name: "Peggy Carter", type: "INTRODUCED" },
      { slug: "red-skull", name: "Red Skull", type: "INTRODUCED" },
    ],
    events: ["world-war-ii", "tesseract-discovery"],
    locations: ["new-york"], stones: ["space"],
  },
  {
    id: "2", slug: "captain-marvel", title: "Captain Marvel",
    overview: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war.",
    posterUrl: "https://image.tmdb.org/t/p/w500/Avi8adwdzCbO2CwAFG0F2bVjSMy.jpg",
    releaseDate: "2019-03-08", timelineDate: "1995", timelineYear: 1995, runtime: 123, phase: 3, saga: "Infinity Saga",
    rating: 6.8, watchOrder: 20, chronologicalOrder: 2, mediaType: "MOVIE", director: "Anna Boden & Ryan Fleck",
    postCreditScenes: ["Carol Danvers arrives on Earth responding to the pager", "Avengers discover Thanos's location"],
    importantObjects: ["Tesseract"], characters: [{ slug: "carol-danvers", name: "Captain Marvel", type: "INTRODUCED" }],
    events: ["kree-skull-war"], locations: ["new-york"], stones: ["space"],
  },
  {
    id: "3", slug: "iron-man", title: "Iron Man",
    overview: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    posterUrl: "https://image.tmdb.org/t/p/w500/78l9w0IYxFbYFI47zv9blA0kkb4.jpg",
    releaseDate: "2008-05-02", timelineDate: "2010", timelineYear: 2010, runtime: 126, phase: 1, saga: "Infinity Saga",
    rating: 7.6, watchOrder: 1, chronologicalOrder: 3, mediaType: "MOVIE", director: "Jon Favreau",
    postCreditScenes: ["Nick Fury tells Tony Stark about the Avengers Initiative"],
    importantObjects: ["Arc Reactor", "Iron Man Suit Mark I-III"],
    characters: [
      { slug: "tony-stark", name: "Iron Man", type: "INTRODUCED" },
      { slug: "pepper-potts", name: "Pepper Potts", type: "INTRODUCED" },
      { slug: "james-rhodes", name: "War Machine", type: "INTRODUCED" },
      { slug: "happy-hogan", name: "Happy Hogan", type: "INTRODUCED" },
    ],
    events: ["ten-rings-attack"], locations: ["new-york"],
  },
  {
    id: "4", slug: "iron-man-2", title: "Iron Man 2",
    overview: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful rival.",
    posterUrl: "https://image.tmdb.org/t/p/w500/6hBMEYxNVM9V8j0oQ3sH9c1J5xE.jpg",
    releaseDate: "2010-05-07", timelineDate: "2011", timelineYear: 2011, runtime: 124, phase: 1, saga: "Infinity Saga",
    rating: 6.8, watchOrder: 3, chronologicalOrder: 4, mediaType: "MOVIE", director: "Jon Favreau",
    postCreditScenes: ["Agent Coulson finds Thor's hammer in New Mexico"],
    characters: [
      { slug: "natasha-romanoff", name: "Black Widow", type: "INTRODUCED" },
      { slug: "nick-fury", name: "Nick Fury", type: "APPEARING" },
    ],
    events: ["stark-expo"], locations: ["new-york"],
  },
  {
    id: "5", slug: "the-incredible-hulk", title: "The Incredible Hulk",
    overview: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into.",
    posterUrl: "https://image.tmdb.org/t/p/w500/v33xNspNuxcXUpGa7iHxfmD6zWR.jpg",
    releaseDate: "2008-06-13", timelineDate: "2011", timelineYear: 2011, runtime: 112, phase: 1, saga: "Infinity Saga",
    rating: 6.2, watchOrder: 2, chronologicalOrder: 5, mediaType: "MOVIE", director: "Louis Leterrier",
    postCreditScenes: ["Tony Stark meets General Ross in a bar"],
    characters: [{ slug: "bruce-banner", name: "Hulk", type: "INTRODUCED" }],
    events: ["gamma-incident"], locations: ["new-york"],
  },
  {
    id: "6", slug: "thor", title: "Thor",
    overview: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth).",
    posterUrl: "https://image.tmdb.org/t/p/w500/4q2HZ2K8WD3NvSWIBEHuA5SO3Jp.jpg",
    releaseDate: "2011-05-06", timelineDate: "2011", timelineYear: 2011, runtime: 115, phase: 1, saga: "Infinity Saga",
    rating: 6.7, watchOrder: 4, chronologicalOrder: 6, mediaType: "MOVIE", director: "Kenneth Branagh",
    postCreditScenes: ["Loki is revealed to be controlling Erik Selvig", "Tesseract is shown"],
    characters: [
      { slug: "thor", name: "Thor", type: "INTRODUCED" },
      { slug: "loki", name: "Loki", type: "INTRODUCED" },
      { slug: "jane-foster", name: "Jane Foster", type: "INTRODUCED" },
      { slug: "heimdall", name: "Heimdall", type: "INTRODUCED" },
    ],
    events: ["destroyer-attack"], locations: ["asgard", "new-york"],
  },
  {
    id: "7", slug: "the-avengers", title: "The Avengers",
    overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army.",
    posterUrl: "https://image.tmdb.org/t/p/w500/RYMX12wFkNVoOjS2Srv6XG6inJm.jpg",
    releaseDate: "2012-05-04", timelineDate: "2012", timelineYear: 2012, runtime: 143, phase: 1, saga: "Infinity Saga",
    rating: 7.7, watchOrder: 6, chronologicalOrder: 7, mediaType: "MOVIE", director: "Joss Whedon",
    postCreditScenes: ["Thanos is revealed as the mastermind behind Loki's invasion"],
    importantObjects: ["Tesseract", "Scepter"],
    characters: [
      { slug: "clint-barton", name: "Hawkeye", type: "INTRODUCED" },
      { slug: "phil-coulson", name: "Phil Coulson", type: "APPEARING" },
    ],
    events: ["battle-of-new-york"], locations: ["new-york", "asgard"], stones: ["space", "mind"],
  },
  {
    id: "8", slug: "iron-man-3", title: "Iron Man 3",
    overview: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding.",
    posterUrl: "https://image.tmdb.org/t/p/w500/qhb1qOilapbSWxAUCPKLnr90Z0.jpg",
    releaseDate: "2013-05-03", timelineDate: "2012", timelineYear: 2012, runtime: 130, phase: 2, saga: "Infinity Saga",
    rating: 6.9, watchOrder: 7, chronologicalOrder: 8, mediaType: "MOVIE", director: "Shane Black",
    postCreditScenes: ["Tony Stark tells the story to Bruce Banner who falls asleep"],
    characters: [{ slug: "mandarin", name: "The Mandarin", type: "INTRODUCED" }],
    events: ["mandarin-attacks"], locations: ["new-york"],
  },
  {
    id: "9", slug: "thor-the-dark-world", title: "Thor: The Dark World",
    overview: "Thor must team up with Loki to save the Nine Realms from the Dark Elves.",
    posterUrl: "https://image.tmdb.org/t/p/w500/b79Rj5l2dA1IbVYpDsnk2jF3Q0p.jpg",
    releaseDate: "2013-11-08", timelineDate: "2013", timelineYear: 2013, runtime: 112, phase: 2, saga: "Infinity Saga",
    rating: 6.6, watchOrder: 8, chronologicalOrder: 9, mediaType: "MOVIE", director: "Alan Taylor",
    postCreditScenes: ["Thor returns to Asgard but secretly visits Jane", "Collector acquires Aether"],
    characters: [{ slug: "malekith", name: "Malekith", type: "INTRODUCED" }],
    events: ["convergence"], locations: ["asgard"], stones: ["reality"],
  },
  {
    id: "10", slug: "captain-america-the-winter-soldier", title: "Captain America: The Winter Soldier",
    overview: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger to take down a conspiracy.",
    posterUrl: "https://image.tmdb.org/t/p/w500/pEE5Ftg7HE6DV8tMFjJDgXLuviP.jpg",
    releaseDate: "2014-04-04", timelineDate: "2014", timelineYear: 2014, runtime: 136, phase: 2, saga: "Infinity Saga",
    rating: 7.7, watchOrder: 9, chronologicalOrder: 10, mediaType: "MOVIE", director: "Anthony & Joe Russo",
    postCreditScenes: ["Scarlet Witch and Quicksilver are shown in Hydra facility", "Bucky visits Captain America museum"],
    characters: [
      { slug: "sam-wilson", name: "Falcon", type: "INTRODUCED" },
      { slug: "winter-soldier", name: "Winter Soldier", type: "INTRODUCED" },
    ],
    events: ["hydra-reveal", "triskelion-fall"], locations: ["new-york"],
  },
  {
    id: "11", slug: "guardians-of-the-galaxy", title: "Guardians of the Galaxy",
    overview: "A group of intergalactic criminals must pull together to stop a fanatical warrior from taking control of the universe.",
    posterUrl: "https://image.tmdb.org/t/p/w500/r7pn2dh5Mm5QltgBfC7uZZ7TLE1.jpg",
    releaseDate: "2014-08-01", timelineDate: "2014", timelineYear: 2014, runtime: 121, phase: 2, saga: "Infinity Saga",
    rating: 7.9, watchOrder: 10, chronologicalOrder: 11, mediaType: "MOVIE", director: "James Gunn",
    postCreditScenes: ["Howard the Duck appears in the Collector's museum"],
    characters: [
      { slug: "peter-quill", name: "Star-Lord", type: "INTRODUCED" },
      { slug: "gamora", name: "Gamora", type: "INTRODUCED" },
      { slug: "drax", name: "Drax", type: "INTRODUCED" },
      { slug: "rocket", name: "Rocket", type: "INTRODUCED" },
      { slug: "groot", name: "Groot", type: "INTRODUCED" },
      { slug: "nebula", name: "Nebula", type: "INTRODUCED" },
      { slug: "ronan", name: "Ronan", type: "INTRODUCED" },
    ],
    events: ["xandar-battle"], locations: ["knowhere"], stones: ["power"],
  },
  {
    id: "12", slug: "guardians-of-the-galaxy-vol-2", title: "Guardians of the Galaxy Vol. 2",
    overview: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    posterUrl: "https://image.tmdb.org/t/p/w500/y4MzIgONeDsNN75zHGVAkgmVE1w.jpg",
    releaseDate: "2017-05-05", timelineDate: "2014", timelineYear: 2014, runtime: 136, phase: 3, saga: "Infinity Saga",
    rating: 7.6, watchOrder: 15, chronologicalOrder: 12, mediaType: "MOVIE", director: "James Gunn",
    postCreditScenes: ["Teen Groot", "Ayesha creates Adam Warlock", "Stakar Ogord reunion"],
    characters: [{ slug: "ego", name: "Ego", type: "INTRODUCED" }, { slug: "mantis", name: "Mantis", type: "INTRODUCED" }],
    events: ["ego-battle"], locations: ["knowhere"],
  },
  {
    id: "13", slug: "avengers-age-of-ultron", title: "Avengers: Age of Ultron",
    overview: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program, they unleash Ultron.",
    posterUrl: "https://image.tmdb.org/t/p/w500/t90Y3LW08e9g9G0QW7BEMcX5Sbk.jpg",
    releaseDate: "2015-05-01", timelineDate: "2015", timelineYear: 2015, runtime: 141, phase: 2, saga: "Infinity Saga",
    rating: 7.3, watchOrder: 11, chronologicalOrder: 13, mediaType: "MOVIE", director: "Joss Whedon",
    postCreditScenes: ["Thanos puts on the Infinity Gauntlet"],
    characters: [
      { slug: "ultron", name: "Ultron", type: "INTRODUCED" },
      { slug: "wanda-maximoff", name: "Scarlet Witch", type: "INTRODUCED" },
      { slug: "pietro-maximoff", name: "Quicksilver", type: "INTRODUCED" },
      { slug: "vision", name: "Vision", type: "INTRODUCED" },
    ],
    events: ["sokovia-elevation", "battle-of-sokovia"], locations: ["sokovia"], stones: ["mind"],
  },
  {
    id: "14", slug: "ant-man", title: "Ant-Man",
    overview: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero.",
    posterUrl: "https://image.tmdb.org/t/p/w500/rKlA1N7o5CJ8N5tEnaT2be7UxxP.jpg",
    releaseDate: "2015-07-17", timelineDate: "2015", timelineYear: 2015, runtime: 117, phase: 2, saga: "Infinity Saga",
    rating: 7.1, watchOrder: 12, chronologicalOrder: 14, mediaType: "MOVIE", director: "Peyton Reed",
    postCreditScenes: ["Falcon finds Ant-Man", "Hope van Dyne gets Wasp suit"],
    characters: [
      { slug: "scott-lang", name: "Ant-Man", type: "INTRODUCED" },
      { slug: "hope-van-dyne", name: "Wasp", type: "INTRODUCED" },
      { slug: "hank-pym", name: "Hank Pym", type: "INTRODUCED" },
    ],
    events: ["pym-tech-heist"], locations: ["new-york"],
  },
  {
    id: "15", slug: "captain-america-civil-war", title: "Captain America: Civil War",
    overview: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    posterUrl: "https://image.tmdb.org/t/p/w500/rAGHdrA647FI7FxD5xir0kSz5Jk.jpg",
    releaseDate: "2016-05-06", timelineDate: "2016", timelineYear: 2016, runtime: 147, phase: 3, saga: "Infinity Saga",
    rating: 7.4, watchOrder: 13, chronologicalOrder: 15, mediaType: "MOVIE", director: "Anthony & Joe Russo",
    postCreditScenes: ["Bucky enters cryo in Wakanda", "Peter Parker shows off new web shooters"],
    characters: [
      { slug: "peter-parker", name: "Spider-Man", type: "INTRODUCED" },
      { slug: "tchalla", name: "Black Panther", type: "INTRODUCED" },
      { slug: "zemo", name: "Baron Zemo", type: "INTRODUCED" },
    ],
    events: ["civil-war", "airport-battle"], locations: ["new-york", "wakanda"],
  },
  {
    id: "16", slug: "black-panther", title: "Black Panther",
    overview: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.",
    posterUrl: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    releaseDate: "2018-02-16", timelineDate: "2016", timelineYear: 2016, runtime: 134, phase: 3, saga: "Infinity Saga",
    rating: 7.3, watchOrder: 18, chronologicalOrder: 16, mediaType: "MOVIE", director: "Ryan Coogler",
    postCreditScenes: ["T'Challa speaks at UN", "Shuri helps Bucky"],
    characters: [
      { slug: "shuri", name: "Shuri", type: "INTRODUCED" },
      { slug: "killmonger", name: "Killmonger", type: "INTRODUCED" },
      { slug: "okoye", name: "Okoye", type: "INTRODUCED" },
    ],
    events: ["wakanda-challenge"], locations: ["wakanda"],
  },
  {
    id: "17", slug: "spider-man-homecoming", title: "Spider-Man: Homecoming",
    overview: "Peter Parker tries to stop a criminal underworld from selling high-tech weapons while balancing his life as a high school student.",
    posterUrl: "https://image.tmdb.org/t/p/w500/6319jN0md6Q4xamgG2xLJIQBKfI.jpg",
    releaseDate: "2017-07-07", timelineDate: "2016", timelineYear: 2016, runtime: 133, phase: 3, saga: "Infinity Saga",
    rating: 7.4, watchOrder: 16, chronologicalOrder: 17, mediaType: "MOVIE", director: "Jon Watts",
    postCreditScenes: ["Vulture meets Scorpion in prison", "Captain America PSA outtakes"],
    characters: [{ slug: "vulture", name: "Vulture", type: "INTRODUCED" }, { slug: "ned-leeds", name: "Ned Leeds", type: "INTRODUCED" }],
    events: ["staten-island-ferry"], locations: ["new-york"],
  },
  {
    id: "18", slug: "doctor-strange", title: "Doctor Strange",
    overview: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    posterUrl: "https://image.tmdb.org/t/p/w500/4PiiNGZWjTABYYk4SIns6gt8iHu.jpg",
    releaseDate: "2016-11-04", timelineDate: "2016-2017", timelineYear: 2017, runtime: 115, phase: 3, saga: "Infinity Saga",
    rating: 7.5, watchOrder: 14, chronologicalOrder: 18, mediaType: "MOVIE", director: "Scott Derrickson",
    postCreditScenes: ["Strange and Wong discuss the Infinity Stones", "Mordo begins collecting relics"],
    characters: [
      { slug: "stephen-strange", name: "Doctor Strange", type: "INTRODUCED" },
      { slug: "wong", name: "Wong", type: "INTRODUCED" },
      { slug: "mordo", name: "Mordo", type: "INTRODUCED" },
      { slug: "kaecilius", name: "Kaecilius", type: "INTRODUCED" },
    ],
    events: ["sanctum-attack"], locations: ["sanctum-sanctorum", "new-york"], stones: ["time"],
  },
  {
    id: "19", slug: "thor-ragnarok", title: "Thor: Ragnarok",
    overview: "Thor is imprisoned on the planet Sakaar and must race against time to return to Asgard and stop Ragnarök.",
    posterUrl: "https://image.tmdb.org/t/p/w500/rzRwTcFvujC8CNHh2izQ5BJDs2t.jpg",
    releaseDate: "2017-11-03", timelineDate: "2017", timelineYear: 2017, runtime: 130, phase: 3, saga: "Infinity Saga",
    rating: 7.6, watchOrder: 17, chronologicalOrder: 19, mediaType: "MOVIE", director: "Taika Waititi",
    postCreditScenes: ["Thor's ship is intercepted by Thanos"],
    characters: [{ slug: "hela", name: "Hela", type: "INTRODUCED" }, { slug: "valkyrie", name: "Valkyrie", type: "INTRODUCED" }, { slug: "korg", name: "Korg", type: "INTRODUCED" }],
    events: ["ragnarok"], locations: ["asgard", "sakaar"],
  },
  {
    id: "20", slug: "ant-man-and-the-wasp", title: "Ant-Man and the Wasp",
    overview: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Pym present an urgent new mission.",
    posterUrl: "https://image.tmdb.org/t/p/w500/hnblPDJPoLNdlNp7MZ2Exmn0I8.jpg",
    releaseDate: "2018-07-06", timelineDate: "2017", timelineYear: 2017, runtime: 118, phase: 3, saga: "Infinity Saga",
    rating: 7.0, watchOrder: 20, chronologicalOrder: 20, mediaType: "MOVIE", director: "Peyton Reed",
    postCreditScenes: ["Snap happens while Scott is in the Quantum Realm"],
    characters: [{ slug: "ghost", name: "Ghost", type: "INTRODUCED" }],
    events: ["quantum-realm-rescue"], locations: ["san-francisco"],
  },
  {
    id: "21", slug: "avengers-infinity-war", title: "Avengers: Infinity War",
    overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.",
    posterUrl: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    releaseDate: "2018-04-27", timelineDate: "2018", timelineYear: 2018, runtime: 149, phase: 3, saga: "Infinity Saga",
    rating: 8.2, watchOrder: 19, chronologicalOrder: 21, mediaType: "MOVIE", director: "Anthony & Joe Russo",
    postCreditScenes: ["Nick Fury pages Captain Marvel before disintegrating"],
    characters: [{ slug: "thanos", name: "Thanos", type: "INTRODUCED" }, { slug: "ebony-maw", name: "Ebony Maw", type: "INTRODUCED" }],
    events: ["snap", "battle-of-wakanda", "battle-of-titan"], locations: ["wakanda", "titan", "knowhere"],
    stones: ["space", "mind", "reality", "power", "time"],
  },
  {
    id: "22", slug: "avengers-endgame", title: "Avengers: Endgame",
    overview: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    releaseDate: "2019-04-26", timelineDate: "2023", timelineYear: 2023, runtime: 181, phase: 3, saga: "Infinity Saga",
    rating: 8.3, watchOrder: 22, chronologicalOrder: 22, mediaType: "MOVIE", director: "Anthony & Joe Russo",
    postCreditScenes: ["Tony Stark's hammer sound from workshop"],
    characters: [{ slug: "captain-marvel-endgame", name: "Captain Marvel", type: "RETURNING" }],
    events: ["time-heist", "blip", "battle-of-earth"], locations: ["new-york", "asgard", "wakanda", "titan"],
    stones: ["space", "mind", "reality", "power", "time", "soul"],
  },
  {
    id: "23", slug: "spider-man-far-from-home", title: "Spider-Man: Far From Home",
    overview: "Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    posterUrl: "https://image.tmdb.org/t/p/w500/4db2NE6FRKKO3kG158TQDzxv5wM.jpg",
    releaseDate: "2019-07-02", timelineDate: "2024", timelineYear: 2024, runtime: 129, phase: 3, saga: "Infinity Saga",
    rating: 7.4, watchOrder: 23, chronologicalOrder: 23, mediaType: "MOVIE", director: "Jon Watts",
    postCreditScenes: ["Mysterio exposes Peter's identity", "Nick Fury revealed to be Talos on SABER space station"],
    characters: [{ slug: "mysterio", name: "Mysterio", type: "INTRODUCED" }],
    events: ["elementals-attack"], locations: ["new-york", "venice", "prague"],
  },
  {
    id: "24", slug: "black-widow", title: "Black Widow",
    overview: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    posterUrl: "https://image.tmdb.org/t/p/w500/qAZ0pzAToVQKAdgOs29HisC95ZM.jpg",
    releaseDate: "2021-07-09", timelineDate: "2016", timelineYear: 2016, runtime: 134, phase: 4, saga: "Infinity Saga",
    rating: 6.7, watchOrder: 24, chronologicalOrder: 15, mediaType: "MOVIE", director: "Cate Shortland",
    postCreditScenes: ["Yelena visits Natasha's grave", "Valentina recruits Yelena"],
    characters: [{ slug: "yelena-belova", name: "Yelena Belova", type: "INTRODUCED" }, { slug: "red-guardian", name: "Red Guardian", type: "INTRODUCED" }],
    events: ["red-room-destruction"], locations: ["russia", "budapest"],
  },
  {
    id: "25", slug: "shang-chi", title: "Shang-Chi and the Legend of the Ten Rings",
    overview: "Shang-Chi, the master of unarmed weaponry-based martial arts, is forced to confront his past after being drawn into the Ten Rings organization.",
    posterUrl: "https://image.tmdb.org/t/p/w500/1BIQJ19upOaEgn0s5Z2aXUKafNx.jpg",
    releaseDate: "2021-09-03", timelineDate: "2024", timelineYear: 2024, runtime: 132, phase: 4, saga: "Multiverse Saga",
    rating: 7.4, watchOrder: 25, chronologicalOrder: 24, mediaType: "MOVIE", director: "Destin Daniel Cretton",
    postCreditScenes: ["Wong brings Shang-Chi and Katy to discuss the Ten Rings", "Xialing takes over Ten Rings"],
    characters: [{ slug: "shang-chi", name: "Shang-Chi", type: "INTRODUCED" }, { slug: "wenwu", name: "Wenwu", type: "INTRODUCED" }],
    events: ["ta-lo-battle"], locations: ["san-francisco", "macau"],
  },
  {
    id: "26", slug: "eternals", title: "Eternals",
    overview: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
    posterUrl: "https://image.tmdb.org/t/p/w500/jZeYrGK9v2Sb8QwZtj3NOX6BEI5.jpg",
    releaseDate: "2021-11-05", timelineDate: "2024", timelineYear: 2024, runtime: 156, phase: 4, saga: "Multiverse Saga",
    rating: 6.3, watchOrder: 26, chronologicalOrder: 25, mediaType: "MOVIE", director: "Chloé Zhao",
    postCreditScenes: ["Eternals awakened by Eternal voice", "Blade meets Dane Whitman"],
    characters: [{ slug: "sersi", name: "Sersi", type: "INTRODUCED" }, { slug: "ikaris", name: "Ikaris", type: "INTRODUCED" }],
    events: ["emergence"], locations: ["earth"],
  },
  {
    id: "27", slug: "spider-man-no-way-home", title: "Spider-Man: No Way Home",
    overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    posterUrl: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6kHP0hc.jpg",
    releaseDate: "2021-12-17", timelineDate: "2024", timelineYear: 2024, runtime: 148, phase: 4, saga: "Multiverse Saga",
    rating: 8.0, watchOrder: 27, chronologicalOrder: 26, mediaType: "MOVIE", director: "Jon Watts",
    postCreditScenes: ["Doctor Strange 2 teaser with Wanda", "Venom leaves symbiote behind"],
    events: ["multiverse-break", "spell-cast"], locations: ["new-york", "sanctum-sanctorum"],
  },
  {
    id: "28", slug: "doctor-strange-multiverse", title: "Doctor Strange in the Multiverse of Madness",
    overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse.",
    posterUrl: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamxn03lsKKlb3r0f.jpg",
    releaseDate: "2022-05-06", timelineDate: "2025", timelineYear: 2025, runtime: 126, phase: 4, saga: "Multiverse Saga",
    rating: 6.3, watchOrder: 28, chronologicalOrder: 27, mediaType: "MOVIE", director: "Sam Raimi",
    postCreditScenes: ["Clea recruits Strange to fix an incursion"],
    characters: [{ slug: "america-chavez", name: "America Chavez", type: "INTRODUCED" }],
    events: ["incursion-threat"], locations: ["sanctum-sanctorum"],
  },
  {
    id: "29", slug: "thor-love-and-thunder", title: "Thor: Love and Thunder",
    overview: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher.",
    posterUrl: "https://image.tmdb.org/t/p/w500/pIkRyD235abrr0Pp4l1Y9c3JkZ1.jpg",
    releaseDate: "2022-07-08", timelineDate: "2025", timelineYear: 2025, runtime: 119, phase: 4, saga: "Multiverse Saga",
    rating: 6.1, watchOrder: 29, chronologicalOrder: 28, mediaType: "MOVIE", director: "Taika Waititi",
    postCreditScenes: ["Zeus plots revenge", "Gorr and Love in afterlife"],
    characters: [{ slug: "gorr", name: "Gorr", type: "INTRODUCED" }, { slug: "love", name: "Love", type: "INTRODUCED" }],
    events: ["god-bomb"], locations: ["new-asgard", "shadow-realm"],
  },
  {
    id: "30", slug: "black-panther-wakanda-forever", title: "Black Panther: Wakanda Forever",
    overview: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    posterUrl: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqAlz7ZNi1EvCfbad.jpg",
    releaseDate: "2022-11-11", timelineDate: "2025", timelineYear: 2025, runtime: 161, phase: 4, saga: "Multiverse Saga",
    rating: 6.7, watchOrder: 30, chronologicalOrder: 29, mediaType: "MOVIE", director: "Ryan Coogler",
    postCreditScenes: ["Shuri meets Nakia and T'Challa's son", "Namor on throne"],
    characters: [{ slug: "namor", name: "Namor", type: "INTRODUCED" }, { slug: "riri-williams", name: "Ironheart", type: "INTRODUCED" }],
    events: ["talokan-war"], locations: ["wakanda", "talokan"],
  },
  {
    id: "31", slug: "ant-man-quantumania", title: "Ant-Man and the Wasp: Quantumania",
    overview: "Scott Lang and Hope van Dyne are transported to the Quantum Realm, along with Hope's parents and Scott's daughter Cassie.",
    posterUrl: "https://image.tmdb.org/t/p/w500/qnqsmStz0za6xFty5DHUZ1Ye5j.jpg",
    releaseDate: "2023-02-17", timelineDate: "2026", timelineYear: 2026, runtime: 125, phase: 5, saga: "Multiverse Saga",
    rating: 6.1, watchOrder: 31, chronologicalOrder: 30, mediaType: "MOVIE", director: "Peyton Reed",
    postCreditScenes: ["Kang variants council", "Loki and Mobius spot Kang"],
    characters: [{ slug: "kang", name: "Kang the Conqueror", type: "INTRODUCED" }, { slug: "cassie-lang", name: "Cassie Lang", type: "INTRODUCED" }],
    events: ["quantum-rebellion"], locations: ["quantum-realm"],
  },
  {
    id: "32", slug: "guardians-vol-3", title: "Guardians of the Galaxy Vol. 3",
    overview: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own.",
    posterUrl: "https://image.tmdb.org/t/p/w500/5YZbUmjbMaBtVN5WfjCGDgkm7yt.jpg",
    releaseDate: "2023-05-05", timelineDate: "2026", timelineYear: 2026, runtime: 150, phase: 5, saga: "Multiverse Saga",
    rating: 7.9, watchOrder: 32, chronologicalOrder: 31, mediaType: "MOVIE", director: "James Gunn",
    postCreditScenes: ["Original Guardians reunion", "Star-Lord and Gamora 2014 variant"],
    events: ["counter-earth-battle"], locations: ["knowhere"],
  },
  {
    id: "33", slug: "the-marvels", title: "The Marvels",
    overview: "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together.",
    posterUrl: "https://image.tmdb.org/t/p/w500/9GBhzJNF2U43NYjpZ3K7RZMKe89.jpg",
    releaseDate: "2023-11-10", timelineDate: "2026", timelineYear: 2026, runtime: 105, phase: 5, saga: "Multiverse Saga",
    rating: 5.6, watchOrder: 33, chronologicalOrder: 32, mediaType: "MOVIE", director: "Nia DaCosta",
    postCreditScenes: ["Monica in alternate universe with Beast"],
    characters: [{ slug: "kamala-khan", name: "Ms. Marvel", type: "INTRODUCED" }, { slug: "monica-rambeau", name: "Monica Rambeau", type: "INTRODUCED" }],
    events: ["jump-point-collapse"], locations: ["space"],
  },
];

export const characters: Character[] = [
  {
    id: "1", slug: "tony-stark", name: "Iron Man", realName: "Tony Stark",
    biography: "Genius billionaire playboy philanthropist who built a powered suit of armor and became the founding Avenger. Sacrificed himself to save the universe from Thanos.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/yn6bV1p4s7rcnG0fN2M5W6r8fJk.jpg",
    aliases: ["Iron Man", "Shellhead", "The Futurist"], status: "DECEASED", affiliation: "Avengers", species: "Human", gender: "Male",
    abilities: ["Genius intellect", "Powered armor flight", "Repulsor beams", "Advanced engineering"],
    weapons: ["Iron Man suits Mark I-LXXXV", "Arc Reactor"],
    firstAppearance: "iron-man", lastAppearance: "avengers-endgame", currentStatus: "Sacrificed during the Battle of Earth",
    quotes: ["I am Iron Man.", "Genius, billionaire, playboy, philanthropist.", "Part of the journey is the end."],
    movies: ["iron-man", "iron-man-2", "the-avengers", "iron-man-3", "avengers-age-of-ultron", "captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame"],
    enemies: ["mandarin", "ultron", "thanos"], friends: ["pepper-potts", "james-rhodes", "steve-rogers", "peter-parker"], family: ["howard-stark", "pepper-potts"],
    storyOrder: ["iron-man", "iron-man-2", "the-avengers", "iron-man-3", "avengers-age-of-ultron", "captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "2", slug: "steve-rogers", name: "Captain America", realName: "Steve Rogers",
    biography: "A frail young man enhanced to the peak of human perfection by an experimental serum. Leader of the Avengers and symbol of hope.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/3ohjC2O6T1wxtcsnofGoJInnBn1.jpg",
    aliases: ["Captain America", "Cap", "The First Avenger"], status: "ALIVE", affiliation: "Avengers", species: "Enhanced Human", gender: "Male",
    abilities: ["Super strength", "Enhanced agility", "Shield mastery", "Tactical leadership"],
    weapons: ["Vibranium Shield", "Mjolnir (temporary)"],
    firstAppearance: "captain-america-the-first-avenger", lastAppearance: "avengers-endgame", currentStatus: "Retired in alternate timeline with Peggy Carter",
    quotes: ["I can do this all day.", "On your left.", "No, I don't think I will."],
    movies: ["captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"],
    enemies: ["red-skull", "winter-soldier", "thanos"], friends: ["bucky-barnes", "sam-wilson", "natasha-romanoff", "tony-stark"],
    storyOrder: ["captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "3", slug: "thor", name: "Thor", realName: "Thor Odinson",
    biography: "The God of Thunder and prince of Asgard. Wields the enchanted hammer Mjolnir and later Stormbreaker.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/PRoQgTHixNDo7pqcuFdb1xJPaeM.jpg",
    aliases: ["God of Thunder", "The Odinson", "Point Break"], status: "ALIVE", affiliation: "Avengers", species: "Asgardian", gender: "Male",
    abilities: ["Super strength", "Lightning manipulation", "Flight", "Longevity"],
    weapons: ["Mjolnir", "Stormbreaker"],
    firstAppearance: "thor", lastAppearance: "thor-love-and-thunder", currentStatus: "Adventuring with Love",
    quotes: ["I am still worthy!", "Bring me Thanos!", "Another!"],
    movies: ["thor", "the-avengers", "thor-the-dark-world", "avengers-age-of-ultron", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder"],
    enemies: ["loki", "hela", "thanos", "gorr"], friends: ["loki", "jane-foster", "valkyrie", "korg"],
    storyOrder: ["thor", "the-avengers", "thor-the-dark-world", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder"],
  },
  {
    id: "4", slug: "natasha-romanoff", name: "Black Widow", realName: "Natasha Romanoff",
    biography: "Former Russian spy and assassin trained in the Red Room. Became a founding Avenger and S.H.I.E.L.D. agent.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/QJq1a1Uq8LJ3kH3y0w8w8w8w8w8.jpg",
    aliases: ["Black Widow", "Nat", "Widow"], status: "DECEASED", affiliation: "Avengers", species: "Enhanced Human", gender: "Female",
    abilities: ["Master spy", "Hand-to-hand combat", "Weapons expert", "Stealth"],
    weapons: ["Widow's Bite", "Guns", "Batons"],
    firstAppearance: "iron-man-2", lastAppearance: "avengers-endgame", currentStatus: "Sacrificed on Vormir for the Soul Stone",
    quotes: ["I've got red in my ledger.", "This is going to work, Steve.", "We don't want to kill it. We want to control it."],
    movies: ["iron-man-2", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame", "black-widow"],
    enemies: ["red-room", "thanos"], friends: ["clint-barton", "steve-rogers", "yelena-belova"],
    storyOrder: ["iron-man-2", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "black-widow", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "5", slug: "peter-parker", name: "Spider-Man", realName: "Peter Parker",
    biography: "A Queens teenager bitten by a radioactive spider who gained spider-like abilities. Mentored by Tony Stark.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/ggFHVNU6yEMBRjAsa6zKzhiX0aO.jpg",
    aliases: ["Spider-Man", "Friendly Neighborhood Spider-Man", "Underoos"], status: "ALIVE", affiliation: "Avengers", species: "Human", gender: "Male",
    abilities: ["Wall-crawling", "Spider-sense", "Super strength", "Web-shooters"],
    weapons: ["Web-shooters", "Web-fluid"],
    firstAppearance: "captain-america-civil-war", lastAppearance: "spider-man-no-way-home", currentStatus: "Living anonymously after identity spell",
    quotes: ["With great power comes great responsibility.", "Mr. Stark?", "I don't feel so good."],
    movies: ["captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame", "spider-man-far-from-home", "spider-man-no-way-home"],
    enemies: ["vulture", "mysterio"], friends: ["ned-leeds", "tony-stark", "stephen-strange"],
    storyOrder: ["captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame", "spider-man-far-from-home", "spider-man-no-way-home"],
  },
  {
    id: "6", slug: "stephen-strange", name: "Doctor Strange", realName: "Stephen Strange",
    biography: "Former neurosurgeon who became the Sorcerer Supreme, protecting Earth from mystical threats.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    aliases: ["Doctor Strange", "Sorcerer Supreme"], status: "ALIVE", affiliation: "Masters of the Mystic Arts", species: "Human", gender: "Male",
    abilities: ["Mystic arts", "Astral projection", "Time manipulation", "Dimensional travel"],
    weapons: ["Eye of Agamotto", "Cloak of Levitation", "Sling Ring"],
    firstAppearance: "doctor-strange", lastAppearance: "doctor-strange-multiverse", currentStatus: "Sorcerer Supreme protecting the multiverse",
    quotes: ["Dormammu, I've come to bargain.", "We're in the endgame now.", "It was the only way."],
    movies: ["doctor-strange", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "spider-man-no-way-home", "doctor-strange-multiverse"],
    enemies: ["dormammu", "kaecilius", "wanda-maximoff"], friends: ["wong", "tony-stark", "peter-parker"],
    storyOrder: ["doctor-strange", "avengers-infinity-war", "avengers-endgame", "spider-man-no-way-home", "doctor-strange-multiverse"],
  },
  {
    id: "7", slug: "thanos", name: "Thanos", realName: "Thanos",
    biography: "The Mad Titan who sought to collect all six Infinity Stones to wipe out half of all life in the universe.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403W98at5Km.jpg",
    aliases: ["The Mad Titan", "The Great Titan"], status: "DECEASED", affiliation: "None", species: "Titan Eternal", gender: "Male",
    abilities: ["Super strength", "Genius tactician", "Infinity Gauntlet wielder"],
    weapons: ["Infinity Gauntlet", "Double-edged sword"],
    firstAppearance: "the-avengers", lastAppearance: "avengers-endgame", currentStatus: "Killed by Tony Stark during the Battle of Earth",
    quotes: ["I am inevitable.", "Perfectly balanced, as all things should be.", "The hardest choices require the strongest wills."],
    movies: ["the-avengers", "guardians-of-the-galaxy", "avengers-age-of-ultron", "avengers-infinity-war", "avengers-endgame"],
    enemies: ["avengers", "guardians-of-the-galaxy"], friends: ["black-order"],
  },
  {
    id: "8", slug: "tchalla", name: "Black Panther", realName: "T'Challa",
    biography: "King of Wakanda and protector of the nation. Inherited the mantle of Black Panther and the heart-shaped herb powers.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    aliases: ["Black Panther", "King T'Challa"], status: "DECEASED", affiliation: "Avengers", species: "Human", gender: "Male",
    abilities: ["Enhanced strength", "Enhanced speed", "Vibranium suit", "Royal leadership"],
    weapons: ["Vibranium claws", "Kimoyo beads", "Energy daggers"],
    firstAppearance: "captain-america-civil-war", lastAppearance: "avengers-endgame", currentStatus: "Passed away from illness (off-screen)",
    quotes: ["Wakanda forever!", "In my culture, death is not the end.", "We are all of one tribe."],
    movies: ["captain-america-civil-war", "black-panther", "avengers-infinity-war", "avengers-endgame"],
    enemies: ["killmonger"], friends: ["shuri", "okoye", "steve-rogers"],
    storyOrder: ["captain-america-civil-war", "black-panther", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "9", slug: "loki", name: "Loki", realName: "Loki Laufeyson",
    biography: "The God of Mischief, adopted brother of Thor. Has died and returned multiple times across the MCU.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/nwiTsLz3LUUfO2n5Az8J8KtsMVl.jpg",
    aliases: ["God of Mischief", "The Trickster"], status: "ALIVE", affiliation: "Asgard (formerly)", species: "Frost Giant", gender: "Male",
    abilities: ["Illusions", "Shapeshifting", "Magic", "Knife combat"],
    weapons: ["Scepter", "Daggers"],
    firstAppearance: "thor", lastAppearance: "avengers-endgame", currentStatus: "Variant working at the TVA",
    quotes: ["I am Loki, of Asgard, and I am burdened with glorious purpose.", "If you're going to Earth, you might want a guide."],
    movies: ["thor", "the-avengers", "thor-the-dark-world", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame"],
    enemies: ["thor", "avengers"], friends: ["thor", "sylvie"],
    storyOrder: ["thor", "the-avengers", "thor-the-dark-world", "thor-ragnarok", "avengers-infinity-war"],
  },
  {
    id: "10", slug: "peter-quill", name: "Star-Lord", realName: "Peter Quill",
    biography: "Half-human, half-Celestial abducted from Earth as a child. Leader of the Guardians of the Galaxy.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/5YZbUmjbMaBtVN5WfjCGDgkm7yt.jpg",
    aliases: ["Star-Lord", "Legendary Outlaw"], status: "ALIVE", affiliation: "Guardians of the Galaxy", species: "Human/Celestial Hybrid", gender: "Male",
    abilities: ["Expert pilot", "Hand-to-hand combat", "Celestial power (briefly)"],
    weapons: ["Element Guns", "Jet boots"],
    firstAppearance: "guardians-of-the-galaxy", lastAppearance: "guardians-vol-3", currentStatus: "Leader of new Guardians team",
    quotes: ["I'm Star-Lord, man. Legendary outlaw?", "We're the Guardians of the Galaxy.", "Ooh, child things are gonna get easier."],
    movies: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-vol-3"],
    enemies: ["ronan", "ego", "thanos"], friends: ["gamora", "drax", "rocket", "groot", "mantis"],
    storyOrder: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "guardians-vol-3"],
  },
  {
    id: "11", slug: "bruce-banner", name: "Hulk", realName: "Bruce Banner",
    biography: "Brilliant scientist who transforms into the Hulk when angry. Eventually merged with Hulk into Professor Hulk.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/zzWBPWsXQNew12PF9Cimgm2jRKp.jpg",
    aliases: ["Hulk", "Professor Hulk", "The Other Guy"], status: "ALIVE", affiliation: "Avengers", species: "Enhanced Human", gender: "Male",
    abilities: ["Super strength", "Regeneration", "Genius intellect"],
    weapons: ["Fists", "Nano gauntlet (Endgame)"],
    firstAppearance: "the-incredible-hulk", lastAppearance: "she-hulk", currentStatus: "Living peacefully, arm injured from snap",
    quotes: ["That's my secret, Captain. I'm always angry.", "Puny god.", "I'm always angry."],
    movies: ["the-incredible-hulk", "the-avengers", "iron-man-3", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame"],
    enemies: ["abomination", "ultron"], friends: ["tony-stark", "natasha-romanoff", "thor"],
  },
  {
    id: "12", slug: "carol-danvers", name: "Captain Marvel", realName: "Carol Danvers",
    biography: "Former Air Force pilot who gained cosmic powers from the Tesseract. One of the most powerful heroes in the MCU.",
    heroImageUrl: "https://image.tmdb.org/t/p/w500/Avi8adwdzCbO2CwAFG0F2bVjSMy.jpg",
    aliases: ["Captain Marvel", "Vers"], status: "ALIVE", affiliation: "Avengers", species: "Human/Kree Hybrid", gender: "Female",
    abilities: ["Photon blasts", "Flight", "Super strength", "Energy absorption"],
    weapons: ["Photon energy"],
    firstAppearance: "captain-marvel", lastAppearance: "the-marvels", currentStatus: "Protecting the universe",
    quotes: ["Higher, further, faster, baby.", "I'm coming to end it. The war, the lies, all of it."],
    movies: ["captain-marvel", "avengers-endgame", "shang-chi", "the-marvels"],
    enemies: ["kree", "supreme-intelligence"], friends: ["nick-fury", "maria-rambeau", "monica-rambeau"],
  },
];

export const events: Event[] = [
  {
    id: "1", slug: "battle-of-new-york", name: "Battle of New York",
    description: "The first major battle involving the assembled Avengers against Loki and the Chitauri invasion force in Manhattan.",
    timelineDate: "2012", timelineYear: 2012,
    consequences: ["Avengers officially formed", "Tesseract recovered by Thor", "New York heavily damaged", "World learned of aliens"],
    imageUrl: "https://image.tmdb.org/t/p/w500/RYMX12wFkNVoOjS2Srv6XG6inJm.jpg",
    movies: ["the-avengers"], characters: ["tony-stark", "steve-rogers", "thor", "natasha-romanoff", "bruce-banner", "loki"],
    relatedEvents: ["snap", "civil-war"],
  },
  {
    id: "2", slug: "snap", name: "The Snap",
    description: "Thanos used the completed Infinity Gauntlet to wipe out half of all life in the universe with a snap of his fingers.",
    timelineDate: "2018", timelineYear: 2018,
    consequences: ["Half of all life disintegrated", "Avengers defeated", "Five years of global mourning", "Universe thrown into chaos"],
    movies: ["avengers-infinity-war"], characters: ["thanos", "tony-stark", "steve-rogers", "peter-parker", "natasha-romanoff"],
    relatedEvents: ["blip", "battle-of-earth"],
  },
  {
    id: "3", slug: "blip", name: "The Blip",
    description: "Five years after the Snap, the Avengers reversed Thanos's actions by returning the Infinity Stones and Hulk snapped everyone back.",
    timelineDate: "2023", timelineYear: 2023,
    consequences: ["All snapped victims returned", "Five-year time gap for returnees", "Global celebration and chaos", "New timeline branches created"],
    movies: ["avengers-endgame"], characters: ["bruce-banner", "tony-stark", "steve-rogers", "peter-parker"],
    relatedEvents: ["snap", "time-heist"],
  },
  {
    id: "4", slug: "civil-war", name: "Sokovia Accords / Civil War",
    description: "A conflict between Iron Man and Captain America over government oversight of the Avengers, dividing the team.",
    timelineDate: "2016", timelineYear: 2016,
    consequences: ["Avengers split into two factions", "Steve Rogers became fugitive", "Bucky went to Wakanda", "Spider-Man introduced to MCU"],
    movies: ["captain-america-civil-war"], characters: ["tony-stark", "steve-rogers", "bucky-barnes", "peter-parker", "tchalla"],
    relatedEvents: ["battle-of-new-york", "sokovia-elevation"],
  },
  {
    id: "5", slug: "battle-of-wakanda", name: "Battle of Wakanda",
    description: "The Avengers and Wakandan forces fought Thanos's army to protect Vision and the Mind Stone.",
    timelineDate: "2018", timelineYear: 2018,
    consequences: ["Vision destroyed", "Mind Stone taken", "Snap occurred immediately after", "Wakanda opened to the world"],
    movies: ["avengers-infinity-war"], characters: ["tchalla", "steve-rogers", "thor", "wanda-maximoff", "thanos"],
    relatedEvents: ["snap", "battle-of-titan"],
  },
  {
    id: "6", slug: "battle-of-earth", name: "Battle of Earth",
    description: "The final confrontation against Thanos and his army, featuring every hero in the MCU uniting to save the universe.",
    timelineDate: "2023", timelineYear: 2023,
    consequences: ["Thanos permanently defeated", "Tony Stark sacrificed himself", "Natasha's sacrifice honored", "New era of peace began"],
    movies: ["avengers-endgame"], characters: ["tony-stark", "steve-rogers", "thor", "carol-danvers", "peter-parker", "thanos"],
    relatedEvents: ["blip", "time-heist", "snap"],
  },
  {
    id: "7", slug: "time-heist", name: "Time Heist",
    description: "The Avengers traveled through time to collect Infinity Stones from the past to undo Thanos's Snap.",
    timelineDate: "2023", timelineYear: 2023,
    consequences: ["New timeline branches created", "Loki escaped with Tesseract", "2014 Thanos learned of the plan", "Stones returned to original timelines"],
    movies: ["avengers-endgame"], characters: ["tony-stark", "steve-rogers", "natasha-romanoff", "clint-barton", "bruce-banner", "scott-lang"],
    relatedEvents: ["blip", "battle-of-earth"],
  },
  {
    id: "8", slug: "multiverse-break", name: "Multiverse Break",
    description: "Doctor Strange's failed spell to make the world forget Peter Parker opened the multiverse, bringing in villains and heroes from other universes.",
    timelineDate: "2024", timelineYear: 2024,
    consequences: ["Villains from other universes appeared", "Peter Parker forgotten by everyone", "Multiverse knowledge spread", "Clea warned of incursions"],
    movies: ["spider-man-no-way-home"], characters: ["peter-parker", "stephen-strange", "wanda-maximoff"],
    relatedEvents: ["incursion-threat"],
  },
];

export const locations: Location[] = [
  {
    id: "1", slug: "wakanda", name: "Wakanda",
    description: "A technologically advanced African nation hidden from the world, home to the richest deposit of vibranium on Earth.",
    imageUrl: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    gallery: [], movies: ["black-panther", "avengers-infinity-war", "avengers-endgame", "black-panther-wakanda-forever"],
    characters: ["tchalla", "shuri", "okoye", "killmonger", "namor"], events: ["battle-of-wakanda", "wakanda-challenge", "talokan-war"],
  },
  {
    id: "2", slug: "asgard", name: "Asgard",
    description: "The golden realm of the Asgardians, ruled by Odin and later Thor. Destroyed during Ragnarök.",
    imageUrl: "https://image.tmdb.org/t/p/w500/4q2HZ2K8WD3NvSWIBEHuA5SO3Jp.jpg",
    gallery: [], movies: ["thor", "thor-the-dark-world", "thor-ragnarok", "avengers-endgame"],
    characters: ["thor", "loki", "odin", "hela", "heimdall"], events: ["ragnarok", "convergence"],
  },
  {
    id: "3", slug: "knowhere", name: "Knowhere",
    description: "The decapitated head of a Celestial floating in space, converted into a mining colony and trading outpost.",
    imageUrl: "https://image.tmdb.org/t/p/w500/r7pn2dh5Mm5QltgBfC7uZZ7TLE1.jpg",
    gallery: [], movies: ["guardians-of-the-galaxy", "avengers-infinity-war", "guardians-vol-3"],
    characters: ["peter-quill", "gamora", "collector"], events: ["xandar-battle"],
  },
  {
    id: "4", slug: "titan", name: "Titan",
    description: "Thanos's ruined homeworld, where the Mad Titan fought the Avengers during Infinity War.",
    imageUrl: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    gallery: [], movies: ["avengers-infinity-war"],
    characters: ["thanos", "tony-stark", "peter-parker", "stephen-strange"], events: ["battle-of-titan", "snap"],
  },
  {
    id: "5", slug: "new-york", name: "New York City",
    description: "The most frequently attacked city in the MCU, home to the Avengers and many heroes including Spider-Man and Doctor Strange.",
    imageUrl: "https://image.tmdb.org/t/p/w500/RYMX12wFkNVoOjS2Srv6XG6inJm.jpg",
    gallery: [], movies: ["the-avengers", "doctor-strange", "spider-man-homecoming", "spider-man-no-way-home"],
    characters: ["tony-stark", "peter-parker", "stephen-strange", "steve-rogers"], events: ["battle-of-new-york", "sanctum-attack"],
  },
  {
    id: "6", slug: "sanctum-sanctorum", name: "Sanctum Sanctorum",
    description: "The New York headquarters of the Masters of the Mystic Arts, located at 177A Bleecker Street.",
    imageUrl: "https://image.tmdb.org/t/p/w500/4PiiNGZWjTABYYk4SIns6gt8iHu.jpg",
    gallery: [], movies: ["doctor-strange", "avengers-infinity-war", "spider-man-no-way-home", "doctor-strange-multiverse"],
    characters: ["stephen-strange", "wong", "mordo"], events: ["sanctum-attack", "spell-cast"],
  },
  {
    id: "7", slug: "sokovia", name: "Sokovia",
    description: "A fictional Eastern European country that was destroyed when Ultron lifted its capital city into the sky.",
    imageUrl: "https://image.tmdb.org/t/p/w500/t90Y3LW08e9g9G0QW7BEMcX5Sbk.jpg",
    gallery: [], movies: ["avengers-age-of-ultron"],
    characters: ["wanda-maximoff", "pietro-maximoff", "ultron"], events: ["sokovia-elevation", "battle-of-sokovia"],
  },
];

export const organizations: Organization[] = [
  {
    id: "1", slug: "avengers", name: "Avengers",
    description: "Earth's Mightiest Heroes, assembled by Nick Fury to protect the world from threats too big for any one hero.",
    imageUrl: "https://image.tmdb.org/t/p/w500/RYMX12wFkNVoOjS2Srv6XG6inJm.jpg",
    history: "Founded after the Battle of New York, the Avengers have saved the world countless times.",
    members: ["tony-stark", "steve-rogers", "thor", "natasha-romanoff", "bruce-banner", "peter-parker", "tchalla", "carol-danvers"],
    enemies: ["thanos", "ultron", "loki"], movies: ["the-avengers", "avengers-age-of-ultron", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "2", slug: "shield", name: "S.H.I.E.L.D.",
    description: "Strategic Homeland Intervention, Enforcement and Logistics Division — a secret intelligence agency protecting the world.",
    members: ["nick-fury", "natasha-romanoff", "clint-barton", "phil-coulson", "maria-hill"],
    enemies: ["hydra"], movies: ["iron-man", "captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier"],
  },
  {
    id: "3", slug: "hydra", name: "HYDRA",
    description: "A terrorist organization dedicated to world domination, secretly embedded within S.H.I.E.L.D. for decades.",
    members: ["red-skull", "winter-soldier", "baron-strucker", "alexander-pierce"],
    enemies: ["shield", "avengers", "steve-rogers"], movies: ["captain-america-the-first-avenger", "captain-america-the-winter-soldier", "avengers-age-of-ultron"],
  },
  {
    id: "4", slug: "guardians", name: "Guardians of the Galaxy",
    description: "A band of intergalactic misfits who protect the galaxy from cosmic threats.",
    members: ["peter-quill", "gamora", "drax", "rocket", "groot", "mantis", "nebula"],
    enemies: ["ronan", "thanos", "ego"], movies: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "guardians-vol-3"],
  },
  {
    id: "5", slug: "tva", name: "Time Variance Authority",
    description: "An organization that monitors the sacred timeline and prunes variants that create branching timelines.",
    members: ["mobius", "hunter-b15", "miss-minutes"],
    enemies: ["loki", "kang"], movies: [],
  },
  {
    id: "6", slug: "ten-rings", name: "Ten Rings",
    description: "An ancient criminal organization that has operated in the shadows for thousands of years.",
    members: ["wenwu", "shang-chi", "xialing"],
    enemies: ["iron-man", "shang-chi"], movies: ["iron-man", "shang-chi"],
  },
];

export const infinityStones: InfinityStone[] = [
  {
    id: "1", slug: "space-stone", name: "Space Stone", color: "SPACE",
    description: "The Tesseract allows its wielder to teleport anywhere in the universe and create portals.",
    origin: "Created by the Cosmic Entities from the six singularities predating the universe.",
    power: "Control over space — teleportation, portal creation, and spatial manipulation.",
    currentStatus: "Destroyed with Thanos's gauntlet after the Snap reversal",
    movies: ["captain-america-the-first-avenger", "the-avengers", "avengers-infinity-war", "avengers-endgame"],
    owners: [
      { ownerName: "Odin", fromDate: "Ancient", toDate: "965 AD" },
      { ownerName: "Red Skull", fromDate: "1942", toDate: "1945" },
      { ownerName: "S.H.I.E.L.D.", fromDate: "1945", toDate: "2012" },
      { ownerName: "Loki", fromDate: "2012", toDate: "2012" },
      { ownerName: "Thanos", fromDate: "2018", toDate: "2018" },
    ],
  },
  {
    id: "2", slug: "mind-stone", name: "Mind Stone", color: "MIND",
    description: "Contained in Loki's scepter and later Vision's forehead, it grants telepathy and mind control.",
    origin: "Created by the Cosmic Entities from the six singularities predating the universe.",
    power: "Control over minds — telepathy, mind control, and consciousness transfer.",
    currentStatus: "Destroyed when Wanda Maximoff destroyed Vision in Wakanda",
    movies: ["the-avengers", "avengers-age-of-ultron", "avengers-infinity-war"],
    owners: [
      { ownerName: "Thanos", fromDate: "Unknown", toDate: "2012" },
      { ownerName: "Loki", fromDate: "2012", toDate: "2012" },
      { ownerName: "HYDRA", fromDate: "2012", toDate: "2015" },
      { ownerName: "Ultron", fromDate: "2015", toDate: "2015" },
      { ownerName: "Vision", fromDate: "2015", toDate: "2018" },
      { ownerName: "Thanos", fromDate: "2018", toDate: "2018" },
    ],
  },
  {
    id: "3", slug: "reality-stone", name: "Reality Stone", color: "REALITY",
    description: "The Aether is a fluid-like stone that can alter reality itself.",
    origin: "Created by the Cosmic Entities from the six singularities predating the universe.",
    power: "Control over reality — matter manipulation and reality warping.",
    currentStatus: "Destroyed with Thanos's gauntlet",
    movies: ["thor-the-dark-world", "avengers-infinity-war", "avengers-endgame"],
    owners: [
      { ownerName: "Dark Elves", fromDate: "2988 BC", toDate: "2988 BC" },
      { ownerName: "Jane Foster", fromDate: "2013", toDate: "2013" },
      { ownerName: "Collector", fromDate: "2013", toDate: "2014" },
      { ownerName: "Thanos", fromDate: "2018", toDate: "2018" },
    ],
  },
  {
    id: "4", slug: "power-stone", name: "Power Stone", color: "POWER",
    description: "The Orb grants its wielder immense destructive energy and power.",
    origin: "Created by the Cosmic Entities from the six singularities predating the universe.",
    power: "Control over power — immense energy projection and enhancement of other stones.",
    currentStatus: "Destroyed with Thanos's gauntlet",
    movies: ["guardians-of-the-galaxy", "avengers-infinity-war", "avengers-endgame"],
    owners: [
      { ownerName: "Ronan", fromDate: "2014", toDate: "2014" },
      { ownerName: "Nova Corps", fromDate: "2014", toDate: "2018" },
      { ownerName: "Thanos", fromDate: "2018", toDate: "2018" },
    ],
  },
  {
    id: "5", slug: "time-stone", name: "Time Stone", color: "TIME",
    description: "The Eye of Agamotto allows its wielder to manipulate time itself.",
    origin: "Created by the Cosmic Entities from the six singularities predating the universe.",
    power: "Control over time — time loops, reversing events, and seeing possible futures.",
    currentStatus: "Returned to its original timeline by Bruce Banner",
    movies: ["doctor-strange", "avengers-infinity-war", "avengers-endgame"],
    owners: [
      { ownerName: "Agamotto", fromDate: "Ancient", toDate: "Unknown" },
      { ownerName: "Ancient One", fromDate: "Unknown", toDate: "2017" },
      { ownerName: "Doctor Strange", fromDate: "2017", toDate: "2018" },
      { ownerName: "Thanos", fromDate: "2018", toDate: "2018" },
    ],
  },
  {
    id: "6", slug: "soul-stone", name: "Soul Stone", color: "SOUL",
    description: "Located on Vormir, it requires the sacrifice of a loved one to obtain.",
    origin: "Created by the Cosmic Entities from the six singularities predating the universe.",
    power: "Control over souls — manipulation of living souls and access to the Soul World.",
    currentStatus: "Returned to Vormir in its original timeline",
    movies: ["avengers-infinity-war", "avengers-endgame"],
    owners: [
      { ownerName: "Red Skull (Guardian)", fromDate: "1945", toDate: "2018" },
      { ownerName: "Thanos", fromDate: "2018", toDate: "2018" },
    ],
  },
];

export const multiverseEntries: MultiverseEntry[] = [
  {
    id: "1", slug: "mcu-616", universe: "Marvel Cinematic Universe", designation: "Earth-616 (Sacred Timeline)",
    description: "The primary timeline of the MCU, monitored by the TVA as the Sacred Timeline.",
    variants: ["loki", "sylvie"], connections: ["earth-838", "earth-1610"],
  },
  {
    id: "2", slug: "earth-838", universe: "Illuminati Universe", designation: "Earth-838",
    description: "A universe where the Illuminati formed to protect their world, featuring alternate versions of familiar heroes.",
    variants: ["stephen-strange", "wanda-maximoff", "captain-marvel", "black-bolt", "mr-fantastic", "captain-carter"],
    connections: ["mcu-616"],
  },
  {
    id: "3", slug: "earth-1610", universe: "Ultimate Universe", designation: "Earth-1610",
    description: "The Ultimate Marvel universe, home to Miles Morales and other Ultimate versions of heroes.",
    variants: ["miles-morales"], connections: ["mcu-616"],
  },
  {
    id: "4", slug: "earth-199999", universe: "Raimi Spider-Man Universe", designation: "Earth-199999",
    description: "The universe of Sam Raimi's Spider-Man trilogy, connected via the multiverse break.",
    variants: ["peter-parker-raimi", "green-goblin", "doc-ock"], connections: ["mcu-616"],
  },
  {
    id: "5", slug: "earth-96283", universe: "Webb Spider-Man Universe", designation: "Earth-96283",
    description: "The universe of Marc Webb's Amazing Spider-Man films.",
    variants: ["peter-parker-webb", "gwen-stacy", "electro"], connections: ["mcu-616"],
  },
];

export const watchGuides: WatchGuide[] = [
  {
    id: "1", name: "Chronological Order", description: "Watch the MCU in the order events happen in the timeline.",
    movieSlugs: movies.sort((a, b) => a.chronologicalOrder - b.chronologicalOrder).map((m) => m.slug),
  },
  {
    id: "2", name: "Release Order", description: "Watch the MCU in the order films were released in theaters.",
    movieSlugs: movies.sort((a, b) => a.watchOrder - b.watchOrder).map((m) => m.slug),
  },
  {
    id: "3", name: "Iron Man Story", description: "Follow Tony Stark's complete journey from weapons dealer to savior.",
    movieSlugs: ["iron-man", "iron-man-2", "the-avengers", "iron-man-3", "avengers-age-of-ultron", "captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "4", name: "Captain America Story", description: "Follow Steve Rogers from Brooklyn to the end of his journey.",
    movieSlugs: ["captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"],
  },
  {
    id: "5", name: "Thor Story", description: "Follow the God of Thunder through all his adventures.",
    movieSlugs: ["thor", "the-avengers", "thor-the-dark-world", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder"],
  },
  {
    id: "6", name: "Guardians Story", description: "Follow the Guardians of the Galaxy across the cosmos.",
    movieSlugs: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-vol-3"],
  },
  {
    id: "7", name: "Infinity Saga", description: "All Phase 1-3 films leading to the Infinity War and Endgame.",
    movieSlugs: movies.filter((m) => m.saga === "Infinity Saga").sort((a, b) => a.watchOrder - b.watchOrder).map((m) => m.slug),
  },
  {
    id: "8", name: "Multiverse Saga", description: "Phase 4 and beyond exploring the multiverse.",
    movieSlugs: movies.filter((m) => m.saga === "Multiverse Saga").sort((a, b) => a.watchOrder - b.watchOrder).map((m) => m.slug),
  },
];

export const storyArcs: StoryArc[] = [
  {
    id: "1", name: "The Infinity Saga", description: "The complete story of Thanos and the Infinity Stones across 23 films.",
    movieSlugs: movies.filter((m) => m.saga === "Infinity Saga").sort((a, b) => a.watchOrder - b.watchOrder).map((m) => m.slug),
  },
  {
    id: "2", name: "The Multiverse Saga", description: "Exploring the consequences of the Blip and the breaking of the multiverse.",
    movieSlugs: movies.filter((m) => m.saga === "Multiverse Saga").sort((a, b) => a.watchOrder - b.watchOrder).map((m) => m.slug),
  },
  {
    id: "3", name: "The Avengers Arc", description: "From the team's formation to their final battle against Thanos.",
    movieSlugs: ["the-avengers", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"],
  },
];

export function getMovieBySlug(slug: string) {
  return movies.find((m) => m.slug === slug);
}

export function getCharacterBySlug(slug: string) {
  return characters.find((c) => c.slug === slug);
}

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function getOrganizationBySlug(slug: string) {
  return organizations.find((o) => o.slug === slug);
}

export function getStoneBySlug(slug: string) {
  return infinityStones.find((s) => s.slug === slug);
}

export function getMultiverseBySlug(slug: string) {
  return multiverseEntries.find((m) => m.slug === slug);
}

export function searchAll(query: string) {
  const q = query.toLowerCase();
  const results = [];

  for (const movie of movies) {
    if (movie.title.toLowerCase().includes(q)) {
      results.push({ type: "movie" as const, slug: movie.slug, title: movie.title, subtitle: `Phase ${movie.phase}`, imageUrl: movie.posterUrl });
    }
  }
  for (const char of characters) {
    if (char.name.toLowerCase().includes(q) || char.realName?.toLowerCase().includes(q)) {
      results.push({ type: "character" as const, slug: char.slug, title: char.name, subtitle: char.affiliation, imageUrl: char.heroImageUrl });
    }
  }
  for (const event of events) {
    if (event.name.toLowerCase().includes(q)) {
      results.push({ type: "event" as const, slug: event.slug, title: event.name, subtitle: event.timelineDate, imageUrl: event.imageUrl });
    }
  }
  for (const loc of locations) {
    if (loc.name.toLowerCase().includes(q)) {
      results.push({ type: "location" as const, slug: loc.slug, title: loc.name, imageUrl: loc.imageUrl });
    }
  }
  for (const org of organizations) {
    if (org.name.toLowerCase().includes(q)) {
      results.push({ type: "organization" as const, slug: org.slug, title: org.name, imageUrl: org.imageUrl });
    }
  }
  for (const stone of infinityStones) {
    if (stone.name.toLowerCase().includes(q)) {
      results.push({ type: "stone" as const, slug: stone.slug, title: stone.name, subtitle: stone.color, imageUrl: stone.imageUrl });
    }
  }

  return results.slice(0, 20);
}
