import {ContextMenu} from '@features/pack/ui/ContextMenu';
import {Heading} from '@shared/ui-kit/Heading';
import {PackForm} from '@widgets/pack/PackForm';
import {useTranslation} from 'react-i18next';

const MainPage = () => {
  const {t} = useTranslation('main-page');

  return (
    <main>
      <Heading as="h1" weight="bold">
        {t('createPackTitle', {defaultValue: 'Create pack'})}
      </Heading>

      <PackForm />
      <ContextMenu />
    </main>
  );
};

export default MainPage;
