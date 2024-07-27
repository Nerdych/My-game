import {Select} from '@shared/ui-kit/Select';
import {useTranslation} from 'react-i18next';
import type {DifficultyOptions, DifficultySelectProps} from '../types';

const DifficultySelect = (props: DifficultySelectProps) => {
  const {t} = useTranslation('features/pack/difficulty-select');

  const options: DifficultyOptions = [
    {id: 'easy', text: t('easy', {defaultValue: 'Easy'}), value: 'easy'},
    {id: 'medium', text: t('medium', {defaultValue: 'Medium'}), value: 'medium'},
    {id: 'hard', text: t('hard', {defaultValue: 'Hard'}), value: 'hard'},
  ];

  return <Select {...props} placeholder={t('difficulty', {defaultValue: 'Pack difficulty'})} options={options} />;
};

export {DifficultySelect};
