import React from "react";
import cn from "classnames";

import { onScroll } from "components/Hero";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => onScroll(videoRef), {
      passive: true,
    });
    () => window.removeEventListener("scroll", () => onScroll(videoRef));
  }, []);

  return (
    <div className={cn(styles["hero"])}>
      <video
        ref={videoRef}
        loop
        autoPlay
        playsInline
        muted
        className={styles["hero__video"]}
      >
        <source src="/videos/background-video.webm" type="video/webm" />
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>
      <div className={cn(styles["hero__content"])}>
        <h1 className={cn(styles["hero__title"])}>Hi. I'm Dom!</h1>
        <p className={cn(styles["hero__text"])}>
          Welcome to my website. I am a Web Designer & Developer that has spent
          the last 7 years building exciting digital experiences.
        </p>
      </div>
    </div>
  );
};
