import {
  BookOpen,
  Spade,
  ChartScatter,
  Gamepad2,
  Activity,
  Layers,
  Box,
  Bot,
  Coins,
  PersonStanding,
  Languages,
} from "lucide-astro";

export interface Project {
  id: string;
  title: string;
  stack: string;
  description: string;
  icon: any;
  github?: string;
  link?: string;
  duration?: string;
}

export const projects: Project[] = [
  // {
  //   id: "project id",
  //   title: "Project Title",
  //   stack: "Tech Stack",
  //   description: "Project description goes here.",
  //   github: "github link",
  //   link: "optional project link",
  //   icon: IconComponent,
  //   duration: "optional project duration",
  // },
  {
    id: "empkl-project",
    title: "English material provider for Korean language Project (EMPKL)",
    stack: "fastapi · gemini api · vite · tailwind css · postgresql",
    description:
      "A web application that provides English learning materials for Korean speakers. Utilizes Gemini API for content generation and features a modern frontend built with React and Tailwind CSS.",
    github: "https://github.com/hyoseo837/empkl",
    icon: Languages,
    duration: "2026.03 - 2026.03",
  },
  {
    id: "personal-website-renewal",
    title: "Personal Website and Blog Renewal",
    stack: "Astro · TypeScript · Tailwind CSS, cloudflare pages",
    description:
      "Redesigned and rebuilt my personal website and Blog with a modern look and improved performance.",
    github: "https://github.com/hyoseo837/Personal_web",
    link: "https://hyoseo.dev",
    icon: PersonStanding,
    duration: "2026.03 - 2026.03",
  },
  {
    id: "project-dchup",
    title: "Dchup (Study Card Webapp)",
    stack: "React · Python-fastapi · AWS",
    description:
      "Built a full-stack flashcard architecture aimed at providing a Quizlet-like experience. A deep dive into backend systems and data persistence.",
    icon: BookOpen,
    github: "https://github.com/hyoseo837/Dchup",
    duration: "2024.03 - 2024.07",
  },
  {
    id: "project-wildfire",
    title: "CxC Hackathon: Wildfire Analysis",
    stack: "Python · Pandas · Matplotlib · AI",
    description:
      "Analyzed 22,000 wildfire records in Alberta. Built an AI model to predict wildfire sizes and understand their impact on indigenous civilizations. Won the MEF Award.",
    icon: ChartScatter,
    github: "https://github.com/hyowon2jjang/CxC-hackathon",
    duration: "2024.02 - 2024.03",
  },
  {
    id: "project-orbt",
    title: "Orbt!",
    stack: "HTML · CSS · JavaScript",
    description:
      "A minimalist mini-game built as a Chrome Extension. Focused on smooth animations and simple, addictive mechanics.",
    icon: Gamepad2,
    link: "https://chrome.google.com/webstore/detail/keep-orbt/fnojejaphahikdnanchmnccmilgnffmf?hl=en",
    duration: "2022.02 - 2023.05",
  },
  {
    id: "project-rubiks",
    title: "Rubik's Cube Helper",
    stack: "Python · Pygame",
    description:
      "IB Computer Science IA project. A solver that visualizes the solution process for a Rubik's cube with a custom UI.",
    icon: Box,
    github: "https://github.com/hyoseo837/Rubik-Cube-Helper",
    duration: "2022.07 - 2023.05",
  },
  {
    id: "project-solitaire",
    title: "Solitaire (React)",
    stack: "React",
    description:
      "A complete reconstruction of the SHENZHEN I/O solitaire card game in React. The project where I truly mastered React's state management.",
    icon: Spade,
    github: "https://github.com/hyoseo837/ddanzt",
    link: "https://hyoseo837.github.io/ddanzt/",
    duration: "2023.10 - 2024.01",
  },
  {
    id: "project-fractal",
    title: "Newton Fractal Generator",
    stack: "C++",
    description:
      "IB Extended Essay project. Researched complex numbers and Newton's method to generate precise fractal images at specific resolutions.",
    icon: Layers,
    github:
      "https://github.com/hyoseo837/Learning-Cpp/blob/master/Gravitation/NewtonFractal.cpp",
    duration: "high school - 2023.05",
  },
  {
    id: "project-gravitation",
    title: "Gravitational Motion Simulator",
    stack: "C++ · SFML",
    description:
      "A physics simulator based on the laws of gravitation. Calculates field strength and executes based on classical mechanics.",
    icon: Activity,
    github:
      "https://github.com/hyoseo837/Learning-Cpp/blob/master/Gravitation/Gravitation.cpp",
    duration: "high school - 2023.05",
  },
  {
    id: "project-bico",
    title: "Bico Game",
    stack: "Python · Pygame",
    description:
      "A trading simulation game where players earn money based on randomly fluctuating cryptocurrency prices.",
    icon: Coins,
    github: "https://github.com/hyoseo837/bico",
    duration: "high school - 2023.05",
  },
  {
    id: "project-minilol",
    title: "Mini LoL",
    stack: "Python · Pygame",
    description:
      "A pygame-based mini-game featuring champions and mechanics inspired by League of Legends.",
    icon: Gamepad2,
    github: "https://github.com/hyoseo837/minilol",
    duration: "high school - 2023.05",
  },
  {
    id: "project-dicobot",
    title: "Discord Bot",
    stack: "Python · Discord API · Heroku",
    description:
      "An automated response bot for Discord servers. Managed deployment and API integration on Heroku.",
    icon: Bot,
    github: "https://github.com/hyoseo837/dicobot",
    duration: "high school - 2023.05",
  },
  {
    id: "project-infection",
    title: "Infection Simulation",
    stack: "Python · Pygame",
    description:
      "MYP Personal Project. A simulator that visualizes disease spread based on simple contact rules.",
    icon: Activity,
    github: "https://github.com/hyoseo837/infection_simulation",
    duration: "high school - 2023.05",
  },
  {
    id: "project-casino",
    title: "Casino Project",
    stack: "Python",
    description:
      "A console-based casino program featuring a lobby and various mini-games, built in collaboration with a peer.",
    icon: Coins,
    github: "https://github.com/hyoseo837/casino_project/tree/master",
    duration: "high school - 2023.05",
  },
];
