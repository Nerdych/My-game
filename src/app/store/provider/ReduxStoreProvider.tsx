import {Provider} from 'react-redux';
import {store} from '../config';
import {StoreProvider} from './StoreProvider';
import type {FC} from 'react';
import type {ReduxStoreProviderProps} from '../types';

const ReduxStoreProvider: FC<ReduxStoreProviderProps> = (props) => {
  const {children} = props;

  return (
    <Provider store={store}>
      <StoreProvider>{children}</StoreProvider>
    </Provider>
  );
};

export {ReduxStoreProvider};
