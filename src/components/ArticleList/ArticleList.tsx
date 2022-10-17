import cn from 'classnames';

import { Article as ArticleModel } from 'models/ArticleList';
import { Article } from 'components/Article';

import styles from './ArticleList.module.scss';

export type LayoutType = '5' | '4' | '3' | '2';
type ThemeType = 'light' | 'dark';

interface ArticleListProps {
  list: ArticleModel[];
  layoutType?: LayoutType;
  theme?: ThemeType;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  list,
  layoutType,
  theme = 'light',
}) => (
  <div
    className={cn(styles['article-list'], {
      [styles[`article-list--${layoutType}`]]: layoutType,
      [styles[`article-list--${theme}`]]: theme,
    })}
  >
    <ul className={styles['article-list__list']}>
      {list.map((item, index) => (
        <li key={index} className={styles['article-list__item']}>
          <Article item={item} index={index} theme={theme} />
        </li>
      ))}
    </ul>
  </div>
);
