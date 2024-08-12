import {FC} from 'react';
import {CategoriesFormProps} from '../types';
import {CategoryForm} from './CategoryForm';
import {Details} from '@shared/ui-kit/Details';
import styles from '../styles/CategoriesForm.module.scss';

const CategoriesForm: FC<CategoriesFormProps> = (props) => {
  const {categories} = props;

  const categoriesJSX = categories.map((category) => (
    <Details open className={styles.category} header={<CategoryForm {...category} />}>
      Content of {category.name}
    </Details>
  ));

  return categoriesJSX;
};

export {CategoriesForm};
