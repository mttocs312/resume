import { FC } from "react";
import { getActiveDescription } from "./CareerObjective.config";

const CareerObjective: FC<{ version: number }> = ({ version }) => {
  const description = getActiveDescription(version);

  return (
    <div className="section">
      <h3>CAREER OBJECTIVE</h3>
      <p>{description}</p>
    </div>
  );
};
export default CareerObjective;
