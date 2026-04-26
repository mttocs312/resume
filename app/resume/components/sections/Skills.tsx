import { FC } from "react";
import BulletItem from "../common/BulletItem";
import { getActiveSkills, getSkillsConfig } from "./Skills.config";

const Skills: FC<{ version?: number }> = ({ version }) => {
  const config = getSkillsConfig();
  const categories = getActiveSkills(version);

  return (
    <div className="section">
      <h3>{config.title}</h3>

      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h4>{category.name}</h4>
          {category.items.map((item, itemIndex) => (
            <BulletItem key={itemIndex} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Skills;
