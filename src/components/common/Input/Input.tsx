import React from "react";
import cn from "classnames";

import { Label } from "../Label";

import styles from "./Input.module.scss";

export type Type = "number" | "text";

interface InputProps {
  label?: string;
  id: string;
  type: Type;
  placeholder?: string;
  value?: string;
  textArea?: boolean;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  value = "",
  textArea,
  onChange,
  required,
}) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <>
      <div className={cn(styles["input"])}>
        {label && (
          <Label
            htmlFor={id}
            text={label}
            required={required}
            focus={focused}
          />
        )}
        {textArea ? (
          <textarea
            onChange={(event) => onChange(event)}
            onFocus={onFocus}
            placeholder={placeholder}
            id={id}
            value={value}
            onBlur={onBlur}
            className={cn(styles["input__textarea"])}
          />
        ) : (
          <input
            className={cn(styles["input__field"])}
            onChange={(event) => onChange(event)}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            type={type}
            id={id}
            value={value}
          />
        )}
      </div>
    </>
  );
};
