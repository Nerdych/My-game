import {useContext} from 'react';
import {asserts} from '@shared/lib/asserts';
import {StoreContext} from '../provider/UseStoreProvider';
import type {StoreContextValue} from '../types';

export const useStore: StoreContextValue['useStore'] = (params) => {
  const useStoreContext = useContext(StoreContext);

  asserts.defined(useStoreContext);

  return useStoreContext.useStore(params);
};
