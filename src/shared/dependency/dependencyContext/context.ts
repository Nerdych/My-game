import {createContext} from 'react';
import {DependencyContainer} from '../container/DependencyContainer';

const defaultParams: InstanceType<typeof DependencyContainer> = new DependencyContainer([]);
const DependencyContext = createContext(defaultParams);

export {DependencyContext};
