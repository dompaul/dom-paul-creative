import cn from 'classnames';

import styles from './Bubbles.module.scss';

interface BubblesProps {
  limit: number;
}

export const Bubbles: React.FC<BubblesProps> = ({ limit }) => {
  const renderBubbles = () => {
    let nodes = [];
    for (let index = 1; index < limit; index++) {
      nodes.push(
        <div
          key={index}
          className={cn(styles['bubble'], styles[`x${index}`])}
        ></div>,
      );
    }
    return nodes;
  };
  return <div className={styles['background-wrap']}>{renderBubbles()}</div>;
};
