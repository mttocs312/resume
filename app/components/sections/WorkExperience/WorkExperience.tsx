import { FC } from "react";
import WorkExperience1 from "./WorkExperience1";
import WorkExperience2 from "./WorkExperience2";

const WorkExperience: FC = () => {
  return (
    <div className="section">
      <h3>WORK EXPERIENCE</h3>
      <WorkExperience1 />
      <br />
      <WorkExperience2 />
    </div>
  );
};
export default WorkExperience;
