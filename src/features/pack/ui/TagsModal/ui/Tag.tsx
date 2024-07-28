import {Button} from '@shared/ui-kit/Button';
import {CrossIcon} from '@shared/ui-kit/Icons';
import {useTranslation} from 'react-i18next';
import {Text} from '@shared/ui-kit/Text';
import {Form} from '@shared/ui-kit/Form';
import {withSuspense} from '@shared/lib/hocs/suspense';
import {memo, type FC} from 'react';
import styles from '../styles/Tag.module.scss';
import type {TagProps} from '../types';

const TagComponent: FC<TagProps> = (props) => {
  const {tag, onRemoveTag} = props;
  const {t} = useTranslation('features/pack/tag');

  const handleDeleteTag = () => {
    onRemoveTag(tag);
  };

  const ariaLabelDeleteButton = t('deleteTag', {
    defaultValue: 'Delete tag',
  });

  return (
    <li>
      <Form className={styles.tag}>
        <Text as="span">{tag.name}</Text>
        <Button variant="ghost" size="small" onClick={handleDeleteTag} aria-label={ariaLabelDeleteButton} isSquare>
          <CrossIcon />
        </Button>
      </Form>
    </li>
  );
};

const Tag = memo(withSuspense(TagComponent));

export {Tag};
