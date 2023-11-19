import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type {BuildOptions} from './types';
import type {RuleSetRule} from 'webpack';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options;

  const babelLoader = {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  };

  const CSS_CLASSNAME = isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]';

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: CSS_CLASSNAME,
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: '@svgr/webpack',
  };

  return [babelLoader, scssLoader, svgLoader];
};
