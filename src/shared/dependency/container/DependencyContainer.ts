import {createError} from '@shared/lib/utils/createError';

type Strategy = 'singleton' | 'everyNew';
type AbstractConstuctor<Args = any, Result = unknown> = abstract new (args: Args) => Result;
type DefaultConstructor<Args = any, Result = unknown> = new (args: Args) => Result;
type Constructor<Args = any, Result = unknown> = DefaultConstructor<Args, Result> | AbstractConstuctor<Args, Result>;
type Factory<Args = unknown, Result = unknown> = (
  get: DependencyContainer['get'],
) => InstanceType<Constructor<Args, Result>>;

type DependenciesConfig = Array<{
  constructor: Constructor;
  factory: Factory;
  strategy: Strategy;
}>;

type DependencyMapElement<Args = unknown, Result = unknown> = {
  factory: Factory<Args, Result>;
  strategy: Strategy;
  instance: InstanceType<Constructor<Args, Result>> | null;
};

const isDependencyExist = <Args, Result>(
  dependencyConfig?: DependencyMapElement,
): dependencyConfig is DependencyMapElement<Args, Result> => {
  return Boolean(dependencyConfig);
};

class DependencyContainer {
  private dependencyMap: Map<Constructor, DependencyMapElement> = new Map();

  constructor(dependenciesConfig: DependenciesConfig) {
    const prepareConfigForMap: Array<[Constructor, DependencyMapElement]> = dependenciesConfig.map(
      ({constructor, factory, strategy}) => [constructor, {factory, strategy, instance: null}],
    );

    this.dependencyMap = new Map(prepareConfigForMap);
    this.get = this.get.bind(this);
  }

  public get<Args, Result>(constructor: Constructor<Args, Result>): InstanceType<Constructor<Args, Result>> {
    const dependencyConfig = this.dependencyMap.get(constructor);

    if (!isDependencyExist<Args, Result>(dependencyConfig)) {
      return createError('DependencyContainer', 'dependency is not include in config');
    }

    if (dependencyConfig.strategy === 'singleton' && dependencyConfig.instance) {
      return dependencyConfig.instance;
    }

    const instance = dependencyConfig.factory(this.get);
    this.dependencyMap.set(constructor, {...dependencyConfig, instance});
    return instance;
  }
}

export type {DependenciesConfig};
export {DependencyContainer};
