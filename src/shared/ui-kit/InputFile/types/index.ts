import type {HTMLProps} from 'react';

type CustomProps = {
  fileName?: string;
  previewUrl?: string;
};

type HTMLNativeProps = HTMLProps<HTMLInputElement>;

export type InputFileProps = HTMLNativeProps & CustomProps;
