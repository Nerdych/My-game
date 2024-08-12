import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {ContextTarget} from '@features/pack/ui/ContextMenu/ui/ContextTarget';
import styles from '../styles/CategoryForm.module.scss';
import type {CategoryFormProps} from '../types';
import cn from 'classnames';

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
