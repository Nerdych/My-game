import {mobxStoreActionsMap} from '../stores/mobx';
import type {RunAction, UseAction} from '../types';

const useMobxAction: UseAction = () => {
  const runAction: RunAction = (store, action, params) => {
    const actionFn = mobxStoreActionsMap[store][action] as Function;
    return actionFn(params);
  };

  return {runAction};
};

export {useMobxAction};
