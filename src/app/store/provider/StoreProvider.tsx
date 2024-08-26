import {createContext, useMemo} from 'react';
import {useTypedSelector} from '@app/store';
import type {StoreContextValue} from '../types';
import type {FC, ReactNode} from 'react';

const StoreContext = createContext<StoreContextValue | null>(null);

type Props = {
  children: ReactNode;
};

const StoreProvider: FC<Props> = (props) => {
  const {children} = props;

  const contextValue: StoreContextValue = useMemo(() => ({useStore: useTypedSelector}), []);

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export {StoreProvider, StoreContext};
