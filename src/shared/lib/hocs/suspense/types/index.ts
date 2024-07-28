import type {FC, ReactElement} from 'react';

type WithSuspenseHoc = <Props>(Element: ReactElement<Props>) => FC<Props>;

export type {WithSuspenseHoc};
