import type {ButtonHTMLAttributes, PropsWithChildren} from 'react';

type CustomProps = {
  variant?: 'accent' | 'regular' | 'ghost';
  size?: 'small' | 'medium' | 'large';
};

export type ButtonProps = CustomProps & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;
