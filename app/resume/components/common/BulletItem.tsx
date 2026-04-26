import { FC, ReactNode } from "react";
import style from "./BulletItem.module.css";

const BulletItem: FC<{ item: string | ReactNode }> = ({ item }) => {
  return (
    <div className={style.bulletStyle}>
      <p>&#x2022;</p>
      <p className={style.item}>{item}</p>
    </div>
  );
};
export default BulletItem;
