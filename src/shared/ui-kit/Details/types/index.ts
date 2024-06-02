import type {HTMLProps, PropsWithChildren, ReactNode} from 'react';

type CustomProps = {
  header: ReactNode;
  summaryClassName?: string;
  contentClassName?: string;
};

type HTMLNativeProps = HTMLProps<HTMLDetailsElement>;

export type DetailsProps = CustomProps & PropsWithChildren & HTMLNativeProps;
