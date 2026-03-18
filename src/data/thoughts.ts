import { 
  Sparkles, Zap, Binary, Scale, MoveRight, 
  Gamepad2, Languages, ShieldAlert, HeartOff 
} from 'lucide-astro';

export interface Thought {
  id: string;
  date: string;
  title: string;
  category: string;
  description: string;
  icon: any;
}

export const thoughts: Thought[] = [
  {
    id: "thought-infinity",
    date: "2026.02.15",
    title: "Both Infinity Are Connected",
    category: "Philosophy",
    description: "The extremes of 'Zero' and 'Infinity' often share the same characteristics. Just as a paper completely covered in black ink becomes a blank canvas for a white pen, total chaos and total order meet at the same point of potential.",
    icon: Sparkles
  },
  {
    id: "thought-nihilism",
    date: "2026.02.12",
    title: "Optimistic Nihilism",
    category: "Mindset",
    description: "If the universe has no inherent meaning, we are not trapped by destiny. This 'Zero Meaning' is the ultimate freedom—a blank canvas where we are free to define our own values and dream as big as we dare, because 'why not?'",
    icon: Zap
  },
  {
    id: "thought-language",
    date: "2025.11.22",
    title: "The Identity Trap of Language",
    category: "Linguistics",
    description: "Language is the interface of thought. Defining yourself as a static category (e.g., 'I am an introvert') locks your brain into a structural commitment. To remain free, treat identity as a variable, not an axiom.",
    icon: Languages
  },
  {
    id: "thought-nothing-owed",
    date: "2025.12.13",
    title: "Nothing Is Owed",
    category: "Stoicism",
    description: "Frustration often stems from expecting things that were never guaranteed—kindness, time, or luck. By recognizing that nothing is truly owed to us, we eliminate resentment and make genuine kindness more visible and valuable.",
    icon: HeartOff
  },
  {
    id: "thought-meritocracy",
    date: "2025.10.19",
    title: "Beyond Meritocracy",
    category: "Sociology",
    description: "Meritocracy creates a 'Tyranny of Merit' where success is seen as purely personal property, ignoring luck and circumstance. It sustains itself through an accepted illusion of fairness that eventually collapses under its own contradictions.",
    icon: Scale
  },
  {
    id: "thought-axiom",
    date: "2025.10.16",
    title: "Attack the Axiom",
    category: "Logic",
    description: "To truly refute an idea or solve an 'unsolvable' problem, don't fight the logic—deny the foundation. By identifying and replacing the hidden, underlying assumptions (axioms), you redefine the entire framework of what is possible.",
    icon: Binary
  },
  {
    id: "thought-vector",
    date: "2025.06.30",
    title: "The Value Vector",
    category: "Psychology",
    description: "Every individual has an internal 'Value Vector' defined by direction (goals) and magnitude (drive). Conflict arises not from standing still, but when our actual life movement points against our internal ideal direction.",
    icon: MoveRight
  },
  {
    id: "thought-single-player",
    date: "2025.05.18",
    title: "Life as a Single Player Game",
    category: "Metaphysics",
    description: "A speculative lens where I am the only conscious 'player' and others act as NPCs following physical rules. If history is just a setting and death is a logic leap, life becomes a subjective journey focused entirely on my experience.",
    icon: Gamepad2
  },
  {
    id: "thought-immersion",
    date: "2026.01.15",
    title: "Logical Immersion",
    category: "Strategy",
    description: "Using the absolute certainty of logic—math or code—as a temporary shield against the uncertainty of the future and relationships. A short-term emotional strategy to maintain focus when the world feels unpredictable.",
    icon: ShieldAlert
  }
];
