import cn from "classnames";

import { Mock } from "components/common/Mock";

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
