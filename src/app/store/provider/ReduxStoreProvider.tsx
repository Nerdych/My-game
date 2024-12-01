import {Provider} from 'react-redux';
import {reduxStore} from '../stores/redux';
import {useReduxStore} from '../hooks/useReduxStore';
import {useReduxAction} from '../hooks/useReduxAction';
import {UseStoreProvider} from './UseStoreProvider';
import type {FC} from 'react';
import type {ReduxStoreProviderProps} from '../types';

const ReduxStoreProvider: FC<ReduxStoreProviderProps> = (props) => {
  const {children} = props;

  return (
    <Provider store={reduxStore}>
      <UseStoreProvider useAction={useReduxAction} useStore={useReduxStore}>
        {children}
      </UseStoreProvider>
    </Provider>
  );
};

export default ReduxStoreProvider;
