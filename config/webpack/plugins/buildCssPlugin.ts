import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {removeNameIfNeeded} from '../helpers/removeNameIfNeeded';
import type {BuildOptions} from '../types';

type Params = Pick<BuildOptions, 'isDev'>;

export const buildCssPlugin = (params: Params) => {
  const {isDev} = params;
  const CSS_FILENAME = removeNameIfNeeded({string: '[name].[contenthash:8].css', isDev});

  return new MiniCssExtractPlugin({
    filename: CSS_FILENAME,
    chunkFilename: CSS_FILENAME,
  });
};
