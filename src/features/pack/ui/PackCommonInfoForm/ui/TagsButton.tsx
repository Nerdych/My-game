import {useTranslation} from 'react-i18next';
import {useModal} from '@shared/providers/modal/hooks/useModal';
import {Button} from '@shared/ui-kit/Button';
import {TagsModal} from '@features/pack/ui/TagsModal';

const TagsButton = (props) => {
  ///
  const {setTags} = props;
  ///

  const {t} = useTranslation('features/pack/tags-button');
  const {openModal} = useModal();

  const openTagsModal = async () => {
    const result = await openModal(TagsModal);
    setTags(result);
  };

  return (
    <Button size="large" variant="ghost" onClick={openTagsModal}>
      {t('tags', {defaultValue: 'Tags'})}
    </Button>
  );
};

export {TagsButton};
