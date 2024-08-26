import type {IPack} from '@entities/pack';
import type {ITag} from '@entities/tag';
import type {PropsWithChildren} from 'react';
import type {SelectProps, Option} from '@shared/ui-kit/Select';

type Difficulty = IPack['difficulty'];
type DifficultyOption = Option<Difficulty>;
type DifficultyOptions = Array<DifficultyOption>;
type DifficultySelectProps = Omit<SelectProps, 'options' | 'placeholder'>;

type CommonInfoProps = PropsWithChildren;

type TagListProps = {
  tags: ITag[];
};

export type {DifficultyOptions, DifficultySelectProps, CommonInfoProps, TagListProps};
