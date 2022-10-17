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
import { PricingOption } from 'models/Pricing';

import styles from './Pricing.module.scss';

interface PricingProps {
  options: PricingOption[];
}

export const Pricing: React.FC<PricingProps> = ({ options }) => {
  return (
    <div className={styles['pricing']}>
      <div className={styles['pricing__container']}>
        <ul className={styles['pricing__list']}>
          {options.map((option, index) => (
            <li key={index} className={styles['pricing__option']}>
              <div className={styles['pricing__option-container']}>
                <div className={styles['pricing__header']}>
                  <img src={option.src} className={styles['pricing__image']} />

                  <h4 className={styles['pricing__option-title']}>
                    {option.title}
                  </h4>
                </div>
                <ul className={styles['pricing__ranges']}>
                  {option.ranges.map((range, rangeIndex) => (
                    <li
                      key={rangeIndex}
                      className={styles['pricing__range-option']}
                    >
                      <span className={styles['pricing__range-name']}>
                        {range.name}
                      </span>
                      <span className={styles['pricing__range-price']}>
                        {range.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
