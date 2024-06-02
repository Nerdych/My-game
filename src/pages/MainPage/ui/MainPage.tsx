import {Heading} from '@shared/ui-kit/Heading';
import {PackCommonInfoCreate} from '@widgets/PackCommonInfoCreate';
import {useTranslation} from 'react-i18next';

function MainPage() {
  const {t} = useTranslation('main-page');

  return (
    <main>
      <Heading as="h1" weight="bold">
        {t('createPackTitle', {defaultValue: 'Create pack'})}
      </Heading>

      <PackCommonInfoCreate />
    </main>
  );
}

export default MainPage;
