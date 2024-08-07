import type {CloseProp} from '@shared/providers/modal';
import type {FC, PropsWithChildren, ReactNode} from 'react';

type ModalProps<T> = PropsWithChildren &
  CloseProp<T> & {
    className?: string;
  };

type HeaderProps = PropsWithChildren & {
  className?: string;
};

type BodyProps = PropsWithChildren & {
  className?: string;
};

type FooterProps = PropsWithChildren & {
  className?: string;
};

type ModalComponent = {
  <T>(props: ModalProps<T>): ReactNode;
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Footer: FC<FooterProps>;
};

export type {ModalProps, ModalComponent, HeaderProps, BodyProps, FooterProps};
