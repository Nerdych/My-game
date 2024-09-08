import {createContext, useMemo} from 'react';
import type {StoreContextValue, UseStore} from '../types';
import type {FC, ReactNode} from 'react';

const StoreContext = createContext<StoreContextValue | null>(null);

type Props = {
  children: ReactNode;
  useStore: UseStore;
};

const UseStoreProvider: FC<Props> = (props) => {
  const {children, useStore} = props;

  const contextValue: StoreContextValue = useMemo(() => ({useStore}), [useStore]);

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export {UseStoreProvider, StoreContext};
