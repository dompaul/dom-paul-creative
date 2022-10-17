import cn from 'classnames';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import styles from './PathHeader.module.scss';

interface PathHeaderProps {
  title: string;
  summary: string;
}

export const PathHeader: React.FC<PathHeaderProps> = ({ title, summary }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(styles['path-header'], {
        [styles[`path-header--ready`]]: !!inView,
      })}
    >
      <div className={cn(styles['path-header__container'])}>
        <span className={cn(styles['path-header__path'])}></span>
        <span className={cn(styles['path-header__ball'])}></span>
        <h3 className={cn(styles['path-header__title'])}>
          <span className={cn(styles['path-header__title-gradient'])}>
            {title}
          </span>
        </h3>
        {/* <p className={cn(styles['path-header__summary'])}>{summary}</p> */}
      </div>
    </div>
  );
};
