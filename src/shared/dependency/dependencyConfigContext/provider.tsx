import {type FC, type PropsWithChildren} from 'react';
import {DependencyConfigContext} from './context';
import type {DependenciesConfig} from '../container/DependencyContainer';

type DependecyConfigProviderProps = PropsWithChildren & {dependencyConfig: DependenciesConfig};

const DependecyConfigProvider: FC<DependecyConfigProviderProps> = (props) => {
  const {children, dependencyConfig} = props;

  return <DependencyConfigContext.Provider value={dependencyConfig}>{children}</DependencyConfigContext.Provider>;
};

export {DependecyConfigProvider};
