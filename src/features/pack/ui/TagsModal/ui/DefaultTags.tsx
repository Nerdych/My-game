import {Text} from '@shared/ui-kit/Text';
import styles from '../styles/DefaultTags.module.scss';
import {DefaultTag} from './DefaultTag';
import type {FC} from 'react';
import type {DefaultTagsProps} from '../types';

const DefaultTags: FC<DefaultTagsProps> = (props) => {
  const {defaultCategoriesWithTags, onClickTag, isTagInclude} = props;

  return (
    <ul>
      {defaultCategoriesWithTags.map((category) => (
        <li className={styles.category} key={category.name}>
          <Text className={styles.categoryHeader} as="div" size="large">
            {category.name}
          </Text>

          <div className={styles.categoryTags}>
            {category.tags.map((tag) => (
              <DefaultTag key={tag.name} tag={tag} onClickTag={onClickTag} checked={isTagInclude(tag)} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export {DefaultTags};
