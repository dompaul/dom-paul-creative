import cn from 'classnames';
import Image from 'next/image';

import frame from '../../assets/images/browser-frame.svg';

import styles from './Mock.module.scss';

interface MockProps {
  url: string;
  modifier?: string;
  type: string;
}

export const Mock: React.FC<MockProps> = ({ url, modifier, type }) => {
  return (
    <div
      className={cn(styles['mock'], {
        [styles[`mock--${modifier}`]]: modifier,
      })}
    >
      <div className={cn(styles['mock__frame'])}>
        <Image src={frame} />
        {type === 'video' ? (
          <video loop autoPlay muted className={cn(styles['mock__mock'])}>
            <source src={url} type="video/webm" />
          </video>
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)',
            }}
            className={cn(styles['mock__mock-image'])}
          >
            <Image src={url} width="100%" height="100%" layout="responsive" />
          </div>
        )}
      </div>
    </div>
  );
};
