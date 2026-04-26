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
  title: "System Developer",
  company: "Carfax, Inc.",
  location: "Columbia, MO",
  time: "May 2006 - August 2016",
  versions: [
    {
      id: 0,
      name: "comprehensive",
      items: [
        "Led small agile project teams across 4 full-cycle internal application builds — coordinating work across junior developers, QA, architects, and business stakeholders from requirements through production release — delivering all projects on schedule and establishing a reputation for dependable cross-functional leadership.",
        "Took on informal technical lead responsibilities within the Data Services team — reviewing junior developer code, guiding architectural decisions, and serving as a go-to resource for front-end questions — accelerating the growth of less experienced teammates and raising overall team code quality.",
        "Engineered responsive, component-based UIs using JavaScript, HTML5, and CSS3, applying progressive enhancement and cross-browser compatibility standards — reducing reported UI defects by an estimated 40% compared to prior tooling and setting a quality bar the team adopted going forward.",
        "Designed and implemented RESTful JSON APIs connecting front-end applications to backend data pipelines and third-party platforms including Salesforce — enabling real-time data access for sales and operations teams that previously relied on static exports and manual reporting.",
        "Replaced manual, spreadsheet-driven analyst workflows with interactive web applications featuring dynamic data entry, real-time validation, and instant visual feedback — cutting task completion time by an estimated 60% and eliminating a significant source of manual entry errors.",
        "Applied relational and document database patterns (MySQL, MongoDB) to architect data models supporting complex querying and high-volume ingestion pipelines — improving Vehicle History Database processing reliability and reducing failed ingestion events.",
      ],
    },
  ],
};

export const getActiveResponsibilities = (version: number): string[] => {
  const activeVersion =
    workExperience1Config.versions.find((v) => v.id === version) ||
    workExperience1Config.versions[0];
  return activeVersion?.items || [];
};

export const getWorkExperience1Config = () => workExperience1Config;

export default workExperience1Config;
