import {Modal} from '@shared/ui-kit/Modal';
import {Heading} from '@shared/ui-kit/Heading';
import {useTranslation} from 'react-i18next';
import {defaultCategoriesWithTags} from '@entities/tag';
import {DefaultTags} from './DefaultTags';
import type {FC} from 'react';
import type {TagsModalProps} from '../types';

const TagsModal: FC<TagsModalProps> = (props) => {
  const {...modalProps} = props;
  const {t} = useTranslation('features/pack/tags-modal');

  return (
    <Modal {...modalProps}>
      <Modal.Header>
        <Heading as="h3" weight="bold">
          {t('addTags', {defaultValue: 'Add tags'})}
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <DefaultTags defaultCategoriesWithTags={defaultCategoriesWithTags} />
      </Modal.Body>
    </Modal>
  );
};

export default TagsModal;
