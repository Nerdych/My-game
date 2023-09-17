import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { replaceNameIfNeeded } from './helpers/replaceNameIfNeeded';
import type { WebpackPluginInstance } from 'webpack';
import type { BuildOptions } from './types';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { paths, isDev, bundleAnalyzerPort, host } = options;
  const { html } = paths;

  const CSS_FILENAME = replaceNameIfNeeded('css/[name].[contenthash:8].css', isDev);

  const plugins = [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: CSS_FILENAME,
      chunkFilename: CSS_FILENAME,
    }),
    new ProgressPlugin(),
  ];

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerHost: host,
        bundleAnalyzerPort,
      })
    );
  }

  return plugins;
};