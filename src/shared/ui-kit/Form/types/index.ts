import type {HTMLProps, PropsWithChildren} from 'react';

type NativeProps = HTMLProps<HTMLFormElement>;

type FormProps = NativeProps & PropsWithChildren;

export type {FormProps};
