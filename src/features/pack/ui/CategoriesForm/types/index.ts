import {Category} from '@entities/category';

type CategoriesFormProps = {
  categories: Category[];
};

type CustomProps = {className?: string};

type CategoryFormProps = Category & CustomProps;

export {CategoriesFormProps, CategoryFormProps};
