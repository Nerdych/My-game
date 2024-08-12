import {PlusIcon} from '@shared/ui-kit/Icons';
import {useTranslation} from 'react-i18next';
import {useInput} from '@shared/lib/hooks/useInput';
import {Tag} from '@entities/tag';
import {TextFieldWithButton} from '@shared/ui-kit/TextFieldWithButton';
import styles from '../styles/TagsList.module.scss';
import {Tag as TagComponent} from './Tag';
import type {FC} from 'react';
import type {TagsListProps} from '../types';

const TagsList: FC<TagsListProps> = (props) => {
  const {tags, onAddTag, onRemoveTag} = props;
  const {t} = useTranslation('features/pack/tags-list');
  const {value, onChange, resetValue} = useInput();

  const handleAddTag = () => {
    const tag = new Tag({name: value});
    onAddTag(tag);
    resetValue();
  };

  const ariaLabelAddButton = t('addTag', {
    defaultValue: 'Add tag',
  });

  const textFieldPlaceholder = t('tagText', {
    defaultValue: 'Tag text',
  });

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {tags.map((tag) => (
          <TagComponent tag={tag} onRemoveTag={onRemoveTag} key={tag.name} />
        ))}

        <li className={styles.form}>
          <TextFieldWithButton
            textFieldProps={{value, onChange, placeholder: textFieldPlaceholder}}
            buttonProps={{onClick: handleAddTag, 'aria-label': ariaLabelAddButton}}
            buttonContent={<PlusIcon />}
          />
        </li>
      </ul>
    </div>
  );
};

export {TagsList};
