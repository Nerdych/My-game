import {Select} from '@shared/ui-kit/Select';
import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {useMemo} from 'react';
import {WrapperContext} from '@features/pack/ui/ContextMenu/ui/WrapperContext';
import styles from '../styles/RoundForm.module.scss';
import type {RoundTypeOptions} from '../types';

const RoundForm = () => {
  const {t} = useTranslation('features/pack/round-form');

  const options: RoundTypeOptions = useMemo(
    () => [
      {id: 'default', text: t('default', {defaultValue: 'Default'}), value: 'default'},
      {id: 'final', text: t('final', {defaultValue: 'Final'}), value: 'final'},
    ],
    [t],
  );

  return (
    <WrapperContext>
      <fieldset className={styles.root}>
        <TextField placeholder={t('roundName', {defaultValue: 'Round name'})} />
        <Select size="l" options={options} />
      </fieldset>
    </WrapperContext>
  );
};

export {RoundForm};
