import { FC } from "react";
import BulletItem from "../../common/BulletItem";
import TimeOrPlaceItem, {
  TimeOrPlaceItemType,
} from "../../common/TimeOrPlaceItem";
import {
  getActiveResponsibilities,
  getWorkExperience1Config,
} from "./WorkExperience2.config";

type ResponsibilitiesType = {
  project: string;
  description: string;
};

const WorkExperience2: FC = () => {
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
export default WorkExperience2;


const OldResponsibilites: FC = () => {
  return (
    <div className="responsibilities">
      {RESPONSIBILITIES.map((skill: ResponsibilitiesType, idx: number) => (
        <BulletItem
          key={idx}
          item={
            <ResponsibilityItem
              project={skill.project}
              description={skill.description}
            />
          }
        />
      ))}
    </div>
  );
};

const ResponsibilityItem: FC<ResponsibilitiesType> = ({
  project,
  description,
}) => {
  return (
    <span>
      <i>{project}</i> – {description}
    </span>
  );
};

const RESPONSIBILITIES: ResponsibilitiesType[] = [
  {
    project: "RCMii Project",
    description:
      "Rewrote, redesigned and improved performance on an internal web application which allowed users to control and configure how data is displayed on the Vehicle History Report.",
  },
  {
    project: "DIRT Project",
    description:
      "Data In Requirements Tool. Designed, architected, tested and implemented an internal web application for Data Services with a small team using agile principles from the ground up which allowed users to more consistently, more accurately more efficiently (and in less time) set up how incoming data sources are to be processed, transformed and loaded to the Vehicle History Database.",
  },
  {
    project: "Receipt Project",
    description:
      "Designed, architected, tested and implemented an internal web application for Data Services with a small team using agile principles which allowed users to configure and set up and configure incoming data files to uniquely and properly be processed.",
  },
  {
    project: "VHPA Project",
    description:
      "Designed, architected, tested and implemented an internal web application which allowed business analysists to enter data and view adjustments to the Vehicle History Pricing Adjustment model.",
  },
  {
    project: "Cradle to Grave Project",
    description:
      "Designed, architected, tested and implemented an internal RESTful web service to deliver necessary information in a JSON format to our Virginia customers who ultimately consumed the data to display in the Salesforce web application for the end users (Sales team) which enabled CARFAX for the first time to understand basic metrics from specific roof-top location making it easier for the Sales team to identify and troubleshoot data interruptions.",
  },
];
