import type {HTMLProps} from 'react';

type CommonProps = {
  variant?: 'default' | 'ghost';
  bold?: boolean;
};

type TextFieldWithLabelCustomProps = {
  label?: string;
} & CommonProps;

type HTMLNativeProps = HTMLProps<HTMLInputElement>;

export type TextFieldWithLabelProps = HTMLNativeProps & TextFieldWithLabelCustomProps;
export type TextFieldWithoutLabelProps = HTMLNativeProps & CommonProps;

export type TextFieldProps = TextFieldWithLabelProps & TextFieldWithoutLabelProps;

export type TextFieldWithLabelRequiredProps = HTMLNativeProps & Required<TextFieldWithLabelCustomProps>;
export type TextFieldWithoutLabelRequiredProps = HTMLNativeProps & Required<CommonProps>;
