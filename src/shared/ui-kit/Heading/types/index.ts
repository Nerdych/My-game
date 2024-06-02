import type {HTMLProps, PropsWithChildren} from 'react';

type CustomProps = {
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'bold' | 'normal';
};

type HTMLNativeProps = HTMLProps<HTMLHeadingElement>;

export type HeadingProps = CustomProps & PropsWithChildren & HTMLNativeProps;
