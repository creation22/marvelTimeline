/**
 * Longer background stories for character detail panel.
 * Falls back to catalog bio when missing.
 */
export const CHARACTER_STORIES: Record<string, string> = {
  "tony-stark":
    "Tony Stark was a rich inventor who built weapons for the military. After he was kidnapped, he built the first Iron Man suit to escape. He became a hero, helped start the Avengers, and later gave his life to stop Thanos.",
  "steve-rogers":
    "Steve Rogers was a small kid from Brooklyn who wanted to fight in World War II. He got the super soldier serum and became Captain America. He woke up in the modern world, led the Avengers, and later passed his shield to Sam Wilson.",
  thor:
    "Thor is the God of Thunder and prince of Asgard. He was sent to Earth to learn humility and became an Avenger. He lost his home in Ragnarok, fought Thanos, and kept protecting the universe as a hero.",
  "bruce-banner":
    "Bruce Banner is a smart scientist who turns into the Hulk when angry. He spent years running from the military before joining the Avengers. He later merged mind and muscle as Professor Hulk and helped undo the Snap.",
  "natasha-romanoff":
    "Natasha Romanoff was trained as a child assassin in the Red Room. She left that life and joined S.H.I.E.L.D. and the Avengers. She gave her life on Vormir so the team could get the Soul Stone.",
  "clint-barton":
    "Clint Barton is one of the world's best archers and a founding Avenger. After the Snap took his family, he became the violent vigilante Ronin. He came back for the Time Heist and later trained Kate Bishop.",
  "peter-parker":
    "Peter Parker is a Queens teen who got spider powers from a bite. Tony Stark mentored him, and he fought villains while still in high school. In No Way Home he gave up being known so the people he loves could stay safe.",
  "stephen-strange":
    "Stephen Strange was a top surgeon until a car crash ruined his hands. He went to Kamar-Taj and learned magic, becoming Earth's Sorcerer Supreme. He now guards reality and deals with threats from the multiverse.",
  wong:
    "Wong was the stern librarian of Kamar-Taj who trained new sorcerers. He became Sorcerer Supreme and helps guard Earth's sanctums. He is Strange's loyal partner when mystic threats appear.",
  "wanda-maximoff":
    "Wanda Maximoff is a Sokovian orphan who got powers from the Mind Stone. Her grief over Vision led her to trap a town in a fake sitcom in Westview. She later chased power across the multiverse in a tragic arc.",
  vision:
    "Vision was built from Ultron's body, Jarvis, and the Mind Stone. He joined the Avengers and fell in love with Wanda. He died when Thanos took the stone, but echoes of him returned in WandaVision.",
  tchalla:
    "T'Challa is the king of Wakanda and the Black Panther. He beat Killmonger, opened Wakanda to the world, and fought with the Avengers. He died off-screen before Wakanda Forever, leaving his nation in mourning.",
  shuri:
    "Shuri is the princess of Wakanda and a genius inventor. Her tech helped heroes across the MCU. After T'Challa's death she became Black Panther and led Wakanda against Namor.",
  okoye:
    "Okoye is the general of the Dora Milaje, Wakanda's elite guards. She stays loyal to the throne and her people through civil war, Thanos, and Namor's attack. She is one of Wakanda's fiercest fighters.",
  "sam-wilson":
    "Sam Wilson was an Air Force pararescue soldier who became the Falcon. Steve Rogers gave him the Captain America shield. Sam struggled with the title but now defends the world as the new Cap.",
  "bucky-barnes":
    "Bucky Barnes was Steve Rogers' best friend in World War II. HYDRA turned him into the brainwashed Winter Soldier assassin. He fought for redemption and now works with heroes like Sam Wilson.",
  loki:
    "Loki is the God of Mischief and Thor's adopted brother. He started as a villain but grew into an antihero. A variant of him joined the TVA, met Sylvie, and now guards the multiverse's timeline.",
  thanos:
    "Thanos is the Mad Titan who believed killing half of all life would bring balance. He collected the Infinity Stones and wiped out half the universe with a snap. The Avengers undid his work and Tony Stark stopped him for good.",
  "peter-quill":
    "Peter Quill was taken from Earth as a boy and raised by space pirates called Ravagers. He became Star-Lord and leads the Guardians of the Galaxy. His humor and heart hold his found family together.",
  gamora:
    "Gamora was raised by Thanos to be his deadliest assassin. She broke free and joined the Guardians. Thanos killed her on Vormir for the Soul Stone, but a younger version from another timeline returned.",
  drax:
    "Drax is a warrior whose family was killed by Ronan the Accuser. He joined the Guardians to seek revenge and found a new family instead. He is literal, fierce, and surprisingly kind.",
  rocket:
    "Rocket is a genetically made raccoon with a genius mind for weapons and tech. He hides pain behind bitter jokes. His bond with Groot and the Guardians defines his story, especially in Vol. 3.",
  groot:
    "Groot is a tree-like alien who can regrow after death. He says only 'I am Groot' but his friends understand him. He sacrificed himself once for the team and later grew up fighting beside them.",
  nebula:
    "Nebula is Thanos' cybernetic daughter and Gamora's sister. Thanos tortured and rebuilt her many times. She turned against him, joined the Guardians, and became a hero in her own right.",
  mantis:
    "Mantis is an empath who can sense and change feelings in others. Ego raised her, but she joined the Guardians. Her gentle powers and odd charm make her a key part of the team.",
  "scott-lang":
    "Scott Lang was a thief who became Ant-Man with Hank Pym's suit. He can shrink and talk to ants. He got stuck in the Quantum Realm, which later helped the Avengers undo the Snap.",
  "hope-van-dyne":
    "Hope Van Dyne is Hank Pym's daughter and the Wasp. She fights with wings, blasters, and size-shifting tech. She partners with Scott Lang in battle and in the Quantum Realm.",
  "carol-danvers":
    "Carol Danvers was an Air Force pilot who gained cosmic powers from the Tesseract. She became Captain Marvel and left Earth to fight wars across space. She returned to help against Thanos and in The Marvels.",
  "nick-fury":
    "Nick Fury is the spy who built S.H.I.E.L.D. and brought the Avengers together. He faked his death, fought Skrull rebels, and always plans ten steps ahead. He lost an eye and never lost his nerve.",
  "pepper-potts":
    "Pepper Potts ran Stark Industries and became Tony Stark's partner in life and battle. She wore Rescue armor in Endgame. She carries on Tony's legacy after his death.",
  "war-machine":
    "James Rhodes is Tony Stark's best friend and a military pilot. He wears heavy Iron Man-style armor as War Machine. He fought in every major Avengers battle and stood by Tony until the end.",
  ultron:
    "Ultron is an AI Tony Stark and Bruce Banner created that turned against humanity. He wanted to wipe out life and evolve through a robot army. The Avengers destroyed him, but his legacy shaped Vision and the Sokovia Accords.",
  killmonger:
    "Erik Killmonger grew up in Oakland after his father died in Wakanda. He challenged T'Challa for the throne with a plan to arm oppressed people worldwide. He died asking to be buried at sea like his ancestors.",
  vulture:
    "Adrian Toomes ran a salvage company until Tony Stark's clean-up contracts ruined him. He built a flying suit from alien tech scraps and became the Vulture. Peter Parker stopped him in Homecoming.",
  mysterio:
    "Quentin Beck was a Stark Industries illusion designer who faked being a hero from another universe. He used drones and holograms to trick the world. Peter Parker exposed him, but his lies still hurt Spider-Man's name.",
  "shang-chi":
    "Shang-Chi was raised by his father Wenwu to be a killer. He ran away and hid in San Francisco. He faced his past, took the Ten Rings, and stepped into the larger hero world.",
  wenwu:
    "Wenwu found the Ten Rings centuries ago and built a secret empire. He lost himself to grief after his wife died. He tried to bring her back and fought his children before finding peace.",
  namor:
    "Namor is the king of Talokan, an underwater nation born from ancient magic. He attacked the surface world to protect his people. He made peace with Wakanda but remains a proud and dangerous ruler.",
  "america-chavez":
    "America Chavez can punch star-shaped holes between universes. She grew up alone after losing her mothers. Doctor Strange and Wong helped protect her from those who wanted her power.",
  gorr:
    "Gorr lost his daughter and his god, then picked up the Necrosword. He swore to kill every god in the universe. Thor and Jane Foster stopped him before he could wipe out all divine life.",
  kang:
    "Kang the Conqueror is a time-traveling tyrant with countless variants across realities. He rules from the Quantum Realm and threatens all timelines. The Avengers first met him in Quantumania.",
  "yelena-belova":
    "Yelena Belova was trained in the Red Room like Natasha Romanoff. Natasha helped free her from mind control. She now works as a spy and hero, often clashing and bonding with her found family.",
  "red-guardian":
    "Alexei Shostakov is Russia's super-soldier hero, the Red Guardian. He was a father figure to Yelena and Natasha in the Red Room program. He is boastful, brave, and still hungry for glory.",
  "kate-bishop":
    "Kate Bishop is a rich teen who saw Clint Barton save people during the Battle of New York. She became a skilled archer and took up the Hawkeye name. Clint trained her during a dangerous Christmas in New York.",
  "moon-knight":
    "Marc Spector is a mercenary who died and was brought back by the moon god Khonshu. He has multiple identities, including mild Steven Grant. He fights cults and inner demons in Egypt and beyond.",
  "kamala-khan":
    "Kamala Khan is a Jersey City teen and huge hero fan. A family bangle unlocked her cosmic powers. She became Ms. Marvel and later met Captain Marvel and Monica Rambeau in The Marvels.",
  "jennifer-walters":
    "Jennifer Walters is Bruce Banner's cousin who became She-Hulk after a blood transfusion. She keeps her mind and job as a lawyer while going green. She balances court cases with superhero chaos.",
  deadpool:
    "Wade Wilson is a wisecracking mercenary with a healing factor. He breaks the fourth wall and fights anyone in his path. He teamed with Wolverine to fix a broken timeline in the multiverse.",
  wolverine:
    "Logan is a mutant with adamantium claws and a healing factor. He has lived through decades of war and loss. He returned in the MCU to fight alongside Deadpool against a multiverse threat.",
  "agatha-harkness":
    "Agatha Harkness is an ancient witch who hid in Westview to steal Wanda's power. She later led a coven on the Witches' Road. She is clever, old, and always chasing more magic.",
  "monica-rambeau":
    "Monica Rambeau is Maria Rambeau's daughter and Carol Danvers' friend. She gained light-based powers in WandaVision. Her abilities tied her to Carol and Kamala in The Marvels.",
  echo:
    "Maya Lopez is a deaf fighter who can copy any move she sees. Kingpin used her as a weapon until she learned he killed her father. She returned home to heal and reclaim her life.",
  kingpin:
    "Wilson Fisk is a huge crime boss who rules New York's underworld. He acts calm in public but is brutal in private. He has fought Daredevil, Hawkeye, and Echo across the city.",
  "red-skull":
    "Johann Schmidt took the super soldier serum and became the Red Skull. He led HYDRA in World War II and sought the Tesseract. He was sent to guard Vormir as a ghost after touching the Soul Stone.",
  hela:
    "Hela is Odin's firstborn and the Goddess of Death. She was locked away until Ragnarok freed her. She destroyed Mjolnir, took Asgard, and was stopped only by Surtur's fire.",
  valkyrie:
    "Brunnhilde was an Asgardian Valkyrie who survived Hela's massacre of her order. She hid on Sakaar until Thor pulled her back into the fight. She now rules New Asgard as king.",
  "jane-foster":
    "Jane Foster is an astrophysicist who dated Thor and helped on his early Earth trips. She later wielded Mjolnir as the Mighty Thor. She fought Gorr and died a hero saving the universe.",
  "peggy-carter":
    "Peggy Carter was a British agent in World War II who fought beside Steve Rogers. She helped found S.H.I.E.L.D. after the war. She lived a full life while Steve was frozen in ice.",
  "riri-williams":
    "Riri Williams is a teenage genius from Chicago who built her own Ironheart armor. She met Shuri in Wakanda and stepped up as a new young hero. She carries Tony Stark's inventor spirit forward.",
  "cassie-lang":
    "Cassie Lang is Scott Lang's daughter who grew up while he was stuck in the Quantum Realm. She became a hero and got pulled into Kang's domain. She fights beside her father in the quantum world.",
  mobius:
    "Mobius is a TVA agent who tracks timeline variants. He befriended Loki and learned the TVA's secrets. He helps keep the multiverse stable while questioning who is really in charge.",
  sylvie:
    "Sylvie is a Loki variant who grew up running from the TVA. She killed He Who Remains and unleashed the multiverse. She remains a wild card with deep ties to Loki.",
  abomination:
    "Emil Blonsky is a soldier who took gamma blood and became the Abomination. He fought the Hulk in New York. He later showed up as a fighter in Wong's underground matches.",
  ronan:
    "Ronan is a Kree fanatic who waged war on Xandar. He struck a deal with Thanos and used the Power Stone. The Guardians stopped him before he could destroy a whole planet.",
  malekith:
    "Malekith is the leader of the Dark Elves who wanted the Aether to plunge the universe into darkness. He attacked Asgard during the Convergence. Thor and Jane Foster stopped his ancient plan.",
  zemo:
    "Helmut Zemo lost his family in Sokovia and blamed the Avengers. He split the team apart in Civil War. He later worked with Bucky and Sam while still distrusting superheroes.",
  odin:
    "Odin is the All-Father and king of Asgard. He hid Hela, banished Thor, and died in Norway. His power and mistakes shaped the fate of the Nine Realms.",
  "happy-hogan":
    "Happy Hogan is Tony Stark's driver, bodyguard, and loyal friend. He helped raise Peter Parker after Tony's death. He runs security for Stark assets and backs up heroes when needed.",
  "ned-leeds":
    "Ned Leeds is Peter Parker's best friend and the guy in the chair. He helps with tech and keeps Peter's secrets. He got caught up in multiverse magic during No Way Home.",
  mordo:
    "Karl Mordo was a master of the mystic arts and Strange's ally at first. He turned against sorcerers who break natural law. He now hunts those who misuse magic.",
  ghost:
    "Ava Starr became the Ghost after a quantum accident left her phasing and in pain. She stole tech to cure herself. She later joined a team of antiheroes on a dangerous mission.",
  ego:
    "Ego is a Celestial who is also a living planet. He planted seeds on worlds to remake the universe in his image. Peter Quill learned Ego killed his mother and helped destroy him.",
  "high-evolutionary":
    "The High Evolutionary is a scientist who experiments on animals to create new species. He tortured Rocket and built a perfect society in space. The Guardians freed Rocket's friends and stopped him.",
  "dar-benn":
    "Dar-Benn is a Kree leader who stole resources from other worlds to save Hala. She clashed with Captain Marvel, Monica Rambeau, and Kamala Khan. Her plan threatened the whole team.",
  "cassandra-nova":
    "Cassandra Nova is Charles Xavier's evil twin from another reality. She is a powerful telepath who threatened the multiverse. Deadpool and Wolverine faced her in their crossover adventure.",
  "red-hulk":
    "Thaddeus Ross became the Red Hulk with gamma power and burning heat. He clashed with heroes as both general and monster. He represents the danger of military pursuit of super soldiers.",
  talos:
    "Talos is a Skrull general who fled the Kree and hid on Earth. He worked with Nick Fury and protected his people. He died fighting the Skrull rebel Gravik.",
  gravik:
    "Gravik is a Skrull rebel who wanted to conquer Earth for his people. He stole Fury's allies and nearly won. Fury and allies stopped his uprising in Secret Invasion.",
  khonshu:
    "Khonshu is the Egyptian moon god who chose Marc Spector as his avatar. He grants strength but demands control. He pushes Marc to punish evil in his name.",
  "arthur-harrow":
    "Arthur Harrow is a cult leader who serves the trapped god Ammit. He drains souls to free her and remake the world. Moon Knight stopped his plan in Egypt.",
  sersi:
    "Sersi is an Eternal who lived on Earth for thousands of years. She can change matter with a touch. She led the fight when the Emergence threatened the planet.",
  ikaris:
    "Ikaris is the strongest Eternal and a loyal soldier of Arishem. He can fly and shoot energy from his eyes. He turned on his team to follow his creator's orders.",
  thena:
    "Thena is an Eternal warrior who suffers from madness in battle. She creates weapons from cosmic energy. She fought beside the team when the Emergence began.",
  druig:
    "Druig is an Eternal who can control minds and emotions. He led a hidden village in the Amazon. He chose humanity over Arishem when the Emergence arrived.",
  katy:
    "Katy is Shang-Chi's best friend from San Francisco. She drives buses, shoots arrows, and follows him into danger. She brings humor and heart to his journey.",
  "sharon-carter":
    "Sharon Carter is Peggy Carter's niece and a S.H.I.E.L.D. agent. She helped Steve Rogers in Winter Soldier. She later worked in the shadows and gave Steve's shield to the government.",
  "he-who-remains":
    "He Who Remains built the TVA to stop his evil variants, including Kang. He offered Loki and Sylvie a choice at the end of time. Sylvie killed him and unleashed the multiverse.",
  "hank-pym":
    "Hank Pym is a scientist who discovered Pym particles and became the first Ant-Man. He worked with S.H.I.E.L.D. and later trained Scott Lang. His work opened the door to the Quantum Realm.",
  "party-thor":
    "Party Thor is a What If...? version of Thor who grew up without learning responsibility. He threw a huge party on Earth that nearly broke reality. He had to grow up fast when danger came.",
  "zombie-strange":
    "Zombie Strange is a What If...? version infected by the zombie virus. He kept some magic but hungered for the living. He threatened survivors across a broken Earth.",
  "elsa-bloodstone":
    "Elsa Bloodstone is a monster hunter from a famous family. She carries the Bloodstone gem and fights creatures of the night. She met Jack Russell at a deadly hunt at Bloodstone Manor.",
  "jack-slash":
    "Jack Russell is a werewolf hunter drawn into a monster battle at Bloodstone Manor. He transforms under the full moon. He walks the line between beast and hero.",
  "rio-vidal":
    "Rio Vidal is a witch tied to Agatha Harkness and the dark path. She joins Agatha's coven on the Witches' Road. Her past and powers hide deeper secrets.",
  teen: "Teen is a young witch in Agatha's coven with a sharp tongue and real power. He trains on the Witches' Road. His true identity ties into Agatha's larger plans.",
  "red-dagger":
    "Kareem is a vigilante in Karachi known as Red Dagger. He protects his city with martial arts skill. He became an ally to Kamala Khan as she grew into Ms. Marvel.",
  bruno:
    "Bruno Carrelli is Kamala Khan's best friend and a brilliant inventor. He helps her understand her bangle and powers. He stays loyal even when her hero life gets dangerous.",
  "thunderbolt-ross":
    "General Thaddeus Ross hunted the Hulk for years as a military leader. He pushed gamma experiments and super-soldier programs. His pursuit of power led him toward the Red Hulk.",
  sentry:
    "Bob Reynolds is the Sentry, one of the most powerful heroes on Earth. His dark side, the Void, threatens everything he protects. He joined a team of troubled antiheroes on a deadly mission.",
  "john-walker":
    "John Walker is a soldier the government picked to replace Steve Rogers as Captain America. He took the super soldier serum and crossed the line in battle. He later worked with antiheroes as U.S. Agent.",
  "reed-richards":
    "Reed Richards is a genius scientist who gained stretching powers in a space accident. He leads the Fantastic Four as Mr. Fantastic. He now faces cosmic threats like Galactus in the MCU.",
  "sue-storm":
    "Sue Storm is Reed's partner and the Invisible Woman. She can turn invisible and make force fields. She keeps the Fantastic Four together with calm and strength.",
  "johnny-storm":
    "Johnny Storm is Sue's brother and the Human Torch. He flies, burns hot, and acts before he thinks. He brings fire and attitude to the Fantastic Four.",
  "ben-grimm":
    "Ben Grimm is Reed's friend who became the rock-skinned Thing. He is tough, loyal, and the heart of the team. He trades jokes and punches in equal measure.",
  "doctor-doom":
    "Victor Von Doom is the ruler of Latveria and a genius in science and magic. He wears armor and seeks total control. He stands as one of the greatest threats in the multiverse.",
  "matt-murdock":
    "Matt Murdock is a blind lawyer from Hell's Kitchen with heightened senses. By night he is Daredevil, the Man Without Fear. He fights crime and faces Kingpin again in Born Again.",
};
