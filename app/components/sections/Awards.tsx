import { FC } from "react";
import BulletItem from "../common/BulletItem";

const Awards: FC<{ version: number }> = ({ version }) => {
  if (version === 0) {
    return (
      <div className="section">
        <h3>AWARDS</h3>
        <h4>FY2023 Fox Star</h4>
        <BulletItem item="For going the Extra Mile" />
      </div>
    );
  } else {
    return null;
  }
};
export default Awards;
