import {useSyncExternalStore} from 'react';
import {LocalStorage} from '@shared/lib/classes/localStorage';
import {useDependency} from '@shared/dependency';

const useLocalStorage = () => {
  const [localStorage] = useDependency([LocalStorage]);
  const {setValue, deleteValue, clear, subscribe, getSnapshot, getValue} = localStorage;

  useSyncExternalStore(subscribe, getSnapshot);

  return {getValue, setValue, deleteValue, clear};
};

export {useLocalStorage};
