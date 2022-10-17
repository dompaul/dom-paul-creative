import cn from 'classnames';
import { Service as ServiceProps } from 'models/Service';
import { Service } from 'components/Service';
import Image from 'next/image';

import styles from './ServiceWrapper.module.scss';

interface ServiceWrapperProps {
  services: ServiceProps[];
}

export const ServiceWrapper: React.FC<ServiceWrapperProps> = ({ services }) => {
  return (
    <div className={cn(styles['service-wrapper'], 'widget')}>
      <div className={cn(styles['service-wrapper__container'])}>
        <ul className={cn(styles['service-wrapper__list'])}>
          {services.map(({ icon, title, text }, index) => (
            <li key={index} className={cn(styles['service-wrapper__item'])}>
              <Service icon={icon} title={title} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
