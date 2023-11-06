import {createRoot} from 'react-dom/client';
import {useTranslation} from 'react-i18next';
import {helper} from './helpers';
import type {FC, PropsWithChildren} from 'react';
import './configs/i18n';

type Props = PropsWithChildren;

export const App: FC<Props> = ({children}) => {
  const {t, i18n} = useTranslation('main');
  helper();
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <div>
      {t('greeting')}
      <button type="button" onClick={changeLanguage}>
        {children}
      </button>
    </div>
  );
};

const rootNode = document.getElementById('root') as HTMLElement;
const root = createRoot(rootNode);

root.render(<App />);
