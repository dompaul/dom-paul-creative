import cn from "classnames";
import Image from "next/image";

import { Mock } from "components/Mock";

// import frame from "../../assets/images/browser-frame.svg";

import styles from "./Content.module.scss";

export const Content: React.FC = ({ children }) => {
  return (
    <div className={cn(styles["content"])}>
      <Mock type="image" url="/images/spa-ur-self-mock.webp" modifier="home" />
      <div
        className={cn(styles["content__section"], styles["content__wrapper"])}
      >
        {children}
      </div>
    </div>
  );
};
