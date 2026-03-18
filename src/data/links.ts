export interface Link {
  from: string; // ID of the source
  to: string;   // ID of the target
  reason?: string;
}

export const links: Link[] = [
  // Strong Philosophical & Project Connections
  { from: "thought-axiom", to: "project-rubiks", reason: "Solving requires identifying underlying patterns." },
  { from: "thought-nihilism", to: "project-orbt", reason: "Minimalism as a response to zero meaning." },
  { from: "thought-meritocracy", to: "taste-big-short", reason: "Both critique the illusion of systemic fairness." },
  { from: "taste-outer-wilds", to: "thought-axiom", reason: "Exploration through breaking perceived rules." },
  { from: "thought-language", to: "project-dchup", reason: "Cards as the 'interface' for internalizing language." },
  { from: "thought-infinity", to: "project-fractal", reason: "Mathematical visualization of connected extremes." },

  // Grounded Technical & Thematic Connections
  { from: "taste-films-sherlock", to: "project-rubiks", reason: "Both involve algorithmic paths to a single truth." },
  { from: "project-infection", to: "taste-games-spore", reason: "Both explore emergent patterns in biological systems." },
  { from: "project-gravitation", to: "taste-outer-wilds", reason: "Exploring the clockwork physics of a small universe." },
  { from: "project-bico", to: "taste-big-short", reason: "Exploring the volatile systems of value and risk." },
  { from: "taste-books-justice", to: "thought-meritocracy", reason: "Analyzing the moral foundations of success and fairness." },
  { from: "taste-books-zero-to-one", to: "project-dchup", reason: "Building a new architecture from the ground up." },
  { from: "thought-single-player", to: "project-minilol", reason: "Treating complex social interactions as predictable NPC logic." },
  { from: "project-solitaire", to: "taste-games-sts", reason: "Appreciation for the deep logic of card-based systems." }
];
