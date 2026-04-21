import { FC } from "react";
import BulletItem from "../common/BulletItem";

const Skills: FC = () => {
  return (
    <div className="section">
      <h3>SKILLS</h3>

      <h4>Languages</h4>
      <BulletItem item="HTML/HTML5" />
      <BulletItem item="CSS/Sass/Less" />
      <BulletItem item="Java" />
      <BulletItem item="Javascript" />
      <BulletItem item="Typescript" />
      <BulletItem item="Webpack" />

      <h4>Frameworks/Libraries</h4>
      <BulletItem item="React" />
      <BulletItem item="NextJS" />
      <BulletItem item="MobX" />
      <BulletItem item="NodeJS" />
      <BulletItem item="AWS Framework" />

      <h4>Testing</h4>
      <BulletItem item="Enzyme" />
      <BulletItem item="Jest/Jest-Axe" />
      <BulletItem item="Ghost Inspector" />

      <h4>CI/CD</h4>
      <BulletItem item="GIT" />

      <h4>Databases</h4>
      <BulletItem item="MySQL" />
      <BulletItem item="Mongo" />
      <BulletItem item="AWS DynamoDB" />
      <BulletItem item="AWS Athena" />

      <h4>Standards</h4>
      <BulletItem item="WCAG" />
      <BulletItem item="W3C" />
      <BulletItem item="OWASP" />
    </div>
  );
};
export default Skills;
