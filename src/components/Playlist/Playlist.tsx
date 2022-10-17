import React from 'react';
import classNames from 'classnames';
import cn from 'classnames';
import Image from 'next/image';

import { Playlist as PlaylistModel } from 'models/Playlist';
import { Video } from 'components/Video';
import { PlaylistItem } from 'components/PlaylistItem';

import styles from './Playlist.module.scss';

interface PlaylistProps {
  items: PlaylistModel[];
  startIndex: number;
  className?: string;
}

export const Playlist: React.FC<PlaylistProps> = ({
  items,
  startIndex,
  className,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(
    startIndex,
  );
  const handleClick = (index: number) => {
    setSelectedItemIndex(index);
    if (video) {
      video.loadVideoById(items[index].src);
    }
  };
  const [video, setVideo] = React.useState(null);
  return (
    <div
      className={cn(styles['playlist'], {
        [styles[className]]: className,
      })}
    >
      <div className={styles['playlist__container']}>
        <div className={styles['playlist__inner-container']}>
          <div className={styles['playlist__item']}>
            <Video
              id={items[selectedItemIndex].src}
              title={items[selectedItemIndex].title}
              className="video--playlist"
              setVideo={setVideo}
            />
          </div>
          <ul className={styles['playlist__list']}>
            {items.map((item, index) => (
              <li key={index} className={cn(styles['playlist__list-item'])}>
                <button
                  className={styles['playlist__list-item-button']}
                  onClick={() => handleClick(index)}
                >
                  <PlaylistItem
                    selected={selectedItemIndex === index}
                    item={item}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
