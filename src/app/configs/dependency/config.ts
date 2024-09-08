import {FetchApiService, HttpService} from '@shared/api';
import {LocalStorage, PropertyLocalStorage} from '@shared/lib/classes/localStorage';
import type {ILocalStorage} from '@app/configs/types/localStorage';
import type {DependenciesConfig} from '@shared/dependency';

export const clientDependenciesConfig = [
  {
    constructor: HttpService,
    factory: () => new FetchApiService(),
    strategy: 'singleton',
  },
  {
    constructor: LocalStorage,
    factory: () => new PropertyLocalStorage<ILocalStorage>(),
    strategy: 'singleton',
  },
] satisfies DependenciesConfig;
