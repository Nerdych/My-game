import {DefinePlugin} from 'webpack';
import type {BuildOptions} from '../types';

export const buildDefinePlugin = (params: BuildOptions) => {
  const {isDev} = params;

  return new DefinePlugin({
    __IS_DEV__: isDev,
  });
};
