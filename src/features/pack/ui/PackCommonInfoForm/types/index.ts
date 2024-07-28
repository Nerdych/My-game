import type {PropsWithChildren} from 'react';
import type {SelectProps} from '@shared/ui-kit/Select';

type Difficulty = 'hard' | 'medium' | 'easy';
type DifficultyOption = {id: string | number; text: string; value: Difficulty};
type DifficultyOptions = Array<DifficultyOption>;
type DifficultySelectProps = Omit<SelectProps, 'options' | 'placeholder'>;

type HeaderProps = {};

type PackCommonInfoProps = PropsWithChildren;

export type {DifficultyOptions, DifficultySelectProps, HeaderProps, PackCommonInfoProps};
