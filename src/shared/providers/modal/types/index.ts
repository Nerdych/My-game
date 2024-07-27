import type {Undefinable} from '@shared/utilityTypes';
import type {FC, PropsWithChildren} from 'react';

type Close<Result> = (result?: Undefinable<Result>) => void;
type CloseProp<Result> = {close: Close<Result>};
type ModalComponent<Props, Result> = FC<Props & CloseProp<Result>>;

type ModalItem<Props, Result> = {
  id: number;
  content: ModalComponent<Props, Result>;
  modalProps: Props;
  close: Close<Result>;
};

type ModalList = ModalItem<any, any>[];

type OpenModal = <Props, Result>(content: ModalComponent<Props, Result>, props?: Props) => Promise<Undefinable<Result>>;

type ModalContextParams = {
  openModal: OpenModal;
};

type ModalProviderProps = PropsWithChildren;

export type {CloseProp, ModalComponent, ModalList, ModalContextParams, ModalProviderProps};
