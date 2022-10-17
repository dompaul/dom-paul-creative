import cn from 'classnames';
import Image from 'next/image';

import styles from './HeroBanner.module.scss';

type ThemeType = 'light' | 'dark';

interface SocialBannerProps {
  image?: string;
  title: string;
  text: string;
  theme?: ThemeType;
}

export const SocialBanner: React.FC<SocialBannerProps> = ({
  image,
  title,
  text,
  theme = 'light',
}) => (
  <div
    className={cn(styles['social-banner'], {
      [styles[`social-banner--${theme}`]]: theme,
    })}
  >
    {image && (
      <div className={styles['social-banner__image-container']}>
        <Image src={image} layout="fill" alt={title} />
      </div>
    )}
    <div className={styles['social-banner__content']}>
      <h2 className={styles['social-banner__title']}>{title}</h2>
      <p className={styles['social-banner__summary']}>{text}</p>
    </div>
  </div>
);
