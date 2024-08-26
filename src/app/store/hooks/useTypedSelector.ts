import {useSelector} from 'react-redux';
import type {RootState} from '../types';
import type {TypedUseSelectorHook} from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
