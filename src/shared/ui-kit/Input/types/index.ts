import type {HTMLProps} from 'react';

type InputComponentCustomProps = {
  label?: string;
};

export type InputNativeProps = HTMLProps<HTMLInputElement>;
export type InputComponentProps = InputNativeProps & InputComponentCustomProps;
