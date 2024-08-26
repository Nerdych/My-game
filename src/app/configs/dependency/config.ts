import {FetchApiService, HttpService} from '@shared/api';
import type {DependenciesConfig} from '@shared/dependency';

export const clientDependenciesConfig: DependenciesConfig = [
  {
    constructor: HttpService,
    factory: () => new FetchApiService(),
    strategy: 'singleton',
  },
];
