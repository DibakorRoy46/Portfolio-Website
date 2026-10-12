export interface Profile {
  name: string;
  initials: string;
  role: string;
  focus: string[];
  tagline: string;
  location: string;
  timezone: string;
  email: string;
  github: string;
  linkedin: string;
  /** Path to the resume PDF in /public. Leave empty to hide the resume button. */
  resumeUrl: string;
  /** Path to a portrait in /public. Leave empty to hide the photo. */
  photoUrl: string;
  about: string[];
  now: string;
  clients: string[];
  industries: string[];
  /** How I work with a team, shown in the About section. */
  workingStyle: Note[];
  /** Conversation starters shown above the contact panel. */
  topics: Note[];
}

export interface Stat {
  value: string;
  label: string;
}

export type ExpertiseIcon =
  'integration' | 'distributed' | 'performance' | 'fullstack' | 'cloud' | 'leadership';

/** A link to a project page on this site. */
export interface RelatedLink {
  label: string;
  path: string;
}

export interface Expertise {
  icon: ExpertiseIcon;
  title: string;
  description: string;
  tools: string[];
  /** One result that backs the claim, and the project it comes from. */
  proof: Stat;
  related?: RelatedLink;
}

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  /** First and last month as YYYY-MM; no end means the role is current. */
  start: string;
  end?: string;
  summary: string;
  impact: Stat[];
  highlights: string[];
  stack: string[];
  projects: RelatedLink[];
}

export interface Principle {
  title: string;
  body: string;
  /** Where the principle shows up in real work. */
  example: string;
  related: RelatedLink;
}

export interface Milestone {
  when: string;
  title: string;
  detail: string;
}

export interface Note {
  title: string;
  body: string;
}

/** One row of an architecture diagram, from the user-facing side down to data. */
export interface Layer {
  label: string;
  nodes: string[];
}

/** An image in /public shown in a project's gallery. */
export interface Screenshot {
  src: string;
  /** Pixel size of the file, so the browser can reserve the space. */
  width: number;
  height: number;
  alt: string;
  caption: string;
}

/** A screen recording in /public shown on a project's page. */
export interface Video {
  src: string;
  title: string;
  caption: string;
  /** Still image shown before the video plays. */
  poster?: string;
}

/** A design decision: what was chosen, why, and what it costs. */
export interface Decision {
  title: string;
  chose: string;
  why: string;
  tradeOff: string;
}

/** A client case study or a personal project. Both render on the same detail page. */
export interface Project {
  slug: string;
  title: string;
  /** Client or domain for client work; the kind of project for personal work. */
  context: string;
  summary: string;
  problem: string;
  role: string;
  contributions: string[];
  engineering: Note[];
  /** Simplified architecture, drawn as a diagram on the detail page. */
  architecture: Layer[];
  /** How the system works, in order. */
  steps: string[];
  /** Real screenshots or diagrams. The gallery appears once this has entries. */
  screenshots?: Screenshot[];
  /** Real screen recordings of the running application. */
  videos?: Video[];
  /** Design decisions with their trade-offs, for the deeper case studies. */
  decisions?: Decision[];
  /** What the system deliberately does not do, or does not do yet. */
  limits?: string[];
  stack: string[];
  metrics: Stat[];
  repo?: string;
  inProgress?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  result: string;
}
