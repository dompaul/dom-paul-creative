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
import { SubscriptionOption } from 'models/Subscription/Subscription';

import styles from './Subscription.module.scss';

interface SubscriptionProps {
  options: SubscriptionOption[];
}

export const Subscription: React.FC<SubscriptionProps> = ({ options }) => {
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
                      tablets
                    </span>
                  </h3>
                </div>
                {/* <div className={styles['subscription__discount-box']}>
                  <h4 className={styles['subscription__discount']}>
                    {option.discount}
                  </h4>
                </div> */}
                <div className={styles['subscription__footer']}>
                  <h4 className={styles['subscription__option-title']}>
                    <span
                      className={styles['subscription__option-title--small']}
                    >
                      {option.secondaryText}
                    </span>
                    {option.secondaryPrice}
                    <span
                      className={styles['subscription__option-title--small']}
                    >
                      per tablet
                    </span>
                  </h4>

                  <h4 className={cn(styles['subscription__option-title'])}>
                    <span
                      className={styles['subscription__option-title--small']}
                    >
                      {option.priceText}
                    </span>
                    {option.price}
                    <span
                      className={styles['subscription__option-title--small']}
                    >
                      per tablet
                    </span>
                  </h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles['subscription__info']}>
          Subscriptions are available Weekly, Fortnightly, Monthly, Quarterly &
          Annually
        </p>
      </div>
    </div>
  );
};
