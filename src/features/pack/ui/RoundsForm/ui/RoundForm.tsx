import {Select} from '@shared/ui-kit/Select';
import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {useMemo} from 'react';
import {ContextTarget} from '@features/pack/ui/ContextMenu/ui/ContextTarget';
import {withSuspense} from '@shared/lib/hocs/suspense';
import styles from '../styles/RoundForm.module.scss';
import type {FC} from 'react';
import type {RoundFormProps, RoundTypeOptions} from '../types';

const RoundFormComponent: FC<RoundFormProps> = (props) => {
  const {name, type} = props;
  const {t} = useTranslation('features/pack/round-form');

  const options: RoundTypeOptions = useMemo(
    () => [
      {id: 'default', text: t('default', {defaultValue: 'Default'}), value: 'default'},
      {id: 'final', text: t('final', {defaultValue: 'Final'}), value: 'final'},
    ],
    [t],
  );

  return (
    <ContextTarget>
      <fieldset className={styles.root}>
        <TextField defaultValue={name} placeholder={t('roundName', {defaultValue: 'Round name'})} />
        <Select size="l" options={options} defaultValue={type} />
      </fieldset>
    </ContextTarget>
  );
};

const RoundForm = withSuspense(RoundFormComponent);

export {RoundForm};
