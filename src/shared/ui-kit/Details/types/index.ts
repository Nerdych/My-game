import type {HTMLProps, PropsWithChildren, ReactNode} from 'react';

type CustomProps = {
  header: ReactNode;
  summaryClassName?: string;
  contentClassName?: string;
};

export type DetailsProps = CustomProps & PropsWithChildren & HTMLProps<HTMLDetailsElement>;
