import type {Undefinable} from '@shared/lib/utilityTypes';
import type {FC, PropsWithChildren} from 'react';

type PropsWithoutClose<T> = Omit<T, 'close'>;
type Close<Result> = (result?: Result) => void;
type CloseProp<Result> = {close: Close<Result>};
type ModalComponent<Props, Result> = FC<Props & CloseProp<Result>>;

type ModalItem<Props, Result> = {
  id: number;
  content: ModalComponent<Props, Result>;
  modalProps: Props;
};

type ModalList = ModalItem<any, any>[];

type OpenModal = <Props, Result>(
  content: ModalComponent<Props, Result>,
  props?: PropsWithoutClose<Props>,
) => Promise<Undefinable<Result>>;

type ModalContextParams = {
  openModal: OpenModal;
};

type ModalProviderProps = PropsWithChildren;

export type {
  CloseProp,
  PropsWithoutClose,
  ModalComponent,
  ModalList,
  ModalContextParams,
  ModalProviderProps,
  OpenModal,
  ModalItem,
  Close,
};
