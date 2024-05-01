import {useTranslation} from 'react-i18next';
import styles from './index.module.scss';
import Svg from './lol.svg';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {color: string; label: string};

const Button = ({children, color, label}: Props) => {
  const {t, i18n} = useTranslation('main');
  return (
    <button type="button" className={styles.a}>
      <span style={{color}}>{label}</span>
      {children}
      {t('greeting', {defaultValue: 'what?'})}
      <Svg />
    </button>
  );
};

export default Button;
