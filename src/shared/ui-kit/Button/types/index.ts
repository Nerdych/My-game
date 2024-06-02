import type {ButtonHTMLAttributes, PropsWithChildren} from 'react';

type CustomProps = {
  variant?: 'accent' | 'regular' | 'ghost';
  size?: 'small' | 'medium' | 'large';
};

type HTMLNativeProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = CustomProps & PropsWithChildren & HTMLNativeProps;
