import {Provider} from 'react-redux';
import {store} from '../config';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {UseStoreProvider} from './UseStoreProvider';
import type {FC} from 'react';
import type {ReduxStoreProviderProps} from '../types';

const ReduxStoreProvider: FC<ReduxStoreProviderProps> = (props) => {
  const {children} = props;

  return (
    <Provider store={store}>
      <UseStoreProvider useStore={useTypedSelector}>{children}</UseStoreProvider>
    </Provider>
  );
};

export default ReduxStoreProvider;
