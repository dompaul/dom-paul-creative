import React from 'react';
import classNames from 'classnames';
import cn from 'classnames';
import Image from 'next/image';

import { Playlist } from 'models/Playlist';

import styles from './PlaylistItem.module.scss';

interface PlaylistItemProps {
  item: Playlist;
  className?: string;
  selected: boolean;
}

export const PlaylistItem: React.FC<PlaylistItemProps> = ({
  item,
  className,
  selected,
}) => {
  return (
    <div
      className={cn(styles['playlist-item'], {
        [styles['playlist-item--selected']]: selected,
        [styles[className]]: className,
      })}
    >
      <div className={styles['playlist-item__container']}>
        <div className={styles['playlist-item__image-container']}>
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles['playlist-item__text-container']}>
          {!selected && (
            <Image
              width="70px"
              height="70px"
              src={'/images/play.png'}
              alt="play"
              className={styles['playlist-item__play']}
            />
          )}

          <h3 className={styles['playlist-item__title']}>{item.title}</h3>
        </div>
      </div>
    </div>
  );
};
