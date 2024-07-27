import {createContext} from 'react';
import type {ModalContextParams} from '../types';

const defaultValue: ModalContextParams = {
  openModal: (): never => {
    throw new Error('[ModalContext] Open modal function not implement');
  },
};

export const ModalContext = createContext(defaultValue);
