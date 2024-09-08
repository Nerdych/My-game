import {useContext} from 'react';
import {DependencyContext} from '../dependencyContext/context';
import type {Constructor} from '../container/DependencyContainer';

type InstanceTurple<Dependencies extends Constructor[]> = {
  [ClassConstructor in keyof Dependencies]: InstanceType<Dependencies[ClassConstructor]>;
};

const useDependency = <Dependencies extends Constructor[]>(params: Dependencies): InstanceTurple<Dependencies> => {
  const {get} = useContext(DependencyContext);
  return params.map(get) as InstanceTurple<Dependencies>;
};

export {useDependency};
