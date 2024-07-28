import {Modal} from '@shared/ui-kit/Modal';
import {Heading} from '@shared/ui-kit/Heading';
import {useTranslation} from 'react-i18next';
import {defaultCategoriesWithTags} from '@entities/tag';

import {Button} from '@shared/ui-kit/Button';
import styles from '../styles/TagsModal.module.scss';
import {useTagsModal} from '../hooks/useTagsModal';
import {DefaultTags} from './DefaultTags';
import {TagsList} from './TagsList';
import type {FC} from 'react';
import type {TagsModalProps} from '../types';

const TagsModal: FC<TagsModalProps> = (props) => {
  const {close, ...modalProps} = props;
  const {t} = useTranslation('features/pack/tags-modal');

  const {tags, onAddTag, onRemoveTag, onClickTag, isTagInclude} = useTagsModal();

  const closeModal = () => {
    close(tags);
  };

  const title = t('addTags', {defaultValue: 'Add tags'});
  const save = t('save', {defaultValue: 'Save'});

  return (
    <fieldset className={styles.root}>
      <Modal {...modalProps} className={styles.modal} close={close}>
        <Modal.Header>
          <legend>
            <Heading as="h2" weight="bold">
              {title}
            </Heading>
          </legend>
        </Modal.Header>

        <Modal.Body>
          <TagsList tags={tags} onAddTag={onAddTag} onRemoveTag={onRemoveTag} />
          <DefaultTags
            defaultCategoriesWithTags={defaultCategoriesWithTags}
            onClickTag={onClickTag}
            isTagInclude={isTagInclude}
          />
        </Modal.Body>

        <Modal.Footer className={styles.footer}>
          <Button onClick={closeModal}>{save}</Button>
        </Modal.Footer>
      </Modal>
    </fieldset>
  );
};

export default TagsModal;
