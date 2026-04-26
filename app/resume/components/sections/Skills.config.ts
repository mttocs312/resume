interface SkillsConfig {
  title: string;
  versions: Array<{
    id: number;
    name: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  }>;
}

const skillsConfig: SkillsConfig = {
  title: "SKILLS",
  versions: [
    {
      id: 0,
      name: "comprehensive",
      categories: [
        {
          name: "Languages",
          items: [
            "HTML/HTML5",
            "CSS/Sass/Less",
            "Java",
            "Javascript",
            "Typescript",
            "Webpack",
          ],
        },
        {
          name: "Frameworks/Libraries",
          items: ["React", "NextJS", "MobX", "NodeJS", "AWS Framework"],
        },
        {
          name: "Testing",
          items: ["Enzyme", "Jest/Jest-Axe", "Ghost Inspector"],
        },
        {
          name: "CI/CD",
          items: ["GIT"],
        },
        {
          name: "Databases",
          items: ["MySQL", "Mongo", "AWS DynamoDB", "AWS Athena"],
        },
        {
          name: "Standards",
          items: ["WCAG", "W3C", "OWASP"],
        },
      ],
    },
    {
      id: 1,
      name: "frontend-focus",
      categories: [
        {
          name: "Languages",
          items: ["HTML/HTML5", "Javascript", "Typescript", "Java"],
        },
        {
          name: "Frameworks/Libraries",
          items: ["React", "NextJS", "Node.js", "MobX"],
        },
        {
          name: "Styling",
          items: [
            "Sass / Less",
            "CSS Modules",
            "Responsive / Mobile First Design",
          ],
        },
        {
          name: "Testing",
          items: [
            "Jest",
            "Jest-Axe",
            "React Testing Library",
            "Enzyme",
            "Ghost Inspector",
            "Playwright",
          ],
        },
        {
          name: "Data Visualization",
          items: ["D3.js", "ApexCharts", "Chart.js"],
        },
        {
          name: "CI/CD & DevOps",
          items: ["Git / GitHub", "Docker (familiar)", "Webpack"],
        },
        {
          name: "Cloud & Databases",
          items: ["AWS (DynamoDB, S3, Lambda)", "MySQL", "MongoDB"],
        },
        {
          name: "Standards & Security",
          items: ["WCAG 2.2", "W3C", "OWASP", "RESTful APIs", "GraphQL"],
        },
        {
          name: "AI-Assisted Dev",
          items: [" GitHub Copilot"],
        },
      ],
    },
    {
      id: 2,
      name: "fullstack-focus",
      categories: [
        {
          name: "Languages",
          items: [
            "HTML/HTML5",
            "CSS/Sass/Less",
            "Java",
            "Javascript",
            "Typescript",
          ],
        },
        {
          name: "Frameworks/Libraries",
          items: ["React", "NextJS", "MobX", "NodeJS"],
        },
        {
          name: "Testing",
          items: ["Jest/Jest-Axe", "Enzyme"],
        },
        {
          name: "Databases",
          items: ["MySQL", "Mongo", "AWS DynamoDB"],
        },
        {
          name: "Cloud/Infrastructure",
          items: ["AWS Framework", "AWS Athena", "GIT"],
        },
        {
          name: "Standards",
          items: ["WCAG", "OWASP"],
        },
      ],
    },
  ],
};

export const getActiveSkills = (version?: number) => {
  const activeVersion = skillsConfig.versions.find((v) => v.id === version);
  return activeVersion?.categories || [];
};

export const getSkillsConfig = () => skillsConfig;

export default skillsConfig;
