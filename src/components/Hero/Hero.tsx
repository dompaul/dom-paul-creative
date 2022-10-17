import cn from "classnames";
import Image from "next/image";
import TypeAnimation from "react-type-animation";

import { Button } from "components/Button";
import { Bubbles } from "components/Bubbles";
import { MediaType } from "models/Media";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <div className={cn(styles["hero"])}>
      <video loop autoPlay muted className={styles["hero__video"]}>
        {/* <source src="/images/bg-video17.webm" type="video/webm" /> */}
        <source src="/images/bg-video17.mp4" type="video/mp4" />
      </video>
      <div className={cn(styles["hero__content"])}>
        <h1 className={cn(styles["hero__title"])}>Hi. I'm Dom!</h1>
        <p className={cn(styles["hero__text"])}>
          Welcome to my website. I am a Web Designer & Developer that has spent
          the last 7 years building exciting digital experiences.
        </p>
        <Button label="Start a Project" link="#contact" modifier="hero" />
      </div>
    </div>
  );
};
