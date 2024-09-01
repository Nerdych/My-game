import {createContext} from 'react';
import type {DependenciesConfig} from '../container/DependencyContainer';

const defaultParams: DependenciesConfig = [];
const DependencyConfigContext = createContext(defaultParams);

export {DependencyConfigContext};
