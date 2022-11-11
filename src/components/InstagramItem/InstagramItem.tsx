import React from "react";
import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { Instagram } from "models/Media";
import { Loader } from "components/Loader";

import styles from "./InstagramItem.module.scss";

export const InstagramItem: React.FC<Instagram> = ({
  media_url,
  permalink,
}) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.03,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={cn(styles["instagram-item"], {
        [styles["instagram-item--ready"]]: !!inView,
      })}
    >
      {!isLoaded && (
        <div className={styles["instagram-item__loader-container"]}>
          <Loader />
        </div>
      )}
      <a href={permalink} target="_blank">
        <div className={cn(styles["instagram-item__image-container"])}>
          <Image
            src={media_url}
            width="100"
            height="100"
            layout="responsive"
            alt="insta image"
            unoptimized={true}
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </div>
      </a>
    </div>
  );
};
