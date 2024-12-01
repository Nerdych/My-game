import {useDispatch} from 'react-redux';
import {reduxStoreActionsMap} from '../stores/redux';
import type {RunAction, UseAction} from '../types';

const useReduxAction: UseAction = () => {
  const dispatch = useDispatch();

  const runAction: RunAction = (store, action, params) => {
    const actionFn = reduxStoreActionsMap[store][action] as Function;
    return dispatch(actionFn(params));
  };

  return {runAction};
};

export {useReduxAction};
