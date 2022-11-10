import cn from "classnames";
import { useInView } from "react-intersection-observer";

import { Feature as FeatureModal } from "models/Feature";
import { Button } from "components/Button";
import { Mock } from "components/Mock";

import styles from "./Feature.module.scss";

interface FeatureProps extends FeatureModal {
  inverted?: boolean;
}

export const Feature: React.FC<FeatureProps> = ({
  image,
  link,
  title,
  text,
  inverted,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.03,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={cn(styles["feature"], {
        [styles[`feature--inverted`]]: inverted,
        [styles[`feature--ready`]]: !!inView,
      })}
    >
      <div className={cn(styles["feature__container"])}>
        <div className={cn(styles["feature__text-container"])}>
          <h2 className={cn(styles["feature__title"])}>{title}</h2>
          <p className={cn(styles["feature__text"])}>{text}</p>
          <Button
            modifier="feature"
            label="Visit Website"
            link={link}
            target="_blank"
          />
        </div>
        <div className={cn(styles["feature__image-container"])}>
          <Mock
            modifier={inverted ? "feature-inverted" : "feature"}
            url={image}
            type="image"
          />
        </div>
      </div>
    </div>
  );
};
