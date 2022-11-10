import cn from "classnames";

import styles from "./Label.module.scss";

interface LabelProps {
  text: string;
  htmlFor: string;
  focus?: boolean;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  focus,
  required,
}) => (
  <label
    htmlFor={htmlFor}
    className={cn(styles["label"], {
      [styles["label--focus"]]: focus,
      [styles["label--required"]]: required,
    })}
  >
    {text}
  </label>
);
