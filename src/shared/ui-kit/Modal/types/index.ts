import type {CloseProp} from '@shared/providers/modal';
import type {FC, PropsWithChildren} from 'react';

type ModalProps = PropsWithChildren &
  CloseProp<unknown> & {
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

type ModalComponent = FC<ModalProps> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Footer: FC<FooterProps>;
};

export type {ModalProps, ModalComponent, HeaderProps, BodyProps, FooterProps};
