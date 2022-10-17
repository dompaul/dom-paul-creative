import cn from 'classnames';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { Service as ServiceProps } from 'models/Service';

import styles from './Service.module.scss';

export const Service: React.FC<ServiceProps> = ({ icon, title, text }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={cn(styles['service'], {
        [styles[`service--ready`]]: !!inView,
      })}
    >
      <div className={cn(styles['service__container'])}>
        <div className={cn(styles['service__header'])}>
          <span className={cn(styles['service__icon'])}>
            <Image src={icon} width="50px" height="50px" />
          </span>

          <h2 className={cn(styles['service__title'])}>{title}</h2>
        </div>
        <div className={cn(styles['service__body'])}>
          <p className={cn(styles['service__text'])}>{text}</p>
        </div>
      </div>
    </div>
  );
};
