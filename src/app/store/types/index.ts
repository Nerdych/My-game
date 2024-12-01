import type {PackActions, PackActionsParams} from '@entities/pack/types';
import type {RoundState} from '@entities/round';
import type {Reducer} from '@reduxjs/toolkit';
import type {PackState} from '@entities/pack';
import type {PropsWithChildren} from 'react';
import type {RoundActions, RoundActionsParams} from '@entities/round/types';

type RootStore = {
  pack: PackState;
  round: RoundState;
};

type StoreActions = {
  pack: PackActions;
  round: RoundActions;
};

type ParametersActions = {
  pack: PackActionsParams;
  round: RoundActionsParams;
};

type RunAction = <Store extends keyof StoreActions, Action extends keyof StoreActions[Store]>(
  store: Store,
  action: Action,
  params: Action extends keyof ParametersActions[Store] ? ParametersActions[Store][Action] : never,
) => ReturnType<StoreActions[Store][Action] extends (...args: any[]) => unknown ? StoreActions[Store][Action] : never>;

type UseStore = <StorePart>(selector: (store: RootStore) => StorePart) => StorePart;
type UseAction = () => {
  runAction: RunAction;
};

type StoreProviderProps = PropsWithChildren;
type StoreContextValue = {
  useStore: UseStore;
  useAction: UseAction;
};

type ReduxStoreProviderProps = PropsWithChildren;
type ReduxStore = {
  [Key in keyof RootStore as `${string & Key}Reducer`]: Reducer<RootStore[Key]>;
};

type MobXStoreProviderProps = PropsWithChildren;
type MobXStore = {
  [Key in keyof RootStore as `${string & Key}Store`]: RootStore[Key];
};

export type {
  RootStore,
  StoreProviderProps,
  ReduxStoreProviderProps,
  MobXStoreProviderProps,
  StoreContextValue,
  UseStore,
  ReduxStore,
  MobXStore,
  UseAction,
  RunAction,
  StoreActions,
};
