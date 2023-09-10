import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import type { Configuration } from 'webpack';
import type { BuildOptions } from './types';

export const buildConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;
  const { entry, build } = paths;

  const resolvers = buildResolvers();
  const loaders = buildLoaders(options);
  const plugins = buildPlugins(options);

  const OUTPUT_FILENAME = '[name].[contenthash:8].js';

  return {
    entry,
    mode,
    plugins,
    resolve: resolvers,
    module: {
      rules: loaders,
    },
    output: {
      path: build,
      filename: OUTPUT_FILENAME,
      clean: true,
    },
  };
};
