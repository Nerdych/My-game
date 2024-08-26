import {createContext} from 'react';
import {createError} from '@shared/lib/utils/createError';
import type {ModalContextParams} from '../types';

const defaultValue: ModalContextParams = {
  openModal: (): never => {
    return createError('ModalContext', 'open modal function not implement');
  },
};

export const ModalContext = createContext(defaultValue);
