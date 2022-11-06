import React from "react";
import cn from "classnames";

import { Button } from "components/Button";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const onScroll = React.useCallback(() => {
    const { pageYOffset } = window;
    if (pageYOffset > 0) {
      videoRef.current.pause();
      return;
    } else if (pageYOffset === 0) {
      videoRef.current.play();
      return;
    }
    return;
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak
    () => window.removeEventListener("scroll", onScroll);
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
        <Button label="Get in Touch" link="#contact" modifier="hero" />
      </div>
    </div>
  );
};
