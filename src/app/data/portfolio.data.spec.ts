import {
  caseStudies,
  coreSkills,
  experience,
  expertise,
  principles,
  sideProjects,
  skills,
} from './portfolio.data';

// The content file is edited by hand, so these tests guard the things a typo
// would silently break: page addresses, internal links and highlighted skills.

const projectPaths = new Set([
  ...caseStudies.map((project) => `/work/${project.slug}`),
  ...sideProjects.map((project) => `/projects/${project.slug}`),
]);

describe('portfolio content', () => {
  it('gives every project a unique, URL-safe slug', () => {
    const slugs = [...caseStudies, ...sideProjects].map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('gives every project the sections its page renders', () => {
    for (const project of [...caseStudies, ...sideProjects]) {
      expect(project.contributions.length, project.slug).toBeGreaterThan(0);
      expect(project.engineering.length, project.slug).toBeGreaterThan(0);
      expect(project.architecture.length, project.slug).toBeGreaterThan(1);
      expect(project.steps.length, project.slug).toBeGreaterThan(0);
    }
  });

  it('keeps the node labels unique within each architecture layer', () => {
    for (const project of [...caseStudies, ...sideProjects]) {
      for (const layer of project.architecture) {
        expect(new Set(layer.nodes).size, `${project.slug} / ${layer.label}`).toBe(
          layer.nodes.length,
        );
      }
    }
  });

  it('points every internal link at a project that exists', () => {
    const links = [
      ...expertise.flatMap((area) => (area.related ? [area.related] : [])),
      ...principles.map((principle) => principle.related),
      ...experience.flatMap((role) => role.projects),
    ];

    for (const link of links) {
      expect(projectPaths.has(link.path), link.path).toBe(true);
    }
  });

  it('highlights only skills that are listed', () => {
    const listed = new Set(skills.flatMap((group) => group.items));

    for (const skill of coreSkills) {
      expect(listed.has(skill), skill).toBe(true);
    }
  });

  it('gives every screenshot a size and a description', () => {
    const screenshots = [...caseStudies, ...sideProjects].flatMap(
      (project) => project.screenshots ?? [],
    );

    for (const shot of screenshots) {
      expect(shot.width, shot.src).toBeGreaterThan(0);
      expect(shot.height, shot.src).toBeGreaterThan(0);
      expect(shot.alt.length, shot.src).toBeGreaterThan(0);
    }
  });
});
