import {UseStoreProvider} from './UseStoreProvider';
import type {FC, PropsWithChildren} from 'react';

type MobXStoreProviderProps = PropsWithChildren;

const MobXStoreProvider: FC<MobXStoreProviderProps> = (props) => {
  const {children} = props;

  return <UseStoreProvider useStore={() => {}}>{children}</UseStoreProvider>;
};

export default MobXStoreProvider;
