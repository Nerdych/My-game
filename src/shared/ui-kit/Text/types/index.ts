import type {HTMLProps, PropsWithChildren} from 'react';

type CustomProps = {
  as?: 'div' | 'span' | 'p';
  size?: 's' | 'm' | 'l';
  weight?: 'bold' | 'normal';
};

type HTMLNativeProps = HTMLProps<HTMLParagraphElement>;

type TextProps = PropsWithChildren & Omit<HTMLNativeProps, 'size'> & CustomProps;

export type {TextProps};
