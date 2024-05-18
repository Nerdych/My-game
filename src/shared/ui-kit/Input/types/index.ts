import type {HTMLProps} from 'react';

type CommonProps = {
  variant?: 'default' | 'ghost';
  bold?: boolean;
};

type InputWithLabelCustomProps = {
  label?: string;
} & CommonProps;

export type InputWithLabelProps = HTMLProps<HTMLInputElement> & InputWithLabelCustomProps;
export type InputWithoutLabelProps = HTMLProps<HTMLInputElement> & CommonProps;

export type InputProps = InputWithLabelProps & InputWithoutLabelProps;

export type InputWithLabelRequiredProps = HTMLProps<HTMLInputElement> & Required<InputWithLabelCustomProps>;
export type InputWithoutLabelRequiredProps = HTMLProps<HTMLInputElement> & Required<CommonProps>;
