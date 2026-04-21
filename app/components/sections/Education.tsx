import { FC } from "react";
import TimeOrPlaceItem, {
  TimeOrPlaceItemType,
} from "../common/TimeOrPlaceItem";

const Education: FC = () => {
  return (
    <div className="section">
      <h3>EDUCATION</h3>
      <p>Bachelor of Science</p>
      <p>Electrical Engineering</p>
      <h4 style={{ marginTop: "8px" }}>Southern Illinois University</h4>
      <TimeOrPlaceItem type={TimeOrPlaceItemType.TIME} item="May 1993" />
      <TimeOrPlaceItem type={TimeOrPlaceItemType.PLACE} item="Carbondale, IL" />
    </div>
  );
};
export default Education;
