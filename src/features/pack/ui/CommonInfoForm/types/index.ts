import type {Tag} from '@entities/tag';
import type {PropsWithChildren} from 'react';
import type {SelectProps, Option} from '@shared/ui-kit/Select';

type Difficulty = 'hard' | 'medium' | 'easy';
type DifficultyOption = Option<Difficulty>;
type DifficultyOptions = Array<DifficultyOption>;
type DifficultySelectProps = Omit<SelectProps, 'options' | 'placeholder'>;

type HeaderProps = {};

type CommonInfoProps = PropsWithChildren;

type TagListProps = {
  tags: Tag[];
};

export type {DifficultyOptions, DifficultySelectProps, HeaderProps, CommonInfoProps, TagListProps};
