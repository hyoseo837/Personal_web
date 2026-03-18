import { 
  BookOpen, Spade, ChartScatter, Gamepad2, Activity, Layers, Box, Bot, Coins
} from 'lucide-astro';

export const projects = [
  {
    title: "Dchup (Study Card Webapp)",
    stack: "React · Python-fastapi · AWS",
    description: "Built a full-stack flashcard architecture aimed at providing a Quizlet-like experience. A deep dive into backend systems and data persistence.",
    icon: BookOpen,
    github: "https://github.com/hyoseo837/Dchup"
  },
  {
    title: "CxC Hackathon: Wildfire Analysis",
    stack: "Python · Pandas · Matplotlib · AI",
    description: "Analyzed 22,000 wildfire records in Alberta. Built an AI model to predict wildfire sizes and understand their impact on indigenous civilizations. Won the MEF Award.",
    icon: ChartScatter,
    github: "https://github.com/hyowon2jjang/CxC-hackathon"
  },
  {
    title: "Orbt!",
    stack: "HTML · CSS · JavaScript",
    description: "A minimalist mini-game built as a Chrome Extension. Focused on smooth animations and simple, addictive mechanics.",
    icon: Gamepad2,
    link: "https://chrome.google.com/webstore/detail/keep-orbt/fnojejaphahikdnanchmnccmilgnffmf?hl=en"
  },
  {
    title: "Rubik's Cube Helper",
    stack: "Python · Pygame",
    description: "IB Computer Science IA project. A solver that visualizes the solution process for a Rubik's cube with a custom UI.",
    icon: Box,
    github: "https://github.com/hyoseo837/Rubik-Cube-Helper"
  },
  {
    title: "Solitaire (React)",
    stack: "React",
    description: "A complete reconstruction of the SHENZHEN I/O solitaire card game in React. The project where I truly mastered React's state management.",
    icon: Spade,
    github: "https://github.com/hyoseo837/ddanzt",
    link: "https://hyoseo837.github.io/ddanzt/"
  },
  {
    title: "Newton Fractal Generator",
    stack: "C++",
    description: "IB Extended Essay project. Researched complex numbers and Newton's method to generate precise fractal images at specific resolutions.",
    icon: Layers,
    github: "https://github.com/hyoseo837/Learning-Cpp/blob/master/Gravitation/NewtonFractal.cpp"
  },
  {
    title: "Gravitational Motion Simulator",
    stack: "C++ · SFML",
    description: "A physics simulator based on the laws of gravitation. Calculates field strength and executes based on classical mechanics.",
    icon: Activity,
    github: "https://github.com/hyoseo837/Learning-Cpp/blob/master/Gravitation/Gravitation.cpp"
  },
  {
    title: "Bico Game",
    stack: "Python · Pygame",
    description: "A trading simulation game where players earn money based on randomly fluctuating cryptocurrency prices.",
    icon: Coins,
    github: "https://github.com/hyoseo837/bico"
  },
  {
    title: "Mini LoL",
    stack: "Python · Pygame",
    description: "A pygame-based mini-game featuring champions and mechanics inspired by League of Legends.",
    icon: Gamepad2,
    github: "https://github.com/hyoseo837/minilol"
  },
  {
    title: "Discord Bot",
    stack: "Python · Discord API · Heroku",
    description: "An automated response bot for Discord servers. Managed deployment and API integration on Heroku.",
    icon: Bot,
    github: "https://github.com/hyoseo837/dicobot"
  },
  {
    title: "Infection Simulation",
    stack: "Python · Pygame",
    description: "MYP Personal Project. A simulator that visualizes disease spread based on simple contact rules.",
    icon: Activity,
    github: "https://github.com/hyoseo837/infection_simulation"
  },
  {
    title: "Casino Project",
    stack: "Python",
    description: "A console-based casino program featuring a lobby and various mini-games, built in collaboration with a peer.",
    icon: Coins,
    github: "https://github.com/hyoseo837/casino_project/tree/master"
  }
];
