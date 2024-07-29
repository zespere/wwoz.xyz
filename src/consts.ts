import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Wojciech Woźniak",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const LINKS: Metadata = {
  TITLE: "Links",
  DESCRIPTION: "Interesting stuff.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter - x",
    HREF: "https://x.com/wojciech_jestem",
  },
  {
    NAME: "github",
    HREF: "https://github.com/zespere",
  },
  {
    NAME: "youtube",
    HREF: "https://www.youtube.com/@Wojciech-Wozniak",
  },
];
