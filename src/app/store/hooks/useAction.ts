import {useContext} from 'react';
import {asserts} from '@shared/lib/asserts';
import {StoreContext} from '../provider/UseStoreProvider';
import type {UseAction} from '../types';

export const useAction = (): ReturnType<UseAction> => {
  const useStoreContext = useContext(StoreContext);

  asserts.defined(useStoreContext);

  return useStoreContext!.useAction();
};
