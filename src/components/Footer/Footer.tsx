import cn from 'classnames';

import { ColourType } from 'models/Navigation';

import styles from './Footer.module.scss';

interface FooterProps {
  text: string;
  color?: ColourType;
}

export const Footer: React.FC<FooterProps> = ({ text, color = 'white' }) => (
  <footer
    className={cn(styles['footer'], {
      [styles['footer--grey']]: color === 'grey',
      [styles['footer--dark']]: color === 'dark',
    })}
  >
    <p className={styles['footer__text']}>{text}</p>
  </footer>
);
