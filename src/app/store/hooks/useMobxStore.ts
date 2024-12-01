import {asserts} from '@shared/lib/asserts';
import {MobXProviderContext} from 'mobx-react';
import {useContext} from 'react';
import type {RootStore, UseStore} from '../types';

type MobXProviderContextValue = {
  store: RootStore;
};

const useMobxStore: UseStore = (getPartialStore) => {
  const {store} = useContext(MobXProviderContext) as MobXProviderContextValue;

  asserts.defined(store);

  return getPartialStore(store);
};

export {useMobxStore};
