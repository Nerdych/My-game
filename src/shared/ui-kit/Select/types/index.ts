import type {HTMLProps} from 'react';

type Option<T = string | number> = {
  id: string | number;
  text: string;
  value: T;
};

type CustomProps = {
  options: Array<Option>;
  size?: 's' | 'l';
  variant?: 'default' | 'ghost';
  label?: string;
};

type HTMLNativeProps = Omit<HTMLProps<HTMLSelectElement>, 'size'>;

type SelectProps = HTMLNativeProps & CustomProps;

export type {Option, SelectProps};
