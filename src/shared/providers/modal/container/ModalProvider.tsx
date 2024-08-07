import {createElement, Suspense, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useStableCallback} from '@shared/lib/hooks/useStableCallback';
import {ModalContext} from './ModalContext';
import type {Undefinable} from '@shared/lib/utilityTypes';
import type {
  Close,
  CloseProp,
  ModalComponent,
  ModalItem,
  ModalList,
  ModalProviderProps,
  PropsWithoutClose,
} from '../types';

const modalContainer = document.body;

const ModalProvider = (props: ModalProviderProps) => {
  const {children} = props;
  const [modalList, setModalList] = useState<ModalList>([]);
  const countModalsRef = useRef(0);

  const openModal = useStableCallback(
    <Props, Result>(content: ModalComponent<Props, Result>, modalPropsWithoutClose?: PropsWithoutClose<Props>) =>
      new Promise<Undefinable<Result>>((resolve) => {
        const id = countModalsRef.current;
        countModalsRef.current += 1;

        const close: Close<Result> = (result) => {
          resolve(result);
          setModalList((prev) => prev.filter((modalItem) => modalItem.id !== id));
        };

        const modalProps = {
          ...modalPropsWithoutClose,
          close,
        } as Props;

        const modal: ModalItem<Props, Result> = {
          id,
          content,
          modalProps,
        };

        setModalList((prev) => [...prev, modal]);
      }),
  );

  const renderPortal = <Result, Props extends CloseProp<Result>>(modalItem: ModalItem<Props, Result>) => {
    const {content, modalProps} = modalItem;
    const modal = <Suspense>{createElement(content, modalProps)}</Suspense>;

    return createPortal(modal, modalContainer);
  };

  const providerValue = useMemo(
    () => ({
      openModal,
    }),
    [openModal],
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
      {modalList.map(renderPortal)}
    </ModalContext.Provider>
  );
};

export {ModalProvider};
