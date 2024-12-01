import {Provider} from 'mobx-react';
import {mobxStore} from '../stores/mobx';
import {useMobxStore} from '../hooks/useMobxStore';
import {useMobxAction} from '../hooks/useMobxAction';
import {UseStoreProvider} from './UseStoreProvider';
import type {FC, PropsWithChildren} from 'react';

type MobXStoreProviderProps = PropsWithChildren;

const MobXStoreProvider: FC<MobXStoreProviderProps> = (props) => {
  const {children} = props;

  return (
    <Provider store={mobxStore}>
      <UseStoreProvider useAction={useMobxAction} useStore={useMobxStore}>
        {children}
      </UseStoreProvider>
    </Provider>
  );
};

export default MobXStoreProvider;
