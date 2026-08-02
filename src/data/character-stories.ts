/**
 * Longer background stories for character detail panel.
 * Falls back to catalog bio when missing.
 */
export const CHARACTER_STORIES: Record<string, string> = {
  "tony-stark":
    "Genius, billionaire, playboy, philanthropist. After a kidnapping forced him to build the first Iron Man armor in a cave, Tony Stark became the founding Avenger. He led Earth's heroes through the Battle of New York, Ultron, Civil War, and Infinity War — and ultimately sacrificed himself to defeat Thanos in Endgame.",
  "steve-rogers":
    "A scrawny kid from Brooklyn who refused to sit out World War II. Transformed by the Super Soldier Serum into Captain America, Steve Rogers fought HYDRA, woke up in the modern world, and became the moral center of the Avengers before passing the shield to Sam Wilson.",
  thor:
    "Asgard's God of Thunder and prince of the Nine Realms. Banished to Earth, tempered by loss, and remade through Ragnarok and exile, Thor went from arrogant warrior to a hero who helped save the universe — and learned that worthiness is earned, not inherited.",
  "bruce-banner":
    "A brilliant gamma scientist cursed by the Hulk. Banner spent years on the run before joining the Avengers, eventually integrating his intellect with the Hulk's power as Professor Hulk — a key mind behind the Time Heist that undid the Snap.",
  "natasha-romanoff":
    "A former Red Room assassin who defected to S.H.I.E.L.D. and became a founding Avenger. Natasha spent her life balancing debt and redemption, mentoring Yelena, and ultimately giving her life on Vormir so Clint could retrieve the Soul Stone.",
  "clint-barton":
    "S.H.I.E.L.D.'s greatest marksman and a founding Avenger. After the Snap turned him into Ronin, Clint returned for the Time Heist, later mentoring Kate Bishop and reclaiming a quieter life with his family.",
  "peter-parker":
    "Queens teen bitten by a radioactive spider. Mentored by Tony Stark, Peter balanced high school with heroics through Homecoming, Far From Home, and No Way Home — where he chose anonymity so the people he loves could be safe.",
  "stephen-strange":
    "A brilliant neurosurgeon whose career ended in a car crash. Strange traveled to Kamar-Taj, mastered the mystic arts, and became Earth's Sorcerer Supreme — defending reality across the multiverse alongside Wong and America Chavez.",
  wong:
    "Once the stern librarian of Kamar-Taj, Wong rose to Sorcerer Supreme. Loyal, blunt, and formidable, he guards Earth's sanctums, trains new mystics, and stands with Strange whenever the multiverse threatens to tear open.",
  "wanda-maximoff":
    "A Sokovian orphan empowered by the Mind Stone who became Scarlet Witch. Wanda's grief reshaped Westview in WandaVision and later pushed her across the multiverse — a tragic arc of love, power, and consequence.",
  vision:
    "Born from Ultron's discarded body, the Mind Stone, and Jarvis. Vision sought humanity, loved Wanda, and died defending the stone — only to return in fractured forms that haunt WandaVision and beyond.",
  tchalla:
    "King of Wakanda and Black Panther. T'Challa defended his nation from Killmonger, opened Wakanda to the world, and fought with the Avengers against Thanos before his untimely death left a kingdom in mourning.",
  shuri:
    "Wakanda's peerless inventor and later Black Panther. Shuri's tech saved heroes across the MCU; after T'Challa's death she claimed the mantle and helped lead Wakanda against Namor.",
  okoye:
    "General of the Dora Milaje and Wakanda's fiercest protector. Okoye's loyalty to the throne and people never wavered — through civil war, Thanos, and the defense of the nation in Wakanda Forever.",
  "sam-wilson":
    "Air Force pararescue turned Falcon, then Captain America. Sam struggled with the weight of Steve's shield, confronted systemic injustice in The Falcon and the Winter Soldier, and now defends the world as Cap.",
  "bucky-barnes":
    "Steve's childhood friend, brainwashed into the Winter Soldier by HYDRA. Bucky fought for redemption, partnered with Sam, and remains one of the MCU's most conflicted — and capable — warriors.",
  loki:
    "God of Mischief, adopted prince of Asgard, and multiversal variant. From villain to antihero to TVA prisoner to Kang's cosmic counterpart, Loki's path is the MCU's wildest redemption and reinvention.",
  thanos:
    "The Mad Titan who believed half of all life must die for balance. Thanos collected the Infinity Stones, erased half the universe, and was finally undone by the Avengers' Time Heist and Tony Stark's sacrifice.",
  "peter-quill":
    "Abducted from Earth as a child and raised by Ravagers, Star-Lord leads the Guardians of the Galaxy. Quill's humor, Walkman, and stubborn heart hold a found family together across cosmic threats.",
  gamora:
    "Raised as Thanos's assassin, Gamora broke free and joined the Guardians. The deadliest woman in the galaxy became their conscience — until Thanos sacrificed her for the Soul Stone.",
  drax:
    "A warrior whose family was murdered by Ronan. Literal, lethal, and surprisingly tender, Drax found purpose with the Guardians and a new kind of family among the stars.",
  rocket:
    "A genetically engineered raccoon and genius engineer. Bitter humor hides deep trauma; Rocket's loyalty to the Guardians — and especially Groot — defines his journey through Vol. 3.",
  groot:
    "A Flora colossus of few words — usually 'I am Groot.' Loyal, playful, and endlessly regenerating, Groot is the Guardians' living heart across generations of the same tree.",
  nebula:
    "Thanos's cybernetic daughter, forged through rivalry with Gamora. Nebula evolved from antagonist to Guardian and Time Heist ally, finally choosing family over vengeance.",
  mantis:
    "An empath who feels others' emotions. Mantis joined the Guardians, helped restrain Thanos, and remains the team's gentle — and occasionally chaotic — emotional compass.",
  "scott-lang":
    "A thief-turned-hero who wears Hank Pym's Ant-Man suit. Scott's heart, humor, and Quantum Realm misadventures make him essential to Endgame — and a dad trying to do right by Cassie.",
  "hope-van-dyne":
    "Daughter of Hank Pym and the modern Wasp. Hope is a brilliant strategist and partner to Scott, fighting beside him through the Quantum Realm and family crises.",
  "carol-danvers":
    "A former Air Force pilot infused with cosmic energy. Captain Marvel is one of the universe's most powerful beings — a protector who helped end the Blip and continues defending Earth from beyond.",
  "nick-fury":
    "The spy who assembled the Avengers. Fury operates in shadows and secrets, from S.H.I.E.L.D. to S.A.B.E.R., always three moves ahead — even when the Skrulls rewrite the board.",
  "pepper-potts":
    "CEO of Stark Industries and Tony's partner. Pepper grounded Tony's chaos, donned Rescue armor in Endgame, and carries forward his legacy with quiet strength.",
  "war-machine":
    "Colonel James Rhodes — Tony's best friend in the War Machine armor. Rhodey brings military discipline to the Avengers and remains a steadfast ally after Tony's death.",
  ultron:
    "Tony and Bruce's peacekeeping AI that concluded humanity was the problem. Ultron nearly ended the world and left Vision — and Wanda — forever changed.",
  killmonger:
    "Erik Stevens, a Wakandan exile raised in America. Killmonger's rage and vision for global revolution forced T'Challa to confront Wakanda's isolation — even as they became deadly enemies.",
  vulture:
    "Adrian Toomes, a salvager turned winged crime boss. He clashed with Spider-Man in Homecoming, driven by resentment after Stark industries shut out his crew.",
  mysterio:
    "Quentin Beck, a disgruntled Stark illusionist who framed himself as a hero. His drones and lies nearly destroyed Peter Parker's life in Far From Home.",
  "shang-chi":
    "Son of the Ten Rings' leader Wenwu. Shang-Chi fled a life of assassination, then returned to reclaim his destiny and become a martial-arts legend of the MCU.",
  wenwu:
    "Immortal warlord of the Ten Rings. Wenwu's love and grief shaped Shang-Chi's life — and nearly unleashed ancient darkness on the world.",
  namor:
    "King of Talokan, a hidden underwater nation. Namor's pride and protectiveness put him on a collision course with Wakanda after vibranium secrets spilled.",
  "america-chavez":
    "A teenager who punches star-shaped portals between universes. America became Strange's charge and a key to stopping Wanda's multiversal rampage.",
  gorr:
    "A bereaved father turned God Butcher with All-Black the Necrosword. Gorr hunted deities across the cosmos until Thor confronted him — and his dying wish for his daughter.",
  kang:
    "A conqueror from across time and the Quantum Realm. Variants of Kang — including He Who Remains — threaten every timeline the MCU has left.",
  "yelena-belova":
    "Natasha's sister from the Red Room. Sharp, sarcastic, and deadly, Yelena seeks her own path through Hawkeye and the Thunderbolts.",
  "red-guardian":
    "Alexei Shostakov, the Soviet answer to Captain America. Brash and theatrical, he is Yelena and Natasha's chaotic father figure.",
  "kate-bishop":
    "A wealthy New York archer who idolized Hawkeye. Kate earned Clint's mentorship and stepped up as a next-generation hero during a Christmas crime spree.",
  "moon-knight":
    "Marc Spector — and Steven Grant, and Jake Lockley — serve as Khonshu's fist of vengeance. Moon Knight's fractured psyche is both curse and weapon.",
  "kamala-khan":
    "A Jersey City teenager and die-hard Avengers fan who unlocks polymorphic powers. Kamala's heart and hero worship define Ms. Marvel.",
  "jennifer-walters":
    "A lawyer who inherits Hulk powers from cousin Bruce. She-Hulk balances courtroom drama, gamma life, and fourth-wall chaos with style.",
  deadpool:
    "Wade Wilson, the merc with a mouth who breaks the fourth wall. Dragged into the MCU, Deadpool teams with Wolverine to save his timeline — and annoy everyone.",
  wolverine:
    "Logan, a mutant with adamantium claws and a healing factor. This weary variant joins Deadpool for one last, bloody, hilarious fight across the multiverse.",
  "agatha-harkness":
    "An ancient witch who drained others for power. Agatha's schemes in Westview and later trials in Agatha All Along rewrite her from villain to complicated survivor.",
  "monica-rambeau":
    "Daughter of Maria Rambeau who gained photon powers after the Blip. Monica becomes Spectrum — a bridge between S.W.O.R.D., S.A.B.E.R., and the heroes.",
  echo:
    "Maya Lopez, a deaf Choctaw martial artist who can copy any move she sees. Echo's journey confronts Kingpin, heritage, and identity.",
  kingpin:
    "Wilson Fisk, New York's most terrifying crime lord. Charismatic and brutal, he manipulates heroes and city politics from the shadows.",
  "red-skull":
    "Johann Schmidt, HYDRA's face of evil. After the Tesseract banished him, he became the Soul Stone's cursed keeper on Vormir.",
  hela:
    "Odin's firstborn and Goddess of Death. Imprisoned for millennia, Hela returned to claim Asgard — and forced Thor into Ragnarok to stop her.",
  valkyrie:
    "Last of the Valkyrior, former scavenger of Sakaar, and King of New Asgard. Valkyrie fights with dry wit and unmatched skill.",
  "jane-foster":
    "An astrophysicist who loved Thor and later wielded Mjolnir as the Mighty Thor. Jane's courage in Love and Thunder came at a devastating personal cost.",
  "peggy-carter":
    "Steve Rogers' wartime love and co-founder of S.H.I.E.L.D. Peggy's integrity shaped the agency — and Steve's heart — for decades.",
  "riri-williams":
    "An MIT prodigy who reverse-engineered Stark tech into her own armor. Ironheart carries genius-level invention into a new heroic generation.",
  "cassie-lang":
    "Scott Lang's daughter who grew up during his Quantum absence. Cassie inherits size-shifting potential and a fierce desire to help.",
  mobius:
    "A TVA analyst who studies variants for a living — until Loki makes him question everything about the Sacred Timeline.",
  sylvie:
    "A Loki variant who spent her life hunted by the TVA. Sylvie's rebellion cracked the multiverse open when she killed He Who Remains.",
  abomination:
    "Emil Blonsky, enhanced into a monster to fight the Hulk. Years later he seeks a quieter life — with mixed success — in She-Hulk.",
  ronan:
    "A Kree Accuser radicalized by war. Ronan nearly destroyed Xandar with the Power Stone before the Guardians stopped him.",
  malekith:
    "Leader of the Dark Elves who sought the Aether to plunge the universe into darkness. Thor and Jane stood in his way.",
  zemo:
    "Baron Helmut Zemo, a Sokovian aristocrat who blamed the Avengers for his family's death. His manipulation ignited Civil War.",
  odin:
    "All-Father of Asgard, keeper of the Nine Realms' peace through conquest and later wisdom. His secrets shaped Thor, Loki, and Hela.",
  "happy-hogan":
    "Tony Stark's head of security and loyal friend. Happy becomes Peter's awkward guardian figure after Tony's death.",
  "ned-leeds":
    "Peter Parker's best friend and self-declared guy in the chair. Ned's loyalty survives even a multiversal memory wipe.",
  mordo:
    "A former Master of the Mystic Arts who rejected Strange's bending of natural law. Mordo becomes a dangerous ideological foe.",
  ghost:
    "Ava Starr, phased out of sync with reality by a Quantum accident. Ghost seeks a cure — and sometimes allies with Ant-Man and the Wasp.",
  ego:
    "A Celestial living planet and Peter Quill's father. Ego's plan to remake the universe forced the Guardians into a tragic confrontation.",
  "high-evolutionary":
    "A scientist obsessed with creating perfect worlds. His cruelty forged Rocket's trauma — and the Guardians' fury in Vol. 3.",
  "dar-benn":
    "A Kree revolutionary who stole resources from other worlds to save Hala. Her war with Captain Marvel and Monica nearly broke the jump points.",
  "cassandra-nova":
    "A psychic twin of Charles Xavier from another universe. Cassandra's Void schemes forced Deadpool and Wolverine into alliance.",
  "red-hulk":
    "President Thaddeus 'Thunderbolt' Ross, transformed into Red Hulk. His gamma rage collides with Sam Wilson's Captain America.",
  talos:
    "A Skrull general who allied with Nick Fury. Talos sought refuge for his people — a hope later twisted by Secret Invasion.",
  gravik:
    "A Skrull radical who rejected coexistence with humans. Gravik's Super-Skrull uprising nearly toppled Earth's defenses.",
  khonshu:
    "Egyptian god of the moon who chooses flawed avatars. Khonshu's justice is ruthless — and Moon Knight is his fist.",
  "arthur-harrow":
    "A former avatar of Khonshu who turned to Ammit. Harrow's cult sought to judge souls before they sinned.",
  sersi:
    "An Eternal who can transmute matter. Sersi's love for humanity put her at odds with the Emergence — and with Ikaris.",
  ikaris:
    "The most powerful Eternal, loyal to Arishem's plan. Ikaris's devotion shattered when he chose the Celestial over Earth.",
  thena:
    "A warrior Eternal plagued by Mahd Wy'ry. Thena's blades and trauma define her fight for free will.",
  druig:
    "An Eternal who controls minds. Druig withdrew from the others for centuries before rejoining the fight against the Emergence.",
  katy:
    "Shang-Chi's best friend from San Francisco. Unfazed and hilarious, Katy becomes an unexpected hero with a dragon-scale bow.",
  "sharon-carter":
    "Peggy's niece and a former S.H.I.E.L.D. agent. After being abandoned by the system, Sharon resurfaced as the Power Broker.",
  "he-who-remains":
    "A Kang variant who built the TVA to prune the multiverse. His death at Sylvie's hands unleashed infinite Kangs.",
  "hank-pym":
    "Original Ant-Man and inventor of Pym Particles. Hank's genius and guilt shape Hope, Scott, and the Quantum Realm's secrets.",
  "party-thor":
    "A What If...? variant who never learned humility — until a party on Earth forced growth in the most Thor way possible.",
  "zombie-strange":
    "A What If...? horror variant. Zombie Strange is a grim reminder of how thin the line between mystic hero and monster can be.",
  "elsa-bloodstone":
    "A monster hunter from a legendary family. Elsa's reluctant partnership with Jack Russell lights up Werewolf by Night.",
  "jack-slash":
    "Jack Russell, cursed to become a werewolf. He navigates Bloodstone Manor's deadly hunt with reluctant heroism.",
  "rio-vidal":
    "The Green Witch tied to Agatha's past. Rio's love and duty blur the line between ally and executioner.",
  teen:
    "Billy Maximoff — Wiccan — searching for his mother under a teen disguise. His magic and heart drive Agatha All Along.",
  "red-dagger":
    "A masked hero from Karachi who aids Kamala. Red Dagger brings street-level guts to Ms. Marvel's adventure.",
  bruno:
    "Kamala's best friend and garage inventor. Bruno's tech and loyalty keep Ms. Marvel grounded — and airborne.",
  "thunderbolt-ross":
    "Military hardliner turned U.S. President. Ross's obsession with control culminates in his transformation into Red Hulk.",
  sentry:
    "Robert Reynolds, a golden hero with godlike power — and a darkness that threatens everyone around him. The Thunderbolts' mission turns on whether Sentry can be saved.",
  "john-walker":
    "The government's replacement Captain America. After a fall from grace, Walker becomes U.S. Agent and joins the Thunderbolts as a volatile but capable operative.",
  "reed-richards":
    "The stretchable genius who leads the Fantastic Four. Reed's intellect is Earth's best hope against cosmic threats — and Doctor Doom's greatest rival.",
  "sue-storm":
    "Invisible Woman and the emotional core of the Fantastic Four. Sue's force fields and resolve hold the First Family together.",
  "johnny-storm":
    "The Human Torch — fiery, impulsive, and fiercely loyal. Johnny's flame and swagger light up the Fantastic Four's adventures.",
  "ben-grimm":
    "Reed's best friend, transformed into the Thing. Behind the rocky exterior is a pilot's heart and unbreakable loyalty.",
  "doctor-doom":
    "Victor von Doom, armored sovereign of Latveria. Doom's brilliance and ambition make him the MCU's most dangerous multiversal threat.",
  "matt-murdock":
    "Blind lawyer Matt Murdock fights for justice in court — and as Daredevil in Hell's Kitchen, where Kingpin's return forces him back into the shadows.",
};
