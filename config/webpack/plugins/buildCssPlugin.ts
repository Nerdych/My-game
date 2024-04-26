import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {removeNameIfNeeded} from '../helpers/removeNameIfNeeded';
import type {BuildOptions} from '../types';

export const buildCssPlugin = (params: BuildOptions) => {
  const {isDev} = params;
  const CSS_FILENAME = removeNameIfNeeded({string: 'css/[name].[contenthash:8].css', isDev});

  return new MiniCssExtractPlugin({
    filename: CSS_FILENAME,
    chunkFilename: CSS_FILENAME,
  });
};
