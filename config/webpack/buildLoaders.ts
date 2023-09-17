import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';
import type { RuleSetRule } from 'webpack';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
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
    use: ['@svgr/webpack'],
  };

  return [typescriptLoader, scssLoader, svgLoader];
};
