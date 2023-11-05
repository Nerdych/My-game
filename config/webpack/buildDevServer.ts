import type {BuildOptions} from './types';
import type {Configuration} from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): Configuration => {
  const {port, host} = options;

  return {
    port,
    host,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
};
