import React, { ReactNode } from 'react';
import cn from 'classnames';

import { animate, isActive } from 'utils/Animate';
import { Controls } from 'components/Controls';

import styles from './Slider.module.scss';

interface SliderProps {
  items: ReactNode[];
  itemsPerSlide?: number;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  items,
  itemsPerSlide = 4,
  className,
}) => {
  const listRef = React.useRef<HTMLUListElement>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);
  const [localItemsPerSlide, setLocalItemsPerSlide] = React.useState(
    itemsPerSlide,
  );
  const [slideIndex, setSlideIndex] = React.useState<number>(
    localItemsPerSlide,
  );

  const percentage = 100 / localItemsPerSlide;
  const maxNumberOfItems = items.length;
  const defaultSlide = localItemsPerSlide;

  const isPrevDisabled = slideIndex === localItemsPerSlide;
  const isNextDisabled = slideIndex === maxNumberOfItems;

  const onPrev = () => {
    const itemsToScroll = slideIndex - localItemsPerSlide;

    if (itemsToScroll < localItemsPerSlide) {
      animate(listRef);
      setSlideIndex(defaultSlide);
      return;
    }

    const scroll =
      percentage * (slideIndex - localItemsPerSlide - defaultSlide);
    animate(listRef, `-${scroll}%`);
    setSlideIndex(slideIndex - localItemsPerSlide);
  };

  const onNext = () => {
    const itemsToScroll = maxNumberOfItems - slideIndex;

    if (itemsToScroll < localItemsPerSlide) {
      const scroll = percentage * (maxNumberOfItems - localItemsPerSlide);
      animate(listRef, `-${scroll}%`);
      setSlideIndex(slideIndex + itemsToScroll);
      return;
    }

    const scroll = percentage * slideIndex;
    animate(listRef, `-${scroll}%`);
    setSlideIndex(slideIndex + localItemsPerSlide);
  };

  const handleWindowResize = () => {
    if (window.innerWidth <= 800) {
      setLocalItemsPerSlide(2);
      setSlideIndex(2);
    } else if (window.innerWidth <= 1100) {
      setLocalItemsPerSlide(3);
      setSlideIndex(3);
    } else if (window.innerWidth > 1100) {
      setLocalItemsPerSlide(itemsPerSlide);
      setSlideIndex(itemsPerSlide);
    }
    animate(listRef);
    return;
  };

  React.useEffect(() => {
    if (isReady) {
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, [isReady]);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && !isReady) {
      let localSlideValue = itemsPerSlide;
      if (window.innerWidth <= 800) {
        localSlideValue = 2;
      } else if (window.innerWidth <= 1100) {
        localSlideValue = 3;
      }
      setIsReady(true);
      setLocalItemsPerSlide(localSlideValue);
      setSlideIndex(localSlideValue);
    }
  }, []);

  return (
    <div className={styles['slider']}>
      <Controls
        className="controls--slider"
        onPrev={onPrev}
        onNext={onNext}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
      />
      <div className={cn(styles['slider__wrapper'])}>
        <ul ref={listRef} className={cn(styles['slider__list'])}>
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(styles['slider__item'], {
                [styles[
                  `slider__item--${localItemsPerSlide}`
                ]]: localItemsPerSlide,
                [styles[`slider__item--active`]]: isActive(
                  localItemsPerSlide,
                  slideIndex,
                  index + 1,
                ),
              })}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
