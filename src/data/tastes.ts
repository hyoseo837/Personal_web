export type TasteItem = {
  id: string;
  name: string;
  category: "books" | "films" | "games" | "music" | "pokemon";
  description: string;
  creator?: string; // Author, Director, Studio, or Artist
  pid?: number; // Pokedex ID for Pokemon pixel art
  connections?: string[]; // Internal TasteMap connections
};

export const tastes: TasteItem[] = [
  // Books
  {
    id: "taste-books-phm",
    name: "Project Hail Mary",
    category: "books",
    creator: "Andy Weir",
    description:
      "A masterpiece of scientific optimism and the pure joy of problem-solving.",
    connections: ["Outer Wilds", "Life of Pi"],
  },
  {
    id: "taste-books-torrent",
    name: "The Torrent",
    category: "books",
    creator: "Jeong Dae-geon",
    description:
      "It explores their intense first love, secret-filled lives, and a traumatic accident that changes them, resonating with themes of navigating turbulent youth.",
    connections: ["If I have you only"],
  },
  {
    id: "taste-books-demian",
    name: "Demian",
    category: "books",
    creator: "Hermann Hesse",
    description: "The journey of self-discovery and breaking out of one's shell.",
    connections: ["Sherlock", "Riolu", "We're no different"],
    },
  {
    id: "taste-books-justice",
    name: "Justice",
    category: "books",
    creator: "Michael Sandel",
    description:
      "Michael Sandel's deep dive into the moral frameworks that define our society.",
    connections: ["The Big Short", "Zero to One"],
  },
  {
    id: "taste-books-zero-to-one",
    name: "Zero to One",
    category: "books",
    creator: "Peter Thiel , Blake Masters",
    description:
      "Peter Thiel's philosophy on building the future by creating new things.",
    connections: ["Justice", "Tiny Riot"],
  },

  // Films
  {
    id: "taste-films-pi",
    name: "Life of Pi",
    category: "films",
    creator: "Ang Lee",
    description:
      "A visual and philosophical meditation on faith, survival, and storytelling.",
    connections: ["Project Hail Mary", "Outer Wilds"],
  },
  {
    id: "taste-films-sherlock",
    name: "Sherlock",
    category: "films",
    creator: "Steven Moffat & Mark Gatiss",
    description:
      "The ultimate showcase of logical deduction and the beauty of a sharp mind.",
    connections: ["Demian", "The Big Short"],
  },
  {
    id: "taste-big-short",
    name: "The Big Short",
    category: "films",
    creator: "Adam McKay",
    description:
      "A fast-paced, cynical, yet educational look at the 2008 financial collapse.",
    connections: ["Justice", "Sherlock"],
  },

  // Games
  {
    id: "taste-outer-wilds",
    name: "Outer Wilds",
    category: "games",
    creator: "Mobius Digital",
    description:
      "The purest game about curiosity. A clockwork universe waiting to be understood.",
    connections: ["Project Hail Mary", "Spore", "Life of Pi", "Buizel"],
  },
  {
    id: "taste-games-hk",
    name: "Hollow Knight",
    category: "games",
    creator: "Team Cherry",
    description:
      "Perfect atmosphere and tight mechanics. A lesson in environmental storytelling.",
    connections: ["Absol", "Skul", "Forest of Dreams"],
  },
  {
    id: "taste-games-spore",
    name: "Spore",
    category: "games",
    creator: "Maxis",
    description:
      "A childhood classic that sparked my fascination with evolution and systems.",
    connections: ["Outer Wilds", "Torterra"],
  },
  {
    id: "taste-games-sts",
    name: "Slay the Spire",
    category: "games",
    creator: "MegaCrit",
    description: "The gold standard of deck-building games. Pure mechanical elegance.",
    connections: ["Skul"],
  },
  {
    id: "taste-games-skul",
    name: "Skul",
    category: "games",
    creator: "SouthPAW Games",
    description: 'Fast-paced action with a unique "head-swapping" mechanic.',
    connections: ["Hollow Knight", "Slay the Spire"],
  },

  // Music
  {
    id: "taste-music-no-diff",
    name: "We're no different",
    category: "music",
    creator: "UmYull",
    description:
      "explores themes of shared loneliness, mutual understanding, and finding warmth in companionship despite feeling tired or uncertain.",
    connections: ["Demian"],
  },
  {
    id: "taste-music-riot",
    name: "Tiny Riot",
    category: "music",
    creator: "Sam Ryder",
    description: "Powerful, emotive, and full of raw energy.",
    connections: ["Zero to One"],
  },
  {
    id: "taste-music-forest",
    name: "Forest of Dreams",
    category: "music",
    creator: "Kinetic Flow",
    description: "Ethereal and nostalgic. A track that feels like a memory.",
    connections: ["Hollow Knight"],
  },
  {
    id: "taste-music-only-you",
    name: "If I have you only",
    category: "music",
    creator: "Nerd connection",
    description: "A timeless melody about presence and longing.",
    connections: ["The Torrent"],
  },

  // Pokemon
  {
    id: "taste-pkmn-sandshrew",
    name: "Sandshrew",
    category: "pokemon",
    pid: 27,
    description: "Always appreciated its simple design and resilient nature.",
    connections: ["Torterra"],
  },
  {
    id: "taste-pkmn-torterra",
    name: "Torterra",
    category: "pokemon",
    pid: 389,
    description: 'The "Continent Pokémon." Represents stability and growth.',
    connections: ["Spore", "Sandshrew"],
  },
  {
    id: "taste-pkmn-absol",
    name: "Absol",
    category: "pokemon",
    pid: 359,
    description: "A misunderstood guardian. Elegant design with a dark backstory.",
    connections: ["Hollow Knight"],
  },
  {
    id: "taste-pkmn-buizel",
    name: "Buizel",
    category: "pokemon",
    pid: 418,
    description: "Swift and energetic. One of my favorites from the Sinnoh region.",
    connections: ["Outer Wilds"],
  },
  {
    id: "taste-pkmn-riolu",
    name: "Riolu",
    category: "pokemon",
    pid: 447,
    description: "Small but determined. A symbol of potential and aura.",
    connections: ["Demian"],
  },
];
