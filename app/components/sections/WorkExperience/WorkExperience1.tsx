import { FC } from "react";
import BulletItem from "../../common/BulletItem";
import TimeOrPlaceItem, {
  TimeOrPlaceItemType,
} from "../../common/TimeOrPlaceItem";
import {
  getActiveResponsibilities,
  getWorkExperience1Config,
} from "./WorkExperience1.config";

const WorkExperience1: FC = () => {
  const config = getWorkExperience1Config();
  const responsibilities = getActiveResponsibilities();

  return (
    <div>
      <div className="title">{config.title}</div>
      <div className="text-highlight">{config.company}</div>

      <div className="work-experience-detail">
        <TimeOrPlaceItem type={TimeOrPlaceItemType.TIME} item={config.time} />
        <TimeOrPlaceItem
          type={TimeOrPlaceItemType.PLACE}
          item={config.location}
        />
      </div>

      <div className="responsibilities">
        {responsibilities.map((skill: string, idx: number) => (
          <BulletItem key={idx} item={skill} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience1;
