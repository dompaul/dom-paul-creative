import React from "react";
import cn from "classnames";
import Image from "next/image";

import {
  AlignType,
  ColourType,
  LayoutType,
  NavOption,
} from "models/Navigation";
import Logo from "../../../assets/images/logo.webp";
import LogoBlack from "../../../assets/images/logo-black.webp";
import { onScroll } from "components/layout/NavBar";

import styles from "./NavBar.module.scss";

interface NavBarProps {
  options: NavOption[];
  layout?: LayoutType;
  color?: ColourType;
  align?: AlignType;
  naked?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({
  options,
  layout = "horizontal",
  color = "white",
  align = "center",
  naked = false,
}) => {
  const [isActive, setActive] = React.useState<boolean>(false);
  const handleToggle = () => setActive(!isActive);
  const [scrollTop, setScrollTop] = React.useState<boolean>(true);

  React.useEffect(() => {
    window.addEventListener("scroll", () => onScroll(setScrollTop), {
      passive: true,
    });
    () => window.removeEventListener("scroll", () => onScroll(setScrollTop));
  }, []);

  return (
    <>
      <nav
        className={cn(styles["nav-bar"], {
          [styles[`nav-bar--${layout}`]]: layout,
          [styles[`nav-bar--${color}`]]: color,
          [styles[`nav-bar--${align}`]]: align,
          [styles["nav-bar--naked"]]: scrollTop,
        })}
        role="navigation"
        aria-label="navigation"
      >
        <div className={styles["nav-bar__container"]}></div>
        <div className="wrapper wrapper--nav">
          {!isActive && (
            <a href="/" className={styles["nav-bar__logo-link"]}>
              <span className={styles["nav-bar__logo"]}>
                <Image
                  src={scrollTop ? Logo : LogoBlack}
                  width={65}
                  height={35}
                  alt="dpc"
                />
              </span>
            </a>
          )}

          <div
            id="nav-icon3"
            onClick={handleToggle}
            className={isActive ? "open" : null}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={styles["nav-bar__list"]}>
            {options.map(({ label, link }, index) => (
              <li className={styles["nav-bar__item"]} key={index}>
                <a href={link} className={styles["nav-bar__link"]}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={cn(styles["nav-mobile"], {
          [styles["nav-mobile--open"]]: isActive,
        })}
      >
        <ul className={styles["nav-mobile__list"]}>
          {options.map(({ label, link }, index) => (
            <li
              className={styles["nav-mobile__item"]}
              key={index}
              onClick={() => setActive(false)}
            >
              <a
                href={link}
                className={styles["nav-mobile__link"]}
                onClick={() => setActive(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
