import type {InputHTMLAttributes} from 'react';

type CustomProps = {
  text: string;
  variant?: 'accent' | 'regular' | 'ghost';
};

type HTMLNativeProps = InputHTMLAttributes<HTMLInputElement>;

type CheckboxButtonProps = CustomProps & HTMLNativeProps;

export type {CheckboxButtonProps};
