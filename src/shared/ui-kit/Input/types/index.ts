import type {HTMLProps} from 'react';

type CustomProps = {
  label?: string;
  variant?: 'default' | 'ghost';
  bold?: boolean;
};

export type InputProps = HTMLProps<HTMLInputElement> & CustomProps;
export type InputRequiredProps = HTMLProps<HTMLInputElement> & Required<CustomProps>;
