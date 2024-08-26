import type {ICategory} from '@entities/category';

type CategoriesFormProps = {
  categoryIds: number[];
};

type CategoryFormProps = ICategory & {className?: string};

export type {CategoriesFormProps, CategoryFormProps};
