import {Text} from '@shared/ui-kit/Text';
import styles from '../styles/TagList.module.scss';
import type {FC} from 'react';
import type {TagListProps} from '../types';

const TagList: FC<TagListProps> = (props) => {
  const {tags} = props;

  return (
    <ul className={styles.root}>
      {tags.map((tag) => (
        <li className={styles.tag} key={tag.name}>
          <Text as="span" size="s">
            {tag.name}
          </Text>
        </li>
      ))}
    </ul>
  );
};

export {TagList};
