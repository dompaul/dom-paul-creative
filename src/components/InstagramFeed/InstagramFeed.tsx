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
        {posts.map((item, index) => {
          return (
            item.media_type !== "VIDEO" && (
              <li key={index}>
                <InstagramItem
                  url={item.media_url}
                  permalink={item.permalink}
                />
              </li>
            )
          );
        })}
      </ul>
    </div>
  </div>
);
