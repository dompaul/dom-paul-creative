import cn from "classnames";
import Image from "next/image";

import { ColourType } from "models/Navigation";
import Logo from "../../assets/images/logo.webp";

import styles from "./Footer.module.scss";

interface FooterProps {
  text: string;
  color?: ColourType;
  phone: string;
  email: string;
  github: string;
  instagram: string;
}

export const Footer: React.FC<FooterProps> = ({
  text,
  color = "white",
  phone,
  email,
  github,
  instagram,
}) => (
  <footer
    className={cn(styles["footer"], {
      [styles["footer--grey"]]: color === "grey",
      [styles["footer--dark"]]: color === "dark",
    })}
  >
    <div className={cn(styles["footer__content"])}>
      <div className={cn(styles["footer__content-wrapper"])}>
        <div className={cn(styles["footer__image-container"])}>
          <Image
            className={cn(styles["footer__image"])}
            src={Logo}
            layout="fill"
            alt="dpc"
          />
        </div>

        <ul className={cn(styles["footer__content-list"])}>
          <li className={cn(styles["footer__content-item"])}>{email}</li>
          <li className={cn(styles["footer__content-item"])}>{phone}</li>
          <li className={cn(styles["footer__content-item"])}>
            <a href={github} target="_blank">
              GitHub
            </a>
          </li>
          <li className={cn(styles["footer__content-item"])}>
            <a href={instagram} target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={cn(styles["footer__main"])}>
      <p className={styles["footer__text"]}>{text}</p>
    </div>
  </footer>
);
