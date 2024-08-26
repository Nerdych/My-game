import {useContext} from 'react';
import {asserts} from '@shared/lib/asserts';
import {ModalContext} from '../container/ModalContext';

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  asserts.defined(modalContext);

  return modalContext;
};
