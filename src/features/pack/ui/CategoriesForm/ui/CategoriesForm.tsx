import {Details} from '@shared/ui-kit/Details';
import styles from '../styles/CategoriesForm.module.scss';
import {CategoryForm} from './CategoryForm';
import type {CategoriesFormProps} from '../types';
import type {FC} from 'react';

const CategoriesForm: FC<CategoriesFormProps> = (props) => {
  const {categoryIds} = props;
  const categories = {};

  const categoriesJSX = categoryIds
    .map((categoryId) => {
      const category = categories[categoryId];

      if (!category) {
        return null;
      }

      return (
        <Details open key={category.name} className={styles.category} header={<CategoryForm {...category} />}>
          Content of {category.name}
        </Details>
      );
    })
    .filter(Boolean);

  return categoriesJSX;
};

export {CategoriesForm};
