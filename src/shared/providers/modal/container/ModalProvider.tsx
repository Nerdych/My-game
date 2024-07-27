import {createElement, Suspense, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useStableCallback} from '@shared/hooks/useStableCallback/useStableCallback';
import {ModalContext} from './ModalContext';
import type {Undefinable} from '@shared/utilityTypes';
import type {Close, ModalComponent, ModalItem, ModalList, ModalProviderProps, OpenModal} from '../types';

const modalContainer = document.body;

const ModalProvider = (props: ModalProviderProps) => {
  const {children} = props;
  const [modalList, setModalList] = useState<ModalList>([]);
  const countModalsRef = useRef(0);

  const openModal: OpenModal = useStableCallback(
    <Props, Result>(content: ModalComponent<Props, Result>, modalProps: Props) =>
      new Promise<Undefinable<Result>>((resolve) => {
        const id = countModalsRef.current;
        countModalsRef.current += 1;

        const close: Close<Result> = (result) => {
          resolve(result);
          setModalList((prev) => prev.filter((modalItem) => modalItem.id !== id));
        };

        const modal: ModalItem<Props, Result> = {
          id,
          content,
          modalProps,
          close,
        };

        setModalList((prev) => [...prev, modal]);
      })
  );

  const renderPortal = <Props, Result>(modalItem: ModalItem<Props, Result>) => {
    const {content, close, modalProps} = modalItem;
    // TODO: Разобраться с Suspense
    const modal = <Suspense>{createElement(content, {close, ...modalProps})}</Suspense>;

    return createPortal(modal, modalContainer);
  };

  const providerValue = useMemo(
    () => ({
      openModal,
    }),
    [openModal]
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
      {modalList.map(renderPortal)}
    </ModalContext.Provider>
  );
};

export {ModalProvider};
