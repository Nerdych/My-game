import {useMemo, type FC, type PropsWithChildren} from 'react';
import {DependencyContainer, type DependenciesConfig} from '../container/DependencyContainer';
import {DependencyContext} from './context';

type DependecyProviderProps = PropsWithChildren & {dependencyConfig: DependenciesConfig};

const DependecyProvider: FC<DependecyProviderProps> = (props) => {
  const {children, dependencyConfig} = props;

  const dependencyContainer = useMemo(() => new DependencyContainer(dependencyConfig), [dependencyConfig]);

  return <DependencyContext.Provider value={dependencyContainer}>{children}</DependencyContext.Provider>;
};

export {DependecyProvider};
