import type {PropsWithChildren} from 'react';
import type {SelectProps} from '@shared/ui-kit/Select';

type Difficulty = 'hard' | 'medium' | 'easy';
type DifficultyOption = {id: string | number; text: string; value: Difficulty};
export type DifficultyOptions = Array<DifficultyOption>;

export type DifficultySelectProps = Omit<SelectProps, 'options' | 'placeholder'>;

export type HeaderProps = {};

export type PackCommonInfoProps = {} & PropsWithChildren;
