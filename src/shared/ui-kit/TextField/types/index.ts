import type {HTMLProps} from 'react';

type CustomProps = {
  variant?: 'default' | 'ghost';
  bold?: boolean;
};

type HTMLNativeProps = HTMLProps<HTMLInputElement>;
type TextFieldWithLabelCustomProps = {
  label?: string;
} & CustomProps;

export type TextFieldWithLabelProps = HTMLNativeProps & TextFieldWithLabelCustomProps;
export type TextFieldWithoutLabelProps = HTMLNativeProps & CustomProps;

export type TextFieldProps = TextFieldWithLabelProps & TextFieldWithoutLabelProps;

export type TextFieldWithLabelRequiredProps = HTMLNativeProps & Required<TextFieldWithLabelCustomProps>;
export type TextFieldWithoutLabelRequiredProps = HTMLNativeProps & Required<CustomProps>;
