import {CheckboxButton} from '@shared/ui-kit/CheckBoxButton';
import {memo, type ChangeEvent, type FC} from 'react';
import type {DefaultTagProps} from '../types';

const DefaultTagComponent: FC<DefaultTagProps> = (props) => {
  const {tag, checked, onClickTag} = props;

  const handleTagClick = (event: ChangeEvent<HTMLInputElement>) => {
    onClickTag(tag, event);
  };

  return <CheckboxButton key={tag.name} text={tag.name} checked={checked} onChange={handleTagClick} />;
};

const DefaultTag = memo(DefaultTagComponent);

export {DefaultTag};
