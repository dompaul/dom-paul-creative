import cn from "classnames";
import { Feature as FeatureProps } from "models/Feature";
import { Feature } from "components/Feature";

import styles from "./FeatureWrapper.module.scss";

interface FeatureWrapperProps {
  features: FeatureProps[];
}

export const FeatureWrapper: React.FC<FeatureWrapperProps> = ({ features }) => (
  <div className={cn(styles["feature-wrapper"], "widget")}>
    <div className={cn(styles["feature-wrapper__container"])}>
      <ul className={cn(styles["feature-wrapper__list"])}>
        {features.map(({ link, image, title, text }, index) => (
          <li key={index} className={cn(styles["feature-wrapper__item"])}>
            <Feature
              inverted={!!(index % 2)}
              link={link}
              image={image}
              title={title}
              text={text}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
