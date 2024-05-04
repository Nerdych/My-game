import {buildBabelLoader} from './loaders/buildBabelLoader';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';
import {buildFontsLoader} from './plugins/buildFontsLoader';
import type {BuildOptions} from './types';
import type {RuleSetRule} from 'webpack';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const babelLoader = buildBabelLoader();
  const cssLoader = buildCssLoader(options);
  const svgLoader = buildSvgLoader();
  const fontsLoader = buildFontsLoader();

  return [babelLoader, cssLoader, svgLoader, fontsLoader];
};
