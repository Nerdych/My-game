import {DefinePlugin} from 'webpack';
import type {BuildOptions} from '../types';

interface Params extends Pick<BuildOptions, 'isDev'> {}

export const buildDefinePlugin = (params: Params) => {
  const {isDev} = params;

  return new DefinePlugin({
    __IS_DEV__: isDev,
  });
};
