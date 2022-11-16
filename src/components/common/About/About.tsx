import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import styles from "./About.module.scss";

export const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.03,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={cn(styles["about"], {
        [styles[`about--ready`]]: !!inView,
      })}
    >
      <div className={cn(styles["about__wrapper"])}>
        <div className={cn(styles["about__text-container"])}>
          <h2 className={cn(styles["about__text-main"])}>
            Web Designer & Developer in Hertfordshire
          </h2>
          <p className={cn(styles["about__text-about"])}>
            My name is Dom Paul. I am a web designer and developer. I run a
            small web design and development agency in Hertfordshire. I’m
            available for projects, ad hoc website maintenance, or longer-term
            fixed contracts.
          </p>
          <p className={cn(styles["about__text-about"])}>
            I have over 7 years of experience working in industry, with
            experience working on everything from huge web applications to
            smaller bespoke multimedia installations. Outside of the tech world,
            I am a keen adventure photographer.
          </p>
        </div>
        <div className={cn(styles["about__image-container"])}>
          <Image
            className={cn(styles["about__image"])}
            src="/images/me.webp"
            layout="fill"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};
