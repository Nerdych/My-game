import {packStore} from '@entities/pack/store/class';
import {roundStore} from '@entities/round/store/class';
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
