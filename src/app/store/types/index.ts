import type {TypedUseSelectorHook} from 'react-redux';
import type {PropsWithChildren} from 'react';
import type {store} from '../config';

type ReduxStoreProviderProps = PropsWithChildren;

type StoreProviderProps = PropsWithChildren;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type UseStore = <StorePart>(selector: (store: RootState) => StorePart) => StorePart;

type StoreContextValue = {
  useStore: UseStore;
};

export type {RootState, AppDispatch, StoreProviderProps, ReduxStoreProviderProps, StoreContextValue, UseStore};
