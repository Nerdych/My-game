import {DefinePlugin} from 'webpack';
import type {BuildOptions} from '../types';

type Params = Pick<BuildOptions, 'isDev'>;

export const buildDefinePlugin = (params: Params) => {
  const {isDev} = params;

  return new DefinePlugin({
    __IS_DEV__: isDev,
  });
};
