import {useLocalStorage} from '@shared/lib/hooks/useLocalStorage';
import {lazy, Suspense, type FC, type PropsWithChildren} from 'react';

type StoreProviderProps = PropsWithChildren;

const MobXStoreProvider = lazy(() => import('./MobXStoreProvider'));
const ReduxStoreProvider = lazy(() => import('./ReduxStoreProvider'));

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {children} = props;

  const {getValue} = useLocalStorage();
  const store = getValue('store');

  if (store === 'mobx') {
    return (
      <Suspense fallback={<>loading...</>}>
        <MobXStoreProvider>{children}</MobXStoreProvider>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<>loading...</>}>
      <ReduxStoreProvider>{children}</ReduxStoreProvider>
    </Suspense>
  );
};

export {StoreProvider};
