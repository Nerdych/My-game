import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {ContextTarget} from '@features/pack/ui/ContextMenu/ui/ContextTarget';
import cn from 'classnames';
import styles from '../styles/CategoryForm.module.scss';
import type {FC} from 'react';
import type {CategoryFormProps} from '../types';

const CategoryForm: FC<CategoryFormProps> = (props) => {
  const {name, className} = props;
  const {t} = useTranslation('features/pack/category-form');

  return (
    <ContextTarget>
      <fieldset className={cn(styles.root, className)}>
        <TextField defaultValue={name} placeholder={t('categoryName', {defaultValue: 'Category name'})} />
      </fieldset>
    </ContextTarget>
  );
};

export {CategoryForm};
