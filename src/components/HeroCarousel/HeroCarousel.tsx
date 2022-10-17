import React from 'react';
import cn from 'classnames';

import { Hero } from 'components/Hero';
import { Controls } from 'components/Controls';
import { Video, Photo, MediaType } from 'models/Media';

import styles from './HeroCarousel.module.scss';

type AlignmentType = 'left' | 'center' | 'right';

interface HeroCarouselProps {
  type: MediaType;
  list: Video[] | Photo[];
  duration?: number;
  controls?: boolean;
  alignment?: AlignmentType;
  classNames?: string;
  split?: boolean;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  list,
  duration = 5000,
  controls = false,
  alignment = 'center',
  classNames = '',
  split = false,
}) => {
  const [counter, setCounter] = React.useState<number>(0);

  const limit = list.length - 1;

  React.useEffect(() => {
    if (controls) return;

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (!controls && counter === list.length) {
      setCounter(0);
    }
  }, [counter, list]);

  const onPrev = () => {
    setCounter((prevCounter: number) => {
      if (prevCounter === 0) return limit;
      return prevCounter - 1;
    });
  };

  const onNext = () => {
    setCounter((prevCounter: number) => {
      if (prevCounter === limit) return 0;
      return prevCounter + 1;
    });
  };

  return (
    <div
      className={cn(styles['hero-carousel'], {
        [styles[`${classNames}`]]: classNames,
      })}
    >
      {controls && (
        <Controls
          className="controls--hero-carousel"
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
      {list.map((item, index) => (
        <Hero
          key={index}
          mediaType={item.type}
          src={item.src}
          title={item.title}
          text={item.summary}
          overlay={true}
          alignment={alignment}
          className="hero--carousel"
          active={index === counter}
          split={split}
        />
      ))}
    </div>
  );
};
