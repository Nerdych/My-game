import type {Undefinable} from '@shared/lib/utilityTypes';
import type {FC, PropsWithChildren} from 'react';

type Close<Result> = (result?: Result) => void;
type CloseProp<Result> = {close: Close<Result>};
type ModalComponent<Result, Props extends CloseProp<Result>> = FC<Props>;

type ModalItem<Result, Props extends CloseProp<Result>> = {
  id: number;
  content: ModalComponent<Result, Props>;
  modalProps: Props;
};

type ModalList = ModalItem<any, any>[];

type OpenModal = <Result, Props extends CloseProp<Result>>(
  content: ModalComponent<Result, Props>,
  props?: Omit<Props, 'close'>,
) => Promise<Undefinable<Result>>;

type ModalContextParams = {
  openModal: OpenModal;
};

type ModalProviderProps = PropsWithChildren;

export type {CloseProp, ModalComponent, ModalList, ModalContextParams, ModalProviderProps, OpenModal, ModalItem, Close};
