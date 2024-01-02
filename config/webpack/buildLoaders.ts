import {buildBabelLoader} from './loaders/buildBabelLoader';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';
import type {BuildOptions} from './types';
import type {RuleSetRule} from 'webpack';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options;

  const babelLoader = buildBabelLoader();
  const cssLoader = buildCssLoader({isDev});
  const svgLoader = buildSvgLoader();

  return [babelLoader, cssLoader, svgLoader];
};
