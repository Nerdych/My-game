import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { WebpackPluginInstance } from 'webpack';
import type { BuildOptions } from './types';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { paths } = options;
  const { html } = paths;

  const htmlPrepare = new HtmlWebpackPlugin({
    patterns: [
      {
        template: html,
      },
    ],
  });

  const cssPrepare = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  return [htmlPrepare, cssPrepare];
};
