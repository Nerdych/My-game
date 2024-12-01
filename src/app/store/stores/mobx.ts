import {packStore} from '@entities/pack';
import {roundStore} from '@entities/round';
import {deleteSubstrFromProperties} from '@shared/lib/utils/deleteSubstrFromProperties';
import type {StoreActions} from '../types';

const mobxStore = deleteSubstrFromProperties(
  {
    packStore,
    roundStore,
  },
  'Store',
);

const mobxStoreActionsMap: StoreActions = mobxStore;

export {mobxStore, mobxStoreActionsMap};
