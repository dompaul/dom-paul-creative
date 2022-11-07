import React from "react";
import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import styles from "./InstagramItem.module.scss";

export const InstagramItem: React.FC<any> = ({ url, permalink }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={cn(styles["instagram-item"], {
        [styles["instagram-item--ready"]]: !!inView,
      })}
    >
      <a href={permalink} target="_blank">
        <div className={cn(styles["instagram-item__image-container"])}>
          <Image
            src={url}
            width="100%"
            height="100%"
            layout="responsive"
            alt="insta image"
          />
        </div>
      </a>
    </div>
  );
};
