import cn from 'classnames';
import Image from 'next/image';

import { Button } from 'components/Button';

import styles from './PromoBanner.module.scss';

type AlignmentType = 'left' | 'center' | 'right';
type ThemeType = 'light' | 'dark';

interface PromoBannerProps {
  image?: string;
  title: string;
  text: string;
  buttonLabel?: string;
  link?: string;
  fullWidth?: boolean;
  alignment?: AlignmentType;
  theme?: ThemeType;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  image,
  title,
  text,
  buttonLabel,
  link,
  fullWidth = false,
  alignment = 'left',
  theme = 'light',
  children,
}) => (
  <div
    className={cn(styles['promo-banner'], {
      [styles['promo-banner--full-width']]: fullWidth,
      [styles[`promo-banner--${alignment}`]]: alignment,
      [styles[`promo-banner--${theme}`]]: theme,
    })}
  >
    {image && (
      <div className={styles['promo-banner__image-container']}>
        <Image src={image} layout="fill" alt={title} />
      </div>
    )}
    <div className={styles['promo-banner__content']}>
      <h2 className={styles['promo-banner__title']}>{title}</h2>
      <p className={styles['promo-banner__summary']}>{text}</p>
      {buttonLabel && link && <Button label={buttonLabel} link="/" />}
      {children}
    </div>
  </div>
);
