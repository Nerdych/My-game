import type {HTMLProps} from 'react';

type Option = {
  id: string | number;
  text: string;
  value: string | number;
};

type CustomProps = {
  options: Array<Option>;
  variant?: 'default' | 'ghost';
  label?: string;
};

export type SelectProps = HTMLProps<HTMLSelectElement> & CustomProps;
