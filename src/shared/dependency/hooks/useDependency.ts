import {useContext, useMemo} from 'react';
import {DependencyConfigContext} from '../dependencyConfigContext/context';
import {DependencyContainer} from '../container/DependencyContainer';

type UseDependencyParams = [];

const useDependency = (params: UseDependencyParams) => {
  const dependenciesConfig = useContext(DependencyConfigContext);

  const {get} = useMemo(() => new DependencyContainer(dependenciesConfig), [dependenciesConfig]);

  return params.map((dependency) => get(dependency));
};

export {useDependency};
