import type {HTMLProps} from 'react';

type Option = {
  id: string | number;
  text: string;
  value: string | number;
};

type CustomProps = {
  options: Array<Option>;
  size?: 's' | 'l';
  variant?: 'default' | 'ghost';
  label?: string;
};

type HTMLNativeProps = Omit<HTMLProps<HTMLSelectElement>, 'size'>;

export type SelectProps = HTMLNativeProps & CustomProps;
