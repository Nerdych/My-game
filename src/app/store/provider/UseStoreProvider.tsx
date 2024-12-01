import {createContext, useMemo} from 'react';
import type {UseAction, StoreContextValue, UseStore} from '../types';
import type {FC, ReactNode} from 'react';

const StoreContext = createContext<StoreContextValue | null>(null);

type Props = {
  children: ReactNode;
  useStore: UseStore;
  useAction: UseAction;
};

const UseStoreProvider: FC<Props> = (props) => {
  const {children, useStore, useAction} = props;
  const contextValue: StoreContextValue = useMemo(() => ({useStore, useAction}), [useStore, useAction]);

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export {UseStoreProvider, StoreContext};
