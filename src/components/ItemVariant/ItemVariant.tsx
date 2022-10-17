import React from 'react';
import classNames from 'classnames';
import cn from 'classnames';
import Image from 'next/image';

import { Item } from 'models/ItemVariant';

import styles from './ItemVariant.module.scss';

interface ItemVariantProps {
  items: Item[];
  startIndex: number;
  className?: string;
  flip?: boolean;
}

export const ItemVariant: React.FC<ItemVariantProps> = ({
  items,
  startIndex,
  className,
  flip,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(
    startIndex,
  );
  return (
    <div
      className={cn(styles['item-variant'], {
        [styles[className]]: className,
        [styles['item-variant--flip']]: flip,
      })}
    >
      <div className={styles['item-variant__container']}>
        <div className={cn(styles['item-variant__outer-wrapper'])}>
          <div className={cn(styles['item-variant__wrapper'])}>
            <div className={styles['item-variant__summary']}>
              <h3 className={styles['item-variant__item-name']}>
                {items[selectedItemIndex].name}
              </h3>
              {items[selectedItemIndex].colour && (
                <p className={styles['item-variant__item-summary']}>
                  <strong>Colour: </strong>
                  {items[selectedItemIndex].colour}
                </p>
              )}
              {items[selectedItemIndex].fragrence && (
                <p className={styles['item-variant__item-summary']}>
                  <strong>Fragrance: </strong>
                  {items[selectedItemIndex].fragrence}
                </p>
              )}
              <p className={styles['item-variant__item-summary']}>
                {items[selectedItemIndex].summary}
              </p>
            </div>

            <ul className={styles['item-variant__variants']}>
              {items.map((item, index) => (
                <li
                  key={index}
                  className={styles['item-variant__variant-item']}
                >
                  <button
                    onClick={() => setSelectedItemIndex(index)}
                    disabled={index === selectedItemIndex}
                  >
                    <Image
                      src={items[index].src}
                      alt={items[index].name}
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles['item-variant__item']}>
              <Image
                src={items[selectedItemIndex].src}
                alt={items[selectedItemIndex].name}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
