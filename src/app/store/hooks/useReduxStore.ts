import {useSelector} from 'react-redux';
import type {RootStore} from '../types';
import type {TypedUseSelectorHook} from 'react-redux';

export const useReduxStore: TypedUseSelectorHook<RootStore> = useSelector;
