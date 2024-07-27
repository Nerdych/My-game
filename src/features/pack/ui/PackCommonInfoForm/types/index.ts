import type {PropsWithChildren} from 'react';
import type {Tag, TagCategory} from '@entities/tag';
import type {CloseProp} from '@shared/providers/modal';
import type {ModalProps} from '@shared/ui-kit/Modal';
import type {SelectProps} from '@shared/ui-kit/Select';

type Difficulty = 'hard' | 'medium' | 'easy';
type DifficultyOption = {id: string | number; text: string; value: Difficulty};
type DifficultyOptions = Array<DifficultyOption>;
type DifficultySelectProps = Omit<SelectProps, 'options' | 'placeholder'>;

type HeaderProps = {};

type PackCommonInfoProps = PropsWithChildren;

type TagsModalResult = Tag[];
type TagsModalProps = ModalProps & CloseProp<TagsModalResult>;

type DefaultTagsProps = {
  defaultCategoriesWithTags: TagCategory[];
};

export type {
  DifficultyOptions,
  DifficultySelectProps,
  HeaderProps,
  PackCommonInfoProps,
  TagsModalProps,
  DefaultTagsProps,
};
