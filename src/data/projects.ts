import {
  BookOpen,
  Spade,
  ChartScatter,
  Gamepad2,
  Activity,
  Layers,
  Box,
  Bot,
  PersonStanding,
  Languages,
  LayoutDashboard,
} from "lucide-astro";

export interface Project {
  id: string;
  title: string;
  stack: string;
  description: string;
  icon: any;
  github?: string;
  github_backend?: string;
  link?: string;
  video?: string;
  status?: "archived";
  duration?: string;
  media?:
    | { type: 'video'; src: string; poster?: string }
    | { type: 'image'; src: string }
    | { type: 'demo' }; // CSS-animated demo component, keyed off the project id
}

export const projects: Project[] = [
  // {
  //   id: "project id",
  //   title: "Project Title",
  //   stack: "Tech Stack",
  //   description: "Project description goes here.",
  //   github: "github link",
  //   github_backend: "optional second repo link, for a split front/back end",
  //   link: "optional project link",
  //   video: "optional walkthrough video link",
  //   status: "archived",  // omit while the project is still standing
  //   icon: IconComponent,
  //   duration: "optional project duration",
  // },
  {
    id: "ww-extension",
    title: "WW Extension",
    stack: "Chrome MV3 · FastAPI · Supabase · React · Stripe · Gemini API",
    description:
      "An AI job scorer for WaterlooWorks, UWaterloo's co-op board. Gemini rated each posting 1–20 against your profile and the scores landed as badges in the job table, so you could triage hundreds without opening one. Passed Chrome Web Store review, ran in production for two months, scored 1,749 real postings — then wound down with the co-op term it was built for. The backend has since been shut down, so the extension no longer runs; the source and the walkthrough are what's left of it.",
    github: "https://github.com/hyoseo837/ww-extension",
    video: "https://www.youtube.com/watch?v=oh_4EEv-ILs",
    status: "archived",
    icon: Bot,
    duration: "2026.05 - 2026.07",
    media: { type: 'demo' },
  },
  {
    id: "macro-dashboard",
    title: "Macro-dashboard",
    stack: "React 19 · TanStack Query · react-grid-layout · FastAPI · SQLAlchemy · Alembic · APScheduler · PostgreSQL · yfinance · feedparser · Gemini AI · Docker Compose",
    description:
      "A highly customizable finance dashboard that helps users build the habit of 'looking around' — showing asset prices and news on a single screen. Async SQLAlchemy over PostgreSQL with Alembic migrations, APScheduler jobs pulling quotes and feedparser news on a timer, and a React 19 front end where every widget drags into the layout you want. Ships as a production docker-compose.",
    github: "https://github.com/hyoseo837/macro_dashboard",
    icon: LayoutDashboard,
    duration: "2026.04 - 2026.05",
    media: { type: 'demo' },
  },
  {
    id: "empkl-project",
    title: "English material provider for Korean language Project (EMPKL)",
    stack: "fastapi · gemini api · vite · tailwind css · postgresql",
    description:
      "A web application that provides English learning materials for Korean speakers. Utilizes Gemini API for content generation and features a modern frontend built with React and Tailwind CSS.",
    github: "https://github.com/hyoseo837/empkl",
    icon: Languages,
    duration: "2026.03 - 2026.03",
    media: { type: 'demo' },
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
    media: { type: 'demo' },
  },
  {
    id: "project-dchup",
    title: "Dchup (Study Card Webapp)",
    stack: "React · Python-fastapi · AWS",
    description:
      "Built a full-stack flashcard architecture aimed at providing a Quizlet-like experience. A deep dive into backend systems and data persistence.",
    icon: BookOpen,
    github: "https://github.com/hyoseo837/Dchup",
    github_backend: "https://github.com/hyoseo837/dchup2_Backend",
    status: "archived",
    duration: "2024.03 - 2024.07",
    media: { type: 'demo' },
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
    media: { type: 'demo' },
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
    media: { type: 'demo' },
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
    media: { type: 'demo' },
  },
  {
    id: "project-solitaire",
    title: "Solitaire (React)",
    stack: "React",
    description:
      "A complete reconstruction of the SHENZHEN I/O solitaire card game in React. The project where I truly mastered React's state management.",
    icon: Spade,
    github: "https://github.com/hyoseo837/ddanzt",
    link: "/games/solitaire",
    duration: "2023.10 - 2024.01",
    media: { type: 'demo' },
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
    media: { type: 'demo' },
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
    media: { type: 'demo' },
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
    media: { type: 'demo' },
  },
];
