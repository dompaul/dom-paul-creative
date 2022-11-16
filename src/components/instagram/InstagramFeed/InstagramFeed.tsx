import React from "react";
import cn from "classnames";

import { InstagramItem } from "components/instagram/InstagramItem";
import { Photo } from "models/Media";

import styles from "./InstagramFeed.module.scss";

interface InstagramFeedProps {
  posts: Photo[];
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts }) => (
  <div className={cn(styles["instagram-feed"])}>
    <div className={cn(styles["instagram-feed__wrapper"])}>
      <ul className={styles["instagram-feed__list"]}>
        {posts.map(({ title, src, link }, index) => (
          <li key={index} className={styles["instagram-feed__list-item"]}>
            <InstagramItem src={src} link={link} title={title} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
