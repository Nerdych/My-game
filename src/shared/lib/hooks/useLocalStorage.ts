import {useSyncExternalStore} from 'react';
import {useDependency} from '@shared/dependency/hooks/useDependency';
import {LocalStorage} from '@shared/lib/classes/localStorage';

type LocalStorageValue = Record<string, string>;

const useLocalStorage = () => {
  const [localStorage] = useDependency([LocalStorage]);
  const {setValue, deleteValue, clear, subscribe, getSnapshot} = localStorage;
  const localStorageValue = useSyncExternalStore<LocalStorageValue>(subscribe, getSnapshot);

  return {localStorageValue, setValue, deleteValue, clear};
};

export {useLocalStorage};
