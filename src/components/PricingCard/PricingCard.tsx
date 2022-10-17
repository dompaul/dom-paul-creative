import classNames from 'classnames';
import cn from 'classnames';

import { SubscriptionCasingOption } from 'models/Subscription';

import styles from './PricingCard.module.scss';

interface PricingCardProps {
  item: SubscriptionCasingOption;
}

export const PricingCard: React.FC<PricingCardProps> = ({ item }) => (
  <div className={styles['pricing-card']}>
    <div className={styles['pricing-card__option-container']}>
      <div className={styles['pricing-card__header']}>
        <h3 className={styles['pricing-card__option-heading']}>
          <span className={styles['pricing-card__option-heading--single']}>
            Orders of
          </span>
          <span className={styles['pricing-card__option-heading--single']}>
            {item.title}
          </span>
          <span className={styles['pricing-card__option-heading--single']}>
            casings
          </span>
        </h3>
      </div>
      <div className={styles['pricing-card__footer']}>
        <h4 className={cn(styles['pricing-card__option-title'])}>
          {item.price}
          <span className={styles['pricing-card__option-title--small']}>
            per casing
          </span>
        </h4>
      </div>
    </div>
  </div>
);
