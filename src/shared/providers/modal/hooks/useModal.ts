import {useContext} from 'react';
import {asserts} from '@shared/lib/asserts';
import {ModalContext} from '../container/ModalContext';

export const useModal = () => {
  const modalContextParams = useContext(ModalContext);

  asserts.defined(modalContextParams);

  return modalContextParams;
};
