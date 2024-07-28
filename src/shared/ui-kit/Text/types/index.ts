import type {HTMLProps, PropsWithChildren} from 'react';

type CustomProps = {
  as?: 'div' | 'span' | 'p';
  size?: 'small' | 'medium' | 'large';
  weight?: 'bold' | 'normal';
};

type HTMLNativeProps = HTMLProps<HTMLParagraphElement>;

type TextProps = PropsWithChildren & HTMLNativeProps & CustomProps;

export type {TextProps};
