interface WorkExperienceConfig {
  title: string;
  company: string;
  location: string;
  time: string;
  versions: Array<{
    id: number;
    name: string;
    items: string[];
  }>;
}

const workExperience1Config: WorkExperienceConfig = {
  title: "Senior Front-End Engineer",
  company: "Carfax, Inc.",
  location: "Columbia, MO",
  time: "August 2016 - Present",
  versions: [
    {
      id: 0,
      name: "comprehensive",
      items: [
        "Collaborated closely with developers, architects, cloud engineers, support teams, security teams to develop, design and test scalable, efficient and maintainable dealer-focused web application using React, MobX, Typescript, CSS for mobile, tablet and desktop layouts.",
        "Optimized and enhanced user experience by implementing, measuring, monitoring and analyzing performance metrics insights provided by Adobe Analytics, Google Analytics and New Relic.",
        "Collaborated with developers, architects, cloud engineers to develop and integrate web services using REST and GraphQL",
        "Mentored 4 new junior front-end developers, enabling them to expand skillset and achieve professional growth and personal goals.",
        "Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours.",
        "Led front-end fit and finish, from pixel perfect layouts to animations, ensuring a polished experience is delivered to our customers.",
        "Integrated several chart libraries such as Apexcharts.js, D3, chart.js to illustrate dealership trending performance and return value in graphic form.",
        "Led the web content accessibility corporate-wide initiative to analyze, convert and ensure all front-end components adhere to the WCAG 2.2 standards.",
        "Contributed to the ideation, concept development, and implementation of visual design concepts.",
        "Introduced a content management system (Contentful) that allows non-technical users to create, manage and publish digital web content without the need to deploy code changes resulting in a much smoother, quicker release schedule.",
        "Volunteered as Security officer to analyze, assess and correct dealer-facing web application vulnerabilities by adhering to Open Web Application Security Project (OWASP) standards.",
      ],
    },
    {
      id: 1,
      name: "ai-focus",
      items: [
        "Engineered and maintained the primary dealer-facing web platform serving ~40,000 automotive dealerships nationwide, using React, TypeScript, Next.js, and MobX across mobile, tablet, and desktop — sustaining 99.9%+ uptime across all form factors",
        "Led a company-wide WCAG 2.2 accessibility initiative, auditing and remediating 100+ front-end components and integrating Jest-Axe into CI pipelines — achieving full compliance and eliminating accessibility-related support escalations.",
        "Modernized the testing strategy by migrating from Enzyme to React Testing Library and introducing Playwright for E2E coverage — reducing post-release UI defect rate by an estimated 30% and cutting regression testing time by ~50%.",
        "Introduced Contentful headless CMS, enabling non-technical teams to publish content without engineering involvement — cutting content-related deployments by ~40% and reducing time-to-publish from days to hours.",
        "Built interactive data visualization dashboards using D3.js, ApexCharts, and Chart.js to surface dealership performance trends and ROI — replacing static monthly reports and enabling self-serve analysis for dealer account managers.",
        "Instrumented front-end performance monitoring via Adobe Analytics, Google Analytics, and New Relic, identifying and resolving key bottlenecks — improving average page load time by ~25% across high-traffic dealer workflows.",
        "Architected REST and GraphQL API integrations with backend and cloud teams, defining clean client-server contracts — reducing data over-fetching by ~35% and improving perceived load performance on data-heavy views.",
        "Volunteered as front-end Security Officer, assessing and remediating XSS, CSRF, and dependency vulnerabilities per OWASP standards — resolving all critical findings within sprint cycles with zero security incidents during tenure.",
        "Served as technical lead for the dealer-facing front-end team, driving sprint planning, architectural decision-making, and cross-functional coordination with product, design, backend, and QA — ensuring consistent on-time delivery across concurrent feature tracks with no degradation in code quality.",
        "Built and ran a structured mentorship program for 4 junior front-end engineers — including onboarding plans, weekly 1:1s, code review cadences, and progressive project ownership assignments — all 4 advanced to independent feature ownership within 12 months, materially reducing senior engineer bottlenecks and increasing team throughput.",
        "Established and enforced front-end coding standards, component architecture guidelines, and pull request review practices adopted across the engineering organization — reducing onboarding ramp time for new hires and cutting code review cycle time by an estimated 30%.",
        "Partnered with UX/design to translate Figma specs into production-ready components, establishing design-to-engineering handoff conventions — reducing revision cycles by an estimated 2 rounds per feature.",
        "Received FY2023 Fox Star Award recognizing exceptional contributions and a consistent pattern of going above and beyond team expectations.",
      ],
    },
    {
      id: 2,
      name: "leadership-focus",
      items: [
        "Mentored 4 junior front-end developers, facilitating their professional growth and skill development.",
        "Collaborated cross-functionally with architects, cloud engineers, support, and security teams.",
        "Led quality assurance processes ensuring timely resolution of issues within 48 hours.",
        "Directed front-end fit and finish including pixel-perfect layouts and animations.",
        "Contributed to visual design concepts and implementation.",
        "Established corporate-wide accessibility standards and conversion processes.",
      ],
    },

    {
      id: 3,
      name: "technical-focus",
      items: [
        "Developed scalable dealer-focused web applications using React, MobX, TypeScript, and CSS for responsive mobile, tablet, and desktop layouts.",
        "Optimized user experience through performance monitoring with Adobe Analytics, Google Analytics, and New Relic.",
        "Integrated REST and GraphQL web services in collaboration with development and cloud engineering teams.",
        "Led front-end accessibility initiative ensuring WCAG 2.2 compliance across all components.",
        "Implemented chart libraries (ApexCharts.js, D3, Chart.js) for data visualization of dealership performance metrics.",
        "Introduced Contentful CMS for non-technical content management and faster release cycles.",
        "Conducted security assessments and vulnerability corrections following OWASP standards.",
      ],
    },
  ],
};

export const getActiveResponsibilities = (version: number | null): string[] => {
  const activeVersion = workExperience1Config.versions.find(
    (v) => v.id === version,
  );
  return activeVersion?.items || [];
};

export const getWorkExperience1Config = () => workExperience1Config;

export default workExperience1Config;
