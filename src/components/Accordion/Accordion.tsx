import React from 'react';
import classNames from 'classnames';
import cn from 'classnames';
import Image from 'next/image';

import { AccordionItem } from 'models/Accordion';

import styles from './Accordion.module.scss';

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [expandedItems, setExpandedItems] = React.useState<number[]>([]);

  const removeItem = (array: number[], value: number) => {
    const copy = [...array];
    const index = copy.indexOf(value);
    if (index > -1) {
      copy.splice(index, 1);
    }
    return copy;
  };

  return (
    <div
      className={cn(styles['accordion'], {
        [styles[className]]: className,
      })}
    >
      <div className={styles['accordion__container']}>
        <div className={styles['accordion__inner-container']}>
          <div className={styles['accordion__questions']}>
            <ul className={styles['accordion__list']}>
              {items.map((item, index) => (
                <li
                  key={index}
                  className={cn(styles['accordion__item'], {
                    [styles['open']]: expandedItems.includes(item.id),
                  })}
                >
                  <div className={styles['accordion__upper-content']}>
                    <h3 className={styles['accordion__item-title']}>
                      {item.title}
                    </h3>
                    <button
                      onClick={() => {
                        const indexOfClicked = expandedItems.indexOf(item.id);
                        if (indexOfClicked > -1) {
                          setExpandedItems([
                            ...removeItem(expandedItems, item.id),
                          ]);
                        } else {
                          setExpandedItems([...expandedItems, item.id]);
                        }
                      }}
                      className={styles['accordion__toggle']}
                    >
                      {!expandedItems.includes(item.id) ? '+' : '-'}
                    </button>
                  </div>
                  <div className={styles['accordion__lower-content']}>
                    <p className={styles['accordion__summary']}>
                      {item.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['accordion__media']}>
            <Image
              src="/images/lorna-image22.jpg"
              layout="fill"
              objectFit="cover"
              alt="Lorna"
            />
            <p className={styles['accordion__media-text']}>
              Questions with Lorna Adams, Co-Founder of Spa Ur Self
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
