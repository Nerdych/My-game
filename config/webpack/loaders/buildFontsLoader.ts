import {removeNameIfNeeded} from '../helpers/removeNameIfNeeded';
import type {BuildOptions} from '../types';

type Params = Pick<BuildOptions, 'isDev'>;

export const buildFontsLoader = (params: Params) => {
  const {isDev} = params;
  const OUTPUT_ASSET_FILENAME = removeNameIfNeeded({string: 'assets/[name].[contenthash:8][ext][query]', isDev});

  return {
    test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: OUTPUT_ASSET_FILENAME,
    },
  };
};
