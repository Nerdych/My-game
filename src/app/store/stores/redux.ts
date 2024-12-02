import {configureStore} from '@reduxjs/toolkit';
import roundSlice from '@entities/round/store/slice';
import packSlice from '@entities/pack/store/slice';
import type {ReducersMapObject} from '@reduxjs/toolkit';
import type {StoreActions} from '../types';

const reduxSlices = [packSlice, roundSlice];
const reduxStoreActionsMap = reduxSlices.reduce((acc, slice) => ({...acc, [slice.name]: slice.actions}), {} as StoreActions);
const reduxReducers = reduxSlices.reduce((acc, slice) => ({...acc, [slice.name]: slice.reducer}), {} as ReducersMapObject);

const reduxStore = configureStore({
  reducer: reduxReducers,
});

export {reduxStore, reduxStoreActionsMap};
