import {buildHtmlPlugin} from './plugins/buildHtmlPlugin';
import {buildCssPlugin} from './plugins/buildCssPlugin';
import {buildProgressPlugin} from './plugins/buildProgressPlugin';
import {buildDefinePlugin} from './plugins/buildDefinePlugin';
import {buildBundleAnalyzerPlugin} from './plugins/buildBundleAnalyzerPlugin';
import type {BuildOptions} from './types';
import type {WebpackPluginInstance} from 'webpack';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const {paths, isDev, bundleAnalyzerPort, host} = options;
  const {html} = paths;

  const plugins = [
    buildHtmlPlugin({template: html}),
    buildCssPlugin({isDev}),
    buildDefinePlugin({isDev}),
    buildProgressPlugin(),
  ];

  if (isDev) {
    plugins.push(buildBundleAnalyzerPlugin({bundleAnalyzerPort, host}));
  }

  return plugins;
};
