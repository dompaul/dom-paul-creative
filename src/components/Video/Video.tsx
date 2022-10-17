import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import YouTube, { YouTubeProps } from 'react-youtube';

import PlaySVG from '../../assets/svgs/play-button.svg';

import styles from './Video.module.scss';

interface VideoProps {
  id: string;
  title: string;
  className?: string;
  setVideo?: Function;
}

export const Video: React.FC<VideoProps> = ({
  id,
  title,
  className,
  setVideo,
}) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.cueVideoById(id);
    if (setVideo) {
      setVideo(event.target);
    }
  };
  // const [playing, setPlaying] = React.useState<boolean>(false);

  // const play = () => {
  //   vidRef.current.play();
  //   setPlaying(true);
  // };

  return (
    <div className={cn(styles['video'], { [styles[className]]: className })}>
      {/* <video ref={vidRef} className={styles['video__player']}>
        <source src={src} type="video/mp4" />
      </video> */}
      <YouTube
        onReady={onPlayerReady}
        iframeClassName={styles['video__player']}
      />
      {/* <iframe className={styles['video__player']} src={src}></iframe> */}
      {/* <button onClick={play} className={styles['video__play-button']}>
        <Image src={PlaySVG} width="160px" objectFit="contain" />
      </button> */}
      {/* <h2 className={styles['video__title']}>{title}</h2> */}
    </div>
  );
};
