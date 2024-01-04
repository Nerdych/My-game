import {useTranslation} from 'react-i18next';
import {helper} from '../helpers';
import Button from '../Buttons';
import styles from './styles.module.scss';

import type {FC, PropsWithChildren} from 'react';

import './configs/i18n/config';

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
      <button type="button" className={styles.kukusha} onClick={changeLanguage}>
        {children}
        <Button />
      </button>
    </div>
  );
};
