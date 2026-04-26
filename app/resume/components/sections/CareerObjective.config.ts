import { version } from "os";
interface CareerObjectiveConfig {
  title: string;
  versions: Array<{
    id: number;
    name: string;
    description: string;
  }>;
}

const ACTIVE_VERSION = 1;

const objective: CareerObjectiveConfig = {
  title: "Career Objective",
  versions: [
    {
      id: 0,
      name: "experienced",
      description:
        "Senior Front-End Software Engineer with over 10 years of proven leadership with a progressive and diversified technological background. I have a results-driven mentality. I am enthusiastic about learning, teaching, and implementing efficient technologies to make aggressive deadlines consistently achievable. I am passionate about going the extra mile to ensure the customer is unquestionably satisfied with the product or service provided. I am a self-starter with excellent verbal and written communication skills with the ability to interact with business and technical providers. I am able to work on multiple, concurrent projects. I have demonstrated a strong ability to solve problems as well as grasp and adapt new information, technologies and concepts quickly.",
    },
    {
      id: 1,
      name: "leadership",
      description:
        "Senior Front-End Engineer and technical team leader with a career defined by building high-impact products and developing the engineers around me. At Carfax — one of the automotive industry's most recognized data platforms — I've grown from architecting internal tools and APIs to leading cross-functional front-end teams delivering React-based applications used by tens of thousands of dealerships nationwide. Deep expertise across the modern front-end stack: React, TypeScript, Next.js, GraphQL, accessibility (WCAG 2.2), performance optimization, and security. Equally invested in people as in product: I've mentored junior engineers from onboarding through independent ownership, established team-wide coding standards, led company-wide initiatives, and consistently created environments where engineers grow faster and ship with more confidence",
    },
  ],
};

export const getActiveDescription = (version: number): string => {
  const activeVersion =
    objective.versions.find((v) => v.id === version) ||
    objective.versions[ACTIVE_VERSION];
  return activeVersion?.description || "";
};

export default objective;
