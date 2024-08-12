import {Select} from '@shared/ui-kit/Select';
import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {FC, useMemo} from 'react';
import {ContextTarget} from '@features/pack/ui/ContextMenu/ui/ContextTarget';
import styles from '../styles/RoundForm.module.scss';
import type {RoundFormProps, RoundTypeOptions} from '../types';

const RoundForm: FC<RoundFormProps> = (props) => {
  const {categories, name, difficulty} = props;
  const {t} = useTranslation('features/pack/round-form');

  const options: RoundTypeOptions = useMemo(
    () => [
      {id: 'default', text: t('default', {defaultValue: 'Default'}), value: 'default'},
      {id: 'final', text: t('final', {defaultValue: 'Final'}), value: 'final'},
    ],
    [t]
  );

  return (
    <ContextTarget>
      <fieldset className={styles.root}>
        <TextField defaultValue={name} placeholder={t('roundName', {defaultValue: 'Round name'})} />
        <Select size="l" options={options} defaultValue={difficulty} />
      </fieldset>
    </ContextTarget>
  );
};

export {RoundForm};
