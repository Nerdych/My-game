import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { replaceNameIfNeeded } from './helpers/replaceNameIfNeeded';
import type { BuildOptions, Configuration } from './types';

export const buildConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;
  const { entry, build } = paths;

  const resolvers = buildResolvers();
  const loaders = buildLoaders(options);
  const plugins = buildPlugins(options);
  const devServer = isDev ? buildDevServer(options) : undefined;
  const devtool = isDev ? 'inline-source-map' : 'hidden-source-map';

  const OUTPUT_FILENAME = replaceNameIfNeeded('[name].[contenthash:8].js', isDev);

  return {
    entry,
    mode,
    devtool,
    devServer,
    plugins,
    resolve: resolvers,
    module: {
      rules: loaders,
    },
    output: {
      path: build,
      filename: OUTPUT_FILENAME,
      chunkFilename: OUTPUT_FILENAME,
      clean: true,
    },
  };
};
