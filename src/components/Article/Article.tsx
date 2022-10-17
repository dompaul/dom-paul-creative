import classNames from 'classnames';
import cn from 'classnames';

import { Article as ArticleModel } from 'models/ArticleList';

import styles from './Article.module.scss';

interface ArticleProps {
  item: ArticleModel;
  index: number;
  theme?: string;
  className?: string;
}

export const Article: React.FC<ArticleProps> = ({
  item,
  index,
  theme,
  className,
}) => (
  <div
    className={cn(styles['article'], {
      [styles[`article--${theme}`]]: theme,
      [styles[className]]: className,
    })}
    key={index}
  >
    <a href={item.link} className={styles['article__link']}>
      <div className={styles['article__image-container']}></div>
      <div className={styles['article__text-container']}>
        <h3 className={styles['article__title']}>{item.title}</h3>
        <p className={styles['article__summary']}>{item.summary}</p>
        <span className={styles['article__publish']}>{item.publish}</span>
      </div>
    </a>
  </div>
);
