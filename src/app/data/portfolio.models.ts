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
  exploring: string;
  clients: string[];
  industries: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export type ExpertiseIcon =
  'integration' | 'distributed' | 'performance' | 'fullstack' | 'cloud' | 'leadership';

export interface Expertise {
  icon: ExpertiseIcon;
  title: string;
  description: string;
  tools: string[];
}

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  impact: Stat[];
  highlights: string[];
  stack: string[];
}

export interface Principle {
  title: string;
  body: string;
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
  /** How the system works, in order. */
  steps: string[];
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
