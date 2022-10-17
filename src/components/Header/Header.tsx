import cn from 'classnames';

import { Button } from 'components/Button';

import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
  buttonLabel?: string;
  buttonLink?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  buttonLabel,
  buttonLink,
  className,
}) => (
  <header className={cn(styles['header'], styles[className])}>
    <div className={styles['header__content']}>
      <h2 className={styles['header__title']}>{title}</h2>
      {buttonLabel && buttonLink && (
        <div className={styles['header__button']}>
          <Button
            modifier="header"
            label={buttonLabel}
            link={buttonLink}
            variant="positive"
          />
        </div>
      )}
    </div>
  </header>
);
