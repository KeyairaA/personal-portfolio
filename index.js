export const HERO_EYEBROW = "Software Engineer";

export const ABOUT_TEXT = `I'm a software engineer in training, transitioning out of three years as a sales and IT specialist. I graduated in 2021 with a Bachelor's degree in Mathematics and Computer Science from the University of Illinois Chicago, which gave me a strong foundation in analytical thinking, problem-solving, and technical fundamentals. I've spent years solving problems for people directly, and I'm now channeling that experience into building full-stack software.`;

export const TECHNOLOGIES = [
  "React",
  "JavaScript",
  "Node.js",
  "Python",
  "SQL",
  "PostgreSQL",
  "Express",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "API Integration",
  "Authentication",
  "Relational Databases",
  "C++",
];

export const EXPERIENCES = [
  {
    year: "2025 – 2026",
    role: "Specialist",
    company: "Apple",
    description:
      "Customer-focused Specialist delivering exceptional retail experiences in a fast-paced environment, using extensive knowledge of Apple's products and ecosystem.",
    technologies: [],
  },
  {
    year: "2021 – 2025",
    role: "Technology Specialist I",
    company: "Gibsons Restaurant Group",
    description:
      "Level-1 IT specialist providing comprehensive help desk support, troubleshooting and resolving technical issues efficiently for users across the organization.",
    technologies: ["Active Directory", "Google Workspace", "Google Cloud"],
  },
];

export const EDUCATION = {
  year: "2021",
  degree: "B.S. Mathematics & Computer Science",
  school: "University of Illinois Chicago",
};

export const PROJECTS = [
  {
    kicker: "In progress",
    title: "Unrivaled Tracker",
    description:
      "A full-stack app for the Unrivaled women's basketball league, covering teams, players, and schedules with real-time and historical game data via third-party sports APIs. RESTful endpoints handle teams, players, schedules, and user favorites, with PostgreSQL persisting user preferences and a responsive React and Tailwind UI supporting dynamic schedule filtering and sorting.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    kicker: "Shipped",
    title: "Court Vision",
    description:
      "A WNBA analytics site that traces how the league's game changed from the last ten seasons, with league trends, leaderboards, player profiles and head-to-head comparisons. A scheduled Python pipeline does the analysis ahead of time and publishes checked, versioned JSON, so the React site loads instantly from a CDN and every number on it can be traced back to a box score.",
    technologies: ["Python", "React", "Typescript", "Tailwind", "Github Actions", "Vercel"],
  },
];

export const CONTACT = {
  email: "keyaira118@hotmail.com",
};

export const SOCIALS = {
  linkedin: "www.linkedin.com/in/keyaira-austin-4367691a3/",
  github: "https://github.com/KeyairaA",
};
