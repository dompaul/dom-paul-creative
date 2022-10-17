import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import {
  AlignType,
  ColourType,
  LayoutType,
  NavOption,
} from 'models/Navigation';
import LogoSVG from '../../assets/images/logo.png';
import { SubscriptionCasingOption } from 'models/Subscription/Subscription';

import styles from './SubscriptionCasing.module.scss';

interface SubscriptionCasingProps {
  options: SubscriptionCasingOption[];
}

export const SubscriptionCasing: React.FC<SubscriptionCasingProps> = ({
  options,
}) => {
  return (
    <div className={styles['subscription']}>
      <div className={styles['subscription__container']}>
        <ul className={styles['subscription__list']}>
          {options.map((option, index) => (
            <li key={index} className={styles['subscription__option']}>
              <div className={styles['subscription__option-container']}>
                <div className={styles['subscription__header']}>
                  <h3 className={styles['subscription__option-heading']}>
                    <span
                      className={styles['subscription__option-heading--single']}
                    >
                      Orders of
                    </span>
                    <span
                      className={styles['subscription__option-heading--single']}
                    >
                      {option.title}
                    </span>
                    <span
                      className={styles['subscription__option-heading--single']}
                    >
                      casings
                    </span>
                  </h3>
                </div>
                <div className={styles['subscription__footer']}>
                  <h4 className={cn(styles['subscription__option-title'])}>
                    <span
                      className={styles['subscription__option-title--small']}
                    >
                      At
                    </span>
                    {option.price}
                    <span
                      className={styles['subscription__option-title--small']}
                    >
                      per casing
                    </span>
                  </h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
