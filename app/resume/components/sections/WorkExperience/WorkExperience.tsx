import { FC } from "react";
import WorkExperience1 from "./WorkExperience1";
import WorkExperience2 from "./WorkExperience2";

const WorkExperience: FC<{ version: number }> = ({ version }) => {
  return (
    <div className="section">
      <h3>WORK EXPERIENCE</h3>
      <WorkExperience1 version={version} />
      <br />
      <WorkExperience2 version={version} />
    </div>
  );
};
export default WorkExperience;
