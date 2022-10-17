import classNames from 'classnames';
import cn from 'classnames';

import styles from './Button.module.scss';

export type Variant = 'primary' | 'positive' | 'negative' | 'warning';

interface ButtonProps {
  label: string;
  link: string;
  variant?: Variant;
  modifier?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  link,
  variant,
  modifier = '',
}) => (
  <a
    className={cn([styles['button']], {
      [styles[`button--${variant}`]]: variant,
      [styles[`button--${modifier}`]]: modifier,
    })}
    href={link}
  >
    {label}
  </a>
);
