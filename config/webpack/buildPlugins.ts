import {buildHtmlPlugin} from './plugins/buildHtmlPlugin';
import {buildCssPlugin} from './plugins/buildCssPlugin';
import {buildProgressPlugin} from './plugins/buildProgressPlugin';
import {buildDefinePlugin} from './plugins/buildDefinePlugin';
import {buildBundleAnalyzerPlugin} from './plugins/buildBundleAnalyzerPlugin';
import {buildCopyPlugin} from './plugins/buildCopyPlugin';
import type {BuildOptions} from './types';
import type {WebpackPluginInstance} from 'webpack';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const {isDev} = options;
  const plugins = [buildHtmlPlugin(options), buildCssPlugin(options), buildDefinePlugin(options), buildProgressPlugin(), buildCopyPlugin()];

  if (isDev) {
    plugins.push(buildBundleAnalyzerPlugin(options));
  }

  return plugins;
};
