import { Component, inject } from '@angular/core';
import { Seo } from '../../core/seo';
import { profile } from '../../data/portfolio.data';
import { AboutSection } from './sections/about';
import { ApproachSection } from './sections/approach';
import { ContactSection } from './sections/contact';
import { ExperienceSection } from './sections/experience';
import { ExpertiseSection } from './sections/expertise';
import { HeroSection } from './sections/hero';
import { ProjectsSection } from './sections/projects';
import { SkillsSection } from './sections/skills';
import { WorkSection } from './sections/work';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    ExpertiseSection,
    WorkSection,
    ApproachSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
    AboutSection,
    ContactSection,
  ],
  template: `
    <app-hero />
    <app-expertise />
    <app-work />
    <app-approach />
    <app-experience />
    <app-projects />
    <app-skills />
    <app-about />
    <app-contact />
  `,
})
export class Home {
  constructor() {
    inject(Seo).set(
      `${profile.name} — ${profile.role}`,
      `${profile.name} is a ${profile.role} in ${profile.location} building enterprise sales and distribution systems with .NET, Angular and Azure.`,
    );
  }
}
