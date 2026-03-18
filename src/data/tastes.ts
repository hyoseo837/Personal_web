export type TasteItem = {
  name: string;
  category: "books" | "films" | "games" | "music" | "pokemon";
  description: string;
  creator?: string; // Author, Director, Studio, or Artist
  id?: number; // Pokedex ID for Pokemon pixel art
};

export const tastes: TasteItem[] = [
  // Books
  {
    name: "Project Hail Mary",
    category: "books",
    creator: "Andy Weir",
    description:
      "A masterpiece of scientific optimism and the pure joy of problem-solving.",
  },
  {
    name: "The Torrent",
    category: "books",
    creator: "Jeong Dae-geon",
    description:
      "It explores their intense first love, secret-filled lives, and a traumatic accident that changes them, resonating with themes of navigating turbulent youth.",
  },
  {
    name: "Demian",
    category: "books",
    creator: "Hermann Hesse",
    description: "The journey of self-discovery and breaking out of one's shell.",
  },
  {
    name: "Justice",
    category: "books",
    creator: "Michael Sandel",
    description:
      "Michael Sandel's deep dive into the moral frameworks that define our society.",
  },
  {
    name: "Zero to One",
    category: "books",
    creator: "Peter Thiel , Blake Masters",
    description:
      "Peter Thiel's philosophy on building the future by creating new things.",
  },

  // Films
  {
    name: "Life of Pi",
    category: "films",
    creator: "Ang Lee",
    description:
      "A visual and philosophical meditation on faith, survival, and storytelling.",
  },
  {
    name: "Sherlock",
    category: "films",
    creator: "Steven Moffat & Mark Gatiss",
    description:
      "The ultimate showcase of logical deduction and the beauty of a sharp mind.",
  },
  {
    name: "The Big Short",
    category: "films",
    creator: "Adam McKay",
    description:
      "A fast-paced, cynical, yet educational look at the 2008 financial collapse.",
  },

  // Games
  {
    name: "Outer Wilds",
    category: "games",
    creator: "Mobius Digital",
    description:
      "The purest game about curiosity. A clockwork universe waiting to be understood.",
  },
  {
    name: "Hollow Knight",
    category: "games",
    creator: "Team Cherry",
    description:
      "Perfect atmosphere and tight mechanics. A lesson in environmental storytelling.",
  },
  {
    name: "Spore",
    category: "games",
    creator: "Maxis",
    description:
      "A childhood classic that sparked my fascination with evolution and systems.",
  },
  {
    name: "Slay the Spire",
    category: "games",
    creator: "MegaCrit",
    description: "The gold standard of deck-building games. Pure mechanical elegance.",
  },
  {
    name: "Skul",
    category: "games",
    creator: "SouthPAW Games",
    description: 'Fast-paced action with a unique "head-swapping" mechanic.',
  },

  // Music
  {
    name: "We're no different",
    category: "music",
    creator: "UmYull",
    description:
      "explores themes of shared loneliness, mutual understanding, and finding warmth in companionship despite feeling tired or uncertain.",
  },
  {
    name: "Tiny Riot",
    category: "music",
    creator: "Sam Ryder",
    description: "Powerful, emotive, and full of raw energy.",
  },
  {
    name: "Forest of Dreams",
    category: "music",
    creator: "Kinetic Flow",
    description: "Ethereal and nostalgic. A track that feels like a memory.",
  },
  {
    name: "If I have you only",
    category: "music",
    creator: "Nerd connection",
    description: "A timeless melody about presence and longing.",
  },

  // Pokemon
  {
    name: "Sandshrew",
    category: "pokemon",
    id: 27,
    description: "Always appreciated its simple design and resilient nature.",
  },
  {
    name: "Torterra",
    category: "pokemon",
    id: 389,
    description: 'The "Continent Pokémon." Represents stability and growth.',
  },
  {
    name: "Absol",
    category: "pokemon",
    id: 359,
    description: "A misunderstood guardian. Elegant design with a dark backstory.",
  },
  {
    name: "Buizel",
    category: "pokemon",
    id: 418,
    description: "Swift and energetic. One of my favorites from the Sinnoh region.",
  },
  {
    name: "Riolu",
    category: "pokemon",
    id: 447,
    description: "Small but determined. A symbol of potential and aura.",
  },
];
