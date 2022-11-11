import React from "react";
import cn from "classnames";

import { InstagramItem } from "components/InstagramItem";
import { Instagram } from "models/Media";

import styles from "./InstagramFeed.module.scss";

interface InstagramFeedProps {
  posts: Instagram[];
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts }) => (
  <div className={cn(styles["instagram-feed"])}>
    <div className={cn(styles["instagram-feed__wrapper"])}>
      <ul className={styles["instagram-feed__list"]}>
        {posts.map(({ media_type, media_url, permalink }, index) => {
          return (
            media_type !== "VIDEO" && (
              <li key={index} className={styles["instagram-feed__list-item"]}>
                <InstagramItem media_url={media_url} permalink={permalink} />
              </li>
            )
          );
        })}
      </ul>
    </div>
  </div>
);
