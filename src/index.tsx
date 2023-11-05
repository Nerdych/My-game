import {createRoot} from 'react-dom/client';
import {useTranslation} from 'react-i18next';

import {helper} from './helpers';
import './configs/i18n';

import type {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren;

const App: FC<Props> = () => {
  const {t, i18n} = useTranslation('main');
  helper();
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <div>
      {t('greeting')}
      <button type="button" onClick={changeLanguage}>
        switch
      </button>
    </div>
  );
};

const rootNode = document.getElementById('root') as HTMLElement;
const root = createRoot(rootNode);

root.render(<App />);
