import { FC } from "react";
import { getActiveDescription } from "./CareerObjective.config";

const CareerObjective: FC = () => {
  const description = getActiveDescription();

  return (
    <div className="section">
      <h3>CAREER OBJECTIVE</h3>
      <p>{description}</p>
    </div>
  );
};
export default CareerObjective;
