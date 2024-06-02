import {Select} from '@shared/ui-kit/Select';
import {useTranslation} from 'react-i18next';
import type {DifficultyOptions, DifficultySelectProps} from '../types';

function DifficultySelect(props: DifficultySelectProps) {
  const {t} = useTranslation('features/difficulty-select');

  const options: DifficultyOptions = [
    {id: 'hard', text: t('hard', {defaultValue: 'Hard'}), value: 'hard'},
    {id: 'medium', text: t('medium', {defaultValue: 'Medium'}), value: 'medium'},
    {id: 'easy', text: t('easy', {defaultValue: 'Easy'}), value: 'easy'},
  ];

  return <Select {...props} placeholder={t('difficulty', {defaultValue: 'Pack difficulty'})} options={options} />;
}

export {DifficultySelect};
