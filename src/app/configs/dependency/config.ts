import {FetchApiService, HttpService} from '@shared/api';
import {BaseLocalStorage, LocalStorage} from '@shared/lib/classes/localStorage';
import type {DependenciesConfig} from '@shared/dependency';

export const clientDependenciesConfig: DependenciesConfig = [
  {
    constructor: HttpService,
    factory: () => new FetchApiService(),
    strategy: 'singleton',
  },
  {
    constructor: LocalStorage,
    factory: () => new BaseLocalStorage(),
    strategy: 'singleton',
  },
];
